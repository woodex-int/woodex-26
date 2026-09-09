import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Woodex Interior collects and uses information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <h2>What we collect</h2>
      <p>
        When you submit the project brief form, we collect the details you provide — name,
        phone or WhatsApp number, email, city, and the project information you choose to
        share. We use this only to respond to your enquiry and, where you proceed, to plan
        your project.
      </p>
      <h2>How we use it</h2>
      <p>
        Your information is used to respond to your enquiry, schedule consultations and
        communicate about your project. We do not sell your information to third parties.
        Where a third-party tool (booking, analytics or email) is used, data is processed
        only to provide the service.
      </p>
      <h2>How to contact us</h2>
      <p>
        For any privacy question, contact {site.name} at {site.email} or {site.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
