"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// GSAP count-up for the proof band. Renders the final value on the server
// (and without JS), then animates 0 → target once when the number scrolls
// into view. Respects prefers-reduced-motion (no animation, final value only).
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = `${prefix}${to.toLocaleString("en-US")}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (started) return;
        if (!entries.some((entry) => entry.isIntersecting)) return;
        started = true;
        observer.disconnect();
        const proxy = { value: 0 };
        gsap.to(proxy, {
          value: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(proxy.value).toLocaleString("en-US")}${suffix}`;
          },
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, prefix, suffix, duration]);

  return <span ref={ref}>{final}</span>;
}
