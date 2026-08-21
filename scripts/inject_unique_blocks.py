#!/usr/bin/env python3
"""Inject unique AEO/GEO/E-E-A-T sections into each service page. Copy is per-slug."""
from pathlib import Path
import json
import re

ROOT = Path("/home/user/WOODEX-26")
BTN_SVG = (
    '<span class="btn-icon"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true">'
    '<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>'
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">'
    '<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span>'
)

def btn(href, label, light=False):
    cls = "btn btn-light" if light else "btn"
    return (
        f'<a class="{cls}" href="{href}">'
        f'<span class="btn-label"><span>{label}</span><span>{label}</span></span>'
        f"{BTN_SVG}</a>"
    )

def lis(items, cls):
    rows = []
    for h, p in items:
        rows.append(f"<li><h3>{h}</h3><p>{p}</p></li>")
    return f'<ul class="{cls}">\n' + "\n".join(rows) + "\n</ul>"

def dl(pairs):
    bits = []
    for q, a in pairs:
        bits.append(f"<dt>{q}</dt>\n      <dd>{a}</dd>")
    return "<dl class=\"wx-ask-list\">\n      " + "\n      ".join(bits) + "\n    </dl>"

PAGES = {
    "residential": {
        "service": "Residential interior design",
        "have_h": "What the house already is",
        "have": [
            ("Empty shell", "Apartment or villa with walls and a plan — no finishes yet."),
            ("Lived-in home", "Furniture you will keep. Rooms that no longer work as a family."),
            ("A floor plan", "Paper or CAD. We test living, kitchen and the quiet room before 3D."),
            ("References", "Images you like. We do not paste them. We translate them into this climate."),
        ],
        "out_h": "What a home brief actually delivers",
        "out": [
            ("House plan", "Zones for family, guests, help and storage — one instrument, not one board per room."),
            ("Stills of the rooms that decide", "Living, kitchen, main bedroom. One still each."),
            ("Joinery intent", "Kitchen and wardrobes as they will be made — Woodex Furniture where we make them."),
            ("BOQ if you want it built", "Wet areas, millwork, finishes. Money after you approve the room."),
        ],
        "ask_h": "Questions a homeowner actually asks",
        "ask": [
            ("Do you design one room or the whole house?", "Either. The house works better when kitchen, living and storage are planned together."),
            ("Can you work with furniture we already own?", "Yes. We design around what stays and only make what is missing."),
            ("When does 3D happen?", "After the plan and direction are approved. We do not invent a layout in 3D and call it design."),
        ],
        "geo_h": "Homes we can actually visit",
        "geo_p": "Studios in Gulberg III Lahore, Clifton Karachi and F-7 Islamabad. Desk: LG 90 Link Road, Model Town. Nationwide when the house needs it.",
        "cities": [
            ("Studio", "Lahore — Gulberg III", "../locations/lahore.html"),
            ("Studio", "Karachi — Clifton", "../locations/karachi.html"),
            ("Studio", "Islamabad — F-7", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("500+", "Homes, shops and workplaces drawn so they can be built."),
            ("~20 yrs", "Founder years in commercial interiors — the house is still a brief."),
            ("ISO 9001", "Process you can audit. Not a moodboard."),
            ("Wellstar", "A complete path we can name — DHA Lahore."),
        ],
        "note_gate": "Have / survey",
        "note_h": "Home renovation checklist",
        "note_href": "../insights/home-renovation-checklist.html",
        "cta_wa": "Hello Woodex — residential interior in mind.",
    },
    "office": {
        "service": "Office and corporate interior design",
        "have_h": "What workplace you walk in with",
        "have": [
            ("Empty floor", "Core and shell. Headcount and the rooms that must work on a Tuesday."),
            ("Existing office", "What stays, what fails, what the brand actually needs to show a client."),
            ("Brand pack", "Logo and guidelines. The mural comes last."),
            ("Software house / HQ", "Focus rooms first. Culture is not a slide on the wall."),
        ],
        "out_h": "What an office brief delivers",
        "out": [
            ("Arrival", "The first ten metres a candidate or a client sees."),
            ("Focus", "Desks, acoustics, light — the work, not the wallpaper."),
            ("Demo room", "Where the product is shown. Designed as a room, not a corridor leftover."),
            ("BOQ when you build", "Partitions, services, joinery. Written after the still."),
        ],
        "ask_h": "Questions a workplace actually asks",
        "ask": [
            ("Will you design around how we work, or how we want to look?", "How you work. Look follows the rooms that have to perform."),
            ("Can we occupy in phases?", "Yes, if the path and services are planned. We do not fake a weekend flip."),
            ("Do we need 3D?", "For arrival, the demo and any room the board will argue about. Not for every store cupboard."),
        ],
        "geo_h": "Floors we can reach",
        "geo_p": "Gulberg, Clifton, F-7 — studios you can visit. Execution nationwide when the floor plate needs it.",
        "cities": [
            ("Lahore", "Gulberg III studio", "../locations/lahore.html"),
            ("Karachi", "Clifton studio", "../locations/karachi.html"),
            ("Islamabad", "F-7 studio", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("10+", "Years the execution team has run sites."),
            ("ISO 9001", "Handover with a trail, not a WhatsApp thread."),
            ("3 cities", "A desk in each — not a travelling moodboard."),
            ("500+", "Projects. Offices included. Not a catalogue count."),
        ],
        "note_gate": "Workplace have",
        "note_h": "Office interior design guide",
        "note_href": "../insights/office-interior-guide.html",
        "cta_wa": "Hello Woodex — office interior.",
    },
    "retail": {
        "service": "Retail interior design",
        "have_h": "What the shop is today",
        "have": [
            ("Empty unit", "Frontage, depth, a landlord drawing. No path yet."),
            ("Trading store", "A till that works and a layout that fights the product."),
            ("Brand guidelines", "Colour and type. The space still has to sell."),
            ("Category brief", "What must be seen in the first eight seconds."),
        ],
        "out_h": "What you approve in a shop",
        "out": [
            ("The path", "Enter, pause, pay. Circulation is the brief."),
            ("Display language", "Heights, lighting, the piece that holds the room."),
            ("Cash wrap", "Where the brand meets the receipt."),
            ("Buildable still", "Then BOQ if you want the shop opened, not photographed."),
        ],
        "ask_h": "Questions a retailer asks",
        "ask": [
            ("Do you start from the logo?", "No. We start from how a customer walks. The logo sits on a path that already works."),
            ("Can you work to a opening date?", "If the still is approved and the BOQ is written. Dates without quantities are theatre."),
            ("Will you execute another designer’s pack?", "After we read it against the site. We do not build a file we have not reviewed."),
        ],
        "geo_h": "Shops we can open from",
        "geo_p": "Lahore, Karachi, Islamabad studios. Mall and high-street units nationwide when the job is real.",
        "cities": [
            ("Lahore", "Mall and high street", "../locations/lahore.html"),
            ("Karachi", "Clifton and beyond", "../locations/karachi.html"),
            ("Islamabad", "F-7 and served cities", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Path first", "We approve enter–pause–pay, not a logo wall."),
            ("Mill", "Counters and joinery connected to the still."),
            ("ISO 9001", "Opening as a process, not a scramble."),
            ("500+", "Projects. Retail is one of the rooms we actually do."),
        ],
        "note_gate": "Path",
        "note_h": "Retail shop interiors",
        "note_href": "../insights/retail-shop-interior.html",
        "cta_wa": "Hello Woodex — retail interior.",
    },
    "shops": {
        "service": "Brand shop and outlet design",
        "have_h": "What a brand brings",
        "have": [
            ("Guidelines", "Logo, colour, type. Not yet a store."),
            ("Product", "What must be touched, what must only be seen."),
            ("A unit", "Mall, high street, or flagship. Different walks."),
            ("A roll-out", "One room that can be repeated without going dead."),
        ],
        "out_h": "What a branded outlet receives",
        "out": [
            ("Brand → walk", "Identity converted into entrance, display, pause, pay."),
            ("3D of the outlet", "The room as a customer meets it — not a packshot of the logo."),
            ("Joinery system", "Display that can be made more than once."),
            ("Execution route", "If you want it built: BOQ, mill, site."),
        ],
        "ask_h": "Questions a brand manager asks",
        "ask": [
            ("Can one design travel to the next city?", "If the walk is written as a system, not a one-off set. We design for repeat."),
            ("Do you need our full brand book?", "Helpful. A product list and how people buy is more important."),
            ("Will you invent a concept if we only have a logo?", "We will not decorate a logo. We will ask how the product is sold."),
        ],
        "geo_h": "Outlets from three studios",
        "geo_p": "Gulberg III, Clifton, F-7. A branded walk has to work in the city it opens in.",
        "cities": [
            ("Lahore", "Gulberg III", "../locations/lahore.html"),
            ("Karachi", "Clifton", "../locations/karachi.html"),
            ("Islamabad", "F-7", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("System", "A store that can roll without dying."),
            ("3D Studio", "In-house stills. Not a render farm."),
            ("Craft", "Display made with the mill, not bought as a catalogue wall."),
            ("Named path", "Wellstar — brand rooms we can actually point to."),
        ],
        "note_gate": "Path",
        "note_h": "Retail shop interiors",
        "note_href": "../insights/retail-shop-interior.html",
        "cta_wa": "Hello Woodex — brand shop / outlet.",
    },
    "restaurant": {
        "service": "Restaurant interior design",
        "have_h": "What a restaurant walks in with",
        "have": [
            ("A kitchen idea", "The pass decides the room. We start there."),
            ("A licence and a unit", "Covers, hours, the noise you can actually live with."),
            ("A chef’s list", "What plates leave, what comes back. Circulation follows."),
            ("A mood you like", "Night stills after the plot works. Not before."),
        ],
        "out_h": "What you approve before the first guest",
        "out": [
            ("Plot", "Entrance, wait, seat, pass, wash. Lunch and midnight are different plots."),
            ("Night still", "Light as it will be at 9pm — a noon approval will fail."),
            ("Furniture that turns", "Tables you can reset. Not a set for one photograph."),
            ("BOQ for opening", "Kitchen adjacency, services, joinery — if we execute."),
        ],
        "ask_h": "Questions a restaurateur asks",
        "ask": [
            ("Do you design from the dining room or the kitchen?", "From the kitchen outward. A beautiful room that cannot turn tables is a set."),
            ("Will you 3D the night scene?", "Yes. A restaurant approved only at noon will fail at 9pm."),
            ("Can you work with our kitchen consultant?", "Yes. We coordinate. We do not pretend to be the kitchen engineer."),
        ],
        "geo_h": "Rooms that have to sit in this climate",
        "geo_p": "Lahore, Karachi, Islamabad — heat, glare, generators. The night still has to survive the city.",
        "cities": [
            ("Lahore", "Dinner rooms", "../locations/lahore.html"),
            ("Karachi", "Humidity and night", "../locations/karachi.html"),
            ("Islamabad", "F-7 and served", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Night still", "We approve light at 9pm."),
            ("10+ yrs", "Sites that opened, not just rendered."),
            ("ISO 9001", "Handover before the first sitting."),
            ("500+", "Hospitality included. No industrial claim."),
        ],
        "note_gate": "Night still",
        "note_h": "Restaurant interior planning",
        "note_href": "../insights/restaurant-planning.html",
        "cta_wa": "Hello Woodex — restaurant interior.",
    },
    "cafe": {
        "service": "Café interior design",
        "have_h": "What a café already has",
        "have": [
            ("A counter idea", "Where money and milk meet. The room hangs off this."),
            ("A linger seat", "One place people stay. The rest can turn."),
            ("A street", "Frontage, glare, the walk-past. Not a hidden lounge unless that is the brief."),
            ("A brand", "Cup, type, colour. The counter still has to work at 8am."),
        ],
        "out_h": "What a café brief returns",
        "out": [
            ("Counter as the room", "Equipment, queue, eye-line. Designed as joinery, not a bar from a catalogue."),
            ("Two economies", "Takeaway and linger — both in one plan."),
            ("Day still", "Morning light. Cafés fail when they are designed as restaurants."),
            ("Mill pieces", "Counter, shelf, the seat you actually make."),
        ],
        "ask_h": "Questions a café owner asks",
        "ask": [
            ("Do we need a full restaurant plot?", "No. You need a counter and one linger seat. Two economies, one room."),
            ("Can the mill make the counter?", "Yes. Woodex Furniture is connected to the still."),
            ("Is 3D required?", "For the counter and the seat people photograph. Not for the broom cupboard."),
        ],
        "geo_h": "Cafés from the three studios",
        "geo_p": "A counter in Gulberg is not a counter in Clifton. We design for the street it faces.",
        "cities": [
            ("Lahore", "Gulberg III", "../locations/lahore.html"),
            ("Karachi", "Clifton", "../locations/karachi.html"),
            ("Islamabad", "F-7", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Counter first", "The room is the bar."),
            ("Craft", "Joinery made, not ordered as a generic island."),
            ("ISO 9001", "Opening with a list, not a panic."),
            ("3 cities", "Studios you can walk into."),
        ],
        "note_gate": "Night still",
        "note_h": "Restaurant interior planning",
        "note_href": "../insights/restaurant-planning.html",
        "cta_wa": "Hello Woodex — café interior.",
    },
    "renovation": {
        "service": "Interior renovation",
        "have_h": "What you already occupy",
        "have": [
            ("A tired plan", "Rooms that no longer match how you live or trade."),
            ("Services in the walls", "What can move, what must stay. Survey before 3D."),
            ("A budget band", "Renovation without a band becomes a catalogue of wishes."),
            ("A building that must keep working", "Phased work. We do not pretend every house can empty."),
        ],
        "out_h": "What a replan produces",
        "out": [
            ("Survey", "Bones first. Moodboards before surveys produce kitchens that cannot be built."),
            ("Replan", "What stays, what moves, what is finished."),
            ("Stills of the change", "Only the rooms that change — not a vanity set of the whole house."),
            ("BOQ for the works", "Demolition, wet, mill, paint. Written after the still."),
        ],
        "ask_h": "Questions a renovation actually asks",
        "ask": [
            ("Do we 3D the existing house first?", "No. We survey. Then we replan. Then we 3D the rooms that change."),
            ("Can we live in the house during works?", "Sometimes. Only if the sequence is written. We will say when we cannot."),
            ("Will you reuse our kitchen?", "If it still works. We do not rip out for the photograph."),
        ],
        "geo_h": "Renovations we can stand in",
        "geo_p": "Model Town desk. Studios in three cities. We need to see the building — photographs lie about levels.",
        "cities": [
            ("Lahore", "Survey from Model Town", "../locations/lahore.html"),
            ("Karachi", "Clifton studio", "../locations/karachi.html"),
            ("Islamabad", "F-7 studio", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Survey first", "We refuse to 3D a fiction."),
            ("10+ yrs", "Sites opened in occupied buildings."),
            ("ISO 9001", "Sequence and snag, not a skip."),
            ("500+", "Including replans. Not only new shells."),
        ],
        "note_gate": "Have / survey",
        "note_h": "Home renovation checklist",
        "note_href": "../insights/home-renovation-checklist.html",
        "cta_wa": "Hello Woodex — renovation.",
    },
    "fit-out": {
        "service": "Interior fit-out",
        "have_h": "Which drawings you hold",
        "have": [
            ("Woodex still", "Approved room. We take it to BOQ and site."),
            ("Another designer’s pack", "We review against the building. Then we say yes or not."),
            ("A grey shell", "Services, levels, landlord rules. Fit-out is not paint."),
            ("A date", "Only useful after quantities exist."),
        ],
        "out_h": "What fit-out actually is",
        "out": [
            ("Scope", "What is in, what is landlord, what is mill."),
            ("BOQ", "The still turned into lines a site can buy."),
            ("Site", "Grey to finish — if the review passed."),
            ("Handover", "Snag, keys, a room that matches the still."),
        ],
        "ask_h": "Questions a fit-out client asks",
        "ask": [
            ("Will you build any PDF we send?", "No. We review first. We do not execute a file we have not read against the site."),
            ("Can design and fit-out be one job?", "Yes — that is the Woodex-designed route. Still → BOQ → site."),
            ("Do you publish a square-foot rate?", "No. Money is written after you approve the room."),
        ],
        "geo_h": "Sites we can run",
        "geo_p": "Lahore desk at LG 90 Link Road, Model Town. Karachi and Islamabad studios. Nationwide when the building is ready.",
        "cities": [
            ("Lahore", "Desk — Model Town", "../locations/lahore.html"),
            ("Karachi", "Clifton", "../locations/karachi.html"),
            ("Islamabad", "F-7", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Two routes", "Our still, or your pack after review."),
            ("ISO 9001", "Site as a process."),
            ("10+ yrs", "Execution team — not a hired crew with no name."),
            ("Mill", "Joinery connected to the still."),
        ],
        "note_gate": "Stop rule",
        "note_h": "Design vs turnkey execution",
        "note_href": "../insights/design-vs-turnkey.html",
        "cta_wa": "Hello Woodex — fit-out.",
    },
    "architecture": {
        "service": "Interior architecture",
        "have_h": "What volume you have",
        "have": [
            ("A shell", "Heights, structure, light. The interior is not stuck on later."),
            ("A conflict", "The room and the building disagree. That is the brief."),
            ("A section", "We work in section, not only in plan."),
            ("A neighbour", "What you cannot touch. Architecture is also refusal."),
        ],
        "out_h": "What interior architecture returns",
        "out": [
            ("Agreement", "The room and the building must agree — openings, levels, light."),
            ("Volume stills", "Not decoration. How the space is cut."),
            ("Drawings the site can read", "If we continue into documentation."),
            ("A stop", "Architecture here is interiors. We do not claim industrial or institutional."),
        ],
        "ask_h": "Questions a volume brief asks",
        "ask": [
            ("Are you the building architect?", "We are an interior design studio. We make the room and the building agree. We do not replace your architect of record."),
            ("Will you design the facade?", "Only when it is part of an interior volume we are actually delivering. We do not sell facades as a catalogue."),
            ("Do you 3D architecture without a plan?", "No. Volume follows a plan we can defend."),
        ],
        "geo_h": "Volumes in Pakistani light",
        "geo_p": "Glaring noon, dusty evenings. Stills have to be honest about this sky — Lahore, Karachi, Islamabad.",
        "cities": [
            ("Lahore", "Gulberg III", "../locations/lahore.html"),
            ("Karachi", "Clifton", "../locations/karachi.html"),
            ("Islamabad", "F-7", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Section", "We cut the room, not only colour it."),
            ("3D Studio", "Volume stills in-house."),
            ("ISO 9001", "Drawings with a trail."),
            ("No industrial", "We do not claim factories or institutions we do not do."),
        ],
        "note_gate": "3D gate",
        "note_h": "What is 3D visualization?",
        "note_href": "../insights/what-is-3d-visualization.html",
        "cta_wa": "Hello Woodex — interior architecture.",
    },
    "drawings": {
        "service": "Interior drawings and documentation",
        "have_h": "What sheet you need",
        "have": [
            ("An approved still", "The room is decided. Now the site needs paper."),
            ("A pack that failed on site", "Dimensions missing, finishes unnamed. We rewrite."),
            ("A mill", "Joinery that cannot be guessed. We draw the piece."),
            ("A consultant set", "We coordinate. We do not duplicate their stamps."),
        ],
        "out_h": "Sheets the site can build",
        "out": [
            ("Plan and elevation", "Named, dimensioned, finish-coded."),
            ("Joinery drawings", "The piece as it will be made."),
            ("Service coordination", "Where light, power and the mill meet."),
            ("Issue trail", "What changed, when. ISO 9001 is for this."),
        ],
        "ask_h": "Questions a documentation brief asks",
        "ask": [
            ("Can you draw from a Pinterest board?", "No. Drawings follow an approved plan or still. We do not invent a layout on a sheet and call it design."),
            ("Do you stamp as architect of record?", "We issue interior drawings for the rooms we are contracted to. Your consultant remains your consultant."),
            ("Will the mill read these?", "That is the test. If the mill cannot, the sheet is not done."),
        ],
        "geo_h": "Paper that travels to site",
        "geo_p": "Issued from Lahore, used in Karachi or Islamabad. The sheet has to survive a WhatsApp compression and still be true.",
        "cities": [
            ("Lahore", "Issue desk", "../locations/lahore.html"),
            ("Karachi", "Site read", "../locations/karachi.html"),
            ("Islamabad", "Site read", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Mill test", "If they cannot build it, we did not draw it."),
            ("ISO 9001", "Issue and revision, named."),
            ("In-house 3D", "Still and sheet from one studio."),
            ("500+", "Projects that needed paper, not only pictures."),
        ],
        "note_gate": "BOQ gate",
        "note_h": "Interior design cost in Pakistan",
        "note_href": "../insights/interior-design-cost-pakistan.html",
        "cta_wa": "Hello Woodex — drawings / documentation.",
    },
    "joinery": {
        "service": "Custom joinery",
        "have_h": "What piece you need made",
        "have": [
            ("A kitchen", "For two on a Tuesday and twenty on Eid."),
            ("A wardrobe", "Storage that disappears. Not a showroom wall of handles."),
            ("A counter", "Retail or café — the first piece of the brand."),
            ("A still", "The mill reads the same picture you approved."),
        ],
        "out_h": "What the mill returns",
        "out": [
            ("The piece", "As it will be made — edges, interiors, hardware."),
            ("Shop drawings", "Not a sketch. A build."),
            ("Install", "On site, to the still."),
            ("A stop", "We make what the interior needs. We are not a furniture catalogue."),
        ],
        "ask_h": "Questions the mill is asked",
        "ask": [
            ("Is Woodex Furniture a separate shop?", "It is the mill connected to the still. Same practice. Different door if you only need a piece."),
            ("Can you copy a European kitchen photo?", "We can make a kitchen for this climate and this plan. We will not pirate a brand."),
            ("Do you install outside Lahore?", "Yes, when the piece is ours and the site is ready."),
        ],
        "geo_h": "Where the mill meets the room",
        "geo_p": "Made for rooms in Lahore, Karachi, Islamabad. Installed when the site can take it.",
        "cities": [
            ("Lahore", "Mill + desk", "../locations/lahore.html"),
            ("Karachi", "Install", "../locations/karachi.html"),
            ("Islamabad", "Install", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Connected still", "The mill reads what you approved."),
            ("Craft", "Kitchens, wardrobes, counters."),
            ("ISO 9001", "A piece with a trail."),
            ("~20 yrs", "Founder years — joinery is not a side hustle."),
        ],
        "note_gate": "BOQ gate",
        "note_h": "Interior design cost in Pakistan",
        "note_href": "../insights/interior-design-cost-pakistan.html",
        "cta_wa": "Hello Woodex — joinery / furniture.",
    },
    "lighting": {
        "service": "Interior lighting design",
        "have_h": "What light the room already has",
        "have": [
            ("Noon glare", "A room approved only at noon will fail at 9pm."),
            ("A still without fittings", "Materials chosen, light not yet named."),
            ("A night brief", "Restaurant, lobby, the house after Maghrib."),
            ("Existing fittings", "What stays. What is wasting power and ruining faces."),
        ],
        "out_h": "What a lighting brief names",
        "out": [
            ("The night scene", "Layers: task, ambient, the one thing that glows."),
            ("A schedule", "Named fittings, not ‘warm lights’."),
            ("Power coordination", "Points the electrician can actually put in."),
            ("A still at the right hour", "We show the hour the room is used."),
        ],
        "ask_h": "Questions light actually asks",
        "ask": [
            ("Do you sell fittings?", "We specify. We do not run a lamp shop. The still names the light."),
            ("Can you fix a room that is already built?", "Often. Survey at the hour it fails — usually night."),
            ("Is lighting a separate fee from interiors?", "Say so in the brief. Lighting without a plan is a shopping list."),
        ],
        "geo_h": "Pakistani hours",
        "geo_p": "Lahore dust, Karachi humidity, Islamabad clear nights. The same fitting does not behave in all three.",
        "cities": [
            ("Lahore", "Dust and glare", "../locations/lahore.html"),
            ("Karachi", "Humidity and night", "../locations/karachi.html"),
            ("Islamabad", "Clearer nights", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Hour of use", "We approve the scene you will actually sit in."),
            ("3D Studio", "Light in the still — in-house."),
            ("ISO 9001", "A schedule, not a mood."),
            ("500+", "Rooms that had to work after dark."),
        ],
        "note_gate": "3D gate",
        "note_h": "What is 3D visualization?",
        "note_href": "../insights/what-is-3d-visualization.html",
        "cta_wa": "Hello Woodex — lighting.",
    },
    "pharmacy": {
        "service": "Pharmacy and clinic interiors",
        "have_h": "What a dispensing room needs",
        "have": [
            ("A Saturday queue", "Calm rooms that have to work — not a spa with a counter."),
            ("Stock and schedule", "What is behind glass, what is in a drawer, what a pharmacist can reach."),
            ("A brand", "Wellstar is a path we can name. Your brand is yours."),
            ("A DHA or city unit", "Rules, access, a waiting bench that is not an afterthought."),
        ],
        "out_h": "What we actually drew for rooms like this",
        "out": [
            ("Dispense", "The counter as a working piece, not a marble slab."),
            ("Wait", "A bench that does not block the queue."),
            ("Back of house", "Stock that can be counted on a Tuesday."),
            ("A named path", "Wellstar Pharmacy → Cosmetics → Mini Hospital, DHA Lahore — the beginning we can name."),
        ],
        "ask_h": "Questions a pharmacy brief asks",
        "ask": [
            ("Is Wellstar your only healthcare client?", "It is the only named client on this site. Other work stays unnamed until you allow a name."),
            ("Do you design hospitals?", "We designed a mini hospital for Wellstar. We do not claim industrial or institutional healthcare we have not done."),
            ("Can you execute as well as design?", "Yes, on the Woodex path: still → BOQ → site. Or your drawings after review."),
        ],
        "geo_h": "DHA and the three cities",
        "geo_p": "The named work is DHA Lahore. Studios also sit in Karachi and Islamabad for rooms that have to stay calm on a Saturday.",
        "cities": [
            ("Lahore", "DHA — named work", "../locations/lahore.html"),
            ("Karachi", "Clifton studio", "../locations/karachi.html"),
            ("Islamabad", "F-7 studio", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Wellstar", "Pharmacy → Cosmetics → Mini Hospital. DHA Lahore."),
            ("Calm Saturday", "The test is the queue, not the render."),
            ("ISO 9001", "A clinic is a process."),
            ("One name", "We do not invent a client list."),
        ],
        "note_gate": "Stop rule",
        "note_h": "Design vs turnkey execution",
        "note_href": "../insights/design-vs-turnkey.html",
        "cta_wa": "Hello Woodex — pharmacy / clinic interior.",
    },
    "software-house": {
        "service": "Software house interior design",
        "have_h": "How the team actually sits",
        "have": [
            ("Focus rooms", "Deep work. Not a mural of the values deck."),
            ("A demo", "Where a client sees the product. A room, not a corridor."),
            ("Headcount that will change", "A floor that can take another squad without dying."),
            ("A culture brief", "Culture is how people sit. We will not paint a slogan and call it done."),
        ],
        "out_h": "What a software floor receives",
        "out": [
            ("Focus first", "Acoustics, light, the desk. The mural is last."),
            ("Collab without theatre", "Rooms with a door. Not a ‘breakout’ that is a corridor."),
            ("Arrival", "A candidate should understand the company in ten metres."),
            ("Phased fit-out", "If you cannot empty the floor."),
        ],
        "ask_h": "Questions a CTO / admin asks",
        "ask": [
            ("Will you fill the walls with brand?", "Only after the floor works. Focus, then culture."),
            ("Can developers stay on site during works?", "If we phase it. We will say when we cannot."),
            ("Do you 3D every bay?", "No. Arrival, demo, and any room the founders will argue about."),
        ],
        "geo_h": "Floors in the three cities",
        "geo_p": "Gulberg, Clifton, F-7 — the cities where these companies actually sit.",
        "cities": [
            ("Lahore", "Gulberg III", "../locations/lahore.html"),
            ("Karachi", "Clifton", "../locations/karachi.html"),
            ("Islamabad", "F-7", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Focus first", "We will refuse a mural-first brief."),
            ("10+ yrs", "Execution in occupied floors."),
            ("ISO 9001", "Handover while the company keeps shipping."),
            ("500+", "Workplaces included."),
        ],
        "note_gate": "Workplace have",
        "note_h": "Office interior design guide",
        "note_href": "../insights/office-interior-guide.html",
        "cta_wa": "Hello Woodex — software house interior.",
    },
    "space-planning": {
        "service": "Space planning",
        "have_h": "What we test before anyone decorates",
        "have": [
            ("A floor plate", "Columns, cores, the walk that already exists."),
            ("A headcount or a family", "Who is in the room, at what hour."),
            ("A conflict", "Too little storage, a kitchen that blocks Eid, a shop that cannot queue."),
            ("A date you want 3D", "3D waits. The test-fit is the first drawing."),
        ],
        "out_h": "What a test-fit is",
        "out": [
            ("The test-fit", "Rooms placed. Furniture that fits. Doors that open."),
            ("Options, named", "Two or three walks — not twenty moods."),
            ("A stop rule", "If the plate cannot take the brief, we say so before 3D spend."),
            ("Handoff", "Into design, 3D, or your own architect."),
        ],
        "ask_h": "Questions a test-fit asks",
        "ask": [
            ("Is space planning the whole interior job?", "No. It is the first gate. Design, 3D and build are later gates you can buy."),
            ("Can you plan from a broker PDF?", "We can start. We still measure before anyone spends on 3D."),
            ("Do you charge for a test-fit?", "It is work. We do not promise unlimited free design."),
        ],
        "geo_h": "Plates we can stand on",
        "geo_p": "Lahore, Karachi, Islamabad. A PDF is not a floor. We like to walk it.",
        "cities": [
            ("Lahore", "Walk the plate", "../locations/lahore.html"),
            ("Karachi", "Walk the plate", "../locations/karachi.html"),
            ("Islamabad", "Walk the plate", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Test before decorate", "The first Woodex sentence."),
            ("No free-unlimited", "Planning is a gate, not a gift."),
            ("ISO 9001", "A drawing with a name on it."),
            ("500+", "Plates that were tested, then built — when asked."),
        ],
        "note_gate": "Have / survey",
        "note_h": "Home renovation checklist",
        "note_href": "../insights/home-renovation-checklist.html",
        "cta_wa": "Hello Woodex — space planning.",
    },
    "visualization": {
        "service": "Rendering and walkthrough",
        "have_h": "Which views you are buying",
        "have": [
            ("Stills", "One still per key room. A meeting, not a gallery."),
            ("360", "When you must turn in place."),
            ("Walkthrough", "Only if the path through the building is the decision."),
            ("3D-only", "A complete engagement. The still can go to BOQ later."),
        ],
        "out_h": "What 3D Studio actually ships",
        "out": [
            ("Named views", "You say which. We do not dump forty angles."),
            ("One revision cycle", "The still is the contract."),
            ("The same model the mill can follow", "In-house. Not a render farm."),
            ("A door to 3D Studio", "This page is the short list. The studio is the room."),
        ],
        "ask_h": "Questions a visualization brief asks",
        "ask": [
            ("Is this the same as Woodex 3D Studio?", "Yes. This page is the short list — stills, walkthrough, 360. Open the studio for the full brief."),
            ("Will you invent a layout in 3D?", "No. 3D follows a plan. We do not call a invented layout ‘design’."),
            ("Can I stop after stills?", "Yes. 3D-only is complete."),
        ],
        "geo_h": "Views made in Pakistan, for these cities",
        "geo_p": "Modelled in-house. Light as it behaves in Lahore, Karachi, Islamabad — not a Scandinavian stock sky.",
        "cities": [
            ("Lahore", "Studio", "../locations/lahore.html"),
            ("Karachi", "Studio", "../locations/karachi.html"),
            ("Islamabad", "Studio", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("In-house", "Not outsourced stills."),
            ("See it. Understand it. Build it.", "The studio line."),
            ("Exclusive H2 lives on 3D Studio", "This page does not steal it."),
            ("ISO 9001", "A view with a revision trail."),
        ],
        "note_gate": "3D gate",
        "note_h": "What is 3D visualization?",
        "note_href": "../insights/what-is-3d-visualization.html",
        "cta_wa": "Hello Woodex — 3D visualization only.",
    },
    "office-fit-out": {
        "service": "Office fit-out",
        "have_h": "What must stay open",
        "have": [
            ("A live floor", "People shipping product while we work. Sequence or nothing."),
            ("An approved workplace still", "Woodex-designed — we build what you signed."),
            ("External drawings", "Review first. Then commercial and BOQ."),
            ("A landlord matrix", "What we may touch. Fit-out is not a wish."),
        ],
        "out_h": "What a floor that stays open needs",
        "out": [
            ("Phasing", "Zones that can work while the next bay is in dust."),
            ("Services", "Power and data that do not kill the sprint."),
            ("Joinery on a live floor", "Installed when the bay is ready — not dumped in a corridor."),
            ("Handover per phase", "Keys to a bay, not a mythical ‘all at once’."),
        ],
        "ask_h": "Questions operations will ask",
        "ask": [
            ("Can the team stay?", "If we phase. We will refuse a date that requires a ghost office."),
            ("Do you fit-out without design?", "Yes — after we have read your drawings against the plate."),
            ("Weekend flip?", "Only for a defined bay. We do not sell miracles."),
        ],
        "geo_h": "Occupied floors in three cities",
        "geo_p": "Gulberg, Clifton, F-7 — and plates we can reach. A live office is a logistics brief.",
        "cities": [
            ("Lahore", "Phased floors", "../locations/lahore.html"),
            ("Karachi", "Phased floors", "../locations/karachi.html"),
            ("Islamabad", "Phased floors", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Stay open", "The brief is the floor that cannot empty."),
            ("10+ yrs", "Execution in occupied buildings."),
            ("ISO 9001", "Phase notes, not a shout."),
            ("Two routes", "Our still or your pack — after review."),
        ],
        "note_gate": "Stop rule",
        "note_h": "Design vs turnkey execution",
        "note_href": "../insights/design-vs-turnkey.html",
        "cta_wa": "Hello Woodex — office fit-out.",
    },
    "commercial-fit-out": {
        "service": "Commercial fit-out",
        "have_h": "What has to trade on Saturday",
        "have": [
            ("A unit with a date", "Opening is a Saturday, not a render."),
            ("A path", "Enter, serve, close — approved before demolition."),
            ("A still or a pack", "Woodex still, or your drawings after review."),
            ("Services to the till", "Power, light on the product, AC that does not drip on stock."),
        ],
        "out_h": "What a trading fit-out includes",
        "out": [
            ("Path made real", "Floor, light, the queue."),
            ("Counters from the mill", "The first piece of the brand — made."),
            ("BOQ", "What the site will buy. No fake square-foot rate."),
            ("Handover before Saturday", "Snag while there is still a weekday."),
        ],
        "ask_h": "Questions a commercial opening asks",
        "ask": [
            ("Can you open us in four weeks?", "Only if the still is approved and the BOQ exists. Dates without quantities are theatre."),
            ("Shop, showroom, clinic — same team?", "Same studio. Different path. We do not clone a café onto a clinic."),
            ("Your design or ours?", "Either route. Review first if the pack is not ours."),
        ],
        "geo_h": "Units that have to open",
        "geo_p": "Lahore, Karachi, Islamabad. Mall landlords and high-street keys. We show up for Saturday.",
        "cities": [
            ("Lahore", "Open on time", "../locations/lahore.html"),
            ("Karachi", "Open on time", "../locations/karachi.html"),
            ("Islamabad", "Open on time", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Saturday test", "If it cannot trade, it is not done."),
            ("ISO 9001", "Opening as a list."),
            ("Mill", "Counters connected to the still."),
            ("Wellstar", "A commercial path we can name in DHA."),
        ],
        "note_gate": "Path",
        "note_h": "Retail shop interiors",
        "note_href": "../insights/retail-shop-interior.html",
        "cta_wa": "Hello Woodex — commercial fit-out.",
    },
    "residential-fit-out": {
        "service": "Residential fit-out",
        "have_h": "The house as it will be lived",
        "have": [
            ("An approved home still", "We build the rooms you signed."),
            ("A family still in the house", "Phasing, dust, a kitchen that must keep working."),
            ("Someone else’s drawings", "Review against the house. Then BOQ."),
            ("Wet areas", "Baths and laundry that survive this climate."),
        ],
        "out_h": "What a home fit-out actually does",
        "out": [
            ("Kitchens and wardrobes", "Made, then installed — not a flat-pack surprise."),
            ("Wet", "Membranes, falls, fittings named."),
            ("Finishes to the still", "The walnut you approved, not a ‘close match’."),
            ("Handover", "Snag with the family in the rooms, not a PDF."),
        ],
        "ask_h": "Questions a household asks at site",
        "ask": [
            ("Can we stay at home?", "Sometimes. We will say when a kitchen must close."),
            ("Will the mill match the still?", "That is the point of a connected mill. If it cannot, we stop before install."),
            ("Do you fit-out a house you did not design?", "After review. We do not execute a file we have not read."),
        ],
        "geo_h": "Houses we can finish",
        "geo_p": "Lahore, Karachi, Islamabad. Dust, heat, generators. Fit-out is climate, not only taste.",
        "cities": [
            ("Lahore", "Live-in houses", "../locations/lahore.html"),
            ("Karachi", "Live-in houses", "../locations/karachi.html"),
            ("Islamabad", "Live-in houses", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("Lived, not staged", "Handover is a Tuesday morning."),
            ("Mill", "Kitchen and wardrobe as made."),
            ("ISO 9001", "Snag as a list."),
            ("~20 yrs", "Founder years — houses are not a side category."),
        ],
        "note_gate": "Have / survey",
        "note_h": "Home renovation checklist",
        "note_href": "../insights/home-renovation-checklist.html",
        "cta_wa": "Hello Woodex — residential fit-out.",
    },
    "turnkey": {
        "service": "Turnkey interiors",
        "have_h": "When one partner is the brief",
        "have": [
            ("Empty to keys", "Design, 3D, budget, BOQ, execute, deliver — one studio."),
            ("A stop you might still take", "Turnkey is not automatic. You can still stop after the still."),
            ("A date and a band", "Both required. One without the other is a wish."),
            ("A building that is ready", "We do not turnkey a fiction."),
        ],
        "out_h": "What turnkey is — and is not",
        "out": [
            ("One partner", "Concept to keys. Designers, 3D, mill, site."),
            ("Gates named", "You still approve each gate. Turnkey is not a blindfold."),
            ("BOQ before site", "Money written after the room, before the dust."),
            ("Not unlimited design", "We do not promise endless free sketches."),
        ],
        "ask_h": "Questions a turnkey client asks",
        "ask": [
            ("Does turnkey mean I never see a drawing?", "No. You approve the room. Then we build that room."),
            ("Can I buy only design and 3D?", "Yes. Turnkey is a route, not a trap. 3D-only is complete."),
            ("Do you have a square-foot turnkey rate?", "No. We do not publish a fake rate."),
        ],
        "geo_h": "Keys in three cities",
        "geo_p": "Gulberg III, Clifton, F-7 — and sites we can staff. Turnkey without a studio nearby is a risk we will name.",
        "cities": [
            ("Lahore", "Concept to keys", "../locations/lahore.html"),
            ("Karachi", "Concept to keys", "../locations/karachi.html"),
            ("Islamabad", "Concept to keys", "../locations/islamabad.html"),
        ],
        "eeat": [
            ("One partner", "The promise. Not a contractor hunt."),
            ("ISO 9001", "Gates with names."),
            ("Stop allowed", "Turnkey is not automatic."),
            ("500+", "Including jobs that went to keys."),
        ],
        "note_gate": "Stop rule",
        "note_h": "Design vs turnkey execution",
        "note_href": "../insights/design-vs-turnkey.html",
        "cta_wa": "Hello Woodex — turnkey interiors.",
    },
}


def blocks(d):
    have = f'''
    <section class="wx-have" aria-labelledby="have-h">
      <header>
        <p class="eyebrow">What you walk in with</p>
        <h2 id="have-h">{d["have_h"]}</h2>
      </header>
      {lis(d["have"], "wx-have-list")}
    </section>'''
    out = f'''
    <section class="wx-out" aria-labelledby="out-h">
      <header>
        <p class="eyebrow">Named outputs</p>
        <h2 id="out-h">{d["out_h"]}</h2>
      </header>
      {lis(d["out"], "wx-out-list")}
    </section>'''
    ask = f'''
    <section class="wx-ask" aria-labelledby="ask-h">
      <header>
        <p class="eyebrow">Direct answers</p>
        <h2 id="ask-h">{d["ask_h"]}</h2>
      </header>
      {dl(d["ask"])}
    </section>'''
    cities = "\n".join(
        f'<li><small>{a}</small><a href="{c}">{b}</a></li>' for a, b, c in d["cities"]
    )
    geo = f'''
    <section class="wx-geo" aria-labelledby="geo-h">
      <header>
        <p class="eyebrow">Studios · Pakistan</p>
        <h2 id="geo-h">{d["geo_h"]}</h2>
      </header>
      <address>Woodex Interior · LG 90 Link Road, Model Town, Lahore · 10:00 – 8:30<br />{d["geo_p"]}</address>
      <ul class="wx-geo-cities">{cities}</ul>
    </section>'''
    eeat_items = "".join(f"<li><b>{a}</b><span>{b}</span></li>" for a, b in d["eeat"])
    eeat = f'''
    <section class="wx-eeat" aria-labelledby="eeat-h">
      <header>
        <p class="eyebrow">Why this page is not a catalogue</p>
        <h2 id="eeat-h">Proof that belongs on this brief</h2>
      </header>
      <ul class="wx-eeat-list">{eeat_items}</ul>
    </section>'''
    note = f'''
    <section class="wx-note" aria-labelledby="note-h">
      <header>
        <p class="eyebrow">Studio note</p>
      </header>
      <article class="wx-note-row">
        <header>
          <p class="gate">{d["note_gate"]}</p>
          <h2 id="note-h"><a href="{d["note_href"]}">{d["note_h"]}</a></h2>
        </header>
        {btn(d["note_href"], "Discover more")}
      </article>
    </section>'''
    return have, out, ask, geo, eeat, note


def faq_ld(slug, d):
    ents = []
    for q, a in d["ask"]:
        ents.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {"@type": "Answer", "text": a},
        })
    graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": d["service"],
                "url": f"https://woodex.interior/services/{slug}.html",
                "provider": {
                    "@type": "InteriorDesignStudio",
                    "name": "Woodex Interior",
                    "telephone": "+923362259477",
                    "email": "studio@woodex.interior",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "LG 90 Link Road, Model Town",
                        "addressLocality": "Lahore",
                        "addressCountry": "PK",
                    },
                    "areaServed": ["Lahore", "Karachi", "Islamabad", "Pakistan"],
                },
                "areaServed": ["Lahore", "Karachi", "Islamabad", "Pakistan"],
            },
            {"@type": "FAQPage", "mainEntity": ents},
        ],
    }
    return (
        '  <script type="application/ld+json">\n'
        + json.dumps(graph, ensure_ascii=False, indent=2)
        + "\n  </script>\n"
    )


def inject_page(slug, d):
    path = ROOT / "services" / f"{slug}.html"
    t = path.read_text(encoding="utf-8")
    if 'class="wx-have"' in t:
        print("skip existing", slug)
        return False
    have, out, ask, geo, eeat, note = blocks(d)
    # Avoid repeating an accordion FAQ if one already exists — still add wx-ask
    # (direct answers vs accordion is a different block). Copy in ask is unique.
    chunk = "\n".join([have, out, ask, geo, eeat, note]) + "\n"
    if '<section class="cta">' in t:
        t = t.replace('<section class="cta">', chunk + '    <section class="cta">', 1)
    else:
        t = t.replace("</main>", chunk + "  </main>", 1)
    css = '<link rel="stylesheet" href="../css/service-theme.css" />'
    extra = css + '\n  <link rel="stylesheet" href="../css/blog-two.css" />'
    if "blog-two.css" not in t:
        t = t.replace(css, extra, 1)
    if '"@type": "Service"' not in t:
        t = t.replace("</head>", faq_ld(slug, d) + "</head>", 1)
    path.write_text(t, encoding="utf-8")
    print("injected", slug)
    return True


def main():
    n = 0
    for slug, d in PAGES.items():
        if inject_page(slug, d):
            n += 1
    print("done", n)


if __name__ == "__main__":
    main()
