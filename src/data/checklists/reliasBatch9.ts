import { ChecklistSpec } from "../checklistData";

// Ninth batch of checklists authored from Relias self-assessment content.
export const reliasBatch9Checklists: ChecklistSpec[] = [
  { slug: "lpn-ambulatory-care", title: "LPN/LVN – Ambulatory Care Skills Checklist", shortTitle: "LPN/LVN – Ambulatory Care", icon: "🩺", group: "Nursing", categories: [
    { title: "General Assessment", skills: [
      { name: "Neurological Assessment" }, { name: "Cardiovascular Assessment" }, { name: "Respiratory Assessment" }, { name: "Gastrointestinal Assessment" }, { name: "Integumentary Assessment" }, { name: "Endocrine Assessment" }, { name: "Reproductive Assessment" },
    ]},
    { title: "Medication Administration", skills: [
      { name: "PO/Sublingual Administration" }, { name: "IM/Z-Track Injections" }, { name: "Intradermal Injections" }, { name: "Immunizations/Vaccinations" }, { name: "Ophthalmic and Nasal Drops/Sprays" }, { name: "Topical Ointments/Sprays" },
    ]},
    { title: "Body Mechanics & Transfers", skills: [
      { name: "Assist with Ambulation" }, { name: "Turning and Repositioning" }, { name: "Transfer To/From Stretcher, Exam Table, and Wheelchair" }, { name: "Assist and Transfer To/From Toilet" }, { name: "Lift Patient With/Without Assistance" },
    ]},
    { title: "Equipment", skills: [
      { name: "AED and Crash Cart/Defibrillator" }, { name: "IV Pump/Infusion Device" }, { name: "Glucose Monitor (Point-of-Care)" }, { name: "Blood Pressure Cuff (Manual, Electronic)" }, { name: "Pulse Oximetry and Doppler" }, { name: "Bladder Scanner and Hoyer Lift" }, { name: "Wound Vac and Surgical Drain Devices" }, { name: "Feeding Pump (Enteral) and Incentive Spirometer" }, { name: "TENS Unit, TED Hose, and Heating Pads" }, { name: "Chest Tube Drainage System" },
    ]},
    { title: "Nursing Process & Documentation", skills: [
      { name: "Check-In/Check-Out and Triage" }, { name: "Documentation of Assessment Findings and Care" }, { name: "Review Orders/Chart Checks and Initiate Order Sets" }, { name: "Create Nursing Care Plan" }, { name: "Patient Identification/Identifiers" }, { name: "Patient Education on Medications and Follow-Up" }, { name: "Prescription Refills" },
    ]},
    { title: "Communication", skills: [
      { name: "SBAR and Hand-Off Communication" }, { name: "HIPAA/Protected Health Information" }, { name: "Electronic Medical Record (EMR) and eMAR" }, { name: "Notify Provider of Critical Lab Values" }, { name: "Team Huddles" },
    ]},
    { title: "Specimen Collection", skills: [
      { name: "Blood Draw" }, { name: "Urine – Clean Catch, Straight Cath, and Dipstick" }, { name: "Sputum Collection" }, { name: "Labeling of Specimens and Chain of Custody" },
    ]},
    { title: "Emergency & Safety", skills: [
      { name: "Code Blue/Cardiopulmonary Arrest Response" }, { name: "Rapid Response and Indications for 911" }, { name: "Communicable Disease Precautions" }, { name: "De-Escalation Techniques for Disruptive Patients" }, { name: "Fire and Tornado Response" }, { name: "Safe Handling of Hazardous Medications" },
    ]},
    { title: "Professional Issues", skills: [
      { name: "Scope of Practice" }, { name: "Advance Directives and DNR Orders" }, { name: "Culturally Diverse Care Considerations" }, { name: "Universal Time-Out Procedure" }, { name: "Evidence-Based Practice Principles" },
    ]},
  ]},

  { slug: "lpn-emergency-department", title: "LPN/LVN – Emergency Department Skills Checklist", shortTitle: "LPN/LVN – Emergency Department", icon: "🚑", group: "Critical Care", categories: [
    { title: "Oxygenation & Airway", skills: [
      { name: "Oxygen Therapy (Nasal Cannula, Simple/Non-Rebreather Masks)" }, { name: "Monitor Patient on Ventilator" }, { name: "Airway Tools (OPA, NPA, BVM)" }, { name: "Suction Equipment Setup and Use" }, { name: "Tracheostomy Care and Collar Management" }, { name: "Head-Tilt/Chin-Lift and Jaw Thrust" },
    ]},
    { title: "Medication Administration", skills: [
      { name: "PO/Oral and IV Routes" }, { name: "IM, SQ, and Intradermal Routes" }, { name: "Pediatric Dosage Calculation" }, { name: "Emergency Medications (e.g., Naloxone)" }, { name: "Narcotic/Controlled Substance Administration" }, { name: "Transdermal Patches and Rectal/Vaginal Suppositories" }, { name: "Ophthalmic and Nasal Drops" },
    ]},
    { title: "Assessment & Data Collection", skills: [
      { name: "Cardiopulmonary Arrest Management" }, { name: "Neurological Assessment" }, { name: "Cardiovascular Assessment" }, { name: "Gastrointestinal Assessment" }, { name: "Genitourinary Assessment" }, { name: "Musculoskeletal Assessment" },
    ]},
    { title: "Intravenous Therapy", skills: [
      { name: "Start IV and Maintain IV Site" }, { name: "IV Push Medications" }, { name: "IV Pump Setup and Use" }, { name: "Blood Product Administration (Packed RBC, Platelets)" }, { name: "Piggyback and Gravity Flow Administration" },
    ]},
    { title: "Splinting & Spinal Immobilization", skills: [
      { name: "Splint Application (Finger, Wrist, Ankle, Knee, Radial Gutter)" }, { name: "Sling and Swathe" }, { name: "Cervical Collar Application" }, { name: "Log Roll for Trauma Care" },
    ]},
    { title: "Emergency Procedures", skills: [
      { name: "3-Lead/5-Lead Cardiac Monitor Application" }, { name: "12-Lead ECG" }, { name: "CPR and AED Use" }, { name: "Direct Pressure for Bleeding Control" }, { name: "Assist in Advanced Life Support" }, { name: "Crash Cart Familiarity" },
    ]},
    { title: "Wound Care & GU/Eye/Ear Procedures", skills: [
      { name: "Wound Dressing Changes and Irrigation" }, { name: "Suture/Staple Removal and Wound Culture" }, { name: "Urinary Catheter Placement and Drainage Management" }, { name: "Bladder Scanner" }, { name: "Eye and Ear Irrigation, Visual Acuity" },
    ]},
    { title: "Labs & Point-of-Care Testing", skills: [
      { name: "Blood Draw with Straight Stick" }, { name: "Specimen Collection (Urine, Stool, Sputum)" }, { name: "Point-of-Care Testing (Glucose, ABG/VBG, Lactate, Pro-BNP)" },
    ]},
    { title: "Infection Control & Professional Practice", skills: [
      { name: "Universal Precautions and Isolation Protocols" }, { name: "Hand Hygiene and Sterile Procedure Assist" }, { name: "HIPAA Confidentiality Compliance" }, { name: "Restraint Application and Monitoring" }, { name: "De-Escalation Techniques" }, { name: "EHR Documentation and Barcode Scanning" }, { name: "DNR Orders and Universal Time-Out Procedures" },
    ]},
  ]},
];
