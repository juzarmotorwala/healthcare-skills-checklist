import { ChecklistSpec } from "../checklistData";

export const surgicalChecklists: ChecklistSpec[] = [
  { slug: "or", title: "Registered Nurse – Operating Room Skills Checklist", shortTitle: "RN – Operating Room", icon: "🔪", group: "Surgical", categories: [
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
    { title: "Circulating Duties", skills: [
      { name: "Sponge, Sharps & Instrument Counts" }, { name: "Patient Positioning" }, { name: "Specimen Handling and Labeling" }, { name: "Intraoperative Documentation" }, { name: "Fire Safety Protocol" }, { name: "Time-Out/Patient Advocacy" },
    ]},
    { title: "Scrub Duties", skills: [
      { name: "Sterile Field Setup and Maintenance" }, { name: "Instrument Passing Technique" }, { name: "Gowning and Gloving (Self and Team)" }, { name: "Back-Table/Mayo Stand Setup" },
    ]},
    { title: "Anesthesia Assist", skills: [
      { name: "Positioning for Induction" }, { name: "Airway Equipment Assist" }, { name: "Regional Block Assist" }, { name: "Malignant Hyperthermia Response" },
    ]},
    { title: "Equipment & Technology", skills: [
      { name: "Electrocautery Setup" }, { name: "Robotic Surgical System Assist (da Vinci)" }, { name: "C-Arm/Fluoroscopy Positioning" }, { name: "Laser Safety" },
    ]},
    { title: "Sterile Technique & Safety", skills: [
      { name: "Surgical Asepsis Principles" }, { name: "Sterile Field Break/Correction" }, { name: "Surgical Skin Prep Technique" }, { name: "Universal Protocol Compliance" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "Malignant Hyperthermia Cart" }, { name: "Massive Hemorrhage Protocol" }, { name: "Emergency Conversion (Lap to Open)" }, { name: "Code Response in OR" },
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

  { slug: "perioperative", title: "Registered Nurse – Perioperative Skills Checklist", shortTitle: "RN – Perioperative", icon: "🏗️", group: "Surgical", categories: [
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
    { title: "Infection Control & Emergency Preparedness", skills: [
      { name: "Follow Required Infection Prevention Protocols (PPE)" }, { name: "Point of Use Cleaning of Flexible Endoscopes" }, { name: "High-Level Disinfection/Reprocessing of Endoscopes" }, { name: "Maintain Basic Life Support (BLS) Certification" }, { name: "Emergency Patient Care Response" },
    ]},
    { title: "Age Specific", skills: [
      { name: "Newborn/neonate (birth-30 days)" }, { name: "Infant (31 days-1 year)" }, { name: "Toddler (ages 2-3 years)" }, { name: "Preschool (ages 4-5 years)" }, { name: "School age (ages 6-12 years)" }, { name: "Adolescent (ages 13-21 years)" }, { name: "Young adult (ages 22-39 years)" }, { name: "Adult (ages 40-64 years)" }, { name: "Older adult (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "rn-endoscopy", title: "RN Endoscopy Skills Checklist", shortTitle: "RN Endoscopy", icon: "🔭", group: "Surgical", categories: [
    { title: "General & Assessment", skills: [
      { name: "Knowledge of Contraindications for Scheduled Procedure" }, { name: "Application of Monitoring Devices (e.g., Pulse Oximeter, Blood Pressure Cuff, 3 Lead EKG)" }, { name: "Review Preoperative Patient Data and Report Significant Findings" }, { name: "Verify Patient Allergies" }, { name: "Follow Ethical, Legal, and Privacy Requirements When Collecting, Maintaining, and Disseminating Patient Data" }, { name: "Verify NPO Status and Prep Completion (When Indicated)" }, { name: "Conduct Preoperative Interview and Assessment" }, { name: "Formulate Nursing Diagnosis Based on Comprehensive Assessment, Health Record Review, and Knowledge of Individual Patient" },
    ]},
    { title: "Procedures", skills: [
      { name: "Assist with EGDs" }, { name: "Assist with endoscopic ultrasound" }, { name: "Assist with active GI bleed" }, { name: "Cautery devices" }, { name: "Assist with manometry studies" }, { name: "Assist with variceal banding" }, { name: "Assist with esophageal dilatations" }, { name: "Assist with esophageal ballooning" }, { name: "Assist with sclerotherapy" }, { name: "Assist with TEE" }, { name: "Assist with bronchoscopy" }, { name: "Assist with colonoscopy" }, { name: "Assist with polypectomy" }, { name: "Assist with ERCPs" }, { name: "Assist with PEG placements" }, { name: "Assist with liver biopsy" }, { name: "Specimen collection & labeling" }, { name: "Set up of scopes & video equipment" }, { name: "Apply external abdominal pressure" }, { name: "Scope cleaning" }, { name: "Assist with mobile cases (ICU, ER)" }, { name: "Radiation safety" }, { name: "Automated Medication Dispensing System" }, { name: "Takes call for emergency cases" }, { name: "National Patient Safety Goals" }, { name: "Awareness of HCAHPS" }, { name: "Accurate patient identification" }, { name: "Effective communication" }, { name: "Interpretation & communication of lab values" }, { name: "Medication administration" }, { name: "Labeling (medications & specimens)" }, { name: "Anticoagulation therapy" }, { name: "Monitoring conscious sedation" }, { name: "Pain assessment & management" }, { name: "Infection control" }, { name: "Universal precautions" }, { name: "Isolation" }, { name: "Minimize risk for falls" }, { name: "Prevention of pressure ulcers" }, { name: "Use of rapid response teams" }, { name: "Foreign Body Retrieval" }, { name: "Bougie Dilation" }, { name: "pH Studies" }, { name: "Tattooing Procedure" }, { name: "Gastrectomy" }, { name: "Hot Snare" }, { name: "Perform Patient Positioning and Make Necessary Adjustments for Comfort and Safety" }, { name: "Initiate Latex Precautions (as Needed)" }, { name: "Participate in a Time Out Immediately Before All Operative or Invasive Procedures" }, { name: "Obtain Medications as Ordered by Physician" }, { name: "Verify Expiration Date and Package Integrity Prior to Opening Sterile Items" }, { name: "Don Personal Protective Equipment (PPE) When Indicated" },
    ]},
    { title: "Flexible Endoscope Care & Reprocessing", skills: [
      { name: "Handling of Clean Scopes" }, { name: "Endoscope Storage" }, { name: "Leak Testing" }, { name: "Manual Cleaning" }, { name: "Point-of-Use Cleaning" }, { name: "Transporting Contaminated Scopes" }, { name: "High Level Disinfection (HLD)" },
    ]},
    { title: "Administer Conscious Sedation", skills: [
      { name: "Fentanyl" }, { name: "Propofol" }, { name: "Demerol" }, { name: "Presedex" }, { name: "Versed" }, { name: "Reversal agents" }, { name: "Knowledge of American Society of Anesthesiologists (ASA) Classification" }, { name: "Obtain IV Access" }, { name: "Knowledge of Cardiovascular Complications (e.g., Hypotension, Hypertension, Cardiac Arrhythmias, Myocardial Infarction)" }, { name: "Perform Pre-Sedation Assessment Including Risk Factors" }, { name: "Benzodiazepines (e.g., Valium, Ativan)" }, { name: "Narcotics (e.g., Morphine)" },
    ]},
    { title: "Pre Procedure", skills: [
      { name: "Pre procedure phone calls" }, { name: "Electronic documentation" }, { name: "Patient assessment" }, { name: "Colon prep or re-prep" }, { name: "Pre procedure checklist/consent" }, { name: "IV start, med admin" },
    ]},
    { title: "Post Procedure", skills: [
      { name: "Assess for air movement post colonoscopy" }, { name: "Assess for pain" }, { name: "Assess for bowel sounds" }, { name: "Assess for gag reflex post EGD" }, { name: "Assess for gag reflex post bronchoscopy" }, { name: "Recover from MAC" }, { name: "Recover from conscious sedation" }, { name: "Discharge outpatients to home" }, { name: "Post procedure phone calls" }, { name: "Provide Post-Procedure Education Including Findings (Explanation and Significance)" }, { name: "Educate on Potential Post-Procedure Complications and Course of Action" }, { name: "Use of Sedation Recovery Scales" }, { name: "Assess Signs and Symptoms of Possible Perforation" }, { name: "Provide Details of Follow-Up Plan" },
    ]},
    { title: "Emergency Patient Care", skills: [
      { name: "Maintain Advanced Cardiac Life Support (ACLS) Certification" }, { name: "Prepare Equipment for Possible Patient Emergency Including Oxygen, Suction, Monitors, and Crash Cart" }, { name: "Participate as Part of the Team During Resuscitation" }, { name: "Maintain Pediatric Advanced Life Support (PALS) Certification (if Applicable)" }, { name: "Knowledge of Potential Endoscopic Adverse Events, Risk Factors, and Frequency of Occurrence" }, { name: "Maintain Basic Life Support (BLS) Certification" },
    ]},
    { title: "Age Specific", skills: [
      { name: "Newborn/neonate (birth-30 days)" }, { name: "Infant (31 days-1 year)" }, { name: "Toddler (ages 2-3 years)" }, { name: "Preschool (ages 4-5 years)" }, { name: "School age (ages 6-12 years)" }, { name: "Adolescent (ages 13-21 years)" }, { name: "Young adult (ages 22-39 years)" }, { name: "Adult (ages 40-64 years)" }, { name: "Older adult (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "anesthesia-tech", title: "Anesthesia Technician Skills Checklist", shortTitle: "Anesthesia Tech", icon: "💉", group: "Surgical", categories: [
    { title: "Equipment Preparation", skills: [
      { name: "Anesthesia machine setup and check" }, { name: "Airway equipment preparation (LMA, ETT, video laryngoscope)" }, { name: "Invasive monitoring line setup (arterial, CVP)" }, { name: "Regional anesthesia tray setup" }, { name: "Difficult airway cart management" },
    ]},
    { title: "Intra-Operative Support", skills: [
      { name: "Assisting with intubation" }, { name: "Assisting with central line/arterial line placement" }, { name: "Blood/fluid warmer operation" }, { name: "Rapid infuser operation" }, { name: "Cardiopulmonary bypass support (cardiac cases)" },
    ]},
    { title: "Equipment Maintenance & Safety", skills: [
      { name: "Equipment sterilization and turnover" }, { name: "Medication gas/vaporizer management" }, { name: "Malignant hyperthermia cart familiarity" }, { name: "Troubleshooting equipment malfunctions" },
    ]},
  ]},

  { slug: "perfusionist", title: "Perfusionist Skills Checklist", shortTitle: "Perfusionist", icon: "🫁", group: "Surgical", categories: [
    { title: "Cardiopulmonary Bypass", skills: [
      { name: "CPB circuit setup and priming" }, { name: "Cannulation assist" }, { name: "Bypass management" }, { name: "Myocardial protection/cardioplegia delivery" }, { name: "Weaning from bypass" },
    ]},
    { title: "Monitoring & Technique", skills: [
      { name: "Hemodynamic monitoring during bypass" }, { name: "Blood gas and coagulation management" }, { name: "Hypothermia/rewarming management" }, { name: "ECMO management" }, { name: "Intra-aortic balloon pump management" },
    ]},
    { title: "Equipment & Safety", skills: [
      { name: "Heart-lung machine operation" }, { name: "Cell saver/autotransfusion operation" }, { name: "Emergency protocols (air embolism, circuit failure)" }, { name: "Equipment QA and maintenance" },
    ]},
  ]},

  { slug: "spd-shift-manager", title: "SPD Shift Manager Skills Checklist", shortTitle: "SPD Shift Manager", icon: "🗝️", group: "Surgical", categories: [
    { title: "Department Operations", skills: [
      { name: "Staff scheduling and workflow management" }, { name: "Instrument tray inventory management" }, { name: "Case cart preparation oversight" }, { name: "Equipment loan/repair coordination" },
    ]},
    { title: "Quality & Compliance", skills: [
      { name: "Sterilization validation and documentation" }, { name: "AAMI/AORN standards compliance" }, { name: "Regulatory survey readiness" }, { name: "Incident/near-miss investigation" },
    ]},
    { title: "Staff Leadership", skills: [
      { name: "Staff training and competency validation" }, { name: "Performance management" }, { name: "Cross-department communication (OR, sterile processing)" },
    ]},
  ]},

  { slug: "surgical-first-assist", title: "Surgical First Assist Skills Checklist", shortTitle: "Surgical First Assist", icon: "🗡️", group: "Surgical", categories: [
    { title: "Preoperative Responsibilities", skills: [
      { name: "Verify Surgical Site Marking" }, { name: "Sterile Field Setup" }, { name: "Positioning and Prep Assist" },
    ]},
    { title: "Surgical Specialty Exposure", skills: [
      { name: "General Surgery" }, { name: "Orthopedic Surgery" }, { name: "Cardiovascular Surgery" }, { name: "Neurosurgery" }, { name: "Spinal Reconstruction" }, { name: "Laparoscopy" }, { name: "Robotics" },
    ]},
    { title: "Aseptic Technique & Sterile Field", skills: [
      { name: "Wear Surgical Attire (Scrubs, Shoe Covers, Hair/Beard Cover, Mask, Approved Footwear)" }, { name: "Perform Surgical Hand Rub as Indicated" }, { name: "Drape the Surgical Site Using Sterile Technique" }, { name: "Verify Equipment is Working Correctly Before Use" },
    ]},
    { title: "Patient Positioning", skills: [
      { name: "Sitting/Modified-Sitting (Fowler's/Semi-Fowler's) and Beach-Chair Position" }, { name: "Trendelenburg Position" }, { name: "Safe Positioning Practice for Pregnant Individuals" },
    ]},
    { title: "Surgical Site Prep", skills: [
      { name: "Eye Prep" }, { name: "Ear Prep" }, { name: "Lateral Thoracic Prep" },
    ]},
    { title: "Surgical Techniques & Instrumentation", skills: [
      { name: "Tissue Handling and Exposure" }, { name: "Hemostasis Technique" }, { name: "Suturing and Wound Closure" }, { name: "Retention Suture" }, { name: "Interrupted Vertical Mattress Suture" }, { name: "Retraction" }, { name: "Needle Holders" }, { name: "Sponge, Needle, and Instrument Counts" }, { name: "Irrigation and Fluid Warmers" }, { name: "Cardiac Monitoring and Pacemaker" }, { name: "Operating Microscopes" }, { name: "Converting to Open Procedure (Robotics)" }, { name: "Sharps Safety/Exposure Control Plan" },
    ]},
    { title: "Environmental & Instrument Management", skills: [
      { name: "Cleaning Products (Contact Times, Correct Chemicals, PPE)" }, { name: "Sterile Processing Zones" }, { name: "Enzymatic Products" }, { name: "Sterilizer Cycle Reports" }, { name: "Ozone Sterilization" }, { name: "Surgical Attire Requirements by Suite Zone (Unrestricted/Semi-Restricted/Restricted)" }, { name: "Safety Data Sheets (SDS)" },
    ]},
    { title: "Emergency Preparedness & Postoperative Care", skills: [
      { name: "Malignant Hyperthermia Response" }, { name: "Assist Surgeon in Managing Patient Care" }, { name: "Monitor for and Manage Complications" }, { name: "Dressing Application" }, { name: "Post-Op Hand-Off" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (0-1 month)" }, { name: "Infant (1-12 months)" }, { name: "Pediatric (1-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Adult (18-65 years)" }, { name: "Geriatric (65+ years)" },
    ]},
  ]},
];
