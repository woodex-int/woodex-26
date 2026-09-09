"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./cards";
import { cn } from "@/lib/utils";

const statuses = [
  { key: "All", label: "All work" },
  { key: "Named work", label: "Named work" },
  { key: "Study", label: "Studies" },
] as const;

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const sectors = ["All", ...Array.from(new Set(projects.map((p) => p.sector)))];
  const [status, setStatus] = useState("All");
  const [sector, setSector] = useState("All");

  const filtered = projects.filter(
    (p) =>
      (sector === "All" || p.sector === sector) &&
      (status === "All" ||
        (status === "Named work" ? p.type === "named" : p.type === "study")),
  );

  const statusCount = (key: string) =>
    key === "All"
      ? projects.length
      : key === "Named work"
        ? projects.filter((p) => p.type === "named").length
        : projects.filter((p) => p.type === "study").length;

  const sectorCount = (s: string) =>
    s === "All" ? projects.length : projects.filter((p) => p.sector === s).length;

  const segment = (active: boolean) =>
    cn(
      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
      active
        ? "border-navy bg-navy text-white"
        : "border-navy/15 bg-white text-navy hover:border-wood hover:bg-cream/60",
    );

  const countBadge = (active: boolean) =>
    cn(
      "rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums",
      active ? "bg-white/20 text-white" : "bg-cream text-navy/55",
    );

  const isFiltered = sector !== "All" || status !== "All";

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40">
            Status
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
            {statuses.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setStatus(s.key)}
                className={segment(status === s.key)}
                aria-pressed={status === s.key}
              >
                {s.label}
                <span className={countBadge(status === s.key)}>{statusCount(s.key)}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40">
            Sector
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
            {sectors.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSector(s)}
                className={segment(sector === s)}
                aria-pressed={sector === s}
              >
                {s}
                <span className={countBadge(sector === s)}>{sectorCount(s)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-navy/10 pt-5">
        <p className="text-sm text-navy/60" aria-live="polite">
          <span className="font-semibold text-navy">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "project" : "projects"}
          {sector !== "All" && (
            <>
              {" "}
              · <span className="text-navy/80">{sector}</span>
            </>
          )}
          {status !== "All" && (
            <>
              {" "}
              · <span className="text-navy/80">{status.toLowerCase()}</span>
            </>
          )}
        </p>
        {isFiltered && (
          <button
            type="button"
            onClick={() => {
              setSector("All");
              setStatus("All");
            }}
            className="text-sm font-semibold text-wood underline-offset-4 hover:underline"
          >
            Reset
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-navy/20 bg-cream/60 p-10 text-center">
          <p className="font-semibold text-navy">Nothing matches this combination.</p>
          <p className="mt-1 text-sm text-navy/60">Try a different sector or status.</p>
          <button
            type="button"
            onClick={() => {
              setSector("All");
              setStatus("All");
            }}
            className="mt-4 text-sm font-semibold text-wood underline-offset-4 hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
