import Link from "next/link";
import { site, legalLinks } from "@/lib/site";
import { services } from "@/lib/content/services";
import { waLink } from "@/lib/whatsapp";
import CTA from "./CTA";
import { WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon, ClockIcon, DownloadIcon } from "./Icons";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* Closing conversion statement */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow mb-3">Start your project</p>
            <h2 className="display max-w-xl text-3xl md:text-4xl">
              Tell us about your space.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTA href="/consultation" variant="light">
              Book a consultation
            </CTA>
            <CTA href={waLink()} variant="outline-light" external>
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </CTA>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <p className="text-lg font-bold tracking-tight">
            WOODEX<span className="text-wood">.</span>
            <span className="ml-1 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/60">
              Interior
            </span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {site.foundationLine}
          </p>
          <p className="text-sm font-semibold text-wood">{site.masterLine}</p>
        </div>

        {/* Services */}
        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.slug === "3d-studio" ? "/3d-studio" : `/services/${s.slug}`}
                  className="ulink text-sm text-white/80 hover:text-white"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/projects" className="ulink text-sm text-white/80 hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/sectors" className="ulink text-sm text-white/80 hover:text-white">
                Sectors
              </Link>
            </li>
            <li>
              <Link href="/locations" className="ulink text-sm text-white/80 hover:text-white">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/insights" className="ulink text-sm text-white/80 hover:text-white">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/process" className="ulink text-sm text-white/80 hover:text-white">
                Process
              </Link>
            </li>
            <li>
              <Link href="/about" className="ulink text-sm text-white/80 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="ulink text-sm text-white/80 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <p className="eyebrow mb-4">Contact</p>
          <a
            href={site.phoneHref}
            className="flex items-start gap-2.5 text-sm text-white/80 hover:text-white"
          >
            <PhoneIcon className="mt-0.5 h-4 w-4 text-wood" />
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-2.5 text-sm text-white/80 hover:text-white"
          >
            <MailIcon className="mt-0.5 h-4 w-4 text-wood" />
            {site.email}
          </a>
          <p className="flex items-start gap-2.5 text-sm text-white/80">
            <MapPinIcon className="mt-0.5 h-4 w-4 text-wood" />
            {site.address}
          </p>
          <p className="flex items-start gap-2.5 text-sm text-white/80">
            <ClockIcon className="mt-0.5 h-4 w-4 text-wood" />
            {site.hours}
          </p>
          <p className="pt-1 text-xs leading-relaxed text-white/60">
            Studios: {site.studios.join(" · ")}
          </p>
        </div>
      </div>

      {/* Big brand word */}
      <div className="footer-word" aria-hidden="true">
        INTERIOR
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            <li>
              <a
                href="/WOODEX-WEB.zip"
                download="WOODEX-WEB.zip"
                className="inline-flex items-center gap-1.5 font-semibold text-wood hover:text-white"
              >
                <DownloadIcon className="h-3.5 w-3.5" />
                Download WOODEX-WEB.zip
              </a>
            </li>
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="ulink hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
