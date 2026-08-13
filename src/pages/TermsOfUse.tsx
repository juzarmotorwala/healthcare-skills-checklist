import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-serif text-foreground">Terms of Use</h1>
        <p className="text-sm text-muted-foreground">Effective date: August 2026</p>

        <p className="text-sm leading-relaxed text-foreground">
          By using Healthcare Skills Checklist (the "Site"), you agree to these Terms of Use.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">What This Tool Is</h2>
          <p className="text-sm leading-relaxed text-foreground">
            The Site lets you self-report your skills and experience across a series of checklists
            and generate a PDF summary. <strong>This is a self-assessment tool, not a credential,
            certification, license, or endorsement.</strong> Ratings are self-reported by you and are
            not independently verified by us.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Acceptable Use</h2>
          <p className="text-sm leading-relaxed text-foreground">
            You agree to provide accurate information and not to use the Site to impersonate another
            person, submit false or fraudulent entries, or attempt to disrupt, scrape, or abuse the
            Site (including automated or bulk submissions).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">No Warranty</h2>
          <p className="text-sm leading-relaxed text-foreground">
            The Site and the PDF it generates are provided "as is," without warranties of any kind,
            express or implied. We do not guarantee the Site will be uninterrupted, error-free, or
            fit for any particular purpose, including hiring, credentialing, or employment decisions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Limitation of Liability</h2>
          <p className="text-sm leading-relaxed text-foreground">
            We are not liable for any decisions made by you, an employer, a staffing organization, or
            any third party based on the content of a checklist or PDF generated through this Site,
            including hiring, placement, or employment decisions. To the maximum extent permitted by
            law, we disclaim liability for any indirect, incidental, or consequential damages arising
            from use of the Site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Intellectual Property</h2>
          <p className="text-sm leading-relaxed text-foreground">
            The checklists, design, and content of the Site are owned by us or our licensors. You may
            download and use your own generated PDF freely, but may not copy, reproduce, or
            redistribute the underlying checklist content or Site for commercial purposes without
            permission.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Changes to These Terms</h2>
          <p className="text-sm leading-relaxed text-foreground">
            We may update these Terms from time to time. Continued use of the Site after changes
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Contact Us</h2>
          <p className="text-sm leading-relaxed text-foreground">
            Questions about these Terms:{" "}
            <a href="mailto:admin@healthcareskillschecklist.com" className="underline">
              admin@healthcareskillschecklist.com
            </a>
          </p>
        </section>

        <Link to="/">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Checklists
          </Button>
        </Link>
      </main>
    </div>
  );
}
