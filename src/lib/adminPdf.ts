import { jsPDF } from "jspdf";
import { ChecklistCategory } from "@/data/checklistData";
import { MONOGRAM_BASE64, NAME_FONT_BASE64, BRAND_GREEN, BRAND_BLUE } from "@/lib/brandAssets";

const proficiencyLabels = ["No Experience", "Need Training", "With Supervision", "Independent"];

export interface SubmissionForPdf {
  checklistTitle: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  candidateCity: string;
  candidateState: string;
  candidateLastFourSSN: string;
  candidateDob: string;
  categories: ChecklistCategory[];
  ratings: Record<string, number | null>;
  // ISO timestamp (or any Date-parseable string) of the original submission —
  // used in the electronic attestation line so it reflects when the candidate
  // actually submitted, not when the admin re-downloaded it.
  submittedAt: string;
}

// Regenerates the exact same PDF the candidate received, from stored submission
// data — used by the admin dashboard's "Download PDF" action.
export function downloadSubmissionPdf(sub: SubmissionForPdf) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const checkPage = (needed: number) => {
    if (y + needed > 275) {
      doc.addPage();
      y = 20;
    }
  };

  const logoBoxHeight = 20;
  try {
    doc.addImage(`data:image/png;base64,${MONOGRAM_BASE64}`, "PNG", margin, y, logoBoxHeight, logoBoxHeight);
    doc.addFileToVFS("NeueKaineBlackItalic.ttf", NAME_FONT_BASE64);
    doc.addFont("NeueKaineBlackItalic.ttf", "NeueKaine", "italic", "bold");
    doc.setFont("NeueKaine", "italic", "bold");
    doc.setFontSize(26);
    const nameX = margin + logoBoxHeight + 4;
    const nameY = y + logoBoxHeight / 2 + 26 * 0.35 * 0.352778;
    doc.setTextColor(...BRAND_GREEN);
    doc.text("Brothers", nameX, nameY);
    const brothersWidth = doc.getTextWidth("Brothers");
    doc.setTextColor(...BRAND_BLUE);
    doc.text("tech", nameX + brothersWidth, nameY);
    doc.setFont("helvetica", "normal");
  } catch (_e) {
    // logo embed is best-effort; continue without it if it fails
  }
  y += logoBoxHeight + 8;

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20, 20, 20);
  doc.text(sub.checklistTitle, margin, y);
  y += 8;

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text(`Re-generated: ${new Date().toLocaleDateString()}`, margin, y);
  y += 10;

  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 35, 2, 2, "FD");
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Candidate Information", margin + 4, y + 6);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const col1 = margin + 4;
  const col2 = margin + contentWidth / 2 + 4;
  doc.text(`Name: ${sub.candidateName}`, col1, y + 13);
  doc.text(`Email: ${sub.candidateEmail}`, col2, y + 13);
  doc.text(`Phone: ${sub.candidatePhone}`, col1, y + 20);
  doc.text(`Location: ${sub.candidateCity}, ${sub.candidateState}`, col2, y + 20);
  doc.text(`Last 4 SSN: ••${sub.candidateLastFourSSN}`, col1, y + 27);
  doc.text(`DOB: ${sub.candidateDob}`, col2, y + 27);
  y += 41;

  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("1 = No Experience  |  2 = Need Training  |  3 = With Supervision  |  4 = Independent", margin, y);
  y += 8;

  for (let catIdx = 0; catIdx < sub.categories.length; catIdx++) {
    const category = sub.categories[catIdx];
    checkPage(14);
    doc.setFillColor(240, 245, 250);
    doc.roundedRect(margin, y, contentWidth, 8, 1, 1, "F");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 60, 90);
    doc.text(category.title, margin + 3, y + 5.5);
    y += 11;

    checkPage(8);
    doc.setFillColor(245, 247, 250);
    doc.rect(margin, y, contentWidth, 6, "F");
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(100, 100, 100);
    doc.text("Skill", margin + 3, y + 4);
    doc.text("Rating", margin + contentWidth - 30, y + 4);
    y += 7;

    for (let skillIdx = 0; skillIdx < category.skills.length; skillIdx++) {
      const skill = category.skills[skillIdx];
      checkPage(7);
      const rating = sub.ratings[`${catIdx}:${skillIdx}`];
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(50, 50, 50);

      const skillText = doc.splitTextToSize(skill.name, contentWidth - 40);
      const lineHeight = skillText.length > 1 ? skillText.length * 4 : 5;

      if (skillText.length > 1) {
        checkPage(lineHeight + 2);
      }

      doc.text(skillText, margin + 3, y + 3.5);

      if (rating != null) {
        const label = `${rating} - ${proficiencyLabels[rating - 1]}`;
        doc.setTextColor(30, 100, 60);
        doc.text(label, margin + contentWidth - 38, y + 3.5);
      }

      doc.setDrawColor(230, 230, 230);
      doc.line(margin, y + lineHeight, margin + contentWidth, y + lineHeight);
      y += lineHeight + 1;
      doc.setTextColor(50, 50, 50);
    }
    y += 4;
  }

  checkPage(20);
  y += 8;
  const submittedAt = new Date(sub.submittedAt).toLocaleString();
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 16, 2, 2, "FD");
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(80, 80, 80);
  const attestLine1 = doc.splitTextToSize(
    `Electronically submitted by ${sub.candidateName} on ${submittedAt} via the BrothersTech Skills Checklist portal.`,
    contentWidth - 8,
  );
  doc.text(attestLine1, margin + 4, y + 6);
  doc.text(
    "Submission of this form constitutes the candidate's attestation that the information above is accurate.",
    margin + 4,
    y + 12,
  );

  const fileName = `${sub.checklistTitle.replace(/[^a-zA-Z0-9]/g, "_")}_${sub.candidateName.replace(/\s+/g, "_")}.pdf`;
  doc.save(fileName);
}
