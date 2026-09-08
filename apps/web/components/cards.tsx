import Link from "next/link";
import type { Project, Insight, Service } from "@/lib/types";
import { ArrowRightIcon, ArrowUpRightIcon } from "./Icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white"
    >
      <div className="media-zoom relative aspect-[4/3] overflow-hidden bg-navy-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} — ${project.sector.toLowerCase()} ${project.type === "study" ? "study" : "project"}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {project.type === "study" ? "Study" : "Named work"}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="eyebrow !text-[9px]">{project.sector}</p>
          <ArrowUpRightIcon className="h-4 w-4 text-wood opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <h3 className="text-lg font-bold leading-snug text-navy">{project.name}</h3>
        <p className="mt-1 text-sm text-navy/60">{project.location}</p>
      </div>
    </Link>
  );
}

export function ArticleCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white"
    >
      {insight.image && (
        <div className="media-zoom relative aspect-[16/9] overflow-hidden bg-navy-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={insight.image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow mb-2 !text-[9px]">{insight.category}</p>
        <h3 className="text-lg font-bold leading-snug text-navy group-hover:text-navy-600">
          {insight.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy/70">
          {insight.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-wood">
          Read
          <ArrowRightIcon className="arrow h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const href = service.slug === "3d-studio" ? "/3d-studio" : `/services/${service.slug}`;
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-colors hover:border-wood/50"
    >
      <p className="eyebrow mb-3 !text-[9px]">{service.category}</p>
      <h3 className="text-xl font-bold text-navy group-hover:text-navy-600">
        {service.navLabel}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">
        {service.shortLine}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-wood">
        View service
        <ArrowRightIcon className="arrow h-4 w-4" />
      </span>
    </Link>
  );
}
