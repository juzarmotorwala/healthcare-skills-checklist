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
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
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

  { slug: "home-health-aide", title: "Home Health Aide Skills Checklist", shortTitle: "Home Health Aide", icon: "🏡", group: "Nursing", categories: [
    { title: "Personal Care", skills: [
      { name: "Bathing/showering assistance" }, { name: "Grooming and dressing assistance" }, { name: "Oral hygiene assistance" }, { name: "Toileting/incontinence care" }, { name: "Feeding assistance" }, { name: "Mobility/transfer assistance" },
    ]},
    { title: "Household Support", skills: [
      { name: "Light housekeeping" }, { name: "Meal preparation" }, { name: "Laundry" }, { name: "Medication reminders" }, { name: "Errands/grocery assistance" },
    ]},
    { title: "Safety & Observation", skills: [
      { name: "Fall risk awareness" }, { name: "Vital sign observation (non-invasive)" }, { name: "Recognizing changes in condition" }, { name: "Emergency response procedures" }, { name: "Infection control/hand hygiene" },
    ]},
    { title: "Documentation & Communication", skills: [
      { name: "Visit note documentation" }, { name: "Reporting changes to supervising RN" }, { name: "Care plan adherence" }, { name: "Family communication" },
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
      { name: "Review, analysis and extraction of clinical information from patient records" }, { name: "Drafting effective narratives for Medicare and Medicaid appeals documentation" }, { name: "Drafted briefs in support of denied cases under appeal" }, { name: "Maintained current knowledge base of medical coding" }, { name: "Knowledge of federal and state hospital Utilization Review regulations" }, { name: "Knowledge of Medicare guidelines regarding medical necessity" }, { name: "Knowledge of Medicare guidelines regarding inpatient and outpatient observation" }, { name: "Research and preparation for beneficiary hearings" }, { name: "Experience testifying as expert witness in hearings" }, { name: "Collaborated with internal and external legal sources" }, { name: "Chart review skills" }, { name: "Ability to quickly research and extract relevant data from a medical record" }, { name: "Develop and Draft clear narratives for appeals" }, { name: "Experience with electronic medical record" }, { name: "Knowledge of acute hospital utilization review using InterQual and/or Milliman" }, { name: "Working knowledge of medical coding" }, { name: "Knowledge and experience with case management" }, { name: "Knowledge and experience with government and contracted payers" }, { name: "Attention to details, timeliness and accuracy" }, { name: "Ability to work independently while working efficiently" }, { name: "Ability to work within a high production team" },
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
      { name: "Communicates effectively with residents, families, and team members" }, { name: "Communicates effectively with peers, physicians, and State agencies" }, { name: "Coordinates resident care to multidisciplinary team" }, { name: "Provides updated resident information to physician, family, legal, consultants" }, { name: "Knowledgeable in human resource policies" }, { name: "Delegates as appropriate" }, { name: "Demonstrates excellent customer service skills" }, { name: "Monitors progress and holds associates accountable" }, { name: "Enforces regulatory and employee law compliance" },
    ]},
    { title: "Technical Domain", skills: [
      { name: "Assesses and monitors staff compliance of infection control" }, { name: "Demonstrates excellent technical skills and judgment" }, { name: "Assess and monitors Facility Scorecard and CMS quality indicator data" }, { name: "Actively participates in facility QA&A meetings" }, { name: "Promotes survey preparedness at all times" }, { name: "Demonstrates basic working knowledge of Computer systems" }, { name: "Demonstrates understanding of quality event investigating" }, { name: "Maintains current knowledge of LTC Federal/state regulations" }, { name: "Ensure RAI functions are completed timely" }, { name: "Assess and ensure execution of Facility standards and policies" }, { name: "Provides and monitors clinical orientation and ongoing training" }, { name: "Actively participates in recruiting, hiring and orientation" },
    ]},
    { title: "Problem Solving Domain", skills: [
      { name: "Utilizes the nursing process to structure care" }, { name: "Demonstrates ability to assess and interpret resident data" }, { name: "Collaborates with DNS/Consultants on noncompliance areas" }, { name: "Effectively troubleshoots staffing resource allocation" }, { name: "Demonstrates understanding of census and expense control" }, { name: "Assess and monitors discharge/rehospitalization patterns" },
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
      { name: "Rapid unit orientation and huddle briefing" }, { name: "Med/Surg patient care" }, { name: "Telemetry monitoring basics" }, { name: "Step-down/intermediate care basics" }, { name: "Basic ICU support tasks" }, { name: "Emergency department support" }, { name: "Prioritization across unfamiliar patient assignments" }, { name: "Rapid chart review and handoff (SBAR)" },
    ]},
    { title: "Clinical Skills", skills: [
      { name: "Medication administration (oral, IV, IM, SQ)" }, { name: "IV insertion and maintenance" }, { name: "Vital signs and early warning score assessment" }, { name: "Wound care basics" }, { name: "Foley catheter insertion and care" }, { name: "NG tube insertion and care" }, { name: "Blood product administration" }, { name: "Code blue / rapid response participation" },
    ]},
    { title: "Systems & Documentation", skills: [
      { name: "Epic" }, { name: "Cerner" }, { name: "Meditech" }, { name: "Multiple unit-specific charting workflows" }, { name: "Computerized Physician Order Entry (CPOE)" }, { name: "Barcode medication administration" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonatal (birth - 30 days)" }, { name: "Infant (1 month - 1 year)" }, { name: "Pediatric (1-12 years)" }, { name: "Adolescent (13-17 years)" }, { name: "Adult (18-64 years)" }, { name: "Geriatric (65+ years)" },
    ]},
  ]},

  { slug: "rn-case-manager", title: "Registered Nurse Case Manager Skills Checklist", shortTitle: "RN Case Manager", icon: "📁", group: "Nursing", categories: [
    { title: "Utilization Review", skills: [
      { name: "InterQual Criteria" }, { name: "Milliman Care Guidelines" }, { name: "Medical necessity review" }, { name: "Concurrent review" }, { name: "Retrospective review" }, { name: "Denial management and appeals" }, { name: "Level of care determination" },
    ]},
    { title: "Discharge Planning & Care Coordination", skills: [
      { name: "Assessment of post-acute needs" }, { name: "SNF/rehab placement coordination" }, { name: "Home health referral" }, { name: "DME coordination" }, { name: "Hospice referral" }, { name: "Insurance authorization" }, { name: "Interdisciplinary rounding" }, { name: "Readmission risk screening" },
    ]},
    { title: "Documentation & Compliance", skills: [
      { name: "Electronic medical record case notes" }, { name: "Care plan development" }, { name: "CMS/Medicare Conditions of Participation" }, { name: "HIPAA compliance" }, { name: "Payer communication and authorization tracking" },
    ]},
    { title: "Communication", skills: [
      { name: "Patient and family education" }, { name: "Physician collaboration" }, { name: "Payer/insurance liaison" }, { name: "Conflict resolution" },
    ]},
  ]},

  { slug: "rn-first-assist", title: "Registered Nurse First Assist Skills Checklist", shortTitle: "RN First Assist", icon: "🔧", group: "Nursing", categories: [
    { title: "Pre-Operative", skills: [
      { name: "Patient positioning" }, { name: "Surgical site preparation" }, { name: "Sterile field setup" }, { name: "Instrument and equipment verification" }, { name: "Time-out/surgical safety checklist participation" },
    ]},
    { title: "Intra-Operative Assisting", skills: [
      { name: "Tissue handling" }, { name: "Hemostasis technique" }, { name: "Suturing and wound closure" }, { name: "Retraction" }, { name: "Electrocautery use" }, { name: "Sponge, needle, and instrument counts" }, { name: "Specimen handling" },
    ]},
    { title: "Surgical Specialty Exposure", skills: [
      { name: "General surgery" }, { name: "Orthopedic surgery" }, { name: "Cardiovascular/thoracic surgery" }, { name: "Gynecologic surgery" }, { name: "Urologic surgery" }, { name: "Neurosurgery" },
    ]},
    { title: "Post-Operative", skills: [
      { name: "Dressing application" }, { name: "Post-op orders review" }, { name: "Hand-off to PACU/recovery" }, { name: "Post-op complication recognition" },
    ]},
  ]},

  { slug: "rn-risk-manager", title: "Registered Nurse Risk Manager Skills Checklist", shortTitle: "RN Risk Manager", icon: "🛡️", group: "Nursing", categories: [
    { title: "Patient Safety & Incident Management", skills: [
      { name: "Incident investigation" }, { name: "Root cause analysis" }, { name: "Sentinel event reporting" }, { name: "Near-miss tracking and trending" }, { name: "Adverse event disclosure support" },
    ]},
    { title: "Regulatory & Compliance", skills: [
      { name: "Joint Commission standards" }, { name: "CMS Conditions of Participation" }, { name: "State health department reporting" }, { name: "Policy and procedure development" }, { name: "Survey readiness" },
    ]},
    { title: "Claims & Quality", skills: [
      { name: "Claims management support" }, { name: "Quality improvement project participation" }, { name: "Risk assessment and mitigation planning" }, { name: "Peer review process" }, { name: "Staff education on risk topics" },
    ]},
    { title: "Documentation", skills: [
      { name: "Incident report systems (e.g., RL6, Midas)" }, { name: "Legal/risk documentation standards" }, { name: "Data trend reporting to leadership" },
    ]},
  ]},

  { slug: "rn-phone-triage", title: "Registered Nurse Phone Triage Skills Checklist", shortTitle: "RN Phone Triage", icon: "☎️", group: "Nursing", categories: [
    { title: "Telephonic Assessment", skills: [
      { name: "Standardized triage protocols (e.g., Schmitt-Thompson)" }, { name: "Symptom-based assessment" }, { name: "Chief complaint prioritization" }, { name: "Emergency vs. non-emergency identification" }, { name: "De-escalation of anxious callers" },
    ]},
    { title: "Clinical Decision Support", skills: [
      { name: "Protocol-driven disposition (ER, urgent care, self-care)" }, { name: "Medication and dosage guidance within scope" }, { name: "Recognition of red-flag symptoms" }, { name: "Escalation to on-call provider" },
    ]},
    { title: "Systems & Documentation", skills: [
      { name: "Telehealth/telephonic charting platforms" }, { name: "Call documentation standards" }, { name: "EMR integration" }, { name: "HIPAA compliance in remote settings" },
    ]},
    { title: "Communication", skills: [
      { name: "Active listening" }, { name: "Patient education over the phone" }, { name: "Multilingual/interpreter service coordination" }, { name: "Callback and follow-up protocols" },
    ]},
  ]},

  { slug: "rn-iv-therapy", title: "Registered Nurse IV Therapy / Infusion Skills Checklist", shortTitle: "RN IV Therapy", icon: "💧", group: "Nursing", categories: [
    { title: "Vascular Access", skills: [
      { name: "Peripheral IV insertion" }, { name: "Ultrasound-guided IV insertion" }, { name: "PICC line care and maintenance" }, { name: "Central line care and maintenance" }, { name: "Port access (implanted ports)" }, { name: "Midline catheter care" },
    ]},
    { title: "Infusion Administration", skills: [
      { name: "IV fluid administration" }, { name: "Chemotherapy/biologic infusion" }, { name: "Blood and blood product administration" }, { name: "Total parenteral nutrition (TPN)" }, { name: "Antibiotic infusion" }, { name: "Infusion pump programming and troubleshooting" },
    ]},
    { title: "Complication Management", skills: [
      { name: "Infiltration/extravasation recognition and management" }, { name: "Phlebitis assessment" }, { name: "Line occlusion troubleshooting" }, { name: "Allergic/anaphylactic reaction response" }, { name: "Air embolism prevention" },
    ]},
    { title: "Documentation & Compliance", skills: [
      { name: "Infusion Nurses Society (INS) standards" }, { name: "Site assessment documentation" }, { name: "Medication reconciliation" }, { name: "Patient education on home infusion" },
    ]},
  ]},

  { slug: "crna", title: "Certified Registered Nurse Anesthetist Skills Checklist", shortTitle: "CRNA", icon: "💤", group: "Nursing", categories: [
    { title: "Anesthesia Administration", skills: [
      { name: "General anesthesia administration" }, { name: "Regional anesthesia (spinal, epidural, nerve block)" }, { name: "Monitored anesthesia care (MAC)" }, { name: "Airway management (intubation, LMA)" }, { name: "Difficult airway management" },
    ]},
    { title: "Perioperative Management", skills: [
      { name: "Pre-anesthesia assessment" }, { name: "Hemodynamic monitoring and management" }, { name: "Emergence and recovery management" }, { name: "Pain management planning" },
    ]},
    { title: "Specialty Populations", skills: [
      { name: "Obstetric anesthesia" }, { name: "Pediatric anesthesia" }, { name: "Cardiac/thoracic anesthesia" }, { name: "Trauma/emergency anesthesia" },
    ]},
    { title: "Emergency Management", skills: [
      { name: "Malignant hyperthermia protocol" }, { name: "Anaphylaxis management" }, { name: "Advanced cardiac life support" },
    ]},
  ]},

  { slug: "nurse-educator", title: "Nurse Educator Skills Checklist", shortTitle: "Nurse Educator", icon: "🎓", group: "Nursing", categories: [
    { title: "Curriculum & Instruction", skills: [
      { name: "Curriculum development" }, { name: "Competency-based education design" }, { name: "Simulation-based training" }, { name: "Skills lab instruction" }, { name: "Adult learning theory application" },
    ]},
    { title: "Onboarding & Orientation", skills: [
      { name: "New hire orientation programs" }, { name: "Preceptor program development" }, { name: "Clinical competency validation" }, { name: "Annual mandatory education/compliance training" },
    ]},
    { title: "Evaluation", skills: [
      { name: "Learning needs assessment" }, { name: "Performance evaluation and feedback" }, { name: "Education outcome tracking" },
    ]},
  ]},

  { slug: "nurse-manager", title: "Nurse Manager Skills Checklist", shortTitle: "Nurse Manager", icon: "🗂️", group: "Nursing", categories: [
    { title: "Unit Operations", skills: [
      { name: "Staffing and scheduling" }, { name: "Budget management" }, { name: "Supply/resource management" }, { name: "Regulatory/survey readiness" },
    ]},
    { title: "Staff Leadership", skills: [
      { name: "Performance management" }, { name: "Conflict resolution" }, { name: "Staff recruitment and retention" }, { name: "Team building" },
    ]},
    { title: "Quality & Patient Care", skills: [
      { name: "Quality improvement initiatives" }, { name: "Patient satisfaction/HCAHPS management" }, { name: "Incident review and follow-up" }, { name: "Interdisciplinary rounding" },
    ]},
  ]},

  { slug: "clinical-research-nurse", title: "Clinical Research Nurse Skills Checklist", shortTitle: "Clinical Research Nurse", icon: "🧪", group: "Nursing", categories: [
    { title: "Clinical Trial Management", skills: [
      { name: "Protocol adherence" }, { name: "Informed consent process" }, { name: "Subject screening and enrollment" }, { name: "Adverse event reporting" }, { name: "Investigational drug/device administration" },
    ]},
    { title: "Regulatory & Documentation", skills: [
      { name: "Good Clinical Practice (GCP) standards" }, { name: "IRB submission support" }, { name: "Source document/CRF completion" }, { name: "FDA regulatory compliance" },
    ]},
    { title: "Patient Care", skills: [
      { name: "Study subject education" }, { name: "Coordination with study sponsors/monitors" }, { name: "Specimen collection and processing per protocol" },
    ]},
  ]},

  { slug: "transplant-coordinator", title: "Transplant Coordinator Skills Checklist", shortTitle: "Transplant Coordinator", icon: "🫂", group: "Nursing", categories: [
    { title: "Pre-Transplant", skills: [
      { name: "Donor/recipient evaluation coordination" }, { name: "Organ allocation process (UNOS)" }, { name: "Waitlist management" }, { name: "Living donor coordination" },
    ]},
    { title: "Peri-Transplant", skills: [
      { name: "Organ procurement coordination" }, { name: "Cross-matching coordination" }, { name: "Surgical team communication" },
    ]},
    { title: "Post-Transplant", skills: [
      { name: "Immunosuppression management education" }, { name: "Rejection monitoring coordination" }, { name: "Long-term follow-up coordination" }, { name: "Patient/family education and support" },
    ]},
  ]},

  { slug: "rn-urology", title: "Registered Nurse – Urology Skills Checklist", shortTitle: "RN – Urology", icon: "🫘", group: "Nursing", categories: [
    { title: "Assessment", skills: [
      { name: "Genitourinary assessment" }, { name: "Post-op urologic surgery assessment" }, { name: "Bladder scanning" }, { name: "Urodynamic testing assist" },
    ]},
    { title: "Catheter & Drainage Management", skills: [
      { name: "Foley catheter insertion/care" }, { name: "Suprapubic catheter care" }, { name: "Nephrostomy tube care" }, { name: "Ureteral stent management" }, { name: "Continuous bladder irrigation" },
    ]},
    { title: "Surgical Care", skills: [
      { name: "Pre/post-op prostatectomy care" }, { name: "Post-op cystectomy/urinary diversion care" }, { name: "Ostomy/stoma care (urostomy)" }, { name: "Robotic urologic surgery recovery care" },
    ]},
    { title: "Patient Education", skills: [
      { name: "Catheter care teaching" }, { name: "Incontinence management education" }, { name: "Post-op activity restrictions education" },
    ]},
  ]},
];
