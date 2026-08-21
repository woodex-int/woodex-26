#!/usr/bin/env python3
"""P3: canonical, OG, Twitter, JSON-LD on all 55 pages. Update Home schema."""
from pathlib import Path
import json
import re

ROOT = Path("/home/user/WOODEX-26")
BASE = "https://woodex.interior"

OG_BY = {
    "index.html": "hero-1.jpg",
    "3d-studio.html": "studio-hero.jpg",
    "about.html": "studio-hero.jpg",
    "contact.html": "hero-3.jpg",
    "projects.html": "project-retreat.jpg",
    "insights.html": "hero-1.jpg",
    "woodex-craft.html": "craft-joinery.jpg",
    "client-stories.html": "studio-pharmacy.jpg",
    "start-your-project.html": "hero-2.jpg",
    "process.html": "studio-hero.jpg",
    "services.html": "split-night.jpg",
}


def loc(rel: str) -> str:
    return BASE + "/" if rel == "index.html" else BASE + "/" + rel


def org_schema():
    return {
        "@context": "https://schema.org",
        "@type": "InteriorDesignStudio",
        "name": "Woodex Interior",
        "url": BASE + "/",
        "email": "studio@woodex.interior",
        "telephone": "+923362259477",
        "description": "Interior design, in-house 3D and execution. 500+ projects, ISO 9001. LG 90 Link Road, Model Town, Lahore.",
        "areaServed": ["Lahore", "Karachi", "Islamabad", "Pakistan"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "LG 90 Link Road, Model Town",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "PK",
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "20:30",
        },
    }


def crumbs(rel: str, title: str):
    items = [{"@type": "ListItem", "position": 1, "name": "Home", "item": BASE + "/"}]
    if rel == "index.html":
        return None
    parts = rel.split("/")
    if len(parts) == 1:
        items.append({"@type": "ListItem", "position": 2, "name": title, "item": loc(rel)})
    else:
        hub = parts[0] + ".html"
        hub_name = parts[0].replace("-", " ").title()
        items.append({"@type": "ListItem", "position": 2, "name": hub_name, "item": loc(hub)})
        items.append({"@type": "ListItem", "position": 3, "name": title, "item": loc(rel)})
    return {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items}


def article_schema(rel, title, desc):
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": desc,
        "datePublished": "2026-08-18",
        "dateModified": "2026-08-20",
        "author": {"@type": "Organization", "name": "Woodex studio"},
        "publisher": {"@type": "Organization", "name": "Woodex Interior", "url": BASE + "/"},
        "mainEntityOfPage": loc(rel),
        "image": BASE + "/images/hero-1.jpg",
    }


def faq_schema_home():
    pairs = [
        (
            "How do we approach complex design challenges?",
            "We begin with structured research — site, brand, culture and the way people actually move. Patterns become a brief. The brief becomes a spatial strategy.",
        ),
        (
            "What value do our services create?",
            "Value is a room that still feels right five years later. Material intelligence with operational thinking so homes, offices, restaurants and clinics perform after handover.",
        ),
        (
            "How do we customize each engagement?",
            "No two briefs share a template. We first understand goals, constraints and the building. Then we design a process scaled to the project.",
        ),
        (
            "How do we manage risk effectively?",
            "Surveys, phasing and transparent cost reporting so a live home or trading floor stays protected while the design reaches its intended quality.",
        ),
        (
            "What makes our firm trustworthy?",
            "500+ projects, founder ~20 years, execution 10+ years, ISO 9001, and studios you can visit. The finished room matches the still they approved.",
        ),
    ]
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": q,
                "acceptedAnswer": {"@type": "Answer", "text": a},
            }
            for q, a in pairs
        ],
    }


def inject(path: Path):
    rel = path.relative_to(ROOT).as_posix()
    text = path.read_text(encoding="utf-8")
    title_m = re.search(r"<title>([^<]+)</title>", text)
    desc_m = re.search(r'name="description" content="([^"]*)"', text)
    title = title_m.group(1).strip() if title_m else "Woodex Interior"
    desc = desc_m.group(1).strip() if desc_m else "Woodex Interior — drawn, then built."
    img = OG_BY.get(rel, "studio-hero.jpg")
    if rel.startswith("projects/"):
        img = {
            "contemporary-retreat.html": "project-retreat.jpg",
            "urban-living-concept.html": "project-urban.jpg",
            "spatial-innovation.html": "project-spatial.jpg",
            "concrete-harmony.html": "project-concrete.jpg",
            "minimal-space-design.html": "project-minimal.jpg",
            "modern-facade-study.html": "project-facade.jpg",
        }.get(path.name, img)
    if rel.startswith("insights/"):
        img = "hero-1.jpg"
    if rel.startswith("locations/"):
        img = "split-night.jpg"
    if rel.startswith("services/"):
        img = "hero-3.jpg"

    url = loc(rel)
    abs_img = BASE + "/images/" + img
    robots = "noindex, follow" if rel == "404.html" else "index, follow"

    tags = f'''  <link rel="canonical" href="{url}" />
  <meta name="robots" content="{robots}" />
  <meta name="theme-color" content="#0c1628" />
  <meta property="og:site_name" content="Woodex Interior" />
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{desc}" />
  <meta property="og:type" content="{'article' if rel.startswith('insights/') else 'website'}" />
  <meta property="og:url" content="{url}" />
  <meta property="og:image" content="{abs_img}" />
  <meta property="og:locale" content="en_PK" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{desc}" />
  <meta name="twitter:image" content="{abs_img}" />
'''

    graphs = []
    if rel in ("index.html", "about.html", "contact.html"):
        graphs.append(org_schema())
    if rel == "index.html":
        graphs.append(faq_schema_home())
    if rel.startswith("insights/") and rel != "insights.html":
        graphs.append(article_schema(rel, title, desc))
    bc = crumbs(rel, title.split("|")[0].strip())
    if bc:
        graphs.append(bc)

    ld = ""
    if graphs:
        payload = graphs[0] if len(graphs) == 1 else {"@context": "https://schema.org", "@graph": graphs}
        ld = (
            '  <script type="application/ld+json">\n'
            + json.dumps(payload, ensure_ascii=False, indent=2)
            + "\n  </script>\n"
        )

    # strip existing canonical / og / twitter / robots / theme-color / jsonld
    text = re.sub(r"\n\s*<link rel=\"canonical\"[^>]*>", "", text)
    text = re.sub(r"\n\s*<meta property=\"og:[^>]*>", "", text)
    text = re.sub(r"\n\s*<meta name=\"twitter:[^>]*>", "", text)
    text = re.sub(r"\n\s*<meta name=\"robots\"[^>]*>", "", text)
    text = re.sub(r"\n\s*<meta name=\"theme-color\"[^>]*>", "", text)
    text = re.sub(r"\n\s*<meta property=\"og:locale\"[^>]*>", "", text)
    text = re.sub(r"\n\s*<script type=\"application/ld\+json\">.*?</script>", "", text, flags=re.S)

    # insert after description or after viewport
    needle = None
    if desc_m:
        needle = desc_m.group(0)
    if needle and needle in text:
        text = text.replace(needle, needle + "\n" + tags + ld, 1)
    else:
        text = text.replace("</head>", tags + ld + "</head>", 1)

    path.write_text(text, encoding="utf-8")


def main():
    n = 0
    for p in sorted(ROOT.rglob("*.html")):
        if "scripts" in p.parts:
            continue
        inject(p)
        n += 1
        print("seo", p.relative_to(ROOT))
    print("done", n)


if __name__ == "__main__":
    main()
