import { ChecklistSpec } from "../checklistData";

// Seventh batch of checklists authored from Relias self-assessment content.
export const reliasBatch7Checklists: ChecklistSpec[] = [
  { slug: "emergency-department-technician", title: "Emergency Department Technician Skills Checklist", shortTitle: "ED Technician", icon: "🚨", group: "Critical Care", categories: [
    { title: "Oxygenation & Airway", skills: [
      { name: "Bag Valve Mask (BVM)" }, { name: "Oxygen Therapy and Nasal Cannula" }, { name: "Oropharyngeal Airway (OPA)" }, { name: "Partial-Rebreather Mask" }, { name: "Head-Tilt/Chin-Lift and Jaw Thrust" }, { name: "Pulse Oximetry" },
    ]},
    { title: "Cardiovascular & Circulation", skills: [
      { name: "12-Lead ECG Application" }, { name: "3-Lead and 5-Lead Monitor Application" }, { name: "CPR" }, { name: "Direct Pressure for Bleeding Control" }, { name: "Tourniquet Application" },
    ]},
    { title: "Immobilization & Splinting", skills: [
      { name: "Spinal Immobilization and Cervical Collar" }, { name: "Log Roll" }, { name: "Splint Application (Wrist, Ankle, Sugar Tong, Long Arm, Radial Gutter)" }, { name: "Knee Immobilizer and Walking Boot" }, { name: "Finger and Thumb Spica Splinting" },
    ]},
    { title: "Venipuncture, Labs & POC Testing", skills: [
      { name: "IV Placement and Lab Draw" }, { name: "Finger Stick for Glucose" }, { name: "Clean Catch Urine and Nasal/Throat Swab" }, { name: "Point-of-Care Testing (Troponin, Lactate, Pro-BNP, ABG/VBG)" },
    ]},
    { title: "Wound Care", skills: [
      { name: "Wound Irrigation and Dressing" }, { name: "Suture/Staple Removal" }, { name: "Sterile Laceration Tray Setup" },
    ]},
    { title: "Eye, Ear & Genitourinary", skills: [
      { name: "Visual Acuity Testing" }, { name: "Eye and Ear Irrigation" }, { name: "Urinary Catheter Drainage" }, { name: "Assist With Pelvic Exam" },
    ]},
    { title: "Patient Safety & Mobility", skills: [
      { name: "Restraint Application (Soft, Vest, Leather)" }, { name: "Seizure Precautions" }, { name: "Patient Transport via Wheelchair or Stretcher" }, { name: "Room and Stretcher Decontamination" }, { name: "Assist With Lumbar Puncture" },
    ]},
    { title: "Professional Skills", skills: [
      { name: "Maintain Privacy and Dignity for Each Patient" }, { name: "Interdisciplinary Team Collaboration" }, { name: "HIPAA Confidentiality Compliance" }, { name: "Triage Support" },
    ]},
  ]},

  { slug: "flu-clinic", title: "Flu Clinic Skills Checklist", shortTitle: "Flu Clinic", icon: "💉", group: "Allied Health", categories: [
    { title: "General Vaccine Administration", skills: [
      { name: "Obtain History Regarding Anaphylactic/Allergic Reactions" }, { name: "Obtain Consent Prior to Vaccine Administration" }, { name: "Ensure Anaphylaxis Kit Present During Administration" }, { name: "Maintain Aseptic Technique" }, { name: "Document Refusal, Contraindications, and Adverse Effects" }, { name: "Adhere to OSHA and HIPAA Guidelines" }, { name: "Follow Manufacturer Storage, Handling, and Transport Protocols" }, { name: "Analyze Population-Specific Vaccine Needs" },
    ]},
    { title: "Administration Technique", skills: [
      { name: "Reconstitute Vials When Appropriate" }, { name: "Visual Inspection for Precipitate Matter" }, { name: "Site and Needle Gauge Selection" }, { name: "Check Expiration Date Prior to Administration" }, { name: "Proper Positioning of Child/Infant for Administration" }, { name: "Intranasal Vaccine Administration" },
    ]},
    { title: "Client & Caregiver Education", skills: [
      { name: "Explain Purpose, Risks, and Benefits of Vaccine" }, { name: "Provide Post-Vaccine Instructions" }, { name: "Explain Expected and Serious/Adverse Reactions" }, { name: "VIS (Vaccine Information Statement) Distribution" },
    ]},
    { title: "Clinical Settings", skills: [
      { name: "Occupational Health Settings" }, { name: "Clinic-Based Administration" }, { name: "Health Fairs and Community Outreach" }, { name: "School-Based Administration" },
    ]},
    { title: "Emergency Response & Reporting", skills: [
      { name: "Anaphylaxis Recognition and Response" }, { name: "Epinephrine Auto-Injector Administration" }, { name: "VAERS Reporting" }, { name: "Immunization Registry Documentation" },
    ]},
  ]},

  { slug: "high-risk-ob-technician", title: "High Risk OB Technician Skills Checklist", shortTitle: "High Risk OB Tech", icon: "🤰", group: "Pediatric & Maternal", categories: [
    { title: "Level II / High-Risk Obstetrics", skills: [
      { name: "Multiples Assessment" }, { name: "Transvaginal Ultrasound" }, { name: "Nuchal Fold Measurement" }, { name: "Fetal Heart Assessment" }, { name: "Neonatal Head Measurement" }, { name: "Biophysical Profile" }, { name: "Doppler of Umbilical Artery" }, { name: "Early Pregnancy Ultrasound" }, { name: "Amniotic Fluid Index Measurement" }, { name: "Fetal Growth Assessment" }, { name: "Cervical Length Measurement" },
    ]},
    { title: "Fetal Anatomy & Anomaly Screening", skills: [
      { name: "First Trimester Anatomy Screening" }, { name: "Second Trimester Anatomy Survey" }, { name: "Fetal Doppler Studies (MCA, Umbilical Artery)" }, { name: "Placental Location and Grading" }, { name: "Multiple Gestation Chorionicity Assessment" },
    ]},
    { title: "Procedural Support", skills: [
      { name: "Amniocentesis Assist" }, { name: "Chorionic Villus Sampling Assist" }, { name: "External Cephalic Version Assist" }, { name: "Non-Stress Test Monitoring" },
    ]},
    { title: "Equipment", skills: [
      { name: "HP (Hewlett Packard) Ultrasound Systems" }, { name: "GE (General Electric) Ultrasound Systems" }, { name: "Other Manufacturer Equipment" }, { name: "Fetal Monitoring Equipment" },
    ]},
    { title: "Patient Care & Documentation", skills: [
      { name: "Patient Positioning and Comfort" }, { name: "Findings Documentation and Physician Communication" }, { name: "High-Risk Patient Education and Support" },
    ]},
  ]},
];
