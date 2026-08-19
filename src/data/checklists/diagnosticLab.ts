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
    { title: "Immunology, Serology & Molecular Testing", skills: [
      { name: "Tumor Marker Testing" }, { name: "Antibody Identification" }, { name: "Testing on Cord Blood" }, { name: "LE Cell Prep (Lupus Erythematosus)" }, { name: "Manual White Blood Cell Count on Body Fluid" }, { name: "Platelet Aggregation" }, { name: "Coagulation Factor Assays" }, { name: "Semen Analysis" },
    ]},
    { title: "Quality Control & Safety", skills: [
      { name: "Specimen Labeling in Accordance with Laboratory Policy" }, { name: "CLIA/CAP/Joint Commission Compliance" }, { name: "Safe Handling of Biohazardous Materials" },
    ]},
  ]},

  { slug: "medical-technologist", title: "Medical Technologist/Technician Skills Checklist", shortTitle: "Medical Technologist", icon: "🔬", group: "Diagnostic & Lab", categories: [
    { title: "Blood Bank", skills: [
      { name: "Component Preparation" }, { name: "Special Blood Typing" }, { name: "Procedures" }, { name: "Patient Identification" }, { name: "Emergency Release" }, { name: "Freezing Blood" }, { name: "Thawing procedures for FFP" }, { name: "Pooling platelets" }, { name: "Cross match (gel and tube methods)" }, { name: "Antibody identification" }, { name: "Blood irradiation" }, { name: "Cell washing" }, { name: "Massive transfusion protocol (MTP)" }, { name: "Direct/indirect Coombs" }, { name: "Receiving outside blood components" }, { name: "Pediatric aliquots and cord blood" }, { name: "Issuing blood components" }, { name: "Transfusion reaction work-up" }, { name: "Rhogam screening" }, { name: "Donor unit collection" },
    ]},
    { title: "Chemistry/Immunoassays", skills: [
      { name: "Routine Chemistry" }, { name: "Special Chemistry" }, { name: "Immunoassay" }, { name: "Electrophoresis" }, { name: "Blood Gas Analysis" }, { name: "Cardiac testing (CKMB, troponin)" }, { name: "Immunoelectrophoresis" }, { name: "HCG testing (serum)" }, { name: "Thin layer chromatography" }, { name: "Hormone and thyroid testing" }, { name: "Electrolytes and osmolality" }, { name: "Therapeutic drug monitoring (TDM)" }, { name: "Tumor markers" }, { name: "Reference and panic values" },
    ]},
    { title: "Hematology/Coagulation", skills: [
      { name: "CBC/Differential" }, { name: "Manual Differential" }, { name: "Body Fluid Analysis" }, { name: "Coagulation" }, { name: "Flow Cytometry" }, { name: "Automated and manual reticulocyte counts" }, { name: "Platelet function assay and platelet aggregation" }, { name: "Factor assays" }, { name: "PT/PTT and D-dimer" }, { name: "CSF cell count and differential" }, { name: "Sedimentation rates" }, { name: "Scattergram interpretation" }, { name: "Fibrinogen" }, { name: "TEG (thromboelastography)" }, { name: "Body fluid crystals" },
    ]},
    { title: "Microbiology", skills: [
      { name: "Culture Setup" }, { name: "Identification" }, { name: "Susceptibility Testing" }, { name: "Mycobacteriology" }, { name: "Parasitology" }, { name: "Virology" }, { name: "Acid fast stains" }, { name: "Gram stain procedures and interpretation" }, { name: "Chlamydia culture and smear" }, { name: "Malaria detection" }, { name: "Ova and parasite detection" }, { name: "India ink prep" }, { name: "C. difficile testing" }, { name: "Aerobic and anaerobic cultures" },
    ]},
    { title: "Urinalysis", skills: [
      { name: "Physical Examination" }, { name: "Chemical Analysis" }, { name: "Microscopic Examination" }, { name: "Pregnancy Testing" }, { name: "Perform manual microscopic and automated microscopy systems" }, { name: "Crystal identification" }, { name: "Fecal occult blood" }, { name: "Read and interpret dip-stix" }, { name: "Post-vasectomy evaluation" },
    ]},
    { title: "Serology/Immunology", skills: [
      { name: "CMV (cytomegalovirus)" }, { name: "MR serology" }, { name: "Rapid strep and influenza kit testing" }, { name: "TORCH studies" }, { name: "FTA-ABS (fluorescent treponemal antibody absorption test)" }, { name: "Hepatitis panel" }, { name: "Rheumatoid factor" }, { name: "RPR kit test" }, { name: "RIA (radioimmunoassay)" }, { name: "COVID test" }, { name: "Monospot kit test" }, { name: "ASO (anti-streptolysin O) titer" },
    ]},
    { title: "Phlebotomy", skills: [
      { name: "Capillary stick/fingerstick" }, { name: "Blood bank specimen collection" }, { name: "Obtaining blood via syringe" }, { name: "Heel stick" }, { name: "Safety needle use" }, { name: "Arterial punctures" }, { name: "Venipuncture" }, { name: "Hazardous materials knowledge" }, { name: "Blood culture collection" },
    ]},
    { title: "General Laboratory & Quality", skills: [
      { name: "Chain of custody" }, { name: "Daily QC performing and interpreting" }, { name: "Result interpretation/reporting" }, { name: "Laboratory safety" }, { name: "Specimen collection, transport, and tracking" }, { name: "Hospital and laboratory information systems (LIS)" }, { name: "Quality Management System" },
    ]},
    { title: "Practice Setting Experience", skills: [
      { name: "MD office" }, { name: "Reference lab" }, { name: "Hospital" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "radiology-tech", title: "Radiology Technologist Skills Checklist", shortTitle: "Radiology Tech", icon: "☢️", group: "Diagnostic & Lab", categories: [
    { title: "Setting", skills: [
      { name: "Adult Inpatient" }, { name: "ER/Trauma" }, { name: "Adult Outpatient" }, { name: "Pediatric Inpatient" }, { name: "Pediatric Outpatient" },
    ]},
    { title: "Equipment Operation & Quality Control", skills: [
      { name: "C-Arm" }, { name: "Fluoroscopy" }, { name: "Fixed X-Ray Machine" }, { name: "Portable X-Ray Machine" }, { name: "Plate Size" }, { name: "Contamination" }, { name: "Troubleshooting Errors/Breakdowns" }, { name: "Start Up and Shut Down Procedures" }, { name: "Charging" }, { name: "Cleaning" }, { name: "Improper Temperature" }, { name: "Grid Holders" }, { name: "Filters" }, { name: "Pig-O-Stat" }, { name: "Positioning Devices" }, { name: "Image Receptors" }, { name: "Stationary Grids" }, { name: "CR (Computed Radiography)" }, { name: "DR (Digital Radiography)" }, { name: "Quality Control" },
    ]},
    { title: "Imaging Principles & Terminology", skills: [
      { name: "Projection (AP, PA, Lateral, LPO, RPO, RAO, LAO, Tangential, Axial)" }, { name: "Common Acronyms (NPO, DNR, ALARA, GFR, BUN, AEC, kVp, mAs)" }, { name: "Central Ray" }, { name: "Positioning and Planes" }, { name: "Film Screen Speed" }, { name: "Contrast/Gray Scale" }, { name: "Distance" }, { name: "Identification Markers" }, { name: "Grid" }, { name: "mA Control" }, { name: "Filtration" }, { name: "Distortion" }, { name: "Timer" }, { name: "Anatomical Markers" }, { name: "Beam Restriction" }, { name: "Brightness/Density" }, { name: "kVp" }, { name: "Anode Heel Effect" }, { name: "Image Artifacts" }, { name: "Evaluate and Communicate Radiologic Findings to Radiologists" },
    ]},
    { title: "Film & Digital Processing", skills: [
      { name: "Processing Solutions" }, { name: "Film Storage" }, { name: "Chemicals" }, { name: "Edge Enhancement" }, { name: "Ghost Imaging" }, { name: "Readout Problems" }, { name: "Masking" }, { name: "Noise Suppression" }, { name: "Erasure" }, { name: "Contrast Enhancement" }, { name: "Dead Pixels" }, { name: "Gray-Scale Rendition" }, { name: "PACS" },
    ]},
    { title: "Imaging Procedures", skills: [
      { name: "Chest X-ray" }, { name: "Abdominal X-ray" }, { name: "Extremity X-ray" }, { name: "Spine X-ray" }, { name: "Skull X-ray" }, { name: "Portable/Mobile X-ray" }, { name: "OR/C-Arm" }, { name: "Surgery (C-Arm/Portable)" }, { name: "Swallowing Studies" }, { name: "Barium Enema" }, { name: "IVP" }, { name: "Trauma Cases" }, { name: "GI Tract (Upper and Lower)" }, { name: "Myelogram" }, { name: "Maintain Appropriate Documentation" }, { name: "Assist Physician/Nurse During Procedures" }, { name: "Prioritization: Codes, Routine, Stats, Trauma" },
    ]},
    { title: "Anatomy, Physiology & Abnormal Findings", skills: [
      { name: "Spine (Cervical, Thoracic, Lumbar, Pelvis)" }, { name: "Biliary System" }, { name: "GI System" }, { name: "Upper Extremities" }, { name: "Lower Extremities" }, { name: "Chest/Thorax" }, { name: "Cardiovascular System" }, { name: "Head (Facial, Nasal, Orbital Bones; Mandible)" }, { name: "Reproductive Systems" }, { name: "Abdomen" }, { name: "Urinary System" }, { name: "Gallstones" }, { name: "Pneumothorax" }, { name: "Skeletal Fractures" }, { name: "Obstructions (Small Bowel and Colon)" }, { name: "Renal Stones" },
    ]},
    { title: "Contraindications & Contrast Media", skills: [
      { name: "Allergic Reactions" }, { name: "Abnormal Lab Results" }, { name: "Medication Interactions" }, { name: "Barium" }, { name: "Storage" }, { name: "Non-Ionic" }, { name: "Administration" }, { name: "Water Soluble" }, { name: "Iodinated" }, { name: "Ionic" }, { name: "Reactions" },
    ]},
    { title: "Patient Preparation & IV Access", skills: [
      { name: "Diagnosis" }, { name: "Required Lab Results (BUN, Creatinine, GFR, etc.)" }, { name: "Patient Identification" }, { name: "Obtain/Assess Vital Signs" }, { name: "Pregnancy Status" }, { name: "Obtain/Verify Consent" }, { name: "Implantable Devices" }, { name: "NPO Status" }, { name: "History & Physical" }, { name: "Bleeding" }, { name: "Start Peripheral IV" }, { name: "Extravasation" }, { name: "Infiltration" }, { name: "Flushing" }, { name: "IV Access" },
    ]},
    { title: "Patient Care & Equipment Management", skills: [
      { name: "Nasogastric Tube" }, { name: "Chest Tube" }, { name: "Oxygen Tank" }, { name: "Urinary Catheter" }, { name: "Tracheostomy Tube" }, { name: "Infusion Pump" }, { name: "Maintain Safe and Comfortable Care" }, { name: "Perform Basic Life Support/CPR" }, { name: "Patient Positioning" }, { name: "Patient Assessment" },
    ]},
    { title: "Infection Control & Body Mechanics", skills: [
      { name: "Isolation Precautions" }, { name: "Standard Precautions" }, { name: "Hand Hygiene" }, { name: "Disposal of Contaminated Materials" }, { name: "Sterile Technique" }, { name: "PPE" }, { name: "Patient Positioning for X-rays/Procedures" }, { name: "Transport" }, { name: "Transfers" },
    ]},
    { title: "Medical Emergencies & Special Populations", skills: [
      { name: "Physical Injury" }, { name: "Seizures" }, { name: "Allergic Reactions (Latex, Contrast Media)" }, { name: "Diabetic Reactions" }, { name: "Cardiac or Respiratory Arrest" }, { name: "Special-Needs" }, { name: "Pediatrics" }, { name: "Geriatrics" },
    ]},
    { title: "Professional Practice", skills: [
      { name: "Follow State, Federal and Hospital Policies and Protocols" }, { name: "Maintain and Follow Medical Records Release Protocols" }, { name: "Establish and Maintain Effective Working Relationships" }, { name: "Maintain and Perform Within Scope of Practice" }, { name: "Report Incidents Outside of Code of Ethics" }, { name: "Maintain Continuing Education Requirements" }, { name: "Maintain Chain of Command" }, { name: "HIPAA" }, { name: "Advanced Directives" }, { name: "Patient Restraints" }, { name: "Informed Consent" }, { name: "OSHA Regulations" }, { name: "Health Care Proxy" }, { name: "Patient Rights" }, { name: "Joint Commission Standards" }, { name: "Do-Not-Resuscitate" },
    ]},
    { title: "Radiation Safety", skills: [
      { name: "Proper Shielding Techniques" }, { name: "Dosimeters" }, { name: "Correct Dosages" }, { name: "Genetic Impact" }, { name: "Acute Radiation Syndrome" }, { name: "Embryonic and Fetal Risks" }, { name: "Radiosensitivity" }, { name: "Somatic Effects" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "ct-tech", title: "CT Technologist Skills Checklist", shortTitle: "CT Tech", icon: "🖥️", group: "Diagnostic & Lab", categories: [
    { title: "Head, Face & Sinuses", skills: [
      { name: "Head/Brain" }, { name: "Face/Maxillofacial" }, { name: "Sinuses" }, { name: "Orbits" }, { name: "Temporal Bones" }, { name: "Temporomandibular Joint" },
    ]},
    { title: "Neck & Chest", skills: [
      { name: "Soft Tissue Neck" }, { name: "Chest" }, { name: "High-Resolution Chest" }, { name: "Chest with Contrast" },
    ]},
    { title: "Abdomen & Pelvis", skills: [
      { name: "Abdomen" }, { name: "Pelvis" }, { name: "Abdomen/Pelvis Combined" }, { name: "Pancreas Protocol" }, { name: "Liver Protocol" }, { name: "Adrenal Protocol" },
    ]},
    { title: "Spine", skills: [
      { name: "Cervical Spine" }, { name: "Thoracic Spine" }, { name: "Lumbar Sacral Spine" }, { name: "Trauma Spine" },
    ]},
    { title: "Upper Extremities", skills: [
      { name: "Shoulder/Scapula" }, { name: "Humerus" }, { name: "Elbow" }, { name: "Forearm" }, { name: "Hand/Wrist" },
    ]},
    { title: "Lower Extremities", skills: [
      { name: "Hip" }, { name: "Femur" }, { name: "Knee" }, { name: "Lower Leg" }, { name: "Foot/Ankle" },
    ]},
    { title: "CTA Scans", skills: [
      { name: "CTA Carotids" }, { name: "CTA Cranials" }, { name: "CTA Thoracic Aorta" }, { name: "CTA Abdominal Aorta" }, { name: "CTA Pulmonary Arteries" }, { name: "CTA Mesenteric" }, { name: "CTA Femorals w/ w/o Runoff" },
    ]},
    { title: "CT-Guided Procedures", skills: [
      { name: "CT-Guided Biopsy" }, { name: "CT-Guided Drainage" }, { name: "CT-Guided Injection/Aspiration" },
    ]},
    { title: "Pediatric Scans", skills: [
      { name: "Pediatric Head" }, { name: "Pediatric Chest" }, { name: "Pediatric Abdomen/Pelvis" },
    ]},
    { title: "CT Angiography & 3D Reconstruction", skills: [
      { name: "CT Angiography" }, { name: "3D Reconstruction" },
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
      { name: "Transthoracic Echo (TTE)" }, { name: "Transesophageal Echo (TEE)" }, { name: "Stress Echo" }, { name: "Dobutamine Stress Echo" }, { name: "Contrast Echo" }, { name: "Point-of-Care Echo" },
    ]},
    { title: "Measurements & Calculations", skills: [
      { name: "M-Mode" }, { name: "2D Imaging" }, { name: "Doppler (PW, CW, Color)" }, { name: "Tissue Doppler" }, { name: "Strain Imaging" }, { name: "Ejection Fraction Calculation" }, { name: "Chamber Quantification" },
    ]},
    { title: "Pathology Recognition", skills: [
      { name: "Valvular Disease" }, { name: "Cardiomyopathy" }, { name: "Pericardial Disease" }, { name: "Congenital Heart Disease" }, { name: "Aortic Disease" }, { name: "Wall Motion Abnormality Recognition" },
    ]},
    { title: "Equipment & Reporting", skills: [
      { name: "Ultrasound Equipment Operation" }, { name: "Image Optimization/QC" }, { name: "Report Generation and Physician Communication" },
    ]},
  ]},

  { slug: "cardiac-echocardiography", title: "Cardiac Echocardiography Skills Checklist (Advanced)", shortTitle: "Cardiac Echocardiography", icon: "🫀", group: "Diagnostic & Lab", categories: [
    { title: "Ultrasound-Echocardiography", skills: [
      { name: "Adult Echocardiography" }, { name: "Pediatric Echocardiography" }, { name: "Fetal Echocardiography" }, { name: "Trauma Echocardiography" }, { name: "Stress Echocardiography" }, { name: "Point-of-Care Echocardiography" },
    ]},
    { title: "Advanced Imaging", skills: [
      { name: "3D Echocardiography" }, { name: "Strain/Speckle Tracking" }, { name: "Contrast Echocardiography" }, { name: "Intracardiac Echo" }, { name: "Tissue Doppler Imaging" },
    ]},
    { title: "Procedures", skills: [
      { name: "Transesophageal Echo (TEE)" }, { name: "Intraoperative TEE" }, { name: "Stress Testing (Exercise)" }, { name: "Stress Testing (Pharmacological)" }, { name: "Structural Heart Procedure Imaging Support (e.g., TAVR, MitraClip)" },
    ]},
    { title: "Measurements & Pathology Recognition", skills: [
      { name: "Ejection Fraction Calculation" }, { name: "Valvular Disease Assessment" }, { name: "Cardiomyopathy Recognition" }, { name: "Pericardial Disease Recognition" }, { name: "Congenital Heart Disease Recognition" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (Birth-30 Days)" }, { name: "Infant (1 Month-1 Year)" }, { name: "Pediatric (1-18 Years)" }, { name: "Adult (18-64 Years)" }, { name: "Geriatric (65+ Years)" },
    ]},
  ]},

  { slug: "cath-lab", title: "Cath Lab / Interventional Radiology Skills Checklist", shortTitle: "Cath Lab", icon: "🏥", group: "Diagnostic & Lab", categories: [
    { title: "Work Setting & Team Collaboration", skills: [
      { name: "Procedural Cath Lab" }, { name: "Interventional Cath Lab" }, { name: "EP Lab" }, { name: "Interventional Radiology" }, { name: "Pre/Post Procedural Setting" }, { name: "Participate in Pre-Procedure Briefings and Post-Procedure Debriefings" }, { name: "Collaborate With the Multidisciplinary Team to Coordinate Patient Care" }, { name: "Provide Handoff Communication Using a Standardized Format (e.g., SBAR)" }, { name: "Report Abnormal Findings, Equipment Malfunctions, and Supply Issues Promptly" },
    ]},
    { title: "Cardiac Catheterization Procedures", skills: [
      { name: "Diagnostic Catheterization (Adult)" }, { name: "Diagnostic Catheterization (Pediatric/Neonatal)" }, { name: "Coronary Angiography" }, { name: "Aortography" }, { name: "Internal Mammary Angiography" }, { name: "Pulmonary Angiography" }, { name: "Saphenous Vein Graft Angiography" }, { name: "Right Heart Catheterization" }, { name: "Shunt Detection & Calculation" }, { name: "PCI/Angioplasty/Stent" }, { name: "Atherectomy/Debulking" }, { name: "Assist With A-Line Insertion" }, { name: "Assist With PA-Line Insertion" }, { name: "Assist With Open Chest Emergency" },
    ]},
    { title: "Hemodynamic Monitoring", skills: [
      { name: "Pulmonary Artery Pressure (PAP)" }, { name: "Pulmonary Capillary Wedge Pressure (PCW)" }, { name: "Central Venous Pressure (CVP)" }, { name: "Systemic Vascular Resistance (SVR)" }, { name: "Pulmonary Vascular Resistance (PVR)" }, { name: "Cardiac Output (CO)" }, { name: "Cardiac Index (CI)" }, { name: "SVO2 Recording" }, { name: "Intra-Procedure Blood Pressure Measurement" }, { name: "Intracardiac Echocardiography (ICE)" },
    ]},
    { title: "Electrophysiology", skills: [
      { name: "EP Studies" }, { name: "Arrhythmia Ablation" }, { name: "Permanent Pacemaker Placement" }, { name: "Temporary Pacemaker Placement" }, { name: "Automatic Implantable Cardiac Defibrillator (AICD)" }, { name: "Lead Extraction" }, { name: "Lead Placement" },
    ]},
    { title: "Vascular Access, Closure & Support Devices", skills: [
      { name: "Peripheral Angiography" }, { name: "Peripheral Intervention" }, { name: "Carotid Stenting" }, { name: "Sheath Removal" }, { name: "Vascular Closure Devices" }, { name: "FemStop Device" }, { name: "Vasoseal" }, { name: "Angioseal" }, { name: "Perclose" }, { name: "Ventricular Assist Device (VAD)" }, { name: "Intra-Aortic Balloon Pump (IABP)" }, { name: "Impella Insertion and Management" },
    ]},
    { title: "Interventional & Special Procedures", skills: [
      { name: "Specimen Radiographs" }, { name: "Selective Angiography" }, { name: "Cerebral Angiography" }, { name: "Cerebral Embolization – Coiling" }, { name: "Cerebral Embolization – Gelfoam" }, { name: "Cerebral Embolization – PVA" }, { name: "Carotid Arteriogram" }, { name: "Brachial Arteriogram" }, { name: "Pulmonary Arteriogram" }, { name: "Arch Arteriogram" }, { name: "Renal Arteriogram" }, { name: "Femoral Arteriogram" }, { name: "Abdominal Arteriogram" }, { name: "Mesenteric Arteriogram" }, { name: "Venogram" }, { name: "Nephrostomy" }, { name: "Embolizations" }, { name: "A/V Fistulas" }, { name: "IVC Filter (Inferior Vena Cava)" }, { name: "TIPS Procedure" }, { name: "Ablations" }, { name: "Endografts" }, { name: "Pressure Monitoring" },
    ]},
    { title: "Medications", skills: [
      { name: "Conscious Sedation (e.g., Fentanyl, Versed, Propofol)" }, { name: "Reversal Agents" }, { name: "Anticoagulants (e.g., Heparin, Bivalirudin)" }, { name: "Antiplatelets" }, { name: "Vasodilators" }, { name: "Antiarrhythmics" }, { name: "Emergency Medications" }, { name: "Allergic Reaction Management (e.g., Epinephrine, Diphenhydramine)" },
    ]},
    { title: "Equipment & Computerized Charting", skills: [
      { name: "Cardioversion" }, { name: "Defibrillator" }, { name: "Fluoroscopy/Imaging Equipment" }, { name: "Contrast Injector Systems" }, { name: "Cerner" }, { name: "Epic" }, { name: "Meditech" }, { name: "McKesson" }, { name: "Computerized Physician Order Entry (CPOE)" }, { name: "Bar Coding for Medication Administration" },
    ]},
    { title: "Safety & Emergency Response", skills: [
      { name: "Accurate Patient Identification" }, { name: "Effective Communication" }, { name: "Infection Control" }, { name: "Universal Precautions" }, { name: "Patients in Isolation" }, { name: "Minimize Risk for Falls" }, { name: "Cardiac Arrest/CPR" }, { name: "Use of Rapid Response Teams" }, { name: "Emergent Angioplasty/Stenting" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "phlebotomy", title: "Phlebotomy Competency Skills Checklist", shortTitle: "Phlebotomy", icon: "💉", group: "Diagnostic & Lab", categories: [
    { title: "Preparation", skills: [
      { name: "Introduces self to patient and explains procedure" }, { name: "Identifies patient with two unique identifiers" }, { name: "Checks testing requirements (fasting)" }, { name: "Prepares supplies and tube selection" }, { name: "Gauged needle selection" },
    ]},
    { title: "Venipuncture", skills: [
      { name: "Tourniquet application" }, { name: "Vein selection" }, { name: "Site preparation" }, { name: "Needle insertion technique" }, { name: "Vacutainer system" }, { name: "Winged set/butterfly needle" }, { name: "Syringe draw method" }, { name: "Venipuncture arm site" }, { name: "Venipuncture hand site" }, { name: "Venipuncture foot site" }, { name: "Lancet use" },
    ]},
    { title: "Capillary Puncture", skills: [
      { name: "Finger stick" }, { name: "Heel stick (infant)" }, { name: "Micro-collection devices" }, { name: "Capillary tube collection" }, { name: "Dermal puncture" },
    ]},
    { title: "Specimen Collection", skills: [
      { name: "Blood cultures" }, { name: "Blood alcohol collection" }, { name: "Arterial blood gas" }, { name: "Bleeding times" }, { name: "Timed draws" }, { name: "STAT draws" }, { name: "Throat/nasopharyngeal swab" }, { name: "Urine collection" }, { name: "Sputum collection" }, { name: "Stool collection" }, { name: "Centrifuging" }, { name: "POC testing/waived testing" }, { name: "Vital signs" },
    ]},
    { title: "Post-Collection", skills: [
      { name: "Specimen labeling" }, { name: "Order of draw" }, { name: "Specimen handling/transport" }, { name: "Needle disposal" }, { name: "Hemostasis/bandaging" }, { name: "Documentation" },
    ]},
    { title: "Safety", skills: [
      { name: "Standard precautions" }, { name: "Transmission-based isolation precautions" }, { name: "Sharps disposal" }, { name: "Infection control" }, { name: "Adverse reactions management" }, { name: "Radiation safety" },
    ]},
    { title: "Special Populations", skills: [
      { name: "Mastectomy patients" }, { name: "Burn patients" }, { name: "Dialysis patients" }, { name: "Pediatric patients" }, { name: "Cognitively impaired patients" },
    ]},
    { title: "Clerical & Patient Care Settings", skills: [
      { name: "Intake of lab specimens" }, { name: "Computer entry" }, { name: "EMR/EHR" }, { name: "Pneumatic tube system" }, { name: "Answering phones" }, { name: "General laboratory experience" }, { name: "Ambulatory care (clinic, office)" }, { name: "Blood donation center" }, { name: "Nursing home" }, { name: "Hospital" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Pre-school (3-6 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Young Adult (18-30 years)" }, { name: "Mature Adult (30-60 years)" }, { name: "Elderly (>60 years)" },
    ]},
  ]},

  { slug: "cardiac-cath-tech", title: "Cardiac Cath Lab Technologist Skills Checklist", shortTitle: "Cardiac Cath Tech", icon: "🫀", group: "Diagnostic & Lab", categories: [
    { title: "Cardiac Catheterization Procedures", skills: [
      { name: "Atherectomy" }, { name: "Pressure Wire" }, { name: "Chronic Total Occlusions" }, { name: "Intravascular Ultrasound" }, { name: "Angiography" }, { name: "Right Heart Catheterization" }, { name: "Pericardiocentesis" }, { name: "Thrombolysis" }, { name: "Embolization" }, { name: "Impella insertion" }, { name: "Portal Shunts (TIPS)" }, { name: "Central Line Placement" }, { name: "Left Heart Catheterization" }, { name: "Stent Placement" }, { name: "Angioplasty" }, { name: "Coronary Angioplasty" }, { name: "Thrombectomy" }, { name: "PCI (Complex)" }, { name: "Biopsy" }, { name: "Endomyocardial Biopsy" }, { name: "Intra-Aortic Balloon Pump" }, { name: "PCI (Basic)" }, { name: "C-Arm positioning" }, { name: "Pan Table" }, { name: "Venography" }, { name: "Arterial Line Insertion" }, { name: "Temporary Pacemaker Insertion" }, { name: "Directional/Rotational Atherectomy" }, { name: "Power Injectors" },
    ]},
    { title: "Patient Assessment & Hemodynamic Monitoring", skills: [
      { name: "Pain Assessment/Reassessment" }, { name: "Blood Pressure - Invasive" }, { name: "Blood Pressure - Non-Invasive" }, { name: "12 Lead EKG Interpretation" }, { name: "Right Heart Pressure Assessment" }, { name: "Left Heart Pressure Assessment" }, { name: "Arrhythmia" }, { name: "Blood Oximetry" }, { name: "Hemodynamic Monitoring (Arterial)" }, { name: "Hemodynamic Monitoring (Venous)" },
    ]},
    { title: "Sheath Site Assessment & Closure Devices", skills: [
      { name: "Femoral Venous" }, { name: "Radial Arterial" }, { name: "Femoral Arterial" }, { name: "Intrajugular Vein" }, { name: "Brachial Arterial" }, { name: "Perclose (Suture Closure)" }, { name: "Vaso-Seal" }, { name: "Manual Pressure Hold" }, { name: "Mynx-Grip" }, { name: "Star Close" }, { name: "Angio-Seal" }, { name: "Radial Compression devices" },
    ]},
    { title: "Hemodynamic Calculations", skills: [
      { name: "Valve Area Calculation" }, { name: "SVO2 Recording" }, { name: "Ventricular End Diastolic Area Measurement" }, { name: "AVO2 Difference" }, { name: "Systemic Vascular Resistance" }, { name: "Cardiac Index" }, { name: "Valve Measurement" }, { name: "Ejection Fraction" }, { name: "Cardiac Output – Thermodilution" }, { name: "Pulmonary Vascular Resistance" }, { name: "Cardiac Output – Fick" }, { name: "Ventricular End Systolic Area Measurement" },
    ]},
    { title: "Electrophysiology", skills: [
      { name: "Tilt Table Studies" }, { name: "Pulsed Field Ablation" }, { name: "Adenosine Testing" }, { name: "Exercise Treadmill Test" }, { name: "Transseptal Access" }, { name: "Loop Recorder Implants" }, { name: "Cardioversion" }, { name: "Intracardiac Mapping" }, { name: "Biventricular Pacemaker Implantations" }, { name: "Cryoablation" }, { name: "Pacemaker/ICD Insertion" }, { name: "Radiofrequency Ablation" }, { name: "EP Studies Stimulation Protocol" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "Cardioversion" }, { name: "Transvenous Pacing" }, { name: "Code Protocol, Treatment, and Medications" }, { name: "ACLS Algorithm" }, { name: "Defibrillation" }, { name: "Airway Management" }, { name: "Patient Monitoring" }, { name: "Transcutaneous Pacing" },
    ]},
    { title: "Cath-Lab Medications", skills: [
      { name: "Morphine (Duramorph®)" }, { name: "Hydromorphone (Dilaudid®)" }, { name: "Midazolam (Versed®)" }, { name: "Fentanyl (Actiq®)" }, { name: "Sodium Nitroprusside (Nipride)" }, { name: "Hydralazine" }, { name: "Metoprolol (Lopressor®)" }, { name: "Naloxone (Narcan®)" }, { name: "Protamine" }, { name: "Flumazenil (Romazicon®)" }, { name: "Heparin" }, { name: "Bivalirudin (Angiomax®)" }, { name: "Cangrelor (Kengreal®)" }, { name: "Eptifibatide (Integrilin®)" }, { name: "Amiodarone (Pacerone®)" }, { name: "Diltiazem (Cardizem®)" }, { name: "Ticagrelor (Brilinta®)" }, { name: "Aspirin (Acuprin®)" }, { name: "Clopidogrel (Plavix®)" }, { name: "Prasugrel (Effient®)" }, { name: "Epinephrine (Adrenalin®)" }, { name: "Nitroglycerine (Nitro-Bid®)" }, { name: "Dopamine (Intropin®)" }, { name: "Sodium Bicarbonate" }, { name: "Atropine (Atreza®)" }, { name: "Adenosine (Adenocard®)" }, { name: "Lidocaine (Xylocaine®)" }, { name: "Vasopressin (Pitressin®)" }, { name: "IV Antibiotics" }, { name: "Verapamil (Calan®)" }, { name: "Nicardipine (Cardene®)" }, { name: "Furosemide (Lasix®)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "cardiac-monitor-tech", title: "Cardiac Monitor Technician Skills Checklist", shortTitle: "Cardiac Monitor Tech", icon: "📟", group: "Diagnostic & Lab", categories: [
    { title: "Rhythm Recognition", skills: [
      { name: "Normal Sinus Rhythm Identification" }, { name: "Atrial Arrhythmias (e.g., AFib, Aflutter, SVT)" }, { name: "Ventricular Arrhythmias (e.g., PVCs, VTach, VFib)" }, { name: "Heart Blocks (1st, 2nd, 3rd Degree)" }, { name: "Life-Threatening Arrhythmia Recognition" }, { name: "12-Lead EKG Interpretation Basics" }, { name: "Pacemaker Rhythm Recognition" }, { name: "Artifact vs. True Arrhythmia Differentiation" },
    ]},
    { title: "Monitoring Systems", skills: [
      { name: "Central Telemetry Station Operation" }, { name: "Alarm Management and Prioritization" }, { name: "Lead Placement and Troubleshooting" }, { name: "Documentation of Rhythm Strips" }, { name: "Multi-Patient Monitoring" }, { name: "Telemetry Battery/Equipment Management" },
    ]},
    { title: "Communication & Escalation", skills: [
      { name: "Notifying RN/Physician of Critical Changes" }, { name: "Code Blue Notification Protocol" }, { name: "Shift Handoff Reporting" }, { name: "Critical Value Documentation" },
    ]},
  ]},

  { slug: "echo-vascular-tech", title: "Echocardiography / Vascular Ultrasound Technologist Skills Checklist", shortTitle: "Echo/Vascular Tech", icon: "🌊", group: "Diagnostic & Lab", categories: [
    { title: "Echocardiography", skills: [
      { name: "Transthoracic Echocardiogram (TTE)" }, { name: "Transesophageal Echocardiogram (TEE) Assist" }, { name: "Stress Echocardiography" }, { name: "Doppler and Color Flow Imaging" }, { name: "Pediatric Echocardiography" }, { name: "3D Echocardiography" }, { name: "Contrast Echocardiography" },
    ]},
    { title: "Vascular Studies", skills: [
      { name: "Carotid Duplex" }, { name: "Venous Duplex/DVT Studies" }, { name: "Arterial Duplex" }, { name: "Ankle-Brachial Index (ABI)" }, { name: "Renal and Abdominal Vascular Studies" }, { name: "Dialysis Access Mapping" }, { name: "Post-Intervention Graft Surveillance" },
    ]},
    { title: "Equipment & Technique", skills: [
      { name: "Ultrasound Machine Operation" }, { name: "Image Optimization" }, { name: "Measurement and Calculation Accuracy" }, { name: "Report Generation" }, { name: "Quality Control/Probe Maintenance" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient Positioning and Comfort" }, { name: "Pediatric and Geriatric Considerations" }, { name: "Infection Control Between Studies" }, { name: "Patient History Review Prior to Study" },
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
    { title: "Instrumentation", skills: [
      { name: "Verifying Standard Filter Settings" }, { name: "Verifying Sensitivity Settings" }, { name: "Calibrating System Amplifiers" }, { name: "Inputting Biological Signal to All Channels" }, { name: "Correcting and Reporting Deviations Per Policy and Procedure" },
    ]},
    { title: "Electronics & Mathematics Principles", skills: [
      { name: "Understanding Impedance" }, { name: "Understanding Analog to Digital Conversion" }, { name: "Understanding the Polarity of Waveforms" }, { name: "Knowing How Differential Amplifiers Work" }, { name: "Computing Voltage and Frequency of Waveforms" }, { name: "Calculating Duration of Waveforms" },
    ]},
    { title: "Clinical Knowledge", skills: [
      { name: "Clinical and Non-Convulsive Seizure Patterns" }, { name: "Seizure Manifestations, Classifications, and EEG Correlates" }, { name: "Recognizing Seizure Classification, Stroke, Trauma, Encephalopathy, and Altered Mental Status" }, { name: "EEG Patterns for Levels of Consciousness" }, { name: "Normal Variants (Awake and Asleep) for Each Age Range" }, { name: "Abnormal Awake and Asleep Patterns for Each Age Range" }, { name: "Signs, Symptoms, and EEG Correlates for Adult Neurological Disorders" }, { name: "Signs, Symptoms, and EEG Correlates for Pediatric Disorders" }, { name: "Psychiatric and Psychological Disorders and EEG Correlates" }, { name: "Medication Effects on the EEG Background and Waveforms" }, { name: "Recording Electrocerebral Inactivity (Brain Death)" }, { name: "Recording Neonatal EEG" }, { name: "Recording Pediatric EEG" }, { name: "Medical Terminology and Accepted Abbreviations" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "ekg-tech", title: "EKG Technician Skills Checklist", shortTitle: "EKG Tech", icon: "📈", group: "Diagnostic & Lab", categories: [
    { title: "EKG Acquisition & Equipment", skills: [
      { name: "Electrode Placement" }, { name: "Skin Preparation" }, { name: "Methods to Reduce Significant Artifact" }, { name: "Lead Placement" }, { name: "Load EKG Paper" }, { name: "Calibrating EKG Machines" }, { name: "Troubleshooting" }, { name: "Uploading/Deleting Reports" }, { name: "Machine Maintenance" },
    ]},
    { title: "Heart Monitor Placement", skills: [
      { name: "Zio Patches" }, { name: "Holter Monitors" }, { name: "Event Monitors" },
    ]},
    { title: "EKG Interpretation", skills: [
      { name: "Anatomy of the Cardiovascular System" }, { name: "Identification of Lethal Arrhythmias" }, { name: "Identification of Artifact" }, { name: "Scanning Heart Monitors" }, { name: "Identification of Abnormal Arrhythmias" }, { name: "Pathology of the Cardiovascular System" },
    ]},
    { title: "Cardiology Procedure Assistance", skills: [
      { name: "Pacemaker Monitoring" }, { name: "Monitor EKG Waveform" }, { name: "Stress Testing" },
    ]},
    { title: "Patient Care & Infection Control", skills: [
      { name: "Patient Education on Equipment Function/Procedures" }, { name: "Cultural Competence" }, { name: "Patient Identification" }, { name: "Patient Safety" }, { name: "Monitor Vital Signs" }, { name: "Standard Precautions" }, { name: "Isolation Precautions" }, { name: "When to Use PPE" }, { name: "Environmental Control" }, { name: "Donning/Doffing PPE" },
    ]},
    { title: "Patient Rights & Communication", skills: [
      { name: "Identifying/Accommodating Patient Needs and Privacy" }, { name: "Manage Refusals" }, { name: "Maintain Confidentiality" }, { name: "Adhere to HIPAA Regulations" }, { name: "Manage Complaints" }, { name: "Collaboration with Team Members" }, { name: "Communication with Physicians/Nurses" }, { name: "Communication with Patients" }, { name: "Use of Translator Devices/Services" },
    ]},
    { title: "Documentation & Clerical Duties", skills: [
      { name: "Knowledge of Cardiovascular Anatomy" }, { name: "Upload Reports from Third-Party Vendors" }, { name: "Knowledge of Medical Terminology Related to Cardiology" }, { name: "Use of EMR/EHR Systems" }, { name: "Respond to Patient Messages" }, { name: "Respond to Provider Messages" }, { name: "Answer Phone Calls" }, { name: "Schedule/Cancel Appointments" },
    ]},
    { title: "Practice Setting Experience", skills: [
      { name: "Nursing Facilities" }, { name: "Hospital" }, { name: "Physician Office" }, { name: "Imaging Center" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "mammographer", title: "Mammographer Skills Checklist", shortTitle: "Mammographer", icon: "🎗️", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Screening Mammography" }, { name: "Diagnostic Mammography" }, { name: "Stereotactic Breast Biopsy Assist" }, { name: "Breast Ultrasound Assist" }, { name: "3D Tomosynthesis" }, { name: "Breast Specimen Imaging" }, { name: "Ductography/Galactography Assist" }, { name: "Needle Localization Assist" },
    ]},
    { title: "Technical Skills", skills: [
      { name: "Positioning Technique" }, { name: "Medial Lateral (ML) Positioning" }, { name: "Tangential (TAN) Positioning" }, { name: "Craniocaudal (CC) Positioning" }, { name: "Film-Screen Mammography" }, { name: "MQSA/ACR/FDA Compliance" }, { name: "Image Quality/QC" }, { name: "Radiation Dose Management" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient Comfort and Communication" }, { name: "Sensitivity to Anxious Patients" }, { name: "Imaging Patients With Implants" }, { name: "Imaging Patients With Reduction History" }, { name: "Documentation and BI-RADS Familiarity" }, { name: "Follow-Up Result Communication Coordination" },
    ]},
  ]},

  { slug: "mri-tech", title: "MRI Technologist Skills Checklist", shortTitle: "MRI Tech", icon: "🧲", group: "Diagnostic & Lab", categories: [
    { title: "Head, Neck & Spine Imaging", skills: [
      { name: "Brain/spine MRI" }, { name: "Pituitary" }, { name: "IAC (internal auditory canal)" }, { name: "MRA head and MRV head" }, { name: "Spectroscopy" }, { name: "Cranial nerves (non-IAC)" }, { name: "Head trauma" }, { name: "MRA neck/carotid arteries" }, { name: "Soft tissue neck" }, { name: "Functional MRI" }, { name: "Orbit" }, { name: "Brain perfusion" }, { name: "Lumbar, cervical, and thoracic spine" }, { name: "Sacrum/coccyx" },
    ]},
    { title: "Thorax, Abdomen & Pelvis Imaging", skills: [
      { name: "Abdominal/pelvic MRI" }, { name: "Cardiac MRI" }, { name: "Brachial plexus" }, { name: "Breast" }, { name: "Chest (non-cardiac)" }, { name: "Enterography" }, { name: "Liver and pancreas" }, { name: "Kidneys" }, { name: "Appendix" }, { name: "MRCP" }, { name: "Soft tissue pelvis (bladder, rectum, anus)" }, { name: "Male anatomy (prostate, testes)" }, { name: "Female anatomy (uterus/cervix, ovaries, vagina)" },
    ]},
    { title: "Musculoskeletal Imaging", skills: [
      { name: "Musculoskeletal MRI" }, { name: "Knee" }, { name: "SC joints" }, { name: "Arthrography" }, { name: "Elbow" }, { name: "Bony pelvis" }, { name: "Wrist" }, { name: "Hand, fingers, and thumb" }, { name: "Ankle and foot" }, { name: "Shoulder" }, { name: "Hip" }, { name: "Long bones (humerus, forearm, femur, lower leg)" }, { name: "Temporomandibular joint" }, { name: "SI joints" }, { name: "MPR acquisitions" }, { name: "Post process 3D imaging" },
    ]},
    { title: "Imaging Techniques & Pulse Sequences", skills: [
      { name: "MR angiography" }, { name: "Contrast-enhanced studies" }, { name: "Turbo spin echo imaging" }, { name: "Multiplanar reconstruction" }, { name: "Diffusion images" }, { name: "T-1 and T-2 weighted images" }, { name: "Proton density weighted images" }, { name: "MIP reconstruction" }, { name: "Fat saturation and non-fat saturation" }, { name: "Gradient echo and spin-echo imaging" }, { name: "STIR and FLAIR imaging" }, { name: "Metal reduction imaging" }, { name: "Subtraction reformat" }, { name: "Cine/CSF flow imaging" },
    ]},
    { title: "Safety & Equipment", skills: [
      { name: "MRI safety screening (implants, ferrous objects)" }, { name: "Contrast administration" }, { name: "Coil selection and setup" }, { name: "Sequence protocol selection" }, { name: "Emergency response in magnet room" }, { name: "Transmit/receive coil and surface coils" }, { name: "Inherent body coil" }, { name: "Open and closed bore systems" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Claustrophobia management" }, { name: "Pediatric sedation coordination" }, { name: "Patient positioning" }, { name: "Starting IVs" }, { name: "Choosing appropriate contrast and correct dosage calculation" },
    ]},
    { title: "Practice Setting Experience", skills: [
      { name: "Management experience" }, { name: "Physician's office" }, { name: "Mobile route" }, { name: "Teaching/educational" }, { name: "Hospital" }, { name: "Clinic" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "nuclear-medicine-tech", title: "Nuclear Medicine Technologist Skills Checklist", shortTitle: "Nuclear Medicine Tech", icon: "☢️", group: "Diagnostic & Lab", categories: [
    { title: "Nuclear Medicine Examinations", skills: [
      { name: "Bone scan (Tc 99m MDP/HDP)" }, { name: "Cardiac perfusion (stress/rest) imaging" }, { name: "Myocardial perfusion (Tc 99m Mibi)" }, { name: "MUGA (Ultratag Tc 99m RBC)" }, { name: "Thyroid uptake and scan (I-123)" }, { name: "Parathyroid SPECT/CT (Tc 99m Mibi)" }, { name: "Renal scan (glomerular filtration, Tc 99m DTPA)" }, { name: "HIDA scan (hepatobiliary, Tc 99m)" }, { name: "Lung V/Q scan (perfusion and aerosol)" }, { name: "Gallium infection scan (Ga 67)" }, { name: "PET/CT (F-18 FDG, Ga 68 Dotatate, Ga 68 PSMA-11, Cu 64 Dotatate)" }, { name: "I-131 ablation and whole-body scan" }, { name: "Lymphoscintigraphy (Tc 99m SC)" }, { name: "Liver/spleen study (Tc 99m SC)" }, { name: "Gastric emptying study (Tc 99m SC)" }, { name: "Meckel's diverticulum scan" }, { name: "Voiding cystogram" }, { name: "Cisternography (In-111 DTPA)" }, { name: "Indium-111 pentetreotide (OctreoScan) and labeled leukocyte studies" }, { name: "SPECT (Tl-201)" },
    ]},
    { title: "Radiopharmaceutical Handling", skills: [
      { name: "Radiopharmaceutical preparation" }, { name: "Dose calibration and constancy checks" }, { name: "Fundamental radiopharmacy (calculate, draw, and document dose)" }, { name: "Kit preparation and QC" }, { name: "Receiving, ordering, and transporting radioactive materials" }, { name: "Recording of byproduct material use" },
    ]},
    { title: "Radiation Safety", skills: [
      { name: "ALARA principle" }, { name: "Well counter and uptake probe peaking and setup" }, { name: "Proper use of syringe shield/gloves/coat" }, { name: "Surveying radiation level and survey meter operation" }, { name: "Performing removable contamination wipe tests" }, { name: "Cleaning removable contamination" }, { name: "Performing radioactive spill procedures" }, { name: "Monitoring hand/clothing for contamination" }, { name: "Appropriate radioactive waste disposal" }, { name: "Covering surface area during package check-in" }, { name: "Application of knowledge of radiation exposure during pregnancy" }, { name: "Application of knowledge of occupational exposure and associated risks" }, { name: "Adherence to NRC Regulatory Guide 8.13" },
    ]},
    { title: "Equipment", skills: [
      { name: "Gamma camera operation" }, { name: "SPECT imaging" }, { name: "Image processing and QC" }, { name: "Camera QC (flood, bar, center of rotation)" },
    ]},
    { title: "General Skills & Patient Care", skills: [
      { name: "Waste disposal compliance" }, { name: "Using aseptic technique" }, { name: "Application of universal and isolation precautions" }, { name: "Venipuncture/phlebotomy/IV skills" }, { name: "Positioning patients" }, { name: "Assessing patients to determine physical abilities to move/follow instructions" }, { name: "Providing patient/family education" }, { name: "Maintaining patient confidentiality and safety" }, { name: "Reviewing patient charts and charting on computer" }, { name: "Reviewing exams for technical accuracy" }, { name: "Coordinating with health physicist for audits and QC" },
    ]},
    { title: "Regulatory & Licensure", skills: [
      { name: "Maintaining certifications" }, { name: "Performing responsibilities related to legal aspects of documentation" }, { name: "Application of knowledge of location of all license-required paperwork and licensure" }, { name: "Applying procedure for safely opening packages containing radioactive materials" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "pet-ct-tech", title: "PET/CT Technologist Skills Checklist", shortTitle: "PET/CT Tech", icon: "🔬", group: "Diagnostic & Lab", categories: [
    { title: "Procedures", skills: [
      { name: "Oncology PET/CT Imaging" }, { name: "Cardiac PET Imaging" }, { name: "Neurology PET Imaging" }, { name: "Attenuation Correction" }, { name: "Whole-Body PET/CT Protocols" }, { name: "PET/MRI Imaging" },
    ]},
    { title: "Radiopharmaceutical & Safety", skills: [
      { name: "FDG Dose Preparation and Administration" }, { name: "Radiation Safety/ALARA" }, { name: "Dose Calibrator Quality Control" }, { name: "Blood Glucose Screening Pre-Injection" }, { name: "Uptake Time Management" }, { name: "Radiopharmaceutical Waste Disposal" },
    ]},
    { title: "Equipment & Image Quality", skills: [
      { name: "PET/CT Scanner Operation" }, { name: "Image Fusion and QC" }, { name: "Daily/Weekly Scanner Quality Control" }, { name: "Reconstruction Parameter Selection" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Diabetic Patient Protocol Management" }, { name: "Claustrophobia/Anxiety Management" }, { name: "Pediatric Patient Preparation" }, { name: "IV Access for Radiotracer Administration" }, { name: "Patient History and Prior Study Review" },
    ]},
  ]},

  { slug: "polysomnography-tech", title: "Polysomnography Technologist Skills Checklist", shortTitle: "Polysomnography Tech", icon: "😴", group: "Diagnostic & Lab", categories: [
    { title: "PSG Setup & Technical Skills", skills: [
      { name: "Verify recording parameters (filter, sensitivity, sampling rate)" }, { name: "Complete and verify all documentation" }, { name: "Gather and analyze patient information" }, { name: "PAP mask fitting and education (CPAP, BiPAP, APAP)" }, { name: "Prepare, calibrate, and check equipment" }, { name: "Electrode and sensor placement (EEG, EOG, EMG, ECG)" }, { name: "Respiratory event recognition (paradoxical breathing, obstructive/central/mixed, Cheyne Stokes)" }, { name: "Application of electrode skin prep" }, { name: "Know acceptable impedance ranges for EEG, EOG, EMG" }, { name: "Recognize, evaluate, and minimize artifact" }, { name: "Explain PSG pre/testing/post-test procedures to patient" }, { name: "Perform pre- and post-physiologic calibrations" }, { name: "Troubleshoot equipment" }, { name: "10/20 Method (mark and measure)" },
    ]},
    { title: "Ancillary Equipment", skills: [
      { name: "Thermistor" }, { name: "Position sensor" }, { name: "Respiratory effort sensors" }, { name: "Capnography (transcutaneous/end tidal CO2)" }, { name: "Pressure transducer (PTAF, airflow)" }, { name: "PAP device" }, { name: "Snore microphone" }, { name: "Pulse oximeter" },
    ]},
    { title: "Scoring", skills: [
      { name: "Pediatric/adult respiratory scoring rules" }, { name: "Scoring rhythmic movement disorder" }, { name: "REM/NREM staging rules" }, { name: "Cardiac scoring rules" }, { name: "Scoring periodic limb movements in sleep (PLMS)" }, { name: "Scoring bruxism" }, { name: "Pediatric/adult staging rules" }, { name: "Scoring REM sleep without atonia (RWA)" }, { name: "Scoring arousals" },
    ]},
    { title: "Data Acquisition Systems", skills: [
      { name: "Scoring sleep stages and events" }, { name: "Start and stop a PSG recording" }, { name: "Notate therapy intervention type/settings (Initiate PAP, O2)" }, { name: "Drop notations and position changes on study" }, { name: "Document patient information within software" }, { name: "Troubleshoot PAP device connection to acquisition system" }, { name: "Identify amplifier, jackbox/headbox, and cables" }, { name: "Create a PSG report" }, { name: "Complete documentation on live and review screens" },
    ]},
    { title: "Infection Control & Emergency Response", skills: [
      { name: "Standard, contact, airborne, and droplet precautions" }, { name: "Use of Material Safety Data Sheets (MSDS)" }, { name: "Electrical safety" }, { name: "Use of PPE (gloves, gown, mask, eye protection)" }, { name: "Emergency protocols" }, { name: "Fire safety" }, { name: "Cleaning, disinfecting, and sterilizing equipment" }, { name: "Emergency response (desaturation, cardiac events)" },
    ]},
    { title: "Titration Protocols", skills: [
      { name: "Average volume assured pressure support (AVAPS)" }, { name: "CPAP titration" }, { name: "BiPAP and spontaneous/timed mode (BiPAP S/T)" }, { name: "Adaptive servo-ventilation (ASV)" }, { name: "Oxygen titration" }, { name: "Titration for central sleep apnea, Cheyne Stokes, CPAP-emergent central apnea" },
    ]},
    { title: "Study Types & Montages", skills: [
      { name: "Diagnostic polysomnography (PSG)" }, { name: "CPAP/BiPAP titration study" }, { name: "Multiple Sleep Latency Test (MSLT)" }, { name: "Maintenance of Wakefulness Test (MWT)" }, { name: "Home sleep apnea testing" }, { name: "Actigraphy" }, { name: "Tracheostomy split-night/baseline polysomnography" }, { name: "Baseline and split-night polysomnography" }, { name: "REM Behavior Disorder (RBD) montage" }, { name: "Seizure montage" }, { name: "Titration montage (CPAP/BPAP/ASV/AVAPS/Oxygen)" },
    ]},
    { title: "Sleep Disorders – Recognition of Signs & Symptoms", skills: [
      { name: "Primary and secondary insomnia" }, { name: "Sleep-related hypoventilation and hypoxemia" }, { name: "Central and obstructive sleep apnea" }, { name: "Narcolepsy and hypersomnia" }, { name: "Circadian rhythm disorders (jet lag, shift work, delayed/advanced sleep phase)" }, { name: "Sleep enuresis and sleep terrors" }, { name: "Confusional arousal and sleepwalking" }, { name: "REM sleep behavior disorder" }, { name: "Sleep-related eating disorder" }, { name: "Restless leg syndrome (RLS)" }, { name: "Periodic limb movement disorder (PLMD)" }, { name: "Sleep-related bruxism" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient education pre-study" }, { name: "Overnight patient monitoring" }, { name: "Pediatric sleep studies" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Pre-school (3-6 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Young Adult (18-30 years)" }, { name: "Mature Adult (30-60 years)" }, { name: "Elderly (>60 years)" },
    ]},
  ]},

  { slug: "radiation-therapist", title: "Radiation Therapist Skills Checklist", shortTitle: "Radiation Therapist", icon: "🎯", group: "Diagnostic & Lab", categories: [
    { title: "Treatment Delivery", skills: [
      { name: "External Beam Radiation Therapy (EBRT)" }, { name: "IMRT/VMAT Delivery" }, { name: "Stereotactic Radiosurgery (SRS/SBRT)" }, { name: "Brachytherapy Assist" }, { name: "Total Body Irradiation (TBI)" }, { name: "Electron Beam Therapy" }, { name: "Patient Positioning and Immobilization" },
    ]},
    { title: "Simulation & Planning", skills: [
      { name: "CT Simulation" }, { name: "Treatment Planning System Familiarity" }, { name: "Image-Guided Radiation Therapy (IGRT)" }, { name: "Cone Beam CT Verification" }, { name: "Daily Setup Verification" }, { name: "4D CT/Respiratory Gating" },
    ]},
    { title: "Site-Specific Treatment", skills: [
      { name: "Breast Cancer Treatment" }, { name: "Prostate Cancer Treatment" }, { name: "Head and Neck Cancer Treatment" }, { name: "CNS/Brain Tumor Treatment" }, { name: "Pediatric Oncology Treatment" },
    ]},
    { title: "Patient Care & Safety", skills: [
      { name: "Radiation Safety Principles" }, { name: "Side Effect Management and Education" }, { name: "Skin Care During Treatment" }, { name: "Emotional Support for Oncology Patients" }, { name: "Nutrition/Weight Monitoring During Treatment" },
    ]},
    { title: "Equipment & Quality Assurance", skills: [
      { name: "Linear Accelerator Operation" }, { name: "Daily Machine QA Checks" }, { name: "Immobilization Device Fabrication" }, { name: "Dosimetry Verification" },
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
    { title: "Radiation Physics", skills: [
      { name: "Physical Properties of Dose and Exposure" }, { name: "Physical Property of Atoms and Nuclei" }, { name: "Basic Nuclear Transformations" }, { name: "Electron Beam Therapy" }, { name: "Medical Linear Accelerators" }, { name: "Radioactive Isotopes" }, { name: "3D Conformal Radiation Therapy" }, { name: "IMRT (Intensity Modulated Radiation Therapy)" }, { name: "Compton Scatter" }, { name: "Pair Production" }, { name: "Photoelectric Effect" }, { name: "CT Scan Interpretation for Planning" }, { name: "MRI Interpretation for Planning" }, { name: "PET Scan Interpretation for Planning" },
    ]},
    { title: "Brachytherapy Procedures", skills: [
      { name: "Prostate Seed Implants (P-103 Seeds)" }, { name: "Prostate Seed Implants (I-125 Seeds)" }, { name: "Localization" }, { name: "Computer Treatment Planning" }, { name: "Manual Verification of Computer Calculations" }, { name: "Patient Preparation, Setup, and Treatment" }, { name: "Post-Treatment Quality Assurance" }, { name: "Minor and Major Emergencies" }, { name: "Physical Plant Emergencies" }, { name: "Routine Emergency Equipment" },
    ]},
    { title: "Special Techniques", skills: [
      { name: "Stereotactic Radiosurgery (SRS)" }, { name: "Stereotactic Body Radiation Therapy (SBRT)" }, { name: "Total Body Irradiation" }, { name: "Intraoperative Radiation Therapy" },
    ]},
    { title: "Standards & Treatment Aids", skills: [
      { name: "Auxiliary Devices (Digitizer, Plotter)" }, { name: "Quality Assurance" }, { name: "Treatment Planning Software" }, { name: "In Vivo Dosimetry" }, { name: "Use of TLD (Thermoluminescent Dosimeters) Chips" }, { name: "Anatomic Landmarks" }, { name: "Field Shaping" }, { name: "Custom Blocking" }, { name: "Half-Value Thick Blocks" }, { name: "Multileaf Collimators" }, { name: "Internal Shields" }, { name: "Gonadal Shields" }, { name: "Eye Shields" }, { name: "Patient/Body Positioning" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "ultrasound-tech", title: "Diagnostic Medical Sonographer / Ultrasound Technologist Skills Checklist", shortTitle: "Ultrasound Tech", icon: "🔊", group: "Diagnostic & Lab", categories: [
    { title: "Sonography Principles & Instrumentation", skills: [
      { name: "Linear array transducer" }, { name: "Pulsed wave Doppler" }, { name: "Real-time" }, { name: "Gray-scale imaging" }, { name: "Phased array transducer" }, { name: "Power Doppler" }, { name: "2-D" }, { name: "Harmonic imaging" }, { name: "Color flow imaging" }, { name: "Assess artifacts of color Doppler imaging" }, { name: "Assist with diagnostic procedures that involve blood, body fluids, and tissues, including needle-biopsy procedures" }, { name: "Integrate all data to assist with proper diagnosis" }, { name: "Accurately differentiate between normal and pathologic findings" }, { name: "Assess artifacts of gray-scale imaging" }, { name: "Correlate ultrasound findings with other imaging modalities" }, { name: "Perform diagnostic image assessment" }, { name: "Assess artifacts of spectral Doppler imaging" }, { name: "Identify, record, and adapt procedures" }, { name: "Evaluate sonograms to acquire appropriate diagnostic information, make adjustments to output power, presets, and resolution to optimize image quality" }, { name: "Perform all requested sonographic examinations as ordered by the physician" },
    ]},
    { title: "Hemodynamic & Doppler Principles", skills: [
      { name: "Assess vascularity of the neck structures for abnormalities" }, { name: "Assess retroperitoneum (e.g. great vessels and branches) for perfusion" }, { name: "Assess spleen for vascular abnormalities (e.g. infarction)" }, { name: "Assess glands of the neck (thyroid, parathyroid, salivary) for perfusion" }, { name: "Assess liver for perfusion" }, { name: "Assess biliary system for perfusion" }, { name: "Assess urinary system (kidneys, ureters, bladder) for function and/or perfusion" }, { name: "Evaluate scrotum and contents (testes, epididymis) for function and/or perfusion" }, { name: "Adjust color scale" }, { name: "Modify exam based upon artifacts" }, { name: "Adjust color gain" }, { name: "Adjust color angle to flow" }, { name: "Obtain measurements of blood flow velocities" },
    ]},
    { title: "Abdominal Sonography", skills: [
      { name: "Evaluate urinary system for masses and obstruction" }, { name: "Assess normal anatomy of abdomen" }, { name: "Identify anatomic structures of the retroperitoneum" }, { name: "Evaluate liver for vascular abnormalities" }, { name: "Evaluate GI system for inflammation (e.g. appendicitis, colitis)" }, { name: "Identify anatomic structures of the liver" }, { name: "Assess peritoneal cavity for presence of fluid" }, { name: "Evaluate GI system for obstruction (e.g. pyloric stenosis, intussusception)" }, { name: "Identify splenic masses" }, { name: "Assess diffuse splenic disease (e.g. splenomegaly, parenchymal changes)" }, { name: "Evaluate adrenal glands for masses and/or trauma" }, { name: "Assess pancreatic infection" }, { name: "Assess biliary infection" }, { name: "Identify anatomic structures of the pancreas" }, { name: "Identify biliary masses (e.g. primary tumors, metastatic disease) and obstruction" }, { name: "Evaluate urinary system for vascular abnormalities" }, { name: "Identify anatomic structures of the spleen" }, { name: "Identify hepatic masses (e.g. neoplasm, abscess, cyst)" }, { name: "Evaluate GI system for herniation" }, { name: "Identify anatomic structures of the biliary system" }, { name: "Assess pancreatic masses and obstruction" }, { name: "Identify anatomic structures of the urinary system" }, { name: "Identify anatomic structures of the peritoneal cavity" }, { name: "Evaluate urinary system for parenchymal disease" }, { name: "Assess diffuse hepatocellular disease (e.g. hepatitis, fatty infiltration, cirrhosis)" },
    ]},
    { title: "Male Genitourinary Sonography", skills: [
      { name: "Identify anatomic structures of the prostate" }, { name: "Evaluate scrotum and content for abnormalities related to traumatic events" }, { name: "Identify anatomic structures of the scrotum and contents (testes, epididymis)" }, { name: "Identify anatomic structures of the penis" }, { name: "Evaluate prostate for benign prostatic hypertrophy" },
    ]},
    { title: "Small Parts Sonography", skills: [
      { name: "Evaluate superficial structures for foreign body" }, { name: "Evaluate superficial structures for infection" }, { name: "Evaluate breast for infection or abscess" }, { name: "Evaluate joints for effusion" }, { name: "Identify anatomic structures of the glands of the neck (thyroid, parathyroid, salivary)" }, { name: "Evaluate superficial structures for masses" }, { name: "Identify anatomic structures of other superficial structures (e.g. subcutaneous)" },
    ]},
    { title: "Obstetrics & Gynecology Sonography", skills: [
      { name: "Evaluate pelvic pathology" }, { name: "Perform fetal biophysical profile" }, { name: "Evaluate uterus and adnexa" }, { name: "Perform follicular study" }, { name: "Evaluate second/third trimester pregnancy" }, { name: "Assess nuchal translucency" }, { name: "Identify fetal demise" }, { name: "Evaluate postmenopausal pathology" }, { name: "Identify fetal abnormalities" }, { name: "Evaluate placenta" }, { name: "Assess amniotic fluid/perform amniocentesis" }, { name: "Evaluate ovaries and adnexa" }, { name: "Determine gestational age" }, { name: "Evaluate first trimester pregnancy" }, { name: "Identify pregnancy complications" }, { name: "Perform trans-vaginal sonography" }, { name: "Manage high risk OB cases" },
    ]},
    { title: "Patient Care & Daily Operations", skills: [
      { name: "Properly clean work area" }, { name: "Perform quality assessment" }, { name: "Perform quality assurance reviews" }, { name: "Accurately charge for services rendered" }, { name: "Maintain adequate supplies" }, { name: "Provide in-service education on requirements of sonographic procedures" }, { name: "Maintain daily log of patients" }, { name: "Properly clean & disinfect equipment" }, { name: "Coordinate patient schedule" }, { name: "Report equipment failures to appropriate personnel" }, { name: "Perform equipment maintenance" }, { name: "Prepare preliminary reports and contact referring physicians when required" }, { name: "Act as a patient advocate supporting patient rights" }, { name: "Inform patient or referring practitioner of examination preparations (e.g. fasting for biliary imaging)" }, { name: "Assist during and/or provide ultrasound guidance for procedures" }, { name: "Use sterile technique when preparing for procedure, as appropriate" }, { name: "Perform medical history assessment" }, { name: "Follow strict protocol and comply with all established departmental procedures" }, { name: "Assess indications for examination requested" }, { name: "Communicate and coordinate with interdisciplinary team regarding patient transport" }, { name: "Establish and maintain ethical working relationships" }, { name: "Modify the examination based on sonographic findings" }, { name: "Follow all safety requirements including patient identification measures (e.g. two forms of ID)" }, { name: "Assess relevant clinical lab values for examination being performed" }, { name: "Coordinate with other staff to assure appropriate exam preparations are followed (e.g. fasting)" }, { name: "Address & resolve problems of patient care as they arise" }, { name: "Maintain good rapport with all interrelating hospitals, referral, or commercial agencies" }, { name: "Document services and care rendered" }, { name: "Use multiple patient positions and planes to evaluate anatomic structures" }, { name: "Communicate findings to the appropriate physician" }, { name: "Explain procedure to the patient and/or family member as applicable prior to examination" }, { name: "Provide emotional and physical comfort" }, { name: "Incorporate patient-specific data (clinical assessment, H&P, lab values)" }, { name: "Assist in needle biopsy procedures" }, { name: "Complete billing forms, as appropriate" }, { name: "Provide patient education on procedures performed" }, { name: "Manage medical emergencies" }, { name: "Adhere to infection control practices" }, { name: "Communicate and coordinate care ensuring proper hand-off" }, { name: "Ensure safety, mental and physical comfort of patients" }, { name: "Recognize findings requiring immediate action" }, { name: "Obtain consent form and patient lab results prior to a procedure" }, { name: "Assess relevant patient signs and symptoms for examination being performed" }, { name: "Incorporate outside data (clinical assessment, H&P, lab values)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "medical-physicist", title: "Medical Physicist Skills Checklist", shortTitle: "Medical Physicist", icon: "⚛️", group: "Diagnostic & Lab", categories: [
    { title: "Dosimetry & Treatment Planning", skills: [
      { name: "Review of patient calculations" }, { name: "Knowledge of dosimetry systems" }, { name: "Special dosimetry calculations" }, { name: "Hand calculations of monitor unit settings" }, { name: "IMRT/VMAT plan verification" }, { name: "Patient-specific QA measurements" }, { name: "Monitor unit independent calculation" }, { name: "Ion chamber measurements" }, { name: "Diode/TLD dosimetry" },
    ]},
    { title: "Treatment Devices", skills: [
      { name: "Localization, design, and fabrication (simple)" }, { name: "Localization, design, and fabrication (intermediate)" }, { name: "Localization, design, and fabrication (complex)" },
    ]},
    { title: "Brachytherapy", skills: [
      { name: "Simple isodose calculations" }, { name: "Intermediate isodose calculations" }, { name: "Complex isodose calculations" }, { name: "Brachytherapy plan review" }, { name: "Seed, needle, or capsule inventory" }, { name: "Initial assurance of isotope implants" }, { name: "Continuing quality assurance" },
    ]},
    { title: "Equipment Calibration & QA", skills: [
      { name: "Linear accelerator output calibration" }, { name: "CT/simulator QA" }, { name: "Imaging equipment QA (mammography, MRI, nuclear medicine)" }, { name: "Annual/monthly machine QA per AAPM protocols" }, { name: "Daily accelerator checks" }, { name: "Annual full calibrations" }, { name: "Monitor standards for compliance (AAPM and RPC)" }, { name: "Other radiotherapy ancillary equipment QA tests" },
    ]},
    { title: "Radiation Safety", skills: [
      { name: "Shielding design and survey" }, { name: "Radiation dose monitoring/ALARA program" }, { name: "Incident investigation" }, { name: "Radiation safety procedures" }, { name: "Radiation measuring instrument calibration (NBS)" },
    ]},
    { title: "Regulatory Compliance", skills: [
      { name: "State/NRC licensing compliance" }, { name: "Joint Commission radiation oncology standards" }, { name: "Documentation and reporting" },
    ]},
    { title: "Equipment & Systems", skills: [
      { name: "Linear accelerator (e.g., Varian 2100EX w/ IMRT, Trilogy)" }, { name: "CT simulator" }, { name: "Treatment planning system (e.g., Pinnacle, Eclipse)" }, { name: "Water phantom scanning system" }, { name: "Ultrasound localization system" }, { name: "Record and verify system (e.g., IMPAC/Access)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Pre-school (3-6 years)" }, { name: "School Age (6-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Young Adult (18-30 years)" }, { name: "Mature Adult (30-60 years)" }, { name: "Elderly (>60 years)" },
    ]},
  ]},

  { slug: "cytotechnologist", title: "Cytotechnologist Skills Checklist", shortTitle: "Cytotechnologist", icon: "🔬", group: "Diagnostic & Lab", categories: [
    { title: "Gynecologic Cytology", skills: [
      { name: "Pap Smear Screening" }, { name: "Liquid-Based Cytology Preparation" }, { name: "HPV Co-Testing Correlation" }, { name: "Squamous Cell Abnormality Identification" }, { name: "Glandular Cell Abnormality Identification" },
    ]},
    { title: "Non-Gynecologic Cytology", skills: [
      { name: "Fine Needle Aspiration (FNA) Screening" }, { name: "Body Fluid Cytology (Pleural, Peritoneal, CSF)" }, { name: "Urine Cytology" }, { name: "Respiratory Cytology (Bronchial Wash/Brush)" }, { name: "Fine Needle Aspiration Rapid On-Site Evaluation (ROSE)" },
    ]},
    { title: "Laboratory Technique", skills: [
      { name: "Specimen Preparation and Staining" }, { name: "Papanicolaou Staining Technique" }, { name: "Quality Control Procedures" }, { name: "LIS Documentation" }, { name: "Correlation With Histology/Biopsy Results" }, { name: "Immunocytochemistry Techniques" },
    ]},
    { title: "Compliance", skills: [
      { name: "CAP/CLIA Regulatory Compliance" }, { name: "Proficiency Testing Participation" }, { name: "Bethesda System Reporting Standards" }, { name: "Turnaround Time Standards" },
    ]},
  ]},

  { slug: "histology-tech", title: "Histology Technician Skills Checklist", shortTitle: "Histology Tech", icon: "🧫", group: "Diagnostic & Lab", categories: [
    { title: "Specimen Processing", skills: [
      { name: "Tissue Grossing Assist" }, { name: "Tissue Processing/Embedding" }, { name: "Microtomy/Sectioning" }, { name: "Special Stains (H&E, IHC)" }, { name: "Frozen Section Preparation" }, { name: "Decalcification Techniques" }, { name: "Cytology Slide Preparation" },
    ]},
    { title: "Equipment Operation & Quality Control", skills: [
      { name: "Operate and Maintain Tissue Processor" }, { name: "Operate and Maintain Automatic Coverslipper" }, { name: "Operate and Maintain IHC Stainer" }, { name: "Operate, Clean, and Maintain Microscopes" }, { name: "Operate and Maintain Microtomes" }, { name: "Operate and Maintain Slide Stainer" }, { name: "Operate and Maintain Cryostat" }, { name: "Conduct Validations of New Equipment" }, { name: "Calibrate Pipettors at Least Annually" }, { name: "Check Refrigerators and Freezers Daily for Proper Operation" }, { name: "Document Corrective Actions for Out-of-Range Refrigerator/Freezer Temperatures" },
    ]},
    { title: "Staining Processed Tissue", skills: [
      { name: "Select Stain Based on Substance Reactivity" }, { name: "Recognize Substances in Tissues via Color Reaction" }, { name: "Perform Positive Controls on Stains" }, { name: "Select Mounting Media" }, { name: "Place Coverslip on Slide After Staining" },
    ]},
    { title: "Safety Practices", skills: [
      { name: "Wear PPE in Accordance With Infection Prevention Policies" }, { name: "Know Location and How to Access Safety Data Sheets" }, { name: "Safely Dilute Acids" }, { name: "Formalin/Xylene Chemical Safety Handling" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
    { title: "Compliance", skills: [
      { name: "CAP/CLIA Regulatory Compliance" }, { name: "Specimen Chain of Custody" }, { name: "Proficiency Testing Participation" },
    ]},
  ]},

  { slug: "pathologist-assistant", title: "Pathologist / Pathologist Assistant Skills Checklist", shortTitle: "Pathologist Assistant", icon: "🩸", group: "Diagnostic & Lab", categories: [
    { title: "Gross & Surgical Pathology", skills: [
      { name: "Surgical Specimen Grossing" }, { name: "Small Biopsy Grossing" }, { name: "Complex Resection Grossing (e.g., Oncologic Resections)" }, { name: "Autopsy Assist" }, { name: "Frozen Section Preparation and Consultation" }, { name: "Specimen Photography and Documentation" }, { name: "Lymph Node Dissection" }, { name: "Margin Assessment and Inking" },
    ]},
    { title: "Diagnostic Support", skills: [
      { name: "Microscopic Slide Preparation for Physician Review" }, { name: "Correlation With Clinical/Radiologic Findings" }, { name: "Molecular/IHC Test Coordination" }, { name: "Cytogenetic Specimen Handling" }, { name: "Tumor Board Case Preparation" },
    ]},
    { title: "Specimen Handling & Systems", skills: [
      { name: "Specimen Accessioning" }, { name: "Chain of Custody Documentation" }, { name: "LIS Documentation" }, { name: "Cassette and Slide Labeling Accuracy" }, { name: "Fixation and Decalcification Protocols" },
    ]},
    { title: "Compliance & Safety", skills: [
      { name: "CAP/CLIA Regulatory Compliance" }, { name: "Formalin/Chemical Safety Handling" }, { name: "Biohazard Waste Disposal" }, { name: "Quality Assurance Participation" }, { name: "Proficiency Testing Participation" },
    ]},
  ]},
];
