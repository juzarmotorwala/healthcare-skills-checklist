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
  zipCode: string;
  // Optional — if set, the hiring facility/agency also gets emailed a copy
  // of the completed PDF automatically when the candidate submits.
  hiringFacilityEmail: string;
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
    if (field === "phone") {
      value = value.replace(/[^\d+\-() ]/g, "");
    }
    if (field === "zipCode") {
      value = value.replace(/[^\d-]/g, "").slice(0, 10);
    }
    onChange({ ...info, [field]: value });
  };

  return (
    <div className="space-y-4">
    <div className="bg-card rounded-lg border shadow-sm p-5">
      <h2 className="font-serif text-lg text-foreground mb-4">Healthcare Professional Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
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
            value={info.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">
            City <span className="text-destructive">*</span>
          </Label>
          <Input
            id="city"
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
          <Label htmlFor="zipCode">
            Zip Code <span className="text-destructive">*</span>
          </Label>
          <Input
            id="zipCode"
            inputMode="numeric"
            value={info.zipCode}
            onChange={(e) => update("zipCode", e.target.value)}
          />
        </div>
      </div>
    </div>

    <div className="bg-card rounded-lg border shadow-sm p-5">
      <h2 className="font-serif text-lg text-foreground mb-1">Hiring Facility / Agency</h2>
      <p className="text-xs text-muted-foreground mb-4">
        Optional. We'll email them a copy of your results too.
      </p>
      <div className="space-y-1.5">
        <Label htmlFor="hiringFacilityEmail">Email Address</Label>
        <Input
          id="hiringFacilityEmail"
          type="email"
          value={info.hiringFacilityEmail}
          onChange={(e) => update("hiringFacilityEmail", e.target.value)}
        />
      </div>
    </div>
    </div>
  );
}
