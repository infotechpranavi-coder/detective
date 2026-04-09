"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, User, Briefcase, Heart, Search, Shield } from "lucide-react";

const SERVICES = [
  {
    title: "Personal Investigation",
    desc: "Discrete surveillance, pre-matrimonial checks, loyalty tests, missing person tracing, and background verifications for individuals.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    icon: User,
    category: "01 // INDIVIDUAL",
    href: "/services/personal-investigation",
  },
  {
    title: "Corporate Investigation",
    desc: "Protecting your business through employee background verification, fraud investigation, due diligence, asset tracing, and undercover operations.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    icon: Briefcase,
    category: "02 // CORPORATE",
    href: "/services/corporate-investigation",
  },
  {
    title: "TSCM Services",
    desc: "Advanced bug sweeping, hidden camera detection, RF signal analysis, and electronic counter-surveillance for offices, homes, and vehicles.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    icon: Shield,
    category: "03 // TECHNICAL",
    href: "/services/tscm-services",
  },
  {
    title: "Risk Management",
    desc: "Comprehensive IP protection, brand protection, risk advisory, business continuity support, and forensic investigation services.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    icon: Search,
    category: "04 // RISK",
    href: "/services/risk-management",
  },
  {
    title: "Surveillance",
    desc: "Expert physical surveillance, employee monitoring, matrimonial surveillance, fraud investigation monitoring, and real-time field intelligence.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    icon: Heart,
    category: "05 // SURVEILLANCE",
    href: "/services/surveillance-shadowing",
  },
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
    <section className="py-24 bg-white relative overflow-hidden border-t-2 border-black">
      <div className="container mx-auto mb-16 flex flex-col gap-8 px-6 lg:px-12 md:flex-row md:items-end md:justify-between">
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
          <h2 className="font-playfair text-4xl md:text-5xl text-black uppercase tracking-wider">
            Our Investigative<br /><span className="text-accent italic">Services</span>
          </h2>
        </motion.div>

        {/* Slider Controls */}
        <motion.div 
          className="flex items-center gap-4 self-start md:self-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={scrollPrev} 
            disabled={!prevBtnEnabled}
            className={`w-12 h-12 flex items-center justify-center border-2 transition-all ${prevBtnEnabled ? 'border-black text-black hover:bg-accent hover:border-accent hover:text-white' : 'border-black/20 text-black/20 cursor-not-allowed'}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollNext} 
            disabled={!nextBtnEnabled}
            className={`w-12 h-12 flex items-center justify-center border-2 transition-all ${nextBtnEnabled ? 'border-black text-black hover:bg-accent hover:border-accent hover:text-white' : 'border-black/20 text-black/20 cursor-not-allowed'}`}
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
                <div key={index} className="flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white border-2 border-black h-full flex flex-col hover:border-accent transition-colors duration-300"
                  >
                    {/* Top Image Half */}
                    <div className="relative h-[220px] w-full overflow-hidden bg-black">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                      
                      {/* Icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white bg-black/60 backdrop-blur-md flex items-center justify-center pointer-events-none group-hover:border-accent group-hover:bg-accent transition-colors duration-500">
                        <Icon size={24} className="text-white group-hover:text-white transition-colors" />
                      </div>

                      {/* Category Label */}
                      <div className="absolute bottom-4 left-6">
                        <span className="font-space text-[10px] text-white tracking-widest uppercase bg-accent px-2 py-1 border-2 border-white">{service.category}</span>
                      </div>
                    </div>

                    {/* Bottom Content Half */}
                    <div className="relative flex flex-grow flex-col bg-white p-6 sm:p-8">
                      <h3 className="font-playfair text-xl text-black mb-4 uppercase tracking-wider group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="font-inter text-sm text-black/70 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                      <Link 
                        href={service.href} 
                        className="inline-flex items-center gap-2 font-space text-[11px] uppercase tracking-widest text-accent hover:text-black transition-colors mt-auto w-max"
                      >
                        Know More <span className="text-lg leading-none">→</span>
                      </Link>
                      
                      {/* Hover subtle gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
