import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Woodex Interior — WhatsApp, phone or email, the Model Town desk in Lahore, and a message form. A studio lead replies within one working day.",
  alternates: { canonical: "/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact — ${site.name}`,
  url: `${site.domain}/contact`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — full-bleed */}
      <section className="c3-hero" aria-label="Contact">
        <div className="c3-hero-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/project-facade.jpg" alt="" width={1408} height={768} />
          <div className="c3-hero-shade" />
          <div className="c3-hero-lines">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <h1>Tell us what you have</h1>
      </section>

      {/* Body — desk info + message card */}
      <section className="c3-body">
        <div className="container-x c3-wrap">
          <Reveal className="c3-left">
            <h2>The desk</h2>
            <p>
              Empty hall, floor plan, brand, or drawings. WhatsApp, call, or the form —
              we answer with the next gate, not a brochure.
            </p>
            <div className="c3-list">
              <div className="c3-item">
                <div className="c3-ico" aria-hidden="true">
                  <MapPinIcon />
                </div>
                <div>
                  <h3>Main office</h3>
                  <p>
                    LG 90 Link Road, Model Town
                    <br />
                    Lahore, Pakistan
                    <br />
                    Office 10:00 – 8:30
                  </p>
                </div>
              </div>
              <div className="c3-item">
                <div className="c3-ico" aria-hidden="true">
                  <PhoneIcon />
                </div>
                <div>
                  <h3>Phone no.</h3>
                  <div className="c3-phones">
                    <a
                      href="https://wa.me/923224000768?text=Hello%20Woodex%20%E2%80%94%20I%20have%20a%20space%20in%20mind."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.whatsappDisplay}
                    </a>
                    <span>/</span>
                    <a href={site.phoneHref}>{site.phoneDisplay}</a>
                  </div>
                </div>
              </div>
              <div className="c3-item">
                <div className="c3-ico" aria-hidden="true">
                  <MailIcon />
                </div>
                <div>
                  <h3>Email id</h3>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="c3-card" delay={120}>
            <div className="c3-card-head">
              <h2>Send a message</h2>
              <p>
                Name, email, phone, and what the space is today. A studio lead replies
                within one working day.
              </p>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Full-width map */}
      <section className="c3-map" aria-label="Map">
        <div className="wx-map-frame">
          <iframe
            title="Woodex Interior — Lahore"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
            src="https://www.google.com/maps?q=Woodex+Interior+LG+90+Link+Road+Model+Town+Lahore&z=16&output=embed"
          />
        </div>
      </section>

      <JsonLd data={contactSchema} />
    </>
  );
}
