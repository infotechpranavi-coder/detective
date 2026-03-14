"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, User, Briefcase, SwitchCamera, ShieldAlert } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const PACKAGES = [
  {
    name: "Basic Access",
    price: "₹15,000",
    frequency: "/ case",
    desc: "Essential fact-finding and background verification for personal matters.",
    img: "https://images.unsplash.com/photo-1453873531674-2151bcd01b50?auto=format&fit=crop&w=400&h=160&q=80",
    icon: User,
    features: ["Subject Identity Verification", "Basic Asset Check", "Address Confirmation", "3 Days Field Surveillance", "Text-Based Weekly Report"],
    featured: false
  },
  {
    name: "Comprehensive",
    price: "₹35,000",
    frequency: "/ case",
    desc: "In-depth investigation ideal for matrimonial and high-stakes personal issues.",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=400&h=160&q=80",
    icon: SwitchCamera,
    features: ["Everything in Basic", "Digital Footprint Analysis", "7 Days Discrete Surveillance", "Photographic Evidence", "Detailed Final Dossier"],
    featured: true
  },
  {
    name: "Corporate Standard",
    price: "₹50,000",
    frequency: "/ project",
    desc: "Tailored for small to medium businesses requiring employee or partner checks.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&h=160&q=80",
    icon: Briefcase,
    features: ["Pre/Post Employment Checks", "Financial Defaulter Check", "Basic Competitor Intel", "Intellectual Property Search", "Court Admissible Reports"],
    featured: false
  },
  {
    name: "Enterprise Sweeping",
    price: "Custom",
    frequency: "/ audit",
    desc: "Complete counter-surveillance and deep-level corporate espionage defense.",
    img: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=400&h=160&q=80",
    icon: ShieldAlert,
    features: ["Electronic Bug Sweeping (TSCM)", "Executive Protection", "Corporate Fraud Auditing", "GPS Tracker Detection", "24/7 Dedicated Case Manager"],
    featured: false
  }
];

export default function PackageCards() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {PACKAGES.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div 
                key={i}
                variants={fadeUp}
                className={`relative bg-card border flex flex-col ${pkg.featured ? 'border-accent shadow-[0_0_30px_rgba(242,10,10,0.18)] transform md:-translate-y-4' : 'border-foreground/10 mt-0 md:mt-4'}`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background font-space text-[10px] uppercase tracking-widest px-4 py-1.5 z-20">
                    Most Requested
                  </div>
                )}
                
                {/* Header Image Strip */}
                <div className={`relative w-full overflow-hidden ${pkg.featured ? 'h-[100px]' : 'h-[80px]'}`}>
                  <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover img-noir" />
                  <div className="absolute inset-0 bg-white/45 dark:bg-black/75" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-1/2 left-6 -translate-y-1/2 text-foreground/50">
                    <Icon size={24} className={pkg.featured ? "text-accent" : ""} />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className={`font-playfair text-2xl uppercase tracking-wider mb-2 ${pkg.featured ? 'text-accent' : 'text-foreground'}`}>{pkg.name}</h3>
                  <div className="font-bebas text-4xl text-foreground tracking-widest mb-4">
                    {pkg.price} <span className="font-space text-sm tracking-normal text-foreground/40">{pkg.frequency}</span>
                  </div>
                  <p className="font-inter text-sm text-foreground/60 mb-8 h-16">{pkg.desc}</p>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex flex-start gap-3">
                        <Check size={16} className={`shrink-0 mt-0.5 ${pkg.featured ? 'text-accent' : 'text-foreground/40'}`} />
                        <span className="font-inter text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact" 
                    className={`block w-full text-center py-4 font-space text-xs uppercase tracking-widest transition-all ${pkg.featured ? 'bg-accent text-background hover:bg-foreground' : 'bg-transparent border border-foreground/20 text-foreground hover:border-accent hover:text-accent'}`}
                  >
                    Select Plan
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
