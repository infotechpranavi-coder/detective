"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Shield, Award, CheckCircle, Scale, GraduationCap, MapPin } from "lucide-react";

const CREDENTIALS = [
  { icon: Shield, title: "Licensed Agency", desc: "Fully registered and recognized by state authorities for private investigation." },
  { icon: Award, title: "Industry Certified", desc: "Members of the Association of Private Detectives and Investigators (APDI)." },
  { icon: CheckCircle, title: "100% Legal", desc: "All evidence is gathered within the framework of the Indian legal system." },
  { icon: Scale, title: "Court Admissible", desc: "Reports and digital evidence are prepared to withstand judicial scrutiny." },
  { icon: GraduationCap, title: "Expert Operatives", desc: "Team comprises ex-military intelligence and cyber forensic experts." },
  { icon: MapPin, title: "Pan India Presence", desc: "Seamless operations across all major Indian cities and states." },
];

export default function TeamCredentials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      {/* Full Width Image Banner */}
      <div className="relative w-full h-[40vh] min-h-[400px] mb-24 overflow-hidden -mt-24">
        <CustomImage 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80"
          alt="Team Meeting"
          animation="parallax"
          parallaxY={parallaxY}
          containerClassName="absolute inset-0 z-0"
          overlay="bg-background/70"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl lg:text-6xl text-foreground uppercase tracking-wider leading-snug drop-shadow-xl max-w-4xl"
          >
            A Team of Licensed Professional <span className="text-accent italic">Investigators</span>
          </motion.h2>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Qualifications</span>
            <h3 className="font-playfair text-3xl text-foreground mt-4 uppercase tracking-wider">Credentials & Capabilities</h3>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CREDENTIALS.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <motion.div key={i} variants={fadeUp} className="bg-card border border-foreground/5 p-8 hover:border-accent/30 transition-colors group">
                <div className="w-14 h-14 bg-background border border-foreground/10 rounded-full flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                  <Icon size={24} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-playfair text-xl text-foreground mb-3 uppercase tracking-wider">{cred.title}</h4>
                <p className="font-inter text-sm text-foreground/50 leading-relaxed">{cred.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
