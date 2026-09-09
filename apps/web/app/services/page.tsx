import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceCategories, getService } from "@/lib/content/services";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { ServiceCard } from "@/components/cards";
import { faqJsonLd } from "@/lib/seo";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Woodex Interior services: interior design, architecture, fit-out, turnkey execution, renovation, custom furniture and joinery, drawings and BOQ, and 3D visualization.",
  alternates: { canonical: "/services" },
};

const routes = [
  { label: "I have an empty space", href: "/services/interior-design" },
  { label: "I already have a design", href: "/services/fit-out" },
  { label: "I need renovation", href: "/services/renovation" },
  { label: "I need only 3D", href: "/3d-studio" },
  { label: "I need drawings or a BOQ", href: "/services/drawings-boq" },
  { label: "I need complete turnkey delivery", href: "/services/turnkey-execution" },
];

const matrix = [
  { name: "Interior Design", design: "Included", threeD: "Available", boq: "Available", procurement: "—", execution: "—", joinery: "Available" },
  { name: "Architecture", design: "Included", threeD: "Available", boq: "Available", procurement: "—", execution: "—", joinery: "—" },
  { name: "Fit-Out", design: "—", threeD: "—", boq: "Included", procurement: "Included", execution: "Included", joinery: "Included" },
  { name: "Turnkey Execution", design: "Available", threeD: "Available", boq: "Included", procurement: "Included", execution: "Included", joinery: "Included" },
  { name: "Renovation", design: "Included", threeD: "Available", boq: "Included", procurement: "Available", execution: "Included", joinery: "Available" },
  { name: "Custom Furniture & Joinery", design: "Included", threeD: "Available", boq: "Available", procurement: "—", execution: "—", joinery: "Included" },
  { name: "Drawings & BOQ", design: "—", threeD: "—", boq: "Included", procurement: "—", execution: "—", joinery: "—" },
  { name: "3D Studio", design: "—", threeD: "Included", boq: "—", procurement: "—", execution: "—", joinery: "—" },
];

const faqs = [
  {
    q: "Which service do I need?",
    a: "It depends on what you have. An empty space starts with design; existing drawings start with fit-out or execution; 3D and documentation can each stand alone. Start with the route above, or ask us on WhatsApp.",
  },
  {
    q: "Can I combine services?",
    a: "Yes. The services are configured around the project — design plus 3D, drawings plus execution, or the full turnkey path.",
  },
  {
    q: "Do I have to commit to everything at once?",
    a: "No. Each engagement has its own approval point. You move forward stage by stage.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Design, documentation and execution — configured around your project."
        intro="Eight service lines, one process. Start where you are, and take as much of the path as you need."
        image="/images/hero-2.jpg"
      />

      {/* What do you need */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Start here</p>
          <h2 className="display mb-3 text-3xl md:text-4xl">What do you need?</h2>
          <p className="mb-8 max-w-2xl text-navy/70">
            Six starting points. Pick the one that matches where you are — each leads to the
            service configured for that situation.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r, i) => (
            <Reveal key={r.label} delay={i * 60}>
              <Link
                href={r.href}
                className="group flex h-full items-center gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-colors hover:border-wood/60 hover:bg-cream/60"
              >
                <span className="text-sm font-bold text-wood">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-semibold text-navy group-hover:text-navy-600">
                  {r.label}
                </span>
                <ArrowRightIcon className="arrow h-4 w-4 shrink-0 text-wood" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Grouped service cards */}
      {serviceCategories.map((cat, ci) => (
        <Section key={cat.title} className={undefined}>
          <Reveal>
            <p className="eyebrow mb-4">{cat.title}</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">
              {cat.title === "Design" && "Design the space."}
              {cat.title === "Build" && "Build the space."}
              {cat.title === "Visualize" && "See the space."}
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cat.slugs.map((slug, i) => {
              const s = getService(slug);
              if (!s) return null;
              return (
                <Reveal key={slug} delay={i * 80}>
                  <ServiceCard service={s} />
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      {/* Coverage */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Coverage</p>
          <h2 className="display mb-3 text-3xl md:text-4xl">What each engagement includes.</h2>
          <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-navy" aria-hidden="true" /> Included
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full border border-navy/30" aria-hidden="true" /> Available as add-on
            </span>
          </div>
        </Reveal>
        <div className="space-y-3">
          {matrix.map((row, i) => {
            const s = services.find((x) => x.name === row.name);
            const href = s
              ? s.slug === "3d-studio"
                ? "/3d-studio"
                : `/services/${s.slug}`
              : "/services";
            const caps = [
              { label: "Design", v: row.design },
              { label: "3D", v: row.threeD },
              { label: "BOQ", v: row.boq },
              { label: "Procurement", v: row.procurement },
              { label: "Execution", v: row.execution },
              { label: "Joinery", v: row.joinery },
            ];
            return (
              <Reveal key={row.name} delay={i * 40}>
                <div className="grid gap-4 rounded-2xl border border-navy/10 bg-white p-5 md:grid-cols-[220px_1fr] md:items-center md:gap-6">
                  <Link href={href} className="font-bold text-navy hover:text-navy-600">
                    {row.name}
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {caps.map((c) =>
                      c.v === "Included" ? (
                        <span
                          key={c.label}
                          className="rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white"
                        >
                          {c.label}
                        </span>
                      ) : c.v === "Available" ? (
                        <span
                          key={c.label}
                          className="rounded-full border border-navy/25 px-3 py-1.5 text-xs font-semibold text-navy/70"
                        >
                          {c.label} +
                        </span>
                      ) : null,
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="mt-5 text-sm text-navy/55">
            Capabilities not shown for a service are not part of that engagement — they can
            be brought in through a connected service.
          </p>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="display text-3xl md:text-4xl">Not sure which service?</h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </Section>

      <CTASection
        image="/images/hero-2.jpg"
        title="Find the right service."
        subtitle="Tell us what you have and what you need — we'll map the route, on a call or on WhatsApp."
      />

      <JsonLd data={faqJsonLd(faqs)} />
    </>
  );
}
