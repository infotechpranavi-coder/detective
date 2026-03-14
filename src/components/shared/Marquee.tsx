"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "100% Confidentiality",
  "Licensed Investigators",
  "Pan India Network",
  "15+ Years Experience",
  "Corporate & Personal Cases",
  "24/7 Availability",
];

export default function Marquee() {
  return (
    <div className="w-full bg-yellow-400 py-4 overflow-hidden flex items-center border-y-2 border-black z-20 relative">
      <motion.div
        className="flex whitespace-nowrap gap-10"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-space text-black font-bold uppercase tracking-widest text-sm">
              {item}
            </span>
            <span className="text-black">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
