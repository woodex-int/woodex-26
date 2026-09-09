"use client";

import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

// Consultation scheduler.
//
// When NEXT_PUBLIC_CAL_LINK is set (a Cal.com / Calendly booking link), the
// calendar is embedded inline. When it is not set — local dev, sandbox, or
// before Phase 0 credentials are supplied — a clear fallback routes the
// visitor to the brief form and WhatsApp instead, so the conversion path
// never silently breaks.
export default function Scheduler() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  if (calLink) {
    const embedUrl = calLink.includes("?") ? `${calLink}&embed=1` : `${calLink}?embed=1`;
    return (
      <div className="rounded-2xl border border-navy/10 bg-white p-2 shadow-sm">
        <iframe
          src={embedUrl}
          title="Book a consultation"
          className="h-[640px] w-full rounded-xl"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy/10 bg-cream p-6 md:p-8">
      <p className="eyebrow mb-3">Online scheduling</p>
      <h3 className="text-xl font-bold text-navy">Booking opens here shortly.</h3>
      <p className="mt-2 text-sm text-navy/70">
        The live calendar is being connected. For now, send the brief below or start on
        WhatsApp — a designer will confirm a slot with you.
      </p>
      <a
        href={waLink("Hello Woodex Interior, I would like to book a consultation.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa mt-5"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Book on WhatsApp
      </a>
    </div>
  );
}
