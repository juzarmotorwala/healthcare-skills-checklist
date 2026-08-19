import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function PrivacyPolicy() {
  usePageMeta("Privacy Policy", "Privacy policy for Healthcare Skills Checklist.");
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
        <h1 className="text-3xl font-serif text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Effective date: August 2026</p>

        <p className="text-sm leading-relaxed text-foreground">
          Healthcare Skills Checklist ("we," "us," "our") provides a free self-assessment tool that
          lets healthcare professionals build a skills profile and download it as a PDF. This policy
          explains what information we collect, how we use it, and the choices you have.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Information We Collect</h2>
          <p className="text-sm leading-relaxed text-foreground">When you use this tool, we collect:</p>
          <ul className="text-sm leading-relaxed text-foreground list-disc pl-5 space-y-1">
            <li><strong>Contact information:</strong> name, email address, phone number, city, state, and zip code.</li>
            <li><strong>Skill assessment data:</strong> your self-reported ratings and responses on the checklist(s) you complete.</li>
            <li><strong>Technical information:</strong> basic data such as IP address, collected automatically for security and to prevent abuse of the tool.</li>
          </ul>
          <p className="text-sm leading-relaxed text-foreground">
            We do not collect Social Security numbers, dates of birth, or other sensitive identifiers
            as part of this tool.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">How We Use Your Information</h2>
          <p className="text-sm leading-relaxed text-foreground">We use the information you provide to:</p>
          <ul className="text-sm leading-relaxed text-foreground list-disc pl-5 space-y-1">
            <li>Generate and deliver your skills checklist PDF.</li>
            <li>Maintain and improve the tool.</li>
            <li>Enable the operator of this site and its affiliated staffing and recruiting organizations to contact you about relevant job opportunities that may match your skills and location.</li>
            <li>Monitor for spam, abuse, and fraudulent submissions.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">How We Share Your Information</h2>
          <p className="text-sm leading-relaxed text-foreground">
            We do not sell your personal information to unaffiliated third parties. We may share your
            information with:
          </p>
          <ul className="text-sm leading-relaxed text-foreground list-disc pl-5 space-y-1">
            <li><strong>Affiliated organizations</strong> — staffing and recruiting entities affiliated with the operator of this site, for the purpose of reaching out to you about job opportunities.</li>
            <li><strong>Service providers</strong> — vendors who host our infrastructure, send emails, or generate PDFs on our behalf, bound by confidentiality obligations and only to perform those services.</li>
            <li><strong>Legal purposes</strong> — if required by law, subpoena, or to protect the rights, safety, or property of our users or the public.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Data Retention</h2>
          <p className="text-sm leading-relaxed text-foreground">
            We retain your information for as long as reasonably necessary to fulfill the purposes
            described above, or until you request deletion.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Your Rights and Choices</h2>
          <p className="text-sm leading-relaxed text-foreground">You may:</p>
          <ul className="text-sm leading-relaxed text-foreground list-disc pl-5 space-y-1">
            <li>Request a copy of the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your information.</li>
            <li>Opt out of further contact at any time.</li>
          </ul>
          <p className="text-sm leading-relaxed text-foreground">
            To exercise any of these rights, email{" "}
            <a href="mailto:admin@healthcareskillschecklist.com" className="underline">
              admin@healthcareskillschecklist.com
            </a>. We will respond within a reasonable time and in accordance with applicable law.
          </p>
          <p className="text-sm leading-relaxed text-foreground">
            <strong>California residents:</strong> You have additional rights under the California
            Consumer Privacy Act (CCPA), including the right to know what personal information is
            collected, request deletion, and opt out of the sale or sharing of personal information
            (we do not sell personal information). Contact us using the email above to exercise these
            rights.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Data Security</h2>
          <p className="text-sm leading-relaxed text-foreground">
            We use reasonable administrative, technical, and physical safeguards to protect your
            information. No method of transmission or storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Children's Privacy</h2>
          <p className="text-sm leading-relaxed text-foreground">
            This tool is intended for healthcare professionals and is not directed at, or intended
            for use by, anyone under 18 years of age. We do not knowingly collect information from
            minors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Changes to This Policy</h2>
          <p className="text-sm leading-relaxed text-foreground">
            We may update this policy from time to time. The effective date above reflects the most
            recent revision. Continued use of the tool after changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif text-foreground">Contact Us</h2>
          <p className="text-sm leading-relaxed text-foreground">
            Questions about this policy or your data:{" "}
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
