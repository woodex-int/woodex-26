import { z } from "zod";

// Lead intake + delivery.
//
// Server-side only. Validates payloads with Zod, applies a honeypot + an
// in-memory rate limit (best-effort on serverless; swap for Upstash behind
// the same interface when Redis is available), then delivers the lead:
//
//   1. Email via Resend   (RESEND_API_KEY / RESEND_FROM / RESEND_TO)
//   2. CRM webhook        (CRM_WEBHOOK_URL)
//
// When neither is configured (local dev / sandbox), the lead is written to
// the server log so nothing is silently dropped. No lead is ever stored in
// the app itself — delivery is external, per FULLSTACK_MASTER_PLAN §9.
//
// The WhatsApp template (lib/whatsapp.ts) remains the always-on fallback path
// the visitor can use directly, independent of this layer.

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const briefSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  phone: z.string().trim().min(6, "A valid phone or WhatsApp number is required").max(40),
  email: z.string().trim().max(200).optional(),
  city: z.string().trim().min(1, "City is required").max(80),
  service: z.string().trim().min(1, "Required service is required").max(120),
  stage: z.string().trim().max(120).optional(),
  area: z.string().trim().max(80).optional(),
  budget: z.string().trim().max(80).optional(),
  preferred: z.string().trim().max(80).optional(),
  message: z.string().trim().max(4000).optional(),
  company: z.string().optional(), // honeypot
});

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().min(1, "Email is required").max(200),
  phone: z.string().trim().min(6, "A valid phone number is required").max(40),
  message: z.string().trim().min(1, "Message is required").max(4000),
  company: z.string().optional(), // honeypot
});

export const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().max(200).optional(),
  phone: z.string().trim().min(6, "A valid phone or WhatsApp number is required").max(40),
  city: z.string().trim().min(1, "City is required").max(80),
  service: z.string().trim().max(120).optional(),
  preferredDate: z.string().trim().max(120).optional(),
  preferredTime: z.string().trim().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
  company: z.string().optional(), // honeypot
});

type Parsed<T> = { ok: true; data: T } | { ok: false; error: string };

function parseLead<T>(schema: z.ZodType<T>, body: unknown): Parsed<T> {
  const result = schema.safeParse(body);
  if (!result.success) {
    const first = result.error.issues[0];
    return { ok: false, error: first?.message ?? "Invalid input" };
  }
  const data = result.data as T & { email?: string };
  if (typeof data.email === "string" && data.email && !emailPattern.test(data.email)) {
    return { ok: false, error: "Invalid email." };
  }
  return { ok: true, data };
}

export function parseBrief(body: unknown) {
  return parseLead(briefSchema, body);
}
export function parseContact(body: unknown) {
  return parseLead(contactSchema, body);
}
export function parseConsultation(body: unknown) {
  return parseLead(consultationSchema, body);
}

// In-memory rate limiter: sliding window per IP. Best-effort on serverless —
// replace with Upstash Ratelimit when Redis credentials are supplied.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 10_000) {
    // Light sweep so the map cannot grow unbounded on a long-lived server.
    for (const [key, value] of hits) if (value.resetAt <= now) hits.delete(key);
  }
  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= MAX_PER_WINDOW;
}

export function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

type DeliveryStatus = "sent" | "skipped" | "error";

export type DeliveryReport = { email: DeliveryStatus; crm: DeliveryStatus };

function formatLeadText(formType: string, data: Record<string, unknown>): string {
  const lines = Object.entries(data)
    .filter(([key]) => key !== "company")
    .map(([key, value]) => `${key}: ${value === "" || value == null ? "—" : String(value)}`);
  return [`New Woodex lead — ${formType}`, "".padEnd(0), ...lines, "", "Submitted " + new Date().toISOString()].join("\n");
}

export async function deliverLead(
  formType: string,
  data: Record<string, unknown>,
  meta: { source?: string | null; ip?: string } = {},
): Promise<DeliveryReport> {
  const report: DeliveryReport = { email: "skipped", crm: "skipped" };
  const name = typeof data.name === "string" ? data.name : "Unknown";
  const text = formatLeadText(formType, { ...data, source: meta.source ?? undefined, ip: meta.ip ?? undefined });
  const subject = `[Woodex] New ${formType} lead — ${name}`;

  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  const resendTo = process.env.RESEND_TO;

  if (resendKey && resendFrom && resendTo) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [resendTo],
          reply_to: typeof data.email === "string" && data.email ? data.email : undefined,
          subject,
          text,
        }),
        signal: AbortSignal.timeout(8_000),
      });
      report.email = res.ok ? "sent" : "error";
    } catch {
      report.email = "error";
    }
  }

  const crmUrl = process.env.CRM_WEBHOOK_URL;
  if (crmUrl) {
    try {
      const res = await fetch(crmUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType,
          submittedAt: new Date().toISOString(),
          source: meta.source ?? null,
          ...data,
        }),
        signal: AbortSignal.timeout(8_000),
      });
      report.crm = res.ok ? "sent" : "error";
    } catch {
      report.crm = "error";
    }
  }

  if (report.email === "skipped" && report.crm === "skipped") {
    console.log(`[lead:${formType}] no delivery configured → ${JSON.stringify({ ...data, source: meta.source ?? null, submittedAt: new Date().toISOString() })}`);
  } else if (report.email === "error" || report.crm === "error") {
    console.error(`[lead:${formType}] delivery error`, report);
  }

  return report;
}
