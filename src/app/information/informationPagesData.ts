export type InformationPoint = {
  label: string;
  text: string;
};

export type InformationPageData = {
  slug: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  eyebrow: string;
  introTitle: string;
  introText: string;
  purpose: string;
  image: string;
  points: InformationPoint[];
};

export const informationPages: InformationPageData[] = [
  {
    slug: "warning-signs",
    title: "Warning Signs: Identifying Deception & Risk",
    shortTitle: "Warning Signs",
    navLabel: "Warning Signs",
    heroTitle: "Warning Signs",
    heroSubtitle:
      "Recognize the earliest red flags in personal, matrimonial, and corporate situations before they become full-scale crises.",
    eyebrow: "Red Flag Detection",
    introTitle: "Identifying Deception & Risk",
    introText:
      'Most crisesâ€”whether corporate or personalâ€”start with subtle anomalies. Recognizing these "Red Flags" early can save your reputation, your assets, and your peace of mind. H S Detectives Agency Mumbai identifies the following indicators of concern.',
    purpose: 'To act as a "Symptom Checker" for worried clients.',
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=80",
    points: [
      {
        label: "Matrimonial Red Flags",
        text:
          'Sudden secrecy with mobile devices, unexplained financial withdrawals, or significant "gaps" in their professional or family history.',
      },
      {
        label: "Corporate Internal Threats",
        text:
          'Employees with unexplained lifestyle changes, unauthorized access to sensitive data after hours, or suspicious "close" relationships with competitors.',
      },
      {
        label: "Asset Leakage",
        text:
          'If your business partners are reporting lower profits while their personal wealth grows, it is a sign of "Silent Siphoning."',
      },
      {
        label: "The H S Detectives Tip",
        text:
          "If your intuition says something is wrong, it usually is. Do not confront the suspect; instead, begin documenting observations quietly before calling our elite team.",
      },
    ],
  },
  {
    slug: "investigation-protocol",
    title: 'Client Protocol: The "Golden Rules" of Investigation',
    shortTitle: "Client Protocol",
    navLabel: "Investigation Protocol",
    heroTitle: "Investigation Protocol",
    heroSubtitle:
      "A clear framework for how clients should behave during an active investigation to protect evidence, discretion, and outcomes.",
    eyebrow: "Client Protocol",
    introTitle: 'The "Golden Rules" of Investigation',
    introText:
      "Professional investigation is a delicate process. To ensure H S Detectives Agency Mumbai can gather admissible evidence, clients must follow these strict protocols.",
    purpose: "To educate the client on how to stay safe during an active case.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
    points: [
      {
        label: "Maintain Total Discretion",
        text:
          'Do not inform friends, family, or the subject that you have hired a private investigator. Any change in your behavior can cause the subject to "go dark."',
      },
      {
        label: "Secure Communication",
        text:
          "Contact H S Detectives Agency Mumbai from a safe location. If your case involves technical threats, all communication should be coordinated through our partners at IndieBim Technology Solutions Private Limited.",
      },
      {
        label: 'Provide "Raw" Data',
        text:
          "Be 100% honest with your lead investigator. We are here to find the truth, and knowing the full context allows us to deploy our resources (Ex-DCPs and veteran field agents) effectively.",
      },
      {
        label: "Trust the Process",
        text:
          'Professional surveillance and background vetting take time. Rushing an investigation often leads to "blown" cover. Trust our forensic logic to deliver results.',
      },
    ],
  },
  {
    slug: "legal-standards",
    title: "Compliance Corner: Legal & Forensic Standards",
    shortTitle: "Compliance Corner",
    navLabel: "Legal Standards",
    heroTitle: "Legal Standards",
    heroSubtitle:
      "Understand the compliance, evidence-handling, and forensic discipline behind lawful investigations in India.",
    eyebrow: "Compliance Corner",
    introTitle: "Legal & Forensic Standards",
    introText:
      "In 2026, an investigation is only as good as its legality. H S Detectives Agency Mumbai operates at the highest level of regulatory compliance in India.",
    purpose: 'To prove that you are a high-level, "Clean" agency (unlike local street detectives).',
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80",
    points: [
      {
        label: "DPDP Act 2026 Compliance",
        text:
          "We ensure all digital evidence gathering respects the Digital Personal Data Protection Act. We protect the Data Fiduciary (you, the client) from legal liability.",
      },
      {
        label: "Evidence Admissibility",
        text:
          "Led by a Retired DCP (Crime Branch), our methodology mirrors official law enforcement standards. This ensures that the reports provided by H S Detectives Agency Mumbai are structurally sound for use in legal proceedings.",
      },
      {
        label: "Ethical Intelligence",
        text:
          'We do not engage in illegal hacking or "honey trapping." We use legitimate field intelligence, public record forensics, and advanced technical support from IndieBim Technology Solutions Private Limited.',
      },
    ],
  },
  {
    slug: "privacy-rights",
    title: "Right of Privacy: Our Ethical Manifesto",
    shortTitle: "Right of Privacy",
    navLabel: "Privacy Rights",
    heroTitle: "Privacy Rights",
    heroSubtitle:
      "Our ethical position on protecting safety, confidentiality, and the personal boundaries of every client we serve.",
    eyebrow: "Right of Privacy",
    introTitle: "Our Ethical Manifesto",
    introText:
      "At H S Detectives Agency Mumbai, we believe that every individual has a fundamental right to a safe and private life. We exist to protect that right when it is threatened by others.",
    purpose: 'To show your commitment to the "Betterment of Society."',
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80",
    points: [
      {
        label: "The Shield & The Sword",
        text:
          'While we are the "Sword" that finds the truth, we work in tandem with IndieBim Technology Solutions Private Limited (the "Shield") to ensure your personal boundaries are restored.',
      },
      {
        label: "Protection of the Vulnerable",
        text:
          "We specialize in helping victims of stalking, harassment, and corporate bullying. Our goal is to empower you with the truth so you can reclaim your privacy.",
      },
      {
        label: "Zero-Leak Policy",
        text:
          'Your case file is a "Fortress." We utilize military-grade encryption to ensure that the sensitive details handled by H S Detectives Agency Mumbai never fall into the wrong hands.',
      },
    ],
  },
];

export const informationPageLinks = informationPages.map(({ slug, navLabel }) => ({
  slug,
  navLabel,
  href: slug === "warning-signs" ? "/warning-signs-red-flag-detection" : `/${slug}`,
}));
