import { useParams, Link } from "react-router-dom";
import { getChecklistBySlug } from "@/data/checklistData";
import ChecklistTable from "@/components/ChecklistTable";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChecklistPage() {
  const { slug } = useParams<{ slug: string }>();
  const checklist = slug ? getChecklistBySlug(slug) : undefined;

  if (!checklist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-4xl">🔍</p>
          <h1 className="text-2xl font-serif text-foreground">Checklist Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const hasContent = checklist.categories.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">All Checklists</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="text-lg">{checklist.icon}</span>
          <h1 className="font-serif text-lg text-foreground truncate">
            {checklist.shortTitle}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">
            {checklist.title}
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            Rate your proficiency for each skill using the 1–4 scale below. This
            checklist serves as a guideline for client facilities to assess your
            experience level.
          </p>
        </div>

        {hasContent ? (
          <ChecklistTable categories={checklist.categories} />
        ) : (
          <div className="bg-card border rounded-xl p-12 text-center space-y-4">
            <ClipboardList className="h-12 w-12 mx-auto text-muted-foreground/40" />
            <h2 className="text-xl font-serif text-foreground">
              Checklist Coming Soon
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              The skills checklist for <strong>{checklist.shortTitle}</strong> is
              currently being prepared. Check back soon for the full competency list.
            </p>
            <Link to="/">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Browse Other Checklists
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
