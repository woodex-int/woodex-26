#!/usr/bin/env python3
"""P2 remaining: Projects as Linoxa Portfolio Two + case galleries."""
from pathlib import Path
import re

ROOT = Path("/home/user/WOODEX-26")
WA = "https://wa.me/923224000768?text=Hello%20Woodex%20%E2%80%94%20I%20have%20a%20space%20in%20mind."
TEL = "tel:+923362259477"


def btn(href, label, light=False, extra=""):
    cls = "btn btn-light" if light else "btn"
    return (
        f'<a class="{cls}" href="{href}"{extra}>'
        f'<span class="btn-label"><span>{label}</span><span>{label}</span></span>'
        f'<span class="btn-icon"><svg viewBox="0 0 16 16" fill="none">'
        f'<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>'
        f'<svg viewBox="0 0 16 16" fill="none">'
        f'<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>'
        f"</span></a>"
    )


def sp(p=""):
    return f'''
    <section class="sp-band" id="start-a-project">
      <div class="container">
        <p class="eyebrow" style="color:rgba(255,255,255,.5)" data-anim="fade">Start a project</p>
        <h2 data-anim="up">Ready for a space that feels as refined as it feels lived-in?</h2>
        <p class="lead" data-anim="fade">Tell us about your space on WhatsApp or call directly — we will respond with a thoughtful first step.</p>
        <div class="sp-meta">
          <div><h4>Studio</h4><p>LG 90 Link Road, Model Town<br>Lahore, Pakistan</p></div>
          <div><h4>Office timing</h4><p>10:00 – 8:30</p></div>
        </div>
        <div class="sp-actions">
          {btn(WA, "Message on WhatsApp +92 322 4000768", True, ' target="_blank" rel="noopener"')}
          {btn(TEL, "Call +92 336 2259477")}
          {btn(p + "start-your-project.html", "Write a brief", False)}
        </div>
      </div>
    </section>
'''


STUDIES = [
    {
        "file": "contemporary-retreat.html",
        "slug": "contemporary-retreat",
        "title": "Contemporary retreat",
        "h1": "A house that<br />can gather",
        "eye": "Villa study",
        "type": "Villa study",
        "place": "Lahore",
        "have": "Empty villa shell + plan",
        "cat": "residential",
        "blurb": "A family needed guests, prayer and a kitchen for twenty — not a show flat.",
        "hover": "Guests, prayer and a kitchen for twenty — approved as a room.",
        "img": "project-retreat.jpg",
        "gallery": ["project-retreat.jpg", "hero-1.jpg", "studio-kitchen.jpg", "craft-joinery.jpg"],
        "alts": [
            "Villa study — living and court still",
            "Gathering room — warm evening interior",
            "Kitchen drawn with the house",
            "Joinery connected to the interior",
        ],
        "req": "A family needed guests, prayer and a kitchen for twenty — not a show flat.",
        "had": "Empty shell in Lahore. Floor plan. References. No approved 3D.",
        "viz": "Stills of living, kitchen and court. Walnut, limestone, pool-house light — approved before joinery.",
        "boq": "After the stills. Joinery, wet areas, courtyard. Study until a client names a completed job.",
    },
    {
        "file": "urban-living-concept.html",
        "slug": "urban-living-concept",
        "title": "Urban living",
        "h1": "The long table<br />in a small plan",
        "eye": "Apartment study",
        "type": "Apartment study",
        "place": "Karachi",
        "have": "Compact plan",
        "cat": "residential",
        "blurb": "An apartment that had to hold work, guests and storage without leftover sofas.",
        "hover": "Compact plan. Work, guests and storage — then 3D.",
        "img": "project-urban.jpg",
        "gallery": ["project-urban.jpg", "hero-1.jpg", "studio-hero.jpg", "split-night.jpg"],
        "alts": [
            "Apartment study — long table in a small plan",
            "Living room that can work at night",
            "Approved still before joinery",
            "Night scene — how the room actually works",
        ],
        "req": "Work, guests and storage in one compact Karachi plan — no leftover sofas.",
        "had": "Existing apartment. Tight floor plate. A list of furniture they already owned.",
        "viz": "Stills of the long table, the desk that disappears, the storage wall.",
        "boq": "Joinery first. Loose pieces last. Study until a client names the job.",
    },
    {
        "file": "spatial-innovation.html",
        "slug": "spatial-innovation",
        "title": "Spatial innovation",
        "h1": "Approve the<br />volume first",
        "eye": "3D study",
        "type": "3D study",
        "place": "Studio",
        "have": "Volume / concept",
        "cat": "concept",
        "blurb": "See the section before decoration. Openings and the stair decide the rooms.",
        "hover": "Volume approved before a wall.",
        "img": "project-spatial.jpg",
        "gallery": ["project-spatial.jpg", "studio-hero.jpg", "hero-3.jpg", "project-minimal.jpg"],
        "alts": [
            "3D study — section and volume",
            "Studio still of the room to approve",
            "Openings and light before finishes",
            "Quiet volume — no decoration yet",
        ],
        "req": "See the section before decoration. Openings and the stair decide the rooms.",
        "had": "A volume. A brief. No finishes chosen.",
        "viz": "Section stills and a walkthrough of the void — not a furniture catalogue.",
        "boq": "Only after the volume is approved. Study, not a named build.",
    },
    {
        "file": "concrete-harmony.html",
        "slug": "concrete-harmony",
        "title": "Concrete harmony",
        "h1": "Survey,<br />then courtyard",
        "eye": "Renovation study",
        "type": "Renovation study",
        "place": "Lahore",
        "have": "Existing bones",
        "cat": "renovation",
        "blurb": "An existing house that no longer worked. Light and a court, not a new villa.",
        "hover": "Survey, then courtyard — the bones can hold this.",
        "img": "project-concrete.jpg",
        "gallery": ["project-concrete.jpg", "hero-3.jpg", "studio-pharmacy.jpg", "project-facade.jpg"],
        "alts": [
            "Renovation study — courtyard light",
            "Existing house, new night scene",
            "Calm rooms after survey",
            "Envelope that agrees with the court",
        ],
        "req": "An existing house that no longer worked. Light and a court, not a new villa.",
        "had": "Occupied house. Structural survey. A courtyard that had been built over.",
        "viz": "Stills of the reopened court and the rooms that look onto it.",
        "boq": "Demolition, wet areas, joinery. Written after the stills.",
    },
    {
        "file": "minimal-space-design.html",
        "slug": "minimal-space-design",
        "title": "Minimal space",
        "h1": "Path<br />and pause",
        "eye": "Showroom study",
        "type": "Showroom study",
        "place": "Study",
        "have": "Empty unit + brand",
        "cat": "concept",
        "blurb": "A room for product and a table for the decision. Not a warehouse with lights.",
        "hover": "Enter, pause, decide — a store that can sell.",
        "img": "project-minimal.jpg",
        "gallery": ["project-minimal.jpg", "hero-2.jpg", "studio-kitchen.jpg", "project-urban.jpg"],
        "alts": [
            "Showroom study — path and pause",
            "Table where the decision happens",
            "Joinery as the first piece of the brand",
            "Compact retail volume",
        ],
        "req": "A room for product and a table for the decision. Not a warehouse with lights.",
        "had": "Empty unit. Brand references. No path drawn.",
        "viz": "Stills of enter, pause, pay — one walk, one table.",
        "boq": "Counters, lighting, the long wall. After the walk is approved.",
    },
    {
        "file": "modern-facade-study.html",
        "slug": "modern-facade-study",
        "title": "Modern facade",
        "h1": "The room and<br />the building",
        "eye": "Envelope study",
        "type": "Envelope study",
        "place": "Study",
        "have": "Envelope + interior",
        "cat": "residential",
        "blurb": "Interior architecture that agrees with the envelope — openings, climate, identity.",
        "hover": "The room and the building — one instrument.",
        "img": "project-facade.jpg",
        "gallery": ["project-facade.jpg", "split-night.jpg", "project-concrete.jpg", "hero-3.jpg"],
        "alts": [
            "Envelope study — facade and room",
            "Night elevation and interior light",
            "Openings that the plan can hold",
            "Material and climate together",
        ],
        "req": "Interior architecture that agrees with the envelope — openings, climate, identity.",
        "had": "A facade direction. An interior brief. They were not talking to each other.",
        "viz": "Stills of the room as the facade lets light in — not a cladding catalogue.",
        "boq": "Openings, screens, the first joinery. After the section is approved.",
    },
]


def swap_main(path: Path, new_main: str):
    t = path.read_text(encoding="utf-8")
    t2, n = re.subn(r"<main>.*?</main>", new_main.strip(), t, count=1, flags=re.S)
    if n != 1:
        raise SystemExit(f"main not replaced in {path}: {n}")
    path.write_text(t2, encoding="utf-8")


def projects_main():
    cards = []
    # Wellstar wide named work
    wrapped = ['''
      <div class="folio-item wide" data-cat="all" data-anim="clip">
        <a class="folio-card wide" href="client-stories.html">
          <img src="images/studio-pharmacy.jpg" alt="Wellstar Pharmacy, Cosmetics and Mini Hospital — DHA Lahore" />
          <div class="folio-offer">
            <small>Named work</small>
            <h3>Wellstar, DHA Lahore</h3>
            <p>Pharmacy → Cosmetics → Mini Hospital. The only named client on this site.</p>
          </div>
        </a>
      </div>''']
    for s in STUDIES:
        wide = " wide" if s["slug"] == "contemporary-retreat" else ""
        wrapped.append(f'''
      <div class="folio-item{wide}" data-cat="{s["cat"]}" data-anim="scale">
        <a class="folio-card{wide}" href="projects/{s["file"]}">
          <img src="images/{s["img"]}" alt="{s["title"]} — {s["type"]}" />
          <div class="folio-hover">
            <div>
              <strong>{s["title"]}</strong>
              <span>{s["hover"]}</span>
            </div>
          </div>
        </a>
        <div class="folio-meta"><small>{s["type"]}</small><b>{s["title"]}</b></div>
      </div>''')

    return f'''  <main>
    <section class="cine-hero cine-short">
      <p class="cine-crumbs"><a href="index.html">Home</a> · Projects</p>
      <div class="cine-bg" aria-hidden="true"><div class="cine-slide is-on"><img src="images/project-retreat.jpg" alt="" /></div><div class="cine-slide"><img src="images/project-spatial.jpg" alt="" /></div><div class="cine-slide"><img src="images/project-urban.jpg" alt="" /></div><div class="cine-shade"></div></div>
      <div class="cine-inner">
        <p class="cine-eye">Studies, not a catalogue</p>
        <h1>Rooms drawn<br />so they can be built</h1>
        <div class="cine-row">
          {btn("client-stories.html", "Named work: Wellstar", True)}
          <p>Conceptual work is labelled a study. Named work on this site: Wellstar only.</p>
        </div>
      </div>
    </section>
    <section class="folio">
      <div class="container">
        <div class="folio-head">
          <div>
            <p class="eyebrow">Portfolio two</p>
            <h2>Studies — requirement, still, BOQ</h2>
          </div>
          <p>Hover a room. Open a study. Wellstar is the only named completed path.</p>
        </div>
        <div class="folio-filters" id="filters">
          <button class="filter-btn is-on" data-filter="all" type="button">All studies</button>
          <button class="filter-btn" data-filter="residential" type="button">Residential</button>
          <button class="filter-btn" data-filter="concept" type="button">3D / concept</button>
          <button class="filter-btn" data-filter="renovation" type="button">Renovation</button>
        </div>
        <div class="folio-grid">
          {"".join(wrapped)}
        </div>
      </div>
    </section>
    {sp("")}
  </main>
'''


def case_main(s):
    p = "../"
    others = [x for x in STUDIES if x["slug"] != s["slug"]][:3]
    gal = []
    for img, alt in zip(s["gallery"], s["alts"]):
        gal.append(
            f'<img class="lb-src" src="{p}images/{img}" alt="{alt}" />'
        )
    related = []
    for o in others:
        related.append(
            f'<a href="{o["file"]}"><img src="{p}images/{o["img"]}" alt="{o["title"]}" />'
            f'<span><small>{o["type"]}</small><b>{o["title"]}</b></span></a>'
        )
    return f'''  <main>
    <section class="cine-hero cine-short">
      <p class="cine-crumbs"><a href="{p}index.html">Home</a> · <a href="{p}projects.html">Projects</a> · {s["title"]}</p>
      <div class="cine-bg" aria-hidden="true"><div class="cine-slide is-on"><img src="{p}images/{s["img"]}" alt="" /></div><div class="cine-shade"></div></div>
      <div class="cine-inner">
        <p class="cine-eye">{s["eye"]}</p>
        <h1>{s["h1"]}</h1>
        <div class="cine-row">
          {btn(p + "start-your-project.html", "Start a similar brief", True)}
          <p>{s["blurb"]}</p>
        </div>
      </div>
    </section>
    <section class="bg-cream">
      <div class="container">
        <div class="case-facts" data-anim="fade">
          <div><h4>Type</h4><p>{s["type"]}</p></div>
          <div><h4>Place</h4><p>{s["place"]}</p></div>
          <div><h4>Have</h4><p>{s["have"]}</p></div>
          <div><h4>Path</h4><p>Requirement → 3D → BOQ</p></div>
        </div>
        <div class="case-feat" data-anim="clip" data-tilt>
          <img class="lb-src" src="{p}images/{s["img"]}" alt="{s["alts"][0]}" />
        </div>
        <div class="case-gallery" data-anim="fade">
          {"".join(gal)}
        </div>
        <div class="case-body">
          <div data-anim="left">
            <p class="eyebrow">Study, not a named case</p>
            <h2 style="font-size:clamp(1.7rem,3vw,2.4rem);font-weight:500;letter-spacing:-.035em;max-width:14ch;margin:8px 0 14px">Drawn so it can be built</h2>
            <p style="color:var(--muted)">{s["blurb"]} Named completed work on this site: Wellstar only.</p>
          </div>
          <div class="case-gates" data-anim="right">
            <article class="case-gate">
              <small>01 Requirement</small>
              <h3>What it had to do</h3>
              <p>{s["req"]}<br /><em>Had:</em> {s["had"]}</p>
            </article>
            <article class="case-gate navy">
              <small>02 3D</small>
              <h3>The room</h3>
              <p>{s["viz"]}</p>
              <div style="margin-top:16px">{btn(p + "3d-studio.html", "Open 3D Studio", True)}</div>
            </article>
            <article class="case-gate">
              <small>03 BOQ</small>
              <h3>Then money</h3>
              <p>{s["boq"]}</p>
            </article>
          </div>
        </div>
        <p class="eyebrow">Other studies</p>
        <div class="case-related">
          {"".join(related)}
        </div>
      </div>
    </section>
    {sp(p)}
  </main>
'''


def main():
    swap_main(ROOT / "projects.html", projects_main())
    for s in STUDIES:
        swap_main(ROOT / "projects" / s["file"], case_main(s))
        print("case", s["file"])
    print("projects hub + 6 galleries done")


if __name__ == "__main__":
    main()
