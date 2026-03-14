"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const OFFICES = [
  { name: "Mumbai HQ", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=400&h=200&q=80" },
  { name: "Navi Mumbai", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&h=200&q=80" },
  { name: "Thane", img: "https://images.unsplash.com/photo-1453873531674-2151bcd01b50?auto=format&fit=crop&w=400&h=200&q=80" }
];

export default function OfficeMiniCards() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeUp} className="font-playfair text-2xl md:text-3xl text-foreground uppercase tracking-wider">
            Visit Our <span className="text-accent italic">Offices</span>
          </motion.h3>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {OFFICES.map((office, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="relative h-[160px] md:h-[200px] border border-foreground/10 group overflow-hidden"
            >
              <img 
                src={office.img} 
                alt={office.name} 
                className="w-full h-full object-cover img-noir group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-space text-sm tracking-widest text-foreground uppercase bg-background/50 backdrop-blur-sm px-4 py-2 border border-foreground/10">{office.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
