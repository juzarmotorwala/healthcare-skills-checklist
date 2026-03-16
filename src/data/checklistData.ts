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

export const checklists: ChecklistSpec[] = [
  // ── NURSING ──
  { slug: "rn", title: "Registered Nurse Skills Checklist", shortTitle: "Registered Nurse (RN)", icon: "🩺", group: "Nursing", categories: [
    { title: "Medication Administration", skills: [
      { name: "Documentation on M.A.R." }, { name: "Dose calculation" }, { name: "Generic equivalents" }, { name: "Usage of PDR" }, { name: "Knowledge of drug actions/interactions" }, { name: "Verification of narcotic wastage" }, { name: "Oral medications" }, { name: "Sublingual medications" }, { name: "Intradermal medications" }, { name: "Parenteral medications" }, { name: "Subcutaneous medications" }, { name: "Intramuscular medications" }, { name: "Topical medications" }, { name: "Eye drops" }, { name: "Ear drops" }, { name: "Swallowing precautions" }, { name: "Inventory and storage control" },
    ]},
    { title: "Infectious Control", skills: [
      { name: "AIDS/HIV interaction" }, { name: "Hepatitis interaction" }, { name: "Hospice" }, { name: "MRSA" }, { name: "VRE" }, { name: "Fever management" }, { name: "Interpretation of labs" }, { name: "Decubitus/Wound care (Contaminated)" }, { name: "Linen - Transporting, storing, & Handling" }, { name: "Proper disposal of sharps and waste" }, { name: "Standard precautions" },
    ]},
    { title: "Pain Management", skills: [
      { name: "Documentation and assessment of site, character, & frequency of pain" }, { name: "Assessment of pain levels" }, { name: "Documentation of response to pain medications" },
    ]},
    { title: "Intravenous Therapy", skills: [
      { name: "I.V. certified" }, { name: "Administration of I.V. antibiotics" }, { name: "Administration of I.V. fluids" }, { name: "Administration of I.V. pain medications" }, { name: "Administration of I.V. cardiac meds" }, { name: "Blood draws - peripheral" }, { name: "Blood draws - central line" }, { name: "Blood draws - implanted catheter" }, { name: "Care of I.V. site - peripheral" }, { name: "Care of I.V. site - central line" }, { name: "I.V. dose calculations" }, { name: "I.V. insertion - peripheral" }, { name: "Use of infusion pumps" },
    ]},
    { title: "Diabetic Care", skills: [
      { name: "Diabetic monitoring" }, { name: "S/S hyper/hypoglycemia" }, { name: "Diabetic patient teaching" }, { name: "Performing fingersticks" }, { name: "Use of glucometers" }, { name: "Insulin infusions" }, { name: "Regular, long-acting insulin" }, { name: "Mixed insulin" },
    ]},
    { title: "Orthopedics", skills: [
      { name: "Assessment of circulation" }, { name: "Assessment of gait" }, { name: "Assessment of range of motion" }, { name: "Amputation care" }, { name: "Post-arthroscopy care" }, { name: "Casts and related care" }, { name: "Total hip replacement" }, { name: "Total knee replacement" },
    ]},
    { title: "Cardiovascular Problems", skills: [
      { name: "Auscultation of rate/rhythm" }, { name: "Blood pressure" }, { name: "Doppler" }, { name: "Pulses" }, { name: "CPR" }, { name: "Angina" }, { name: "Congestive heart failure" },
    ]},
    { title: "Wounds, Pressure Sores, and Skin Impairments", skills: [
      { name: "Assessment and care of post-surgical wounds" }, { name: "Assessment, prevention, and care of pressure ulcers" }, { name: "Dressing changes - aseptic" }, { name: "Dressing changes - sterile" }, { name: "Wound irrigation" }, { name: "Staple and suture removal" },
    ]},
  ]},
  { slug: "lpn", title: "Licensed Practical Nurse Skills Checklist", shortTitle: "LPN", icon: "💉", group: "Nursing", categories: [] },
  { slug: "cna", title: "Certified Nursing Assistant Skills Checklist", shortTitle: "CNA", icon: "🤲", group: "Nursing", categories: [] },
  { slug: "rn-supervisor", title: "RN Supervisor Skills Checklist", shortTitle: "RN Supervisor", icon: "👩‍⚕️", group: "Nursing", categories: [] },
  { slug: "rn-occupational", title: "RN Occupational Skills Checklist", shortTitle: "RN Occupational", icon: "🏥", group: "Nursing", categories: [] },
  { slug: "rn-appeals-writer", title: "RN Appeals Writer Skills Checklist", shortTitle: "RN Appeals Writer", icon: "📝", group: "Nursing", categories: [] },
  { slug: "nurse-practitioner", title: "Nurse Practitioner Skills Checklist", shortTitle: "Nurse Practitioner", icon: "⚕️", group: "Nursing", categories: [] },
  { slug: "travel-nursing", title: "Travel Nursing Skills Checklist", shortTitle: "Travel Nursing", icon: "✈️", group: "Nursing", categories: [] },
  { slug: "don", title: "Director of Nursing Skills Checklist", shortTitle: "Director of Nursing (DON)", icon: "👑", group: "Nursing", categories: [] },
  { slug: "administrative-rn", title: "Administrative Registered Nurse Skills Checklist", shortTitle: "Administrative RN", icon: "📋", group: "Nursing", categories: [] },

  // ── CRITICAL CARE ──
  { slug: "icu", title: "ICU Skills Checklist", shortTitle: "ICU", icon: "🫀", group: "Critical Care", categories: [
    { title: "Cardiac", skills: [
      { name: "Defibrillation/Cardioversion" }, { name: "Assisting with Insertion of Central Lines" }, { name: "Pacemakers - External" }, { name: "Permanent or Temporary Pacemaker" }, { name: "Cardiac Arrest/CPR" }, { name: "A-Line (Transducer setup-D/C)" }, { name: "Swan Ganz (Transducer setup-D/C)" }, { name: "Balloon Pump (IABP)" }, { name: "SVO2 Monitoring" }, { name: "Automatic Internal Cardioverter Defib" },
    ]},
    { title: "Care of Patient With", skills: [
      { name: "Aneurysm" }, { name: "Acute MI/Unstable Angina" }, { name: "Cardiogenic/Hypovolemic Shock" }, { name: "Pre/Post Cardiac Surgery" }, { name: "Heart Transplant" }, { name: "PTCA" }, { name: "COPD" }, { name: "ARDS" }, { name: "Pulmonary Embolism" }, { name: "CVA" }, { name: "Seizure Disorder" }, { name: "Overdose" }, { name: "Neuro Injury/Trauma" }, { name: "Pancreatitis" }, { name: "GI Bleed" }, { name: "Renal Transplant" },
    ]},
    { title: "Use and Administration of Medications", skills: [
      { name: "Atropine" }, { name: "Dopamine" }, { name: "Dobutrex" }, { name: "Lidocaine" }, { name: "NTG" }, { name: "Morphine (Titrate)" }, { name: "Verapamil" }, { name: "Thrombolytic Agents" }, { name: "Prep/Titration of Emergency Drugs" }, { name: "Corticosteroids" }, { name: "Dilantin" }, { name: "Magnesium Sulfate" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Lung Transplant" }, { name: "Establishing an Airway" }, { name: "Pulse Oximetry" }, { name: "Interpretation of ABG" }, { name: "Drawing ABG Blood Sample from A-Line" }, { name: "Incentive Spirometer" },
    ]},
    { title: "Neurology", skills: [
      { name: "Assessment of Neuro Signs" }, { name: "Use of Glasgow Coma Scale" }, { name: "Seizure Precautions" }, { name: "Assist with Lumbar Puncture" }, { name: "ICP Monitoring" }, { name: "Cranial Nerve Assessment" }, { name: "LOC Assessment" },
    ]},
    { title: "Vascular", skills: [
      { name: "Peripheral Pulses" }, { name: "Fluid Overload" }, { name: "Starting IVs" }, { name: "Subcutaneous Central Line" }, { name: "TPN/Hyperalimentation" }, { name: "Infusion Pump" }, { name: "Peritoneal Dialysis" }, { name: "Hemodialysis" },
    ]},
    { title: "Gastrointestinal", skills: [
      { name: "NG Tube Insertion" }, { name: "Gastrostomy Tube" }, { name: "Jejunostomy Tube" }, { name: "Enterostomal Care" },
    ]},
    { title: "Equipment", skills: [
      { name: "Bear I" }, { name: "Bear II" }, { name: "Bennett 7200" }, { name: "CPAP" }, { name: "PEEP" }, { name: "Servo 900c" }, { name: "Hewlett-Packard" }, { name: "Spacelab" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},
  { slug: "critical-care", title: "Critical Care Skills Checklist", shortTitle: "Critical Care", icon: "💓", group: "Critical Care", categories: [] },
  { slug: "telemetry", title: "Telemetry Skills Checklist", shortTitle: "Telemetry", icon: "📊", group: "Critical Care", categories: [] },
  { slug: "telemetry-stepdown", title: "Telemetry Stepdown Skills Checklist", shortTitle: "Telemetry Stepdown", icon: "📉", group: "Critical Care", categories: [] },
  { slug: "intermediate-care", title: "Intermediate Care Skills Checklist", shortTitle: "Intermediate Care", icon: "🔄", group: "Critical Care", categories: [] },
  { slug: "pacu", title: "PACU Skills Checklist", shortTitle: "PACU", icon: "😴", group: "Critical Care", categories: [] },
  { slug: "cvor", title: "CVOR Skills Checklist", shortTitle: "CVOR", icon: "❤️‍🔥", group: "Critical Care", categories: [] },

  // ── SURGICAL ──
  { slug: "or", title: "Operating Room Skills Checklist", shortTitle: "Operating Room (OR)", icon: "🔪", group: "Surgical", categories: [] },
  { slug: "or-surg", title: "OR Surgical Skills Checklist", shortTitle: "OR Surgical", icon: "✂️", group: "Surgical", categories: [] },
  { slug: "perioperative", title: "Perioperative Skills Checklist", shortTitle: "Perioperative", icon: "🏗️", group: "Surgical", categories: [] },
  { slug: "surgical-tech", title: "Surgical Technologist Skills Checklist", shortTitle: "Surgical Tech", icon: "🩹", group: "Surgical", categories: [] },
  { slug: "sterile-processing-tech", title: "Sterile Processing Technician Skills Checklist", shortTitle: "Sterile Processing Tech", icon: "🧼", group: "Surgical", categories: [] },
  { slug: "endoscopy", title: "Endoscopy Skills Checklist", shortTitle: "Endoscopy", icon: "🔬", group: "Surgical", categories: [] },
  { slug: "rn-endoscopy", title: "RN Endoscopy Skills Checklist", shortTitle: "RN Endoscopy", icon: "🔭", group: "Surgical", categories: [] },

  // ── EMERGENCY ──
  { slug: "emergency-department", title: "Emergency Department Skills Checklist", shortTitle: "Emergency Department", icon: "🚨", group: "Critical Care", categories: [
    { title: "Work Settings", skills: [
      { name: "Level I Trauma Center" }, { name: "Level II Trauma Center" }, { name: "Non-Trauma Center Emergency Department" }, { name: "Pediatric Emergency Department" }, { name: "Emergency Department - Combined Adult/Pediatric" },
    ]},
    { title: "Cardiac", skills: [
      { name: "Defibrillation/Cardioversion" }, { name: "Assisting with Insertion of Central Lines" }, { name: "12-Lead EKG" }, { name: "Cardiac Arrest/CPR" }, { name: "Cardiac Monitoring" }, { name: "Pacemakers - External" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Establishing an Airway" }, { name: "Pulse Oximetry" }, { name: "Interpretation of ABG" }, { name: "Incentive Spirometer" }, { name: "Tracheostomy Care" }, { name: "Ventilator Care" }, { name: "Chest Tube Management" },
    ]},
    { title: "Trauma", skills: [
      { name: "Cervical Spine Immobilization" }, { name: "Fracture/Splinting" }, { name: "Wound Management" }, { name: "Burns Assessment and Care" }, { name: "Head Injury Assessment" }, { name: "Abdominal Trauma" },
    ]},
    { title: "Medication Administration", skills: [
      { name: "IV Push Medications" }, { name: "IV Drip Medications" }, { name: "Blood Administration" }, { name: "Conscious Sedation" }, { name: "Rapid Sequence Intubation Meds" }, { name: "Thrombolytic Administration" },
    ]},
    { title: "Triage", skills: [
      { name: "Emergency Severity Index (ESI)" }, { name: "Telephone Triage" }, { name: "Disaster Triage" }, { name: "Pediatric Triage" },
    ]},
  ]},
  { slug: "emt", title: "Emergency Medical Technician Skills Checklist", shortTitle: "EMT", icon: "🚑", group: "Critical Care", categories: [] },
  { slug: "urgent-care", title: "Urgent Care Skills Checklist", shortTitle: "Urgent Care", icon: "⏰", group: "Critical Care", categories: [] },

  // ── PEDIATRIC & MATERNAL ──
  { slug: "pediatric", title: "Pediatric Skills Checklist", shortTitle: "Pediatric", icon: "👶", group: "Pediatric & Maternal", categories: [] },
  { slug: "pediatric-er", title: "Pediatric ER Skills Checklist", shortTitle: "Pediatric ER", icon: "🧒", group: "Pediatric & Maternal", categories: [] },
  { slug: "picu", title: "PICU Skills Checklist", shortTitle: "PICU", icon: "🍼", group: "Pediatric & Maternal", categories: [] },
  { slug: "nicu", title: "NICU Skills Checklist", shortTitle: "NICU", icon: "👣", group: "Pediatric & Maternal", categories: [] },
  { slug: "labor-delivery", title: "Labor & Delivery Skills Checklist", shortTitle: "Labor & Delivery", icon: "🤰", group: "Pediatric & Maternal", categories: [] },
  { slug: "ob-labor-delivery", title: "OB Labor & Delivery Skills Checklist", shortTitle: "OB Labor & Delivery", icon: "🫄", group: "Pediatric & Maternal", categories: [] },
  { slug: "post-partum", title: "Post Partum Skills Checklist", shortTitle: "Post Partum", icon: "🤱", group: "Pediatric & Maternal", categories: [] },

  // ── THERAPY & REHAB ──
  { slug: "pt-self", title: "Physical Therapy Self-Assessment Skills Checklist", shortTitle: "PT Self-Assessment", icon: "🏃", group: "Therapy & Rehab", categories: [] },
  { slug: "pt-pta", title: "PT/PTA Skills Checklist", shortTitle: "PT/PTA", icon: "🦿", group: "Therapy & Rehab", categories: [] },
  { slug: "ot", title: "Occupational Therapy Skills Checklist", shortTitle: "Occupational Therapy", icon: "🧩", group: "Therapy & Rehab", categories: [] },
  { slug: "slp", title: "Speech-Language Pathology Skills Checklist", shortTitle: "SLP", icon: "🗣️", group: "Therapy & Rehab", categories: [] },
  { slug: "rrt", title: "Registered Respiratory Therapist Skills Checklist", shortTitle: "RRT", icon: "🫁", group: "Therapy & Rehab", categories: [] },
  { slug: "acute-rehab", title: "Acute Rehab Skills Checklist", shortTitle: "Acute Rehab", icon: "🏋️", group: "Therapy & Rehab", categories: [] },

  // ── DIAGNOSTIC & LAB ──
  { slug: "medical-laboratory", title: "Medical Laboratory Skills Checklist", shortTitle: "Medical Laboratory", icon: "🧪", group: "Diagnostic & Lab", categories: [] },
  { slug: "medical-technologist", title: "Medical Technologist Skills Checklist", shortTitle: "Medical Technologist", icon: "🔬", group: "Diagnostic & Lab", categories: [] },
  { slug: "radiology-tech", title: "Radiology Technologist Skills Checklist", shortTitle: "Radiology Tech", icon: "☢️", group: "Diagnostic & Lab", categories: [] },
  { slug: "ct-tech", title: "CT Technologist Skills Checklist", shortTitle: "CT Tech", icon: "🖥️", group: "Diagnostic & Lab", categories: [] },
  { slug: "interventional-radiology", title: "Interventional Radiology Skills Checklist", shortTitle: "Interventional Radiology", icon: "📡", group: "Diagnostic & Lab", categories: [] },
  { slug: "cardiac-echo", title: "Cardiac Echocardiography Skills Checklist", shortTitle: "Cardiac Echo", icon: "💗", group: "Diagnostic & Lab", categories: [] },
  { slug: "cardiac-echocardiography", title: "Cardiac Echocardiography Skills Checklist (Advanced)", shortTitle: "Cardiac Echocardiography", icon: "🫀", group: "Diagnostic & Lab", categories: [] },
  { slug: "cath-lab", title: "Cath Lab / Interventional Radiology Skills Checklist", shortTitle: "Cath Lab", icon: "🏥", group: "Diagnostic & Lab", categories: [] },
  { slug: "phlebotomy", title: "Phlebotomy Competency Skills Checklist", shortTitle: "Phlebotomy", icon: "💉", group: "Diagnostic & Lab", categories: [] },

  // ── SPECIALTY CARE ──
  { slug: "medsurg", title: "Med/Surg Skills Checklist", shortTitle: "Med/Surg", icon: "🩻", group: "Specialty Care", categories: [] },
  { slug: "oncology", title: "Oncology Skills Checklist", shortTitle: "Oncology", icon: "🎗️", group: "Specialty Care", categories: [] },
  { slug: "dialysis-nursing", title: "Dialysis Nursing Skills Checklist", shortTitle: "Dialysis Nursing", icon: "🫘", group: "Specialty Care", categories: [] },
  { slug: "dialysis-clinical", title: "Dialysis Clinical Skills Checklist", shortTitle: "Dialysis Clinical", icon: "💧", group: "Specialty Care", categories: [] },
  { slug: "wound-care", title: "Wound Care Skills Checklist", shortTitle: "Wound Care", icon: "🩹", group: "Specialty Care", categories: [] },
  { slug: "psychiatry", title: "Psychiatry Skills Checklist", shortTitle: "Psychiatry", icon: "🧠", group: "Specialty Care", categories: [] },
  { slug: "psychiatric-tech", title: "Psychiatric Tech Skills Checklist", shortTitle: "Psychiatric Tech", icon: "💭", group: "Specialty Care", categories: [] },
  { slug: "hospice", title: "Hospice Skills Checklist", shortTitle: "Hospice", icon: "🕊️", group: "Specialty Care", categories: [] },
  { slug: "home-health", title: "Home Health Skills Checklist", shortTitle: "Home Health", icon: "🏠", group: "Specialty Care", categories: [] },
  { slug: "skilled-nursing", title: "Skilled Nursing Skills Checklist", shortTitle: "Skilled Nursing", icon: "🏨", group: "Specialty Care", categories: [] },
  { slug: "long-term-care", title: "Long Term Care Skills Checklist", shortTitle: "Long Term Care", icon: "🧓", group: "Specialty Care", categories: [] },
  { slug: "ambulatory", title: "Ambulatory Skills Checklist", shortTitle: "Ambulatory", icon: "🚶", group: "Specialty Care", categories: [] },
  { slug: "infection-control", title: "Infection Control Skills Checklist", shortTitle: "Infection Control", icon: "🦠", group: "Specialty Care", categories: [] },

  // ── ADMINISTRATION & LEADERSHIP ──
  { slug: "case-management", title: "Case Management / Utilization Skills Checklist", shortTitle: "Case Management", icon: "📂", group: "Administration & Leadership", categories: [] },
  { slug: "healthcare-leadership", title: "Healthcare Leadership Competencies Checklist", shortTitle: "Healthcare Leadership", icon: "🎯", group: "Administration & Leadership", categories: [] },
  { slug: "social-worker", title: "Social Worker Skills Checklist", shortTitle: "Social Worker", icon: "🤝", group: "Administration & Leadership", categories: [] },

  // ── ALLIED HEALTH ──
  { slug: "pharmacist", title: "Pharmacist Skills Checklist", shortTitle: "Pharmacist", icon: "💊", group: "Allied Health", categories: [] },
  { slug: "pharmacy-technician", title: "Pharmacy Technician Skills Checklist", shortTitle: "Pharmacy Technician", icon: "🧴", group: "Allied Health", categories: [] },
  { slug: "medical-assistant", title: "Medical Assistant Skills Checklist", shortTitle: "Medical Assistant", icon: "🩺", group: "Allied Health", categories: [] },
  { slug: "patient-care-tech", title: "Patient Care Technician Skills Checklist", shortTitle: "Patient Care Tech", icon: "🫂", group: "Allied Health", categories: [] },
  { slug: "pct", title: "PCT Skills Checklist", shortTitle: "PCT", icon: "🤲", group: "Allied Health", categories: [] },
];

export function getChecklistBySlug(slug: string): ChecklistSpec | undefined {
  return checklists.find(c => c.slug === slug);
}

export function getChecklistsByGroup(group: string): ChecklistSpec[] {
  return checklists.filter(c => c.group === group);
}
