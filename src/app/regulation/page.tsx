import PageHero from "@/components/shared/PageHero";
import RegulationContent from "@/components/regulation/RegulationContent";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Government Regulation & Compliance | H S Detectives",
  description: "Explore our strict adherence to Indian laws (IPC, IT Act) and global investigation standards. 100% compliant and legally sound detective operations.",
  keywords: "Detective Regulation India, Investigation Laws IPC, IT Act Detective, Complaint Private Investigators",
};


export default function RegulationPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero
          title="Govt. Regulation"
          subtitle="Committed to operational excellence and full compliance with local, national, and international laws, and private investigation regulations."
          image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
          breadcrumbs={[{ label: "Regulation", href: "/regulation-Private-Detective-Agencies-Regulation-Bill" }]}
        />
        <RegulationContent />
      </main>
    </PageTransition>
  );
}
