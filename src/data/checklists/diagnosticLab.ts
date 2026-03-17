import { ChecklistSpec } from "../checklistData";

export const diagnosticLabChecklists: ChecklistSpec[] = [
  { slug: "medical-laboratory", title: "Medical Laboratory Skills Checklist", shortTitle: "Medical Laboratory", icon: "🧪", group: "Diagnostic & Lab", categories: [
    { title: "Medical Laboratory", skills: [
      { name: "Blood bank" }, { name: "Chemistry" }, { name: "Hematology" }, { name: "Microbiology" }, { name: "Serology" },
    ]},
    { title: "Procedures", skills: [
      { name: "Venipuncture" }, { name: "Capillary puncture" }, { name: "Blood cultures" }, { name: "Arterial blood gases" }, { name: "Specimen processing" }, { name: "Quality control" },
    ]},
    { title: "Hematology", skills: [
      { name: "CBC" }, { name: "Differential" }, { name: "Reticulocyte count" }, { name: "ESR" }, { name: "Coagulation studies (PT/INR, PTT)" }, { name: "D-Dimer" },
    ]},
    { title: "Chemistry", skills: [
      { name: "Basic Metabolic Panel" }, { name: "Comprehensive Metabolic Panel" }, { name: "Liver Function Tests" }, { name: "Cardiac Enzymes" }, { name: "Thyroid Function Tests" }, { name: "Urinalysis" },
    ]},
    { title: "Blood Bank", skills: [
      { name: "ABO/Rh Typing" }, { name: "Antibody Screen" }, { name: "Crossmatch" }, { name: "Component Preparation" }, { name: "Transfusion Reactions" },
    ]},
    { title: "Microbiology", skills: [
      { name: "Culture and Sensitivity" }, { name: "Gram Stain" }, { name: "AFB Cultures" }, { name: "Parasitology" }, { name: "Mycology" },
    ]},
  ]},

  { slug: "medical-technologist", title: "Medical Technologist Skills Checklist", shortTitle: "Medical Technologist", icon: "🔬", group: "Diagnostic & Lab", categories: [
    { title: "Blood Bank", skills: [
      { name: "Component Preparation" }, { name: "Special Blood Typing" }, { name: "Procedures" }, { name: "Patient Identification" }, { name: "Emergency Release" }, { name: "Freezing Blood" },
    ]},
    { title: "Chemistry", skills: [
      { name: "Routine Chemistry" }, { name: "Special Chemistry" }, { name: "Immunoassay" }, { name: "Electrophoresis" }, { name: "Blood Gas Analysis" },
    ]},
    { title: "Hematology", skills: [
      { name: "CBC/Differential" }, { name: "Manual Differential" }, { name: "Body Fluid Analysis" }, { name: "Coagulation" }, { name: "Flow Cytometry" },
    ]},
    { title: "Microbiology", skills: [
      { name: "Culture Setup" }, { name: "Identification" }, { name: "Susceptibility Testing" }, { name: "Mycobacteriology" }, { name: "Parasitology" }, { name: "Virology" },
    ]},
    { title: "Urinalysis", skills: [
      { name: "Physical Examination" }, { name: "Chemical Analysis" }, { name: "Microscopic Examination" }, { name: "Pregnancy Testing" },
    ]},
  ]},

  { slug: "radiology-tech", title: "Radiology Technologist Skills Checklist", shortTitle: "Radiology Tech", icon: "☢️", group: "Diagnostic & Lab", categories: [
    { title: "Setting", skills: [
      { name: "Adult Inpatient" }, { name: "ER/Trauma" }, { name: "Adult Outpatient" }, { name: "Pediatric Inpatient" }, { name: "Pediatric Outpatient" },
    ]},
    { title: "Procedures", skills: [
      { name: "Chest X-ray" }, { name: "Abdominal X-ray" }, { name: "Extremity X-ray" }, { name: "Spine X-ray" }, { name: "Skull X-ray" }, { name: "Portable/Mobile X-ray" }, { name: "Fluoroscopy" }, { name: "OR/C-Arm" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient Positioning" }, { name: "Contrast Administration" }, { name: "IV Access" }, { name: "Radiation Safety" }, { name: "Patient Assessment" },
    ]},
    { title: "Equipment", skills: [
      { name: "CR (Computed Radiography)" }, { name: "DR (Digital Radiography)" }, { name: "PACS" }, { name: "Quality Control" },
    ]},
  ]},

  { slug: "ct-tech", title: "CT Technologist Skills Checklist", shortTitle: "CT Tech", icon: "🖥️", group: "Diagnostic & Lab", categories: [
    { title: "CT Technologist Skills", skills: [
      { name: "Abdominal" }, { name: "Pancreas" }, { name: "Liver" }, { name: "Pelvis" }, { name: "Temporomandibular" }, { name: "Adrenal" }, { name: "Head/Brain" }, { name: "Chest" }, { name: "Spine (Cervical, Thoracic, Lumbar)" }, { name: "Extremities" }, { name: "CT Angiography" }, { name: "3D Reconstruction" },
    ]},
    { title: "Contrast", skills: [
      { name: "IV Contrast Administration" }, { name: "Oral Contrast" }, { name: "Power Injector" }, { name: "Contrast Reaction Management" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient Positioning" }, { name: "IV Access" }, { name: "Patient Assessment" }, { name: "Radiation Safety" },
    ]},
  ]},

  { slug: "interventional-radiology", title: "Interventional Radiology Skills Checklist", shortTitle: "Interventional Radiology", icon: "📡", group: "Diagnostic & Lab", categories: [
    { title: "General", skills: [
      { name: "Admit patient to pre-procedure holding" }, { name: "Complete assessments, obtain family history & risk factors" }, { name: "Start peripheral IV" }, { name: "Complete pre-procedure checklist" }, { name: "Transport pre-procedure patient to the Lab" },
    ]},
    { title: "Vascular Procedures", skills: [
      { name: "Angiography" }, { name: "Angioplasty/Stent" }, { name: "Embolization" }, { name: "IVC Filter Placement" }, { name: "Thrombolysis" }, { name: "PICC Line Placement" }, { name: "Port Placement" },
    ]},
    { title: "Non-Vascular Procedures", skills: [
      { name: "Biopsy (CT/US guided)" }, { name: "Drainage/Abscess" }, { name: "Nephrostomy" }, { name: "Biliary Drainage" }, { name: "Gastrostomy/Jejunostomy" },
    ]},
    { title: "Conscious Sedation", skills: [
      { name: "Fentanyl" }, { name: "Versed" }, { name: "Propofol" }, { name: "Reversal Agents" }, { name: "Patient Monitoring" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "cardiac-echo", title: "Cardiac Echocardiography Skills Checklist", shortTitle: "Cardiac Echo", icon: "💗", group: "Diagnostic & Lab", categories: [
    { title: "Work Settings", skills: [
      { name: "Adult Acute Care" }, { name: "ED/ICU" }, { name: "Adult Outpatient" }, { name: "Pediatric Acute Care" }, { name: "Pediatric Outpatient" },
    ]},
    { title: "Adult Echo", skills: [
      { name: "Transthoracic Echo (TTE)" }, { name: "Transesophageal Echo (TEE)" }, { name: "Stress Echo" }, { name: "Dobutamine Stress Echo" }, { name: "Contrast Echo" },
    ]},
    { title: "Measurements & Calculations", skills: [
      { name: "M-Mode" }, { name: "2D Imaging" }, { name: "Doppler (PW, CW, Color)" }, { name: "Tissue Doppler" }, { name: "Strain Imaging" },
    ]},
    { title: "Pathology Recognition", skills: [
      { name: "Valvular Disease" }, { name: "Cardiomyopathy" }, { name: "Pericardial Disease" }, { name: "Congenital Heart Disease" }, { name: "Aortic Disease" },
    ]},
  ]},

  { slug: "cardiac-echocardiography", title: "Cardiac Echocardiography Skills Checklist (Advanced)", shortTitle: "Cardiac Echocardiography", icon: "🫀", group: "Diagnostic & Lab", categories: [
    { title: "Ultrasound-Echocardiography", skills: [
      { name: "Adult Echocardiography" }, { name: "Pediatric Echocardiography" }, { name: "Fetal Echocardiography" }, { name: "Trauma Echocardiography" }, { name: "Stress Echocardiography" },
    ]},
    { title: "Advanced Imaging", skills: [
      { name: "3D Echocardiography" }, { name: "Strain/Speckle Tracking" }, { name: "Contrast Echocardiography" }, { name: "Intracardiac Echo" },
    ]},
    { title: "Procedures", skills: [
      { name: "Transesophageal Echo (TEE)" }, { name: "Intraoperative TEE" }, { name: "Stress Testing (Exercise)" }, { name: "Stress Testing (Pharmacological)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (birth-30 days)" }, { name: "Infant (1 month-1 year)" }, { name: "Pediatric (1-18 years)" }, { name: "Adult (18-64 years)" }, { name: "Geriatric (65+ years)" },
    ]},
  ]},

  { slug: "cath-lab", title: "Cath Lab / Interventional Radiology Skills Checklist", shortTitle: "Cath Lab", icon: "🏥", group: "Diagnostic & Lab", categories: [
    { title: "Work Setting", skills: [
      { name: "Procedural Cath Lab" }, { name: "Interventional Cath Lab" }, { name: "EP Lab" }, { name: "Interventional Radiology" }, { name: "Pre/Post Procedural Setting" },
    ]},
    { title: "Cardiac Catheterization", skills: [
      { name: "Diagnostic Catheterization" }, { name: "Coronary Angiography" }, { name: "PCI/Angioplasty/Stent" }, { name: "Right Heart Catheterization" }, { name: "Hemodynamic Monitoring" },
    ]},
    { title: "Electrophysiology", skills: [
      { name: "EP Studies" }, { name: "Ablation" }, { name: "Pacemaker Implant" }, { name: "ICD Implant" }, { name: "Lead Extraction" },
    ]},
    { title: "Vascular", skills: [
      { name: "Peripheral Angiography" }, { name: "Peripheral Intervention" }, { name: "Carotid Stenting" }, { name: "Sheath Removal" }, { name: "Vascular Closure Devices" },
    ]},
    { title: "Medications", skills: [
      { name: "Conscious Sedation" }, { name: "Anticoagulants (Heparin, Bivalirudin)" }, { name: "Antiplatelets" }, { name: "Vasodilators" }, { name: "Emergency Medications" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "phlebotomy", title: "Phlebotomy Competency Skills Checklist", shortTitle: "Phlebotomy", icon: "💉", group: "Diagnostic & Lab", categories: [
    { title: "Preparation", skills: [
      { name: "Introduces self to patient and explains procedure" }, { name: "Identifies patient with two unique identifiers" }, { name: "Checks testing requirements (fasting)" }, { name: "Prepares supplies and tube selection" },
    ]},
    { title: "Venipuncture", skills: [
      { name: "Tourniquet application" }, { name: "Vein selection" }, { name: "Site preparation" }, { name: "Needle insertion technique" }, { name: "Vacutainer system" }, { name: "Butterfly needle" }, { name: "Syringe draw" },
    ]},
    { title: "Capillary Puncture", skills: [
      { name: "Finger stick" }, { name: "Heel stick (infant)" }, { name: "Micro-collection devices" },
    ]},
    { title: "Post-Collection", skills: [
      { name: "Specimen labeling" }, { name: "Order of draw" }, { name: "Specimen handling/transport" }, { name: "Needle disposal" }, { name: "Hemostasis/bandaging" }, { name: "Documentation" },
    ]},
    { title: "Safety", skills: [
      { name: "Standard precautions" }, { name: "Sharps disposal" }, { name: "Infection control" }, { name: "Adverse reactions management" },
    ]},
  ]},
];
