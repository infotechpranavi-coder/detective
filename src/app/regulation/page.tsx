import PageHero from "@/components/shared/PageHero";
import RegulationContent from "@/components/regulation/RegulationContent";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Government Regulation | H S Detectives",
  description: "Learn about the strict laws and government regulations we adhere to, ensuring 100% compliance in all our private investigation and TSCM operations.",
};

export default function RegulationPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero
          title="Govt. Regulation"
          subtitle="Committed to operational excellence and full compliance with local, national, and international laws, and private investigation regulations."
          image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
          breadcrumbs={[{ label: "Regulation", href: "/regulation" }]}
        />
        <RegulationContent />
      </main>
    </PageTransition>
  );
}
