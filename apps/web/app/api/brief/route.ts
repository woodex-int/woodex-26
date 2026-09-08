import { NextResponse } from "next/server";

// Lead intake endpoint. Currently validates and acknowledges; email/CRM wiring
// (Resend + HubSpot/Zoho/Pipedrive) is enabled when the env vars are present.
// See docs/FULLSTACK_MASTER_PLAN.md §9.

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  stage?: string;
  area?: string;
  budget?: string;
  preferred?: string;
  message?: string;
  company?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Acknowledge silently.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation.
  const required = [body.name, body.phone, body.city, body.service];
  if (required.some((v) => !v || !String(v).trim())) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, city and service are required." },
      { status: 422 },
    );
  }
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 422 });
  }

  // TODO (Phase 4): send lead via Resend + CRM webhook using server env vars.

  return NextResponse.json({ ok: true });
}
