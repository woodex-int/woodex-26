import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { standardServices } from "@/lib/content/services";
import { projects } from "@/lib/content/projects";
import { insights } from "@/lib/content/insights";
import { sectors } from "@/lib/content/sectors";
import { locations } from "@/lib/content/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const map = (path: string): MetadataRoute.Sitemap[number] => ({
    url: `${site.domain}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  });

  const staticPages = [
    "",
    "/about",
    "/process",
    "/services",
    "/3d-studio",
    "/projects",
    "/insights",
    "/sectors",
    "/locations",
    "/contact",
    "/consultation",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ];

  return [
    ...staticPages.map(map),
    ...standardServices.map((s) => map(`/services/${s.slug}`)),
    ...projects.map((p) => map(`/projects/${p.slug}`)),
    ...insights.map((i) => map(`/insights/${i.slug}`)),
    ...sectors.map((s) => map(`/sectors/${s.slug}`)),
    ...locations.map((l) => map(`/locations/${l.slug}`)),
  ];
}
