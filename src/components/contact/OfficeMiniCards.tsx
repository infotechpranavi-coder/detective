"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

const OFFICES = [
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&h=500&q=80",
    href: "https://maps.app.goo.gl/ijbiitE7TDrSoofHA?g_st=iwb",
  },
  {
    name: "Navi Mumbai",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=500&q=80",
    href: "https://maps.app.goo.gl/eSNcfQYVayoKxFLt7?g_st=iwb",
  },
  {
    name: "Thane",
    img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&h=500&q=80",
    href: "https://maps.app.goo.gl/HMFysuoR8y3ZSyT3A?g_st=iwb",
  },
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
              className="group"
            >
              <Link
                href={office.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[160px] overflow-hidden border border-foreground/10 md:h-[200px]"
              >
                <img 
                  src={office.img} 
                  alt={office.name} 
                  className="h-full w-full object-cover img-noir transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 transition-colors duration-500 group-hover:bg-background/40" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-space text-sm tracking-widest text-foreground uppercase bg-background/50 backdrop-blur-sm px-4 py-2 border border-foreground/10">{office.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
