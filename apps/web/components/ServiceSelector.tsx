"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/content/services";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./Icons";

export default function ServiceSelector() {
  const [active, setActive] = useState(services[0].slug);
  const current = services.find((s) => s.slug === active) ?? services[0];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Media panel */}
      <div className="relative overflow-hidden rounded-2xl bg-navy-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.image}
          src={current.image}
          alt={`${current.name} — representative project`}
          className="h-[320px] w-full object-cover transition-opacity duration-500 md:h-[460px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="eyebrow mb-2 !text-white/70">{current.category}</p>
          <p className="text-xl font-bold">{current.navLabel}</p>
          <p className="mt-1 max-w-md text-sm text-white/80">{current.shortLine}</p>
        </div>
      </div>

      {/* Numbered list */}
      <div className="flex flex-col">
        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {services.map((s, i) => {
            const isActive = s.slug === active;
            return (
              <li key={s.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(s.slug)}
                  onFocus={() => setActive(s.slug)}
                  onClick={() => setActive(s.slug)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 py-4 text-left transition-colors",
                    isActive ? "text-navy" : "text-navy/55",
                  )}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold text-wood">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-bold md:text-xl">{s.navLabel}</span>
                  </span>
                  <ArrowRightIcon
                    className={cn(
                      "h-5 w-5 text-wood transition-all",
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-6">
          <Link
            href={current.slug === "3d-studio" ? "/3d-studio" : `/services/${current.slug}`}
            className="btn btn-primary"
          >
            View {current.navLabel}
            <ArrowRightIcon className="arrow h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
