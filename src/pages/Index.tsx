import { Link } from "react-router-dom";
import { useState } from "react";
import { checklists, specialtyGroups, getChecklistsByGroup } from "@/data/checklistData";
import { Search, ArrowRight, ClipboardCheck, ListChecks, FileDown, Users } from "lucide-react";
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
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <ClipboardCheck className="h-9 w-9 text-primary" />
            <span className="text-lg sm:text-xl font-serif text-foreground">
              Healthcare Skills Checklist
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-foreground mb-4 tracking-tight">
            Your healthcare skills,
            <br />
            <span className="text-primary">documented once.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto mb-2 text-sm sm:text-base leading-relaxed">
            Free, self-guided skills checklists across {displayedTotal}+ clinical specialties.
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Rate your experience, download a clean PDF, and bring it to every application. No account needed.
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

      {/* How it works */}
      <section className="border-b bg-card/40">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="mx-auto h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <ListChecks className="h-4.5 w-4.5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">1. Pick your specialty</p>
              <p className="text-xs text-muted-foreground max-w-[220px] mx-auto">
                Choose from checklists built for your role — ICU nursing, radiology, physical therapy, and more.
              </p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardCheck className="h-4.5 w-4.5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">2. Rate your skills</p>
              <p className="text-xs text-muted-foreground max-w-[220px] mx-auto">
                Walk through real, job-specific skills and rate your comfort level with each one.
              </p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <FileDown className="h-4.5 w-4.5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">3. Get your PDF</p>
              <p className="text-xs text-muted-foreground max-w-[220px] mx-auto">
                Download a polished summary, and we'll email you a copy too — ready for any application.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* For recruiters */}
      <section className="border-t bg-card/40">
        <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">For recruiters: speed up your intake</p>
            <p className="text-xs text-muted-foreground mt-1">
              Share a checklist link with candidates before your first call. They arrive with a documented
              skills profile, so you spend less time on paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Healthcare Skills Checklist. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
