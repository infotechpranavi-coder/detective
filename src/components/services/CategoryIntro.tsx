"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import { fadeUp, staggerContainer, fadeRight, fadeLeft } from "@/lib/animations";

export default function CategoryIntro() {
  return (
    <section className="py-24 bg-white border-b-2 border-black">
      <div className="container mx-auto px-6 lg:px-12 space-y-12">
        
        {/* CARD 1 - Personal */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden border-2 border-black group h-auto lg:h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="relative h-[300px] lg:h-full w-full overflow-hidden">
            <CustomImage 
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80"
              alt="Magnifying Glass"
              animation="revealLeft"
              containerClassName="absolute inset-0 z-0 h-full w-full"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[700ms]"
              overlay="bg-black/40"
            />
          </div>
          <div className="bg-white p-10 lg:p-16 flex flex-col justify-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="font-space text-accent text-[10px] tracking-widest uppercase mb-4">01 // INDIVIDUAL SECTOR</motion.div>
              <motion.h3 variants={fadeUp} className="font-playfair text-3xl md:text-4xl text-black uppercase tracking-wider mb-6">Personal <span className="text-accent italic">Investigation</span></motion.h3>
              <motion.p variants={fadeUp} className="font-inter text-sm md:text-base text-black/70 leading-relaxed mb-8">
                Protecting your personal life requires discretion and tact. Whether it's verifying the background of a prospective alliance or investigating suspected infidelity, our discreet agents gather irrefutable evidence.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contact-us" className="inline-flex items-center gap-3 text-accent font-space text-xs uppercase tracking-widest hover:text-black transition-colors border-b-2 border-accent hover:border-black pb-1">
                  Discuss a personal case <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* CARD 2 - Business */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden border-2 border-black group h-auto lg:h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {/* Mobile Order: Image First. Desktop Order: Text First */}
          <div className="bg-white p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="font-space text-accent text-[10px] tracking-widest uppercase mb-4">02 // CORPORATE SECTOR</motion.div>
              <motion.h3 variants={fadeUp} className="font-playfair text-3xl md:text-4xl text-black uppercase tracking-wider mb-6">Business <span className="text-accent italic">Investigation</span></motion.h3>
              <motion.p variants={fadeUp} className="font-inter text-sm md:text-base text-black/70 leading-relaxed mb-8">
                Corporate fraud, intellectual property theft, and employee misconduct can cripple a business. We provide deep-dive intelligence and covert surveillance to safeguard your commercial interests.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contact-us" className="inline-flex items-center gap-3 text-accent font-space text-xs uppercase tracking-widest hover:text-black transition-colors border-b-2 border-accent hover:border-black pb-1">
                  Discuss a corporate case <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative h-[300px] lg:h-full w-full overflow-hidden order-1 lg:order-2">
            <CustomImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Corporate Building"
              animation="revealRight"
              containerClassName="absolute inset-0 z-0 h-full w-full"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[700ms]"
              overlay="bg-black/40"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
