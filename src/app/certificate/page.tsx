import PageHero from "@/components/shared/PageHero";
import CertificateShowcase from "@/components/certificate/CertificateShowcase";
import PageTransition from "@/components/ui/PageTransition";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Professional Certifications & Licenses | H S Detectives",
  description: "View our credentials, government licenses, and global accreditations. Verified private investigators with recognized security standards in Mumbai and India.",
  keywords: "Private Detective License India, Certified Investigators, ISO Certified Detective Agency, H S Detectives Credentials",
};


export default function CertificatePage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero
          title="Certificates & Accreditations"
          subtitle="Our elite professional certifications, government licenses, and industry accreditations that validate our global commitment to uncompromising security standards."
          image="/certification-hero.png"
          breadcrumbs={[{ label: "Certificates", href: "/certificate-of-hs-detectives" }]}
        />
        <CertificateShowcase />
      </main>
    </PageTransition>
    </>
    </>
  );
}
