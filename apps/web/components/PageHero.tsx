import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-32 text-white md:pb-20 md:pt-40">
      {image && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="h-full w-full object-cover opacity-35" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="display max-w-3xl text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
