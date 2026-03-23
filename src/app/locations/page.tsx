import PageHero from "@/components/shared/PageHero";
import LocationSlider from "@/components/locations/LocationSlider";
import IndiaMap from "@/components/locations/IndiaMap";
import PillCloud from "@/components/locations/PillCloud";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Locations | H S Detectives",
  description: "Operating from Mumbai HQ across the Indian subcontinent with a discreet, highly trained network.",
};

export default function LocationsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Our Network" 
          subtitle="A Pan-India presence to ensure swift, localized intelligence gathering no matter where the case leads."
          image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Locations", href: "/locations" } ]}
        />
        <LocationSlider />
        <IndiaMap />
        <PillCloud />
      </main>
    </PageTransition>
  );
}
