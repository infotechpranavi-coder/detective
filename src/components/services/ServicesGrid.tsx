"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Briefcase, Radar, Shield } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const SERVICES = [
  {
    num: "01",
    category: "Personal",
    title: "Personal Investigation",
    desc: "Pre and post matrimonial verification, extramarital investigations, missing person tracing, child safety monitoring, and personal background checks.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&h=520&q=80",
    icon: User,
    href: "/services/personal-investigation",
  },
  {
    num: "02",
    category: "Corporate",
    title: "Corporate Investigation",
    desc: "Executive screening, due diligence, internal fraud checks, IP protection, and litigation-focused business intelligence.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=520&q=80",
    icon: Briefcase,
    href: "/services/corporate-investigation",
  },
  {
    num: "03",
    category: "Technical",
    title: "TSCM Services (Indiebim)",
    desc: "Bug sweeping, room sanitization, GPS detection, live event monitoring, and technical vulnerability analysis.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&h=520&q=80",
    icon: Shield,
    href: "/services/tscm-services",
  },
  {
    num: "04",
    category: "Field Ops",
    title: "Surveillance & Shadowing",
    desc: "Elite covert monitoring with time-stamped photo and video evidence, pattern verification, and counter-surveillance support.",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&h=440&q=80",
    icon: Radar,
    href: "/services/surveillance-shadowing",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-white border-t-2 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-4 mb-4">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Comprehensive Solutions</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-black uppercase tracking-wider">
            All Specialized <span className="text-accent italic">Services</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border-2 border-black flex flex-col h-full hover:border-accent transition-colors duration-500 overflow-hidden"
              >
                <div className="relative h-[220px] w-full overflow-hidden shrink-0 bg-black">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[700ms]" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-6 z-10">
                    <span className="font-bebas text-5xl text-white/60 group-hover:text-accent transition-colors drop-shadow-lg leading-none block">{s.num}</span>
                    <span className="font-space text-[10px] text-accent tracking-[0.15em] uppercase mt-1 block">{s.category}</span>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/20 transition-all duration-500">
                    <Icon size={32} className="text-white group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white relative z-20">
                  <h3 className="font-playfair text-xl text-black uppercase tracking-wider mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="font-inter text-sm text-black/70 leading-relaxed max-w-md flex-grow">{s.desc}</p>
                  <div className="mt-8 pt-6 border-t-2 border-black w-full flex justify-between items-center group-hover:border-accent transition-colors">
                    <Link href={s.href} className="font-space text-[10px] tracking-widest text-accent uppercase hover:text-black transition-colors">
                      Open Service Page {"->"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
