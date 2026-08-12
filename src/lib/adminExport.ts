import * as XLSX from "xlsx";
import { getChecklistBySlug } from "@/data/checklistData";

const proficiencyLabels = ["No Experience", "Need Training", "With Supervision", "Independent"];

export interface SubmissionForExport {
  checklist_slug: string;
  checklist_title: string;
  candidate_name: string;
  candidate_email: string;
  candidate_phone: string;
  candidate_city: string;
  candidate_state: string;
  candidate_last4_ssn: string;
  candidate_dob: string;
  ratings: Record<string, number | null>;
  total_skills: number;
  rated_skills: number;
  email_sent: boolean;
  created_at: string;
}

// Builds a two-sheet workbook from the given submissions and triggers a browser download.
// Sheet 1 ("Submissions") is one row per candidate — matches what's shown in the admin table.
// Sheet 2 ("Skill Ratings") is one row per skill rating, so category/skill-level detail isn't lost.
export function downloadSubmissionsExcel(rows: SubmissionForExport[], fileNamePrefix = "skills_checklist_submissions") {
  const summarySheetData = rows.map((row) => ({
    "Candidate Name": row.candidate_name,
    "Email": row.candidate_email,
    "Phone": row.candidate_phone,
    "City": row.candidate_city,
    "State": row.candidate_state,
    "Last 4 SSN": row.candidate_last4_ssn,
    "DOB": row.candidate_dob,
    "Checklist": row.checklist_title,
    "Rated": row.rated_skills,
    "Total Skills": row.total_skills,
    "Email Sent": row.email_sent ? "Yes" : "No",
    "Submitted At": new Date(row.created_at).toLocaleString(),
  }));

  const detailSheetData: Record<string, string | number>[] = [];
  for (const row of rows) {
    const checklist = getChecklistBySlug(row.checklist_slug);
    if (!checklist) continue;
    checklist.categories.forEach((category, catIdx) => {
      category.skills.forEach((skill, skillIdx) => {
        const rating = row.ratings[`${catIdx}:${skillIdx}`];
        detailSheetData.push({
          "Candidate Name": row.candidate_name,
          "Email": row.candidate_email,
          "Checklist": row.checklist_title,
          "Category": category.title,
          "Skill": skill.name,
          "Rating": rating ?? "",
          "Rating Label": rating != null ? proficiencyLabels[rating - 1] : "",
          "Submitted At": new Date(row.created_at).toLocaleString(),
        });
      });
    });
  }

  const workbook = XLSX.utils.book_new();

  const summarySheet = XLSX.utils.json_to_sheet(summarySheetData);
  summarySheet["!cols"] = [
    { wch: 22 }, { wch: 26 }, { wch: 14 }, { wch: 16 }, { wch: 8 },
    { wch: 12 }, { wch: 12 }, { wch: 30 }, { wch: 8 }, { wch: 12 },
    { wch: 10 }, { wch: 20 },
  ];
  XLSX.utils.book_append_sheet(workbook, summarySheet, "Submissions");

  const detailSheet = XLSX.utils.json_to_sheet(detailSheetData);
  detailSheet["!cols"] = [
    { wch: 22 }, { wch: 26 }, { wch: 30 }, { wch: 26 }, { wch: 30 },
    { wch: 8 }, { wch: 16 }, { wch: 20 },
  ];
  XLSX.utils.book_append_sheet(workbook, detailSheet, "Skill Ratings");

  const dateStamp = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `${fileNamePrefix}_${dateStamp}.xlsx`);
}
