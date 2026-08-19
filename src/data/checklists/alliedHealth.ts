import { ChecklistSpec } from "../checklistData";

export const alliedHealthChecklists: ChecklistSpec[] = [
  { slug: "pharmacist", title: "Pharmacist Skills Checklist", shortTitle: "Pharmacist", icon: "💊", group: "Allied Health", categories: [
    { title: "Education & Certification", skills: [
      { name: "Bachelor of Pharmacy (B Pharm/BS Pharm)" }, { name: "Doctor of Pharmacy (PharmD)" }, { name: "Pharmacy Residency (PGY-1/PGY-2)" }, { name: "Pharmacy Fellowship" }, { name: "Board Certification (BCPS, BCCCP, BCOP, BCPPS, BCACP, BCIDP, BCCP, BCPP, BCEMP, BCNP, BCTXP, BCSCP, BCNSP, BCGP)" }, { name: "Basic Life Support (BLS)" }, { name: "ACLS/PALS Certification" }, { name: "Immunization Delivery Certification" },
    ]},
    { title: "Practice Settings/Experience", skills: [
      { name: "Academia" }, { name: "Ambulatory Care" }, { name: "Clinic" }, { name: "Compounding" }, { name: "Consulting" }, { name: "Correctional Facility" }, { name: "Government/VA" }, { name: "Home Infusion" }, { name: "Hospital Inpatient" }, { name: "Hospital Outpatient" }, { name: "Long Term Care" }, { name: "Managed Care Organization" }, { name: "Nuclear Pharmacy" }, { name: "Oncology" }, { name: "Pediatric" }, { name: "Psychiatric" }, { name: "Retail/Community" }, { name: "Centralized/Decentralized Pharmacy" }, { name: "Hospice" }, { name: "Mail Order" }, { name: "Poison Control" }, { name: "Pharmacy Benefit Management" }, { name: "Pharmaceutical Industry" }, { name: "Research" }, { name: "Veterinary" },
    ]},
    { title: "Inpatient Hospital Settings", skills: [
      { name: "Medical-Surgical Unit" }, { name: "Intensive Care Unit" }, { name: "Operating Room" }, { name: "Critical Care" }, { name: "Behavioral Health Unit" }, { name: "Transplantation Unit" }, { name: "Acute Care" },
    ]},
    { title: "Clinical Skills", skills: [
      { name: "Medication Therapy Management" }, { name: "Drug Information" }, { name: "Pharmacokinetics" }, { name: "IV Admixture/Compounding" }, { name: "TPN Compounding" }, { name: "Chemotherapy Preparation" }, { name: "Anticoagulation Management" }, { name: "Pain Management" }, { name: "Antimicrobial Stewardship" }, { name: "Medication Error Reporting" }, { name: "Patient Counseling/Direct Patient Care" }, { name: "Drug/Drug Interactions Review and Management" }, { name: "Therapeutic Drug Monitoring" }, { name: "Pharmacogenomics" }, { name: "Medication Reconciliation" }, { name: "Aseptic Technique" }, { name: "Code Blue (CPR) Management" }, { name: "Discharge Planning" }, { name: "Clinical Consultation/Drug Information" }, { name: "Adverse Drug Reaction Monitoring" }, { name: "Interdisciplinary Rounding" }, { name: "Transition of Care" }, { name: "Drug Utilization/Drug Dosing Review" },
    ]},
    { title: "Special Patient Populations", skills: [
      { name: "Geriatric" }, { name: "Patients with Hepatic Impairment" }, { name: "Oncology" }, { name: "Pediatric" }, { name: "Pregnant Patients" }, { name: "Patients with Renal Impairment" }, { name: "Transplant" },
    ]},
    { title: "Disease States", skills: [
      { name: "Sepsis/Septic Shock" }, { name: "Dermatology (SJS/TEN, cellulitis)" }, { name: "Vascular (DVT, PE)" }, { name: "Pain Management" }, { name: "Gastrointestinal" }, { name: "Psychiatric" }, { name: "Diabetes (DKA)" }, { name: "Renal Disorders (UTIs, AKIs)" }, { name: "Toxicology (drug overdose, venomous bites/stings)" }, { name: "Cardiology (MI, Heart Failure, Afib)" }, { name: "Hepatic Disorders" }, { name: "Respiratory (Asthma, COPD, RSV, COVID-19, Pneumonia, Influenza)" }, { name: "Dyslipidemia" }, { name: "Neurology (Seizure Disorder, Stroke)" }, { name: "Infectious Diseases" }, { name: "Hypertension" }, { name: "Immunology (anaphylaxis)" },
    ]},
    { title: "Therapeutics", skills: [
      { name: "Intravenous (IV) Fluids" }, { name: "Antiemetics" }, { name: "Opioids/Analgesics" }, { name: "Antihypertensives and Diuretics" }, { name: "Gastrointestinal Medications (GI Cocktail, PPIs, H2RAs)" }, { name: "Glucocorticoids" }, { name: "Inotropes and Vasopressors" }, { name: "Chemotherapy" }, { name: "Electrolyte Solutions" }, { name: "Antibiotics" }, { name: "Antiarrhythmics" }, { name: "Immunosuppressants" }, { name: "Anticonvulsants" }, { name: "Total Parenteral Nutrition (TPN)" }, { name: "Diabetes Management Agents (insulin)" }, { name: "Antithrombotic (Antiplatelets, Anticoagulants, Fibrinolytics)" }, { name: "Bronchodilators" }, { name: "Lipid Lowering Agents" }, { name: "Antipsychotics" },
    ]},
    { title: "Calculations", skills: [
      { name: "Opioid Morphine Milligram Equivalents (MME)" }, { name: "Temperature Conversions" }, { name: "Aminoglycoside Dosing" }, { name: "Absolute Neutrophil Count (ANC)" }, { name: "Ideal Body Weight" }, { name: "CHADS2-VASc Score" }, { name: "Pharmacokinetic (Clearance, Half-life, Vd)" }, { name: "Anion Gap" }, { name: "Warfarin Dosing" }, { name: "Creatinine Clearance: Cockcroft-Gault Equation" }, { name: "Body Surface Area (BSA)" }, { name: "Digoxin Dosing and Steady State" }, { name: "Adjusted Body Weight" }, { name: "Opioid Analgesic Conversion" }, { name: "Vancomycin Dosing (AUC and Trough)" }, { name: "Creatinine Clearance: MDRD" }, { name: "Heparin Dosing and Indications" }, { name: "CHADS2 Score" }, { name: "Pediatric Dosing (Young's Rule, Clark's Rule, Fried's Rule)" }, { name: "Osmolarity" },
    ]},
    { title: "IV Fluid/Electrolyte Skills", skills: [
      { name: "Calculate % weight in volume / weight in weight / volume in volume" }, { name: "Milliequivalent (mEq) Calculations and mg/mEq Conversion" }, { name: "IV Drip Rate Calculations" }, { name: "Compounding Calculations for sterile preparations" }, { name: "IV Diluent-Medication Compatibility" }, { name: "Concentration and Dilution Calculations, Mixing Ratios" }, { name: "TPN Composition and Infusion Rate Calculations" }, { name: "Reconstitution Calculations" }, { name: "IV Preparation" }, { name: "Millimoles vs Milligrams Conversions" },
    ]},
    { title: "Therapeutic Knowledge & Clinical Judgment", skills: [
      { name: "Identify appropriate medications, doses, dose intervals" }, { name: "Identify required monitoring" }, { name: "Monitor therapeutic drug levels (e.g., digoxin)" }, { name: "Assess antibiotic appropriateness via sensitivity/antibiogram" }, { name: "Identify medications for surgical prophylaxis" }, { name: "Dose adjustments for hepatic/renal impairment" }, { name: "Identify gaps in therapy" }, { name: "Weight- and age-based dose adjustments" }, { name: "Pediatric dosing based on age, weight, BSA" }, { name: "Medications via feeding tubes (GT, NG, GB, JT, NJ)" }, { name: "Infection coverage appropriateness (MRSA, Pseudomonas, VRE)" }, { name: "Contraindicated medications" }, { name: "Review pertinent lab values" }, { name: "Evidence-based guideline application" }, { name: "Monitor lab values for dosing appropriateness (INR)" }, { name: "Identify incorrect medication infusion rates" }, { name: "Anticoagulant switching" }, { name: "Identify adverse drug events" }, { name: "Medications that can be crushed for oral administration" }, { name: "Identify empiric antibiotics based on indication" }, { name: "Interpret lab values/identify abnormal ranges" }, { name: "Identify duplicative therapy" }, { name: "Sepsis criteria" }, { name: "IV to PO conversions" }, { name: "Identify incorrect drug dosing or frequency" },
    ]},
    { title: "Dispensing", skills: [
      { name: "Prescription Processing" }, { name: "Medication Verification" }, { name: "Patient Counseling" }, { name: "Drug Utilization Review" }, { name: "Controlled Substance Management" },
    ]},
    { title: "Technology", skills: [
      { name: "Automated Dispensing (Pyxis, Omnicell)" }, { name: "IV Workflow Systems" }, { name: "Electronic Health Record" }, { name: "CPOE" }, { name: "Barcode Verification" }, { name: "Informatics" },
    ]},
    { title: "Regulatory", skills: [
      { name: "Joint Commission Standards" }, { name: "State Board of Pharmacy" }, { name: "DEA Regulations" }, { name: "USP 797/800 Compliance" }, { name: "Medication Error Reporting" }, { name: "Pharmacy and Therapeutics Committee" }, { name: "Drug Protocol/Guideline Development and Management" }, { name: "Inventory Management" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Pre-school (3-6 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Young Adult (18-30 years)" }, { name: "Mature Adult (30-60 years)" }, { name: "Elderly (>60 years)" },
    ]},
  ]},

  { slug: "pharmacy-technician", title: "Pharmacy Technician Skills Checklist", shortTitle: "Pharmacy Technician", icon: "🧴", group: "Allied Health", categories: [
    { title: "Communication & Professionalism", skills: [
      { name: "Organize written and oral communication" }, { name: "Question healthcare professionals for patient information" }, { name: "Communicate appropriately with audience" }, { name: "Use good listening skills" }, { name: "Effectively interact with healthcare team members (physicians, nurses, other professionals)" }, { name: "Ensure timely and accurate communication regarding medication orders and inventory needs" }, { name: "Effectively multi-task in a high-pressure, fast-paced environment" }, { name: "Adhere to shift schedules and attendance policies" }, { name: "Demonstrate strong time management and organizational skills" }, { name: "Work independently with minimal oversight" },
    ]},
    { title: "Sterile Compounding (IV Room)", skills: [
      { name: "Maintain and document cleanroom environmental conditions" }, { name: "Maintain sterile compounding practices to prevent contamination" }, { name: "Restock IV room supplies as needed" }, { name: "Follow USP 797 guidelines for preparing intravenous medications" }, { name: "Label and store compounded sterile preparations properly" }, { name: "Prepare compounded medications using aseptic technique" }, { name: "Ensure final pharmacist verification before dispensing compounded sterile medications" }, { name: "Proper donning/doffing of PPE and hand hygiene protocols" }, { name: "TPN Preparation" }, { name: "Chemotherapy Preparation" },
    ]},
    { title: "Non-Sterile Compounding", skills: [
      { name: "Pre-package bulk medications into unit doses" }, { name: "Ensure final pharmacist verification of all compounded medications" }, { name: "Follow USP 795 guidelines for preparing non-sterile compounds" }, { name: "Maintain a clean and orderly compounding workspace" }, { name: "Measure, mix, and label patient medications per prescription and protocol" }, { name: "Notify pharmacy buyer when compounding supplies are low" },
    ]},
    { title: "Dispensing", skills: [
      { name: "Prescription Processing" }, { name: "Medication Counting/Pouring" }, { name: "Label Generation" }, { name: "Medication Packaging" }, { name: "Automated Dispensing Systems" }, { name: "Unit Dose Packaging" }, { name: "Assist with pre-packing, barcoding, and medication labeling" },
    ]},
    { title: "Order Entry & Verification", skills: [
      { name: "Working knowledge of drug terminology, pharmacology, and calculations" }, { name: "Operate pharmacy software for medication management and order entry" }, { name: "Enter prescription orders into the system for pharmacist verification" }, { name: "Troubleshoot minor pharmacy software issues" },
    ]},
    { title: "Automated Dispensing System Management", skills: [
      { name: "Deliver patient medications to nursing units and load into dispensing cabinets (e.g., Pyxis)" }, { name: "Restock automated dispensing cabinets" }, { name: "Conduct inventory audits, checking for expired medications" }, { name: "Notify pharmacist/charge nurse of discrepancies in dispensing inventory" }, { name: "Monitor and adjust par levels" },
    ]},
    { title: "Inventory Management", skills: [
      { name: "Ordering" }, { name: "Receiving" }, { name: "Storage" }, { name: "Controlled Substance Tracking" }, { name: "Expiration Date Monitoring" }, { name: "Drug Recall Management" }, { name: "Replace/restock crash carts and RSI kits" }, { name: "Retrieve recalled medications for quality control" }, { name: "Track medication shortages and manage backorders" }, { name: "Maintain accurate pharmacy inventory records" },
    ]},
    { title: "Insurance, Billing & Compliance", skills: [
      { name: "Assist with insurance claim processing and billing inquiries" }, { name: "Ensure accurate patient medication billing and reimbursement tracking" }, { name: "Follow pharmacy laws and regulations for patient info and medication handling" }, { name: "Remain current on USP 797/800 and other regulations" }, { name: "Adhere to HIPAA guidelines for patient confidentiality" }, { name: "Maintain awareness of state and federal pharmacy regulations" },
    ]},
    { title: "Technology", skills: [
      { name: "Automated Dispensing Machines" }, { name: "Pharmacy Information Systems" }, { name: "Robot/Carousel Systems" }, { name: "IV Workflow Systems" }, { name: "Barcode scanning and medication safety measures" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Pre-school (3-6 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Young Adult (18-30 years)" }, { name: "Mature Adult (30-60 years)" }, { name: "Elderly (>60 years)" },
    ]},
  ]},

  { slug: "medical-assistant", title: "Medical Assistant Skills Checklist", shortTitle: "Medical Assistant", icon: "🩺", group: "Allied Health", categories: [
    { title: "Clinical Patient Care", skills: [
      { name: "Use glucometer" }, { name: "Administer immunizations and update records" }, { name: "Apply pulse oximeter" }, { name: "Perform pain assessment" }, { name: "Adhere to standard and transmission-based precautions with PPE" }, { name: "Perform wellness screenings (e.g., cancer, nicotine, domestic violence, suicide)" }, { name: "Perform telephone/in-person screening" }, { name: "Perform hearing screening" }, { name: "Obtain pediatric measurements/growth chart" }, { name: "Perform respiratory testing (e.g., PFTs, peak flow)" }, { name: "Apply oxygen" }, { name: "Placement/reading of PPD" }, { name: "Obtain vital signs" }, { name: "Perform vision screening" }, { name: "Obtain/record patient intake (e.g., PMH, CC, medication reconciliation)" }, { name: "Use transfer assistive devices (e.g., gait belt, walker, lift)" }, { name: "Perform basic life support (BLS)" }, { name: "Administer medications (e.g., PO, IM, SQ)" }, { name: "EKG" }, { name: "Nebulizer treatment" },
    ]},
    { title: "Provider-Assisted Procedures", skills: [
      { name: "Suture/staple removal" }, { name: "Discontinue IV" }, { name: "Urinary catheter insertion/removal" }, { name: "Specimen collection: swab (e.g., throat, nasopharyngeal, wound)" }, { name: "Nasogastric (NG) tube insertion/removal" }, { name: "Ear/eye irrigation" }, { name: "Specimen collection: blood" }, { name: "Cast care/splint" }, { name: "Assist provider with minor surgical procedures and treatments" }, { name: "Nasopharyngeal suctioning" }, { name: "Specimen collection: urine, stool, sputum" }, { name: "Sterilization of instruments" }, { name: "Wound care" },
    ]},
    { title: "Patient Condition Management", skills: [
      { name: "Seizures" }, { name: "Hypertension" }, { name: "Shock" }, { name: "Diabetes, hypo/hyperglycemia" }, { name: "Bone fractures/joint sprains" }, { name: "Bleeding control" }, { name: "MI/chest pain" }, { name: "Burns" }, { name: "Respiratory distress" }, { name: "Allergic reaction/anaphylaxis" }, { name: "Head trauma" }, { name: "Stroke" }, { name: "Asthma/COPD" },
    ]},
    { title: "Patient Education & Communication", skills: [
      { name: "Use and care of patient equipment (e.g., crutches, blood pressure machine)" }, { name: "Diagnostic tests/minor procedures" }, { name: "Discharge/follow-up" }, { name: "Managing conditions (e.g., hypertension, diabetes, COPD)" }, { name: "Pre-procedure preparation instructions (e.g., fasting)" }, { name: "Medications/immunizations" }, { name: "Dietary modifications/lifestyle changes" }, { name: "Adhere to delegation rights" }, { name: "Adapt communication (language, cognitive, age, visual/hearing impairment)" }, { name: "Use SBAR" }, { name: "Participate in interdisciplinary team meetings" }, { name: "Cultural diversity awareness" }, { name: "Perform handoff communication" },
    ]},
    { title: "Administrative Skills", skills: [
      { name: "File/update medical records" }, { name: "Telehealth services" }, { name: "Coordinate patient transfers" }, { name: "Schedule/manage appointments" }, { name: "Electronic documentation" }, { name: "Coordination of referrals (e.g., social worker, home health, hospice)" }, { name: "Initiate patient medical record" }, { name: "ICD-10 coding" }, { name: "Data entry" }, { name: "Insurance billing/verification" }, { name: "Answering phones" }, { name: "CPT coding" }, { name: "Billing entry" }, { name: "Healthcare Common Procedure Coding System (HCPCS Level II)" }, { name: "Prior authorizations" }, { name: "Telephone triage" },
    ]},
    { title: "Supply Chain & Equipment", skills: [
      { name: "Medical equipment calibration/maintenance" }, { name: "Restock medical/office supplies" }, { name: "Prepare supplies/patient room for procedures" },
    ]},
    { title: "Legal & Compliance", skills: [
      { name: "Reportable patient conditions (e.g., abuse/neglect, dog bites, communicable diseases)" }, { name: "HIPAA laws and handling PHI" }, { name: "Informed consent" }, { name: "Advance directives, POA, DNR" }, { name: "Incident reports" }, { name: "Awareness of HCAHPS" },
    ]},
    { title: "Practice Setting Experience", skills: [
      { name: "Utilization review/case management" }, { name: "Orthopedic practice" }, { name: "Pediatric practice" }, { name: "Rehabilitation center" }, { name: "OB/GYN practice" }, { name: "HIV/infection control" }, { name: "Health/wellness screening" }, { name: "Urgent care clinic" }, { name: "General clinic > 5 MDs practice" }, { name: "Occupational health" }, { name: "MD office < 5 MDs practice" }, { name: "Long-term care facility" }, { name: "Oncology practice" }, { name: "Hospital" }, { name: "Surgical practice" }, { name: "General internal medicine" }, { name: "Admit/discharge patients" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "patient-care-tech", title: "Patient Care Technician Skills Checklist", shortTitle: "Patient Care Tech", icon: "🫂", group: "Allied Health", categories: [
    { title: "Obtaining and Recording", skills: [
      { name: "BP, Including Orthostatic" }, { name: "Vital Signs and Weights" }, { name: "Administering an Enema" }, { name: "Applying Ted Hose" }, { name: "Assessing Respirations" }, { name: "Bathing (Bed/Shower/Tub)" }, { name: "Blood Glucose Monitoring" }, { name: "Catheter Care" }, { name: "Intake and Output Monitoring" }, { name: "Pulse Oximetry" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Ambulation" }, { name: "Positioning/Turning" }, { name: "Transfer (Bed/Chair/Commode)" }, { name: "ROM Exercises" }, { name: "Feeding Patients" }, { name: "Oral Care" }, { name: "Perineal Care" }, { name: "Skin Assessment" }, { name: "Pressure Injury Prevention" }, { name: "Post-Mortem Care" },
    ]},
    { title: "Phlebotomy", skills: [
      { name: "Venipuncture" }, { name: "Capillary Puncture" }, { name: "Blood Cultures" }, { name: "Specimen Processing" }, { name: "Specimen Labeling and Chain of Custody" },
    ]},
    { title: "EKG", skills: [
      { name: "12-Lead EKG" }, { name: "Rhythm Strip" }, { name: "Telemetry Monitor" }, { name: "Basic Rhythm Recognition" },
    ]},
    { title: "Safety", skills: [
      { name: "Fall Prevention" }, { name: "Restraint Application" }, { name: "Infection Control" }, { name: "Standard Precautions" }, { name: "Sharps Disposal" }, { name: "Isolation Precautions" }, { name: "Patient Identification (Two Identifiers)" },
    ]},
    { title: "Documentation & Communication", skills: [
      { name: "Charting/Documentation in EMR" }, { name: "Reporting Changes in Patient Condition" }, { name: "Communication With Nursing Staff" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "pct", title: "PCT Skills Checklist", shortTitle: "PCT", icon: "🤲", group: "Allied Health", categories: [
    { title: "Patient Rights", skills: [
      { name: "Communicates and obtains information respecting HIPAA" }, { name: "Involves patient and family in care decisions" }, { name: "Complies with Organ Donation policy" }, { name: "Meets communication needs including interpreter services" }, { name: "Patient identification using two patient identifiers" }, { name: "Maintain patient dignity and privacy at all times" },
    ]},
    { title: "Documentation", skills: [
      { name: "Document work-related activities and actions, including writing text" }, { name: "Record vital signs" }, { name: "Record and calculate Intake & Output measurements" }, { name: "Utilize common medical terminology with correct spelling" }, { name: "Read and document time, calculate time intervals" }, { name: "Utilize common medical acronyms and abbreviations" }, { name: "English and Metric conversions to calculate measurements" }, { name: "Report and document incidents" }, { name: "Document using narrative, computerized, graphic, and checklist formats" },
    ]},
    { title: "Equipment", skills: [
      { name: "Care and cleaning of medical equipment" }, { name: "Hospital beds, scales, and bed alarms" }, { name: "Therapeutic beds and mattresses" }, { name: "Mechanical lifts (HoverJack, HoverMatt, Hoyer)" }, { name: "Care of oxygen equipment" }, { name: "Sequential compression devices" }, { name: "Walker/crutches" }, { name: "Wound vacuums" }, { name: "Blood glucose monitor" }, { name: "Bladder scanner" }, { name: "Suction equipment set-up" }, { name: "Traction" }, { name: "Use of pneumatic tube system" },
    ]},
    { title: "Vital Signs and Weights", skills: [
      { name: "BP, including Orthostatic" }, { name: "Pulse, Radial" }, { name: "Temperature (Oral, Rectal, Axillary, Tympanic)" }, { name: "Respirations" }, { name: "Weight (Standing, Chair, Bed)" }, { name: "Pulse Oximetry" }, { name: "Blood pressure (manual)" },
    ]},
    { title: "Personal Care & Hygiene", skills: [
      { name: "Bathing (complete bed bath, partial bed bath, shower, tub, sitz, whirlpool)" }, { name: "Oral care, dental care, and partials" }, { name: "Perineal care" }, { name: "Range of motion" }, { name: "Colostomy care" }, { name: "Skin care (preventing pressure areas)" }, { name: "Tracheostomy care" }, { name: "Back care/massage" }, { name: "Shaving patient (safety/electric razor)" }, { name: "Shampoo (sink, tub, or bed)" }, { name: "Catheter care" }, { name: "Nail care" }, { name: "Bedmaking (occupied, unoccupied, post-op surgical)" },
    ]},
    { title: "Nutrition & Feeding", skills: [
      { name: "Proper feeding techniques (with/without assistive devices)" }, { name: "Preparation of food and packaging" }, { name: "Correct positioning during and after feeding" }, { name: "Assist patient with menu selection" }, { name: "Aspiration precautions" }, { name: "Special dietary requirements" },
    ]},
    { title: "Toileting & Elimination", skills: [
      { name: "Incontinence care" }, { name: "Clean patient and patient environment" }, { name: "Ostomy care and assistance" }, { name: "Assist patient with bedside commode" }, { name: "Maintenance and care of foley catheter" }, { name: "Assist patient with bedpan and urinal" }, { name: "Empty colostomy and foley catheter" }, { name: "Bowel/bladder training" },
    ]},
    { title: "Patient Care & Mobility", skills: [
      { name: "Ambulation" }, { name: "Positioning/Turning" }, { name: "Transfer (Bed/Chair/Commode)" }, { name: "ROM Exercises" }, { name: "Assist with patient transport (wheelchair/stretcher)" }, { name: "Ambulation with assistive device (gait belt, walker)" }, { name: "Application of Ace bandage" }, { name: "Cast care" }, { name: "Application of hot/cold packs" },
    ]},
    { title: "Patient Admission, Transfer & Discharge", skills: [
      { name: "Assist with hospital gown and equipment set-up" }, { name: "Notify nurse of patient arrival" }, { name: "Secure patient valuables" }, { name: "Adjust bed settings/controls" }, { name: "Patient orientation to room" }, { name: "Assist with transport and personal belongings at discharge" },
    ]},
    { title: "Communication & Special Care", skills: [
      { name: "Communicate clearly using phone/patient call system or in person" }, { name: "Report changes in patient condition to nursing supervisor" }, { name: "Provide timely information to team members regarding patient care" }, { name: "Care for suicidal, combative, and confused patients" }, { name: "Care for the dying patient and patient with DNR order" }, { name: "Post-mortem care in accordance with cultural and religious considerations" }, { name: "Understanding of pain scales" },
    ]},
    { title: "Infection Control", skills: [
      { name: "Personal Protective Equipment" }, { name: "Airborne Precautions" }, { name: "Contact Precautions" }, { name: "Droplet Precautions" }, { name: "Hand hygiene" }, { name: "Standard/Universal Precautions" },
    ]},
    { title: "Procedures & Specimen Collection", skills: [
      { name: "Urine Collection (clean catch, foley)" }, { name: "Stool Collection" }, { name: "Sputum Collection" }, { name: "Emesis collection" }, { name: "Blood Glucose Testing (fingerstick)" }, { name: "Application of K-pads/modules" }, { name: "Drains (Jackson-Pratt, Hemo-Vac, Wound Vacs)" }, { name: "Simple dressing change" }, { name: "Properly label all specimens" }, { name: "Perform administration of enemas" }, { name: "Prep patient prior to surgery" }, { name: "Vaginal douche" }, { name: "Removal of indwelling/external foley catheter" }, { name: "Application of TED/support stockings" }, { name: "Assist nursing staff during emergencies" }, { name: "Replace telemetry leads and change batteries" }, { name: "Removal of peripheral IV needle and saline lock" }, { name: "CPR and AED" }, { name: "Preparation and use of EKG equipment" },
    ]},
    { title: "Safety", skills: [
      { name: "Fall Prevention" }, { name: "Restraint Use (vest, wrist, mitt restraints)" }, { name: "Bed and chair alarms" }, { name: "Infection Control" }, { name: "Hand Hygiene" }, { name: "Standard Precautions" }, { name: "Proper Body Mechanics" }, { name: "Suicide precautions" }, { name: "Use of prosthetic/orthotic device" }, { name: "Safe patient transfer technique" },
    ]},
    { title: "Clinical Settings Experience", skills: [
      { name: "Nursery" }, { name: "Cardiac Unit" }, { name: "Home Care" }, { name: "Hospice" }, { name: "OB/GYN and Labor & Delivery" }, { name: "Central Supply" }, { name: "Nursing Home/Skilled Nursing Facility" }, { name: "Behavioral Health" }, { name: "Clinic" }, { name: "Acute Care/Hospital" }, { name: "Neuro Unit" }, { name: "Urology" }, { name: "Surgical Unit" }, { name: "Med-Surg" }, { name: "Orthopedic" }, { name: "Crisis Intervention" }, { name: "Alzheimer's" }, { name: "1:1 Patient/Private Duty" }, { name: "Geriatric" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "ophthalmic-tech", title: "Ophthalmic Technician Skills Checklist", shortTitle: "Ophthalmic Tech", icon: "👁️", group: "Allied Health", categories: [
    { title: "Diagnostic Testing", skills: [
      { name: "Visual Acuity Testing" }, { name: "Tonometry (IOP Measurement)" }, { name: "Refraction/Autorefraction" }, { name: "Visual Field Testing" }, { name: "OCT Imaging" }, { name: "Fundus Photography" }, { name: "Corneal Topography" }, { name: "Keratometry" }, { name: "Color Vision Testing" }, { name: "Pachymetry" }, { name: "A-Scan/B-Scan Ultrasound" },
    ]},
    { title: "Clinical Assist Skills", skills: [
      { name: "Pupil Dilation" }, { name: "Slit Lamp Assist" }, { name: "Contact Lens Fitting Assist" }, { name: "Minor Procedure Assist (e.g., Foreign Body Removal)" }, { name: "Laser Procedure Assist" }, { name: "Intraocular Injection Assist" }, { name: "Ocular Motility Testing" }, { name: "Cover/Uncover Test" },
    ]},
    { title: "Patient Care & History", skills: [
      { name: "Patient History Intake" }, { name: "Chief Complaint Documentation" }, { name: "Medication History Review" }, { name: "Pediatric Patient Handling" }, { name: "Geriatric Patient Handling" }, { name: "Low Vision Patient Assistance" },
    ]},
    { title: "Equipment & Safety", skills: [
      { name: "Equipment Sterilization" }, { name: "Instrument Calibration" }, { name: "Infection Control Standards" }, { name: "Emergency Eye Wash Protocols" },
    ]},
  ]},

  { slug: "audiologist", title: "Audiologist Skills Checklist", shortTitle: "Audiologist", icon: "👂", group: "Allied Health", categories: [
    { title: "Diagnostic Testing", skills: [
      { name: "Pure Tone Audiometry" }, { name: "Speech Audiometry" }, { name: "Tympanometry" }, { name: "Acoustic Reflex Testing" }, { name: "Otoacoustic Emissions (OAE) Testing" }, { name: "Auditory Brainstem Response (ABR) Testing" }, { name: "Newborn Hearing Screening" }, { name: "Electrocochleography (ECochG)" }, { name: "Vestibular Evoked Myogenic Potentials (VEMP)" },
    ]},
    { title: "Balance & Vestibular Assessment", skills: [
      { name: "Videonystagmography (VNG)" }, { name: "Rotary Chair Testing" }, { name: "Computerized Dynamic Posturography" }, { name: "Dix-Hallpike Maneuver" }, { name: "Canalith Repositioning Procedures" },
    ]},
    { title: "Treatment & Rehabilitation", skills: [
      { name: "Hearing Aid Fitting and Programming" }, { name: "Hearing Aid Real-Ear Verification" }, { name: "Cochlear Implant Candidacy Evaluation" }, { name: "Cochlear Implant Programming/Mapping" }, { name: "Bone-Anchored Hearing System Fitting" }, { name: "Aural Rehabilitation" }, { name: "Tinnitus Management" }, { name: "Assistive Listening Device Fitting" },
    ]},
    { title: "Pediatric & Geriatric Care", skills: [
      { name: "Pediatric Hearing Assessment" }, { name: "Visual Reinforcement Audiometry" }, { name: "Play Audiometry" }, { name: "Geriatric Hearing Assessment" }, { name: "Presbycusis Management" },
    ]},
    { title: "Counseling & Documentation", skills: [
      { name: "Patient/Family Counseling and Education" }, { name: "Auditory Processing Disorder Evaluation" }, { name: "Ototoxicity Monitoring" }, { name: "Clinical Documentation and Reporting" },
    ]},
  ]},

  { slug: "dietitian", title: "Dietitian / Clinical Nutritionist Skills Checklist", shortTitle: "Dietitian", icon: "🥗", group: "Allied Health", categories: [
    { title: "Nutrition Assessment", skills: [
      { name: "Nutrition-focused physical exam" }, { name: "Anthropometric measurements" }, { name: "Nutritional risk screening" }, { name: "Calorie/protein needs calculation" }, { name: "Diet history and intake analysis" },
    ]},
    { title: "Medical Nutrition Therapy", skills: [
      { name: "Diabetes management" }, { name: "Renal diet management" }, { name: "Enteral nutrition planning" }, { name: "Parenteral nutrition (TPN) planning" }, { name: "Oncology nutrition support" }, { name: "Bariatric nutrition counseling" }, { name: "Food and Drug Interactions" }, { name: "Wound/Bedsore Nutrition Management" }, { name: "Burn Patient Nutrition Support" }, { name: "GI Dysfunction Diet Management" }, { name: "Immune Disorder Nutrition Support" }, { name: "Pregnancy and Nutrition" }, { name: "Osteoporosis Nutrition Management" },
    ]},
    { title: "Specialized Diets", skills: [
      { name: "Cardiac/low-sodium diets" }, { name: "Pediatric nutrition" }, { name: "Food allergy/intolerance management" }, { name: "Texture-modified/dysphagia diets" },
    ]},
    { title: "Documentation & Compliance", skills: [
      { name: "EMR charting/nutrition notes" }, { name: "Interdisciplinary care plan participation" }, { name: "Regulatory/Joint Commission nutrition standards" }, { name: "Patient and family education" },
    ]},
    { title: "Care Settings", skills: [
      { name: "Hospital" }, { name: "Nursing Home/Long-Term Care Facility" }, { name: "Outpatient Setting" }, { name: "Rehab Facility" }, { name: "Adult Day Care" }, { name: "Sports Medicine Clinic" }, { name: "School System" }, { name: "Women/Infant/Children (WIC)" }, { name: "Private Practice" },
    ]},
    { title: "Care Planning & Facility Management", skills: [
      { name: "Develop Individualized Plan of Care" }, { name: "Implement Specific Plans of Care" }, { name: "High Nutritional Risk Patient Management" }, { name: "Hyperalimentation" }, { name: "Oral Feeding Management" }, { name: "Computerized Food Service Management System" }, { name: "Compliance with Food Protection Program" }, { name: "Facility Budgets for Food and Supplies" }, { name: "Coordination with Area Agencies on Aging (AAA)" }, { name: "Adherence to Dietary Guidelines" },
    ]},
    { title: "Education & Research", skills: [
      { name: "Precepting Dietetic Interns/Students" }, { name: "Participating in In-Service Staff Education" }, { name: "Conducting Nutrition-Related Quality Improvement Projects" }, { name: "Staying Current with Evidence-Based Nutrition Research" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "orthopedic-tech", title: "Orthopedic Technician Skills Checklist", shortTitle: "Orthopedic Tech", icon: "🦴", group: "Allied Health", categories: [
    { title: "Cast Application (Fiberglass/Synthetic)", skills: [
      { name: "Short arm cast (neutral position, flexion with ulnar deviation, pronation/supination)" }, { name: "Long arm cast (thumb spica, navicular thumb spica, posterior with side walls)" }, { name: "Short leg cast (walking, non-weight bearing, in equinus)" }, { name: "Long leg cast (walker, non-weight bearing with molding for widened mortise)" }, { name: "P.T.B. (patellar tendon bearing) cast with correct molding" }, { name: "Gauntlet cast with outrigger and molding" }, { name: "Cylinder cast" }, { name: "Toe plates applied to short and long leg casts" },
    ]},
    { title: "Cast Removal & Modification", skills: [
      { name: "Cast saw operation" }, { name: "Remove and replace cast blades" }, { name: "Trim casts" }, { name: "Window casts" }, { name: "Univalve casts" }, { name: "Wedging" }, { name: "Remove casts" }, { name: "Make alterations to casts to alleviate pressure points" }, { name: "Making various casts and molds" }, { name: "Preparing plaster of Paris mix" },
    ]},
    { title: "Splinting", skills: [
      { name: "Gutter splint (lateral and medial)" }, { name: "Sugar tong splint (short arm, double long arm)" }, { name: "Short arm volar splint" }, { name: "Short leg posterior splint" }, { name: "Short leg sugar tong splint" }, { name: "Long arm posterior splint with side walls" }, { name: "Thumb spica splint" }, { name: "Hand muff splint" }, { name: "Foot muff splint" },
    ]},
    { title: "Braces & Immobilizers", skills: [
      { name: "Slings" }, { name: "Cervical collar (soft and hard)" }, { name: "Ace bandage application" }, { name: "Velcro knee brace" }, { name: "Hinged knee brace" }, { name: "Shoulder immobilizer" }, { name: "Wrist brace" }, { name: "Application of Minerva/Halo jacket" },
    ]},
    { title: "Traction", skills: [
      { name: "Overhead bed frame setup" }, { name: "Balanced suspension traction" }, { name: "Split Russell's traction" }, { name: "Buck's traction" }, { name: "Bryant's traction" }, { name: "Cervical traction" }, { name: "Assist MD with fracture reduction" },
    ]},
    { title: "Physical Therapy & Patient Mobility", skills: [
      { name: "Crutch and cane fitting" }, { name: "Crutch and cane instruction" }, { name: "Gait training" }, { name: "Range of motion exercises" }, { name: "Crutch/walker fitting and training" }, { name: "Patient education on cast/brace care" },
    ]},
    { title: "Miscellaneous Procedures", skills: [
      { name: "Assist with stump revisions" }, { name: "Sterile dressing techniques" }, { name: "Assist with pin insertions" }, { name: "Assist with debridements" }, { name: "Removal of orthopedic devices" }, { name: "Removal of sutures" }, { name: "Assist with skin grafts" }, { name: "External fixator pin site care" }, { name: "Assisting with research projects" }, { name: "Neurovascular assessment" }, { name: "Sterile instrument handling" }, { name: "Supply and equipment inventory" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "dental-assistant", title: "Dental Assistant Skills Checklist", shortTitle: "Dental Assistant", icon: "🦷", group: "Allied Health", categories: [
    { title: "Chairside Assisting", skills: [
      { name: "Four-handed dentistry technique" }, { name: "Instrument transfer" }, { name: "Suction and moisture control" }, { name: "Impression taking assist" },
    ]},
    { title: "Sterilization & Infection Control", skills: [
      { name: "Instrument sterilization/autoclave operation" }, { name: "Operatory disinfection" }, { name: "PPE and standard precautions" },
    ]},
    { title: "Radiography", skills: [
      { name: "Intraoral X-ray positioning" }, { name: "Digital radiography systems" }, { name: "Radiation safety" },
    ]},
    { title: "Patient Care & Scheduling", skills: [
      { name: "Patient chart preparation" }, { name: "Appointment scheduling" }, { name: "Patient education on oral hygiene" },
    ]},
    { title: "Chairside Assisting by Specialty", skills: [
      { name: "Oral Surgery (Including Dental Implants)" }, { name: "Prosthodontics" }, { name: "General Dentistry" }, { name: "Orthodontics" }, { name: "Pedodontics" }, { name: "Endodontics" }, { name: "Periodontics" },
    ]},
    { title: "Practice Management & Computer Skills", skills: [
      { name: "Demonstrate Knowledge of Dental Software Programs" }, { name: "Enter Clinical Notes Upon Completed Patient Case" }, { name: "Enter Treatment That Was Performed" }, { name: "Chart Existing and Dental Work Needed" }, { name: "Enter and Update Patient Medical History" }, { name: "Take Panorex X-Rays" }, { name: "Take 3D Scan" }, { name: "Take Digital X-Rays" }, { name: "Take Inventory of Supplies Needed" }, { name: "Order Supplies from Vendors" }, { name: "Stock Operatories with Supplies as Needed" }, { name: "Maintain Equipment in Operatories and Lab" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "physician-assistant", title: "Physician Assistant Skills Checklist", shortTitle: "Physician Assistant", icon: "🩹", group: "Allied Health", categories: [
    { title: "Clinical Assessment", skills: [
      { name: "History and physical exam" }, { name: "Differential diagnosis development" }, { name: "Diagnostic test ordering and interpretation" }, { name: "Treatment planning" },
    ]},
    { title: "Emergencies & Trauma", skills: [
      { name: "Overdose of sedatives, hypnotics, opiates" }, { name: "Shock" }, { name: "Open wounds" }, { name: "Minor head injuries" }, { name: "Anaphylaxis" }, { name: "Snake bites" }, { name: "Seizures" }, { name: "Animal bites" }, { name: "Cardiac arrest" }, { name: "Minor burns" }, { name: "Ingestions and poisonings" },
    ]},
    { title: "Respiratory & Cardiovascular Conditions", skills: [
      { name: "COPD" }, { name: "Croup" }, { name: "Asthma" }, { name: "URI (upper respiratory infection)" }, { name: "Obstructive sleep apnea" }, { name: "Influenza" }, { name: "Tracheobronchitis" }, { name: "Bronchitis" }, { name: "Bacterial/viral pneumonia" }, { name: "Bacterial/nonbacterial sinusitis" }, { name: "Functional murmurs" }, { name: "Congenital heart disease" }, { name: "Stasis ulcer of lower extremities" }, { name: "Angina" }, { name: "Hypertension" }, { name: "Pericarditis" }, { name: "Congestive heart failure" }, { name: "Coronary artery disease" },
    ]},
    { title: "OB/GYN & GI Conditions", skills: [
      { name: "Pregnancy diagnosis and referral" }, { name: "Medications in postpartum/intrapartum phases" }, { name: "Pap smears and abnormal findings" }, { name: "Mastitis" }, { name: "Bartholin's cyst/abscess" }, { name: "Nausea and vomiting with pregnancy" }, { name: "Fibrocystic breast disease" }, { name: "Birth control methods" }, { name: "Pre-natal care" }, { name: "Menopause" }, { name: "Pain relief in active phase of labor" }, { name: "Trichomonal/atrophic/candida vaginitis" }, { name: "Dysfunctional uterine bleeding" }, { name: "Dysmenorrhea" }, { name: "Rh blood factor" }, { name: "Preparation for childbirth" }, { name: "Fetal well-being" }, { name: "Colic" }, { name: "Constipation" }, { name: "Cholecystitis" }, { name: "Pyloric stenosis" }, { name: "Diarrhea (simple)" }, { name: "Acute gastroenteritis" }, { name: "Appendicitis" },
    ]},
    { title: "Skin, ENT & Eye Conditions", skills: [
      { name: "Diaper dermatitis" }, { name: "Pityriasis rosea" }, { name: "Acne" }, { name: "Tinea pedis/corporis" }, { name: "Scabies" }, { name: "Contact dermatitis" }, { name: "Herpes zoster/simplex" }, { name: "Folliculitis" }, { name: "Warts" }, { name: "Malignant/basal skin carcinoma" }, { name: "Carbuncles, furuncles, impetigo" }, { name: "Serous/acute purulent otitis media" }, { name: "Oral candidiasis" }, { name: "Epistaxis" }, { name: "Allergic rhinitis" }, { name: "Pharyngitis" }, { name: "Otitis externa" }, { name: "Strabismus" }, { name: "Chalazion" }, { name: "Conjunctivitis" }, { name: "Stye" },
    ]},
    { title: "Musculoskeletal & Parasitic Conditions", skills: [
      { name: "Carpal tunnel syndrome" }, { name: "Scoliosis" }, { name: "Muscular dystrophy" }, { name: "Osteoporosis" }, { name: "Juvenile diabetes" }, { name: "Osteoarthritis" }, { name: "Tendonitis" }, { name: "Bursitis" }, { name: "Gout" }, { name: "Osteomyelitis" }, { name: "Minor sprains and strains" }, { name: "Rheumatoid arthritis" }, { name: "Ascariasis" }, { name: "Pediculosis" }, { name: "Pinworms" },
    ]},
    { title: "Genitourinary, Nervous System & Endocrine Conditions", skills: [
      { name: "Prostatitis" }, { name: "Herpes" }, { name: "Urinary tract infection" }, { name: "Benign prostatic hypertrophy" }, { name: "Hydrocele" }, { name: "Cystitis" }, { name: "Vulvovaginitis" }, { name: "Syphilis, chlamydia, gonococcal infections" }, { name: "Hypospadias" }, { name: "Pyelonephritis" }, { name: "Multiple sclerosis" }, { name: "Trigeminal neuralgia" }, { name: "Migraine/tension headaches" }, { name: "Bell's palsy" }, { name: "Anxiety" }, { name: "Parkinson's disease" }, { name: "TIA (transient ischemic attacks)" }, { name: "Vasovagal syncope" }, { name: "Head injury" }, { name: "Alzheimer's disease" }, { name: "Type I/II diabetes mellitus" }, { name: "Hypothyroidism" }, { name: "Addison's disease" }, { name: "Hypoglycemia" }, { name: "Graves disease" },
    ]},
    { title: "Hematological & Psychosocial Conditions", skills: [
      { name: "Folic acid deficiency anemia" }, { name: "Aplastic anemia" }, { name: "Sickle cell anemia" }, { name: "Iron deficiency anemia" }, { name: "Pernicious anemia" }, { name: "Suicide risk assessment" }, { name: "Anxiety" }, { name: "Anorexia" }, { name: "Grief" }, { name: "Bulimia" }, { name: "Obesity" }, { name: "Depression" },
    ]},
    { title: "Procedures", skills: [
      { name: "Suturing/wound repair" }, { name: "Starting IV" }, { name: "Casting and splinting" }, { name: "Cell biopsy" }, { name: "Joint/fracture reduction assist" }, { name: "Minor surgical procedures" }, { name: "First assist in surgery" },
    ]},
    { title: "Certifications", skills: [
      { name: "BCLS" }, { name: "PALS" }, { name: "ACLS" }, { name: "CCRN" },
    ]},
    { title: "Prescriptive & Documentation", skills: [
      { name: "Prescriptive authority within scope" }, { name: "EMR documentation and coding" }, { name: "Care coordination with supervising physician" },
    ]},
    { title: "Specialty Exposure", skills: [
      { name: "Emergency medicine" }, { name: "Primary care" }, { name: "Surgical specialties" }, { name: "Hospitalist medicine" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Pre-school (3-6 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Young Adult (18-30 years)" }, { name: "Mature Adult (30-60 years)" }, { name: "Elderly (>60 years)" },
    ]},
  ]},
];
