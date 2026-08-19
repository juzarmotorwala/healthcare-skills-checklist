import postgres from "npm:postgres";
import { jsPDF } from "npm:jspdf@2.5.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const proficiencyLabels = ["No Experience", "Need Training", "With Supervision", "Independent"];

interface Skill { name: string }
interface Category { title: string; skills: Skill[] }
interface Candidate { fullName: string; email: string; phone: string; city: string; state: string; zipCode?: string; hiringFacilityEmail?: string }
interface Payload {
  slug: string;
  checklistTitle: string;
  candidate: Candidate;
  categories: Category[];
  ratings: Record<string, number>;
  consent: boolean;
  website?: string; // honeypot field — real users never fill this in
}

// Smart Title Case for skill names (kept in sync with src/lib/titleCase.ts —
// this edge function is deployed standalone and cannot import from the repo).
// Preserves real acronyms (ICU, IV, EKG, HIPAA...), fixes the handful of
// entries that were typed in ALL CAPS as a formatting choice rather than as
// acronyms (PULSE, SPLINTING, DOCUMENTATION...), lowercases minor connector
// words unless first, and leaves already-mixed-case tokens (tPA, BiPAP)
// untouched.
const MINOR_WORDS = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "in", "into", "nor",
  "of", "on", "or", "per", "the", "to", "vs", "via", "with", "from",
]);

const FORCE_TITLE_CASE_WORDS = new Set([
  "ASSESSMENT", "RESPIRATION", "LUNG", "SOUNDS", "BLOOD", "PRESSURE",
  "OXIMETRY", "TEMPERATURE", "PAIN", "TRAUMA", "SUCTIONING",
  "ADMINISTRATION", "SPLINTING", "BANDAGING", "HEMORRHAGE", "CONTROL",
  "SPINAL", "IMMOBILIZATION", "OPERATION", "OPERATIONS", "LIFTING",
  "MOVING", "STRETCHER", "RADIO", "COMMUNICATIONS", "DOCUMENTATION",
  "PULSE", "PATIENT",
]);

function titleCaseSegment(seg: string): string {
  if (!seg) return seg;
  const letters = seg.replace(/[^A-Za-z]/g, "");
  if (letters.length === 0) return seg;

  const isAllUpper = letters === letters.toUpperCase() && letters !== letters.toLowerCase();
  const isAllLower = letters === letters.toLowerCase();
  const isMixedCase = !isAllUpper && !isAllLower;

  if (isMixedCase) return seg;
  if (isAllUpper && !FORCE_TITLE_CASE_WORDS.has(letters.toUpperCase())) return seg;

  let result = "";
  let seenFirstLetter = false;
  for (const ch of seg) {
    if (/[A-Za-z]/.test(ch)) {
      result += seenFirstLetter ? ch.toLowerCase() : ch.toUpperCase();
      seenFirstLetter = true;
    } else {
      result += ch;
    }
  }
  return result;
}

function titleCaseWord(word: string, isFirst: boolean): string {
  const letters = word.replace(/[^A-Za-z]/g, "");
  const isAllUpper = letters.length > 0 && letters === letters.toUpperCase() && letters !== letters.toLowerCase();

  if (!isFirst && !isAllUpper) {
    const stripped = word.toLowerCase().replace(/[^a-z]/g, "");
    if (MINOR_WORDS.has(stripped)) return word.toLowerCase();
  }

  return word
    .split(/([-/])/)
    .map(part => (part === "-" || part === "/" ? part : titleCaseSegment(part)))
    .join("");
}

function toTitleCase(input: string): string {
  if (!input) return input;
  return input
    .split(" ")
    .map((w, i) => titleCaseWord(w, i === 0))
    .join(" ");
}

// Cumulative self-assessed proficiency summary (kept in sync with
// src/lib/proficiencySummary.ts — this edge function is deployed standalone
// and cannot import from the repo). Computes an overall average plus a
// per-category average from the same ratings map used for the detail table.
interface CategoryProficiency { title: string; average: number | null }
interface ProficiencySummary { overallAverage: number | null; categories: CategoryProficiency[]; descriptor: string }

const DESCRIPTORS: Array<[number, string]> = [
  [3.5, "Independent across most skills"],
  [2.5, "Mostly independent, occasional supervision needed"],
  [1.5, "Developing — needs supervision or training in several areas"],
  [0, "New to this specialty — needs training in most areas"],
];

function describeAverage(avg: number): string {
  for (const [threshold, label] of DESCRIPTORS) {
    if (avg >= threshold) return label;
  }
  return DESCRIPTORS[DESCRIPTORS.length - 1][1];
}

function computeProficiencySummary(categories: Category[], ratings: Record<string, number | null | undefined>): ProficiencySummary {
  let overallSum = 0;
  let overallRated = 0;

  const categorySummaries: CategoryProficiency[] = categories.map((category, catIdx) => {
    let sum = 0;
    let rated = 0;
    category.skills.forEach((_, skillIdx) => {
      const r = ratings[`${catIdx}:${skillIdx}`];
      if (r != null) {
        sum += r;
        rated++;
        overallSum += r;
        overallRated++;
      }
    });
    return { title: category.title, average: rated > 0 ? sum / rated : null };
  });

  const overallAverage = overallRated > 0 ? overallSum / overallRated : null;
  return {
    overallAverage,
    categories: categorySummaries,
    descriptor: overallAverage != null ? describeAverage(overallAverage) : "Not yet rated",
  };
}

function uint8ToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function buildPdf(payload: Payload): Uint8Array {
  const { candidate, categories, ratings, checklistTitle } = payload;
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
  doc.text(checklistTitle, margin, y);
  y += 7;

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, y);
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
  doc.text(`Name: ${candidate.fullName}`, col1, y + 13);
  doc.text(`Email: ${candidate.email}`, col2, y + 13);
  doc.text(`Phone: ${candidate.phone}`, col1, y + 20);
  const location = candidate.zipCode?.trim()
    ? `${candidate.city}, ${candidate.state} ${candidate.zipCode.trim()}`
    : `${candidate.city}, ${candidate.state}`;
  doc.text(`Location: ${location}`, col2, y + 20);
  y += 34;

  // Cumulative self-assessed proficiency summary — an overall average plus a
  // per-category breakdown, so a recruiter skimming the top of the PDF gets
  // the gist without reading every line, but still sees where the gaps are
  // rather than one blended number hiding them.
  const summary = computeProficiencySummary(categories, ratings);
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

  for (let catIdx = 0; catIdx < categories.length; catIdx++) {
    const category = categories[catIdx];
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
      const rating = ratings[`${catIdx}:${skillIdx}`];
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
  const submittedAt = new Date().toLocaleString();
  const footerHeight = summary.overallAverage != null ? 22 : 16;
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, footerHeight, 2, 2, "FD");
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(80, 80, 80);
  const attestLine1 = doc.splitTextToSize(
    `Electronically submitted by ${candidate.fullName} on ${submittedAt} via HealthcareSkillsChecklist.com.`,
    contentWidth - 8,
  );
  doc.text(attestLine1, margin + 4, y + 6);
  doc.text(
    `This is a self-assessment. Submission of this form constitutes ${candidate.fullName}'s attestation that the information above is accurate.`,
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

  return new Uint8Array(doc.output("arraybuffer"));
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let sql: ReturnType<typeof postgres> | null = null;

  try {
    const payload: Payload = await req.json();
    const { candidate, categories, ratings, checklistTitle, slug, consent, website } = payload;

    // Honeypot: real users never see or fill this field. If it's filled, quietly
    // report success without doing any work, so the bot doesn't learn it was caught.
    if (website && website.trim().length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!slug || !checklistTitle || !Array.isArray(categories)) {
      throw new Error("Malformed request");
    }
    if (!candidate?.fullName?.trim()) throw new Error("Full name is required");
    if (!emailRegex.test(candidate.email?.trim() ?? "")) throw new Error("A valid email is required");
    if (!candidate.phone?.trim() || candidate.phone.trim().length < 7) throw new Error("A valid phone number is required");
    if (!candidate.city?.trim()) throw new Error("City is required");
    if (!candidate.state?.trim()) throw new Error("State is required");
    if (!candidate.zipCode?.trim()) throw new Error("Zip code is required");
    if (!consent) throw new Error("Consent is required to submit");

    const hiringFacilityEmail = candidate.hiringFacilityEmail?.trim() || null;
    if (hiringFacilityEmail && !emailRegex.test(hiringFacilityEmail)) {
      throw new Error("Hiring facility email is invalid");
    }

    let totalSkills = 0;
    let ratedSkills = 0;
    for (let catIdx = 0; catIdx < categories.length; catIdx++) {
      const cat = categories[catIdx];
      for (let skillIdx = 0; skillIdx < cat.skills.length; skillIdx++) {
        const sk = cat.skills[skillIdx];
        totalSkills++;
        const r = ratings[`${catIdx}:${skillIdx}`];
        if (r == null || ![1, 2, 3, 4].includes(r)) {
          throw new Error(`Missing or invalid rating for "${sk.name}"`);
        }
        ratedSkills++;
      }
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    sql = postgres(Deno.env.get("SUPABASE_DB_URL")!, { prepare: false });

    // Rate limit: block if this IP has already submitted 5+ times in the last 10 minutes.
    if (ip !== "unknown") {
      const recent = await sql`
        select count(*)::int as c from public.submissions
        where ip_address = ${ip} and created_at > now() - interval '10 minutes'
      `;
      if ((recent[0]?.c ?? 0) >= 5) {
        throw new Error("Too many submissions from this connection. Please try again later.");
      }
    }

    const pdfBytes = buildPdf(payload);
    const pdfBase64 = uint8ToBase64(pdfBytes);
    const fileName = `${checklistTitle.replace(/[^a-zA-Z0-9]/g, "_")}_${candidate.fullName.replace(/\s+/g, "_")}.pdf`;

    const secretRows = await sql`
      select decrypted_secret from vault.decrypted_secrets where name = 'resend_api_key' limit 1
    `;
    const resendKey = secretRows[0]?.decrypted_secret;
    if (!resendKey) throw new Error("Email service is not configured");

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Healthcare Skills Checklist <admin@healthcareskillschecklist.com>",
        to: [candidate.email],
        subject: `Your ${checklistTitle} Submission`,
        html: `<p>Hi ${candidate.fullName},</p><p>Thanks for completing the <strong>${checklistTitle}</strong> on Healthcare Skills Checklist. A copy of your submission is attached as a PDF — keep it handy for any application.</p><p>— Healthcare Skills Checklist</p>`,
        attachments: [{ filename: fileName, content: pdfBase64 }],
      }),
    });

    const emailOk = emailRes.ok;
    const emailError = emailOk ? null : await emailRes.text();

    // If a hiring facility/agency email was provided, send them a second,
    // separately-worded copy (this one isn't addressed to the candidate by
    // name) with the same PDF attached. A failure here never blocks the
    // candidate's own submission — it's recorded on the row for visibility
    // in the admin dashboard, but the candidate still gets their PDF either way.
    let hiringEmailOk: boolean | null = null;
    let hiringEmailError: string | null = null;
    if (hiringFacilityEmail) {
      const hiringEmailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Healthcare Skills Checklist <admin@healthcareskillschecklist.com>",
          to: [hiringFacilityEmail],
          subject: `${checklistTitle} Submitted by ${candidate.fullName}`,
          html: `<p>Hi,</p><p><strong>${candidate.fullName}</strong> has completed a self-assessment for <strong>${checklistTitle}</strong> on Healthcare Skills Checklist. The completed checklist is attached as a PDF.</p><p>Contact info: ${candidate.email}${candidate.phone ? " · " + candidate.phone : ""}</p><p>— Healthcare Skills Checklist</p>`,
          attachments: [{ filename: fileName, content: pdfBase64 }],
        }),
      });
      hiringEmailOk = hiringEmailRes.ok;
      hiringEmailError = hiringEmailOk ? null : await hiringEmailRes.text();
      if (!hiringEmailOk) console.error("Resend error (hiring facility):", hiringEmailError);
    }

    await sql`
      insert into public.submissions
        (checklist_slug, checklist_title, candidate_name, candidate_email, candidate_phone, candidate_city, candidate_state, candidate_zip, ratings, total_skills, rated_skills, email_sent, email_error, consent_given, consent_at, ip_address, hiring_facility_email, hiring_email_sent, hiring_email_error)
      values
        (${slug}, ${checklistTitle}, ${candidate.fullName}, ${candidate.email}, ${candidate.phone}, ${candidate.city}, ${candidate.state}, ${candidate.zipCode?.trim() || null}, ${sql.json(ratings)}, ${totalSkills}, ${ratedSkills}, ${emailOk}, ${emailError}, ${consent}, now(), ${ip}, ${hiringFacilityEmail}, ${hiringEmailOk}, ${hiringEmailError})
    `;

    await sql.end();
    sql = null;

    if (!emailOk) {
      console.error("Resend error:", emailError);
      return new Response(
        JSON.stringify({ success: true, emailSent: false, hiringEmailSent: hiringEmailOk, pdfBase64, fileName, error: "Saved, but the email failed to send — you can still download your PDF below." }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true, emailSent: true, hiringEmailSent: hiringEmailOk, pdfBase64, fileName }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    if (sql) {
      try { await sql.end(); } catch (_e) { /* noop */ }
    }
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
