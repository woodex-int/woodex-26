import type { FAQ } from "../types";

export type Location = {
  city: string;
  slug: string;
  studio: string; // verified studio area only
  desk: string;
  intro: string;
  services: string[]; // service slugs
  projects: string[]; // project slugs (may be empty)
  serviceAreas: string[];
  faqs: FAQ[];
  mapQuery: string;
  image: string;
};

// Only verified operations. Studios: Gulberg III Lahore · Clifton Karachi · F-7 Islamabad.
export const locations: Location[] = [
  {
    city: "Lahore",
    slug: "lahore",
    studio: "Gulberg III, Lahore",
    desk: "LG 90 Link Road, Model Town, Lahore · 10:00–8:30",
    intro:
      "Lahore is Woodex's home. The studio desk is at LG 90 Link Road, Model Town, with the design studio in Gulberg III — and the Wellstar Pharmacy, Cosmetics and Mini Hospital project in DHA Lahore is the complete design-to-execution path the studio cites as proof.",
    services: [
      "interior-design",
      "architecture",
      "fit-out",
      "turnkey-execution",
      "renovation",
      "custom-furniture-joinery",
      "drawings-boq",
      "3d-studio",
    ],
    projects: ["wellstar-pharmacy"],
    serviceAreas: ["DHA", "Gulberg", "Model Town", "Bahria Town", "Lahore and Punjab"],
    faqs: [
      {
        q: "Where is the Lahore studio?",
        a: "The design studio is in Gulberg III, Lahore, and the studio desk is at LG 90 Link Road, Model Town — 10:00 to 8:30.",
      },
      {
        q: "Do you serve DHA Lahore?",
        a: "Yes. The Wellstar Pharmacy, Cosmetics and Mini Hospital project in DHA Lahore is Woodex's named completed path.",
      },
      {
        q: "Which areas of Lahore do you cover?",
        a: "Woodex serves DHA, Gulberg, Model Town, Bahria Town and the wider Lahore and Punjab region.",
      },
    ],
    mapQuery: "Woodex Interior LG 90 Link Road Model Town Lahore",
    image: "/images/hero-1.jpg",
  },
  {
    city: "Karachi",
    slug: "karachi",
    studio: "Clifton, Karachi",
    desk: "Clifton, Karachi · served from the Woodex studios",
    intro:
      "Woodex's Karachi studio is in Clifton, serving the city's residential and commercial work from one point of contact — the same design-to-execution process, with the desk and team reachable on WhatsApp and by phone.",
    services: [
      "interior-design",
      "architecture",
      "fit-out",
      "turnkey-execution",
      "renovation",
      "custom-furniture-joinery",
      "drawings-boq",
      "3d-studio",
    ],
    projects: [],
    serviceAreas: ["Clifton", "DHA Karachi", "Gulshan", "Karachi and Sindh"],
    faqs: [
      {
        q: "Where is the Karachi studio?",
        a: "Woodex's Karachi studio is in Clifton, serving the city and Sindh projects from that studio.",
      },
      {
        q: "Which areas of Karachi do you serve?",
        a: "Clifton, DHA Karachi, Gulshan and the wider Karachi and Sindh region.",
      },
      {
        q: "Is the same team available in Karachi?",
        a: "Yes. Karachi projects run on the same process — discover, design, visualize, document and execute — with one accountable team.",
      },
    ],
    mapQuery: "Clifton Karachi",
    image: "/images/split-night.jpg",
  },
  {
    city: "Islamabad",
    slug: "islamabad",
    studio: "F-7, Islamabad",
    desk: "F-7, Islamabad · served from the Woodex studios",
    intro:
      "Woodex's Islamabad studio is in F-7, serving the capital and the north. The same one-team path — from brief through 3D, BOQ and execution — is available for Islamabad residential and commercial projects.",
    services: [
      "interior-design",
      "architecture",
      "fit-out",
      "turnkey-execution",
      "renovation",
      "custom-furniture-joinery",
      "drawings-boq",
      "3d-studio",
    ],
    projects: [],
    serviceAreas: ["F-7", "F-6", "E-11", "Bahria Town Islamabad", "Islamabad and Rawalpindi"],
    faqs: [
      {
        q: "Where is the Islamabad studio?",
        a: "Woodex's Islamabad studio is in F-7, serving the capital and the north.",
      },
      {
        q: "Do you serve Rawalpindi?",
        a: "Yes. Rawalpindi projects are served from the Islamabad studio.",
      },
      {
        q: "Which areas of Islamabad do you cover?",
        a: "F-7, F-6, E-11, Bahria Town Islamabad and the wider Islamabad and Rawalpindi region.",
      },
    ],
    mapQuery: "F-7 Islamabad",
    image: "/images/project-facade.jpg",
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
