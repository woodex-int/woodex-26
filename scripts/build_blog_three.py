#!/usr/bin/env python3
"""Insights listing + posts — Linoxa Blog Three layout and motion."""
from pathlib import Path
ROOT = Path("/home/user/WOODEX-26")

BTN = '''<a class="btn {k}" href="{h}"><span class="btn-label"><span>{l}</span><span>{l}</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>'''

def chrome(title, desc, nested=False, active="insights"):
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
    head = head.replace("<body>", '<body class="light-page">')
    head = head.replace('class="active">3D Studio', ">3D Studio")
    p = "../" if nested else ""
    head = head.replace(f'href="{p}insights.html">Insights', f'href="{p}insights.html" class="active">Insights', 1)
    return head, foot

POSTS = [
    dict(slug="what-is-3d-visualization.html", gate="3D gate", date="18 August 2026",
         title="What is 3D visualization?",
         h1="A still is a meeting",
         blurb="A still is a meeting. Walkthrough only if the path through the building matters.",
         img="hero-1.jpg",
         have="A floor plan, references, or an existing design. We do not invent a layout in 3D and call it design.",
         three="Stills first. One still per key room. Walkthrough / 360 only if the sequence matters. One revision cycle. The still is the contract.",
         boq="Optional. The same still can go to BOQ and the mill. 3D-only is a complete engagement.",
         body=["3D is not a marketing afterthought. It is how a family or a board approves materials, light and furniture before construction.",
               "A still is a decision. A walkthrough is a sequence. VR is for when you need to stand in the room. We model from the same drawings the mill will read."],
         cta=("../3d-studio.html", "Open 3D Studio")),
    dict(slug="interior-design-cost-pakistan.html", gate="BOQ gate", date="14 August 2026",
         title="Interior design cost in Pakistan",
         h1="Price without a BOQ is a guess",
         blurb="We do not publish a fake square-foot rate. Cost is written after you approve the room.",
         img="project-urban.jpg",
         have="A brief, a city, a band you can say out loud. Empty shell or renovation — that changes the number.",
         three="3D happens before the commercial conversation is real. You are not paying to visualise a layout you will change.",
         boq="Plan is where budget and BOQ live: what is included, in client language, tied to the approved still.",
         body=["Cost in Pakistan is not one number. A kitchen, a live office and a restaurant night room are different jobs.",
               "The honest sequence: approve the room, then write the BOQ. Anything earlier is a guess."],
         cta=("../process.html", "See the process")),
    dict(slug="design-vs-turnkey.html", gate="Stop rule", date="10 August 2026",
         title="Design vs turnkey execution",
         h1="You can stop after the still",
         blurb="Design is not decoration. Turnkey is not automatic. Two routes. Say which.",
         img="split-night.jpg",
         have="An idea, a plan, or a finished drawing set. That decides whether we design, visualise, or only execute.",
         three="Visualize is a gate. If you stop here, the engagement is complete.",
         boq="Build only after review. Route A: our still → BOQ → site. Route B: your drawings → technical review → then commercial.",
         body=["We do not promise unlimited free design. We do not build a guess.",
               "3D-only is a real Woodex engagement. Execution-only is also real — after we have read the drawings."],
         cta=("../services/fit-out.html", "Fit-out routes")),
    dict(slug="home-renovation-checklist.html", gate="Have / survey", date="4 August 2026",
         title="Home renovation checklist",
         h1="Do not 3D a fiction",
         blurb="Survey before 3D. Bones first. Moodboards before surveys produce kitchens that cannot be built.",
         img="project-concrete.jpg",
         have="A lived-in house. What must stay habitable. Photos, a plan if you have one, the rooms that fail.",
         three="3D after the replan is approved — before/after of the rooms that change. Not first.",
         boq="After survey. Wet areas hide the expensive surprises. Phasing is part of the design.",
         body=["Someone still has to live there. Survey, open up, find services. Then draw.",
               "3D of a plan that ignores structure is fiction."],
         cta=("../services/renovation.html", "Renovation path")),
    dict(slug="office-interior-guide.html", gate="Workplace have", date="28 July 2026",
         title="Office interior design guide",
         h1="What workplace do you have?",
         blurb="A pretty reception is not culture. Approve arrival, focus and demo.",
         img="hero-3.jpg",
         have="Empty shell, existing office that must stay live, or an architect’s layout.",
         three="Stills of reception and a typical neighbourhood. Brand as material, not a mural that dates.",
         boq="Partitions, ceiling, joinery, furniture. Phased if you cannot shut down.",
         body=["Talent and clients decide before they sit down.",
               "Software houses need focus and demo rooms. A slide in the lobby is not the plan."],
         cta=("../services/office.html", "Office interiors")),
    dict(slug="restaurant-planning.html", gate="Night still", date="21 July 2026",
         title="Restaurant interior planning",
         h1="Lunch and midnight are different plots",
         blurb="A beautiful room that cannot turn tables is a set. Design from the kitchen outward.",
         img="hero-2.jpg",
         have="Empty shell, a live venue, or a chef’s concept. Covers, hours, cuisine.",
         three="Night-mood stills. A room approved only at noon will fail at 9pm.",
         boq="FF&E, joinery, kitchen interface — after the night still. Phased if you cannot close.",
         body=["Atmosphere has to work alongside circulation, seating and the pass.",
               "Approve the Saturday room. Then write the BOQ."],
         cta=("../services/restaurant.html", "Restaurant path")),
    dict(slug="retail-shop-interior.html", gate="Path", date="12 July 2026",
         title="Retail shop interiors",
         h1="A shop is not a warehouse with lights",
         blurb="You approve the path — enter, pause, pay — not a logo on a wall.",
         img="project-minimal.jpg",
         have="Empty unit, existing outlet, or a brand book. Showroom is a slower walk.",
         three="Full outlet model — display, light, checkout. Walk it before fit-out.",
         boq="Joinery and lighting after the walk is approved. Multi-city kit only after the first store.",
         body=["Every square foot is a sales conversation.",
               "Brand into space. Then 3D of the path. Then BOQ."],
         cta=("../services/retail.html", "Retail path")),
]

def row(p, i):
    flip = " is-flip" if i % 2 else ""
    side = "right" if i % 2 == 0 else "left"
    href = f"insights/{p['slug']}"
    return f'''
      <article class="b3-row{flip}">
        <div class="b3-copy" data-anim="{'left' if not flip else 'right'}">
          <div class="b3-by">
            <div class="b3-ava" aria-hidden="true">W</div>
            <div>
              <small>Posted by</small>
              <strong>Woodex studio</strong>
            </div>
          </div>
          <p class="b3-date">{p['date']}</p>
          <p class="gate">{p['gate']}</p>
          <h2><a href="{href}">{p['title']}</a></h2>
          <p class="blurb">{p['blurb']}</p>
          {BTN.format(k="", h=href, l="Discover more")}
        </div>
        <a class="b3-media" href="{href}" data-anim="clip" data-tilt>
          <img src="images/{p['img']}" alt="{p['title']}" />
        </a>
      </article>'''

# listing
head, foot = chrome("Insights | Woodex Interior", "Notes from the studio — have, 3D, BOQ. Linoxa Blog Three layout.")
rows = "".join(row(p, i) for i, p in enumerate(POSTS))
listing = f'''
    <section class="b3">
      <div class="container">
        <h1 class="b3-title" data-anim="up">Checkout our latest<br />insights</h1>
        <p class="b3-sub" data-anim="fade">Have. 3D. Then BOQ. Seven notes — each one sits on a gate, not a lifestyle feed.</p>
        {rows}
      </div>
    </section>
    <section class="cta">
      <img src="images/split-night.jpg" alt="" />
      <div class="cta-shade"></div>
      <div class="cta-inner">
        <h2>Stay connected with us</h2>
        <div>
          <p>Have a space in mind? Tell us what you have and where you are in the process.</p>
          {BTN.format(k="btn-light", h="start-your-project.html", l="Get in touch")}
        </div>
      </div>
    </section>
'''
(ROOT / "insights.html").write_text(head + "<main>\n" + listing + "\n  </main>" + foot, encoding="utf-8")
print("wrote insights.html")

# posts
for i, p in enumerate(POSTS):
    nxt = POSTS[(i + 1) % len(POSTS)]
    prv = POSTS[(i - 1) % len(POSTS)]
    h, f = chrome(f"{p['title']} | Woodex Insights", p["blurb"], nested=True)
    main = f'''
    <section class="bp">
      <div class="bp-wrap">
        <p class="cine-crumbs" style="position:static;transform:none;color:var(--muted);margin-bottom:18px">
          <a href="../index.html">Home</a> · <a href="../insights.html">Insights</a> · {p['gate']}
        </p>
        <p class="gate" style="color:var(--wood);letter-spacing:.16em;text-transform:uppercase;font-size:.72rem">{p['gate']}</p>
        <h1 data-anim="up">{p['h1']}</h1>
        <div class="bp-meta" data-anim="fade">
          <div class="b3-ava">W</div>
          <div>Woodex studio · {p['date']}</div>
        </div>
      </div>
    </section>
    <div class="bp-hero" data-anim="clip"><img class="lb-src" src="../images/{p['img']}" alt="{p['title']}" /></div>
    <div class="bp-prose">
      {''.join(f'<p data-anim="fade">{para}</p>' for para in p['body'])}
      <div class="bp-gates">
        <article class="bp-gate" data-anim="fade"><small>Have</small><h3>What you walk in with</h3><p>{p['have']}</p></article>
        <article class="bp-gate navy" data-anim="fade"><small>3D</small><h3>When you see it</h3><p>{p['three']}</p></article>
        <article class="bp-gate" data-anim="fade"><small>BOQ</small><h3>When money is written</h3><p>{p['boq']}</p></article>
      </div>
      <div style="margin:28px 0">{BTN.format(k="", h=p['cta'][0], l=p['cta'][1])}</div>
      <div class="bp-related">
        <a href="{prv['slug']}"><small>Previous</small><h3>{prv['title']}</h3></a>
        <a href="{nxt['slug']}"><small>Next</small><h3>{nxt['title']}</h3></a>
      </div>
    </div>
'''
    (ROOT / "insights" / p["slug"]).write_text(h + "<main>\n" + main + "\n  </main>" + f, encoding="utf-8")
    print("wrote", p["slug"])
print("blog three done")
