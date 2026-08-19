import { useState, useRef, useCallback } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useParams, Link } from "react-router-dom";
import { getChecklistBySlug } from "@/data/checklistData";
import ChecklistTable, { ChecklistTableHandle } from "@/components/ChecklistTable";
import CandidateInfoForm, { CandidateInfo } from "@/components/CandidateInfoForm";
import SubmitButton from "@/components/SubmitButton";
import { ArrowLeft, ClipboardList, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ChecklistPage() {
  const { slug } = useParams<{ slug: string }>();
  const checklist = slug ? getChecklistBySlug(slug) : undefined;
  const tableRef = useRef<ChecklistTableHandle>(null);

  usePageMeta(
    checklist?.title,
    checklist
      ? `Free self-assessment checklist for ${checklist.shortTitle}. Rate your skills, download a PDF, and use it wherever you apply.`
      : undefined,
  );

  const [candidateInfo, setCandidateInfo] = useState<CandidateInfo>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
    hiringFacilityEmail: "",
  });

  const [consent, setConsent] = useState(false);
  // Honeypot: rendered visually hidden below. Real users never see or fill it;
  // bots that auto-fill every field will, which is how we catch them server-side.
  const [website, setWebsite] = useState("");

  // Rated count is lifted into real state (updated with the value the child
  // just computed) rather than read off tableRef during this render — the
  // ref is only current *after* the child commits, which is one click behind
  // during this component's own render pass. That lag was capping the
  // submit button at permanently-disabled once every skill was rated.
  const [ratedCount, setRatedCount] = useState(0);
  const handleRatingChange = useCallback((count: number) => setRatedCount(count), []);

  if (!checklist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-4xl">🔍</p>
          <h1 className="text-2xl font-serif text-foreground">Checklist Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const hasContent = checklist.categories.length > 0;

  const hiringEmailValid =
    candidateInfo.hiringFacilityEmail.trim().length === 0 ||
    emailRegex.test(candidateInfo.hiringFacilityEmail.trim());

  const infoComplete =
    candidateInfo.fullName.trim().length > 0 &&
    emailRegex.test(candidateInfo.email.trim()) &&
    candidateInfo.phone.trim().length >= 7 &&
    candidateInfo.city.trim().length > 0 &&
    candidateInfo.state.trim().length > 0 &&
    candidateInfo.zipCode.trim().length > 0 &&
    hiringEmailValid;

  const totalSkills = checklist.categories.reduce((sum, cat) => sum + cat.skills.length, 0);
  const allRated = totalSkills > 0 && ratedCount === totalSkills;

  const canSave = infoComplete && allRated && consent;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <ClipboardCheck className="h-6 w-6 text-primary flex-shrink-0" />
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">All Checklists</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="text-lg">{checklist.icon}</span>
          <h1 className="font-serif text-lg text-foreground truncate">
            {checklist.shortTitle}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">
            {checklist.title}
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            Rate your proficiency for each skill using the 1–4 scale below. Fill
            in your details and rate every skill to submit — you'll get a PDF
            copy emailed to you automatically, and can also download it here.
          </p>
        </div>

        {hasContent ? (
          <div className="space-y-6">
            <CandidateInfoForm info={candidateInfo} onChange={setCandidateInfo} />

            {/* Honeypot field — visually hidden, off-screen, and skipped by tab order.
                Left blank by real visitors; bots that auto-fill forms tend to fill it. */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, overflow: "hidden" }}
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <ChecklistTable
              key={checklist.slug}
              ref={tableRef}
              categories={checklist.categories}
              slug={checklist.slug}
              onRatingChange={handleRatingChange}
            />

            {/* Save section */}
            <div className="bg-card rounded-lg border shadow-sm p-5 space-y-4">
              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  className="mt-0.5"
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  I agree to the{" "}
                  <Link to="/privacy" target="_blank" className="underline hover:text-foreground">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms" target="_blank" className="underline hover:text-foreground">
                    Terms of Use
                  </Link>.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {canSave
                      ? "✅ Ready to submit — all fields complete!"
                      : "Complete all fields to submit"}
                  </p>
                  {!canSave && (
                    <ul className="text-xs text-muted-foreground mt-1 space-y-0.5">
                      {!infoComplete && <li>• Fill in all of your information</li>}
                      {!hiringEmailValid && <li>• Enter a valid hiring facility email, or leave it blank</li>}
                      {!allRated && <li>• Rate every skill (select 1–4)</li>}
                      {!consent && <li>• Agree to the Privacy Policy and Terms of Use</li>}
                    </ul>
                  )}
                </div>
                <SubmitButton
                  disabled={!canSave}
                  slug={checklist.slug}
                  candidateInfo={candidateInfo}
                  checklistTitle={checklist.title}
                  categories={checklist.categories}
                  ratings={tableRef.current?.getRatings() ?? {}}
                  consent={consent}
                  website={website}
                  onSubmitted={() => tableRef.current?.clearSavedProgress()}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-card border rounded-xl p-12 text-center space-y-4">
            <ClipboardList className="h-12 w-12 mx-auto text-muted-foreground/40" />
            <h2 className="text-xl font-serif text-foreground">
              Checklist Coming Soon
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              The skills checklist for <strong>{checklist.shortTitle}</strong> is
              currently being prepared. Check back soon for the full competency list.
            </p>
            <Link to="/">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Browse Other Checklists
              </Button>
            </Link>
          </div>
        )}
      </main>

      <footer className="border-t py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 Healthcare Skills Checklist. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
