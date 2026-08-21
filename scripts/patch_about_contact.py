#!/usr/bin/env python3
"""About brand-authority + team + furniture; Contact map + hours; real WhatsApp."""
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


SP = f'''
    <section class="sp-band" id="start-a-project">
      <div class="container">
        <p class="eyebrow" style="color:rgba(255,255,255,.5)" data-anim="fade">Start a project</p>
        <h2 data-anim="up">Ready for a space that feels as refined as it feels lived-in?</h2>
        <p class="lead" data-anim="fade">Tell us about your space on WhatsApp or call directly — we will respond with a thoughtful first step.</p>
        <div class="sp-meta">
          <div>
            <h4>Studio</h4>
            <p>LG 90 Link Road, Model Town<br>Lahore, Pakistan</p>
          </div>
          <div>
            <h4>Office timing</h4>
            <p>10:00 – 8:30</p>
          </div>
        </div>
        <div class="sp-actions">
          {btn(WA, "Message on WhatsApp +92 322 4000768", True, ' target="_blank" rel="noopener"')}
          {btn(TEL, "Call +92 336 2259477", False)}
        </div>
      </div>
    </section>
'''

ABOUT_MAIN = f'''  <main>
    <section class="cine-hero cine-short">
      <p class="cine-crumbs"><a href="index.html">Home</a> · About</p>
      <div class="cine-bg" aria-hidden="true"><div class="cine-slide is-on"><img src="images/hero-1.jpg" alt="" /></div><div class="cine-slide"><img src="images/studio-hero.jpg" alt="" /></div><div class="cine-shade"></div></div>
      <div class="cine-inner">
        <p class="cine-eye">One partner. Concept to completion.</p>
        <h1>Design should be<br />built, not presented</h1>
        <div class="cine-row">
          {btn("start-your-project.html", "Start your project", True)}
          <p>Interior designers, in-house 3D, project specialists and craft. The same team that draws the room can take it through BOQ and site.</p>
        </div>
      </div>
    </section>

    <section class="ab-proof">
      <div class="container">
        <p class="eyebrow" data-anim="fade">Brand authority we can name</p>
        <h2 data-anim="up">Not awards. Work, years and a mill.</h2>
        <div class="ab-stats">
          <article class="ab-stat" data-anim="scale"><b>500+</b><span>Projects delivered</span></article>
          <article class="ab-stat is-navy" data-anim="scale" data-d="2"><b>~20</b><span>Founder years in commercial interiors</span></article>
          <article class="ab-stat" data-anim="scale"><b>10+</b><span>Years of the execution team</span></article>
          <article class="ab-stat is-navy" data-anim="scale" data-d="2"><b>ISO 9001</b><span>Quality management — drawn, then built</span></article>
        </div>
      </div>
    </section>

    <section class="ab-auth">
      <div class="container ab-auth-grid">
        <div class="ab-auth-photo" data-anim="clip" data-tilt>
          <img class="lb-src" src="images/studio-hero.jpg" alt="A room drawn so it can be approved — then built" />
        </div>
        <div data-anim="right">
          <p class="eyebrow">How the studio holds authority</p>
          <h2 style="font-size:clamp(2rem,3.6vw,2.9rem);font-weight:500;letter-spacing:-.04em;max-width:14ch;margin:8px 0 16px">Design is not decoration. It is the foundation.</h2>
          <p style="color:var(--muted);max-width:44ch;margin-bottom:8px">We do not invent a layout in 3D and call it design. Space is planned. Then you see it. Then budget and BOQ. Then the mill and the site — if you want that from us.</p>
          <div class="ab-cards">
            <article class="ab-card">
              <div class="ico"><svg viewBox="0 0 20 20" fill="none"><path d="M3 16V5.5L10 3l7 2.5V16l-7 2.2L3 16z" stroke="currentColor" stroke-width="1.4"/><path d="M10 3v15.2M3 8.2h14" stroke="currentColor" stroke-width="1.4"/></svg></div>
              <h3>The plan before the picture</h3>
              <p>Test-fit and rooms first. 3D happens after — or not at all, if the brief is drawings only.</p>
            </article>
            <article class="ab-card">
              <div class="ico"><svg viewBox="0 0 20 20" fill="none"><path d="M4 15.5h12M5.5 15.5V6.2L10 4.2l4.5 2V15.5" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 10h4M8 12.5h4" stroke="currentColor" stroke-width="1.4"/></svg></div>
              <h3>Budget and BOQ before site</h3>
              <p>You approve a room you can pay for. Plan holds budget and the bill of quantities — then anyone builds.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="ab-furn" id="furniture">
      <div class="container ab-furn-grid">
        <div data-anim="left">
          <p class="eyebrow">Woodex Furniture</p>
          <h2>Custom furniture, connected to the interior</h2>
          <p>The still continues into the mill. Kitchens, wardrobes, counters and wall systems are drawn with the room — then made. We do not drop a catalogue on a plan.</p>
          <p>Joinery is part of the interior, not a second vendor after handover. ISO 9001 sits on how that work is run.</p>
          <ul class="ab-furn-list">
            <li>Kitchens drawn for Tuesday and Eid</li>
            <li>Wardrobes that disappear into the wall</li>
            <li>Counters — the first piece of a brand</li>
          </ul>
          {btn("woodex-craft.html", "Open Woodex Craft")}
        </div>
        <div class="ab-furn-media" data-anim="clip" data-tilt>
          <img class="lb-src" src="images/craft-joinery.jpg" alt="Custom walnut joinery made for the room — Woodex Furniture" />
        </div>
      </div>
    </section>

    <section class="ab-team" id="team">
      <div class="container">
        <p class="eyebrow" data-anim="fade">Team</p>
        <h2 data-anim="up">One studio. Four crafts.</h2>
        <p class="lead" data-anim="fade">We do not publish invented staff names. The work is held by design, 3D, execution and the mill — in-house.</p>
        <div class="ab-team-grid st-stagger" data-anim>
          <article class="ab-person">
            <img src="images/hero-1.jpg" alt="" />
            <div>
              <small>01</small>
              <h3>Design</h3>
              <p>Rooms, not decoration. Residential, office, hospitality, retail.</p>
            </div>
          </article>
          <article class="ab-person">
            <img src="images/studio-hero.jpg" alt="" />
            <div>
              <small>02</small>
              <h3>3D Studio</h3>
              <p>Stills, walkthrough, 360 — see the space before it exists.</p>
            </div>
          </article>
          <article class="ab-person">
            <img src="images/studio-pharmacy.jpg" alt="" />
            <div>
              <small>03</small>
              <h3>Execution</h3>
              <p>10+ years on site. BOQ, install, handover. ISO 9001.</p>
            </div>
          </article>
          <article class="ab-person">
            <img src="images/studio-kitchen.jpg" alt="" />
            <div>
              <small>04</small>
              <h3>Woodex Craft</h3>
              <p>The mill connected to the still. Furniture made for the interior.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-cream py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div data-anim="clip" data-tilt><img class="lb-src rounded-[28px] w-full h-[480px] object-cover" src="images/studio-pharmacy.jpg" alt="Wellstar path — pharmacy interiors, DHA Lahore" /></div>
        <div data-anim="right">
          <p class="eyebrow">Beginning we can name</p>
          <h2 class="text-4xl font-medium tracking-tight mb-4">Wellstar, DHA Lahore</h2>
          <p class="text-muted mb-4">The practice begins with a complete job: Wellstar Pharmacy — design through execution. That work continued into Wellstar Cosmetics and Wellstar Mini Hospital.</p>
          <p class="text-muted">No other named clients on this site. Studies stay labelled studies. Woodex Furniture is the mill connected to the still.</p>
          <div class="mt-8">{btn("client-stories.html", "Client stories")}</div>
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
    {SP}
  </main>
'''

CONTACT_MAIN = f'''  <main>
    <section class="cine-hero cine-short">
      <p class="cine-crumbs"><a href="index.html">Home</a> · Contact</p>
      <div class="cine-bg" aria-hidden="true"><div class="cine-slide is-on"><img src="images/hero-3.jpg" alt="" /></div><div class="cine-slide"><img src="images/split-night.jpg" alt="" /></div><div class="cine-shade"></div></div>
      <div class="cine-inner">
        <p class="cine-eye">Model Town, Lahore · 10:00 – 8:30</p>
        <h1>Stay connected<br />with us</h1>
        <div class="cine-row">
          {btn(WA, "Message on WhatsApp", True, ' target="_blank" rel="noopener"')}
          <p>Tell us about your space on WhatsApp or call directly — we will respond with a thoughtful first step.</p>
        </div>
      </div>
    </section>

    <section class="bg-cream" style="padding:48px 0 24px">
      <div class="container c2-facts">
        <div data-anim="fade">
          <h4>WhatsApp</h4>
          <a href="{WA}" target="_blank" rel="noopener">+92 322 4000768</a>
        </div>
        <div data-anim="fade" data-d="2">
          <h4>Call</h4>
          <a href="{TEL}">+92 336 2259477</a>
        </div>
        <div data-anim="fade">
          <h4>Address</h4>
          <p>LG 90 Link Road, Model Town<br>Lahore, Pakistan</p>
        </div>
        <div data-anim="fade" data-d="2">
          <h4>Office timing</h4>
          <p>10:00 – 8:30</p>
        </div>
      </div>
    </section>

    <section class="wx-map">
      <div class="wx-map-frame" data-anim="clip">
        <iframe title="Woodex Interior — LG 90 Link Road, Model Town, Lahore" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=LG+90+Link+Road+Model+Town+Lahore+Pakistan&amp;z=16&amp;output=embed"></iframe>
      </div>
      <p class="map-cap">LG 90 Link Road, Model Town, Lahore, Pakistan · <a href="https://www.google.com/maps/search/?api=1&amp;query=LG+90+Link+Road+Model+Town+Lahore+Pakistan" target="_blank" rel="noopener">Open in Google Maps</a></p>
    </section>

    <section class="bg-white py-24">
      <div class="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-start">
        <div data-anim="left">
          <p class="eyebrow">Write to the studio</p>
          <h2 class="text-4xl font-medium tracking-tight mb-4">A brief, not a form for its own sake</h2>
          <p class="text-muted mb-8 max-w-md">What you have, the city, the rooms. Frontend only for now — or skip this and message WhatsApp.</p>
          <form class="form" id="contact-form" novalidate>
            <div class="form-row">
              <div class="field"><label for="name">Name</label><input id="name" name="name" required /></div>
              <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required /></div>
            </div>
            <div class="field"><label for="message">Notes</label><textarea id="message" name="message" required placeholder="What you have, city, rooms."></textarea></div>
            <button type="submit" class="btn"><span class="btn-label"><span>Send</span><span>Send</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></button>
            <p class="form-note"></p>
          </form>
        </div>
        <div data-anim="right" class="rounded-[28px] bg-navy text-white p-10">
          <h3 class="text-2xl font-medium tracking-tight mb-4">Studio desk</h3>
          <p class="text-white/65 mb-6">LG 90 Link Road, Model Town, Lahore. Meetings by appointment inside 10:00 – 8:30.</p>
          <p class="text-white/65 mb-2"><a href="{WA}" target="_blank" rel="noopener">WhatsApp +92 322 4000768</a></p>
          <p class="text-white/65 mb-2"><a href="{TEL}">Call +92 336 2259477</a></p>
          <p class="text-white/65 mb-8"><a href="mailto:studio@woodex.interior">studio@woodex.interior</a></p>
          {btn(WA, "Message on WhatsApp", True, ' target="_blank" rel="noopener"')}
        </div>
      </div>
    </section>
    {SP}
  </main>
'''


def swap_main(path: Path, new_main: str):
    t = path.read_text(encoding="utf-8")
    t2, n = re.subn(r"<main>.*?</main>", new_main.strip(), t, count=1, flags=re.S)
    if n != 1:
        raise SystemExit(f"main not replaced in {path.name}: {n}")
    path.write_text(t2, encoding="utf-8")


def main():
    swap_main(ROOT / "about.html", ABOUT_MAIN)
    swap_main(ROOT / "contact.html", CONTACT_MAIN)

    # meta
    c = (ROOT / "contact.html").read_text(encoding="utf-8")
    c = c.replace(
        'content="Studios in Gulberg III Lahore, Clifton Karachi, F-7 Islamabad. studio@woodex.interior"',
        'content="LG 90 Link Road, Model Town, Lahore. WhatsApp +92 322 4000768. Office 10:00–8:30."',
    )
    (ROOT / "contact.html").write_text(c, encoding="utf-8")

    old = "https://wa.me/9242111800800"
    new = "https://wa.me/923224000768"
    n_wa = 0
    for p in ROOT.rglob("*.html"):
        if "scripts" in p.parts:
            continue
        t = p.read_text(encoding="utf-8")
        if old in t:
            t = t.replace(old, new)
            n_wa += 1
        t = t.replace(
            "<p>Lahore · Karachi · Islamabad<br />Nationwide Pakistan</p>",
            "<p>LG 90 Link Road, Model Town<br />Lahore, Pakistan<br />Office 10:00 – 8:30</p>",
        )
        p.write_text(t, encoding="utf-8")
    print("about+contact mains patched; wa files", n_wa)

    brand = ROOT / "docs" / "CONTENT_BRAND.md"
    if brand.exists():
        b = brand.read_text(encoding="utf-8")
        b = b.replace(
            "- WhatsApp: https://wa.me/9242111800800 (placeholder)",
            "- WhatsApp: https://wa.me/923224000768 (+92 322 4000768)\n"
            "- Call: +92 336 2259477\n"
            "- Studio: LG 90 Link Road, Model Town, Lahore, Pakistan\n"
            "- Office timing: 10:00 – 8:30",
        )
        brand.write_text(b, encoding="utf-8")


if __name__ == "__main__":
    main()
