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
          <h2 className="display mb-8 text-3xl md:text-4xl">What do you need?</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r, i) => (
            <Reveal key={r.label} delay={i * 60}>
              <Link
                href={r.href}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-colors hover:border-wood/60"
              >
                <span className="font-semibold text-navy group-hover:text-navy-600">{r.label}</span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-wood" />
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

      {/* Comparison matrix */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Compare</p>
          <h2 className="display mb-3 text-3xl md:text-4xl">What each engagement includes.</h2>
          <p className="mb-8 max-w-2xl text-navy/70">
            Included = part of the service · Available = optional add-on · — = not part of this
            engagement.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="overflow-x-auto rounded-2xl border border-navy/10">
            <table className="w-full min-w-[720px] border-collapse bg-white text-left text-sm">
              <thead>
                <tr className="border-b border-navy/10 bg-cream">
                  <th className="px-5 py-4 font-semibold text-navy">Service</th>
                  <th className="px-4 py-4 font-semibold text-navy">Design</th>
                  <th className="px-4 py-4 font-semibold text-navy">3D</th>
                  <th className="px-4 py-4 font-semibold text-navy">BOQ</th>
                  <th className="px-4 py-4 font-semibold text-navy">Procurement</th>
                  <th className="px-4 py-4 font-semibold text-navy">Execution</th>
                  <th className="px-4 py-4 font-semibold text-navy">Joinery</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => {
                  const s = services.find((x) => x.name === row.name);
                  const href = s
                    ? s.slug === "3d-studio"
                      ? "/3d-studio"
                      : `/services/${s.slug}`
                    : "/services";
                  return (
                    <tr key={row.name} className="border-b border-navy/5 last:border-0">
                      <td className="px-5 py-3.5">
                        <Link href={href} className="font-semibold text-navy hover:text-navy-600">
                          {row.name}
                        </Link>
                      </td>
                      {[
                        row.design,
                        row.threeD,
                        row.boq,
                        row.procurement,
                        row.execution,
                        row.joinery,
                      ].map((v, i) => (
                        <td key={i} className="px-4 py-3.5 text-navy/70">
                          {v === "Included" ? (
                            <span className="font-semibold text-navy">Included</span>
                          ) : v === "Available" ? (
                            <span className="text-navy/60">Available</span>
                          ) : (
                            <span className="text-navy/35">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
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

      <CTASection title="Find the right service." subtitle="Tell us what you have and what you need — we'll map the route, on a call or on WhatsApp." />

      <JsonLd data={faqJsonLd(faqs)} />
    </>
  );
}
