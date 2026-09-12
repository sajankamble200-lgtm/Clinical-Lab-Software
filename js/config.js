// Configuration and Test Database
const LAB_CONFIG = {
    name: "Acharya Deshabhushan Ayurvedic Medical College & Hospital",
    branch: "BDK-SMD",
    society: "LATTHE EDUCATION SOCIETY'S",
    owner: "K. SAJAN",
    contact: "7996726497"
};

const TESTS = {
    "CBC": { price: 250, parameters: [["Hemoglobin","g/dL","12-16"], ["RBC Count","million/µL","4.0-5.5"], ["Total WBC Count","/µL","4000-11000"], ["Neutrophils","%","40-75"], ["Lymphocytes","%","20-45"], ["Platelet Count","/µL","150000-450000"], ["MCV","fL","80-100"], ["ESR","mm/hr","0-20"]] },
    "LFT": { price: 500, parameters: [["Total Bilirubin","mg/dL","0.2-1.2"], ["Direct Bilirubin","mg/dL","0.0-0.3"], ["AST / SGOT","U/L","5-40"], ["ALT / SGPT","U/L","0-45"], ["Alkaline Phosphatase","U/L","44-147"], ["Total Protein","g/dL","6.0-8.3"], ["Albumin","g/dL","3.5-5.0"]] },
    "RFT": { price: 500, parameters: [["Blood Urea","mg/dL","15-45"], ["Serum Creatinine","mg/dL","0.4-1.4"]] },
    "Lipid Profile": { price: 500, parameters: [["Total Cholesterol","mg/dL","<200"], ["Triglycerides","mg/dL","<150"], ["HDL Cholesterol","mg/dL",">40"], ["LDL Cholesterol","mg/dL","<100"]] },
    "Blood Sugar Profile": { price: 200, parameters: [["Fasting Blood Sugar","mg/dL","70-110"], ["Post Prandial Blood Sugar","mg/dL","80-120"], ["Random Blood Sugar","mg/dL","70-140"]] },
    "Fasting Blood Sugar": { price: 80, parameters: [["Fasting Blood Sugar","mg/dL","70-110"]] },
    "Post Prandial Blood Sugar": { price: 80, parameters: [["Post Prandial Blood Sugar","mg/dL","80-120"]] },
    "Random Blood Sugar": { price: 80, parameters: [["Random Blood Sugar","mg/dL","70-140"]] },
    "Urine Routine": { price: 100, parameters: [["Colour","","Pale Yellow"], ["Appearance","","Clear"], ["Specific Gravity","","1.005-1.030"], ["pH","","4.5-8.0"], ["Protein","","Negative"], ["Glucose","","Negative"], ["Ketone","","Negative"], ["Bilirubin","","Negative"], ["RBC","/HPF","0-2"], ["WBC / Pus Cells","/HPF","0-5"], ["Bacteria","","Absent"]] },
    "Stool Examination": { price: 150, parameters: [["Colour","","Brown"], ["Consistency","","Formed"], ["Occult Blood","","Negative"], ["Parasites","","Absent"]] },
    "Semen Analysis": { price: 300, parameters: [["Volume","mL","≥1.4"], ["Colour","","Greyish White"], ["Liquefaction","minutes","≤60"], ["Sperm Concentration","million/mL","≥16"], ["Progressive Motility","%","≥30"]] },
    "Electrolytes": { price: 500, parameters: [["Sodium","mmol/L","135-145"], ["Potassium","mmol/L","3.5-5.1"], ["Chloride","mmol/L","98-107"]] },
    "Thyroid Profile": { price: 500, parameters: [["TSH","µIU/mL","0.4-4.0"], ["Free T3","pg/mL","2.0-4.4"], ["Free T4","ng/dL","0.8-1.8"]] },
    "CRP": { price: 250, parameters: [["C-Reactive Protein","mg/L","<6"]], qualitative: true },
    "RA Factor": { price: 250, parameters: [["Rheumatoid Factor","IU/mL","<20"]], qualitative: true },
    "Widal Test": { price: 250, parameters: [["Salmonella Typhi O Titre","Titre","1:80"], ["Salmonella Typhi H Titre","Titre","1:80"]], qualitative: true },
    "Blood Group": { price: 100, parameters: [["ABO Blood Group","","A / B / AB / O"], ["Rh Factor","","Positive / Negative"]] },
    "HIV": { price: 200, parameters: [["HIV 1/2","","Positive / Negative"]], qualitative: true },
    "HBsAg": { price: 200, parameters: [["HBsAg","","Positive / Negative"]], qualitative: true },
    "VDRL": { price: 200, parameters: [["VDRL","","Positive / Negative"]], qualitative: true },
    "Pregnancy Test": { price: 100, parameters: [["Pregnancy Test","","Negative"]], qualitative: true },
    "Calcium": { price: 150, parameters: [["Serum Calcium","mg/dL","8.5-10.5"]] },
    "Uric Acid": { price: 150, parameters: [["Serum Uric Acid","mg/dL","3.5-7.2"]] },
    "Vitamin D (25-OH)": { price: 600, parameters: [["25-OH Vitamin D","ng/mL","30-100"]] }
};