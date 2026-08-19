import { ProficiencyRatings } from "@/components/ChecklistTable";

// Long checklists (some run 250-380 items) can take a real candidate many
// minutes to work through. Without this, a refresh, accidental back-nav, or
// a tab left open too long wipes every rating with no way to recover it.
// We persist in-progress ratings to localStorage, scoped per checklist slug,
// and clear them the moment a submission succeeds so nothing personal lingers
// on a shared or public computer.

const STORAGE_PREFIX = "hsc-ratings:";

interface StoredProgress {
  totalSkills: number;
  ratings: ProficiencyRatings;
  savedAt: number;
}

function storageKey(slug: string) {
  return `${STORAGE_PREFIX}${slug}`;
}

export function loadRatings(slug: string, totalSkills: number): ProficiencyRatings | null {
  try {
    const raw = window.localStorage.getItem(storageKey(slug));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredProgress;
    // If the checklist's item count has changed since this was saved (content
    // update on our end), the old category:skill index keys may no longer
    // line up with the right skills — discard rather than risk showing wrong
    // ratings against wrong skills.
    if (parsed.totalSkills !== totalSkills || !parsed.ratings) return null;
    return parsed.ratings;
  } catch {
    // Private browsing, storage disabled, or corrupt JSON — fail silently,
    // the checklist still works, it just won't resume.
    return null;
  }
}

export function saveRatings(slug: string, totalSkills: number, ratings: ProficiencyRatings) {
  try {
    const payload: StoredProgress = { totalSkills, ratings, savedAt: Date.now() };
    window.localStorage.setItem(storageKey(slug), JSON.stringify(payload));
  } catch {
    // Storage full or unavailable — silently skip, nothing else depends on this.
  }
}

export function clearRatings(slug: string) {
  try {
    window.localStorage.removeItem(storageKey(slug));
  } catch {
    // Nothing to do if storage isn't available.
  }
}
