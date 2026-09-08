import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/content/sectors";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Woodex Interior works across residential, office, retail, hospitality and restaurant/café interiors — one design-to-execution process for every sector.",
  alternates: { canonical: "/sectors" },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Sectors — Woodex Interior",
  description:
    "Residential, offices, retail, hospitality and restaurants & cafés — Woodex Interior.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Built across the spaces you use."
        intro="Residential, offices, retail, hospitality and restaurants & cafés — one process, adapted to how each space is used."
        image="/images/hero-2.jpg"
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <Link
                href={`/sectors/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-colors hover:border-wood/60"
              >
                <div className="media-zoom aspect-[16/9] overflow-hidden bg-navy-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={`${s.name} interior`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-navy group-hover:text-navy-600">
                    {s.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">{s.intro}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-wood">
                    Explore
                    <ArrowRightIcon className="arrow h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        image="/images/project-concrete.jpg"
        title="Select your sector."
        subtitle="Tell us the space and the sector — a designer maps the route, on a call or on WhatsApp."
      />

      <JsonLd data={collectionSchema} />
    </>
  );
}
