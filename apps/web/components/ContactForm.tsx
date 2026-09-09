"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="c3-form" onSubmit={onSubmit} noValidate>
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

      <div className="c3-field">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Full name*"
          required
          autoComplete="name"
        />
      </div>
      <div className="c3-field">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address*"
          required
          autoComplete="email"
        />
      </div>
      <div className="c3-field">
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone number*"
          required
          autoComplete="tel"
        />
      </div>
      <div className="c3-field">
        <textarea id="message" name="message" placeholder="Your message" required />
      </div>

      <div className="c3-submit">
        <button
          type="submit"
          className="btn-roll"
          disabled={status === "submitting"}
        >
          <span className="btn-label">
            <span>{status === "submitting" ? "Sending…" : "Send message"}</span>
            <span>{status === "submitting" ? "Sending…" : "Send message"}</span>
          </span>
          <span className="btn-icon">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
        </button>
      </div>

      <p className={status === "ok" ? "form-note ok" : "form-note"}>
        {status === "ok"
          ? "Thank you — your message is in. A studio lead will reply within one working day."
          : status === "error"
            ? "Something went wrong. Please try again or reach us on WhatsApp."
            : ""}
      </p>
    </form>
  );
}
