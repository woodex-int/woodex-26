import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insights, getInsight, slugifyCategory } from "@/lib/content/insights";
import { getService } from "@/lib/content/services";
import { getProject } from "@/lib/content/projects";
import { site } from "@/lib/site";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { ArticleCard } from "@/components/cards";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: insight.image ? { images: [{ url: insight.image }] } : undefined,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const relatedService = getService(insight.relatedService);
  const relatedProject = getProject(insight.relatedProject);
  const relatedArticles = insights.filter((i) => i.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      {/* Article header */}
      <section className="bg-navy pb-16 pt-32 text-white md:pt-40">
        <div className="container-x">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/insights" className="hover:text-white">Insights</Link>
              <span>/</span>
              <Link
                href={`/insights/category/${slugifyCategory(insight.category)}`}
                className="hover:text-white"
              >
                {insight.category}
              </Link>
            </nav>
            <p className="eyebrow mb-4 !text-white/70">{insight.category}</p>
            <h1 className="display max-w-3xl text-4xl md:text-5xl">{insight.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">{insight.excerpt}</p>
            <p className="mt-6 text-xs text-white/50">
              Published {insight.date} · Reviewed by {site.name}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Takeaways */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Key takeaways</p>
            <h2 className="display text-3xl md:text-4xl">The short version.</h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3">
              {insight.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg text-navy/80">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-wood" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Table of contents */}
      <Section className="!py-0">
        <Reveal>
          <div className="rounded-2xl border border-navy/10 bg-cream p-6">
            <p className="eyebrow mb-4">In this article</p>
            <ol className="grid gap-2 sm:grid-cols-2">
              {insight.sections.map((s, i) => (
                <li key={s.heading} className="text-sm font-semibold text-navy">
                  <span className="mr-2 text-wood">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Section>

      {/* Body */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {insight.sections.map((s, i) => (
            <Reveal key={s.heading}>
              <article>
                <h2 className="display mb-4 text-2xl md:text-3xl">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mb-4 leading-relaxed text-navy/75">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related service + project */}
      <Section className="bg-navy text-white">
        <div className="grid gap-6 md:grid-cols-2">
          {relatedService && (
            <Reveal>
              <Link
                href={relatedService.slug === "3d-studio" ? "/3d-studio" : `/services/${relatedService.slug}`}
                className="block h-full rounded-2xl border border-white/10 p-6 transition-colors hover:border-wood"
              >
                <p className="eyebrow mb-2 !text-white/60">Related service</p>
                <p className="text-xl font-bold text-white">{relatedService.navLabel}</p>
                <p className="mt-2 text-sm text-white/70">{relatedService.shortLine}</p>
              </Link>
            </Reveal>
          )}
          {relatedProject && (
            <Reveal delay={80}>
              <Link
                href={`/projects/${relatedProject.slug}`}
                className="block h-full rounded-2xl border border-white/10 p-6 transition-colors hover:border-wood"
              >
                <p className="eyebrow mb-2 !text-white/60">Related project</p>
                <p className="text-xl font-bold text-white">{relatedProject.name}</p>
                <p className="mt-2 text-sm text-white/70">{relatedProject.summary}</p>
              </Link>
            </Reveal>
          )}
        </div>
      </Section>

      {/* FAQ */}
      {insight.faqs.length > 0 && (
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">FAQ</p>
              <h2 className="display text-3xl md:text-4xl">Quick answers.</h2>
            </Reveal>
            <Reveal delay={100}>
              <FAQAccordion faqs={insight.faqs} firstOpen={false} />
            </Reveal>
          </div>
        </Section>
      )}

      {/* Related articles */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Related reading</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Keep reading.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedArticles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <ArticleCard insight={a} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Discuss your project." subtitle="Reading is the start — a conversation is the next step." />

      <JsonLd data={articleSchema} />
      {insight.faqs.length > 0 && <JsonLd data={faqJsonLd(insight.faqs)} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: insight.title, path: `/insights/${insight.slug}` },
        ])}
      />
    </>
  );
}
