import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { ChecklistCategory } from "@/data/checklistData";
import { ChevronDown, ChevronRight } from "lucide-react";
import { toTitleCase } from "@/lib/titleCase";
import { loadRatings, saveRatings, clearRatings } from "@/lib/checklistStorage";
import { toast } from "@/hooks/use-toast";

// Keyed by "categoryIndex:skillIndex" rather than skill name — some checklists
// have two skills sharing the same name in different categories (or even the
// same category), and name-based keys silently merged those into one entry.
export interface ProficiencyRatings {
  [positionKey: string]: number | null;
}

interface ChecklistTableProps {
  categories: ChecklistCategory[];
  // Used to namespace saved progress in localStorage — see checklistStorage.ts.
  slug: string;
  // Called with the freshly-computed rated count whenever a rating changes.
  // We pass the value directly rather than making the parent read it off a
  // ref during its own render — refs are only guaranteed fresh *after* the
  // child has committed, and a parent reading tableRef.current mid-render
  // was seeing last click's value, one click behind (submit button could
  // get stuck disabled forever on the very last skill rated).
  onRatingChange?: (ratedCount: number) => void;
}

export interface ChecklistTableHandle {
  getRatings: () => ProficiencyRatings;
  getTotalSkills: () => number;
  getRatedCount: () => number;
  // Called after a successful submission so saved progress doesn't linger
  // in localStorage on a shared/public computer.
  clearSavedProgress: () => void;
  // Expands the category (if collapsed) containing the first unrated skill,
  // scrolls to it, and briefly highlights it — so a candidate stuck on
  // "rate every skill" can see exactly what's missing without guessing.
  scrollToFirstUnrated: () => boolean;
}

const proficiencyLabels = [
  "No Experience",
  "Need Training",
  "With Supervision",
  "Independent",
];

const proficiencyColors = [
  "bg-muted text-muted-foreground",
  "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
];

const skillKey = (catIdx: number, skillIdx: number) => `${catIdx}:${skillIdx}`;

// Skill names in the underlying data are not consistently capitalized. Rather
// than hand-edit hundreds of entries across every checklist file, apply a
// smart Title Case at render time so display is uniform regardless of
// source casing (see src/lib/titleCase.ts for the acronym-aware rules).

const ChecklistTable = forwardRef<ChecklistTableHandle, ChecklistTableProps>(
  ({ categories, slug, onRatingChange }, ref) => {
    const totalSkills = categories.reduce((sum, cat) => sum + cat.skills.length, 0);

    // Lazy initializer so the very first render already reflects any saved
    // progress for this checklist — avoids a flash of an empty table.
    const [ratings, setRatings] = useState<ProficiencyRatings>(
      () => loadRatings(slug, totalSkills) ?? {}
    );
    const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});
    // Briefly highlighted after scrollToFirstUnrated locates a missing skill.
    const [highlightedKey, setHighlightedKey] = useState<string | null>(null);

    const ratedSkills = Object.values(ratings).filter(v => v !== null && v !== undefined).length;
    const progressPercent = totalSkills > 0 ? Math.round((ratedSkills / totalSkills) * 100) : 0;

    // Let the parent know about restored progress on mount, so the submit
    // button's rated count stays in sync with what we just loaded.
    useEffect(() => {
      if (ratedSkills > 0) {
        onRatingChange?.(ratedSkills);
        toast({
          title: "Resumed your saved progress",
          description: `${ratedSkills} of ${totalSkills} skills were already rated on this device.`,
        });
      }
      // Only ever run this once, right after mount.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => ({
      getRatings: () => ratings,
      getTotalSkills: () => totalSkills,
      getRatedCount: () => ratedSkills,
      clearSavedProgress: () => clearRatings(slug),
      scrollToFirstUnrated: () => {
        for (let catIdx = 0; catIdx < categories.length; catIdx++) {
          const cat = categories[catIdx];
          for (let skillIdx = 0; skillIdx < cat.skills.length; skillIdx++) {
            const key = skillKey(catIdx, skillIdx);
            if (ratings[key] == null) {
              setCollapsed(prev => (prev[catIdx] ? { ...prev, [catIdx]: false } : prev));
              setHighlightedKey(key);
              // Let the category expand (if it was collapsed) before scrolling,
              // otherwise the target row isn't in the DOM yet.
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document
                    .getElementById(`skill-${key}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                });
              });
              setTimeout(() => {
                setHighlightedKey(prev => (prev === key ? null : prev));
              }, 2500);
              return true;
            }
          }
        }
        return false;
      },
    }));

    const toggleCategory = (catIdx: number) => {
      setCollapsed(prev => ({ ...prev, [catIdx]: !prev[catIdx] }));
    };

    // Always sets the clicked value — earlier versions toggled a rating back
    // to null if the same button was clicked twice, meant as a quiet "undo".
    // In practice a candidate could trigger that unintentionally (an
    // impatient re-tap, a double-click) and lose a rating with no visible
    // cause, leaving "missing information" on submit with no way for them to
    // know why. Removing the toggle removes that failure mode entirely.
    const setRating = (key: string, value: number) => {
      const next = { ...ratings, [key]: value };
      setRatings(next);
      saveRatings(slug, totalSkills, next);
      const nextRatedCount = Object.values(next).filter(v => v !== null && v !== undefined).length;
      onRatingChange?.(nextRatedCount);
      if (highlightedKey === key) setHighlightedKey(null);
    };

    const allRated = ratedSkills === totalSkills && totalSkills > 0;

    return (
      <div className="space-y-4">
        {/* Progress bar */}
        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Progress: {ratedSkills} of {totalSkills} skills rated
            </span>
            <span className={`text-sm font-semibold ${allRated ? "text-emerald-600" : "text-primary"}`}>
              {progressPercent}%
            </span>
          </div>
          <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out ${allRated ? "bg-emerald-500" : "bg-primary"}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {!allRated && (
            <p className="text-xs text-muted-foreground mt-2">
              All skills must be rated to submit
            </p>
          )}
        </div>

        {/* Proficiency legend */}
        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <p className="text-sm font-medium text-foreground mb-2">Proficiency Scale</p>
          <div className="flex flex-wrap gap-2">
            {proficiencyLabels.map((label, i) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${proficiencyColors[i]}`}
              >
                <span className="font-bold">{i + 1}</span> {label}
              </span>
            ))}
          </div>
        </div>

        {/* Categories */}
        {categories.map((category, catIdx) => {
          const isCollapsed = collapsed[catIdx];
          const catRated = category.skills.filter((_, skillIdx) => ratings[skillKey(catIdx, skillIdx)] != null).length;

          return (
            <div
              key={catIdx}
              className="bg-card rounded-lg border shadow-sm overflow-hidden animate-fade-in"
              style={{ animationDelay: `${catIdx * 60}ms` }}
            >
              <button
                onClick={() => toggleCategory(catIdx)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {isCollapsed ? (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-primary" />
                  )}
                  <h3 className="font-semibold text-foreground font-sans text-sm">
                    {category.title}
                  </h3>
                </div>
                <span className={`text-xs ${catRated === category.skills.length ? "text-emerald-600 font-semibold" : "text-muted-foreground"}`}>
                  {catRated}/{category.skills.length}
                </span>
              </button>

              {!isCollapsed && (
                <div className="border-t">
                  <div className="hidden sm:grid grid-cols-[1fr_repeat(4,3rem)] gap-1 px-4 py-2 bg-muted/50 text-xs font-medium text-muted-foreground">
                    <span>Skill</span>
                    {[1, 2, 3, 4].map(n => (
                      <span key={n} className="text-center">{n}</span>
                    ))}
                  </div>
                  {category.skills.map((skill, skillIdx) => {
                    const key = skillKey(catIdx, skillIdx);
                    const isHighlighted = highlightedKey === key;
                    return (
                      <div
                        key={key}
                        id={`skill-${key}`}
                        className={`grid grid-cols-1 sm:grid-cols-[1fr_repeat(4,3rem)] gap-1 px-4 py-3 items-center transition-colors ${
                          isHighlighted
                            ? "ring-2 ring-amber-400 bg-amber-50 dark:bg-amber-950/30"
                            : `${skillIdx % 2 === 0 ? "bg-card" : "bg-muted/20"} hover:bg-accent/30`
                        }`}
                      >
                        <span className="text-base font-medium text-foreground">{toTitleCase(skill.name)}</span>
                        <div className="flex sm:contents gap-2 mt-1.5 sm:mt-0">
                          {[1, 2, 3, 4].map(level => {
                            const isSelected = ratings[key] === level;
                            return (
                              <button
                                key={level}
                                onClick={() => setRating(key, level)}
                                className={`h-10 w-10 sm:h-9 sm:w-9 mx-auto rounded-md text-base font-bold transition-all duration-150 ${
                                  isSelected
                                    ? proficiencyColors[level - 1] + " ring-2 ring-primary/30 scale-110"
                                    : "bg-muted/50 text-muted-foreground hover:bg-accent"
                                }`}
                                aria-label={`Rate ${toTitleCase(skill.name)} as ${proficiencyLabels[level - 1]}`}
                              >
                                {level}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

ChecklistTable.displayName = "ChecklistTable";
export default ChecklistTable;
