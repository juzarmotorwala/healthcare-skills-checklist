import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface CandidateInfo {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  lastFourSSN: string;
  dob: string;
}

interface CandidateInfoFormProps {
  info: CandidateInfo;
  onChange: (info: CandidateInfo) => void;
}

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

export default function CandidateInfoForm({ info, onChange }: CandidateInfoFormProps) {
  const update = (field: keyof CandidateInfo, value: string) => {
    if (field === "lastFourSSN") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }
    if (field === "phone") {
      value = value.replace(/[^\d+\-() ]/g, "");
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
          <Label htmlFor="phone">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={info.phone}
            onChange={(e) => update("phone", e.target.value)}
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
        <div className="space-y-1.5">
          <Label htmlFor="city">
            City <span className="text-destructive">*</span>
          </Label>
          <Input
            id="city"
            placeholder="Miami"
            value={info.city}
            onChange={(e) => update("city", e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">
            State <span className="text-destructive">*</span>
          </Label>
          <Select value={info.state} onValueChange={(v) => update("state", v)}>
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
      </div>
    </div>
  );
}
