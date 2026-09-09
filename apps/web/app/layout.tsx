import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { site } from "@/lib/site";
import { organizationJsonLd } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | Interior Design, Fit-Out & Turnkey Execution`,
    template: `%s | ${site.name}`,
  },
  description:
    "Woodex Interior designs, visualizes and builds residential and commercial interiors — one team from first brief to handover, with 3D approval before construction. Book a consultation.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_PK",
    url: site.domain,
    title: `${site.name} | Interior Design, Fit-Out & Turnkey Execution`,
    description:
      "Design, visualization, BOQ and execution under one accountable team.",
    images: [{ url: "/images/hero-1.jpg", width: 1408, height: 768 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper font-sans text-navy antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-wood px-4 py-2 text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
