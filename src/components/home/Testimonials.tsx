"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const REVIEWS = [
  {
    name: "Rajiv Sharma",
    role: "Corporate Director",
    text: "H S Detectives uncovered a massive internal fraud ring within our supply chain. Their meticulous evidence gathering was flawless. True professionals.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    name: "Subhash Kumar",
    role: "Business Owner",
    text: "When we suspected IP theft, their undercover operatives provided the exact proof needed to stop the leak. I highly recommend their services.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    name: "Priya Yadav",
    role: "Private Client",
    text: "Discreet, empathetic, and incredibly thorough. They handled my complex family matter with utmost sensitivity and produced undeniable facts.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
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
    <section className="py-32 relative overflow-hidden bg-secondary-bg">
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
          className="text-center max-w-2xl mx-auto mb-16"
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
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-foreground uppercase tracking-wider">
            Words Of <span className="text-foreground/40 italic">Trust</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider */}
          <div className="overflow-hidden px-4 md:px-0" ref={emblaRef}>
            <div className="flex -ml-4">
               {REVIEWS.map((review, i) => (
                 <div key={i} className="flex-[0_0_100%] md:flex-[0_0_80%] pl-4">
                   <div className="bg-card border border-foreground/5 p-8 md:p-12 relative mt-12 rounded-sm group hover:border-accent/20 transition-colors">
                     {/* Quote Icon */}
                     <Quote size={80} className="absolute top-6 right-6 text-foreground/5 group-hover:text-accent/10 dark:group-hover:text-accent/5 transition-colors" />
                     
                     {/* Avatar */}
                     <div className="absolute -top-12 left-8 md:left-12 w-24 h-24 rounded-full border-2 border-foreground/20 p-1 bg-card">
                       <div className="relative w-full h-full rounded-full overflow-hidden">
                         <Image 
                           src={review.image} 
                           alt={review.name} 
                           fill 
                           className="object-cover img-noir group-hover:filter-none transition-all duration-500" 
                         />
                       </div>
                     </div>

                     <div className="pt-12">
                       <p className="font-inter text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                         "{review.text}"
                       </p>
                       <div>
                         <h4 className="font-playfair text-xl text-foreground uppercase tracking-widest">{review.name}</h4>
                         <p className="font-space text-[10px] text-accent tracking-[0.2em] uppercase mt-1">{review.role}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={scrollPrev} 
              className="w-12 h-12 rounded-full border border-foreground/20 text-foreground flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext} 
              className="w-12 h-12 rounded-full border border-foreground/20 text-foreground flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
