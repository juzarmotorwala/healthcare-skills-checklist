import { jsPDF } from "jspdf";
import { ChecklistCategory } from "@/data/checklistData";

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

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(sub.checklistTitle, margin, y);
  y += 10;

  doc.setFontSize(9);
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

  for (const category of sub.categories) {
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

    for (const skill of category.skills) {
      checkPage(7);
      const rating = sub.ratings[skill.name];
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

  checkPage(30);
  y += 10;
  doc.setDrawColor(150, 150, 150);
  doc.line(margin, y, margin + 80, y);
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Candidate Signature", margin, y + 5);

  doc.line(margin + 100, y, margin + contentWidth, y);
  doc.text("Date", margin + 100, y + 5);

  const fileName = `${sub.checklistTitle.replace(/[^a-zA-Z0-9]/g, "_")}_${sub.candidateName.replace(/\s+/g, "_")}.pdf`;
  doc.save(fileName);
}
