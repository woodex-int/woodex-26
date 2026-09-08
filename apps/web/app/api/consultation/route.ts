import { NextResponse } from "next/server";
import { parseConsultation, rateLimit, clientIp, deliverLead } from "@/lib/lead";

// Booking-intent fallback: used when the Cal.com scheduler is not configured
// or the visitor prefers to request a slot directly. Feeds the same lead
// delivery pipeline as /api/brief and /api/contact.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const raw = body as Record<string, unknown> | null;
  if (raw && typeof raw.company === "string" && raw.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = parseConsultation(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 422 });
  }

  const ip = clientIp(request);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const report = await deliverLead("consultation-request", parsed.data, {
    source: request.headers.get("referer"),
    ip,
  });

  return NextResponse.json({ ok: true, delivered: report });
}
