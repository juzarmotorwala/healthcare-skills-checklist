import { ChecklistSpec } from "../checklistData";

// First batch of checklists authored from Relias self-assessment content
// (roles with no prior match on the site). See relias-self-assessment-tracker
// for the full gap analysis this batch is drawn from.
export const reliasBatch1Checklists: ChecklistSpec[] = [
  { slug: "cardiovascular-invasive-specialist", title: "Cardiovascular Invasive Specialist Skills Checklist", shortTitle: "CV Invasive Specialist", icon: "🩻", group: "Diagnostic & Lab", categories: [
    { title: "Airway & Respiratory Management", skills: [
      { name: "Recognition and Response to Respiratory Distress" }, { name: "Oximetry and Capnography Monitoring" }, { name: "Oxygen Delivery Systems and Titration" }, { name: "Aspiration Precautions" }, { name: "Oral and Nasal Suctioning" }, { name: "Patient Positioning for Respiratory Support" },
    ]},
    { title: "Sedation & Pain Management", skills: [
      { name: "Recognition of Sedation-Related Complications" }, { name: "Sedation Scale Assessment (RASS, Pasero)" }, { name: "Pain Assessment and Analgesic Administration" }, { name: "Monitoring and Management of Moderate Sedation" },
    ]},
    { title: "Procedures / Scrub", skills: [
      { name: "Impella Insertion and Management" }, { name: "Laser Atherectomy" }, { name: "Swan-Ganz/PA Catheter Insertion and Removal" }, { name: "Arterial Line Insertion" }, { name: "Peripheral Vascular Intervention" }, { name: "Intracardiac Echocardiography (ICE)" }, { name: "Intra-Procedure Blood Pressure Measurement" }, { name: "Intubation Assistance" }, { name: "FFR / iFR Assessment" }, { name: "Open Chest Emergency Assistance" }, { name: "Right Heart Catheterization" }, { name: "PCI (Angioplasty, Stent, Atherectomy, Thrombectomy)" }, { name: "Central Line Insertion" }, { name: "Peripheral Vascular Diagnostic Imaging" }, { name: "Orbital Atherectomy" }, { name: "Temporary Pacing Wire Insertion" },
    ]},
    { title: "Post-Procedure Management", skills: [
      { name: "Patient Ambulation Protocol After Sheath Removal" }, { name: "Renal Protection Strategies" }, { name: "Site Care Education for Discharge" }, { name: "Documentation of Pulses and Access Integrity" },
    ]},
    { title: "Medication Knowledge", skills: [
      { name: "Antiarrhythmics (Diltiazem)" }, { name: "Anticoagulants/Thrombolytics (Tenecteplase, Warfarin)" }, { name: "Sedation/Anesthesia (Propofol, Fentanyl, Midazolam, Ketamine)" }, { name: "Antihypertensives/Vasodilators (Nitroprusside, Nicardipine, Nitroglycerin)" }, { name: "Allergic Reaction Management (Epinephrine, Diphenhydramine)" }, { name: "Antiemetics (Ondansetron, Promethazine)" },
    ]},
    { title: "Emergency Resuscitation", skills: [
      { name: "Airway Management" }, { name: "CPR Compressions" }, { name: "ACLS Medications" }, { name: "Defibrillation/Cardioversion/Pacing" }, { name: "Intra-Aortic Balloon Pump Insertion" }, { name: "Emergent Angioplasty/Stenting" },
    ]},
  ]},

  { slug: "cardiovascular-tech-acute", title: "Cardiovascular Technologist Skills Checklist", shortTitle: "Cardiovascular Tech", icon: "🖥️", group: "Diagnostic & Lab", categories: [
    { title: "Patient-Centered Care", skills: [
      { name: "Pre-Procedure Briefing and Consent Support" }, { name: "Post-Procedure Instructions" }, { name: "Patient Privacy and Modesty" }, { name: "Closed-Loop Communication" }, { name: "IV Insertion" }, { name: "Surgical Scrub Technique" }, { name: "Vital Signs and Oxygen Saturation" }, { name: "Bag Valve Mask Ventilation" }, { name: "CPR" }, { name: "Sterile/Aseptic Technique" },
    ]},
    { title: "Anatomy, Documentation & Systems", skills: [
      { name: "Cardiac Chambers, Valves, and Coronary Anatomy" }, { name: "Ejection Fraction and Cardiac Cycle" }, { name: "Electrical Conduction System" }, { name: "Handoff Communication (SBAR)" }, { name: "Procedure Notes and Waveform Documentation" }, { name: "Fluoroscopy Equipment and PACS Use" },
    ]},
    { title: "Technical Equipment", skills: [
      { name: "Hemodynamic Recorders and Transducers" }, { name: "Defibrillators and External Pacemakers" }, { name: "Radiopaque Contrast Injector" }, { name: "Ultrasound Probes and Fluoroscopy Systems" }, { name: "Suction Devices and Lead Shielding" }, { name: "Electrosurgical Units" },
    ]},
    { title: "Cath Lab Procedures (Assisting)", skills: [
      { name: "Coronary Angiography and PCI" }, { name: "Left and Right Heart Catheterization" }, { name: "IVUS and ICE" }, { name: "FFR / iFR / dPR / rFR Pressure Studies" }, { name: "Rotational, Orbital & Laser Atherectomy" }, { name: "Thrombectomy (Aspiration, AngioJet, Penumbra)" }, { name: "PFO / ASD / PDA Closure" }, { name: "Renal Sympathetic Denervation" }, { name: "ECMO (V-V and V-A)" },
    ]},
    { title: "Electrophysiology Procedures (Assisting)", skills: [
      { name: "Permanent and Temporary Pacemaker Insertion" }, { name: "ICD Insertion" }, { name: "Electrophysiologic Mapping and Ablation" }, { name: "Cardioversion/Defibrillation" }, { name: "Laser Lead Extraction" }, { name: "Tilt Table Testing" },
    ]},
    { title: "Vascular Procedures (Assisting)", skills: [
      { name: "Carotid and Peripheral Angiography" }, { name: "IVC Filter Placement" }, { name: "Renal Angiography" }, { name: "Venography" }, { name: "Peripheral and Carotid Interventions (POBA, Stenting)" },
    ]},
    { title: "Hemodynamic Monitoring", skills: [
      { name: "Invasive and Non-Invasive Blood Pressure Monitoring" }, { name: "Continuous Cardiac Rhythm Monitoring" }, { name: "SVR, PVR, and Cardiac Index Calculation" }, { name: "PCWP, CVP, and MAP Interpretation" }, { name: "A-Line Waveform Interpretation" },
    ]},
    { title: "Safety & Radiation Protection", skills: [
      { name: "AORN Aseptic Technique and Sterile Field Setup" }, { name: "Sharps and Biohazard Disposal" }, { name: "ALARA Principles" }, { name: "Dosimeter Badge Use" }, { name: "Lead Shielding and Protective Gear" }, { name: "Fluoroscopy Time Awareness" },
    ]},
    { title: "Pharmacology Knowledge", skills: [
      { name: "Antiarrhythmics (Amiodarone, Adenosine, Lidocaine)" }, { name: "Anticoagulants/Antiplatelets (Heparin, Bivalirudin, Clopidogrel)" }, { name: "Thrombolytics (Alteplase, Tenecteplase)" }, { name: "Sedation/Anesthesia (Propofol, Fentanyl, Midazolam)" }, { name: "Allergic Reaction Management" }, { name: "Electrolyte/Acid-Base Agents" },
    ]},
    { title: "Emergency Response", skills: [
      { name: "ACLS-Guided Arrhythmia Management" }, { name: "Pulmonary/Air Embolism Response" }, { name: "Emergency Equipment Readiness" }, { name: "Rapid Response Communication" },
    ]},
  ]},
];
