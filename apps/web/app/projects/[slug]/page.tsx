import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/content/projects";
import { getService } from "@/lib/content/services";
import { insights } from "@/lib/content/insights";
import { waLink } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { ProjectCard, ArticleCard } from "@/components/cards";
import { breadcrumbJsonLd } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name}: ${project.sector} in ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const usedServices = project.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);

  const relatedInsights = insights
    .filter(
      (i) =>
        i.relatedProject === slug || project.services.includes(i.relatedService),
    )
    .slice(0, 2);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.name,
    description: project.summary,
    image: project.image,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <PageHero
        eyebrow={`${project.sector} · ${project.type === "study" ? "Study" : "Named work"}`}
        title={project.name}
        intro={project.summary}
        image={project.image}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href="/consultation" variant="light">
            Start a similar project
          </CTA>
          <CTA
            href={waLink(
              `Hello Woodex Interior, I'm interested in a project like ${project.name}. I would like to discuss the next steps.`,
            )}
            variant="outline-light"
            external
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </CTA>
        </div>
      </PageHero>

      {/* Project facts */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { k: "Sector", v: project.sector },
            { k: "Location", v: project.location },
            { k: "Status", v: project.type === "study" ? "Study" : "Named work" },
            { k: "Client", v: project.clientName ?? "Study (unnamed)" },
            {
              k: "Services",
              v: usedServices.map((s) => s.navLabel).join(", ") || "—",
            },
          ].map((f) => (
            <div key={f.k} className="rounded-2xl border border-navy/10 bg-white p-5">
              <p className="eyebrow mb-2 !text-[9px]">{f.k}</p>
              <p className="text-sm font-semibold text-navy">{f.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Narrative */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          <Reveal>
            <p className="eyebrow mb-3">The brief</p>
            <p className="text-lg leading-relaxed text-navy/80">{project.summary}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow mb-3">The challenge</p>
            <p className="text-lg leading-relaxed text-navy/80">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow mb-3">The response</p>
            <p className="text-lg leading-relaxed text-navy/80">{project.solution}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow mb-3">The result</p>
            <p className="text-lg leading-relaxed text-navy/80">{project.result}</p>
          </Reveal>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">The project, in image.</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.gallery.map((img, i) => (
            <Reveal key={img} delay={(i % 2) * 80}>
              <div className="media-zoom overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${project.name} — ${project.sector.toLowerCase()} project`}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services used */}
      {usedServices.length > 0 && (
        <Section className="bg-navy text-white">
          <Reveal>
            <p className="eyebrow mb-4">Services used</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">The engagements behind it.</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {usedServices.map((s) => (
              <Link
                key={s.slug}
                href={s.slug === "3d-studio" ? "/3d-studio" : `/services/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-wood hover:bg-white/5"
              >
                {s.navLabel}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Related reading */}
      {relatedInsights.length > 0 && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">Related reading</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">Go deeper.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedInsights.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <ArticleCard insight={a} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <Section>
          <Reveal>
            <p className="eyebrow mb-4">Related projects</p>
            <h2 className="display mb-8 text-3xl md:text-4xl">More like this.</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title="Start a similar project."
        subtitle="Book a consultation or start on WhatsApp — a designer, not a form, takes it from there."
        image={project.image}
      />

      <JsonLd data={creativeWorkSchema} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />
    </>
  );
}
