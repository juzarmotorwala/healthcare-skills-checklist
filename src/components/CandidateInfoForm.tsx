import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface CandidateInfo {
  fullName: string;
  email: string;
  lastFourSSN: string;
  dob: string;
}

interface CandidateInfoFormProps {
  info: CandidateInfo;
  onChange: (info: CandidateInfo) => void;
}

export default function CandidateInfoForm({ info, onChange }: CandidateInfoFormProps) {
  const update = (field: keyof CandidateInfo, value: string) => {
    if (field === "lastFourSSN") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }
    onChange({ ...info, [field]: value });
  };

  return (
    <div className="bg-card rounded-lg border shadow-sm p-5">
      <h2 className="font-serif text-lg text-foreground mb-4">Candidate Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            value={info.fullName}
            onChange={(e) => update("fullName", e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={info.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ssn">
            Last 4 of SSN <span className="text-destructive">*</span>
          </Label>
          <Input
            id="ssn"
            placeholder="••••"
            inputMode="numeric"
            maxLength={4}
            value={info.lastFourSSN}
            onChange={(e) => update("lastFourSSN", e.target.value)}
            className="font-mono tracking-widest"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="dob">
            Date of Birth <span className="text-destructive">*</span>
          </Label>
          <Input
            id="dob"
            type="date"
            value={info.dob}
            onChange={(e) => update("dob", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
