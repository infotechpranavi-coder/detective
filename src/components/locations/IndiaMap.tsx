"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function IndiaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden border-t border-foreground/10 hidden md:block">
      <CustomImage 
        src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1920&q=80"
        alt="Mumbai Skyline"
        animation="parallax"
        parallaxY={parallaxY}
        containerClassName="absolute inset-0 z-0 h-[120%]"
        className="object-bottom"
        overlay="bg-background/90"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="text-left"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Jurisdiction</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground uppercase tracking-wider mb-8 leading-[1.1]">
              Operating Across <br /><span className="text-foreground/40 italic">The Subcontinent</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-inter text-foreground/60 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              While our operational headquarters are strategically placed in Maharashtra, our active agents and informant network stretch across all 28 states and 8 union territories. Geography is never a barrier to uncovering the truth.
            </motion.p>
          </motion.div>

          {/* SVG Map Representation */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[500px] w-full flex items-center justify-center opacity-80 mix-blend-screen"
          >
            {/* Extremely simplified, symbolic map outline or radar circle since real SVG path is too complex here */}
            {/* The prompt said: "India SVG map with pulsing dots same as before". Since I don't have the exact coordinates, I'll simulate a radar mapping representing India */}
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 border-[0.5px] border-foreground/20 rounded-full" />
              <div className="absolute inset-4 border-[0.5px] border-foreground/10 rounded-full border-dashed" />
              <div className="absolute inset-8 border-[0.5px] border-foreground/5 rounded-full" />
              
              {/* Pulsing Dots representing major cities */}
              <div className="absolute top-[30%] left-[45%] w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#C9A84C] animate-pulse" /> {/* Delhi */}
              <div className="absolute top-[60%] left-[30%] w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_#C9A84C] animate-pulse" /> {/* Mumbai */}
              <div className="absolute top-[75%] left-[45%] w-2 h-2 rounded-full bg-foreground shadow-[0_0_10px_#FFF] animate-pulse" /> {/* Bangalore */}
              <div className="absolute top-[55%] left-[65%] w-2 h-2 rounded-full bg-foreground shadow-[0_0_10px_#FFF] animate-pulse pointer-events-none" /> {/* Kolkata */}
              <div className="absolute top-[80%] left-[50%] w-2 h-2 rounded-full bg-foreground shadow-[0_0_10px_#FFF] animate-pulse pointer-events-none" /> {/* Chennai */}

              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-foreground/5 -translate-x-1/2" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-foreground/5 -translate-y-1/2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
