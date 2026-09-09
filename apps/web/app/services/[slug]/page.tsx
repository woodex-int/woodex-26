import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { standardServices, getService } from "@/lib/content/services";
import { getProject } from "@/lib/content/projects";
import { waLink } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { ProjectCard } from "@/components/cards";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return standardServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Lahore`,
    description: service.definition,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { images: [{ url: service.image }] },
  };
}

const whyWoodex = [
  "One team from brief to handover",
  "3D approval before construction",
  "BOQ for comparable quotations",
  "In-house joinery through Woodex Furniture",
  "ISO 9001 process",
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedProjects = service.relatedProjects
    .map((p) => getProject(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedServices = service.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.definition,
    provider: { "@type": "Organization", name: site.name, url: site.domain },
    areaServed: "PK",
  };

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.h1}
        intro={service.definition}
        image={service.image}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href="/consultation" variant="light">
            {service.ctaPrimary}
          </CTA>
          <CTA href={waLink(service.whatsappMessage)} variant="outline-light" external>
            <WhatsAppIcon className="h-4 w-4" />
            Ask on WhatsApp
          </CTA>
        </div>
      </PageHero>

      {/* Answer-first overview */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="display text-3xl md:text-4xl">What {service.name.toLowerCase()} solves.</h2>
          </Reveal>
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-3">
              <Reveal>
                <p className="eyebrow mb-2">Who it is for</p>
                <ul className="space-y-1.5 text-sm text-navy/75">
                  {service.whoItIsFor.map((w) => (
                    <li key={w}>• {w}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={80}>
                <p className="eyebrow mb-2">Problems solved</p>
                <ul className="space-y-1.5 text-sm text-navy/75">
                  {service.problems.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={160}>
                <p className="eyebrow mb-2">Sectors</p>
                <ul className="space-y-1.5 text-sm text-navy/75">
                  {service.sectors.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Scope and deliverables */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Scope</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Deliverables and boundaries.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-4">Included</p>
              <ul className="space-y-2 text-sm text-navy/75">
                {service.inclusions.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-4">Deliverables</p>
              <ul className="space-y-2 text-sm text-navy/75">
                {service.deliverables.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow mb-4">Not included / dependent</p>
              <ul className="space-y-2 text-sm text-navy/75">
                {service.exclusions.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Process</p>
          <h2 className="display mb-10 text-3xl md:text-4xl">How {service.name.toLowerCase()} runs.</h2>
        </Reveal>
        <div className="space-y-4">
          {service.process.map((stage, i) => (
            <Reveal key={stage.title} delay={(i % 2) * 60}>
              <div className="grid gap-4 rounded-2xl border border-navy/10 bg-white p-6 md:grid-cols-[1fr_1fr_1fr] md:gap-6">
                <div>
                  <p className="text-sm font-bold text-wood">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-xl font-bold text-navy">{stage.title}</h3>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-navy/40">Inputs</p>
                  <ul className="space-y-1 text-sm text-navy/75">
                    {stage.inputs.map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-navy/40">Outputs / approval</p>
                  <ul className="space-y-1 text-sm text-navy/75">
                    {stage.outputs.map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                  <p className="mt-2 rounded-lg bg-cream px-3 py-2 text-sm font-semibold text-navy">
                    {stage.approval}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Woodex + cost/timeline */}
      <Section className="bg-navy text-white">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Why Woodex</p>
            <h2 className="display text-3xl md:text-4xl">Evidence over claims.</h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3 text-white/85">
              {whyWoodex.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wood" />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <div className="space-y-5">
              <div>
                <p className="eyebrow mb-2 !text-white/60">Cost factors</p>
                <ul className="space-y-1 text-sm text-white/80">
                  {service.costFactors.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-2 !text-white/60">Timeline factors</p>
                <ul className="space-y-1 text-sm text-white/80">
                  {service.timelineFactors.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Related projects */}
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

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="display text-3xl md:text-4xl">{service.name}, answered.</h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion faqs={service.faqs} />
          </Reveal>
        </div>
      </Section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">Related services</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">Often combined with.</h2>
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
      )}

      <CTASection
        variant="compact"
        title={`Discuss your ${service.name.toLowerCase()} project.`}
        subtitle="Book a consultation or start on WhatsApp — a designer, not a form, takes it from there."
      />

      <JsonLd data={serviceSchema} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
    </>
  );
}
