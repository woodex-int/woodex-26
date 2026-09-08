import { NextResponse } from "next/server";
import { parseBrief, rateLimit, clientIp, deliverLead } from "@/lib/lead";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Acknowledge silently.
  const raw = body as Record<string, unknown> | null;
  if (raw && typeof raw.company === "string" && raw.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = parseBrief(body);
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

  const report = await deliverLead("project-brief", parsed.data, {
    source: request.headers.get("referer"),
    ip,
  });

  return NextResponse.json({ ok: true, delivered: report });
}
