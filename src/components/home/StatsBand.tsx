"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const STATS = [
  { count: 15, suffix: "+", label: "Years Experience" },
  { count: 100, suffix: "%", label: "Confidentiality" },
  { count: 10000, suffix: "+", label: "Cases Solved" },
  { count: 13, suffix: "", label: "Offices Pan India" },
];

export default function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="bg-black py-20 border-y-2 border-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/20"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center justify-center text-center px-4">
              <div className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider mb-2 flex items-baseline">
                {inView ? <CountUp end={stat.count} duration={2.5} /> : "0"}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="font-space text-[10px] md:text-xs text-white/70 tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

