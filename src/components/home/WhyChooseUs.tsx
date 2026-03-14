"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp, staggerContainer } from "@/lib/animations";

const FEATURES = [
  {
    num: "01",
    title: "100% Confidentiality",
    desc: "Your identity and case details are strictly protected with military-grade encryption and protocol.",
  },
  {
    num: "02",
    title: "Licensed Professionals",
    desc: "Our investigators are fully licensed, ensuring all evidence gathered is legally admissible in court.",
  },
  {
    num: "03",
    title: "Advanced Technology",
    desc: "We utilize state-of-the-art surveillance equipment, cyber forensics, and proprietary databases.",
  },
  {
    num: "04",
    title: "Pan India Network",
    desc: "With a vast network of operatives, we can conduct investigations anywhere across the country.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <CustomImage 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
        alt="Moody Building Dark"
        animation="parallax"
        parallaxY={parallaxY}
        containerClassName="absolute inset-0 z-0"
        overlay="bg-white/65 dark:bg-black/82"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">The Advantage</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-foreground uppercase tracking-wider leading-[1.1]">
              Why Clients Trust<br /><span className="text-foreground/40 italic">H S Detectives</span>
            </motion.h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground/60 font-inter text-sm max-w-sm"
          >
            When standard methods fail to produce the truth, individuals and corporations turn to us for definitive answers and actionable evidence.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="bg-white/80 dark:bg-black/75 backdrop-blur-md border border-foreground/10 p-8 hover:border-accent/40 transition-colors duration-500 group relative overflow-hidden shadow-[0_18px_60px_rgba(242,10,10,0.08)]"
            >
              <div className="font-space text-5xl text-foreground/5 font-bold absolute -top-4 -right-2 transition-transform duration-700 group-hover:-translate-y-2">{feature.num}</div>
              <div className="font-space flex flex-col mb-12">
                <span className="text-accent text-[10px] tracking-widest uppercase mb-2">Advantage</span>
                <span className="text-accent text-2xl font-bold tracking-wider">{feature.num}</span>
              </div>
              <h3 className="font-playfair text-xl text-foreground mb-4 uppercase tracking-wider group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="font-inter text-sm text-foreground/50 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
