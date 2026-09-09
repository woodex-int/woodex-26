import type { Project } from "../types";

// Portfolio items are studies until a client approves a name.
// Wellstar is the only named completed path (verified).
export const projects: Project[] = [
  {
    slug: "wellstar-pharmacy",
    name: "Wellstar — Pharmacy, Cosmetics & Mini Hospital",
    type: "named",
    clientName: "Wellstar",
    sector: "Healthcare",
    location: "DHA Lahore",
    services: ["interior-design", "turnkey-execution"],
    summary:
      "A complete design-to-execution path — from Wellstar Pharmacy through Wellstar Cosmetics to the Wellstar Mini Hospital — taken from first brief to handover by one team.",
    challenge:
      "Three connected healthcare spaces — a pharmacy, a cosmetics unit and a mini hospital — each with different functions, flows and approvals, had to feel like one coherent brand.",
    solution:
      "Woodex planned each space around its function, visualized the direction for approval, documented the scope and carried it through execution and handover under one accountable team.",
    result:
      "A connected Wellstar path delivered from design through execution — the named project Woodex cites as proof of concept-to-completion delivery.",
    image: "/images/studio-pharmacy.jpg",
    gallery: ["/images/studio-pharmacy.jpg", "/images/studio-kitchen.jpg"],
    featured: true,
  },
  {
    slug: "contemporary-retreat",
    name: "Contemporary Retreat",
    type: "study",
    sector: "Residential",
    location: "Pakistan",
    services: ["interior-design", "custom-furniture-joinery"],
    summary:
      "A villa study exploring a calm, contemporary residential interior — planned for the way the house is lived, then resolved through joinery and material direction.",
    challenge:
      "An open residential plan needed clear zoning, natural flow and built-in joinery that would not compete with the calm the client wanted.",
    solution:
      "Woodex tested the layout against daily use, developed a restrained material and lighting direction, and resolved built-in joinery as part of the same concept.",
    result:
      "A residential study taken through Requirement → 3D → BOQ, ready to move into documentation and execution where the client proceeds.",
    image: "/images/project-retreat.jpg",
    gallery: ["/images/project-retreat.jpg", "/images/hero-1.jpg"],
    featured: true,
  },
  {
    slug: "urban-living-concept",
    name: "Urban Living Concept",
    type: "study",
    sector: "Residential",
    location: "Pakistan",
    services: ["interior-design"],
    summary:
      "An apartment study for compact urban living — circulation, storage and proportion resolved before any wall was touched.",
    challenge:
      "A compact apartment had to feel larger and calmer without losing the storage and function urban living requires.",
    solution:
      "Woodex re-planned the layout around circulation and storage, then visualized the direction so proportions could be reviewed before commitment.",
    result:
      "An apartment concept proven in 3D and documented through the study path, ready for execution where the client proceeds.",
    image: "/images/project-urban.jpg",
    gallery: ["/images/project-urban.jpg", "/images/hero-2.jpg"],
    featured: true,
  },
  {
    slug: "spatial-innovation",
    name: "Spatial Innovation",
    type: "study",
    sector: "Visualization",
    location: "Pakistan",
    services: ["3d-studio", "drawings-boq"],
    summary:
      "A 3D study showing how visualization turns a plan into a space a client can review, approve and make decisions about before build.",
    challenge:
      "A spatial idea needed to be communicated clearly enough to drive approval decisions — materials, lighting and proportion — before documentation.",
    solution:
      "Woodex modeled, materialized and lit the space, producing views the client could approve, then carried the approved direction toward documentation.",
    result:
      "A visualization-led study following Requirement → 3D → BOQ, demonstrating the 3D Studio's role in approvals.",
    image: "/images/project-spatial.jpg",
    gallery: ["/images/project-spatial.jpg", "/images/studio-hero.jpg"],
    featured: true,
  },
  {
    slug: "concrete-harmony",
    name: "Concrete Harmony",
    type: "study",
    sector: "Renovation",
    location: "Pakistan",
    services: ["renovation", "fit-out"],
    summary:
      "A renovation study planned around an existing shell — structure and services assessed, then a new interior resolved within the constraints.",
    challenge:
      "An existing structure and its services limited what could change, and the new interior had to work around them without fighting them.",
    solution:
      "Woodex assessed the existing conditions, re-planned around structure and MEP, and documented a scope that respected the constraints.",
    result:
      "A renovation study taken through Requirement → 3D → BOQ, ready to move into execution where the client proceeds.",
    image: "/images/project-concrete.jpg",
    gallery: ["/images/project-concrete.jpg", "/images/hero-3.jpg"],
    featured: true,
  },
  {
    slug: "minimal-space-design",
    name: "Minimal Space",
    type: "study",
    sector: "Retail",
    location: "Pakistan",
    services: ["fit-out", "interior-design"],
    summary:
      "A showroom study for a minimal retail environment — the path a customer walks, the product display and the lighting resolved together.",
    challenge:
      "A showroom needed a clear customer path and product display that would not distract from the products themselves.",
    solution:
      "Woodex designed the walk first, then the display, materials and lighting, and documented a fit-out scope that could be executed cleanly.",
    result:
      "A retail study taken through Requirement → 3D → BOQ, ready for execution where the client proceeds.",
    image: "/images/project-minimal.jpg",
    gallery: ["/images/project-minimal.jpg", "/images/split-night.jpg"],
    featured: true,
  },
  {
    slug: "modern-facade-study",
    name: "Modern Facade",
    type: "study",
    sector: "Architecture",
    location: "Pakistan",
    services: ["architecture", "3d-studio"],
    summary:
      "An envelope study — a facade direction developed, visualized and resolved to the point where it could move into documentation.",
    challenge:
      "A facade concept needed to be tested in proportion, material and light before it was worth documenting.",
    solution:
      "Woodex developed the massing and envelope, visualized the direction for approval, and prepared it to move into construction documentation.",
    result:
      "An architecture study taken through Requirement → 3D → BOQ, ready for documentation where the client proceeds.",
    image: "/images/project-facade.jpg",
    gallery: ["/images/project-facade.jpg", "/images/hero-1.jpg"],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
