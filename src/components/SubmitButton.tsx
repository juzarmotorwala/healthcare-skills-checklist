import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { CandidateInfo } from "./CandidateInfoForm";
import { ChecklistCategory } from "@/data/checklistData";
import { ProficiencyRatings } from "./ChecklistTable";
import {
  SUBMIT_CHECKLIST_FUNCTION_URL,
  SUPABASE_PUBLISHABLE_KEY_FOR_FUNCTIONS,
} from "@/lib/supabaseClient";

interface SubmitButtonProps {
  disabled: boolean;
  slug: string;
  candidateInfo: CandidateInfo;
  checklistTitle: string;
  categories: ChecklistCategory[];
  ratings: ProficiencyRatings;
}

export default function SubmitButton({
  disabled,
  slug,
  candidateInfo,
  checklistTitle,
  categories,
  ratings,
}: SubmitButtonProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch(SUBMIT_CHECKLIST_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_PUBLISHABLE_KEY_FOR_FUNCTIONS,
        },
        body: JSON.stringify({
          slug,
          checklistTitle,
          candidate: candidateInfo,
          categories,
          ratings,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      toast({
        title: "Submitted!",
        description: `A copy has been emailed to ${candidateInfo.email}.`,
      });
    } catch (err) {
      console.error("Submission error:", err);
      toast({
        title: "Submission failed",
        description:
          err instanceof Error ? err.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Button size="lg" disabled className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-600">
        <CheckCircle2 className="mr-2 h-4 w-4" />
        Submitted — check your email
      </Button>
    );
  }

  return (
    <Button
      onClick={handleSubmit}
      disabled={disabled || loading}
      size="lg"
      className="w-full sm:w-auto"
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Send className="mr-2 h-4 w-4" />
      )}
      {loading ? "Submitting..." : "Submit Checklist"}
    </Button>
  );
}
