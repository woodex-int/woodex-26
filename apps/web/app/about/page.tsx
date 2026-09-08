import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getProject } from "@/lib/content/projects";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ProjectCard } from "@/components/cards";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Woodex Interior is a design-and-build studio — interior design, 3D visualization and execution under one team. 500+ projects, ISO 9001 process, studios in Lahore, Karachi and Islamabad.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Design is not decoration", body: "We resolve how a space works before how it looks. Function first, finish second." },
  { title: "See it before it is built", body: "3D visualization turns an approved direction into decisions — materials, lighting, proportion — before construction." },
  { title: "Document before you commit", body: "Drawings and a BOQ put every party on the same buildable scope, so cost is clear before execution." },
  { title: "One accountable team", body: "Design, visualization, documentation and execution stay connected — one partner from concept to completion." },
];

const featured = getProject("wellstar-pharmacy");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Woodex"
        title="One team from first brief to final handover."
        intro="Woodex Interior is an integrated design-and-build practice: interior design, architecture, 3D visualization, documentation and execution under one process."
        image="/images/hero-1.jpg"
      />

      {/* Who we are */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">The practice</p>
            <h2 className="display text-3xl md:text-4xl">Drawn. Then built.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 text-lg leading-relaxed text-navy/75">
              <p>
                Woodex Interior brings design and execution into one connected process:
                discover, design, visualize, plan with budget and BOQ, then build, install
                and deliver.
              </p>
              <p>
                The studio works from an empty space, an existing space, a floor plan,
                reference images or an already-approved design. Where the project needs
                only 3D visualization or only documentation, those can be complete
                engagements on their own.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Founding story */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Where it began</p>
            <h2 className="display mb-5 text-3xl md:text-4xl">A beginning we can name.</h2>
            <div className="space-y-4 text-navy/75">
              <p>
                Woodex's path begins with a real project journey — the {site.namedClient}{" "}
                Pharmacy in DHA Lahore, taken from design through execution, then extended
                into {site.namedClient} Cosmetics and the {site.namedClient} Mini Hospital.
              </p>
              <p>
                That complete design-to-execution path became the studio's principle: a
                design should be built, not just presented. The connection between design,
                visualization, budgeting, documentation and execution is what the studio is
                built on.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: site.proof.projects, label: "Projects" },
                { value: site.proof.founderYears, label: "Founder's experience" },
                { value: site.proof.executionYears, label: "Execution team" },
                { value: site.proof.iso, label: "Certification" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-navy/10 bg-white p-6">
                  <p className="display text-4xl text-navy">{s.value}</p>
                  <p className="mt-2 text-sm text-navy/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">How we think</p>
          <h2 className="display mb-10 text-3xl md:text-4xl">Principles, not promises.</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* One process */}
      <Section className="bg-navy text-white">
        <Reveal>
          <p className="eyebrow mb-4">One process</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Capabilities under one roof.</h2>
        </Reveal>
        <Reveal delay={100}>
          <ol className="grid gap-3 md:grid-cols-7">
            {site.processPath.map((step, i) => (
              <li key={step} className="rounded-xl border border-white/10 p-4">
                <p className="text-sm font-bold text-wood">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 text-sm font-semibold text-white">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal>
          <div className="mt-8">
            <Link href="/process" className="ulink text-sm font-semibold text-wood">
              See the full process →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Workshop */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="media-zoom overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/craft-joinery.jpg"
                alt="Custom joinery and furniture workshop"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-4">Woodex Furniture</p>
            <h2 className="display text-3xl md:text-4xl">The mill, connected to the studio.</h2>
            <p className="mt-5 text-lg text-navy/75">
              Custom furniture and joinery are designed against the project drawings and
              manufactured through Woodex Furniture — so kitchens, wardrobes, counters and
              bespoke pieces fit the space and services they are built around.
            </p>
            <div className="mt-7">
              <CTA href="/services/custom-furniture-joinery" variant="primary">
                Custom joinery
              </CTA>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Studios */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Where we are</p>
          <h2 className="display mb-6 text-3xl md:text-4xl">Studios across Pakistan.</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {site.studios.map((s, i) => (
            <Reveal key={s} delay={i * 80}>
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <p className="font-bold text-navy">{s}</p>
                <p className="mt-1 text-sm text-navy/60">Studio</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 text-sm text-navy/60">
            Desk: {site.address} · {site.hours}
          </p>
        </Reveal>
      </Section>

      {/* Featured case study */}
      {featured && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">Named work</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">The project we cite.</h2>
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={featured} />
          </Reveal>
        </Section>
      )}

      <CTASection title="Talk to the team." subtitle="Book a consultation or start on WhatsApp — a designer, not a form, takes it from there." />
    </>
  );
}
