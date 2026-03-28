export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServicePlan = {
  duration: string;
  investment: string;
  scope: string;
};

export type ServiceDetail = {
  slug: string;
  navLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  investment: string;
  deliverable: string;
  ctaLabel: string;
  categoryLabel: string;
  image: string;
  features: ServiceFeature[];
  plans?: ServicePlan[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "personal-investigation",
    navLabel: "Personal Investigation",
    heroTitle: "Personal Investigation",
    heroSubtitle:
      "Confidential personal intelligence services built for matrimonial clarity, discreet monitoring, and sensitive fact verification.",
    investment: "Starts from Rs45,000/- onwards",
    deliverable: "100% confidential, legally admissible evidence and intelligence reports.",
    ctaLabel: "Request a Confidential Consultation",
    categoryLabel: "Personal Cases",
    image: "https://images.unsplash.com/photo-1453873531674-2151bcd01b50?auto=format&fit=crop&w=1920&q=80",
    features: [
      {
        title: "Pre & Post Matrimonial Verification",
        description: "In-depth character, family history, and financial background checks.",
      },
      {
        title: "Extramarital Affair Investigation",
        description: "Discreet evidence gathering for marital disputes and litigation.",
      },
      {
        title: "Missing Person & Asset Tracing",
        description: "Specialized searches for locating individuals or hidden personal assets.",
      },
      {
        title: "Child Safety & Monitoring",
        description: "Discreetly monitoring social circles for complete parental peace of mind.",
      },
      {
        title: "Background Checks",
        description: "Comprehensive vetting of domestic help, tenants, or private associates.",
      },
    ],
  },
  {
    slug: "corporate-investigation",
    navLabel: "Corporate Investigation",
    heroTitle: "Corporate Investigation",
    heroSubtitle:
      "Strategic business intelligence, fraud detection, and due diligence support for organizations that need verified truth before high-stakes decisions.",
    investment: "Starts from Rs45,000/- onwards",
    deliverable: "Comprehensive risk-assessment report with actionable business intelligence.",
    ctaLabel: "Secure Your Corporate Assets",
    categoryLabel: "Corporate Cases",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80",
    features: [
      {
        title: "Employee Background Screening",
        description: "Deep-dive verification for high-level executives, directors, and key hires.",
      },
      {
        title: "Corporate Due Diligence",
        description: "Detailed investigative reports on potential partners, vendors, or merger entities.",
      },
      {
        title: "Internal Fraud & Theft Investigation",
        description: "Uncovering white-collar crime, embezzlement, or inventory leakage.",
      },
      {
        title: "Intellectual Property (IP) Protection",
        description: "Identifying sources of trade secret leaks or corporate espionage.",
      },
      {
        title: "Litigation Support",
        description: "Gathering hard evidence and intelligence for complex corporate legal battles.",
      },
    ],
  },
  {
    slug: "tscm-services",
    navLabel: "TSCM Services (Indiebim)",
    heroTitle: "TSCM Services (Indiebim)",
    heroSubtitle:
      "Technical surveillance counter-measures designed to identify covert listening, tracking, and privacy compromise in homes, vehicles, and executive environments.",
    investment: "Starts from Rs45,000/- onwards",
    deliverable: 'Technical "Clean Certificate" and a professional security vulnerability analysis.',
    ctaLabel: "Book a Technical Sweep",
    categoryLabel: "Technical Shield",
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=1920&q=80",
    features: [
      {
        title: "Audio & Video Bug Sweeping",
        description: "Detection of hidden spy cameras, microphones, and unauthorized recorders.",
      },
      {
        title: "Boardroom & Residence Sanitization",
        description: "Ensuring meeting spaces and homes are 100% secure from eavesdropping.",
      },
      {
        title: "GPS Tracker Detection",
        description: "Professional sweeping of executive vehicles for unauthorized tracking devices.",
      },
      {
        title: "Live Event Monitoring",
        description: "Real-time technical surveillance during sensitive board meetings or negotiations.",
      },
      {
        title: "Global Tech Standards",
        description: "Using military-grade equipment and USA/Israel-trained methodologies.",
      },
    ],
  },
  {
    slug: "surveillance-shadowing",
    navLabel: "Surveillance & Shadowing",
    heroTitle: "Surveillance & Shadowing",
    heroSubtitle:
      "Elite field operations with disciplined tracking, photo and video evidence capture, and covert movement verification for sensitive assignments.",
    investment: "Starts from Rs45,000/- onwards",
    deliverable: "High-definition, time-stamped photo and video proof provided in a secure report.",
    ctaLabel: "Get Surveillance Support",
    categoryLabel: "Field Operations",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80",
    features: [
      {
        title: "Elite Field Operations",
        description: "10 hours of active daily monitoring per operative.",
      },
      {
        title: "High-Definition Evidence",
        description: "Time-stamped photo and video proof provided in a secure report.",
      },
      {
        title: "Covert Shadowing",
        description: "Discreetly following subjects to document movements and activities.",
      },
      {
        title: "Counter-Surveillance",
        description: "Identifying if you are being illegally monitored by third parties.",
      },
    ],
    plans: [
      {
        duration: "05 Days",
        investment: "Rs45,000/-",
        scope: "Short-term pattern verification: confirming suspicions or quick checks.",
      },
      {
        duration: "10 Days",
        investment: "Rs75,000/-",
        scope: "Recommended: identifying consistent habits and routines.",
      },
      {
        duration: "15 Days",
        investment: "Rs1,00,000/-",
        scope: "Comprehensive deep-dive: full-scale investigative shadowing for legal evidence.",
      },
    ],
  },
];

export const serviceDetailMap = Object.fromEntries(
  serviceDetails.map((service) => [service.slug, service])
) as Record<string, ServiceDetail>;
