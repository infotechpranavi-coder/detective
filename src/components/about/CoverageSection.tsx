"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp, staggerContainer, scaleUp } from "@/lib/animations";

const LOCATIONS = [
  "New Delhi", "Mumbai", "Bangalore", "Hyderabad", 
  "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur"
];

export default function CoverageSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-foreground/10">
      <CustomImage 
        src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1920&q=80"
        alt="Mumbai Skyline"
        animation="none"
        containerClassName="absolute inset-0 z-0"
        className="object-[center_60%]"
        overlay="bg-background/85"
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-4 mb-6">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Network</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground uppercase tracking-wider mb-8 leading-[1.1]">
            Pan India <br /><span className="text-foreground/40 italic">Coverage</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-inter text-foreground/70 text-base md:text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Mumbai with branch offices in Thane and Navi Mumbai. Our vast network of operatives allows us to conduct seamless investigations across the entire country.
          </motion.p>
          
          {/* Coverage Pill Cloud */}
          <div className="flex flex-wrap justify-center gap-4">
            {LOCATIONS.map((loc, i) => (
              <motion.div 
                key={loc}
                variants={scaleUp}
                className="px-6 py-3 rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md text-foreground font-space text-xs md:text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {loc}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-16">
            <a href="/locations-detectives-agency-in-mumbai" className="inline-flex items-center gap-2 font-space text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors border-b border-accent/30 hover:border-foreground/40 pb-1">
              View All Locations <span className="text-lg leading-none">→</span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
