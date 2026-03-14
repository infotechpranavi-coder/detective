"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import CustomImage from "@/components/ui/CustomImage";

const VALUES = [
  { num: "01", title: "Confidentiality", desc: "Absolute secrecy is our foundation. No leaks, no traces.", img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=600&q=80" },
  { num: "02", title: "Professionalism", desc: "Licensed experts adhering to strict ethical codes.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { num: "03", title: "Accuracy", desc: "Fact-based evidence collection that stands up in court.", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80" },
  { num: "04", title: "Integrity", desc: "Honest reporting, never altering or fabricating facts.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
  { num: "05", title: "Speed", desc: "Rapid deployment and swift resolution of time-sensitive matters.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" },
];

export default function ValuesSlider() {
  return (
    <section className="py-24 bg-card border-y border-foreground/5">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-4 mb-4">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Core Principles</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-foreground uppercase tracking-wider">
            Our <span className="text-foreground/40 italic">Values</span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="w-full relative overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex w-max px-6 lg:px-12 gap-6 pb-8">
          {VALUES.map((val, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="w-[300px] md:w-[400px] h-[400px] relative flex flex-col justify-end p-8 overflow-hidden group border border-foreground/10 hover:border-accent/30 transition-colors"
            >
              <CustomImage 
                src={val.img}
                alt={val.title}
                animation="none"
                containerClassName="absolute inset-0 z-0"
                overlay="bg-white/65 dark:bg-black/88"
              />
              <div className="relative z-10 flex flex-col">
                <span className="font-bebas text-5xl text-accent mb-4 uppercase tracking-widest leading-none block transform group-hover:-translate-y-2 transition-transform duration-500">{val.num}</span>
                <h3 className="font-playfair text-2xl text-foreground mb-3 uppercase tracking-wider">{val.title}</h3>
                <p className="font-inter text-sm text-foreground/50 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 h-0 group-hover:h-auto">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
