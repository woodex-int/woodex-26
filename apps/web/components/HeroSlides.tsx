"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = {
  lines: [string, string];
  copy: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
  side: string;
  index: string;
};

// Locked composition — mirrors the Home 3-slide hero (Layout / Design / Create).
const slides: Slide[] = [
  {
    lines: ["We turn ideas", "into spaces"],
    copy: "Start with what you have. Plan, 3D, then budget and BOQ if you want it built.",
    cta: "Start your project",
    href: "/consultation",
    image: "/images/hero-1.jpg",
    alt: "Warm contemporary living room with walnut paneling and city views",
    side: "Layout",
    index: "LAYOUT",
  },
  {
    lines: ["Concept to", "completion"],
    copy: "Designers, in-house 3D, execution and the mill — one studio. Not a moodboard plus a contractor hunt.",
    cta: "Explore interiors",
    href: "/services",
    image: "/images/hero-2.jpg",
    alt: "Candlelit fine-dining restaurant with walnut tables and arched niches",
    side: "Design",
    index: "DESIGN",
  },
  {
    lines: ["Approved visual.", "Built reality."],
    copy: "3D is how a family or a board decides. Stills first. Then budget and BOQ. Then the mill and the site — if that is the brief.",
    cta: "Open 3D Studio",
    href: "/3d-studio",
    image: "/images/hero-3.jpg",
    alt: "Double-height office lobby with travertine walls and a living green wall",
    side: "Create",
    index: "CREATE",
  },
];

const DURATION = 6800;

export default function HeroSlides() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLeave = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setPrev(null), 1250);
  }, []);

  const go = useCallback(
    (next: number) => {
      setActive((cur) => {
        if (cur === next) return cur;
        setPrev(cur);
        return next;
      });
      clearLeave();
    },
    [clearLeave],
  );

  const nextSlide = useCallback(
    () => go((active + 1) % slides.length),
    [active, go],
  );
  const prevSlide = useCallback(
    () => go((active - 1 + slides.length) % slides.length),
    [active, go],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => {
      setActive((cur) => {
        const n = (cur + 1) % slides.length;
        setPrev(cur);
        return n;
      });
      clearLeave();
    }, DURATION);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, clearLeave]);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  }, []);

  return (
    <section
      className="hero"
      aria-label="Featured stories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slides">
        {slides.map((s, i) => (
          <article
            key={s.index}
            className={cn(
              "hero-slide",
              i === active && "is-active",
              i === prev && "is-leave",
            )}
            aria-hidden={i !== active}
          >
            <div className="media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={i === active ? s.alt : ""}
                width={1408}
                height={768}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </div>
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="container-x">
                <h1>
                  <span className="line">
                    <span>{s.lines[0]}</span>
                  </span>
                  <span className="line">
                    <span>{s.lines[1]}</span>
                  </span>
                </h1>
                <div className="hero-cta">
                  <a className="btn-roll" href={s.href}>
                    <span className="btn-label">
                      <span>{s.cta}</span>
                      <span>{s.cta}</span>
                    </span>
                    <span className="btn-icon">
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </a>
                  <p className="hero-copy">{s.copy}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hero-side" aria-hidden="true">
        {slides.map((s, i) => (
          <span key={s.side} className={cn(i === active && "is-on")}>
            {s.side}
          </span>
        ))}
      </div>

      <div className="hero-lines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="hero-index" aria-hidden="true">
        {slides[active].index}
      </div>

      <div className="hero-nav">
        <div className="hero-nav-inner">
          <div className="hero-pips" role="tablist">
            {slides.map((s, i) => (
              <button
                key={s.side}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Slide ${i + 1}: ${s.side}`}
                className={cn("hero-pip", i === active && "is-active")}
                onClick={() => go(i)}
              >
                <span>0{i + 1}</span>
                <span className="track">{i === active && <i key={active} />}</span>
              </button>
            ))}
          </div>
          <div className="hero-arrows">
            <button
              className="hero-arrow"
              type="button"
              aria-label="Previous slide"
              onClick={prevSlide}
            >
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              className="hero-arrow"
              type="button"
              aria-label="Next slide"
              onClick={nextSlide}
            >
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
