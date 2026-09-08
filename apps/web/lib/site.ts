// Single source of truth for brand facts. Do not invent values here.
// Mirrors docs/CONTENT_BRAND.md and content/site.json.

export const site = {
  name: "Woodex Interior",
  shortName: "Woodex",
  domain: "https://woodex.interior",
  masterLine: "DRAWN. THEN BUILT.",
  foundationLine:
    "DESIGN IS NOT DECORATION. DESIGN IS THE FOUNDATION OF A SUCCESSFUL PROJECT.",
  promise: "WE TURN IDEAS INTO SPACES.",
  proposition: "ONE PARTNER. FROM CONCEPT TO COMPLETION.",
  studioLine: "SEE IT. UNDERSTAND IT. BUILD IT.",
  studioExclusive: "You are not approving a plan. You are approving a room.",
  processPath: [
    "Discover",
    "Design",
    "Visualize",
    "Plan (budget + BOQ)",
    "Build",
    "Install",
    "Deliver",
  ],
  email: "studio@woodex.interior",
  phoneDisplay: "+92 336 2259477",
  phoneHref: "tel:+923362259477",
  whatsappNumber: "923224000768",
  whatsappDisplay: "+92 322 4000768",
  address: "LG 90 Link Road, Model Town, Lahore, Pakistan",
  hours: "10:00 – 8:30",
  studios: ["Gulberg III, Lahore", "Clifton, Karachi", "F-7, Islamabad"],
  proof: {
    projects: "500+",
    founderYears: "~20",
    executionYears: "10+",
    iso: "ISO 9001",
  },
  namedClient: "Wellstar",
} as const;

export type NavItem = { label: string; href: string; mega?: boolean };

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "3D Studio", href: "/3d-studio" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
