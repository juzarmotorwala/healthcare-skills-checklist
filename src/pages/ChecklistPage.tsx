import { useState, useRef, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { getChecklistBySlug } from "@/data/checklistData";
import ChecklistTable, { ChecklistTableHandle } from "@/components/ChecklistTable";
import CandidateInfoForm, { CandidateInfo } from "@/components/CandidateInfoForm";
import SubmitButton from "@/components/SubmitButton";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ChecklistPage() {
  const { slug } = useParams<{ slug: string }>();
  const checklist = slug ? getChecklistBySlug(slug) : undefined;
  const tableRef = useRef<ChecklistTableHandle>(null);

  const [candidateInfo, setCandidateInfo] = useState<CandidateInfo>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    lastFourSSN: "",
    dob: "",
  });

  // Force re-render when ratings change to update button state
  const [, setRatingTick] = useState(0);
  const bumpTick = useCallback(() => setRatingTick(t => t + 1), []);

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

  const infoComplete =
    candidateInfo.fullName.trim().length > 0 &&
    emailRegex.test(candidateInfo.email.trim()) &&
    candidateInfo.phone.trim().length >= 7 &&
    candidateInfo.city.trim().length > 0 &&
    candidateInfo.state.trim().length > 0 &&
    candidateInfo.lastFourSSN.length === 4 &&
    candidateInfo.dob.length > 0;

  const allRated =
    tableRef.current
      ? tableRef.current.getRatedCount() === tableRef.current.getTotalSkills() &&
        tableRef.current.getTotalSkills() > 0
      : false;

  const canSave = infoComplete && allRated;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <img src="/brand/monogram.png" alt="BrothersTech" className="h-7 w-7 flex-shrink-0" />
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

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">
            {checklist.title}
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            Rate your proficiency for each skill using the 1–4 scale below. Fill
            in your details and rate every skill to submit — a copy will be
            emailed to you automatically.
          </p>
        </div>

        {hasContent ? (
          <div className="space-y-6">
            <CandidateInfoForm info={candidateInfo} onChange={setCandidateInfo} />

            <ChecklistTable
              ref={tableRef}
              categories={checklist.categories}
              onRatingChange={bumpTick}
            />

            {/* Save section */}
            <div className="bg-card rounded-lg border shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {canSave
                    ? "✅ Ready to submit — all fields complete!"
                    : "Complete all fields to submit"}
                </p>
                {!canSave && (
                  <ul className="text-xs text-muted-foreground mt-1 space-y-0.5">
                    {!infoComplete && <li>• Fill in all candidate information</li>}
                    {!allRated && <li>• Rate every skill (select 1–4)</li>}
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
              />
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
    </div>
  );
}
