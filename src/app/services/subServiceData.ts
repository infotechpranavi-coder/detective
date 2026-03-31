export type SubService = {
  slug: string;
  parentSlug: string;
  navLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  image: string;
  content: string[];
  serviceIncludes: string[];
  idealFor: string[];
  reporting: string[];
  trustPoints: string[];
};

export const subServices: SubService[] = [
  // ── PERSONAL INVESTIGATION ─────────────────────────────────────────────────
  {
    slug: "pre-matrimonial-investigations",
    parentSlug: "personal-investigation",
    navLabel: "Pre-Matrimonial Investigations",
    heroTitle: "Pre-Matrimonial Investigations",
    heroSubtitle:
      "Verify the background of your future life partner with complete discretion before you commit to marriage.",
    ctaLabel: "Request a Confidential Check",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Marriage is one of the most significant decisions of a person's life. Pre-matrimonial investigations help individuals and families verify the true identity, background, and character of a prospective partner before making this lifelong commitment.",
      "Our professional investigators conduct thorough checks on personal history, educational qualifications, employment records, financial standing, past relationships, and any criminal or legal background. Every inquiry is handled with complete discretion and sensitivity.",
      "We use reliable sources, field verification, and confidential reports to give you a clear and accurate picture. Our goal is to ensure you enter marriage with full confidence and peace of mind, free from any hidden surprises.",
      "Whether you are an individual or your family is arranging the match, our pre-matrimonial investigation services provide the verified clarity you need to make the right decision.",
    ],
    serviceIncludes: [
      "Personal background verification",
      "Educational and employment record check",
      "Financial status and liabilities review",
      "Past relationship history inquiry",
      "Criminal and legal record screening",
      "Family and social standing assessment",
    ],
    idealFor: [
      "Individuals seeking peace of mind before marriage",
      "Families arranging matches and needing verified details",
      "Cases where online profiles need to be cross-verified",
      "Anyone wanting to confirm authenticity of shared information",
    ],
    reporting: [
      "Confidential written report with verified findings",
      "Field and source-based evidence",
      "Clear summary for informed decision-making",
    ],
    trustPoints: [
      "100% confidential and discreet process",
      "Ethical investigation methods",
      "Accurate, fact-based reporting",
      "Experienced matrimonial investigators",
    ],
  },
  {
    slug: "post-matrimonial-surveillance",
    parentSlug: "personal-investigation",
    navLabel: "Post-Matrimonial Surveillance",
    heroTitle: "Post-Matrimonial Surveillance",
    heroSubtitle:
      "Discreet surveillance services to resolve doubts and uncover the truth in your marital relationship.",
    ctaLabel: "Start a Confidential Consultation",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Post-matrimonial surveillance helps individuals who have concerns about their spouse's behaviour, fidelity, or activities after marriage. Our investigators operate with the highest levels of discretion to gather factual, evidence-based information.",
      "Our team monitors activities, movements, and communications (within legal limits) to build a clear and verified picture of the situation. We document findings with photo, video, and written evidence to ensure accuracy.",
      "Whether you are dealing with suspected infidelity, financial secrecy, or other relationship concerns, our post-matrimonial surveillance services provide the truth you need to make important decisions about your future.",
      "All operations are conducted legally and ethically, ensuring that findings are admissible and reliable for personal or legal proceedings.",
    ],
    serviceIncludes: [
      "Spousal activity monitoring",
      "Covert field surveillance",
      "Video and photographic evidence collection",
      "Location and movement tracking (legal)",
      "Social and behavioural pattern analysis",
      "Detailed case reporting",
    ],
    idealFor: [
      "Individuals with concerns about spousal fidelity",
      "Cases with suspected financial deception in marriage",
      "Clients needing documented evidence for legal proceedings",
      "Situations requiring discreet and professional monitoring",
    ],
    reporting: [
      "Photo and video documentation",
      "Written activity logs and timelines",
      "Confidential reports prepared for personal or legal use",
    ],
    trustPoints: [
      "Strictly confidential operations",
      "Legally compliant surveillance methods",
      "Experienced field investigators",
      "Sensitive handling of personal cases",
    ],
  },
  {
    slug: "loyalty-tests",
    parentSlug: "personal-investigation",
    navLabel: "Loyalty Tests",
    heroTitle: "Loyalty Tests",
    heroSubtitle:
      "Professional loyalty verification services designed to provide clarity and peace of mind in personal relationships.",
    ctaLabel: "Request a Loyalty Test",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80",
    content: [
      "A loyalty test is a controlled, professionally managed investigation designed to verify whether a partner is faithful and trustworthy. Our investigators conduct discreet scenarios to assess behaviour and document responses ethically.",
      "Our team creates carefully planned and controlled situations to evaluate a person's actions when they believe they are unobserved. All tests are conducted within legal and ethical boundaries to ensure admissible and reliable findings.",
      "Whether you have doubts about a romantic partner, a business associate, or a close individual, our loyalty test services provide clear and factual insights without speculation or assumption.",
      "Every loyalty test is tailored to the specific situation and handled with the utmost sensitivity, ensuring complete privacy for our clients throughout the entire process.",
    ],
    serviceIncludes: [
      "Controlled scenario planning",
      "Covert behavioural observation",
      "Field agent deployment",
      "Photographic and video documentation",
      "Detailed behavioural report",
      "Post-test consultation support",
    ],
    idealFor: [
      "Individuals with doubts about a partner's fidelity",
      "Clients needing factual clarity before a major decision",
      "Cases where suspicion needs to be confirmed or cleared",
      "Situations that require discreet and professional handling",
    ],
    reporting: [
      "Detailed behavioural assessment report",
      "Video and photo documentation of findings",
      "Consultant review of results with you",
    ],
    trustPoints: [
      "Ethical and legally compliant testing methods",
      "Complete client confidentiality",
      "Professional and sensitive handling",
      "Fact-based results, no assumptions",
    ],
  },
  {
    slug: "missing-person-investigations",
    parentSlug: "personal-investigation",
    navLabel: "Missing Person Investigations",
    heroTitle: "Missing Person Investigations",
    heroSubtitle:
      "Swift and professional tracing services to locate missing persons with urgency, care, and expertise.",
    ctaLabel: "Start a Missing Person Case",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Missing person investigations require speed, expertise, and sensitivity. Our experienced investigators work swiftly to trace and locate individuals who have gone missing, whether due to personal choice, family conflict, or suspicious circumstances.",
      "We use a combination of field investigation, digital tracing, network intelligence, and public record research to track and locate missing persons. Every case is treated with urgency and complete discretion.",
      "Our team has successfully located missing individuals across India, including runaway family members, estranged relatives, and individuals who have disappeared under unclear circumstances. We work in close coordination with families to provide regular updates.",
      "Whether the case involves a missing child, a missing adult, or an estranged family member, our missing person investigation services provide compassionate and professional support throughout the search process.",
    ],
    serviceIncludes: [
      "Field tracing and ground investigation",
      "Digital footprint and social media tracing",
      "Public records and database research",
      "Network and contact intelligence",
      "Family coordination and case updates",
      "Coordination with relevant authorities where needed",
    ],
    idealFor: [
      "Families searching for a missing relative",
      "Cases involving runaway minors or estranged family members",
      "Situations where missing persons are suspected to be in danger",
      "Individuals trying to reconnect with lost contacts",
    ],
    reporting: [
      "Regular case progress updates to the family",
      "Location intelligence and movement tracing reports",
      "Documented findings submitted upon case resolution",
    ],
    trustPoints: [
      "Swift and urgent response",
      "Compassionate client support",
      "Proven field tracing expertise",
      "Confidential and sensitive handling",
    ],
  },
  {
    slug: "background-checks",
    parentSlug: "personal-investigation",
    navLabel: "Background Checks",
    heroTitle: "Background Checks",
    heroSubtitle:
      "Comprehensive personal background verification services to help you make safe and informed decisions.",
    ctaLabel: "Request a Background Check",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Personal background checks provide verified information about an individual's history, identity, and character. Whether for personal safety, relationship decisions, or professional matters, a thorough background check gives you reliable facts.",
      "Our investigators verify educational qualifications, employment history, residential addresses, financial records, and legal or criminal backgrounds. We use both field investigation and database research to deliver accurate results.",
      "Background checks are particularly valuable before entering a business partnership, hiring domestic staff, renting property, or entering a significant personal relationship. Our process is discreet and fully compliant with privacy and legal regulations.",
      "Every background check is customised to the client's specific needs, ensuring you get the most relevant and actionable information quickly and efficiently.",
    ],
    serviceIncludes: [
      "Identity and document verification",
      "Educational and credential check",
      "Employment history verification",
      "Criminal and legal record search",
      "Address and residence verification",
      "Financial and credit background review",
    ],
    idealFor: [
      "Individuals vetting a new personal or business contact",
      "Employers or landlords needing tenant or staff verification",
      "Families conducting checks before marriage or major agreements",
      "Anyone needing verified facts about a person of interest",
    ],
    reporting: [
      "Comprehensive verified background report",
      "Cross-referenced findings from multiple sources",
      "Clear summary with highlighted risk factors",
    ],
    trustPoints: [
      "Accurate and fully verified findings",
      "Compliant with legal and privacy regulations",
      "Fast turnaround with detailed reports",
      "Trusted by individuals and organizations across India",
    ],
  },

  // ── CORPORATE INVESTIGATION ────────────────────────────────────────────────
  {
    slug: "employee-background-verification",
    parentSlug: "corporate-investigation",
    navLabel: "Employee Background Verification",
    heroTitle: "Employee Background Verification",
    heroSubtitle:
      "Thorough pre-employment and in-service verification to protect your organization from risk.",
    ctaLabel: "Verify Your Workforce",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Hiring the wrong person can cost your business significantly in terms of finances, reputation, and security. Our employee background verification services help companies make safer hiring decisions by validating the credentials and history of every candidate.",
      "We verify educational qualifications, past employment records, professional references, criminal backgrounds, and identity documents. Our process is thorough, fast, and fully compliant with employment laws and data privacy regulations.",
      "Whether you are hiring for a senior executive role, a sensitive position, or large-scale recruitment, our background verification services scale to meet your organization's needs while maintaining the highest standards of accuracy.",
      "Our detailed verification reports help HR teams and decision-makers act with confidence, reducing the risk of fraud, misconduct, or misrepresentation within your workforce.",
    ],
    serviceIncludes: [
      "Educational credential verification",
      "Previous employment history check",
      "Professional reference validation",
      "Criminal and legal record screening",
      "Identity document validation",
      "Address and residence confirmation",
    ],
    idealFor: [
      "Companies with large-scale recruitment needs",
      "Organizations hiring for sensitive or executive roles",
      "HR teams seeking compliant and reliable verification",
      "Businesses wanting to reduce internal fraud risk",
    ],
    reporting: [
      "Structured background verification report per candidate",
      "Risk-flagged findings highlighted for HR review",
      "Fast turnaround to support swift hiring decisions",
    ],
    trustPoints: [
      "Fully compliant with employment and privacy laws",
      "Accurate multi-source verification",
      "Scales for bulk and individual hiring",
      "Trusted by leading businesses across India",
    ],
  },
  {
    slug: "fraud-investigation-company-support",
    parentSlug: "corporate-investigation",
    navLabel: "Fraud Investigation",
    heroTitle: "Corporate Fraud Investigation",
    heroSubtitle:
      "Detect, investigate, and document corporate fraud with professional expertise and complete confidentiality.",
    ctaLabel: "Report a Fraud Case",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Corporate fraud can take many forms — from financial misappropriation and embezzlement to data theft and vendor collusion. Our corporate fraud investigation services are equipped to identify, document, and resolve these threats with precision.",
      "Our investigators use forensic methods, digital analysis, surveillance, and financial auditing techniques to uncover fraudulent activities within your organization. We work discreetly to ensure the integrity of the investigation is not compromised.",
      "We handle a wide range of fraud cases including internal employee fraud, vendor fraud, insurance fraud, procurement fraud, and financial irregularities. Every case is approached with a structured investigation plan designed to produce legally valid findings.",
      "Our team coordinates with your legal and compliance teams to ensure findings are documented in a manner suitable for internal action, legal proceedings, or regulatory reporting.",
    ],
    serviceIncludes: [
      "Internal employee fraud detection",
      "Vendor and procurement fraud inquiry",
      "Financial irregularity investigation",
      "Digital and document forensics",
      "Undercover operational support",
      "Legal-grade evidence compilation",
    ],
    idealFor: [
      "Companies experiencing suspected financial losses",
      "Organizations dealing with vendor or procurement irregularities",
      "Businesses needing discreet internal fraud investigation",
      "Legal teams requiring documented fraud evidence",
    ],
    reporting: [
      "Legally robust investigation report",
      "Forensic-grade documented evidence",
      "Findings aligned with compliance and legal requirements",
    ],
    trustPoints: [
      "Confidential and professionally managed",
      "Forensic-standard investigation methods",
      "Legal and compliance aligned",
      "Proven fraud resolution expertise",
    ],
  },
  {
    slug: "due-diligence-services",
    parentSlug: "corporate-investigation",
    navLabel: "Due Diligence Services",
    heroTitle: "Due Diligence Services",
    heroSubtitle:
      "Comprehensive due diligence investigations to protect your business before high-stakes decisions.",
    ctaLabel: "Request Due Diligence Support",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Before entering a partnership, acquisition, investment, or major business deal, due diligence is essential. Our corporate due diligence services provide verified, in-depth intelligence on companies, individuals, and opportunities.",
      "We investigate financial health, legal history, ownership structures, regulatory compliance, and reputational standing of target entities. Our findings help organizations identify risks before committing to significant business decisions.",
      "Our experienced team covers both local and international due diligence requirements, using a combination of field investigation, public records, financial analysis, and expert network intelligence.",
      "Whether you are a private equity firm, corporate acquirer, or business entering a partnership, our due diligence reports give you the verified intelligence needed to proceed with confidence.",
    ],
    serviceIncludes: [
      "Business and financial record verification",
      "Legal and regulatory compliance check",
      "Ownership and shareholding structure review",
      "Reputational background investigation",
      "Key principal and director background checks",
      "Risk assessment and summary reporting",
    ],
    idealFor: [
      "Companies planning mergers, acquisitions, or investments",
      "Investors evaluating new business opportunities",
      "Organizations entering partnerships or joint ventures",
      "Legal and compliance teams requiring verified intelligence",
    ],
    reporting: [
      "Comprehensive due diligence report with risk summary",
      "Structured findings across financial, legal, and reputational areas",
      "Actionable intelligence for decision-makers",
    ],
    trustPoints: [
      "Verified, multi-source intelligence",
      "Covers financial, legal, and reputational risk",
      "Fast and confidential delivery",
      "Supports high-stakes business decisions",
    ],
  },
  {
    slug: "asset-tracing",
    parentSlug: "corporate-investigation",
    navLabel: "Asset Tracing",
    heroTitle: "Asset Tracing",
    heroSubtitle:
      "Professional asset tracing services to locate hidden or undisclosed assets for recovery and legal proceedings.",
    ctaLabel: "Start an Asset Trace",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Asset tracing is a critical investigative service used to locate undisclosed, hidden, or transferred assets in commercial disputes, fraud cases, loan defaults, and legal proceedings. Our investigators specialize in uncovering assets that individuals or companies attempt to conceal.",
      "We trace real estate holdings, business interests, bank accounts, vehicles, investment portfolios, and other assets using a combination of public records research, financial analysis, field investigation, and intelligence networks.",
      "Our asset tracing services are frequently used by legal teams, financial institutions, insolvency professionals, and creditors seeking to recover debts or enforce court judgments. Every case is approached with thorough methodology and full legal compliance.",
      "The findings from our asset tracing investigations are presented in structured, legally admissible reports suitable for use in court proceedings, arbitration, or debt recovery operations.",
    ],
    serviceIncludes: [
      "Real estate and property tracing",
      "Business and shareholding interest identification",
      "Bank account and financial asset location",
      "Vehicle and movable asset tracing",
      "Investment portfolio investigation",
      "Legal-grade asset disclosure report",
    ],
    idealFor: [
      "Legal teams supporting debt recovery or court enforcement",
      "Financial institutions dealing with defaulting borrowers",
      "Companies involved in commercial disputes",
      "Insolvency practitioners tracing concealed assets",
    ],
    reporting: [
      "Comprehensive asset disclosure report",
      "Location and ownership details for identified assets",
      "Legally admissible findings for court and recovery use",
    ],
    trustPoints: [
      "Extensive investigative network across India",
      "Legally compliant tracing methods",
      "Proven track record in asset recovery support",
      "Confidential and professionally managed",
    ],
  },
  {
    slug: "undercover-operations",
    parentSlug: "corporate-investigation",
    navLabel: "Undercover Operations",
    heroTitle: "Undercover Operations",
    heroSubtitle:
      "Expert undercover investigations to expose internal misconduct, fraud, and corporate malpractice from within.",
    ctaLabel: "Discuss an Undercover Assignment",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Undercover operations are one of the most effective methods for gathering evidence in cases of internal fraud, misconduct, employee theft, and workplace corruption. Our trained undercover agents integrate into workplace environments to observe and document illegal or unethical activities.",
      "Our investigators are skilled at adopting cover identities and operating without detection. They gather firsthand evidence of misconduct including theft, collusion, safety violations, harassment, and policy breaches.",
      "Every undercover operation is meticulously planned, briefed, and legally authorized to ensure findings are admissible and operationally sound. We coordinate closely with your legal and HR teams to align the investigation with organizational and regulatory requirements.",
      "Our undercover operations have successfully exposed internal fraud rings, pilferage operations, kickback schemes, and misconduct cases that traditional investigation methods could not resolve.",
    ],
    serviceIncludes: [
      "Covert workplace infiltration planning",
      "Undercover agent deployment",
      "Internal fraud and theft documentation",
      "Kickback and collusion exposure",
      "Safety and policy violation evidence gathering",
      "Full legal and operational briefing",
    ],
    idealFor: [
      "Companies with suspected internal theft or fraud",
      "Organizations dealing with unresolved misconduct cases",
      "Businesses where traditional investigation has not yielded results",
      "HR and legal teams needing evidence for disciplinary action",
    ],
    reporting: [
      "Comprehensive undercover investigation report",
      "Video, audio, and documentary evidence (where legally permissible)",
      "Findings prepared for HR, legal, or disciplinary proceedings",
    ],
    trustPoints: [
      "Highly trained covert investigators",
      "Legally planned and operationally secure",
      "Coordinated with legal and HR requirements",
      "Proven success in high-risk corporate environments",
    ],
  },

  // ── TSCM SERVICES ──────────────────────────────────────────────────────────
  {
    slug: "corporate-tscm-services",
    parentSlug: "tscm-services",
    navLabel: "Corporate TSCM Services",
    heroTitle: "Corporate TSCM Services",
    heroSubtitle:
      "Protect your boardrooms, offices, and operations from unauthorized electronic surveillance with expert TSCM sweeps.",
    ctaLabel: "Schedule a Corporate TSCM Sweep",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Corporate environments are prime targets for electronic eavesdropping, corporate espionage, and unauthorized surveillance. Our Corporate TSCM (Technical Surveillance Countermeasures) services protect your organization's most sensitive spaces from hidden listening devices, cameras, and signal-based intrusions.",
      "Our expert technicians conduct thorough electronic sweeps of boardrooms, executive offices, conference rooms, server rooms, and common areas using state-of-the-art TSCM equipment. We detect RF transmitters, cellular bugs, Wi-Fi-based surveillance devices, GSM bugs, hidden cameras, and more.",
      "Designed for corporations, law firms, financial institutions, and high-security organizations, our TSCM sweeps are conducted discreetly — often outside business hours — to minimize operational disruption while maximizing security assurance.",
      "Following each sweep, we provide a comprehensive technical report detailing the inspection methodology, detected threats, recommended countermeasures, and security enhancement guidance.",
    ],
    serviceIncludes: [
      "Boardroom and executive office TSCM sweeps",
      "Conference and meeting room inspection",
      "RF, GSM, and cellular bug detection",
      "Hidden camera identification",
      "Wi-Fi and network vulnerability screening",
      "Post-sweep security recommendations",
    ],
    idealFor: [
      "Corporations protecting boardroom confidentiality",
      "Law firms and financial institutions with sensitive discussions",
      "Organizations with high-value IP or trade secrets",
      "Executives concerned about corporate espionage",
    ],
    reporting: [
      "Detailed technical sweep report",
      "Threat identification and countermeasure recommendations",
      "Repeat sweep scheduling guidance",
    ],
    trustPoints: [
      "Advanced state-of-the-art TSCM equipment",
      "Discreet out-of-hours operation",
      "Experienced certified TSCM technicians",
      "Proven corporate security track record",
    ],
  },
  {
    slug: "residential-tscm-services",
    parentSlug: "tscm-services",
    navLabel: "Residential TSCM Services",
    heroTitle: "Residential TSCM Services",
    heroSubtitle:
      "Secure your home from hidden surveillance devices with our professional residential TSCM sweep services.",
    ctaLabel: "Book a Home TSCM Sweep",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Your home should be your most secure space. If you suspect hidden cameras, audio bugs, or unauthorized monitoring devices in your residence, our residential TSCM services provide a thorough and professional sweep to detect and eliminate all electronic threats.",
      "Our technicians inspect every area of your home — including bedrooms, living rooms, bathrooms, home offices, and common areas — using advanced RF detection, camera detection, and Non-Linear Junction Detector (NLJD) technology.",
      "Residential TSCM sweeps are commonly requested after relationship breakups, divorce proceedings, suspected domestic surveillance, or when individuals have reason to believe they are being monitored without consent. Our process is fully confidential.",
      "After each residential sweep, we provide a plain-language report detailing inspection areas, any findings, and practical recommendations to enhance your home's privacy and security going forward.",
    ],
    serviceIncludes: [
      "Full residential property TSCM sweep",
      "Hidden camera detection in all rooms",
      "RF and wireless bug scanning",
      "GSM and SIM-based device identification",
      "Wired and covert audio device detection",
      "Post-sweep privacy hardening advice",
    ],
    idealFor: [
      "Individuals suspecting home-based surveillance",
      "Clients going through divorce or relationship disputes",
      "High-profile individuals requiring residential privacy",
      "Anyone who has concerns about unauthorized monitoring",
    ],
    reporting: [
      "Plain-language residential sweep report",
      "Identified threat locations and device details",
      "Privacy enhancement recommendations",
    ],
    trustPoints: [
      "Complete residential privacy protection",
      "Confidential and sensitive handling",
      "Advanced NLJD and RF scanning technology",
      "Thorough room-by-room inspection",
    ],
  },
  {
    slug: "corporate-bug-sweeping",
    parentSlug: "tscm-services",
    navLabel: "Corporate Bug Sweeping",
    heroTitle: "Corporate Bug Sweeping",
    heroSubtitle:
      "Detect and eliminate hidden listening devices from your corporate environment with precision sweeping services.",
    ctaLabel: "Book a Corporate Bug Sweep",
    image:
      "https://images.unsplash.com/photo-1573496800808-b0ccd5aa4c80?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Hidden audio bugs and listening devices can compromise your most sensitive business conversations, strategy sessions, and client negotiations. Our corporate bug sweeping services provide systematic and highly thorough detection of all covert listening devices installed within your premises.",
      "Our technicians deploy a multi-layered detection approach using RF spectrum analyzers, non-linear junction detectors, thermal imaging, and physical inspection to locate bugs hidden in walls, furniture, electrical fittings, and equipment.",
      "We offer one-time sweeps as well as scheduled periodic sweeps for organizations that require ongoing security assurance. Pre-meeting sweeps for high-stakes boardroom discussions are also available on short notice.",
      "Every corporate bug sweep is conducted by certified professionals, under strict non-disclosure, ensuring your organization's security posture is never compromised during the inspection process.",
    ],
    serviceIncludes: [
      "RF spectrum analysis for wireless bugs",
      "Non-linear junction detection (NLJD)",
      "Physical and thermal inspection of fittings",
      "Pre-meeting boardroom sweeps",
      "Periodic scheduled office sweeps",
      "Technical findings and remediation report",
    ],
    idealFor: [
      "Corporations prior to sensitive strategy meetings",
      "Organizations with concerns about competitor intelligence gathering",
      "Businesses after staff changes or facility access events",
      "Legal teams requiring sweep certification for proceedings",
    ],
    reporting: [
      "Technical bug sweep findings report",
      "Detailed location and device identification",
      "Sweep certification available for legal use",
    ],
    trustPoints: [
      "Multi-layered detection methodology",
      "Certified TSCM professionals",
      "Strict non-disclosure during operations",
      "Available on short notice for urgent sweeps",
    ],
  },
  {
    slug: "home-bug-sweep",
    parentSlug: "tscm-services",
    navLabel: "Home Bug Sweep",
    heroTitle: "Home Bug Sweep",
    heroSubtitle:
      "Comprehensive home bug sweep services to detect unauthorized listening and recording devices in your living space.",
    ctaLabel: "Book a Home Bug Sweep",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Feeling that your private conversations at home are being listened to is deeply unsettling. Our professional home bug sweep service provides thorough detection and removal of unauthorized audio and recording devices installed in your home.",
      "Our technicians systematically inspect every room, including hidden cavities, electrical outlets, smoke detectors, furniture, and electronic devices, using advanced RF detection, camera detection lenses, and physical inspection methods.",
      "Home bug sweeps are particularly important following suspicious incidents, unwanted access by others to your property, or during sensitive legal or personal situations such as divorce, custody disputes, or business separations.",
      "After the sweep, we provide a clear report of our findings and guidance on how to secure your home against future surveillance threats.",
    ],
    serviceIncludes: [
      "Room-by-room audio bug detection",
      "Hidden camera scanning",
      "Electrical outlet and fitting inspection",
      "RF and wireless signal scanning",
      "Smart device and router vulnerability check",
      "Post-sweep security hardening guidance",
    ],
    idealFor: [
      "Homeowners suspecting unauthorized surveillance",
      "Individuals in custody or divorce proceedings",
      "Clients who have had unauthorized property access",
      "Anyone who values their home privacy and security",
    ],
    reporting: [
      "Clear home sweep findings report",
      "Device identification and location details",
      "Home privacy hardening recommendations",
    ],
    trustPoints: [
      "Thorough room-by-room inspection",
      "Advanced detection technology",
      "Discreet and confidential process",
      "Experienced residential security specialists",
    ],
  },
  {
    slug: "debugging-service",
    parentSlug: "tscm-services",
    navLabel: "Debugging Service",
    heroTitle: "Debugging Service",
    heroSubtitle:
      "Expert debugging services to identify and eliminate all forms of electronic surveillance threats from any environment.",
    ctaLabel: "Request a Debugging Service",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Debugging refers to the comprehensive process of locating and neutralizing all forms of covert electronic surveillance devices across a given environment. Our expert debugging services cover offices, homes, vehicles, hotel rooms, and any space where unauthorized surveillance may have been installed.",
      "Using advanced TSCM equipment including broadband RF receivers, spectrum analyzers, NLJD devices, optical camera detectors, and thermal sensors, our team conducts systematic debugging sweeps to identify all active and passive surveillance devices.",
      "Our debugging service extends beyond physical device detection to include network traffic analysis, Wi-Fi security assessment, telephone line analysis, and mobile device security review — providing a 360-degree counter-surveillance solution.",
      "Whether you are an individual, a business, or a high-profile client, our debugging services ensure your environments are free from unauthorized monitoring and your communications remain private.",
    ],
    serviceIncludes: [
      "Full-spectrum electronic debugging sweep",
      "Network and Wi-Fi security analysis",
      "Telephone line and wired communication check",
      "Mobile device surveillance screening",
      "Vehicle debugging inspection",
      "Comprehensive counter-surveillance report",
    ],
    idealFor: [
      "Executives and high-profile individuals",
      "Businesses with sensitive trade secrets or IP",
      "Individuals facing personal or legal security concerns",
      "Anyone requiring complete 360-degree surveillance protection",
    ],
    reporting: [
      "Full debugging sweep technical report",
      "All identified surveillance threats documented",
      "Counter-surveillance recommendations and remediation plan",
    ],
    trustPoints: [
      "360-degree counter-surveillance coverage",
      "Advanced multi-technology detection",
      "Networks, devices, and physical spaces covered",
      "Trusted by high-profile individuals and corporations",
    ],
  },

  // ── RISK MANAGEMENT ────────────────────────────────────────────────────────
  {
    slug: "ip-protection",
    parentSlug: "risk-management",
    navLabel: "IP Protection",
    heroTitle: "Intellectual Property Protection",
    heroSubtitle:
      "Safeguard your intellectual property from theft, infringement, and unauthorized use with our expert IP protection services.",
    ctaLabel: "Protect Your IP Now",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Intellectual property is one of the most valuable assets a business can possess. Trade secrets, patents, proprietary processes, and brand assets require active protection against theft, counterfeiting, and unauthorized use. Our IP protection services provide the investigative support needed to safeguard your competitive advantage.",
      "Our investigators identify IP infringement activities, locate counterfeit operations, gather evidence of trade secret theft, monitor supply chains for unauthorized reproduction, and trace the source of IP violations.",
      "We work closely with legal teams to ensure all evidence gathered is admissible and aligned with IP law requirements. Our services support cease and desist actions, civil litigation, and law enforcement referrals.",
      "Whether your IP is being copied by competitors, stolen by employees, or counterfeited in the market, our IP protection investigation services provide the evidence and intelligence needed to protect and enforce your rights.",
    ],
    serviceIncludes: [
      "Trade secret theft investigation",
      "Counterfeit product detection and evidence gathering",
      "IP infringement monitoring",
      "Supply chain integrity inspection",
      "Employee IP leakage investigation",
      "Legal-grade IP evidence compilation",
    ],
    idealFor: [
      "Companies with valuable trade secrets or proprietary technology",
      "Brands fighting counterfeit product operations",
      "Organizations suspecting employee-driven IP theft",
      "Legal teams requiring investigation support for IP cases",
    ],
    reporting: [
      "IP infringement investigation report",
      "Legal-grade evidence documentation",
      "Market and supply chain intelligence summary",
    ],
    trustPoints: [
      "Aligned with IP law and legal requirements",
      "Comprehensive market monitoring capability",
      "Evidence prepared for legal proceedings",
      "Experienced IP investigation specialists",
    ],
  },
  {
    slug: "brand-protection",
    parentSlug: "risk-management",
    navLabel: "Brand Protection",
    heroTitle: "Brand Protection",
    heroSubtitle:
      "Defend your brand's integrity and reputation from counterfeiting, fraud, and unauthorized use.",
    ctaLabel: "Protect Your Brand",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Your brand is your most visible business asset. Counterfeit products, unauthorized distributors, fake online profiles, and brand impersonation can severely damage your reputation, customer trust, and revenue. Our brand protection services provide active investigation and monitoring to identify and stop these threats.",
      "We conduct market surveys, online brand monitoring, purchase testing of suspected counterfeits, and supply chain investigations to identify unauthorized use of your brand. We then gather evidence to support legal action or enforcement operations.",
      "Our brand protection team works with legal counsel, enforcement agencies, and online platforms to remove infringing content, shut down counterfeit operations, and pursue legal remedies against brand abusers.",
      "From luxury goods and pharmaceutical brands to technology companies and FMCG organizations, our brand protection services are trusted by businesses across industries to preserve brand integrity and market position.",
    ],
    serviceIncludes: [
      "Counterfeit product market investigation",
      "Online brand impersonation monitoring",
      "Unauthorized distributor identification",
      "Purchase testing and sample evidence gathering",
      "Enforcement coordination support",
      "Legal-grade brand abuse documentation",
    ],
    idealFor: [
      "Brands facing counterfeit product operations",
      "Companies with online brand impersonation issues",
      "Organizations dealing with unauthorized distributors",
      "Legal teams requiring investigation support for brand cases",
    ],
    reporting: [
      "Brand abuse investigation report",
      "Counterfeit evidence documentation",
      "Market intelligence and threat summary",
    ],
    trustPoints: [
      "Active market and online monitoring",
      "Evidence suitable for legal and enforcement action",
      "Coordination with legal counsel and agencies",
      "Trusted across industries in India",
    ],
  },
  {
    slug: "risk-advisory",
    parentSlug: "risk-management",
    navLabel: "Risk Advisory",
    heroTitle: "Risk Advisory",
    heroSubtitle:
      "Expert risk advisory services to identify, assess, and mitigate threats to your business and personal security.",
    ctaLabel: "Request a Risk Assessment",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Understanding and managing risk is fundamental to protecting your business, assets, and people. Our risk advisory services combine investigative intelligence, security expertise, and strategic insight to help you identify threats before they materialize.",
      "We conduct comprehensive risk assessments covering physical security, personnel risk, digital threats, supply chain vulnerabilities, geopolitical factors, and reputational risks. Our findings are presented with actionable recommendations tailored to your organization's specific context.",
      "Our risk advisors work with senior leadership, security teams, and legal counsel to develop risk mitigation strategies that are practical, proportionate, and effective. From pre-investment risk assessment to ongoing threat monitoring, we provide end-to-end advisory support.",
      "Whether you are entering a new market, managing a high-risk operation, or seeking to strengthen your organizational resilience, our risk advisory services provide the intelligence and guidance needed to make confident, informed decisions.",
    ],
    serviceIncludes: [
      "Comprehensive organizational risk assessment",
      "Physical security threat analysis",
      "Personnel and insider threat evaluation",
      "Digital and cyber risk advisory",
      "Supply chain risk assessment",
      "Risk mitigation strategy development",
    ],
    idealFor: [
      "Organizations entering new markets or operations",
      "Leadership teams reviewing organizational security posture",
      "Companies managing complex supply chain risks",
      "Investors requiring pre-investment risk intelligence",
    ],
    reporting: [
      "Comprehensive risk assessment report",
      "Risk matrix with prioritized threat categories",
      "Mitigation strategy and action plan",
    ],
    trustPoints: [
      "Holistic multi-domain risk coverage",
      "Actionable and practical recommendations",
      "Experienced security and intelligence advisors",
      "Aligned with business strategy and objectives",
    ],
  },
  {
    slug: "business-continuity-bcms",
    parentSlug: "risk-management",
    navLabel: "Business Continuity (BCMS)",
    heroTitle: "Business Continuity (BCMS)",
    heroSubtitle:
      "Ensure your organization can withstand disruptions with robust business continuity management and intelligence support.",
    ctaLabel: "Review Your Business Continuity Plan",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Business disruptions — whether caused by security incidents, fraud, natural events, or operational failures — can severely impact organizational performance and reputation. Our Business Continuity Management System (BCMS) support services help organizations prepare for, respond to, and recover from disruptive events.",
      "We provide investigative support and intelligence services that underpin effective business continuity planning. This includes threat identification, supply chain risk analysis, incident investigation, insider threat detection, and operational resilience assessment.",
      "Our advisors work alongside your BCMS and operational teams to identify gaps in continuity planning, enrich risk registers with verified intelligence, and provide early warning of developing threats that could impact operational continuity.",
      "From pre-incident planning to post-incident investigation and lessons learned, our BCMS support services ensure your organization is both prepared for disruption and capable of rapid, evidence-informed recovery.",
    ],
    serviceIncludes: [
      "Operational threat and disruption risk identification",
      "Supply chain vulnerability assessment",
      "Insider threat and personnel risk analysis",
      "Incident investigation support",
      "Business continuity plan intelligence enrichment",
      "Post-incident review and lessons learned",
    ],
    idealFor: [
      "Organizations implementing or reviewing BCMS frameworks",
      "Businesses with complex operational or supply chain dependencies",
      "Companies seeking to strengthen organizational resilience",
      "Management teams preparing for regulatory BCMS compliance",
    ],
    reporting: [
      "Operational risk and threat intelligence report",
      "BCMS gap analysis and enrichment summary",
      "Post-incident investigation findings",
    ],
    trustPoints: [
      "Integrated investigative and advisory support",
      "Aligned with business continuity best practices",
      "Pre-incident and post-incident capability",
      "Strengthens organizational resilience",
    ],
  },
  {
    slug: "forensic-investigation",
    parentSlug: "risk-management",
    navLabel: "Forensic Investigation",
    heroTitle: "Forensic Investigation",
    heroSubtitle:
      "Expert forensic investigation services delivering evidence-grade findings for legal, corporate, and regulatory proceedings.",
    ctaLabel: "Request Forensic Support",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Forensic investigation applies scientific and analytical methods to uncover facts and gather evidence that can withstand scrutiny in legal, regulatory, and corporate proceedings. Our forensic investigation services support fraud investigations, dispute resolution, employment cases, and compliance inquiries.",
      "Our forensic experts conduct digital forensics, financial forensics, document examination, and physical evidence analysis. We work with legal teams and compliance officers to ensure all forensic findings are documented to evidentiary standards.",
      "We handle a wide range of forensic cases including cyber incident response, email and device forensics, financial statement fraud analysis, forged document detection, and evidence preservation for litigation.",
      "Our forensic investigation reports are structured to meet the requirements of Indian courts, regulatory bodies, and international arbitration tribunals, ensuring the evidence we produce is both credible and actionable.",
    ],
    serviceIncludes: [
      "Digital device and email forensics",
      "Financial statement fraud analysis",
      "Document authenticity examination",
      "Cyber incident forensic response",
      "Evidence preservation and chain of custody management",
      "Expert witness support",
    ],
    idealFor: [
      "Legal teams requiring forensic evidence for litigation",
      "Organizations investigating fraud or misconduct",
      "Regulatory compliance and audit teams",
      "Companies managing cyber incidents or data breaches",
    ],
    reporting: [
      "Forensic investigation report to evidentiary standards",
      "Chain of custody documentation",
      "Expert witness statement support",
    ],
    trustPoints: [
      "Evidence-grade forensic methodology",
      "Court and tribunal admissible findings",
      "Scientifically rigorous analysis",
      "Experienced forensic investigation specialists",
    ],
  },

  // ── SURVEILLANCE ───────────────────────────────────────────────────────────
  {
    slug: "covid-monitoring",
    parentSlug: "surveillance-shadowing",
    navLabel: "Covid Monitoring",
    heroTitle: "Covid Monitoring",
    heroSubtitle:
      "Specialized monitoring services to verify compliance with health protocols and workplace safety standards.",
    ctaLabel: "Request Monitoring Support",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Ensuring compliance with health and safety protocols remains important for operational environments. Our Covid monitoring and health protocol compliance verification services help organizations confirm that safety standards are being followed across their premises and field operations.",
      "Our operatives conduct discreet on-site observations to verify whether employees, vendors, and visitors are adhering to defined health and safety protocols. All monitoring is conducted legally and ethically within authorized organizational environments.",
      "We provide detailed compliance observation reports that help management identify non-compliance areas, take corrective action, and maintain a safe working environment for all stakeholders.",
      "Our monitoring services are also applicable to broader occupational health compliance verification, workplace safety protocol enforcement, and field team compliance checks across multiple locations.",
    ],
    serviceIncludes: [
      "On-site health protocol compliance observation",
      "Covert safety standard verification",
      "Multi-site compliance monitoring",
      "Employee and visitor protocol adherence documentation",
      "Non-compliance area reporting",
      "Management compliance briefing support",
    ],
    idealFor: [
      "Organizations with health and safety compliance requirements",
      "Businesses managing multi-site operations",
      "Companies needing independent protocol verification",
      "Management seeking objective compliance intelligence",
    ],
    reporting: [
      "Site compliance observation report",
      "Non-compliance findings and risk areas",
      "Recommendations for corrective action",
    ],
    trustPoints: [
      "Ethical and legally authorized monitoring",
      "Objective and independent observation",
      "Multi-site capability",
      "Supports safer working environments",
    ],
  },
  {
    slug: "employee-surveillance",
    parentSlug: "surveillance-shadowing",
    navLabel: "Employee Surveillance",
    heroTitle: "Employee Surveillance",
    heroSubtitle:
      "Professional and legally compliant employee monitoring services to protect your organization from internal risk.",
    ctaLabel: "Get Employee Surveillance Support",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Employee-related risks — including fraud, theft, policy violations, and misconduct — can significantly impact a business's financial health and operating culture. Our legally compliant employee surveillance services help employers identify and document concerning behaviour within the bounds of employment law.",
      "Our investigators monitor employees suspected of time fraud, unauthorized information disclosure, workplace theft, kickbacks, and other forms of misconduct. All surveillance is designed to respect privacy rights while gathering actionable evidence.",
      "We operate across a range of employee surveillance activities including field surveillance of off-site employees, undercover monitoring within premises, digital activity monitoring (where legally authorized), and workplace behaviour observation.",
      "Following each assignment, we provide structured evidence reports that are suitable for use in internal disciplinary processes, employment tribunal cases, or law enforcement referrals — all handled with confidentiality and professionalism.",
    ],
    serviceIncludes: [
      "Field surveillance of off-site employees",
      "Covert workplace behaviour monitoring",
      "Time fraud and attendance verification",
      "Kickback and bribery observation",
      "Policy violation documentation",
      "Disciplinary proceedings evidence support",
    ],
    idealFor: [
      "Employers with suspected staff misconduct",
      "HR teams requiring evidence for disciplinary action",
      "Organizations dealing with serial policy violations",
      "Companies experiencing suspected employee theft or fraud",
    ],
    reporting: [
      "Structured employee surveillance report",
      "Photo, video, and written evidence documentation",
      "Findings prepared for HR and legal proceedings",
    ],
    trustPoints: [
      "Legally compliant monitoring methods",
      "Respectful of employee privacy rights",
      "Evidence-grade documentation",
      "Experienced corporate investigators",
    ],
  },
  {
    slug: "matrimonial-surveillance",
    parentSlug: "surveillance-shadowing",
    navLabel: "Matrimonial Surveillance",
    heroTitle: "Matrimonial Surveillance",
    heroSubtitle:
      "Discreet matrimonial surveillance to uncover the truth in sensitive marital situations with dignity and professionalism.",
    ctaLabel: "Request Matrimonial Surveillance",
    image:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Matrimonial surveillance is a sensitive but often essential service for individuals who have genuine concerns about their spouse's activities, fidelity, or behaviour. Our professional investigators handle every matrimonial surveillance case with complete discretion, dignity, and respect.",
      "Our operatives conduct covert field surveillance to monitor and document spousal activities, locations, associations, and behaviour. All surveillance is conducted within legal boundaries to ensure findings are admissible and defensible.",
      "Whether you need surveillance for pre-divorce evidence gathering, suspicion of infidelity, or concerns about a spouse's financial activities, our team provides the factual documentation you need to make informed decisions about your situation.",
      "We are sensitive to the deeply personal nature of matrimonial cases and ensure that all client interactions and investigation details are handled with the highest level of confidentiality and professionalism.",
    ],
    serviceIncludes: [
      "Covert spousal activity surveillance",
      "Location and movement monitoring",
      "Association and contact observation",
      "Video and photographic evidence gathering",
      "Financial activity observation support",
      "Pre-divorce evidence documentation",
    ],
    idealFor: [
      "Individuals with concerns about spousal behaviour",
      "Clients preparing for divorce or legal separation",
      "Cases requiring evidence of infidelity or misconduct",
      "Situations needing fact-based clarity in marital matters",
    ],
    reporting: [
      "Discreet matrimonial surveillance report",
      "Video and photographic evidence documentation",
      "Activity timeline and location summary",
    ],
    trustPoints: [
      "Handled with sensitivity and dignity",
      "Legally compliant surveillance methods",
      "Complete client confidentiality",
      "Experienced matrimonial investigation specialists",
    ],
  },
  {
    slug: "fraud-investigation-monitoring",
    parentSlug: "surveillance-shadowing",
    navLabel: "Fraud Investigation Monitoring",
    heroTitle: "Fraud Investigation Monitoring",
    heroSubtitle:
      "Surveillance-led fraud monitoring services to track, document, and expose fraudulent activities in real time.",
    ctaLabel: "Start a Fraud Monitoring Case",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Fraud monitoring through active surveillance is one of the most effective ways to detect, document, and expose ongoing fraudulent activities. Our investigators provide real-time field monitoring operations focused on tracking fraud suspects and documenting their activities.",
      "We monitor individuals and groups suspected of insurance fraud, financial fraud, vendor fraud, worker's compensation fraud, and other forms of deceptive activity. Surveillance is conducted using a combination of static and mobile observation techniques, supported by photo and video documentation.",
      "Our fraud monitoring operations are carefully planned and legally conducted to ensure all evidence gathered meets the required standards for use in civil proceedings, criminal referrals, or insurance investigations.",
      "We provide ongoing surveillance coverage across multiple days and locations when needed, ensuring that fraud patterns, associations, and activities are thoroughly documented and presented in a structured investigation report.",
    ],
    serviceIncludes: [
      "Field surveillance of fraud suspects",
      "Static and mobile monitoring operations",
      "Photo and video evidence collection",
      "Insurance fraud field investigation",
      "Worker's compensation fraud detection",
      "Multi-day and multi-location coverage",
    ],
    idealFor: [
      "Insurance companies investigating suspected fraud claims",
      "Legal teams requiring fraud surveillance evidence",
      "Businesses monitoring suspected vendor or employee fraud",
      "Organizations needing real-time fraud activity documentation",
    ],
    reporting: [
      "Structured fraud monitoring surveillance report",
      "Photo and video evidence compilation",
      "Activity log and timeline documentation",
    ],
    trustPoints: [
      "Real-time fraud detection capability",
      "Legally compliant surveillance operations",
      "Evidence suitable for legal and insurance proceedings",
      "Experienced fraud investigation operatives",
    ],
  },
  {
    slug: "physical-surveillance",
    parentSlug: "surveillance-shadowing",
    navLabel: "Physical Surveillance",
    heroTitle: "Physical Surveillance",
    heroSubtitle:
      "Expert physical surveillance services delivering real-time intelligence and documented evidence for any investigation.",
    ctaLabel: "Request Physical Surveillance",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80",
    content: [
      "Physical surveillance is the foundation of effective investigative intelligence. Our professional operatives conduct expert ground-level surveillance to monitor and document the activities, movements, and associations of individuals, groups, or locations in real time.",
      "Using a combination of foot surveillance, mobile surveillance, static observation posts, and discreet vehicle operations, our team gathers firsthand intelligence and builds a detailed, evidence-backed picture of the subject's activities.",
      "Our physical surveillance services are used across a wide range of case types including personal investigations, corporate investigations, fraud cases, legal support operations, and security risk assessments. All operations are planned and conducted within the bounds of the law.",
      "We provide regular real-time updates during active surveillance operations and a comprehensive documented report upon case conclusion, including all photo, video, and written evidence gathered throughout the assignment.",
    ],
    serviceIncludes: [
      "Foot and mobile surveillance operations",
      "Static observation post management",
      "Vehicle-based covert surveillance",
      "Real-time activity monitoring and reporting",
      "Subject identification and movement mapping",
      "Photo and video evidence gathering",
    ],
    idealFor: [
      "Any investigation requiring real-time physical intelligence",
      "Legal cases needing documented behavioral evidence",
      "Corporate investigations with mobile subjects",
      "Personal cases requiring discreet external monitoring",
    ],
    reporting: [
      "Real-time surveillance updates to client",
      "Comprehensive end-of-operation report",
      "Full photo, video, and written evidence package",
    ],
    trustPoints: [
      "Experienced field operatives",
      "Multi-mode surveillance capability",
      "Legally compliant operations",
      "Accurate, evidence-grade intelligence",
    ],
  },
];

// ── Lookup maps ────────────────────────────────────────────────────────────────
export const subServiceMap = Object.fromEntries(
  subServices.map((s) => [s.slug, s])
) as Record<string, SubService>;

export const subServicesByParent = subServices.reduce<
  Record<string, SubService[]>
>((acc, s) => {
  if (!acc[s.parentSlug]) acc[s.parentSlug] = [];
  acc[s.parentSlug].push(s);
  return acc;
}, {});

// ── NEW: Risk Management parent entry ─────────────────────────────────────────
// We add a virtual parent for Risk Management that doesn't exist in serviceDetails yet
export const RISK_MANAGEMENT_SLUG = "risk-management";
