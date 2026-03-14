"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function PackageCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden border-t border-foreground/10">
      <CustomImage 
        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80"
        alt="Mumbai Aerial Night"
        animation="parallax"
        parallaxY={parallaxY}
        containerClassName="absolute inset-0 z-0 h-[120%]"
        overlay="bg-white/65 dark:bg-black/82"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none z-[1]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-4 mb-6">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Connect With Us</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-7xl text-foreground uppercase tracking-wider mb-8 leading-[1.1]">
            Need A Custom <span className="text-foreground/50 italic">Quote?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-inter text-foreground/70 text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
            Every investigation protocol is unique. If our standard packages don't align with your exact requirements, our directors can architect a bespoke surveillance strategy.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-accent text-background font-space text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:scale-105 transition-all duration-500 font-bold"
            >
              Contact Directory
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
