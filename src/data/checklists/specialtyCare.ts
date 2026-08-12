import { ChecklistSpec } from "../checklistData";

export const specialtyCareChecklists: ChecklistSpec[] = [
  { slug: "medsurg", title: "Registered Nurse – Med/Surg Skills Checklist", shortTitle: "RN – Med/Surg", icon: "🩻", group: "Specialty Care", categories: [
    { title: "Cardiac", skills: [
      { name: "Angina" }, { name: "Post Acute MI" }, { name: "Congestive Heart Failure" }, { name: "Post Cardiac Cath" }, { name: "Post Cardiac Surgery" }, { name: "Dysrhythmia Recognition" }, { name: "Pacemaker Care" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Pneumonia" }, { name: "COPD" }, { name: "Asthma" }, { name: "Chest Tube Management" }, { name: "Trach Care" }, { name: "O2 Therapy" }, { name: "Pulse Oximetry" },
    ]},
    { title: "Neurological", skills: [
      { name: "CVA" }, { name: "Seizure Management" }, { name: "Glasgow Coma Scale" }, { name: "Head Injury" }, { name: "Spinal Cord Injury" },
    ]},
    { title: "GI/GU", skills: [
      { name: "GI Bleed" }, { name: "Post-op GI Surgery" }, { name: "NG Tube" }, { name: "Ostomy Care" }, { name: "Foley Catheter" }, { name: "Renal Failure" },
    ]},
    { title: "Orthopedic", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "Fracture Care" }, { name: "Traction" }, { name: "Cast Care" },
    ]},
    { title: "IV Therapy", skills: [
      { name: "IV Insertion" }, { name: "IV Medication Administration" }, { name: "Blood Product Administration" }, { name: "Central Line Care" }, { name: "TPN" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "oncology", title: "Registered Nurse – Oncology Skills Checklist", shortTitle: "RN – Oncology", icon: "🎗️", group: "Specialty Care", categories: [
    { title: "Radiation Therapy", skills: [
      { name: "Skin Assessment" }, { name: "Total Body Irradiation" }, { name: "Side Effect Management" }, { name: "External Radiotherapy" }, { name: "Brachytherapy" }, { name: "Radiation Safety Precautions" },
    ]},
    { title: "Chemotherapy", skills: [
      { name: "Chemotherapy Administration" }, { name: "Safe Handling of Chemotherapy" }, { name: "Vesicant Administration" }, { name: "Side Effect Management" }, { name: "Anaphylaxis Management" },
    ]},
    { title: "Vascular Access", skills: [
      { name: "PICC Line Care" }, { name: "Port Access/De-access" }, { name: "Central Line Care" }, { name: "Implanted Pump" },
    ]},
    { title: "Symptom Management", skills: [
      { name: "Pain Management" }, { name: "Nausea/Vomiting" }, { name: "Neutropenic Precautions" }, { name: "Mucositis Care" }, { name: "Tumor Lysis Syndrome" },
    ]},
    { title: "Blood Products", skills: [
      { name: "Blood Transfusion" }, { name: "Platelet Transfusion" }, { name: "Colony Stimulating Factors" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "dialysis-nursing", title: "Registered Nurse – Dialysis Skills Checklist", shortTitle: "RN – Dialysis", icon: "🫘", group: "Specialty Care", categories: [
    { title: "Work Settings", skills: [
      { name: "Acute/Inpatient Dialysis" }, { name: "Chronic/Outpatient Dialysis" }, { name: "Dialysis Home Care" }, { name: "Pediatric Dialysis" }, { name: "Apheresis" }, { name: "Plasmapheresis" },
    ]},
    { title: "Hemodialysis", skills: [
      { name: "AV Fistula Cannulation" }, { name: "AV Graft Cannulation" }, { name: "Catheter Management" }, { name: "Machine Setup" }, { name: "Dialysate Preparation" }, { name: "Water Treatment" },
    ]},
    { title: "Peritoneal Dialysis", skills: [
      { name: "CAPD" }, { name: "CCPD" }, { name: "Catheter Care" }, { name: "Peritonitis Management" },
    ]},
    { title: "Complications", skills: [
      { name: "Hypotension" }, { name: "Cramps" }, { name: "Air Embolism" }, { name: "Clotting" }, { name: "Infection" }, { name: "Disequilibrium Syndrome" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "dialysis-clinical", title: "Dialysis Clinical Skills Checklist", shortTitle: "Dialysis Clinical", icon: "💧", group: "Specialty Care", categories: [
    { title: "Renal/Genitourinary", skills: [
      { name: "Assessment of Renal/GU System" }, { name: "Insertion of Foley" }, { name: "Nephrostomy Tube Care" }, { name: "AV Fistula/AV Graft" }, { name: "Tunneled/Non-Tunneled Catheter" },
    ]},
    { title: "Hemodialysis Skills", skills: [
      { name: "Machine Setup/Priming" }, { name: "Fistula/Graft Cannulation" }, { name: "Catheter Access" }, { name: "Heparin Administration" }, { name: "Fluid Removal Calculation" },
    ]},
    { title: "Peritoneal Dialysis", skills: [
      { name: "CAPD" }, { name: "CCPD/APD" }, { name: "Catheter Care" }, { name: "Exit Site Assessment" },
    ]},
    { title: "Emergency Management", skills: [
      { name: "Hypotension" }, { name: "Cardiac Arrest" }, { name: "Air Embolism" }, { name: "Hemorrhage" }, { name: "Dialyzer Reaction" },
    ]},
  ]},

  { slug: "dialysis-tech", title: "Dialysis Technician Skills Checklist", shortTitle: "Dialysis Technician", icon: "🩸", group: "Specialty Care", categories: [
    { title: "Hemodialysis Setup", skills: [
      { name: "Machine setup and priming" }, { name: "Dialyzer/bloodline assembly" }, { name: "Water treatment system checks" }, { name: "Dialysate preparation and testing" },
    ]},
    { title: "Patient Care", skills: [
      { name: "AV fistula/graft cannulation" }, { name: "Catheter connection/disconnection (under supervision)" }, { name: "Pre/post treatment vital signs" }, { name: "Weight assessment and fluid removal calculation" }, { name: "Monitoring during treatment" },
    ]},
    { title: "Complications & Safety", skills: [
      { name: "Hypotension recognition and response" }, { name: "Cramping management" }, { name: "Clotting/access issues" }, { name: "Infection control and aseptic technique" }, { name: "Emergency response protocols" },
    ]},
    { title: "Equipment & Documentation", skills: [
      { name: "Equipment disinfection/reprocessing" }, { name: "Treatment flow sheet documentation" }, { name: "Supply inventory management" },
    ]},
  ]},

  { slug: "long-term-acute-care", title: "Registered Nurse – Long Term Acute Care Skills Checklist", shortTitle: "RN – LTAC", icon: "🏥", group: "Specialty Care", categories: [
    { title: "Complex Medical Management", skills: [
      { name: "Ventilator weaning management" }, { name: "Prolonged mechanical ventilation care" }, { name: "Tracheostomy management" }, { name: "Multi-organ dysfunction monitoring" },
    ]},
    { title: "Wound & Skin", skills: [
      { name: "Complex wound management" }, { name: "Negative pressure wound therapy" }, { name: "Pressure injury staging and prevention" },
    ]},
    { title: "Nutrition & GI", skills: [
      { name: "Enteral feeding management" }, { name: "TPN administration" }, { name: "G-tube/J-tube care" },
    ]},
    { title: "IV Therapy", skills: [
      { name: "Central line care" }, { name: "PICC line care" }, { name: "IV antibiotic administration" }, { name: "Blood product administration" },
    ]},
    { title: "Rehabilitation & Discharge", skills: [
      { name: "Interdisciplinary rehab coordination" }, { name: "Long-term care planning" }, { name: "Family education for chronic complex care" }, { name: "Discharge to SNF/home coordination" },
    ]},
  ]},

  { slug: "wound-care", title: "Registered Nurse – Wound Care Skills Checklist", shortTitle: "RN – Wound Care", icon: "🩹", group: "Specialty Care", categories: [
    { title: "Work Settings", skills: [
      { name: "Acute Care – Adult" }, { name: "Clinic – Adult" }, { name: "SNF/LTAC/Subacute" }, { name: "Hospice/Palliative Care" }, { name: "Acute/Long Term Care – Pediatrics" }, { name: "Clinic – Pediatrics" }, { name: "Home Health" },
    ]},
    { title: "Wound Assessment", skills: [
      { name: "Wound Measurement" }, { name: "Wound Staging" }, { name: "Tissue Type Identification" }, { name: "Wound Photography" }, { name: "Risk Assessment Tools (Braden Scale)" },
    ]},
    { title: "Wound Types", skills: [
      { name: "Pressure Ulcers" }, { name: "Diabetic Ulcers" }, { name: "Venous Ulcers" }, { name: "Arterial Ulcers" }, { name: "Surgical Wounds" }, { name: "Traumatic Wounds" }, { name: "Burns" },
    ]},
    { title: "Treatment Modalities", skills: [
      { name: "Negative Pressure Wound Therapy (VAC)" }, { name: "Wound Debridement" }, { name: "Compression Therapy" }, { name: "Hyperbaric Oxygen Therapy" }, { name: "Skin Substitutes" },
    ]},
    { title: "Ostomy Care", skills: [
      { name: "Colostomy Care" }, { name: "Ileostomy Care" }, { name: "Urostomy Care" }, { name: "Pouching Systems" }, { name: "Stoma Assessment" }, { name: "Patient Education" },
    ]},
  ]},

  { slug: "psychiatry", title: "Registered Nurse – Psychiatry Skills Checklist", shortTitle: "RN – Psychiatry", icon: "🧠", group: "Specialty Care", categories: [
    { title: "General Nursing", skills: [
      { name: "Admit/Orient Voluntary Clients" }, { name: "Admit/Orient Involuntary Clients" }, { name: "Initial Comprehensive Assessment" }, { name: "Initial Focused Assessment" }, { name: "Initial Screening Assessment" }, { name: "Ongoing Assessment" }, { name: "Suicide Risk Assessment" }, { name: "Homicide Risk Assessment" },
    ]},
    { title: "Patient Populations", skills: [
      { name: "Acute Psychiatric" }, { name: "Substance Abuse/Detox" }, { name: "Dual Diagnosis" }, { name: "Geriatric Psychiatry" }, { name: "Adolescent Psychiatry" }, { name: "Eating Disorders" }, { name: "PTSD" },
    ]},
    { title: "Therapeutic Interventions", skills: [
      { name: "Crisis Intervention" }, { name: "De-escalation Techniques" }, { name: "Group Therapy" }, { name: "Individual Therapy" }, { name: "Milieu Management" }, { name: "Restraint/Seclusion" },
    ]},
    { title: "Medications", skills: [
      { name: "Antipsychotics" }, { name: "Antidepressants" }, { name: "Mood Stabilizers" }, { name: "Anxiolytics" }, { name: "PRN Medications" }, { name: "IM Medications" },
    ]},
    { title: "Legal/Ethical", skills: [
      { name: "Involuntary Commitment" }, { name: "Patient Rights" }, { name: "Confidentiality/HIPAA" }, { name: "Mandatory Reporting" }, { name: "Advance Directives" },
    ]},
  ]},

  { slug: "psychiatric-tech", title: "Psychiatric Tech Skills Checklist", shortTitle: "Psychiatric Tech", icon: "💭", group: "Specialty Care", categories: [
    { title: "General Duties", skills: [
      { name: "Admit/Orient Involuntary Clients" }, { name: "Admit/Orient Voluntary Clients" }, { name: "Advance Directives" }, { name: "Ambulatory Cuffs" }, { name: "Assessment Skills" }, { name: "Behavioral Management" }, { name: "Crisis Intervention" }, { name: "De-escalation" },
    ]},
    { title: "Safety", skills: [
      { name: "Suicide Precautions" }, { name: "Elopement Precautions" }, { name: "Restraint Application" }, { name: "Seclusion" }, { name: "Contraband Search" }, { name: "Environmental Safety Checks" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Vital Signs" }, { name: "Medication Administration" }, { name: "Blood Glucose Monitoring" }, { name: "Specimen Collection" }, { name: "ADL Assistance" },
    ]},
    { title: "Therapeutic Activities", skills: [
      { name: "Group Activities" }, { name: "Recreational Therapy" }, { name: "Therapeutic Communication" }, { name: "Milieu Management" },
    ]},
    { title: "Documentation", skills: [
      { name: "Patient Observation" }, { name: "Incident Reporting" }, { name: "Flow Sheets" }, { name: "Behavioral Charting" },
    ]},
  ]},

  { slug: "hospice", title: "Registered Nurse – Hospice Skills Checklist", shortTitle: "RN – Hospice", icon: "🕊️", group: "Specialty Care", categories: [
    { title: "Work Settings", skills: [
      { name: "Home Hospice" }, { name: "Inpatient Hospice" }, { name: "Pediatric Hospice" }, { name: "Home Health/Hospice Setting" },
    ]},
    { title: "Assessment", skills: [
      { name: "Intake Assessment" }, { name: "Pain Assessment" }, { name: "Symptom Assessment" }, { name: "Psychosocial Assessment" }, { name: "Spiritual Assessment" }, { name: "Bereavement Assessment" },
    ]},
    { title: "Symptom Management", skills: [
      { name: "Pain Management" }, { name: "Dyspnea Management" }, { name: "Nausea/Vomiting" }, { name: "Constipation" }, { name: "Anxiety/Agitation" }, { name: "Delirium" }, { name: "Wound Care" },
    ]},
    { title: "End of Life Care", skills: [
      { name: "Comfort Measures" }, { name: "Active Dying Process" }, { name: "Post-Mortem Care" }, { name: "Family Support" }, { name: "Advance Directives" }, { name: "DNR/DNI Orders" },
    ]},
    { title: "Medications", skills: [
      { name: "Opioid Management" }, { name: "Sublingual Medications" }, { name: "Rectal Medications" }, { name: "Continuous Infusion" }, { name: "PCA Pump" },
    ]},
  ]},

  { slug: "home-health", title: "Registered Nurse – Home Health Skills Checklist", shortTitle: "RN – Home Health", icon: "🏠", group: "Specialty Care", categories: [
    { title: "Cardiovascular", skills: [
      { name: "ACS/Post MI" }, { name: "Heart Failure" }, { name: "Post Cardiac Surgery" }, { name: "Cardiac Auscultation" }, { name: "Peripheral Pulse/Circulation Checks" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "COPD" }, { name: "Pneumonia" }, { name: "Asthma" }, { name: "O2 Therapy" }, { name: "Trach Care" }, { name: "Ventilator Care" },
    ]},
    { title: "Wound Care", skills: [
      { name: "Wound Assessment" }, { name: "Dressing Changes" }, { name: "Wound VAC" }, { name: "Ostomy Care" }, { name: "Pressure Ulcer Prevention" },
    ]},
    { title: "IV Therapy", skills: [
      { name: "IV Insertion" }, { name: "PICC Line Care" }, { name: "IV Antibiotics" }, { name: "TPN" }, { name: "Blood Draws" },
    ]},
    { title: "Diabetic Care", skills: [
      { name: "Blood Glucose Monitoring" }, { name: "Insulin Administration" }, { name: "Diabetic Teaching" }, { name: "Wound Care (Diabetic)" },
    ]},
    { title: "Documentation", skills: [
      { name: "OASIS Assessment" }, { name: "Plan of Care" }, { name: "Medicare Documentation" }, { name: "Physician Orders" }, { name: "Discharge Planning" },
    ]},
  ]},

  { slug: "skilled-nursing", title: "Registered Nurse – Skilled Nursing Skills Checklist", shortTitle: "RN – Skilled Nursing", icon: "🏨", group: "Specialty Care", categories: [
    { title: "General Skills", skills: [
      { name: "Advanced directives" }, { name: "Awareness of HCAHPS" }, { name: "Patient/family teaching" }, { name: "Discharge planning" }, { name: "UR/Medicare review" }, { name: "Lift/transfer devices" }, { name: "Specialty beds" }, { name: "End of life care" },
    ]},
    { title: "Cardiac", skills: [
      { name: "Heart Sounds" }, { name: "CHF Management" }, { name: "Cardiac Monitoring" }, { name: "EKG" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Trach Care" }, { name: "Ventilator Care" }, { name: "O2 Therapy" }, { name: "Suctioning" }, { name: "Chest PT" },
    ]},
    { title: "Wound Care", skills: [
      { name: "Wound Assessment" }, { name: "Dressing Changes" }, { name: "Wound VAC" }, { name: "Pressure Ulcer Prevention" }, { name: "Debridement" },
    ]},
    { title: "Medications", skills: [
      { name: "Medication Administration" }, { name: "IV Medications" }, { name: "G-Tube Medications" }, { name: "Insulin" }, { name: "Controlled Substances" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "long-term-care", title: "Registered Nurse – Long Term Care Skills Checklist", shortTitle: "RN – Long Term Care", icon: "🧓", group: "Specialty Care", categories: [
    { title: "Cardiac", skills: [
      { name: "Use of cardiac monitors" }, { name: "Assessment of heart sounds" }, { name: "Cardiac Arrest" }, { name: "CPR" }, { name: "Care of patients with CHF" }, { name: "Atropine administration" },
    ]},
    { title: "Respiratory", skills: [
      { name: "O2 Therapy" }, { name: "Trach Care" }, { name: "Suctioning" }, { name: "Ventilator Care" }, { name: "Nebulizer Treatments" },
    ]},
    { title: "Medication Administration", skills: [
      { name: "Oral Medications" }, { name: "IM/SQ Injections" }, { name: "G-Tube Medications" }, { name: "Insulin" }, { name: "Narcotic Management" },
    ]},
    { title: "Wound Care", skills: [
      { name: "Wound Assessment" }, { name: "Dressing Changes" }, { name: "Pressure Ulcer Prevention" }, { name: "Skin Assessment" },
    ]},
    { title: "Regulatory", skills: [
      { name: "MDS Documentation" }, { name: "Care Plan Development" }, { name: "State Survey Preparedness" }, { name: "Quality Measures" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "ambulatory", title: "Registered Nurse – Ambulatory Skills Checklist", shortTitle: "RN – Ambulatory", icon: "🚶", group: "Specialty Care", categories: [
    { title: "General Patient Care", skills: [
      { name: "Admit and Assess Patients" }, { name: "Advance Directives" }, { name: "Collect Appropriate Data" }, { name: "Discharge Teaching" }, { name: "Preoperative Teaching" }, { name: "Patient Prep" },
    ]},
    { title: "Clinical Procedures", skills: [
      { name: "Vital Signs" }, { name: "Blood Glucose Monitoring" }, { name: "EKG" }, { name: "Phlebotomy" }, { name: "Specimen Collection" }, { name: "Wound Care" },
    ]},
    { title: "Medication Administration", skills: [
      { name: "Oral Medications" }, { name: "IM/SQ Injections" }, { name: "IV Medications" }, { name: "Immunizations" }, { name: "Allergy Testing" },
    ]},
    { title: "Surgical Procedures", skills: [
      { name: "Pre-op Assessment" }, { name: "Conscious Sedation" }, { name: "Post-op Recovery" }, { name: "Discharge Criteria" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "infection-control", title: "Registered Nurse – Infection Control Skills Checklist", shortTitle: "RN – Infection Control", icon: "🦠", group: "Specialty Care", categories: [
    { title: "Surveillance", skills: [
      { name: "Performs targeted surveillance" }, { name: "Outbreak investigations" }, { name: "Collaboration with Infection Control Committee" }, { name: "Collaboration with Hospital Epidemiologist" }, { name: "Performance improvement projects" },
    ]},
    { title: "Prevention", skills: [
      { name: "Hand Hygiene Monitoring" }, { name: "Isolation Precautions" }, { name: "Standard Precautions" }, { name: "Surgical Site Infection Prevention" }, { name: "CLABSI Prevention" }, { name: "CAUTI Prevention" }, { name: "VAP Prevention" },
    ]},
    { title: "Education", skills: [
      { name: "Staff Education" }, { name: "Patient/Family Education" }, { name: "New Employee Orientation" }, { name: "Annual Competency Training" },
    ]},
    { title: "Regulatory", skills: [
      { name: "Joint Commission Standards" }, { name: "CMS Requirements" }, { name: "State Health Department" }, { name: "OSHA Standards" }, { name: "CDC Guidelines" },
    ]},
    { title: "Reporting", skills: [
      { name: "NHSN Reporting" }, { name: "State Reporting Requirements" }, { name: "Antibiogram Development" }, { name: "Annual Reports" },
    ]},
  ]},
];
