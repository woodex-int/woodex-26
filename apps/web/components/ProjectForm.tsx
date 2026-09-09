"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

const serviceOptions = [
  "Interior Design",
  "Architecture",
  "Fit-Out",
  "Turnkey Execution",
  "Renovation",
  "Custom Furniture and Joinery",
  "Drawings and BOQ",
  "3D Studio",
];

const stageOptions = [
  "Empty space",
  "Floor plan",
  "Existing design",
  "Renovation of existing space",
  "Not sure yet",
];

const budgetOptions = [
  "Under PKR 2M",
  "PKR 2M – 5M",
  "PKR 5M – 15M",
  "PKR 15M+",
  "Prefer to discuss",
];

const field =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-wood";
const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/60";

export default function ProjectForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    setStatus("submitting");
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-navy/10 bg-cream p-8">
        <p className="eyebrow mb-3">Received</p>
        <h3 className="text-2xl font-bold text-navy">Thank you — your brief is in.</h3>
        <p className="mt-3 text-navy/75">
          A designer will come back to you within one working day. Prefer to talk now?
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa mt-6"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        placeholder="Company"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name *</label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone / WhatsApp *</label>
          <input id="phone" name="phone" required className={field} placeholder="+92 ..." />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="city" className={label}>City *</label>
          <input id="city" name="city" required className={field} placeholder="Lahore" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={label}>Required service *</label>
          <select id="service" name="service" required className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="stage" className={label}>Current stage</label>
          <select id="stage" name="stage" className={field} defaultValue="">
            <option value="" disabled>Where are you in the project?</option>
            {stageOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="area" className={label}>Approximate area</label>
          <input id="area" name="area" className={field} placeholder="e.g. 1,200 sq ft" />
        </div>
        <div>
          <label htmlFor="budget" className={label}>Budget band (optional)</label>
          <select id="budget" name="budget" className={field} defaultValue="">
            <option value="" disabled>Select a band</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="preferred" className={label}>Preferred start</label>
          <input id="preferred" name="preferred" className={field} placeholder="e.g. next month" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Tell us about the space, the goal and what matters most."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-navy/70">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[#b8956a]"
        />
        <span>
          I agree to Woodex contacting me about my project. Details are used only to
          respond — see the privacy policy.
        </span>
      </label>

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send project brief"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again, or reach us on WhatsApp directly.
        </p>
      )}
    </form>
  );
}
