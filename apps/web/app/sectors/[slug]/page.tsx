import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { sectors, getSector } from "@/lib/content/sectors";
import { getService } from "@/lib/content/services";
import { getProject } from "@/lib/content/projects";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { ProjectCard } from "@/components/cards";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: `${sector.name} Interior Design`,
    description: sector.intro,
    alternates: { canonical: `/sectors/${sector.slug}` },
    openGraph: { images: [{ url: sector.image }] },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const relatedServices = sector.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedProjects = sector.projects
    .map((p) => getProject(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHero
        eyebrow="Sector"
        title={sector.h1}
        intro={sector.intro}
        image={sector.image}
      />

      {/* Answer-first capability */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">How Woodex works here</p>
            <h2 className="display text-3xl md:text-4xl">Planned for the use.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-navy/75">{sector.capability}</p>
          </Reveal>
        </div>
      </Section>

      {/* Requirements */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">What these projects need</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Common requirements.</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sector.requirements.map((r, i) => (
            <Reveal key={r} delay={i * 60}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-navy/10 bg-white p-5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-wood" />
                <span className="text-sm font-medium text-navy/80">{r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sector process */}
      <Section className="bg-navy text-white">
        <Reveal>
          <p className="eyebrow mb-4">Process</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">The path, sector by sector.</h2>
        </Reveal>
        <div className="grid gap-3 md:grid-cols-5">
          {sector.process.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-white/10 p-4">
                <p className="text-sm font-bold text-wood">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-semibold text-white">{p.title}</p>
                <p className="mt-2 text-xs text-white/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Considerations + cost/timeline */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Considerations</p>
            <h2 className="display mb-4 text-3xl md:text-4xl">What gets resolved early.</h2>
            <ul className="space-y-2.5 text-navy/75">
              {sector.considerations.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wood" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-4">Cost factors</p>
              <ul className="space-y-2 text-sm text-navy/75">
                {sector.costFactors.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-4">Timeline factors</p>
              <ul className="space-y-2 text-sm text-navy/75">
                {sector.timelineFactors.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Featured projects (only where they exist) */}
      {relatedProjects.length > 0 && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">Related work</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">See it in practice.</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Related services */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Related services</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">The engagements behind it.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {relatedServices.map((s) => (
            <Link
              key={s.slug}
              href={s.slug === "3d-studio" ? "/3d-studio" : `/services/${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-wood hover:bg-navy/5"
            >
              {s.navLabel}
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="display text-3xl md:text-4xl">{sector.name}, answered.</h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion faqs={sector.faqs} />
          </Reveal>
        </div>
      </Section>

      <CTASection
        variant="compact"
        title={`Discuss your ${sector.name.toLowerCase()} space.`}
        subtitle="Book a consultation or start on WhatsApp — a designer maps the route."
      />

      <JsonLd data={faqJsonLd(sector.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Sectors", path: "/sectors" },
          { name: sector.name, path: `/sectors/${sector.slug}` },
        ])}
      />
    </>
  );
}
