export const Cinnamon = {

    routeOfAdmin: ["Oral"],
    subPop: ["Adults 18 years and older"],
    Uses: [
        "Source of/Provides antioxidants",
        "(Traditionally) used in Ayurveda for bowel complaints such as indigestion, flatulency, diarrhea and vomiting",
        "(Traditionally) used in Herbal Medicine for digestive disturbances/digestive complaints such as mild spasms/cramps of the gastrointestinal tract/gastrointestinal colic, feeling of repletion/bloating, and flatulence/carminative",
        "(Traditionally) used in Herbal Medicine for loss of appetite"
    ],
        
    prepMethod: [
        "Powder, Non-standardized Extracts (Dry extract, Tincture, Fluid extract, Decoction, Infusion)", //Antioxidants; Digestive disturbances (Herbal Medicine); Appetite loss (Herbal Medicine)
        "Powder, Non-standardized Ethanolic Extracts (Dry extract, Tincture, Fluid extract)" //Bowel complaints (Ayurveda)
    ],

    dosage: [
        {min: 0.0001, max: 4}, // Antioxidant
        {min: 1.5, max: 3.9}, // Digestive disturbances (Herbal Medicine); Appetite loss (Herbal Medicine)
        {min: 0.6, max: 3} //Bowel complaints (Ayurveda)
    ],

    duration: ["N/A"],

    direction: [
        "Take 30 minutes before meals.", //Appetite loss
        "Take after meals." //Digestive disturbances
    ], 
    
    risk: [
        "Consult a health care practitioner/health care provider/health care professional/doctor/physician prior to use if you are breastfeeding or have diabetes",
        "Consult a health care practitioner/health care provider/health care professional/doctor/physician if symptoms persist or worsen.", // All products except antioxidants
        "Do not use this product if you are pregnant"
    ]
    
}
