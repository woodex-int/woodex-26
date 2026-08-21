#!/usr/bin/env python3
"""Build 4 missing service pages from fit-out chrome. Do not delete any file."""
from pathlib import Path
import re

ROOT = Path("/home/user/WOODEX-26/services")
SRC = (ROOT / "fit-out.html").read_text(encoding="utf-8")

PAGES = {
    "office-fit-out.html": {
        "title": "Office Fit-Out | Woodex Interior",
        "desc": "Office fit-out in Pakistan — live floor or shutdown. Review, BOQ, phasing, handover. Woodex Interior.",
        "crumb": "Office Fit-Out",
        "eye": "Fit-out · Workplace",
        "h1": "A floor that can<br />stay open",
        "lead": "Headcount, hybrid, a client path. Execute after the still — or after we have reviewed your drawings.",
        "approve_h": "The live floor",
        "approve_p": "You are approving a floor that can stay open — or a shutdown written in the scope.",
        "img": "../images/hero-3.jpg",
        "img2": "../images/project-spatial.jpg",
        "main": """
    <section class="sv-bento">
      <div class="container">
        <p class="eyebrow" data-anim="fade">Zones we fit out</p>
        <h2 data-anim="up">Workplace, built in sequence</h2>
        <div class="sv-bento-grid st-stagger" data-anim="fade">
          <article class="sv-bento-card"><img src="../images/hero-3.jpg" alt="Reception" /><span><small>01</small><b>Reception</b></span></article>
          <article class="sv-bento-card"><img src="../images/project-urban.jpg" alt="Workstations" /><span><small>02</small><b>Workstations</b></span></article>
          <article class="sv-bento-card"><img src="../images/project-spatial.jpg" alt="Meeting" /><span><small>03</small><b>Meeting &amp; demo</b></span></article>
          <article class="sv-bento-card"><img src="../images/project-minimal.jpg" alt="Focus" /><span><small>04</small><b>Focus rooms</b></span></article>
        </div>
      </div>
    </section>
    <section class="sv-intro">
      <div class="container sv-intro-grid">
        <div data-anim="left"><p class="eyebrow">The problem</p><h2>A pretty lobby is not a fit-out</h2><p>Cables, acoustics, a Thursday in June. The floor has to work while you still trade — or you write a shutdown.</p></div>
        <div data-anim="right"><p class="eyebrow">What you receive</p><h2>Phasing, BOQ, then site</h2><p>Route A: Woodex still → budget → BOQ → site. Route B: your drawings → review → then we build.</p></div>
      </div>
    </section>
    <section class="sv-tiles">
      <div class="container">
        <p class="eyebrow" data-anim="fade">This brief only</p>
        <h2 data-anim="up">Office fit-out layers</h2>
        <div class="sv-tile-list st-stagger" data-anim="fade">
          <article class="sv-tile"><div class="n">01</div><h3>Survey / live-floor rules</h3><p>What can stay open. What must close.</p></article>
          <article class="sv-tile"><div class="n">02</div><h3>Services</h3><p>Power, data, HVAC, lighting — written, not guessed.</p></article>
          <article class="sv-tile"><div class="n">03</div><h3>Partitions &amp; ceilings</h3><p>Neighbourhoods, meeting, the quiet room.</p></article>
          <article class="sv-tile"><div class="n">04</div><h3>Joinery</h3><p>Reception desk, tea, storage — mill after the still.</p></article>
        </div>
      </div>
    </section>
""",
    },
    "commercial-fit-out.html": {
        "title": "Commercial Fit-Out | Woodex Interior",
        "desc": "Commercial fit-out — shop, showroom, clinic, outlet. Path, counter, BOQ, site. Woodex Interior Pakistan.",
        "crumb": "Commercial Fit-Out",
        "eye": "Fit-out · Trade",
        "h1": "A shop that can<br />open on time",
        "lead": "Enter, pause, pay. The path is the brief. We execute after the still or after we have reviewed your drawings.",
        "approve_h": "The trading path",
        "approve_p": "You are approving enter, serve, close — then the site. Not a logo on a wall.",
        "img": "../images/project-minimal.jpg",
        "img2": "../images/studio-pharmacy.jpg",
        "main": """
    <section class="sv-routes">
      <div class="container">
        <p class="eyebrow" data-anim="fade">What we build</p>
        <h2 data-anim="up">Commercial rooms that have to sell</h2>
        <div class="sv-routes-grid">
          <article class="sv-route navy" data-anim="left"><small>01</small><h3>Shop &amp; outlet</h3><p>Path, counter, stock. Saturday must work.</p></article>
          <article class="sv-route paper" data-anim="right"><small>02</small><h3>Showroom &amp; clinic</h3><p>The walk and the table where the decision happens.</p></article>
        </div>
      </div>
    </section>
    <section class="sv-intro">
      <div class="container sv-intro-grid">
        <div data-anim="left"><p class="eyebrow">The problem</p><h2>A beautiful room that cannot trade is a set</h2><p>Stock, staff, the till. Fit-out is the path made real — after quantities are written.</p></div>
        <div data-anim="right"><p class="eyebrow">Two routes</p><h2>Our still, or your pack</h2><p>Woodex-designed: still → BOQ → site. Your drawings: review first. We do not build a guess.</p></div>
      </div>
    </section>
    <section class="sv-tiles">
      <div class="container">
        <p class="eyebrow" data-anim="fade">Sequence</p>
        <h2 data-anim="up">How a commercial floor is executed</h2>
        <div class="sv-tile-list st-stagger" data-anim="fade">
          <article class="sv-tile"><div class="n">01</div><h3>Path</h3><p>Enter, pause, pay — approved before demolition.</p></article>
          <article class="sv-tile"><div class="n">02</div><h3>Services</h3><p>Power to the till, light on the product.</p></article>
          <article class="sv-tile"><div class="n">03</div><h3>Counters</h3><p>The first piece of the brand — made, not catalogued.</p></article>
          <article class="sv-tile"><div class="n">04</div><h3>Handover</h3><p>Snag, keys, a Saturday that works.</p></article>
        </div>
      </div>
    </section>
""",
    },
    "residential-fit-out.html": {
        "title": "Residential Fit-Out | Woodex Interior",
        "desc": "House and apartment fit-out in Pakistan — kitchen, wardrobe, living. BOQ, mill, site. Woodex Interior.",
        "crumb": "Residential Fit-Out",
        "eye": "Fit-out · House",
        "h1": "The house as it<br />will be lived",
        "lead": "Living, kitchen, the quiet room — executed after the still. Joinery from the mill, not a catalogue dropped on a plan.",
        "approve_h": "The rooms together",
        "approve_p": "You are approving living, kitchen and the quiet room as they will be built — then the site starts.",
        "img": "../images/hero-1.jpg",
        "img2": "../images/studio-kitchen.jpg",
        "main": """
    <section class="sv-bento">
      <div class="container">
        <p class="eyebrow" data-anim="fade">Rooms we execute</p>
        <h2 data-anim="up">A house is one instrument</h2>
        <div class="sv-bento-grid st-stagger" data-anim="fade">
          <article class="sv-bento-card"><img src="../images/hero-1.jpg" alt="Living" /><span><small>01</small><b>Living &amp; dining</b></span></article>
          <article class="sv-bento-card"><img src="../images/studio-kitchen.jpg" alt="Kitchen" /><span><small>02</small><b>Kitchen</b></span></article>
          <article class="sv-bento-card"><img src="../images/craft-joinery.jpg" alt="Wardrobe" /><span><small>03</small><b>Wardrobes</b></span></article>
          <article class="sv-bento-card"><img src="../images/project-retreat.jpg" alt="Quiet room" /><span><small>04</small><b>Quiet room</b></span></article>
        </div>
      </div>
    </section>
    <section class="sv-intro">
      <div class="container sv-intro-grid">
        <div data-anim="left"><p class="eyebrow">The problem</p><h2>A kitchen that cannot be built is decoration</h2><p>Survey, still, BOQ, mill. The house has to work on a Tuesday and on Eid.</p></div>
        <div data-anim="right"><p class="eyebrow">Woodex Furniture</p><h2>The still continues into the mill</h2><p>Joinery drawn with the room. We do not drop a catalogue on a plan after handover.</p></div>
      </div>
    </section>
    <section class="sv-check"><div class="container sv-check-grid">
      <div data-anim="clip" data-tilt><img class="lb-src" src="../images/craft-joinery.jpg" alt="Residential joinery" /></div>
      <div data-anim="right">
        <p class="eyebrow">What you have</p>
        <h2>Shell, plan, or a live house</h2>
        <div>
          <a class="row" href="../start-your-project.html"><span><strong>Gray structure</strong><span>Finishes, kitchen, wardrobes, light.</span></span><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></a>
          <a class="row" href="../services/renovation.html"><span><strong>Lived-in house</strong><span>Survey first. Bones before 3D.</span></span><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></a>
          <a class="row" href="../woodex-craft.html"><span><strong>Kitchen &amp; wardrobe only</strong><span>Woodex Craft — the mill.</span></span><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></a>
        </div>
      </div>
    </div></section>
""",
    },
    "turnkey.html": {
        "title": "Turnkey Interiors | Woodex Interior",
        "desc": "Turnkey interiors — one partner from approved still to keys. Design, 3D, BOQ, mill, site. Woodex Interior Pakistan.",
        "crumb": "Turnkey Interiors",
        "eye": "Specialist · One contract",
        "h1": "One partner.<br />Concept to keys.",
        "lead": "Design through handover when that is the brief. 3D-only can still be complete. We do not sell turnkey as a slogan.",
        "approve_h": "The whole path",
        "approve_p": "You are approving one contract: design through keys — not a vendor list.",
        "img": "../images/split-night.jpg",
        "img2": "../images/project-retreat.jpg",
        "main": """
    <section class="sv-tiles">
      <div class="container">
        <p class="eyebrow" data-anim="fade">The path inside the contract</p>
        <h2 data-anim="up">Discover → deliver</h2>
        <div class="sv-tile-list st-stagger" data-anim="fade">
          <article class="sv-tile"><div class="n">01</div><h3>Discover</h3><p>What you have. What must keep working.</p></article>
          <article class="sv-tile"><div class="n">02</div><h3>Design</h3><p>Rooms. Not a moodboard.</p></article>
          <article class="sv-tile"><div class="n">03</div><h3>Visualize</h3><p>Approve a room, not a plan.</p></article>
          <article class="sv-tile"><div class="n">04</div><h3>Plan</h3><p>Budget and BOQ before anyone builds.</p></article>
          <article class="sv-tile"><div class="n">05</div><h3>Build &amp; install</h3><p>Site and mill. Then keys.</p></article>
        </div>
      </div>
    </section>
    <section class="sv-intro">
      <div class="container sv-intro-grid">
        <div data-anim="left"><p class="eyebrow">What turnkey is not</p><h2>Not unlimited design. Not a vendor pile.</h2><p>One studio. Written scope. 3D-only remains a complete engagement if you stop there.</p></div>
        <div data-anim="right"><p class="eyebrow">When it is the brief</p><h2>House, office, shop — one handover</h2><p>Fit-out two routes still apply if you arrive with drawings. Review first.</p></div>
      </div>
    </section>
    <section class="sv-routes">
      <div class="container">
        <p class="eyebrow" data-anim="fade">Stop when you choose</p>
        <h2 data-anim="up">Turnkey is optional</h2>
        <div class="sv-routes-grid">
          <article class="sv-route navy" data-anim="left"><small>A</small><h3>Stop at 3D</h3><p>Stills approved. You take the still elsewhere. That is complete.</p></article>
          <article class="sv-route paper" data-anim="right"><small>B</small><h3>Continue to keys</h3><p>BOQ, mill, site, snag. One partner.</p></article>
        </div>
      </div>
    </section>
""",
    },
}


def write(name, spec):
    t = SRC
    t = t.replace("Fit-Out & Execution | Woodex Interior", spec["title"])
    t = t.replace(
        "Interior fit-out in Pakistan — Woodex-designed projects or your drawings after technical review. BOQ, site, handover.",
        spec["desc"],
    )
    t = t.replace("https://woodex.interior/services/fit-out.html", f"https://woodex.interior/services/{name}")
    t = t.replace("Fit-Out & Execution", spec["crumb"])
    t = t.replace("Execution · Two routes", spec["eye"])
    t = t.replace("Drawn. Then built.<br />Not guessed on site.", spec["h1"])
    t = t.replace(
        "Two routes. Woodex-designed: design → 3D → budget → BOQ → site. Your drawings: review → commercial → execute.",
        spec["lead"],
    )
    t = t.replace("<h2 class=\"text-3xl md:text-4xl font-medium tracking-tight\">The scope</h2>",
                  f'<h2 class="text-3xl md:text-4xl font-medium tracking-tight">{spec["approve_h"]}</h2>')
    t = t.replace(
        "You are approving what will be built, in writing — then the site.",
        spec["approve_p"],
    )
    # replace body after approve through cta keep cta
    t = re.sub(
        r'(</section>\s*)<section class="sv-intro">.*?(<section class="cta">)',
        r"\1" + spec["main"] + r"\n    \2",
        t,
        count=1,
        flags=re.S,
    )
    # hero images
    t = t.replace('src="../images/split-night.jpg"', f'src="{spec["img"]}"', 1)
    (ROOT / name).write_text(t, encoding="utf-8")
    print("wrote", name)


def main():
    for name, spec in PAGES.items():
        write(name, spec)


if __name__ == "__main__":
    main()
