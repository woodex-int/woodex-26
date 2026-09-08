import { NextResponse } from "next/server";

// Simple contact-form intake (contact page). Same discipline as /api/brief:
// honeypot + validation; email/CRM delivery lands when env vars are set.

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const required = [body.name, body.email, body.phone, body.message];
  if (required.some((v) => !v || !String(v).trim())) {
    return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email ?? "")) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 422 });
  }

  // TODO (Phase 4): send lead via Resend + CRM webhook.

  return NextResponse.json({ ok: true });
}
