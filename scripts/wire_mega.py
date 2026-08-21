#!/usr/bin/env python3
"""Inject Linoxa-replica Pages mega menu + responsive mobile nav on all WOODEX-26 pages."""
from pathlib import Path
import re

ROOT = Path("/home/user/WOODEX-26")

CHEV = (
    '<svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true">'
    '<path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" '
    'stroke-linecap="round" stroke-linejoin="round"/></svg>'
)

ICO = {
    "grid": '<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/><rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/><rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/><rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/></svg>',
    "home": '<svg viewBox="0 0 20 20" fill="none"><path d="M3.5 9.2L10 3.8l6.5 5.4V16a1 1 0 0 1-1 1h-3.2v-4.2H7.7V17H4.5a1 1 0 0 1-1-1V9.2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    "desk": '<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="14" height="9" rx="1.2" stroke="currentColor" stroke-width="1.4"/><path d="M8 17h4M10 14v3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    "plate": '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6.2" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="10" r="2.2" stroke="currentColor" stroke-width="1.4"/></svg>',
    "bag": '<svg viewBox="0 0 20 20" fill="none"><path d="M5 7.2h10l-.8 8.2H5.8L5 7.2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M7.5 7.2V5.8A2.5 2.5 0 0 1 10 3.3 2.5 2.5 0 0 1 12.5 5.8v1.4" stroke="currentColor" stroke-width="1.4"/></svg>',
    "tool": '<svg viewBox="0 0 20 20" fill="none"><path d="M4 16l7.2-7.2M12.4 5.2a3.2 3.2 0 0 1 3.4 3.4L12 12.4 8.6 9 12.4 5.2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    "box": '<svg viewBox="0 0 20 20" fill="none"><path d="M3.5 7.2L10 3.8l6.5 3.4v8.4L10 16.2 3.5 15.6V7.2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 16.2V7.2M3.5 7.2L10 10.4l6.5-3.2" stroke="currentColor" stroke-width="1.4"/></svg>',
    "eye": '<svg viewBox="0 0 20 20" fill="none"><path d="M3 10s2.8-5 7-5 7 5 7 5-2.8 5-7 5-7-5-7-5z" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="10" r="2" stroke="currentColor" stroke-width="1.4"/></svg>',
    "pin": '<svg viewBox="0 0 20 20" fill="none"><path d="M10 17s5-4.4 5-8.2A5 5 0 0 0 5 8.8C5 12.6 10 17 10 17z" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="8.6" r="1.6" stroke="currentColor" stroke-width="1.4"/></svg>',
    "pen": '<svg viewBox="0 0 20 20" fill="none"><path d="M12.2 4.4l3.4 3.4L7 16.4H3.6V13L12.2 4.4z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    "book": '<svg viewBox="0 0 20 20" fill="none"><path d="M4 5.2A2.2 2.2 0 0 1 6.2 3H16v12.5H6.2A2.2 2.2 0 0 0 4 17.7V5.2z" stroke="currentColor" stroke-width="1.4"/><path d="M4 14.6h12" stroke="currentColor" stroke-width="1.4"/></svg>',
}


def depth(path: Path) -> str:
    rel = path.relative_to(ROOT)
    return "../" if len(rel.parts) > 1 else ""


def ico(name: str) -> str:
    return f'<span class="drop-ico">{ICO[name]}</span>'


def a(href: str, label: str, current: str, extra: str = "") -> str:
    cls = []
    if extra:
        cls.append(extra)
    if current == href:
        cls.append("is-current")
    attr = f' class="{" ".join(cls)}"' if cls else ""
    return f'<a href="{{p}}{href}"{attr}>{label}</a>'


def drop_a(href: str, label: str, icon: str, current: str) -> str:
    cur = " is-current" if current == href else ""
    return f'<a class="drop-link{cur}" href="{{p}}{href}">{ico(icon)}{label}</a>'


PAGES_SET = {
    "about.html",
    "process.html",
    "start-your-project.html",
    "woodex-craft.html",
    "contact.html",
    "careers.html",
    "locations.html",
    "client-stories.html",
    "404.html",
}
STUDIO_SET = set()  # locations/* also counts as Pages


def header_html(p: str, current: str) -> str:
    def A(href, label, extra=""):
        return a(href, label, current, extra).replace("{p}", p)

    def D(href, label, icon):
        return drop_a(href, label, icon, current).replace("{p}", p)

    pages_on = (
        " is-current"
        if current in PAGES_SET or current.startswith("locations/")
        else ""
    )
    svc_on = " active" if current == "services.html" or current.startswith("services/") else ""
    proj_on = " active" if current == "projects.html" or current.startswith("projects/") else ""
    ins_on = " active" if current == "insights.html" or current.startswith("insights/") else ""
    st_on = " active" if current == "3d-studio.html" else ""

    return f'''<header class="site-header">
    <div class="header-inner">
      <a class="logo" href="{p}index.html" aria-label="Woodex Interior">
        <svg class="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 6.5L9.2 25.5h2.15L16 13.2l4.65 12.3H22.8L27 6.5h-2.35l-3.2 14.6L17.4 8.2h-2.8L9.35 21.1 6.2 6.5H5z" fill="currentColor"/></svg>
        <span class="logo-lockup"><span class="logo-word">WOODEX</span><span class="logo-sub">interior</span></span>
      </a>
      <nav class="nav" aria-label="Primary">
        <div class="has-sub has-mega">
          <button type="button" class="nav-toggle{pages_on}" aria-expanded="false" aria-haspopup="true">Pages {CHEV}</button>
          <div class="mega" role="menu">
            <div class="mega-block">
              <div class="mega-wrap">
                <div class="mega-main">
                  <div class="mega-col-group">
                    <p class="mega-h">Main pages</p>
                    <div class="mega-sub">
                      <div class="mega-col">
                        {A("about.html", "About")}
                        {A("services.html", "Services")}
                        {A("3d-studio.html", "3D Studio")}
                        {A("process.html", "Process")}
                        {A("insights.html", "Insights")}
                        {A("start-your-project.html", "Start your project")}
                        {A("woodex-craft.html", "Woodex Craft")}
                      </div>
                      <div class="mega-col">
                        {A("projects.html", "Projects")}
                        {A("contact.html", "Contact")}
                        {A("careers.html", "Careers")}
                        {A("locations.html", "Locations")}
                        {A("client-stories.html", "Client stories")}
                        {A("services/residential.html", "Residential")}
                        {A("services/fit-out.html", "Fit-out")}
                      </div>
                    </div>
                  </div>
                  <div class="mega-col-group">
                    <p class="mega-h">Studios</p>
                    <div class="mega-sub">
                      <div class="mega-col">
                        {A("locations/lahore.html", "Lahore")}
                        {A("locations/karachi.html", "Karachi")}
                        {A("locations/islamabad.html", "Islamabad")}
                        {A("locations.html", "Nationwide")}
                        {A("client-stories.html", "Wellstar")}
                        {A("contact.html", "Contact")}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mega-media">
                  <img src="{p}images/hero-2.jpg" alt="Candlelit dining hall — a room drawn so it can be built" />
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
        <div class="has-sub">
          <a class="nav-toggle{svc_on}" href="{p}services.html">Services {CHEV}</a>
          <div class="drop">
            {D("services.html", "All services", "grid")}
            {D("services/residential.html", "Residential", "home")}
            {D("services/office.html", "Office", "desk")}
            {D("services/restaurant.html", "Restaurant", "plate")}
            {D("services/retail.html", "Retail", "bag")}
            {D("services/renovation.html", "Renovation", "tool")}
            {D("services/fit-out.html", "Fit-out", "box")}
            {D("services/visualization.html", "Visualization", "eye")}
          </div>
        </div>
        <a href="{p}3d-studio.html"{' class="active"' if st_on else ""}>3D Studio</a>
        <div class="has-sub">
          <a class="nav-toggle{proj_on}" href="{p}projects.html">Projects {CHEV}</a>
          <div class="drop">
            {D("projects.html", "All studies", "grid")}
            {D("client-stories.html", "Wellstar", "pin")}
            {D("projects/contemporary-retreat.html", "Contemporary retreat", "home")}
            {D("projects/urban-living-concept.html", "Urban living", "desk")}
          </div>
        </div>
        <div class="has-sub">
          <a class="nav-toggle{ins_on}" href="{p}insights.html">Insights {CHEV}</a>
          <div class="drop">
            {D("insights.html", "All insights", "book")}
            {D("insights/what-is-3d-visualization.html", "What 3D is for", "eye")}
            {D("insights/interior-design-cost-pakistan.html", "Cost in Pakistan", "pen")}
            {D("insights/home-renovation-checklist.html", "Renovation checklist", "tool")}
          </div>
        </div>
      </nav>
      <div class="header-cta"><a class="btn btn-light" href="{p}start-your-project.html"><span class="btn-label"><span>Start your project</span><span>Start your project</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a></div>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>
  <nav class="mobile-nav" aria-label="Mobile">
    <div class="m-acc">
      <button type="button" aria-expanded="false">Pages {CHEV}</button>
      <div class="m-sub">
        {A("about.html", "About")}
        {A("services.html", "Services")}
        {A("3d-studio.html", "3D Studio")}
        {A("process.html", "Process")}
        {A("insights.html", "Insights")}
        {A("projects.html", "Projects")}
        {A("woodex-craft.html", "Woodex Craft")}
        {A("start-your-project.html", "Start your project")}
        {A("contact.html", "Contact")}
        {A("careers.html", "Careers")}
        {A("locations.html", "Locations")}
        {A("client-stories.html", "Client stories")}
      </div>
    </div>
    <div class="m-acc">
      <button type="button" aria-expanded="false">Services {CHEV}</button>
      <div class="m-sub">
        {A("services.html", "All services")}
        {A("services/residential.html", "Residential")}
        {A("services/office.html", "Office")}
        {A("services/restaurant.html", "Restaurant")}
        {A("services/retail.html", "Retail")}
        {A("services/renovation.html", "Renovation")}
        {A("services/fit-out.html", "Fit-out")}
        {A("3d-studio.html", "3D Studio")}
      </div>
    </div>
    {A("3d-studio.html", "3D Studio")}
    {A("projects.html", "Projects")}
    {A("insights.html", "Insights")}
    {A("about.html", "About")}
    {A("contact.html", "Contact")}
    <div class="m-cta">
      <a class="btn" href="{p}start-your-project.html"><span class="btn-label"><span>Start your project</span><span>Start your project</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
      <a href="https://wa.me/9242111800800?text=Hello%20Woodex%20%E2%80%94%20I%20have%20a%20space%20in%20mind." target="_blank" rel="noopener">WhatsApp</a>
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
        block = header_html(p, current)
        if not HDR_RE.search(text):
            print("NO MATCH", current)
            continue
        text = HDR_RE.sub(block, text, count=1)
        link = f'<link rel="stylesheet" href="{p}css/mega.css" />'
        if "css/mega.css" not in text:
            # insert after theme.css
            text = re.sub(
                rf'(<link rel="stylesheet" href="{re.escape(p)}css/theme\.css"\s*/>)',
                rf"\1\n  {link}",
                text,
                count=1,
            )
            if "css/mega.css" not in text:
                text = text.replace("</head>", f"  {link}\n</head>", 1)
        path.write_text(text, encoding="utf-8")
        n += 1
        print("mega", current)
    print("done", n)


if __name__ == "__main__":
    main()
