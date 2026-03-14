 "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/shared/Marquee";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSlider from "@/components/home/ServicesSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsBand from "@/components/home/StatsBand";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import PageTransition from "@/components/ui/PageTransition";

const INTRO_SESSION_KEY = "hs-intro-seen";

export default function Home() {
  const router = useRouter();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const introSeen = window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";

    if (introSeen) {
      window.sessionStorage.removeItem(INTRO_SESSION_KEY);
      setCanRender(true);
    } else {
      router.replace("/logointor");
    }
  }, [router]);

  if (!canRender) {
    return null;
  }

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
