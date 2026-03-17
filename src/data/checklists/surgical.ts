import { ChecklistSpec } from "../checklistData";

export const surgicalChecklists: ChecklistSpec[] = [
  { slug: "or", title: "Operating Room Skills Checklist", shortTitle: "Operating Room (OR)", icon: "🔪", group: "Surgical", categories: [
    { title: "Work Setting", skills: [
      { name: "General OR" }, { name: "CVOR" }, { name: "Outpatient" }, { name: "Trauma" }, { name: "Peds-General OR" }, { name: "Peds-CVOR" },
    ]},
    { title: "General Surgery", skills: [
      { name: "Appendectomy" }, { name: "Cholecystectomy" }, { name: "Colectomy/Bowel Resection" }, { name: "Mastectomy" }, { name: "Hernia Repair" }, { name: "Thyroidectomy" }, { name: "Gastrectomy" }, { name: "Exploratory Laparotomy" },
    ]},
    { title: "Orthopedic Surgery", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "ORIF" }, { name: "Arthroscopy" }, { name: "Spinal Surgery" }, { name: "Rotator Cuff Repair" },
    ]},
    { title: "Cardiovascular/Thoracic", skills: [
      { name: "CABG" }, { name: "Valve Replacement" }, { name: "Thoracotomy" }, { name: "Aortic Aneurysm Repair" }, { name: "Pacemaker/AICD Insertion" },
    ]},
    { title: "Neurosurgery", skills: [
      { name: "Craniotomy" }, { name: "Laminectomy" }, { name: "Spinal Fusion" }, { name: "VP Shunt" },
    ]},
    { title: "GU/GYN", skills: [
      { name: "Hysterectomy" }, { name: "C-Section" }, { name: "TURP" }, { name: "Nephrectomy" }, { name: "Cystoscopy" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "or-surg", title: "OR Surgical Skills Checklist", shortTitle: "OR Surgical", icon: "✂️", group: "Surgical", categories: [
    { title: "General Surgery", skills: [
      { name: "Abdominal Perineal Resection" }, { name: "Appendectomy/Cholecystectomy" }, { name: "Breast Biopsy" }, { name: "Colon Resection/Surgery" }, { name: "Gastrectomy" }, { name: "Hernia Repair" }, { name: "Mastectomy" }, { name: "Thyroidectomy" }, { name: "Exploratory Laparotomy" },
    ]},
    { title: "Laparoscopic Procedures", skills: [
      { name: "Laparoscopic Cholecystectomy" }, { name: "Laparoscopic Hernia" }, { name: "Laparoscopic Nissen" }, { name: "Laparoscopic Appendectomy" },
    ]},
    { title: "Orthopedic Surgery", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "ORIF" }, { name: "Arthroscopy" }, { name: "Spinal Surgery" }, { name: "Rotator Cuff Repair" }, { name: "Carpal Tunnel Release" },
    ]},
    { title: "Neurosurgery", skills: [
      { name: "Craniotomy" }, { name: "Laminectomy" }, { name: "Spinal Fusion" }, { name: "VP Shunt" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "perioperative", title: "Perioperative Skills Checklist", shortTitle: "Perioperative", icon: "🏗️", group: "Surgical", categories: [
    { title: "IV Therapy", skills: [
      { name: "Start peripheral IV" }, { name: "Insertion of A-lines" }, { name: "Insertion of CVP - jugular" }, { name: "Insertion of CVP - subclavian" }, { name: "Insertion of Swan-Ganz" },
    ]},
    { title: "Pre-operative Care", skills: [
      { name: "Patient assessment" }, { name: "Consent verification" }, { name: "Site marking" }, { name: "Time out procedure" }, { name: "Medication reconciliation" },
    ]},
    { title: "Intra-operative Care", skills: [
      { name: "Circulating" }, { name: "Scrubbing" }, { name: "Positioning" }, { name: "Specimen handling" }, { name: "Counts (sponge, sharps, instruments)" },
    ]},
    { title: "Post-operative Care", skills: [
      { name: "PACU recovery" }, { name: "Pain management" }, { name: "Discharge criteria assessment" }, { name: "Wound assessment" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "surgical-tech", title: "Surgical Technologist Skills Checklist", shortTitle: "Surgical Tech", icon: "🩹", group: "Surgical", categories: [
    { title: "General Surgery", skills: [
      { name: "AKA/BKA (amputation)" }, { name: "Abdominal-Perineal Resection" }, { name: "Cholecystectomy (Open)" }, { name: "Exploratory Laparotomy" }, { name: "Appendectomy" },
    ]},
    { title: "Laparoscopic Procedures", skills: [
      { name: "Laparoscopic Cholecystectomy" }, { name: "Laparoscopic Hernia" }, { name: "Laparoscopic Appendectomy" }, { name: "Laparoscopic Nissen" },
    ]},
    { title: "Orthopedic", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "ORIF" }, { name: "Arthroscopy" }, { name: "Spinal Surgery" },
    ]},
    { title: "Cardiovascular/Thoracic", skills: [
      { name: "CABG" }, { name: "Valve Replacement" }, { name: "Thoracotomy" }, { name: "Pacemaker Insertion" },
    ]},
    { title: "Neurosurgery", skills: [
      { name: "Craniotomy" }, { name: "Laminectomy" }, { name: "VP Shunt" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "sterile-processing-tech", title: "Sterile Processing Technician Skills Checklist", shortTitle: "Sterile Processing Tech", icon: "🧼", group: "Surgical", categories: [
    { title: "Processing", skills: [
      { name: "Single instruments" }, { name: "Endoscopes" }, { name: "Repair" }, { name: "Sets/Trays" }, { name: "Care of instruments" },
    ]},
    { title: "Decontamination", skills: [
      { name: "Manual cleaning" }, { name: "Ultrasonic cleaning" }, { name: "Automated washers" }, { name: "Chemical disinfection" },
    ]},
    { title: "Sterilization", skills: [
      { name: "Steam sterilization" }, { name: "ETO sterilization" }, { name: "Sterrad/Plasma sterilization" }, { name: "Biological indicators" }, { name: "Chemical indicators" },
    ]},
    { title: "Distribution", skills: [
      { name: "Case cart system" }, { name: "Inventory management" }, { name: "Par level maintenance" }, { name: "Implant tracking" },
    ]},
  ]},

  { slug: "endoscopy", title: "Endoscopy Skills Checklist", shortTitle: "Endoscopy", icon: "🔬", group: "Surgical", categories: [
    { title: "Procedures", skills: [
      { name: "Assist with EGDs" }, { name: "Assist with endoscopic ultrasound" }, { name: "Assist with active GI bleed" }, { name: "Cautery devices" }, { name: "Assist with manometry studies" }, { name: "Assist with variceal banding" }, { name: "Assist with esophageal dilatations" }, { name: "Assist with esophageal ballooning" }, { name: "Assist with sclerotherapy" }, { name: "Assist with TEE" }, { name: "Assist with bronchoscopy" }, { name: "Assist with colonoscopy" }, { name: "Assist with polypectomy" }, { name: "Assist with ERCPs" }, { name: "Assist with PEG placements" }, { name: "Assist with liver biopsy" }, { name: "Specimen collection & labeling" }, { name: "Set up of scopes & video equipment" }, { name: "Scope cleaning" }, { name: "Radiation safety" },
    ]},
    { title: "Conscious Sedation", skills: [
      { name: "Fentanyl" }, { name: "Propofol" }, { name: "Demerol" }, { name: "Versed" }, { name: "Reversal agents" },
    ]},
    { title: "Pre/Post Procedure", skills: [
      { name: "Pre procedure phone calls" }, { name: "Patient assessment" }, { name: "Colon prep" }, { name: "IV start, med admin" }, { name: "Post procedure assessment" }, { name: "Discharge outpatients" },
    ]},
    { title: "Age Specific", skills: [
      { name: "Newborn/neonate (birth-30 days)" }, { name: "Infant (31 days-1 year)" }, { name: "Toddler (ages 2-3 years)" }, { name: "Preschool (ages 4-5 years)" }, { name: "School age (ages 6-12 years)" }, { name: "Adolescent (ages 13-21 years)" }, { name: "Young adult (ages 22-39 years)" }, { name: "Adult (ages 40-64 years)" }, { name: "Older adult (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "rn-endoscopy", title: "RN Endoscopy Skills Checklist", shortTitle: "RN Endoscopy", icon: "🔭", group: "Surgical", categories: [
    { title: "Procedures", skills: [
      { name: "Assist with EGDs" }, { name: "Assist with endoscopic ultrasound" }, { name: "Assist with active GI bleed" }, { name: "Cautery devices" }, { name: "Assist with manometry studies" }, { name: "Assist with variceal banding" }, { name: "Assist with esophageal dilatations" }, { name: "Assist with esophageal ballooning" }, { name: "Assist with sclerotherapy" }, { name: "Assist with TEE" }, { name: "Assist with bronchoscopy" }, { name: "Assist with colonoscopy" }, { name: "Assist with polypectomy" }, { name: "Assist with ERCPs" }, { name: "Assist with PEG placements" }, { name: "Assist with liver biopsy" }, { name: "Specimen collection & labeling" }, { name: "Set up of scopes & video equipment" }, { name: "Apply external abdominal pressure" }, { name: "Scope cleaning" }, { name: "Assist with mobile cases (ICU, ER)" }, { name: "Radiation safety" }, { name: "Automated Medication Dispensing System" }, { name: "Takes call for emergency cases" }, { name: "National Patient Safety Goals" }, { name: "Awareness of HCAHPS" }, { name: "Accurate patient identification" }, { name: "Effective communication" }, { name: "Interpretation & communication of lab values" }, { name: "Medication administration" }, { name: "Labeling (medications & specimens)" }, { name: "Anticoagulation therapy" }, { name: "Monitoring conscious sedation" }, { name: "Pain assessment & management" }, { name: "Infection control" }, { name: "Universal precautions" }, { name: "Isolation" }, { name: "Minimize risk for falls" }, { name: "Prevention of pressure ulcers" }, { name: "Use of rapid response teams" },
    ]},
    { title: "Administer Conscious Sedation", skills: [
      { name: "Fentanyl" }, { name: "Propofol" }, { name: "Demerol" }, { name: "Presedex" }, { name: "Versed" }, { name: "Reversal agents" },
    ]},
    { title: "Pre Procedure", skills: [
      { name: "Pre procedure phone calls" }, { name: "Electronic documentation" }, { name: "Patient assessment" }, { name: "Colon prep or re-prep" }, { name: "Pre procedure checklist/consent" }, { name: "IV start, med admin" },
    ]},
    { title: "Post Procedure", skills: [
      { name: "Assess for air movement post colonoscopy" }, { name: "Assess for pain" }, { name: "Assess for bowel sounds" }, { name: "Assess for gag reflex post EGD" }, { name: "Assess for gag reflex post bronchoscopy" }, { name: "Recover from MAC" }, { name: "Recover from conscious sedation" }, { name: "Discharge outpatients to home" }, { name: "Post procedure phone calls" },
    ]},
    { title: "Age Specific", skills: [
      { name: "Newborn/neonate (birth-30 days)" }, { name: "Infant (31 days-1 year)" }, { name: "Toddler (ages 2-3 years)" }, { name: "Preschool (ages 4-5 years)" }, { name: "School age (ages 6-12 years)" }, { name: "Adolescent (ages 13-21 years)" }, { name: "Young adult (ages 22-39 years)" }, { name: "Adult (ages 40-64 years)" }, { name: "Older adult (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},
];
