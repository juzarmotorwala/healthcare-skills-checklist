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
      { name: "Gastrostomy Tubes" }, { name: "Gastrojejunostomy Tubes" }, { name: "Jejunostomy Tubes" }, { name: "Nephrostomy Tubes" }, { name: "Nephroureteral Stents" }, { name: "Ureteral Stents" }, { name: "Suprapubic Catheter Placement" }, { name: "Biliary Tubes" }, { name: "Cholecystostomy Tubes" }, { name: "Abscess Drains" }, { name: "Core Biopsies" }, { name: "Fine Needle Aspiration Biopsies" }, { name: "Bone Biopsies" }, { name: "Lymphangiography" }, { name: "Percutaneous RF Ablations" }, { name: "Percutaneous Cryo Ablations" }, { name: "Kyphoplasty" },
    ]},
    { title: "Conscious Sedation", skills: [
      { name: "Fentanyl" }, { name: "Versed" }, { name: "Propofol" }, { name: "Reversal Agents" }, { name: "Patient Monitoring" },
    ]},
    { title: "Transarterial Procedures", skills: [
      { name: "Balloon Angioplasty" }, { name: "Chemoembolization of a Tumor" }, { name: "GI Bleed Embolization" }, { name: "Splenic Artery Embolization" }, { name: "Arterial Aspiration Thrombectomy" },
    ]},
    { title: "Venous Procedures", skills: [
      { name: "Non-Tunneled CVC" }, { name: "Tunneled CVC" }, { name: "PICC Line Placement" }, { name: "Port-a-Cath Placement" }, { name: "Port-a-Cath Removal" }, { name: "IVC Filter Placement" }, { name: "IVC Filter Removal" }, { name: "DVT Thrombectomy" }, { name: "DVT Thrombolysis" }, { name: "PE Thrombectomy" }, { name: "PE Thrombolysis" }, { name: "Dialysis Fistula Declot" }, { name: "Dialysis Fistula Angioplasty" }, { name: "Transjugular Liver Biopsy (TJLB)" }, { name: "Transvenous Intrahepatic Portosystemic Shunt (TIPS)" }, { name: "Portal Vein Embolization" }, { name: "Balloon Occluded Retrograde Transvenous Obliteration (BRTO)" }, { name: "Arteriovenous Malformation Sclerotherapy" },
    ]},
    { title: "Neurovascular Procedures", skills: [
      { name: "Neurovascular Embolization" }, { name: "Neurovascular Thrombectomy" }, { name: "Neurovascular Stenting" }, { name: "Neurovascular Balloon Angioplasty" }, { name: "Carotid Stenting" },
    ]},
    { title: "Special Equipment & Supplies", skills: [
      { name: "IVUS (Intravascular Ultrasound)" }, { name: "ICE (Intracardiac Echocardiography)" }, { name: "Pushable Coils (e.g., Nester, Hilal)" }, { name: "Semi-Detachable Coils (e.g., Interlocks)" }, { name: "Fully Detachable Coils (e.g., Ruby, Azur)" }, { name: "Vascular Plugs (e.g., Amplatzer, MVP)" }, { name: "Embolic Beads (e.g., Embosphers, Hydropearls)" }, { name: "Obsidio Embolic" }, { name: "Angiojet Thrombectomy Device" }, { name: "Penumbra Aspiration Device" }, { name: "Inari Aspiration Device" }, { name: "EKOS Device" }, { name: "Shockwave Device" }, { name: "Spyglass Device" }, { name: "Galil/Boston Scientific Cryo Ablation Device" }, { name: "Neuwave RF Ablation Device" },
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

  { slug: "cardiac-cath-tech", title: "Cardiac Cath Lab Technologist Skills Checklist", shortTitle: "Cardiac Cath Tech", icon: "🫀", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Diagnostic cardiac catheterization" }, { name: "PCI/angioplasty assist" }, { name: "Stent placement assist" }, { name: "Electrophysiology study assist" }, { name: "Pacemaker/ICD implant assist" }, { name: "Peripheral vascular intervention assist" },
    ]},
    { title: "Equipment & Technique", skills: [
      { name: "Hemodynamic monitoring" }, { name: "Fluoroscopy operation" }, { name: "Sterile scrub technique" }, { name: "Contrast media administration" }, { name: "Intra-aortic balloon pump setup" }, { name: "Closure device application" },
    ]},
    { title: "Patient Care & Safety", skills: [
      { name: "Pre-procedure patient prep" }, { name: "Conscious sedation monitoring" }, { name: "Radiation safety" }, { name: "Emergency response (code, arrhythmia)" }, { name: "Post-procedure site care" },
    ]},
  ]},

  { slug: "cardiac-monitor-tech", title: "Cardiac Monitor Technician Skills Checklist", shortTitle: "Cardiac Monitor Tech", icon: "📟", group: "Diagnostic & Lab", categories: [
    { title: "Rhythm Recognition", skills: [
      { name: "Normal sinus rhythm identification" }, { name: "Atrial arrhythmias" }, { name: "Ventricular arrhythmias" }, { name: "Heart blocks" }, { name: "Life-threatening arrhythmia recognition" }, { name: "12-lead EKG interpretation basics" },
    ]},
    { title: "Monitoring Systems", skills: [
      { name: "Central telemetry station operation" }, { name: "Alarm management and prioritization" }, { name: "Lead placement and troubleshooting" }, { name: "Documentation of rhythm strips" },
    ]},
    { title: "Communication & Escalation", skills: [
      { name: "Notifying RN/physician of critical changes" }, { name: "Code blue notification protocol" }, { name: "Shift handoff reporting" },
    ]},
  ]},

  { slug: "echo-vascular-tech", title: "Echocardiography / Vascular Ultrasound Technologist Skills Checklist", shortTitle: "Echo/Vascular Tech", icon: "🌊", group: "Diagnostic & Lab", categories: [
    { title: "Echocardiography", skills: [
      { name: "Transthoracic echocardiogram (TTE)" }, { name: "Transesophageal echocardiogram (TEE) assist" }, { name: "Stress echocardiography" }, { name: "Doppler and color flow imaging" }, { name: "Pediatric echocardiography" },
    ]},
    { title: "Vascular Studies", skills: [
      { name: "Carotid duplex" }, { name: "Venous duplex/DVT studies" }, { name: "Arterial duplex" }, { name: "Ankle-brachial index (ABI)" }, { name: "Renal and abdominal vascular studies" },
    ]},
    { title: "Equipment & Technique", skills: [
      { name: "Ultrasound machine operation" }, { name: "Image optimization" }, { name: "Measurement and calculation accuracy" }, { name: "Report generation" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient positioning and comfort" }, { name: "Pediatric and geriatric considerations" }, { name: "Infection control between studies" },
    ]},
  ]},

  { slug: "eeg-tech", title: "EEG Technologist Skills Checklist", shortTitle: "EEG Tech", icon: "🧠", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Routine EEG" }, { name: "Ambulatory/long-term EEG monitoring" }, { name: "Video EEG monitoring" }, { name: "Evoked potential studies" }, { name: "Intraoperative neuromonitoring assist" },
    ]},
    { title: "Technical Skills", skills: [
      { name: "Electrode placement (10-20 system)" }, { name: "Artifact recognition and troubleshooting" }, { name: "Equipment calibration" }, { name: "Seizure activation procedures" },
    ]},
    { title: "Patient Care & Safety", skills: [
      { name: "Pediatric and adult patient prep" }, { name: "Seizure precautions" }, { name: "Documentation of clinical events" },
    ]},
  ]},

  { slug: "ekg-tech", title: "EKG Technician Skills Checklist", shortTitle: "EKG Tech", icon: "📈", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "12-lead EKG acquisition" }, { name: "Holter monitor placement" }, { name: "Stress test assist" }, { name: "Event monitor setup" },
    ]},
    { title: "Technical Skills", skills: [
      { name: "Lead placement accuracy" }, { name: "Artifact troubleshooting" }, { name: "Basic rhythm recognition" }, { name: "Equipment maintenance" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient prep and education" }, { name: "Infection control" }, { name: "Documentation and transmission of results" },
    ]},
  ]},

  { slug: "mammographer", title: "Mammographer Skills Checklist", shortTitle: "Mammographer", icon: "🎗️", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Screening mammography" }, { name: "Diagnostic mammography" }, { name: "Stereotactic breast biopsy assist" }, { name: "Breast ultrasound assist" }, { name: "3D tomosynthesis" },
    ]},
    { title: "Technical Skills", skills: [
      { name: "Positioning technique" }, { name: "MQSA/ACR compliance" }, { name: "Image quality/QC" }, { name: "Radiation dose management" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient comfort and communication" }, { name: "Sensitivity to anxious patients" }, { name: "Documentation and BI-RADS familiarity" },
    ]},
  ]},

  { slug: "mri-tech", title: "MRI Technologist Skills Checklist", shortTitle: "MRI Tech", icon: "🧲", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Brain/spine MRI" }, { name: "Musculoskeletal MRI" }, { name: "Abdominal/pelvic MRI" }, { name: "Cardiac MRI" }, { name: "MR angiography" }, { name: "Contrast-enhanced studies" },
    ]},
    { title: "Safety & Equipment", skills: [
      { name: "MRI safety screening (implants, ferrous objects)" }, { name: "Contrast administration" }, { name: "Coil selection and setup" }, { name: "Sequence protocol selection" }, { name: "Emergency response in magnet room" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Claustrophobia management" }, { name: "Pediatric sedation coordination" }, { name: "Patient positioning" },
    ]},
  ]},

  { slug: "nuclear-medicine-tech", title: "Nuclear Medicine Technologist Skills Checklist", shortTitle: "Nuclear Medicine Tech", icon: "☢️", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Bone scan" }, { name: "Cardiac perfusion (stress/rest) imaging" }, { name: "Thyroid uptake and scan" }, { name: "Renal scan" }, { name: "HIDA scan" }, { name: "Lung V/Q scan" },
    ]},
    { title: "Radiopharmaceutical Handling", skills: [
      { name: "Radiopharmaceutical preparation" }, { name: "Dose calibration" }, { name: "Radiation safety and ALARA principles" }, { name: "Waste disposal compliance" },
    ]},
    { title: "Equipment", skills: [
      { name: "Gamma camera operation" }, { name: "SPECT imaging" }, { name: "Image processing and QC" },
    ]},
  ]},

  { slug: "pet-ct-tech", title: "PET/CT Technologist Skills Checklist", shortTitle: "PET/CT Tech", icon: "🔬", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Oncology PET/CT imaging" }, { name: "Cardiac PET imaging" }, { name: "Neurology PET imaging" }, { name: "Attenuation correction" },
    ]},
    { title: "Radiopharmaceutical & Safety", skills: [
      { name: "FDG dose preparation and administration" }, { name: "Radiation safety/ALARA" }, { name: "Blood glucose screening pre-injection" }, { name: "Uptake time management" },
    ]},
    { title: "Equipment & Patient Care", skills: [
      { name: "PET/CT scanner operation" }, { name: "Image fusion and QC" }, { name: "Diabetic patient protocol management" }, { name: "Claustrophobia/anxiety management" },
    ]},
  ]},

  { slug: "polysomnography-tech", title: "Polysomnography Technologist Skills Checklist", shortTitle: "Polysomnography Tech", icon: "😴", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Diagnostic polysomnography (PSG)" }, { name: "CPAP/BiPAP titration study" }, { name: "Multiple sleep latency test (MSLT)" }, { name: "Home sleep apnea testing" }, { name: "Pediatric sleep studies" },
    ]},
    { title: "Technical Skills", skills: [
      { name: "Electrode and sensor placement" }, { name: "Equipment calibration" }, { name: "Scoring sleep stages and events" }, { name: "Artifact troubleshooting" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient education pre-study" }, { name: "Overnight patient monitoring" }, { name: "Emergency response (desaturation, cardiac events)" },
    ]},
  ]},

  { slug: "radiation-therapist", title: "Radiation Therapist Skills Checklist", shortTitle: "Radiation Therapist", icon: "🎯", group: "Diagnostic & Lab", categories: [
    { title: "Treatment Delivery", skills: [
      { name: "External beam radiation therapy (EBRT)" }, { name: "IMRT/VMAT delivery" }, { name: "Stereotactic radiosurgery (SRS/SBRT)" }, { name: "Brachytherapy assist" }, { name: "Patient positioning and immobilization" },
    ]},
    { title: "Simulation & Planning", skills: [
      { name: "CT simulation" }, { name: "Treatment planning system familiarity" }, { name: "Image-guided radiation therapy (IGRT)" }, { name: "Daily setup verification" },
    ]},
    { title: "Patient Care & Safety", skills: [
      { name: "Radiation safety principles" }, { name: "Side effect management and education" }, { name: "Skin care during treatment" }, { name: "Emotional support for oncology patients" },
    ]},
  ]},

  { slug: "radiation-dosimetrist", title: "Radiation Therapy Dosimetrist Skills Checklist", shortTitle: "Dosimetrist", icon: "📐", group: "Diagnostic & Lab", categories: [
    { title: "Treatment Planning", skills: [
      { name: "3D conformal treatment planning" }, { name: "IMRT/VMAT plan optimization" }, { name: "Stereotactic planning (SRS/SBRT)" }, { name: "Brachytherapy dose planning" },
    ]},
    { title: "Technical Skills", skills: [
      { name: "Treatment planning system software" }, { name: "Dose-volume histogram analysis" }, { name: "Monitor unit calculations" }, { name: "Plan quality assurance" },
    ]},
    { title: "Collaboration", skills: [
      { name: "Physician plan review coordination" }, { name: "Medical physicist collaboration" }, { name: "Documentation and chart checks" },
    ]},
  ]},

  { slug: "ultrasound-tech", title: "Diagnostic Medical Sonographer / Ultrasound Technologist Skills Checklist", shortTitle: "Ultrasound Tech", icon: "🔊", group: "Diagnostic & Lab", categories: [
    { title: "Abdominal Sonography", skills: [
      { name: "Liver/gallbladder/pancreas imaging" }, { name: "Renal ultrasound" }, { name: "Aorta/IVC imaging" }, { name: "Abdominal Doppler studies" },
    ]},
    { title: "OB/GYN Sonography", skills: [
      { name: "First trimester ultrasound" }, { name: "Anatomy scan (2nd/3rd trimester)" }, { name: "Transvaginal ultrasound" }, { name: "Pelvic/gynecologic ultrasound" }, { name: "Fetal biophysical profile" },
    ]},
    { title: "Small Parts & Vascular", skills: [
      { name: "Thyroid/neck ultrasound" }, { name: "Breast ultrasound" }, { name: "Musculoskeletal ultrasound" }, { name: "Venous/arterial duplex studies" },
    ]},
    { title: "Patient Care & Equipment", skills: [
      { name: "Patient positioning and prep" }, { name: "Transducer selection and technique" }, { name: "Image optimization and measurement" }, { name: "Report generation and PACS" },
    ]},
  ]},

  { slug: "medical-physicist", title: "Medical Physicist Skills Checklist", shortTitle: "Medical Physicist", icon: "⚛️", group: "Diagnostic & Lab", categories: [
    { title: "Treatment Planning QA", skills: [
      { name: "IMRT/VMAT plan verification" }, { name: "Patient-specific QA measurements" }, { name: "Monitor unit independent calculation" }, { name: "Brachytherapy plan review" },
    ]},
    { title: "Equipment Calibration", skills: [
      { name: "Linear accelerator output calibration" }, { name: "CT/simulator QA" }, { name: "Imaging equipment QA (mammography, MRI, nuclear medicine)" }, { name: "Annual/monthly machine QA per AAPM protocols" },
    ]},
    { title: "Radiation Safety", skills: [
      { name: "Shielding design and survey" }, { name: "Radiation dose monitoring/ALARA program" }, { name: "Incident investigation" },
    ]},
    { title: "Regulatory Compliance", skills: [
      { name: "State/NRC licensing compliance" }, { name: "Joint Commission radiation oncology standards" }, { name: "Documentation and reporting" },
    ]},
  ]},

  { slug: "cytotechnologist", title: "Cytotechnologist Skills Checklist", shortTitle: "Cytotechnologist", icon: "🔬", group: "Diagnostic & Lab", categories: [
    { title: "Specimen Analysis", skills: [
      { name: "Pap smear screening" }, { name: "Non-gynecologic cytology (fluids, FNA)" }, { name: "Liquid-based cytology preparation" }, { name: "Microscopic slide screening" }, { name: "Abnormality identification and classification" },
    ]},
    { title: "Laboratory Technique", skills: [
      { name: "Specimen preparation and staining" }, { name: "Quality control procedures" }, { name: "LIS documentation" }, { name: "Correlation with histology/biopsy results" },
    ]},
    { title: "Compliance", skills: [
      { name: "CAP/CLIA regulatory compliance" }, { name: "Proficiency testing participation" },
    ]},
  ]},

  { slug: "histology-tech", title: "Histology Technician Skills Checklist", shortTitle: "Histology Tech", icon: "🧫", group: "Diagnostic & Lab", categories: [
    { title: "Specimen Processing", skills: [
      { name: "Tissue grossing assist" }, { name: "Tissue processing/embedding" }, { name: "Microtomy/sectioning" }, { name: "Special stains (H&E, IHC)" }, { name: "Frozen section preparation" },
    ]},
    { title: "Laboratory Technique", skills: [
      { name: "Equipment operation (microtome, embedding center)" }, { name: "Quality control and slide review" }, { name: "LIS documentation" },
    ]},
    { title: "Compliance", skills: [
      { name: "CAP/CLIA regulatory compliance" }, { name: "Specimen chain of custody" },
    ]},
  ]},

  { slug: "pathologist-assistant", title: "Pathologist / Pathologist Assistant Skills Checklist", shortTitle: "Pathologist Assistant", icon: "🩸", group: "Diagnostic & Lab", categories: [
    { title: "Gross & Surgical Pathology", skills: [
      { name: "Surgical specimen grossing" }, { name: "Autopsy assist" }, { name: "Frozen section preparation and consultation" }, { name: "Specimen photography and documentation" },
    ]},
    { title: "Diagnostic Support", skills: [
      { name: "Microscopic slide preparation for physician review" }, { name: "Correlation with clinical/radiologic findings" }, { name: "Molecular/IHC test coordination" },
    ]},
    { title: "Compliance", skills: [
      { name: "CAP/CLIA regulatory compliance" }, { name: "Chain of custody documentation" }, { name: "Quality assurance participation" },
    ]},
  ]},
];
