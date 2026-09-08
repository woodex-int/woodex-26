import type { Metadata } from "next";
import Link from "next/link";
import { insights, insightCategories, readingTime } from "@/lib/content/insights";
import { formatDate } from "@/lib/utils";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ArticleCard } from "@/components/cards";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Woodex Interior insights — practical guidance on interior design, fit-out, renovation, 3D visualization, BOQ and cost in Pakistan.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Read before you build."
        intro="Answer-first guidance on design, fit-out, renovation, 3D and cost — written from real project experience."
        image="/images/hero-2.jpg"
      />

      {/* Featured */}
      {featured && (
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="media-zoom overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image ?? "/images/studio-hero.jpg"}
                  alt=""
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow mb-3">Featured</p>
              <h2 className="display text-3xl md:text-4xl">{featured.title}</h2>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-navy/50">
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy/70">
                  {featured.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(featured.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{readingTime(featured)} min read</span>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-navy/75">{featured.excerpt}</p>
              <Link href={`/insights/${featured.slug}`} className="btn btn-primary mt-7">
                Read the article
                <ArrowRightIcon className="arrow h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </Section>
      )}

      {/* Categories */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Topics</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">Browse by topic.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {insightCategories.map((c) => {
            const count = insights.filter((i) => i.category === c.name).length;
            return (
              <Link
                key={c.slug}
                href={`/insights/category/${c.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-wood hover:text-wood"
              >
                {c.name}
                <span className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-bold text-navy/60 transition-colors group-hover:bg-wood/15 group-hover:text-wood">
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Latest */}
      <Section>
        <Reveal>
          <p className="eyebrow mb-4">Latest</p>
          <h2 className="display mb-8 text-3xl md:text-4xl">All articles.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <ArticleCard insight={a} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Ask Woodex." subtitle="Prefer an answer from a designer? Book a consultation or ask on WhatsApp." />
    </>
  );
}
