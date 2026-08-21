#!/usr/bin/env python3
"""Nav: About link, Services mega (3 cats), Projects category dropdown, FAQ."""
from pathlib import Path
import re

ROOT = Path("/home/user/WOODEX-26")
CHEV = (
    '<svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true">'
    '<path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" '
    'stroke-linecap="round" stroke-linejoin="round"/></svg>'
)


def depth(path: Path) -> str:
    return "../" if len(path.relative_to(ROOT).parts) > 1 else ""


def A(p, href, label, current, extra=""):
    cls = []
    if extra:
        cls.append(extra)
    if current == href:
        cls.append("is-current")
    attr = f' class="{" ".join(cls)}"' if cls else ""
    return f'<a href="{p}{href}"{attr}>{label}</a>'


def header(p: str, current: str):
    def a(href, label, extra=""):
        return A(p, href, label, current, extra)

    about_on = " active" if current == "about.html" else ""
    svc_on = " is-current" if current == "services.html" or current.startswith("services/") else ""
    st_on = " class=\"active\"" if current == "3d-studio.html" else ""
    proj_on = " active" if current.startswith("projects") or current == "client-stories.html" else ""
    ins_on = " active" if current.startswith("insights") else ""
    faq_on = " class=\"active\"" if current == "faq.html" else ""

    return f'''<header class="site-header">
    <div class="header-inner">
      <a class="logo" href="{p}index.html" aria-label="Woodex Interior">
        <svg class="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 6.5L9.2 25.5h2.15L16 13.2l4.65 12.3H22.8L27 6.5h-2.35l-3.2 14.6L17.4 8.2h-2.8L9.35 21.1 6.2 6.5H5z" fill="currentColor"/></svg>
        <span class="logo-lockup"><span class="logo-word">WOODEX</span><span class="logo-sub">interior</span></span>
      </a>
      <nav class="nav" aria-label="Primary">
        <a href="{p}about.html"{' class="active"' if about_on else ""}>About</a>
        <div class="has-sub has-mega">
          <a class="nav-toggle{svc_on}" href="{p}services.html">Services {CHEV}</a>
          <div class="mega" role="menu">
            <div class="mega-block">
              <div class="mega-wrap">
                <div class="mega-main is-5">
                  <div class="mega-col-group">
                    <p class="mega-h">Interior Design</p>
                    <div class="mega-col">
                      {a("services.html", "All interiors")}
                      {a("services/residential.html", "Residential")}
                      {a("services/office.html", "Office &amp; Corporate")}
                      {a("services/retail.html", "Retail &amp; Shop")}
                      {a("services/shops.html", "Brand Shop &amp; Outlet")}
                    </div>
                  </div>
                  <div class="mega-col-group">
                    <p class="mega-h">Fit-Out</p>
                    <div class="mega-col">
                      {a("services/fit-out.html", "Fit-Out")}
                      {a("services/office-fit-out.html", "Office Fit-Out")}
                      {a("services/commercial-fit-out.html", "Commercial Fit-Out")}
                      {a("services/residential-fit-out.html", "Residential Fit-Out")}
                    </div>
                  </div>
                  <div class="mega-col-group">
                    <p class="mega-h">Industries</p>
                    <div class="mega-col">
                      {a("services/restaurant.html", "Hospitality")}
                      {a("services/restaurant.html", "Restaurant Interior")}
                      {a("services/cafe.html", "Café Interior")}
                    </div>
                  </div>
                  <div class="mega-col-group">
                    <p class="mega-h">Specialist</p>
                    <div class="mega-col">
                      {a("woodex-craft.html", "Custom Furniture")}
                      {a("services/joinery.html", "Joinery")}
                      {a("services/renovation.html", "Interior Renovation")}
                      {a("services/turnkey.html", "Turnkey Interiors")}
                      {a("services/architecture.html", "Architecture")}
                      {a("services/space-planning.html", "Space planning")}
                      {a("services/lighting.html", "Lighting")}
                      {a("services/drawings.html", "Drawings")}
                      {a("services/pharmacy.html", "Pharmacy")}
                      {a("services/software-house.html", "Software house")}
                    </div>
                  </div>
                  <div class="mega-col-group">
                    <p class="mega-h">Studio</p>
                    <div class="mega-col">
                      {a("3d-studio.html", "3D Visualization")}
                      {a("services/visualization.html", "Rendering &amp; walkthrough")}
                    </div>
                  </div>
                </div>
                <div class="mega-media">
                  <img src="{p}images/hero-2.jpg" alt="A room drawn so it can be built" />
                  <button class="mega-pp" type="button" aria-label="Pause">
                    <svg class="ico-pause" viewBox="0 0 18 18" fill="none" aria-hidden="true"><rect x="5" y="4" width="2.4" height="10" rx="0.6" fill="currentColor"/><rect x="10.6" y="4" width="2.4" height="10" rx="0.6" fill="currentColor"/></svg>
                    <svg class="ico-play" hidden viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M6 4.2l8 4.8-8 4.8V4.2z" fill="currentColor"/></svg>
                  </button>
                </div>
              </div>
              <div class="mega-cta">
                <p class="mega-cta-title">See the room before it exists</p>
                <a class="btn btn-light" href="{p}3d-studio.html"><span class="btn-label"><span>Open 3D Studio</span><span>Open 3D Studio</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
              </div>
            </div>
          </div>
        </div>
        <a href="{p}3d-studio.html"{st_on}>3D Studio</a>
        <div class="has-sub">
          <a class="nav-toggle{proj_on}" href="{p}projects.html">Projects {CHEV}</a>
          <div class="drop">
            <a class="drop-link" href="{p}projects.html">All studies</a>
            <a class="drop-link" href="{p}projects/residential.html">Residential</a>
            <a class="drop-link" href="{p}projects/commercial.html">Commercial</a>
            <a class="drop-link" href="{p}client-stories.html">Named work — Wellstar</a>
          </div>
        </div>
        <div class="has-sub">
          <a class="nav-toggle{ins_on}" href="{p}insights.html">Insights {CHEV}</a>
          <div class="drop">
            <a class="drop-link" href="{p}insights.html">All notes</a>
            <a class="drop-link" href="{p}insights/3d.html">3D</a>
            <a class="drop-link" href="{p}insights/cost.html">Cost &amp; BOQ</a>
            <a class="drop-link" href="{p}insights/rooms.html">Rooms</a>
            <a class="drop-link" href="{p}insights/process.html">Process</a>
          </div>
        </div>
        <a href="{p}contact.html"{' class="active"' if current == "contact.html" else ""}>Contact</a>
      </nav>
      <div class="header-cta"><a class="btn btn-light" href="{p}start-your-project.html"><span class="btn-label"><span>Start your project</span><span>Start your project</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a></div>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>
  <nav class="mobile-nav" aria-label="Mobile">
    <a href="{p}about.html">About</a>
    <div class="m-acc">
      <button type="button" aria-expanded="false">Services {CHEV}</button>
      <div class="m-sub">
        {a("services.html", "All services")}
        {a("services/residential.html", "Residential")}
        {a("services/office.html", "Office &amp; Corporate")}
        {a("services/retail.html", "Retail")}
        {a("services/fit-out.html", "Fit-Out")}
        {a("services/office-fit-out.html", "Office Fit-Out")}
        {a("services/turnkey.html", "Turnkey")}
        {a("woodex-craft.html", "Custom Furniture")}
        {a("3d-studio.html", "3D Visualization")}
      </div>
    </div>
    <a href="{p}3d-studio.html">3D Studio</a>
    <div class="m-acc">
      <button type="button" aria-expanded="false">Projects {CHEV}</button>
      <div class="m-sub">
        <a href="{p}projects.html">All studies</a>
        <a href="{p}projects.html#residential">Residential</a>
        <a href="{p}projects.html#commercial">Commercial</a>
      </div>
    </div>
    <a href="{p}insights.html">Insights</a>
    <a href="{p}contact.html">Contact</a>
    <div class="m-cta">
      <a class="btn" href="{p}start-your-project.html"><span class="btn-label"><span>Start your project</span><span>Start your project</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
      <a href="https://wa.me/923224000768?text=Hello%20Woodex%20%E2%80%94%20I%20have%20a%20space%20in%20mind." target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </nav>'''


HDR_RE = re.compile(
    r'<header class="site-header">.*?</header>\s*<nav class="mobile-nav"[^>]*>.*?</nav>',
    re.S,
)


def main():
    n = 0
    for path in sorted(ROOT.rglob("*.html")):
        if "scripts" in path.parts:
            continue
        text = path.read_text(encoding="utf-8")
        p = depth(path)
        current = path.relative_to(ROOT).as_posix()
        if not HDR_RE.search(text):
            print("NO MATCH", current)
            continue
        text = HDR_RE.sub(header(p, current), text, count=1)
        # footer FAQ link
        if f'href="{p}faq.html"' not in text.split("site-footer")[-1] if "site-footer" in text else True:
            text = text.replace(
                f'<a href="{p}insights.html">Insights</a>\n            <a href="{p}contact.html">Contact</a>',
                f'<a href="{p}insights.html">Insights</a>\n            <a href="{p}faq.html">FAQ</a>\n            <a href="{p}contact.html">Contact</a>',
            )
        path.write_text(text, encoding="utf-8")
        n += 1
        print("nav", current)
    print("done", n)


if __name__ == "__main__":
    main()
