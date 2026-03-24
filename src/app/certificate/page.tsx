import PageHero from "@/components/shared/PageHero";
import CertificateShowcase from "@/components/certificate/CertificateShowcase";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Certificates & Accreditations | H S Detectives",
  description: "Our certifications, licenses, and professional accreditations that validate our expertise and commitment to excellence.",
};

export default function CertificatePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero
          title="Certificates & Accreditations"
          subtitle="Our elite professional certifications, government licenses, and industry accreditations that validate our global commitment to uncompromising security standards."
          image="/certification-hero.png"
          breadcrumbs={[{ label: "Certificates", href: "/certificate" }]}
        />
        <CertificateShowcase />
      </main>
    </PageTransition>
  );
}
