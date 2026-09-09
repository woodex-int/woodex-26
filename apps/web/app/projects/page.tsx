import type { Metadata } from "next";
import { projects, getProject } from "@/lib/content/projects";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ProjectFilters from "@/components/ProjectFilters";
import { ProjectCard } from "@/components/cards";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Woodex Interior projects and studies — residential, office, retail, hospitality, renovation and 3D visualization work, including the named Wellstar project in DHA Lahore.",
  alternates: { canonical: "/projects" },
};

const featured = getProject("wellstar-pharmacy");

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proof, in space."
        intro="Portfolio items are labelled studies until a client approves a name. Wellstar is the named project we cite."
        image="/images/hero-3.jpg"
      />

      {/* Featured */}
      {featured && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">Featured</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">The named project.</h2>
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={featured} />
          </Reveal>
        </Section>
      )}

      {/* Filterable grid */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">All work</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Filter by sector or status.</h2>
        </Reveal>
        <ProjectFilters projects={projects} />
      </Section>

      {/* Render to reality */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Render to reality</p>
            <h2 className="display text-3xl md:text-4xl">
              The approved visual, then the built space.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-navy/75">
              Every study follows the same discipline: requirement first, then 3D, then BOQ.
              The visual you approve is the direction that gets built.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/studio-kitchen.jpg" alt="Render of a kitchen interior" className="aspect-square w-full object-cover" loading="lazy" />
                <p className="mt-2 text-xs uppercase tracking-wider text-navy/50">Render</p>
              </div>
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/project-retreat.jpg" alt="Completed interior" className="aspect-square w-full object-cover" loading="lazy" />
                <p className="mt-2 text-xs uppercase tracking-wider text-navy/50">Reality</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        variant="statement"
        ghost="BUILD"
        title="Discuss a similar project."
        subtitle="Bring a project like yours — or a space unlike any other — and we'll map the route."
      />
    </>
  );
}
