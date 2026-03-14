"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <footer ref={containerRef} className="relative bg-black text-white pt-24 pb-12 overflow-hidden border-t-2 border-white">
      {/* Top Thin Image Strip Above Main Footer */}
      <div className="absolute top-0 left-0 w-full h-[120px] overflow-hidden -z-10">
        <motion.div style={{ y, height: "150%" }} className="relative w-full">
          <Image
            src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80"
            alt="Dark City Overlay"
            fill
            className="object-cover object-[center_60%] opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative">
               <div className="flex items-center gap-3">
                 <div className="relative w-12 h-12 rounded-full border border-accent/40 flex items-center justify-center">
                    {/* Silhouette SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM5.12 15C3.39 15 2 16.39 2 18.12V22H22V18.12C22 16.39 20.61 15 18.88 15H5.12Z" fill="currentColor"/>
                    </svg>
                 </div>
                 <div className="flex flex-col">
                   <span className="font-playfair text-xl uppercase tracking-wider text-white">H S Detectives</span>
                   <span className="font-space text-xs text-accent tracking-widest uppercase">Since 2011</span>
                 </div>
               </div>
            </Link>
            <p className="text-white/80 text-sm font-inter leading-relaxed max-w-xs">
              A cinematic, licensed professional detective agency operating Pan India with 100% confidentiality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-space text-xs text-accent tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3 font-inter text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/packages" className="text-white/70 hover:text-white transition-colors">Pricing Packages</Link></li>
              <li><Link href="/locations" className="text-white/70 hover:text-white transition-colors">Locations</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-space text-xs text-accent tracking-widest uppercase">Services</h4>
            <ul className="space-y-3 font-inter text-sm">
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Personal Investigation</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Business Investigation</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Matrimonial Checking</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Debugging & Sweeping</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-space text-xs text-accent tracking-widest uppercase">Contact Us</h4>
            <div className="space-y-4 font-inter text-sm text-white/70">
              <p>Mumbai HQ, Maharashtra, India</p>
              <p>1800-456-7890 (Toll Free)</p>
              <p>info@hsdetectives.com</p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 px-6 py-2 border-2 border-white text-white text-xs font-space uppercase tracking-widest hover:bg-accent hover:border-accent transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-white/60">
            &copy; {new Date().getFullYear()} H S Detectives. All rights reserved.
          </p>
          <div className="flex gap-6 font-inter text-xs text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
