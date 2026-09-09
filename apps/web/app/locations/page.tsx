import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/content/locations";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Woodex Interior studios in Lahore (Gulberg III), Karachi (Clifton) and Islamabad (F-7) — serving projects across Pakistan from three studios.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Three studios. One process."
        intro="Lahore, Karachi and Islamabad — with projects served across Pakistan from the Woodex studios."
        image="/images/project-facade.jpg"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal key={l.slug} delay={i * 80}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-colors hover:border-wood/60"
              >
                <p className="eyebrow mb-3 !text-[9px]">Studio</p>
                <h2 className="text-xl font-bold text-navy group-hover:text-navy-600">
                  {l.city}
                </h2>
                <p className="mt-2 flex items-start gap-2 text-sm text-navy/70">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-wood" />
                  {l.studio}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-wood">
                  Visit page
                  <ArrowRightIcon className="arrow h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-sm text-navy/60">
            Nationwide — projects beyond the studio cities are served from {site.studios.join(", ")}.
            Desk: {site.address} · {site.hours}.
          </p>
        </Reveal>
      </Section>

      <CTASection
        image="/images/project-facade.jpg"
        title="Find your studio."
        subtitle="Book a consultation or start on WhatsApp — a designer from the nearest studio responds."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Locations — Woodex Interior",
        }}
      />
    </>
  );
}
