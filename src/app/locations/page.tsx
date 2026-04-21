import PageHero from "@/components/shared/PageHero";
import LocationSlider from "@/components/locations/LocationSlider";
import IndiaMap from "@/components/locations/IndiaMap";
import PillCloud from "@/components/locations/PillCloud";
import PageTransition from "@/components/ui/PageTransition";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Locations | H S Detectives",
  description: "Operating from Mumbai HQ across the Indian subcontinent with a discreet, highly trained network.",
};

const locationsPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.hsdetectives.com/#organization",
  name: "H S Detectives",
  image: "https://www.hsdetectives.com/certification-hero.png",
  logo: "https://www.hsdetectives.com/HS-Logo.webp",
  foundingDate: "2011",
  description:
    "ISO Certified private investigative agency in India specializing in TSCM, corporate intelligence, and high-end surveillance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Crystal Plaza, A/514, New Link Rd, Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400053",
    addressCountry: "IN",
  },
  telephone: "+91 99304 03115",
  url: "https://www.hsdetectives.com/hs-detectives-locations",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Thane" },
    { "@type": "City", name: "Navi Mumbai" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Goa" },
  ],
  knowsAbout: [
    "Technical Surveillance Counter-Measures (TSCM)",
    "Corporate Risk Management",
    "Cyber Security Audits",
    "Private Investigations",
    "Asset Tracing",
    "Matrimonial Checking",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "ISO Certified Private Investigative Agency",
    credentialCategory: "Professional License",
  },
  sameAs: [
    "https://tscm.in/",
    "https://www.facebook.com/hsdetectives/",
    "https://in.linkedin.com/company/hsdetectives",
    "https://www.instagram.com/hsdetectives/",
    "https://www.youtube.com/@hsdetectives7128",
    "https://x.com/hsdetectives",
  ],
  priceRange: "$$",
};

const locationsSpeakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "H S Detectives Location Network",
  url: "https://www.hsdetectives.com/hs-detectives-locations",
  description: "A Pan-India presence with 13 offices to ensure swift, localized intelligence gathering.",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".voice-summary", ".expert-highlight"],
  },
  publisher: {
    "@type": "Organization",
    name: "H S Detectives",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hsdetectives.com/HS-Logo.webp",
    },
  },
};

export default function LocationsPage() {
  return (
    <>
      <GoogleTagHead />
      <script
        id="locations-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSpeakableSchema) }}
      />
      <script
        id="locations-professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsPageSchema) }}
      />
      <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Our Network" 
          subtitle="A Pan-India presence to ensure swift, localized intelligence gathering no matter where the case leads."
          image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Locations", href: "/hs-detectives-locations" } ]}
        />
        <LocationSlider />
        <IndiaMap />
        <PillCloud />
      </main>
    </PageTransition>
    </>
  );
}

