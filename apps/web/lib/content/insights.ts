import type { Insight } from "../types";

// Launch articles. Answer-first, question-led. No invented metrics or clients.
export const insights: Insight[] = [
  {
    slug: "what-is-3d-visualization",
    title: "What Is 3D Visualization?",
    category: "3D Visualization",
    excerpt:
      "3D visualization turns a plan into a space you can see, review and decide on before construction. Here is what it is — and what it is not.",
    takeaways: [
      "3D shows an approved or proposed direction so decisions happen before build",
      "It is not a substitute for space planning or technical design",
      "A render supports approvals; the BOQ is prepared from drawings",
    ],
    sections: [
      {
        heading: "What 3D visualization is",
        body: [
          "3D visualization is the process of modeling a space and producing images or animation that show its materials, lighting, furniture and proportions before anything is built. At Woodex, the 3D Studio works alongside the design team, so the visuals carry design intent — how the space will be used, how materials meet and how light works.",
        ],
      },
      {
        heading: "What it is not",
        body: [
          "A render is not a plan and not a construction drawing. It shows a direction; it does not replace space planning, technical design or documentation. Woodex positions 3D as the layer where you see, approve and decide — not as a substitute for planning.",
        ],
      },
      {
        heading: "Where it helps most",
        body: [
          "3D is most valuable at approval points: agreeing a concept, choosing materials and lighting, and confirming proportions. It reduces decisions being made too late on site, where changes cost the most.",
        ],
      },
      {
        heading: "3D still vs walkthrough",
        body: [
          "Stills are for reviewing and approving spaces and materials. A walkthrough adds movement and sequence, which matters for circulation and flow. The brief decides which is worth the extra production time.",
        ],
      },
    ],
    faqs: [
      {
        q: "What information do I need to start a 3D render?",
        a: "A floor plan or dimensions, plus references or a design direction where available. Woodex confirms the exact input list at brief stage.",
      },
      {
        q: "Can a render be used to prepare a BOQ?",
        a: "A render helps agree the visual direction; the BOQ is prepared from drawings and specifications.",
      },
    ],
    relatedService: "3d-studio",
    relatedProject: "spatial-innovation",
    image: "/images/studio-hero.jpg",
    date: "2026-09-08",
  },
  {
    slug: "interior-design-cost-pakistan",
    title: "Interior Design Cost in Pakistan",
    category: "Cost",
    excerpt:
      "Interior cost is driven by area, scope, materials and execution — not by a single number. Here is how Woodex approaches cost clarity.",
    takeaways: [
      "Cost is a function of scope, not a fixed rate",
      "Materials, finishes and custom joinery move cost more than anything",
      "A BOQ lets quotations be compared on the same scope",
    ],
    sections: [
      {
        heading: "Why there is no single number",
        body: [
          "Two projects of the same area can cost very differently. What matters is scope: the level of finish, the materials, the amount of custom joinery and the execution required. Woodex does not publish unsupported starting prices, because a number without a scope misleads more than it helps.",
        ],
      },
      {
        heading: "What actually moves cost",
        body: [
          "Materials and finishes are the largest variable. Custom joinery — kitchens, wardrobes, counters — is the next. Existing conditions and MEP affect renovation cost. Area matters, but only after scope is defined.",
        ],
      },
      {
        heading: "How to get a real cost",
        body: [
          "The reliable path is design first, then a bill of quantities. Once the design is approved and the scope is documented, every contractor prices the same BOQ, and you can compare quotations like for like.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Woodex provide a BOQ before execution?",
        a: "Yes. Where documentation is in scope, Woodex prepares working drawings and a bill of quantities before execution.",
      },
      {
        q: "Can I get a cost before design?",
        a: "A broad band can be discussed early, but a reliable number comes from an approved design and a documented scope.",
      },
    ],
    relatedService: "drawings-boq",
    relatedProject: "contemporary-retreat",
    image: "/images/project-concrete.jpg",
    date: "2026-09-08",
  },
  {
    slug: "design-vs-turnkey",
    title: "Fit-Out vs Turnkey Execution: What Should a Client Choose?",
    category: "Fit-Out and Turnkey",
    excerpt:
      "Fit-out executes approved drawings. Turnkey adds one accountable team across a wider scope. The right choice depends on what you already have.",
    takeaways: [
      "Fit-out converts approved drawings into a finished interior",
      "Turnkey gives one accountable team across an integrated scope",
      "If you already have a design, fit-out may be the route",
    ],
    sections: [
      {
        heading: "What a fit-out is",
        body: [
          "A fit-out converts approved designs and technical drawings into a completed interior — procurement, civil work, MEP coordination, ceilings, finishes, lighting, joinery, installation and handover.",
        ],
      },
      {
        heading: "What turnkey adds",
        body: [
          "Turnkey gives you one team with a single point of responsibility across a wider, integrated scope — including design where required. You do not coordinate multiple parties.",
        ],
      },
      {
        heading: "How to choose",
        body: [
          "If you already have approved drawings, a fit-out may be the route. If you want one accountable team from design (or existing drawings) through to handover, turnkey is the simpler contract.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Woodex execute drawings created by another architect?",
        a: "Yes. Woodex can review approved drawings and take them into execution, subject to scope, documentation and site conditions.",
      },
      {
        q: "What is the difference between fit-out and turnkey execution?",
        a: "Fit-out executes approved drawings. Turnkey carries a project through an integrated scope under one accountable team.",
      },
    ],
    relatedService: "turnkey-execution",
    relatedProject: "concrete-harmony",
    image: "/images/split-night.jpg",
    date: "2026-09-08",
  },
  {
    slug: "home-renovation-checklist",
    title: "Home Renovation Checklist",
    category: "Renovation",
    excerpt:
      "A renovation fails on the unknown — existing structure, MEP and scope. Here is what to check before you start.",
    takeaways: [
      "Assess structure and MEP before re-planning",
      "Document the scope before you commit to cost",
      "Decide renovation vs rebuild from the assessment, not a guess",
    ],
    sections: [
      {
        heading: "Check the structure first",
        body: [
          "Before any redesign, confirm what the structure allows. Load-bearing elements, ceiling heights and openings define what can change and what must be worked around.",
        ],
      },
      {
        heading: "Understand the MEP",
        body: [
          "Electrical, plumbing and HVAC positions drive much of a renovation's cost and schedule. Re-planning around existing services is almost always cheaper than moving them.",
        ],
      },
      {
        heading: "Document before you commit",
        body: [
          "Get the renovation scope in writing — drawings and a BOQ — before execution. An assessment plus documentation is how cost control actually happens.",
        ],
      },
    ],
    faqs: [
      {
        q: "Renovation vs complete rebuild — how do I decide?",
        a: "The assessment tells you whether the existing structure and services can be reused. Woodex documents both options before you commit.",
      },
      {
        q: "How is renovation cost determined?",
        a: "From the existing-condition assessment and the agreed scope, documented before execution.",
      },
    ],
    relatedService: "renovation",
    relatedProject: "concrete-harmony",
    image: "/images/hero-3.jpg",
    date: "2026-09-08",
  },
  {
    slug: "office-interior-guide",
    title: "Office Interior Design Guide",
    category: "Fit-Out and Turnkey",
    excerpt:
      "An office interior has to serve the work, not just the look. Here is the planning sequence Woodex follows.",
    takeaways: [
      "Plan the floor for how the office actually works",
      "Resolve acoustics, lighting and storage early",
      "Document the scope so the fit-out is comparable",
    ],
    sections: [
      {
        heading: "Plan the work, not the furniture",
        body: [
          "Start from how the office functions — teams, meetings, focus work, visitors — and plan the floor around that. Furniture and finishes follow the plan, not the other way around.",
        ],
      },
      {
        heading: "Resolve the systems early",
        body: [
          "Lighting, acoustics and storage affect daily work more than any finish. Resolving them in design prevents expensive corrections after the fit-out.",
        ],
      },
      {
        heading: "Take it to documentation",
        body: [
          "An office fit-out should move from approved drawings into a BOQ, so the execution scope is clear and quotations are comparable.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a commercial fit-out take?",
        a: "It depends on area, scope, materials and approvals — documented against the agreed BOQ rather than guessed.",
      },
      {
        q: "Can Woodex fit out an office from another designer's drawings?",
        a: "Yes, subject to technical review of the drawings and site conditions.",
      },
    ],
    relatedService: "fit-out",
    relatedProject: "minimal-space-design",
    image: "/images/hero-2.jpg",
    date: "2026-09-08",
  },
  {
    slug: "restaurant-planning",
    title: "Restaurant Interior Planning",
    category: "Hospitality",
    excerpt:
      "A restaurant interior is a system — kitchen, service and seating. The plan has to hold all three.",
    takeaways: [
      "Service flow and kitchen position drive the plan",
      "Lighting defines the night room",
      "Materials must survive a working kitchen and dining floor",
    ],
    sections: [
      {
        heading: "The flow comes first",
        body: [
          "Kitchen, service and seating have to work as one system. The plan is resolved around how food moves, how staff move and how guests sit — before mood and materials.",
        ],
      },
      {
        heading: "Lighting makes the room",
        body: [
          "A restaurant reads differently at night than in the afternoon. Lighting is designed as part of the concept, not added after.",
        ],
      },
      {
        heading: "Materials that work",
        body: [
          "Dining floors and service areas are unforgiving. Material decisions balance appearance with durability and maintenance.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you plan the kitchen too?",
        a: "Woodex plans the dining and service experience and coordinates with kitchen equipment requirements as part of the scope.",
      },
      {
        q: "Can you do a café or a full restaurant?",
        a: "Both, as part of the same planning approach — the counter for a café, the full service system for a restaurant.",
      },
    ],
    relatedService: "interior-design",
    relatedProject: "minimal-space-design",
    image: "/images/split-night.jpg",
    date: "2026-09-08",
  },
  {
    slug: "retail-shop-interior",
    title: "Retail Shop Interiors",
    category: "Retail",
    excerpt:
      "A shop interior is a customer path. Plan the walk, then the display, then the finishes.",
    takeaways: [
      "The customer path is the plan",
      "Display and lighting serve the product, not the other way around",
      "Document the scope before the fit-out",
    ],
    sections: [
      {
        heading: "The walk is the design",
        body: [
          "In retail, circulation is the layout. The path a customer walks determines what they see first, where they pause and where they decide. Woodex plans that walk before display or finishes.",
        ],
      },
      {
        heading: "Display serves the product",
        body: [
          "Display, lighting and materials are chosen to present the product, not to compete with it. The store's look follows the product's needs.",
        ],
      },
      {
        heading: "From concept to fit-out",
        body: [
          "Once the walk and display are approved, the scope is documented so the fit-out can be executed cleanly and comparably.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with brand guidelines?",
        a: "Yes. Woodex takes brand guidelines into the space — entrance, flow, display, signage and service areas.",
      },
      {
        q: "Can you handle a flagship or a small shop?",
        a: "Both. The planning approach is the same; the scope scales with the space.",
      },
    ],
    relatedService: "fit-out",
    relatedProject: "minimal-space-design",
    image: "/images/project-minimal.jpg",
    date: "2026-09-08",
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export const insightCategories = Array.from(
  new Set(insights.map((i) => i.category)),
);
