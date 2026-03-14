"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, User, Briefcase, Heart, Link as LinkIcon, Search, Shield } from "lucide-react";

const SERVICES = [
  {
    title: "Personal Investigation",
    desc: "Discrete surveillance and background checks to provide you with the truth you need about individuals in your personal life.",
    image: "https://images.unsplash.com/photo-1453873531674-2151bcd01b50?auto=format&fit=crop&w=600&q=80",
    icon: User,
    category: "01 // INDIVIDUAL"
  },
  {
    title: "Business Investigation",
    desc: "Protecting your corporate interests through employee verifications, competitor analysis, and fraud detection.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    icon: Briefcase,
    category: "02 // CORPORATE"
  },
  {
    title: "Pre Matrimonial",
    desc: "Comprehensive background checks, financial mapping, and character verification before you make life's biggest commitment.",
    image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=600&q=80",
    icon: Heart,
    category: "03 // MATRIMONIAL"
  },
  {
    title: "Post Matrimonial",
    desc: "Confidential investigation into suspected infidelity, hidden assets, or gathering evidence for legal proceedings.",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80",
    icon: LinkIcon, // Custom lucide isn't real 'Rings'
    category: "04 // MATRIMONIAL"
  },
  {
    title: "Divorce Case Evidence",
    desc: "Legally admissible evidence gathering to support child custody battles, alimony claims, and divorce settlements.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
    icon: Search,
    category: "05 // LEGAL"
  },
  {
    title: "Debugging & Sweeping",
    desc: "Advanced electronic countermeasures to detect and remove hidden cameras, listening devices, and GPS trackers.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    icon: Shield,
    category: "06 // TECHNICAL"
  }
];

export default function ServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-card relative overflow-hidden border-t border-foreground/5">
      <div className="container mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Core Expertise</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground uppercase tracking-wider">
            Our Investigative<br /><span className="text-foreground/40 italic">Services</span>
          </h2>
        </motion.div>

        {/* Slider Controls */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={scrollPrev} 
            disabled={!prevBtnEnabled}
            className={`w-12 h-12 flex items-center justify-center border transition-all ${prevBtnEnabled ? 'border-foreground/20 dark:border-white/30 text-foreground hover:bg-accent hover:border-accent hover:text-background' : 'border-foreground/10 text-foreground/20 cursor-not-allowed'}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollNext} 
            disabled={!nextBtnEnabled}
            className={`w-12 h-12 flex items-center justify-center border transition-all ${nextBtnEnabled ? 'border-foreground/20 dark:border-white/30 text-foreground hover:bg-accent hover:border-accent hover:text-background' : 'border-foreground/10 text-foreground/20 cursor-not-allowed'}`}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-surface border border-foreground/5 h-full flex flex-col"
                  >
                    {/* Top Image Half */}
                    <div className="relative h-[220px] w-full overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover img-noir transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
                      
                      {/* Icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md flex items-center justify-center pointer-events-none group-hover:border-accent/50 group-hover:text-accent transition-colors duration-500">
                        <Icon size={24} className="text-foreground group-hover:text-accent transition-colors" />
                      </div>

                      {/* Category Label */}
                      <div className="absolute bottom-4 left-6">
                        <span className="font-space text-[10px] text-accent tracking-widest uppercase bg-background/80 px-2 py-1 border border-foreground/10">{service.category}</span>
                      </div>
                    </div>

                    {/* Bottom Content Half */}
                    <div className="p-8 flex flex-col flex-grow relative">
                      <h3 className="font-playfair text-xl text-foreground mb-4 uppercase tracking-wider">{service.title}</h3>
                      <p className="font-inter text-sm text-foreground/50 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                      <Link 
                        href="/services" 
                        className="inline-flex items-center gap-2 font-space text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors mt-auto w-max"
                      >
                        Know More <span className="text-lg leading-none">→</span>
                      </Link>
                      
                      {/* Hover subtle gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent-dark via-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
