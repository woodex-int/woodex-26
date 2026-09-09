import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./Icons";

type Item = {
  title: string;
  copy: string;
  icon: React.ReactNode;
};

// Line icons (stroke 1.5) — one per service.
const icon = (paths: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths}
  </svg>
);

const items: Item[] = [
  {
    title: "Residential",
    copy: "Living, kitchen, wardrobe. Output: plan, stills, BOQ if you want.",
    icon: icon(
      <>
        <path d="M3 11.2 12 3.8l9 7.4" />
        <path d="M5.5 9.8V20h13V9.8" />
        <path d="M10 20v-5h4v5" />
      </>,
    ),
  },
  {
    title: "Office",
    copy: "Arrival, focus, the demo room. The mural comes last.",
    icon: icon(
      <>
        <rect x="6" y="4" width="12" height="17" />
        <path d="M3 21h18" />
        <path d="M10 8h4M10 12h4M10 16h4" />
      </>,
    ),
  },
  {
    title: "Restaurant",
    copy: "Tables, pass, light. Atmosphere you can sit inside.",
    icon: icon(
      <>
        <path d="M6 4v16" />
        <path d="M4 4v5a2 2 0 0 0 4 0V4" />
        <path d="M18 4v16" />
        <path d="M18 4c-1.2 0-2 1.5-2 3.5S16.8 11 18 11" />
      </>,
    ),
  },
  {
    title: "Café",
    copy: "The counter and one linger seat. Two economies, one room.",
    icon: icon(
      <>
        <path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
        <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
        <path d="M8.5 5.5c0-.8.7-1.3 1.2-1.3M11.8 5.5c0-.8.7-1.3 1.2-1.3" />
      </>,
    ),
  },
  {
    title: "Retail",
    copy: "Enter, pause, pay. A shop that can sell.",
    icon: icon(
      <>
        <path d="M4 10h16v11H4z" />
        <path d="M3 10l1.5-5h15L21 10" />
        <path d="M10 15h4M12 15v6" />
      </>,
    ),
  },
  {
    title: "Craft",
    copy: "Kitchens, wardrobes, counters. Drawn, then made.",
    icon: icon(
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M4 8h16" />
        <path d="M12 8v13" />
        <path d="M8.5 5.5h1M8.5 12.5h1" />
      </>,
    ),
  },
];

const stripImages = [
  { src: "/images/hero-1.jpg", alt: "Residential living" },
  { src: "/images/hero-3.jpg", alt: "Office lobby" },
  { src: "/images/hero-2.jpg", alt: "Restaurant night" },
  { src: "/images/studio-kitchen.jpg", alt: "Café counter" },
];

export default function SixServices() {
  return (
    <section className="st-spaces" id="six-services">
      <div className="container-x">
        {/* Header — H2 + copy + Learn more */}
        <div className="st-head">
          <Reveal className="st-head-copy">
            <p className="eyebrow">Services</p>
            <h2>Six services. One standard.</h2>
            <p>
              Rooms, named outputs, a unique path — the same discipline as 3D Studio, not
              six cloned cards.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/services" className="btn btn-outline-navy">
              Learn more
              <ArrowRightIcon className="arrow h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Room image strip */}
        <div className="st-img-strip">
          {stripImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 70}>
              <div className="st-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" width={1408} height={768} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Six services — icon + title + description */}
        <div className="st-grid">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <div className="st-item">
                <div className="st-item-ico">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
