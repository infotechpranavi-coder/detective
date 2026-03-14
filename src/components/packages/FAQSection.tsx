"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const FAQS = [
  { q: "Is total confidentiality guaranteed?", a: "Yes. As a legally bound investigative agency, we operate under strict non-disclosure agreements. Your identity and the nature of your inquiry remain 100% classified." },
  { q: "Are your investigators legally licensed?", a: "Absolutely. We are registered with relevant state and national authorities, and our senior operatives hold credentials from the Association of Private Detectives and Investigators." },
  { q: "How long does a typical assignment take?", a: "While simple background verifications can conclude in 48-72 hours, complex surveillance or corporate espionage cases may take weeks. A clear timeline is provided during consultation." },
  { q: "Is the evidence you collect valid in a court of law?", a: "Yes. All photographic, video, and documentary evidence is gathered adhering to legal guidelines, ensuring maximum admissibility during judicial processes." },
  { q: "Do you operate outside of Mumbai?", a: "We have a robust Pan-India network. While our HQ is in Mumbai, we deploy teams nationwide and maintain localized expertise in all major metropolitan areas." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden border-t border-foreground/5">
      {/* Subtle Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-[0.06]">
        <Image
          src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80"
          alt="Texture"
          fill
          className="object-cover blur-[8px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-accent" />
                <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Inquiries</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-6">
                Frequently Asked <br /><span className="text-foreground/40 italic">Questions</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-inter text-foreground/60 leading-relaxed mb-8">
                Hiring a private investigator is a significant decision. We believe in total transparency regarding our methods, legality, and deliverables.
              </motion.p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div key={i} variants={fadeUp} className="border border-foreground/10 bg-background/40 backdrop-blur-md">
                    <button
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <h4 className={`font-playfair text-lg md:text-xl uppercase tracking-wider transition-colors ${isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent/80'}`}>{faq.q}</h4>
                      <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-foreground/40'}`}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 font-inter text-sm md:text-base text-foreground/60 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
