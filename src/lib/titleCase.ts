// Smart Title Case for skill names.
//
// The underlying checklist data is inconsistently cased: some entries are
// already correctly cased ("A-Line", "tPA", "BiPAP"), some are plain
// lowercase, and a handful of entries (mostly one EMT checklist) were
// entered in full ALL CAPS as a formatting choice rather than as real
// acronyms. Naive Title Case would either wreck real acronyms (ICU -> Icu)
// or leave the accidental all-caps entries shouting (PULSE, SPLINTING).
//
// Rules, in order:
// 1. Minor connector words (of, and, with, ...) are lowercased unless they
//    are the first word AND the source word isn't itself all-uppercase
//    (so the real acronym "OR" for Operating Room is never mistaken for
//    the conjunction "or").
// 2. Any token that's already a mix of upper and lower case in the source
//    (tPA, BiPAP, A-Line's "Line") is left exactly as-is — assumed
//    intentional.
// 3. Any token that's fully uppercase in the source is preserved as a
//    real acronym (ICU, IV, EKG, PACU, D/C, SVO2, HCAHPS) UNLESS it's in
//    the curated FORCE_TITLE_CASE_WORDS list of words we've confirmed are
//    plain English words that happened to be typed in caps.
// 4. Everything else gets normal Title Case: first letter up, rest down.

const MINOR_WORDS = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "in", "into", "nor",
  "of", "on", "or", "per", "the", "to", "vs", "via", "with", "from",
]);

// Words confirmed (by auditing the actual dataset) to be plain English
// words typed in ALL CAPS rather than real medical acronyms.
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

  if (isMixedCase) return seg; // already intentionally cased, e.g. "tPA", "BiPAP", "Line"

  if (isAllUpper && !FORCE_TITLE_CASE_WORDS.has(letters.toUpperCase())) {
    return seg; // preserve as a real acronym
  }

  // Normal Title Case: capitalize the first letter found, lowercase the rest.
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
    if (MINOR_WORDS.has(stripped)) {
      return word.toLowerCase();
    }
  }

  // Handle intra-word separators (hyphens, slashes) as their own sub-segments
  // so "setup-D/C" -> "Setup-D/C" and "A-Line" -> "A-Line" (A preserved as acronym).
  return word
    .split(/([-/])/)
    .map(part => (part === "-" || part === "/" ? part : titleCaseSegment(part)))
    .join("");
}

export function toTitleCase(input: string): string {
  if (!input) return input;
  return input
    .split(" ")
    .map((w, i) => titleCaseWord(w, i === 0))
    .join(" ");
}
