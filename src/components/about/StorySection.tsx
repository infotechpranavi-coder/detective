"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp, fadeRight, fadeLeft, slideReveal, staggerContainer } from "@/lib/animations";

export default function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN - Text */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Our Journey</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] uppercase tracking-wider">
              Roots In <span className="text-foreground/40 italic">Intelligence</span><br />
              Built On <span className="text-foreground/40 italic">Trust</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 text-foreground/70 font-inter text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Founded in Mumbai in 2011, H S Detectives began with a singular mission: to provide individuals and corporations with the clarity they need to make life-defining decisions. What started as a focused operational unit has grown into a Pan-India network.
              </p>
              <p>
                As licensed investigators, our approach marries traditional, rigorous field surveillance with cutting-edge digital forensics. We don&apos;t deal in speculation—we deliver documented, undeniable facts.
              </p>
              <p>
                Every case is unique, but our protocol remains the same: total confidentiality, swift execution, and unwavering integrity.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - IMAGE COLLAGE */}
          <motion.div 
            className="relative pr-6 pb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Gold Accent Line */}
            <motion.div 
              variants={slideReveal}
              className="absolute -left-4 top-10 w-[3px] h-20 bg-accent z-10"
            />

            {/* Primary Image */}
            <CustomImage 
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&h=600&q=80"
              alt="Detective Silhouette"
              width={500}
              height={600}
              animation="revealLeft"
              containerClassName="border border-foreground/10 w-full md:w-[85%] lg:w-[90%] md:ml-auto aspect-[4/5] object-cover"
              overlay="bg-background/50"
            />

            {/* Secondary Image */}
            <motion.div 
              variants={fadeLeft}
              className="absolute -bottom-6 -left-6 md:left-0 z-10 border-[3px] border-black bg-background p-1"
            >
              <CustomImage 
                src="https://img.freepik.com/premium-photo/focused-detective-studying-photographs-immersed-solving-case-dark-setting-ai-generative_186802-13162.jpg"
                alt="Detective Studying Photographs"
                width={260}
                height={200}
                animation="scaleUp"
                containerClassName="w-[200px] h-[160px] md:w-[260px] md:h-[200px]"
                overlay="bg-background/40"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div 
              variants={fadeUp}
              className="absolute -top-6 -right-6 md:right-0 bg-background border border-foreground/20 px-5 py-4 flex flex-col items-center justify-center z-20"
            >
              <span className="font-bebas text-3xl md:text-4xl text-foreground tracking-widest text-shadow-sm">15+ YEARS</span>
              <span className="font-space text-[10px] tracking-[0.2em] text-accent uppercase mt-1">Of Excellence</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
