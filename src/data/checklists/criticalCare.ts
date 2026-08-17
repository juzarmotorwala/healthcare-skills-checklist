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
    { title: "General Knowledge & Professional Responsibilities", skills: [
      { name: "Perform Surgical Counts and Manage Discrepancies" }, { name: "Collaborate With Anesthesia, Perfusion, and Surgical Teams" }, { name: "Educate Patients and Families on Procedures and Recovery" }, { name: "Support Training, Mentorship, and Onboarding" }, { name: "Adhere to Sterile Technique and Infection Prevention Protocols" }, { name: "Understand Anatomy and Physiology of the Cardiovascular System" }, { name: "Implement Safety Procedures Related to Fire Safety and Infection Control" }, { name: "Participate in Time-Outs and Debriefs" }, { name: "Demonstrate Effective Communication" }, { name: "Pursue Ongoing Education and Professional Development" }, { name: "Promote a Culture of Safety and Patient Advocacy" }, { name: "Follow Facility Policies and Procedures" }, { name: "Anticipate Needs of the Surgical Team (e.g., Instruments, Medications, Supplies)" }, { name: "Ensure Compliance With Health and Safety Regulations" }, { name: "Adhere to Professional Standards to Uphold Patient Rights and Confidentiality" }, { name: "Prioritize Tasks Based on Role and Responsibilities" }, { name: "Proper Handling of Medical Devices (e.g., Implants, Explants, Defects)" }, { name: "Demonstrate Knowledge of CVOR Terminology" }, { name: "Engage in Quality Improvement and Clinical Research" }, { name: "Foster a Positive and Collaborative Work Environment" }, { name: "Adhere to Universal Protocol" }, { name: "Maintain Professional Certifications (e.g., BLS, ACLS)" }, { name: "Perform Technical Duties in Complex Clinical Situations" }, { name: "Report Safety Issues and Concerns" },
    ]},
    { title: "Patient Care Responsibilities", skills: [
      { name: "Assess and Incorporate Patient's Spiritual and Cultural Preferences" }, { name: "Assist With Intraoperative Blood Conservation Techniques" }, { name: "Employ Proper Patient Identification Using Two Identifiers" }, { name: "Assist With Patient Transportation" }, { name: "Verify Surgical and Anesthesia Consents (e.g., Accuracy, Laterality, Signature, Dated)" }, { name: "Use of Assistive Transfer Devices (e.g., Transfer Boards, Slide Sheets)" }, { name: "Assist With Maintaining Normothermia" }, { name: "Verify Surgical Site Marking" }, { name: "Perform Surgical Site Skin Prep" }, { name: "Manage Drains, Catheters, Dressings, and Wound Care Devices" },
    ]},
    { title: "Patient Positioning & Safety", skills: [
      { name: "Address Needs of Special Patient Populations" }, { name: "Assess Patient's Position Regularly Throughout the Procedure" }, { name: "Position Individuals Who Are Pregnant With Appropriate Modifications" }, { name: "Implement Ergonomic Practices and Techniques" }, { name: "Ensure Safe Patient Positioning to Prevent Nerve Damage and Pressure Injuries During Lengthy Cardiovascular Procedures" }, { name: "Prevent Pressure Injuries by Using Pressure-Relieving Devices" }, { name: "Prepare OR Table and Positioning Equipment" }, { name: "Position Individuals With Obesity With Appropriate Modifications" }, { name: "Ensure Equipment Is in Proper Working Order Before Use" }, { name: "Use Safety Precautions and Straps" },
    ]},
    { title: "Anesthesia Support & Care", skills: [
      { name: "Demonstrate Knowledge of Anesthesia-Related Emergencies" }, { name: "Assist With Induction and Intubation" }, { name: "Monitor for Signs of Hemodynamic Instability and Communicate With the Anesthesia Team" }, { name: "Assist With Awake Intubation" }, { name: "Assist With Preparing Emergency Airway Management Devices for Difficult Intubation Cases" }, { name: "Assist With the Application of Monitoring Devices (e.g., Arterial Lines, Central Venous Pressure Lines)" }, { name: "Assist With Extubation and Emergence" }, { name: "Assist With Managing Cardiopulmonary Arrest in the OR Including Defibrillation and Administering Emergency Medications" },
    ]},
    { title: "Medication & Drug Handling", skills: [
      { name: "Anticoagulant and Reversal Agents (e.g., Heparin, Protamine Sulfate)" }, { name: "Medication Calculations (e.g., Conversions, Reconstitution)" }, { name: "Electrolyte Management (e.g., Potassium, Magnesium) for Cardiac Stabilization" }, { name: "Dispense/Receive Medications Onto Sterile Field" }, { name: "Synthetic Sealants (e.g., Coseal, BioGlue, Hemopatch)" }, { name: "Blood Products and Volume Expanders (e.g., Packed Red Blood Cells, Fresh Frozen Plasma)" }, { name: "Vasoactive Medications (e.g., Nitroglycerin, Sodium Nitroprusside, Vasopressin)" }, { name: "Topical Hemostatic Agents (e.g., Surgicel, Gelfoam, Avitene, Tachosil, Floseal)" }, { name: "Fibrin Sealants (e.g., Tisseel, Evicel, Vitagel)" }, { name: "Antibiotic Prophylaxis (Timing and Administration During Cardiac Surgery)" }, { name: "Labeling for Medications, Solutions, and Powders" }, { name: "Systemic Hemostatic Agents (e.g., Tranexamic Acid (TXA), Aprotinin)" }, { name: "Communication of Contents and Strength During Surgeon Hand-Off" }, { name: "Vasopressors, Inotropes, and Anesthetic Agents Commonly Used in Cardiovascular Surgeries" }, { name: "Five Rights of Medication Use" }, { name: "Thrombin-Based Hemostatic Agents (e.g., Thrombin-JMI, Recothrom)" }, { name: "Handling of Controlled Substances (e.g., Analgesics, Anxiolytics, Anesthetics)" }, { name: "Amiodarone and Other Antiarrhythmics" }, { name: "Documentation of Medications Not Administered by Anesthesia Provider" },
    ]},
    { title: "Specimen Handling", skills: [
      { name: "Ensure Timely Communication With Pathology for Critical Frozen Section Results" }, { name: "Safeguard the Specimen From Contamination and Damage" }, { name: "Collect and Label Biopsies" }, { name: "Handle Frozen Section Specimens for Immediate Evaluation" }, { name: "Handle Radioactive Materials Following Facility Protocols" }, { name: "Ensure Proper Documentation of All Specimen Handling and Transfers" }, { name: "Process Fresh Tissue Specimens According to Pathology Guidelines" }, { name: "Manage Shared Specimens for Multiple Studies or Departments" }, { name: "Proper Specimen Labeling to Ensure Accurate Identification" }, { name: "Maintain Chain of Custody for Forensic Evidence" }, { name: "Handling of Explanted Devices (e.g., Pacemakers, Defibrillators)" }, { name: "Handle Research Study Specimens According to IRB Protocols" }, { name: "Handle Foreign Bodies Removed During Surgery for Documentation and Legal Purposes" }, { name: "Tissue Fixation (e.g., Formalin) for Permanent Specimens" }, { name: "Manage Aerobic and Anaerobic Cultures for Microbiological Testing" }, { name: "Transport and Transfer Specimens to Pathology or Laboratory" }, { name: "Handle Exempt Specimens Based on Facility Protocols" }, { name: "Handle Infectious Tissue Specimens With Appropriate Precautions" },
    ]},
    { title: "Sharps Safety Protocols", skills: [
      { name: "Dispose of Sharps Properly" }, { name: "Seek Evaluation and Treatment for Sharps-Sustained Injuries" }, { name: "Implement Standard Precautions" }, { name: "Practice Neutral Zone Techniques" }, { name: "Understand and Apply OSHA Bloodborne Pathogens Standards" }, { name: "Transport Reusable Sharps Safely" }, { name: "Follow the Facility's Exposure Control Plan" }, { name: "Monitor and Report Sharps Safety Compliance" }, { name: "Double Gloving and Hands-Free Passing Techniques" }, { name: "Use Sharps Safety Devices and Techniques" },
    ]},
    { title: "CVOR Procedures & Techniques", skills: [
      { name: "Cryopreserved Vein Graft Preparation/Thawing" }, { name: "Pulmonary Embolectomy" }, { name: "Resection of an Aneurysm of the Ascending Aorta" }, { name: "Transcatheter Aortic Valve Replacement (TAVR)" }, { name: "Heart Transplant" }, { name: "Median Sternotomy" }, { name: "Endocardial/Myocardial Pacemaker Implantation" }, { name: "Redo Sternotomy" }, { name: "Coronary Artery Bypass Grafting (CABG)" }, { name: "Aortic Root Replacement" }, { name: "Endovascular Thrombectomy" }, { name: "Norwood Procedure" }, { name: "Correction of Tetralogy of Fallot" }, { name: "Endovascular Aneurysm Repair (EVAR)" }, { name: "Cardiopulmonary Bypass/Cannulation Techniques" }, { name: "Thoracic Endovascular Aneurysm Repair (TEVAR)" }, { name: "Left Ventricular Assist Device (LVAD)" }, { name: "Pericardiectomy" }, { name: "Pulmonary Thromboendarterectomy" }, { name: "Da Vinci Robotic Surgery" }, { name: "Closure of an Atrial Septal Defect" }, { name: "Infusion of Cardioplegic Solution" }, { name: "Saphenous Vein Graft" }, { name: "Minimally Invasive Direct Coronary Artery Bypass (MIDCAB)" }, { name: "Renal Artery Stenting" }, { name: "Closure of a Ventricular Septal Defect" }, { name: "Aortic Valve Replacement" }, { name: "Insertion of an Intra-Aortic Balloon Pump (IABP)" }, { name: "Septal Myectomy" }, { name: "Femoral-Popliteal (Fem-Pop) Bypass Graft" }, { name: "Mitral Valve Repair/Replacement" }, { name: "Correction of a Coarctation of the Thoracic Aorta" }, { name: "Resection of an Aneurysm of the Descending Thoracic Aorta" }, { name: "Carotid Endarterectomy" }, { name: "Thrombectomy" }, { name: "Heart/Lung Transplant" }, { name: "Maze Procedure" }, { name: "Pulmonary Valve Repair/Replacement" }, { name: "Dissecting Thoracic Aneurysm" }, { name: "Closure of a Patent Ductus Arteriosus" }, { name: "Ross Procedure" }, { name: "Abdominal Aortic Aneurysm Repair (AAA)" }, { name: "Procurement of Autologous Grafts" }, { name: "Endovascular Repair of a Thoracic Aneurysm" }, { name: "Resection of a Ventricular Aneurysm" }, { name: "Bentall Procedure" }, { name: "Stent Placement" }, { name: "Fontan Procedure" }, { name: "Insertion of Pacemaker/Defibrillator" }, { name: "Tricuspid Valve Repair/Replacement" }, { name: "Vein Harvesting" }, { name: "Valvuloplasty" },
    ]},
    { title: "Basic Equipment/Supplies Knowledge & Safe Practices", skills: [
      { name: "Pneumatic Tourniquets" }, { name: "Irrigation and Fluid Warmers" }, { name: "Internal Defibrillator Paddles" }, { name: "Ultrasonic Devices" }, { name: "Electrosurgical Plume Evacuation and Filtering" }, { name: "Placement of a Patient Return Electrode" }, { name: "Cell Salvage Systems" }, { name: "Energy Generating Devices" }, { name: "Operating Microscopes" }, { name: "Cautery Devices (e.g., LigaSure)" }, { name: "Monopolar/Bipolar Active Electrode" }, { name: "Ambu Bag" }, { name: "Antiembolic Stockings" }, { name: "Cardiopulmonary Bypass Pump Monitoring Systems" }, { name: "Federal and State Regulations and Guidelines for Radiation Safety" }, { name: "Suction/Irrigation Devices" }, { name: "Laser" }, { name: "Patient Warming Devices" }, { name: "Defibrillator/Pacer" }, { name: "Harmonic Scalpel" }, { name: "Sequential Compression Devices" }, { name: "Radiolucent OR Tables" }, { name: "Protect Patient From Undue Exposure to Radiation" }, { name: "Electrosurgical Unit (ESU)" }, { name: "Image Guided Devices" }, { name: "Endoscopic Vessel Harvesting Devices" },
    ]},
    { title: "Specialty Cardiovascular Equipment/Instruments", skills: [
      { name: "Major/Minor Vascular Instruments" }, { name: "Pediatric Cardiovascular Instruments" }, { name: "Wire Instruments" }, { name: "Hybrid Operating Room Equipment" }, { name: "Rumel Tourniquet Passer" }, { name: "Heartport Instruments" }, { name: "Sternal Retractor" }, { name: "Perfusion Products" }, { name: "Endovascular Instruments" }, { name: "Impella Heart Pump" }, { name: "Heart/Lung Machine" }, { name: "Open Heart Instruments" }, { name: "Thoracic Instruments" }, { name: "Transcatheter Valve Replacement/Repair Tools (e.g., TAVR Tools)" }, { name: "Intra-Aortic Balloon Pump (IABP) Setup and Monitoring" }, { name: "Pleur-Evac™" }, { name: "Extractors" }, { name: "Coronary Artery Instruments" }, { name: "Ventricular Assist Devices (VADs) Kit" }, { name: "Heart Stabilizer" }, { name: "Video Equipment" }, { name: "Heater Cooler" }, { name: "Atrial Retractors" }, { name: "Valve Instruments" }, { name: "Extracorporeal Membrane Oxygenation (ECMO) Systems" }, { name: "Major Cardiac Instruments" }, { name: "Synthetic Vascular Grafts" }, { name: "Bulldogs and Bulldog Appliers" }, { name: "Vessel Loops" }, { name: "Minimally Invasive Coronary Artery Bypass (MIDCAB) Instruments" }, { name: "Percutaneous Closure Devices" }, { name: "Slush Machine" }, { name: "Sternal Saw" }, { name: "Chest Tubes" }, { name: "Patch Grafts" }, { name: "Pericardial Windows Instruments" }, { name: "Fiber Optic Luminators" }, { name: "Camera/Video Systems" }, { name: "Rultract Retractor" }, { name: "Dilators/Sheaths/Guidewires/Cannulas" }, { name: "Endoscopic Ultrasound (EUS) Systems" },
    ]},
    { title: "Vascular Access Devices & Supplies Knowledge", skills: [
      { name: "Radial Artery Catheters" }, { name: "Internal Jugular Kits" }, { name: "Swan-Ganz (Pulmonary Arterial Line)" }, { name: "Vascular Access Kits" }, { name: "Peripherally Inserted Central Catheter (PICC)" }, { name: "Implantable Port/Port-a-Cath" }, { name: "Hickman Catheter" }, { name: "IV Fluid/Blood Administration Sets" }, { name: "Arterial Line" }, { name: "Peripheral IV Catheter" }, { name: "Emergency Infusion Device" }, { name: "Midline Catheter" }, { name: "Central Venous Catheter" }, { name: "Percutaneous Introducer" },
    ]},
    { title: "Robotics (If Applicable)", skills: [
      { name: "Setup" }, { name: "Instrument Calibration and Maintenance" }, { name: "Driving/Docking Robot" }, { name: "Robot Draping" }, { name: "Patient and Vision Carts" }, { name: "Assisting the Surgeon" }, { name: "Understanding of Hybrid OR Setups With Integrated Robotic and Imaging Systems" }, { name: "Converting to Open Procedure" }, { name: "Robotic Devices" }, { name: "End of Procedure Break-Down" }, { name: "Troubleshooting" }, { name: "Robotic Instruments" },
    ]},
    { title: "Emergency Response & Prevention", skills: [
      { name: "Participate in Regular Safety Drills (e.g., Fire, Difficult Airway, MH Drill)" }, { name: "Locate and Use Emergency Eyewash Stations" }, { name: "Cardiac Tamponade Management" }, { name: "Local Anesthetic Systemic Toxicity (LAST)" }, { name: "Knowledge of the Location and Operation of Fire Extinguishers" }, { name: "Refer to Manufacturer's Instructions for Use (IFU)" }, { name: "Massive Pulmonary Embolism Management" }, { name: "Cardiac Arrest" }, { name: "Knowledge of Evacuation Routes and Procedures in the Event of Fire" }, { name: "Airway Emergencies (e.g., Difficult Intubation, Emergent Cricothyrotomy)" }, { name: "Disseminated Intravascular Coagulation (DIC)" }, { name: "Document Medication Administrations in the Patient's Records" }, { name: "ECMO Emergency Initiation and Support" }, { name: "Hemorrhage/Massive Transfusion" }, { name: "Cardiopulmonary Bypass (CPB) Emergencies" }, { name: "Aortic Rupture Management" }, { name: "Cardiopulmonary Resuscitation (CPR)" }, { name: "Knowledge of the Location of Safety Data Sheets (SDS)" }, { name: "Emergency Chest Reopening (e.g., After Cardiac Arrest Post-Op)" }, { name: "Air Embolism Management" }, { name: "Automated External Defibrillator (AED)" }, { name: "Initiate Fire Prevention Protocols" }, { name: "Malignant Hyperthermia" }, { name: "Acute Arrhythmia Management (e.g., Ventricular Tachycardia, Fibrillation)" }, { name: "Ensure Emergency Carts Are Stocked and Readily Available" },
    ]},
    { title: "Environment, Equipment & Instrument Management", skills: [
      { name: "Dispose of Waste (e.g., Trash, Recycling, Linens) According to Facility Protocols" }, { name: "Follow Cleaning Requirements for Special Equipment Based on Manufacturer Guidelines" }, { name: "Use Appropriate Cleaning Products (e.g., Contact Times, Selecting Correct Chemicals, PPE)" }, { name: "Clean Non-Critical Items and Surfaces to Prevent Cross-Contamination" }, { name: "Disinfect the Surgical Suite After Each Case" }, { name: "Perform Room Turnover Efficiently to Reduce Downtime" }, { name: "Follow Proper Cleaning Procedures (e.g., Damp Dusting, Terminal Cleaning)" },
    ]},
    { title: "Instrument Handling, Processing & Intraoperative Environment", skills: [
      { name: "Manage Inventory to Ensure Availability of Necessary Instruments and Equipment" }, { name: "Sterility Assurance Basics" }, { name: "Disassemble Instruments for Thorough Cleaning and Sterilization" }, { name: "Recognizing and Using Proper Packaging Materials (e.g., Peel Pouches, Tray Filters)" }, { name: "Transport Decontaminated Items to Sterile Processing" }, { name: "Communicating With Sterile Processing Staff About Instrument Requirements" }, { name: "Point-of-Use Cleaning" }, { name: "Recognizing Biological and Chemical Indicators for Sterilization" }, { name: "Spaulding Classification (i.e., Critical, Semi-Critical, Non-Critical)" }, { name: "Sort and Organize Instruments After Use for Decontamination and Processing" }, { name: "Label Instruments in Need of Repair and Communicate With Appropriate Personnel" }, { name: "Handling and Transporting Contaminated Items" }, { name: "Identify and Address Environmental Contamination Risks (e.g., Construction, Condensation, Flooding)" }, { name: "Control Traffic Flow Within the Operating Room" }, { name: "Ensure Proper Ventilation and Airflow (e.g., Positive and Negative Pressure)" }, { name: "Monitor and Adjust Temperature, Moisture, and Humidity Levels" }, { name: "Maintain Awareness of Surgical Suite Zones (e.g., Unrestricted, Semi-Restricted, Restricted)" }, { name: "Adjust and Monitor Lighting (e.g., Overhead, Spotlights, Greenlights)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
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
    { title: "Vital Signs & Assessment", skills: [
      { name: "Vital Sign - Pulse" }, { name: "Vital Sign - Respiration" }, { name: "Vital Sign - Lung Sounds" }, { name: "Vital Sign - Blood Pressure" }, { name: "Vital Sign - Pulse Oximetry" }, { name: "Vital Sign - Temperature" }, { name: "Vital Sign - Pain Assessment" }, { name: "Patient Assessment" }, { name: "Trauma Assessment" }, { name: "Blood Glucose Monitoring" },
    ]},
    { title: "Airway/Oxygenation", skills: [
      { name: "Suctioning" }, { name: "Nasopharyngeal Airway (NPA)" }, { name: "Oropharyngeal Airway (OPA)" }, { name: "BVM (Bag-Valve-Mask) - Adult" }, { name: "BVM (Bag-Valve-Mask) - Pediatric" }, { name: "O2 Administration" }, { name: "Oxygen Therapies/Humidifiers" }, { name: "Esophageal/Tracheal Airway" },
    ]},
    { title: "Immobilization", skills: [
      { name: "Splinting" }, { name: "Vacuum Splinting" }, { name: "Bandaging/Hemorrhage Control" }, { name: "Spinal Immobilization" }, { name: "Long Board Immobilization" },
    ]},
    { title: "Cardiovascular/Circulation", skills: [
      { name: "CPR - Adult" }, { name: "CPR - Pediatric" }, { name: "CPR - Infant" }, { name: "AED Operation" }, { name: "Cardioversion" }, { name: "Tourniquet/Bleeding Control" },
    ]},
    { title: "Miscellaneous Procedures", skills: [
      { name: "Intramuscular Injections" }, { name: "Patient Lifting/Moving" }, { name: "Stretcher Operations" }, { name: "Radio Communications" }, { name: "Documentation" }, { name: "Long Term Care Facility Experience" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (0-1 month)" }, { name: "Infant (1-12 months)" }, { name: "Pediatric (1-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Adult (18-65 years)" }, { name: "Geriatric (65+ years)" },
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
    { title: "Airway Management & Intubation", skills: [
      { name: "Advanced airway management (intubation, supraglottic)" }, { name: "Oral/nasal airway insertion" }, { name: "Head tilt/chin lift and modified jaw thrust (trauma)" }, { name: "BVM (bag valve mask) ventilation" }, { name: "Non-rebreather, partial rebreather, and simple face mask" }, { name: "Nasal cannula and Venturi mask" }, { name: "Demand valve-O2 powered" }, { name: "Orotracheal and nasotracheal intubation" }, { name: "Cricoid pressure" }, { name: "Needle cricothyroidotomy" }, { name: "End tidal CO2 monitoring" },
    ]},
    { title: "Cardiac Rhythms & Defibrillation", skills: [
      { name: "Cardiac rhythm interpretation" }, { name: "Defibrillation/cardioversion" }, { name: "Asystole and PEA (pulseless electrical activity)" }, { name: "2nd and 3rd degree heart block" }, { name: "Junctional escape rhythm" }, { name: "Ventricular fibrillation and ventricular tachycardia" }, { name: "Atrial fibrillation and atrial flutter" },
    ]},
    { title: "Medications", skills: [
      { name: "Advanced pharmacology administration" }, { name: "Epinephrine and Epi-Pen" }, { name: "Amiodarone and lidocaine" }, { name: "Adenosine, diltiazem, and verapamil" }, { name: "Sodium bicarbonate and calcium chloride" }, { name: "Aspirin and nitroglycerin" }, { name: "Narcan and activated charcoal" }, { name: "Oral glucose and Dextrose 50%" }, { name: "Furosemide, vasopressin, and dobutamine" }, { name: "Diazepam and magnesium sulfate" }, { name: "Normal saline administration" },
    ]},
    { title: "Medication Administration & IV Therapy", skills: [
      { name: "IV/IO access" }, { name: "Peripheral IV access" }, { name: "Internal/external jugular access" }, { name: "Intraosseous access" }, { name: "Subclavian access (continuous drips, IV push, piggyback)" }, { name: "Oral, sublingual, and rectal administration" }, { name: "Intramuscular and subcutaneous administration" }, { name: "Endotracheal and nasogastric administration" }, { name: "Nebulizer/aerosol administration" },
    ]},
    { title: "Care of Patients With", skills: [
      { name: "Trauma assessment and management" }, { name: "AMI (acute myocardial infarction) and unstable angina" }, { name: "CHF (congestive heart failure) and pulmonary edema" }, { name: "CVA (cerebral vascular accident)" }, { name: "Cardiac arrest" }, { name: "Asthma and COPD" }, { name: "Tension pneumothorax and needle decompression" }, { name: "Sucking chest wound and open chest wounds" }, { name: "Hypo/hyperglycemia" }, { name: "Seizure" }, { name: "Sepsis" }, { name: "GI bleed and esophageal bleeding" }, { name: "Acute abdomen" }, { name: "Gastroenteritis" }, { name: "Hypertension and hypovolemic shock" }, { name: "Closed and open fractures" }, { name: "MVC (motor vehicle collision) trauma" }, { name: "Burns and inhalation injuries" }, { name: "Gunshot wounds and stabbings" }, { name: "Amputations and lung contusions" }, { name: "Aneurysms" }, { name: "Eye injuries" }, { name: "Croup and epiglottitis" }, { name: "Overdose" }, { name: "Impending delivery" }, { name: "Eclampsia/pre-eclampsia and placenta previa" },
    ]},
    { title: "Emergency Equipment", skills: [
      { name: "Pulse oximeter" }, { name: "12 lead EKG" }, { name: "Defibrillator (manual) and AED" }, { name: "Infusion pumps and ventilators" }, { name: "BP cuffs" }, { name: "Accucheck (blood glucose monitoring)" }, { name: "Stretchers" },
    ]},
    { title: "Immobilization & Extrication", skills: [
      { name: "Field extrication assist" }, { name: "Traction splint" }, { name: "Leg/arm splints" }, { name: "Cervical collar (soft/rigid)" }, { name: "Head blocks and straps" }, { name: "Long board/short board" }, { name: "KED (Kendrick extrication device)" }, { name: "Hazmat/scene safety awareness" }, { name: "Mass casualty triage" }, { name: "Vehicle extrication tools (wrecking bar, bolt cutters, hacksaw, trauma shears)" },
    ]},
    { title: "Transport & Documentation", skills: [
      { name: "Patient transport protocols" }, { name: "Inter-facility transport" }, { name: "ePCR documentation" }, { name: "Radio/hospital communication" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},
];
