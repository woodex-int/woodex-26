"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/types";
import { cn } from "@/lib/utils";
import { PlusIcon } from "./Icons";

export default function FAQAccordion({
  faqs,
  firstOpen = true,
}: {
  faqs: FAQ[];
  firstOpen?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null);

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center gap-5 py-6 text-left"
            >
              <span className="text-sm font-bold text-wood">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "flex-1 text-base font-semibold leading-snug text-navy transition-colors md:text-lg",
                  isOpen ? "text-navy" : "group-hover:text-navy-600",
                )}
              >
                {f.q}
              </span>
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                  isOpen
                    ? "border-navy bg-navy text-white"
                    : "border-navy/20 text-navy group-hover:border-navy/50",
                )}
              >
                <PlusIcon
                  className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-45")}
                />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-9 pr-12 text-[15px] leading-relaxed text-navy/70">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
