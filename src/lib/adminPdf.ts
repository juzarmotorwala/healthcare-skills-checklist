import { jsPDF } from "jspdf";
import { ChecklistCategory } from "@/data/checklistData";
import { toTitleCase } from "@/lib/titleCase";
import { computeProficiencySummary } from "@/lib/proficiencySummary";

const proficiencyLabels = ["No Experience", "Need Training", "With Supervision", "Independent"];

export interface SubmissionForPdf {
  checklistTitle: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  candidateCity: string;
  candidateState: string;
  candidateZip?: string | null;
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

  // Brand line is the dominant visual element on the page — bigger, bolder,
  // and in brand blue — since this PDF is the primary thing candidates keep
  // and share, and it should read as ours at a glance.
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 60, 90);
  doc.text("HealthcareSkillsChecklist.com", margin, y);
  y += 6;
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(120, 120, 120);
  doc.text("Helping Healthcare Professionals Self-Assess Their Skills", margin, y);
  y += 10;

  // Checklist title is secondary content, sized down from the brand line.
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(70, 70, 70);
  doc.text(sub.checklistTitle, margin, y);
  y += 7;

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text(`Re-generated: ${new Date().toLocaleDateString()}`, margin, y);
  y += 10;

  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 28, 2, 2, "FD");
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
  const location = sub.candidateZip?.trim()
    ? `${sub.candidateCity}, ${sub.candidateState} ${sub.candidateZip.trim()}`
    : `${sub.candidateCity}, ${sub.candidateState}`;
  doc.text(`Location: ${location}`, col2, y + 20);
  y += 34;

  // Cumulative self-assessed proficiency summary — an overall average plus a
  // per-category breakdown, so a recruiter skimming the top of the PDF gets
  // the gist without reading every line, but still sees where the gaps are
  // rather than one blended number hiding them.
  const summary = computeProficiencySummary(sub.categories, sub.ratings);
  if (summary.overallAverage != null) {
    checkPage(18);
    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin, y, contentWidth, 16, 2, 2, "FD");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 60, 90);
    doc.text("Self-Assessed Proficiency Summary", margin + 4, y + 6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    doc.text(`Overall: ${summary.overallAverage.toFixed(1)} of 4 — ${summary.descriptor}`, margin + 4, y + 13);
    y += 22;

    checkPage(8);
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(100, 100, 100);
    doc.text("By Category", margin, y);
    y += 5;

    for (const cat of summary.categories) {
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      const titleText = doc.splitTextToSize(cat.title, contentWidth - 35);
      const rowHeight = titleText.length > 1 ? titleText.length * 4 : 5;
      checkPage(rowHeight + 1);

      doc.setTextColor(60, 60, 60);
      doc.text(titleText, margin + 2, y + 3.5);
      doc.setTextColor(30, 100, 60);
      const scoreText = cat.average != null ? `${cat.average.toFixed(1)} / 4` : "—";
      doc.text(scoreText, margin + contentWidth - 18, y + 3.5);

      doc.setDrawColor(235, 235, 235);
      doc.line(margin, y + rowHeight, margin + contentWidth, y + rowHeight);
      y += rowHeight + 1;
    }
    y += 5;
  }

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

      const skillText = doc.splitTextToSize(toTitleCase(skill.name), contentWidth - 40);
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

  checkPage(26);
  y += 8;
  const submittedAt = new Date(sub.submittedAt).toLocaleString();
  const footerHeight = summary.overallAverage != null ? 22 : 16;
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, footerHeight, 2, 2, "FD");
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(80, 80, 80);
  const attestLine1 = doc.splitTextToSize(
    `Electronically submitted by ${sub.candidateName} on ${submittedAt} via HealthcareSkillsChecklist.com.`,
    contentWidth - 8,
  );
  doc.text(attestLine1, margin + 4, y + 6);
  doc.text(
    `Submission of this form constitutes ${sub.candidateName}'s attestation that the information above is accurate.`,
    margin + 4,
    y + 12,
  );
  if (summary.overallAverage != null) {
    doc.setFontSize(7);
    doc.setTextColor(130, 130, 130);
    doc.text(
      "The proficiency summary above is a self-reported average across all rated skills, not a validated assessment.",
      margin + 4,
      y + 18,
    );
  }

  const fileName = `${sub.checklistTitle.replace(/[^a-zA-Z0-9]/g, "_")}_${sub.candidateName.replace(/\s+/g, "_")}.pdf`;
  doc.save(fileName);
}
