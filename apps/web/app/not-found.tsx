import Link from "next/link";
import CTA from "@/components/CTA";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center bg-navy text-white">
      <div className="container-x">
        <p className="eyebrow mb-4">404</p>
        <h1 className="display max-w-2xl text-5xl md:text-6xl">
          This space could not be found.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/80">
          The page you are looking for has moved or does not exist. Start again from one of
          these.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href="/" variant="light">
            Back to home
          </CTA>
          <CTA href="/projects" variant="outline-light">
            View projects
          </CTA>
          <CTA href="/services" variant="outline-light">
            Services
          </CTA>
        </div>
      </div>
    </section>
  );
}
