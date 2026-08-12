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
    { title: "Respiratory", skills: [
      { name: "Ventilator Management" }, { name: "High Frequency Ventilation" }, { name: "CPAP/Nasal Cannula" }, { name: "Surfactant Administration" }, { name: "Intubation Assistance" }, { name: "Chest Tube Management" },
    ]},
    { title: "Cardiovascular", skills: [
      { name: "Cardiac Monitoring" }, { name: "Umbilical Lines (UAC/UVC)" }, { name: "PICC Line Care" }, { name: "Blood Pressure Monitoring" },
    ]},
    { title: "Feeding/Nutrition", skills: [
      { name: "Gavage Feeding" }, { name: "Breast Milk Handling" }, { name: "TPN Administration" }, { name: "Oral Feeding Assessment" },
    ]},
    { title: "Thermoregulation", skills: [
      { name: "Isolette Care" }, { name: "Radiant Warmer" }, { name: "Kangaroo Care" }, { name: "Temperature Monitoring" },
    ]},
    { title: "Medications", skills: [
      { name: "IV Medication Administration" }, { name: "Phototherapy" }, { name: "Caffeine/Theophylline" }, { name: "Prostaglandin" }, { name: "Exchange Transfusion" },
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
      { name: "Oxytocin" }, { name: "Magnesium Sulfate" }, { name: "Terbutaline" }, { name: "Misoprostol" }, { name: "RhoGAM" },
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
