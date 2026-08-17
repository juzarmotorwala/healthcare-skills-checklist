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

  { slug: "psychologist", title: "Psychologist Skills Checklist", shortTitle: "Psychologist", icon: "🧠", group: "Administration & Leadership", categories: [
    { title: "Assessment", skills: [
      { name: "Psychological/diagnostic assessment" }, { name: "Cognitive/neuropsychological testing" }, { name: "Risk assessment (suicide/homicide)" }, { name: "Substance use assessment" },
    ]},
    { title: "Therapeutic Intervention", skills: [
      { name: "Individual psychotherapy" }, { name: "Group therapy facilitation" }, { name: "Cognitive behavioral therapy (CBT)" }, { name: "Crisis intervention counseling" }, { name: "Family therapy" },
    ]},
    { title: "Crisis Management", skills: [
      { name: "De-escalation techniques" }, { name: "Involuntary commitment evaluation" }, { name: "Safety planning" },
    ]},
    { title: "Documentation & Ethics", skills: [
      { name: "Clinical documentation/treatment planning" }, { name: "HIPAA and confidentiality compliance" }, { name: "Interdisciplinary team collaboration" }, { name: "Ethical/legal standards of practice" },
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

  { slug: "laboratory-director", title: "Laboratory Director Skills Checklist", shortTitle: "Laboratory Director", icon: "🔬", group: "Administration & Leadership", categories: [
    { title: "Operations Leadership", skills: [
      { name: "Multi-department lab oversight (chemistry, hematology, micro, blood bank)" }, { name: "Staffing and scheduling management" }, { name: "Budget and capital equipment planning" }, { name: "Vendor/contract management" },
    ]},
    { title: "Quality & Compliance", skills: [
      { name: "CAP/CLIA accreditation oversight" }, { name: "Quality assurance program management" }, { name: "Proficiency testing oversight" }, { name: "Regulatory survey preparedness" },
    ]},
    { title: "Technical Oversight", skills: [
      { name: "Test menu and method validation" }, { name: "Instrument/technology evaluation" }, { name: "Result turnaround time management" },
    ]},
    { title: "Staff Development", skills: [
      { name: "Staff competency assessment" }, { name: "Continuing education program oversight" }, { name: "Performance management" },
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

  { slug: "medical-coder", title: "Medical Coder/Biller Skills Checklist", shortTitle: "Medical Coder/Biller", icon: "🧾", group: "Administration & Leadership", categories: [
    { title: "Documentation & Health Information Systems", skills: [
      { name: "Utilize CAC (computer assisted coding) software" }, { name: "Analyze medical records for completeness/deficiencies" }, { name: "Identify patient encounter type" }, { name: "Request patient-specific documentation from other sources (ancillary departments, physician's office)" }, { name: "HIM (soft coding) versus Chargemaster (hard coding)" }, { name: "Retrieve medical records" }, { name: "Validate the codes assigned by CAC" }, { name: "Data sets (e.g., demographics, identifiers, etc.)" }, { name: "Compose a compliant physician query" }, { name: "Utilize HIM (Health Information Management) systems" }, { name: "Perform data abstraction for coding" }, { name: "Generate reports for data analysis" }, { name: "Navigate electronic health records (EHRs)" }, { name: "EMR chart abstraction" }, { name: "Encoder software" }, { name: "Word processing, spreadsheets, e-mail" }, { name: "Documentation by place of service (outpatient, emergency, ancillary, observation, same day surgery, clinic, inpatient, recurring/series accounts)" },
    ]},
    { title: "Clinical Knowledge for Coding", skills: [
      { name: "Signs and symptoms" }, { name: "Anatomy and physiology" }, { name: "Pharmacology" }, { name: "Pathophysiology" }, { name: "Medical terminology and abbreviations" }, { name: "Clinical findings" },
    ]},
    { title: "Diagnosis & Procedure Coding", skills: [
      { name: "ICD-10-CM diagnosis coding" }, { name: "ICD-10-PCS/CPT procedure coding" }, { name: "ICD-9-CM" }, { name: "HCPCS" }, { name: "HCC/risk adjustment coding" }, { name: "DRG assignment" }, { name: "Assign correct ambulatory payment classification (APC)" }, { name: "Modifier application" }, { name: "Reconcile NCCI edits" }, { name: "Evaluate National Correct Coding Initiative edits (NCCI)" }, { name: "Inpatient Prospective Payment System (IPPS)" }, { name: "Outpatient Prospective Payment System (OPPS)" }, { name: "Validate medical necessity using LCD/NCD" }, { name: "Evaluate and respond to claim denials" }, { name: "Re-submit denied claims to payer source" }, { name: "Submit claim forms" }, { name: "Coding specificity (third, fourth, or fifth digit)" }, { name: "V-codes and E-codes" }, { name: "Instructional notations and modifiers" },
    ]},
    { title: "Coding References & Guidelines", skills: [
      { name: "AHA Coding Clinics (ICD-9-CM and HCPCS Level II)" }, { name: "AMA CPT Assistant" }, { name: "Medical dictionary and diagnostic reference values" }, { name: "Coding and reporting requirements for inpatient services" }, { name: "Coding and reporting requirements for outpatient services" }, { name: "UHDDS definitions and sequencing" }, { name: "Chart audit and accuracy review" }, { name: "Coding compliance guidelines" }, { name: "Coding productivity standards" },
    ]},
    { title: "Compliance & Regulatory Requirements", skills: [
      { name: "Identify discrepancies between coded data and supporting documentation" }, { name: "Definition of fraud and abuse" }, { name: "Compliance program requirements" }, { name: "Medical necessity and coverage policies (NCD, LCD, ABN)" }, { name: "Corporate Integrity Agreement (CIA)" }, { name: "OIG Work Plans" }, { name: "HIPAA designated code sets" }, { name: "CMS 72-hour rule" }, { name: "JCAHO/Joint Commission and Medicare Conditions of Participation" }, { name: "CMS and OIG regulatory oversight" }, { name: "CMS contractors (e.g., FI, Carrier, QIO)" },
    ]},
    { title: "Data Quality & Revenue Cycle Management", skills: [
      { name: "Correct Coding Initiative (CCI)" }, { name: "Payor types and documentation requirements" }, { name: "Revenue cycle components (registration to payment)" }, { name: "Benchmarking and peer results" }, { name: "Data integrity and abstracted data" }, { name: "Unbilled accounts management (e.g., DNFB)" }, { name: "Outpatient Code Editor (OCE)" }, { name: "Medicare Code Editor (MCE)" }, { name: "Case Mix Index (CMI)" },
    ]},
    { title: "Privacy, Confidentiality & HIPAA", skills: [
      { name: "Maintain secure work environment" }, { name: "Utilize data security and password protection" }, { name: "Recognize/report privacy issues and violations" }, { name: "Transfer electronic data securely" }, { name: "Release of information to authorized individuals" }, { name: "Access only minimal necessary documents/information" },
    ]},
    { title: "Clinical Settings & Specialty Experience", skills: [
      { name: "Physician's office" }, { name: "Inpatient hospital setting (acute care)" }, { name: "Outpatient hospital setting" }, { name: "Payor environment (insurance plans, Medicaid, Medicare)" }, { name: "Emergency department and internal medicine coding" }, { name: "Surgical specialty coding (general, orthopaedic, plastics, cardiovascular/thoracic)" }, { name: "Evaluation and management coding" }, { name: "Family practice, cardiology, dermatology, and OB/GYN coding" },
    ]},
    { title: "Billing, Reimbursement & Insurance", skills: [
      { name: "Denial/appeal support" }, { name: "Documentation query collaboration" }, { name: "Collections and accounts receivable" }, { name: "Patient statements and payment plans" }, { name: "Provider credentialing" }, { name: "Claim editing tools" }, { name: "Remittance advice" }, { name: "Payer and patient refunds" }, { name: "Preauthorizations" }, { name: "Completion of CMS1500 and UB04 claim forms" }, { name: "Medicare, Medicaid, and TRICARE/CHAMPUS" }, { name: "Managed care and commercial payers" }, { name: "Worker's compensation and third-party payers" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Pre-school (3-6 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Young Adult (18-30 years)" }, { name: "Mature Adult (30-60 years)" }, { name: "Elderly (>60 years)" },
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
