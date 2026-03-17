import { ChecklistSpec } from "../checklistData";

export const alliedHealthChecklists: ChecklistSpec[] = [
  { slug: "pharmacist", title: "Pharmacist Skills Checklist", shortTitle: "Pharmacist", icon: "💊", group: "Allied Health", categories: [
    { title: "Practice Settings/Experience", skills: [
      { name: "Academia" }, { name: "Ambulatory Care" }, { name: "Clinic" }, { name: "Compounding" }, { name: "Consulting" }, { name: "Correctional Facility" }, { name: "Government/VA" }, { name: "Home Infusion" }, { name: "Hospital Inpatient" }, { name: "Hospital Outpatient" }, { name: "Long Term Care" }, { name: "Managed Care" }, { name: "Nuclear Pharmacy" }, { name: "Oncology" }, { name: "Pediatric" }, { name: "Psychiatric" }, { name: "Retail/Community" },
    ]},
    { title: "Clinical Skills", skills: [
      { name: "Medication Therapy Management" }, { name: "Drug Information" }, { name: "Pharmacokinetics" }, { name: "IV Admixture/Compounding" }, { name: "TPN Compounding" }, { name: "Chemotherapy Preparation" }, { name: "Anticoagulation Management" }, { name: "Pain Management" },
    ]},
    { title: "Dispensing", skills: [
      { name: "Prescription Processing" }, { name: "Medication Verification" }, { name: "Patient Counseling" }, { name: "Drug Utilization Review" }, { name: "Controlled Substance Management" },
    ]},
    { title: "Technology", skills: [
      { name: "Automated Dispensing (Pyxis, Omnicell)" }, { name: "IV Workflow Systems" }, { name: "Electronic Health Record" }, { name: "CPOE" }, { name: "Barcode Verification" },
    ]},
    { title: "Regulatory", skills: [
      { name: "Joint Commission Standards" }, { name: "State Board of Pharmacy" }, { name: "DEA Regulations" }, { name: "USP 797/800 Compliance" }, { name: "Medication Error Reporting" },
    ]},
  ]},

  { slug: "pharmacy-technician", title: "Pharmacy Technician Skills Checklist", shortTitle: "Pharmacy Technician", icon: "🧴", group: "Allied Health", categories: [
    { title: "Communication", skills: [
      { name: "Organize written and oral communication" }, { name: "Question healthcare professionals for patient information" }, { name: "Communicate appropriately with audience" }, { name: "Use good listening skills" },
    ]},
    { title: "Dispensing", skills: [
      { name: "Prescription Processing" }, { name: "Medication Counting/Pouring" }, { name: "Label Generation" }, { name: "Medication Packaging" }, { name: "Automated Dispensing Systems" }, { name: "Unit Dose Packaging" },
    ]},
    { title: "Compounding", skills: [
      { name: "Non-Sterile Compounding" }, { name: "Sterile Compounding (IV)" }, { name: "TPN Preparation" }, { name: "Chemotherapy Preparation" }, { name: "Aseptic Technique" },
    ]},
    { title: "Inventory Management", skills: [
      { name: "Ordering" }, { name: "Receiving" }, { name: "Storage" }, { name: "Controlled Substance Tracking" }, { name: "Expiration Date Monitoring" }, { name: "Drug Recall Management" },
    ]},
    { title: "Technology", skills: [
      { name: "Automated Dispensing Machines" }, { name: "Pharmacy Information Systems" }, { name: "Robot/Carousel Systems" }, { name: "IV Workflow Systems" },
    ]},
  ]},

  { slug: "medical-assistant", title: "Medical Assistant Skills Checklist", shortTitle: "Medical Assistant", icon: "🩺", group: "Allied Health", categories: [
    { title: "General Duties", skills: [
      { name: "Awareness of HCAHPS" }, { name: "Administrative procedures" }, { name: "Admit/discharge patients" }, { name: "Blood glucose monitoring" }, { name: "Coordinate scheduling" }, { name: "Data entry" }, { name: "Documentation" }, { name: "EKG" }, { name: "Insurance verification" },
    ]},
    { title: "Clinical Skills", skills: [
      { name: "Vital Signs" }, { name: "Phlebotomy" }, { name: "Injections (IM, SQ, ID)" }, { name: "Specimen Collection" }, { name: "Wound Care" }, { name: "Suture/Staple Removal" }, { name: "Ear Irrigation" }, { name: "Nebulizer Treatment" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient History" }, { name: "Patient Education" }, { name: "Medication Administration" }, { name: "Assist with Procedures" }, { name: "Sterilization of Instruments" },
    ]},
    { title: "Administrative", skills: [
      { name: "Medical Records" }, { name: "Insurance/Billing" }, { name: "Referrals" }, { name: "Prior Authorizations" }, { name: "Telephone Triage" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "patient-care-tech", title: "Patient Care Technician Skills Checklist", shortTitle: "Patient Care Tech", icon: "🫂", group: "Allied Health", categories: [
    { title: "Obtaining and Recording", skills: [
      { name: "BP, including Orthostatic" }, { name: "Vital Signs and Weights" }, { name: "Administering an Enema" }, { name: "Applying Ted Hose" }, { name: "Assessing Respirations" }, { name: "Bathing (Bed/Shower/Tub)" }, { name: "Blood Glucose Monitoring" }, { name: "Catheter Care" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Ambulation" }, { name: "Positioning/Turning" }, { name: "Transfer (Bed/Chair/Commode)" }, { name: "ROM Exercises" }, { name: "Feeding Patients" }, { name: "Oral Care" }, { name: "Perineal Care" }, { name: "Skin Assessment" },
    ]},
    { title: "Phlebotomy", skills: [
      { name: "Venipuncture" }, { name: "Capillary Puncture" }, { name: "Blood Cultures" }, { name: "Specimen Processing" },
    ]},
    { title: "EKG", skills: [
      { name: "12-Lead EKG" }, { name: "Rhythm Strip" }, { name: "Telemetry Monitor" },
    ]},
    { title: "Safety", skills: [
      { name: "Fall Prevention" }, { name: "Restraint Application" }, { name: "Infection Control" }, { name: "Standard Precautions" }, { name: "Sharps Disposal" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "pct", title: "PCT Skills Checklist", shortTitle: "PCT", icon: "🤲", group: "Allied Health", categories: [
    { title: "Patient Rights", skills: [
      { name: "Communicates and obtains information respecting HIPAA" }, { name: "Involves patient and family in care decisions" }, { name: "Complies with Organ Donation policy" }, { name: "Meets communication needs including interpreter services" },
    ]},
    { title: "Vital Signs and Weights", skills: [
      { name: "BP, including Orthostatic" }, { name: "Pulse, Radial" }, { name: "Temperature (Oral, Rectal, Axillary, Tympanic)" }, { name: "Respirations" }, { name: "Weight (Standing, Chair, Bed)" }, { name: "Pulse Oximetry" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Bathing" }, { name: "Oral Care" }, { name: "Feeding" }, { name: "Ambulation" }, { name: "Positioning/Turning" }, { name: "Transfer (Bed/Chair)" }, { name: "ROM Exercises" }, { name: "Incontinence Care" },
    ]},
    { title: "Specimen Collection", skills: [
      { name: "Urine Collection" }, { name: "Stool Collection" }, { name: "Sputum Collection" }, { name: "Blood Glucose Testing" },
    ]},
    { title: "Safety", skills: [
      { name: "Fall Prevention" }, { name: "Restraint Use" }, { name: "Infection Control" }, { name: "Hand Hygiene" }, { name: "Standard Precautions" }, { name: "Proper Body Mechanics" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},
];
