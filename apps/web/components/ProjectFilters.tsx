"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./cards";
import { cn } from "@/lib/utils";

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const sectors = Array.from(new Set(projects.map((p) => p.sector)));
  const [sector, setSector] = useState("All");
  const [type, setType] = useState("All");

  const filtered = projects.filter(
    (p) =>
      (sector === "All" || p.sector === sector) &&
      (type === "All" ||
        (type === "Named work" ? p.type === "named" : p.type === "study")),
  );

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
      active
        ? "border-navy bg-navy text-white"
        : "border-navy/15 text-navy hover:border-wood hover:bg-navy/5",
    );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {["All", "Named work", "Study"].map((t) => (
            <button key={t} type="button" onClick={() => setType(t)} className={chip(type === t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...sectors].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(s)}
              className={chip(sector === s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 text-sm text-navy/60" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
