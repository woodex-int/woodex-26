import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/lib/content/faqs";
import { services } from "@/lib/content/services";
import { featuredProjects } from "@/lib/content/projects";
import { insights } from "@/lib/content/insights";
import HeroSlides from "@/components/HeroSlides";
import SixServices from "@/components/SixServices";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ServiceSelector from "@/components/ServiceSelector";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { ProjectCard, ArticleCard } from "@/components/cards";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Interior Design, Fit-Out & Turnkey Execution` },
  description:
    "Woodex Interior designs, visualizes and builds residential and commercial interiors — one team from first brief to handover, with 3D approval before construction.",
  alternates: { canonical: "/" },
};

const marqueeItems = [
  "Interior Design",
  "Architecture",
  "Fit-Out",
  "Turnkey",
  "Joinery",
  "3D Studio",
];

const entryPoints = [
  { label: "I have an empty space", href: "/services/interior-design" },
  { label: "I already have a design", href: "/services/fit-out" },
  { label: "I need renovation", href: "/services/renovation" },
  { label: "I need 3D visualization", href: "/3d-studio" },
  { label: "I need drawings or a BOQ", href: "/services/drawings-boq" },
  { label: "I need complete turnkey delivery", href: "/services/turnkey-execution" },
];

const processStages = [
  {
    title: "Discover",
    input: "Brief, site, existing drawings",
    output: "Requirement summary and route",
    approval: "Kickoff alignment",
  },
  {
    title: "Design",
    input: "Approved direction",
    output: "Space plan, concept, mood",
    approval: "Concept sign-off",
  },
  {
    title: "Visualize",
    input: "Approved concept",
    output: "3D stills / walkthrough",
    approval: "Visual sign-off",
  },
  {
    title: "Cost and document",
    input: "Approved visual",
    output: "Budget, working drawings, BOQ",
    approval: "Scope + commercial sign-off",
  },
  {
    title: "Build and hand over",
    input: "Approved documents",
    output: "Built, snagged, handed-over space",
    approval: "Handover",
  },
];

const sectors = [
  "Residential",
  "Offices",
  "Retail",
  "Hospitality",
  "Restaurants & cafés",
];

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee overflow-hidden border-b border-navy/10 bg-navy py-5">
      <div className="marquee-track flex w-max">
        {items.map((m, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
              {m}
            </span>
            <span className="text-wood">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-1.jpg" fetchPriority="high" />
      <HeroSlides />

      <SixServices />

      <Marquee />

      {/* Positioning */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Who we are</p>
            <h2 className="display text-3xl md:text-4xl">
              Designed clearly. Visualized before commitment. Built by one accountable
              team.
            </h2>
            <div className="mt-6">
              <Link href="/about" className="btn btn-primary">
                About Woodex
                <ArrowRightIcon className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            <Reveal delay={80}>
              <p className="eyebrow mb-3">What we do</p>
              <p className="text-sm leading-relaxed text-navy/70">
                Interior design, architecture, fit-out, turnkey execution, renovation,
                custom joinery, drawings and BOQ, and 3D visualization — under one
                process.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="eyebrow mb-3">Who we work with</p>
              <p className="text-sm leading-relaxed text-navy/70">
                Premium residential clients, offices, retail and hospitality businesses,
                developers, and clients who already have drawings and need execution.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="eyebrow mb-3">Where we operate</p>
              <p className="text-sm leading-relaxed text-navy/70">
                Studios in {site.studios.join(", ")}, serving projects across Pakistan.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Service selector */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Services</p>
          <h2 className="display mb-10 text-3xl md:text-4xl">
            Eight ways in. One accountable team.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ServiceSelector />
        </Reveal>
      </Section>

      {/* Entry-point selector */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Start where you are</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">
            Where are you in the project?
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entryPoints.map((e, i) => (
            <Reveal key={e.label} delay={i * 60}>
              <Link
                href={e.href}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-colors hover:border-wood/60"
              >
                <span className="font-semibold text-navy group-hover:text-navy-600">
                  {e.label}
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-wood" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3D Studio feature */}
      <Section className="bg-navy text-white">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">3D Studio</p>
            <h2 className="display text-3xl md:text-4xl">
              See it. Understand it. Build it.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Stills, walkthroughs and 360° views from an in-house team — so materials,
              lighting and proportions are approved before anything is built. 3D is not a
              substitute for planning; it is how decisions get made without guesswork.
            </p>
            <div className="mt-7">
              <CTA href="/3d-studio" variant="light">
                Open 3D Studio
              </CTA>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="media-zoom overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/studio-kitchen.jpg"
                alt="3D visualization of a residential kitchen with wood and stone finishes"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process overview */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Process</p>
          <h2 className="display mb-3 text-3xl md:text-4xl">
            Five stages. A decision at each one.
          </h2>
          <p className="mb-10 max-w-2xl text-navy/70">
            Every stage has an input, an output and an approval point — so you never commit
            to the next step before the last one is approved.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {processStages.map((stage, i) => (
            <Reveal key={stage.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5">
                <p className="text-sm font-bold text-wood">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-bold text-navy">{stage.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-navy/40">
                      Input
                    </dt>
                    <dd className="text-navy/75">{stage.input}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-navy/40">
                      Output
                    </dt>
                    <dd className="text-navy/75">{stage.output}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-navy/40">
                      Approval
                    </dt>
                    <dd className="text-navy/75">{stage.approval}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8">
            <Link href="/process" className="ulink text-sm font-semibold text-wood">
              See the full process →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Credibility */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Proof</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Numbers we stand behind.</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {[
            {
              to: Number(site.proof.projects.replace(/\D/g, "")),
              suffix: "+",
              label: "Projects completed",
            },
            {
              to: Number(site.proof.founderYears.replace(/\D/g, "")),
              prefix: "~",
              label: "Founder's experience",
            },
            {
              to: Number(site.proof.executionYears.replace(/\D/g, "")),
              suffix: "+",
              label: "Execution team",
            },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <p className="display text-4xl text-navy md:text-5xl">
                  <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-navy/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={210}>
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <p className="display text-4xl text-navy md:text-5xl">{site.proof.iso}</p>
              <p className="mt-2 text-sm text-navy/60">Certified process</p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-6 text-sm text-navy/60">
            Studios: {site.studios.join(" · ")}
          </p>
        </Reveal>
      </Section>

      {/* Featured case studies */}
      <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="display text-3xl md:text-4xl">Proof, not promises.</h2>
          </Reveal>
          <Reveal>
            <Link href="/projects" className="btn btn-outline-navy">
              View all projects
              <ArrowRightIcon className="arrow h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Design-to-build proof */}
      <Section className="bg-navy text-white">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/studio-pharmacy.jpg"
                  alt="Render — visualization of a pharmacy interior before construction"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <p className="mt-2 text-xs uppercase tracking-wider text-white/60">Render</p>
              </div>
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/project-concrete.jpg"
                  alt="Reality — completed interior space"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <p className="mt-2 text-xs uppercase tracking-wider text-white/60">Reality</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-4">Design to build</p>
            <h2 className="display text-3xl md:text-4xl">
              Drawn. Visualized. Documented. Built.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              From drawings and BOQ, through the workshop and onto site — one team keeps the
              approved direction intact at every stage, so the space you approved is the
              space that gets built.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTA href="/process" variant="light">
                See how we work
              </CTA>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Sectors */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Sectors</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Built across the spaces you use.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector} delay={i * 60}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-wood hover:bg-navy/5"
              >
                {sector}
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow mb-4">Questions</p>
              <h2 className="display text-3xl md:text-4xl">Asked, and answered.</h2>
              <p className="mt-4 max-w-sm text-navy/70">
                The commercial questions we hear most, answered directly.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn btn-outline-navy">
                  Ask a different question
                  <ArrowRightIcon className="arrow h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <FAQAccordion faqs={homeFaqs} />
          </Reveal>
        </div>
      </Section>

      {/* Insights preview */}
      <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="eyebrow mb-4">Insights</p>
            <h2 className="display text-3xl md:text-4xl">Read before you build.</h2>
          </Reveal>
          <Reveal>
            <Link href="/insights" className="btn btn-outline-navy">
              All insights
              <ArrowRightIcon className="arrow h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <ArticleCard insight={a} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />

      <JsonLd data={faqJsonLd(homeFaqs)} />
    </>
  );
}
