import { ChecklistSpec } from "../checklistData";

// Specialties added after the initial launch, based on user-requested roles
// not yet covered by the other checklist files. Kept in their own file so
// this batch is easy to review as a unit; each entry's `group` field still
// places it in the correct section of the homepage directory.
export const newAdditionsChecklists: ChecklistSpec[] = [
  { slug: "cvor-tech", title: "CVOR Technologist Skills Checklist", shortTitle: "CVOR Tech", icon: "🫀", group: "Surgical", categories: [
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
      { name: "Cancer Diagnostic Workup" }, { name: "Staging Interpretation" }, { name: "Biopsy Result Review" }, { name: "Genetic Risk Assessment/Referral" }, { name: "Tumor Board Presentation" },
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
      { name: "Inpatient Oncology/BMT Unit" }, { name: "Outpatient Infusion Clinic" }, { name: "Hospice/Palliative Care" }, { name: "Multidisciplinary Tumor Board" }, { name: "Survivorship Clinic" },
    ]},
    { title: "Comprehensive Assessment", skills: [
      { name: "Oncologic History and Physical Exam" }, { name: "Performance Status Assessment (ECOG/Karnofsky)" }, { name: "Comorbidity Risk Assessment" }, { name: "Nutritional Status Assessment" }, { name: "Genetic Risk Assessment" },
    ]},
    { title: "Treatment Planning & Coordination", skills: [
      { name: "Treatment Plan Development" }, { name: "Chemotherapy/Immunotherapy Order Management" }, { name: "Bone Marrow/Stem Cell Transplant Coordination" }, { name: "Blood Product Support Management" }, { name: "Clinical Trial Enrollment Support" },
    ]},
    { title: "Symptom Management", skills: [
      { name: "Pain and Symptom Management" }, { name: "Graft-Versus-Host Disease Management" }, { name: "Cytokine Release Syndrome Management" }, { name: "Neutropenic Sepsis Recognition and Management" }, { name: "Mucositis Management" },
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
      { name: "Joint Commission Standards Compliance" }, { name: "CMS Conditions of Participation" }, { name: "State Licensing Survey Preparation" }, { name: "Tracer Methodology" }, { name: "Mock Survey Coordination" }, { name: "Life Safety/Environment of Care Compliance" }, { name: "Survey Readiness Rounding" },
    ]},
    { title: "Safety Program Management", skills: [
      { name: "Patient Safety Event Investigation" }, { name: "Root Cause Analysis Facilitation" }, { name: "Failure Mode and Effects Analysis (FMEA)" }, { name: "Sentinel Event Reporting" }, { name: "Safety Culture Surveys" }, { name: "High-Reliability Organization Initiatives" },
    ]},
    { title: "Policy & Documentation", skills: [
      { name: "Policy and Procedure Development" }, { name: "Corrective Action Plan Development" }, { name: "Regulatory Documentation Management" }, { name: "Survey Finding Remediation Tracking" }, { name: "Document Control System Management" },
    ]},
    { title: "Education & Reporting", skills: [
      { name: "Staff Safety and Compliance Education" }, { name: "Event Reporting System Management" }, { name: "Leadership Safety Reporting/Dashboards" }, { name: "National Patient Safety Goals Education" }, { name: "Board/Committee Presentation" },
    ]},
    { title: "Quality Integration", skills: [
      { name: "Quality Improvement Project Facilitation" }, { name: "Core Measure Compliance Tracking" }, { name: "Interdepartmental Safety Committee Leadership" }, { name: "Benchmarking and Trend Analysis" },
    ]},
  ]},

  { slug: "rn-acute-rehab", title: "Registered Nurse – Acute Rehab Skills Checklist", shortTitle: "RN – Acute Rehab", icon: "🦽", group: "Specialty Care", categories: [
    { title: "Neurological Rehabilitation", skills: [
      { name: "Level of consciousness" }, { name: "Pupil size/shape/reaction" }, { name: "Sensory function" }, { name: "Berg balance score" }, { name: "Facial symmetry" }, { name: "Mini mental status exam (MMSE)" }, { name: "Swallow screen" }, { name: "Bowel/bladder function" }, { name: "Language ability" }, { name: "Speech" }, { name: "Muscle strength and coordination" }, { name: "NIH score" }, { name: "Motor function" }, { name: "Glascow coma scale (GCS)" }, { name: "Gait assessment" }, { name: "Manual/Automatic blood pressure" }, { name: "Spinal cord injury" }, { name: "Brain tumors" }, { name: "Cerebral palsy (CP)" }, { name: "Neuromuscular disease" }, { name: "Post craniotomy" }, { name: "Cerebral vascular accident (CVA)" }, { name: "Multiple sclerosis (MS)" }, { name: "Parkinson's disease" }, { name: "Autonomic dysreflexia" }, { name: "Traumatic brain injury (TBI)" }, { name: "Head trauma" }, { name: "Guillain Barre syndrome (GBS)" }, { name: "Communication disorders (e.g., dysarthria, apraxia, aphasia)" }, { name: "Amyotrophic lateral sclerosis (ALS)" }, { name: "Assist with physical therapy" }, { name: "Assist with ambulation" }, { name: "Airway management devices/suctioning" }, { name: "Communication assistive tools (e.g., white boards, voice output communication aids)" }, { name: "Bladder scan" }, { name: "Vital signs (e.g., BP, HR, O2 sat)" }, { name: "Care of patient on ventilator" },
    ]},
    { title: "Orthopedic Rehabilitation", skills: [
      { name: "Vital signs (e.g., BP, pulse, HR, O2 saturation)" }, { name: "Swelling" }, { name: "Compartment syndrome" }, { name: "Skin assessment (e.g., color, shape, size, tenderness, integrity)" }, { name: "Signs of infection (e.g., redness, swelling, odor, drainage)" }, { name: "Pain" }, { name: "Capillary refill" }, { name: "Spinal injuries" }, { name: "Hip/Knee replacements" }, { name: "Amputations" }, { name: "Fractures" }, { name: "Mobilization (active, passive)" }, { name: "Stretching" }, { name: "Prosthetic training" }, { name: "Functional movement" }, { name: "Discharge education of patients and family members" }, { name: "Wound care" }, { name: "Gait training" }, { name: "Pain management (pharmacological, nonpharmacological)" }, { name: "PCA pump" }, { name: "Orthopedic braces" }, { name: "Recasting" }, { name: "External fixation devices" }, { name: "Device to detect compartment syndrome (e.g., Stryker device)" }, { name: "Mobilization devices (e.g., walkers, canes, crutches, shower chair, grab bar)" }, { name: "Portable lift device" }, { name: "Bracing/Joint mobilization" }, { name: "Tens unit" },
    ]},
    { title: "Cardiology", skills: [
      { name: "Abnormal heart tones (e.g., murmur, friction rub)" }, { name: "Pulses via palpation or doppler" }, { name: "Jugular vein distention (JVD)" }, { name: "Edema" }, { name: "Non-invasive blood pressure (auto, manual)" }, { name: "EKG/EKG Changes" }, { name: "Interpretation of normal rhythms and dysrhythmias" }, { name: "Signs of poor circulation (e.g., cyanosis, clubbing)" }, { name: "Normal heart tones (e.g., S1, S2)" }, { name: "Invasive blood pressure" }, { name: "Venous thromboembolic events" }, { name: "Heart failure" }, { name: "Heart valve repair or replacement" }, { name: "Myocardial infarction (MI)" }, { name: "Pericardial effusion" }, { name: "Coronary artery disease (CAD)" }, { name: "Coronary artery bypass grafting (CABG)" }, { name: "Cardiac arrythmias" }, { name: "Lymphedema" }, { name: "Myocarditis" }, { name: "Percutaneous coronary intervention (e.g., stent placement)" }, { name: "Peripheral artery disease (PAD)" }, { name: "Pacemaker/Automated implantable cardioverter defibrillator (AICD)" }, { name: "EKG interpretation" }, { name: "Arterial line" }, { name: "Cardiopulmonary resuscitation (CPR)" }, { name: "Rhythm interpretation" }, { name: "Temporary pacemaker" }, { name: "Venous thromboembolism prophylaxis (VTE)" }, { name: "Ventricular assistive device (VAD)" }, { name: "Pericardiocentesis" }, { name: "Cardiac pacing" },
    ]},
    { title: "Pulmonary Care", skills: [
      { name: "Presence of orthopnea" }, { name: "Auscultation of lung sounds" }, { name: "Swelling or edema" }, { name: "Breathing assessment" }, { name: "Dyspnea with exertion (types of exertion, duration)" }, { name: "6 min walk test" }, { name: "Level of consciousness (LOC)" }, { name: "Vital Signs (e.g., HR, BP, SPO2, RR)" }, { name: "Pulmonary edema" }, { name: "Chest drainage systems (Chest tube, pleural catheter)" }, { name: "Pneumonia" }, { name: "Ventilator and associated equipment (e.g., endotracheal tube, bag valve mask)" }, { name: "Chest physiotherapy" }, { name: "Pulmonary fibrosis" }, { name: "Progressive movement" }, { name: "Inhaler, spacer, peak flow meter, nebulization" }, { name: "Pulmonary embolism (PE)" }, { name: "Suction devices" }, { name: "Assist with education regarding ventilator management" }, { name: "Pulse oximetry" }, { name: "Tracheotomy care" }, { name: "Oxygen therapy (e.g., oxygen devices, portable O2)" }, { name: "Covid-19" }, { name: "Stoma care" }, { name: "Cystic fibrosis" }, { name: "Pulmonary toileting" }, { name: "Incentive spirometer" }, { name: "End tidal capnography" }, { name: "COPD" },
    ]},
    { title: "Gastrointestinal & Genitourinary Care", skills: [
      { name: "Fluid and electrolyte imbalances" }, { name: "Abdominal assessment (e.g., normal bowel sounds, distension, tenderness)" }, { name: "Pain" }, { name: "Number and consistency of bowel movements" }, { name: "Urinary tract infections (UTI)" }, { name: "Vomiting" }, { name: "Bowel obstruction" }, { name: "Gall stones" }, { name: "Fecal impaction" }, { name: "Urinary retention" }, { name: "Irritable bowel syndrome (IBS)" }, { name: "Gastroesophageal reflux disease (GERD)" }, { name: "Bowel/Bladder incontinence" }, { name: "Diarrhea" }, { name: "Kidney stones" }, { name: "Clostridioides difficile colitis" }, { name: "Constipation" }, { name: "Nephrostomy tubes" }, { name: "Intermittent catheterization" }, { name: "Fecal disimpaction" }, { name: "Ostomy" }, { name: "Bowel toileting program" }, { name: "Stoma care" }, { name: "Indwelling urinary catheterization" }, { name: "Fecal management system (FMS)" }, { name: "External urinary catheters" }, { name: "Toileting trial" }, { name: "Suprapubic catheter" },
    ]},
    { title: "Integumentary Care", skills: [
      { name: "Temperature, moisture, texture" }, { name: "Petechiae" }, { name: "Skin breakdown" }, { name: "Pressure injury" }, { name: "Capillary refill" }, { name: "Color appropriate for age, race, ethnicity" }, { name: "Jaundice" }, { name: "Skin turgor" }, { name: "Signs of cyanosis" }, { name: "Burns" }, { name: "Dermatitis" }, { name: "Cancer" }, { name: "Fractures" }, { name: "Open/Closed surgical wounds" }, { name: "Fungal Infections" }, { name: "Necrotizing fasciitis" }, { name: "Pressure injury prevention and management" }, { name: "Assists with wound care" }, { name: "Compression stockings" }, { name: "Absorbent foam dressing" }, { name: "Wound vac" }, { name: "Assists with dressing changes (e.g., wet to dry, gauze, non-adherent)" }, { name: "Ulna boots" }, { name: "Sequential compression devices" }, { name: "Heel protectors" }, { name: "Hospital bed types and pressure relief surfaces" }, { name: "Assists with management of skin grafts" },
    ]},
    { title: "Nutrition", skills: [
      { name: "Pattern of bowel movements" }, { name: "Swallow screen" }, { name: "Enteral Tube (e.g., NG, OG, PEG)" }, { name: "Routine lab work" }, { name: "Height/Weight/BMI" }, { name: "Evaluation of dentures/oral hygiene" }, { name: "Urine output" }, { name: "Food/Medication interactions" }, { name: "Allergies" }, { name: "Anorexia" }, { name: "Surgeries" }, { name: "Falls" }, { name: "Altered mental status (e.g., delirium, dementia)" }, { name: "Eating disorders" }, { name: "Pneumonia" }, { name: "Malnutrition" }, { name: "Obesity" }, { name: "Assists with the collection and interpretation of lab work" }, { name: "Assists dietary with patient specific requirements" }, { name: "Enteral feeding pump" }, { name: "Assists patient with meals" }, { name: "Weigh scales" }, { name: "Dining aids (e.g., compartmentalized plates, high sided dishes)" }, { name: "Assists patient with dental care" }, { name: "Adaptive eating utensils" },
    ]},
    { title: "Coping Skills & Adapting to Disability", skills: [
      { name: "Stages of grief" }, { name: "Maladaptive coping strategies" }, { name: "Family involvement" }, { name: "Use of defense mechanisms" }, { name: "Signs of abuse/neglect" }, { name: "Nonverbal cues and environmental stressors" }, { name: "Reaction to diagnosis" }, { name: "Frequency/Willingness to use adaptive devices" }, { name: "Self management" }, { name: "Evaluation of living environment" }, { name: "Support systems and available resources" }, { name: "Falls" }, { name: "Cancer" }, { name: "Transplants" }, { name: "Stroke/CVA" }, { name: "Post Op care" }, { name: "Amputations" }, { name: "Burns" }, { name: "Trauma" }, { name: "Hip/Knee/joint replacements" }, { name: "End of life/palliative care" }, { name: "Implementation of coping strategies" }, { name: "Use of prosthetics" }, { name: "Identifying effective coping strategies" }, { name: "Identifying risk of violence/abuse" }, { name: "Returning patient to prior level of functioning" }, { name: "Identifying stressors" }, { name: "Use of assistive devices" },
    ]},
    { title: "Patient & Family Education", skills: [
      { name: "Learning environment" }, { name: "Current patient/caregiver understanding" }, { name: "Limitations/strengths to education (e.g., blind, deaf, cognitive impairment)" }, { name: "Health literacy" }, { name: "Preferred learning style (e.g., reading, listening, interactive)" }, { name: "Community resources" }, { name: "Barriers to education" }, { name: "Receptiveness/motivation to education" }, { name: "Family involvement" }, { name: "Neurological conditions" }, { name: "Respiratory illnesses (e.g., Covid-19, pulmonary fibrosis, pneumonia)" }, { name: "CVA/Stroke" }, { name: "Transplants" }, { name: "Cognitive changes" }, { name: "Integumentary conditions" }, { name: "Amputations" }, { name: "Orthopedic injuries" }, { name: "Surgeries" }, { name: "Cardiac conditions" }, { name: "Changes in medication" }, { name: "Teach back methodology" }, { name: "Providing information about community resources" }, { name: "Patient and family education" }, { name: "Medication information" }, { name: "Assists with simplifying information" }, { name: "Reading materials" }, { name: "Identify patient and family misconceptions" }, { name: "Follow up appointments" },
    ]},
    { title: "Care Transitions", skills: [
      { name: "Medication reconciliation" }, { name: "Communication" }, { name: "Identify patient with complex transitions" }, { name: "Family support" }, { name: "Care management plan" }, { name: "Follow up appointments" }, { name: "Comprehensive transition assessment" }, { name: "Support system of patients" }, { name: "Acute/skilled rehab patients" }, { name: "Assisted nursing facilities" }, { name: "Skilled nursing facilities" }, { name: "Caregiver support" }, { name: "Code status" }, { name: "Transportation" }, { name: "Support groups" }, { name: "Establishment of placement" }, { name: "Comfort care" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
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
      { name: "Patient Assessment and History" }, { name: "Anticoagulation Review" }, { name: "Consent Verification" }, { name: "IV Access Placement" }, { name: "NPO Status Verification" }, { name: "Pre-Procedure Risk Assessment" },
    ]},
    { title: "Procedural Support", skills: [
      { name: "Conscious Sedation Monitoring" }, { name: "Cardiac Monitoring During Ablation" }, { name: "Circulating During EP Study" }, { name: "Defibrillator/Pacemaker Programming Assist" }, { name: "3D Mapping System Assist" }, { name: "Sterile Field Assist" },
    ]},
    { title: "Device Procedures", skills: [
      { name: "Pacemaker Implant Support" }, { name: "ICD Implant Support" }, { name: "Ablation Procedure Support (RF/Cryo)" }, { name: "Lead Extraction Support" }, { name: "Loop Recorder Implant Support" }, { name: "Left Atrial Appendage Closure Support" },
    ]},
    { title: "Post-Procedure Care", skills: [
      { name: "Access Site Monitoring" }, { name: "Post-Ablation Monitoring" }, { name: "Device Interrogation Assist" }, { name: "Discharge Teaching" }, { name: "Vascular Closure Device Management" },
    ]},
    { title: "Emergency Response", skills: [
      { name: "Cardiac Tamponade Recognition" }, { name: "Arrhythmia Emergency Management" }, { name: "Code Response in EP Lab" }, { name: "Emergent Pericardiocentesis Assist" },
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
      { name: "Nephrectomy" }, { name: "TURP" }, { name: "CRRT" }, { name: "Renal Transplant" }, { name: "Acute Renal Failure" }, { name: "Urinary diversion (i.e.: ileal, conduit nephrostomy)" }, { name: "CAVH dialysis" }, { name: "Renal Rejection Syndrome" }, { name: "Peritoneal dialysis" }, { name: "Urinary tract infection" }, { name: "Hemodialysis" }, { name: "Bladder Irrigation" }, { name: "Insertion of Female Foley Catheter" }, { name: "A-V Fistula/Shunt" }, { name: "Fluid Status" },
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
      { name: "Post-ICU Transfer Assessment" }, { name: "Weaning from Critical Care Support" }, { name: "Multi-System Monitoring" }, { name: "Readmission Risk Recognition" }, { name: "Early Mobility Protocols" },
    ]},
    { title: "Cardiac & Hemodynamic Monitoring", skills: [
      { name: "Continuous Telemetry Monitoring" }, { name: "Dysrhythmia Recognition" }, { name: "Low-Dose Vasoactive Drip Management" }, { name: "12-Lead EKG Interpretation" }, { name: "Non-Invasive Blood Pressure Monitoring" },
    ]},
    { title: "Respiratory Support", skills: [
      { name: "High-Flow Nasal Cannula" }, { name: "Non-Invasive Ventilation (BiPAP/CPAP)" }, { name: "Tracheostomy Care" }, { name: "Chest Tube Management" }, { name: "Pulse Oximetry/Capnography Monitoring" },
    ]},
    { title: "Care of Patient With", skills: [
      { name: "Sepsis (Recovering)" }, { name: "Acute Kidney Injury" }, { name: "Post-Surgical Complications" }, { name: "Diabetic Ketoacidosis (Resolving)" }, { name: "Post-Stroke Monitoring" }, { name: "GI Bleed Monitoring" },
    ]},
    { title: "Patient Safety & Escalation", skills: [
      { name: "Early Warning Score Recognition" }, { name: "Rapid Response Activation" }, { name: "Fall Prevention Protocols" }, { name: "Delirium Screening" }, { name: "Pressure Injury Prevention" },
    ]},
  ]},

  { slug: "rn-or-circulator", title: "Registered Nurse – OR Circulator Skills Checklist", shortTitle: "RN – OR Circulator", icon: "🔄", group: "Surgical", categories: [
    { title: "Pre-Operative Preparation", skills: [
      { name: "Patient Assessment and Chart Review" }, { name: "Consent Verification" }, { name: "Site Marking Verification" }, { name: "Allergy and Medication Reconciliation" }, { name: "Operating Room Setup" }, { name: "Pre-Operative Patient Interview" },
    ]},
    { title: "Intra-Operative Circulating Duties", skills: [
      { name: "Sponge, Sharps & Instrument Counts" }, { name: "Patient Positioning" }, { name: "Skin Prep" }, { name: "Specimen Handling and Labeling" }, { name: "Intraoperative Documentation" }, { name: "Time-Out/Patient Advocacy" }, { name: "Medication and Solution Labeling on Sterile Field" },
    ]},
    { title: "Patient Safety & Coordination", skills: [
      { name: "Fire Safety Protocol" }, { name: "Universal Protocol Compliance" }, { name: "Equipment and Supply Coordination" }, { name: "Communication With Anesthesia and Surgical Team" }, { name: "Retained Object Prevention" },
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
      { name: "Patient Assessment and Chart Review" }, { name: "Consent Verification" }, { name: "Site Marking Verification" }, { name: "Operating Room Setup" }, { name: "Case Cart Verification" },
    ]},
    { title: "Scrub Role Duties", skills: [
      { name: "Sterile Field Setup and Maintenance" }, { name: "Gowning and Gloving (Self and Team)" }, { name: "Instrument Passing Technique" }, { name: "Back-Table/Mayo Stand Setup" }, { name: "Preference Card Compliance" },
    ]},
    { title: "Circulating Role Duties", skills: [
      { name: "Patient Positioning" }, { name: "Skin Prep" }, { name: "Intraoperative Documentation" }, { name: "Time-Out/Patient Advocacy" }, { name: "Equipment Troubleshooting" },
    ]},
    { title: "Shared Duties", skills: [
      { name: "Sponge, Sharps & Instrument Counts" }, { name: "Specimen Handling and Labeling" }, { name: "Universal Protocol Compliance" }, { name: "Fire Safety Protocol" },
    ]},
    { title: "Surgical Specialties", skills: [
      { name: "General Surgery" }, { name: "Orthopedic Surgery" }, { name: "Laparoscopic Procedures" }, { name: "Robotic Surgical System Assist (da Vinci)" }, { name: "Gynecologic Surgery" }, { name: "Urologic Surgery" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "Malignant Hyperthermia Response" }, { name: "Massive Hemorrhage Protocol" }, { name: "Code Response in OR" },
    ]},
  ]},

  { slug: "rn-post-anesthesia", title: "Registered Nurse – Post Anesthesia Recovery Skills Checklist", shortTitle: "RN – Post Anesthesia", icon: "😴", group: "Critical Care", categories: [
    { title: "Emergence & Phase I Recovery", skills: [
      { name: "Emergence From General Anesthesia" }, { name: "Airway Management/Extubation Recovery" }, { name: "Regional Anesthesia Recovery" }, { name: "Malignant Hyperthermia Recognition" }, { name: "Emergence Delirium Management" },
    ]},
    { title: "Respiratory & Airway Monitoring", skills: [
      { name: "Pulse Oximetry Monitoring" }, { name: "Airway Obstruction Management" }, { name: "Laryngospasm Management" }, { name: "Aspiration Risk Assessment" }, { name: "Oxygen Therapy Titration" },
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
      { name: "Daily Staffing and Assignment" }, { name: "Charge Nurse Oversight" }, { name: "Bed Management/Throughput" }, { name: "Supply and Equipment Management" }, { name: "Interdepartmental Coordination" },
    ]},
    { title: "Staffing & Scheduling", skills: [
      { name: "Schedule Creation and Approval" }, { name: "Overtime and Agency Staffing Management" }, { name: "Skill Mix and Acuity Matching" }, { name: "PTO/Time-Off Approval" }, { name: "Float Pool Coordination" },
    ]},
    { title: "Unit-Based Quality & Safety", skills: [
      { name: "Unit Quality Metric Tracking" }, { name: "Incident Review and Follow-Up" }, { name: "Unit-Based Safety Rounds" }, { name: "Regulatory/Survey Readiness" }, { name: "Infection Prevention Metric Monitoring" },
    ]},
    { title: "Staff Development & Engagement", skills: [
      { name: "New Hire Orientation Oversight" }, { name: "Performance Evaluation" }, { name: "Unit Council/Shared Governance Facilitation" }, { name: "Staff Recognition and Engagement" }, { name: "Competency Validation Oversight" }, { name: "Progressive Discipline Process" },
    ]},
    { title: "Patient & Family Experience", skills: [
      { name: "Patient Satisfaction/HCAHPS Follow-Up" }, { name: "Complaint Resolution" }, { name: "Interdisciplinary Rounding" }, { name: "Family Meeting Facilitation" },
    ]},
    { title: "Budget & Resource Management", skills: [
      { name: "Unit Budget Monitoring" }, { name: "Labor Cost/Productivity Management" }, { name: "Capital Equipment Requests" },
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
