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

const homeSpeakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "HS Detectives - India's Premier Private Investigation Agency",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".voice-summary", ".expert-highlight"],
  },
  url: "https://www.hsdetectives.com/",
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.hsdetectives.com/#organization",
  name: "H S Detectives",
  url: "https://www.hsdetectives.com/",
  logo: "https://www.hsdetectives.com/HS-Logo.webp",
  image: "https://www.hsdetectives.com/certification-hero.png",
  telephone: "+91 99304 03115",
  email: "info@hsdetectives.com",
  priceRange: "$$",
  foundingDate: "2011",
  description:
    "ISO Certified private investigative agency in India specializing in TSCM, corporate intelligence, and high-end surveillance with strict confidentiality.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Crystal Plaza, A/514, New Link Rd, Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400053",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+91 99304 03115",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+91 98670 30564",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+91 91525 31394",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Thane" },
    { "@type": "City", name: "Navi Mumbai" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Goa" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Bhopal" },
    { "@type": "City", name: "Chandigarh" },
  ],
  knowsAbout: [
    "Technical Surveillance Counter-Measures (TSCM)",
    "Corporate Risk Management",
    "Cyber Security Audits",
    "Private Investigations",
    "Asset Tracing",
    "Matrimonial Checking",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO Certified Private Investigative Agency",
      credentialCategory: "Professional License",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "APDI Membership (Association of Private Detectives and Investigators)",
      credentialCategory: "Professional Membership",
    },
  ],
  sameAs: [
    "https://tscm.in/",
    "https://www.facebook.com/hsdetectives/",
    "https://www.instagram.com/hsdetectives/",
    "https://in.linkedin.com/company/hsdetectives",
    "https://www.youtube.com/@hsdetectives7128",
    "https://x.com/hsdetectives",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "163",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: "Corporate Client",
      datePublished: "2026-03-20",
      reviewBody:
        "Professional and discreet service. Highly recommended for corporate TSCM assignments in Mumbai.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
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
      <script
        id="home-professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <script
        id="home-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSpeakableSchema),
        }}
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
  );
}
