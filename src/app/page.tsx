import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import PageTransition from "@/components/ui/PageTransition";
import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";

const Marquee = dynamic(() => import("@/components/shared/Marquee"));
const AboutPreview = dynamic(() => import("@/components/home/AboutPreview"));
const ServicesSlider = dynamic(() => import("@/components/home/ServicesSlider"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));
const StatsBand = dynamic(() => import("@/components/home/StatsBand"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const CtaBanner = dynamic(() => import("@/components/home/CtaBanner"));

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "HS Detectives",
      url: "https://www.hsdetectives.com",
      logo: "https://www.hsdetectives.com/logo.png",
      sameAs: [
        "https://www.facebook.com/hsdetectives",
        "https://www.instagram.com/hsdetectives",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 99304 03115",
        contactType: "Customer Support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "ProfessionalService",
      name: "HS Detectives",
      image: "https://www.hsdetectives.com/office.jpg",
      telephone: "+91 99304 03115",
      priceRange: "$$",
      areaServed: ["Mumbai", "Delhi", "Pune", "Hyderabad"],
      url: "https://www.hsdetectives.com",
    },
    {
      "@type": "WebSite",
      url: "https://www.hsdetectives.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.hsdetectives.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata = createPageMetadata({
  title: "Hs detective in Mumbai - HS Detectives",
  description:
    "HS detective services in Mumbai offering confidential investigations, surveillance, background checks, and corporate intelligence. Trusted, discreet, and result-oriented solutions.",
  keywords: [
    "HS detective in Mumbai",
    "private detective Mumbai",
    "best detective agency Mumbai",
    "confidential investigation services Mumbai",
    "personal investigation Mumbai",
    "corporate investigation Mumbai",
    "surveillance services Mumbai",
    "background verification Mumbai",
    "detective services Mumbai",
    "legal investigation services Mumbai",
    "top detective agency Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/",
});

export default function Home() {
  return (
    <>
      <GoogleTagHead />
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <PageTransition>
      <main className="min-h-screen bg-background">
        <Hero />
        <Marquee />
        <AboutPreview />
        <ServicesSlider />
        <WhyChooseUs />
        <StatsBand />
        <Testimonials />
        <CtaBanner />
      </main>
    </PageTransition>
    </>
    </>
  );
}
