#!/usr/bin/env python3
"""Wire WOODEX-26 pages to Tailwind + theme, patch Home, unique service approval lines."""
from pathlib import Path
import re

ROOT = Path("/home/user/WOODEX-26")

TW = '''  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      theme: {{
        extend: {{
          colors: {{
            navy: {{ DEFAULT: "#0c1628", 2: "#121e34" }},
            cream: {{ DEFAULT: "#f4efe7", 2: "#ebe4d8" }},
            ink: "#12151c",
            muted: "#6a6560",
            wood: "#b8956a",
            card: "#152033"
          }},
          fontFamily: {{ sans: ['"Plus Jakarta Sans"', "sans-serif"] }}
        }}
      }}
    }};
  </script>'''

def depth(path: Path) -> str:
    rel = path.relative_to(ROOT)
    return "../" if len(rel.parts) > 1 else ""

def rewrite_head(path: Path):
    text = path.read_text(encoding="utf-8")
    p = depth(path)
    is_home = path.name == "index.html" and path.parent == ROOT
    links = [TW]
    if is_home:
        links.append(f'  <link rel="stylesheet" href="{p}css/home.css" />')
        links.append(f'  <link rel="stylesheet" href="{p}css/chrome.css" />')
    links.append(f'  <link rel="stylesheet" href="{p}css/theme.css" />')
    if not is_home:
        links.append(f'  <link rel="stylesheet" href="{p}css/studio.css" />')
        links.append(f'  <link rel="stylesheet" href="{p}css/service-theme.css" />')
    block = "\n".join(links)
    # strip old stylesheet links except fonts
    text = re.sub(r'\n\s*<link rel="stylesheet" href="[^"]*css/[^"]+"\s*/>', "", text)
    if "cdn.tailwindcss.com" not in text:
        text = text.replace(
            "</head>",
            block + "\n</head>",
            1,
        )
    text = re.sub(r'<script src="[^"]*js/main.js"></script>', f'<script src="{p}js/app.js"></script>', text)
    if 'id="lightbox"' not in text and path.name != "index.html":
        text = text.replace(
            f'<script src="{p}js/app.js"></script>',
            f'''  <div class="lb" id="lightbox" hidden>
    <button class="lb-x" type="button" aria-label="Close">×</button>
    <img alt="" />
  </div>
  <script src="{p}js/app.js"></script>''',
            1,
        )
    path.write_text(text, encoding="utf-8")

APPROVAL = {
    "residential.html": ("The house as one instrument", "You are approving living, kitchen and the quiet room — together — before finishes."),
    "office.html": ("The floor, not a mural", "You are approving arrival, focus and demo — how the workplace actually works."),
    "retail.html": ("The path", "You are approving enter, pause, pay — a store that can sell."),
    "shops.html": ("The walk", "You are approving the showroom walk and the table where the decision happens."),
    "restaurant.html": ("The night room", "You are approving the Saturday night room and the pass — not a lunch still only."),
    "cafe.html": ("The counter", "You are approving the bar and one linger seat — two economies, one room."),
    "renovation.html": ("The replan", "You are approving a layout the existing bones can hold — after survey, before 3D."),
    "fit-out.html": ("The scope", "You are approving what will be built, in writing — then the site."),
    "architecture.html": ("The volume", "You are approving openings, stair and section — the room the building can hold."),
    "drawings.html": ("The sheet set", "You are approving drawings the site can build — not a pretty PDF."),
    "joinery.html": ("The piece", "You are approving joinery as it will be made — then the mill starts."),
    "lighting.html": ("The night scene", "You are approving how the room works at 9pm — not a fitting catalogue."),
    "pharmacy.html": ("A Saturday that works", "You are approving waiting, counter and dispensary — calm rooms that have to work."),
    "software-house.html": ("Focus, then culture", "You are approving focus and demo — the mural comes last."),
    "space-planning.html": ("The test-fit", "You are approving the plan. 3D happens after, or not at all."),
    "visualization.html": ("Which views", "You are approving stills, walkthrough or 360. The studio is next."),
}

def inject_approval(path: Path):
    name = path.name
    if name not in APPROVAL:
        return
    title, line = APPROVAL[name]
    text = path.read_text(encoding="utf-8")
    if "wx-approve" in text:
        return
    if "You are not approving a plan" in text:
        return
    banner = f'''
    <section class="wx-approve bg-navy text-white py-16">
      <div class="max-w-wx mx-auto px-8 grid md:grid-cols-2 gap-10 items-end">
        <div data-anim="left">
          <p class="text-white/50 text-sm mb-3">What you are actually approving</p>
          <h2 class="text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
        </div>
        <p class="text-white/65 max-w-md" data-anim="right">{line}</p>
      </div>
    </section>
'''
    # insert after cine-hero / first section close
    text2, n = re.subn(
        r'(</section>\s*)',
        r'\1' + banner,
        text,
        count=1,
    )
    if n:
        path.write_text(text2, encoding="utf-8")

def patch_home():
    path = ROOT / "index.html"
    t = path.read_text(encoding="utf-8")
    t = t.replace(
        "Award-Winning Interior Design Company in Pakistan",
        "Interior Design · 3D Studio · Execution | Pakistan",
    )
    t = t.replace("one of Pakistan's most awarded interior design companies — 15 years, 320+ projects",
                  "Interior design, in-house 3D and execution — 500+ projects, ISO 9001, studios in Lahore, Karachi and Islamabad")
    t = t.replace("Fifteen years of practice. 320+ delivered projects.",
                  "500+ projects. Founder ~20 years. ISO 9001. Three studios.")
    t = t.replace("Award-winning interior design company with studios in Lahore, Karachi and Islamabad.",
                  "Interior design studio — plan, 3D, BOQ, craft and site. Lahore, Karachi, Islamabad.")
    # card 06: Studio -> Craft
    t = t.replace("<strong>Studio</strong><em>3D</em>", "<strong>Craft</strong><em>Mill</em>")
    t = t.replace(
        '''<article class="partner-copy" data-svc="5">
              <div class="brand"><strong>Studio</strong><small>3D visualization</small></div>
              <p>Why guess when you can see? Photorealistic stills, fly-throughs and VR walkthroughs — so the room you approve is the room you receive.</p>
              <a class="go" href="services/visualization.html">Explore 3D studio''',
        '''<article class="partner-copy" data-svc="5">
              <div class="brand"><strong>Craft</strong><small>Joinery · furniture</small></div>
              <p>Kitchens, wardrobes, counters — drawn, then made. Woodex Furniture. The still continues into the mill.</p>
              <a class="go" href="woodex-craft.html">Explore Woodex Craft''',
    )
    # 3D highlight after partners section
    hl = '''
    <section class="sv-hl" id="studio-highlight">
      <div class="container sv-hl-grid">
        <div class="reveal">
          <p class="eyebrow" style="color:rgba(255,255,255,.5)">In-house 3D Studio — the highlight</p>
          <h2>See it. Understand it. Build it.</h2>
          <p>You are not approving a plan. You are approving a room. Stills, walkthrough, 360 — then BOQ and the mill if you want. 3D-only is a complete engagement.</p>
          <a class="btn btn-light" href="3d-studio.html"><span class="btn-label"><span>Open 3D Studio</span><span>Open 3D Studio</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
        </div>
        <div class="reveal" data-delay="80">
          <img src="images/studio-hero.jpg" alt="3D Studio — a room you can approve" />
        </div>
      </div>
    </section>
'''
    if 'id="studio-highlight"' not in t:
        t = t.replace("</section>\n\n    <!-- SECTION 3", "</section>\n" + hl + "\n    <!-- SECTION 3")
    # leftover Linoxa copy
    t = t.replace("Digital solutions for interior storytelling excellence", "Drawn. Then built.")
    t = t.replace("Digital solutions for architectural storytelling excellence", "500+ rooms. ISO 9001. Three studios.")
    t = t.replace("Building strong foundations through early learning", "Studies — rooms drawn so they can be built")
    t = t.replace("Industrial facility designs with optimal space utilization", "From approved still to BOQ and site")
    t = t.replace('data-count="320"', 'data-count="500"')
    t = t.replace("<h3>Residential projects</h3>", "<h3>Projects delivered</h3>")
    t = t.replace('data-count="15"', 'data-count="20"')
    t = t.replace("<h3>Years of practice</h3>", "<h3>Founder years</h3>")
    t = t.replace('data-count="180"', 'data-count="10"')
    t = t.replace('data-suffix="+"', 'data-suffix="+"', 1)
    t = t.replace("<h3>Commercial developments</h3>\n              <p>From intimate cafés to large-scale offices, our growing portfolio reflects a passion for purposeful, beautiful design.</p>",
                  "<h3>Execution team years</h3>\n              <p>ISO 9001. Site, joinery and handover — the still continues into the mill.</p>")
    # fix commercial card - the 180 one
    t = t.replace(
        '''<div class="stat-num" data-count="10">0</div>
            <div>
              <h3>Commercial developments</h3>
              <p>From intimate cafés to large-scale offices, our growing portfolio reflects a passion for purposeful, beautiful design.</p>''',
        '''<div class="stat-num" data-count="10" data-suffix="+">0</div>
            <div>
              <h3>Execution team years</h3>
              <p>ISO 9001. Site, joinery and handover — the still continues into the mill.</p>'''
    )
    t = t.replace('href="services/visualization.html">Comprehensive planning',
                  'href="3d-studio.html">See the room before it exists')
    t = t.replace("3D, drawings and site strategy in one accountable studio, so the approved still becomes the finished room.",
                  "In-house 3D Studio. Stills first. Then BOQ and site if you want.")
    t = t.replace('href="services/visualization.html">3D studio &amp; master planning',
                  'href="3d-studio.html">3D Studio — see the room')
    # partner panel studio link leftover
    t = t.replace('href="services/visualization.html">Explore 3D', 'href="3d-studio.html">Open 3D Studio')
    path.write_text(t, encoding="utf-8")

def main():
    for f in ROOT.rglob("*.html"):
        if "scripts" in f.parts:
            continue
        rewrite_head(f)
        if f.parent.name == "services":
            inject_approval(f)
        print("wired", f.relative_to(ROOT))
    patch_home()
    print("home patched")

if __name__ == "__main__":
    main()
