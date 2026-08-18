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
    { title: "General Postoperative Care", skills: [
      { name: "Management of patient in the immediate post-operative phase" }, { name: "Assessment and management of post-op complications" },
    ]},
    { title: "Cardiovascular Assessment & Care", skills: [
      { name: "Normal Heart Tones (i.e.:S1,S2)" }, { name: "Insertion site invasive lines" }, { name: "Blood Pressure (non-invasive)" }, { name: "S/S DVT" }, { name: "Pulses/Circulation via palpation" }, { name: "Abnormal heart tones (i.e.: murmur, gallop, friction rub)" }, { name: "Rhythm interpretation" }, { name: "12-lead EKG interpretation" }, { name: "Identification of PMI (Point Maximal Intensity)" }, { name: "EKG Changes for MI" }, { name: "Pulses/Circulation via Doppler" }, { name: "Blood and blood product administration" }, { name: "Blood transfusion reactions" }, { name: "Cardiac Arrest" }, { name: "CHF" }, { name: "Pericardial Effusion" }, { name: "Carotid Endarterectomy" }, { name: "Pericarditis" }, { name: "MI" }, { name: "Myocardial contusion" }, { name: "Cardiac Tamponade" },
    ]},
    { title: "Cardiovascular Procedures & Hemodynamic Monitoring", skills: [
      { name: "Proper Cardiac Monitor lead placement" }, { name: "Obtain lab specimens from A-line" }, { name: "PCWP Measurement" }, { name: "Obtain lab specimens from Central Line" }, { name: "Removal of femoral sheath" }, { name: "Perform Venipuncture" }, { name: "Obtain Cardiac Output" }, { name: "Obtain CVP Measurement" }, { name: "Perform 12-lead EKG" }, { name: "Removal of radial arterial line" }, { name: "Obtain MAP" }, { name: "Management of Arterial Line" }, { name: "Zero and calibration of transducers" }, { name: "Management of PA/Swan-Ganz" }, { name: "Assess adequate perfusion with invasive lines" }, { name: "Management of CVP Line" }, { name: "Chest Tube Removal" }, { name: "Arterial line insertion" }, { name: "Thoracentesis" }, { name: "Cardioversion" }, { name: "Central Line insertion" }, { name: "PA/Swan-Ganz insertion" }, { name: "Transesophageal echocardiogram" }, { name: "Set-Up for Cardioversion" }, { name: "Emergency Tracheostomy" }, { name: "Pericardiocentesis" }, { name: "Chest Tube insertion" }, { name: "CAVH-D" }, { name: "SVR" }, { name: "PVR" },
    ]},
    { title: "Pacemaker Management", skills: [
      { name: "Transvenous" }, { name: "Transcutaneous" }, { name: "PPM" }, { name: "Manipulation of TPM settings" }, { name: "Troubleshoot TPM settings" }, { name: "Recognition of failure to sense, capture" }, { name: "CVP waveform" }, { name: "PA/Swan-Ganz waveform" }, { name: "SVO2 Data" }, { name: "PCWP waveform" }, { name: "Arterial waveform" },
    ]},
    { title: "Respiratory Care", skills: [
      { name: "Application of BiPAP" }, { name: "Application of Oximetry" }, { name: "Manage patient on mechanical ventilation" }, { name: "Assess and confirm proper Vent settings" }, { name: "Application of CPAP" }, { name: "Identify adventitious lung sounds" }, { name: "Interpretation of Oximetry Values" }, { name: "Auscultate for confirmation of ET Tube placement" }, { name: "Maintain pulmonary stability post-extubation" }, { name: "Auscultate breath sounds" }, { name: "Assist with post-extubation care" }, { name: "Implement Ventilator Acquired Pneumonia protocols" }, { name: "Perform NT(Nasotracheal) suctioning" }, { name: "Collection of Sputum Specimen via ET(closed system)" }, { name: "Emergency Intubation" }, { name: "Perform suctioning of Tracheostomy" }, { name: "Collection of Sputum via NT Suction" }, { name: "Assist with extubation of patient" }, { name: "Perform ET Tube suctioning" }, { name: "Near Drowning" }, { name: "Acute Pneumonia" }, { name: "COPD" }, { name: "Pulmonary Embolism" }, { name: "ARDS" }, { name: "Tuberculosis" }, { name: "Cor Pulmonale" }, { name: "Status Asthmaticus" }, { name: "Pulmonary Edema" }, { name: "Pulmonary Hypertension" }, { name: "Chest Trauma" }, { name: "Fresh Tracheostomy" }, { name: "Thoracotomy" }, { name: "Identify presence of air leak" }, { name: "Monitor & record chest tube output" }, { name: "Identify and troubleshoot clotted chest tube" }, { name: "Perform Chest Tube Set-up" }, { name: "Identify and troubleshoot patient bleeding from chest" },
    ]},
    { title: "Gastrointestinal Care", skills: [
      { name: "Bowel Sounds" }, { name: "Nutritional status" }, { name: "Proper N/G Tube placement" }, { name: "Penetrating trauma" }, { name: "GI Surgery" }, { name: "Ileostomy" }, { name: "Colostomy" }, { name: "Liver Transplant" }, { name: "Esophageal Bleed" }, { name: "Hemicolectomy" }, { name: "Blunt Abdominal Trauma" }, { name: "Inflammatory Bowel Disease" }, { name: "Bowel Obstruction" }, { name: "Pancreatitis" }, { name: "Small bowel resection" }, { name: "GI Bleed" }, { name: "Liver Failure" }, { name: "Hepatitis" }, { name: "Paralytic Ileus" }, { name: "Insertion and maintenance of N/G Tube" }, { name: "Removal of N/G Tube" }, { name: "Gravity feeding" }, { name: "TPN and lipids administration" }, { name: "Balloon tamponade (Sengstaken Blakemore)" }, { name: "Insertion and maintenance of Rectal Tube" }, { name: "Continuous Suction" }, { name: "PPN (peripheral parenteral nutrition)" }, { name: "Iced saline lavage" }, { name: "Administration of tube feeding" }, { name: "Flexible feeding tube (Dobhoff)" }, { name: "Utilization of feeding pump" },
    ]},
    { title: "Endocrine Care", skills: [
      { name: "Insulin Shock" }, { name: "Addison's Disease" }, { name: "Diabetes Insipidus" }, { name: "Diabetes mellitus" }, { name: "Hyperthyroidism" }, { name: "Thyroidectomy" }, { name: "Diabetic ketoacidosis" }, { name: "Cushing's Syndrome" }, { name: "Hypothyroidism" }, { name: "Blood glucose monitoring devices" }, { name: "Use of Insulin Pen" }, { name: "Use of Lancet" }, { name: "Fingerstick Blood Glucose" }, { name: "Implementation of Sliding Scale" },
    ]},
    { title: "Neurological Care", skills: [
      { name: "Reflex/Motor Deficits" }, { name: "Cranial Nerves" }, { name: "Glasgow Coma Scale" }, { name: "Analyze ICP waveforms" }, { name: "Visual/Communication Deficits" }, { name: "Troubleshoot ICP Monitoring" }, { name: "Pathologic Reflexes" }, { name: "Multiple Sclerosis" }, { name: "Basilar Skull Fracture" }, { name: "Ventriculostomy" }, { name: "TIA" }, { name: "Seizure Disorder" }, { name: "Neurogenic Shock" }, { name: "Encephalopathy" }, { name: "Meningitis" }, { name: "Externalized VP shunts" }, { name: "Post Craniotomy" }, { name: "Spinal cord injury" }, { name: "DT's" }, { name: "Metastatic tumor/intracranial tumor resection" }, { name: "Closed Head Injury" }, { name: "Increased ICP" }, { name: "CVA" }, { name: "Coma" }, { name: "Laminectomy" }, { name: "Aneurysm Precautions" }, { name: "Encephalitis" }, { name: "Seizure precautions" }, { name: "Spinal precautions" }, { name: "Rotating bed" }, { name: "Use of hyper/hypothermia blanket" },
    ]},
    { title: "Renal Care", skills: [
      { name: "Nephrectomy" }, { name: "TURP" }, { name: "CRRT" }, { name: "Renal Transplant" }, { name: "Acute Renal Failure" }, { name: "Urinary diversion (i.e.: ileal, conduit nephrostomy)" }, { name: "CAVH dialysis" }, { name: "Renal Rejection Syndrome" }, { name: "Peritoneal dialysis" }, { name: "Urinary tract infection" }, { name: "Hemodialysis" }, { name: "Bladder Irrigation" }, { name: "CRRT" }, { name: "CAVH dialysis" }, { name: "Insertion of Female Foley Catheter" }, { name: "Hemodialysis" }, { name: "A-V Fistula/Shunt" }, { name: "Fluid Status" },
    ]},
    { title: "Multisystem & Pain Management", skills: [
      { name: "AIDS" }, { name: "Alcohol Overdose" }, { name: "Splenectomy" }, { name: "Gunshot Wounds" }, { name: "Septic Shock" }, { name: "Drug Overdose" }, { name: "Organ/tissue donation" }, { name: "Hypovolemic Shock" }, { name: "Multi-system organ failure" }, { name: "Cancer" }, { name: "Anaphylactic shock" }, { name: "Implementation of Core Measures" }, { name: "Exploratory laparotomy" }, { name: "Disseminated intravascular coagulation (DIC)" }, { name: "Cardiogenic Shock" }, { name: "Pain Level" }, { name: "Therapeutic Response" }, { name: "Groshong" }, { name: "IV conscious sedation" }, { name: "Quinton" }, { name: "Peripheral line/dressing" }, { name: "Patient controlled analgesia" }, { name: "Hickman" }, { name: "Portacath" }, { name: "Epidural anesthesia/analgesia" }, { name: "PICC Line" }, { name: "Broviac Catheter" },
    ]},
    { title: "Integumentary Care", skills: [
      { name: "Surgical Wound Healing" }, { name: "Skin intact" }, { name: "Stasis Ulcers" }, { name: "Sterile dressing changes" }, { name: "Wound care/irrigations" }, { name: "Air fluidized, low airloss beds" }, { name: "Surgical Wounds w/drains" }, { name: "Burns" }, { name: "Pressure Sores" }, { name: "Traumatic Wounds" }, { name: "Staged Decubitus Ulcers" },
    ]},
    { title: "Labs & Pharmacology", skills: [
      { name: "Coagulation Studies" }, { name: "Blood glucose" }, { name: "ABG's" }, { name: "Electrolytes" }, { name: "Thyroid Panel" }, { name: "Cardiac Enzymes" }, { name: "BUN/Creatinine" }, { name: "Titrate vasopressors to effect/parameters" }, { name: "Assess for therapeutic response to titration" }, { name: "Management of Epidural Administration" }, { name: "Perform dosage drip calculations" }, { name: "Lasix (Furosemide)" }, { name: "Ventolin (Albuterol)" }, { name: "Decadron (Dexamethasone)" }, { name: "Phenobarbital" }, { name: "Diltiazem (Cardizem)" }, { name: "Heparin Drip" }, { name: "Valium (Diazepam)" }, { name: "Barbiturate induced coma" }, { name: "Sodium Bicarbonate" }, { name: "Neosynephrine" }, { name: "Dobutamine (Dobutrex)" }, { name: "Bretylium (Bretylol)" }, { name: "Nipride (Nitroprusside)" }, { name: "Kayexelate" }, { name: "Succinylcholine" }, { name: "Digoxin (Lanoxin)" }, { name: "Aminophylline (Theophylline)" }, { name: "AquaMephyton (Vitamin K)" }, { name: "Lidocaine" }, { name: "Pitressin (Vasopressin)" }, { name: "Verapamil (Calan, Isoptin, Verelan)" }, { name: "Amiodarone (Cordarone)" }, { name: "Apresoline" }, { name: "Inderal (Propranolol)" }, { name: "Metoprolol (Lopressor)" }, { name: "Epinephrine (Adrenalin)" }, { name: "Corticosteroids" }, { name: "Alupent (Metaproterenol)" }, { name: "Nitroglycerin (Tridil)" }, { name: "Lactulose (Cephulac)" }, { name: "Esmolol (Brevibloc)" }, { name: "Dilantin (Phenytoin)" }, { name: "Amicar" }, { name: "Atropine" }, { name: "Procainamide (Pronestyl)" }, { name: "Levophed" }, { name: "Dopamine (Intropin)" }, { name: "Vecuronium" }, { name: "Propofol(Diprivan)" }, { name: "Inocor (Amrinone)" },
    ]},
    { title: "Patient Education & Advocacy", skills: [
      { name: "Use of incentive spirometer" }, { name: "Management of disease process" }, { name: "Turn, cough, and deep breathing technique" }, { name: "Importance of increasing mobility post-op when applicable" }, { name: "Splinting technique post-op" }, { name: "Provide care for end-of-life decisions that families face in ICU such as withdrawal of life support" }, { name: "Provide for the integration of comfort care and death with dignity" }, { name: "Demonstrate effective coping skills in caring for the critical care patient" }, { name: "Adhere to legal procedures regarding notification of organ donation provider" }, { name: "Demonstrate Spiritual and Cultural Considerations for the Critical Care patient" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
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
    { title: "Surgical Attire & Hand Hygiene", skills: [
      { name: "Apply Surgical Mask per Protocol" }, { name: "Apply Shoe Covers Before Entering Restricted Areas" }, { name: "Apply N95 Respirator When Required by Case or Policy" }, { name: "Wear Approved OR Footwear That Meets Safety Standards" }, { name: "Don Head Cover per Facility Protocol" }, { name: "Apply Facial Hair Cover When Applicable" }, { name: "Wear Facility-Approved Surgical Scrubs" }, { name: "Perform Hand Hygiene as Indicated Throughout Perioperative Period" }, { name: "Inspect Hands and Forearms for Skin Integrity Before Scrubbing" }, { name: "Remove All Hand and Wrist Jewelry Prior to Surgical Hand Hygiene" }, { name: "Perform Surgical Hand Rub When Appropriate" }, { name: "Maintain Short, Clean, Natural Fingernails Without Artificial Enhancements" }, { name: "Follow Scrub Solution Instructions for Application and Duration" }, { name: "Perform Surgical Hand Scrub Using Approved Technique" },
    ]},
    { title: "Sterile Attire & Gloving", skills: [
      { name: "Perform Closed-Gloving Technique Without Contamination" }, { name: "Perform Open-Gloving Technique for Appropriate Procedures" }, { name: "Don Sterile Gown and Gloves Using Appropriate Technique" }, { name: "Assist with Sterile Gowning and Gloving of Other Team Members" }, { name: "Apply Double-Gloving Technique When Indicated" },
    ]},
    { title: "Sterile Field Setup & Maintenance", skills: [
      { name: "Review and Verify Surgeon's Preference Card or Pick List for Completeness" }, { name: "Demonstrate Adherence to Sterile Technique During All Tasks" }, { name: "Inspect Packaging and Indicators for Integrity Before Opening" }, { name: "Support Sterile Conversion from Endovascular to Open Procedure When Necessary" }, { name: "Maintain Sterility of Back Table(s) and Mayo Stand(s) Throughout the Case" }, { name: "Assist with Implementation of Bowel Isolation Technique per Procedure" }, { name: "Check That Surgical Equipment Is Functioning Prior to Case Start" }, { name: "Assist with Safe Breakdown and Disposal of Sterile Field Items Post-Procedure" }, { name: "Establish and Maintain Sterile Field(s) According to Aseptic Principles" }, { name: "Assist with Sterile Draping of the Surgical Site" }, { name: "Remove PPE Safely Following Proper Doffing Sequence" }, { name: "Sort and Organize Case Carts and Surgical Supplies Before Setup" }, { name: "Identify and Correct Contaminations Immediately According to Policy" }, { name: "Position OR Equipment and Furniture to Support Procedure Requirements" }, { name: "Set Up Sterile Back Table(s) and Mayo Stand(s) with Required Instruments" }, { name: "Open Sterile Supplies and Instruments Without Contamination" },
    ]},
    { title: "Surgical Specialties", skills: [
      { name: "Endocrine (thyroid, parathyroid, adrenal glands)" }, { name: "Breast Surgery" }, { name: "Trauma" }, { name: "Laparoscopy" }, { name: "Oncology" }, { name: "Colon and Rectal" }, { name: "Otolaryngology (ENT)" }, { name: "Thoracic" }, { name: "Oral" }, { name: "Neurosurgery of the Brain and Peripheral Nerves" }, { name: "Plastic and Maxillofacial" }, { name: "Thoracoabdominal/Esophageal Surgery" }, { name: "Obstetrics" }, { name: "Hepatobiliary/Pancreatic Surgery" }, { name: "General Surgery Instrumentation" }, { name: "Spinal Reconstruction" }, { name: "Burn Surgery" }, { name: "Urology" }, { name: "Maternal-Fetal Surgery" }, { name: "Open Heart" }, { name: "Pediatric" }, { name: "Sports Medicine" }, { name: "Cystoscopy" }, { name: "Vascular" }, { name: "Organ Procurement" }, { name: "Gynecology" }, { name: "Neonatal" }, { name: "Reproductive Surgery" }, { name: "Endoscopy" }, { name: "Transplant" }, { name: "Joint Replacement" }, { name: "Robotic Surgical System Assist (da Vinci)" }, { name: "Foot and Ankle" }, { name: "Cardiac Cath Lab" }, { name: "Ophthalmic" }, { name: "Dental/Maxillofacial" }, { name: "Peripheral Vascular Access/Interventional Radiology" }, { name: "Bariatric" }, { name: "Oculoplastic" }, { name: "Orthopedic Surgery Instrumentation" }, { name: "Hand and Wrist" }, { name: "Laparoscopic Instrumentation" },
    ]},
    { title: "Core Perioperative Protocols", skills: [
      { name: "Respect and Consider Cultural Preferences During Patient Care" }, { name: "Assist with Application of Monitoring Devices" }, { name: "Anticipate Needs of the Surgical Team" }, { name: "Participate in Universal Protocol" }, { name: "Demonstrate Understanding of Human Anatomy and Physiology" }, { name: "Report Safety Issues or Concerns Promptly" }, { name: "Maintain Effective Intraoperative Communication" }, { name: "Apply Surgical and Instrument Terminology in Daily Practice" },
    ]},
    { title: "Intraoperative Patient Care", skills: [
      { name: "Assist in Maintaining Patient Normothermia" }, { name: "Assist with Managing Drains and Catheters" }, { name: "Assist with Patient Transportation When Applicable" }, { name: "Verify Surgical and Anesthesia Consents for Completeness" }, { name: "Participate in Surgical Time-Out" }, { name: "Assist with Preparing and Managing Surgical Prosthesis" }, { name: "Use Assistive Transfer Devices When Repositioning Patient" }, { name: "Assist with Surgical Site Skin Preparation" }, { name: "Participate in End-of-Procedure Debrief" }, { name: "Confirm Surgical Site Marking with Surgical Team" }, { name: "Apply Sterile Dressings to Surgical Site" }, { name: "Confirm Patient Identification Using Two Identifiers" },
    ]},
    { title: "Anesthesia Assist", skills: [
      { name: "Assist with Induction and Intubation Setup" }, { name: "Assist During Intraoperative Anesthesia Emergencies" }, { name: "Support Awake Intubation Process as Directed" }, { name: "Support Extubation and Emergence Phases per Team Direction" },
    ]},
    { title: "Surgical Counts", skills: [
      { name: "Perform Count Before Skin Closure" }, { name: "Follow Policy to Resolve Incorrect Counts Immediately" }, { name: "Perform Count Before Incision" }, { name: "Perform Count Before Staff Relief or Shift Change" }, { name: "Account for Each Countable Item Added During Procedure" }, { name: "Perform Count Before Closure of a Cavity" },
    ]},
    { title: "Specimen Handling", skills: [
      { name: "Support Collection for Research Studies" }, { name: "Support Handling of Fresh Tissue" }, { name: "Maintain Chain of Custody for Forensic Evidence" }, { name: "Label Specimens Accurately and Legibly" }, { name: "Handle Foreign Bodies per Policy" }, { name: "Assist with Tissue Fixation Using Appropriate Medium (formalin)" }, { name: "Assist with Collection of Aerobic and Anaerobic Cultures" }, { name: "Recognize Exempt Specimens and Label Accordingly" }, { name: "Protect Specimens from Contamination or Loss" }, { name: "Transfer Specimens Promptly to the Appropriate Location" }, { name: "Support Frozen Section Specimen Handling and Communication" }, { name: "Handle Infectious Tissue per Biohazard Standards" }, { name: "Assist with Biopsies and Proper Containment" }, { name: "Support Shared Specimen Coordination as Directed" }, { name: "Support Handling of Radioactive Materials Following Safety Protocols" },
    ]},
    { title: "Sharps Safety", skills: [
      { name: "Dispose of Sharps Safely into Designated Containers" }, { name: "Transport Reusable Sharps in Puncture-Resistant Containers" }, { name: "Apply Exposure Control Plan Procedures" }, { name: "Use Neutral Zone for Passing Sharps When Appropriate" }, { name: "Use Standard Precautions for All Cases" }, { name: "Use Sharps Safety Devices and Techniques as Available" }, { name: "Follow OSHA Bloodborne Pathogen Standards" }, { name: "Seek Immediate Evaluation for Sharps-Sustained Injuries" },
    ]},
    { title: "Patient Positioning", skills: [
      { name: "Position Pregnant Patients with Appropriate Modifications" }, { name: "Identify and Address Needs of Special Patient Populations" }, { name: "Assess Patient's Position to Ensure Alignment and Access" }, { name: "Implement Measures to Prevent Pressure Injuries" }, { name: "Apply Ergonomic Principles When Positioning Patients and Equipment" }, { name: "Prepare OR Table and Positioning Equipment Based on Case Needs" }, { name: "Apply Safety Straps and Positioning Devices Correctly" }, { name: "Position Patients with Obesity Using Appropriate Supports" },
    ]},
    { title: "Surgical Equipment & Safety", skills: [
      { name: "Assist with Setup and Use of Harmonic Scalpel" }, { name: "Assist with Setup and Troubleshooting of Suction and Irrigation Devices" }, { name: "Assist with Setup and Operation of Surgical Microscopes" }, { name: "Set Up and Check Electrosurgical Unit (ESU) Settings with Team" }, { name: "Apply Sequential Compression Devices" }, { name: "Protect Patient from Unnecessary Radiation Exposure" }, { name: "Support Fire Prevention Measures in the OR" }, { name: "Assist with Irrigation and Use of Fluid Warmers" }, { name: "Assist with Setup of Image-Guided Devices" }, { name: "Support Use of Pneumatic Tourniquets as Directed" }, { name: "Support Plume Evacuation and Filtration Protocols" }, { name: "Assist with Application of Antiembolic Stockings" },
    ]},
    { title: "Medical Devices & Implants", skills: [
      { name: "Report and Manage Defective Medical Devices According to Policy" }, { name: "Handle and Prepare Implants Following Manufacturer's Instructions" }, { name: "Assist with Safe Handling of Explanted Medical Devices" },
    ]},
    { title: "Robotic Surgical System Support", skills: [
      { name: "Assist with Positioning Patient and Vision Carts" }, { name: "Assist with Conversion to Open Procedure if Needed" }, { name: "Assist with Robotic System Device Setup" }, { name: "Participate in Robotic System Breakdown at End of Procedure" }, { name: "Handle and Pass Robotic Instruments Safely" }, { name: "Participate in Robotic System Setup and Troubleshooting" }, { name: "Drape the Robot Using Sterile Technique" },
    ]},
    { title: "Sterile Field Medication Handling", skills: [
      { name: "Apply the Five Rights of Medication Use in the Sterile Field" }, { name: "Calculate Medication Conversions and Dosages Correctly When Needed" }, { name: "Communicate Medication Name and Strength During Handoff to the Surgeon" }, { name: "Receive Medications onto Sterile Field Using Aseptic Technique" }, { name: "Label All Medications, Solutions, and Powders Clearly and Accurately" }, { name: "Identify and Prepare Commonly Used Surgical Medications and Irrigations" },
    ]},
    { title: "Intraoperative Emergencies", skills: [
      { name: "Perform CPR/BLS as Trained and Required" }, { name: "Support Airway Management During Difficult Intubation or Cricothyrotomy" }, { name: "Recognize and Respond to Anaphylactic Reactions" }, { name: "Support Team Response During Hemorrhage or Massive Transfusion" }, { name: "Assist with Interventions for Malignant Hyperthermia" }, { name: "Participate in Fire Response and Containment Efforts" }, { name: "Assist with AED Operation if Needed" }, { name: "Support Resuscitation During Cardiac Arrest" }, { name: "Assist in Response to Disseminated Intravascular Coagulation (DIC)" }, { name: "Assist During Local Anesthetic Systemic Toxicity (LAST) Events" }, { name: "Emergency Conversion (Lap to Open)" },
    ]},
    { title: "Professional Practice", skills: [
      { name: "Contribute to a Positive, Collaborative OR Environment" }, { name: "Follow Facility Policies and Procedures" }, { name: "Participate in Ongoing Professional Education Activities" }, { name: "Support Orientation and Mentorship of New Staff" }, { name: "Comply with Local, State, and Federal Health and Safety Regulations" },
    ]},
    { title: "Room Turnover & Equipment Cleaning", skills: [
      { name: "Apply Cleaning Procedures (damp dusting, mopping, barrier use)" }, { name: "Dispose of Biohazard Waste According to Regulations" }, { name: "Manage Waste Categories (trash, recycling, linens)" }, { name: "Follow Cleaning Requirements for Special Equipment" }, { name: "Clean Non-Critical Items and Surfaces as Directed" }, { name: "Select Appropriate Cleaning Products and Use Proper PPE" }, { name: "Assist with Decontamination of Surgical Suite" }, { name: "Participate in Room Turnover Between Cases" },
    ]},
    { title: "Instrument Preparation & Transport", skills: [
      { name: "Transport Decontaminated Items Safely to Sterile Processing" }, { name: "Perform Point-of-Use Cleaning Immediately After Use" }, { name: "Sort and Organize Instruments After Procedure" }, { name: "Label Instruments for Repair When Needed" }, { name: "Support Inventory and Instrument Tracking Processes" }, { name: "Disassemble Instruments per Manufacturer's Instructions" },
    ]},
    { title: "Sterilization & Instrument Processing", skills: [
      { name: "Remove Protective Devices (tip protectors, silicone mats) When Assembling Back Tables" }, { name: "Apply Spaulding Classification When Handling Surgical Instruments (critical, semicritical, noncritical)" }, { name: "Apply Enzymatic Products as Indicated at the End of the Procedure" }, { name: "Prepare Instruments for Transfer to Sterile Processing Using Correct Containment Methods" }, { name: "Maintain Awareness of Disinfection Practices and Follow Infection Prevention Protocols Within the OR" }, { name: "Identify Signs of Wet Packs and Report Appropriately" }, { name: "Handle Rigid Containers and Tray Filters in Accordance with Manufacturer Instructions" }, { name: "Collaborate with Sterile Processing Department to Support Proper Flow and Instrument Turnaround" }, { name: "Monitor Biological and Chemical Indicators and Notify Sterile Processing Department if Concerns Arise" }, { name: "Initiate Instrument Care by Performing Point-of-Use Cleaning During Procedures" }, { name: "Understand Basic Sterilization Methods (steam, IUSS) Used in Your Facility" }, { name: "Verify Packaging Integrity (autoclave tape, seals) Before Opening Instruments" }, { name: "Participate in Safe Handling, Transport, and Communication Related to Soiled Instruments" },
    ]},
    { title: "Intraoperative Environment Standards", skills: [
      { name: "Use Overhead and Specialty Lighting as Appropriate for the Case" }, { name: "Identify Sources of Environmental Contamination (construction, condensation)" }, { name: "Support Proper Traffic Flow Throughout Perioperative Area" }, { name: "Understand OR Ventilation and Airflow Requirements" }, { name: "Identify and Work Within Surgical Suite Zones (unrestricted, semi-restricted, restricted)" }, { name: "Monitor Temperature, Moisture, and Humidity Conditions" },
    ]},
    { title: "Safety & Emergency Resources", skills: [
      { name: "Identify Emergency Eyewash Station Locations" }, { name: "Locate Emergency Carts and Access Contents When Appropriate" }, { name: "Locate and Reference Manufacturer's Instructions for Use (IFU)" }, { name: "Locate Safety Data Sheets (SDS)" }, { name: "Identify Location and Type of Fire Extinguishers in OR" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
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
    { title: "Embryology & Congenital Heart Defects", skills: [
      { name: "Truncus arteriosus" }, { name: "Sinus venosus" }, { name: "Bulbus cordis" }, { name: "Atrioventricular sulcus" }, { name: "Aortic sac" }, { name: "Interventricular sulcus" }, { name: "Endocardial cushion" }, { name: "Ductus arteriosus" }, { name: "Umbilical vein" }, { name: "Placenta" }, { name: "Foramen ovale" }, { name: "Ligamentum arterisum" }, { name: "Ligamentum venosum" }, { name: "Fossa ovalis" }, { name: "Tetralogy of Fallot" }, { name: "Atrial septal defect: Ostium primum, ostium secundum, sinus venosus, coronary sinus, common atrium" }, { name: "Pulmonic stenosis" }, { name: "Aortic coarctation" }, { name: "Transposition of the great vessels: Levo, dextro" }, { name: "Ventricular septal defects: Inlet, trabecular or muscular, outlet, membranous or perimembranous, malalignment, eisenmenger syndrome" }, { name: "Endocardial cushion defect/atrioventricular septal defect" }, { name: "Tricuspid atresia" }, { name: "Ebstein anomaly" },
    ]},
    { title: "Cardiac Anatomy", skills: [
      { name: "Pulmonary artery" }, { name: "Heart wall layers: Endocardium, myocardium, epicardium, pericardial space/fluid, parietal layer, serous pericardium, fibrous pericardium" }, { name: "Atria: Left and right" }, { name: "Atrioventricular valves: Mitral and tricuspid" }, { name: "Normal variants: Moderator band, crista terminalis, eustachian valve, chiari network" }, { name: "Pulmonary veins: Two right, two left" }, { name: "Main coronary arteries: Left anterior descending (LAD), left main coronary, right coronary artery (RCA), left circumflex, posterior descending artery (PDA)" }, { name: "Pulmonary artery branches: Left and right" }, { name: "Ventricles: Left and right" }, { name: "Inferior vena cava" }, { name: "Superior vena cava" }, { name: "Semilunar valves: Aortic and pulmonic" }, { name: "Aorta: Ascending, arch, descending" },
    ]},
    { title: "Cardiac Physiology", skills: [
      { name: "Atrioventricular node" }, { name: "Bundle of His" }, { name: "Sinoatrial node" }, { name: "Purkinje fibers" }, { name: "ST segment" }, { name: "QRS complex" }, { name: "T wave" }, { name: "P wave" }, { name: "Isovolumic relaxation" }, { name: "Systole" }, { name: "Isovolumic contraction" }, { name: "Diastole" }, { name: "Resistance: Ventricular outflow obstructions, systemic hypertension, pulmonary hypertension" }, { name: "Volume: Regurgitation, ventricular septal defects, atrial septal defects" }, { name: "Epicardium, myocardium, endocardium" }, { name: "Diastolic filling process" },
    ]},
    { title: "Valvular Disease & Cardiomyopathies", skills: [
      { name: "Tricuspid regurgitation" }, { name: "Pulmonic stenosis" }, { name: "Aortic regurgitation" }, { name: "Mitral stenosis" }, { name: "Tricuspid stenosis" }, { name: "Mitral valve prolapse" }, { name: "Pulmonic regurgitation" }, { name: "Aortic stenosis" }, { name: "Mitral regurgitation" }, { name: "Restrictive" }, { name: "Dilated" }, { name: "Arrythmogenic right ventricular dysplasia" }, { name: "Left ventricular non-compaction" }, { name: "Hypertrophic" },
    ]},
    { title: "Ischemic, Pericardial & Pulmonary Hypertension Disease", skills: [
      { name: "Myocardial infarction" }, { name: "Complications of MI: New onset mitral regurgitation, ventricular rupture, aneurysm, arrhythmias, emboli, pericardial effusion" }, { name: "Pericardial effusion" }, { name: "Pericarditis" }, { name: "Tricuspid regurgitation" }, { name: "Modified Bernoulli equation" }, { name: "Right atrial pressure" }, { name: "Inferior vena cava size and collapse" },
    ]},
    { title: "Cardiac Masses & Aortic Disease", skills: [
      { name: "Secondary tumors (metastatic): Renal cancer, lung cancer, breast cancer, melanoma, lymphoma" }, { name: "Primary tumors: Myxoma, lipoma, papillary fibroelastoma, rhabdomyoma, fibroma, teratoma" }, { name: "Dissection" }, { name: "Ehlers-Danlos syndrome" }, { name: "Atherosclerosis" }, { name: "Marfan syndrome" }, { name: "Aneurysm" },
    ]},
    { title: "Cardiac Devices & Procedures", skills: [
      { name: "Amplatzer" }, { name: "Bioprosthetic valves" }, { name: "Pacemaker" }, { name: "Watchman" }, { name: "Mechanical valves" }, { name: "Impella" }, { name: "Bentall" }, { name: "Fontan" }, { name: "Glenn operation" }, { name: "Valve clips" }, { name: "Mustard" }, { name: "Norwood" }, { name: "Ross" }, { name: "Transcatheter aortic valve replacement (TAVR)" }, { name: "Coronary artery bypass graft (CABG)" },
    ]},
    { title: "Advanced Cardiac Testing & Echocardiography", skills: [
      { name: "Apical 3 chamber: Apical cap, apical lateral, mid inferolateral, basal inferolateral, apical septal, mid anteroseptal, basal anteroseptal" }, { name: "Parasternal long axis: Basal anteroseptal, mid anteroseptal, basal inferolateral, mid inferolateral" }, { name: "Parasternal short axis: Anterior, anterolateral, anteroseptal, inferior, inferolateral, inferoseptal" }, { name: "Apical 4 chamber: Apical cap, apical septal, mid inferoseptal, basal inferoseptal, apical lateral, mid anterolateral, basal anterolateral" }, { name: "Apical 2 chamber: Apical cap, apical inferior, mid inferior, basal inferior, apical anterior, mid anterior, basal anterior" }, { name: "Role of atropine" }, { name: "Contraindications: Acute MI, uncontrolled arrhythmias, aortic dissection, severe and symptomatic aortic stenosis, heart muscle inflammation" }, { name: "Treadmill" }, { name: "Indications: Ischemic disease, valvular disease" }, { name: "Dobutamine" }, { name: "Views: Midesophageal (5 chamber, 4 chamber, bicommissural, long axis, ascending aorta, pulmonary veins, SAX, bicaval, appendage), transgastric, aorta" }, { name: "Indications: Arrhythmias, stroke, endocarditis/bacteremia, valvular disease, masses, heart failure" }, { name: "Contraindications: Esophageal disease, varices, prior stomach surgery, uncooperative patient, acute GI bleed" }, { name: "Testing for a persistent left superior vena cava" }, { name: "PFO/ASD" }, { name: "Use of valsalva maneuver" }, { name: "Comet tail" }, { name: "Side lobes" }, { name: "Enhancement" }, { name: "Ring down" }, { name: "Reverberation" }, { name: "Mirroring" }, { name: "Refraction" }, { name: "Shadowing" }, { name: "Definity, Lumason, Optison" }, { name: "Injection rate" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "medical-lab-scientist", title: "Medical Lab Scientist (MLS) Skills Checklist", shortTitle: "Medical Lab Scientist", icon: "🧬", group: "Diagnostic & Lab", categories: [
    { title: "Blood Bank / Transfusion Medicine", skills: [
      { name: "Frozen blood products preparation" }, { name: "Antigen testing" }, { name: "IS XM" }, { name: "Rh typing" }, { name: "Antibody screen" }, { name: "Transfusion reaction investigation" }, { name: "ABO discrepancies" }, { name: "Autoadsorption" }, { name: "AHG XM" }, { name: "ABO blood typing" }, { name: "Elution" }, { name: "DAT/Coombs test" }, { name: "Electronic crossmatch" }, { name: "Blood products issuance" }, { name: "Fetal bleed screening test (FMH rapid screen)" }, { name: "Antibody identification" },
    ]},
    { title: "Hematology", skills: [
      { name: "Blood smear for malarial parasite" }, { name: "Platelet clumper samples" }, { name: "Bone marrow" }, { name: "Cytocentrifuge" }, { name: "Buffy coat smears" }, { name: "Serous body fluids cell count and differentials" }, { name: "Albumin smears" }, { name: "Synovial fluid cell count and differentials" }, { name: "CBC analysis" }, { name: "Making blood smear" }, { name: "Pathologist's review procedure" }, { name: "SP-10" }, { name: "Reading manual differentials" }, { name: "Cellavision" }, { name: "Reticulocyte testing" }, { name: "Kleihauer Betke fetal hemoglobin" }, { name: "Hematek stainer" }, { name: "ESR" }, { name: "CSF cell count and differentials" }, { name: "Sysmex XN analyzer" }, { name: "Eosinophil smear (sputum/nasal)" }, { name: "Malaria antigen test" },
    ]},
    { title: "Coagulation", skills: [
      { name: "Fibrinogen" }, { name: "Platelet function Aspirin" }, { name: "APTT" }, { name: "Platelet function Plavix" }, { name: "D-dimer" }, { name: "Platelet function analysis" }, { name: "Heparin anti-Xa" }, { name: "PT" }, { name: "Factor II and Factor V Leiden Cepheid" },
    ]},
    { title: "Urinalysis", skills: [
      { name: "Automated urine analysis" }, { name: "Clinitek" }, { name: "Occult blood" }, { name: "Manual urine analysis" }, { name: "Gastroccult" }, { name: "Refractometer" }, { name: "Ictotest" }, { name: "Iris analyzer" },
    ]},
    { title: "Clinical Chemistry & Serology", skills: [
      { name: "Electrolyte panel" }, { name: "Thyroid function panel" }, { name: "HbA1c" }, { name: "Comprehensive metabolic panel" }, { name: "Liver panel" }, { name: "Lipid panel" }, { name: "Basic metabolic panel" }, { name: "Kidney panel" }, { name: "RPR" }, { name: "Rheumatoid factor" }, { name: "HIV" }, { name: "CRP" }, { name: "Procalcitonin" }, { name: "ASO" },
    ]},
    { title: "Microbiology", skills: [
      { name: "AFB" }, { name: "Blood culture and sensitivity" }, { name: "Stool ova and parasite" }, { name: "PCR tests" }, { name: "Susceptibility testing" }, { name: "Stool culture" }, { name: "Fungal culture" }, { name: "KOH mount" }, { name: "NAAT" }, { name: "Wet mount" }, { name: "Biochemical tests" }, { name: "Gram stain" }, { name: "Bacterial culture" },
    ]},
    { title: "Central Processing & Laboratory Practices", skills: [
      { name: "Receipt of samples" }, { name: "Processing send-out samples" }, { name: "Checking samples for proper labelling and identification" }, { name: "Critical resulting with readback" }, { name: "Method validation" }, { name: "Troubleshooting QC problems" }, { name: "Instrument maintenance and calibrations" }, { name: "Delta checks" }, { name: "Reagent reconstitution and preparation" }, { name: "Running QCs" }, { name: "Checking sample integrity for contamination, hemolysis, clot, lipemia, and icterus" }, { name: "Troubleshooting instrument flags and problems" },
    ]},
    { title: "Population & Specialty Laboratory Experience", skills: [
      { name: "Pediatrics" }, { name: "Oncology" }, { name: "Heart Center" }, { name: "Labor and Delivery" }, { name: "Trauma Center" }, { name: "Immunology" }, { name: "Special Coagulation" }, { name: "Genetics" }, { name: "Histopathology and Cytopathology" }, { name: "Fertility Clinic" }, { name: "Biotechnology" }, { name: "Toxicology" }, { name: "Molecular Diagnostics" }, { name: "Transfusion Medicine" }, { name: "Special Chemistry" }, { name: "Special Hematology" }, { name: "Histocompatibility & Immunogenetics Lab (HLA)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},
];
