import PageHero from "@/components/shared/PageHero";
import PackageCards from "@/components/packages/PackageCards";
import FAQSection from "@/components/packages/FAQSection";
import PackageCta from "@/components/packages/PackageCta";
import PageTransition from "@/components/ui/PageTransition";
import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Pre-Matrimonial Investigation Package",
  image: "https://www.hsdetectives.com/HS-Logo.webp",
  description: "Comprehensive background check including family, character, and financial verification.",
  brand: {
    "@type": "Brand",
    name: "HS Detectives",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.hsdetectives.com/investigation-packages-india",
    priceCurrency: "INR",
    price: "Contact for Quote",
    availability: "https://schema.org/InStock",
  },
};

const packagesSpeakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Investigation Packages | H S Detectives",
  url: "https://www.hsdetectives.com/investigation-packages-india",
  description: "Professional investigation packages for matrimonial, corporate, and personal cases. Transparent pricing and confidential services.",
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
  canonical: "https://www.hsdetectives.com/investigation-packages-india",
});

export default function PackagesPage() {
  return (
    <>
      <GoogleTagHead />
      <script
        id="packages-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesSpeakableSchema) }}
      />
      <script
        id="packages-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero 
          title="Investigation Packages" 
          subtitle="Transparent operational costs for our standard field services. Custom intelligence gathering available upon consultation."
          image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Packages", href: "/investigation-packages-india" } ]}
        />
        <PackageCards />
        <FAQSection />
        <PackageCta />
      </main>
    </PageTransition>
    </>
  );
}
