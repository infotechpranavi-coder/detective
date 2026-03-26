"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Ethics", path: "/ethics" },
    { name: "Clients", path: "/clients" },
    { name: "Services", path: "/services" },
    { name: "Certification", path: "/certificate" },
    { name: "Blog", path: "/blog" },
    { name: "Membership", path: "/membership" },
    { name: "Packages", path: "/packages" },
    { name: "Locations", path: "/locations" },
    { name: "Publication", path: "/publication" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-100 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b-2 border-black py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="w-full pl-2 lg:pl-4 pr-6 lg:pr-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-auto flex items-center gap-3 group z-101">
            <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden bg-white rounded-full border-2 border-black shadow-[2px_2px_0px_#000] p-1 group-hover:border-accent group-hover:shadow-[2px_2px_0px_#cc0000] transition-all duration-500">
              <Image 
                src="/h-s-detectives-agency-goa-1603869378-5619610-removebg-preview (1).png" 
                alt="HS Detectives Logo" 
                fill 
                className="object-contain p-1.5" 
                priority 
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-playfair text-base leading-tight uppercase tracking-wider group-hover:text-accent transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>
                H S Detectives
              </span>
              <span className={`font-space text-[10px] tracking-widest uppercase ${scrolled ? 'text-black/70' : 'text-white/70'}`}>Agency Mumbai</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative whitespace-nowrap font-inter text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-accent" : scrolled ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 w-full h-px bg-accent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center gap-4 z-101">
            <button
              className={mobileMenuOpen ? "text-accent" : scrolled ? "text-black" : "text-white"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-4 text-center py-20 overflow-y-auto w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-playfair text-2xl uppercase tracking-wider ${
                    pathname === link.path ? "text-accent" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
