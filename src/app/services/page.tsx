import PageHero from "@/components/shared/PageHero";
import CategoryIntro from "@/components/services/CategoryIntro";
import ServicesGrid from "@/components/services/ServicesGrid";
import Timeline from "@/components/services/Timeline";
import Testimonials from "@/components/home/Testimonials";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Services | H S Detectives",
  description: "Comprehensive private investigation services for corporate and personal matters.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Investigation Capabilities" 
          subtitle="Precision surveillance, digital forensics, and rigorous background verification tailored to uncover the facts you seek."
          image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Services", href: "/services" } ]}
        />
        <CategoryIntro />
        <ServicesGrid />
        <Timeline />
        {/* Reusing the Testimonials Component Here as requested */}
        <Testimonials />
      </main>
    </PageTransition>
  );
}
