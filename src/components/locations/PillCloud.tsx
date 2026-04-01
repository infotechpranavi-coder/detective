"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scaleUp } from "@/lib/animations";
import { SERVICE_LOCATIONS } from "@/lib/locations";

export default function PillCloud() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden border-t border-foreground/5">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Coverage</span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-5xl text-foreground uppercase tracking-wider mb-6 leading-snug">
            Pan-India <span className="text-foreground/40 italic">Coverage</span>
          </h2>
          <p className="font-inter text-foreground/50 text-sm max-w-xl mx-auto leading-relaxed">
            We actively operate across Mumbai, Maharashtra, and major Indian cities for rapid on-ground investigation support.
          </p>
        </motion.div>

        {/* Pill Cloud Container */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ staggerChildren: 0.05 }}
        >
          {SERVICE_LOCATIONS.map((location, i) => (
            <motion.div 
              key={i}
              variants={scaleUp}
              whileHover={{ scale: 1.05, borderColor: "rgba(201,168,76,0.5)", color: "#C9A84C" }}
              className="rounded-full border border-foreground/10 bg-background text-foreground/80 font-space text-xs md:text-sm tracking-widest uppercase transition-colors"
            >
              <Link
                href={`/locations/${location.slug}`}
                className="block px-6 py-3"
              >
                {location.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
