"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/029/269/225/small_2x/gritty-detective-s-office-ai-generative-photo.jpg",
    badge: "India's Premier Detective Agency",
    title1: "Uncovering Truth With",
    titleHighlight: "Absolute Certainty",
    description:
      "Licensed professional investigators bringing clarity to complex personal and commercial cases since 2011. Confidentiality guaranteed.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=1440&q=60",
    badge: "Covert Surveillance Operations",
    title1: "Operating Within The",
    titleHighlight: "Shadows",
    description:
      "Deploying highly trained field operatives for discrete tracking, background verification, and gathering unshakeable evidence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1440&q=60",
    badge: "Forensics & Intelligence",
    title1: "Finding Truth Where",
    titleHighlight: "Others Fail",
    description:
      "From deep-dive corporate due diligence to complex matrimonial investigations. We leave no stone unturned in the pursuit of facts.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, []);

  const active = HERO_SLIDES[currentSlide];

  return (
    <section className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-background pt-20 sm:min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          key={active.image}
          src={active.image}
          alt={`Detective Hero Slide ${currentSlide + 1}`}
          fill
          priority
          quality={55}
          fetchPriority="high"
          sizes="100vw"
          className="object-cover img-noir"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black z-[1]" />

      <div className="container relative z-10 mx-auto mt-6 flex h-auto min-h-[360px] flex-col items-center justify-center px-6 pb-28 text-center sm:mt-10 sm:h-[300px] sm:pb-24 md:h-[400px] lg:px-12">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/80 px-3 py-1.5 backdrop-blur-md sm:mb-6 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-space text-[9px] uppercase tracking-[0.16em] text-white sm:text-[10px] md:text-xs md:tracking-[0.2em]">
            {active.badge}
          </span>
        </div>

        <h1 className="mb-5 max-w-5xl font-playfair text-3xl leading-[1.1] tracking-wide text-white uppercase sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl lg:tracking-wider">
          {active.title1} <span className="text-accent italic">{active.titleHighlight}</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl font-inter text-sm leading-relaxed text-white/90 sm:text-base md:mb-10 md:text-lg">
          {active.description}
        </p>

        <div className="absolute bottom-0 flex w-full translate-y-full flex-col gap-3 px-4 sm:w-auto sm:flex-row sm:gap-5 sm:px-0 md:bottom-10">
          <Link
            href="/contact-us"
            className="bg-accent px-6 py-4 text-center font-space text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-colors duration-300 hover:bg-white hover:text-black sm:px-10 sm:py-5 sm:text-base sm:tracking-widest"
          >
            Discuss Your Case
          </Link>
          <Link
            href="/services"
            className="group flex items-center justify-center gap-2 border-2 border-white bg-transparent px-6 py-4 font-space text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-accent hover:bg-accent sm:px-8 sm:text-sm sm:tracking-widest"
          >
            Our Services
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
