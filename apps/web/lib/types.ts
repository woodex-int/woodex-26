export type FAQ = { q: string; a: string };

export type ProcessStage = {
  title: string;
  inputs: string[];
  outputs: string[];
  approval: string;
};

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  category: "Design" | "Build" | "Visualize";
  shortLine: string;
  h1: string;
  definition: string;
  whoItIsFor: string[];
  problems: string[];
  deliverables: string[];
  inclusions: string[];
  exclusions: string[];
  process: ProcessStage[];
  costFactors: string[];
  timelineFactors: string[];
  faqs: FAQ[];
  relatedServices: string[];
  relatedProjects: string[];
  sectors: string[];
  ctaPrimary: string;
  whatsappMessage: string;
  image: string;
};

export type Project = {
  slug: string;
  name: string;
  type: "study" | "named";
  clientName?: string;
  sector: string;
  location: string;
  services: string[];
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  gallery: string[];
  featured?: boolean;
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  takeaways: string[];
  sections: { heading: string; body: string[] }[];
  faqs: FAQ[];
  relatedService: string;
  relatedProject: string;
  image?: string;
  date: string;
};
