export interface ChecklistSkill {
  name: string;
}

export interface ChecklistCategory {
  title: string;
  skills: ChecklistSkill[];
}

export interface ChecklistSpec {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  group: string;
  categories: ChecklistCategory[];
}

// Groups for landing page organization
export const specialtyGroups = [
  "Nursing",
  "Critical Care",
  "Surgical",
  "Pediatric & Maternal",
  "Therapy & Rehab",
  "Diagnostic & Lab",
  "Specialty Care",
  "Administration & Leadership",
  "Allied Health",
] as const;

import { nursingChecklists } from "./checklists/nursing";
import { criticalCareChecklists } from "./checklists/criticalCare";
import { surgicalChecklists } from "./checklists/surgical";
import { pediatricMaternalChecklists } from "./checklists/pediatricMaternal";
import { therapyRehabChecklists } from "./checklists/therapyRehab";
import { diagnosticLabChecklists } from "./checklists/diagnosticLab";
import { specialtyCareChecklists } from "./checklists/specialtyCare";
import { adminLeadershipChecklists } from "./checklists/adminLeadership";
import { alliedHealthChecklists } from "./checklists/alliedHealth";
import { newAdditionsChecklists } from "./checklists/newAdditions";
import { reliasBatch1Checklists } from "./checklists/reliasBatch1";
import { reliasBatch2Checklists } from "./checklists/reliasBatch2";
import { reliasBatch3Checklists } from "./checklists/reliasBatch3";
import { reliasBatch4Checklists } from "./checklists/reliasBatch4";
import { reliasBatch5Checklists } from "./checklists/reliasBatch5";
import { reliasBatch6Checklists } from "./checklists/reliasBatch6";
import { reliasBatch7Checklists } from "./checklists/reliasBatch7";
import { reliasBatch8Checklists } from "./checklists/reliasBatch8";

export const checklists: ChecklistSpec[] = [
  ...nursingChecklists,
  ...criticalCareChecklists,
  ...surgicalChecklists,
  ...pediatricMaternalChecklists,
  ...therapyRehabChecklists,
  ...diagnosticLabChecklists,
  ...specialtyCareChecklists,
  ...adminLeadershipChecklists,
  ...alliedHealthChecklists,
  ...newAdditionsChecklists,
  ...reliasBatch1Checklists,
  ...reliasBatch2Checklists,
  ...reliasBatch3Checklists,
  ...reliasBatch4Checklists,
  ...reliasBatch5Checklists,
  ...reliasBatch6Checklists,
  ...reliasBatch7Checklists,
  ...reliasBatch8Checklists,
];

export function getChecklistBySlug(slug: string): ChecklistSpec | undefined {
  return checklists.find(c => c.slug === slug);
}

export function getChecklistsByGroup(group: string): ChecklistSpec[] {
  return checklists.filter(c => c.group === group);
}
