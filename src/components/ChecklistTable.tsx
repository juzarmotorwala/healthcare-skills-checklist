import { useState, forwardRef, useImperativeHandle } from "react";
import { ChecklistCategory } from "@/data/checklistData";
import { ChevronDown, ChevronRight } from "lucide-react";

// Keyed by "categoryIndex:skillIndex" rather than skill name — some checklists
// have two skills sharing the same name in different categories (or even the
// same category), and name-based keys silently merged those into one entry.
export interface ProficiencyRatings {
  [positionKey: string]: number | null;
}

interface ChecklistTableProps {
  categories: ChecklistCategory[];
  onRatingChange?: () => void;
}

export interface ChecklistTableHandle {
  getRatings: () => ProficiencyRatings;
  getTotalSkills: () => number;
  getRatedCount: () => number;
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

const ChecklistTable = forwardRef<ChecklistTableHandle, ChecklistTableProps>(
  ({ categories, onRatingChange }, ref) => {
    const [ratings, setRatings] = useState<ProficiencyRatings>({});
    const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});

    const totalSkills = categories.reduce((sum, cat) => sum + cat.skills.length, 0);
    const ratedSkills = Object.values(ratings).filter(v => v !== null && v !== undefined).length;
    const progressPercent = totalSkills > 0 ? Math.round((ratedSkills / totalSkills) * 100) : 0;

    useImperativeHandle(ref, () => ({
      getRatings: () => ratings,
      getTotalSkills: () => totalSkills,
      getRatedCount: () => ratedSkills,
    }));

    const toggleCategory = (catIdx: number) => {
      setCollapsed(prev => ({ ...prev, [catIdx]: !prev[catIdx] }));
    };

    const setRating = (key: string, value: number) => {
      setRatings(prev => ({
        ...prev,
        [key]: prev[key] === value ? null : value,
      }));
      onRatingChange?.();
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
                    return (
                      <div
                        key={key}
                        className={`grid grid-cols-1 sm:grid-cols-[1fr_repeat(4,3rem)] gap-1 px-4 py-3 items-center ${
                          skillIdx % 2 === 0 ? "bg-card" : "bg-muted/20"
                        } hover:bg-accent/30 transition-colors`}
                      >
                        <span className="text-base font-medium text-foreground">{skill.name}</span>
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
                                aria-label={`Rate ${skill.name} as ${proficiencyLabels[level - 1]}`}
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
