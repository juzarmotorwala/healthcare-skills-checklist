import { ChecklistSpec } from "../checklistData";

export const criticalCareChecklists: ChecklistSpec[] = [
  { slug: "icu", title: "Registered Nurse – ICU Skills Checklist", shortTitle: "RN – ICU", icon: "🫀", group: "Critical Care", categories: [
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
      { name: "Lung Transplant" }, { name: "Establishing an Airway" }, { name: "Pulse Oximetry" }, { name: "Interpretation of ABG" }, { name: "Drawing ABG Blood Sample from A-Line" }, { name: "Incentive Spirometer" }, { name: "Mechanical Ventilation Modes (AC/SIMV/PSV)" }, { name: "Ventilator Weaning Protocols" }, { name: "High-Flow Nasal Cannula" }, { name: "Non-Invasive Ventilation (BiPAP/CPAP)" }, { name: "ARDS Management (Prone Positioning)" }, { name: "Chest Physiotherapy" },
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
    { title: "Renal & Fluid Management", skills: [
      { name: "Continuous Renal Replacement Therapy (CRRT) Management" }, { name: "Fluid Balance Calculation" }, { name: "Electrolyte Replacement Protocols" }, { name: "Acute Kidney Injury Management" }, { name: "Diuretic Titration" },
    ]},
    { title: "Patient Safety & Quality", skills: [
      { name: "Sedation Vacation/Spontaneous Awakening Trials" }, { name: "Delirium Screening (CAM-ICU)" }, { name: "VAP Prevention Bundle" }, { name: "CLABSI Prevention Bundle" }, { name: "Early Mobility Protocols" }, { name: "Family Presence During Resuscitation" }, { name: "Rapid Response/Code Blue Participation" },
    ]},
    { title: "Equipment", skills: [
      { name: "Multi-Parameter Bedside Monitor" }, { name: "Ventilator Setup and Alarms" }, { name: "CPAP/PEEP Devices" }, { name: "Rapid Infuser" }, { name: "Targeted Temperature Management Device" }, { name: "Continuous Cardiac Output Monitoring" }, { name: "Feeding Pump" }, { name: "Sequential Compression Devices" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "critical-care", title: "Registered Nurse – Critical Care Skills Checklist", shortTitle: "RN – Critical Care", icon: "💓", group: "Critical Care", categories: [
    { title: "General Skills", skills: [
      { name: "Advanced directives" }, { name: "Patient/family teaching" }, { name: "Restrictive devices (restraints)" }, { name: "Lift/transfer devices" }, { name: "Specialty beds" }, { name: "End of life care/palliative care" }, { name: "Knowledge of 'Do Not Use Abbreviations'" }, { name: "Charge/supervisor experience" }, { name: "Knowledge of Joint Commission National Patient Safety Goals" }, { name: "Knowledge/familiarity with HCAHPS scores" },
    ]},
    { title: "Cardiac", skills: [
      { name: "Acute Coronary Syndrome" }, { name: "Congestive Heart Failure" }, { name: "Post Open Heart" }, { name: "Carotid Endarterectomy" }, { name: "Post Vascular Surgery" }, { name: "Heart Transplant" }, { name: "Pacemaker - Temporary/Permanent" }, { name: "Pacemaker - Epicardial" }, { name: "Sheath Removal" }, { name: "Heart Sounds" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Pneumonia" }, { name: "Respiratory Distress" }, { name: "COPD" }, { name: "Breath Sounds" }, { name: "Post Thoracic Surgery" }, { name: "Chest Tube Placement & Management" }, { name: "Trach Management" }, { name: "Modes of Ventilation (AC/PC/SIMV/CPAP)" }, { name: "Intubation/Extubation" }, { name: "External CPAP/BiPAP" }, { name: "Interpretation of Arterial Blood Gases" },
    ]},
    { title: "Neurologic & Psychiatric", skills: [
      { name: "Stroke Scale Assessment" }, { name: "CVA" }, { name: "Brain Injury" }, { name: "Post Craniotomy" }, { name: "Spinal Cord Injury" }, { name: "Seizure Disorders" }, { name: "ETOH/Drug Withdrawal" },
    ]},
    { title: "Gastrointestinal", skills: [
      { name: "GI Bleeding" }, { name: "GI Surgery" }, { name: "Liver Failure" }, { name: "Pancreatitis" }, { name: "Liver Transplant" }, { name: "Pancreas Transplant" },
    ]},
    { title: "Renal/Genitourinary", skills: [
      { name: "Renal Failure" }, { name: "Renal Surgery" }, { name: "Renal Transplant" }, { name: "Arteriovenous Fistula/Shunt" }, { name: "Nephrostomy Tubes" }, { name: "Peritoneal Dialysis" },
    ]},
    { title: "Medications", skills: [
      { name: "Anti-Arrhythmics" }, { name: "Anticoagulants" }, { name: "Anti-Hypertensives" }, { name: "Anti-Psychotics" }, { name: "Anti-Seizure Medications" }, { name: "Benzodiazepines" }, { name: "Procedural Sedation" }, { name: "Diuretics" }, { name: "Emergency Medications" }, { name: "Inhaled Medications" }, { name: "Insulin" }, { name: "Titrate Vasoactive Drips" }, { name: "Narcotics/Opioid Analgesics" }, { name: "Reversal Agents" }, { name: "Steroids" },
    ]},
    { title: "IV Therapy", skills: [
      { name: "Starting IVs" }, { name: "Central Line Blood Draws" }, { name: "Central Line/Implanted Line Care" }, { name: "Arterial Line Management" }, { name: "TPN & Lipids" }, { name: "Blood Product Administration" },
    ]},
    { title: "Cardiac Monitoring & Emergency Response", skills: [
      { name: "Dysrhythmia Interpretation" }, { name: "Dysrhythmia Management" }, { name: "Obtain 12 Lead EKG" }, { name: "Interpret 12 Lead EKG" }, { name: "Cardioversion" }, { name: "Defibrillation" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "telemetry", title: "Registered Nurse – Telemetry Skills Checklist", shortTitle: "RN – Telemetry", icon: "📊", group: "Critical Care", categories: [
    { title: "Cardiac", skills: [
      { name: "Acute Coronary Syndrome" }, { name: "Congestive Heart Failure" }, { name: "Post Open Heart (12-24 hours)" }, { name: "Carotid Endarterectomy" }, { name: "Post Vascular Surgery" }, { name: "Heart Transplant" }, { name: "Pacemaker - Temporary/Permanent" }, { name: "Pacemaker - Epicardial" }, { name: "Sheath Removal" }, { name: "Heart Sounds" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Pneumonia" }, { name: "Respiratory Distress" }, { name: "COPD" }, { name: "Breath Sounds" }, { name: "Post Thoracic Surgery" }, { name: "Chest Tube Placement & Management" }, { name: "Trach Management" }, { name: "Modes of Ventilation" }, { name: "Intubation/Extubation" }, { name: "External CPAP/BiPAP" }, { name: "Interpretation of ABGs" },
    ]},
    { title: "Neurologic & Psychiatric", skills: [
      { name: "Stroke Scale Assessment" }, { name: "CVA" }, { name: "Brain Injury" }, { name: "Post Craniotomy" }, { name: "Spinal Cord Injury" }, { name: "Seizure Disorders" }, { name: "ETOH/Drug Withdrawal" },
    ]},
    { title: "Medications", skills: [
      { name: "Anti-Arrhythmics" }, { name: "Anticoagulants" }, { name: "Anti-Hypertensives" }, { name: "Benzodiazepines" }, { name: "Diuretics" }, { name: "Emergency Medications" }, { name: "Insulin" }, { name: "Narcotics/Opioid Analgesics" }, { name: "Reversal Agents" }, { name: "Automated Medication Dispensing" },
    ]},
    { title: "Cardiac Monitoring & Emergency Response", skills: [
      { name: "Dysrhythmia Interpretation" }, { name: "Dysrhythmia Management" }, { name: "Obtain 12 Lead EKG" }, { name: "Interpret 12 Lead EKG" }, { name: "Cardioversion" }, { name: "Defibrillation" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "telemetry-stepdown", title: "Registered Nurse – Telemetry Stepdown Skills Checklist", shortTitle: "RN – Telemetry Stepdown", icon: "📉", group: "Critical Care", categories: [
    { title: "Cardiovascular Care", skills: [
      { name: "Acute MI" }, { name: "CHF" }, { name: "Angina Hypertension" }, { name: "Cardiomyopathy/Cardiopulmonary Arrest" }, { name: "Abdominal Aortic Aneurysm" },
    ]},
    { title: "Cardiac Monitoring", skills: [
      { name: "Dysrhythmia Interpretation" }, { name: "Dysrhythmia Management" }, { name: "12 Lead EKG" }, { name: "Cardioversion" }, { name: "Defibrillation" }, { name: "External Pacemaker" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Pneumonia" }, { name: "COPD" }, { name: "Chest Tube Management" }, { name: "Trach Management" }, { name: "Ventilator Care" }, { name: "Interpretation of ABGs" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "intermediate-care", title: "Registered Nurse – Intermediate Care Skills Checklist", shortTitle: "RN – Intermediate Care", icon: "🔄", group: "Critical Care", categories: [
    { title: "Cardiac", skills: [
      { name: "Acute Coronary Syndrome" }, { name: "Congestive Heart Failure" }, { name: "Post Open Heart" }, { name: "Carotid Endarterectomy" }, { name: "Post Vascular Surgery" }, { name: "Heart Transplant" }, { name: "Pacemaker" }, { name: "Heart Sounds" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Pneumonia" }, { name: "Respiratory Distress" }, { name: "COPD" }, { name: "Breath Sounds" }, { name: "Post Thoracic Surgery" }, { name: "Chest Tube Management" }, { name: "Trach Management" }, { name: "Ventilator Modes" }, { name: "Intubation/Extubation" }, { name: "CPAP/BiPAP" }, { name: "ABG Interpretation" },
    ]},
    { title: "Neurologic", skills: [
      { name: "Stroke Scale Assessment" }, { name: "CVA" }, { name: "Brain Injury" }, { name: "Seizure Disorders" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "pacu", title: "Registered Nurse – PACU Skills Checklist", shortTitle: "RN – PACU", icon: "😴", group: "Critical Care", categories: [
    { title: "Cardiovascular", skills: [
      { name: "Open Heart Recovery" }, { name: "AAA Repair" }, { name: "Vascular Surgery" }, { name: "Pacemaker-Permanent & Temporary" }, { name: "Cardioversion" }, { name: "AICD Insertion" },
    ]},
    { title: "General/Abdominal Surgery", skills: [
      { name: "Appendectomy" }, { name: "Cholecystectomy" }, { name: "Colon Resection" }, { name: "Hernia Repair" }, { name: "Mastectomy" }, { name: "Laparoscopic Procedures" },
    ]},
    { title: "Orthopedic", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "Fracture Repair" }, { name: "Arthroscopy" }, { name: "Spinal Surgery" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Chest Tube Management" }, { name: "Ventilator Management" }, { name: "Intubation/Extubation" }, { name: "ABG Interpretation" }, { name: "Pulse Oximetry" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "cvor", title: "Registered Nurse – CVOR Skills Checklist", shortTitle: "RN – CVOR", icon: "❤️‍🔥", group: "Critical Care", categories: [
    { title: "Scrub General Surgery", skills: [
      { name: "AKA/BKA (Amputation)" }, { name: "Radical Mastectomy" }, { name: "Abdominal-Perineal Resection" }, { name: "Cholecystectomy (Open)" }, { name: "Exploratory Laparotomy" }, { name: "Appendectomy" },
    ]},
    { title: "Laparoscopic Procedures", skills: [
      { name: "Laparoscopic Cholecystectomy" }, { name: "Laparoscopic Hernia" }, { name: "Laparoscopic Nissen" },
    ]},
    { title: "Cardiovascular/Thoracic", skills: [
      { name: "CABG" }, { name: "Valve Replacement" }, { name: "Heart Transplant" }, { name: "Aortic Aneurysm Repair" }, { name: "Thoracotomy" }, { name: "Lobectomy" }, { name: "Pacemaker Insertion" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "emergency-department", title: "Registered Nurse – Emergency Department Skills Checklist", shortTitle: "RN – Emergency Department", icon: "🚨", group: "Critical Care", categories: [
    { title: "Work Settings", skills: [
      { name: "Level I Trauma Center" }, { name: "Level II Trauma Center" }, { name: "Non-Trauma Center Emergency Department" }, { name: "Pediatric Emergency Department" }, { name: "Emergency Department - Combined Adult/Pediatric" },
    ]},
    { title: "Cardiac", skills: [
      { name: "Defibrillation/Cardioversion" }, { name: "Assisting with Insertion of Central Lines" }, { name: "12-Lead EKG" }, { name: "Cardiac Arrest/CPR" }, { name: "Cardiac Monitoring" }, { name: "Pacemakers - External" }, { name: "Chest Pain Protocol" }, { name: "STEMI Activation" }, { name: "Post-ROSC Care" }, { name: "Cardiac Enzyme/Troponin Trending" }, { name: "Hypertensive Emergency Management" }, { name: "Aortic Dissection Recognition" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Establishing an Airway" }, { name: "Pulse Oximetry" }, { name: "Interpretation of ABG" }, { name: "Incentive Spirometer" }, { name: "Tracheostomy Care" }, { name: "Ventilator Care" }, { name: "Chest Tube Management" }, { name: "BiPAP/CPAP Initiation" }, { name: "Rapid Sequence Intubation Assist" }, { name: "Asthma/COPD Exacerbation Management" }, { name: "Pulmonary Embolism Workup" }, { name: "Pneumothorax Recognition" },
    ]},
    { title: "Trauma", skills: [
      { name: "Cervical Spine Immobilization" }, { name: "Fracture/Splinting" }, { name: "Wound Management" }, { name: "Burns Assessment and Care" }, { name: "Head Injury Assessment" }, { name: "Abdominal Trauma" }, { name: "Primary/Secondary Trauma Survey" }, { name: "Trauma Activation Protocol" }, { name: "FAST Exam Assist" }, { name: "Penetrating Trauma Management" }, { name: "Multi-System Trauma Triage" },
    ]},
    { title: "Neurological Emergency", skills: [
      { name: "Stroke Alert/tPA Protocol" }, { name: "NIH Stroke Scale" }, { name: "Seizure Management" }, { name: "Altered Mental Status Workup" }, { name: "Concussion/Head Injury Assessment" }, { name: "Status Epilepticus Management" }, { name: "Meningitis/Encephalitis Assessment" }, { name: "Post-Ictal Care" },
    ]},
    { title: "Pediatric Emergency", skills: [
      { name: "Pediatric Assessment Triangle" }, { name: "Weight-Based/Broselow Dosing" }, { name: "Pediatric Fever Workup" }, { name: "Non-Accidental Trauma Recognition" }, { name: "Pediatric Resuscitation" }, { name: "Pediatric Respiratory Distress Management" }, { name: "Pediatric Dehydration Assessment" }, { name: "Pediatric Pain Assessment (FLACC)" },
    ]},
    { title: "OB/GYN Emergency", skills: [
      { name: "Precipitous Delivery Assist" }, { name: "Ectopic Pregnancy Assessment" }, { name: "Vaginal Bleeding Assessment" }, { name: "Pelvic Exam Assist" }, { name: "Preeclampsia/Eclampsia Recognition" }, { name: "Sexual Assault Exam Coordination" }, { name: "Newborn Stabilization (Precipitous Delivery)" },
    ]},
    { title: "Orthopedic", skills: [
      { name: "Fracture Reduction Assist" }, { name: "Splinting/Casting" }, { name: "Joint Dislocation Reduction Assist" }, { name: "Compartment Syndrome Assessment" }, { name: "Open Fracture Management" }, { name: "Neurovascular Assessment" },
    ]},
    { title: "Wounds & Burns", skills: [
      { name: "Laceration Repair/Suturing" }, { name: "Wound Irrigation and Debridement" }, { name: "Burn Assessment (Rule of Nines)" }, { name: "Incision & Drainage of Abscess" }, { name: "Foreign Body Removal" }, { name: "Wound Closure Devices (Staples, Dermabond)" },
    ]},
    { title: "IV Therapy & Blood", skills: [
      { name: "Difficult/Ultrasound-Guided IV Access" }, { name: "Massive Transfusion Protocol" }, { name: "Central Line Assist" }, { name: "Intraosseous Access" }, { name: "Fluid Resuscitation Protocols" },
    ]},
    { title: "Toxicology & Behavioral Emergency", skills: [
      { name: "Overdose/Toxidrome Recognition" }, { name: "Activated Charcoal Administration" }, { name: "Naloxone Administration" }, { name: "Suicide/Self-Harm Risk Assessment" }, { name: "Psychiatric Hold/1013 Process" }, { name: "Chemical/Physical Restraint Protocol" },
    ]},
    { title: "Medication Administration", skills: [
      { name: "IV Push Medications" }, { name: "IV Drip Medications" }, { name: "Blood Administration" }, { name: "Conscious Sedation" }, { name: "Rapid Sequence Intubation Meds" }, { name: "Thrombolytic Administration" }, { name: "Antibiotic Administration (Sepsis Protocol)" },
    ]},
    { title: "Equipment & Diagnostics", skills: [
      { name: "Rapid Infuser" }, { name: "Point-of-Care Ultrasound Assist" }, { name: "Cardiac Monitor/Defibrillator" }, { name: "Blood Culture Collection" }, { name: "POC Glucose/Troponin/Rapid Strep Testing" }, { name: "12-Lead EKG Acquisition" },
    ]},
    { title: "Triage & Documentation", skills: [
      { name: "Emergency Severity Index (ESI)" }, { name: "Telephone Triage" }, { name: "Disaster Triage" }, { name: "Pediatric Triage" }, { name: "Electronic Documentation/Charting by Exception" }, { name: "Chain of Custody Documentation" },
    ]},
  ]},

  { slug: "emt", title: "Emergency Medical Technician Skills Checklist", shortTitle: "EMT", icon: "🚑", group: "Critical Care", categories: [
    { title: "Skills", skills: [
      { name: "Vital Sign - PULSE" }, { name: "Vital Sign - RESPIRATION" }, { name: "Vital Sign - LUNG SOUNDS" }, { name: "Vital Sign - BLOOD PRESSURE" }, { name: "Vital Sign - PULSE OXIMETRY" }, { name: "Vital Sign - TEMPERATURE" }, { name: "Vital Sign - PAIN ASSESSMENT" }, { name: "PATIENT ASSESSMENT" }, { name: "TRAUMA ASSESSMENT" }, { name: "Airway Management - SUCTIONING" }, { name: "Airway Management - NPA" }, { name: "Airway Management - OPA" }, { name: "Airway Management - BVM (Adult)" }, { name: "Airway Management - BVM (Peds)" }, { name: "Airway Management - O2 ADMINISTRATION" }, { name: "SPLINTING" }, { name: "BANDAGING/HEMORRHAGE CONTROL" }, { name: "SPINAL IMMOBILIZATION" }, { name: "CPR - Adult" }, { name: "CPR - Pediatric" }, { name: "CPR - Infant" }, { name: "AED OPERATION" }, { name: "PATIENT LIFTING/MOVING" }, { name: "STRETCHER OPERATIONS" }, { name: "RADIO COMMUNICATIONS" }, { name: "DOCUMENTATION" },
    ]},
  ]},

  { slug: "urgent-care", title: "Registered Nurse – Urgent Care Skills Checklist", shortTitle: "RN – Urgent Care", icon: "⏰", group: "Critical Care", categories: [
    { title: "Cardiovascular", skills: [
      { name: "Auscultation/Irregular Heart Sounds" }, { name: "Peripheral Edema" }, { name: "PQRST Assessment" }, { name: "EKG Interpretation" }, { name: "Lab Tests (Cardiac Enzymes, Troponin, BNP)" }, { name: "Cardiac Monitor" }, { name: "AED/Defibrillation" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Lung Sound Assessment" }, { name: "Pulse Oximetry" }, { name: "Peak Flow Meter" }, { name: "Nebulizer Treatment" }, { name: "Chest X-ray Interpretation" }, { name: "ABG Interpretation" },
    ]},
    { title: "Neurological", skills: [
      { name: "Stroke Assessment" }, { name: "Glasgow Coma Scale" }, { name: "Pupil Assessment" }, { name: "Cranial Nerve Assessment" },
    ]},
    { title: "Wound Care", skills: [
      { name: "Laceration Repair" }, { name: "Wound Irrigation" }, { name: "Suturing" }, { name: "Stapling" }, { name: "Wound Closure Strips" }, { name: "Burn Assessment and Care" }, { name: "Abscess I&D" },
    ]},
    { title: "Orthopedic", skills: [
      { name: "Fracture Assessment" }, { name: "Splinting" }, { name: "Joint Reduction" }, { name: "X-ray Interpretation" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "paramedic", title: "Paramedic Skills Checklist", shortTitle: "Paramedic", icon: "🚨", group: "Critical Care", categories: [
    { title: "Advanced Life Support", skills: [
      { name: "Advanced airway management (intubation, supraglottic)" }, { name: "IV/IO access" }, { name: "Cardiac rhythm interpretation" }, { name: "Defibrillation/cardioversion" }, { name: "Advanced pharmacology administration" },
    ]},
    { title: "Emergency Response", skills: [
      { name: "Trauma assessment and management" }, { name: "Mass casualty triage" }, { name: "Field extrication assist" }, { name: "Hazmat/scene safety awareness" },
    ]},
    { title: "Transport & Documentation", skills: [
      { name: "Patient transport protocols" }, { name: "Inter-facility transport" }, { name: "ePCR documentation" }, { name: "Radio/hospital communication" },
    ]},
  ]},
];
