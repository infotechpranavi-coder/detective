import PageHero from "@/components/shared/PageHero";
import PackageCards from "@/components/packages/PackageCards";
import FAQSection from "@/components/packages/FAQSection";
import PackageCta from "@/components/packages/PackageCta";
import PageTransition from "@/components/ui/PageTransition";
import { createPageMetadata } from "@/lib/pageSeo";

export const metadata = createPageMetadata({
  title: "Hs Detectives Investigation Packages - HS Detectives",
  description:
    "Professional detective investigation packages by HS Detectives. Get confidential, reliable, and result-oriented services for personal, corporate, and legal investigations.",
  keywords: [
    "investigation packages cost Mumbai",
    "background verification services",
    "corporate investigation services",
    "personal investigation services",
    "confidential investigation services",
    "post matrimonial investigation",
    "fraud investigation services",
    "detective agency packages",
    "professional investigation services",
  ],
  canonical: "https://www.hsdetectives.com/packages-detectives-mumbai",
});

export default function PackagesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero 
          title="Investigation Packages" 
          subtitle="Transparent operational costs for our standard field services. Custom intelligence gathering available upon consultation."
          image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Packages", href: "/packages-detectives-mumbai" } ]}
        />
        <PackageCards />
        <FAQSection />
        <PackageCta />
      </main>
    </PageTransition>
  );
}
