import type { Metadata } from "next";
import Link from "next/link";
import { insights, insightCategories } from "@/lib/content/insights";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ArticleCard } from "@/components/cards";

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
              <p className="mt-4 text-lg text-navy/75">{featured.excerpt}</p>
              <Link href={`/insights/${featured.slug}`} className="btn btn-primary mt-7">
                Read the article
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
          {insightCategories.map((c) => (
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
