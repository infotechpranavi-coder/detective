"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Briefcase, Heart, Link as LinkIcon, Search, Shield } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const SERVICES = [
  {
    num: "01", category: "Personal", title: "Personal Investigation",
    desc: "Discrete surveillance, background checks, and fact-finding to provide you with the truth you need about individuals in your personal life.",
    img: "https://images.unsplash.com/photo-1453873531674-2151bcd01b50?auto=format&fit=crop&w=700&h=440&q=80",
    icon: User
  },
  {
    num: "02", category: "Corporate", title: "Business Investigation",
    desc: "Protecting your corporate interests through employee verifications, competitor analysis, IP theft detection, and corporate fraud defense.",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=700&h=440&q=80",
    icon: Briefcase
  },
  {
    num: "03", category: "Matrimonial", title: "Pre Matrimonial",
    desc: "Comprehensive background checks, financial mapping, and character verification before you make life's biggest commitment.",
    img: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=700&h=440&q=80",
    icon: Heart
  },
  {
    num: "04", category: "Matrimonial", title: "Post Matrimonial",
    desc: "Confidential investigation into suspected infidelity, hidden assets, or gathering evidence for legal proceedings such as alimony.",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&h=440&q=80",
    icon: LinkIcon
  },
  {
    num: "05", category: "Legal", title: "Divorce Case Evidence",
    desc: "Legally admissible evidence gathering to support child custody battles, alimony claims, and divorce settlements in court.",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=700&h=440&q=80",
    icon: Search
  },
  {
    num: "06", category: "Technical", title: "Debugging & Sweeping",
    desc: "Advanced electronic countermeasures to detect and remove hidden cameras, listening devices, and GPS trackers from homes or offices.",
    img: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=700&h=440&q=80",
    icon: Shield
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5">
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
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-foreground uppercase tracking-wider">
            All Specialized <span className="text-foreground/40 italic">Services</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border border-foreground/5 flex flex-col h-full hover:border-accent/30 transition-colors duration-500 overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-[220px] w-full overflow-hidden shrink-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover img-noir group-hover:scale-105 transition-transform duration-[700ms]" />
                  <div className="absolute inset-0 bg-background/50 mix-blend-multiply" />
                  
                  {/* Subtle bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background to-transparent pointer-events-none dark:from-[#0D0D0D]" />

                  {/* Number & Category */}
                  <div className="absolute bottom-4 left-6 z-10">
                    <span className="font-bebas text-5xl text-foreground/40 group-hover:text-accent/60 transition-colors drop-shadow-lg leading-none block">{s.num}</span>
                    <span className="font-space text-[10px] text-accent tracking-[0.15em] uppercase mt-1 block">{s.category}</span>
                  </div>

                  {/* Icon Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-500">
                    <Icon size={32} className="text-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white dark:bg-[#0D0D0D] relative z-20">
                  <h3 className="font-playfair text-xl text-foreground uppercase tracking-wider mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="font-inter text-sm text-foreground/50 leading-relaxed max-w-md flex-grow">{s.desc}</p>
                  <div className="mt-8 pt-6 border-t border-foreground/10 w-full flex justify-between items-center group-hover:border-accent/20 transition-colors">
                    <Link href="/contact" className="font-space text-[10px] tracking-widest text-accent uppercase hover:text-foreground transition-colors">
                      Consult Now →
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
