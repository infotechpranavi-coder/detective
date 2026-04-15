"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import { fadeUp, fadeRight, staggerContainer, scaleUp } from "@/lib/animations";

const aboutStats = ["100% Success", "15+ Yrs"];
const locationStats = ["13 Offices", "Pan India"];

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t-2 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT COLUMN - 60% */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">The Agency</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1]">
              INTELLIGENCE GATHERED.<br />
              <span className="text-accent italic">SECRETS UNCOVERED.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 text-black/80 font-inter text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Established in 2011, H S Detectives has built a formidable reputation as India&apos;s most trusted private investigation agency, trusted by BFSI institutions and corporates for high-sensitivity assignments. We specialize in complex corporate espionage, matrimonial verifications, and high-stakes surveillance operations.
              </p>
              <p>
                Operating with absolute discretion, our licensed team of former intelligence officers and modern cyber-security experts ensures that you receive undeniable proof, legally obtained and completely confidential.
              </p>
              <p>
                From Mumbai, Thane, and Navi Mumbai to Delhi, Pune, and Hyderabad, we support clients who need reliable fact-finding before taking critical personal or business decisions. Our investigators handle background checks, due diligence, fraud review, asset tracing, bug sweeping, and field surveillance with a process designed to protect privacy, preserve evidence quality, and deliver clear reporting you can act on.
              </p>
              <div className="rounded-sm border border-black/10 bg-black/[0.03] p-5">
                <h3 className="font-space text-xs uppercase tracking-[0.2em] text-black">Why Partner With Us</h3>
                <p className="mt-3">
                  H S Detectives combines confidential private investigation experience, local Mumbai intelligence, and pan-India operational reach to support personal, corporate, matrimonial, and surveillance cases. Clients partner with us for discreet execution, evidence-led reporting, legally compliant methods, and fast response when decisions carry emotional, legal, or financial risk. Every assignment is handled with professionalism, privacy, and a clear strategy built around verified facts.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-4 flex items-center gap-8">
              <Link href="/about-us" className="group relative inline-flex items-center gap-4 pb-2">
                <span className="font-space text-sm tracking-widest text-black uppercase group-hover:text-accent transition-colors">Read Our Story</span>
                <span className="w-8 h-[1px] bg-black group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - 40% */}
          <motion.div 
            className="relative mt-16 sm:mt-20 lg:col-span-5 lg:mt-0"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <CustomImage 
              src="https://img.freepik.com/premium-photo/detective-investigate-concept-job-spy-background_1279562-19980.jpg"
              alt="Detective Investigate Concept"
              width={600}
              height={700}
              animation="revealLeft"
              className="w-full aspect-[4/5] md:aspect-[3/4]"
              containerClassName="border-2 border-black"
              overlay="bg-gradient-to-br from-black/20 via-accent/20 to-black/60 mix-blend-normal"
            />

            {/* Floating Logo Card - Bottom Left */}
            <Link href="/our-corporate-clients" className="mt-4 inline-block lg:absolute lg:-left-12 lg:-bottom-6 lg:mt-0 z-10">
              <motion.div 
                variants={fadeUp}
                className="flex items-center gap-4 border-2 border-black bg-white p-4 shadow-lg transition-colors hover:border-accent sm:p-5 md:p-6"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM5.12 15C3.39 15 2 16.39 2 18.12V22H22V18.12C22 16.39 20.61 15 18.88 15H5.12Z" fill="currentColor"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-playfair text-black text-lg leading-tight uppercase tracking-wider">Trusted by</span>
                  <span className="font-space text-accent text-[10px] tracking-widest uppercase">BFSI &amp; Corporates</span>
                </div>
              </motion.div>
            </Link>

            {/* Floating Stats Grid - Bottom Right (overlapping) */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:absolute lg:-right-8 lg:bottom-12 lg:mt-0 lg:grid-cols-1 z-10">
              {[...aboutStats.map((stat) => ({ label: stat, href: "/about-us" })), ...locationStats.map((stat) => ({ label: stat, href: "/hs-detectives-locations" }))].map((stat, i) => (
                <Link key={stat.label} href={stat.href}>
                <motion.div 
                  variants={scaleUp}
                  className="bg-white border-2 border-black px-3 py-2 text-center font-space text-[10px] text-black tracking-widest uppercase shadow-lg transition-colors hover:border-accent sm:px-4 whitespace-nowrap"
                >
                  {stat.label}
                </motion.div>
                </Link>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}


