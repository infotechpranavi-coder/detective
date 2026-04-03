"use client";

import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { fadeUp, staggerContainer } from "@/lib/animations";

const HERO_SLIDES = [
  {
    image: "https://img.freepik.com/premium-photo/poster-banner-thriller-movie-with-man-detective-hat-generative-ai-illustration_118086-10493.jpg",
    badge: "India's Premier Detective Agency",
    title1: "Uncovering Truth With",
    titleHighlight: "Absolute Certainty",
    description: "Licensed professional investigators bringing clarity to complex personal and commercial cases since 2011. Confidentiality guaranteed.",
    imageAnim: {
      initial: { opacity: 0, scale: 1.15, filter: "brightness(0.3)" },
      animate: { opacity: 1, scale: 1, filter: "brightness(1)", transition: { duration: 1.8, ease: "easeOut" } },
      exit: { opacity: 0, scale: 1.05, filter: "brightness(0.1)", transition: { duration: 1.5 } }
    },
    textAnim: {
      initial: { opacity: 0, y: 30, filter: "blur(5px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
      exit: { opacity: 0, y: -30, filter: "blur(5px)", transition: { duration: 0.5 } }
    }
  },
  {
    image: "https://img.freepik.com/premium-photo/detective-investigate-concept-job-spy-background_1279562-19980.jpg",
    badge: "Covert Surveillance Operations",
    title1: "Operating Within The",
    titleHighlight: "Shadows",
    description: "Deploying highly trained field operatives for discrete tracking, background verification, and gathering unshakeable evidence.",
    imageAnim: {
      initial: { opacity: 0, x: "3%", scale: 1.05 },
      animate: { opacity: 1, x: "0%", scale: 1, transition: { duration: 2, ease: "circOut" } },
      exit: { opacity: 0, x: "-3%", scale: 1.05, transition: { duration: 1.5 } }
    },
    textAnim: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut" } },
      exit: { opacity: 0, x: 50, transition: { duration: 0.5 } }
    }
  },
  {
    image: "https://img.freepik.com/premium-photo/focused-detective-studying-photographs-immersed-solving-case-dark-setting-ai-generative_186802-13162.jpg",
    badge: "Forensics & Intelligence",
    title1: "Finding Truth Where",
    titleHighlight: "Others Fail",
    description: "From deep-dive corporate due diligence to complex matrimonial investigations. We leave no stone unturned in the pursuit of facts.",
    imageAnim: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1, transition: { duration: 2.2, ease: "backOut" } },
      exit: { opacity: 0, scale: 1.1, transition: { duration: 1.5 } }
    },
    textAnim: {
      initial: { opacity: 0, scale: 0.8, rotateX: 15 },
      animate: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 1, ease: "backOut" } },
      exit: { opacity: 0, scale: 1.1, rotateX: -15, transition: { duration: 0.5 } }
    }
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [init, setInit] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    
    // Auto-advance slider every 6 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-background pt-20 sm:min-h-screen">
      {/* 3D Cinematic Slider Layer */}
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%] w-full" style={{ transform: "translateY(0)" }}>
        <motion.div style={{ y: parallaxY }} className="w-full h-full relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={HERO_SLIDES[currentImageIndex].imageAnim as Variants}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={HERO_SLIDES[currentImageIndex].image}
                alt={`Detective Hero Slide ${currentImageIndex + 1}`}
                fill
                priority={true}
                className="object-cover img-noir"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Layer 2: Gradient to black at bottom */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black z-1" />

      {/* Layer 3: tsParticles */}
      {init && (
        <div className="absolute inset-0 z-2 opacity-50 mix-blend-screen pointer-events-none">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              particles: {
                color: { value: "#ffffff" },
                links: { enable: false },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "out" },
                  random: true,
                  speed: 0.2,
                  straight: false,
                },
                number: { density: { enable: true, width: 800 }, value: 30 },
                opacity: { value: { min: 0.1, max: 0.5 } },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      {/* Layer 4: Radar Sweep SVG */}
      <div className="absolute right-[-18vw] top-[14vh] z-2 hidden h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] animate-spin-slow pointer-events-none mix-blend-screen opacity-20 sm:block sm:right-[-10vw] sm:top-[10vh]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
          <line x1="50" y1="50" x2="50" y2="2" stroke="currentColor" strokeWidth="1" className="opacity-80" />
          <path d="M50 50 L50 2 A48 48 0 0 1 98 50 Z" fill="currentColor" className="opacity-10" />
        </svg>
      </div>

      <motion.div 
        className="container relative z-10 mx-auto mt-6 flex h-auto min-h-[360px] flex-col items-center justify-center px-6 pb-28 text-center sm:mt-10 sm:h-[300px] sm:pb-24 md:h-[400px] lg:px-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ opacity: opacityFade }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={HERO_SLIDES[currentImageIndex].textAnim as Variants}
            className="flex flex-col items-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/80 px-3 py-1.5 backdrop-blur-md sm:mb-6 sm:px-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-space text-[9px] uppercase tracking-[0.16em] text-white sm:text-[10px] md:text-xs md:tracking-[0.2em]">
                {HERO_SLIDES[currentImageIndex].badge}
              </span>
            </div>

            <h1 className="mb-5 max-w-5xl font-playfair text-3xl leading-[1.1] tracking-wide text-white uppercase sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl lg:tracking-wider">
              {HERO_SLIDES[currentImageIndex].title1} <span className="text-accent italic">{HERO_SLIDES[currentImageIndex].titleHighlight}</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl font-inter text-sm leading-relaxed text-white/90 sm:text-base md:mb-10 md:text-lg">
              {HERO_SLIDES[currentImageIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div variants={fadeUp} className="absolute bottom-0 flex w-full translate-y-full flex-col gap-3 px-4 sm:w-auto sm:flex-row sm:gap-5 sm:px-0 md:bottom-10">
          <Link href="/contact" className="bg-accent px-6 py-4 text-center font-space text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-colors duration-300 hover:bg-white hover:text-black sm:px-10 sm:py-5 sm:text-base sm:tracking-widest">
            Discuss Your Case
          </Link>
          <Link href="/services" className="group flex items-center justify-center gap-2 border-2 border-white bg-transparent px-6 py-4 font-space text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-accent hover:bg-accent sm:px-8 sm:text-sm sm:tracking-widest">
            Our Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex md:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: opacityFade }}
      >
        <div className="w-px h-16 bg-linear-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
