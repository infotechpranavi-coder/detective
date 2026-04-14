"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, image, breadcrumbs }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative flex min-h-[420px] w-full items-end overflow-hidden pb-14 pt-24 sm:h-[60vh] sm:min-h-[460px] sm:pb-20 sm:pt-28 lg:h-[65vh] lg:min-h-[500px] lg:pb-24 lg:pt-32">
      <CustomImage 
        src={image}
        alt={title}
        animation="parallax"
        parallaxY={parallaxY}
        priority={true}
        containerClassName="absolute inset-0 z-0"
        overlay="bg-black/70"
      />
      
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-[1]" />

      <motion.div 
        className="container mx-auto px-6 lg:px-12 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ opacity: opacityFade }}
      >
        <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-center gap-2 font-space text-[9px] uppercase tracking-[0.16em] text-white/70 sm:mb-6 sm:text-sm sm:tracking-widest">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-white/40">/</span>
              <Link href={crumb.href} className="hover:text-accent transition-colors">{crumb.label}</Link>
            </span>
          ))}
        </motion.div>

        <motion.h1 variants={fadeUp} className="expert-highlight mb-4 font-playfair text-3xl leading-tight tracking-wide text-white uppercase sm:text-4xl md:text-6xl lg:text-7xl lg:tracking-wider">
          {title}
        </motion.h1>

        <motion.p variants={fadeUp} className="voice-summary max-w-2xl font-inter text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
