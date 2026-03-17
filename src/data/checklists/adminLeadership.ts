import { ChecklistSpec } from "../checklistData";

export const adminLeadershipChecklists: ChecklistSpec[] = [
  { slug: "case-management", title: "Case Management / Utilization Skills Checklist", shortTitle: "Case Management", icon: "📂", group: "Administration & Leadership", categories: [
    { title: "Setting", skills: [
      { name: "Acute Care" }, { name: "Skilled/LTAC" }, { name: "MDS Coordinator" }, { name: "Home Health" }, { name: "Telephonic" }, { name: "Workers Compensation" }, { name: "Insurance/Managed Care" },
    ]},
    { title: "Utilization Review", skills: [
      { name: "InterQual Criteria" }, { name: "Milliman Criteria" }, { name: "Medical Necessity Review" }, { name: "Concurrent Review" }, { name: "Retrospective Review" }, { name: "Denial Management" }, { name: "Appeals Process" },
    ]},
    { title: "Discharge Planning", skills: [
      { name: "Assessment of Post-Acute Needs" }, { name: "SNF Placement" }, { name: "Home Health Referral" }, { name: "DME Coordination" }, { name: "Hospice Referral" }, { name: "Insurance Authorization" },
    ]},
    { title: "Documentation", skills: [
      { name: "Electronic Medical Record" }, { name: "Care Plans" }, { name: "Clinical Summaries" }, { name: "Progress Notes" }, { name: "Medicare/Medicaid Documentation" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "healthcare-leadership", title: "Healthcare Leadership Competencies Checklist", shortTitle: "Healthcare Leadership", icon: "🎯", group: "Administration & Leadership", categories: [
    { title: "Relationship Management", skills: [
      { name: "Organizational structure and relationship" }, { name: "Build collaborative relationships" }, { name: "Develop and maintain medical staff relationships" }, { name: "Provide internal customer service" }, { name: "Vendor/contractor relationship management" },
    ]},
    { title: "Communication", skills: [
      { name: "Written communication" }, { name: "Oral communication" }, { name: "Presentation skills" }, { name: "Facilitation skills" }, { name: "Media relations" },
    ]},
    { title: "Leadership", skills: [
      { name: "Change management" }, { name: "Performance management" }, { name: "Succession planning" }, { name: "Staff development" }, { name: "Team building" }, { name: "Conflict resolution" }, { name: "Strategic planning" },
    ]},
    { title: "Professional Development", skills: [
      { name: "Continuing education" }, { name: "Professional associations" }, { name: "Mentoring" }, { name: "Ethics and compliance" }, { name: "Cultural competence" },
    ]},
    { title: "Business Knowledge", skills: [
      { name: "Financial management" }, { name: "Budgeting" }, { name: "Revenue cycle" }, { name: "Quality improvement" }, { name: "Risk management" }, { name: "Regulatory compliance" }, { name: "Information systems" },
    ]},
  ]},

  { slug: "social-worker", title: "Social Worker Skills Checklist", shortTitle: "Social Worker", icon: "🤝", group: "Administration & Leadership", categories: [
    { title: "Knowledge of Assessment Process", skills: [
      { name: "Psychosocial assessment (social history, living situation, support systems, decision making, communication, mental illness, family discord)" },
    ]},
    { title: "Communication Abilities", skills: [
      { name: "Develop and maintain communication on complex matters" }, { name: "Communicate effectively with diverse populations" }, { name: "Crisis communication" }, { name: "Family meetings/conferences" }, { name: "Interdisciplinary team communication" },
    ]},
    { title: "Discharge Planning", skills: [
      { name: "Assessment of post-acute needs" }, { name: "Community resource identification" }, { name: "SNF/Rehab placement" }, { name: "Home health coordination" }, { name: "Hospice referral" }, { name: "Financial assistance programs" },
    ]},
    { title: "Crisis Intervention", skills: [
      { name: "Suicide risk assessment" }, { name: "Domestic violence screening" }, { name: "Child/Elder abuse reporting" }, { name: "Substance abuse intervention" }, { name: "Grief/bereavement counseling" },
    ]},
    { title: "Legal/Ethical", skills: [
      { name: "Advance directives" }, { name: "Guardianship/Conservatorship" }, { name: "Patient rights" }, { name: "Mandatory reporting" }, { name: "HIPAA compliance" }, { name: "Informed consent" },
    ]},
  ]},
];
