#!/usr/bin/env node
// Broken-link + redirect audit for the Woodex web app.
// Usage: node scripts/audit-links.mjs [baseUrl]
//   baseUrl defaults to http://localhost:3000

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

const OLD_URLS = [
  "/index.html", "/services.html", "/projects.html", "/insights.html",
  "/about.html", "/process.html", "/3d-studio.html", "/contact.html",
  "/start-your-project.html", "/client-stories.html", "/woodex-craft.html",
  "/careers.html", "/faq.html", "/locations.html",
  "/services/architecture.html", "/services/fit-out.html", "/services/renovation.html",
  "/services/turnkey.html", "/services/drawings.html", "/services/joinery.html",
  "/services/visualization.html", "/services/residential.html", "/services/office.html",
  "/services/software-house.html", "/services/office-fit-out.html",
  "/services/commercial-fit-out.html", "/services/residential-fit-out.html",
  "/services/retail.html", "/services/shops.html", "/services/restaurant.html",
  "/services/cafe.html", "/services/lighting.html", "/services/space-planning.html",
  "/services/pharmacy.html",
  "/projects/commercial.html", "/projects/residential.html",
  "/projects/concrete-harmony.html", "/projects/contemporary-retreat.html",
  "/projects/minimal-space-design.html", "/projects/modern-facade-study.html",
  "/projects/spatial-innovation.html", "/projects/urban-living-concept.html",
  "/insights/3d.html", "/insights/cost.html", "/insights/process.html",
  "/insights/rooms.html", "/insights/design-vs-turnkey.html",
  "/insights/home-renovation-checklist.html",
  "/insights/interior-design-cost-pakistan.html", "/insights/office-interior-guide.html",
  "/insights/restaurant-planning.html", "/insights/retail-shop-interior.html",
  "/insights/what-is-3d-visualization.html",
];

const CITIES = [
  "lahore", "karachi", "islamabad", "rawalpindi", "faisalabad", "multan",
  "peshawar", "quetta", "sialkot", "gujranwala", "hyderabad", "bahawalpur",
];

async function status(path) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  return { status: res.status, location: res.headers.get("location") };
}

function sameHost(url) {
  try {
    const u = new URL(url, BASE);
    return u.origin === new URL(BASE).origin;
  } catch {
    return false;
  }
}

async function main() {
  const broken = [];
  const badRedirects = [];
  const seen = new Set();

  // 1. Crawl internal links from every page (via sitemap)
  let sitemapUrls = [];
  try {
    const xml = await (await fetch(BASE + "/sitemap.xml")).text();
    sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
      try {
        return new URL(m[1]).pathname;
      } catch {
        return m[1];
      }
    });
  } catch (e) {
    console.error("sitemap fetch failed:", e.message);
  }

  const pages = sitemapUrls.length ? sitemapUrls : ["/"];
  for (const p of pages) {
    if (seen.has(p)) continue;
    seen.add(p);
    const st = await status(p);
    if (st.status !== 200) broken.push(`${p} -> ${st.status}`);
    try {
      const html = await (await fetch(BASE + p)).text();
      const hrefs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
        .map((m) => m[1])
        .filter((h) => h && !h.startsWith("#") && !h.startsWith("data:") && !h.startsWith("mailto:") && !h.startsWith("tel:"));
      for (const h of hrefs) {
        if (!sameHost(h)) continue;
        const path = new URL(h, BASE).pathname + new URL(h, BASE).search;
        if (seen.has(path)) continue;
        seen.add(path);
        const st = await status(path);
        if (st.status !== 200) broken.push(`${p} -> ${path} -> ${st.status}`);
      }
    } catch (e) {
      broken.push(`${p} -> fetch error ${e.message}`);
    }
  }

  // 2. Redirect audit (old -> new)
  for (const old of OLD_URLS) {
    const st = await status(old);
    if (![301, 308].includes(st.status) || !st.location) {
      badRedirects.push(`${old} -> ${st.status} ${st.location ?? ""}`);
    }
  }
  for (const c of CITIES) {
    const old = `/locations/${c}.html`;
    const st = await status(old);
    if (![301, 308].includes(st.status)) badRedirects.push(`${old} -> ${st.status}`);
  }

  console.log(`\nChecked ${seen.size} internal paths.`);
  console.log(broken.length ? `\nBROKEN LINKS (${broken.length}):` : "\nNo broken links.");
  broken.forEach((b) => console.log("  " + b));
  console.log(badRedirects.length ? `\nBAD REDIRECTS (${badRedirects.length}):` : "\nAll redirects OK.");
  badRedirects.forEach((r) => console.log("  " + r));
  process.exit(broken.length || badRedirects.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
