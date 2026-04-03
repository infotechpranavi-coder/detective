"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const serviceAreas = [
  { label: "Personal Investigation", href: "/services/personal-investigation" },
  { label: "Corporate Investigation", href: "/services/corporate-investigation" },
  { label: "TSCM Services", href: "/services/tscm-services" },
  { label: "Risk Management", href: "/services/risk-management" },
  { label: "Surveillance", href: "/services/surveillance-shadowing" },
] as const;

const serviceLinksOne = [
  { label: "Brand Protection", href: "/services/risk-management/brand-protection" },
  { label: "Forensic Investigation", href: "/services/risk-management/forensic-investigation" },
  { label: "Assets Tracing", href: "/services/corporate-investigation/asset-tracing" },
  { label: "Post Matrimonial", href: "/services/personal-investigation/post-matrimonial-surveillance" },
  { label: "Fraud Investigation", href: "/services/surveillance-shadowing/fraud-investigation-monitoring" },
] as const;

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
          <div className="absolute inset-0 bg-linear-to-b from-background/40 to-background" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-full border-2 border-accent bg-white overflow-hidden flex items-center justify-center p-1">
                  <Image
                    src="/h-s-detectives-agency-goa-1603869378-5619610-removebg-preview (1).png"
                    alt="H S Detectives Logo"
                    width={56}
                    height={56}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair text-xl uppercase tracking-wider text-white">H S Detectives</span>
                  <span className="font-space text-sm text-accent tracking-widest uppercase">Since 2011</span>
                </div>
              </div>
            </Link>
            <p className="text-white/80 text-base font-inter leading-relaxed max-w-xs">
              A cinematic, licensed professional detective agency operating Pan India with 100% confidentiality.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/hsdetectives/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/hsdetectives/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://in.linkedin.com/company/hsdetectives" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@hsdetectives7128" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-all duration-300 hover:scale-110">
                <Youtube size={20} />
              </a>
              <a href="https://x.com/hsdetectives" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-space text-sm text-accent tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3 font-inter text-base">
              <li><Link href="/publication" className="text-white/70 hover:text-white transition-colors">Publication</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/regulation" className="text-white/70 hover:text-white transition-colors">Govt. Regulation</Link></li>
              <li><Link href="/membership" className="text-white/70 hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/certificate" className="text-white/70 hover:text-white transition-colors">Certification</Link></li>
              <li><Link href="/case-study" className="text-white/70 hover:text-white transition-colors">Case Study</Link></li>
              <li><Link href="/ethics" className="text-white/70 hover:text-white transition-colors">Our Ethics</Link></li>
              <li><Link href="/information" className="text-white/70 hover:text-white transition-colors">Information</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-6 -ml-2">
            <h4 className="font-space text-sm text-accent tracking-widest uppercase">Service Areas</h4>
            <ul className="space-y-3 font-inter text-base">
              {serviceAreas.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-white/70 hover:text-white transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-space text-sm text-accent tracking-widest uppercase">Services 1</h4>
            <ul className="space-y-3 font-inter text-base">
              {serviceLinksOne.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-white/70 hover:text-white transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-space text-sm text-accent tracking-widest uppercase">Contact Us</h4>
            <div className="space-y-4 font-inter text-base text-white/70">
              <a
                href="https://www.google.com/maps?q=H+S+Detectives+Agency+Mumbai,+crystal+plaza,+A/514,+New+Link+Rd,+Veera+Desai+Industrial+Estate,+Andheri+West,+Mumbai,+Maharashtra+400053&ftid=0x3be7b06618f08abb:0xc675e5f7f07f1ecd&entry=gps&shh=CAE&lucs=,94259550,94297699,94284457,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjEwLjIuODc3MzE3OTEwMBgAINeCAypRLDk0MjU5NTUwLDk0Mjk3Njk5LDk0Mjg0NDU3LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJJTg%3D%3D&skid=d87bc999-7f57-468b-8340-e5d438ebe1a2&g_st=iwb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Crystal Plaza, A/514, New Link Rd, Andheri West, Mumbai 400053
              </a>
              <div className="space-y-1">
                <p>+91 99304 03115</p>
                <p>+91 91525 31394</p>
              </div>
              <p>info@hsdetectives.com</p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 px-6 py-3 border-2 border-white text-white text-sm font-space uppercase tracking-widest hover:bg-accent hover:border-accent transition-all"
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
          <div className="flex flex-wrap justify-center gap-6 font-inter text-xs text-white/60">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="/refund-and-cancellation-policy" className="hover:text-white transition-colors">Refund and Cancellation Policy</Link>
            <Link href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
