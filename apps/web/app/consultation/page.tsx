import type { Metadata } from "next";
import { site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProjectForm from "@/components/ProjectForm";
import CTA from "@/components/CTA";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a project consultation with Woodex Interior — discuss your space, the route and the next step. WhatsApp is available as an alternative.",
  alternates: { canonical: "/consultation" },
};

const covers = [
  "Your space, your requirements and your route",
  "Which service fits — design, 3D, documentation or execution",
  "Budget bands, scope and next steps",
];

const prepare = [
  "What the space is today and what it needs to become",
  "Any drawings, plans or references you already have",
  "Your approximate area, timeline and budget band (if known)",
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Plan the next step."
        intro="A scheduled conversation with a designer — about your space, your requirements and the route that fits."
        image="/images/hero-1.jpg"
      />

      {/* What it covers */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">What it covers</p>
            <h2 className="display text-3xl md:text-4xl">A conversation, not a sales call.</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={80}>
              <ul className="space-y-3 text-navy/80">
                {covers.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-wood" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl border border-navy/10 bg-cream p-6">
                <p className="eyebrow mb-3">What to prepare</p>
                <ul className="space-y-2 text-sm text-navy/80">
                  {prepare.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Scheduling + form */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Schedule</p>
            <h2 className="display mb-6 text-3xl md:text-4xl">Pick a time, or send the brief.</h2>
            <p className="mb-6 text-navy/75">
              Scheduling is handled through a booking tool. Open the scheduler to choose a
              time, or send the brief below and we'll confirm a slot with you.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Scheduler embed (Cal.com / Calendly) is connected in Phase 0.
                  Until then, the form and WhatsApp are the booking routes. */}
              <CTA href="#brief" variant="primary">
                Send the brief below
              </CTA>
              <CTA href={waLink()} variant="wa" external>
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp instead
              </CTA>
            </div>
            <p className="mt-6 text-sm text-navy/60">
              Prefer not to schedule? Start on WhatsApp — a designer will respond within one
              working day.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 md:p-8">
              <p className="eyebrow mb-4">Qualify the request</p>
              <h3 className="mb-6 text-xl font-bold text-navy">Tell us what you need.</h3>
              <ProjectForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
