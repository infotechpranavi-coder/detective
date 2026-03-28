"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CtaBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-40 overflow-hidden border-t-2 border-black">
      <CustomImage 
        src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
        alt="Dark City Lights"
        animation="parallax"
        parallaxY={parallaxY}
        containerClassName="absolute inset-0 z-0"
        overlay="bg-black/80"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/80 to-black pointer-events-none z-[1]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-4 mb-6">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Ready to find the truth?</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-wider mb-8 leading-[1.1]">
            Request A Confidential <br /><span className="text-accent italic">Consultation</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-inter text-white/90 text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
            Every case begins with a secure, no-obligation discussion. Our senior investigators are ready to analyze your situation and provide a strategic action plan.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="tel:+919930403115" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-space text-xs sm:text-sm uppercase tracking-widest hover:border-accent hover:bg-accent transition-colors duration-300"
            >
              Call +91 99304 03115
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-accent border-2 border-accent text-white font-space text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 font-bold"
            >
              Book An Appointment
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
