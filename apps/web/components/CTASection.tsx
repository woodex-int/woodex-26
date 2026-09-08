import CTA from "./CTA";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

export default function CTASection({
  title = "Tell us about your space.",
  subtitle = "Start on WhatsApp, book a consultation, or send a project brief — one team takes it from there.",
  image = "/images/split-night.jpg",
}: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
      <div className="container-x relative flex flex-col items-start gap-8 py-24 md:py-32">
        <p className="eyebrow">Start your project</p>
        <h2 className="display max-w-2xl text-4xl md:text-5xl">{title}</h2>
        <p className="max-w-xl text-lg text-white/80">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <CTA href="/consultation" variant="light">
            Book a consultation
          </CTA>
          <CTA href={waLink()} variant="outline-light" external>
            <WhatsAppIcon className="h-4 w-4" />
            Start on WhatsApp
          </CTA>
          <CTA href="/consultation" variant="outline-light">
            Send a project brief
          </CTA>
        </div>
      </div>
    </section>
  );
}
