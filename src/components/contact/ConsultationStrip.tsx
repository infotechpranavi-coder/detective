"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function ConsultationStrip() {
  return (
    <section className="relative h-[300px] w-full overflow-hidden flex items-center justify-center border-y border-foreground/10">
      <CustomImage 
        src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=1920&q=80" // Alternative to team meeting if needed
        alt="Team Meeting Banner"
        animation="parallax"
        parallaxY={0} // Can skip dynamic parallax for horizontal strips if preferred, or keep standard
        containerClassName="absolute inset-0 z-0 h-[120%]"
        className="object-cover object-[center_35%]"
        overlay="bg-background/85"
      />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-background/50 backdrop-blur-md border border-foreground/15 p-6 md:p-8"
          >
            <motion.h3 variants={fadeUp} className="font-playfair text-2xl md:text-3xl text-foreground uppercase tracking-wider">
              Book Your Free <span className="text-foreground/40 italic">Consultation Call</span>
            </motion.h3>
            
            <motion.form variants={fadeUp} className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-transparent border-b border-foreground/30 dark:border-white/30 px-2 py-3 text-foreground font-inter text-sm focus:outline-none focus:border-accent w-full sm:w-[200px]"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-transparent border-b border-foreground/30 dark:border-white/30 px-2 py-3 text-foreground font-inter text-sm focus:outline-none focus:border-accent w-full sm:w-[200px]"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-foreground text-background font-space text-xs uppercase tracking-widest font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                Request Call <ArrowRight size={14} />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
