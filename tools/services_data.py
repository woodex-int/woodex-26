"""Woodex services v3 — per-page data for tools/build_services.py.

Every page follows the owner-locked 9-section system; all uniqueness
lives here. Content sources: docker briefs + docs/services-plans/*.md
+ fact lock (docs/BUSINESS_MODEL_ALIGNMENT.md). NO PKR. NO DGDA/PBMC.
"""

FACT_LOCK = {
    "base": "https://woodex.interior",
    "phone": "+92 322 4000768",
    "email": "studio@woodex.interior",
    "street": "LG 90 Link Road, Model Town",
    "hours": "Mo-Su 10:00-20:30",
    "nap_html": (
        '<p><strong>Woodex Interior</strong><br />LG 90 Link Road, Model Town, Lahore</p>\n'
        '            <p>WhatsApp +92 322 4000768 · studio@woodex.interior<br />Open 10:00 – 20:30</p>'
    ),
}

# Universal "Why Woodex" — identical on every services page (owner copy, 2026-09-20)
WHY_WOODEX = {
    "h2": "Four facts. Every project. Every page.",
    "p": "10+ years founder-led. 200\u2013500 projects drawn and built across Pakistan. Joinery manufactured in-house through Woodex Furniture\u2122. And the Cost-Lock \u2014 a fixed-price BOQ before any work starts.",
    "cta": "Start your project",
    "stats": [
        ["10+ yrs", "Founder-led studio, a decade deep"],
        ["200\u2013500", "Projects drawn and built across Pakistan"],
        ["In-house", "Joinery by Woodex Furniture\u2122 \u2014 not outsourced"],
        ["Cost-Lock", "Fixed-price BOQ before work starts"],
    ],
}

PAGES = {

    # ════════════════════════ OFFICE FIT-OUT ════════════════════════
    "office-fit-out": {
        "url": "services/office-fit-out.html",
        "css_prefix": "../",
        "page_css": True,
        "page_css_file": "../css/of.css?v=3",
        "schema_name": "Office Fit-Out",
        "desc": "The physical build-out of an office — partitions, ceilings, flooring, electrical, HVAC, joinery and workstations — mobilization to handover.",
        "crumbs": '<a href="../index.html">Home</a> · <a href="../services.html">Services</a> · Office Fit-Out',

        "hero": {
            "img": "../images/split-night.jpg",
            "eyebrow": "Execution &amp; Build — Partitions · MEP · Joinery · Furniture",
            "h1": "Office Fit-Out in Lahore",
            "lead": "Complete office fit-out services in Lahore — partitions, false ceilings, flooring, electrical, lighting, HVAC coordination, joinery, furniture and final handover. Execution-only or full turnkey design and build.",
            "cta1": "Request a Fit-Out Proposal",
            "cta2": "See the run",
            "cta2_href": "#run",
            "trust": ["10 Years Experience", "200+ Projects Delivered", "BOQ-Based Contracts", "Design + Build Available"],
        },

        "who": {
            "sub": "Woodex Interior provides office fit-out for these client types and project situations.",
            "defn": {
                "paras": [
                    "Office fit-out is the physical process of converting an empty, shell or partially finished commercial space into a fully functional and furnished working environment \u2014 every trade from civil works and partitions to electrical, lighting, flooring, joinery, furniture and final handover.",
                    "Fit-out follows interior design: the design phase produces the space plan, 3D visuals, working drawings and BOQ; the fit-out executes what the design specifies. Woodex delivers both \u2014 separately, or as one design-and-build contract.",
                ],
                "img": "../images/project-urban.jpg",
                "alt": "Commercial interior under fit-out \u2014 partitions and ceiling systems",
                "cap": "From shell floor to working office \u2014 every trade under one programme.",
            },
            "cards": [
                ["Shell-to-office move-in", "You have taken possession of a new, empty space and need it converted into a complete, operational office before your team moves in."],
                ["Company relocating", "Your business is growing and you are moving to a bigger floor. You need a professional fit-out delivered on time so operations are not disrupted."],
                ["Approved design, needing execution", "Your architect or designer has produced drawings and a BOQ. You need a reliable contractor who executes precisely and manages the site professionally."],
                ["Landlords &amp; developers", "You own a commercial building and need a fit-out that increases the appeal and lettable value of your floor space."],
                ["Software houses", "Collaborative zones, ergonomic workstations, branded walls and a professional reception — delivered within a controlled timeline."],
                ["Co-working operators", "Private offices, hot desks, meeting rooms, lounges and communal areas — delivered to one consistent standard throughout."],
            ],
        },

        "run": {
            "title": "Shell to Signed Handover",
            "sub": "Every Woodex office fit-out follows the same structured 14-step delivery process — transparent, documented, managed.",
            "two_col": True,
            "note": "→ <a href=\"../process.html\">See the full Woodex project delivery process</a>",
            "steps": [
                ["Site Visit and Brief", "Our project team visits your site, takes measurements and conducts a condition review. We discuss requirements, timeline, specification level and budget expectations."],
                ["BOQ and Cost Planning", "A detailed bill of quantities is prepared from the confirmed design or agreed scope — itemized room by room, trade by trade, before any work begins."],
                ["Design Approval", "Where the design phase is included, all space plans, 3D renders and technical drawings are approved by you before procurement or mobilization."],
                ["Contract and Programme", "A formal contract and construction programme are issued — scope, milestones, payment schedule and completion date confirmed."],
                ["Procurement and Lead Times", "Materials, fittings, joinery and furniture are procured to the BOQ and programme. Lead times are tracked to prevent site delays."],
                ["Site Mobilization", "Hoardings, protection of existing areas, contractor access, site safety and material storage are organized before works begin."],
                ["Structural and Civil Works", "Demolition where required, civil repair, surface preparation, block or stud-wall construction and structural modifications — the first trade on site."],
                ["MEP First-Fix", "Electrical conduit, HVAC ductwork, plumbing rough-in and data conduit are installed before ceilings and walls are closed."],
                ["Partitions and Ceilings", "Drywall partitions, glass systems and false-ceiling frameworks are installed and prepared for finishing."],
                ["Flooring and Wall Finishes", "Flooring is laid — tiles, vinyl, wood or epoxy — and wall finishes applied: paint, panels, cladding or wallpaper as specified."],
                ["MEP Second-Fix", "Fittings, light fixtures, AC units, grilles, sockets, switches and plumbing fixtures are installed and tested."],
                ["Joinery and Furniture", "Custom joinery — reception counters, storage, cabinets — is installed, followed by workstations, chairs, tables and all furniture."],
                ["Snagging and Quality Inspection", "A thorough snagging inspection is conducted. Defects are identified, documented and resolved before handover conversations begin."],
                ["Final Cleaning and Handover", "The completed space is deep-cleaned, photographed, documented and formally handed over to the client."],
            ],
        },

        "why": {
            "cards": [
                ["One team for design and build", "When Woodex manages both, the same team that designed your office builds it. No information gap between drawing and execution."],
                ["Detailed BOQ before any work begins", "An itemized bill of quantities before site work starts — trade by trade, room by room. No surprises during execution."],
                ["14-step structured delivery", "A documented process from site visit to handover. Milestones confirmed before the contract; progress reported throughout."],
                ["3D approval before execution", "Where design is included, your completed office is visualized in photorealistic 3D before physical work begins. You approve it — then we build it."],
                ["10+ years · 200–500 projects", "Since 2016, Woodex Interior has delivered across office, retail, healthcare, hospitality and residential sectors. Fit-out execution is a core discipline — not a side capability."],
                ["Custom furniture — Woodex Furniture™", "Workstations, reception counters, meeting tables and storage — designed, manufactured and integrated directly into the fit-out programme."],
            ],
        },

        "faq": {
            "items": [
                ["What does office fit-out include?", "Office fit-out covers the physical conversion of an empty or partially finished space into a complete working environment — partitions, false ceilings, flooring, electrical, lighting, HVAC coordination, joinery, furniture supply and installation, snagging and final handover. The exact scope depends on the starting condition of the space and the fit-out type selected."],
                ["What is the difference between Cat A and Cat B fit-out?", "Category A brings a shell space to a neutral, occupiable base — basic services, suspended ceiling, grid lighting, surface painting — typically done by landlords preparing space for tenants. Category B is the complete finishing specific to the occupying business: branded partitions, custom joinery, premium finishes, furniture and full MEP coordination."],
                ["How long does an office fit-out take?", "A straightforward fit-out of 1,000–2,000 sq. ft. typically takes 3–6 weeks from site mobilization to handover. Larger or more complex projects with custom joinery, extensive MEP scope and multiple zones take proportionally longer. A project-specific programme is confirmed before the contract is signed."],
                ["Can Woodex fit out my office if I already have a design?", "Yes. If you have approved drawings and a BOQ from another architect or designer, Woodex Interior provides execution-only fit-out services. We review your drawings, prepare an independent BOQ and deliver the project to the specified design."],
                ["Do I need a design before the fit-out can start?", "You need at minimum a space plan and a confirmed scope. If you do not have a design, Woodex Interior can provide both design and fit-out under one turnkey contract — from initial brief to final handover."],
                ["Does Woodex Interior manage subcontractors?", "Yes. Woodex manages all trades involved in the fit-out — civil, electrical, plumbing, HVAC, glass, flooring, ceiling, joinery and furniture. You have one project manager as your single point of contact throughout the project."],
                ["What happens if there are changes during the fit-out?", "Any change to the approved scope is documented as a formal variation order with confirmed cost and timeline impact before it is implemented. Woodex Interior does not make scope changes without written client approval."],
                ["Does Woodex Interior work on offices outside Lahore?", "Our main office and project management team are based in Lahore. We provide project delivery support in Islamabad, Karachi and other cities across Pakistan. Contact us with your project location and we will advise on resource allocation and programme."],
            ],
        },

        "slide": {
            "title": "The Four Levels of Office Fit-Out",
            "sub": "From raw shell to turnkey design-and-build — one ladder of scope, each level a separate engagement.",
            "label": "Type",
            "note": "Not sure which level your project needs? We advise from the site condition up — based on your space, its current condition and your business requirements.",
            "items": [
                {"t": "Shell &amp; Core", "p": "The raw structural shell brought to a usable base — leveling, rough-ins, basic washrooms, access and fire provisions.", "img": "../images/project-urban.jpg", "alt": "Commercial shell interior awaiting base build", "cap": "Shell &amp; Core Fit-Out"},
                {"t": "Category A", "p": "A neutral, occupiable base — suspended ceiling, grid lighting, AC distribution, floor-box electrics, neutral painting.", "img": "../images/project-concrete.jpg", "alt": "Neutral Category A base build interior", "cap": "Category A Fit-Out"},
                {"t": "Category B", "p": "The complete branded office — bespoke partitions, custom joinery, feature lighting, furniture and full MEP coordination.", "img": "../images/project-spatial.jpg", "alt": "Fully fitted Category B office interior", "cap": "Category B Fit-Out"},
                {"t": "Turnkey Design &amp; Build", "p": "Everything in Category B plus design, 3D approval, BOQ, procurement and project management — one team, one contract.", "img": "../images/studio-hero.jpg", "alt": "Turnkey design and build workspace", "cap": "Turnkey Design &amp; Build"},
            ],
        },

        "related": {
            "hub": "../services.html",
            "cards": [
                ["Design service", "Office Interior Design", "Space planning, concept, 3D visualization and working drawings — the design phase that precedes your fit-out.", "office.html", "../images/project-spatial.jpg"],
                ["Design &amp; build", "Turnkey Design &amp; Build", "Design, build and furnish your office under one contract — first brief to final handover.", "turnkey.html", "../images/split-night.jpg"],
                ["Larger scopes", "Commercial Fit-Out", "Fit-out for retail, healthcare, hospitality and mixed commercial spaces across Pakistan.", "commercial-fit-out.html", "../images/project-urban.jpg"],
                ["Tech workspaces", "Software House Fit-Out", "Collaborative zones, ergonomic workstations and branded environments for technology teams.", "software-house.html", "../images/project-facade.jpg"],
            ],
        },

        "next": {
            "sub": "Three Woodex scopes sit next to office fit-out — each a separate engagement, all run on the same delivery system.",
            "note": "Renovating instead of building new? <a href=\"renovation.html\">See Renovation →</a> &nbsp;·&nbsp; Need the drawings first? <a href=\"office.html\">See Office Interior Design →</a>",
            "cols": [
                ["Office Fit-Out — this scope", "The physical build: partitions, ceilings, flooring, MEP, joinery and furniture. Shell to signed handover, on a BOQ you approved in 3D."],
                ["Office Renovation", "Upgrade or reconfigure an existing, occupied office — phased execution available to minimize operational disruption."],
                ["Office Interior Design", "The design phase that precedes the build — space planning, concept, 3D visualization, working drawings and the BOQ."],
            ],
        },

        "statement": {
            "h2": "Shell in. Business out.",
            "line": "One team takes the floor from bare to open — on a fixed BOQ you approved in 3D.",
            "form": {
                "submit": "Submit Fit-Out Enquiry",
                "fields": [
                    {"id": "of-name", "name": "name", "label": "Full Name *", "type": "text", "ac": "name", "half": True},
                    {"id": "of-company", "name": "company", "label": "Company Name *", "type": "text", "ac": "organization", "half": True},
                    {"id": "of-phone", "name": "phone", "label": "Phone Number *", "type": "tel", "ac": "tel", "half": True},
                    {"id": "of-email", "name": "email", "label": "Email Address *", "type": "email", "ac": "email", "half": True},
                    {"id": "of-loc", "name": "location", "label": "Project Location *", "type": "text", "ph": "Lahore, Islamabad, Karachi…", "ac": "address-level2", "half": True},
                    {"id": "of-size", "name": "size", "label": "Office Size (sq. ft.) *", "type": "text", "ph": "e.g. 2,400", "half": True},
                    {"id": "of-stage", "name": "stage", "label": "Current Stage *", "type": "select", "ph": "Select your stage", "options": ["I have a design and need a contractor", "I need design and fit-out together", "I am still in the planning stage", "I need a renovation of an existing office"]},
                    {"id": "of-msg", "name": "message", "label": "Message / Additional Project Details", "type": "textarea", "ph": "Rooms, zones, target dates, references…", "req": False},
                ],
            },
        },
    },

    # ════════════════════════ PHARMACY ════════════════════════
    "pharmacy": {
        "url": "services/pharmacy.html",
        "css_prefix": "../",
        "page_css": True,
        "page_css_file": "../css/ph.css?v=3",
        "schema_name": "Pharmacy Fit-Out",
        "desc": "Dispensing counter design, controlled drug storage, hygienic finishes, climate control and security — for independent pharmacies and chain rollouts.",
        "crumbs": '<a href="../index.html">Home</a> · <a href="../services.html">Services</a> · Pharmacy Fit-Out',

        "hero": {
            "img": "../images/studio-pharmacy.jpg",
            "eyebrow": "Specialist Build — Dispensing · Storage · Compliance",
            "h1": "Pharmacy Fit-Out in Lahore",
            "lead": "Dispensing counter design, controlled drug storage, licensing-ready finishes, climate control and security systems — for independent pharmacies and chain rollouts across Lahore and Pakistan.",
            "cta1": "Get a Pharmacy Quote",
            "cta2": "See the run",
            "cta2_href": "#run",
            "trust": ["Chain Prototype Expert", "Licensing-Ready Design", "In-House 3D Studio", "4–8 Week Delivery"],
        },

        "who": {
            "sub": "Four pharmacy situations — each with its own workflow, storage and compliance demands.",
            "cards": [
                ["Independent pharmacy owners", "Opening your own pharmacy — neighbourhood dispensary or premium plaza unit. Counter layout, storage, customer flow, billing and back-of-house designed around your workflow, compliant with pharmacy licensing standards."],
                ["Pharmacy chain operators", "Rolling out a repeatable pharmacy prototype — counter, storage system, finishes, lighting, signage — designed once, approved once, replicated at each site with consistent quality and faster timelines."],
                ["Hospital &amp; clinic pharmacies", "High-volume dispensing, secure storage, integration with clinical workflow and strict hygiene standards — designed for throughput, built for compliance."],
                ["Investors &amp; franchisees", "Opening a location under a pharmacy brand? We handle the fit-out from design to handover, aligned with brand specifications and licensing requirements. You focus on operations; we handle the build."],
            ],
        },

        "run": {
            "title": "Survey to Inspection-Ready Handover",
            "sub": "Structured, documented and managed — from first site survey to a pharmacy fitted for inspection.",
            "two_col": False,
            "note": "Timeline: a standard independent pharmacy (800–1,200 sq ft) takes 4–6 weeks from brief to handover. A chain prototype takes 6–8 weeks; subsequent locations 4–5 weeks each.",
            "steps": [
                ["Site Survey &amp; Brief", "We visit your site, measure the space, check structural conditions and utilities — then discuss counter type, storage needs, branding, compliance, budget and timeline."],
                ["Design &amp; 3D Approval", "Floor plans and photorealistic 3D renders of your pharmacy — counter layout, shelving, lighting, finishes, branding. You approve before we proceed. Two revision rounds included."],
                ["Licensing Compliance Check", "The design is reviewed against pharmacy licensing requirements — controlled drug storage, dispensing area dimensions, hygiene standards, signage — and adjusted before construction."],
                ["Construction &amp; MEP", "Partitions, ceilings, flooring, electrical, plumbing, HVAC and carpentry executed by Woodex site teams. Pharmacy-specific MEP — temperature zones, dedicated circuits, exhaust — coordinated from design stage."],
                ["Finishing &amp; Branding", "Antibacterial paint, anti-slip flooring, counter surfaces, shelving, signage, graphics — plus security systems: CCTV, alarms, controlled drug cabinet locks."],
                ["Handover &amp; Snagging", "Complete snagging walkthrough, corrections and handover. Your pharmacy is operational-ready — clean, compliant and fitted for inspection."],
            ],
        },

        "why": {
            "cards": [
                ["Chain rollout expertise", "A pharmacy prototype designed once, approved once — replicated across locations with consistent design, consistent finishes, consistent quality. Faster rollout, lower per-unit cost."],
                ["Compliance built in", "Pharmacy licensing requirements are addressed at the design stage — controlled drug storage, dispensing area dimensions, hygiene standards — not corrected after construction."],
                ["In-house 3D Studio", "Photorealistic renders of your pharmacy produced in our own 3D Studio — ideal for chain approval, investor presentations and landlord submissions. No third-party delays."],
                ["Custom joinery — Woodex Furniture™", "Dispensing counters, controlled drug cabinets, storage units and shelving manufactured by our sister brand — custom-fitted to your pharmacy, not off-the-shelf."],
            ],
        },

        "faq": {
            "items": [
                ["How much does it cost to fit out a pharmacy in Lahore?", "Cost depends on unit size, specification level and material selection — from a basic fit-out with standard shelving and counter, through mid-spec with custom counter and controlled drug storage, to premium chain rollouts with full custom joinery and branding. A free site survey provides an accurate fixed quote within five working days."],
                ["How long does a pharmacy fit-out take?", "A standard independent pharmacy (800–1,200 sq ft) takes 4–6 weeks from brief to handover. A chain rollout prototype takes 6–8 weeks; once established, subsequent locations take 4–5 weeks each. Timelines assume timely design approval and material procurement."],
                ["Do you handle pharmacy licensing compliance?", "Yes. Woodex designs pharmacies to meet pharmacy licensing requirements — controlled drug storage, dispensing area dimensions, hygiene standards, signage and security. Compliance is reviewed at the design stage, so the finished pharmacy is fitted for inspection. Licensing fees themselves are separate and paid by the client."],
                ["Can you fit out multiple pharmacy locations for a chain?", "Yes — and this is one of Woodex's key strengths. We develop a repeatable pharmacy prototype — counter design, storage system, finishes, lighting, signage — designed once, approved once, and replicated at each site with consistent quality and faster timelines."],
                ["What is included in a pharmacy fit-out versus a renovation?", "A fit-out is a complete build-out of a bare shell or new-build unit into a functioning pharmacy — partitions, ceilings, flooring, counter, storage, HVAC, lighting, finishes, security and branding. A renovation is an upgrade of an existing occupied pharmacy — counter replacement, finishes refresh, layout adjustments. If your pharmacy already exists, see the Renovation service."],
                ["Can Woodex handle furniture and joinery for the pharmacy?", "Yes. Our sister brand Woodex Furniture™ manufactures custom dispensing counters, controlled drug cabinets, shelving systems, back-office furniture and storage units — custom-fitted to your pharmacy's dimensions and workflow. No third-party delays; joinery matches the overall design."],
                ["Do you work on pharmacies outside Lahore?", "Yes. While our studio is in Lahore (Model Town), we deliver pharmacy fit-outs across Punjab and in other cities including Islamabad and Karachi. Site visits outside Lahore are arranged separately — remote design collaboration (3D renders, virtual meetings) keeps the process efficient."],
                ["What if I only need a dispensing counter — not a full fit-out?", "Woodex Furniture™ can manufacture and install a custom dispensing counter as a standalone product — L-shaped, U-shaped or island layout, with controlled drug storage integrated. Contact us for a counter-only quote. For a full fit-out including partitions, flooring, HVAC, lighting and finishes, this is the right page."],
            ],
        },

        "slide": {
            "title": "The Four Blocks of a Pharmacy Fit-Out",
            "sub": "Every Woodex pharmacy is assembled from the same clinical blocks — configured to your unit, your workflow and your licence.",
            "label": "Block",
            "note": "Each block is designed in AutoCAD and approved in 3D before construction — two revision rounds included.",
            "items": [
                {"t": "Dispensing Counter", "p": "L-shaped, U-shaped or island layout — designed for pharmacist workflow, customer flow and secure handover.", "img": "../images/studio-pharmacy.jpg", "alt": "Pharmacy dispensing counter design", "cap": "Dispensing Counter Design"},
                {"t": "Controlled Drug Storage", "p": "Locked, alarmed, access-restricted cabinets — manufactured by Woodex Furniture™, custom-fitted to the unit.", "img": "../images/craft-joinery.jpg", "alt": "Custom controlled drug storage joinery", "cap": "Controlled Drug Storage"},
                {"t": "Climate &amp; Lighting", "p": "Temperature-controlled zones for sensitive medication, 4000K–5000K glare-free lighting on labels, dedicated circuits.", "img": "../images/project-spatial.jpg", "alt": "Climate-controlled medication storage zone", "cap": "Climate Control &amp; Lighting"},
                {"t": "Security &amp; Branding", "p": "CCTV, alarms, restricted-access zones — plus licensing-ready signage and the full branding package.", "img": "../images/project-facade.jpg", "alt": "Pharmacy signage and branding systems", "cap": "Security &amp; Branding"},
            ],
        },

        "related": {
            "hub": "../services.html",
            "cards": [
                ["Retail build", "Retail Shop Fit-Out", "Counters, displays, lighting and customer flow for retail units — the commercial cousin of pharmacy build-outs.", "retail.html", "../images/project-minimal.jpg"],
                ["Larger scopes", "Commercial Fit-Out", "Fit-out for offices, healthcare, hospitality and mixed commercial spaces across Pakistan.", "commercial-fit-out.html", "../images/project-urban.jpg"],
                ["Existing pharmacy", "Renovation", "Upgrade an existing pharmacy — counter replacement, finishes refresh, layout adjustments.", "renovation.html", "../images/project-concrete.jpg"],
                ["See it first", "3D Studio", "Photorealistic renders of your pharmacy before construction — in-house, 2–5 day turnaround.", "../3d-studio.html", "../images/studio-hero.jpg"],
            ],
        },

        "next": {
            "sub": "Three scopes sit next to pharmacy fit-out — different builds, different compliance, same delivery system.",
            "note": "Upgrading an existing pharmacy? <a href=\"renovation.html\">See Renovation →</a> &nbsp;·&nbsp; Clinic or lab? <a href=\"commercial-fit-out.html\">See Commercial Fit-Out →</a>",
            "cols": [
                ["Pharmacy Fit-Out — this scope", "A new dispensary built from shell to trading — counter, controlled storage, climate, security and branding on one programme."],
                ["Pharmacy Renovation", "An upgrade of an existing, occupied pharmacy — counter replacement, finishes refresh, layout adjustments."],
                ["Healthcare / Clinic Fit-Out", "Clinics, labs and diagnostic centres — reception, consultation rooms, patient flow. Different compliance, different workflow."],
            ],
        },

        "statement": {
            "h2": "Bare unit. Trading pharmacy.",
            "line": "One team takes the unit from bare to dispensing — on a fixed quote you approved in 3D.",
            "points": [
                "Free site survey and consultation (30 minutes)",
                "Fixed lump-sum quote within 5 working days of survey",
                "No obligation — cancel before design approval",
            ],
            "form": {
                "submit": "Get a Quote",
                "fields": [
                    {"id": "ph-name", "name": "name", "label": "Full Name *", "type": "text", "ac": "name", "half": True},
                    {"id": "ph-phone", "name": "phone", "label": "Phone Number *", "type": "tel", "ac": "tel", "half": True},
                    {"id": "ph-email", "name": "email", "label": "Email Address *", "type": "email", "ac": "email"},
                    {"id": "ph-type", "name": "type", "label": "Pharmacy Type *", "type": "select", "ph": "Select pharmacy type", "options": ["Independent pharmacy", "Chain rollout", "Hospital / clinic pharmacy", "Franchise", "Other"]},
                    {"id": "ph-area", "name": "area", "label": "Approximate Area *", "type": "text", "ph": "e.g. 800 sq ft", "half": True},
                    {"id": "ph-loc", "name": "location", "label": "Location *", "type": "text", "ph": "City or area", "half": True},
                    {"id": "ph-msg", "name": "message", "label": "Message", "type": "textarea", "ph": "Tell us about your pharmacy…", "req": False},
                ],
            },
        },
    },
}
