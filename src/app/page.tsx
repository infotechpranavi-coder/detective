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

export const metadata: Metadata = {
  title: "H S Detectives | Mumbai's Leading Investigation Agency",
  description:
    "Professional private investigation in Mumbai specializing in surveillance, corporate fraud, and background checks. Secure the truth today with H S Detectives.",
};

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
