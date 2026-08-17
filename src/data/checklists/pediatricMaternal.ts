import { ChecklistSpec } from "../checklistData";

export const pediatricMaternalChecklists: ChecklistSpec[] = [
  { slug: "pediatric", title: "Registered Nurse – Pediatric Skills Checklist", shortTitle: "RN – Pediatric", icon: "👶", group: "Pediatric & Maternal", categories: [
    { title: "Work Settings", skills: [
      { name: "Pediatric MedSurg" }, { name: "Pediatric Step Down/Telemetry" }, { name: "Pediatric Oncology" }, { name: "Pediatric Ortho" }, { name: "Pediatric Neuro" },
    ]},
    { title: "Cardiovascular", skills: [
      { name: "Cardiac Anomalies" }, { name: "CHF/Pulmonary Edema" }, { name: "Cardiogenic Shock" }, { name: "Cardioversion" }, { name: "Heart Sounds" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Asthma" }, { name: "Bronchiolitis" }, { name: "Croup" }, { name: "Pneumonia" }, { name: "Respiratory Distress" }, { name: "Trach Management" }, { name: "Ventilator Care" }, { name: "Chest Tube Management" },
    ]},
    { title: "Neurological", skills: [
      { name: "Seizure Disorders" }, { name: "Meningitis" }, { name: "Head Injury" }, { name: "Hydrocephalus/VP Shunt" },
    ]},
    { title: "GI/GU", skills: [
      { name: "Dehydration" }, { name: "Gastroenteritis" }, { name: "Pyloric Stenosis" }, { name: "Appendicitis" }, { name: "Intussusception" },
    ]},
    { title: "Medications", skills: [
      { name: "Weight-based dosing" }, { name: "IV medication administration" }, { name: "Oral medication administration" }, { name: "Inhaled medications" }, { name: "Emergency medications" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (birth-30 days)" }, { name: "Infant (1 month-1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Preschooler (3-5 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (13-18 years)" },
    ]},
  ]},

  { slug: "pediatric-er", title: "Registered Nurse – Pediatric ER Skills Checklist", shortTitle: "RN – Pediatric ER", icon: "🧒", group: "Pediatric & Maternal", categories: [
    { title: "Cardiovascular", skills: [
      { name: "Cardiac Anomalies" }, { name: "CHF/Pulmonary Edema" }, { name: "Cardiogenic Shock" }, { name: "Cardioversion" }, { name: "Heart Sounds" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Asthma" }, { name: "Bronchiolitis" }, { name: "Croup" }, { name: "Pneumonia" }, { name: "Respiratory Distress" }, { name: "Foreign Body Aspiration" }, { name: "Epiglottitis" },
    ]},
    { title: "Trauma", skills: [
      { name: "Head Injury" }, { name: "Fractures" }, { name: "Burns" }, { name: "Lacerations" }, { name: "Abuse Assessment" }, { name: "Near Drowning" },
    ]},
    { title: "Neurological", skills: [
      { name: "Seizure Disorders" }, { name: "Meningitis" }, { name: "Febrile Seizures" },
    ]},
    { title: "Medications", skills: [
      { name: "Weight-based dosing" }, { name: "IV medication administration" }, { name: "Emergency medications" }, { name: "Conscious sedation" },
    ]},
    { title: "Triage", skills: [
      { name: "Pediatric Triage (ESI)" }, { name: "Telephone Triage" }, { name: "Disaster Triage" },
    ]},
  ]},

  { slug: "picu", title: "Registered Nurse – PICU Skills Checklist", shortTitle: "RN – PICU", icon: "🍼", group: "Pediatric & Maternal", categories: [
    { title: "Work Settings", skills: [
      { name: "PICU" }, { name: "Pediatric CVICU" }, { name: "Pediatric Step Down" }, { name: "Pediatric PACU" },
    ]},
    { title: "Cardiovascular", skills: [
      { name: "Congenital Heart Disease/Repair" }, { name: "CHF/Pulmonary Edema" }, { name: "Cardiogenic Shock" }, { name: "Heart Transplant" }, { name: "Cardiac Monitoring" }, { name: "Pacemaker Management" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Ventilator Management" }, { name: "High Frequency Ventilation" }, { name: "ECMO" }, { name: "Chest Tube Management" }, { name: "Trach Management" }, { name: "Intubation/Extubation" },
    ]},
    { title: "Neurological", skills: [
      { name: "ICP Monitoring" }, { name: "Post Craniotomy" }, { name: "Seizure Management" }, { name: "Glasgow Coma Scale" }, { name: "Brain Death Protocol" },
    ]},
    { title: "Medications", skills: [
      { name: "Vasoactive Drips" }, { name: "Emergency Medications" }, { name: "Sedation Management" }, { name: "Paralytic Agents" }, { name: "Weight-based Dosing" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (birth-30 days)" }, { name: "Infant (1 month-1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Preschooler (3-5 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (13-18 years)" },
    ]},
  ]},

  { slug: "nicu", title: "Registered Nurse – NICU Skills Checklist", shortTitle: "RN – NICU", icon: "👣", group: "Pediatric & Maternal", categories: [
    { title: "Patient Types", skills: [
      { name: "Neonates < 28 Weeks" }, { name: "Neonates 29-34 Weeks" }, { name: "Neonates > 34 Weeks" },
    ]},
    { title: "Work Settings", skills: [
      { name: "Level II NICU" }, { name: "Level III NICU" }, { name: "Level IV NICU" },
    ]},
    { title: "Cardiovascular", skills: [
      { name: "Cardiac Monitoring" }, { name: "Umbilical Lines (UAC/UVC)" }, { name: "PICC Line Care" }, { name: "Blood Pressure Monitoring" }, { name: "Auscultation (rate, rhythm, volume)" }, { name: "Heart sounds/murmurs" }, { name: "Invasive/non-invasive blood pressure monitoring" }, { name: "Perfusion assessment" }, { name: "EKG interpretation" }, { name: "Defibrillation/cardioversion" }, { name: "Central venous pressure monitoring" }, { name: "Care of the neonate post interventional cardiac cath/cardiac surgery" }, { name: "Congenital heart disease/defects" }, { name: "Hemodynamic instability" }, { name: "Cardiac arrest/hypovolemic shock" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Ventilator Management" }, { name: "High Frequency Ventilation" }, { name: "CPAP/Nasal Cannula" }, { name: "Surfactant Administration" }, { name: "Intubation Assistance" }, { name: "Chest Tube Management" }, { name: "Breath sounds and work of breathing assessment" }, { name: "Endotracheal tube stabilization and suctioning" }, { name: "Nasal airway/suctioning and bulb syringe" }, { name: "Apnea monitoring" }, { name: "Weaning and extubation" }, { name: "Tracheostomy care/suctioning" }, { name: "Oxyhood and trach collar" }, { name: "Care of the neonate with BPD, RDS, meconium aspiration, or respiratory failure" }, { name: "Interpretation of chest x-rays and blood gases" },
    ]},
    { title: "Neurological", skills: [
      { name: "Neurological status assessment" }, { name: "Intracranial pressure monitoring" }, { name: "Care of the neonate with seizures" }, { name: "Externalized VP shunt/reservoirs" }, { name: "Increased intracranial pressure" }, { name: "Brain death/organ procurement" }, { name: "Anticonvulsant medication administration" },
    ]},
    { title: "Gastrointestinal", skills: [
      { name: "Abdominal girth and bowel sounds assessment" }, { name: "Suck/swallow and palate assessment" }, { name: "Care of the neonate with tracheoesophageal fistula (TEF)" }, { name: "Gastroschisis/omphalocele" }, { name: "Necrotizing enterocolitis (NEC)" }, { name: "Post-abdominal surgery care" }, { name: "GI bleeding and reflux precautions" }, { name: "Cleft palate care" }, { name: "Colostomy/ileostomy care" }, { name: "Inguinal hernia care" },
    ]},
    { title: "Feeding/Nutrition", skills: [
      { name: "Gavage Feeding" }, { name: "Breast Milk Handling" }, { name: "TPN Administration" }, { name: "Oral Feeding Assessment" }, { name: "Care of gastrostomy tube" }, { name: "Placement of intestinal tubes" }, { name: "Jejunal/gastro feeding" }, { name: "Assist with breast feeding and bottle feeding" }, { name: "Hospital grade electric breast pump" },
    ]},
    { title: "Endocrine/Metabolic & Renal", skills: [
      { name: "Fluid & electrolyte balance" }, { name: "Finnegan scoring" }, { name: "Hypoglycemia/hyperglycemia management" }, { name: "IDDM (infant of a diabetic mother)" }, { name: "Hypo/hyperkalemia and hypo/hypernatremia" }, { name: "Acute renal failure" }, { name: "DIC (disseminated intravascular coagulation)" }, { name: "Malformations of GU tract/kidney" }, { name: "Peritoneal dialysis" }, { name: "Phototherapy for jaundice" }, { name: "Post circumcision care" }, { name: "Collection and interpretation of urine specimens" }, { name: "Bilirubin monitoring" },
    ]},
    { title: "Infectious Disease & Immunizations", skills: [
      { name: "Standard (universal) precautions and isolation techniques" }, { name: "Collect culture specimens" }, { name: "Interpretation of maternal lab results and culture reports" }, { name: "Care of the neonate with HIV-positive mother" }, { name: "Neonatal sepsis" }, { name: "Hepatitis surface antigen+ mother" }, { name: "RespiGam/Synagis prophylaxis" }, { name: "HIB, HBV, DPT, and polio immunizations" }, { name: "HBIG administration" }, { name: "Assist with lumbar puncture" },
    ]},
    { title: "Phlebotomy, IV Therapy & Central Lines", skills: [
      { name: "Starting IVs and managing IV therapy" }, { name: "Drawing blood from central line" }, { name: "Hyperalimentation/TPN and intralipid administration" }, { name: "Administration of blood/blood products (packed cells, plasma, cryoprecipitate)" }, { name: "Umbilical venous and arterial line care" }, { name: "PICC, Broviac, Hickman, and Portacath care" }, { name: "Central line/catheter dressing changes" }, { name: "Heparin lock and angiocath use" },
    ]},
    { title: "Thermoregulation", skills: [
      { name: "Isolette Care" }, { name: "Radiant Warmer" }, { name: "Kangaroo Care" }, { name: "Temperature Monitoring (axillary, rectal, skin)" }, { name: "Weaning to open crib/bassinet" },
    ]},
    { title: "Pain Management", skills: [
      { name: "Neonatal pain level assessment" }, { name: "Morphine administration and monitoring" },
    ]},
    { title: "Medications", skills: [
      { name: "IV Medication Administration" }, { name: "Phototherapy" }, { name: "Caffeine/Theophylline" }, { name: "Prostaglandin" }, { name: "Exchange Transfusion" }, { name: "Epinephrine, dopamine, and dobutamine administration" }, { name: "Sodium bicarbonate administration" }, { name: "Aminophylline administration" }, { name: "Emergency and neonatal drug action/reaction recognition" }, { name: "Neonatal dosage calculation" },
    ]},
    { title: "Assessment & Regulatory Compliance", skills: [
      { name: "Apgar scoring" }, { name: "Gestational age assessment (Dubowitz/Ballard)" }, { name: "Eye exam (rule out retinopathy)" }, { name: "Screen for hearing loss" }, { name: "Maternal history review" }, { name: "Bereavement/postmortem care" }, { name: "Preparation for transport/transfer" }, { name: "Adherence to Joint Commission Do Not Use abbreviations" },
    ]},
  ]},

  { slug: "labor-delivery", title: "Registered Nurse – Labor & Delivery Skills Checklist", shortTitle: "RN – Labor & Delivery", icon: "🤰", group: "Pediatric & Maternal", categories: [
    { title: "Work Settings", skills: [
      { name: "L and D" }, { name: "LDRP" }, { name: "Antepartum" }, { name: "Mother Baby" },
    ]},
    { title: "Antepartum", skills: [
      { name: "Diabetes" }, { name: "Fetal Demise" }, { name: "Gestational Hypertension" }, { name: "Preeclampsia/Eclampsia" }, { name: "Preterm Labor" }, { name: "Placenta Previa" }, { name: "Placental Abruption" },
    ]},
    { title: "Intrapartum", skills: [
      { name: "Fetal Monitoring" }, { name: "Internal Monitoring" }, { name: "Amniotomy" }, { name: "Induction/Augmentation" }, { name: "Epidural Management" }, { name: "Vaginal Delivery" }, { name: "C-Section" }, { name: "Vacuum/Forceps Delivery" },
    ]},
    { title: "Postpartum", skills: [
      { name: "Fundal Assessment" }, { name: "Lochia Assessment" }, { name: "Breastfeeding Support" }, { name: "Postpartum Hemorrhage" }, { name: "Newborn Assessment" },
    ]},
    { title: "Newborn Care", skills: [
      { name: "APGAR Scoring" }, { name: "Newborn Resuscitation" }, { name: "Thermoregulation" }, { name: "Glucose Monitoring" }, { name: "Circumcision Care" },
    ]},
    { title: "Medications", skills: [
      { name: "Oxytocin" }, { name: "Magnesium Sulfate" }, { name: "Terbutaline" }, { name: "Misoprostol" }, { name: "RhoGAM (Evaluate Indication/Effectiveness)" }, { name: "Prostin Gel (Preterm Labor Management)" }, { name: "Opioid Conversion Chart/Controlled Substance Procedures" },
    ]},
    { title: "Maternal Risk Assessment & Diagnostics", skills: [
      { name: "Perform Initial Risk Assessment" }, { name: "Recognize Signs of Drug/Alcohol Dependence" }, { name: "Implement High Fall Risk Interventions" }, { name: "Assess and Care for Common Acute Illnesses (e.g., Influenza)" }, { name: "Patient/Family Education" }, { name: "Suicide Risk Screening" }, { name: "Perform/Evaluate Electrocardiogram" }, { name: "Communicate Results of Ultrasound Studies" }, { name: "Palpating for Uterine Contractions" },
    ]},
    { title: "Labor & Delivery Procedures & Equipment", skills: [
      { name: "Insertion of Peripheral IV Catheter" }, { name: "Application of Intrauterine Pressure Catheter" }, { name: "Operate/Troubleshoot Infant Warmers" }, { name: "Basic Life Support/Manual Ventilation" }, { name: "Blood Product Administration Protocol" }, { name: "Identify Patient's Current Stage of Labor" }, { name: "Instrument and Towel Counts" }, { name: "Electronic Fetal Monitoring Device" }, { name: "HIPAA Adherence in L&D Setting" }, { name: "Cord Blood Collection, Handling, and Labeling" },
    ]},
    { title: "Obstetric Emergencies", skills: [
      { name: "OB Hemorrhage Protocol" }, { name: "Recognize Prolapsed Cord" }, { name: "Recognize Placenta Previa" }, { name: "Perform Emergency Delivery Without Physician Present" },
    ]},
    { title: "Professional & Ethical Practice", skills: [
      { name: "Adherence to Emergency Response Plans (e.g., Inclement Weather)" }, { name: "Data Collection for Performance Improvement Program" }, { name: "Follow Supervision and Delegation Guidelines" }, { name: "Facility Procedures for Specialty Circumstances (e.g., Adoption)" },
    ]},
  ]},

  { slug: "ob-labor-delivery", title: "Registered Nurse – OB Labor & Delivery Skills Checklist", shortTitle: "RN – OB Labor & Delivery", icon: "🫄", group: "Pediatric & Maternal", categories: [
    { title: "Patient Rights", skills: [
      { name: "Communicates and obtains information respecting privacy and confidentiality" }, { name: "Involves patient and family in care decisions including Advanced Directives" }, { name: "Complies with Organ Donation policy" }, { name: "Meets communication needs including interpreter services" },
    ]},
    { title: "Antepartum Care", skills: [
      { name: "Gestational Diabetes" }, { name: "Preeclampsia/Eclampsia" }, { name: "Preterm Labor" }, { name: "Placenta Previa" }, { name: "Fetal Monitoring" },
    ]},
    { title: "Labor & Delivery", skills: [
      { name: "Vaginal Delivery" }, { name: "C-Section" }, { name: "Induction/Augmentation" }, { name: "Epidural Management" }, { name: "Fetal Heart Rate Interpretation" }, { name: "Emergency Delivery" },
    ]},
    { title: "Postpartum", skills: [
      { name: "Fundal Assessment" }, { name: "Postpartum Hemorrhage" }, { name: "Breastfeeding Support" }, { name: "Newborn Assessment" }, { name: "APGAR Scoring" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" },
    ]},
  ]},

  { slug: "ob-tech", title: "OB Technician Skills Checklist", shortTitle: "OB Tech", icon: "🩰", group: "Pediatric & Maternal", categories: [
    { title: "Labor & Delivery Support", skills: [
      { name: "Room setup and equipment preparation" }, { name: "Delivery table/instrument setup" }, { name: "Assisting with vaginal delivery" }, { name: "Assisting with C-section" }, { name: "Sterile technique and gowning" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Vital signs monitoring" }, { name: "External fetal monitor application" }, { name: "Patient positioning and comfort measures" }, { name: "Postpartum patient assistance" },
    ]},
    { title: "Newborn Support", skills: [
      { name: "Newborn warmer setup" }, { name: "Assisting with initial newborn care" }, { name: "Specimen labeling and transport" },
    ]},
    { title: "Equipment & Supplies", skills: [
      { name: "Sterilization of instruments" }, { name: "Supply stocking and inventory" }, { name: "Emergency cart checks" },
    ]},
  ]},

  { slug: "post-partum", title: "Registered Nurse – Post Partum Skills Checklist", shortTitle: "RN – Post Partum", icon: "🤱", group: "Pediatric & Maternal", categories: [
    { title: "Work Settings", skills: [
      { name: "Couplet Care" }, { name: "Antepartum" }, { name: "Postpartum" }, { name: "Newborn Nursery" }, { name: "LDRP" },
    ]},
    { title: "Post Partum", skills: [
      { name: "Vaginal Delivery Care" }, { name: "C-Section Care" }, { name: "Fundal Assessment" }, { name: "Lochia Assessment" }, { name: "Perineal Assessment" }, { name: "Postpartum Hemorrhage" }, { name: "Magnesium Sulfate Administration" },
    ]},
    { title: "Newborn Care", skills: [
      { name: "Newborn Assessment" }, { name: "APGAR Scoring" }, { name: "Thermoregulation" }, { name: "Glucose Monitoring" }, { name: "Jaundice Assessment" }, { name: "Phototherapy" }, { name: "Circumcision Care" },
    ]},
    { title: "Breastfeeding", skills: [
      { name: "Latch Assessment" }, { name: "Breast Pump Use" }, { name: "Milk Storage Education" }, { name: "Formula Preparation" }, { name: "Nipple Care" },
    ]},
    { title: "Discharge", skills: [
      { name: "Discharge Teaching" }, { name: "Car Seat Safety" }, { name: "Follow-up Appointments" }, { name: "Newborn Screening" }, { name: "Birth Certificate" },
    ]},
  ]},
];
