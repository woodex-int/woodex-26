import type { FAQ } from "../types";

export type Sector = {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  capability: string;
  requirements: string[];
  services: string[]; // service slugs
  process: { title: string; body: string }[];
  considerations: string[];
  costFactors: string[];
  timelineFactors: string[];
  faqs: FAQ[];
  projects: string[]; // project slugs (may be empty — never fabricated)
  image: string;
};

export const sectors: Sector[] = [
  {
    slug: "residential",
    name: "Residential",
    h1: "Residential Interiors Designed for How You Live",
    intro:
      "Houses and apartments planned around daily use — circulation, storage, light and joinery — before any finish is chosen.",
    capability:
      "Woodex plans residential interiors from how the household actually lives: zones that support family flow, storage where it is used, kitchens and wardrobes designed to the space, and a material direction that is calm enough to live with.",
    requirements: [
      "Zoning for family flow and privacy",
      "Storage planned room by room",
      "Natural light and lighting direction",
      "Kitchen and wardrobe joinery",
      "Material direction that ages well",
    ],
    services: ["interior-design", "custom-furniture-joinery", "renovation", "3d-studio"],
    process: [
      { title: "Discover", body: "How the household lives, what it has, and what it needs to become." },
      { title: "Plan", body: "Zoning, circulation and storage tested against daily use." },
      { title: "Design", body: "Concept, materials and lighting resolved for the home." },
      { title: "Visualize", body: "3D of the key rooms so proportions are approved before build." },
      { title: "Document & build", body: "Drawings, BOQ, joinery and execution where in scope." },
    ],
    considerations: [
      "Family circulation and privacy",
      "Storage — planned, not added later",
      "Existing services in renovation work",
      "Finishes chosen to last, not just to photograph",
    ],
    costFactors: [
      "Area and number of rooms",
      "Kitchen and wardrobe joinery",
      "Materials and finishes",
      "Whether execution is in scope",
    ],
    timelineFactors: [
      "Brief clarity and decision speed",
      "Joinery lead times",
      "Scope — design only vs design and build",
    ],
    faqs: [
      {
        q: "Can you design a home without executing it?",
        a: "Yes. Design — space planning, concept and 3D — is a standalone engagement. Execution is a separate decision you take only after approving the design.",
      },
      {
        q: "Do you renovate existing homes?",
        a: "Yes. Woodex assesses the existing structure and MEP, then re-plans around them so the renovation scope is clear before execution.",
      },
      {
        q: "How are kitchens and wardrobes handled?",
        a: "As part of the design, not as an afterthought. They are planned into the layout and then designed, documented and manufactured through Woodex Furniture.",
      },
      {
        q: "Can you start from an empty house?",
        a: "Yes. An empty space is the standard starting point — the layout is resolved from how you need the house to work.",
      },
    ],
    projects: ["contemporary-retreat", "urban-living-concept"],
    image: "/images/hero-1.jpg",
  },
  {
    slug: "offices",
    name: "Offices",
    h1: "Office Interiors Planned for the Work, Not the Look",
    intro:
      "Arrival, focus and the demo room — an office planned around how people actually work, with the mural coming last.",
    capability:
      "Woodex plans office interiors from the work: team adjacencies, the meeting mix, focus versus collaboration, acoustics and lighting. The floor is resolved first; the look follows the plan.",
    requirements: [
      "Headcount and team adjacencies",
      "Meeting, focus and collaboration mix",
      "Acoustics and lighting",
      "Storage and IT/MEP coordination",
      "A fit-out scope that is documented and comparable",
    ],
    services: ["fit-out", "turnkey-execution", "interior-design", "drawings-boq"],
    process: [
      { title: "Workplace brief", body: "How teams work, who sits together, what the office must do." },
      { title: "Plan", body: "The floor resolved around arrival, focus and meetings." },
      { title: "Visualize", body: "3D of key spaces so decisions happen before the fit-out." },
      { title: "Document", body: "Drawings and BOQ for a comparable execution scope." },
      { title: "Fit out", body: "Procurement, MEP, finishes, joinery and handover." },
    ],
    considerations: [
      "Acoustics and lighting affect the work more than any finish",
      "MEP and IT coordination",
      "Phasing for occupied offices",
      "A documented scope so quotations are comparable",
    ],
    costFactors: [
      "Area and density",
      "Systems — ceilings, lighting, MEP",
      "Joinery and workstations",
      "Existing conditions",
    ],
    timelineFactors: [
      "Scope size",
      "Occupied vs vacant",
      "Material and joinery lead times",
    ],
    faqs: [
      {
        q: "How long does an office fit-out take?",
        a: "It depends on area, scope, materials and approvals. Woodex documents the scope and gives a timeline against the agreed BOQ, not a guess.",
      },
      {
        q: "Can you fit out an office from another designer's drawings?",
        a: "Yes. Woodex can review approved drawings and take them into execution, subject to scope, documentation and site conditions.",
      },
      {
        q: "Can you work in an occupied office?",
        a: "Where phasing allows. Woodex plans works around occupancy where required.",
      },
      {
        q: "Do you provide a BOQ for office fit-outs?",
        a: "Yes. Where documentation is in scope, working drawings and a bill of quantities are prepared before execution.",
      },
    ],
    projects: [],
    image: "/images/hero-3.jpg",
  },
  {
    slug: "retail",
    name: "Retail",
    h1: "Retail Interiors Planned Around the Customer Path",
    intro:
      "Enter, pause, pay — a shop planned as a walk, with display and lighting serving the product rather than competing with it.",
    capability:
      "Woodex plans retail interiors from the customer path: what a visitor sees first, where they pause and where they decide. Display, lighting and materials are chosen to present the product — the store's look follows the product's needs.",
    requirements: [
      "Entrance and storefront",
      "Customer flow and display systems",
      "Signage and lighting",
      "Checkout and service zones",
      "Staff and storage areas",
    ],
    services: ["interior-design", "fit-out", "custom-furniture-joinery", "3d-studio"],
    process: [
      { title: "Brand and space", body: "How the brand should continue into the space." },
      { title: "The walk", body: "The customer path planned before display or finishes." },
      { title: "Visualize", body: "3D of the store so the walk can be reviewed before build." },
      { title: "Document", body: "Drawings and BOQ for a clean fit-out scope." },
      { title: "Fit out", body: "Joinery, display, lighting and installation." },
    ],
    considerations: [
      "Display serves the product, not the other way around",
      "Lighting as a sales tool",
      "Durability of high-traffic finishes",
      "Brand continuity across the store",
    ],
    costFactors: [
      "Area and display system",
      "Lighting",
      "Joinery and fixtures",
      "Brand finishes",
    ],
    timelineFactors: [
      "Scope and site conditions",
      "Joinery and fixture lead times",
      "Opening date constraints",
    ],
    faqs: [
      {
        q: "Do you work with brand guidelines?",
        a: "Yes. Woodex takes brand guidelines into the space — entrance, flow, display, signage and service areas.",
      },
      {
        q: "Can you handle a flagship and a small shop?",
        a: "Both. The planning approach is the same; the scope scales with the space.",
      },
      {
        q: "How do you plan the customer path?",
        a: "The path is the layout — what a customer sees first, where they pause and where they decide. Display and finishes follow that walk.",
      },
    ],
    projects: ["minimal-space-design"],
    image: "/images/project-minimal.jpg",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    h1: "Hospitality Interiors Built to Be Experienced",
    intro:
      "Lobbies, lounges and guest areas designed to be remembered — planned around the guest journey and built to endure.",
    capability:
      "Woodex plans hospitality interiors around the guest journey: arrival, seating, service flow and the mood of the room across the day and the night. Materials and lighting are chosen to survive real use and still feel considered.",
    requirements: [
      "Guest journey and arrival",
      "Seating and service flow",
      "Day-to-night lighting",
      "Durable materials",
      "Acoustics",
    ],
    services: ["interior-design", "fit-out", "custom-furniture-joinery", "3d-studio"],
    process: [
      { title: "Experience brief", body: "How the space should feel and what it must do." },
      { title: "Plan", body: "Arrival, seating and service flow resolved." },
      { title: "Visualize", body: "Day and night 3D scenes for approval." },
      { title: "Document", body: "Drawings and BOQ for execution." },
      { title: "Execute", body: "Finishes, joinery, lighting and handover." },
    ],
    considerations: [
      "Day-to-night lighting is part of the concept",
      "Materials that survive service and traffic",
      "Acoustics in open guest areas",
      "Service flow, not just seating",
    ],
    costFactors: [
      "Area and guest density",
      "Lighting",
      "Materials and joinery",
      "Existing conditions",
    ],
    timelineFactors: [
      "Scope size",
      "Lead times",
      "Opening constraints",
    ],
    faqs: [
      {
        q: "Do you design restaurants and hotels?",
        a: "Woodex plans hospitality interiors — restaurants, cafés, lounges and guest areas — around the guest journey and service flow.",
      },
      {
        q: "How do you handle lighting in hospitality?",
        a: "Lighting is designed as part of the concept — the room reads differently at night than in the afternoon, and both are planned.",
      },
      {
        q: "Can you renovate an existing hospitality space?",
        a: "Yes. The existing structure and MEP are assessed first, then the new interior is planned around them.",
      },
    ],
    projects: [],
    image: "/images/split-night.jpg",
  },
  {
    slug: "restaurants-cafes",
    name: "Restaurants & Cafés",
    h1: "Restaurant and Café Interiors Planned Around Service",
    intro:
      "Tables, pass and light for a restaurant; the counter and one linger seat for a café — two economies, one planning discipline.",
    capability:
      "Woodex plans restaurants and cafés as a system: kitchen, service and seating working as one. The plan is resolved around how food moves, how staff move and how guests sit — before mood and materials.",
    requirements: [
      "Kitchen position and service flow",
      "Seating mix and guest flow",
      "Lighting — the day café and the night room",
      "Acoustics",
      "Durable, maintainable finishes",
    ],
    services: ["interior-design", "fit-out", "custom-furniture-joinery", "3d-studio"],
    process: [
      { title: "Service plan", body: "Kitchen, pass and seating resolved as one system." },
      { title: "Layout", body: "The room planned around food, staff and guest flow." },
      { title: "Visualize", body: "The night room — lighting and atmosphere approved in 3D." },
      { title: "Document", body: "Drawings and BOQ for execution." },
      { title: "Build", body: "Finishes, joinery and lighting to handover." },
    ],
    considerations: [
      "The kitchen position drives the plan",
      "Lighting defines the room",
      "Materials that survive a working service floor",
      "Acoustics in dining areas",
    ],
    costFactors: [
      "Seating count and density",
      "Lighting",
      "Joinery — counters, banquettes, fixtures",
      "Existing services",
    ],
    timelineFactors: [
      "Scope and site conditions",
      "Joinery lead times",
      "Opening date constraints",
    ],
    faqs: [
      {
        q: "Do you plan the kitchen too?",
        a: "Woodex plans the dining and service experience and coordinates with kitchen equipment requirements as part of the scope.",
      },
      {
        q: "Café or full restaurant — what is different?",
        a: "A café turns on the counter and a linger seat; a restaurant turns on the full service system. The planning discipline is the same.",
      },
      {
        q: "How do you design the lighting?",
        a: "Lighting is designed as part of the concept — the counter at morning, the room at night, both planned.",
      },
    ],
    projects: [],
    image: "/images/hero-2.jpg",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
