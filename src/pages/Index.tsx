import { Link } from "react-router-dom";
import { useState } from "react";
import { checklists, specialtyGroups, getChecklistsByGroup } from "@/data/checklistData";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Index() {
  const [search, setSearch] = useState("");

  const filteredByGroup = specialtyGroups.map(group => ({
    group,
    items: getChecklistsByGroup(group).filter(c =>
      c.shortTitle.toLowerCase().includes(search.toLowerCase()) ||
      c.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(g => g.items.length > 0);

  const totalChecklists = checklists.length;
  const displayedTotal = Math.floor(totalChecklists / 5) * 5;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/brand/monogram.png"
              alt="BrothersTech"
              className="h-12 w-12"
            />
            <img
              src="/brand/wordmark.png"
              alt="Brotherstech"
              className="h-7 sm:h-8 w-auto"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-foreground mb-4 tracking-tight">
            Healthcare Skills
            <br />
            <span className="text-primary">Competency Portal</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Comprehensive Skills Checklists For Healthcare Professionals.
            <br />
            Self-Assess Your Competencies Across {displayedTotal}+ Clinical Specialties.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search specialties..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 h-11 bg-card shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Directory */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {filteredByGroup.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No checklists match "{search}"</p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredByGroup.map(({ group, items }, gIdx) => (
              <section key={group} className="animate-fade-in" style={{ animationDelay: `${gIdx * 80}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-serif text-foreground">{group}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map(item => {
                    const hasContent = item.categories.length > 0;
                    return (
                      <Link
                        key={item.slug}
                        to={`/checklist/${item.slug}`}
                        className="group flex items-center gap-3 bg-card border rounded-lg px-4 py-3 hover:shadow-md hover:border-primary/30 transition-all duration-200"
                      >
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                            {item.shortTitle}
                          </p>
                          {!hasContent && (
                            <p className="text-xs text-muted-foreground">Coming soon</p>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-xs text-muted-foreground">
            Healthcare Skills Competency Portal — BrothersTech Inc. All Rights Reserved {new Date().getFullYear()}.
          </p>
        </div>
      </footer>
    </div>
  );
}
