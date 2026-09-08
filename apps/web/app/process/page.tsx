import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Woodex Interior's design-to-handover process: Discover, Design, Visualize, Plan with budget and BOQ, Build, Install and Deliver — with an approval point at every stage.",
  alternates: { canonical: "/process" },
};

const gates = [
  {
    title: "Discover",
    body: "Brief, site and existing drawings become a requirement summary — and the route your project should take: design, 3D, documentation, execution, or a combination.",
    decision: "You confirm the route.",
  },
  {
    title: "Design",
    body: "Space planning, concept and mood resolve how the space works — circulation, zones, materials, lighting and furniture relationships.",
    decision: "You approve the direction.",
  },
  {
    title: "Visualize",
    body: "3D stills or a walkthrough show the approved direction — materials, light and proportion — before anything is built.",
    decision: "You approve the visual.",
  },
  {
    title: "Plan (budget + BOQ)",
    body: "Working drawings and a bill of quantities turn the approved visual into a buildable, comparable scope.",
    decision: "You approve scope and commercials.",
  },
  {
    title: "Build",
    body: "Procurement, civil work, MEP, finishes and joinery are executed against the documented scope.",
    decision: "Stage inspections.",
  },
  {
    title: "Install",
    body: "Joinery, fixtures and finishes are installed and coordinated on site.",
    decision: "Installation checks.",
  },
  {
    title: "Deliver",
    body: "Snagging, corrections and final detailing close the project to the approved direction.",
    decision: "You accept handover.",
  },
];

const faqs = [
  {
    q: "Can I use part of this process on its own?",
    a: "Yes. Design, 3D and documentation can each be standalone engagements. The full path applies when you want design through execution under one team.",
  },
  {
    q: "When do I commit to the next stage?",
    a: "Only after you approve the current one. Each gate has an approval point, so you are never committed to construction before the design is approved.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on project type and size. Woodex qualifies timelines by scope, area and approvals rather than quoting a universal number.",
  },
  {
    q: "Who makes the decisions?",
    a: "You do, at each gate. Woodex prepares the options, the documentation and the recommendation.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Discover → Design → Visualize → Plan → Build → Install → Deliver."
        intro="Seven gates, with a decision at each one. You move to the next stage only when the last is approved."
        image="/images/project-spatial.jpg"
      />

      {/* Who it's for */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Who this is for</p>
            <h2 className="display text-3xl md:text-4xl">A process for people who want clarity.</h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3 text-lg text-navy/75">
              <li>• Clients starting with an empty space and no design yet</li>
              <li>• Clients who already have drawings and need execution</li>
              <li>• Clients who need only 3D visualization or documentation</li>
              <li>• Developers and businesses who want one accountable partner</li>
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Gates */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">The gates</p>
          <h2 className="display mb-10 text-3xl md:text-4xl">Seven stages, explained.</h2>
        </Reveal>
        <div className="space-y-4">
          {gates.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 60}>
              <div className="grid gap-4 rounded-2xl border border-navy/10 bg-white p-6 md:grid-cols-[160px_1fr_220px] md:items-start md:gap-6">
                <div>
                  <p className="text-sm font-bold text-wood">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-xl font-bold text-navy">{g.title}</h3>
                </div>
                <p className="text-navy/75">{g.body}</p>
                <p className="rounded-xl bg-cream px-4 py-3 text-sm font-semibold text-navy">
                  {g.decision}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Process FAQ</p>
            <h2 className="display text-3xl md:text-4xl">How the gates work.</h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </Section>

      <CTASection title="Discuss your project." subtitle="Bring the space, the brief or the drawings — we'll map the route." />

      <JsonLd data={faqJsonLd(faqs)} />
    </>
  );
}
