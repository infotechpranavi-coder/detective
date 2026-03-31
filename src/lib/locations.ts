export type ExtraSection = {
  title: string;
  items?: string[];
  content?: string;
  list?: { title: string; points: string[] }[];
};

export type ServiceLocation = {
  name: string;
  slug: string;
  intro: string;
  description: string;
  highlights: string[];
  extraSections?: ExtraSection[];
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    name: "Mumbai",
    slug: "mumbai",
    intro: "HS Detectives Mumbai a reliable detective agency in Mumbai.",
    description: "We are a professional team of experienced private investigators offering confidential and result-oriented investigation services across Mumbai and nearby areas. Our agency is known for maintaining complete discretion while delivering accurate and timely results. Whether you need personal investigation or corporate inquiry, our experts ensure every case is handled with professionalism and privacy.",
    highlights: [
      "100% Confidential Investigations",
      "Experienced Private Detectives",
      "Advanced Surveillance Techniques",
      "Fast & Accurate Reports",
      "Affordable Pricing",
      "Available Across Mumbai & Navi Mumbai",
    ],
  },
  {
    name: "Thane",
    slug: "thane",
    intro: "Looking for experienced and reliable detective agency in Thane.",
    description: "Our professional investigation team offers discreet and result-oriented services for personal, corporate, and legal matters. With years of experience and advanced investigation techniques, we help uncover the truth while maintaining complete confidentiality. Whether it's a sensitive personal issue or a complex corporate case, our detectives ensure accurate information and timely reporting.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Thane",
    ],
  },
  {
    name: "Navi Mumbai",
    slug: "navi-mumbai",
    intro: "Leading Private Detective Agency for Personal & Corporate Investigations.",
    description: "We are a professionally managed private detective agency in Navi Mumbai offering structured and ethical investigation services. Our team includes experienced investigators, analysts, and surveillance experts dedicated to delivering factual and legally compliant reports. We combine field intelligence with modern technology to ensure accuracy in every case.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Navi Mumbai",
    ],
  },
  {
    name: "Palghar",
    slug: "palghar",
    intro: "Elite Private Detective Agency in Palghar – Confidential Intelligence Services.",
    description: "We offer premium investigation solutions for clients who value discretion, accuracy, and professionalism. Our private detective agency in Palghar is trusted by individuals and businesses for handling high-profile and sensitive cases. Your privacy is not just protected—it is prioritized.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Palghar",
    ],
  },
  {
    name: "Mira Bhayandar",
    slug: "mira-bhayandar",
    intro: "At HS Detective agency Mumbai private detective agency in Mira bhyandar, we specialize in uncovering the details others miss.",
    description: "With patience, expertise, and advanced techniques, we turn uncertainty into clarity. Because the truth matters. No false promises. Just real results.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Mira Bhayandar",
    ],
  },
  {
    name: "Andheri",
    slug: "andheri",
    intro: "Our HS Detective agency Mumbai, detective investigation in Andheri services are designed to uncover the truth with precision and discretion.",
    description: "Whether it's a personal matter, corporate concern, or legal case, we provide reliable and evidence-based investigation solutions. With trained investigators and modern surveillance techniques, we ensure every detail is carefully analysed to deliver accurate results.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Andheri",
    ],
  },
  {
    name: "Bandra",
    slug: "bandra",
    intro: "We provide structured and ethical detective investigation services in Bandra tailored to meet individual and corporate requirements.",
    description: "Our approach combines field expertise with analytical techniques to ensure accurate and reliable outcomes. Every investigation is conducted with strict confidentiality and adherence to legal standards.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Bandra",
    ],
  },
  {
    name: "BKC",
    slug: "bkc",
    intro: "HS Detective agency Mumbai Provide Detective investigation in BKC.",
    description: "Detective investigation in BKC is the professional process of gathering evidence, verifying facts, and uncovering hidden truths. Our experts use surveillance, interviews, and research to deliver accurate, actionable insights.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in BKC",
    ],
    extraSections: [
      {
        title: "Why It Matters",
        items: [
          "Protects personal and business interests",
          "Provides proof for legal matters",
          "Reduces uncertainty and risk",
        ],
      },
    ],
  },
  {
    name: "Borivali",
    slug: "borivali",
    intro: "We specialize in high-profile and sensitive investigations in Borivali.",
    description: "Our team of expert detectives is trusted by individuals and businesses to provide precise, discreet, and legally compliant investigation services in Borivali. Experience the highest level of confidentiality – Contact Us.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Borivali",
    ],
  },
  {
    name: "Churchgate",
    slug: "churchgate",
    intro: "Life is full of unanswered questions. Suspicion, doubt, or uncertainty can be stressful.",
    description: "That's where our private detective agency in Churchgate steps in. With professional investigators and discreet operations, we uncover facts and provide clarity—so you can make informed decisions with confidence. A private detective agency in Churchgate professionally gathers facts, verifies information, and uncovers hidden truths. Our detectives in Churchgate use surveillance, research, and interviews to deliver accurate and actionable insights.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Churchgate",
    ],
    extraSections: [
      {
        title: "Why Hire Us",
        items: [
          "Protect personal or business interests",
          "Provide evidence for legal matters",
          "Reduce risks and uncertainty",
        ],
      },
    ],
  },
  {
    name: "Dadar",
    slug: "dadar",
    intro: "HS Detective agency Mumbai, private detective agency in Dadar specializes in high-profile and sensitive cases.",
    description: "From corporate investigations to personal matters, we deliver precise, discreet, and legally compliant solutions. Your privacy is our priority. Our detectives operate throughout Dadar, Churchgate, Marine Lines, Colaba, Fort, and the Greater Mumbai area. Local expertise allows us to gather information faster and conduct investigations efficiently.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Dadar",
    ],
    extraSections: [
      {
        title: "Areas We Cover",
        items: [
          "Churchgate West & East",
          "Marine Lines",
          "Colaba",
          "Fort & CST area",
        ],
      },
    ],
  },
  {
    name: "Vashi",
    slug: "vashi",
    intro: "Our private detective agency in Vashi provides specialized services for both individuals and businesses.",
    description: "We understanding the sensitivity of every case and ensure your identity and information remain completely secure.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Vashi",
    ],
    extraSections: [
      {
        title: "Our Specialized Services",
        items: [
          "Matrimonial Investigations – Pre-marital or post-marital checks to ensure trust and clarity.",
          "Corporate & Employee Investigations – Detect fraud, theft, or misconduct within your organization.",
          "Background Verification – Thorough checks for employees, tenants, or business partners.",
          "Surveillance & Monitoring – Discreet surveillance using advanced tools and techniques.",
          "Missing Person Investigation – Locate missing family members or employees safely and efficiently.",
          "Cyber & Online Investigations – Track online threats, digital frauds, and social media risks.",
        ],
      },
    ],
  },
  {
    name: "Panvel",
    slug: "panvel",
    intro: "At HS Detective agency Mumbai, private detective agency in Panvel, we understand that confidentiality is non-negotiable.",
    description: "All investigations are conducted discreetly, ensuring that sensitive information never leaks. Our team guarantees professionalism, reliability, and ethical investigation practices.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Panvel",
    ],
    extraSections: [
      {
        title: "People hire private detectives for:",
        items: [
          "Personal Matters: Matrimonial checks, spouse verification, child safety",
          "Business Protection: Employee fraud, corporate investigations, due diligence",
          "Legal Support: Evidence gathering, witness verification, court-ready reports",
          "Safety & Security: Background verification, suspicious activity monitoring",
        ],
      },
    ],
  },
  {
    name: "Mumbai Central",
    slug: "mumbai-central",
    intro: "Suspicion can disrupt your life. Our private detective agency in Mumbai Central helps you uncover facts discreetly.",
    description: "Whether it's a personal matter, corporate concern, or legal issue, we deliver accurate information so you can make confident decisions.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Mumbai Central",
    ],
    extraSections: [
      {
        title: "Our Mumbai Central detectives specialize in:",
        items: [
          "Matrimonial Cases: Verify spouse behaviour or pre-marriage checks",
          "Corporate Cases: Employee fraud, internal investigations, theft",
          "Background Verification: Employees, tenants, business partners",
          "Surveillance & Monitoring: Professional, discreet observation",
          "Missing Persons: Locate family members, friends, or employees",
          "Cyber Investigations: Track online threats, fraud, harassment",
        ],
      },
    ],
  },
  {
    name: "Powai",
    slug: "powai",
    intro: "HS Detective agency for a reliable detective agency in Powai.",
    description: "Our experienced private investigators in Powai provide confidential matrimonial investigations, corporate checks, and surveillance services to ensure you get the truth, discreetly and professionally. We are a leading private detective agency in Powai, specializing in background checks, partner verification, and corporate investigations. Serving Powai and Mumbai, our team ensures confidential, accurate, and timely investigative solutions.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Powai",
    ],
  },
  {
    name: "Mulund",
    slug: "mulund",
    intro: "we specialize in providing accurate, discreet, and professional investigative services in Mulund and Mumbai.",
    description: "Our experienced team of private detectives is dedicated to uncovering the truth while maintaining complete confidentiality.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Mulund",
    ],
    extraSections: [
      {
        title: "Our Detective Services in Mulund",
        list: [
          {
            title: "Matrimonial Investigations",
            points: ["Pre-marital verification", "Suspected infidelity investigations", "Partner verification in Mulund"],
          },
          {
            title: "Corporate Investigations",
            points: ["Employee verification", "Fraud detection", "Due diligence and compliance audits"],
          },
          {
            title: "Surveillance & Monitoring",
            points: ["Discreet monitoring for personal, corporate, or legal purposes", "Professional evidence collection"],
          },
          {
            title: "Missing Person Tracing",
            points: ["Locate missing individuals, family members, or debt defaulters in Mulund and surrounding areas"],
          },
          {
            title: "Background Verification",
            points: ["Criminal history, financial checks, and employment verification", "Education and reference verification"],
          },
          {
            title: "Legal & Evidence Support",
            points: ["Reports and evidence admissible in legal proceedings", "Professional documentation and tracking"],
          },
        ],
      },
    ],
  },
  {
    name: "Kurla",
    slug: "kurla",
    intro: "Looking for a trusted detective agency in Kurla HS Detective offers private investigation.",
    description: "We provide matrimonial checks, corporate investigations, surveillance services, and background verification in Kurla and Mumbai.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Kurla",
    ],
    extraSections: [
      {
        title: "How We Work",
        items: [
          "Confidential Consultation – Discuss your concerns privately.",
          "Investigation Planning – Personalized strategy for your case.",
          "Execution – Surveillance, research, and evidence gathering.",
          "Reporting – Accurate, detailed, and legally valid reports.",
          "Follow-Up – Guidance on next steps, legal or personal.",
        ],
      },
    ],
  },
  {
    name: "Goregaon",
    slug: "goregaon",
    intro: "We provide reliable, confidential, and professional investigative services in Goregaon and Mumbai.",
    description: "Our team of experienced private investigators in Goregaon specializes in uncovering facts, gathering evidence, and delivering actionable insights while maintaining strict confidentiality. Looking for a trusted private investigator in Goregaon, HS Detective agency Mumbai offers matrimonial investigations, corporate checks, background verification, and surveillance services in Goregaon and Mumbai.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Goregaon",
    ],
  },
  {
    name: "Malad",
    slug: "malad",
    intro: "We are dedicated to providing accurate, discreet, and professional investigative services in Malad and Mumbai.",
    description: "Our team of experienced detectives combines advanced techniques with years of expertise to deliver actionable results while maintaining complete confidentiality. Every case is unique. We combine professional expertise, advanced surveillance tools, and thorough research to ensure accurate results.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Malad",
    ],
  },
  {
    name: "Juhu",
    slug: "juhu",
    intro: "Serving Juhu and Mumbai with expert private investigations, matrimonial checks, corporate investigations, surveillance, and background verification services.",
    description: "HS Detective agency Mumbai our mission is simple: to provide clarity, protection, and peace of mind. Every investigation we conduct in Juhu and Mumbai is handled with professionalism, discretion, and integrity.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Juhu",
    ],
  },
  {
    name: "Santacruz",
    slug: "santacruz",
    intro: "HS Detective agency Mumbai track online fraud, digital harassment, and social media threats to provide evidence for legal or personal protection.",
    description: "Our experts handle cyber cases discreetly and efficiently. Protect your business with employee verification and fraud detection services. Stay one step ahead with corporate investigations in Santacruz.",
    highlights: [
      "100% Confidential & Discreet Investigations",
      "Experienced & Skilled Private Detectives",
      "Use of Advanced Surveillance Technology",
      "Quick Turnaround Time",
      "Transparent & Affordable Pricing",
      "Strong Local Presence in Santacruz",
    ],
  },
];

export const GET_LOCATION_BY_SLUG = (slug: string) =>
  SERVICE_LOCATIONS.find((location) => location.slug === slug);

