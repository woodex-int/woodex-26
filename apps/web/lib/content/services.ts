import type { Service } from "../types";

// Grounded in docs/CONTENT_READY_PAGE_SPEC.md §3.6 and the locked brand facts.
export const services: Service[] = [
  {
    slug: "interior-design",
    name: "Interior Design",
    navLabel: "Interior Design",
    category: "Design",
    shortLine: "Space planning, concept and direction — designed to be built.",
    h1: "Interior Design Services for Functional, Buildable Spaces",
    definition:
      "Woodex's interior design service turns a space's requirements into an approved plan, concept and direction — space planning, mood, materials, lighting and furniture relationships — ready to visualize and, where required, build.",
    whoItIsFor: [
      "Clients with an empty or unfinished space and no design yet",
      "Homeowners planning a full interior",
      "Businesses and developers who need a buildable direction",
    ],
    problems: [
      "A space that does not work for how it is used",
      "Ideas and references that have not been resolved into a plan",
      "Design that looks good on a board but cannot be costed or built",
    ],
    deliverables: [
      "Space planning and zoning",
      "Concept and mood direction",
      "Material and finish direction",
      "Lighting direction",
      "Furniture and joinery relationships",
      "Approved design direction ready for 3D and documentation",
    ],
    inclusions: [
      "Brief and requirement discovery",
      "Space planning and concept",
      "Material and finish direction",
    ],
    exclusions: [
      "Execution and site work (separate engagement)",
      "Working drawings and BOQ (available as a related service)",
    ],
    process: [
      {
        title: "Discover",
        inputs: ["Brief, site, existing drawings"],
        outputs: ["Requirement summary and route"],
        approval: "Kickoff alignment",
      },
      {
        title: "Plan",
        inputs: ["Requirement summary"],
        outputs: ["Zoning and test-fit plan"],
        approval: "Layout direction",
      },
      {
        title: "Design",
        inputs: ["Approved layout"],
        outputs: ["Concept, mood, materials, lighting"],
        approval: "Concept sign-off",
      },
      {
        title: "Visualize",
        inputs: ["Approved concept"],
        outputs: ["3D stills or walkthrough"],
        approval: "Visual sign-off",
      },
      {
        title: "Document",
        inputs: ["Approved visual"],
        outputs: ["Working drawings and BOQ (if in scope)"],
        approval: "Scope and commercial sign-off",
      },
    ],
    costFactors: [
      "Area and number of rooms",
      "Scope (concept only vs full documentation)",
      "Materials and finishes",
      "Custom joinery volume",
    ],
    timelineFactors: [
      "Brief clarity and decision speed",
      "Number of revision rounds",
      "Whether 3D and documentation are included",
    ],
    faqs: [
      {
        q: "Can I hire Woodex for design only?",
        a: "Yes. Woodex can be engaged for design only — space planning, concept and 3D visualization — without execution. Design and build are separate engagements.",
      },
      {
        q: "What do I need to start?",
        a: "A brief: what the space is today, what it needs to become, what matters most, and any drawings or measurements you already have.",
      },
      {
        q: "Do I need to commit to execution before I see the design?",
        a: "No. You approve the design direction before any commitment to construction.",
      },
      {
        q: "What is the difference between design and decoration?",
        a: "Design resolves how the space works — layout, circulation, lighting, materials — before finishes and styling. Decoration is applied to an already-resolved space.",
      },
      {
        q: "Can you work from an existing floor plan?",
        a: "Yes. Woodex can start from your floor plan, references or an existing design.",
      },
    ],
    relatedServices: ["architecture", "drawings-boq"],
    relatedProjects: ["contemporary-retreat", "urban-living-concept"],
    sectors: ["Residential", "Offices", "Retail", "Hospitality"],
    ctaPrimary: "Book design consultation",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in your interior design service. My project is in [city], and the approximate area is [area]. I would like to discuss the next steps.",
    image: "/images/hero-1.jpg",
  },
  {
    slug: "architecture",
    name: "Architecture",
    navLabel: "Architecture",
    category: "Design",
    shortLine: "Site planning through construction documentation.",
    h1: "Architecture from Site Planning to Construction Documentation",
    definition:
      "Woodex's architecture service covers site planning through construction documentation — layouts, elevations, sections and coordination — so a project moves into approvals, BOQ and execution without reworking.",
    whoItIsFor: [
      "Clients planning a new build or extension",
      "Developers needing coordinated documentation",
      "Clients with a site but no resolved drawings",
    ],
    problems: [
      "A concept that has not been resolved into buildable drawings",
      "Disconnected planning, interiors and execution",
      "Rework caused by late coordination",
    ],
    deliverables: [
      "Site planning and layouts",
      "Plans, elevations and sections",
      "Coordination drawings",
      "Construction documentation",
      "Documentation handover for BOQ and execution",
    ],
    inclusions: [
      "Site planning",
      "Schematic and detail design",
      "Construction documentation",
    ],
    exclusions: [
      "Structural engineering (coordinated, not substituted)",
      "Execution (available as fit-out or turnkey)",
    ],
    process: [
      {
        title: "Site review",
        inputs: ["Site, brief, constraints"],
        outputs: ["Feasibility and massing direction"],
        approval: "Site direction",
      },
      {
        title: "Schematic design",
        inputs: ["Approved massing"],
        outputs: ["Plans, elevations, sections"],
        approval: "Schematic sign-off",
      },
      {
        title: "Design development",
        inputs: ["Approved schematic"],
        outputs: ["Coordinated design drawings"],
        approval: "Design development sign-off",
      },
      {
        title: "Documentation",
        inputs: ["Approved development"],
        outputs: ["Construction documentation set"],
        approval: "Documentation handover",
      },
    ],
    costFactors: [
      "Site size and complexity",
      "Documentation depth required",
      "Coordination scope (interiors, MEP)",
    ],
    timelineFactors: [
      "Site information availability",
      "Statutory approvals where applicable",
      "Number of review rounds",
    ],
    faqs: [
      {
        q: "Does Woodex do architecture and interiors together?",
        a: "Yes. Architecture and interior design can run as one coordinated process, so planning, interiors and documentation stay connected.",
      },
      {
        q: "Can Woodex execute a design created by another architect?",
        a: "Yes. Woodex can review approved drawings and take them into execution, subject to scope, documentation and site conditions.",
      },
      {
        q: "What drawings do I receive?",
        a: "The documentation set the project needs — plans, elevations, sections and coordination — agreed at scope.",
      },
      {
        q: "Is 3D included?",
        a: "3D visualization is a separate, optional layer. Woodex recommends it for approval decisions before documentation.",
      },
    ],
    relatedServices: ["interior-design", "drawings-boq"],
    relatedProjects: ["modern-facade-study"],
    sectors: ["Residential", "Offices", "Retail"],
    ctaPrimary: "Discuss your site",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in your architecture service. My project is in [city]. I would like to discuss the next steps.",
    image: "/images/project-facade.jpg",
  },
  {
    slug: "fit-out",
    name: "Fit-Out",
    navLabel: "Fit-Out",
    category: "Build",
    shortLine: "From approved drawings to a completed, usable interior.",
    h1: "Interior Fit-Out Planned for Cost, Quality and Handover",
    definition:
      "Woodex's interior fit-out service converts approved designs and technical drawings into a completed, usable interior. Depending on scope, it may include procurement, civil work, MEP coordination, ceilings, finishes, lighting, joinery, installation, and handover.",
    whoItIsFor: [
      "Clients with approved drawings who need execution",
      "Offices, retail and hospitality fit-outs",
      "Clients moving from shell to finished interior",
    ],
    problems: [
      "A design that exists on paper but not on site",
      "Uncoordinated trades and unclear scope",
      "Cost or timeline surprises during execution",
    ],
    deliverables: [
      "Procurement",
      "Civil and MEP coordination",
      "Ceilings, finishes and lighting",
      "Joinery and installation",
      "Snagging and handover",
    ],
    inclusions: [
      "Execution of approved drawings",
      "Site management and coordination",
      "Finishing and handover",
    ],
    exclusions: [
      "Design changes after documentation (handled as variation)",
      "Scope outside the agreed documentation",
    ],
    process: [
      {
        title: "Scope and BOQ",
        inputs: ["Approved drawings"],
        outputs: ["Quantities and commercial scope"],
        approval: "Commercial sign-off",
      },
      {
        title: "Procurement",
        inputs: ["Approved BOQ"],
        outputs: ["Materials and packages"],
        approval: "Material approvals",
      },
      {
        title: "Site execution",
        inputs: ["Materials and drawings"],
        outputs: ["Civil, MEP, finishes, joinery"],
        approval: "Stage inspections",
      },
      {
        title: "Snag and handover",
        inputs: ["Completed works"],
        outputs: ["Corrected, handed-over space"],
        approval: "Handover",
      },
    ],
    costFactors: [
      "Area and scope",
      "Materials and finishes",
      "Custom joinery",
      "Existing site conditions and MEP",
    ],
    timelineFactors: [
      "Scope size",
      "Material lead times",
      "Approval speed",
    ],
    faqs: [
      {
        q: "What does an interior fit-out include?",
        a: "Depending on scope: procurement, civil work, MEP coordination, ceilings, finishes, lighting, joinery, installation and handover.",
      },
      {
        q: "Can Woodex execute an existing design?",
        a: "Yes. Woodex can work from approved drawings and specifications, subject to scope, documentation and site conditions.",
      },
      {
        q: "What is the difference between fit-out and turnkey execution?",
        a: "Fit-out converts approved drawings into a finished interior. Turnkey adds single-team responsibility across a wider scope, including design where required.",
      },
      {
        q: "When is a BOQ prepared?",
        a: "Before execution, so procurement and site work reference the same buildable scope.",
      },
      {
        q: "How long does a commercial fit-out take?",
        a: "It depends on area, scope, materials and approvals. Woodex documents the scope and gives a timeline based on the agreed BOQ, not a guess.",
      },
    ],
    relatedServices: ["turnkey-execution", "drawings-boq"],
    relatedProjects: ["minimal-space-design"],
    sectors: ["Offices", "Retail", "Hospitality"],
    ctaPrimary: "Request fit-out consultation",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in your fit-out service. My project is in [city], and the approximate area is [area]. I would like to discuss the next steps.",
    image: "/images/project-concrete.jpg",
  },
  {
    slug: "turnkey-execution",
    name: "Turnkey Execution",
    navLabel: "Turnkey Execution",
    category: "Build",
    shortLine: "One accountable team, from approved design to handover.",
    h1: "Turnkey Interior Execution with One Accountable Team",
    definition:
      "Woodex's turnkey execution service carries a project from approved design through procurement, construction, joinery and installation to handover under one accountable team, with a single point of responsibility for scope, cost and quality.",
    whoItIsFor: [
      "Clients who want one responsible party",
      "Complete design-and-build projects",
      "Commercial rollouts with a single point of contact",
    ],
    problems: [
      "Responsibility split across too many parties",
      "Scope drift between design and execution",
      "No single owner for cost, quality and timeline",
    ],
    deliverables: [
      "Single-team project management",
      "Procurement and site execution",
      "Joinery and installation",
      "Quality control and snagging",
      "Handover of a completed space",
    ],
    inclusions: [
      "End-to-end execution",
      "Procurement and site management",
      "Quality and handover",
    ],
    exclusions: [
      "Design where not already approved (available as a separate engagement)",
      "Works outside the agreed scope",
    ],
    process: [
      {
        title: "Scope and BOQ",
        inputs: ["Approved design"],
        outputs: ["Buildable scope and BOQ"],
        approval: "Commercial sign-off",
      },
      {
        title: "Procurement",
        inputs: ["Approved BOQ"],
        outputs: ["Materials and packages"],
        approval: "Material approvals",
      },
      {
        title: "Build",
        inputs: ["Materials and drawings"],
        outputs: ["Civil, MEP, finishes, joinery"],
        approval: "Stage inspections",
      },
      {
        title: "Handover",
        inputs: ["Completed works"],
        outputs: ["Snagged, handed-over space"],
        approval: "Handover",
      },
    ],
    costFactors: [
      "Total scope and area",
      "Materials and finishes",
      "Custom joinery",
      "Site conditions",
    ],
    timelineFactors: [
      "Scope size",
      "Lead times",
      "Decision speed",
    ],
    faqs: [
      {
        q: "What is turnkey execution?",
        a: "One team carries the project from approved design through procurement, construction, joinery and installation to handover, with a single point of responsibility.",
      },
      {
        q: "How is turnkey different from fit-out?",
        a: "Turnkey gives one accountable team across a wider, integrated scope. Fit-out is the execution of approved drawings.",
      },
      {
        q: "Do I need my own project manager?",
        a: "No. Woodex provides project management within the turnkey scope.",
      },
      {
        q: "Can turnkey include design?",
        a: "Yes. Where design is needed, it runs as a connected engagement before execution.",
      },
    ],
    relatedServices: ["fit-out", "custom-furniture-joinery"],
    relatedProjects: ["concrete-harmony"],
    sectors: ["Offices", "Retail", "Hospitality"],
    ctaPrimary: "Start a turnkey project",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in your turnkey execution service. My project is in [city], and the approximate area is [area]. I would like to discuss the next steps.",
    image: "/images/split-night.jpg",
  },
  {
    slug: "renovation",
    name: "Renovation",
    navLabel: "Renovation",
    category: "Build",
    shortLine: "Re-planning and rebuilding around the existing space.",
    h1: "Interior Renovation Planned Around the Existing Space",
    definition:
      "Woodex's renovation service re-plans and rebuilds an existing interior around its current structure and MEP — assessment, redesign, documentation and execution — so the finished space works for how it is used now.",
    whoItIsFor: [
      "Occupied spaces that no longer work",
      "Pre-purchase or pre-lease assessments",
      "Clients modernizing without a full rebuild",
    ],
    problems: [
      "A layout that fights the existing structure",
      "Unknown condition of services and finishes",
      "Cost surprises from unassessed existing conditions",
    ],
    deliverables: [
      "Existing-condition assessment",
      "Re-planning around structure and MEP",
      "Renovation documentation",
      "Execution and finishing",
    ],
    inclusions: [
      "Assessment and re-planning",
      "Renovation scope and documentation",
      "Execution where in scope",
    ],
    exclusions: [
      "Structural changes outside the agreed scope",
      "A full rebuild where renovation is not viable",
    ],
    process: [
      {
        title: "Assess",
        inputs: ["Existing space and services"],
        outputs: ["Condition and constraints report"],
        approval: "Assessment review",
      },
      {
        title: "Re-plan",
        inputs: ["Assessment"],
        outputs: ["Re-planned layout and concept"],
        approval: "Re-plan sign-off",
      },
      {
        title: "Document",
        inputs: ["Approved re-plan"],
        outputs: ["Renovation drawings and BOQ"],
        approval: "Scope sign-off",
      },
      {
        title: "Execute",
        inputs: ["Approved scope"],
        outputs: ["Renovated, finished space"],
        approval: "Handover",
      },
    ],
    costFactors: [
      "Condition of existing structure and MEP",
      "Scope of change",
      "Materials and finishes",
    ],
    timelineFactors: [
      "Extent of works",
      "Occupied vs vacant site",
      "Approvals",
    ],
    faqs: [
      {
        q: "How is renovation cost determined?",
        a: "From the existing-condition assessment and the agreed scope — structure, MEP, finishes and joinery — documented before execution.",
      },
      {
        q: "Renovation vs complete rebuild — how do I decide?",
        a: "The assessment tells you whether the existing structure and services can be reused. Woodex documents both options before you commit.",
      },
      {
        q: "What should I check before renovating?",
        a: "Structure, MEP, damp, and the condition of finishes — all covered in Woodex's assessment.",
      },
      {
        q: "Can Woodex renovate an occupied space?",
        a: "Where phasing allows. Woodex plans works around occupancy where required.",
      },
    ],
    relatedServices: ["fit-out", "interior-design"],
    relatedProjects: ["concrete-harmony"],
    sectors: ["Residential", "Hospitality"],
    ctaPrimary: "Discuss your renovation",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in your renovation service. My project is in [city]. I would like to discuss the next steps.",
    image: "/images/hero-3.jpg",
  },
  {
    slug: "custom-furniture-joinery",
    name: "Custom Furniture and Joinery",
    navLabel: "Custom Furniture & Joinery",
    category: "Build",
    shortLine: "Designed, documented and manufactured to the project.",
    h1: "Custom Furniture and Joinery Designed for the Project",
    definition:
      "Woodex's custom furniture and joinery service designs, documents and manufactures built-in and freestanding pieces — kitchens, wardrobes, counters, panelling and bespoke furniture — made to the project's dimensions, materials and finishes.",
    whoItIsFor: [
      "Clients who want pieces made to the space",
      "Kitchens, wardrobes and built-in joinery",
      "Retail and hospitality fixtures",
    ],
    problems: [
      "Ready-made pieces that do not fit the space",
      "Joinery that is not coordinated with the interior",
      "No single owner for design and manufacture",
    ],
    deliverables: [
      "Joinery design and drawings",
      "Material and finish selection",
      "Manufacture (Woodex Furniture mill)",
      "Installation and finishing",
    ],
    inclusions: [
      "Design and documentation",
      "Manufacture",
      "Installation",
    ],
    exclusions: [
      "Structural works outside the joinery scope",
      "Ready-made furniture retail",
    ],
    process: [
      {
        title: "Brief",
        inputs: ["Dimensions, use, references"],
        outputs: ["Joinery brief"],
        approval: "Brief sign-off",
      },
      {
        title: "Design",
        inputs: ["Approved brief"],
        outputs: ["Joinery drawings and details"],
        approval: "Design sign-off",
      },
      {
        title: "Manufacture",
        inputs: ["Approved drawings"],
        outputs: ["Fabricated pieces"],
        approval: "Workshop check",
      },
      {
        title: "Install",
        inputs: ["Fabricated pieces"],
        outputs: ["Installed, finished joinery"],
        approval: "Handover",
      },
    ],
    costFactors: [
      "Piece complexity",
      "Materials and finishes",
      "Quantity and repetition",
    ],
    timelineFactors: [
      "Design approval speed",
      "Material lead times",
      "Manufacturing queue",
    ],
    faqs: [
      {
        q: "Custom joinery vs ready-made furniture?",
        a: "Custom joinery is made to the project's dimensions, materials and finishes. Ready-made is produced to standard sizes and chosen from a catalogue.",
      },
      {
        q: "What affects custom furniture cost and lead time?",
        a: "Complexity, materials, finishes and quantity — documented before manufacture.",
      },
      {
        q: "Is joinery coordinated with the interior?",
        a: "Yes. Woodex joinery is designed against the project drawings, so pieces fit the space and services.",
      },
    ],
    relatedServices: ["interior-design", "turnkey-execution"],
    relatedProjects: ["contemporary-retreat"],
    sectors: ["Residential", "Retail", "Hospitality"],
    ctaPrimary: "Send requirements",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in your custom furniture and joinery service. My project is in [city]. I would like to discuss the next steps.",
    image: "/images/craft-joinery.jpg",
  },
  {
    slug: "drawings-boq",
    name: "Drawings and BOQ",
    navLabel: "Drawings & BOQ",
    category: "Design",
    shortLine: "Technical drawings and BOQ for clearer execution.",
    h1: "Technical Drawings and BOQ for Clearer Project Execution",
    definition:
      "Woodex's drawings and BOQ service produces the technical documentation a project needs before execution — working drawings, specifications and a bill of quantities — so quotations, procurement and site work are based on the same buildable scope.",
    whoItIsFor: [
      "Clients comparing contractor quotations",
      "Clients with a design but no documentation",
      "Projects that need a buildable scope before execution",
    ],
    problems: [
      "Quotations that cannot be compared",
      "A design that is not documented well enough to build",
      "Scope ambiguity during execution",
    ],
    deliverables: [
      "Working drawings",
      "Specifications",
      "Bill of quantities",
      "Buildable scope for procurement and site",
    ],
    inclusions: [
      "Working drawings and specifications",
      "BOQ",
    ],
    exclusions: [
      "Execution (available as fit-out or turnkey)",
      "Design changes (handled separately)",
    ],
    process: [
      {
        title: "Review",
        inputs: ["Approved design"],
        outputs: ["Documentation gap list"],
        approval: "Scope review",
      },
      {
        title: "Drawings",
        inputs: ["Approved design"],
        outputs: ["Working drawings and details"],
        approval: "Drawing review",
      },
      {
        title: "BOQ",
        inputs: ["Working drawings"],
        outputs: ["Quantities and specifications"],
        approval: "BOQ handover",
      },
    ],
    costFactors: [
      "Drawing detail required",
      "Project complexity",
      "Scope of BOQ",
    ],
    timelineFactors: [
      "Design completeness",
      "Review rounds",
    ],
    faqs: [
      {
        q: "What is a BOQ?",
        a: "A bill of quantities lists the work, materials and quantities for a project, so quotations reference the same scope.",
      },
      {
        q: "How does a BOQ help compare quotations?",
        a: "Each contractor prices the same documented scope, so you can compare like for like.",
      },
      {
        q: "When is a BOQ prepared?",
        a: "Before execution, after the design and drawings are approved.",
      },
      {
        q: "What should an interior drawing set include?",
        a: "Plans, reflected ceiling plans, elevations, sections and details — the set agreed for the project's scope.",
      },
    ],
    relatedServices: ["fit-out", "turnkey-execution"],
    relatedProjects: ["spatial-innovation"],
    sectors: ["Residential", "Offices", "Retail", "Hospitality"],
    ctaPrimary: "Request documentation",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in your drawings and BOQ service. My project is in [city]. I would like to discuss the next steps.",
    image: "/images/project-spatial.jpg",
  },
  {
    slug: "3d-studio",
    name: "3D Studio",
    navLabel: "3D Studio",
    category: "Visualize",
    shortLine: "See it, understand it, build it — before construction.",
    h1: "Woodex 3D Studio",
    definition:
      "Woodex 3D Studio is an in-house visualization team working alongside the design team, turning plans, references and ideas into visual experiences that help clients understand the space before it is built.",
    whoItIsFor: [
      "Clients who want to see the space before committing",
      "Designers who need presentation visuals",
      "Clients with a plan, references or an existing design",
    ],
    problems: [
      "Approving a space you cannot see",
      "Material and lighting decisions made on guesswork",
      "Design changes discovered too late on site",
    ],
    deliverables: [
      "Interior and exterior stills",
      "Walkthrough animation",
      "360° views",
      "Material and lighting visualization",
    ],
    inclusions: ["Stills and walkthroughs as agreed"],
    exclusions: ["Planning and technical design (separate service)"],
    process: [
      {
        title: "Brief",
        inputs: ["Floor plan, references, design"],
        outputs: ["Visual brief and camera set"],
        approval: "Brief sign-off",
      },
      {
        title: "Model",
        inputs: ["Approved brief"],
        outputs: ["3D model"],
        approval: "Model review",
      },
      {
        title: "Material and light",
        inputs: ["Approved model"],
        outputs: ["Material and lighting pass"],
        approval: "Look review",
      },
      {
        title: "Render",
        inputs: ["Approved look"],
        outputs: ["Final stills / walkthrough"],
        approval: "Delivery",
      },
    ],
    costFactors: ["Views and duration", "Detail level", "Revision rounds"],
    timelineFactors: ["Brief clarity", "Asset availability", "Render load"],
    faqs: [
      {
        q: "What information do I need to start a 3D render?",
        a: "A floor plan or dimensions, plus references or a design direction where available.",
      },
      {
        q: "Is 3D visualization the same as design?",
        a: "No. 3D shows an approved or proposed direction so decisions can be made before build; it does not replace space planning or technical design.",
      },
      {
        q: "Can a render be used to prepare a BOQ?",
        a: "A render helps agree the visual direction; the BOQ is prepared from drawings and specifications.",
      },
    ],
    relatedServices: ["interior-design", "drawings-boq"],
    relatedProjects: ["spatial-innovation"],
    sectors: ["All sectors"],
    ctaPrimary: "Start a 3D brief",
    whatsappMessage:
      "Hello Woodex Interior, I'm interested in a 3D visualization. My project is in [city]. I would like to discuss the next steps.",
    image: "/images/studio-hero.jpg",
  },
];

export const standardServices = services.filter((s) => s.slug !== "3d-studio");

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories = [
  { title: "Design", slugs: ["interior-design", "architecture", "drawings-boq"] },
  {
    title: "Build",
    slugs: ["fit-out", "turnkey-execution", "renovation", "custom-furniture-joinery"],
  },
  { title: "Visualize", slugs: ["3d-studio"] },
] as const;
