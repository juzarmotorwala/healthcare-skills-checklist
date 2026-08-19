import { ChecklistCategory } from "@/data/checklistData";

// Turns a completed checklist's per-skill ratings into a cumulative summary:
// one overall self-assessed average, plus an average per category so a
// recruiter can see where the gaps actually are instead of a single number
// hiding them. Used by both PDF generators (client-side admin regeneration
// and — as a hand-kept-in-sync copy, since it can't import this file — the
// submit-checklist edge function) and the admin dashboard's sortable column.

export interface CategoryProficiency {
  title: string;
  average: number | null;
  ratedCount: number;
  totalCount: number;
}

export interface ProficiencySummary {
  overallAverage: number | null;
  overallRatedCount: number;
  overallTotalCount: number;
  categories: CategoryProficiency[];
  descriptor: string;
}

// Ordered highest threshold first — first match wins. Deliberately phrased as
// a self-reported summary ("mostly", "developing") rather than anything that
// reads like a graded score, since this is self-assessed, not validated.
const DESCRIPTORS: Array<[number, string]> = [
  [3.5, "Independent across most skills"],
  [2.5, "Mostly independent, occasional supervision needed"],
  [1.5, "Developing — needs supervision or training in several areas"],
  [0, "New to this specialty — needs training in most areas"],
];

export function describeAverage(avg: number): string {
  for (const [threshold, label] of DESCRIPTORS) {
    if (avg >= threshold) return label;
  }
  return DESCRIPTORS[DESCRIPTORS.length - 1][1];
}

export function computeProficiencySummary(
  categories: ChecklistCategory[],
  ratings: Record<string, number | null | undefined>,
): ProficiencySummary {
  let overallSum = 0;
  let overallRated = 0;
  let overallTotal = 0;

  const categorySummaries: CategoryProficiency[] = categories.map((category, catIdx) => {
    let sum = 0;
    let rated = 0;
    category.skills.forEach((_, skillIdx) => {
      const r = ratings[`${catIdx}:${skillIdx}`];
      overallTotal++;
      if (r != null) {
        sum += r;
        rated++;
        overallSum += r;
        overallRated++;
      }
    });
    return {
      title: category.title,
      average: rated > 0 ? sum / rated : null,
      ratedCount: rated,
      totalCount: category.skills.length,
    };
  });

  const overallAverage = overallRated > 0 ? overallSum / overallRated : null;

  return {
    overallAverage,
    overallRatedCount: overallRated,
    overallTotalCount: overallTotal,
    categories: categorySummaries,
    descriptor: overallAverage != null ? describeAverage(overallAverage) : "Not yet rated",
  };
}
