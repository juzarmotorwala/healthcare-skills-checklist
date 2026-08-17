import { ChecklistSpec } from "../checklistData";

// Specialties added after the initial launch, based on user-requested roles
// not yet covered by the other checklist files. Kept in their own file so
// this batch is easy to review as a unit; each entry's `group` field still
// places it in the correct section of the homepage directory.
export const newAdditionsChecklists: ChecklistSpec[] = [
  { slug: "cvor-tech", title: "CVOR Technologist Skills Checklist", shortTitle: "CVOR Tech", icon: "🫀", group: "Surgical", categories: [
    { title: "Work Setting", skills: [
      { name: "Cardiovascular OR" }, { name: "Hybrid OR/Cath Lab" }, { name: "Vascular OR" }, { name: "Thoracic OR" }, { name: "Trauma Call" },
    ]},
    { title: "Cardiac Procedures", skills: [
      { name: "CABG" }, { name: "Valve Repair/Replacement" }, { name: "Aortic Aneurysm Repair" }, { name: "Heart/Lung Transplant" }, { name: "Pacemaker/AICD Insertion" }, { name: "Maze Procedure" }, { name: "LVAD/VAD Implant" },
    ]},
    { title: "Perfusion & Bypass Support", skills: [
      { name: "Cardiopulmonary Bypass Setup Assist" }, { name: "Cannulation Assist" }, { name: "Myocardial Protection/Cardioplegia Delivery" }, { name: "Intra-Aortic Balloon Pump Setup" },
    ]},
    { title: "Instrumentation & Equipment", skills: [
      { name: "Sternal Saw Operation" }, { name: "Cell Saver Operation" }, { name: "Cardiac Instrument Trays" }, { name: "Fluoroscopy/C-Arm Positioning" }, { name: "Rapid Autologous Transfusion System" },
    ]},
    { title: "Sterile Technique & Safety", skills: [
      { name: "Sterile Field Setup and Maintenance" }, { name: "Sponge, Sharps & Instrument Counts" }, { name: "Specimen Handling and Labeling" }, { name: "Emergency Sternotomy Tray Readiness" },
    ]},
    { title: "Emergency Response", skills: [
      { name: "Emergent Re-Sternotomy" }, { name: "Massive Hemorrhage Protocol" }, { name: "Malignant Hyperthermia Response" }, { name: "Code Response in OR" },
    ]},
  ]},

  { slug: "aprn", title: "Advanced Practice Registered Nurse (APRN) Skills Checklist", shortTitle: "APRN", icon: "🩺", group: "Nursing", categories: [
    { title: "Practice Settings", skills: [
      { name: "Primary Care Clinic" }, { name: "Hospital Inpatient" }, { name: "Emergency Department" }, { name: "Specialty Clinic" }, { name: "Long-Term Care" }, { name: "Telehealth" }, { name: "Academic/Faculty Practice" },
    ]},
    { title: "Assessment & Diagnosis", skills: [
      { name: "Comprehensive History and Physical Exam" }, { name: "Differential Diagnosis Formulation" }, { name: "Ordering and Interpreting Diagnostic Tests" }, { name: "Chronic Disease Diagnosis and Staging" }, { name: "Acute Illness Assessment" },
    ]},
    { title: "Management & Prescriptive Authority", skills: [
      { name: "Prescription of Medications" }, { name: "Chronic Disease Management" }, { name: "Care Plan Development" }, { name: "Medication Reconciliation" }, { name: "Controlled Substance Prescribing" },
    ]},
    { title: "Procedures", skills: [
      { name: "Suturing/Laceration Repair" }, { name: "Joint Injections" }, { name: "Skin Biopsy" }, { name: "IUD Insertion/Removal" }, { name: "Incision and Drainage" },
    ]},
    { title: "Collaboration & Referral", skills: [
      { name: "Physician Collaboration/Consultation" }, { name: "Specialist Referral" }, { name: "Interdisciplinary Care Coordination" }, { name: "Patient and Family Education" },
    ]},
    { title: "Regulatory & Credentialing", skills: [
      { name: "State APRN Licensure/Scope of Practice" }, { name: "DEA Registration" }, { name: "National Certification Maintenance" }, { name: "Collaborative Practice Agreement Management" },
    ]},
  ]},

  { slug: "oncology-nurse-practitioner", title: "Oncology Nurse Practitioner Skills Checklist", shortTitle: "Oncology NP", icon: "🎗️", group: "Nursing", categories: [
    { title: "Practice Settings", skills: [
      { name: "Inpatient Oncology" }, { name: "Outpatient Infusion Clinic" }, { name: "Radiation Oncology Clinic" }, { name: "Survivorship Clinic" }, { name: "Palliative/Supportive Care" },
    ]},
    { title: "Diagnosis & Staging", skills: [
      { name: "Cancer Diagnostic Workup" }, { name: "Staging Interpretation" }, { name: "Biopsy Result Review" }, { name: "Genetic Risk Assessment/Referral" },
    ]},
    { title: "Treatment Management", skills: [
      { name: "Chemotherapy Ordering" }, { name: "Targeted Therapy Management" }, { name: "Immunotherapy Management" }, { name: "Radiation Therapy Coordination" }, { name: "Clinical Trial Eligibility Review" },
    ]},
    { title: "Symptom & Toxicity Management", skills: [
      { name: "Chemotherapy-Induced Nausea/Vomiting Management" }, { name: "Neutropenic Fever Management" }, { name: "Pain Management" }, { name: "Immune-Related Adverse Event Management" }, { name: "Mucositis/Skin Toxicity Management" },
    ]},
    { title: "Survivorship & Supportive Care", skills: [
      { name: "Survivorship Care Plan Development" }, { name: "Psychosocial Assessment" }, { name: "Advance Care Planning" }, { name: "Palliative Care Referral" },
    ]},
    { title: "Prescriptive & Procedural", skills: [
      { name: "Oral Oncolytic Prescribing" }, { name: "Supportive Medication Prescribing" }, { name: "Bone Marrow Biopsy Assist" }, { name: "Port Access" },
    ]},
  ]},

  { slug: "oncology-aprn", title: "Oncology APRN Skills Checklist", shortTitle: "Oncology APRN", icon: "🎗️", group: "Nursing", categories: [
    { title: "Practice Settings", skills: [
      { name: "Inpatient Oncology/BMT Unit" }, { name: "Outpatient Infusion Clinic" }, { name: "Hospice/Palliative Care" }, { name: "Multidisciplinary Tumor Board" },
    ]},
    { title: "Comprehensive Assessment", skills: [
      { name: "Oncologic History and Physical Exam" }, { name: "Performance Status Assessment (ECOG/Karnofsky)" }, { name: "Comorbidity Risk Assessment" }, { name: "Nutritional Status Assessment" },
    ]},
    { title: "Treatment Planning & Coordination", skills: [
      { name: "Treatment Plan Development" }, { name: "Chemotherapy/Immunotherapy Order Management" }, { name: "Bone Marrow/Stem Cell Transplant Coordination" }, { name: "Blood Product Support Management" },
    ]},
    { title: "Symptom Management", skills: [
      { name: "Pain and Symptom Management" }, { name: "Graft-Versus-Host Disease Management" }, { name: "Cytokine Release Syndrome Management" }, { name: "Neutropenic Sepsis Recognition and Management" },
    ]},
    { title: "Procedures", skills: [
      { name: "Bone Marrow Biopsy" }, { name: "Lumbar Puncture/Intrathecal Chemotherapy Assist" }, { name: "Central Line/Port Management" }, { name: "Paracentesis/Thoracentesis Assist" },
    ]},
    { title: "Psychosocial & End-of-Life Care", skills: [
      { name: "Advance Care Planning" }, { name: "Goals of Care Conversations" }, { name: "Family Support and Bereavement Referral" }, { name: "Hospice Transition Coordination" },
    ]},
  ]},

  { slug: "pcu", title: "Registered Nurse – Progressive Care Unit (PCU) Skills Checklist", shortTitle: "RN – PCU", icon: "📈", group: "Critical Care", categories: [
    { title: "Cardiac Monitoring", skills: [
      { name: "Continuous Telemetry Monitoring" }, { name: "Dysrhythmia Recognition" }, { name: "12-Lead EKG Acquisition and Interpretation" }, { name: "Post-MI Monitoring" },
    ]},
    { title: "Care of Patient With", skills: [
      { name: "Congestive Heart Failure" }, { name: "COPD Exacerbation" }, { name: "Sepsis (Non-ICU Level)" }, { name: "Post-Surgical Recovery" }, { name: "Diabetic Ketoacidosis (Stable)" }, { name: "Acute Renal Failure (Non-Dialysis Critical)" },
    ]},
    { title: "Respiratory Support", skills: [
      { name: "High-Flow Nasal Cannula" }, { name: "Non-Invasive Ventilation (BiPAP/CPAP)" }, { name: "Chest Tube Management" }, { name: "Tracheostomy Care" },
    ]},
    { title: "Vascular Access & Drips", skills: [
      { name: "Titration of Cardiac Drips" }, { name: "Central Line Care" }, { name: "PICC Line Care" }, { name: "Vasoactive Medication Monitoring" },
    ]},
    { title: "Patient Safety & Escalation", skills: [
      { name: "Early Warning Score Recognition" }, { name: "Rapid Response Activation" }, { name: "Fall Prevention Protocols" }, { name: "Delirium Screening" },
    ]},
    { title: "Phlebotomy & IV Therapy", skills: [
      { name: "Venous Stick/Blood Draw" }, { name: "Regulate IVs" }, { name: "IV Infusion Pumps" }, { name: "IV Drip Titration" },
    ]},
    { title: "Multi-System Patient Care", skills: [
      { name: "Neuro Assessment" }, { name: "Care of Patient with CVA/TIA" }, { name: "Enterostomal Care" }, { name: "Care of Patient with Liver Transplant" }, { name: "Care of Patient Post-Whipple Procedure" }, { name: "Electrolyte Imbalance/Replacement" }, { name: "Continuous Bladder Irrigation" }, { name: "Care of Hemodialysis Patient" }, { name: "Range of Motion (ROM)" }, { name: "Skin Traction" }, { name: "Care of Patient with Total Joint Replacement" }, { name: "Diabetes Management" }, { name: "Universal Precautions/Isolation" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "patient-safety-accreditation-manager", title: "Patient Safety & Accreditation Manager Skills Checklist", shortTitle: "Patient Safety Accreditation Manager", icon: "📋", group: "Administration & Leadership", categories: [
    { title: "Accreditation Readiness", skills: [
      { name: "Joint Commission Standards Compliance" }, { name: "CMS Conditions of Participation" }, { name: "State Licensing Survey Preparation" }, { name: "Tracer Methodology" }, { name: "Mock Survey Coordination" },
    ]},
    { title: "Safety Program Management", skills: [
      { name: "Patient Safety Event Investigation" }, { name: "Root Cause Analysis Facilitation" }, { name: "Failure Mode and Effects Analysis (FMEA)" }, { name: "Sentinel Event Reporting" }, { name: "Safety Culture Surveys" },
    ]},
    { title: "Policy & Documentation", skills: [
      { name: "Policy and Procedure Development" }, { name: "Corrective Action Plan Development" }, { name: "Regulatory Documentation Management" }, { name: "Survey Finding Remediation Tracking" },
    ]},
    { title: "Education & Reporting", skills: [
      { name: "Staff Safety and Compliance Education" }, { name: "Event Reporting System Management" }, { name: "Leadership Safety Reporting/Dashboards" }, { name: "National Patient Safety Goals Education" },
    ]},
  ]},

  { slug: "rn-acute-rehab", title: "Registered Nurse – Acute Rehab Skills Checklist", shortTitle: "RN – Acute Rehab", icon: "🦽", group: "Specialty Care", categories: [
    { title: "Neurological Rehabilitation Nursing", skills: [
      { name: "CVA/Stroke Recovery Care" }, { name: "Traumatic Brain Injury Care" }, { name: "Spinal Cord Injury Care" }, { name: "Neurogenic Bowel/Bladder Management" },
    ]},
    { title: "Orthopedic Rehabilitation Nursing", skills: [
      { name: "Post-Joint Replacement Care" }, { name: "Amputation Care" }, { name: "Fracture Management" }, { name: "Mobility and Transfer Assistance" },
    ]},
    { title: "Medical Management", skills: [
      { name: "Complex Medication Management" }, { name: "Bowel/Bladder Program Implementation" }, { name: "Skin/Wound Assessment" }, { name: "DVT Prophylaxis" }, { name: "Autonomic Dysreflexia Recognition" },
    ]},
    { title: "Functional Assessment & Discharge Planning", skills: [
      { name: "FIM Scoring" }, { name: "ADL Assessment" }, { name: "Interdisciplinary Rehab Rounding" }, { name: "Discharge and Equipment Planning" }, { name: "Family/Caregiver Training" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "cath-lab-rn", title: "Registered Nurse – Cath Lab Skills Checklist", shortTitle: "Cath Lab RN", icon: "🫀", group: "Diagnostic & Lab", categories: [
    { title: "Patient-Centered Care", skills: [
      { name: "Verify Orders and Patient Consent" }, { name: "Administer Medications" }, { name: "Perform and Document Pre-Procedure Assessment" }, { name: "Post-Procedure Transport and Handoff" }, { name: "Monitor for and Respond to Complications" }, { name: "Lung Sounds" }, { name: "Chest Pain" }, { name: "12-Lead ECG Lead Placement and Interpretation" }, { name: "Peripheral Pulse Checks" }, { name: "Doppler Use" }, { name: "Abnormal Heart Sounds and Murmur" }, { name: "Neurological Assessment (e.g., Glasgow Coma Scale)" }, { name: "Clear Explanation of Procedures and Answering Patient/Family Questions" }, { name: "Pre- and Post-Procedure Patient Teaching (e.g., Activity Restrictions, Site Care)" }, { name: "Reinforcing Instructions for Medication and Follow-Up Care" }, { name: "Emotional Support for Patients Experiencing Anxiety or Fear" },
    ]},
    { title: "General Skills", skills: [
      { name: "Assist With Medication and Contrast Setup" }, { name: "Check and Maintain Equipment Readiness" }, { name: "Prepare and Calibrate Monitoring Equipment" }, { name: "Restock and Clean Supplies Post-Procedure" }, { name: "Report Abnormal Findings, Equipment Malfunctions, and Supply Issues Promptly" }, { name: "Participate in Pre-Procedure Briefings and Post-Procedure Debriefings" }, { name: "Chart Medication Administration and Effects" }, { name: "Collaborate With the Multidisciplinary Team to Coordinate Patient Care" }, { name: "Provide Handoff Communication Using a Standardized Format (e.g., SBAR)" }, { name: "Document All Care Provided, Including Assessments, Interventions, and Patient Responses" }, { name: "Communicate Patient Status and Procedural Updates to Team Members" }, { name: "Participate in Peer Review and Performance Evaluations" }, { name: "Attend Continuing Education Related to Cardiac Catheter Lab Practices" }, { name: "Engage in Evidence-Based Practice and Quality Improvement Initiatives" }, { name: "Provide Orientation or Mentoring for New Staff" }, { name: "Maintain Certifications Required for Catheter Lab Practice" },
    ]},
    { title: "Airway & Respiratory Management", skills: [
      { name: "Patient Positioning for Optimal Respiratory Support" }, { name: "Recognition and Response to Respiratory Distress" }, { name: "Assisting With Ventilator Management and Basic Troubleshooting" }, { name: "Airway Management Including Oral and Nasal Suctioning" }, { name: "Oximetry and Capnography Monitoring" }, { name: "Use of Oral and Nasopharyngeal Airways" }, { name: "Oxygen Delivery Systems and Titration Based on Patient Condition" }, { name: "Aspiration Precautions" },
    ]},
    { title: "Sedation, Pain & Hemodynamic Monitoring", skills: [
      { name: "Recognition and Management of Sedation-Related Complications" }, { name: "Monitoring and Management of Moderate Sedation" }, { name: "Sedation Scale Assessment (e.g., RASS, Pasero)" }, { name: "Pain Assessment and Analgesic Administration" }, { name: "Internal Cardioverter Defibrillator Management" }, { name: "Monitoring and Support of Hemodynamically Unstable Patients" }, { name: "Continuous Cardiac Rhythm and Vital Sign Monitoring" }, { name: "Initiation of Emergency Protocols for Cardiac or Hemodynamic Compromise" }, { name: "Pulmonary Embolism Monitoring" }, { name: "Interpretation of ECG Changes Related to Ischemia and Arrhythmias" }, { name: "Blood Pressure Monitoring (e.g., Manual, Automatic, Invasive)" },
    ]},
    { title: "Hemodynamic Values", skills: [
      { name: "Systemic Vascular Resistance (SVR)" }, { name: "Cardiac Index" }, { name: "Pulmonary Capillary Wedge Pressure (PCWP)" }, { name: "Pulmonary Vascular Resistance (PVR)" }, { name: "A-Line Waveform Interpretation" }, { name: "Mean Arterial Pressure (MAP)" }, { name: "Mixed Venous Oxygen Saturation (SVO2)" }, { name: "Central Venous Pressure (CVP)" }, { name: "Cardiac Output" },
    ]},
    { title: "Emergency Preparedness & Response", skills: [
      { name: "Effective Communication During Rapid Response Events" }, { name: "Recognition and Immediate Response to Allergic Reactions or Contrast Dye Reactions" }, { name: "Participation in Emergency Interventions (e.g., Code Response)" }, { name: "Coordination of Care During Acute Patient Decompensation" }, { name: "Familiarity With Emergency Equipment and Crash Cart Setup" }, { name: "Vascular Complication Recognition" }, { name: "Cardiac Tamponade Recognition" }, { name: "Emergent Transfer to OR Coordination" },
    ]},
    { title: "Quality Assurance, Infection Control & Radiation Safety", skills: [
      { name: "Dispose of Sharps and Biohazard Materials Properly" }, { name: "Maintain a Sterile Field and Use Aseptic Technique During Procedures" }, { name: "Follow Infection Control Policies, Including Proper Hand Hygiene and PPE Use" }, { name: "Ensure Equipment Is Cleaned, Disinfected, and Sterilized Appropriately" }, { name: "Participate in Safety Drills and Continuous Quality Improvement Efforts" }, { name: "Perform Safety Checks and Time-Outs According to Protocol" }, { name: "Understand Radiation Risks and Safety Guidelines in the Catheter Lab Environment" }, { name: "Use and Check Dosimeter Badges Consistently" }, { name: "Follow ALARA (As Low As Reasonably Achievable) Principles for Radiation Exposure" }, { name: "Use Time, Distance, and Shielding Strategies to Reduce Personal Exposure" }, { name: "Assist in Minimizing Patient Exposure by Using Appropriate Shielding and Equipment Settings" }, { name: "Wear and Maintain Protective Gear (e.g., Lead Apron, Thyroid Shield, Lead Glasses)" },
    ]},
    { title: "Procedures / Scrub", skills: [
      { name: "Femoral Artery Sheath Removal" }, { name: "Cardioversion" }, { name: "Intra-Aortic Balloon Pump" }, { name: "Pericardiocentesis" }, { name: "Peripheral Vascular Diagnostic Imaging" }, { name: "Intubation" }, { name: "Swan-Ganz/PA Catheter Insertion" }, { name: "Rotational Atherectomy" }, { name: "Arterial Line Insertion" }, { name: "Left Heart Catheterization" }, { name: "Central Line Insertion" }, { name: "Impella Insertion and Management" }, { name: "Peripheral Vascular Intervention" }, { name: "Blood Sampling During Catheterization" }, { name: "Laser Atherectomy" }, { name: "Blood Pressure Measurement Intraoperatively" }, { name: "Right Heart Catheterization" }, { name: "Open Chest Emergency" }, { name: "Emergency Tracheostomy" }, { name: "Orbital Atherectomy" },
    ]},
    { title: "Access Site Management", skills: [
      { name: "Compression Techniques and Use of Vascular Closure Devices and Hemostatic Devices" }, { name: "Management of Vascular Access Devices (e.g., Arterial Sheaths, Central Lines)" }, { name: "Safe Patient Positioning to Protect Vascular Access" }, { name: "Site Assessment for Bleeding, Hematoma, or Infection" }, { name: "Allen's Test" }, { name: "Renal Protection Strategies (e.g., Contrast Monitoring, Hydration)" }, { name: "Patient Ambulation Protocol After Sheath Removal" }, { name: "Site Care Education for Patients Post-Discharge" }, { name: "Documentation of Pulses and Access Integrity" },
    ]},
    { title: "Medications – Vasopressors, Inotropes & Cardiac Support", skills: [
      { name: "Phenylephrine (Neo-Synephrine®)" }, { name: "Vasopressin (Pitressin®)" }, { name: "Dopamine (Intropin®)" }, { name: "Epinephrine (Adrenalin®)" }, { name: "Milrinone (Primacor®)" }, { name: "Norepinephrine (Levophed®)" }, { name: "Isoproterenol (Isuprel®)" }, { name: "Dobutamine (Dobutrex®)" },
    ]},
    { title: "Medications – Antiarrhythmics & Cardiac Medications", skills: [
      { name: "Diltiazem (Cardizem®)" }, { name: "Metoprolol (Lopressor®)" }, { name: "Atropine (AtroPen®)" }, { name: "Nicardipine (Cardene®)" }, { name: "Amiodarone (Cordarone®)" }, { name: "Procainamide (Pronestyl®)" }, { name: "Verapamil (Calan®, Isoptin®, Verelan®)" }, { name: "Propranolol (Inderal®)" }, { name: "Adenosine (Adenocard®)" }, { name: "Lidocaine (Xylocaine®)" }, { name: "Digoxin (Lanoxin®)" }, { name: "Esmolol (Brevibloc®)" },
    ]},
    { title: "Medications – Anticoagulants, Antiplatelets & Thrombolytics", skills: [
      { name: "Bivalirudin (Angiomax®)" }, { name: "Warfarin (Coumadin®)" }, { name: "Unfractionated Heparin" }, { name: "Ticagrelor (Brilinta®)" }, { name: "Streptokinase" }, { name: "Clopidogrel (Plavix®)" }, { name: "Tenecteplase (TNKase®)" }, { name: "Tirofiban (Aggrastat®)" }, { name: "Aspirin" }, { name: "Eptifibatide (Integrilin®)" }, { name: "Alteplase (Activase®)" }, { name: "Enoxaparin (Lovenox®)" }, { name: "Prasugrel (Effient®)" },
    ]},
    { title: "Medications – Sedation, Anesthesia & Paralytics", skills: [
      { name: "Fentanyl (Actiq®)" }, { name: "Propofol (Diprivan®)" }, { name: "Rocuronium (Zemuron®)" }, { name: "Midazolam (Versed®)" }, { name: "Lorazepam (Ativan®)" }, { name: "Morphine (MS Contin®)" }, { name: "Etomidate (Amidate®)" }, { name: "Diazepam (Valium®)" }, { name: "Succinylcholine (Anectine®)" }, { name: "Ketamine (Ketalar®)" }, { name: "Vecuronium (Norcuron®)" },
    ]},
    { title: "Medications – Antihypertensives, Vasodilators & Miscellaneous", skills: [
      { name: "Nitroglycerin (Tridil®)" }, { name: "Hydralazine" }, { name: "Labetalol (Trandate®)" }, { name: "Captopril (Capoten®)" }, { name: "Nitroprusside (Nipride®)" }, { name: "Dexamethasone (Decadron®)" }, { name: "Albuterol (Accuneb®, ProAir® HFA)" }, { name: "Methylprednisolone (Solu-Medrol®)" }, { name: "Diphenhydramine (Benadryl®)" }, { name: "Fosphenytoin (Cerebyx®)" }, { name: "Phenobarbital (Luminal®)" }, { name: "Phenytoin (Dilantin®)" }, { name: "Carbamazepine (Tegretol®)" }, { name: "Potassium Chloride" }, { name: "Sodium Bicarbonate" }, { name: "Calcium Gluconate" }, { name: "Sodium Polystyrene Sulfonate (Kayexalate®)" }, { name: "Magnesium Sulfate" }, { name: "Ondansetron (Zofran®)" }, { name: "Promethazine (Phenergan®)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "ep-lab-rn", title: "Registered Nurse – EP Lab Skills Checklist", shortTitle: "EP Lab RN", icon: "⚡", group: "Diagnostic & Lab", categories: [
    { title: "Pre-Procedure Care", skills: [
      { name: "Patient Assessment and History" }, { name: "Anticoagulation Review" }, { name: "Consent Verification" }, { name: "IV Access Placement" },
    ]},
    { title: "Procedural Support", skills: [
      { name: "Conscious Sedation Monitoring" }, { name: "Cardiac Monitoring During Ablation" }, { name: "Circulating During EP Study" }, { name: "Defibrillator/Pacemaker Programming Assist" },
    ]},
    { title: "Device Procedures", skills: [
      { name: "Pacemaker Implant Support" }, { name: "ICD Implant Support" }, { name: "Ablation Procedure Support" }, { name: "Lead Extraction Support" },
    ]},
    { title: "Post-Procedure Care", skills: [
      { name: "Access Site Monitoring" }, { name: "Post-Ablation Monitoring" }, { name: "Device Interrogation Assist" }, { name: "Discharge Teaching" },
    ]},
    { title: "Emergency Response", skills: [
      { name: "Cardiac Tamponade Recognition" }, { name: "Arrhythmia Emergency Management" }, { name: "Code Response in EP Lab" },
    ]},
  ]},


  { slug: "rn-surgical-icu", title: "Registered Nurse – Surgical ICU Skills Checklist", shortTitle: "RN – Surgical ICU", icon: "🛏️", group: "Critical Care", categories: [
    { title: "Post-Surgical Critical Care", skills: [
      { name: "Post-Cardiac Surgery Recovery" }, { name: "Post-Abdominal Surgery Recovery" }, { name: "Post-Transplant Recovery" }, { name: "Post-Trauma Surgery Recovery" }, { name: "Post-Neurosurgery Recovery" },
    ]},
    { title: "Hemodynamic Monitoring", skills: [
      { name: "Arterial Line Management" }, { name: "Central Venous Pressure Monitoring" }, { name: "Cardiac Output Monitoring" }, { name: "Vasoactive Drip Titration" },
    ]},
    { title: "Respiratory Management", skills: [
      { name: "Mechanical Ventilation Management" }, { name: "Ventilator Weaning" }, { name: "Chest Tube Management" }, { name: "ABG Interpretation" },
    ]},
    { title: "Wound & Drain Management", skills: [
      { name: "Surgical Wound Assessment" }, { name: "JP/Surgical Drain Management" }, { name: "Ostomy Care" }, { name: "Negative Pressure Wound Therapy" },
    ]},
    { title: "Patient Safety & Quality", skills: [
      { name: "Sedation Vacation/Spontaneous Awakening Trials" }, { name: "Delirium Screening (CAM-ICU)" }, { name: "Early Mobility Protocols" }, { name: "VAP/CLABSI Prevention Bundles" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "rn-stepdown-icu", title: "Registered Nurse – Stepdown ICU Skills Checklist", shortTitle: "RN – Stepdown ICU", icon: "🔻", group: "Critical Care", categories: [
    { title: "Transitional Critical Care", skills: [
      { name: "Post-ICU Transfer Assessment" }, { name: "Weaning from Critical Care Support" }, { name: "Multi-System Monitoring" }, { name: "Readmission Risk Recognition" },
    ]},
    { title: "Cardiac & Hemodynamic Monitoring", skills: [
      { name: "Continuous Telemetry Monitoring" }, { name: "Dysrhythmia Recognition" }, { name: "Low-Dose Vasoactive Drip Management" }, { name: "12-Lead EKG Interpretation" },
    ]},
    { title: "Respiratory Support", skills: [
      { name: "High-Flow Nasal Cannula" }, { name: "Non-Invasive Ventilation (BiPAP/CPAP)" }, { name: "Tracheostomy Care" }, { name: "Chest Tube Management" },
    ]},
    { title: "Care of Patient With", skills: [
      { name: "Sepsis (Recovering)" }, { name: "Acute Kidney Injury" }, { name: "Post-Surgical Complications" }, { name: "Diabetic Ketoacidosis (Resolving)" },
    ]},
    { title: "Patient Safety & Escalation", skills: [
      { name: "Early Warning Score Recognition" }, { name: "Rapid Response Activation" }, { name: "Fall Prevention Protocols" }, { name: "Delirium Screening" },
    ]},
  ]},

  { slug: "rn-or-circulator", title: "Registered Nurse – OR Circulator Skills Checklist", shortTitle: "RN – OR Circulator", icon: "🔄", group: "Surgical", categories: [
    { title: "Pre-Operative Preparation", skills: [
      { name: "Patient Assessment and Chart Review" }, { name: "Consent Verification" }, { name: "Site Marking Verification" }, { name: "Allergy and Medication Reconciliation" }, { name: "Operating Room Setup" },
    ]},
    { title: "Intra-Operative Circulating Duties", skills: [
      { name: "Sponge, Sharps & Instrument Counts" }, { name: "Patient Positioning" }, { name: "Skin Prep" }, { name: "Specimen Handling and Labeling" }, { name: "Intraoperative Documentation" }, { name: "Time-Out/Patient Advocacy" },
    ]},
    { title: "Patient Safety & Coordination", skills: [
      { name: "Fire Safety Protocol" }, { name: "Universal Protocol Compliance" }, { name: "Equipment and Supply Coordination" }, { name: "Communication with Anesthesia and Surgical Team" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "Malignant Hyperthermia Response" }, { name: "Massive Hemorrhage Protocol" }, { name: "Emergency Conversion (Lap to Open)" }, { name: "Code Response in OR" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "rn-or-scrub", title: "Registered Nurse – OR Scrub Skills Checklist", shortTitle: "RN – OR Scrub", icon: "🧤", group: "Surgical", categories: [
    { title: "Sterile Field Preparation", skills: [
      { name: "Sterile Field Setup and Maintenance" }, { name: "Gowning and Gloving (Self and Team)" }, { name: "Back-Table/Mayo Stand Setup" }, { name: "Instrument and Supply Verification" },
    ]},
    { title: "Intra-Operative Scrub Duties", skills: [
      { name: "Instrument Passing Technique" }, { name: "Sponge, Sharps & Instrument Counts" }, { name: "Specimen Handling" }, { name: "Maintaining Sterile Technique" },
    ]},
    { title: "Surgical Specialties", skills: [
      { name: "General Surgery Instrumentation" }, { name: "Orthopedic Surgery Instrumentation" }, { name: "Laparoscopic Instrumentation" }, { name: "Robotic Surgical System Assist (da Vinci)" },
    ]},
    { title: "Sterile Technique & Safety", skills: [
      { name: "Surgical Asepsis Principles" }, { name: "Sterile Field Break/Correction" }, { name: "Electrocautery Safety" }, { name: "Laser Safety" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "Malignant Hyperthermia Response" }, { name: "Massive Hemorrhage Protocol" }, { name: "Emergency Conversion (Lap to Open)" },
    ]},
  ]},

  { slug: "rn-or-scrub-circulator", title: "Registered Nurse – OR Scrub & Circulator Skills Checklist", shortTitle: "RN – OR Scrub & Circulator", icon: "🔀", group: "Surgical", categories: [
    { title: "Pre-Operative Preparation", skills: [
      { name: "Patient Assessment and Chart Review" }, { name: "Consent Verification" }, { name: "Site Marking Verification" }, { name: "Operating Room Setup" },
    ]},
    { title: "Scrub Role Duties", skills: [
      { name: "Sterile Field Setup and Maintenance" }, { name: "Gowning and Gloving (Self and Team)" }, { name: "Instrument Passing Technique" }, { name: "Back-Table/Mayo Stand Setup" },
    ]},
    { title: "Circulating Role Duties", skills: [
      { name: "Patient Positioning" }, { name: "Skin Prep" }, { name: "Intraoperative Documentation" }, { name: "Time-Out/Patient Advocacy" },
    ]},
    { title: "Shared Duties", skills: [
      { name: "Sponge, Sharps & Instrument Counts" }, { name: "Specimen Handling and Labeling" }, { name: "Universal Protocol Compliance" }, { name: "Fire Safety Protocol" },
    ]},
    { title: "Surgical Specialties", skills: [
      { name: "General Surgery" }, { name: "Orthopedic Surgery" }, { name: "Laparoscopic Procedures" }, { name: "Robotic Surgical System Assist (da Vinci)" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "Malignant Hyperthermia Response" }, { name: "Massive Hemorrhage Protocol" }, { name: "Code Response in OR" },
    ]},
  ]},

  { slug: "rn-post-anesthesia", title: "Registered Nurse – Post Anesthesia Recovery Skills Checklist", shortTitle: "RN – Post Anesthesia", icon: "😴", group: "Critical Care", categories: [
    { title: "Emergence & Phase I Recovery", skills: [
      { name: "Emergence from General Anesthesia" }, { name: "Airway Management/Extubation Recovery" }, { name: "Regional Anesthesia Recovery" }, { name: "Malignant Hyperthermia Recognition" },
    ]},
    { title: "Respiratory & Airway Monitoring", skills: [
      { name: "Pulse Oximetry Monitoring" }, { name: "Airway Obstruction Management" }, { name: "Laryngospasm Management" }, { name: "Aspiration Risk Assessment" },
    ]},
    { title: "Pain & PONV Management", skills: [
      { name: "Post-Operative Pain Assessment" }, { name: "Opioid and Multimodal Pain Management" }, { name: "PONV Prevention/Treatment" }, { name: "Regional Block Assessment" },
    ]},
    { title: "Phase II Recovery & Discharge", skills: [
      { name: "Discharge Readiness Assessment (Aldrete/PADSS)" }, { name: "Ambulatory Discharge Teaching" }, { name: "Family/Caregiver Instructions" }, { name: "Wound/Dressing Check" },
    ]},
    { title: "Emergency Response", skills: [
      { name: "Cardiac Arrest Response" }, { name: "Hemorrhage Recognition" }, { name: "Anaphylaxis Management" }, { name: "Rapid Response Activation" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "rn-unit-manager", title: "Registered Nurse Unit Manager Skills Checklist", shortTitle: "RN Unit Manager", icon: "🧭", group: "Nursing", categories: [
    { title: "Daily Unit Operations", skills: [
      { name: "Daily Staffing and Assignment" }, { name: "Charge Nurse Oversight" }, { name: "Bed Management/Throughput" }, { name: "Supply and Equipment Management" },
    ]},
    { title: "Staffing & Scheduling", skills: [
      { name: "Schedule Creation and Approval" }, { name: "Overtime and Agency Staffing Management" }, { name: "Skill Mix and Acuity Matching" },
    ]},
    { title: "Unit-Based Quality & Safety", skills: [
      { name: "Unit Quality Metric Tracking" }, { name: "Incident Review and Follow-Up" }, { name: "Unit-Based Safety Rounds" }, { name: "Regulatory/Survey Readiness" },
    ]},
    { title: "Staff Development & Engagement", skills: [
      { name: "New Hire Orientation Oversight" }, { name: "Performance Evaluation" }, { name: "Unit Council/Shared Governance Facilitation" }, { name: "Staff Recognition and Engagement" },
    ]},
    { title: "Patient & Family Experience", skills: [
      { name: "Patient Satisfaction/HCAHPS Follow-Up" }, { name: "Complaint Resolution" }, { name: "Interdisciplinary Rounding" },
    ]},
  ]},

  { slug: "cardiac-sonographer", title: "Cardiac Sonographer Skills Checklist", shortTitle: "Cardiac Sonographer", icon: "🫀", group: "Diagnostic & Lab", categories: [
    { title: "Echocardiographic Views & Image Acquisition", skills: [
      { name: "Parasternal Long Axis View" }, { name: "Parasternal Short Axis View" }, { name: "Apical Four Chamber View" }, { name: "Apical Two/Three Chamber View" }, { name: "Subcostal View" }, { name: "Suprasternal View" },
    ]},
    { title: "Doppler Techniques", skills: [
      { name: "Color Flow Doppler" }, { name: "Pulsed Wave Doppler" }, { name: "Continuous Wave Doppler" }, { name: "Tissue Doppler Imaging" },
    ]},
    { title: "Measurements & Calculations", skills: [
      { name: "Ejection Fraction Calculation" }, { name: "Chamber Size Measurement" }, { name: "Valve Area/Gradient Calculation" }, { name: "Diastolic Function Assessment" },
    ]},
    { title: "Specialized Studies", skills: [
      { name: "Stress Echocardiography" }, { name: "Transesophageal Echo (TEE) Assist" }, { name: "Contrast Echocardiography" }, { name: "3D Echocardiography" },
    ]},
    { title: "Equipment, QA & Patient Care", skills: [
      { name: "Ultrasound Equipment Operation and QA" }, { name: "Patient Positioning and Prep" }, { name: "Image Optimization" }, { name: "Report Documentation" },
    ]},
  ]},

  { slug: "medical-lab-scientist", title: "Medical Lab Scientist (MLS) Skills Checklist", shortTitle: "Medical Lab Scientist", icon: "🧬", group: "Diagnostic & Lab", categories: [
    { title: "Hematology", skills: [
      { name: "CBC/Differential" }, { name: "Manual Differential" }, { name: "Coagulation Studies (PT/INR, PTT)" }, { name: "Body Fluid Analysis" }, { name: "Flow Cytometry" },
    ]},
    { title: "Clinical Chemistry", skills: [
      { name: "Routine and Special Chemistry" }, { name: "Immunoassay" }, { name: "Blood Gas Analysis" }, { name: "Electrophoresis" }, { name: "Therapeutic Drug Monitoring" },
    ]},
    { title: "Microbiology", skills: [
      { name: "Culture Setup and Identification" }, { name: "Susceptibility Testing" }, { name: "Gram Stain" }, { name: "Mycobacteriology" }, { name: "Parasitology" },
    ]},
    { title: "Blood Bank/Immunohematology", skills: [
      { name: "ABO/Rh Typing" }, { name: "Antibody Screen and Identification" }, { name: "Crossmatch" }, { name: "Component Preparation" }, { name: "Transfusion Reaction Workup" },
    ]},
    { title: "Molecular Diagnostics & Point-of-Care", skills: [
      { name: "PCR-Based Testing" }, { name: "Point-of-Care Testing Oversight" }, { name: "Molecular Infectious Disease Panels" },
    ]},
    { title: "Quality Management & Lab Safety", skills: [
      { name: "Quality Control/Quality Assurance" }, { name: "Proficiency Testing" }, { name: "CLIA/CAP Compliance" }, { name: "Specimen Handling and Chain of Custody" },
    ]},
  ]},
];
