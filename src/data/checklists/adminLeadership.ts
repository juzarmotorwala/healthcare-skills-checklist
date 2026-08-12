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

  { slug: "clinical-documentation-specialist", title: "Clinical Documentation Specialist Skills Checklist", shortTitle: "CDS", icon: "📄", group: "Administration & Leadership", categories: [
    { title: "Documentation Review", skills: [
      { name: "Concurrent chart review" }, { name: "Clinical indicator identification" }, { name: "Query formulation (physician queries)" }, { name: "DRG/severity of illness validation" },
    ]},
    { title: "Coding & Compliance", skills: [
      { name: "ICD-10-CM/PCS familiarity" }, { name: "CMS documentation guidelines" }, { name: "Coding compliance standards" }, { name: "Case mix index impact awareness" },
    ]},
    { title: "Systems & Collaboration", skills: [
      { name: "EMR/CDI software platforms" }, { name: "Physician education and collaboration" }, { name: "Coding department liaison" },
    ]},
  ]},

  { slug: "nursing-informatics", title: "Nursing Informatics Skills Checklist", shortTitle: "Informatics", icon: "💻", group: "Administration & Leadership", categories: [
    { title: "EMR & Systems", skills: [
      { name: "EMR build/configuration support" }, { name: "Clinical workflow analysis" }, { name: "Order set development" }, { name: "Clinical decision support tools" },
    ]},
    { title: "Implementation & Training", skills: [
      { name: "System go-live support" }, { name: "End-user training" }, { name: "Super-user program coordination" }, { name: "Downtime procedure planning" },
    ]},
    { title: "Data & Quality", skills: [
      { name: "Data analytics/reporting" }, { name: "Quality metrics extraction" }, { name: "Interoperability standards (HL7, FHIR)" },
    ]},
  ]},

  { slug: "director-patient-care-services", title: "Director of Patient Care Services Skills Checklist", shortTitle: "Director of Patient Care", icon: "🏛️", group: "Administration & Leadership", categories: [
    { title: "Strategic Leadership", skills: [
      { name: "Multi-unit oversight" }, { name: "Strategic planning" }, { name: "Budget and financial management" }, { name: "Regulatory/accreditation oversight" },
    ]},
    { title: "Operations", skills: [
      { name: "Nurse manager supervision" }, { name: "Staffing model development" }, { name: "Capacity/patient flow management" }, { name: "Emergency preparedness planning" },
    ]},
    { title: "Quality & Culture", skills: [
      { name: "Quality and safety program oversight" }, { name: "Patient experience initiatives" }, { name: "Staff engagement and culture building" }, { name: "Interdisciplinary collaboration" },
    ]},
  ]},

  { slug: "credentialing-specialist", title: "Credentialing Specialist Skills Checklist", shortTitle: "Credentialing Specialist", icon: "📋", group: "Administration & Leadership", categories: [
    { title: "Credentialing & Privileging", skills: [
      { name: "Primary source verification" }, { name: "Provider application processing" }, { name: "Privileging coordination" }, { name: "Re-credentialing cycle management" }, { name: "NPDB/OIG sanction checks" },
    ]},
    { title: "Compliance & Systems", skills: [
      { name: "Joint Commission/NCQA credentialing standards" }, { name: "Payer enrollment coordination" }, { name: "Credentialing software (e.g., CAQH, Symplr)" }, { name: "Expirable tracking (licenses, certifications)" },
    ]},
    { title: "Communication", skills: [
      { name: "Provider communication and follow-up" }, { name: "Medical staff office coordination" }, { name: "Audit support" },
    ]},
  ]},

  { slug: "medical-coder", title: "Medical Coder Skills Checklist", shortTitle: "Medical Coder", icon: "🧾", group: "Administration & Leadership", categories: [
    { title: "Coding", skills: [
      { name: "ICD-10-CM diagnosis coding" }, { name: "ICD-10-PCS/CPT procedure coding" }, { name: "HCC/risk adjustment coding" }, { name: "DRG assignment" }, { name: "Modifier application" },
    ]},
    { title: "Compliance & Quality", skills: [
      { name: "Coding compliance guidelines" }, { name: "Chart audit and accuracy review" }, { name: "Denial/appeal support" }, { name: "Documentation query collaboration" },
    ]},
    { title: "Systems", skills: [
      { name: "Encoder software" }, { name: "EMR chart abstraction" }, { name: "Coding productivity standards" },
    ]},
  ]},

  { slug: "medical-transcriptionist", title: "Medical Transcriptionist Skills Checklist", shortTitle: "Medical Transcriptionist", icon: "⌨️", group: "Administration & Leadership", categories: [
    { title: "Transcription", skills: [
      { name: "Physician dictation transcription" }, { name: "Medical terminology accuracy" }, { name: "Speech recognition editing" }, { name: "Report formatting standards" },
    ]},
    { title: "Specialty Reports", skills: [
      { name: "Operative reports" }, { name: "Discharge summaries" }, { name: "History and physical reports" }, { name: "Consultation notes" },
    ]},
    { title: "Compliance & Systems", skills: [
      { name: "HIPAA compliance" }, { name: "EMR/dictation software platforms" }, { name: "Turnaround time standards" },
    ]},
  ]},

  { slug: "patient-access-rep", title: "Patient Access Representative Skills Checklist", shortTitle: "Patient Access Rep", icon: "🗂️", group: "Administration & Leadership", categories: [
    { title: "Registration & Scheduling", skills: [
      { name: "Patient registration" }, { name: "Appointment scheduling" }, { name: "Insurance verification" }, { name: "Pre-authorization coordination" },
    ]},
    { title: "Financial", skills: [
      { name: "Point-of-service collections" }, { name: "Financial counseling referral" }, { name: "Charity care/payment plan assistance" },
    ]},
    { title: "Customer Service & Systems", skills: [
      { name: "Patient customer service" }, { name: "EMR/registration software" }, { name: "HIPAA and consent form processing" },
    ]},
  ]},

  { slug: "patient-safety-specialist", title: "Patient Safety Specialist Skills Checklist", shortTitle: "Patient Safety Specialist", icon: "✅", group: "Administration & Leadership", categories: [
    { title: "Safety Program Management", skills: [
      { name: "Patient safety event investigation" }, { name: "Root cause analysis facilitation" }, { name: "Failure mode and effects analysis (FMEA)" }, { name: "Safety culture surveys" },
    ]},
    { title: "Accreditation & Compliance", skills: [
      { name: "Joint Commission National Patient Safety Goals" }, { name: "CMS Conditions of Participation" }, { name: "Accreditation survey preparation" }, { name: "Policy development and review" },
    ]},
    { title: "Education & Reporting", skills: [
      { name: "Staff safety education" }, { name: "Event reporting system management" }, { name: "Leadership safety reporting/dashboards" },
    ]},
  ]},

  { slug: "executive-assistant", title: "Executive Assistant Skills Checklist", shortTitle: "Executive Assistant", icon: "🗓️", group: "Administration & Leadership", categories: [
    { title: "Administrative Support", skills: [
      { name: "Calendar and scheduling management" }, { name: "Travel coordination" }, { name: "Correspondence drafting" }, { name: "Meeting/board preparation" }, { name: "Minute taking" },
    ]},
    { title: "Office & Project Management", skills: [
      { name: "Project tracking and follow-up" }, { name: "Budget/expense report processing" }, { name: "Vendor coordination" }, { name: "Confidential document handling" },
    ]},
    { title: "Systems & Communication", skills: [
      { name: "Microsoft Office/Google Workspace proficiency" }, { name: "Executive-level communication" }, { name: "Discretion with confidential information" },
    ]},
  ]},
];
