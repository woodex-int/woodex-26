import type { ReactNode } from "react";
import PageHero from "./PageHero";
import Section from "./Section";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={`Last updated ${updated}.`} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-navy/80 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Section>
    </>
  );
}
