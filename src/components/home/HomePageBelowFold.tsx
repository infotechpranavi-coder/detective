"use client";

import dynamic from "next/dynamic";

/**
 * Homepage sections after the Hero are code-split here.
 * Sections that are animation-heavy / carousels / third-party widgets use `ssr: false`
 * so their JS is not executed during server render — smaller HTML and faster hydration.
 * `AboutPreview` stays SSR-capable via default dynamic behavior so prose stays in HTML for SEO.
 */
const Marquee = dynamic(() => import("@/components/shared/Marquee"), { ssr: false });
const AboutPreview = dynamic(() => import("@/components/home/AboutPreview"), {
  loading: () => <section className="border-t-2 border-black bg-white py-24" aria-hidden="true" />,
});
const ServicesSlider = dynamic(() => import("@/components/home/ServicesSlider"), {
  ssr: false,
  loading: () => <section className="border-t-2 border-black bg-white py-24" aria-hidden="true" />,
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  ssr: false,
  loading: () => <section className="bg-black py-32" aria-hidden="true" />,
});
const StatsBand = dynamic(() => import("@/components/home/StatsBand"), {
  ssr: false,
  loading: () => <section className="border-y-2 border-white bg-black py-20" aria-hidden="true" />,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  ssr: false,
  loading: () => <section className="border-t-2 border-black bg-white py-24" aria-hidden="true" />,
});
const CtaBanner = dynamic(() => import("@/components/home/CtaBanner"), {
  ssr: false,
  loading: () => <section className="border-t-2 border-black bg-black py-32" aria-hidden="true" />,
});

export default function HomePageBelowFold() {
  return (
    <>
      <Marquee />
      <AboutPreview />
      <ServicesSlider />
      <WhyChooseUs />
      <StatsBand />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
