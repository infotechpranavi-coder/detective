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
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

const LOCATION_PAGE_SEO: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
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

export default async function LocationDetailsPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = GET_LOCATION_BY_SLUG(slug);

  if (!location) {
    notFound();
  }

  const { name: locationName, intro, description, highlights, extraSections } = location;
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Detective Agency in ${locationName} - HS Detectives`,
    image: `https://www.hsdetectives.com/${location.slug}.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Crystal Plaza, A/514, New Link Rd, Veera Desai Industrial Estate, Andheri West",
      addressLocality: "Mumbai",
      addressRegion: "MH",
      postalCode: "400053",
      addressCountry: "IN",
    },
    telephone: "+91 99304 03115",
    url: `https://www.hsdetectives.com${getLocationPath(location.slug)}`,
    areaServed: locationName,
    priceRange: "$$",
  };

  return (
    <>
      <GoogleTagHead />
      <script
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
            { label: "Locations", href: "/locations-detectives-agency-in-mumbai" },
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

            </div>
          </div>
        </section>

      </main>
    </PageTransition>
    </>
  );
}

