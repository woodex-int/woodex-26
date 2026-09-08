import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "woodex-web",
    time: new Date().toISOString(),
  });
}
