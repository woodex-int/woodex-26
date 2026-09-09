import type { Metadata } from "next";
import { waLink } from "@/lib/whatsapp";
import { featuredProjects } from "@/lib/content/projects";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { ProjectCard } from "@/components/cards";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received. Woodex Interior will respond within one working day.",
  robots: { index: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Received"
        title="Thank you — your message is in."
        intro="A designer will respond within one working day. Prefer to talk now? WhatsApp is the fastest route."
        image="/images/hero-1.jpg"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href="/projects" variant="light">
            View projects while you wait
          </CTA>
          <CTA href={waLink()} variant="outline-light" external>
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </CTA>
        </div>
      </PageHero>

      <Section>
        <Reveal>
          <p className="eyebrow mb-4">While you wait</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Selected work.</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
