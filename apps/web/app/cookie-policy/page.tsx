import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the Woodex Interior website uses cookies.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="September 2026">
      <h2>Cookies on this site</h2>
      <p>
        This site uses a minimal set of cookies and similar technologies: essential
        functionality, and — where enabled — analytics (such as Google Analytics and
        Microsoft Clarity) to understand how visitors use the site.
      </p>
      <h2>Managing cookies</h2>
      <p>
        You can control or delete cookies in your browser settings. Where a consent
        manager is required by the analytics and advertising tools in use, it will be
        shown before those tools load.
      </p>
    </LegalPage>
  );
}
