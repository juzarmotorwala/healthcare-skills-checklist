import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { getChecklistBySlug } from "@/data/checklistData";
import { downloadSubmissionPdf } from "@/lib/adminPdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, LogOut, Search, ShieldAlert, Loader2 } from "lucide-react";

interface SubmissionRow {
  id: string;
  checklist_slug: string;
  checklist_title: string;
  candidate_name: string;
  candidate_email: string;
  candidate_phone: string;
  candidate_city: string;
  candidate_state: string;
  candidate_last4_ssn: string;
  candidate_dob: string;
  ratings: Record<string, number | null>;
  total_skills: number;
  rated_skills: number;
  email_sent: boolean;
  created_at: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const [rows, setRows] = useState<SubmissionRow[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      if (!data.session) {
        navigate("/admin/login");
        return;
      }
      setAdminEmail(data.session.user.email ?? null);
      setChecking(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/admin/login");
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    if (checking) return;

    supabase
      .from("submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          setLoadError(
            error.message.includes("permission")
              ? "Your account doesn't have access to view submissions. Ask an admin to confirm your email is on the @brotherstechinc.com domain."
              : error.message
          );
          return;
        }
        setRows((data as SubmissionRow[]) ?? []);
      });
  }, [checking]);

  const filtered = useMemo(() => {
    if (!rows) return [];
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.candidate_name.toLowerCase().includes(q) ||
        r.candidate_email.toLowerCase().includes(q) ||
        r.checklist_title.toLowerCase().includes(q)
    );
  }, [rows, search]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const handleDownload = (row: SubmissionRow) => {
    const checklist = getChecklistBySlug(row.checklist_slug);
    downloadSubmissionPdf({
      checklistTitle: row.checklist_title,
      candidateName: row.candidate_name,
      candidateEmail: row.candidate_email,
      candidatePhone: row.candidate_phone,
      candidateCity: row.candidate_city,
      candidateState: row.candidate_state,
      candidateLastFourSSN: row.candidate_last4_ssn,
      candidateDob: row.candidate_dob,
      categories: checklist?.categories ?? [],
      ratings: row.ratings,
      submittedAt: row.created_at,
    });
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/brand/monogram.png" alt="BrothersTech" className="h-7 w-7" />
            <div>
              <h1 className="font-serif text-lg text-foreground leading-tight">
                Submissions
              </h1>
              <p className="text-xs text-muted-foreground">{adminEmail}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-3.5 w-3.5" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {loadError ? (
          <div className="bg-card border rounded-xl p-10 text-center space-y-3">
            <ShieldAlert className="h-10 w-10 mx-auto text-destructive/60" />
            <p className="text-sm text-muted-foreground max-w-md mx-auto">{loadError}</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or checklist..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 bg-card"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {rows === null ? "Loading..." : `${filtered.length} of ${rows.length} submissions`}
              </p>
            </div>

            <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
              {rows === null ? (
                <div className="p-10 flex justify-center">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              ) : filtered.length === 0 ? (
                <div className="p-10 text-center text-sm text-muted-foreground">
                  No submissions yet.
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Candidate</TableHead>
                      <TableHead>Checklist</TableHead>
                      <TableHead>Rated</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead className="text-right">PDF</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <div className="font-medium text-foreground">{row.candidate_name}</div>
                          <div className="text-xs text-muted-foreground">{row.candidate_email}</div>
                          <div className="text-xs text-muted-foreground">{row.candidate_phone}</div>
                        </TableCell>
                        <TableCell className="text-sm">{row.checklist_title}</TableCell>
                        <TableCell className="text-sm">
                          {row.rated_skills}/{row.total_skills}
                        </TableCell>
                        <TableCell>
                          {row.email_sent ? (
                            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Sent</Badge>
                          ) : (
                            <Badge variant="destructive">Failed</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(row.created_at).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => handleDownload(row)}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
