import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Woodex Interior website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="September 2026">
      <h2>Use of this website</h2>
      <p>
        This website presents {site.name}&apos;s services and project work. Content is for
        general information and does not constitute an offer or a binding quotation.
      </p>
      <h2>Projects and studies</h2>
      <p>
        Portfolio items are labelled studies unless a client has approved publication of
        their name. Do not reproduce images or text without written permission.
      </p>
      <h2>Enquiries</h2>
      <p>
        Submitting a form or messaging us does not create a contractual relationship. A
        project begins with a written agreement defining scope, deliverables and
        commercials.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms: {site.email} or {site.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
