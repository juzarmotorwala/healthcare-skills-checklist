import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { ChecklistCategory } from "@/data/checklistData";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface ProficiencyRatings {
  [skillName: string]: number | null;
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

const ChecklistTable = forwardRef<ChecklistTableHandle, ChecklistTableProps>(
  ({ categories, onRatingChange }, ref) => {
    const [ratings, setRatings] = useState<ProficiencyRatings>({});
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

    const totalSkills = categories.reduce((sum, cat) => sum + cat.skills.length, 0);
    const ratedSkills = Object.values(ratings).filter(v => v !== null && v !== undefined).length;
    const progressPercent = totalSkills > 0 ? Math.round((ratedSkills / totalSkills) * 100) : 0;

    useImperativeHandle(ref, () => ({
      getRatings: () => ratings,
      getTotalSkills: () => totalSkills,
      getRatedCount: () => ratedSkills,
    }));

    const toggleCategory = (title: string) => {
      setCollapsed(prev => ({ ...prev, [title]: !prev[title] }));
    };

    const setRating = (skill: string, value: number) => {
      setRatings(prev => ({
        ...prev,
        [skill]: prev[skill] === value ? null : value,
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
              All skills must be rated to save as PDF
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
          const isCollapsed = collapsed[category.title];
          const catRated = category.skills.filter(s => ratings[s.name] != null).length;

          return (
            <div
              key={category.title}
              className="bg-card rounded-lg border shadow-sm overflow-hidden animate-fade-in"
              style={{ animationDelay: `${catIdx * 60}ms` }}
            >
              <button
                onClick={() => toggleCategory(category.title)}
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
                  {category.skills.map((skill, idx) => (
                    <div
                      key={skill.name}
                      className={`grid grid-cols-1 sm:grid-cols-[1fr_repeat(4,3rem)] gap-1 px-4 py-2.5 items-center ${
                        idx % 2 === 0 ? "bg-card" : "bg-muted/20"
                      } hover:bg-accent/30 transition-colors`}
                    >
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <div className="flex sm:contents gap-2 mt-1 sm:mt-0">
                        {[1, 2, 3, 4].map(level => {
                          const isSelected = ratings[skill.name] === level;
                          return (
                            <button
                              key={level}
                              onClick={() => setRating(skill.name, level)}
                              className={`h-8 w-8 sm:h-7 sm:w-7 mx-auto rounded-md text-xs font-semibold transition-all duration-150 ${
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
                  ))}
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
