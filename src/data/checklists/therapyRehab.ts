import { ChecklistSpec } from "../checklistData";

export const therapyRehabChecklists: ChecklistSpec[] = [
  { slug: "pt-self", title: "Physical Therapy Self-Assessment Skills Checklist", shortTitle: "PT Self-Assessment", icon: "🏃", group: "Therapy & Rehab", categories: [
    { title: "Work Settings", skills: [
      { name: "Adult/adult ICU" }, { name: "Children's hospital" }, { name: "General acute care" }, { name: "Home health care" }, { name: "Outpatient neuro" }, { name: "Outpatient ortho" }, { name: "Inpatient rehab" }, { name: "Skilled nursing facility" }, { name: "Pediatric" }, { name: "School system" },
    ]},
    { title: "Orthopedic", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "Spinal Surgery" }, { name: "Fracture Management" }, { name: "Rotator Cuff Repair" }, { name: "ACL Reconstruction" }, { name: "Carpal Tunnel Release" }, { name: "Joint Mobilization" }, { name: "Manual Therapy" },
    ]},
    { title: "Neurological", skills: [
      { name: "CVA/Stroke" }, { name: "Traumatic Brain Injury" }, { name: "Spinal Cord Injury" }, { name: "Multiple Sclerosis" }, { name: "Parkinson's Disease" }, { name: "Guillain-Barré" },
    ]},
    { title: "Cardiopulmonary", skills: [
      { name: "Cardiac Rehabilitation" }, { name: "Pulmonary Rehabilitation" }, { name: "Post-surgical Mobility" }, { name: "Airway Clearance Techniques" },
    ]},
    { title: "Modalities", skills: [
      { name: "Ultrasound" }, { name: "Electrical Stimulation" }, { name: "TENS" }, { name: "Iontophoresis" }, { name: "Hot/Cold Packs" }, { name: "Traction" }, { name: "Whirlpool" },
    ]},
    { title: "Functional Activities", skills: [
      { name: "Gait Training" }, { name: "Transfer Training" }, { name: "Wheelchair Training" }, { name: "Stair Training" }, { name: "Balance Training" }, { name: "Fall Prevention" },
    ]},
  ]},

  { slug: "pt-pta", title: "PT/PTA Skills Checklist", shortTitle: "PT/PTA", icon: "🦿", group: "Therapy & Rehab", categories: [
    { title: "Adult Orthopedic", skills: [
      { name: "Neck Injuries/Surgeries" }, { name: "Back Injuries/Surgeries" }, { name: "Hip Fractures/Injuries" }, { name: "Total Hip Replacement" }, { name: "Knee Injuries" }, { name: "Total Knee Replacement" }, { name: "Shoulder Injuries/Surgeries" }, { name: "Ankle/Foot Injuries" }, { name: "Hand/Wrist Injuries" },
    ]},
    { title: "Adult Neurological", skills: [
      { name: "CVA/Stroke" }, { name: "Traumatic Brain Injury" }, { name: "Spinal Cord Injury" }, { name: "Multiple Sclerosis" }, { name: "Parkinson's Disease" }, { name: "Peripheral Neuropathy" },
    ]},
    { title: "Pediatric", skills: [
      { name: "Developmental Delays" }, { name: "Cerebral Palsy" }, { name: "Down Syndrome" }, { name: "Torticollis" }, { name: "Scoliosis" },
    ]},
    { title: "Geriatric", skills: [
      { name: "Fall Prevention" }, { name: "Balance Training" }, { name: "Osteoporosis" }, { name: "Arthritis Management" }, { name: "Dementia/Cognitive Impairment" },
    ]},
    { title: "Cardiopulmonary", skills: [
      { name: "Cardiac Rehab" }, { name: "Pulmonary Rehab" }, { name: "Post-surgical Mobility" },
    ]},
  ]},

  { slug: "ot", title: "Occupational Therapy Skills Checklist", shortTitle: "Occupational Therapy", icon: "🧩", group: "Therapy & Rehab", categories: [
    { title: "Work Settings", skills: [
      { name: "General acute care" }, { name: "Adult/adult ICU" }, { name: "Pediatrics/PICU" }, { name: "Children's hospital" }, { name: "Hand therapy" }, { name: "Home health care" }, { name: "Inpatient rehab" }, { name: "Outpatient" }, { name: "Skilled nursing facility" }, { name: "School system" }, { name: "Mental health" },
    ]},
    { title: "Adult Rehabilitation", skills: [
      { name: "CVA/Stroke" }, { name: "Traumatic Brain Injury" }, { name: "Spinal Cord Injury" }, { name: "Hip Fracture" }, { name: "Total Joint Replacement" }, { name: "Burns" }, { name: "Cardiac Rehab" },
    ]},
    { title: "Hand Therapy", skills: [
      { name: "Carpal Tunnel" }, { name: "Tendon Repair" }, { name: "Fracture Management" }, { name: "Splinting" }, { name: "Wound Care" }, { name: "Edema Management" },
    ]},
    { title: "Pediatric", skills: [
      { name: "Developmental Delays" }, { name: "Cerebral Palsy" }, { name: "Sensory Processing" }, { name: "Autism Spectrum" }, { name: "Fine Motor Skills" }, { name: "Feeding/Oral Motor" },
    ]},
    { title: "ADL Training", skills: [
      { name: "Dressing" }, { name: "Bathing" }, { name: "Grooming" }, { name: "Feeding" }, { name: "Toileting" }, { name: "Adaptive Equipment" }, { name: "Home Modification" },
    ]},
    { title: "Cognitive Rehabilitation", skills: [
      { name: "Memory Training" }, { name: "Attention/Concentration" }, { name: "Problem Solving" }, { name: "Safety Awareness" }, { name: "Community Reintegration" },
    ]},
  ]},

  { slug: "slp", title: "Speech-Language Pathology Skills Checklist", shortTitle: "SLP", icon: "🗣️", group: "Therapy & Rehab", categories: [
    { title: "Work Settings", skills: [
      { name: "Acute care" }, { name: "Children's hospital" }, { name: "Daily treatment center" }, { name: "Home health care" }, { name: "Inpatient acute rehab" }, { name: "Neonatal intensive care" }, { name: "Outpatient" }, { name: "School system" }, { name: "Skilled nursing facility" },
    ]},
    { title: "Adult Disorders", skills: [
      { name: "Aphasia" }, { name: "Dysarthria" }, { name: "Apraxia" }, { name: "Cognitive-Communication" }, { name: "Voice Disorders" }, { name: "Dysphagia" }, { name: "Fluency/Stuttering" }, { name: "Laryngectomy" }, { name: "Tracheostomy" },
    ]},
    { title: "Pediatric Disorders", skills: [
      { name: "Articulation" }, { name: "Language Delay" }, { name: "Autism Spectrum" }, { name: "Cleft Palate" }, { name: "Hearing Impairment" }, { name: "Feeding/Oral Motor" }, { name: "Fluency" },
    ]},
    { title: "Dysphagia Management", skills: [
      { name: "Bedside Swallow Evaluation" }, { name: "Modified Barium Swallow (MBS)" }, { name: "FEES" }, { name: "Diet Modification" }, { name: "Compensatory Strategies" }, { name: "Oral Motor Exercises" },
    ]},
    { title: "Assessment Tools", skills: [
      { name: "Standardized Testing" }, { name: "Clinical Observation" }, { name: "Instrumental Assessment" }, { name: "Outcome Measures" },
    ]},
  ]},

  { slug: "rrt", title: "Registered Respiratory Therapist Skills Checklist", shortTitle: "RRT", icon: "🫁", group: "Therapy & Rehab", categories: [
    { title: "General Skills", skills: [
      { name: "Care of Patient in Restraints" }, { name: "Electronic Documentation" }, { name: "Isolation Precautions" }, { name: "Medicare Documentation" }, { name: "Patient/Family Education" },
    ]},
    { title: "Airway Management", skills: [
      { name: "Intubation" }, { name: "Extubation" }, { name: "Tracheostomy Care" }, { name: "Suctioning (ET/Trach)" }, { name: "Airway Clearance Techniques" }, { name: "Bag-Valve Mask Ventilation" },
    ]},
    { title: "Ventilator Management", skills: [
      { name: "Conventional Ventilation" }, { name: "High Frequency Ventilation" }, { name: "Non-Invasive Ventilation (CPAP/BiPAP)" }, { name: "Ventilator Weaning" }, { name: "ABG Interpretation" }, { name: "Ventilator Graphics" },
    ]},
    { title: "Oxygen Therapy", skills: [
      { name: "Nasal Cannula" }, { name: "Simple Mask" }, { name: "Non-Rebreather" }, { name: "High Flow Nasal Cannula" }, { name: "Venturi Mask" }, { name: "Blow-by" },
    ]},
    { title: "Aerosolized Medications", skills: [
      { name: "SVN (Small Volume Nebulizer)" }, { name: "MDI (Metered Dose Inhaler)" }, { name: "DPI (Dry Powder Inhaler)" }, { name: "Continuous Nebulization" },
    ]},
    { title: "Diagnostics", skills: [
      { name: "ABG Sampling" }, { name: "Pulse Oximetry" }, { name: "Capnography" }, { name: "Pulmonary Function Testing" }, { name: "Chest X-ray Interpretation" },
    ]},
    { title: "Specialty Areas", skills: [
      { name: "Neonatal/Pediatric" }, { name: "Adult ICU" }, { name: "Emergency Department" }, { name: "Transport" }, { name: "Home Care" }, { name: "Pulmonary Rehab" },
    ]},
  ]},

  { slug: "recreation-therapist", title: "Recreation Therapist / Activity Therapist Skills Checklist", shortTitle: "Recreation Therapist", icon: "🎨", group: "Therapy & Rehab", categories: [
    { title: "Assessment", skills: [
      { name: "Leisure interest assessment" }, { name: "Functional/cognitive assessment for activity planning" }, { name: "Treatment goal development" },
    ]},
    { title: "Therapeutic Interventions", skills: [
      { name: "Group activity facilitation" }, { name: "Adaptive sports and recreation" }, { name: "Arts and crafts programming" }, { name: "Music/sensory-based interventions" }, { name: "Community reintegration outings" },
    ]},
    { title: "Population-Specific Programming", skills: [
      { name: "Geriatric/dementia programming" }, { name: "Pediatric programming" }, { name: "Behavioral health programming" }, { name: "Physical disability adaptation" },
    ]},
    { title: "Documentation", skills: [
      { name: "Treatment plan documentation" }, { name: "Progress note charting" }, { name: "Interdisciplinary team collaboration" },
    ]},
  ]},

  { slug: "exercise-physiologist", title: "Exercise Physiologist Skills Checklist", shortTitle: "Exercise Physiologist", icon: "🏃‍♂️", group: "Therapy & Rehab", categories: [
    { title: "Testing & Evaluation", skills: [
      { name: "Cardiopulmonary exercise testing" }, { name: "Stress test administration (exercise/pharmacological)" }, { name: "Body composition analysis" }, { name: "Functional capacity evaluation" },
    ]},
    { title: "Exercise Prescription", skills: [
      { name: "Individualized exercise program design" }, { name: "Cardiac rehabilitation exercise sessions" }, { name: "Pulmonary rehabilitation exercise sessions" }, { name: "Chronic disease exercise management (diabetes, obesity)" },
    ]},
    { title: "Patient Monitoring", skills: [
      { name: "Telemetry/EKG monitoring during exercise" }, { name: "Vital sign monitoring" }, { name: "Recognition of exercise intolerance/emergency response" },
    ]},
    { title: "Education", skills: [
      { name: "Patient lifestyle/behavior change counseling" }, { name: "Risk factor modification education" },
    ]},
  ]},

  { slug: "acute-rehab", title: "Acute Rehab Skills Checklist", shortTitle: "Acute Rehab", icon: "🏋️", group: "Therapy & Rehab", categories: [
    { title: "Work Settings", skills: [
      { name: "General Acute Care" }, { name: "Home Health" }, { name: "Nursing Home" }, { name: "Outpatient Clinic" }, { name: "Pediatric Rehab" }, { name: "Acute Rehab Hospital" },
    ]},
    { title: "Neurological Rehabilitation", skills: [
      { name: "CVA/Stroke" }, { name: "Traumatic Brain Injury" }, { name: "Spinal Cord Injury" }, { name: "Multiple Sclerosis" }, { name: "Parkinson's Disease" }, { name: "Guillain-Barré" },
    ]},
    { title: "Orthopedic Rehabilitation", skills: [
      { name: "Total Hip Replacement" }, { name: "Total Knee Replacement" }, { name: "Amputation" }, { name: "Fracture Management" }, { name: "Spinal Surgery" },
    ]},
    { title: "Cardiac/Pulmonary Rehabilitation", skills: [
      { name: "Post-MI" }, { name: "Post-CABG" }, { name: "COPD" }, { name: "Heart Failure" },
    ]},
    { title: "Functional Assessment", skills: [
      { name: "FIM Scoring" }, { name: "ADL Assessment" }, { name: "Mobility Assessment" }, { name: "Cognitive Assessment" }, { name: "Discharge Planning" },
    ]},
    { title: "Age Specific Competencies", skills: [
      { name: "Infant (Birth - 1 year)" }, { name: "Preschooler (ages 2-5 years)" }, { name: "Childhood (ages 6-12 years)" }, { name: "Adolescents (ages 13-21 years)" }, { name: "Young Adults (ages 22-39 years)" }, { name: "Adults (ages 40-64 years)" }, { name: "Older Adults (ages 65-79 years)" }, { name: "Elderly (ages 80+ years)" },
    ]},
  ]},
];
