import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/lib/content/locations";
import { getService } from "@/lib/content/services";
import { getProject } from "@/lib/content/projects";
import { site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { ProjectCard } from "@/components/cards";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { MapPinIcon, ClockIcon, WhatsAppIcon } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: `Interior Design & Fit-Out in ${loc.city}`,
    description: `Woodex Interior studio in ${loc.studio}. Interior design, fit-out, turnkey execution and 3D visualization — served from ${loc.city}.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: { images: [{ url: loc.image }] },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const services = loc.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const projects = loc.projects
    .map((p) => getProject(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — ${loc.city}`,
    url: `${site.domain}/locations/${loc.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressCountry: "PK",
    },
    telephone: site.phoneDisplay,
    email: site.email,
    areaServed: loc.serviceAreas,
  };

  return (
    <>
      <PageHero
        eyebrow={`${loc.city} · Studio`}
        title={`Woodex Interior in ${loc.city}.`}
        intro={loc.intro}
        image={loc.image}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href="/consultation" variant="light">
            Book a consultation
          </CTA>
          <CTA href={waLink()} variant="outline-light" external>
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </CTA>
        </div>
      </PageHero>

      {/* Studio facts */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-3 !text-[9px]">Studio</p>
              <p className="flex items-start gap-2.5 text-sm text-navy/80">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-wood" />
                {loc.studio}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-3 !text-[9px]">Desk</p>
              <p className="flex items-start gap-2.5 text-sm text-navy/80">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-wood" />
                {loc.desk}
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-3 !text-[9px]">Service areas</p>
              <ul className="space-y-1.5 text-sm text-navy/80">
                {loc.serviceAreas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services available */}
      <Section className="bg-cream">
        <Reveal>
          <p className="eyebrow mb-4">Services</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">
            Available from {loc.city}.
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={s.slug === "3d-studio" ? "/3d-studio" : `/services/${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-wood"
            >
              {s.navLabel}
            </Link>
          ))}
        </div>
      </Section>

      {/* Local projects */}
      {projects.length > 0 && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">Local work</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">Projects in {loc.city}.</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Map */}
      <Section className="!py-0">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-navy/10">
            <iframe
              title={`Woodex Interior — ${loc.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0"
              src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&z=14&output=embed`}
            />
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="display text-3xl md:text-4xl">{loc.city}, answered.</h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion faqs={loc.faqs} />
          </Reveal>
        </div>
      </Section>

      <CTASection
        title={`Contact the ${loc.city} studio.`}
        subtitle="Book a consultation or start on WhatsApp — the studio responds within one working day."
        image={loc.image}
      />

      <JsonLd data={businessSchema} />
      <JsonLd data={faqJsonLd(loc.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: loc.city, path: `/locations/${loc.slug}` },
        ])}
      />
    </>
  );
}
