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
  name: "Detective Agency in Mumbai - HS Detectives",
  image: "https://www.hsdetectives.com/mumbai.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Crystal Plaza, A/514, New Link Rd, Veera Desai Industrial Estate, Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "MH",
    postalCode: "400053",
    addressCountry: "IN",
  },
  telephone: "+91 99304 03115",
  url: "https://www.hsdetectives.com/locations-detectives-agency-in-mumbai",
  areaServed: "Mumbai",
  priceRange: "$$",
};

export default function LocationsPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsPageSchema) }}
      />
      <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Our Network" 
          subtitle="A Pan-India presence to ensure swift, localized intelligence gathering no matter where the case leads."
          image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Locations", href: "/locations-detectives-agency-in-mumbai" } ]}
        />
        <LocationSlider />
        <IndiaMap />
        <PillCloud />
      </main>
    </PageTransition>
    </>
    </>
  );
}
