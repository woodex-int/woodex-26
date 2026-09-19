#!/usr/bin/env python3
"""
Woodex services v3 — canonical section-system page generator.

OWNER-LOCKED SECTION SYSTEM (2026-09-20) — every services page, same
section names, same order, unique content per page (Linoxa voice):

  1 hero              — ab-hero          (cine hero, trust chips)
  2 who-its-for       — td-who           (audiences)
  3 the-run           — td-process       (delivery steps)
  4 why-woodex        — td-why           (differentiators)
  5 faq               — td-faq           (accordion)
  6 slide             — td-services      (interactive swap, .st-space)
  7 related-services  — td-related       (cards)
  8 next-to-scope     — td-next          (adjacent scopes compare)
  9 statement-cta     — td-brief         ("Shell in. Business out." + form)

Chassis = css/threed.css (the Linoxa service-page system as shipped on
3d-studio.html). This generator preserves each page's shell (head,
header/mega, footer, scripts) and rewrites <main> + JSON-LD only.

Usage:
  python3 tools/build_services.py                 # build all pages
  python3 tools/build_services.py office-fit-out  # build one page

Data lives in tools/services_data.py. Add a page there, run, verify
with tests/pagecheck.mjs, commit.
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from services_data import PAGES, FACT_LOCK  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ARROW = '<svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>'
CHECK = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-10" stroke="currentColor" stroke-width="1.8"/></svg>'


def btn(label, href, cls="btn btn-light"):
    return (
        '<a class="{c}" href="{h}"><span class="btn-label"><span>{l}</span><span>{l}</span></span>'
        '<span class="btn-icon">{a}{a}</span></a>'
    ).format(c=cls, h=href, l=label, a=ARROW)


def esc_attr(s):
    return s.replace('"', "&quot;")


# ────────────────────────── section renderers ──────────────────────────

def s_hero(d):
    trust = "\n".join("          <div>%s</div>" % t for t in d["trust"])
    return """
    <!-- ═══ 01 · HERO ═══ -->
    <section class="ab-hero" data-section="hero" aria-labelledby="pg-h">
      <div class="ab-hero-bg" aria-hidden="true">
        <img src="{img}" alt="" width="1408" height="768" />
        <div class="ab-hero-shade"></div>
      </div>
      <div class="container ab-hero-inner">
        <p class="ab-crumbs">{crumbs}</p>
        <p class="eyebrow">{eyebrow}</p>
        <h1 id="pg-h">{h1}</h1>
        <p class="ab-hero-lead">{lead}</p>
        <div class="ab-hero-actions">
          {cta1}
          {cta2}
        </div>
        <div class="td-trust reveal" data-delay="120">
{trust}
        </div>
      </div>
    </section>""".format(
        img=d["img"], crumbs=d["crumbs"], eyebrow=d["eyebrow"], h1=d["h1"],
        lead=d["lead"], cta1=btn(d["cta1"], "#brief"), cta2=btn(d["cta2"], d["cta2_href"], "btn btn-ghost-light"),
        trust=trust,
    )


def s_who(d):
    cards = "\n".join(
        '          <div class="td-card reveal{dl}><h3>{t}</h3><p>{p}</p></div>'.format(
            dl=' data-delay="%d"' % (i * 50) if i else "", t=c[0], p=c[1])
        for i, c in enumerate(d["cards"]))
    return """
    <!-- ═══ 02 · WHO IT'S FOR ═══ -->
    <section class="td-who" data-section="who-its-for" aria-labelledby="who-h">
      <div class="container">
        <div class="sec-head reveal">
          <p class="eyebrow">02 — Who it's for</p>
          <h2 id="who-h">Who It's For</h2>
          <p>{sub}</p>
        </div>
        <div class="td-who-grid">
{cards}
        </div>
      </div>
    </section>""".format(sub=d["sub"], cards=cards)


def s_run(d):
    rows = "\n".join(
        '          <li class="reveal{dl}><b>{n}</b><div><h3>{t}</h3><p>{p}</p></div></li>'.format(
            dl=' data-delay="%d"' % ((i * 30) % 240) if i else "", n="%02d" % (i + 1), t=s[0], p=s[1])
        for i, s in enumerate(d["steps"]))
    cols = """<div class="sv-run-cols">
          <ol class="ab-gate-rows">{rows1}</ol>
          <ol class="ab-gate-rows">{rows2}</ol>
        </div>""" if d.get("two_col") else '<ol class="ab-gate-rows">\n%s\n        </ol>' % rows
    if d.get("two_col"):
        half = (len(d["steps"]) + 1) // 2
        r1 = "\n".join(rows.split("\n")[:len(rows.split("\n")) // 2])
        # split by items instead: rebuild
        items = ["          <li class=\"reveal{dl}\"><b>{n}</b><div><h3>{t}</h3><p>{p}</p></div></li>".format(
            dl=' data-delay="%d"' % ((i * 30) % 240) if i else "", n="%02d" % (i + 1), t=s[0], p=s[1])
            for i, s in enumerate(d["steps"])]
        cols = """<div class="sv-run-cols">
          <ol class="ab-gate-rows">
{a}
          </ol>
          <ol class="ab-gate-rows">
{b}
          </ol>
        </div>""".format(a="\n".join(items[:half]), b="\n".join(items[half:]))
    note = '\n        <p class="td-process-note reveal">%s</p>' % d["note"] if d.get("note") else ""
    return """
    <!-- ═══ 03 · THE RUN ═══ -->
    <section class="td-process" data-section="the-run" aria-labelledby="run-h" id="run">
      <div class="container">
        <div class="sec-head reveal">
          <p class="eyebrow">03 — The run</p>
          <h2 id="run-h">The Run — {title}</h2>
          <p>{sub}</p>
        </div>
        {cols}{note}
      </div>
    </section>""".format(title=d["title"], sub=d["sub"], cols=cols, note=note)


def s_why(d):
    cards = "\n".join(
        '          <div class="td-card reveal{dl}"><h3>{t}</h3><p>{p}</p></div>'.format(
            dl=' data-delay="%d"' % (i * 50) if i else "", t=c[0], p=c[1])
        for i, c in enumerate(d["cards"]))
    return """
    <!-- ═══ 04 · WHY WOODEX ═══ -->
    <section class="td-why" data-section="why-woodex" aria-labelledby="why-h">
      <div class="container">
        <div class="sec-head reveal">
          <p class="eyebrow">04 — Why Woodex</p>
          <h2 id="why-h">Why Woodex</h2>
        </div>
        <div class="td-why-grid">
{cards}
        </div>
      </div>
    </section>""".format(cards=cards)


def s_faq(d):
    items = "\n".join(
        '          <article class="faq-item reveal{dl}"><button class="faq-q" type="button">{q}<span class="plus"></span></button><div class="faq-a">{a}</div></article>'.format(
            dl=' data-delay="%d"' % ((i * 30) % 180) if i else "", q=f[0], a=f[1])
        for i, f in enumerate(d["items"]))
    return """
    <!-- ═══ 05 · FAQ ═══ -->
    <section class="td-faq" data-section="faq" aria-labelledby="faq-h">
      <div class="container">
        <div class="sec-head reveal">
          <p class="eyebrow">05 — FAQ</p>
          <h2 id="faq-h">Frequently Asked Questions</h2>
        </div>
        <div class="faq">
{items}
        </div>
      </div>
    </section>""".format(items=items)


def s_slide(d):
    btns = []
    for i, it in enumerate(d["items"]):
        btns.append(
            '            <button class="st-space{on}" type="button" data-img="{img}" data-alt="{alt}" data-cap="{cap}">\n'
            '              <span class="n">{n}</span>\n'
            '              <span><h3>{t}</h3><p>{p}</p></span>\n'
            '              {ar}\n'
            "            </button>".format(
                on=" is-on" if i == 0 else "", img=it["img"], alt=esc_attr(it["alt"]),
                cap=esc_attr(it["cap"]), n="%02d" % (i + 1), t=it["t"], p=it["p"], ar=ARROW))
    note = '\n        <p class="td-services-note reveal">%s</p>' % d["note"] if d.get("note") else ""
    return """
    <!-- ═══ 06 · SLIDE (interactive swap · .st-space hook) ═══ -->
    <section class="td-services" data-section="slide" aria-labelledby="sl-h">
      <div class="container">
        <div class="sec-pillars-head">
          <div class="reveal">
            <p class="eyebrow">06 — Slide</p>
            <h2 id="sl-h">{title}</h2>
          </div>
          <p class="reveal">{sub}</p>
        </div>
        <div class="sec-pillars-grid">
          <div class="sec-pillars-media reveal">
            <img id="st-space-img" src="{img0}" alt="{alt0}" width="1408" height="768" />
            <div class="sec-pillars-cap">
              <small>{label}</small>
              <strong id="st-space-cap">{cap0}</strong>
            </div>
          </div>
          <div class="sec-pillar-list" role="list">
{btns}
          </div>
        </div>{note}
      </div>
    </section>""".format(
        title=d["title"], sub=d["sub"], img0=d["items"][0]["img"],
        alt0=esc_attr(d["items"][0]["alt"]), cap0=d["items"][0]["cap"],
        label=d.get("label", "Item"), btns="\n".join(btns), note=note)


def s_related(d):
    cards = "\n".join(
        '          <a class="td-card reveal" data-delay="{dl}" href="{h}"><small>{s}</small><h3>{t}</h3><p>{p}</p><span class="sec-go">Explore {t} {ar}</span></a>'.format(
            dl=i * 70, s=c[0], t=c[1], p=c[2], h=c[3], ar=ARROW)
        for i, c in enumerate(d["cards"]))
    return """
    <!-- ═══ 07 · RELATED SERVICES ═══ -->
    <section class="td-related" data-section="related-services" aria-labelledby="rel-h">
      <div class="container">
        <div class="sec-head reveal">
          <p class="eyebrow">07 — Related services</p>
          <h2 id="rel-h">Related Services</h2>
        </div>
        <div class="td-related-grid">
{cards}
        </div>
        <p class="td-related-line reveal">Or see every service in <a href="{hub}">the full Woodex services index →</a></p>
      </div>
    </section>""".format(cards=cards, hub=d["hub"])


def s_next(d):
    cols = "\n".join(
        '            <div class="td-compare-col"><h3>{t}</h3><p>{p}</p></div>'.format(t=c[0], p=c[1])
        for c in d["cols"])
    return """
    <!-- ═══ 08 · NEXT TO THIS SCOPE (adjacent scopes) ═══ -->
    <section class="td-next" data-section="next-to-scope" aria-labelledby="nx-h">
      <div class="container">
        <div class="sec-head reveal">
          <p class="eyebrow">08 — Next to this scope</p>
          <h2 id="nx-h">Next to This Scope</h2>
          <p>{sub}</p>
        </div>
        <div class="td-compare td-next-compare">
{cols}
        </div>
        <p class="td-compare-note reveal">{note}</p>
      </div>
    </section>""".format(sub=d["sub"], cols=cols, note=d["note"])


def s_statement(d):
    nap = FACT_LOCK["nap_html"]
    checks = ""
    if d.get("points"):
        lis = "\n".join("            <li>%s %s</li>" % (CHECK, p) for p in d["points"])
        checks = '<ul class="td-checks td-brief-points">\n%s\n          </ul>' % lis
    return """
    <!-- ═══ 09 · STATEMENT + CTA ("Shell in. Business out.") ═══ -->
    <section class="td-brief" data-section="statement-cta" id="brief" aria-labelledby="st-h">
      <div class="container td-brief-grid">
        <div class="reveal">
          <p class="eyebrow">09 — Start</p>
          <h2 id="st-h">{h2}</h2>
          <p>{line}</p>
{checks}
          <div class="td-brief-nap">
            {nap}
          </div>
          <p class="td-brief-note">We respond within one business day. Your information is kept strictly confidential.</p>
        </div>
        {form}
      </div>
    </section>""".format(h2=d["h2"], line=d["line"], checks=checks, nap=nap, form=render_form(d["form"]))


def render_form(f):
    fields_html = []
    for fld in f["fields"]:
        req = " required" if fld.get("req", True) else ""
        if fld["type"] == "select":
            opts = "".join('<option>%s</option>' % o for o in fld["options"])
            control = '<select id="{i}" name="{n}"{r}>\n              <option value="" selected disabled>{ph}</option>\n              {o}\n            </select>'.format(
                i=fld["id"], n=fld["name"], r=req, ph=fld.get("ph", "Select…"), o=opts)
        elif fld["type"] == "textarea":
            control = '<textarea id="{i}" name="{n}" placeholder="{ph}"></textarea>'.format(
                i=fld["id"], n=fld["name"], ph=fld.get("ph", ""))
        else:
            control = '<input id="{i}" name="{n}" type="{t}"{r}{ac}{ph} />'.format(
                i=fld["id"], n=fld["name"], t=fld["type"], r=req,
                ac=' autocomplete="%s"' % fld["ac"] if fld.get("ac") else "",
                ph=' placeholder="%s"' % fld["ph"] if fld.get("ph") else "")
        fields_html.append(
            '            <div class="field"><label for="{i}">{l}</label>{c}</div>'.format(
                i=fld["id"], l=fld["label"], c=control))
    # pair consecutive fields marked half into td-form-rows
    out, i = [], 0
    fields = f["fields"]
    while i < len(fields):
        if fields[i].get("half") and i + 1 < len(fields) and fields[i + 1].get("half"):
            out.append('          <div class="td-form-row">\n%s\n%s\n          </div>' % (fields_html[i], fields_html[i + 1]))
            i += 2
        else:
            out.append("          " + fields_html[i].strip())
            i += 1
    return """<form class="td-form reveal" data-delay="100" action="#" method="post" onsubmit="return false;">
{rows}
          <button class="btn btn-light" type="submit"><span class="btn-label"><span>{sub}</span><span>{sub}</span></span><span class="btn-icon">{ar}{ar}</span></button>
        </form>""".format(rows="\n".join(out), sub=f["submit"], ar=ARROW)


# ────────────────────────── page assembly ──────────────────────────

SECTIONS = [s_hero, s_who, s_run, s_why, s_faq, s_slide, s_related, s_next, s_statement]


def build_ld(page, data):
    url = FACT_LOCK["base"] + "/" + data["url"]
    graph = [
        {
            "@type": "Service", "name": data["schema_name"], "serviceType": data["schema_name"],
            "description": data["desc"], "url": url,
            "provider": {
                "@type": "LocalBusiness", "name": "Woodex Interior", "url": FACT_LOCK["base"] + "/",
                "telephone": FACT_LOCK["phone"], "email": FACT_LOCK["email"],
                "address": {"@type": "PostalAddress", "streetAddress": FACT_LOCK["street"],
                            "addressLocality": "Lahore", "addressCountry": "PK"},
                "openingHours": FACT_LOCK["hours"],
            },
            "areaServed": ["Lahore", "Karachi", "Islamabad", "Pakistan"],
        },
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in data["faq"]["items"]]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": FACT_LOCK["base"] + "/"},
            {"@type": "ListItem", "position": 2, "name": "Services", "item": FACT_LOCK["base"] + "/services.html"},
            {"@type": "ListItem", "position": 3, "name": data["schema_name"], "item": url}]},
    ]
    return ('<script type="application/ld+json">\n'
            + json.dumps({"@context": "https://schema.org", "@graph": graph}, indent=2, ensure_ascii=False)
            + "\n  </script>")


def build(slug):
    data = PAGES[slug]
    data["hero"]["crumbs"] = data["crumbs"]  # page-level crumbs into hero slot
    path = os.path.join(ROOT, data["url"])
    src = open(path).read()
    head = src[:src.index("<main")]
    tail = src[src.index("</main>"):]

    # css links: enforce chassis + page override
    head = re.sub(r'<link rel="stylesheet" href="(?:\.\./)+css/(?:services|service-theme)\.css\?v=\d" />\n?\s*', "", head)
    if "threed.css" not in head:
        head = head.replace('<link rel="stylesheet" href="%scss/mega.css" />' % data["css_prefix"],
                            '<link rel="stylesheet" href="%scss/mega.css" />\n  <link rel="stylesheet" href="%scss/threed.css?v=3" />' % (data["css_prefix"], data["css_prefix"]))
    else:
        head = re.sub(r'href="(\.\./|\.\./\.\./)?css/threed\.css\?v=\d+"', 'href="%scss/threed.css?v=3"' % data["css_prefix"], head)
    if data.get("page_css"):
        base = os.path.basename(data["page_css_file"]).split("?")[0]  # e.g. of.css
        head = re.sub(r'<link rel="stylesheet" href="[^"]*/%s\?v=\d+" />\n?\s*' % base, "", head)  # stale versions
        if data["page_css_file"] not in head:
            head = head.replace('href="%scss/threed.css?v=3"' % data["css_prefix"],
                                'href="%scss/threed.css?v=3" />\n  <link rel="stylesheet" href="%s" />' % (data["css_prefix"], data["page_css_file"]))

    main = '<main id="main">\n' + "\n".join(fn(data[fn.__name__[2:]]) for fn in SECTIONS) + "\n  </main>"
    head = re.sub(r'<script type="application/ld\+json">.*?</script>', lambda m: build_ld(slug, data), head, flags=re.S)
    open(path, "w").write(head + main + tail)
    print("built %-22s %6d bytes  (%d sections)" % (data["url"], len(head + main + tail), len(SECTIONS)))


def main():
    targets = sys.argv[1:] or list(PAGES)
    for slug in targets:
        build(slug)
    print("\nVerify: node tests/pagecheck.mjs /<path> 1440 900 \"\" 1")


if __name__ == "__main__":
    main()
