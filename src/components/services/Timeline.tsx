"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { PhoneCall, FileSearch, Eye, FileCheck } from "lucide-react";

const STEPS = [
  { num: "01", icon: PhoneCall, title: "Initial Consultation", desc: "A confidential discussion to understand your requirements, objectives, and any existing evidence you might have." },
  { num: "02", icon: FileSearch, title: "Strategy & Planning", desc: "Our team drafts a customized investigation plan, allocates specialized operatives, and deploys necessary technology." },
  { num: "03", icon: Eye, title: "Execution & Surveillance", desc: "We conduct discreet field operations, digital forensics, and background checks to gather irrefutable facts." },
  { num: "04", icon: FileCheck, title: "Final Reporting", desc: "Delivery of a comprehensive, legally sound report containing time-stamped evidence, photos, and video logs." },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden border-t-2 border-black bg-white">
      <CustomImage 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
        alt="Moody Building Dark"
        animation="parallax"
        parallaxY={parallaxY}
        containerClassName="absolute inset-0 z-0"
        overlay="bg-white/80"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-4 mb-4">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Methodology</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-wider">
            How We <span className="text-accent italic">Operate</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/20 -translate-x-1/2" />

          <motion.div 
            className="space-y-12 md:space-y-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              const Icon = step.icon;
              return (
                <motion.div key={i} variants={fadeUp} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end text-left md:text-right' : 'md:justify-start text-left'}`}>
                    <div className="bg-white border-2 border-black p-8 max-w-md hover:border-accent transition-colors group shadow-lg">
                      <div className={`font-bebas text-4xl text-black/10 absolute top-4 ${isEven ? 'md:left-4 right-4' : 'right-4 md:right-4'} group-hover:-translate-y-2 transition-transform duration-500`}>{step.num}</div>
                      <h4 className="font-playfair text-xl text-black mb-3 uppercase tracking-wider group-hover:text-accent transition-colors">{step.title}</h4>
                      <p className="font-inter text-sm text-black/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-accent flex items-center justify-center z-10">
                      <Icon size={20} className="text-accent" />
                    </div>
                  </div>

                  {/* Empty Spacer Mobile Hidden */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
