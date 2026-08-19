import { ChecklistSpec } from "../checklistData";

export const adminLeadershipChecklists: ChecklistSpec[] = [
  { slug: "case-management", title: "Case Management / Utilization Skills Checklist", shortTitle: "Case Management", icon: "📂", group: "Administration & Leadership", categories: [
    { title: "Setting", skills: [
      { name: "Acute Care" }, { name: "Skilled/LTAC" }, { name: "MDS Coordinator" }, { name: "Home Health" }, { name: "Telephonic" }, { name: "Workers Compensation" }, { name: "Insurance/Managed Care" }, { name: "Behavioral Health" },
    ]},
    { title: "Utilization Review", skills: [
      { name: "InterQual Criteria" }, { name: "Milliman Criteria" }, { name: "Medical Necessity Review" }, { name: "Concurrent Review" }, { name: "Retrospective Review" }, { name: "Denial Management" }, { name: "Appeals Process" }, { name: "Peer-to-Peer Review Coordination" },
    ]},
    { title: "Discharge Planning", skills: [
      { name: "Assessment of Post-Acute Needs" }, { name: "SNF Placement" }, { name: "Home Health Referral" }, { name: "DME Coordination" }, { name: "Hospice Referral" }, { name: "Insurance Authorization" }, { name: "Transportation Coordination" }, { name: "Follow-Up Appointment Scheduling" },
    ]},
    { title: "Care Coordination", skills: [
      { name: "Interdisciplinary Rounds Participation" }, { name: "Length of Stay Management" }, { name: "Readmission Risk Assessment" }, { name: "Community Resource Referral" }, { name: "Social Determinants of Health Screening" },
    ]},
    { title: "Documentation", skills: [
      { name: "Electronic Medical Record" }, { name: "Care Plans" }, { name: "Clinical Summaries" }, { name: "Progress Notes" }, { name: "Medicare/Medicaid Documentation" }, { name: "InterQual/Milliman Documentation Standards" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "healthcare-leadership", title: "Healthcare Leadership Competencies Checklist", shortTitle: "Healthcare Leadership", icon: "🎯", group: "Administration & Leadership", categories: [
    { title: "Relationship Management", skills: [
      { name: "Organizational Structure and Relationships" }, { name: "Build Collaborative Relationships" }, { name: "Develop and Maintain Medical Staff Relationships" }, { name: "Provide Internal Customer Service" }, { name: "Vendor/Contractor Relationship Management" }, { name: "Community and Stakeholder Relations" },
    ]},
    { title: "Communication", skills: [
      { name: "Written Communication" }, { name: "Oral Communication" }, { name: "Presentation Skills" }, { name: "Facilitation Skills" }, { name: "Media Relations" }, { name: "Crisis Communication" },
    ]},
    { title: "Leadership & People Development", skills: [
      { name: "Change Management" }, { name: "Performance Management" }, { name: "Succession Planning" }, { name: "Staff Development" }, { name: "Team Building" }, { name: "Conflict Resolution" }, { name: "Coaching and Mentoring" }, { name: "Delegation" },
    ]},
    { title: "Strategic Planning", skills: [
      { name: "Strategic Planning" }, { name: "Service Line Growth Strategy" }, { name: "Market Analysis" }, { name: "Population Health Strategy" },
    ]},
    { title: "Professional Development", skills: [
      { name: "Continuing Education" }, { name: "Professional Associations" }, { name: "Mentoring" }, { name: "Ethics and Compliance" }, { name: "Cultural Competence" }, { name: "Diversity, Equity, and Inclusion Leadership" },
    ]},
    { title: "Business & Quality Knowledge", skills: [
      { name: "Financial Management" }, { name: "Budgeting" }, { name: "Revenue Cycle" }, { name: "Quality Improvement" }, { name: "Risk Management" }, { name: "Regulatory Compliance" }, { name: "Information Systems" }, { name: "Value-Based Care Models" },
    ]},
  ]},

  { slug: "social-worker", title: "Social Worker Skills Checklist", shortTitle: "Social Worker", icon: "🤝", group: "Administration & Leadership", categories: [
    { title: "Assessment & Treatment Planning", skills: [
      { name: "Psychosocial assessment (social history, living situation, support systems, decision making, communication, mental illness, family discord)" }, { name: "Perform risk assessment" }, { name: "Consider culture during assessment and treatment planning" }, { name: "Engage patient in intake process" }, { name: "Recognize indicators of behavioral dysfunction and mental illness" }, { name: "Assess support structure" }, { name: "Present problem identification" }, { name: "Knowledge of environmental effects on patient behavior" }, { name: "Assess patient/family dynamics and functioning" }, { name: "Recognize indicators of addiction and substance abuse" }, { name: "Assess nature, severity, and danger of patient's crisis" }, { name: "Match intervention with patient's individual needs" }, { name: "Assess patient's eligibility for services" }, { name: "Assess for suspected abuse/neglect" }, { name: "Conduct patient's biopsychosocial assessment" }, { name: "Identify patient strengths, resources, and challenges" }, { name: "Perform community needs assessment" },
    ]},
    { title: "Therapeutic Relationship & Communication", skills: [
      { name: "Develop and maintain communication on complex matters" }, { name: "Communicate effectively with diverse populations" }, { name: "Crisis communication" }, { name: "Family meetings/conferences" }, { name: "Interdisciplinary team communication" }, { name: "Obtain/confirm informed consent for treatment" }, { name: "Engage patient/caregiver in treatment planning" },
    ]},
    { title: "Clinical Interventions & Case Management", skills: [
      { name: "Support patient/family with grieving process" }, { name: "Develop treatment/discharge plan with patient" }, { name: "Coordinate care with interdisciplinary team" }, { name: "Provide case management services" }, { name: "Formulate measurable and realistic treatment goals" }, { name: "Provide conflict resolution" }, { name: "Ability to modify treatment plan" }, { name: "Advocate for patient rights" },
    ]},
    { title: "Discharge Planning & Community Resources", skills: [
      { name: "Assessment of post-acute needs" }, { name: "Community resource identification" }, { name: "SNF/Rehab placement" }, { name: "Home health coordination" }, { name: "Hospice referral" }, { name: "Financial assistance programs" }, { name: "Assist and refer patient to community resources" },
    ]},
    { title: "Interdisciplinary Collaboration", skills: [
      { name: "Timely follow-up on patient referrals" }, { name: "Understand basic terminology of professions other than social work" }, { name: "Participate in and/or lead case conferences" }, { name: "Understand roles and responsibilities of other healthcare professionals/support staff" }, { name: "Facilitate referral process early into patient's admission" },
    ]},
    { title: "Crisis Intervention", skills: [
      { name: "Suicide risk assessment" }, { name: "Domestic violence screening" }, { name: "Child/Elder abuse reporting" }, { name: "Substance abuse intervention" }, { name: "Grief/bereavement counseling" },
    ]},
    { title: "Professional Ethics & Legal Compliance", skills: [
      { name: "Advance directives" }, { name: "Guardianship/Conservatorship" }, { name: "Patient rights" }, { name: "Mandatory reporting" }, { name: "HIPAA compliance" }, { name: "Informed consent" }, { name: "Understand mandatory reporting requirements of ethical issues" }, { name: "Identify and resolve ethical dilemmas" }, { name: "Understand legal and ethical issues related to confidentiality" }, { name: "Protect and augment patient self-determination" }, { name: "Document ethical issues" },
    ]},
    { title: "Supervision", skills: [
      { name: "Understand the supervisee's and supervisor's role in supervision" }, { name: "Understand the impact of transference and countertransference within supervisory relationships" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "psychologist", title: "Psychologist Skills Checklist", shortTitle: "Psychologist", icon: "🧠", group: "Administration & Leadership", categories: [
    { title: "Assessment & Testing", skills: [
      { name: "Psychological/Diagnostic Assessment" }, { name: "Cognitive/Neuropsychological Testing" }, { name: "Personality Assessment (e.g., MMPI, PAI)" }, { name: "Risk Assessment (Suicide/Homicide)" }, { name: "Substance Use Assessment" }, { name: "Developmental/Autism Spectrum Assessment" },
    ]},
    { title: "Individual Therapy Modalities", skills: [
      { name: "Individual Psychotherapy" }, { name: "Cognitive Behavioral Therapy (CBT)" }, { name: "Dialectical Behavior Therapy (DBT)" }, { name: "Trauma-Focused Therapy" }, { name: "Motivational Interviewing" }, { name: "Acceptance and Commitment Therapy (ACT)" },
    ]},
    { title: "Group & Family Therapy", skills: [
      { name: "Group Therapy Facilitation" }, { name: "Family Therapy" }, { name: "Couples Counseling" }, { name: "Psychoeducation Groups" },
    ]},
    { title: "Crisis Management", skills: [
      { name: "De-Escalation Techniques" }, { name: "Involuntary Commitment Evaluation" }, { name: "Safety Planning" }, { name: "Crisis Intervention Counseling" }, { name: "Emergency Psychiatric Evaluation" },
    ]},
    { title: "Documentation & Treatment Planning", skills: [
      { name: "Clinical Documentation/Treatment Planning" }, { name: "Diagnostic Formulation (DSM-5-TR)" }, { name: "Progress Note Documentation" }, { name: "Discharge/Transition Planning" },
    ]},
    { title: "Ethics & Collaboration", skills: [
      { name: "HIPAA and Confidentiality Compliance" }, { name: "Interdisciplinary Team Collaboration" }, { name: "Ethical/Legal Standards of Practice" }, { name: "Consultation With Psychiatry/Medical Providers" }, { name: "Cultural Competence in Treatment" },
    ]},
  ]},

  { slug: "clinical-documentation-specialist", title: "Clinical Documentation Specialist Skills Checklist", shortTitle: "CDS", icon: "📄", group: "Administration & Leadership", categories: [
    { title: "Concurrent Documentation Review", skills: [
      { name: "Concurrent Chart Review" }, { name: "Clinical Indicator Identification" }, { name: "Principal Diagnosis Determination" }, { name: "Comorbidity/Complication (CC/MCC) Capture" }, { name: "Present on Admission (POA) Indicator Review" }, { name: "Working DRG Assignment" },
    ]},
    { title: "Physician Query Management", skills: [
      { name: "Query Formulation (Verbal and Written)" }, { name: "Compliant Query Practices (AHIMA/ACDIS Guidelines)" }, { name: "Query Escalation Process" }, { name: "Physician Response Tracking" }, { name: "Retrospective Query Management" },
    ]},
    { title: "Coding & Severity Validation", skills: [
      { name: "ICD-10-CM/PCS Familiarity" }, { name: "DRG/Severity of Illness Validation" }, { name: "Risk of Mortality Assessment" }, { name: "Case Mix Index Impact Awareness" }, { name: "Clinical Validation of Diagnoses (e.g., Sepsis, Malnutrition, AKI)" }, { name: "Coding Compliance Standards" },
    ]},
    { title: "Regulatory & Quality Impact", skills: [
      { name: "CMS Documentation Guidelines" }, { name: "Hospital-Acquired Condition (HAC) Awareness" }, { name: "Patient Safety Indicator (PSI) Awareness" }, { name: "Quality Metric/Publicly Reported Outcome Impact" }, { name: "Value-Based Purchasing Documentation Impact" },
    ]},
    { title: "Systems & Reporting", skills: [
      { name: "EMR/CDI Software Platforms (e.g., 3M, Optum, Iodine)" }, { name: "CDI Analytics and Dashboard Reporting" }, { name: "Query Response Rate Tracking" }, { name: "CC/MCC Capture Rate Reporting" },
    ]},
    { title: "Education & Collaboration", skills: [
      { name: "Physician Education and Collaboration" }, { name: "Coding Department Liaison" }, { name: "New Provider Documentation Orientation" }, { name: "Interdisciplinary CDI Rounding" },
    ]},
  ]},

  { slug: "nursing-informatics", title: "Nursing Informatics Skills Checklist", shortTitle: "Informatics", icon: "💻", group: "Administration & Leadership", categories: [
    { title: "EMR Build & Configuration", skills: [
      { name: "EMR Build/Configuration Support" }, { name: "Order Set Development" }, { name: "Documentation Flowsheet Design" }, { name: "Nursing Care Plan Templates" }, { name: "Charge Capture Build" }, { name: "Interface/Integration Testing" },
    ]},
    { title: "Clinical Workflow & Decision Support", skills: [
      { name: "Clinical Workflow Analysis" }, { name: "Clinical Decision Support Tools" }, { name: "Alert and Alarm Fatigue Management" }, { name: "Best Practice Advisory (BPA) Design" }, { name: "Barcode Medication Administration (BCMA) Workflow" }, { name: "Clinical Pathway/Order Set Optimization" },
    ]},
    { title: "Implementation & Go-Live", skills: [
      { name: "System Go-Live Support" }, { name: "Super-User Program Coordination" }, { name: "Downtime Procedure Planning" }, { name: "Command Center/At-the-Elbow Support" }, { name: "Post-Go-Live Optimization" },
    ]},
    { title: "Training & Education", skills: [
      { name: "End-User Training Development" }, { name: "New Hire EMR Onboarding" }, { name: "Competency Validation for System Use" }, { name: "Training Material Development" },
    ]},
    { title: "Data, Quality & Analytics", skills: [
      { name: "Data Analytics/Reporting" }, { name: "Quality Metrics Extraction" }, { name: "Core Measure/Regulatory Reporting Support" }, { name: "Data Integrity Auditing" }, { name: "Dashboard Development" },
    ]},
    { title: "Interoperability & Governance", skills: [
      { name: "Interoperability Standards (HL7, FHIR)" }, { name: "Governance Committee Participation" }, { name: "Change Control Process Management" }, { name: "Vendor Relationship Management" },
    ]},
  ]},

  { slug: "director-patient-care-services", title: "Director of Patient Care Services Skills Checklist", shortTitle: "Director of Patient Care", icon: "🏛️", group: "Administration & Leadership", categories: [
    { title: "Strategic Leadership", skills: [
      { name: "Multi-Unit Oversight" }, { name: "Strategic Planning" }, { name: "Service Line Development" }, { name: "Organizational Goal Alignment" }, { name: "Board and Executive Reporting" },
    ]},
    { title: "Financial & Operational Management", skills: [
      { name: "Budget and Financial Management" }, { name: "Capital Planning" }, { name: "Productivity and Labor Cost Management" }, { name: "Revenue Cycle Impact Awareness" },
    ]},
    { title: "Workforce & Staffing", skills: [
      { name: "Nurse Manager Supervision" }, { name: "Staffing Model Development" }, { name: "Recruitment and Retention Strategy" }, { name: "Succession Planning" }, { name: "Performance Management" },
    ]},
    { title: "Operations & Patient Flow", skills: [
      { name: "Capacity/Patient Flow Management" }, { name: "Emergency Preparedness Planning" }, { name: "Throughput and Length of Stay Initiatives" }, { name: "Interdepartmental Resource Coordination" },
    ]},
    { title: "Quality & Regulatory Oversight", skills: [
      { name: "Regulatory/Accreditation Oversight" }, { name: "Quality and Safety Program Oversight" }, { name: "Core Measure/Outcome Performance Monitoring" }, { name: "Risk Management Collaboration" },
    ]},
    { title: "Patient Experience & Culture", skills: [
      { name: "Patient Experience Initiatives" }, { name: "Staff Engagement and Culture Building" }, { name: "Interdisciplinary Collaboration" }, { name: "Shared Governance Facilitation" },
    ]},
  ]},

  { slug: "laboratory-director", title: "Laboratory Director Skills Checklist", shortTitle: "Laboratory Director", icon: "🔬", group: "Administration & Leadership", categories: [
    { title: "Operations Leadership", skills: [
      { name: "Multi-Department Lab Oversight (Chemistry, Hematology, Micro, Blood Bank)" }, { name: "Staffing and Scheduling Management" }, { name: "Budget and Capital Equipment Planning" }, { name: "Vendor/Contract Management" }, { name: "Send-Out Testing Program Oversight" },
    ]},
    { title: "Quality & Accreditation", skills: [
      { name: "CAP/CLIA Accreditation Oversight" }, { name: "Quality Assurance Program Management" }, { name: "Proficiency Testing Oversight" }, { name: "Regulatory Survey Preparedness" }, { name: "Non-Conformance/Corrective Action Management" },
    ]},
    { title: "Technical & Method Oversight", skills: [
      { name: "Test Menu and Method Validation" }, { name: "Instrument/Technology Evaluation" }, { name: "Result Turnaround Time Management" }, { name: "Critical Value Reporting Oversight" }, { name: "Reference Range Establishment" },
    ]},
    { title: "Staff Development & Competency", skills: [
      { name: "Staff Competency Assessment" }, { name: "Continuing Education Program Oversight" }, { name: "Performance Management" }, { name: "New Employee Orientation Oversight" },
    ]},
    { title: "Safety & Compliance", skills: [
      { name: "OSHA Bloodborne Pathogen Compliance" }, { name: "Chemical Hygiene Plan Oversight" }, { name: "Biohazard/Waste Management Compliance" }, { name: "Emergency/Disaster Preparedness Planning" },
    ]},
  ]},

  { slug: "credentialing-specialist", title: "Credentialing Specialist Skills Checklist", shortTitle: "Credentialing Specialist", icon: "📋", group: "Administration & Leadership", categories: [
    { title: "Credentialing & Verification", skills: [
      { name: "Primary Source Verification" }, { name: "Provider Application Processing" }, { name: "Education and Training Verification" }, { name: "Work History and Reference Verification" }, { name: "License and DEA Verification" }, { name: "Board Certification Verification" },
    ]},
    { title: "Privileging", skills: [
      { name: "Privileging Coordination" }, { name: "Clinical Privilege Delineation Forms" }, { name: "Focused Professional Practice Evaluation (FPPE) Coordination" }, { name: "Ongoing Professional Practice Evaluation (OPPE) Support" },
    ]},
    { title: "Re-Credentialing & Monitoring", skills: [
      { name: "Re-Credentialing Cycle Management" }, { name: "NPDB/OIG Sanction Checks" }, { name: "Expirable Tracking (Licenses, Certifications)" }, { name: "Malpractice Insurance Verification" }, { name: "Adverse Action/Sanction Monitoring" },
    ]},
    { title: "Payer Enrollment", skills: [
      { name: "Payer Enrollment Coordination" }, { name: "CAQH Profile Management" }, { name: "Medicare/Medicaid Enrollment" }, { name: "Commercial Payer Application Submission" },
    ]},
    { title: "Compliance & Systems", skills: [
      { name: "Joint Commission/NCQA Credentialing Standards" }, { name: "State-Specific Credentialing Requirements" }, { name: "Credentialing Software (e.g., CAQH, Symplr, MD-Staff)" }, { name: "Audit Support" },
    ]},
    { title: "Communication & Coordination", skills: [
      { name: "Provider Communication and Follow-Up" }, { name: "Medical Staff Office Coordination" }, { name: "Credentials Committee Support" }, { name: "New Provider Onboarding Coordination" },
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
    { title: "Core Transcription Skills", skills: [
      { name: "Physician Dictation Transcription" }, { name: "Medical Terminology Accuracy" }, { name: "Speech Recognition Editing" }, { name: "Report Formatting Standards" }, { name: "Grammar and Punctuation Accuracy" }, { name: "Blank Flagging for Unclear Dictation" }, { name: "Critical Result Flagging" },
    ]},
    { title: "Specialty Report Types", skills: [
      { name: "Operative Reports" }, { name: "Discharge Summaries" }, { name: "History and Physical Reports" }, { name: "Consultation Notes" }, { name: "Radiology Reports" }, { name: "Pathology Reports" }, { name: "Progress Notes" }, { name: "Emergency Department Reports" },
    ]},
    { title: "Medical Terminology by Specialty", skills: [
      { name: "Surgical Terminology" }, { name: "Cardiology Terminology" }, { name: "Orthopedic Terminology" }, { name: "Oncology Terminology" }, { name: "Psychiatric Terminology" }, { name: "Pharmacology/Drug Name Accuracy" },
    ]},
    { title: "Compliance & Confidentiality", skills: [
      { name: "HIPAA Compliance" }, { name: "Patient Confidentiality Standards" }, { name: "Chain of Custody for Dictated Files" }, { name: "Record Retention Requirements" },
    ]},
    { title: "Systems & Productivity", skills: [
      { name: "EMR/Dictation Software Platforms" }, { name: "Digital Voice Recognition Software" }, { name: "Turnaround Time Standards" }, { name: "Line Count/Productivity Standards" }, { name: "Quality Assurance/Self-Audit" },
    ]},
  ]},

  { slug: "patient-access-rep", title: "Patient Access Representative Skills Checklist", shortTitle: "Patient Access Rep", icon: "🗂️", group: "Administration & Leadership", categories: [
    { title: "Registration & Scheduling", skills: [
      { name: "Patient Registration (Inpatient/Outpatient/ED)" }, { name: "Appointment Scheduling and Rescheduling" }, { name: "Physician Order Verification" }, { name: "Bed Assignment Coordination" }, { name: "Multi-System Patient Search and Duplicate Record Prevention" }, { name: "Master Patient Index (MPI) Management" }, { name: "Walk-In and Same-Day Registration" }, { name: "Surgical/Procedural Pre-Registration" },
    ]},
    { title: "Insurance & Financial Clearance", skills: [
      { name: "Insurance Eligibility and Benefits Verification" }, { name: "Pre-Authorization and Referral Coordination" }, { name: "Medicare Secondary Payer Questionnaire" }, { name: "Coordination of Benefits" }, { name: "Coverage Discovery" }, { name: "Insurance Card Scanning and Data Entry" }, { name: "Workers' Compensation and Third-Party Liability Intake" },
    ]},
    { title: "Point-of-Service Collections & Financial Counseling", skills: [
      { name: "Point-of-Service Collections" }, { name: "Estimate of Patient Financial Responsibility" }, { name: "Financial Counseling Referral" }, { name: "Charity Care/Payment Plan Assistance" }, { name: "Cash Handling and Reconciliation" }, { name: "Payment Plan Setup" },
    ]},
    { title: "Customer Service & Patient Experience", skills: [
      { name: "Patient Customer Service" }, { name: "De-Escalation of Frustrated Patients" }, { name: "Wayfinding and Facility Navigation Assistance" }, { name: "Language Line/Interpreter Services Coordination" }, { name: "Patient/Family Communication" }, { name: "Complaint Intake and Escalation" },
    ]},
    { title: "Systems & Documentation", skills: [
      { name: "EMR/Registration Software (e.g., Epic, Cerner)" }, { name: "HIPAA and Consent Form Processing" }, { name: "Advance Directive Documentation" }, { name: "Medical Record Number Assignment" }, { name: "Scanning and Document Indexing" }, { name: "Downtime Registration Procedures" },
    ]},
    { title: "Compliance & Regulatory", skills: [
      { name: "HIPAA Privacy and Security Compliance" }, { name: "EMTALA Compliance" }, { name: "Medicare Conditions of Participation" }, { name: "Notice of Privacy Practices Distribution" }, { name: "Consent for Treatment Documentation" },
    ]},
  ]},

  { slug: "patient-safety-specialist", title: "Patient Safety Specialist Skills Checklist", shortTitle: "Patient Safety Specialist", icon: "✅", group: "Administration & Leadership", categories: [
    { title: "Event Investigation & Analysis", skills: [
      { name: "Patient Safety Event Investigation" }, { name: "Root Cause Analysis (RCA) Facilitation" }, { name: "Failure Mode and Effects Analysis (FMEA)" }, { name: "Sentinel Event Response" }, { name: "Near-Miss Analysis" }, { name: "Common Cause/Trend Analysis" },
    ]},
    { title: "Proactive Risk Assessment", skills: [
      { name: "Proactive Risk Assessment Tools" }, { name: "High-Reliability Organization Principles" }, { name: "Human Factors Analysis" }, { name: "Safety Culture Surveys" }, { name: "Simulation-Based Risk Assessment" },
    ]},
    { title: "Accreditation & Regulatory Compliance", skills: [
      { name: "Joint Commission National Patient Safety Goals" }, { name: "CMS Conditions of Participation" }, { name: "Accreditation Survey Preparation" }, { name: "Sentinel Event Reporting (Regulatory)" }, { name: "State Reportable Event Compliance" },
    ]},
    { title: "Policy & Program Development", skills: [
      { name: "Policy Development and Review" }, { name: "Patient Safety Program Management" }, { name: "Corrective Action Plan Development" }, { name: "Action Plan Follow-Up and Closure Tracking" },
    ]},
    { title: "Education & Culture", skills: [
      { name: "Staff Safety Education" }, { name: "Just Culture Framework Application" }, { name: "Safety Huddle Facilitation" }, { name: "Speak-Up Culture Promotion" },
    ]},
    { title: "Reporting & Analytics", skills: [
      { name: "Event Reporting System Management" }, { name: "Leadership Safety Reporting/Dashboards" }, { name: "Patient Safety Indicator (PSI) Tracking" }, { name: "Board/Committee Safety Presentations" },
    ]},
  ]},

  { slug: "executive-assistant", title: "Executive Assistant Skills Checklist", shortTitle: "Executive Assistant", icon: "🗓️", group: "Administration & Leadership", categories: [
    { title: "Calendar & Scheduling", skills: [
      { name: "Calendar and Scheduling Management" }, { name: "Multi-Executive Calendar Coordination" }, { name: "Meeting Conflict Resolution" }, { name: "Time Zone Coordination" },
    ]},
    { title: "Travel & Logistics", skills: [
      { name: "Travel Coordination" }, { name: "Itinerary Development" }, { name: "Expense Reconciliation for Travel" }, { name: "Event and Offsite Coordination" },
    ]},
    { title: "Communication & Correspondence", skills: [
      { name: "Correspondence Drafting" }, { name: "Executive-Level Communication" }, { name: "Email and Inbox Management" }, { name: "Internal and External Stakeholder Liaison" },
    ]},
    { title: "Meeting & Board Support", skills: [
      { name: "Meeting/Board Preparation" }, { name: "Minute Taking" }, { name: "Agenda Development" }, { name: "Board Portal Management" }, { name: "Presentation Preparation" },
    ]},
    { title: "Project & Office Management", skills: [
      { name: "Project Tracking and Follow-Up" }, { name: "Budget/Expense Report Processing" }, { name: "Vendor Coordination" }, { name: "Office Supply and Facilities Coordination" },
    ]},
    { title: "Systems & Confidentiality", skills: [
      { name: "Microsoft Office/Google Workspace Proficiency" }, { name: "Confidential Document Handling" }, { name: "Discretion With Confidential Information" }, { name: "Record Retention and Filing Systems" },
    ]},
  ]},
];
