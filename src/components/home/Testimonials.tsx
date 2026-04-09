"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t-2 border-black bg-white py-24 md:py-32">
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      {/* Blurred Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-[0.04]">
        <Image
          src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80"
          alt="Texture"
          fill
          className="object-cover blur-[40px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="mx-auto mb-16 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Client Feedback</span>
            <div className="h-[1px] w-12 bg-accent" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-black uppercase tracking-wider">
            Words Of <span className="text-accent italic">Trust</span>
          </motion.h2>
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-4 md:px-0">
          <div className="border-2 border-black bg-white p-4 shadow-[10px_10px_0_#000] sm:p-6 md:p-8">
            <div
              className="elfsight-app-aabda62e-073a-4ada-8810-0d0711169303 min-h-[260px]"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  );
}
