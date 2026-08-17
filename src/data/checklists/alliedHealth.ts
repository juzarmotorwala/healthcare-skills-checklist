import { ChecklistSpec } from "../checklistData";

export const alliedHealthChecklists: ChecklistSpec[] = [
  { slug: "pharmacist", title: "Pharmacist Skills Checklist", shortTitle: "Pharmacist", icon: "💊", group: "Allied Health", categories: [
    { title: "Practice Settings/Experience", skills: [
      { name: "Academia" }, { name: "Ambulatory Care" }, { name: "Clinic" }, { name: "Compounding" }, { name: "Consulting" }, { name: "Correctional Facility" }, { name: "Government/VA" }, { name: "Home Infusion" }, { name: "Hospital Inpatient" }, { name: "Hospital Outpatient" }, { name: "Long Term Care" }, { name: "Managed Care" }, { name: "Nuclear Pharmacy" }, { name: "Oncology" }, { name: "Pediatric" }, { name: "Psychiatric" }, { name: "Retail/Community" },
    ]},
    { title: "Clinical Skills", skills: [
      { name: "Medication Therapy Management" }, { name: "Drug Information" }, { name: "Pharmacokinetics" }, { name: "IV Admixture/Compounding" }, { name: "TPN Compounding" }, { name: "Chemotherapy Preparation" }, { name: "Anticoagulation Management" }, { name: "Pain Management" },
    ]},
    { title: "Dispensing", skills: [
      { name: "Prescription Processing" }, { name: "Medication Verification" }, { name: "Patient Counseling" }, { name: "Drug Utilization Review" }, { name: "Controlled Substance Management" },
    ]},
    { title: "Technology", skills: [
      { name: "Automated Dispensing (Pyxis, Omnicell)" }, { name: "IV Workflow Systems" }, { name: "Electronic Health Record" }, { name: "CPOE" }, { name: "Barcode Verification" },
    ]},
    { title: "Regulatory", skills: [
      { name: "Joint Commission Standards" }, { name: "State Board of Pharmacy" }, { name: "DEA Regulations" }, { name: "USP 797/800 Compliance" }, { name: "Medication Error Reporting" },
    ]},
  ]},

  { slug: "pharmacy-technician", title: "Pharmacy Technician Skills Checklist", shortTitle: "Pharmacy Technician", icon: "🧴", group: "Allied Health", categories: [
    { title: "Communication", skills: [
      { name: "Organize written and oral communication" }, { name: "Question healthcare professionals for patient information" }, { name: "Communicate appropriately with audience" }, { name: "Use good listening skills" },
    ]},
    { title: "Dispensing", skills: [
      { name: "Prescription Processing" }, { name: "Medication Counting/Pouring" }, { name: "Label Generation" }, { name: "Medication Packaging" }, { name: "Automated Dispensing Systems" }, { name: "Unit Dose Packaging" },
    ]},
    { title: "Compounding", skills: [
      { name: "Non-Sterile Compounding" }, { name: "Sterile Compounding (IV)" }, { name: "TPN Preparation" }, { name: "Chemotherapy Preparation" }, { name: "Aseptic Technique" },
    ]},
    { title: "Inventory Management", skills: [
      { name: "Ordering" }, { name: "Receiving" }, { name: "Storage" }, { name: "Controlled Substance Tracking" }, { name: "Expiration Date Monitoring" }, { name: "Drug Recall Management" },
    ]},
    { title: "Technology", skills: [
      { name: "Automated Dispensing Machines" }, { name: "Pharmacy Information Systems" }, { name: "Robot/Carousel Systems" }, { name: "IV Workflow Systems" },
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
      { name: "BP, including Orthostatic" }, { name: "Vital Signs and Weights" }, { name: "Administering an Enema" }, { name: "Applying Ted Hose" }, { name: "Assessing Respirations" }, { name: "Bathing (Bed/Shower/Tub)" }, { name: "Blood Glucose Monitoring" }, { name: "Catheter Care" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Ambulation" }, { name: "Positioning/Turning" }, { name: "Transfer (Bed/Chair/Commode)" }, { name: "ROM Exercises" }, { name: "Feeding Patients" }, { name: "Oral Care" }, { name: "Perineal Care" }, { name: "Skin Assessment" },
    ]},
    { title: "Phlebotomy", skills: [
      { name: "Venipuncture" }, { name: "Capillary Puncture" }, { name: "Blood Cultures" }, { name: "Specimen Processing" },
    ]},
    { title: "EKG", skills: [
      { name: "12-Lead EKG" }, { name: "Rhythm Strip" }, { name: "Telemetry Monitor" },
    ]},
    { title: "Safety", skills: [
      { name: "Fall Prevention" }, { name: "Restraint Application" }, { name: "Infection Control" }, { name: "Standard Precautions" }, { name: "Sharps Disposal" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "pct", title: "PCT Skills Checklist", shortTitle: "PCT", icon: "🤲", group: "Allied Health", categories: [
    { title: "Patient Rights", skills: [
      { name: "Communicates and obtains information respecting HIPAA" }, { name: "Involves patient and family in care decisions" }, { name: "Complies with Organ Donation policy" }, { name: "Meets communication needs including interpreter services" },
    ]},
    { title: "Vital Signs and Weights", skills: [
      { name: "BP, including Orthostatic" }, { name: "Pulse, Radial" }, { name: "Temperature (Oral, Rectal, Axillary, Tympanic)" }, { name: "Respirations" }, { name: "Weight (Standing, Chair, Bed)" }, { name: "Pulse Oximetry" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Bathing" }, { name: "Oral Care" }, { name: "Feeding" }, { name: "Ambulation" }, { name: "Positioning/Turning" }, { name: "Transfer (Bed/Chair)" }, { name: "ROM Exercises" }, { name: "Incontinence Care" },
    ]},
    { title: "Specimen Collection", skills: [
      { name: "Urine Collection" }, { name: "Stool Collection" }, { name: "Sputum Collection" }, { name: "Blood Glucose Testing" },
    ]},
    { title: "Safety", skills: [
      { name: "Fall Prevention" }, { name: "Restraint Use" }, { name: "Infection Control" }, { name: "Hand Hygiene" }, { name: "Standard Precautions" }, { name: "Proper Body Mechanics" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "ophthalmic-tech", title: "Ophthalmic Technician Skills Checklist", shortTitle: "Ophthalmic Tech", icon: "👁️", group: "Allied Health", categories: [
    { title: "Diagnostic Testing", skills: [
      { name: "Visual acuity testing" }, { name: "Tonometry (IOP measurement)" }, { name: "Refraction/autorefraction" }, { name: "Visual field testing" }, { name: "OCT imaging" }, { name: "Fundus photography" },
    ]},
    { title: "Clinical Skills", skills: [
      { name: "Pupil dilation" }, { name: "Slit lamp assist" }, { name: "Contact lens fitting assist" }, { name: "Minor procedure assist" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Patient history intake" }, { name: "Pediatric and geriatric patient handling" }, { name: "Equipment sterilization" },
    ]},
  ]},

  { slug: "audiologist", title: "Audiologist Skills Checklist", shortTitle: "Audiologist", icon: "👂", group: "Allied Health", categories: [
    { title: "Diagnostic Testing", skills: [
      { name: "Pure tone audiometry" }, { name: "Speech audiometry" }, { name: "Tympanometry" }, { name: "Otoacoustic emissions (OAE) testing" }, { name: "Auditory brainstem response (ABR) testing" }, { name: "Newborn hearing screening" },
    ]},
    { title: "Treatment & Rehabilitation", skills: [
      { name: "Hearing aid fitting and programming" }, { name: "Cochlear implant candidacy evaluation" }, { name: "Aural rehabilitation" }, { name: "Tinnitus management" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Pediatric hearing assessment" }, { name: "Geriatric hearing assessment" }, { name: "Patient/family counseling and education" },
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
    { title: "Procedures", skills: [
      { name: "Suturing/wound repair" }, { name: "Joint/fracture reduction assist" }, { name: "Minor surgical procedures" }, { name: "First assist in surgery" },
    ]},
    { title: "Prescriptive & Documentation", skills: [
      { name: "Prescriptive authority within scope" }, { name: "EMR documentation and coding" }, { name: "Care coordination with supervising physician" },
    ]},
    { title: "Specialty Exposure", skills: [
      { name: "Emergency medicine" }, { name: "Primary care" }, { name: "Surgical specialties" }, { name: "Hospitalist medicine" },
    ]},
  ]},
];
