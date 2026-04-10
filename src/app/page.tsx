import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/shared/Marquee";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSlider from "@/components/home/ServicesSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsBand from "@/components/home/StatsBand";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import PageTransition from "@/components/ui/PageTransition";
import { createPageMetadata } from "@/lib/pageSeo";

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
  );
}
