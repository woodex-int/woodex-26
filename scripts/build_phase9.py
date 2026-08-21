#!/usr/bin/env python3
"""Phase 9 — insights (have/BOQ/3D), cities, case studies Requirement→3D→BOQ."""
from pathlib import Path
ROOT = Path("/home/user/WOODEX-26")

BTN = '''<a class="btn {k}" href="{h}"><span class="btn-label"><span>{l}</span><span>{l}</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>'''

def chrome(title, desc, active, nested=False):
    src = (ROOT / "3d-studio.html").read_text(encoding="utf-8")
    head = src.split("<main>")[0]
    foot = src.split("</main>")[1]
    if nested:
        import re
        def pref(s):
            s = re.sub(r'href="(?!https?:|mailto:|#|tel:)', 'href="../', s)
            s = re.sub(r'src="(?!https?:|data:)', 'src="../', s)
            return s
        head, foot = pref(head), pref(foot)
    head = head.replace("Woodex 3D Studio | See It. Understand It. Build It.", title)
    head = head.replace(
        "In-house 3D visualization — interiors, lighting, furniture, walkthroughs. Plan → model → material → light → visual → approval. Not just beautiful renders.",
        desc,
    )
    head = head.replace('class="active">3D Studio', ">3D Studio")
    p = "../" if nested else ""
    if active == "insights":
        head = head.replace(f'href="{p}insights.html">Insights', f'href="{p}insights.html" class="active">Insights', 1)
    if active == "about":
        head = head.replace(f'href="{p}about.html">About', f'href="{p}about.html" class="active">About', 1)
    if active == "projects":
        head = head.replace(f'href="{p}projects.html">Projects', f'href="{p}projects.html" class="active">Projects', 1)
    return head, foot

def cine(crumbs, eye, h1, lead, href, label, slides, prefix=""):
    sl = "".join(
        f'<div class="cine-slide{" is-on" if i==0 else ""}"><img src="{prefix}images/{im}" alt="" /></div>'
        for i, im in enumerate(slides)
    )
    return f'''
    <section class="cine-hero">
      <p class="cine-crumbs">{crumbs}</p>
      <div class="cine-bg" aria-hidden="true">{sl}<div class="cine-shade"></div></div>
      <div class="cine-inner">
        <p class="cine-eye">{eye}</p>
        <h1>{h1}</h1>
        <div class="cine-row">
          {BTN.format(k="btn-light", h=href, l=label)}
          <p>{lead}</p>
        </div>
      </div>
    </section>'''

def write(rel, title, desc, active, main, nested=False):
    head, foot = chrome(title, desc, active, nested)
    (ROOT / rel).write_text(head + "<main>\n" + main + "\n  </main>" + foot, encoding="utf-8")
    print("wrote", rel)

# ===== INSIGHTS HUB =====
arts = [
    ("what-is-3d-visualization.html", "3D gate", "What is 3D visualization?", "A still is a meeting. Walkthrough only if the path matters."),
    ("interior-design-cost-pakistan.html", "BOQ gate", "Cost in Pakistan", "Price without a BOQ is a guess. Budget lives inside Plan."),
    ("design-vs-turnkey.html", "Stop rule", "Design vs turnkey", "3D-only is complete. Build is optional. We do not build a guess."),
    ("home-renovation-checklist.html", "Have / survey", "Renovation checklist", "Survey before 3D. Bones first."),
    ("office-interior-guide.html", "Workplace have", "Office interior guide", "What you have: empty floor, live office, or drawings."),
    ("restaurant-planning.html", "Night still", "Restaurant planning", "Approve the Saturday room, then BOQ."),
    ("retail-shop-interior.html", "Path", "Retail interiors", "Enter, pause, pay — then 3D of the path."),
]
alist = "".join(
    f'<a class="block py-6 border-t border-black/10 group" href="insights/{h}" data-anim="fade">'
    f'<small class="text-wood text-xs tracking-widest uppercase">{g}</small>'
    f'<strong class="block text-2xl mt-1 group-hover:text-wood transition">{t}</strong>'
    f'<span class="text-muted text-sm">{d}</span></a>'
    for h, g, t, d in arts
)
write("insights.html", "Insights | Have, 3D, BOQ | Woodex",
      "Woodex insights mapped to what you have, when 3D happens, and when BOQ is written.",
      "insights",
      cine('<a href="index.html">Home</a> · Insights', "Gates, not lifestyle posts",
           "Have. 3D.<br />Then BOQ.",
           "Seven notes. Each one sits on a gate in the process — not a generic blog.",
           "3d-studio.html", "Open 3D Studio",
           ["hero-1.jpg", "studio-kitchen.jpg"])
      + f'<section class="bg-cream py-20"><div class="max-w-[760px] mx-auto px-8">{alist}<div class="border-b border-black/10"></div></div></section>'
)

# ===== 7 INSIGHT ARTICLES =====
INS = [
    dict(slug="what-is-3d-visualization.html", gate="3D gate",
         title="What is 3D visualization?",
         desc="A still is a meeting. Walkthrough only if the sequence matters. 3D-only is complete.",
         h1="A still is<br />a meeting",
         lead="You are not buying a collage. You send a plan. We return rooms you can decide on. Then you may stop.",
         img="hero-1.jpg",
         have="A floor plan, references, or an existing design. We do not invent a layout in 3D and call it design.",
         three="Stills first. One still per key room. Walkthrough / 360 only if the path through the building is the point. One revision cycle. The still is the contract.",
         boq="Optional. The same still can go to BOQ and the mill. Reality is not required for 3D to be a complete engagement.",
         cta=("../3d-studio.html", "Open 3D Studio")),
    dict(slug="interior-design-cost-pakistan.html", gate="BOQ gate",
         title="Interior design cost in Pakistan",
         desc="Price without a BOQ is a guess. Budget lives inside Plan — after the still.",
         h1="Price without<br />a BOQ is a guess",
         lead="We do not publish a fake square-foot rate. Cost is written after you approve the room.",
         img="project-urban.jpg",
         have="A brief, a city, a band you can say out loud. Empty shell or renovation — that changes the number.",
         three="3D happens before the commercial conversation is real. You are not paying to visualise a layout you will change.",
         boq="Plan is where budget and BOQ live: what is included, in client language, tied to the approved still. Not a surprise on site.",
         cta=("../process.html", "See the process")),
    dict(slug="design-vs-turnkey.html", gate="Stop rule",
         title="Interior design vs turnkey",
         desc="3D-only is complete. Execution-only is real. We do not build a guess.",
         h1="You can stop<br />after the still",
         lead="Design is not decoration. Turnkey is not automatic. Two routes. Say which.",
         img="split-night.jpg",
         have="An idea, a plan, or a finished drawing set. That decides whether we design, visualise, or only execute.",
         three="Visualize is a gate. If you stop here, the engagement is complete.",
         boq="Build only after review. Route A: our still → BOQ → site. Route B: your drawings → technical review → then commercial.",
         cta=("../services/fit-out.html", "Fit-out routes")),
    dict(slug="home-renovation-checklist.html", gate="Have / survey",
         title="Home renovation checklist",
         desc="Survey before 3D. Bones first. Then the replan.",
         h1="Do not 3D<br />a fiction",
         lead="Moodboards before surveys produce kitchens that cannot be built inside the bones you own.",
         img="project-concrete.jpg",
         have="A lived-in house. What must stay habitable. Photos, a plan if you have one, the rooms that fail.",
         three="3D after the replan is approved — before/after of the rooms that change. Not first.",
         boq="After survey. Wet areas hide the expensive surprises. Phasing is part of the design.",
         cta=("../services/renovation.html", "Renovation path")),
    dict(slug="office-interior-guide.html", gate="Workplace have",
         title="Office interior guide",
         desc="Empty floor, live office, or drawings. Focus and demo before the mural.",
         h1="What workplace<br />do you have?",
         lead="A pretty reception is not culture. Approve arrival, focus and demo.",
         img="hero-3.jpg",
         have="Empty shell, existing office that must stay live, or an architect’s layout. Software house is a different plan.",
         three="Stills of reception and a typical neighbourhood. Brand as material, not a mural that dates.",
         boq="Partitions, ceiling, joinery, furniture. Phased if you cannot shut down.",
         cta=("../services/office.html", "Office interiors")),
    dict(slug="restaurant-planning.html", gate="Night still",
         title="Restaurant interior planning",
         desc="Approve the Saturday night room and the pass. Then BOQ.",
         h1="Lunch and midnight<br />are different plots",
         lead="A beautiful room that cannot turn tables is a set. Design from the kitchen outward.",
         img="hero-2.jpg",
         have="Empty shell, a live venue, or a chef’s concept. Covers, hours, cuisine.",
         three="Night-mood stills. A room approved only at noon will fail at 9pm.",
         boq="FF&E, joinery, kitchen interface — after the night still. Phased if you cannot close.",
         cta=("../services/restaurant.html", "Restaurant path")),
    dict(slug="retail-shop-interior.html", gate="Path",
         title="Retail shop interiors",
         desc="Enter, pause, pay. Then 3D of the path. Then a kit if you roll out.",
         h1="A shop is not<br />a warehouse with lights",
         lead="You approve the path — not a logo on a wall.",
         img="project-minimal.jpg",
         have="Empty unit, existing outlet, or a brand book. Showroom is a slower walk.",
         three="Full outlet model — display, light, checkout. Walk it before fit-out.",
         boq="Joinery and lighting after the walk is approved. Multi-city kit only after the first store.",
         cta=("../services/retail.html", "Retail path")),
]

for a in INS:
    gates = f'''
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-3 gap-6">
        <article class="bg-white rounded-[22px] p-8" data-anim="fade"><small class="text-wood uppercase tracking-widest text-xs">Have</small><h3 class="text-xl mt-2 mb-2">What you walk in with</h3><p class="text-muted text-sm">{a["have"]}</p></article>
        <article class="bg-navy text-white rounded-[22px] p-8" data-anim="fade" data-d="2"><small class="text-wood uppercase tracking-widest text-xs">3D</small><h3 class="text-xl mt-2 mb-2">When you see it</h3><p class="text-white/65 text-sm">{a["three"]}</p></article>
        <article class="bg-white rounded-[22px] p-8" data-anim="fade" data-d="3"><small class="text-wood uppercase tracking-widest text-xs">BOQ</small><h3 class="text-xl mt-2 mb-2">When money is written</h3><p class="text-muted text-sm">{a["boq"]}</p></article>
      </div>
    </section>
    <section class="cta"><img src="../images/{a["img"]}" alt="" /><div class="cta-shade"></div>
      <div class="cta-inner"><h2>Continue this gate</h2><div><p>Process, studio, or the service this note belongs to.</p>{BTN.format(k="btn-light", h=a["cta"][0], l=a["cta"][1])}</div></div></section>'''
    write(f"insights/{a['slug']}", f"{a['title']} | Woodex Insights", a["desc"], "insights",
          cine(f'<a href="../index.html">Home</a> · <a href="../insights.html">Insights</a> · {a["gate"]}',
               a["gate"], a["h1"], a["lead"], a["cta"][0], a["cta"][1], [a["img"]], "../"),
          nested=True)

# ===== LOCATIONS HUB =====
CITIES = [
    ("lahore", "Lahore", "Punjab · HQ", "Gulberg III studio, material library, 3D suite, Woodex Furniture. Where Wellstar DHA was designed and executed.", True, "hero-1.jpg"),
    ("karachi", "Karachi", "Sindh · studio", "Clifton studio. Coastal light, retail hours, hospitality that lasts a Saturday.", True, "hero-2.jpg"),
    ("islamabad", "Islamabad", "Capital · studio", "F-7 studio. North execution. Quieter rooms, stricter envelopes.", True, "hero-3.jpg"),
    ("rawalpindi", "Rawalpindi", "Twin city", "Served from Islamabad. Same process. Site by appointment.", False, "project-urban.jpg"),
    ("faisalabad", "Faisalabad", "Punjab", "Nationwide execution. Survey, 3D, BOQ, site from Lahore.", False, "project-facade.jpg"),
    ("multan", "Multan", "South Punjab", "Heat, courtyards, renovation of old bones. Survey first.", False, "project-concrete.jpg"),
    ("peshawar", "Peshawar", "Khyber Pakhtunkhwa", "Nationwide. We fly the still, then the team.", False, "project-spatial.jpg"),
    ("quetta", "Quetta", "Balochistan", "Nationwide. Climate and structure decide the plan.", False, "project-minimal.jpg"),
    ("sialkot", "Sialkot", "Punjab", "Workplaces and homes. Served from Lahore.", False, "project-urban.jpg"),
    ("gujranwala", "Gujranwala", "Punjab", "Nationwide. Same seven gates.", False, "hero-3.jpg"),
    ("hyderabad", "Hyderabad", "Sindh", "Served from Karachi. Retail and homes.", False, "hero-2.jpg"),
    ("bahawalpur", "Bahawalpur", "Punjab", "Nationwide. Survey, then 3D.", False, "project-retreat.jpg"),
]
clist = "".join(
    f'<a class="block p-6 rounded-[20px] {"bg-navy text-white" if st else "bg-white"} hover:-translate-y-0.5 transition" href="locations/{sl}.html" data-anim="fade">'
    f'<small class="text-xs tracking-widest uppercase {"text-wood" if st else "text-muted"}">{tag}</small>'
    f'<strong class="block text-xl mt-1">{n}</strong></a>'
    for sl, n, tag, _, st, _ in CITIES
)
write("locations.html", "Locations | Nationwide Pakistan | Woodex",
      "Studios in Lahore, Karachi, Islamabad. Execution nationwide.",
      "about",
      cine('<a href="index.html">Home</a> · Locations', "Three studios · Nationwide",
           "We work where<br />the site is",
           "Gulberg III, Clifton, F-7. The still travels. The team follows.",
           "start-your-project.html", "Start your project",
           ["hero-3.jpg", "studio-hero.jpg"])
      + f'<section class="bg-cream py-20"><div class="max-w-[1240px] mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{clist}</div></section>'
)

# ===== 12 CITY PAGES =====
for sl, name, tag, about, studio, img in CITIES:
    have = [
        ("Empty space", "Plan, design, 3D, budget, execute.", "../start-your-project.html"),
        ("Floor plan", "Turn the plan into a room you can approve.", "../3d-studio.html"),
        ("Drawings ready", "Review first. Then BOQ.", "../services/fit-out.html"),
        ("Existing space", "Survey before 3D.", "../services/renovation.html"),
    ]
    hrows = "".join(
        f'<a class="flex justify-between py-4 border-t border-black/10" href="{h}"><span><strong>{t}</strong><span class="block text-muted text-sm">{d}</span></span><span class="text-wood">→</span></a>'
        for t, d, h in have
    )
    note = "Studio city. Meetings by appointment." if studio else "No permanent studio. Same seven gates. Site from the nearest studio."
    write(f"locations/{sl}.html", f"Interior design in {name} | Woodex",
          f"Interior design, 3D, BOQ and execution in {name}. 500+ projects. ISO 9001.",
          "about",
          cine(f'<a href="../index.html">Home</a> · <a href="../locations.html">Locations</a> · {name}',
               tag, f"Interior design<br />in {name}", about,
               "../start-your-project.html", f"Start a {name} brief",
               [img], "../")
          + f'''
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-16">
        <div data-anim="left">
          <p class="text-muted text-sm mb-2">Presence</p>
          <h2 class="text-3xl font-medium tracking-tight mb-4">{note}</h2>
          <p class="text-muted">Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver. 3D-only is complete.</p>
        </div>
        <div data-anim="right">
          <p class="text-muted text-sm mb-2">What do you have in {name}?</p>
          {hrows}<div class="border-b border-black/10"></div>
        </div>
      </div>
    </section>
    <section class="sv-hl">
      <div class="container sv-hl-grid">
        <div data-anim="left"><p class="text-white/50 text-sm mb-3">Highlight</p><h2>See the {name} room first</h2><p>Stills from the 3D Studio. Then BOQ if we build here.</p>{BTN.format(k="btn-light", h="../3d-studio.html", l="Open 3D Studio")}</div>
        <div data-anim="clip"><img src="../images/studio-hero.jpg" alt="3D Studio" /></div>
      </div>
    </section>''',
          nested=True)

# ===== 6 CASE STUDIES =====
CASES = [
    dict(slug="contemporary-retreat.html", img="project-retreat.jpg", name="Contemporary retreat",
         kind="Villa study", city="Lahore", have="Empty villa shell + plan",
         h1="A house that<br />can gather",
         req="A family needed guests, prayer and a kitchen for twenty — not a show flat.",
         had="Empty shell in Lahore. Floor plan. References. No approved 3D.",
         d3="Stills of living, kitchen and court. Walnut, limestone, pool-house light — approved before joinery.",
         boq="After the stills. Joinery, wet areas, courtyard. Study until a client names a completed job."),
    dict(slug="urban-living-concept.html", img="project-urban.jpg", name="Urban living",
         kind="Apartment study", city="Karachi", have="Compact plan",
         h1="The long table<br />in a small plan",
         req="An apartment that had to hold work, guests and storage without leftover sofas.",
         had="Floor plan only. Tight envelope.",
         d3="Stills of living and the kitchen wall. Storage designed as architecture.",
         boq="Joinery-first BOQ. Planning-only could have stopped after the test-fit."),
    dict(slug="spatial-innovation.html", img="project-spatial.jpg", name="Spatial innovation",
         kind="3D study", city="Studio", have="Volume / concept",
         h1="Approve the<br />volume first",
         req="See the section before decoration. Openings and the stair decide the rooms.",
         had="A concept massing. No finishes yet.",
         d3="The still is the volume. This is a 3D Studio study — not a render farm collage.",
         boq="Optional. 3D-only is complete. Drawings if the volume is approved."),
    dict(slug="concrete-harmony.html", img="project-concrete.jpg", name="Concrete harmony",
         kind="Renovation study", city="Lahore", have="Existing bones",
         h1="Survey,<br />then courtyard",
         req="An existing house that no longer worked. Light and a court, not a new villa.",
         had="Lived-in home. Structure to respect. Services unknown until opened.",
         d3="Before/after stills after the replan — not before the survey.",
         boq="After survey. Wet areas first. Phasing so someone can stay."),
    dict(slug="minimal-space-design.html", img="project-minimal.jpg", name="Minimal space",
         kind="Showroom study", city="Study", have="Empty unit + brand",
         h1="Path<br />and pause",
         req="A room for product and a table for the decision. Not a warehouse with lights.",
         had="Empty unit. Brand direction. No fixtures yet.",
         d3="Walk the showroom in stills before fit-out.",
         boq="Display joinery and lighting after the walk is approved."),
    dict(slug="modern-facade-study.html", img="project-facade.jpg", name="Modern facade",
         kind="Envelope study", city="Study", have="Envelope + interior",
         h1="The room and<br />the building",
         req="Interior architecture that agrees with the envelope — openings, climate, identity.",
         had="A facade intent. Interior not yet planned.",
         d3="Volume and light stills. Section before decoration.",
         boq="If we stay: drawings and site. This page is a study."),
]
for c in CASES:
    path = f'''
    <section class="bg-cream py-20">
      <div class="max-w-[1240px] mx-auto px-8 grid md:grid-cols-4 gap-6 text-sm" data-anim="fade">
        <div><small class="text-muted uppercase tracking-widest">Type</small><p class="mt-1 font-medium">{c["kind"]}</p></div>
        <div><small class="text-muted uppercase tracking-widest">Place</small><p class="mt-1 font-medium">{c["city"]}</p></div>
        <div><small class="text-muted uppercase tracking-widest">Have</small><p class="mt-1 font-medium">{c["have"]}</p></div>
        <div><small class="text-muted uppercase tracking-widest">Path</small><p class="mt-1 font-medium">Requirement → 3D → BOQ</p></div>
      </div>
    </section>
    <section class="bg-white py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-3 gap-6">
        <article class="rounded-[22px] p-8 bg-cream" data-anim="left"><small class="text-wood">01 Requirement</small><h3 class="text-2xl mt-3 mb-3">What it had to do</h3><p class="text-muted text-sm">{c["req"]}</p><p class="text-muted text-sm mt-3"><em>Had:</em> {c["had"]}</p></article>
        <article class="rounded-[22px] p-8 bg-navy text-white" data-anim="fade"><small class="text-wood">02 3D</small><h3 class="text-2xl mt-3 mb-3">The room</h3><p class="text-white/65 text-sm">{c["d3"]}</p><div class="mt-6">{BTN.format(k="btn-light", h="../3d-studio.html", l="3D Studio")}</div></article>
        <article class="rounded-[22px] p-8 bg-cream" data-anim="right"><small class="text-wood">03 BOQ</small><h3 class="text-2xl mt-3 mb-3">Then money</h3><p class="text-muted text-sm">{c["boq"]}</p></article>
      </div>
      <p class="max-w-[1240px] mx-auto px-8 mt-10 text-muted text-sm" data-anim="fade">Study. Named completed work on this site: Wellstar Pharmacy, Cosmetics and Mini Hospital — DHA Lahore.</p>
    </section>'''
    write(f"projects/{c['slug']}", f"{c['name']} | Study | Woodex",
          f"{c['name']} — {c['kind']}. Requirement → 3D → BOQ. Labelled a study.",
          "projects",
          cine(f'<a href="../index.html">Home</a> · <a href="../projects.html">Projects</a> · {c["name"]}',
               c["kind"], c["h1"], c["req"], "../start-your-project.html", "Start a similar brief",
               [c["img"]], "../") + path,
          nested=True)

# ===== CAREERS =====
write("careers.html", "Careers | Woodex Interior",
      "The studio is the product. Designers, visualizers, site.",
      "about",
      cine('<a href="index.html">Home</a> · Careers', "The studio is the product",
           "Come draw.<br />Then build.",
           "We hire people who can sit in a still and on a site. Write to studio@woodex.interior.",
           "mailto:studio@woodex.interior", "Email the studio",
           ["hero-3.jpg", "studio-kitchen.jpg"])
      + f'''
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid md:grid-cols-3 gap-6">
        <article class="bg-white rounded-[22px] p-8" data-anim="fade"><h3 class="text-xl mb-2">Design</h3><p class="text-muted text-sm">A brief and a site meeting. Not decoration only.</p></article>
        <article class="bg-navy text-white rounded-[22px] p-8" data-anim="fade" data-d="2"><h3 class="text-xl mb-2">3D Studio</h3><p class="text-white/65 text-sm">Beside the people who specify the walnut.</p></article>
        <article class="bg-white rounded-[22px] p-8" data-anim="fade" data-d="3"><h3 class="text-xl mb-2">Site + craft</h3><p class="text-muted text-sm">Execution and Woodex Furniture.</p></article>
      </div>
    </section>'''
)

print("phase 9 done")
