import { ChecklistSpec } from "../checklistData";

export const nursingChecklists: ChecklistSpec[] = [
  { slug: "rn", title: "Registered Nurse Skills Checklist", shortTitle: "Registered Nurse (RN)", icon: "🩺", group: "Nursing", categories: [
    { title: "Medication Administration", skills: [
      { name: "Documentation on M.A.R." }, { name: "Dose calculation" }, { name: "Generic equivalents" }, { name: "Usage of PDR" }, { name: "Knowledge of drug actions/interactions" }, { name: "Verification of narcotic wastage" }, { name: "Oral medications" }, { name: "Sublingual medications" }, { name: "Intradermal medications" }, { name: "Parenteral medications" }, { name: "Subcutaneous medications" }, { name: "Intramuscular medications" }, { name: "Topical medications" }, { name: "Eye drops" }, { name: "Ear drops" }, { name: "Swallowing precautions" }, { name: "Inventory and storage control" },
    ]},
    { title: "Infectious Control", skills: [
      { name: "AIDS/HIV interaction" }, { name: "Hepatitis interaction" }, { name: "Hospice" }, { name: "MRSA" }, { name: "VRE" }, { name: "Fever management" }, { name: "Interpretation of labs" }, { name: "Decubitus/Wound care (Contaminated)" }, { name: "Linen - Transporting, storing, & Handling" }, { name: "Proper disposal of sharps and waste" }, { name: "Standard precautions" },
    ]},
    { title: "Pain Management", skills: [
      { name: "Documentation and assessment of site, character, & frequency of pain" }, { name: "Assessment of pain levels" }, { name: "Documentation of response to pain medications" },
    ]},
    { title: "Intravenous Therapy", skills: [
      { name: "I.V. certified" }, { name: "Administration of I.V. antibiotics" }, { name: "Administration of I.V. fluids" }, { name: "Administration of I.V. pain medications" }, { name: "Administration of I.V. cardiac meds" }, { name: "Blood draws - peripheral" }, { name: "Blood draws - central line" }, { name: "Blood draws - implanted catheter" }, { name: "Care of I.V. site - peripheral" }, { name: "Care of I.V. site - central line" }, { name: "I.V. dose calculations" }, { name: "I.V. insertion - peripheral" }, { name: "Use of infusion pumps" },
    ]},
    { title: "Diabetic Care", skills: [
      { name: "Diabetic monitoring" }, { name: "S/S hyper/hypoglycemia" }, { name: "Diabetic patient teaching" }, { name: "Performing fingersticks" }, { name: "Use of glucometers" }, { name: "Insulin infusions" }, { name: "Regular, long-acting insulin" }, { name: "Mixed insulin" },
    ]},
    { title: "Orthopedics", skills: [
      { name: "Assessment of circulation" }, { name: "Assessment of gait" }, { name: "Assessment of range of motion" }, { name: "Amputation care" }, { name: "Post-arthroscopy care" }, { name: "Casts and related care" }, { name: "Total hip replacement" }, { name: "Total knee replacement" },
    ]},
    { title: "Cardiovascular Problems", skills: [
      { name: "Auscultation of rate/rhythm" }, { name: "Blood pressure" }, { name: "Doppler" }, { name: "Pulses" }, { name: "CPR" }, { name: "Angina" }, { name: "Congestive heart failure" },
    ]},
    { title: "Wounds, Pressure Sores, and Skin Impairments", skills: [
      { name: "Assessment and care of post-surgical wounds" }, { name: "Assessment, prevention, and care of pressure ulcers" }, { name: "Dressing changes - aseptic" }, { name: "Dressing changes - sterile" }, { name: "Wound irrigation" }, { name: "Staple and suture removal" },
    ]},
  ]},

  { slug: "lpn", title: "Licensed Practical Nurse Skills Checklist", shortTitle: "LPN", icon: "💉", group: "Nursing", categories: [
    { title: "Skills", skills: [
      { name: "Activities of daily living" }, { name: "Admission of patient" }, { name: "Administration of medication" }, { name: "Ambulation" }, { name: "Application of heat and cold" }, { name: "Aseptic Technique" }, { name: "Assist with medical examination" }, { name: "Bathing: Sitz, tub, bed, shower" }, { name: "Bandaging" }, { name: "Binders" }, { name: "Body Alignment" }, { name: "Body Systems Review (Head to Toe data collection)" }, { name: "Cast care" }, { name: "Catheterization / Foley catheter care" }, { name: "Charting" }, { name: "Colostomy Care and irrigation" }, { name: "CPR" }, { name: "Crutch walking" }, { name: "Decubitus Care" }, { name: "Diabetic tests and preparation forms" }, { name: "Diabetic blood glucose testing" }, { name: "Discharge patients" }, { name: "Dosage computation" }, { name: "Draping" }, { name: "Dressing (sterile)" }, { name: "Ear drops" }, { name: "Elimination needs" }, { name: "Enemas, cleansing, retention, Harris flush" }, { name: "Restraints" }, { name: "Infection Control: Standard Universal Precautions" }, { name: "Infection Control: Reverse Isolation" }, { name: "Infection Control: TB/Airborne Precautions" }, { name: "Infection Control: MRSA/VRE Precautions" }, { name: "Isolation procedure for specimen collection" }, { name: "IVs: Monitor rate and infusion site" }, { name: "Medications: Oral, IM, SQ" }, { name: "Mouth care" }, { name: "Nail Care" }, { name: "Neurological Check" }, { name: "Nutritional check" }, { name: "Observations: Response to treatments/meds" }, { name: "Observations: Signs of significant body system changes" }, { name: "Observations: Signs of shock" }, { name: "Observations: Signs of pain" }, { name: "Observes safety procedures" }, { name: "O2 administration" }, { name: "Pain assessment" }, { name: "Patient care plans (revise and update)" }, { name: "Patient safety standards/precautions" }, { name: "Positioning patient" }, { name: "Postural drainage" }, { name: "Pre-op and post-op care" }, { name: "Provide comfort, safety and privacy" }, { name: "Pulse oximetry" }, { name: "Range of motion" }, { name: "Report observations/changes" }, { name: "Hand hygiene" }, { name: "Skin care" }, { name: "Specimen collection: routine urine" }, { name: "Specimen collection: clean catch" }, { name: "Specimen collection: 12 & 24 hour specimen" }, { name: "Specimen collection: stool" }, { name: "Specimen collection: culture" }, { name: "Specimen collection: sputum" }, { name: "Specimen collection: from foley catheter" }, { name: "Suppositories" }, { name: "Suction-oral" }, { name: "Surgical Preps" }, { name: "Computerized charting" }, { name: "Trach care/suctioning" }, { name: "Telephone manners" }, { name: "Topical Medication Application" }, { name: "Traction" }, { name: "Transfer/transport patients: wheelchair" }, { name: "Transfer/transport patients: gurney" }, { name: "Transfer/transport patients: to chair" }, { name: "Urine test for glucose/acetone" }, { name: "Vital Signs" }, { name: "Weight: Bed scales and standing scales" }, { name: "IV therapy certified" },
    ]},
    { title: "Admission, Discharge & Transport", skills: [
      { name: "Provide patient orientation to room" }, { name: "Adjust bed settings/controls" }, { name: "Secure patient valuables" }, { name: "Equipment set-up" }, { name: "Provide assistance with hospital gown" }, { name: "Provide notification to nurse of patient arrival" }, { name: "Assist patient with personal belongings" }, { name: "Assist with transport for patient such as a wheelchair/stretcher" },
    ]},
    { title: "Bathing & Bedmaking", skills: [
      { name: "Partial Bed Bath" }, { name: "Complete Bed Bath" }, { name: "Whirlpool Bath" }, { name: "Shower" }, { name: "Tub Bath with Assist" }, { name: "Sitz Bath" }, { name: "Occupied Bedmaking" }, { name: "Unoccupied Bedmaking" }, { name: "Post-Op Surgical Bedmaking" },
    ]},
    { title: "Oral Hygiene", skills: [
      { name: "Mouth Care (Swab, Lip Ointment)" }, { name: "Dental Care" }, { name: "Care of Partials" }, { name: "Brushing Teeth" },
    ]},
    { title: "Special Patient Care", skills: [
      { name: "Care for Suicidal Patient" }, { name: "Care for the Dying Patient" }, { name: "Care for Combative Patient" }, { name: "Care for Patient with DNR Order" }, { name: "Care for Confused Patient" }, { name: "Post-Mortem Care in Accordance with Cultural and Religious Considerations" },
    ]},
    { title: "Clinical Procedures", skills: [
      { name: "Properly Label All Specimens" }, { name: "Drains Associated with Post-Operative Care (Jackson-Pratt, Hemo-Vac, Wound Vacs)" }, { name: "Simple Dressing Change, if Applicable" }, { name: "Administration of Enemas (Soap Suds/Fleets)" }, { name: "Set/Application of Hot/Cold Packs as Directed" }, { name: "Bowel/Bladder Training" }, { name: "Prep Patient Prior to Surgery" }, { name: "Perform Fingerstick for Blood Glucose" }, { name: "Vaginal Douche" }, { name: "Removal of Indwelling Foley Catheter" }, { name: "Removal of External Foley Catheter" }, { name: "Application of TED/Support Stockings" }, { name: "Application of K-Pads/Modules" }, { name: "Perform Identification of Patient Using Two Patient Identifiers" }, { name: "Replace Telemetry Leads and Change Batteries as Needed" }, { name: "Assist Nursing Staff During Patient, Departmental, and Facility Emergencies" }, { name: "Specimen Collection: Urine (Clean Catch)" }, { name: "Specimen Collection: Urine (Foley)" }, { name: "Specimen Collection: Emesis" }, { name: "Specimen Collection: Stool" }, { name: "Specimen Collection: Blood (Fingerstick)" },
    ]},
    { title: "Equipment", skills: [
      { name: "Bed Alarm" }, { name: "Scales" }, { name: "Therapeutic Beds" }, { name: "Therapeutic Mattresses" }, { name: "Bed Position" }, { name: "Hoyer Lift" }, { name: "HoverJack" }, { name: "HoverMatt" }, { name: "Sequential Compression Devices" }, { name: "Pneumatic Tube System" }, { name: "Utilize Computer or Electronic Device at a Basic Level" }, { name: "Wound Vacuums" }, { name: "Walker/Crutches" }, { name: "Care of Oxygen Equipment" }, { name: "Blood Glucose Monitor" }, { name: "Suction Equipment Set-Up" }, { name: "Bladder Scanner" }, { name: "Traction" }, { name: "Hospital Communication/Information Systems" }, { name: "ABG Kits" }, { name: "Knowledge of Use of Egg Crate Mattress" }, { name: "Use of Corstavac Suction" },
    ]},
    { title: "IV Therapy, Assessment & Team Leadership", skills: [
      { name: "Heparin Lock" }, { name: "Chemotherapy IV Administration" }, { name: "Discontinuing an IV" }, { name: "Perform Gastrointestinal Assessment" }, { name: "Care of the Patient in Reverse Isolation" }, { name: "Performing Team Leader Duties" },
    ]},
    { title: "Documentation", skills: [
      { name: "Document Using Checklist Format" }, { name: "Document Using Narrative Format" }, { name: "Document Using Graphic Notes" }, { name: "Utilize Computerized Documentation" }, { name: "Document Work-Related Activities and Actions" }, { name: "Utilize Common Medical Acronyms and Abbreviations" }, { name: "Record and Calculate Intake & Output Measurements" }, { name: "Read and Document Time Correctly, Calculate Time Intervals" }, { name: "Report and Document Incidents" }, { name: "Use of English and Metric Conversions to Calculate Measurements" },
    ]},
    { title: "Clinical Settings Experience", skills: [
      { name: "Nursing Home/Skilled Nursing Facility" }, { name: "Acute Care/Hospital" }, { name: "Central Supply" }, { name: "Labor & Delivery" }, { name: "Home Care" }, { name: "Clinic" }, { name: "Behavioral Health" }, { name: "Med-Surg" }, { name: "Surgical Unit" }, { name: "Neuro Unit" }, { name: "Orthopedic" }, { name: "1:1 Patient" }, { name: "Alzheimer's" }, { name: "Urology" }, { name: "Crisis Intervention" }, { name: "Geriatric" }, { name: "OB/GYN" }, { name: "Cardiac Unit" }, { name: "Nursery" }, { name: "Private Duty" }, { name: "Hospice" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "lpn-snf-ltc", title: "LPN – Skilled Nursing Facility/Long-Term Care Skills Checklist", shortTitle: "LPN – SNF/LTC", icon: "🏥", group: "Nursing", categories: [
    { title: "Administration, Role & Resident Rights", skills: [
      { name: "Familiar with State and Federal Survey Processes" }, { name: "Promote Resident Safety (Fall/Bleeding Precautions)" }, { name: "Uphold Resident Dignity and Privacy at All Times" },
    ]},
    { title: "Communication & Documentation", skills: [
      { name: "Communicate Clearly and Effectively with Others" }, { name: "Use Electronic Documentation Methods Appropriately" }, { name: "Document Care per State/Federal Regulations" }, { name: "Understand Mandatory Reporting Requirements" }, { name: "Facilitate Communication Within the Healthcare Team" },
    ]},
    { title: "Clinical Assessment by System", skills: [
      { name: "Provide Paralysis Care" }, { name: "Understand Special Diet Needs" }, { name: "Recognize Shortness of Breath" }, { name: "Auscultate Lung Sounds" }, { name: "Evaluate Metabolic/Endocrine System" }, { name: "Maintain Shunts and Fistulas (Genitourinary)" }, { name: "Provide Care for Total Knee Replacement (Musculoskeletal)" }, { name: "Perform Sterile Wound Care (Integumentary)" }, { name: "Obtain Blood Pressure (Manual/Automatic)" }, { name: "Obtain Heart Rate" }, { name: "Identify Signs and Symptoms of Infection (e.g., Swelling)" }, { name: "Identify Dietary Restrictions" },
    ]},
    { title: "Medication Administration", skills: [
      { name: "Identify Signs/Symptoms of Adverse or Allergic Reactions" }, { name: "Oral Medication (Liquids)" }, { name: "Topical Medication (Powders)" }, { name: "Drops Medication (Ophthalmic)" }, { name: "Suppositories (Vaginal)" }, { name: "Aerosol/Powdered Medication (Oxygen)" }, { name: "Injections (Subcutaneous)" }, { name: "IV Flush (If Within State's Scope of Practice)" }, { name: "Assistive Devices (Wheelchair, Walker, Cane, Mechanical Lifts)" }, { name: "Obtain Urine Culture (Laboratory Collection)" },
    ]},
    { title: "Infection Control & Safety", skills: [
      { name: "Apply and Remove Gowns/Aprons (Standard Precautions)" }, { name: "Use of Hand Sanitizer" }, { name: "Identify Potential Sharps (Syringes, Razors, Staples, Lancets)" }, { name: "Awareness of Inclement Weather/Disaster Response" }, { name: "Perform Post-Mortem Care" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (0-1 month)" }, { name: "Infant (1-12 months)" }, { name: "Pediatric (1-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Adult (18-65 years)" }, { name: "Geriatric (65+ years)" },
    ]},
  ]},

  { slug: "cna", title: "Certified Nursing Assistant Skills Checklist", shortTitle: "CNA", icon: "🤲", group: "Nursing", categories: [
    { title: "Patient Rights", skills: [
      { name: "Communicates and obtains information while respecting HIPAA" }, { name: "Involves the patient and family in care decisions including Advance Directives" }, { name: "Complies with Organ Donation policy" }, { name: "Meets communication needs including interpreter services" }, { name: "Provides accurate information to patient and families" },
    ]},
    { title: "Vital Signs and Weights", skills: [
      { name: "Obtaining and Recording" }, { name: "BP, including Orthostatic" }, { name: "Pulse, Radial" }, { name: "Temperature, Oral" }, { name: "Temperature, Rectal" }, { name: "Temperature, Axillary" }, { name: "Temperature, Tympanic" }, { name: "Respirations" }, { name: "Weight, Pounds and Kilograms" }, { name: "Recognizing Cardiac Arrest" }, { name: "Activating Code Team" }, { name: "Bringing Emergency Equipment to Room" }, { name: "Providing Appropriate Code Support" }, { name: "Automatic BP machine (Dynamap)" }, { name: "Electronic Thermometer" }, { name: "Applying Oximeter" }, { name: "Standing Scale" }, { name: "Chair Scale" }, { name: "Bed Scale" },
    ]},
    { title: "GI/GU", skills: [
      { name: "Report Abnormal Findings" }, { name: "Bowel Function" }, { name: "Bladder Function" }, { name: "Enemas: Tap Water" }, { name: "Enemas: Fleets" }, { name: "Enemas: Return Flow" }, { name: "Placing and Removing Bed Pan" }, { name: "Clamping Catheter" }, { name: "Emptying Foley Bag" }, { name: "Placing Condom Catheter" }, { name: "Emptying and Replacing Ostomy Bag" },
    ]},
    { title: "Nutrition", skills: [
      { name: "Estimating Intake" }, { name: "Setting up for Meals" }, { name: "Feeding Patients" }, { name: "Aspiration Precautions" }, { name: "Nourishments" }, { name: "Counting Calories" }, { name: "Fluid Restriction" }, { name: "NPO" },
    ]},
    { title: "Specimens", skills: [
      { name: "Collecting Stool" }, { name: "Collecting Sputum" }, { name: "Labeling Specimens and Preparing for Transport" }, { name: "Collecting Urine: Clean Catch" }, { name: "Collecting Urine: 24 Hour" },
    ]},
    { title: "Hygiene/Skin", skills: [
      { name: "Risk Factors for Skin Breakdown" }, { name: "Observing Pressure Points for Redness or Breakdown" }, { name: "Bathing (Shower/Tub/Arjo)" }, { name: "Oral Care" }, { name: "Perineal Care" }, { name: "Foot Care for Patients with Impaired Circulation" }, { name: "Incontinence Care" }, { name: "Shaving and Precautions" }, { name: "Reducing Pressure and Friction" }, { name: "Special Beds/Mattresses" }, { name: "Heels and Elbow Protection" }, { name: "Foot Cradles" }, { name: "Use of Shower Chair" }, { name: "Use of Bath/Shower Boat" },
    ]},
    { title: "Infection Control", skills: [
      { name: "Reverse Isolation" }, { name: "Body Substance Isolation" }, { name: "TB Precautions" }, { name: "MRSA Precautions" }, { name: "Hand Washing" }, { name: "Infectious/Hazardous Waste Disposal" }, { name: "Supply/Equipment Disposal" }, { name: "Use of Disposable Thermometer" }, { name: "Use of CPR Mask/Bag" }, { name: "Gloves" }, { name: "Gown" }, { name: "Mask/Goggles" },
    ]},
    { title: "Safety and Activity", skills: [
      { name: "Determining Patient ID" }, { name: "Identifying Safety Hazards" }, { name: "Determining Need for Additional Help" }, { name: "Assessing Safety and ADL Needs" }, { name: "Recognizing Abuse: Substance, Physical, Emotional" }, { name: "Maintaining Clean, Orderly Work Area" }, { name: "Disposing of Sharps" }, { name: "Handling Hazardous Materials" }, { name: "Proper Body Mechanics" }, { name: "ROM Exercises" }, { name: "Transferring to Bed, WC, Commode" }, { name: "Turning and Positioning" }, { name: "Patient Safety Module" }, { name: "Reporting Broken Equipment" }, { name: "Responding to Safety Hazards" }, { name: "Use of Hoyer Lift" }, { name: "Bed Operation" }, { name: "Use of Wheel Locks" }, { name: "Use of Alarms: Bed, Patient, Unit" }, { name: "Use of Call Light" }, { name: "Documenting Use of Restraints" }, { name: "Use of Transfer Belt" }, { name: "Use of Gait Belt for Ambulation" }, { name: "Use of Seizure Pads" }, { name: "Application of Restraints: Belt/Seat Belt" }, { name: "Application of Restraints: Wrist/Ankle" }, { name: "Application of Restraints: Vest" },
    ]},
    { title: "Care Routines", skills: [
      { name: "Inventory and Disposition of Belongings" }, { name: "Room Orientation, Call Bell" }, { name: "Post-op: Transferring into Bed" }, { name: "Post-op: Call Bell" }, { name: "Post-op: Assist with Turns" }, { name: "Post-op: ROM Exercises" }, { name: "Replacing Mask or Nasal Cannula" }, { name: "Notifying Nurse of Problems" }, { name: "Basic Comfort Measures" }, { name: "Early Bath" }, { name: "Preparing Belongings" }, { name: "Post Mortem Care" }, { name: "Use of Incentive Spirometer" }, { name: "Antiembolic Stockings" }, { name: "Sequential Stockings" },
    ]},
    { title: "Communication", skills: [
      { name: "Using Appropriate Abbreviations" }, { name: "Identifying Unusual Patient Incidents" }, { name: "Reinforcing RN Teaching With Patient" }, { name: "Selecting and Using Forms Appropriately" }, { name: "Using Alternate Communication Tools/Devices" }, { name: "Changes in Patient Condition" }, { name: "Patient Needs, Complaints and Concerns" }, { name: "Unusual Incidents" }, { name: "Vital Signs" }, { name: "Bathing/Hygiene" }, { name: "Turning and Repositioning" }, { name: "Ambulation and Activity" }, { name: "Diet intake, Calorie Count" }, { name: "Bowel Movements" }, { name: "Shift Volumes and Totals" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "correctional-nursing", title: "Correctional Nursing (RN/LPN) Skills Checklist", shortTitle: "Correctional Nursing", icon: "🔐", group: "Nursing", categories: [
    { title: "Clinical Experience & Background", skills: [
      { name: "Medical/Surgical Nursing" }, { name: "Neonatal Intensive Care Unit" }, { name: "Chemical Dependency (Substance Abuse Treatment)" }, { name: "Labor and Delivery" }, { name: "Operating Room" }, { name: "Intensive Care Unit/Coronary Care Unit" }, { name: "Outpatient Clinic Nursing" }, { name: "Nursery" }, { name: "Rehabilitation" }, { name: "Long-Term Care" }, { name: "Orthopedics" }, { name: "Telemetry" }, { name: "Obstetrics/Postpartum" }, { name: "Cardiac Intensive Care Unit" }, { name: "Pediatrics" }, { name: "Intellectual and Developmental Disabilities" }, { name: "Industrial/Occupational Health" }, { name: "Emergency Room" }, { name: "Post-Anesthesia Care Unit" }, { name: "Correctional Facility Nursing" }, { name: "Psychiatry/Psychiatric Nursing" }, { name: "Surgical Intensive Care Unit" },
    ]},
    { title: "Neurological & Cardiovascular Care", skills: [
      { name: "Seizure precautions - assessment and response to seizure or seizure-like activity" }, { name: "Acute head injury" }, { name: "Managing patients with spinal precautions" }, { name: "Treating patients for neuropathy" }, { name: "Spinal cord injury" }, { name: "Chronic and acute CVA/TIA" }, { name: "Drug overdose" }, { name: "Neuro assessment/Neuro vitals" }, { name: "Using Glasgow Coma Scale" }, { name: "Cardiopulmonary arrests" }, { name: "Assessing and treating orthostatic BP" }, { name: "Evaluation of peripheral perfusion" }, { name: "Assessing abnormal heart sounds" }, { name: "Running a code" }, { name: "Angina (acute and chronic)" }, { name: "Identification and evaluation of peripheral pulses" }, { name: "Identifying dysrhythmias as indicated" },
    ]},
    { title: "Pulmonary Care", skills: [
      { name: "Use of oxygen saturation monitor" }, { name: "Collecting sputum specimen" }, { name: "Using different masks for oxygenation" }, { name: "Administering nebulizer treatments" }, { name: "Use of incentive spirometer" }, { name: "Assessment of lung sounds" }, { name: "Administering oxygen – nasal cannula, mask" }, { name: "Tracheostomy" }, { name: "CHF" }, { name: "Tuberculosis" }, { name: "COPD" }, { name: "Asthma" },
    ]},
    { title: "Gastrointestinal & Endocrine Care", skills: [
      { name: "Palpation" }, { name: "Managing suprapubic catheter" }, { name: "Administering enemas (tap water, Fleet, return flow)" }, { name: "Colostomy and drain care" }, { name: "Caring for patients with chronic liver failure" }, { name: "Knowledge of UA values" }, { name: "Placing condom catheter" }, { name: "Inserting suppositories" }, { name: "Caring for patients on dialysis" }, { name: "Collecting urine specimens" }, { name: "Obtaining stool specimens" }, { name: "Managing urostomy" }, { name: "Caring for acute GI bleed" }, { name: "Assessing bowel sounds" }, { name: "Caring for patients with chronic renal failure" }, { name: "Assessing fluid and electrolyte problems" }, { name: "Insulin administration" }, { name: "Treating hypo/hyperglycemia" }, { name: "Caring for diabetic patient" }, { name: "Checking blood glucose levels" }, { name: "ADA diets" }, { name: "Identifying hypo/hyperglycemia" },
    ]},
    { title: "Musculoskeletal Care", skills: [
      { name: "Crutches" }, { name: "Gait belt" }, { name: "Walker" }, { name: "Amputations" }, { name: "Caring/Removal of staples and stitches" }, { name: "Cervical collars" }, { name: "Assessing for need of assistive devices" }, { name: "Slings/Splints" }, { name: "Braces" }, { name: "Stump care" }, { name: "Prosthetic care" }, { name: "Casts" }, { name: "Bone/Joint disorders" },
    ]},
    { title: "Nutrition & Vital Signs", skills: [
      { name: "Counting calories" }, { name: "Caring for patients on fluid restriction" }, { name: "Caring for patients placed on NPO" }, { name: "Aspiration precautions" }, { name: "Specialty medical diets" }, { name: "Assisting with nourishments" }, { name: "BP including orthostatic" }, { name: "Temperature (oral, rectal, axillary, tympanic)" }, { name: "Pulse/Radial" }, { name: "Weight" }, { name: "Respirations" }, { name: "Height" }, { name: "Automatic BP machine (Dynamap)" }, { name: "Electronic thermometer" }, { name: "Oximeter" },
    ]},
    { title: "Infection Control & Safety", skills: [
      { name: "Hand washing (new CDC guidelines)" }, { name: "MRSA precautions" }, { name: "Proper use of PPE (gloves, gowns, mask, goggles)" }, { name: "Infectious/Hazardous waste disposal" }, { name: "Isolation/Reverse isolation" }, { name: "Sharps disposal" }, { name: "Body substance isolation" }, { name: "TB precautions" }, { name: "Use of proper body mechanics" }, { name: "Use of alarms (bed, patient, unit) and call light" }, { name: "Determining the need and when to summon additional help" }, { name: "Use of CPR mask/valve/bag" }, { name: "Assessing safety and ADL needs" }, { name: "Determining patient ID" }, { name: "Suicide precautions" }, { name: "Recognizing and responding to psychiatric and mental health problems" }, { name: "Recognizing signs and symptoms of abuse (substance, physical, emotional)" }, { name: "Identifying and responding to safety hazards" }, { name: "Wrist/ankle" }, { name: "Belt" }, { name: "Restraint chairs" }, { name: "Seat belt" },
    ]},
    { title: "Care Routines & Documentation", skills: [
      { name: "Knowledge of lab values (chemistry, CBC, drug levels)" }, { name: "Medication administration" }, { name: "Starting IVs and IV therapy" }, { name: "Health screening" }, { name: "Care of the detox patient" }, { name: "Pain management" }, { name: "First aid" }, { name: "Preparing for and explaining routines to patient" }, { name: "Medication profile" }, { name: "Wound care" }, { name: "Obtaining peripheral blood samples" }, { name: "New admissions and transfers" }, { name: "Unusual incidents" }, { name: "Communicating with MD/Officers" }, { name: "Changes in patient condition" }, { name: "Patient needs, complaints, and concerns" }, { name: "The need for alternative communication mechanism" }, { name: "Vital signs" }, { name: "Patient/Unit activity" },
    ]},
    { title: "Unit Activity & Patients' Rights", skills: [
      { name: "Adherence to security protocol" }, { name: "Completing risk management reports as needed" }, { name: "Identifying unusual incidents on the unit that require reporting" }, { name: "Charging for patient care items" }, { name: "Identifying breach of security" }, { name: "Patient's Right to Care and Right to Refuse Care" }, { name: "Communicating and maintaining confidentiality while upholding HIPAA laws" }, { name: "Providing accurate information to patients in a timely manner" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "home-health-aide", title: "Home Health Aide Skills Checklist", shortTitle: "Home Health Aide", icon: "🏡", group: "Nursing", categories: [
    { title: "Personal Care", skills: [
      { name: "Bathing/showering assistance" }, { name: "Grooming and dressing assistance" }, { name: "Oral hygiene assistance" }, { name: "Toileting/incontinence care" }, { name: "Feeding assistance" }, { name: "Mobility/transfer assistance" },
    ]},
    { title: "Household Support", skills: [
      { name: "Light housekeeping" }, { name: "Meal preparation" }, { name: "Laundry" }, { name: "Medication reminders" }, { name: "Errands/grocery assistance" },
    ]},
    { title: "Patient Rights, Confidentiality & Ethics", skills: [
      { name: "Understands and Applies the Patient Bill of Rights" }, { name: "Maintains Privacy When Using Mobile Devices/Laptops/Tablets in Patient Homes (HIPAA)" }, { name: "Follows the Home Health Aide Plan of Care as Directed" },
    ]},
    { title: "Communication & Collaboration", skills: [
      { name: "Maintains Professionalism and Composure During Difficult/Emotional Interactions" }, { name: "Recognizes Cultural, Spiritual, and Personal Values Influencing Communication and Care" }, { name: "Uses Clear, Factual, and Objective Language When Reporting" }, { name: "Reporting Changes to Supervising RN" }, { name: "Family Communication" },
    ]},
    { title: "Patient Care by Condition", skills: [
      { name: "Cardiovascular Support (Observe/Report Worsening Status)" }, { name: "Respiratory Support (Observe/Report Signs of Distress)" }, { name: "Gastrointestinal/Genitourinary Support (Report Changes in Stool/Output)" }, { name: "Integumentary Support (Assist with Dressings/Protective Creams)" }, { name: "Endocrine/Metabolic Support (Diabetic Foot Care)" }, { name: "Mental and Behavioral Health Support (Report Distress/Self-Harm Statements)" },
    ]},
    { title: "Safety & Emergency Preparedness", skills: [
      { name: "Fall Risk Awareness and Prevention" }, { name: "Vital Sign Observation (Non-Invasive)" }, { name: "Recognizing Changes in Condition" }, { name: "Home and Environmental Safety" }, { name: "Equipment Use and Maintenance" }, { name: "Emergency Response and Basic Life Support" }, { name: "Infection Control/Hand Hygiene" },
    ]},
    { title: "Regulatory Compliance & Reporting", skills: [
      { name: "Recognizing and Reporting Abuse, Neglect, and Exploitation" }, { name: "Compliance with State and Federal Home Health Aide Regulations" }, { name: "Care Plan Adherence" },
    ]},
    { title: "Documentation & Technology", skills: [
      { name: "Visit Note Documentation" }, { name: "Use of Electronic Documentation Systems" }, { name: "Accessing Agency Policies and Resources" },
    ]},
    { title: "Professional Development", skills: [
      { name: "Continuing Education and Skill Development" }, { name: "Supervision and Competency Evaluation Participation" }, { name: "Time and Priority Management" }, { name: "Professional Boundaries and Self-Care" },
    ]},
  ]},

  { slug: "rn-supervisor", title: "RN Supervisor Skills Checklist", shortTitle: "RN Supervisor", icon: "👩‍⚕️", group: "Nursing", categories: [
    { title: "Universal Precautions", skills: [
      { name: "Working with patients in isolation" }, { name: "Working with patients in restraints" }, { name: "Patient/Family teaching" }, { name: "Patient Identification" }, { name: "Specialty beds" }, { name: "End of life care/palliative care" }, { name: "Knowledge of 'Do Not Use Abbreviations'" }, { name: "Charge/supervisor experience" }, { name: "Knowledge of Joint Commission National Patient Safety Goals" }, { name: "Knowledge/familiarity with HCAHPS scores" },
    ]},
    { title: "Acute Care/Hospital", skills: [
      { name: "Durable Medical Equipment (DME)" }, { name: "Managed Care" }, { name: "SNF/Long Term Care" }, { name: "Home Health" }, { name: "Hospice" }, { name: "Outpatient" }, { name: "Physician Office" },
    ]},
    { title: "Healthcare Economics & Policy", skills: [
      { name: "Concepts of capital budgeting" }, { name: "Department/unit budgeting" }, { name: "Recruitment techniques" }, { name: "Interviewing techniques" }, { name: "Labor Laws pertaining to hiring" }, { name: "Orientation of new employees" }, { name: "Knowledge of quality improvement/performance improvement tools" }, { name: "Patient Safety" }, { name: "Workplace safety" }, { name: "Promotion of interdepartmental communication" }, { name: "Performance management" }, { name: "Staff Development" }, { name: "Coaching and mentoring" }, { name: "Project management" }, { name: "Business development" }, { name: "Developing Strategic plans" }, { name: "Developing operational plans" }, { name: "Cultural competence" }, { name: "Personal growth and development" }, { name: "Ethical behavior and practice" }, { name: "Professional association involvement" }, { name: "Conflict Management" }, { name: "Team dynamics" }, { name: "Mediation/coaching" }, { name: "TJC Standards" }, { name: "OSHA Standards" }, { name: "Risk Management/Service Utilization" }, { name: "Local Department of Health" }, { name: "State Department of Health" }, { name: "Sitter Services" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "rn-occupational", title: "RN Occupational and Employee Health Skills Checklist", shortTitle: "RN Occupational", icon: "🏥", group: "Nursing", categories: [
    { title: "Trauma", skills: [
      { name: "Care of Patient with Minor Trauma" }, { name: "Major Trauma" }, { name: "MAST Suit" },
    ]},
    { title: "Burns", skills: [
      { name: "First Degree" }, { name: "Second Degree" }, { name: "Third Degree" }, { name: "Electrocution" }, { name: "Hazardous Materials Exposure" },
    ]},
    { title: "Lacerations", skills: [
      { name: "Assessment" }, { name: "Cleansing" }, { name: "Steri-Strips" }, { name: "Dressing" },
    ]},
    { title: "Sprain/Strain", skills: [
      { name: "Assessment" }, { name: "Carpal Tunnel" }, { name: "Tendonitis" }, { name: "Epicondylitis" },
    ]},
    { title: "Physicals", skills: [
      { name: "Safety" }, { name: "Return to Work" }, { name: "Respirator" }, { name: "Vital Signs" }, { name: "Height/Weight" }, { name: "Blood Draw" }, { name: "Medical Referral Form" }, { name: "Medical Certification Form" }, { name: "Medical History Questionnaire" }, { name: "Potassium Iodine Assessment" },
    ]},
    { title: "Restrictions", skills: [
      { name: "Temporary Restrictions" }, { name: "Permanent Restrictions" }, { name: "Pulmonary Function" }, { name: "Audiometry" }, { name: "Vision Testing" }, { name: "X-ray" }, { name: "Urine Testing" }, { name: "Drug Testing" }, { name: "Breathalyzer" },
    ]},
    { title: "Immunizations", skills: [
      { name: "Havrix (Hepatitis A)" }, { name: "Influenza Vaccine" }, { name: "Meningitis Vaccine" }, { name: "Tetanus & Diphtheria" }, { name: "Oral Typhoid Vaccine" }, { name: "Polio Vaccine" }, { name: "Hepatitis B Vaccine" }, { name: "Japanese Encephalitis B" }, { name: "Rabies Vaccine" }, { name: "Typhim (Injectable Type)" }, { name: "Yellow Fever Vaccine" },
    ]},
    { title: "Age Specific Criteria", skills: [
      { name: "Newborn/Neonate (birth-30 days)" }, { name: "Infant (30 days - 1 year)" }, { name: "Toddler (1-3 years)" }, { name: "Preschooler (3-5 years)" }, { name: "School Age Children (5-12 years)" }, { name: "Adolescents (12-18 years)" }, { name: "Young Adults (18-39 years)" }, { name: "Middle Adults (39-64 years)" }, { name: "Older Adults (64+)" },
    ]},
  ]},

  { slug: "rn-appeals-writer", title: "RN Appeals Writer Skills Checklist", shortTitle: "RN Appeals Writer", icon: "📝", group: "Nursing", categories: [
    { title: "Knowledge, Skills, Abilities", skills: [
      { name: "Review, Analysis and Extraction of Clinical Information From Patient Records" }, { name: "Drafting Effective Narratives for Medicare and Medicaid Appeals Documentation" }, { name: "Drafted Briefs in Support of Denied Cases Under Appeal" }, { name: "Maintained Current Knowledge Base of Medical Coding" }, { name: "Knowledge of Federal and State Hospital Utilization Review Regulations" }, { name: "Knowledge of Medicare Guidelines Regarding Medical Necessity" }, { name: "Knowledge of Medicare Guidelines Regarding Inpatient and Outpatient Observation" }, { name: "Research and Preparation for Beneficiary Hearings" }, { name: "Experience Testifying as Expert Witness in Hearings" }, { name: "Collaborated With Internal and External Legal Sources" }, { name: "Chart Review Skills" }, { name: "Ability to Quickly Research and Extract Relevant Data From a Medical Record" }, { name: "Develop and Draft Clear Narratives for Appeals" }, { name: "Experience With Electronic Medical Record" }, { name: "Knowledge of Acute Hospital Utilization Review Using InterQual and/or Milliman" }, { name: "Working Knowledge of Medical Coding" }, { name: "Knowledge and Experience With Case Management" }, { name: "Knowledge and Experience With Government and Contracted Payers" }, { name: "Attention to Details, Timeliness and Accuracy" }, { name: "Ability to Work Independently While Working Efficiently" }, { name: "Ability to Work Within a High Production Team" },
    ]},
    { title: "Appeals Process & Levels", skills: [
      { name: "Level 1 Redetermination Appeals" }, { name: "Level 2 Reconsideration Appeals" }, { name: "Administrative Law Judge (ALJ) Hearing Preparation" }, { name: "Medicare Appeals Council Review Support" }, { name: "Commercial Payer Appeal Letter Drafting" }, { name: "Appeal Deadline and Timeline Tracking" },
    ]},
    { title: "Denial Analysis", skills: [
      { name: "Denial Reason Code Analysis" }, { name: "Clinical Validation Denial Response" }, { name: "DRG Downgrade Appeal Response" }, { name: "Medical Necessity Denial Response" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "nurse-practitioner", title: "Nurse Practitioner Skills Checklist", shortTitle: "Nurse Practitioner", icon: "⚕️", group: "Nursing", categories: [
    { title: "Areas Worked", skills: [
      { name: "Emergency" }, { name: "Urgent Care" }, { name: "Private Practice" }, { name: "HMO" }, { name: "MD Office" }, { name: "Schools" }, { name: "Health Department" }, { name: "Ambulatory Clinic" }, { name: "Rural Health Clinic" }, { name: "Psychiatric Facility" }, { name: "Correctional Facility" }, { name: "Mobile Medical Unit" }, { name: "Corporate Worksite" }, { name: "Occupational Health" }, { name: "Rehabilitation" }, { name: "Nursing Home/Long-term Care Facility" }, { name: "Women's Health Clinic" }, { name: "Government Health Agency" }, { name: "Hospice/Palliative Care" },
    ]},
    { title: "Experience With", skills: [
      { name: "Diabetes" }, { name: "Contractures" }, { name: "Bedridden residents" }, { name: "Splinting of extremities" }, { name: "Local infiltration" }, { name: "Comprehensive physical assessment" }, { name: "Acute disease condition" }, { name: "Differential diagnosis" }, { name: "Order, perform, & interpret screening & diagnostic test" }, { name: "Central line management" },
    ]},
    { title: "Disorders – Emergencies", skills: [
      { name: "Anaphylaxis" }, { name: "Cardiac arrest" }, { name: "Seizures" }, { name: "Minor head injuries" }, { name: "Animal bites" }, { name: "Ingestions and poisonings" }, { name: "Overdose of sedative, hypnotics, opiates" }, { name: "Snake bites" }, { name: "Minor burns" }, { name: "Shock" }, { name: "Open wounds" },
    ]},
    { title: "Collaboration", skills: [
      { name: "Family, support system, community resources" }, { name: "Consulting with Physicians" }, { name: "Consulting with Pharmacists" }, { name: "Consulting with Speech Therapist" }, { name: "Consulting with Dietician and Diet Aide" }, { name: "Consulting with Occupational Therapist" }, { name: "Referral to Pastoral Services" },
    ]},
    { title: "Respiratory", skills: [
      { name: "Croup" }, { name: "Influenza" }, { name: "Tracheobronchitis" }, { name: "Bronchitis" }, { name: "COPD" }, { name: "Asthma" }, { name: "URI" }, { name: "Obstructive Sleep Apnea" }, { name: "Pneumonia: Viral" }, { name: "Pneumonia: Bacterial" }, { name: "Sinusitis: Bacterial" }, { name: "Sinusitis: Nonbacterial" }, { name: "Oxygen administration" }, { name: "Liquid oxygen" }, { name: "IPPB machine use" }, { name: "Tracheotomies" }, { name: "Interpret ABG" }, { name: "Intubations" }, { name: "Sputum Collection" },
    ]},
    { title: "Cardiovascular System", skills: [
      { name: "Congestive heart failure" }, { name: "COPD" }, { name: "Stasis ulcer of lower extremities" }, { name: "Angina" }, { name: "Pericarditis" }, { name: "Coronary artery disease" }, { name: "Functional murmurs" }, { name: "Congenital heart disease" }, { name: "Hypertension" }, { name: "ASHD" }, { name: "Dyslipidemia" }, { name: "PVD" }, { name: "Peripheral neuropathy" }, { name: "Interpreting 12 lead EKGs" },
    ]},
    { title: "OB/GYN", skills: [
      { name: "Candida vaginitis" }, { name: "Dysmenorrhea" }, { name: "Abnormal pap smear findings" }, { name: "Pap smears" }, { name: "Trichomonal vaginitis" }, { name: "Atrophic vaginitis" }, { name: "Fibrocystic breast disease" }, { name: "Menopause" }, { name: "Intrapartum medications" }, { name: "Bartholin's cyst/abscess" }, { name: "Preparation for childbirth" }, { name: "Pregnancy - diagnosis and referral" }, { name: "Pain relief in active phase of labor" }, { name: "Dysfunctional uterine bleeding" }, { name: "Rh blood factor" }, { name: "Mastitis" }, { name: "Birth control methods" }, { name: "Prenatal care" }, { name: "Fetal well-being" },
    ]},
    { title: "GI System", skills: [
      { name: "Constipation" }, { name: "Diarrhea (simple)" }, { name: "Acute gastroenteritis" }, { name: "Cholecystitis" }, { name: "Pyloric stenosis" }, { name: "Colic" }, { name: "Appendicitis" }, { name: "Naso-gastric tubes" }, { name: "Gastrostomy Care" },
    ]},
    { title: "Skin", skills: [
      { name: "Warts" }, { name: "Basal cell carcinoma" }, { name: "Scabies" }, { name: "Impetigo" }, { name: "Diaper dermatitis" }, { name: "Acne" }, { name: "Folliculitis" }, { name: "Furuncles" }, { name: "Carbuncles" }, { name: "Herpes Simplex" }, { name: "Herpes Zoster" }, { name: "Malignant melanoma" }, { name: "Contact dermatitis" }, { name: "Tinea corporis" }, { name: "Tinea pedis" }, { name: "Staph infections" }, { name: "Wound care" }, { name: "Single layer wound closure" }, { name: "Incision and drainage" }, { name: "Excisions" },
    ]},
    { title: "Ears, Nose and Throat", skills: [
      { name: "Epistaxis" }, { name: "Otitis externa" }, { name: "Serous otitis media" }, { name: "Acute purulent otitis media" }, { name: "Allergic rhinitis" }, { name: "Pharyngitis" }, { name: "Oral candidiasis" },
    ]},
    { title: "Eye", skills: [
      { name: "Conjunctivitis" }, { name: "Strabismus" }, { name: "Chalazion" }, { name: "Stye" }, { name: "Visual acuity" }, { name: "Fluorescein staining of eyes" }, { name: "Audiometry" }, { name: "Tympanometry" },
    ]},
    { title: "Musculoskeletal", skills: [
      { name: "Osteoporosis" }, { name: "Osteomyelitis" }, { name: "Rheumatoid arthritis" }, { name: "Juvenile diabetes" }, { name: "Gout" }, { name: "Minor sprains and strains" }, { name: "Osteoarthritis" }, { name: "Carpal tunnel syndrome" }, { name: "Scoliosis" }, { name: "Tendonitis" }, { name: "Bursitis" }, { name: "Muscular dystrophy" },
    ]},
    { title: "Drug Therapy & Dispensing", skills: [
      { name: "Knowledge of pharmacology" }, { name: "Knowledge of side effects" }, { name: "Knowledge of pharmacokinetics" }, { name: "Knowledge of drug interactions" }, { name: "Prescription writing" }, { name: "Herbal drugs" }, { name: "Over the counter (OTC)" }, { name: "Knowledge of potential adverse reactions (anaphylaxis, allergic reactions)" }, { name: "Monitoring drug therapy" }, { name: "Management of controlled substances" },
    ]},
    { title: "Non-Pharmacologic Interventions", skills: [
      { name: "Obesity management" }, { name: "Exercise counseling" }, { name: "Medical nutrition therapy" }, { name: "Mental health issues (stress management, depression)" }, { name: "Cessation of substance abuse (alcohol, tobacco)" },
    ]},
    { title: "Professional Practice & Quality", skills: [
      { name: "Self evaluation to improve patient care" }, { name: "Research" }, { name: "Legal and ethical issues" }, { name: "Working within scope of practice" }, { name: "Continuing education" }, { name: "Discharge planning/collaboration" }, { name: "Quality assurance" }, { name: "Confidentiality" }, { name: "Cultural awareness" }, { name: "Public health and health promotion" }, { name: "Leadership and teaching skills" },
    ]},
    { title: "Regulatory Programs", skills: [
      { name: "HEDIS (Health Plan Employer Data and Information Set)" }, { name: "Medicare and Medicaid" }, { name: "DNV Accreditation" }, { name: "CLIA waiver (Clinical Laboratory Improvement Amendments)" }, { name: "DQIP (Diabetes Quality Improvement Program)" }, { name: "OSHA" }, { name: "Joint Commission on Accreditation of Healthcare Organizations" }, { name: "HIPAA" },
    ]},
  ]},

  { slug: "travel-nursing", title: "Travel Nursing Skills Checklist", shortTitle: "Travel Nursing", icon: "✈️", group: "Nursing", categories: [
    { title: "Cardiac", skills: [
      { name: "Acute Coronary Syndrome" }, { name: "Congestive Heart Failure" }, { name: "Post Open Heart (12-24 hours)" }, { name: "Carotid Endarterectomy" }, { name: "Post Vascular Surgery" }, { name: "Heart Transplant" }, { name: "Pacemaker - Temporary/Permanent" }, { name: "Pacemaker - Epicardial" }, { name: "Sheath Removal" }, { name: "Heart Sounds" },
    ]},
    { title: "Pulmonary", skills: [
      { name: "Pneumonia" }, { name: "Respiratory Distress" }, { name: "COPD" }, { name: "Breath Sounds" }, { name: "Post Thoracic Surgery" }, { name: "Chest Tube Placement & Management" }, { name: "Trach Management" }, { name: "Modes of Ventilation (AC/PC/SIMV/CPAP)" }, { name: "Intubation/Extubation" }, { name: "External CPAP/BiPAP" }, { name: "Interpretation of Arterial Blood Gases" },
    ]},
    { title: "Neurologic & Psychiatric", skills: [
      { name: "Stroke Scale Assessment" }, { name: "CVA" }, { name: "Brain Injury" }, { name: "Post Craniotomy" }, { name: "Spinal Cord Injury" }, { name: "Seizure Disorders" }, { name: "ETOH/Drug Withdrawal" },
    ]},
    { title: "Gastrointestinal", skills: [
      { name: "GI Bleeding" }, { name: "GI Surgery" }, { name: "Liver Failure" }, { name: "Pancreatitis" }, { name: "Liver Transplant" }, { name: "Pancreas Transplant" },
    ]},
    { title: "Renal/Genitourinary", skills: [
      { name: "Renal Failure" }, { name: "Renal Surgery" }, { name: "Renal Transplant" }, { name: "Arteriovenous Fistula/Shunt" }, { name: "Nephrostomy Tubes" }, { name: "Peritoneal Dialysis" },
    ]},
    { title: "Endocrine Metabolic", skills: [
      { name: "Diabetes - Hypo/Hyperglycemic Crisis" }, { name: "Pituitary Disorders" }, { name: "IV Insulin Protocols" }, { name: "Indwelling Insulin Pumps" },
    ]},
    { title: "Medications", skills: [
      { name: "Anti-Arrhythmics" }, { name: "Anticoagulants (IV, oral, & injection)" }, { name: "Anti-Hypertensives" }, { name: "Anti-Psychotics" }, { name: "Anti-Seizure Medications" }, { name: "Benzodiazepines" }, { name: "Procedural Sedation" }, { name: "Diuretics" }, { name: "Emergency Medications" }, { name: "Inhaled Medications" }, { name: "Insulin" }, { name: "Titrate Vasoactive Drips" }, { name: "Manage Vasoactive Drips - No Titration" }, { name: "Narcotics/Opioid Analgesics" }, { name: "Nitrates (Oral & Topical)" }, { name: "Non-Opioid Analgesics" }, { name: "Reversal Agents" }, { name: "Steroids (IV, Oral, Inhaled)" }, { name: "Automated Medication Dispensing (Pyxis, Omnicell)" },
    ]},
    { title: "IV Therapy", skills: [
      { name: "Starting IVs" }, { name: "Central Line Blood Draws" }, { name: "Central Line/Implanted Line Care" }, { name: "Arterial Line Management" }, { name: "TPN & Lipids" }, { name: "Blood Product Administration" }, { name: "Administration of Chemotherapy" },
    ]},
    { title: "Cardiac Monitoring & Emergency Response", skills: [
      { name: "Dysrhythmia Interpretation" }, { name: "Dysrhythmia Management" }, { name: "Obtain 12 Lead EKG" }, { name: "Interpret 12 Lead EKG" }, { name: "Cardioversion" }, { name: "Defibrillation" }, { name: "Malignant Hyperthermia" },
    ]},
    { title: "Professional Knowledge and Skills", skills: [
      { name: "National Patient Safety Goals/Core Measures" }, { name: "Fall Risk Assessment/Prevention" }, { name: "Pressure Ulcer Risk Assessment/Prevention" }, { name: "Restraints/Use of Least Restrictive Device" }, { name: "Patient/Family Teaching" }, { name: "Age Specific/Population-Based Care" }, { name: "Isolation Precautions" }, { name: "Infection Prevention" }, { name: "Pain Assessment & Management" }, { name: "Charge Experience" }, { name: "Interpretation and Communication of Lab Values" }, { name: "Specialty Beds" },
    ]},
    { title: "EMR", skills: [
      { name: "Epic" }, { name: "Cerner" }, { name: "Eclipsys" }, { name: "McKesson" }, { name: "Meditech" }, { name: "Other Computerized System" }, { name: "Computerized Physician Order Entry" }, { name: "Bar Coding for Medication Administration" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "don", title: "Director of Nursing Skills Checklist", shortTitle: "Director of Nursing (DON)", icon: "👑", group: "Nursing", categories: [
    { title: "Leadership Domain", skills: [
      { name: "Communicates Effectively With Residents, Families, and Team Members" }, { name: "Communicates Effectively With Peers, Physicians, and State Agencies" }, { name: "Coordinates Resident Care to Multidisciplinary Team" }, { name: "Provides Updated Resident Information to Physician, Family, Legal, Consultants" }, { name: "Knowledgeable in Human Resource Policies" }, { name: "Delegates as Appropriate" }, { name: "Demonstrates Excellent Customer Service Skills" }, { name: "Monitors Progress and Holds Associates Accountable" }, { name: "Enforces Regulatory and Employee Law Compliance" },
    ]},
    { title: "Technical Domain", skills: [
      { name: "Assesses and Monitors Staff Compliance of Infection Control" }, { name: "Demonstrates Excellent Technical Skills and Judgment" }, { name: "Assess and Monitors Facility Scorecard and CMS Quality Indicator Data" }, { name: "Actively Participates in Facility QA&A Meetings" }, { name: "Promotes Survey Preparedness at All Times" }, { name: "Demonstrates Basic Working Knowledge of Computer Systems" }, { name: "Demonstrates Understanding of Quality Event Investigating" }, { name: "Maintains Current Knowledge of LTC Federal/State Regulations" }, { name: "Ensure RAI Functions Are Completed Timely" }, { name: "Assess and Ensure Execution of Facility Standards and Policies" }, { name: "Provides and Monitors Clinical Orientation and Ongoing Training" }, { name: "Actively Participates in Recruiting, Hiring and Orientation" },
    ]},
    { title: "Problem Solving Domain", skills: [
      { name: "Utilizes the Nursing Process to Structure Care" }, { name: "Demonstrates Ability to Assess and Interpret Resident Data" }, { name: "Collaborates With DNS/Consultants on Noncompliance Areas" }, { name: "Effectively Troubleshoots Staffing Resource Allocation" }, { name: "Demonstrates Understanding of Census and Expense Control" }, { name: "Assess and Monitors Discharge/Rehospitalization Patterns" },
    ]},
    { title: "Clinical Program Oversight", skills: [
      { name: "Wound Care Program Oversight" }, { name: "Falls Prevention Program Oversight" }, { name: "Infection Prevention Program Oversight" }, { name: "Restorative Nursing Program Oversight" }, { name: "Medication Management Program Oversight" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "administrative-rn", title: "Administrative Registered Nurse Skills Checklist", shortTitle: "Administrative RN", icon: "📋", group: "Nursing", categories: [
    { title: "Administrative Duties", skills: [
      { name: "Data Entry" }, { name: "Medical Records - Entry" }, { name: "Medical Records - Maintenance" }, { name: "Electronic Medical Records - Entry" }, { name: "Electronic Medical Records - Maintenance" }, { name: "Gathers data and runs reports" }, { name: "Patient Files - Set up, report and record" }, { name: "Completion and filing/distribution of reports" }, { name: "Schedules appointments/tests" }, { name: "Takes, distributes and prioritizes messages" }, { name: "Assists physicians with procedures" }, { name: "Assists nursing staff" }, { name: "Prepares patients for appointments and exams" }, { name: "Gathers patient history and VS" }, { name: "Gives injections as directed" }, { name: "Performs phlebotomy skills" }, { name: "Collects lab specimens" }, { name: "Administer EKGs" }, { name: "Completes specimen testing (glucose, strep, mono, flu)" }, { name: "Prepares and maintains supplies and equipment" }, { name: "Knows utilization of patient care equipment" }, { name: "Develops patient, physician and peer relationships" }, { name: "Maintains/protects patient confidentiality" }, { name: "Adheres to facility policies and procedures" }, { name: "Adheres to OSHA, HIPAA, legal and ethical guidelines" }, { name: "Adheres to quality protocol and standards" }, { name: "Attends and participates in required meetings" }, { name: "Schedules appointments, tests and treatments" }, { name: "Responds to emergencies in a calm organized manner" }, { name: "Understands/follows chain of command" },
    ]},
    { title: "Computer Skills", skills: [
      { name: "Medic, Medic Soft" }, { name: "Centricity" }, { name: "Medical Manager" }, { name: "HIS" }, { name: "Word, Word Perfect" }, { name: "Soft" }, { name: "Windows" }, { name: "IDX" }, { name: "Meditech" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Newborn (birth to 30 days)" }, { name: "Infant (31 days to 1 year)" }, { name: "Toddler (ages 2-3 years)" }, { name: "Preschooler (ages 4-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "float-rn", title: "Float RN Skills Checklist", shortTitle: "Float RN", icon: "🔀", group: "Nursing", categories: [
    { title: "Cross-Unit Adaptability", skills: [
      { name: "Rapid Unit Orientation and Huddle Briefing" }, { name: "Med/Surg Patient Care" }, { name: "Telemetry Monitoring Basics" }, { name: "Step-Down/Intermediate Care Basics" }, { name: "Basic ICU Support Tasks" }, { name: "Emergency Department Support" }, { name: "Prioritization Across Unfamiliar Patient Assignments" }, { name: "Rapid Chart Review and Handoff (SBAR)" },
    ]},
    { title: "Clinical Skills", skills: [
      { name: "Medication Administration (Oral, IV, IM, SQ)" }, { name: "IV Insertion and Maintenance" }, { name: "Vital Signs and Early Warning Score Assessment" }, { name: "Wound Care Basics" }, { name: "Foley Catheter Insertion and Care" }, { name: "NG Tube Insertion and Care" }, { name: "Blood Product Administration" }, { name: "Code Blue/Rapid Response Participation" },
    ]},
    { title: "Systems & Documentation", skills: [
      { name: "Epic" }, { name: "Cerner" }, { name: "Meditech" }, { name: "Multiple Unit-Specific Charting Workflows" }, { name: "Computerized Physician Order Entry (CPOE)" }, { name: "Barcode Medication Administration" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonatal (Birth - 30 Days)" }, { name: "Infant (1 Month - 1 Year)" }, { name: "Pediatric (1-12 Years)" }, { name: "Adolescent (13-17 Years)" }, { name: "Adult (18-64 Years)" }, { name: "Geriatric (65+ Years)" },
    ]},
  ]},

  { slug: "rn-case-manager", title: "Registered Nurse Case Manager Skills Checklist", shortTitle: "RN Case Manager", icon: "📁", group: "Nursing", categories: [
    { title: "Skilled Care Environments", skills: [
      { name: "Acute Care/Hospital" }, { name: "Managed Care" }, { name: "SNF/Long Term Care" }, { name: "Home Health" }, { name: "Insurance/Payer" },
    ]},
    { title: "Case Management & Utilization Review", skills: [
      { name: "Communicates Well With Others, Verbally" }, { name: "Communicates Well With Others, in Writing (Reconsideration Letters)" }, { name: "Basic Negotiation Strategies" }, { name: "Basic Computer Skills" }, { name: "Ability to Prioritize" }, { name: "Concurrent Review" }, { name: "Retrospective Review" }, { name: "Disability Review" }, { name: "Long Term / Short Term Disability Case Management" }, { name: "Workers Compensation Review" }, { name: "Workers Compensation Case Management" }, { name: "PAC - Pre Certification / Pre-Admission Certification" }, { name: "CSR – Continued Stay Review" }, { name: "MCM – Medical Case Management" }, { name: "DP / DCP – Discharge Planning" }, { name: "Discharge Screens—Specific Indicators of Patients' Ability" }, { name: "ISD-A Interqual – Criteria for Hospital Admissions" }, { name: "Intensity of Service—Diagnostic & Therapeutic Services" }, { name: "Appropriateness of Care-Special Diagnostic & Therapeutic Procedures" }, { name: "Severity of Illness—Objective Clinical Data" }, { name: "DRG-Diagnostic Related Grouping (Exempt & Non-Exempt States)" }, { name: "ICD-9-CM" }, { name: "CPT" }, { name: "SSO" }, { name: "SIMS-Interqual - Criteria for SSO Waiver" }, { name: "Milliman & Robertson Criteria" }, { name: "PPR- Prospective Procedure Review" }, { name: "PA-Physician Advisor" },
    ]},
    { title: "Care Coordination & Discharge Planning", skills: [
      { name: "Post-Acute Placement Coordination" }, { name: "DME Coordination" }, { name: "Home Health Referral" }, { name: "Community Resource Referral" }, { name: "Readmission Risk Assessment" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "rn-first-assist", title: "Registered Nurse First Assist Skills Checklist", shortTitle: "RN First Assist", icon: "🔧", group: "Nursing", categories: [
    { title: "Pre-Operative", skills: [
      { name: "Patient Positioning" }, { name: "Surgical Site Preparation" }, { name: "Sterile Field Setup" }, { name: "Instrument and Equipment Verification" }, { name: "Time-Out/Surgical Safety Checklist Participation" },
    ]},
    { title: "Intra-Operative Assisting", skills: [
      { name: "Tissue Handling" }, { name: "Hemostasis Technique" }, { name: "Suturing and Wound Closure" }, { name: "Retraction" }, { name: "Electrocautery Use" }, { name: "Sponge, Needle, and Instrument Counts" }, { name: "Specimen Handling" }, { name: "First Assist Camera Operation (Laparoscopic/Robotic)" },
    ]},
    { title: "Surgical Specialty Exposure", skills: [
      { name: "General Surgery" }, { name: "Orthopedic Surgery" }, { name: "Cardiovascular/Thoracic Surgery" }, { name: "Gynecologic Surgery" }, { name: "Urologic Surgery" }, { name: "Neurosurgery" },
    ]},
    { title: "Post-Operative", skills: [
      { name: "Dressing Application" }, { name: "Post-Op Orders Review" }, { name: "Hand-Off to PACU/Recovery" }, { name: "Post-Op Complication Recognition" },
    ]},
  ]},

  { slug: "rn-risk-manager", title: "Registered Nurse Risk Manager Skills Checklist", shortTitle: "RN Risk Manager", icon: "🛡️", group: "Nursing", categories: [
    { title: "Patient Safety & Incident Management", skills: [
      { name: "Incident Investigation" }, { name: "Root Cause Analysis" }, { name: "Sentinel Event Reporting" }, { name: "Near-Miss Tracking and Trending" }, { name: "Adverse Event Disclosure Support" }, { name: "Failure Mode and Effects Analysis (FMEA)" },
    ]},
    { title: "Regulatory & Compliance", skills: [
      { name: "Joint Commission Standards" }, { name: "CMS Conditions of Participation" }, { name: "State Health Department Reporting" }, { name: "Policy and Procedure Development" }, { name: "Survey Readiness" },
    ]},
    { title: "Claims & Quality", skills: [
      { name: "Claims Management Support" }, { name: "Quality Improvement Project Participation" }, { name: "Risk Assessment and Mitigation Planning" }, { name: "Peer Review Process" }, { name: "Staff Education on Risk Topics" },
    ]},
    { title: "Documentation & Reporting", skills: [
      { name: "Incident Report Systems (e.g., RL6, Midas)" }, { name: "Legal/Risk Documentation Standards" }, { name: "Data Trend Reporting to Leadership" }, { name: "Insurance Carrier Coordination" },
    ]},
  ]},

  { slug: "rn-phone-triage", title: "Registered Nurse Phone Triage Skills Checklist", shortTitle: "RN Phone Triage", icon: "☎️", group: "Nursing", categories: [
    { title: "Telephonic Assessment", skills: [
      { name: "Standardized Triage Protocols (e.g., Schmitt-Thompson)" }, { name: "Symptom-Based Assessment" }, { name: "Chief Complaint Prioritization" }, { name: "Emergency vs. Non-Emergency Identification" }, { name: "De-Escalation of Anxious Callers" }, { name: "Pediatric Symptom Triage" },
    ]},
    { title: "Clinical Decision Support", skills: [
      { name: "Protocol-Driven Disposition (ER, Urgent Care, Self-Care)" }, { name: "Medication and Dosage Guidance Within Scope" }, { name: "Recognition of Red-Flag Symptoms" }, { name: "Escalation to On-Call Provider" }, { name: "Poison Control Coordination" },
    ]},
    { title: "Systems & Documentation", skills: [
      { name: "Telehealth/Telephonic Charting Platforms" }, { name: "Call Documentation Standards" }, { name: "EMR Integration" }, { name: "HIPAA Compliance in Remote Settings" },
    ]},
    { title: "Communication", skills: [
      { name: "Active Listening" }, { name: "Patient Education Over the Phone" }, { name: "Multilingual/Interpreter Service Coordination" }, { name: "Callback and Follow-Up Protocols" },
    ]},
  ]},

  { slug: "rn-iv-therapy", title: "Registered Nurse IV Therapy / Infusion Skills Checklist", shortTitle: "RN IV Therapy", icon: "💧", group: "Nursing", categories: [
    { title: "Peripheral Line Management", skills: [
      { name: "Peripheral IV Insertion" }, { name: "Ultrasound-Guided IV Insertion" }, { name: "Regulate/Maintain IV Line" }, { name: "Manage Complications of Peripheral IV Line" }, { name: "Troubleshoot Slow/Occluded IV Line" }, { name: "D/C Peripheral IV Line" }, { name: "Midline Catheter Care" },
    ]},
    { title: "PICC Line Management", skills: [
      { name: "Insertion of PICC Line" }, { name: "Confirmation of PICC Line Placement via X-Ray" }, { name: "Administer Medications Through PICC Line" }, { name: "Draw Blood From PICC Line" }, { name: "Maintain PICC Line" }, { name: "D/C PICC Line" },
    ]},
    { title: "Central Line (CVC) Management", skills: [
      { name: "Assist Provider With CVC Placement/Insertion" }, { name: "CVC Line Confirmation via X-Ray" }, { name: "Manage CVC Infusions" }, { name: "Draw Blood From CVC Line" }, { name: "Maintain CVC Line" }, { name: "CVC Dressing Change" }, { name: "CVC Tray Set-Up" }, { name: "D/C CVC Line" }, { name: "Management of Tunneled CVC (e.g., Hickman, Broviac)" }, { name: "Management of Groshong Catheter" }, { name: "Management of Cordis IV Catheter" },
    ]},
    { title: "Implanted Port Management", skills: [
      { name: "Access Implanted Ports" }, { name: "Draw Blood From Implanted Ports" }, { name: "Flushing of Implanted Ports" }, { name: "Dressing Changes for Implanted Ports" }, { name: "Deaccess Implanted Ports" },
    ]},
    { title: "Infusion Administration", skills: [
      { name: "IV Fluid Administration" }, { name: "Chemotherapy/Biologic Infusion" }, { name: "Administration of Blood Products" }, { name: "Total Parenteral Nutrition (TPN)" }, { name: "Antibiotic Infusion" }, { name: "Infusion Pump Programming and Troubleshooting" }, { name: "Saline/Heparin Lock Management" },
    ]},
    { title: "Complication Management", skills: [
      { name: "Infiltration/Extravasation Recognition and Management" }, { name: "Phlebitis Assessment" }, { name: "Line Occlusion Troubleshooting" }, { name: "Line Declotting" }, { name: "Allergic/Anaphylactic Reaction Response" }, { name: "Air Embolism Prevention" }, { name: "Maintain Aseptic Technique" },
    ]},
    { title: "Documentation & Compliance", skills: [
      { name: "Infusion Nurses Society (INS) Standards" }, { name: "Site Assessment Documentation" }, { name: "Medication Reconciliation" }, { name: "Patient Education on Home Infusion" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "crna", title: "Certified Registered Nurse Anesthetist Skills Checklist", shortTitle: "CRNA", icon: "💤", group: "Nursing", categories: [
    { title: "Practice Settings", skills: [
      { name: "Dentist office" }, { name: "COPA (Combined oro-pharyngeal airway)" }, { name: "Neuromuscular status and function" }, { name: "Acute care hospital" }, { name: "Nerve block" }, { name: "Outpatient surgery center" }, { name: "Patient positioning" }, { name: "Plastic surgery center" }, { name: "Private practice office setting" },
    ]},
    { title: "Surgical Procedures Supported", skills: [
      { name: "Orthopedics" }, { name: "Open heart" }, { name: "Obstetrics" }, { name: "Plastics" }, { name: "Trauma" }, { name: "ENT" }, { name: "Neurosurgical" }, { name: "Vascular" },
    ]},
    { title: "Anesthesia Medications", skills: [
      { name: "Accessory medications" }, { name: "Methohexital" }, { name: "Versed" }, { name: "Nitrous oxide" }, { name: "Valium" }, { name: "Adjuvant medications" }, { name: "Fluids" }, { name: "Sodium Thiopental" }, { name: "Blood products" }, { name: "Ketamine" },
    ]},
    { title: "Airway Management", skills: [
      { name: "Nasal Intubation" }, { name: "Oxygenation" }, { name: "Fiber optic Intubation" }, { name: "Cardiovascular status" }, { name: "Ventilation" }, { name: "Endotracheal Intubation" },
    ]},
    { title: "Anesthesia Care & Regional Techniques", skills: [
      { name: "Infection control practices" }, { name: "Obtaining accurate pre-anesthesia assessment" }, { name: "Intravenous regional" }, { name: "Local:" }, { name: "Intercostal block" }, { name: "Subarachnoid block" }, { name: "Periocular" }, { name: "Major" }, { name: "Retrobulbar" }, { name: "Mask induction and maintenance" }, { name: "Transtracheal block" }, { name: "Caudal" }, { name: "IV maintenance" }, { name: "Total IV anesthesia" }, { name: "Interpretation of lab studies" }, { name: "Recommend appropriate diagnostic studies" }, { name: "Epidural" }, { name: "IV general anesthesia" }, { name: "Local infiltration block" }, { name: "Plexus" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "nurse-educator", title: "Nurse Educator Skills Checklist", shortTitle: "Nurse Educator", icon: "🎓", group: "Nursing", categories: [
    { title: "Curriculum & Instruction", skills: [
      { name: "Curriculum Development" }, { name: "Competency-Based Education Design" }, { name: "Simulation-Based Training" }, { name: "Skills Lab Instruction" }, { name: "Adult Learning Theory Application" }, { name: "Blended/E-Learning Development" },
    ]},
    { title: "Onboarding & Orientation", skills: [
      { name: "New Hire Orientation Programs" }, { name: "Preceptor Program Development" }, { name: "Clinical Competency Validation" }, { name: "Annual Mandatory Education/Compliance Training" }, { name: "Residency Program Coordination" },
    ]},
    { title: "Evaluation & Outcomes", skills: [
      { name: "Learning Needs Assessment" }, { name: "Performance Evaluation and Feedback" }, { name: "Education Outcome Tracking" }, { name: "Knowledge/Skills Testing Development" },
    ]},
    { title: "Specialty Education", skills: [
      { name: "ACLS/BLS/PALS Instruction" }, { name: "Equipment/Technology Training" }, { name: "Evidence-Based Practice Education" }, { name: "Interdisciplinary Education Program Coordination" },
    ]},
  ]},

  { slug: "nurse-manager", title: "Nurse Manager Skills Checklist", shortTitle: "Nurse Manager", icon: "🗂️", group: "Nursing", categories: [
    { title: "HR Management", skills: [
      { name: "Career and Succession Planning" }, { name: "Periodic and Annual Performance Evaluations" }, { name: "Employee Performance Improvement Plans" }, { name: "Termination" }, { name: "Controlled Substance Diversion" }, { name: "Accommodations (e.g., Disability)" }, { name: "Staff Scope of Practice (e.g., Licensure)" }, { name: "Recruitment/Hiring" }, { name: "Leave of Absences (e.g., Medical, Disability, FMLA)" }, { name: "Fitness for Duty" }, { name: "Hours/Wages (e.g., Overtime)" }, { name: "Mandated Reporting (e.g., Abuse, Disease)" }, { name: "Interviewing" },
    ]},
    { title: "Unit & Staff Management", skills: [
      { name: "Staffing by (NHPPD, Acuity, Skill Mix)" }, { name: "Scheduling" }, { name: "Flexing, Floating, On-Call Policies" }, { name: "Charge RN Duties" }, { name: "Mentorship/Coaching" }, { name: "Promote Cultural Competence and Humility" }, { name: "Facilitation/Collaboration With Others (e.g., Physicians, Other Departments, Outside Agencies)" }, { name: "Conflict Resolution Strategies" }, { name: "Change Management Facilitator" }, { name: "Conduct Staff Meetings" }, { name: "Patient/Family Issues" }, { name: "Create Unit Goals Aligned With Organizational Strategic Goals" }, { name: "Staff/Patient Advocate" }, { name: "Team Building" }, { name: "Educator" }, { name: "Ethical Dilemmas" }, { name: "Promote Staff Engagement and Retention" }, { name: "Crisis Management During Emergencies" }, { name: "Utilization of Supplies/Resources" }, { name: "Development/Evaluation of Orientation Programs" }, { name: "Analyze Workflows for Efficiency" }, { name: "Regulatory Compliance (e.g., OSHA, HIPAA, CMS)" }, { name: "Promote Use of EBP and Research" }, { name: "Development of Unit Policies/Procedures" },
    ]},
    { title: "Fiscal Management", skills: [
      { name: "Annual Average Daily Census (ADC)" }, { name: "Staff Skill Mix" }, { name: "Patient Acuity" }, { name: "Nursing Hours per Patient Day" }, { name: "Nurse to Patient Ratios" }, { name: "Staffing Models" }, { name: "Revenue and Expense Forecasting" }, { name: "Calculating ROA" }, { name: "Variable/Fixed Cost" }, { name: "Evaluation of Productivity" }, { name: "New Program Assessment" }, { name: "Balance Sheets" }, { name: "Reporting on Budget Variance" }, { name: "Capital Budgeting" }, { name: "Calculating ROI" }, { name: "Cost-Benefit Analysis" }, { name: "Payroll Process for Staff" }, { name: "Direct/Indirect Costs" }, { name: "Diagnosis-Related Group (DRG) Classifications" }, { name: "International Classification of Diseases (ICD)-9 & 10 Codes" }, { name: "Payer Mix (Medicare, Medicaid, Managed Care, Third-Party Providers)" },
    ]},
    { title: "Performance Improvement & Quality", skills: [
      { name: "EBP Models" }, { name: "Root Cause Analysis (RCA)" }, { name: "Benchmarking" }, { name: "Failure Mode Effects Analysis (FMEA)" }, { name: "Data Analysis/Trends" }, { name: "PDCA" }, { name: "Chart Reviews (Concurrent, Retrospective)" }, { name: "Dashboard Reporting" }, { name: "QI/PI Projects" }, { name: "Patient Satisfaction" }, { name: "Errors, Events, and Incidences" }, { name: "Staff Turnover/Retention" }, { name: "Nurse-Sensitive Indicators: Structure, Process, Outcome (e.g., Falls, CAUTI, RN Workforce)" }, { name: "Staff Injuries" }, { name: "Length of Stay (LOS)" }, { name: "Core Measures" }, { name: "Staff Satisfaction" }, { name: "Continuous Readiness" }, { name: "TJC National Patient Safety Goals" }, { name: "Error Prevention Strategies" }, { name: "Promote \"Just Culture\" for Error Reporting" }, { name: "Use of EHR for Reporting, Data Analysis, and Workflow" }, { name: "Medication/ADC Reports" }, { name: "Modalities for Presentations (e.g., PowerPoint, Excel)" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "clinical-research-nurse", title: "Clinical Research Nurse Skills Checklist", shortTitle: "Clinical Research Nurse", icon: "🧪", group: "Nursing", categories: [
    { title: "Clinical Trial Management", skills: [
      { name: "Protocol Adherence" }, { name: "Informed Consent Process" }, { name: "Subject Screening and Enrollment" }, { name: "Adverse Event Reporting" }, { name: "Investigational Drug/Device Administration" }, { name: "Randomization Procedures" },
    ]},
    { title: "Regulatory & Documentation", skills: [
      { name: "Good Clinical Practice (GCP) Standards" }, { name: "IRB Submission Support" }, { name: "Source Document/CRF Completion" }, { name: "FDA Regulatory Compliance" }, { name: "Protocol Deviation Reporting" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Study Subject Education" }, { name: "Coordination With Study Sponsors/Monitors" }, { name: "Specimen Collection and Processing Per Protocol" }, { name: "Vital Sign and Assessment Collection Per Protocol" },
    ]},
    { title: "Study Coordination", skills: [
      { name: "Investigator Meeting Participation" }, { name: "Monitor Visit Preparation" }, { name: "Drug Accountability Log Maintenance" }, { name: "Study Budget and Billing Compliance" },
    ]},
  ]},

  { slug: "transplant-coordinator", title: "Transplant Coordinator Skills Checklist", shortTitle: "Transplant Coordinator", icon: "🫂", group: "Nursing", categories: [
    { title: "Pre-Transplant", skills: [
      { name: "Donor/Recipient Evaluation Coordination" }, { name: "Organ Allocation Process (UNOS)" }, { name: "Waitlist Management" }, { name: "Living Donor Coordination" }, { name: "Transplant Candidacy Assessment" }, { name: "Multidisciplinary Selection Committee Presentation" },
    ]},
    { title: "Peri-Transplant", skills: [
      { name: "Organ Procurement Coordination" }, { name: "Cross-Matching Coordination" }, { name: "Surgical Team Communication" }, { name: "Organ Transport Logistics" }, { name: "Operating Room Readiness Coordination" },
    ]},
    { title: "Post-Transplant", skills: [
      { name: "Immunosuppression Management Education" }, { name: "Rejection Monitoring Coordination" }, { name: "Long-Term Follow-Up Coordination" }, { name: "Patient/Family Education and Support" }, { name: "Infection Prevention Education" }, { name: "Biopsy Coordination" },
    ]},
    { title: "Regulatory & Program Compliance", skills: [
      { name: "UNOS/OPTN Reporting Requirements" }, { name: "CMS Conditions of Participation for Transplant Programs" }, { name: "Transplant Program Data Submission (SRTR)" }, { name: "Informed Consent Process" },
    ]},
  ]},

  { slug: "rn-urology", title: "Registered Nurse – Urology Skills Checklist", shortTitle: "RN – Urology", icon: "🫘", group: "Nursing", categories: [
    { title: "Assessment", skills: [
      { name: "Genitourinary Assessment" }, { name: "Post-Op Urologic Surgery Assessment" }, { name: "Bladder Scanning" }, { name: "Urodynamic Testing Assist" }, { name: "Hematuria Assessment and Management" },
    ]},
    { title: "Catheter & Drainage Management", skills: [
      { name: "Foley Catheter Insertion/Care" }, { name: "Suprapubic Catheter Care" }, { name: "Nephrostomy Tube Care" }, { name: "Ureteral Stent Management" }, { name: "Continuous Bladder Irrigation" }, { name: "Three-Way Catheter Management" },
    ]},
    { title: "Surgical Care", skills: [
      { name: "Pre/Post-Op Prostatectomy Care" }, { name: "Post-Op Cystectomy/Urinary Diversion Care" }, { name: "Ostomy/Stoma Care (Urostomy)" }, { name: "Robotic Urologic Surgery Recovery Care" }, { name: "Kidney Transplant Recovery Care" },
    ]},
    { title: "Patient Education", skills: [
      { name: "Catheter Care Teaching" }, { name: "Incontinence Management Education" }, { name: "Post-Op Activity Restrictions Education" }, { name: "Pelvic Floor Therapy Referral" },
    ]},
    { title: "Diagnostic Support", skills: [
      { name: "Cystoscopy Assist" }, { name: "PSA/Lab Value Monitoring" }, { name: "Renal Function Monitoring" },
    ]},
  ]},
];
