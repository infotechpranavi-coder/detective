import PageHero from "@/components/shared/PageHero";
import PackageCards from "@/components/packages/PackageCards";
import FAQSection from "@/components/packages/FAQSection";
import PackageCta from "@/components/packages/PackageCta";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Packages | H S Detectives",
  description: "Transparent investigation packages and pricing for corporate and personal matters.",
};

export default function PackagesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Investigation Packages" 
          subtitle="Transparent operational costs for our standard field services. Custom intelligence gathering available upon consultation."
          image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Packages", href: "/packages" } ]}
        />
        <PackageCards />
        <FAQSection />
        <PackageCta />
      </main>
    </PageTransition>
  );
}
