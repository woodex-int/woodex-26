import CTA from "./CTA";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

type Action = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "light" | "outline-light" | "wa";
};

export default function CTASection({
  eyebrow = "Start your project",
  title,
  subtitle = "Start on WhatsApp, book a consultation, or send a project brief — one team takes it from there.",
  image = "/images/split-night.jpg",
  variant = "split",
  ghost,
  note,
  primary,
  secondary,
  tertiary,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  variant?: "split" | "statement" | "compact";
  ghost?: string;
  note?: string;
  primary?: Action;
  secondary?: Action;
  tertiary?: Action;
}) {
  const defaults: { primary: Action; secondary: Action; tertiary: Action } = {
    primary: { label: "Book a consultation", href: "/consultation" },
    secondary: {
      label: "Start on WhatsApp",
      href: waLink(),
      external: true,
      variant: "wa",
    },
    tertiary: { label: "Send a project brief", href: "/consultation" },
  };

  const actions = {
    primary: { ...defaults.primary, ...primary },
    secondary: { ...defaults.secondary, ...secondary },
    tertiary: { ...defaults.tertiary, ...tertiary },
  };

  if (variant === "statement") {
    return (
      <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <span className="select-none text-[22vw] font-bold leading-none tracking-tight text-white/[0.04] md:text-[16rem]">
            {ghost ?? "Start"}
          </span>
        </div>
        <div className="container-x relative flex flex-col items-center text-center">
          <p className="eyebrow !text-wood">{eyebrow}</p>
          <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">{title}</h2>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{subtitle}</p>
          )}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CTA href={actions.primary.href} variant="light" external={actions.primary.external}>
              {actions.primary.label}
            </CTA>
            <CTA
              href={actions.secondary.href}
              variant={actions.secondary.variant ?? "outline-light"}
              external={actions.secondary.external}
            >
              {actions.secondary.variant === "wa" && <WhatsAppIcon className="h-4 w-4" />}
              {actions.secondary.label}
            </CTA>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className="border-t-2 border-wood bg-navy text-white">
        <div className="container-x flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <p className="eyebrow !text-wood">{eyebrow}</p>
            <h2 className="display mt-4 text-3xl md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-white/80">{subtitle}</p>}
            {note && <p className="mt-4 text-sm text-white/55">{note}</p>}
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <CTA href={actions.primary.href} variant="light" external={actions.primary.external}>
              {actions.primary.label}
            </CTA>
            <CTA
              href={actions.secondary.href}
              variant={actions.secondary.variant ?? "outline-light"}
              external={actions.secondary.external}
            >
              {actions.secondary.variant === "wa" && <WhatsAppIcon className="h-4 w-4" />}
              {actions.secondary.label}
            </CTA>
          </div>
        </div>
      </section>
    );
  }

  // split (default)
  const steps = ["Brief the space", "Approve the route", "Build it"];
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50" />
      <div className="container-x relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow !text-wood">{eyebrow}</p>
          <h2 className="display mt-5 max-w-2xl text-4xl md:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{subtitle}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href={actions.primary.href} variant="light" external={actions.primary.external}>
              {actions.primary.label}
            </CTA>
            <CTA
              href={actions.secondary.href}
              variant={actions.secondary.variant ?? "outline-light"}
              external={actions.secondary.external}
            >
              {actions.secondary.variant === "wa" && <WhatsAppIcon className="h-4 w-4" />}
              {actions.secondary.label}
            </CTA>
            <CTA
              href={actions.tertiary.href}
              variant={actions.tertiary.variant ?? "outline-light"}
              external={actions.tertiary.external}
            >
              {actions.tertiary.label}
            </CTA>
          </div>
          {note && <p className="mt-6 max-w-md text-sm text-white/55">{note}</p>}
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
          <p className="eyebrow !text-white/60">Next steps</p>
          <ol className="mt-5 space-y-5">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-wood/60 text-sm font-bold text-wood">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-white/90">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
