import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2, Download } from "lucide-react";
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
  consent: boolean;
  website: string;
  onSubmitted?: () => void;
}

function downloadBase64Pdf(base64: string, fileName: string) {
  const byteChars = atob(base64);
  const byteNumbers = new Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) {
    byteNumbers[i] = byteChars.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function SubmitButton({
  disabled,
  slug,
  candidateInfo,
  checklistTitle,
  categories,
  ratings,
  consent,
  website,
  onSubmitted,
}: SubmitButtonProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pdfData, setPdfData] = useState<{ base64: string; fileName: string } | null>(null);

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
          consent,
          website,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      onSubmitted?.();
      if (data.pdfBase64 && data.fileName) {
        setPdfData({ base64: data.pdfBase64, fileName: data.fileName });
        downloadBase64Pdf(data.pdfBase64, data.fileName);
      }

      const hiringEmailSet = candidateInfo.hiringFacilityEmail.trim().length > 0;
      const hiringNote =
        hiringEmailSet && data.hiringEmailSent
          ? ` A copy was also sent to ${candidateInfo.hiringFacilityEmail.trim()}.`
          : "";

      toast({
        title: "Submitted!",
        description:
          data.emailSent === false
            ? "Your PDF downloaded, but the email couldn't be sent. Please save it now."
            : `A copy has been emailed to ${candidateInfo.email}, and your PDF has downloaded.${hiringNote}`,
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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
        <Button size="lg" disabled className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-600">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Submitted — check your email
        </Button>
        {pdfData && (
          <Button
            size="lg"
            variant="outline"
            onClick={() => downloadBase64Pdf(pdfData.base64, pdfData.fileName)}
            className="w-full sm:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF again
          </Button>
        )}
      </div>
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
      {loading ? "Sending..." : "Email & Download"}
    </Button>
  );
}
