"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { FileSignature, UserCheck, BookOpen, ShieldCheck, EyeOff, User, Lock, Scale } from "lucide-react";

export default function RegulationContent() {
  const corePillars = [
    {
      title: "Mandatory Licensing",
      description: "Every agency must operate under a valid license issued by a designated Central or State Regulatory Board.",
      icon: <FileSignature className="w-8 h-8 text-accent" />,
    },
    {
      title: "Strict Agent Criteria",
      description: "Investigators must be Indian citizens, aged 21 or above, and meet rigorous standards for physical fitness, professional training, and clean personal antecedents.",
      icon: <UserCheck className="w-8 h-8 text-accent" />,
    },
    {
      title: "Compulsory Record Keeping",
      description: "Agencies are required to maintain detailed registers of managers, staff, and clients, ensuring full accountability for every case undertaken.",
      icon: <BookOpen className="w-8 h-8 text-accent" />,
    },
    {
      title: "Protection of Rights",
      description: "Any violation of an individual’s right to privacy or freedom is strictly prohibited and subject to legal penalties.",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    },
  ];

  const ethics = [
    {
      title: "Privacy First",
      description: "We respect the \"Right to Privacy\" as defined by the Supreme Court of India, ensuring our methods are discreet and legally sound.",
      icon: <EyeOff className="w-6 h-6 text-accent" />,
    },
    {
      title: "Indian Citizenship",
      description: "All our field operatives are verified Indian citizens with specialized training in surveillance and intelligence.",
      icon: <User className="w-6 h-6 text-accent" />,
    },
    {
      title: "Confidential Documentation",
      description: "We maintain secure, encrypted records of all client interactions and investigation findings.",
      icon: <Lock className="w-6 h-6 text-accent" />,
    },
    {
      title: "Operational Transparency",
      description: "We provide our clients with a clear \"gist of work\" and transparent fee structures, avoiding the ambiguities often found in unregulated agencies.",
      icon: <Scale className="w-6 h-6 text-accent" />,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Header Intro */}
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="font-playfair text-3xl md:text-5xl uppercase tracking-wider mb-6">
              The Legal Landscape
              <span className="block mt-2 text-2xl md:text-3xl text-accent italic opacity-90">
                Private Detective Agencies (Regulation) Bill
              </span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="font-inter text-foreground/80 md:text-lg leading-relaxed max-w-3xl mx-auto">
              At H S Detectives Agency Mumbai, we believe in absolute transparency and professional accountability. While the private investigation industry in India currently operates without a dedicated central regulatory body, we voluntarily adhere to the highest standards proposed in the Private Detective Agencies (Regulation) Bill.
            </p>
          </motion.div>

          {/* Overview */}
          <motion.div variants={fadeUp} className="mb-20 p-8 md:p-12 border border-border bg-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
            <h3 className="font-playfair text-2xl md:text-3xl mb-4 tracking-wider uppercase">
              Overview of the <span className="text-accent">Proposed Regulatory Framework</span>
            </h3>
            <p className="font-inter text-foreground/80 leading-relaxed text-base md:text-lg">
              The Private Detective Agencies (Regulation) Bill was designed to bring structure, licensing, and a strict code of conduct to the investigative profession in India. Its primary goal is to protect the interests of both the clients and the public.
            </p>
          </motion.div>

          {/* Core Pillars Grid */}
          <motion.div variants={fadeUp} className="mb-24">
            <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-center tracking-wider uppercase">
              Core Pillars of <span className="text-accent italic">Professional Regulation</span>
            </h3>
            <p className="font-inter text-center text-foreground/70 mb-10 text-base md:text-lg">
              We align our operations with the key highlights of the proposed legislation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corePillars.map((item, index) => (
                <div key={index} className="bg-background border border-border p-8 hover:border-accent transition-colors duration-400 group">
                  <div className="mb-6 bg-secondary/50 border border-border w-16 h-16 flex items-center justify-center rounded-md group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-playfair text-xl md:text-2xl mb-3 tracking-wide font-bold">
                    {item.title}
                  </h4>
                  <p className="font-inter text-foreground/70 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ethics Section */}
          <motion.div variants={fadeUp} className="mb-24 bg-black border-2 border-accent p-8 md:p-12 text-white shadow-[8px_8px_0px_#cc0000]">
            <div className="text-center mb-10">
              <h3 className="font-playfair text-2xl md:text-4xl uppercase tracking-wider mb-4">
                H S Detectives: <span className="italic text-white">Leading with Ethics</span>
              </h3>
              <p className="font-inter text-white/80 md:text-lg">
                Although a centralized law is still evolving, H S Detectives Agency Mumbai operates with a self-imposed code of ethics that mirrors international standards:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ethics.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 border border-white/10 hover:border-white/30 transition-colors bg-white/5">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-playfair text-lg md:text-xl font-bold tracking-wide mb-2 text-accent">
                      {item.title}
                    </h5>
                    <p className="font-inter text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div variants={fadeUp} className="text-center relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full -z-10" />
            <h4 className="font-playfair text-2xl md:text-3xl font-bold tracking-widest uppercase mb-4">
              Why Regulation <span className="text-accent underline decoration-2 underline-offset-8">Matters to You</span>
            </h4>
            <p className="font-inter font-medium leading-relaxed text-foreground/80 md:text-lg max-w-2xl mx-auto">
              Choosing a regulated-style agency like H S Detectives ensures that your sensitive matters are handled by professionals who understand the law. We don't just find the truth; <span className="text-foreground font-bold">we find it the right way.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
