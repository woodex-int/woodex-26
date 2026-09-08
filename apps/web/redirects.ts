// Old static HTML site (66+ pages) → new Next.js routes.
// Mirrors docs/FULLSTACK_MASTER_PLAN.md §21. Reversible; sector/location P1
// upgrades noted inline. permanent redirects (308) so search engines transfer
// signals and every old URL that had traffic stays reachable.

export type RedirectEntry = {
  source: string;
  destination: string;
  permanent: boolean;
};

type Pair = [source: string, destination: string];

const root: Pair[] = [
  ["/index.html", "/"],
  ["/services.html", "/services"],
  ["/projects.html", "/projects"],
  ["/insights.html", "/insights"],
  ["/about.html", "/about"],
  ["/process.html", "/process"],
  ["/3d-studio.html", "/3d-studio"],
  ["/contact.html", "/contact"],
  ["/start-your-project.html", "/consultation"],
  ["/client-stories.html", "/projects/wellstar-pharmacy"],
  ["/woodex-craft.html", "/services/custom-furniture-joinery"],
  ["/careers.html", "/about"],
  ["/faq.html", "/contact"],
  ["/locations.html", "/contact"], // P1: dedicated /locations hub
];

// 20 old services → 8 confirmed lines
const services: Pair[] = [
  ["/services/architecture.html", "/services/architecture"],
  ["/services/fit-out.html", "/services/fit-out"],
  ["/services/renovation.html", "/services/renovation"],
  ["/services/turnkey.html", "/services/turnkey-execution"],
  ["/services/drawings.html", "/services/drawings-boq"],
  ["/services/joinery.html", "/services/custom-furniture-joinery"],
  ["/services/visualization.html", "/3d-studio"],
  ["/services/residential.html", "/services/interior-design"],
  ["/services/office.html", "/services/fit-out"],
  ["/services/software-house.html", "/services/fit-out"],
  ["/services/office-fit-out.html", "/services/fit-out"],
  ["/services/commercial-fit-out.html", "/services/fit-out"],
  ["/services/residential-fit-out.html", "/services/fit-out"],
  ["/services/retail.html", "/sectors/retail"],
  ["/services/shops.html", "/sectors/retail"],
  ["/services/restaurant.html", "/sectors/restaurants-cafes"],
  ["/services/cafe.html", "/sectors/restaurants-cafes"],
  ["/services/lighting.html", "/services/interior-design"],
  ["/services/space-planning.html", "/services/interior-design"],
  ["/services/pharmacy.html", "/projects/wellstar-pharmacy"],
];

// 8 old project pages → 7 case studies + 2 hubs
const projects: Pair[] = [
  ["/projects/commercial.html", "/projects"],
  ["/projects/residential.html", "/projects"],
  ["/projects/concrete-harmony.html", "/projects/concrete-harmony"],
  ["/projects/contemporary-retreat.html", "/projects/contemporary-retreat"],
  ["/projects/minimal-space-design.html", "/projects/minimal-space-design"],
  ["/projects/modern-facade-study.html", "/projects/modern-facade-study"],
  ["/projects/spatial-innovation.html", "/projects/spatial-innovation"],
  ["/projects/urban-living-concept.html", "/projects/urban-living-concept"],
];

// 11 old insight pages → 7 articles (+ hubs)
const insights: Pair[] = [
  ["/insights/3d.html", "/insights/what-is-3d-visualization"],
  ["/insights/cost.html", "/insights/interior-design-cost-pakistan"],
  ["/insights/process.html", "/process"],
  ["/insights/rooms.html", "/insights"],
  ["/insights/design-vs-turnkey.html", "/insights/design-vs-turnkey"],
  ["/insights/home-renovation-checklist.html", "/insights/home-renovation-checklist"],
  ["/insights/interior-design-cost-pakistan.html", "/insights/interior-design-cost-pakistan"],
  ["/insights/office-interior-guide.html", "/insights/office-interior-guide"],
  ["/insights/restaurant-planning.html", "/insights/restaurant-planning"],
  ["/insights/retail-shop-interior.html", "/insights/retail-shop-interior"],
  ["/insights/what-is-3d-visualization.html", "/insights/what-is-3d-visualization"],
];

// 12 old city pages → verified studio pages; others → locations hub
const cities = [
  "lahore",
  "karachi",
  "islamabad",
  "rawalpindi",
  "faisalabad",
  "multan",
  "peshawar",
  "quetta",
  "sialkot",
  "gujranwala",
  "hyderabad",
  "bahawalpur",
];
const studioCities = new Set(["lahore", "karachi", "islamabad"]);
const locations: Pair[] = cities.map((c) => [
  `/locations/${c}.html`,
  studioCities.has(c) ? `/locations/${c}` : "/locations",
]);

export const redirects: RedirectEntry[] = [...root, ...services, ...projects, ...insights, ...locations].map(
  ([source, destination]) => ({
    source,
    destination,
    permanent: true,
  }),
);
