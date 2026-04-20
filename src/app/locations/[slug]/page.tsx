import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
import {
  GET_LOCATION_BY_SLUG,
  SERVICE_LOCATIONS,
  getLocationPath,
  getLocationRouteSlug,
} from "@/lib/locations";
import { CheckCircle2, ShieldCheck } from "lucide-react";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

const DEFAULT_KNOWS_ABOUT = [
  "Private Investigations",
  "Corporate Investigation",
  "Surveillance and Shadowing",
  "Background Verification",
];

const LOCATION_COORDINATES: Record<string, { latitude: number; longitude: number }> = {
  mumbai: { latitude: 19.076, longitude: 72.8777 },
  thane: { latitude: 19.2183, longitude: 72.9781 },
  "navi-mumbai": { latitude: 19.033, longitude: 73.0297 },
  pune: { latitude: 18.5204, longitude: 73.8567 },
  delhi: { latitude: 28.6139, longitude: 77.209 },
  hyderabad: { latitude: 17.385, longitude: 78.4867 },
  surat: { latitude: 21.1702, longitude: 72.8311 },
  ahmedabad: { latitude: 23.0225, longitude: 72.5714 },
  "west-bengal": { latitude: 23.5204, longitude: 87.3119 },
  bhopal: { latitude: 23.2599, longitude: 77.4126 },
  chandigarh: { latitude: 30.7333, longitude: 76.7794 },
  palghar: { latitude: 19.6967, longitude: 72.7699 },
  "mira-bhayandar": { latitude: 19.2952, longitude: 72.8544 },
  andheri: { latitude: 19.1136, longitude: 72.8697 },
  bandra: { latitude: 19.0596, longitude: 72.8295 },
  bkc: { latitude: 19.0679, longitude: 72.8695 },
  borivali: { latitude: 19.2307, longitude: 72.8567 },
  churchgate: { latitude: 18.935, longitude: 72.8276 },
  dadar: { latitude: 19.0178, longitude: 72.8478 },
  vashi: { latitude: 19.0771, longitude: 72.9986 },
  panvel: { latitude: 18.9894, longitude: 73.1175 },
  "mumbai-central": { latitude: 18.969, longitude: 72.8194 },
  powai: { latitude: 19.1187, longitude: 72.9059 },
  mulund: { latitude: 19.1726, longitude: 72.9567 },
  kurla: { latitude: 19.0726, longitude: 72.8826 },
  goregaon: { latitude: 19.1663, longitude: 72.8526 },
  malad: { latitude: 19.1864, longitude: 72.8493 },
  juhu: { latitude: 19.1075, longitude: 72.8263 },
  santacruz: { latitude: 19.0798, longitude: 72.8413 },
};

const LOCATION_ADDRESS_OVERRIDES: Record<
  string,
  { streetAddress: string; addressRegion: string; postalCode?: string }
> = {
  mumbai: {
    streetAddress: "Crystal Plaza, A/514, New Link Rd, Andheri West",
    addressRegion: "Maharashtra",
    postalCode: "400053",
  },
  thane: {
    streetAddress: "Shop No. 66, Ground Floor, Cinewonder Mall, Kapurbawdi, Thane West",
    addressRegion: "Maharashtra",
    postalCode: "400607",
  },
  "navi-mumbai": {
    streetAddress: "F-01 A/16, Haware Centurion Mall, Sect - 19, Nerul (E), Navi Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400706",
  },
  pune: {
    streetAddress: "Raw House No. 1, Elite Brookland, Baner - Balewadi Road, Baner",
    addressRegion: "Maharashtra",
    postalCode: "411045",
  },
  delhi: {
    streetAddress: "105, Shiva Rd, Pocket 14, Sector 8D, Rohini",
    addressRegion: "Delhi",
    postalCode: "110085",
  },
  hyderabad: {
    streetAddress: "14th Road, Fortune Enclave, Sri Ram Nagar Colony, Banjara Hills",
    addressRegion: "Telangana",
    postalCode: "500873",
  },
  surat: {
    streetAddress: "Shop No. 230, 2nd Floor, Punjan Plaza, Puna",
    addressRegion: "Gujarat",
    postalCode: "395010",
  },
  ahmedabad: {
    streetAddress: "412, Sumel Business Park 7, Opposite Soni Ni Chali BRTS Stop, Rakhial",
    addressRegion: "Gujarat",
    postalCode: "380023",
  },
  "west-bengal": {
    streetAddress: "3/22, Suhatta Mall, City Centre, P.S. Durgapur",
    addressRegion: "West Bengal",
    postalCode: "713216",
  },
  bhopal: {
    streetAddress: "Shop No. 3, Sabri Nagar, Rasla Khedi",
    addressRegion: "Madhya Pradesh",
    postalCode: "462038",
  },
  chandigarh: {
    streetAddress: "203-A, Second Floor, SCO 139-140, Madhya Marg, Sector 9-C",
    addressRegion: "Chandigarh",
    postalCode: "160009",
  },
};

const LOCATION_KNOWS_ABOUT_OVERRIDES: Record<string, string[]> = {
  pune: ["Matrimonial Checking", "Personal Surveillance", "Background Verification", "Asset Verification"],
  delhi: ["Corporate Investigation", "Fraud Investigation", "Due Diligence", "Asset Tracing"],
  hyderabad: ["Technical Surveillance Counter-Measures (TSCM)", "Corporate Investigation", "Risk Management"],
  mumbai: ["Technical Surveillance Counter-Measures (TSCM)", "Corporate Investigation", "Matrimonial Checking", "Surveillance and Shadowing"],
};

const REGION_BY_SLUG: Record<string, string> = {
  delhi: "Delhi",
  hyderabad: "Telangana",
  surat: "Gujarat",
  ahmedabad: "Gujarat",
  "west-bengal": "West Bengal",
  bhopal: "Madhya Pradesh",
  chandigarh: "Chandigarh",
};

const LANDMARKS_BY_SLUG: Record<string, string[]> = {
  mumbai: ["Andheri West Metro", "New Link Road", "Veera Desai Industrial Estate"],
  thane: ["Cinewonder Mall", "Kapurbawdi Junction", "Ghodbunder Road"],
  "navi-mumbai": ["Seawoods Railway Station", "Nerul (East)", "Haware Centurion Mall"],
  pune: ["Baner-Balewadi Road", "Balewadi High Street", "Pune IT Corridor"],
  delhi: ["Rohini Sector 8", "Shiva Road", "North Delhi Metro Connectivity"],
  hyderabad: ["Banjara Hills", "Fortune Enclave", "Sri Ram Nagar Colony"],
  surat: ["Punjan Plaza", "Puna-Kumbhariya BRTS Road", "Gita Nagar Junction"],
  ahmedabad: ["Sumel Business Park 7", "Soni Ni Chali BRTS Stop", "Rakhial Industrial Belt"],
  "west-bengal": ["Suhatta Mall", "City Centre Durgapur", "Durgapur Core Market Area"],
  bhopal: ["Sabri Nagar", "Rasla Khedi", "Bhopal City Access Corridors"],
  chandigarh: ["SCO 139-140", "Madhya Marg", "Sector 9-C Commercial Zone"],
};

const getNearbyLandmarks = (slug: string, city: string) =>
  LANDMARKS_BY_SLUG[slug] ?? [
    `${city} Railway Station Zone`,
    `${city} Main Business District`,
    `${city} Airport Connectivity Corridor`,
  ];

const LOCATION_PAGE_SEO: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  ahmedabad: {
    title: "Detective Agency in Ahmedabad - HS Detectives",
    description:
      "HS Detectives Mumbai provides confidential detective agency services in Ahmedabad for surveillance, background checks, matrimonial verification, and corporate investigations.",
    keywords: [
      "detective agency Ahmedabad",
      "private detective Ahmedabad",
      "investigation services Ahmedabad",
      "best detective agency Ahmedabad",
      "hire private investigator Ahmedabad",
      "surveillance services Ahmedabad",
      "background verification Ahmedabad",
      "corporate investigation Ahmedabad",
      "personal investigation Ahmedabad",
      "matrimonial investigation Ahmedabad",
      "private investigator near me Ahmedabad",
    ],
  },
  surat: {
    title: "Detective Agency in Surat - HS Detectives",
    description:
      "HS Detectives Mumbai offers reliable and discreet detective agency services in Surat for personal, matrimonial, surveillance, and corporate investigation needs.",
    keywords: [
      "detective agency Surat",
      "private detective Surat",
      "investigation services Surat",
      "best detective agency Surat",
      "hire private investigator Surat",
      "surveillance services Surat",
      "background verification Surat",
      "corporate investigation Surat",
      "personal investigation Surat",
      "matrimonial investigation Surat",
      "private investigator near me Surat",
    ],
  },
  "west-bengal": {
    title: "Detective Agency in West Bengal - HS Detectives",
    description:
      "HS Detectives Mumbai provides confidential detective agency services in West Bengal for surveillance, background checks, matrimonial verification, and corporate investigations.",
    keywords: [
      "detective agency West Bengal",
      "private detective West Bengal",
      "investigation services West Bengal",
      "best detective agency West Bengal",
      "hire private investigator West Bengal",
      "surveillance services West Bengal",
      "background verification West Bengal",
      "corporate investigation West Bengal",
      "personal investigation West Bengal",
      "matrimonial investigation West Bengal",
      "private investigator near me West Bengal",
    ],
  },
  hyderabad: {
    title: "Detective Agency in Hyderabad - HS Detectives",
    description:
      "Hs Detectives Mumbai Hire a trusted detective agency in Hyderabad for discreet, reliable, and result-driven investigation services with complete confidentiality.",
    keywords: [
      "detective agency Hyderabad",
      "private detective Hyderabad",
      "investigation services Hyderabad",
      "best detective agency Hyderabad",
      "hire private investigator Hyderabad",
      "surveillance services Hyderabad",
      "background verification Hyderabad",
      "corporate investigation Hyderabad",
      "matrimonial investigation Hyderabad",
    ],
  },
  pune: {
    title: "Detective Agency in Pune - HS Detectives",
    description:
      "HS Detectives Mumbai Professional detective agency in Pune offering confidential investigation, surveillance, and verification services for personal and corporate needs.",
    keywords: [
      "detective agency Pune",
      "private detective Pune",
      "investigation services Pune",
      "best detective agency Pune",
      "hire private investigator Pune",
      "surveillance services Pune",
      "background verification Pune",
      "corporate investigation Pune",
      "personal investigation Pune",
      "matrimonial investigation Pune",
      "private investigator near me Pune",
    ],
  },
  delhi: {
    title: "Detective Agency in Delhi - HS Detectives",
    description:
      "Looking for a detective agency in Delhi, HS Detectives Mumbai Get expert services in surveillance, background checks, and corporate investigations.",
    keywords: [
      "detective agency Delhi",
      "private detective Delhi",
      "investigation services Delhi",
      "best detective agency Delhi",
      "hire private investigator Delhi",
      "surveillance services Delhi",
      "background verification Delhi",
      "corporate investigation Delhi",
      "personal investigation Delhi",
      "matrimonial investigation Delhi",
      "private investigator near me Delhi",
    ],
  },
  bhopal: {
    title: "Detective Agency in Bhopal - HS Detectives",
    description:
      "HS Detectives offers confidential detective agency services in Bhopal for matrimonial, surveillance, personal, and corporate investigation requirements.",
    keywords: [
      "detective agency Bhopal",
      "private detective Bhopal",
      "investigation services Bhopal",
      "best detective agency Bhopal",
      "hire private investigator Bhopal",
      "surveillance services Bhopal",
      "background verification Bhopal",
      "corporate investigation Bhopal",
      "personal investigation Bhopal",
      "matrimonial investigation Bhopal",
      "private investigator near me Bhopal",
    ],
  },
  chandigarh: {
    title: "Detective Agency in Chandigarh - HS Detectives",
    description:
      "HS Detectives provides discreet and professional detective agency services in Chandigarh for personal, matrimonial, surveillance, and corporate cases.",
    keywords: [
      "detective agency Chandigarh",
      "private detective Chandigarh",
      "investigation services Chandigarh",
      "best detective agency Chandigarh",
      "hire private investigator Chandigarh",
      "surveillance services Chandigarh",
      "background verification Chandigarh",
      "corporate investigation Chandigarh",
      "personal investigation Chandigarh",
      "matrimonial investigation Chandigarh",
      "private investigator near me Chandigarh",
    ],
  },
  mumbai: {
    title: "Detective Agency in Mumbai - HS Detectives",
    description:
      "Hs Detective Mumbai detective agency in Mumbai offering confidential investigation, surveillance, and verification services for personal and corporate needs.",
    keywords: [
      "detective agency Mumbai",
      "private detective Mumbai",
      "investigation services Mumbai",
      "best detective agency Mumbai",
      "hire private investigator Mumbai",
      "surveillance services Mumbai",
      "background verification Mumbai",
      "corporate investigation Mumbai",
      "personal investigation Mumbai",
      "matrimonial investigation Mumbai",
      "private investigator near me Mumbai",
    ],
  },
  thane: {
    title: "Detective Agency in Thane - HS Detectives",
    description:
      "Connect with a reliable Thane-based detective agency for confidential investigations, background checks, and professional surveillance solutions.",
    keywords: [
      "detective agency thane",
      "private detective thane",
      "investigation services thane",
      "best detective agency thane",
      "hire private investigator thane",
      "surveillance services thane",
      "background verification thane",
      "corporate investigation thane",
      "personal investigation thane",
      "matrimonial investigation thane",
      "private investigator near me thane",
    ],
  },
  "navi-mumbai": {
    title: "Detective Agency in Navi Mumbai - HS Detectives",
    description:
      "Hs Detectives Mumbai Expert detective services in Navi Mumbai specializing in surveillance, fraud detection, and verification with complete privacy and professionalism.",
    keywords: [
      "detective agency Navi Mumbai",
      "private detective Navi Mumbai",
      "investigation services Navi Mumbai",
      "best detective agency Navi Mumbai",
      "hire private investigator Navi Mumbai",
      "surveillance services Navi Mumbai",
      "background verification Navi Mumbai",
      "corporate investigation Navi Mumbai",
      "personal investigation Navi Mumbai",
      "matrimonial investigation Navi Mumbai",
      "private investigator near me Navi Mumbai",
    ],
  },
  palghar: {
    title: "Detective Agency in Palghar - HS Detectives",
    description:
      "Hs Detectives Mumbai Professional Detective Agency in Palghar offering confidential investigation services including matrimonial, corporate, and surveillance cases. Trusted, discreet, and result-oriented solutions.",
    keywords: [
      "detective agency Palghar",
      "private detective Palghar",
      "investigation services Palghar",
      "best detective agency Palghar",
      "hire private investigator Palghar",
      "surveillance services Palghar",
      "background verification Palghar",
      "corporate investigation Palghar",
      "personal investigation Palghar",
      "matrimonial investigation Palghar",
      "private investigator near me Palghar",
    ],
  },
  "mira-bhayandar": {
    title: "Detective Agency in Mira Bhayandar - HS Detectives",
    description:
      "Hs Detectives Mumbai Detective Agency in Mira Bhayandar offering confidential investigation services including matrimonial, corporate, and surveillance cases. Trusted and discreet solutions.",
    keywords: [
      "detective agency Mira Bhayandar",
      "private detective Mira Bhayandar",
      "investigation services Mira Bhayandar",
      "best detective agency Mira Bhayandar",
      "hire private investigator Mira Bhayandar",
      "surveillance services Mira Bhayandar",
      "background verification Mira Bhayandar",
      "corporate investigation Mira Bhayandar",
      "personal investigation Mira Bhayandar",
      "matrimonial investigation Mira Bhayandar",
      "private investigator near me Mira Bhayandar",
    ],
  },
  andheri: {
    title: "Detective Agency in Andheri - HS Detectives",
    description:
      "Hs Detectives Mumbai Top Detective Agency in Andheri providing reliable and confidential investigation services including matrimonial, corporate, and surveillance cases. Trusted experts with proven results.",
    keywords: [
      "detective agency Andheri",
      "private detective Andheri",
      "investigation services Andheri",
      "best detective agency Andheri",
      "hire private investigator Andheri",
      "surveillance services Andheri",
      "background verification Andheri",
      "corporate investigation Andheri",
      "personal investigation Andheri",
      "matrimonial investigation Andheri",
      "private investigator near me Andheri",
    ],
  },
  bandra: {
    title: "Detective Agency in Bandra - HS Detectives",
    description:
      "Hs Detectives Mumbai Leading Detective Agency in Bandra offering professional and confidential investigation services including matrimonial, corporate, and surveillance cases. Accurate and trusted solutions.",
    keywords: [
      "detective agency Bandra",
      "private detective Bandra",
      "investigation services Bandra",
      "best detective agency Bandra",
      "hire private investigator Bandra",
      "surveillance services Bandra",
      "background verification Bandra",
      "corporate investigation Bandra",
      "personal investigation Bandra",
      "matrimonial investigation Bandra",
      "private investigator near me Bandra",
    ],
  },
  bkc: {
    title: "Detective Agency in BKC - HS Detectives",
    description:
      "Hs Detectives Mumbai Professional Detective Agency in BKC offering confidential investigation services for corporate, matrimonial, and surveillance cases. Trusted experts ensuring accurate and discreet results.",
    keywords: [
      "detective agency BKC",
      "private detective BKC",
      "investigation services BKC",
      "best detective agency BKC",
      "hire private investigator BKC",
      "surveillance services BKC",
      "background verification BKC",
      "corporate investigation BKC",
      "personal investigation BKC",
      "matrimonial investigation BKC",
      "private investigator near me BKC",
    ],
  },
  borivali: {
    title: "Detective Agency in Borivali - HS Detectives",
    description:
      "Hs Detectives Mumbai Trusted Detective Agency in Borivali offering professional and confidential investigation services including matrimonial, corporate, and surveillance cases. Accurate and discreet solutions.",
    keywords: [
      "detective agency Borivali",
      "private detective Borivali",
      "investigation services Borivali",
      "best detective agency Borivali",
      "hire private investigator Borivali",
      "surveillance services Borivali",
      "background verification Borivali",
      "corporate investigation Borivali",
      "personal investigation Borivali",
      "matrimonial investigation Borivali",
      "private investigator near me Borivali",
    ],
  },
  churchgate: {
    title: "Detective Agency in Churchgate - HS Detectives",
    description:
      "Hs Detectives Mumbai Searching for a reliable Detective Agency in Churchgate, Get expert private investigation services for personal and corporate matters with complete discretion and quick turnaround.",
    keywords: [
      "detective agency Churchgate",
      "private detective Churchgate",
      "investigation services Churchgate",
      "best detective agency Churchgate",
      "hire private investigator Churchgate",
      "surveillance services Churchgate",
      "background verification Churchgate",
      "corporate investigation Churchgate",
      "personal investigation Churchgate",
      "matrimonial investigation Churchgate",
      "private investigator near me Churchgate",
    ],
  },
  dadar: {
    title: "Detective Agency in Dadar - HS Detectives",
    description:
      "Hs Detectives Mumbai Reliable Detective Agency in Dadar offering confidential investigation services including matrimonial, corporate, and surveillance cases. Trusted professionals ensuring accurate results.",
    keywords: [
      "detective agency Dadar",
      "private detective Dadar",
      "investigation services Dadar",
      "best detective agency Dadar",
      "hire private investigator Dadar",
      "surveillance services Dadar",
      "background verification Dadar",
      "corporate investigation Dadar",
      "personal investigation Dadar",
      "matrimonial investigation Dadar",
      "private investigator near me Dadar",
    ],
  },
  vashi: {
    title: "Detective Agency in Vashi - HS Detectives",
    description:
      "Hs Detectives Mumbai Detective Agency in Vashi offering confidential investigation services including matrimonial, corporate, and surveillance cases. Trusted experts delivering accurate and discreet results.",
    keywords: [
      "detective agency Vashi",
      "private detective Vashi",
      "investigation services Vashi",
      "best detective agency Vashi",
      "hire private investigator Vashi",
      "surveillance services Vashi",
      "background verification Vashi",
      "corporate investigation Vashi",
      "personal investigation Vashi",
      "matrimonial investigation Vashi",
      "private investigator near me Vashi",
    ],
  },
  panvel: {
    title: "Detective Agency in Panvel - HS Detectives",
    description:
      "Hs Detectives Mumbai Detective Agency in Panvel offering professional and confidential investigation services including matrimonial, corporate, and surveillance cases. Accurate and discreet solutions.",
    keywords: [
      "detective agency Panvel",
      "private detective Panvel",
      "investigation services Panvel",
      "best detective agency Panvel",
      "hire private investigator Panvel",
      "surveillance services Panvel",
      "background verification Panvel",
      "corporate investigation Panvel",
      "personal investigation Panvel",
      "matrimonial investigation Panvel",
      "private investigator near me Panvel",
    ],
  },
  "mumbai-central": {
    title: "Detective Agency in Mumbai Central - HS Detectives",
    description:
      "Hs Detectives Mumbai Expert Detective Agency in Mumbai Central providing discreet and result-driven investigation services for personal and corporate cases. Specializing in surveillance, background checks, and matrimonial investigations with complete confidentiality.",
    keywords: [
      "detective agency Mumbai Central",
      "private detective Mumbai Central",
      "investigation services Mumbai Central",
      "best detective agency Mumbai Central",
      "hire private investigator Mumbai Central",
      "surveillance services Mumbai Central",
      "background verification Mumbai Central",
      "corporate investigation Mumbai Central",
      "personal investigation Mumbai Central",
      "matrimonial investigation Mumbai Central",
      "private investigator near me Mumbai Central",
    ],
  },
  powai: {
    title: "Detective Agency in Powai - HS Detectives",
    description:
      "Hs Detectives Mumbai Detective Agency in Powai offering discreet and professional investigation services for personal and corporate matters. Expertise in surveillance, background verification, and matrimonial cases with complete confidentiality.",
    keywords: [
      "detective agency Powai",
      "private detective Powai",
      "investigation services Powai",
      "best detective agency Powai",
      "hire private investigator Powai",
      "surveillance services Powai",
      "background verification Powai",
      "corporate investigation Powai",
      "personal investigation Powai",
      "matrimonial investigation Powai",
      "private investigator near me Powai",
    ],
  },
  mulund: {
    title: "Detective Agency in Mulund - HS Detectives",
    description:
      "Hs Detectives Mumbai Detective Agency in Mulund delivering confidential and result-oriented investigation services for personal and corporate cases. Experts in surveillance, background checks, and matrimonial investigations.",
    keywords: [
      "detective agency Mulund",
      "private detective Mulund",
      "investigation services Mulund",
      "best detective agency Mulund",
      "hire private investigator Mulund",
      "surveillance services Mulund",
      "background verification Mulund",
      "corporate investigation Mulund",
      "personal investigation Mulund",
      "matrimonial investigation Mulund",
      "private investigator near me Mulund",
    ],
  },
  kurla: {
    title: "Detective Agency in Kurla - HS Detectives",
    description:
      "Hs Detectives Mumbai Experienced Detective Agency in Kurla offering reliable and confidential investigation services for personal and corporate needs. Specializing in surveillance, background checks, and matrimonial investigations with accurate results.",
    keywords: [
      "detective agency Kurla",
      "private detective Kurla",
      "investigation services Kurla",
      "best detective agency Kurla",
      "hire private investigator Kurla",
      "surveillance services Kurla",
      "background verification Kurla",
      "corporate investigation Kurla",
      "personal investigation Kurla",
      "matrimonial investigation Kurla",
      "private investigator near me Kurla",
    ],
  },
  goregaon: {
    title: "Detective Agency in Goregaon - HS Detectives",
    description:
      "Hs Detectives Mumbai Detective Agency in Goregaon providing discreet and professional investigation services for personal and corporate cases. Specialized in surveillance, background verification, and matrimonial investigations with trusted results.",
    keywords: [
      "detective agency Goregaon",
      "private detective Goregaon",
      "investigation services Goregaon",
      "best detective agency Goregaon",
      "hire private investigator Goregaon",
      "surveillance services Goregaon",
      "background verification Goregaon",
      "corporate investigation Goregaon",
      "personal investigation Goregaon",
      "matrimonial investigation Goregaon",
      "private investigator near me Goregaon",
    ],
  },
  malad: {
    title: "Detective Agency in Malad - HS Detectives",
    description:
      "Hs Detectives Mumbai Top-rated Detective Agency in Malad specializing in matrimonial, corporate, and surveillance investigations with a focus on privacy and result-driven solutions.",
    keywords: [
      "detective agency Malad",
      "private detective Malad",
      "investigation services Malad",
      "best detective agency Malad",
      "hire private investigator Malad",
      "surveillance services Malad",
      "background verification Malad",
      "corporate investigation Malad",
      "personal investigation Malad",
      "matrimonial investigation Malad",
      "private investigator near me Malad",
    ],
  },
  juhu: {
    title: "Detective Agency in Juhu - HS Detectives",
    description:
      "Hs Detectives Mumbai Trusted Detective Agency in Juhu offering professional and discreet investigation services for personal and corporate cases, including surveillance and background verification.",
    keywords: [
      "detective agency Juhu",
      "private detective Juhu",
      "investigation services Juhu",
      "best detective agency Juhu",
      "hire private investigator Juhu",
      "surveillance services Juhu",
      "background verification Juhu",
      "corporate investigation Juhu",
      "personal investigation Juhu",
      "matrimonial investigation Juhu",
      "private investigator near me Juhu",
    ],
  },
  santacruz: {
    title: "Detective Agency in Santacruz - HS Detectives",
    description:
      "Hs Detectives Mumbai Detective Agency in Santacruz offering confidential investigation services for personal and corporate cases, including surveillance, background checks, and matrimonial investigations.",
    keywords: [
      "detective agency Santacruz",
      "private detective Santacruz",
      "investigation services Santacruz",
      "best detective agency Santacruz",
      "hire private investigator Santacruz",
      "surveillance services Santacruz",
      "background verification Santacruz",
      "corporate investigation Santacruz",
      "personal investigation Santacruz",
      "matrimonial investigation Santacruz",
      "private investigator near me Santacruz",
    ],
  },
};

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = GET_LOCATION_BY_SLUG(slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  const seo = LOCATION_PAGE_SEO[location.slug];
  const canonical = `https://www.hsdetectives.com${getLocationPath(location.slug)}`;

  if (seo) {
    return createPageMetadata({
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      canonical,
    });
  }

  return createPageMetadata({
    title: location.title,
    description: location.metaDescription,
    keywords: [`detective agency ${location.name}`, `private detective ${location.name}`],
    canonical,
  });
}

export async function generateStaticParams() {
  return SERVICE_LOCATIONS.map((location) => ({ slug: getLocationRouteSlug(location.slug) }));
}

const getStreetAddressFromExtraSections = (
  extraSections: (typeof SERVICE_LOCATIONS)[number]["extraSections"]
) => {
  const officeSection = extraSections?.find(
    (section) => /office address/i.test(section.title) && section.items && section.items.length > 0
  );

  if (!officeSection?.items) return undefined;
  return officeSection.items.join(", ");
};

export default async function LocationDetailsPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = GET_LOCATION_BY_SLUG(slug);

  if (!location) {
    notFound();
  }

  const { name: locationName, intro, description, highlights, extraSections } = location;
  const cityMapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${locationName}, India`
  )}`;
  const cityMapEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(
    `${locationName}, India`
  )}&output=embed`;
  const addressOverride = LOCATION_ADDRESS_OVERRIDES[location.slug];
  const streetAddress =
    addressOverride?.streetAddress ?? getStreetAddressFromExtraSections(extraSections);
  const addressRegion = addressOverride?.addressRegion ?? REGION_BY_SLUG[location.slug] ?? "Maharashtra";
  const postalCode = addressOverride?.postalCode;
  const coordinates = LOCATION_COORDINATES[location.slug];
  const knowsAbout = LOCATION_KNOWS_ABOUT_OVERRIDES[location.slug] ?? DEFAULT_KNOWS_ABOUT;
  const nearbyLandmarks = getNearbyLandmarks(location.slug, locationName);

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `HS Detectives ${locationName}`,
    "@id": `https://www.hsdetectives.com${getLocationPath(location.slug)}`,
    url: `https://www.hsdetectives.com${getLocationPath(location.slug)}`,
    image: "https://www.hsdetectives.com/HS-Logo.svg",
    telephone: "+91 99304 03115",
    priceRange: "$$",
    description: location.metaDescription,
    parentOrganization: {
      "@id": "https://www.hsdetectives.com/#organization",
    },
    address: {
      "@type": "PostalAddress",
      ...(streetAddress ? { streetAddress } : {}),
      addressLocality: locationName,
      addressRegion,
      ...(postalCode ? { postalCode } : {}),
      addressCountry: "IN",
    },
    ...(coordinates
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          },
        }
      : {}),
    areaServed: {
      "@type": "City",
      name: locationName,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/hsdetectives/",
      "https://www.instagram.com/hsdetectives/",
      "https://in.linkedin.com/company/hsdetectives",
      "https://x.com/hsdetectives",
      "https://www.youtube.com/@hsdetectives7128",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "163",
      bestRating: "5",
      worstRating: "1",
    },
    knowsAbout,
  };
  const locationSpeakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `H S Detectives ${locationName} Branch`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".voice-summary", ".expert-highlight"],
    },
    url: `https://www.hsdetectives.com${getLocationPath(location.slug)}`,
  };

  return (
    <>
      <GoogleTagHead />
      <script
        id={`location-speakable-schema-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSpeakableSchema) }}
      />
      <script
        id={`location-professional-service-schema-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero
          title={`${locationName} Investigations`}
          subtitle={intro}
          image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[
            { label: "Locations", href: "/hs-detectives-locations" },
            { label: locationName, href: getLocationPath(location.slug) },
          ]}
        />

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Main Content */}
            <div className="space-y-12">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl text-foreground uppercase tracking-wider mb-6">
                  Service Overview in {locationName}
                </h2>
                <p className="font-inter text-foreground/70 text-lg leading-relaxed mb-10">
                  {description}
                </p>

                <div className="bg-card border border-foreground/10 p-8 md:p-10 shadow-2xl">
                  <h3 className="font-playfair text-2xl text-accent uppercase tracking-widest mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6" />
                    Our Strengths
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    {highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-foreground/80 text-base leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {extraSections?.map((section, idx) => (
                <div key={idx} className="border-t border-foreground/10 pt-12">
                  <h3 className="font-playfair text-2xl text-foreground uppercase tracking-wide mb-6">
                    {section.title}
                  </h3>
                  {section.content && (
                    <p className="font-inter text-foreground/70 leading-relaxed mb-6">
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span className="font-inter text-foreground/70 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.list && (
                    <div className="grid grid-cols-1 gap-12">
                      {section.list.map((listItem, i) => (
                        <div key={i} className="space-y-4">
                          <h4 className="font-playfair text-xl text-accent/90 flex items-center gap-2 italic uppercase">
                            {listItem.title}
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                            {listItem.points.map((point, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm">
                                <div className="mt-2 h-1 w-1 rounded-full bg-accent/40 flex-shrink-0" />
                                <span className="font-inter text-foreground/60 leading-relaxed">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-foreground/10 pt-12">
                <h3 className="font-playfair text-2xl text-foreground uppercase tracking-wide mb-4">
                  Map Section
                </h3>
                <p className="font-inter text-foreground/70 leading-relaxed mb-6">
                  Open Google Maps for {locationName} to view city location details.
                </p>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-2xl">
                    <iframe
                      title={`${locationName} Google Map Preview`}
                      src={cityMapEmbedLink}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-[320px] w-full"
                    />
                  </div>

                  <div className="rounded-2xl border border-foreground/10 bg-card p-6 md:p-8 shadow-2xl">
                    <h4 className="font-playfair text-xl text-foreground uppercase tracking-wide mb-5">
                      City Wise Location
                    </h4>
                    <ul className="space-y-3 mb-8">
                      <li className="font-inter text-foreground/80 text-sm">
                        <span className="font-semibold text-foreground">City:</span> {locationName}
                      </li>
                      <li className="font-inter text-foreground/80 text-sm">
                        <span className="font-semibold text-foreground">Region:</span> India
                      </li>
                      <li className="font-inter text-foreground/80 text-sm">
                        <span className="font-semibold text-foreground">Service Area:</span> {locationName} and nearby areas
                      </li>
                    </ul>
                    <div className="mb-8">
                      <h5 className="mb-3 font-space text-[11px] uppercase tracking-[0.18em] text-accent">
                        Nearby Landmarks
                      </h5>
                      <ul className="space-y-2">
                        {nearbyLandmarks.map((landmark) => (
                          <li key={landmark} className="font-inter text-foreground/75 text-sm">
                            {landmark}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={cityMapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-space text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                    >
                      View {locationName} on Google Maps
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PageTransition>
    </>
  );
}


