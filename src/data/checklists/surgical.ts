import { ChecklistSpec } from "../checklistData";

export const surgicalChecklists: ChecklistSpec[] = [
  { slug: "or", title: "Registered Nurse – Operating Room Skills Checklist", shortTitle: "RN – Operating Room", icon: "🔪", group: "Surgical", categories: [
    { title: "Work Setting", skills: [
      { name: "General OR" }, { name: "CVOR" }, { name: "Outpatient" }, { name: "Trauma" }, { name: "Peds-General OR" }, { name: "Peds-CVOR" },
    ]},
    { title: "Surgical Specialties", skills: [
      { name: "Cardiac Cath Lab" }, { name: "Spinal Reconstruction" }, { name: "Prenatal" }, { name: "Foot and Ankle" }, { name: "Endocrine (thyroid, parathyroid, adrenal glands)" }, { name: "Bariatric" }, { name: "Obstetrics" }, { name: "Pediatric" }, { name: "Endoscopy" }, { name: "Oral" }, { name: "Laparoscopy" }, { name: "Cystoscopy" }, { name: "Colon and Rectal" }, { name: "Hand and Wrist" }, { name: "Joint Replacement" }, { name: "Robotics" }, { name: "Open Heart" }, { name: "Ophthalmic" }, { name: "Gynecology" }, { name: "Oncology" }, { name: "Organ Procurement" }, { name: "Neurosurgery of the Brain and Peripheral Nerves" }, { name: "Sports Medicine" }, { name: "Plastic and Maxillofacial" }, { name: "Transplant" }, { name: "Neonatal" }, { name: "Vascular" }, { name: "Oculoplastic" }, { name: "Otolaryngology (ENT)" }, { name: "Urology" },
    ]},
    { title: "General Surgery", skills: [
      { name: "Appendectomy" }, { name: "Cholecystectomy" }, { name: "Colectomy/Bowel Resection" }, { name: "Mastectomy" }, { name: "Hernia Repair" }, { name: "Thyroidectomy" }, { name: "Gastrectomy" }, { name: "Exploratory Laparotomy" },
    ]},
    { title: "Orthopedic Surgery", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "ORIF" }, { name: "Arthroscopy" }, { name: "Spinal Surgery" }, { name: "Rotator Cuff Repair" },
    ]},
    { title: "Cardiovascular/Thoracic", skills: [
      { name: "CABG" }, { name: "Valve Replacement" }, { name: "Thoracotomy" }, { name: "Aortic Aneurysm Repair" }, { name: "Pacemaker/AICD Insertion" },
    ]},
    { title: "Neurosurgery", skills: [
      { name: "Craniotomy" }, { name: "Laminectomy" }, { name: "Spinal Fusion" }, { name: "VP Shunt" },
    ]},
    { title: "GU/GYN", skills: [
      { name: "Hysterectomy" }, { name: "C-Section" }, { name: "TURP" }, { name: "Nephrectomy" }, { name: "Cystoscopy" },
    ]},
    { title: "Preoperative Responsibilities", skills: [
      { name: "Advance Directives/DNR Orders" }, { name: "Medication Reconciliation" }, { name: "Physical and Pain Assessment" }, { name: "Patient Interview (NPO status, lab values, imaging, allergies, diagnoses, conditions)" }, { name: "Universal Protocol" }, { name: "Health History" }, { name: "Surgical and Anesthesia Consents (accuracy, laterality, signature, dated)" }, { name: "Verifying Surgical Site Marking" }, { name: "Patient Identification (name, DOB, medical record number)" }, { name: "Preoperative Education" },
    ]},
    { title: "Circulating Duties", skills: [
      { name: "Sponge, Sharps & Instrument Counts" }, { name: "Patient Positioning" }, { name: "Specimen Handling and Labeling" }, { name: "Intraoperative Documentation" }, { name: "Fire Safety Protocol" }, { name: "Time-Out/Patient Advocacy" }, { name: "Thermoregulation" }, { name: "Bowel Isolation Technique" }, { name: "Equipment, Supplies, and Instrument Management" }, { name: "Maintaining the Sterile Field" }, { name: "Case Carts" }, { name: "Setting Up and Running the Backtable" }, { name: "Preference Card/Pick List" }, { name: "Sterile Attire" }, { name: "Retrieving Supplies and Instruments" }, { name: "Opening Sterile Items and Trays" }, { name: "Medication Handling" }, { name: "Patient Monitoring (tissue perfusion, vital signs)" }, { name: "Wound Classification" }, { name: "Implant Handling" }, { name: "Assisting the Surgeon at Sterile Field" },
    ]},
    { title: "Postoperative Responsibilities", skills: [
      { name: "Skin and Wound Assessment" }, { name: "Postoperative Education" }, { name: "Complete Documentation" }, { name: "Wound Care" }, { name: "Transfer of Patient" }, { name: "Evaluate Patient's Physiological Status/Hemodynamics" }, { name: "Hand-Off Report to Post-Anesthesia Care Nurse" }, { name: "Surgical Drain Care" },
    ]},
    { title: "Patient Positioning", skills: [
      { name: "Prone" }, { name: "Trendelenburg" }, { name: "Positioning Individuals Who Are Pregnant" }, { name: "Proper Use of Positioning Devices" }, { name: "Kidney" }, { name: "Supine" }, { name: "Safe Patient Handling" }, { name: "Knee-Chest" }, { name: "Sitting, Modified-Sitting (Fowlers/Semi-Fowlers), and Beach-Chair" }, { name: "Positioning Injuries and Prevention" }, { name: "Sims" }, { name: "Pressure Injury Prevention and Assessment" }, { name: "Cranial Fixation/Skull Pins" }, { name: "Positioning Individuals with Obesity (bariatric surgery)" }, { name: "Lateral" }, { name: "Jackknife" }, { name: "Reverse Trendelenburg" }, { name: "Lithotomy" }, { name: "Transfer Devices" },
    ]},
    { title: "Surgical Site Prep", skills: [
      { name: "Ear" }, { name: "Inguinal Hernia" }, { name: "Scalp" }, { name: "Hand" }, { name: "Back" }, { name: "Decolonization (antimicrobial soap, skin cleansing)" }, { name: "Facial" }, { name: "Chest" }, { name: "Knee" }, { name: "Neck" }, { name: "Areas with High Microbial Counts (groin, axilla, anus, perineum, skin folds, umbilicus)" }, { name: "Hair Removal" }, { name: "Antiseptic Agents (alcohol, chlorhexidine gluconate, iodine, iodophors, parachlorometaxylenol)" }, { name: "Lateral Thoracic" }, { name: "Eye" }, { name: "Vagina" }, { name: "Stoma" }, { name: "Shoulder" }, { name: "Cesarean Section" }, { name: "Mucous Membranes" }, { name: "Skin Assessment" }, { name: "Abdominal" }, { name: "Hip" },
    ]},
    { title: "Scrub Duties", skills: [
      { name: "Sterile Field Setup and Maintenance" }, { name: "Instrument Passing Technique" }, { name: "Gowning and Gloving (Self and Team)" }, { name: "Back-Table/Mayo Stand Setup" },
    ]},
    { title: "Instrument Handling & Inventory Management", skills: [
      { name: "Single-Use Instruments" }, { name: "Inspection" }, { name: "Surgical Instrument Count and Discrepancies" }, { name: "Powered Instruments" }, { name: "Naming and Classification" }, { name: "Identifying Defective Instruments and Sending for Repair" }, { name: "Breaking Down the Backtable" },
    ]},
    { title: "Instrument Processing & Sterilization", skills: [
      { name: "Gravity Air Displacement Sterilizers" }, { name: "Enzymatic Products" }, { name: "Chemical Indicators" }, { name: "Spaulding Classification (critical, semicritical, noncritical)" }, { name: "Immediate Use Steam Sterilization (IUSS)" }, { name: "Rigid Containers" }, { name: "Hydrogen Peroxide Systems" }, { name: "Autoclave Tape" }, { name: "Tamper-Evident Seals" }, { name: "Sterility Assurance" }, { name: "Wet Packs" }, { name: "Reusable Packaging Material (woven)" }, { name: "Ozone Sterilization" }, { name: "Instrument Count Sheets" }, { name: "Minimum Effective Concentration (MEC) of the Active Ingredient" }, { name: "Sterilizer Cycle Reports" }, { name: "Vapor Exposure Levels" }, { name: "Steam Sterilization Parameters" }, { name: "Tray Filters" }, { name: "Wicking Material (towels)" }, { name: "Low- to Intermediate-Level Disinfectants" }, { name: "Steam-Flush Pressure-Pulse Sterilizers" }, { name: "Point-of-Use Cleaning" }, { name: "Disposable Packaging Material (paper, flat wrap)" }, { name: "Biological Indicators" }, { name: "High-Level Disinfectants" }, { name: "Prevacuum Sterilizers" }, { name: "Handling and Transporting Contaminated Items" }, { name: "Ethylene Oxide" }, { name: "Protective Instrument Devices (tip protectors, silicone mats, sleeves)" }, { name: "Tabletop Sterilizers" }, { name: "Loading and Unloading Sterilizers" }, { name: "Sterile Processing Zones" }, { name: "Peel Pouches" },
    ]},
    { title: "Sterile Storage", skills: [
      { name: "Open Shelving" }, { name: "Dust Covers" }, { name: "Closed Shelving" }, { name: "Transporting Sterile Items" }, { name: "Storage Carts" }, { name: "Environmental Conditions" }, { name: "Event-Related Sterility" }, { name: "Semi-Closed Shelving" },
    ]},
    { title: "Endoscopes", skills: [
      { name: "Storage Cabinets" }, { name: "Assembly (accessories, testing before use, wearing gloves)" }, { name: "Point-of-Use Cleaning" }, { name: "Packaging" }, { name: "Transportation to Processing Area" },
    ]},
    { title: "Infection Prevention & Hand Hygiene", skills: [
      { name: "Standard Precautions" }, { name: "Personal Protective Equipment (PPE)" }, { name: "Transmission-Based Precautions (droplet, airborne, contact)" }, { name: "Special Pathogens (Creutzfeldt-Jakob disease, multidrug-resistant organisms)" }, { name: "Hazardous Materials and Sharps" }, { name: "Surgical Hand Antisepsis (surgical hand scrub/rub steps, scrub sinks)" }, { name: "Hand Care (fingernail length, nail polish, dermatitis, cuts/injuries, artificial nails)" }, { name: "Jewelry" }, { name: "Hand Hygiene (handwashing, alcohol-based rubs, indications)" },
    ]},
    { title: "Intraoperative Environment Care & Maintenance", skills: [
      { name: "Temperature, Moisture, and Humidity Monitoring" }, { name: "Surgical Suite Zones (unrestricted, semi-restricted, restricted)" }, { name: "Lighting (overhead, spotlights, greenlights)" }, { name: "Environmental Contamination (construction, condensation, flooding)" }, { name: "Ventilation and Airflow (positive and negative pressure)" }, { name: "Traffic Flow" },
    ]},
    { title: "Environmental Cleaning", skills: [
      { name: "Cleaning Non-Critical Items and Surfaces" }, { name: "Cleaning Procedures (damp dusting, terminal cleaning, mopping, mattresses, frequency, protective barriers)" }, { name: "Waste (trash, recycling, linens)" }, { name: "Cleaning Products (contact times, selecting correct chemicals, PPE, cleaning materials)" },
    ]},
    { title: "Anesthesia Assist", skills: [
      { name: "Positioning for Induction" }, { name: "Airway Equipment Assist" }, { name: "Regional Block Assist" }, { name: "Malignant Hyperthermia Response" }, { name: "Induction and Intubation" }, { name: "Anesthesia Emergencies" }, { name: "Awake Intubation" }, { name: "Extubation and Emergence" },
    ]},
    { title: "Equipment & Technology", skills: [
      { name: "Electrocautery Setup" }, { name: "Robotic Surgical System Assist (da Vinci)" }, { name: "C-Arm/Fluoroscopy Positioning" }, { name: "Laser Safety" }, { name: "Operating Microscopes" }, { name: "Safety Straps" }, { name: "Electrosurgical (ESU) Generator and Accessories" }, { name: "Fire Prevention" }, { name: "Patient and Personnel Injury Prevention" }, { name: "Patient Monitoring Devices" }, { name: "Sequential Compression Devices" }, { name: "Pneumatic Tourniquets" }, { name: "Antiembolic Stockings" }, { name: "OR Table Assembly and Attachments" }, { name: "Image Guided Devices" }, { name: "Fluid Warmers and Thermoregulatory Devices" }, { name: "Energy Generating Devices" }, { name: "Suction/Irrigation Devices" },
    ]},
    { title: "Sterile Technique & Safety", skills: [
      { name: "Surgical Asepsis Principles" }, { name: "Sterile Field Break/Correction" }, { name: "Surgical Skin Prep Technique" }, { name: "Universal Protocol Compliance" }, { name: "Medical Gases (carbon dioxide, nitrogen, oxygen)" }, { name: "Latex Precautions and Sensitivity" }, { name: "Slips, Trips, and Falls" }, { name: "Ergonomics" }, { name: "Fire Safety and Prevention" }, { name: "Chemical Handling and Exposure (PPE, spill plan, storage, eyewash stations)" }, { name: "Anesthesia Waste Gases" }, { name: "Radiation Exposure" }, { name: "Biohazardous Materials" }, { name: "Needlestick and Other Personal Injuries" }, { name: "Noise and Distractions" }, { name: "Manufacturer's Instructions for Use (IFU)" }, { name: "Safety Data Sheets (SDS)" }, { name: "Fire Extinguishers" }, { name: "Emergency Eyewash Stations" }, { name: "Emergency Carts" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "Malignant Hyperthermia Cart" }, { name: "Massive Hemorrhage Protocol" }, { name: "Emergency Conversion (Lap to Open)" }, { name: "Code Response in OR" }, { name: "Local Anesthetic Systemic Toxicity (LAST)" }, { name: "Airway Emergencies (difficult intubation, emergent cricothyrotomy)" }, { name: "Anaphylaxis" }, { name: "Surgical Fire" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "or-surg", title: "OR Surgical Skills Checklist", shortTitle: "OR Surgical", icon: "✂️", group: "Surgical", categories: [
    { title: "General Surgery", skills: [
      { name: "Abdominal Perineal Resection" }, { name: "Appendectomy/Cholecystectomy" }, { name: "Breast Biopsy" }, { name: "Colon Resection/Surgery" }, { name: "Gastrectomy" }, { name: "Hernia Repair" }, { name: "Mastectomy" }, { name: "Thyroidectomy" }, { name: "Exploratory Laparotomy" },
    ]},
    { title: "Laparoscopic Procedures", skills: [
      { name: "Laparoscopic Cholecystectomy" }, { name: "Laparoscopic Hernia" }, { name: "Laparoscopic Nissen" }, { name: "Laparoscopic Appendectomy" },
    ]},
    { title: "Orthopedic Surgery", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "ORIF" }, { name: "Arthroscopy" }, { name: "Spinal Surgery" }, { name: "Rotator Cuff Repair" }, { name: "Carpal Tunnel Release" },
    ]},
    { title: "Neurosurgery", skills: [
      { name: "Craniotomy" }, { name: "Laminectomy" }, { name: "Spinal Fusion" }, { name: "VP Shunt" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "perioperative", title: "Registered Nurse – Perioperative Skills Checklist", shortTitle: "RN – Perioperative", icon: "🏗️", group: "Surgical", categories: [
    { title: "IV Therapy", skills: [
      { name: "Start peripheral IV" }, { name: "Insertion of A-lines" }, { name: "Insertion of CVP - jugular" }, { name: "Insertion of CVP - subclavian" }, { name: "Insertion of Swan-Ganz" },
    ]},
    { title: "Pre-operative Care", skills: [
      { name: "Patient assessment" }, { name: "Consent verification" }, { name: "Site marking" }, { name: "Time out procedure" }, { name: "Medication reconciliation" },
    ]},
    { title: "Intra-operative Care", skills: [
      { name: "Circulating" }, { name: "Scrubbing" }, { name: "Positioning" }, { name: "Specimen handling" }, { name: "Counts (sponge, sharps, instruments)" },
    ]},
    { title: "Post-operative Care", skills: [
      { name: "PACU recovery" }, { name: "Pain management" }, { name: "Discharge criteria assessment" }, { name: "Wound assessment" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "surgical-tech", title: "Surgical Technologist Skills Checklist", shortTitle: "Surgical Tech", icon: "🩹", group: "Surgical", categories: [
    { title: "Administrative & Personnel", skills: [
      { name: "Initiate fire risk assessment prior to and during procedure if indicated" }, { name: "Implementation of surgeon preference card(s)" }, { name: "Maintain and update surgeon preference cards" }, { name: "Perform appropriate actions during emergencies, such as obtaining emergency carts and equipment" }, { name: "Review patient chart" }, { name: "Use of medical abbreviations, terminology, and acronyms such as NPO, DNR, EGD, NKDA, D.O.B" }, { name: "Conduct time out" }, { name: "Ability to interpret documentation found in patient chart (e.g. laboratory reports/results, drug allergies, history and physical, physician orders)" }, { name: "Verify patient identity and operative site" }, { name: "Maintain documentation for equipment (e.g. laser log, Steris, steam sterilizers, etc.)" },
    ]},
    { title: "Sterilization & Equipment Processing", skills: [
      { name: "Decontaminate instruments and equipment using sterilizing devices according to manufacturer recommendations" }, { name: "Complete par levels/stocking" }, { name: "Perform inspection, testing, assembly, and packaging of instruments and equipment after sterilization" }, { name: "Ability to perform sterilization procedure for surgical instruments, according to manufacturer recommendations" }, { name: "Obtain and set up sterile supplies and instruments for use during surgery, including checking package integrity and opening packages with aseptic technique" },
    ]},
    { title: "Surgical Equipment & Instrumentation", skills: [
      { name: "Mesh graft" }, { name: "Ethylene oxide sterilizer (AMSCO)" }, { name: "Blood/fluid warmer" }, { name: "Suction unit, disposable" }, { name: "Sutures" }, { name: "Operating table/bed" }, { name: "Flash autoclave (AMSCO)" }, { name: "Disposable grounding pads" }, { name: "Vacuum curettage" }, { name: "Sterad machine" }, { name: "Argon beam coagulators" }, { name: "Pleurevac disposable chest drainage" }, { name: "Tourniquet" }, { name: "Electrosurgical unit" }, { name: "Washer sanitizer (AMSCO)" }, { name: "Suction" }, { name: "Steri-Vac aeration cabinet (3M, portable)" }, { name: "Nitrous oxide bank" }, { name: "Eye magnet" }, { name: "Scalpels" }, { name: "Tele-thermometer" }, { name: "Cell Saver" }, { name: "Ohio suction units" }, { name: "Hypo/Hyperthermia unit" }, { name: "Sponges" }, { name: "Computer navigation system" }, { name: "Microscopes" }, { name: "Pneumatic tourniquet" }, { name: "Video towers/booms" }, { name: "Oxygen" }, { name: "Bair Hugger" }, { name: "Steris unit" }, { name: "Surgical drapes" }, { name: "Nerve stimulator" }, { name: "Fiber optic luminator (list types)" }, { name: "Cryo-ophthalmic unit" }, { name: "Retractors" }, { name: "Ultrasonic cleaner (AMSCO)" }, { name: "Washer sterilizer (AMSCO)" }, { name: "Orthopedic arm board with drain" }, { name: "Emerson thoracic pump" }, { name: "Kreiselman resuscitator" }, { name: "Staples" }, { name: "Lights" }, { name: "Vac-pac positioner" },
    ]},
    { title: "Anatomy & Physiology", skills: [
      { name: "Ability to identify pathologies that affect all body systems as seen in the surgical setting (e.g. malignancies, abnormal anomalies, disease processes, fractures, etc.)" }, { name: "Identification of body systems, both anatomically and physiologically, as they relate to a surgical procedure" },
    ]},
    { title: "Preoperative Care", skills: [
      { name: "Ability to participate in patient identity verification and time out procedures" }, { name: "Apply necessary equipment to patient as indicated before, during, and after surgery (e.g. safety straps, elbow protectors, sequential compression devices, thermoregulatory devices, monitoring devices, etc.)" }, { name: "Ability to perform a surgical instrument and sponge count pre- and intra-operatively with circulator nurse, to include proper count technique standard" }, { name: "Perform surgical skin prep, including hair removal and surgical prep" }, { name: "Ability to place patients in required surgical positions (e.g. prone, lithotomy, Jack-Knife, lateral, supine)" }, { name: "Gather supplies, prepare, and maintain environment of operating room for indicated surgical procedure" }, { name: "Ability to independently perform hair removal and surgical skin prep for patient prior to surgery" }, { name: "Ability to implement special treatments, positioning, etc. for special patient populations (e.g. geriatric, pediatric, and immuno-compromised patients)" },
    ]},
    { title: "Postoperative Care", skills: [
      { name: "Complete room clean up, including disposal of contaminated waste and sharps in compliance with standard precautions, and preparing instruments for decontamination and sterilization" }, { name: "Provide comprehensive immediate post-operative care, including assessment of surgical site, removal of surgical drapes, and safe transfer to stretcher" }, { name: "Prepare and apply sterile dressings, wound drainage systems, casts, splints, braces, etc." }, { name: "Ability to assess surgical site immediately postoperatively for conditions such as excessive bleeding, hematoma, abnormal drainage, tissue ischemia, etc." },
    ]},
    { title: "Microbiology & Aseptic Technique", skills: [
      { name: "Ability to open sterile packages and maintain sterile field at operative site" }, { name: "Ability to properly dispose of contaminated articles used during surgery" }, { name: "Ability to implement standard precautions, aseptic technique, and surgical conscience" },
    ]},
    { title: "Surgical Pharmacology", skills: [
      { name: "Knowledge of fluid replacement commonly used such as blood transfusion, IV fluids, EBL, irrigation fluids, and on sterile field medications such as local anesthetics, Normal Saline, Epinephrine, Heparin, Cocaine, etc." }, { name: "Ability to appropriately label, identify and hand-off various sterile field medications" }, { name: "Knowledge of appropriately labeled medications and their use as applied in specific surgical procedures" }, { name: "Ability to recognize signs of adverse side effects of medication administration and fluid replacement including malignant hyperthermia, hypertension, tachycardia, etc." },
    ]},
    { title: "Intraoperative Care — General", skills: [
      { name: "Maintain aseptic technique throughout procedure(s)" }, { name: "Perform surgical hand scrub, gloving, and gowning" }, { name: "Assist surgeon and other surgical team members in the application of support devices such as casts, splints, braces, etc." }, { name: "Knowledge of proper tissue handling such as tissue manipulation methods, Halsted principles, etc." }, { name: "Ability to prepare and label tissue specimens obtained during surgery" }, { name: "Assemble, connect, and activate catheters, drains, and other tubing used during surgery" }, { name: "Don personal protective equipment, gown and glove sterile team members, and drape patient" }, { name: "Assemble, cut, and provide assistance with sutures, needles, and stapling devices, including stapling tissue" }, { name: "Transfer and position patient appropriately to OR table as indicated" }, { name: "Operate, test, and assemble specialty equipment intra-operatively (e.g. thermal ablation, laser technology, argon beam coagulators, etc.)" }, { name: "Initiate appropriate actions during emergencies (both patient and environmental)" }, { name: "Prepare and label specimens obtained during surgery" }, { name: "Assist physician in surgical site/wound closure, appropriate dressings, including suturing, stapling, etc." }, { name: "Ability to gather supplies and surgical instruments as indicated on surgeon preference card(s)" }, { name: "Conduct instrument and sponge count pre- and intra-operatively with circulator nurse" }, { name: "Verify, prepare, mix, label, and calculate medications and solutions used at operative site" }, { name: "Initiate irrigation and suction" }, { name: "Ability to assist surgeon in assembly, connection, and activation of hemovac drain, Jackson-Pratt drain, G-tube, J-tube, and suprapubic catheter" },
    ]},
    { title: "Ear, Nose & Throat Procedures", skills: [
      { name: "Osteotomy of maxilla/mandible" }, { name: "Ranulectomy" }, { name: "Nasal polypectomy" }, { name: "Adenoidectomy" }, { name: "Thyroidectomy" }, { name: "Maxillectomy" }, { name: "Parotidectomy" }, { name: "Ethmoidectomy" }, { name: "Myringoplasty" }, { name: "Tracheostomy" }, { name: "Pharyngeal flap procedure" }, { name: "Frontal flap sinus procedure" }, { name: "Mandibulectomy" }, { name: "Stapedectomy" }, { name: "Open reduction facial fracture" }, { name: "Maxillary advancement with hip graft" }, { name: "Submucous resection" }, { name: "Excision of salivary gland tumor" }, { name: "Glossectomy" }, { name: "Myringotomy with PE tube insertion" }, { name: "Sinus endoscopy" }, { name: "Tympanoplasty" }, { name: "Rhinoplasty" }, { name: "Cleft lip/palate repair" }, { name: "Laryngectomy" }, { name: "Sinusotomy" }, { name: "Septoplasty" }, { name: "Open reduction nasal fracture" }, { name: "Closed reduction nasal fracture" }, { name: "Tonsillectomy" }, { name: "Radical neck dissection" }, { name: "Caldwell-Luc procedure" }, { name: "Fenestration procedure" },
    ]},
    { title: "General Surgery Procedures", skills: [
      { name: "Pancreatectomy/pancreatogram" }, { name: "Hiatal herniorrhaphy (transabdominal, transthoracic)" }, { name: "Imperforate anus reconstruction" }, { name: "Colostomy/ileostomy" }, { name: "Pyloric stenosis repair" }, { name: "Lumbar sympathectomy" }, { name: "Gastrectomy" }, { name: "Thyroglossal duct cyst excision" }, { name: "Adrenalectomy" }, { name: "Cholecystectomy" }, { name: "Breast biopsy" }, { name: "Hickman/Groshong/Portacath insertion" }, { name: "Sentinel node biopsy" }, { name: "Colectomy" }, { name: "Splenectomy" }, { name: "Pilonidal cystectomy" }, { name: "Hemorrhoidectomy" }, { name: "Thyroidectomy" }, { name: "Anal fissurectomy" }, { name: "Radical mastectomy" }, { name: "Hernia repair" }, { name: "Hydrocelectomy" }, { name: "Portal caval shunt" }, { name: "Appendectomy" }, { name: "Saphenous vein ligation & stripping" }, { name: "Omphalocele repair" }, { name: "Abdominal perineal resection" }, { name: "Tenckhoff catheter placement" },
    ]},
    { title: "Gynecology Procedures", skills: [
      { name: "Cesarean section" }, { name: "Ovarian cystectomy" }, { name: "Vaginectomy/vulvectomy" }, { name: "Shirodkar procedure" }, { name: "Hysterectomy, abdominal" }, { name: "Marshall-Marchetti procedure" }, { name: "Colpotomy" }, { name: "Radium insertion" }, { name: "Suction curettage" }, { name: "Dilation and curettage (D&C)" }, { name: "Sacral spinus fixation" }, { name: "Vaginal reconstruction" }, { name: "Marsupialization, Bartholin cyst" },
    ]},
    { title: "Neurology Procedures", skills: [
      { name: "Spine fusion" }, { name: "Craniectomy for decompression fracture" }, { name: "Pedicle screw insertion" }, { name: "Ventriculostomy" }, { name: "Insertion of nerve stimulators/medication pumps" }, { name: "Posterior lumbar interbody fusion (PLIF)" }, { name: "Carotid ligation" }, { name: "Laminectomy" }, { name: "Discectomy" }, { name: "Anterior laparoscopic spine procedures" }, { name: "Hypophysectomy" }, { name: "Anterior lumbar interbody fusion (ALIF)" }, { name: "Ulnar nerve transfer" }, { name: "Cervical sympathectomy" }, { name: "A-V malformation repair" }, { name: "Myelomeningocele repair" }, { name: "Ventriculography procedure/ventriculoscopy" }, { name: "Anterior cervical fusion" }, { name: "Shunt procedure (VP, VA/LP)" }, { name: "Burr holes for subdural hematoma" },
    ]},
    { title: "Oral & Maxillofacial Procedures", skills: [
      { name: "Extraction of impacted molars" }, { name: "Temporomandibular joint (TMJ) with arthroplasty" }, { name: "Closed reduction facial fractures/wiring" }, { name: "Maxillary procedure with graft" }, { name: "Excision of odontoma" }, { name: "Fractured jaws, mandibular and zygomatic" }, { name: "Pediatric dentistry" }, { name: "TMJ exploration" }, { name: "LeFort osteotomies" }, { name: "Extraction of deciduous teeth" }, { name: "Sagittal osteotomy" },
    ]},
    { title: "Orthopedic Procedures", skills: [
      { name: "Olecranon bursa excision" }, { name: "Application of external fixator (Pelvis)" }, { name: "Schneider procedure" }, { name: "Hand surgery with implants" }, { name: "Bipolar/unipolar hips" }, { name: "Total shoulder joint replacements/revisions" }, { name: "Arthroscopy of knee" }, { name: "Jewett procedure" }, { name: "Intramedullary rod extraction" }, { name: "Capsulorrhaphy" }, { name: "Iliac crest bone graft" }, { name: "Arthroscopy of shoulder" }, { name: "Tendon transplants (hand & foot)" }, { name: "Kuntscher rod" }, { name: "Carpal tunnel release" }, { name: "Intramedullary rod insertion" }, { name: "Application of halo traction" }, { name: "Putti-Platt/Bankart procedure & rotator cuff repair" }, { name: "Arthroscopy of ankle" }, { name: "Harrington rod instrumentation and/or Dwyer procedure" }, { name: "Bunionectomy" }, { name: "Total hip joint replacements/revisions" }, { name: "Achilles tendon repair" }, { name: "Insertion of Austin Moore hip prosthesis" }, { name: "Arthroscopy of elbow" }, { name: "Reduction with compression sets" }, { name: "Calcaneal reconstruction" }, { name: "Intramedullary rods (femoral)" }, { name: "Amputation (leg, arm)" }, { name: "Total knee joint replacements/revisions" }, { name: "Open reduction of fracture with internal fixation and compression set" }, { name: "Application of external fixator (extremities)" }, { name: "Zimmer procedure" }, { name: "Arthrotomy" }, { name: "Intramedullary rods (supracondylar)" }, { name: "Patellectomy" }, { name: "Heel cord lengthening" }, { name: "Intramedullary rods" }, { name: "Intramedullary rods (tibial)" }, { name: "Acetabular/pelvic ORIF" }, { name: "Hip compression nails & lag screws" }, { name: "Laminectomy" }, { name: "Spinal fusion" }, { name: "Lottes procedure" }, { name: "Closed reduction fracture" }, { name: "Intramedullary rods (humeral)" }, { name: "Anterior cruciate ligament repair" }, { name: "Arthroplasty" },
    ]},
    { title: "Plastics & Reconstructive Procedures", skills: [
      { name: "Scar revisions" }, { name: "Mammoplasty (augmentation)" }, { name: "Mentoplasty" }, { name: "Abdominal lipectomy" }, { name: "Otoplasty" }, { name: "Blepharoplasty" }, { name: "Mammoplasty (reduction)" }, { name: "Split thickness skin grafting" }, { name: "Tissue expanders" }, { name: "Face lift" }, { name: "Mammoplasty with TRAM flap reconstructive procedure" }, { name: "Pedicle grafts" },
    ]},
    { title: "Transplant Procedures", skills: [
      { name: "Bone transplant" }, { name: "Multi-organ transplant" }, { name: "Organ harvesting" }, { name: "Pancreas transplant" }, { name: "Liver transplant" }, { name: "Bone marrow transplant" }, { name: "Lung transplant" }, { name: "Heart transplant" }, { name: "Skin transplant" }, { name: "Kidney transplant" }, { name: "Corneal transplant" },
    ]},
    { title: "Trauma Procedures", skills: [
      { name: "Gunshot/stab wound — abdomen" }, { name: "Burns" }, { name: "Motor vehicle accident injuries" }, { name: "Gunshot/stab wound — chest" }, { name: "Traumatic amputations" }, { name: "Gunshot/stab wound — head" },
    ]},
    { title: "Urology Procedures", skills: [
      { name: "Ureterolithotomy" }, { name: "Adult circumcision" }, { name: "Prostatectomy" }, { name: "Radical node dissection" }, { name: "Hypospadias repair" }, { name: "Suprapubic procedure" }, { name: "Nephrectomy" }, { name: "Scott incontinence device" }, { name: "Vasectomy" }, { name: "Waterhouse procedure" }, { name: "Pyeloplasty" }, { name: "Implants (penile, testicular)" }, { name: "Nephrolithotomy" }, { name: "TURP" }, { name: "Cystectomy" }, { name: "Vasovasostomy" }, { name: "Orchiopexy" }, { name: "Cystoscopy/ureteroscopy" }, { name: "Lithotripsy" },
    ]},
    { title: "Vascular Procedures", skills: [
      { name: "A-V access" }, { name: "Peripheral vascular bypass procedure" }, { name: "Vena cava filter/umbrella" }, { name: "Resection of carotid aneurysm with graft" }, { name: "Aortic aneurysm with graft replacement" }, { name: "Vena cava ligation" }, { name: "Endarterectomy (carotid, femoral)" }, { name: "Thrombectomy/embolectomy" },
    ]},
    { title: "Endoscopic Procedures", skills: [
      { name: "Bronchoscopy" }, { name: "Laryngoscopy & microlaryngoscopy" }, { name: "Laparoscopic cholecystectomy/cholangiogram" }, { name: "Esophagoscopy" }, { name: "Laparoscopic tubal ligation" }, { name: "Sigmoidoscopy" }, { name: "Gastroscopy" }, { name: "Colonoscopy" }, { name: "Mediastinoscopy" }, { name: "Laparoscopic Nissen fundoplication" }, { name: "Cystoscopy" }, { name: "Laparoscopic vaginal hysterectomy" }, { name: "Thoracoscopy" }, { name: "Laparoscopic salpingo-oophorectomy" }, { name: "Laparoscopic colon resection" }, { name: "Laparoscopic hernia repair" }, { name: "Pelviscopy" }, { name: "Hysteroscopy" }, { name: "Laparoscopic appendectomy" },
    ]},
    { title: "Ophthalmology Procedures", skills: [
      { name: "Repair of orbital blowout fracture" }, { name: "Dacryocystectomy" }, { name: "Pterygium repair" }, { name: "Lid and muscle procedures" }, { name: "Scleral buckle" }, { name: "Cataract extraction with IOL" }, { name: "Orbital implant" }, { name: "Vitrectomy" }, { name: "Dacryocystorhinostomy" }, { name: "Recession/resection procedure" }, { name: "Iridectomy" }, { name: "Corneal transplant" }, { name: "Phacoemulsification" },
    ]},
    { title: "Thoracic & Open Heart Procedures", skills: [
      { name: "Patent ductus arteriosus repair" }, { name: "Rib resection" }, { name: "Cervical rib excision" }, { name: "Pacemaker implantation (myocardial)" }, { name: "Transthoracic diaphragmatic herniorrhaphy" }, { name: "Pericardiectomy" }, { name: "Correction of pectus excavatum" }, { name: "Aortic valve replacement" }, { name: "Mitral commissurotomy" }, { name: "Thoraplasty" }, { name: "Pacemaker implantation (endocardial)" }, { name: "Resection of coarctation of aorta" }, { name: "Esophagectomy" }, { name: "Septal defect repairs" }, { name: "Chamberlain procedure" }, { name: "Heller procedure" }, { name: "Tracheal resection" }, { name: "Tetralogy of Fallot repair" }, { name: "Closed thoracotomy" }, { name: "Mitral valve replacement" },
    ]},
    { title: "Surgical Specialty Rotation Experience", skills: [
      { name: "GYN" }, { name: "Robotics" }, { name: "Trauma" }, { name: "Oral" }, { name: "Urology" }, { name: "Orthopedics" }, { name: "ENT" }, { name: "Neuro" }, { name: "Thoracic/open heart" }, { name: "Ophthalmology" }, { name: "General surgery" }, { name: "Endoscopy" }, { name: "Transplant" }, { name: "Plastics" }, { name: "Vascular" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "sterile-processing-tech", title: "Sterile Processing Technician Skills Checklist", shortTitle: "Sterile Processing Tech", icon: "🧼", group: "Surgical", categories: [
    { title: "Processing", skills: [
      { name: "Single instruments" }, { name: "Endoscopes" }, { name: "Repair" }, { name: "Sets/Trays" }, { name: "Care of instruments" },
    ]},
    { title: "Decontamination", skills: [
      { name: "Manual cleaning" }, { name: "Ultrasonic cleaning" }, { name: "Automated washers" }, { name: "Chemical disinfection" },
    ]},
    { title: "Sterilization", skills: [
      { name: "Steam sterilization" }, { name: "ETO sterilization" }, { name: "Sterrad/Plasma sterilization" }, { name: "Biological indicators" }, { name: "Chemical indicators" },
    ]},
    { title: "Distribution", skills: [
      { name: "Case cart system" }, { name: "Inventory management" }, { name: "Par level maintenance" }, { name: "Implant tracking" },
    ]},
  ]},

  { slug: "endoscopy", title: "Endoscopy Skills Checklist", shortTitle: "Endoscopy", icon: "🔬", group: "Surgical", categories: [
    { title: "Procedures", skills: [
      { name: "Assist with EGDs" }, { name: "Assist with endoscopic ultrasound" }, { name: "Assist with active GI bleed" }, { name: "Cautery devices" }, { name: "Assist with manometry studies" }, { name: "Assist with variceal banding" }, { name: "Assist with esophageal dilatations" }, { name: "Assist with esophageal ballooning" }, { name: "Assist with sclerotherapy" }, { name: "Assist with TEE" }, { name: "Assist with bronchoscopy" }, { name: "Assist with colonoscopy" }, { name: "Assist with polypectomy" }, { name: "Assist with ERCPs" }, { name: "Assist with PEG placements" }, { name: "Assist with liver biopsy" }, { name: "Specimen collection & labeling" }, { name: "Set up of scopes & video equipment" }, { name: "Scope cleaning" }, { name: "Radiation safety" },
    ]},
    { title: "Conscious Sedation", skills: [
      { name: "Fentanyl" }, { name: "Propofol" }, { name: "Demerol" }, { name: "Versed" }, { name: "Reversal agents" },
    ]},
    { title: "Pre/Post Procedure", skills: [
      { name: "Pre procedure phone calls" }, { name: "Patient assessment" }, { name: "Colon prep" }, { name: "IV start, med admin" }, { name: "Post procedure assessment" }, { name: "Discharge outpatients" },
    ]},
    { title: "Infection Control & Emergency Preparedness", skills: [
      { name: "Follow Required Infection Prevention Protocols (PPE)" }, { name: "Point of Use Cleaning of Flexible Endoscopes" }, { name: "High-Level Disinfection/Reprocessing of Endoscopes" }, { name: "Maintain Basic Life Support (BLS) Certification" }, { name: "Emergency Patient Care Response" },
    ]},
    { title: "Age Specific", skills: [
      { name: "Newborn/neonate (birth-30 days)" }, { name: "Infant (31 days-1 year)" }, { name: "Toddler (ages 2-3 years)" }, { name: "Preschool (ages 4-5 years)" }, { name: "School age (ages 6-12 years)" }, { name: "Adolescent (ages 13-21 years)" }, { name: "Young adult (ages 22-39 years)" }, { name: "Adult (ages 40-64 years)" }, { name: "Older adult (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "rn-endoscopy", title: "RN Endoscopy Skills Checklist", shortTitle: "RN Endoscopy", icon: "🔭", group: "Surgical", categories: [
    { title: "General & Assessment", skills: [
      { name: "Knowledge of Contraindications for Scheduled Procedure" }, { name: "Application of Monitoring Devices (e.g., Pulse Oximeter, Blood Pressure Cuff, 3 Lead EKG)" }, { name: "Review Preoperative Patient Data and Report Significant Findings" }, { name: "Verify Patient Allergies" }, { name: "Follow Ethical, Legal, and Privacy Requirements When Collecting, Maintaining, and Disseminating Patient Data" }, { name: "Verify NPO Status and Prep Completion (When Indicated)" }, { name: "Conduct Preoperative Interview and Assessment" }, { name: "Formulate Nursing Diagnosis Based on Comprehensive Assessment, Health Record Review, and Knowledge of Individual Patient" },
    ]},
    { title: "Procedures", skills: [
      { name: "Assist with EGDs" }, { name: "Assist with endoscopic ultrasound" }, { name: "Assist with active GI bleed" }, { name: "Cautery devices" }, { name: "Assist with manometry studies" }, { name: "Assist with variceal banding" }, { name: "Assist with esophageal dilatations" }, { name: "Assist with esophageal ballooning" }, { name: "Assist with sclerotherapy" }, { name: "Assist with TEE" }, { name: "Assist with bronchoscopy" }, { name: "Assist with colonoscopy" }, { name: "Assist with polypectomy" }, { name: "Assist with ERCPs" }, { name: "Assist with PEG placements" }, { name: "Assist with liver biopsy" }, { name: "Specimen collection & labeling" }, { name: "Set up of scopes & video equipment" }, { name: "Apply external abdominal pressure" }, { name: "Scope cleaning" }, { name: "Assist with mobile cases (ICU, ER)" }, { name: "Radiation safety" }, { name: "Automated Medication Dispensing System" }, { name: "Takes call for emergency cases" }, { name: "National Patient Safety Goals" }, { name: "Awareness of HCAHPS" }, { name: "Accurate patient identification" }, { name: "Effective communication" }, { name: "Interpretation & communication of lab values" }, { name: "Medication administration" }, { name: "Labeling (medications & specimens)" }, { name: "Anticoagulation therapy" }, { name: "Monitoring conscious sedation" }, { name: "Pain assessment & management" }, { name: "Infection control" }, { name: "Universal precautions" }, { name: "Isolation" }, { name: "Minimize risk for falls" }, { name: "Prevention of pressure ulcers" }, { name: "Use of rapid response teams" }, { name: "Foreign Body Retrieval" }, { name: "Bougie Dilation" }, { name: "pH Studies" }, { name: "Tattooing Procedure" }, { name: "Gastrectomy" }, { name: "Hot Snare" }, { name: "Perform Patient Positioning and Make Necessary Adjustments for Comfort and Safety" }, { name: "Initiate Latex Precautions (as Needed)" }, { name: "Participate in a Time Out Immediately Before All Operative or Invasive Procedures" }, { name: "Obtain Medications as Ordered by Physician" }, { name: "Verify Expiration Date and Package Integrity Prior to Opening Sterile Items" }, { name: "Don Personal Protective Equipment (PPE) When Indicated" },
    ]},
    { title: "Flexible Endoscope Care & Reprocessing", skills: [
      { name: "Handling of Clean Scopes" }, { name: "Endoscope Storage" }, { name: "Leak Testing" }, { name: "Manual Cleaning" }, { name: "Point-of-Use Cleaning" }, { name: "Transporting Contaminated Scopes" }, { name: "High Level Disinfection (HLD)" },
    ]},
    { title: "Administer Conscious Sedation", skills: [
      { name: "Fentanyl" }, { name: "Propofol" }, { name: "Demerol" }, { name: "Presedex" }, { name: "Versed" }, { name: "Reversal agents" }, { name: "Knowledge of American Society of Anesthesiologists (ASA) Classification" }, { name: "Obtain IV Access" }, { name: "Knowledge of Cardiovascular Complications (e.g., Hypotension, Hypertension, Cardiac Arrhythmias, Myocardial Infarction)" }, { name: "Perform Pre-Sedation Assessment Including Risk Factors" }, { name: "Benzodiazepines (e.g., Valium, Ativan)" }, { name: "Narcotics (e.g., Morphine)" },
    ]},
    { title: "Pre Procedure", skills: [
      { name: "Pre procedure phone calls" }, { name: "Electronic documentation" }, { name: "Patient assessment" }, { name: "Colon prep or re-prep" }, { name: "Pre procedure checklist/consent" }, { name: "IV start, med admin" },
    ]},
    { title: "Post Procedure", skills: [
      { name: "Assess for air movement post colonoscopy" }, { name: "Assess for pain" }, { name: "Assess for bowel sounds" }, { name: "Assess for gag reflex post EGD" }, { name: "Assess for gag reflex post bronchoscopy" }, { name: "Recover from MAC" }, { name: "Recover from conscious sedation" }, { name: "Discharge outpatients to home" }, { name: "Post procedure phone calls" }, { name: "Provide Post-Procedure Education Including Findings (Explanation and Significance)" }, { name: "Educate on Potential Post-Procedure Complications and Course of Action" }, { name: "Use of Sedation Recovery Scales" }, { name: "Assess Signs and Symptoms of Possible Perforation" }, { name: "Provide Details of Follow-Up Plan" },
    ]},
    { title: "Emergency Patient Care", skills: [
      { name: "Maintain Advanced Cardiac Life Support (ACLS) Certification" }, { name: "Prepare Equipment for Possible Patient Emergency Including Oxygen, Suction, Monitors, and Crash Cart" }, { name: "Participate as Part of the Team During Resuscitation" }, { name: "Maintain Pediatric Advanced Life Support (PALS) Certification (if Applicable)" }, { name: "Knowledge of Potential Endoscopic Adverse Events, Risk Factors, and Frequency of Occurrence" }, { name: "Maintain Basic Life Support (BLS) Certification" },
    ]},
    { title: "Age Specific", skills: [
      { name: "Newborn/neonate (birth-30 days)" }, { name: "Infant (31 days-1 year)" }, { name: "Toddler (ages 2-3 years)" }, { name: "Preschool (ages 4-5 years)" }, { name: "School age (ages 6-12 years)" }, { name: "Adolescent (ages 13-21 years)" }, { name: "Young adult (ages 22-39 years)" }, { name: "Adult (ages 40-64 years)" }, { name: "Older adult (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},

  { slug: "anesthesia-tech", title: "Anesthesia Technician Skills Checklist", shortTitle: "Anesthesia Tech", icon: "💉", group: "Surgical", categories: [
    { title: "Role & Responsibilities", skills: [
      { name: "Troubleshoot and test anesthesia machine and equipment as indicated" }, { name: "Identify reportable and nonreportable events regarding equipment, patients, and staff" }, { name: "Delegate responsibilities to other members of the anesthesia team as indicated" }, { name: "Demonstrate basic understanding of correlation between anatomy and physiology (e.g., respiratory system, cardiovascular system, nervous system)" }, { name: "Demonstrate appropriate application of patient care monitoring devices" }, { name: "Participate in continuing education and training development" }, { name: "Practice basic patient anesthesia care activities (e.g., intubation, emergence)" }, { name: "Proper identification of patient using at least two identifiers" }, { name: "Perform room turnover duties" }, { name: "Implement guidelines, policies, and safety requirements according to the facility's standards and regulatory agencies" }, { name: "Assist with maintaining quality control records for the anesthesia department" }, { name: "Identify and maintain anesthesia specialty carts" }, { name: "Work within scope of practice and limitations as an anesthesia technician" }, { name: "Proper identification, labeling, and handling of lab specimens" }, { name: "Assist with room turnover duties" }, { name: "Knowledge of medications and solutions commonly used to administer anesthesia" }, { name: "Participate in the time out and safety checks" }, { name: "Demonstrate basic understanding of laboratory values associated with the administration of anesthesia" }, { name: "Troubleshoot all anesthesia delivery systems, monitors, and ancillary devices" }, { name: "Provide for safe environment related to anesthesia equipment" }, { name: "Maintain knowledge of anesthesia equipment and attend training programs" }, { name: "Perform inventory of equipment and supplies" }, { name: "Adhere to professional standards to uphold patient rights and confidentiality" }, { name: "Prepare the anesthesia workspace with case specific supplies and equipment for the planned procedure" }, { name: "Assist with administrative duties such as evaluations and program development" }, { name: "Restock anesthesia related items" }, { name: "Use of medical terminology as it relates to anesthesia care" }, { name: "Participate in quality assurance related to providing anesthesia care" }, { name: "Locate and manage supplies in anesthesia workroom" }, { name: "Prioritize tasks related to anesthesia technician's role and function" }, { name: "Patient transportation" }, { name: "Insertion of intravenous and other invasive lines" }, { name: "Retrieving medications and solutions" }, { name: "Vascular access" }, { name: "Patient assessments" }, { name: "Management of emergencies (e.g., difficult airway, cardiac arrest, malignant hyperthermia, LAST, fire)" }, { name: "Airway management" }, { name: "Cricoid pressure" }, { name: "Transportation and storage of blood products" }, { name: "Patient positioning" }, { name: "Patient evaluations" }, { name: "Anesthesia administration" }, { name: "Temperature regulation" }, { name: "Obtain blood samples from indwelling line for laboratory tests under direct supervision" },
    ]},
    { title: "Anesthesia Methods & Clinical Settings", skills: [
      { name: "Local anesthesia" }, { name: "Rapid sequence intubation (RSI)" }, { name: "General anesthesia" }, { name: "Monitored anesthesia care (MAC)" }, { name: "Regional anesthesia (e.g., spinal block, epidural, caudal, bier block)" }, { name: "Moderate sedation (conscious sedation)" }, { name: "Interventional and/or diagnostic radiology" }, { name: "Emergency department (ED)" }, { name: "Operating room (OR)" }, { name: "Ambulatory surgery center" }, { name: "GI/Endoscopy" }, { name: "Post anesthesia care unit (PACU)" }, { name: "Cath Lab" }, { name: "Obstetrics suite (OB)" }, { name: "Dental suites" },
    ]},
    { title: "Compliance, Safety & Education", skills: [
      { name: "Maintain current knowledge of anesthesia care practices" }, { name: "Maintain certifications as indicated (e.g., BLS, ACLS)" }, { name: "Follow manufacturers' instructions for use (IFU) for all equipment and devices" }, { name: "Complete annual training requirements (e.g., CEU's)" }, { name: "Maintain records related to anesthesia procedures, equipment, and devices" }, { name: "Adhere to safety practices and procedures" }, { name: "Adhere to healthcare regulations and standards" },
    ]},
    { title: "Airway & Vascular Access Equipment", skills: [
      { name: "Airway extension tubing" }, { name: "Oral airway" }, { name: "Reinforced endotracheal tubes" }, { name: "Emergency intubation kits" }, { name: "Glide scope" }, { name: "Fiberoptic bronchoscopes" }, { name: "Right angle endotracheal tubes (nasal and oral)" }, { name: "Uncuffed endotracheal tubes" }, { name: "Emergency cricothyrotomy catheter sets" }, { name: "Laser tube endotracheal tubes" }, { name: "Face mask" }, { name: "Double lumen endobronchial tube" }, { name: "Laryngeal mask airway (LMA)" }, { name: "Oropharyngeal airways" }, { name: "Red rubber endotracheal tubes" }, { name: "Cuffed endotracheal tubes" }, { name: "Bougie" }, { name: "Nasal airway" }, { name: "Light wand" }, { name: "Flexibend endotracheal tubes" }, { name: "Percutaneous introducer" }, { name: "Central venous catheter" }, { name: "Emergency infusion device" }, { name: "Midline catheter" }, { name: "Radial artery catheters" }, { name: "Internal jugular kits" }, { name: "Vascular access kits" }, { name: "Peripherally inserted central catheter (PICC)" }, { name: "Implantable port" }, { name: "Swan-Ganz (pulmonary arterial line)" }, { name: "Peripheral IV catheter" }, { name: "Arterial line" }, { name: "IV fluid/Blood administration sets" }, { name: "Hickman catheter" },
    ]},
    { title: "Equipment Preparation & Maintenance", skills: [
      { name: "Arterial blood gas machine" }, { name: "Bag valve mask (BVM) or Ambu bag" }, { name: "Mixed venous oxygen saturation (SvO2) monitor" }, { name: "Doppler equipment" }, { name: "Peripheral nerve stimulation (train-of-four)" }, { name: "Suction apparatus and equipment" }, { name: "Intracranial pressure (ICP)" }, { name: "Anesthesia transport monitor" }, { name: "Precordial stethoscope" }, { name: "Laryngoscope" }, { name: "Rapid infusion system" }, { name: "Pulse oximeter" }, { name: "Endotracheal intubation supplies" }, { name: "Intubation scope (assemble, disassemble and clean)" }, { name: "Temperature probe" }, { name: "Intraoperative EEG equipment" }, { name: "Bispectral index monitor (BIS)" }, { name: "Auto-transfusion reservoirs" }, { name: "Transesophageal echocardiography (TEE)" }, { name: "Pressure transducers" }, { name: "Oxygen transport and emergency ventilation systems" }, { name: "Infusion pumps" }, { name: "Capnography equipment" }, { name: "Blood pressure cuff" }, { name: "Trans-tracheal jet ventilation device" }, { name: "Electrocardiogram and lead placement" }, { name: "Glucometer" }, { name: "Invasive lines" }, { name: "Blood and fluid warmer" }, { name: "Prepare breathing circuit and reservoir bag" }, { name: "Prepare positive end-expiratory pressure (PEEP) and continuous positive airway pressure (CPAP) devices" }, { name: "Perform safety checks and check alarms according to policies and procedures before the patient enters the room" }, { name: "Perform an anesthesia gas/vapor machine check" }, { name: "Verify auxiliary oxygen cylinder and manual ventilation device (ambu bag) are available and functioning" }, { name: "Turn on anesthesia delivery system and confirm that ac power is available" }, { name: "Perform breathing system pressure and leak testing" }, { name: "Identify and properly handle/dispose of volatile anesthetic agents" }, { name: "Calibrate, or verify calibration of, the oxygen monitor" }, { name: "Follow manufacturer's specifications regarding maintenance, routine servicing, and calibration of anesthesia equipment" }, { name: "Test scavenging system function" }, { name: "Prepare heater/humidifier circuit" }, { name: "Identify and properly handle/dispose of respiratory and anesthetic gas cylinders" }, { name: "Verify availability of required monitors" }, { name: "Inspect and replace carbon dioxide (CO2) absorbers as indicated" }, { name: "Prepare suction apparatus and devices" }, { name: "Difficult airway cart" }, { name: "Heart/AAA anesthesia Cart" }, { name: "Malignant hyperthermia cart" }, { name: "Pediatric anesthesia cart" }, { name: "Anesthesia machine/cart" },
    ]},
    { title: "Infection Prevention & Instrument Processing", skills: [
      { name: "Demonstrate appropriate aseptic and sterile techniques" }, { name: "Proper disposal of biohazardous and contaminated materials" }, { name: "Demonstrate proper hand hygiene" }, { name: "Use of personal protective equipment" }, { name: "Clean anesthesia machine, equipment, and commonly used work surfaces" }, { name: "Sterilization methods (e.g., steam, ethylene oxide, hydrogen peroxide, ozone, immediate use steam sterilization [IUSS])" }, { name: "Point-of-use cleaning" }, { name: "Instrument count sheets" }, { name: "Minimum effective concentration (MEC) of the active ingredient" }, { name: "Spaulding Classification (i.e., critical, semi critical, noncritical)" }, { name: "Biological indicators" }, { name: "Tray filters" }, { name: "Vapor exposure levels" }, { name: "Tamper-evident seals" }, { name: "Low- to intermediate-level disinfectants" }, { name: "Autoclave tape" }, { name: "Evidence of contamination (e.g., damage, tears, wet packs)" }, { name: "Chemical indicators" }, { name: "Peel pouches" }, { name: "Handling and transporting contaminated items" }, { name: "Packaging materials (e.g., reusable, paper, flat wrap)" }, { name: "High-level disinfectants" }, { name: "Rigid containers" }, { name: "Enzymatic products" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "perfusionist", title: "Perfusionist Skills Checklist", shortTitle: "Perfusionist", icon: "🫁", group: "Surgical", categories: [
    { title: "CPB Circuit Configuration & Cannulation", skills: [
      { name: "Coated Circuits" }, { name: "CPB Electronic Data Collection/Charting systems" }, { name: "Oxygenator with separate Arterial Line Filter and Bypass Line" }, { name: "Roller Pump (Cardioplegia)" }, { name: "Open Hardshell Venous Reservoir" }, { name: "Centrifugal Pumps" }, { name: "Oxygenator with Integrated Filtering" }, { name: "Microplegia Myocardial Protection Systems (Cardioplegia)" }, { name: "Roller Pump (Systemic)" }, { name: "Closed Venous Bag Reservoir" }, { name: "Minimally Invasive Extracorporeal Circulation (MiECC) circuits" }, { name: "Femoral artery" }, { name: "Jugular venous" }, { name: "Axillary artery" }, { name: "Innominate artery" }, { name: "Femoral venous" },
    ]},
    { title: "CPB Perfusion & Myocardial Protection Techniques", skills: [
      { name: "Deep Hypothermic Circulatory Arrest (DHCA)" }, { name: "Conventional Ultrafiltration" }, { name: "Robotic or Minimally Invasive Cardiac Surgery (MICS) Perfusion" }, { name: "Zero Balance Ultrafiltration" }, { name: "Assisted Venous Drainage" }, { name: "DHCA with Antegrade/Selective Cerebral Perfusion" }, { name: "Modified Ultrafiltration" }, { name: "Autologous Priming" }, { name: "DHCA with Retrograde Cerebral Perfusion" }, { name: "Intermittent Crystalloid Cardioplegia" }, { name: "Direct Coronary Ostial Infusion" }, { name: "Intermittent Cold Blood Cardioplegia" }, { name: "Retrograde Coronary Sinus infusion" }, { name: "Single Dose Cardioplegia (Del Nido/Custodiol)" }, { name: "Aortic Root Infusion" }, { name: "Continuous Warm Blood Cardioplegia" },
    ]},
    { title: "CPB Patient Monitoring & Special Populations", skills: [
      { name: "Pacemaker monitoring/operation" }, { name: "Bispectral Index Monitoring (BIS)" }, { name: "Pressure transducer setup and operation" }, { name: "CPB Continuous In-line blood gas measurement" }, { name: "CPB DO2 or VO2 Monitoring" }, { name: "Rotational or Thrombo-Elastography (ROTEM/TEG)" }, { name: "Cerebral Oximetry or Near-infrared Spectroscopy (NIRS)" }, { name: "Point of Care ACT testing" }, { name: "Swan-Ganz Pulmonary Artery Catheter Hemodynamic Monitoring" }, { name: "Heparin concentration measurement, Hemostasis Management System (HMS)" }, { name: "Point of Care Arterial/Venous blood gas analysis" }, { name: "Jehovah’s Witness patient" }, { name: "Cold Agglutinins patient" }, { name: "Sickle Cell Disease patient" }, { name: "Antiphospholipid Syndrome patient" }, { name: "Heparin-induced Thrombocytopenia patient" }, { name: "Pregnant patient" },
    ]},
    { title: "Special Extracorporeal Procedures", skills: [
      { name: "Veno-veno bypass for Liver Transplant" }, { name: "Lung transplant with ECMO" }, { name: "Hyperthermic Intraperitoneal Chemotherapy (HIPEC)" }, { name: "Veno-veno AngioVac thrombus removal system" }, { name: "Normothermic Regional Perfusion for organ donation" }, { name: "Machine perfusion of isolated organs" }, { name: "Left Heart Bypass for Thoraco-abdominal Aorta (TAA) procedures" }, { name: "Isolated Limb Perfusion" },
    ]},
    { title: "Mechanical Circulatory Support & ECMO", skills: [
      { name: "Total Artificial Heart" }, { name: "Percutaneous trans-catheter LVAD and/or RVAD (Impella)" }, { name: "Extracorporeal LVAD and/or RVAD" }, { name: "Intra-aortic balloon pump" }, { name: "Durable LVAD and/or RVAD implant" }, { name: "Transport outside of hospital (air/ground)" }, { name: "Daily, continuous bedside management" }, { name: "Daily, rounding only" }, { name: "Dual-lumen single cannulation" }, { name: "Priming" }, { name: "Initiation of support" }, { name: "Weaning and termination of support" },
    ]},
    { title: "Intraoperative Blood Management", skills: [
      { name: "Bone Marrow Aspirate" }, { name: "Acute Normovolemic Hemodilution (ANH)" }, { name: "Apheresis (any type)" }, { name: "Autotransfusion with processing (centrifugation and/or washing)" }, { name: "Platelet Rich Plasma" }, { name: "Blood administration sets" }, { name: "Storage and use of blood and components" }, { name: "Rapid Infusion and Warming systems" }, { name: "Leukocyte Reduction filtration" }, { name: "Antiphospholipid Syndrome management" }, { name: "Heparin Alternatives for CPB" }, { name: "Prothrombin Complex Concentrate" }, { name: "Protamine Reaction classification and treatment" }, { name: "Direct Oral Anticoagulants" }, { name: "Antithrombin III deficiency treatment" },
    ]},
    { title: "Administrative & Departmental Duties", skills: [
      { name: "Monitoring stock levels" }, { name: "Restocking received orders" }, { name: "Placing orders for low stock items" }, { name: "Monitoring expiration dates" }, { name: "Call Scheduling" }, { name: "Lead or Supervisor" }, { name: "Training (Intra/Inter-Departmental)" }, { name: "Daily Scheduling" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth to 1 Year)" }, { name: "Toddler (1-3 Years)" }, { name: "Pre-School (3-6 Years)" }, { name: "School Age (6-12 Years)" }, { name: "Adolescent (12-18 Years)" }, { name: "Young Adult (18-30 Years)" }, { name: "Mature Adult (30-60 Years)" }, { name: "Elderly (>60 Years)" },
    ]},
  ]},

  { slug: "spd-shift-manager", title: "SPD Shift Manager Skills Checklist", shortTitle: "SPD Shift Manager", icon: "🗝️", group: "Surgical", categories: [
    { title: "Department Operations", skills: [
      { name: "Staff scheduling and workflow management" }, { name: "Instrument tray inventory management" }, { name: "Case cart preparation oversight" }, { name: "Equipment loan/repair coordination" },
    ]},
    { title: "Quality & Compliance", skills: [
      { name: "Sterilization validation and documentation" }, { name: "AAMI/AORN standards compliance" }, { name: "Regulatory survey readiness" }, { name: "Incident/near-miss investigation" },
    ]},
    { title: "Staff Leadership", skills: [
      { name: "Staff training and competency validation" }, { name: "Performance management" }, { name: "Cross-department communication (OR, sterile processing)" },
    ]},
  ]},

  { slug: "surgical-first-assist", title: "Surgical First Assist Skills Checklist", shortTitle: "Surgical First Assist", icon: "🗡️", group: "Surgical", categories: [
    { title: "Preoperative Responsibilities", skills: [
      { name: "Verify Surgical Site Marking" }, { name: "Sterile Field Setup" }, { name: "Positioning and Prep Assist" },
    ]},
    { title: "Surgical Specialty Exposure", skills: [
      { name: "General Surgery" }, { name: "Orthopedic Surgery" }, { name: "Cardiovascular Surgery" }, { name: "Neurosurgery" }, { name: "Spinal Reconstruction" }, { name: "Laparoscopy" }, { name: "Robotics" },
    ]},
    { title: "Aseptic Technique & Sterile Field", skills: [
      { name: "Wear Surgical Attire (Scrubs, Shoe Covers, Hair/Beard Cover, Mask, Approved Footwear)" }, { name: "Perform Surgical Hand Rub as Indicated" }, { name: "Drape the Surgical Site Using Sterile Technique" }, { name: "Verify Equipment is Working Correctly Before Use" },
    ]},
    { title: "Patient Positioning", skills: [
      { name: "Sitting/Modified-Sitting (Fowler's/Semi-Fowler's) and Beach-Chair Position" }, { name: "Trendelenburg Position" }, { name: "Safe Positioning Practice for Pregnant Individuals" },
    ]},
    { title: "Surgical Site Prep", skills: [
      { name: "Eye Prep" }, { name: "Ear Prep" }, { name: "Lateral Thoracic Prep" },
    ]},
    { title: "Surgical Techniques & Instrumentation", skills: [
      { name: "Tissue Handling and Exposure" }, { name: "Hemostasis Technique" }, { name: "Suturing and Wound Closure" }, { name: "Retention Suture" }, { name: "Interrupted Vertical Mattress Suture" }, { name: "Retraction" }, { name: "Needle Holders" }, { name: "Sponge, Needle, and Instrument Counts" }, { name: "Irrigation and Fluid Warmers" }, { name: "Cardiac Monitoring and Pacemaker" }, { name: "Operating Microscopes" }, { name: "Converting to Open Procedure (Robotics)" }, { name: "Sharps Safety/Exposure Control Plan" },
    ]},
    { title: "Environmental & Instrument Management", skills: [
      { name: "Cleaning Products (Contact Times, Correct Chemicals, PPE)" }, { name: "Sterile Processing Zones" }, { name: "Enzymatic Products" }, { name: "Sterilizer Cycle Reports" }, { name: "Ozone Sterilization" }, { name: "Surgical Attire Requirements by Suite Zone (Unrestricted/Semi-Restricted/Restricted)" }, { name: "Safety Data Sheets (SDS)" },
    ]},
    { title: "Emergency Preparedness & Postoperative Care", skills: [
      { name: "Malignant Hyperthermia Response" }, { name: "Assist Surgeon in Managing Patient Care" }, { name: "Monitor for and Manage Complications" }, { name: "Dressing Application" }, { name: "Post-Op Hand-Off" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Neonate (0-1 month)" }, { name: "Infant (1-12 months)" }, { name: "Pediatric (1-12 years)" }, { name: "Adolescent (12-18 years)" }, { name: "Adult (18-65 years)" }, { name: "Geriatric (65+ years)" },
    ]},
  ]},
];
