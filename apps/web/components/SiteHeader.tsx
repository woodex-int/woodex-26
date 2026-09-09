"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, navItems } from "@/lib/site";
import { services, serviceCategories, getService } from "@/lib/content/services";
import { getProject } from "@/lib/content/projects";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppIcon, MenuIcon, CloseIcon, PlusIcon, ArrowRightIcon } from "./Icons";

const featured = getProject("wellstar-pharmacy");

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-baseline gap-1.5 text-lg font-bold tracking-tight text-white"
      aria-label={`${site.name} — home`}
    >
      WOODEX
      <span className="text-wood">.</span>
      <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/60">
        Interior
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const overlay = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = !overlay || scrolled || megaOpen || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid
            ? "bg-navy text-white shadow-lg shadow-navy/20"
            : "bg-gradient-to-b from-navy/70 to-transparent text-white",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              if (item.mega) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      onClick={() => setMegaOpen((v) => !v)}
                      className={cn(
                        "flex items-center gap-1 py-2 text-sm font-semibold text-white/90 hover:text-white",
                        pathname.startsWith("/services") && "text-white",
                      )}
                    >
                      {item.label}
                      <span className="text-[10px]">▾</span>
                    </button>

                    {megaOpen && (
                      <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3">
                        <div className="rounded-2xl border border-white/10 bg-navy-700 p-6 shadow-2xl shadow-navy/40">
                          <div className="grid grid-cols-[1fr_240px] gap-6">
                            <div className="grid grid-cols-3 gap-5">
                              {serviceCategories.map((cat) => (
                                <div key={cat.title}>
                                  <p className="eyebrow mb-3 !text-[9px]">{cat.title}</p>
                                  <ul className="space-y-2">
                                    {cat.slugs.map((slug) => {
                                      const s = getService(slug);
                                      if (!s) return null;
                                      const href =
                                        slug === "3d-studio"
                                          ? "/3d-studio"
                                          : `/services/${slug}`;
                                      return (
                                        <li key={slug}>
                                          <Link
                                            href={href}
                                            onClick={() => setMegaOpen(false)}
                                            className="ulink text-sm text-white/80 hover:text-white"
                                          >
                                            {s.navLabel}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {featured && (
                              <Link
                                href={`/projects/${featured.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="group block overflow-hidden rounded-xl border border-white/10"
                              >
                                <div className="media-zoom relative aspect-[4/3] overflow-hidden">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={featured.image}
                                    alt={featured.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="p-3">
                                  <p className="eyebrow mb-1 !text-[9px]">Featured work</p>
                                  <p className="text-sm font-semibold leading-snug text-white">
                                    {featured.name}
                                  </p>
                                </div>
                              </Link>
                            )}
                          </div>

                          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                            <p className="text-xs text-white/60">
                              Not sure which service fits?
                            </p>
                            <Link
                              href="/consultation"
                              onClick={() => setMegaOpen(false)}
                              className="btn btn-light !px-4 !py-2 !text-xs"
                            >
                              Book a consultation
                              <ArrowRightIcon className="arrow h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "ulink py-2 text-sm font-semibold text-white/90 hover:text-white",
                    pathname.startsWith(item.href) && item.href !== "/" && "text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/consultation"
              className="btn btn-light hidden !px-5 !py-2.5 !text-sm sm:inline-flex"
            >
              Start your project
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-navy pt-20 transition-opacity duration-300 lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto py-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              if (item.mega) {
                return (
                  <li key={item.href}>
                    <MobileAccordion label="Services">
                      <ul className="space-y-1 pb-3">
                        {services.map((s) => {
                          const href =
                            s.slug === "3d-studio" ? "/3d-studio" : `/services/${s.slug}`;
                          return (
                            <li key={s.slug}>
                              <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="block px-3 py-2 text-sm text-white/80"
                              >
                                {s.navLabel}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </MobileAccordion>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-3 text-lg font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-6">
          <div className="container-x flex flex-col gap-3">
            <Link
              href="/consultation"
              onClick={() => setMenuOpen(false)}
              className="btn btn-light w-full"
            >
              Start your project
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Woodex
            </a>
            <p className="pt-2 text-center text-xs text-white/60">
              {site.phoneDisplay} · {site.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-3 text-lg font-semibold text-white"
      >
        {label}
        <PlusIcon className={cn("h-5 w-5 text-wood transition-transform", open && "rotate-45")} />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
