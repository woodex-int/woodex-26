import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  insightCategories,
  getCategoryBySlug,
  getInsightsByCategory,
} from "@/lib/content/insights";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { ArticleCard } from "@/components/cards";
import { breadcrumbJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} Insights`,
    description: `Woodex Interior guidance on ${category.name.toLowerCase()} — practical, answer-first reading from real project experience.`,
    alternates: { canonical: `/insights/category/${category.slug}` },
  };
}

export default async function InsightCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const articles = getInsightsByCategory(category.name);
  const otherCategories = insightCategories.filter((c) => c.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow="Topic"
        title={category.name}
        intro={`Answer-first reading on ${category.name.toLowerCase()} — written from real project experience, with no invented numbers.`}
        image="/images/hero-2.jpg"
      />

      {/* Articles */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Articles</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">
            {articles.length} {articles.length === 1 ? "article" : "articles"}.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <ArticleCard insight={a} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Other topics */}
      <Section className="bg-cream">
        <Reveal>
          <p className="eyebrow mb-4">More topics</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Keep browsing.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/insights"
            className="inline-flex rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-wood hover:text-wood"
          >
            All topics
          </Link>
          {otherCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/insights/category/${c.slug}`}
              className="inline-flex rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-wood hover:text-wood"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        variant="compact"
        title="Ask Woodex."
        subtitle="Prefer an answer from a designer? Book a consultation or ask on WhatsApp."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: category.name, path: `/insights/category/${category.slug}` },
        ])}
      />
    </>
  );
}
