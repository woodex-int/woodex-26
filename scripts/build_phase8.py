#!/usr/bin/env python3
"""Phase 8 — unique cine pages: hub, about, craft, start, contact, projects, stories, 404."""
from pathlib import Path
ROOT = Path("/home/user/WOODEX-26")

BTN = '''<a class="btn {k}" href="{h}"><span class="btn-label"><span>{l}</span><span>{l}</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>'''

def chrome(title, desc, active):
    src = (ROOT / "3d-studio.html").read_text(encoding="utf-8")
    head = src.split("<main>")[0]
    head = head.replace("Woodex 3D Studio | See It. Understand It. Build It.", title)
    head = head.replace(
        "In-house 3D visualization — interiors, lighting, furniture, walkthroughs. Plan → model → material → light → visual → approval. Not just beautiful renders.",
        desc,
    )
    head = head.replace('class="active">3D Studio', ">3D Studio")
    head = head.replace('class="active">Process', ">Process")
    swaps = {
        "services": ('href="services.html">Services', 'href="services.html" class="active">Services'),
        "studio": ('href="3d-studio.html">3D Studio', 'href="3d-studio.html" class="active">3D Studio'),
        "projects": ('href="projects.html">Projects', 'href="projects.html" class="active">Projects'),
        "process": ('href="process.html">Process', 'href="process.html" class="active">Process'),
        "about": ('href="about.html">About', 'href="about.html" class="active">About'),
        "insights": ('href="insights.html">Insights', 'href="insights.html" class="active">Insights'),
    }
    if active in swaps:
        a, b = swaps[active]
        # only first nav occurrence
        head = head.replace(a, b, 1)
    foot = src.split("</main>")[1]
    return head, foot

def cine(crumbs, eye, h1, lead, href, label, slides):
    sl = "".join(
        f'<div class="cine-slide{" is-on" if i==0 else ""}"><img src="images/{im}" alt="" /></div>'
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

def write(name, title, desc, active, main):
    head, foot = chrome(title, desc, active)
    (ROOT / name).write_text(head + "<main>\n" + main + "\n  </main>" + foot, encoding="utf-8")
    print("wrote", name)

# ---------- SERVICES HUB ----------
groups = [
    ("Design", [
        ("Residential", "Living, kitchen, wardrobe — the house as one instrument.", "services/residential.html"),
        ("Space planning", "The test-fit. 3D after the plan.", "services/space-planning.html"),
        ("Architecture", "Volume — openings, stair, section.", "services/architecture.html"),
        ("Lighting", "The night scene, not a fitting catalogue.", "services/lighting.html"),
    ]),
    ("Commercial", [
        ("Office", "Arrival, focus, demo — not a mural.", "services/office.html"),
        ("Software house", "Focus and demo. Culture last.", "services/software-house.html"),
        ("Retail", "Enter, pause, pay.", "services/retail.html"),
        ("Shops & showrooms", "The walk and the negotiation table.", "services/shops.html"),
        ("Pharmacy", "Waiting, counter, dispensary. Wellstar is named work.", "services/pharmacy.html"),
    ]),
    ("Hospitality", [
        ("Restaurant", "The night room and the pass.", "services/restaurant.html"),
        ("Café", "The counter and one linger seat.", "services/cafe.html"),
    ]),
    ("Build + craft", [
        ("Fit-out", "Our still, or your drawings after review. Then BOQ.", "services/fit-out.html"),
        ("Renovation", "Survey first. Then the replan.", "services/renovation.html"),
        ("Joinery", "The piece as it will be made.", "services/joinery.html"),
        ("Drawings", "Sheets the site can build.", "services/drawings.html"),
        ("Woodex Craft", "Kitchens, wardrobes, mill.", "woodex-craft.html"),
    ]),
]
ghtml = ""
for title, items in groups:
    rows = "".join(
        f'<a class="flex justify-between gap-6 py-5 border-t border-black/10 hover:pl-2 transition-all group" href="{h}">'
        f'<span><strong class="block text-lg">{n}</strong><span class="text-muted text-sm">{d}</span></span>'
        f'<span class="text-wood opacity-0 group-hover:opacity-100 transition">→</span></a>'
        for n, d, h in items
    )
    ghtml += f'<div data-anim="fade"><p class="text-xs tracking-[0.16em] uppercase text-muted mb-2">{title}</p>{rows}<div class="border-b border-black/10"></div></div>'

write(
    "services.html",
    "Services | Defined rooms, outputs, paths | Woodex",
    "Woodex services defined by rooms, named outputs and a unique path — not a cloned card grid.",
    "services",
    cine('<a href="index.html">Home</a> · Services', "One partner. From concept to completion.",
         "What you are<br />actually buying",
         "Each service names the rooms, the outputs, and the gate you approve. 3D Studio is the highlight — not a sixth icon.",
         "start-your-project.html", "Start your project",
         ["hero-3.jpg", "hero-1.jpg", "studio-kitchen.jpg"])
    + '''
    <div class="st-ticker" aria-hidden="true"><div class="st-ticker-track">
      <span>Rooms</span><span>Named outputs</span><span>Unique path</span><span>Stop when you choose</span>
      <span>Rooms</span><span>Named outputs</span><span>Unique path</span><span>Stop when you choose</span>
    </div></div>
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-16">'''
    + ghtml +
    '''</div></section>
    <section class="sv-hl">
      <div class="container sv-hl-grid">
        <div data-anim="left">
          <p class="text-white/50 text-sm mb-3">The highlight of the site</p>
          <h2>3D Studio</h2>
          <p>You are not approving a plan. You are approving a room. That line lives here only — then every service points to the still when it needs one.</p>
          ''' + BTN.format(k="btn-light", h="3d-studio.html", l="Open 3D Studio") + '''
        </div>
        <div data-anim="clip" data-tilt><img src="images/studio-hero.jpg" alt="3D Studio" /></div>
      </div>
    </section>
    <section class="cta"><img src="images/split-night.jpg" alt="" /><div class="cta-shade"></div>
      <div class="cta-inner"><h2>Tell us what you have</h2><div><p>Empty shell, plan, drawings, or a live site.</p>'''
    + BTN.format(k="btn-light", h="start-your-project.html", l="Start your project") + '''</div></div></section>'''
)

# ---------- ABOUT ----------
stats = [
    ("500+", "Projects delivered"),
    ("~20", "Founder years in commercial interiors"),
    ("10+", "Years of the execution team"),
    ("ISO 9001", "Quality management"),
]
sh = "".join(
    f'<article class="rounded-[22px] p-8 {"bg-navy text-white" if i%2 else "bg-white"}" data-anim="scale" data-d="{i+1}">'
    f'<div class="text-4xl font-medium tracking-tight mb-3">{n}</div><p class="{"text-white/65" if i%2 else "text-muted"} text-sm">{l}</p></article>'
    for i, (n, l) in enumerate(stats)
)
write(
    "about.html",
    "About Woodex Interior | Drawn. Then Built.",
    "500+ projects. Founder ~20 years. 10+ years execution. ISO 9001. Wellstar Pharmacy, Cosmetics and Mini Hospital — DHA Lahore. Woodex Furniture.",
    "about",
    cine('<a href="index.html">Home</a> · About', "One partner. Concept to completion.",
         "Design should be<br />built, not presented",
         "Interior designers, in-house 3D, project specialists and craft. The same team that draws the room can take it through BOQ and site.",
         "start-your-project.html", "Start your project",
         ["hero-1.jpg", "studio-hero.jpg"])
    + f'''
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8">
        <p class="text-muted text-sm mb-3" data-anim="fade">Proof we can name</p>
        <h2 class="text-4xl font-medium tracking-tight max-w-xl mb-12" data-anim="up">Not awards. Work and years.</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{sh}</div>
      </div>
    </section>
    <section class="bg-white py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div data-anim="clip" data-tilt><img class="lb-src rounded-[28px] w-full h-[480px] object-cover" src="images/studio-pharmacy.jpg" alt="Wellstar path — pharmacy interiors" /></div>
        <div data-anim="right">
          <p class="text-muted text-sm mb-3">Beginning we can name</p>
          <h2 class="text-4xl font-medium tracking-tight mb-4">Wellstar, DHA Lahore</h2>
          <p class="text-muted mb-4">The practice begins with a complete job: Wellstar Pharmacy — design through execution. That work continued into Wellstar Cosmetics and Wellstar Mini Hospital.</p>
          <p class="text-muted">No other named clients on this site. Studies stay labelled studies. Woodex Furniture is the mill connected to the still.</p>
          <div class="mt-8">{BTN.format(k="", h="client-stories.html", l="Client stories")}</div>
        </div>
      </div>
    </section>
    <section class="bg-navy text-white py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-3 gap-10">
        <div data-anim="left" class="lg:col-span-1">
          <p class="text-white/50 text-sm mb-3">How we think</p>
          <h2 class="text-3xl font-medium tracking-tight">Design is not decoration</h2>
        </div>
        <div class="lg:col-span-2 grid sm:grid-cols-3 gap-6" data-anim="fade">
          <div><h3 class="text-xl mb-2">One team</h3><p class="text-white/65 text-sm">Designers, visualizers, project specialists, craft and site — in-house.</p></div>
          <div><h3 class="text-xl mb-2">One process</h3><p class="text-white/65 text-sm">Discover, design, visualize. Budget and BOQ before anyone builds.</p></div>
          <div><h3 class="text-xl mb-2">One result</h3><p class="text-white/65 text-sm">3D design. Approved visual. Built reality.</p></div>
        </div>
      </div>
    </section>
    <section class="cta"><img src="images/hero-2.jpg" alt="" /><div class="cta-shade"></div>
      <div class="cta-inner"><h2>We turn ideas into spaces</h2><div><p>Gulberg III Lahore · Clifton Karachi · F-7 Islamabad.</p>{BTN.format(k="btn-light", h="start-your-project.html", l="Start your project")}</div></div></section>'''
)

# ---------- CRAFT ----------
pieces = [
    ("studio-kitchen.jpg", "Kitchens", "Drawn with the 3D. Built for Tuesday and Eid."),
    ("project-urban.jpg", "Wardrobes", "Storage that disappears. A real dressing room."),
    ("hero-1.jpg", "Wall systems", "Media, study, the long piece that holds a life."),
    ("hero-3.jpg", "Counters", "Reception and retail — the first piece of the brand."),
    ("hero-2.jpg", "Hospitality joinery", "Banquettes and tables that survive service."),
]
ph = "".join(
    f'<article class="{"sm:col-span-2" if i==0 else ""} relative rounded-[22px] overflow-hidden min-h-[240px] bg-navy" data-anim="clip">'
    f'<img class="lb-src absolute inset-0 w-full h-full object-cover opacity-80" src="images/{im}" alt="{t}" />'
    f'<span class="absolute left-5 bottom-5 text-white"><small class="tracking-widest uppercase text-[10px] opacity-70">0{i+1}</small><b class="block text-xl">{t}</b><span class="text-sm text-white/70">{d}</span></span></article>'
    for i, (im, t, d) in enumerate(pieces)
)
write(
    "woodex-craft.html",
    "Woodex Craft | Kitchens, wardrobes, the mill",
    "Woodex Furniture — kitchens, wardrobes and joinery made to the approved still. ISO 9001.",
    "about",
    cine('<a href="index.html">Home</a> · Woodex Craft', "The mill · ISO 9001",
         "Made for<br />the room",
         "The still continues into the workshop. We do not make from a catalogue dropped on a plan.",
         "start-your-project.html", "Start a joinery brief",
         ["studio-kitchen.jpg", "hero-1.jpg"])
    + f'''
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8">
        <p class="text-muted text-sm mb-3" data-anim="fade">What the workshop makes</p>
        <h2 class="text-4xl font-medium tracking-tight mb-10" data-anim="up">You are approving the piece as it will be made</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{ph}</div>
      </div>
    </section>
    <section class="bg-navy text-white py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-3 gap-10">
        <div data-anim="left"><p class="text-wood text-sm mb-2">01</p><h3 class="text-2xl mb-2">Approve in 3D</h3><p class="text-white/65">The still is the contract with the mill.</p></div>
        <div data-anim="left" data-d="2"><p class="text-wood text-sm mb-2">02</p><h3 class="text-2xl mb-2">Budget / BOQ</h3><p class="text-white/65">Quantities in client language — inside Plan.</p></div>
        <div data-anim="left" data-d="3"><p class="text-wood text-sm mb-2">03</p><h3 class="text-2xl mb-2">Make + install</h3><p class="text-white/65">Site measure, make, install. ISO 9001.</p></div>
      </div>
    </section>
    <section class="cta"><img src="images/hero-1.jpg" alt="" /><div class="cta-shade"></div>
      <div class="cta-inner"><h2>The still can go to the mill</h2><div><p>Kitchen, wardrobe, or a piece of the room.</p>{BTN.format(k="btn-light", h="3d-studio.html", l="See it in 3D first")}</div></div></section>'''
)

# ---------- START ----------
write(
    "start-your-project.html",
    "Start your project | Woodex Interior",
    "Tell us what you have and what you need. One working day to a reply.",
    "",
    cine('<a href="index.html">Home</a> · Start', "Have → need → reply",
         "Tell us about<br />your space",
         "Empty shell, plan, drawings, or a live site. We start from what you have — not a blank marketing form.",
         "#brief", "Go to the brief",
         ["project-retreat.jpg", "hero-3.jpg"])
    + '''
    <section class="bg-navy text-white py-24" id="brief">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-16">
        <div data-anim="left">
          <p class="text-white/50 text-sm mb-3">What happens next</p>
          <h2 class="text-4xl font-medium tracking-tight mb-4">One working day.</h2>
          <p class="text-white/65 mb-8">A studio lead replies. We do not send a generic brochure. We ask about the rooms that decide the job.</p>
          <div class="space-y-4 text-sm">
            <div class="border-t border-white/10 pt-4"><small class="uppercase tracking-widest text-white/40">Email</small><p><a href="mailto:studio@woodex.interior">studio@woodex.interior</a></p></div>
            <div class="border-t border-white/10 pt-4"><small class="uppercase tracking-widest text-white/40">WhatsApp</small><p><a href="https://wa.me/9242111800800?text=Hello%20Woodex%20%E2%80%94%20I%20have%20a%20space%20in%20mind." target="_blank" rel="noopener">Start on WhatsApp</a></p></div>
            <div class="border-t border-white/10 pt-4"><small class="uppercase tracking-widest text-white/40">Studios</small><p>Gulberg III Lahore · Clifton Karachi · F-7 Islamabad</p></div>
          </div>
        </div>
        <form class="form" id="project-form" novalidate data-anim="right">
          <div class="form-row">
            <div class="field"><label for="name">Name</label><input id="name" name="name" required /></div>
            <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required /></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" /></div>
            <div class="field"><label for="city">City</label>
              <select id="city" name="city"><option>Lahore</option><option>Karachi</option><option>Islamabad</option><option>Other Pakistan</option></select>
            </div>
          </div>
          <div class="form-row">
            <div class="field"><label for="have">What do you have?</label>
              <select id="have" name="have">
                <option>Empty space</option><option>Floor plan</option><option>Existing design</option>
                <option>Brand guidelines</option><option>Reference images</option><option>Existing space / renovation</option><option>Nothing yet</option>
              </select>
            </div>
            <div class="field"><label for="need">What do you need?</label>
              <select id="need" name="need">
                <option>Interior design</option><option>3D visualization</option><option>Design + execution</option>
                <option>Execution only</option><option>Renovation</option><option>Joinery / furniture</option>
                <option>Retail / outlet</option><option>Office</option><option>Restaurant / café</option>
              </select>
            </div>
          </div>
          <div class="field"><label for="message">Notes</label><textarea id="message" name="message" required placeholder="Rooms, timeline, city. What must keep working."></textarea></div>
          ''' + BTN.replace("<a ", "<button type=\"submit\" ").replace("</a>", "</button>").replace('href="{h}"', "").format(k="", h="#", l="Send the brief") + '''
          <p class="form-note"></p>
        </form>
      </div>
    </section>'''
)

# ---------- CONTACT ----------
write(
    "contact.html",
    "Contact | Woodex Interior",
    "Studios in Gulberg III Lahore, Clifton Karachi, F-7 Islamabad. studio@woodex.interior",
    "",
    cine('<a href="index.html">Home</a> · Contact', "Three studios · Nationwide",
         "Stay connected<br />with us",
         "Lahore, Karachi, Islamabad. WhatsApp or email. Tell us what you have.",
         "mailto:studio@woodex.interior", "Email the studio",
         ["hero-3.jpg", "split-night.jpg"])
    + '''
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid md:grid-cols-3 gap-8">
        <div data-anim="fade"><small class="uppercase tracking-widest text-muted text-xs">Lahore</small><h3 class="text-2xl mt-2 mb-2">Gulberg III</h3><p class="text-muted text-sm">Studio. Meetings by appointment.</p></div>
        <div data-anim="fade" data-d="2"><small class="uppercase tracking-widest text-muted text-xs">Karachi</small><h3 class="text-2xl mt-2 mb-2">Clifton</h3><p class="text-muted text-sm">Studio. Nationwide site support.</p></div>
        <div data-anim="fade" data-d="3"><small class="uppercase tracking-widest text-muted text-xs">Islamabad</small><h3 class="text-2xl mt-2 mb-2">F-7</h3><p class="text-muted text-sm">Studio. North execution.</p></div>
      </div>
    </section>
    <section class="bg-white py-24">
      <div class="max-w-[760px] mx-auto px-8">
        <h2 class="text-3xl font-medium tracking-tight mb-8" data-anim="up">Write to the studio</h2>
        <form class="form" id="contact-form" novalidate data-anim="fade">
          <div class="form-row">
            <div class="field"><label for="name">Name</label><input id="name" name="name" required /></div>
            <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required /></div>
          </div>
          <div class="field"><label for="message">Notes</label><textarea id="message" name="message" required placeholder="What you have, city, rooms."></textarea></div>
          ''' + BTN.replace("<a ", "<button type=\"submit\" ").replace("</a>", "</button>").replace('href="{h}"', "").format(k="", h="#", l="Send") + '''
          <p class="form-note"></p>
        </form>
      </div>
    </section>'''
)

# ---------- PROJECTS ----------
studies = [
    ("contemporary-retreat", "project-retreat.jpg", "Contemporary retreat", "Villa study", "Requirement → still → BOQ path", "residential", True),
    ("urban-living-concept", "project-urban.jpg", "Urban living", "Apartment study", "Compact plan, then 3D", "residential", False),
    ("spatial-innovation", "project-spatial.jpg", "Spatial innovation", "3D study", "Volume approved before a wall", "concept", False),
    ("concrete-harmony", "project-concrete.jpg", "Concrete harmony", "Renovation study", "Survey, then courtyard", "renovation", False),
    ("minimal-space-design", "project-minimal.jpg", "Minimal space", "Showroom study", "Path and pause", "concept", False),
    ("modern-facade-study", "project-facade.jpg", "Modern facade", "Envelope study", "The room and the building", "residential", False),
]
cards = ""
for slug, img, t, k, path, cat, wide in studies:
    span = " md:col-span-2" if wide else ""
    cards += f'''<a class="block group{span}" href="projects/{slug}.html" data-cat="{cat}" data-anim="fade">
      <div class="relative overflow-hidden rounded-[22px] {"aspect-[16/10]" if wide else "aspect-[4/5]"} bg-navy">
        <img src="images/{img}" alt="{t}" class="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <span class="block mt-3 px-1"><small class="text-muted text-xs tracking-wide uppercase">{k}</small><b class="block">{t}</b><span class="text-muted text-sm">{path}</span></span>
    </a>'''

write(
    "projects.html",
    "Studies | Woodex Interior",
    "Woodex studies — labelled studies until a client names a case. Requirement → 3D → BOQ.",
    "projects",
    cine('<a href="index.html">Home</a> · Projects', "Studies, not a catalogue",
         "Rooms drawn<br />so they can be built",
         "Conceptual work is labelled a study. Named work on this site: Wellstar only.",
         "client-stories.html", "Named work: Wellstar",
         ["project-retreat.jpg", "project-spatial.jpg", "project-urban.jpg"])
    + f'''
    <section class="bg-cream py-20">
      <div class="max-w-[1240px] mx-auto px-8">
        <div class="flex flex-wrap gap-2 mb-10" id="filters">
          <button class="filter-btn is-on px-4 h-10 rounded-full border border-black/10 text-sm" data-filter="all" type="button">All studies</button>
          <button class="filter-btn px-4 h-10 rounded-full border border-black/10 text-sm" data-filter="residential" type="button">Residential</button>
          <button class="filter-btn px-4 h-10 rounded-full border border-black/10 text-sm" data-filter="concept" type="button">3D / concept</button>
          <button class="filter-btn px-4 h-10 rounded-full border border-black/10 text-sm" data-filter="renovation" type="button">Renovation</button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{cards}</div>
      </div>
    </section>'''
)

# ---------- CLIENT STORIES ----------
write(
    "client-stories.html",
    "Client stories | Wellstar | Woodex",
    "Named work: Wellstar Pharmacy, Cosmetics and Mini Hospital — DHA Lahore.",
    "projects",
    cine('<a href="index.html">Home</a> · <a href="projects.html">Projects</a> · Wellstar',
         "Named work · DHA Lahore",
         "Wellstar",
         "Pharmacy, then Cosmetics, then Mini Hospital. Design through execution. The only named client on this site.",
         "services/pharmacy.html", "Pharmacy interiors",
         ["studio-pharmacy.jpg", "hero-3.jpg"])
    + '''
    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-3 gap-6">
        <article class="bg-white rounded-[22px] p-8" data-anim="fade"><small class="text-wood">01</small><h3 class="text-2xl mt-2 mb-2">Pharmacy</h3><p class="text-muted text-sm">Counter, waiting, dispensary. A Saturday that works.</p></article>
        <article class="bg-navy text-white rounded-[22px] p-8" data-anim="fade" data-d="2"><small class="text-wood">02</small><h3 class="text-2xl mt-2 mb-2">Cosmetics</h3><p class="text-white/65 text-sm">The same client. Product and treatment as rooms.</p></article>
        <article class="bg-white rounded-[22px] p-8" data-anim="fade" data-d="3"><small class="text-wood">03</small><h3 class="text-2xl mt-2 mb-2">Mini Hospital</h3><p class="text-muted text-sm">Consult and calm public rooms. Still labelled as that path — not a brochure of awards.</p></article>
      </div>
    </section>
    <section class="cta"><img src="images/hero-3.jpg" alt="" /><div class="cta-shade"></div>
      <div class="cta-inner"><h2>A clinic or pharmacy brief</h2><div><p>We plan public rooms first. Then 3D. Then BOQ if we build.</p>'''
    + BTN.format(k="btn-light", h="start-your-project.html", l="Start your project") + '''</div></div></section>'''
)

# ---------- 404 ----------
write(
    "404.html",
    "Page not found | Woodex Interior",
    "This page is not on the site.",
    "",
    cine('<a href="index.html">Home</a> · 404', "Wrong turn",
         "This room<br />does not exist",
         "Go home, open 3D Studio, or start a brief.",
         "index.html", "Back to Home",
         ["project-minimal.jpg"])
)

print("phase 8 done")
