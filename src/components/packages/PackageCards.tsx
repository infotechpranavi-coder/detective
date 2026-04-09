"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Check, Shield, Briefcase, Eye, Search, FileText, ChevronRight } from "lucide-react";

const TABS = [
  {
    id: "personal",
    label: "Personal Investigation",
    investment: "Starts from ₹45,000/- onwards",
    icon: Shield,
    features: [
      { title: "Pre & Post Matrimonial Verification", desc: "In-depth character, family history, and financial background checks." },
      { title: "Extramarital Affair Investigation", desc: "Discreet evidence gathering for marital disputes and litigation." },
      { title: "Missing Person & Asset Tracing", desc: "Specialized searches for locating individuals or hidden personal assets." },
      { title: "Child Safety & Monitoring", desc: "Discreetly monitoring social circles for complete parental peace of mind." },
      { title: "Background Checks", desc: "Comprehensive vetting of domestic help, tenants, or private associates." }
    ],
    deliverable: "100% Confidential, legally admissible evidence and intelligence reports.",
    cta: "Request a Confidential Consultation"
  },
  {
    id: "corporate",
    label: "Corporate Investigation",
    investment: "Starts from ₹45,000/- onwards",
    icon: Briefcase,
    features: [
      { title: "Employee Background Screening", desc: "Deep-dive verification for high-level executives, directors, and key hires." },
      { title: "Corporate Due Diligence", desc: "Detailed investigative reports on potential partners, vendors, or merger entities." },
      { title: "Internal Fraud & Theft Investigation", desc: "Uncovering white-collar crime, embezzlement, or inventory leakage." },
      { title: "Intellectual Property (IP) Protection", desc: "Identifying sources of trade secret leaks or corporate espionage." },
      { title: "Litigation Support", desc: "Gathering hard evidence and intelligence for complex corporate legal battles." }
    ],
    deliverable: "Comprehensive risk-assessment report with actionable business intelligence.",
    cta: "Secure Your Corporate Assets"
  },
  {
    id: "tscm",
    label: "TSCM Services (Indiebim)",
    investment: "Starts from ₹45,000/- onwards",
    icon: Search,
    features: [
      { title: "Audio & Video Bug Sweeping", desc: "Detection of hidden spy cameras, microphones, and unauthorized recorders." },
      { title: "Boardroom & Residence Sanitization", desc: "Ensuring meeting spaces and homes are 100% secure from eavesdropping." },
      { title: "GPS Tracker Detection", desc: "Professional sweeping of executive vehicles for unauthorized tracking devices." },
      { title: "Live Event Monitoring", desc: "Real-time technical surveillance during sensitive board meetings or negotiations." },
      { title: "Global Tech Standards", desc: "Using military-grade equipment and USA/Israel-trained methodologies." }
    ],
    deliverable: "Technical \"Clean Certificate\" and a professional security vulnerability analysis.",
    cta: "Book a Technical Sweep"
  },
  {
    id: "surveillance",
    label: "Surveillance & Shadowing",
    investment: "Starts from ₹45,000/- onwards",
    icon: Eye,
    features: [
      { title: "Elite Field Operations", desc: "10 hours of active daily monitoring per operative." },
      { title: "High-Definition Evidence", desc: "Time-stamped photo and video proof provided in a secure report." },
      { title: "Covert Shadowing", desc: "Discreetly following subjects to document movements and activities." },
      { title: "Counter-Surveillance", desc: "Identifying if you are being illegally monitored by third parties." }
    ],
    pricingTable: [
      { duration: "5 Days", investment: "45k", scope: "Short-term pattern verification: Confirming suspicions or quick checks." },
      { duration: "10 Days", investment: "75k", scope: "RECOMMENDED: Identifying consistent habits and routines.", recommended: true },
      { duration: "15 Days", investment: "1L", scope: "Comprehensive Deep-Dive: Full-scale investigative shadowing for legal evidence." }
    ],
    deliverable: "Detailed surveillance logs and high-definition evidence files.",
    cta: "Get Surveillance Support"
  }
];

export default function PackageCards() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeData = TABS.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Tab Controls */}
        <div className="mb-16 flex flex-wrap justify-center gap-2 md:mb-20 md:gap-4">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-space text-[9px] uppercase tracking-[0.18em] transition-all duration-500 border-2 sm:gap-3 sm:px-6 sm:py-4 sm:text-[10px] md:text-xs md:tracking-[0.2em] ${
                  isActive 
                    ? "bg-black border-black text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]" 
                    : "bg-white border-black/5 text-black/40 hover:border-black/20 hover:text-black"
                }`}
              >
                <Icon size={16} className={isActive ? "text-accent" : "text-black/30"} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Overview & Features */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                  <h2 className="font-playfair text-4xl md:text-5xl text-black uppercase tracking-tight leading-none">
                    {activeData.label}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-accent" />
                    <p className="font-space text-accent text-sm md:text-base tracking-widest font-bold">
                      {activeData.investment}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {activeData.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-6 bg-neutral-50 border-l-4 border-black hover:border-accent transition-all duration-300"
                    >
                      <h4 className="font-space text-xs uppercase tracking-widest mb-2 text-black group-hover:text-accent transition-colors font-bold">
                        {feature.title}
                      </h4>
                      <p className="font-inter text-sm text-black/60 leading-relaxed">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {activeData.pricingTable && (
                  <div className="mt-12 overflow-x-auto rounded-xl border border-black/10 shadow-sm">
                    <table className="min-w-[640px] w-full border-collapse text-left">
                      <thead>
                        <tr className="bg-black text-white font-space text-[10px] uppercase tracking-widest">
                          <th className="p-4 border-r border-white/10">Duration</th>
                          <th className="p-4 border-r border-white/10">Investment</th>
                          <th className="p-4">Service Scope (10 Hours/Day)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeData.pricingTable.map((row, i) => (
                          <tr key={i} className={`font-inter text-sm border-b border-black/5 ${row.recommended ? 'bg-accent/5' : ''}`}>
                            <td className="p-4 border-r border-black/5 font-bold text-black">{row.duration}</td>
                            <td className="p-4 border-r border-black/5 font-bold text-black">{row.investment}</td>
                            <td className="p-4 text-black/60 leading-relaxed">
                              {row.recommended && <span className="font-space text-[9px] text-accent uppercase font-bold block mb-1">Recommended</span>}
                              {row.scope}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Right Side: Deliverable & CTA Panel */}
              <div className="lg:col-span-5">
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-black p-6 text-white shadow-2xl space-y-8 sm:p-8 lg:sticky lg:top-32 lg:p-10 lg:space-y-10">
                  {/* Decorative background circle */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-700" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3 text-accent mb-2">
                      <FileText size={20} />
                      <span className="font-space text-[10px] uppercase tracking-[0.3em]">Operational Deliverable</span>
                    </div>
                    <p className="font-playfair text-2xl md:text-3xl italic leading-relaxed text-white/90">
                       "{activeData.deliverable}"
                    </p>
                  </div>

                  <div className="h-px w-full bg-white/10 relative z-10" />

                  <div className="space-y-8 relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-accent" />
                        <span className="font-inter text-sm text-white/70">100% Secure & Private</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-accent" />
                        <span className="font-inter text-sm text-white/70">Pan-India Field Presence</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-accent" />
                        <span className="font-inter text-sm text-white/70">Ex-Navy Intelligence Driven</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="group flex items-center justify-between w-full bg-accent hover:bg-white text-white hover:text-black p-6 font-space text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500"
                    >
                      {activeData.cta}
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

