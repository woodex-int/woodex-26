import type { Metadata } from "next";
import { site } from "@/lib/site";
import { getProject } from "@/lib/content/projects";
import { waLink } from "@/lib/whatsapp";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { ProjectCard } from "@/components/cards";
import { faqJsonLd } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "Woodex 3D Studio | See It. Understand It. Build It." },
  description:
    "Woodex 3D Studio — in-house 3D visualization: interior and exterior stills, walkthroughs, 360° views and material visualization. See the space before it is built.",
  alternates: { canonical: "/3d-studio" },
};

const options = [
  "Interior stills",
  "Exterior stills",
  "Walkthrough animation",
  "360° views",
  "Material visualization",
  "Render-to-BOQ support",
];

const situations = [
  { title: "I have a floor plan", body: "Turn the plan into a space you can understand and review." },
  { title: "I have reference images", body: "Translate references into a coherent visual direction." },
  { title: "I already have a design", body: "Produce 3D from approved design information, subject to scope." },
  { title: "I need presentation visuals", body: "Stills, walkthroughs or presentation imagery." },
  { title: "I need design + build", body: "The 3D process continues into design, craft and execution." },
];

const steps = [
  { title: "Plan", body: "Floor plan, references and requirements." },
  { title: "Model", body: "The space modeled to design intent." },
  { title: "Material", body: "Materials and finishes applied." },
  { title: "Light", body: "Lighting resolved for how the space is used." },
  { title: "Visual", body: "Stills or walkthrough produced." },
  { title: "Approval", body: "You approve what you see." },
  { title: "Reality", body: "The approved direction moves toward build." },
];

const faqs = [
  {
    q: "What information do I need to start a 3D render?",
    a: "A floor plan or dimensions, plus references or a design direction where available. Woodex confirms the exact input list at brief stage.",
  },
  {
    q: "Is 3D visualization the same as design?",
    a: "No. 3D shows an approved or proposed direction so decisions can be made before build; it does not replace space planning, technical design or documentation.",
  },
  {
    q: "Can a render be used to prepare a BOQ?",
    a: "A render helps agree the visual direction; the BOQ is prepared from drawings and specifications. Where documentation is in scope, Woodex carries the approved visual into drawings and a bill of quantities.",
  },
  {
    q: "3D still vs walkthrough — which do I need?",
    a: "Stills are for reviewing and approving spaces and materials; a walkthrough adds movement and sequence for circulation and flow. The brief decides which is worth the extra production time.",
  },
];

const related = getProject("spatial-innovation");

export default function ThreeDStudioPage() {
  return (
    <>
      <PageHero
        eyebrow="3D Studio"
        title="See it. Understand it. Build it."
        intro="An in-house visualization team working beside the design team — plans, references and ideas become visual experiences you can decide on before construction."
        image="/images/studio-hero.jpg"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href="/consultation" variant="light">
            Start a 3D brief
          </CTA>
          <CTA
            href={waLink(
              "Hello Woodex Interior, I'm interested in a 3D visualization. My project is in [city]. I would like to discuss the next steps.",
            )}
            variant="outline-light"
            external
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </CTA>
        </div>
      </PageHero>

      {/* Positioning — exclusive line */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Positioning</p>
            <h2 className="display text-3xl md:text-4xl">
              You are not approving a plan. You are approving a room.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 text-lg text-navy/75">
              <p>
                3D is not a substitute for planning or technical design. It is the layer
                where you see, approve and decide — materials, lighting, proportions and
                how the space will feel — before anything is built.
              </p>
              <p>
                Woodex visualizes with design intent in mind: how the space will be used,
                how materials will meet and how light will work. The result is an approval
                tool, not a decoration.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Options */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">What we produce</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Stills, walkthroughs and 360°.</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o, i) => (
            <Reveal key={o} delay={i * 60}>
              <div className="rounded-2xl border border-navy/10 bg-white p-5 font-semibold text-navy">
                {o}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sequence */}
      <Section className="bg-navy text-white">
        <Reveal>
          <p className="eyebrow mb-4">The sequence</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Plan → Model → Reality.</h2>
        </Reveal>
        <div className="grid gap-3 md:grid-cols-7">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <div className="h-full rounded-xl border border-white/10 p-4">
                <p className="text-sm font-bold text-wood">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-semibold text-white">{s.title}</p>
                <p className="mt-2 text-xs text-white/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who for */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Who it is for</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Start from what you have.</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {situations.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-5">
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related study */}
      {related && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">3D study</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">Visualization, in practice.</h2>
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={related} />
          </Reveal>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="display text-3xl md:text-4xl">3D, answered.</h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Start a 3D brief."
        subtitle="Send your plan, references or design on WhatsApp — the studio will confirm the input list and the route."
        image="/images/studio-hero.jpg"
      />

      <JsonLd data={faqJsonLd(faqs)} />
    </>
  );
}
