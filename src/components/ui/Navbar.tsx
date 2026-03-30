"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { informationPageLinks } from "@/app/information/informationPagesData";
import { serviceDetails } from "@/app/services/serviceData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [informationOpen, setInformationOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Location", path: "/locations" },
    { name: "Clients", path: "/clients" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const baseNavClass = scrolled ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-100 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b-2 border-black py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="w-full pl-2 lg:pl-4 pr-6 lg:pr-12 flex justify-between items-center">
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
              <span className={`font-playfair text-base leading-tight uppercase tracking-wider group-hover:text-accent transition-colors duration-500 ${scrolled ? "text-black" : "text-white"}`}>
                H S Detectives
              </span>
              <span className={`font-space text-[10px] tracking-widest uppercase ${scrolled ? "text-black/70" : "text-white/70"}`}>Agency Mumbai</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative whitespace-nowrap font-inter text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-accent" : baseNavClass
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

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`relative flex items-center gap-1 whitespace-nowrap font-inter text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                  pathname.startsWith("/services") ? "text-accent" : baseNavClass
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                {pathname.startsWith("/services") && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 w-full h-px bg-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-4 w-[320px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-3 shadow-2xl"
                  >
                    {serviceDetails.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-xl px-4 py-3 hover:bg-neutral-100 transition-colors"
                      >
                        <p className="font-space text-[10px] uppercase tracking-[0.2em] text-accent mb-1">Service Page</p>
                        <p className="font-inter text-sm font-semibold text-black">{service.navLabel}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2, 4).map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative whitespace-nowrap font-inter text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-accent" : baseNavClass
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

            <div
              className="relative"
              onMouseEnter={() => setInformationOpen(true)}
              onMouseLeave={() => setInformationOpen(false)}
            >
              <Link
                href="/information"
                className={`relative flex items-center gap-1 whitespace-nowrap font-inter text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                  pathname === "/information" ||
                  informationPageLinks.some((item) => pathname === item.href)
                    ? "text-accent"
                    : baseNavClass
                }`}
              >
                Information
                <ChevronDown size={14} className={`transition-transform ${informationOpen ? "rotate-180" : ""}`} />
                {(pathname === "/information" ||
                  informationPageLinks.some((item) => pathname === item.href)) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 w-full h-px bg-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>

              <AnimatePresence>
                {informationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-4 w-[320px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-3 shadow-2xl"
                  >
                    <Link
                      href="/information"
                      className="block rounded-xl px-4 py-3 hover:bg-neutral-100 transition-colors"
                    >
                      <p className="font-space text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                        Overview
                      </p>
                      <p className="font-inter text-sm font-semibold text-black">Information Hub</p>
                    </Link>

                    {informationPageLinks.map((item) => (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 hover:bg-neutral-100 transition-colors"
                      >
                        <p className="font-space text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                          Insight Page
                        </p>
                        <p className="font-inter text-sm font-semibold text-black">{item.navLabel}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(4).map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative whitespace-nowrap font-inter text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-accent" : baseNavClass
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
              {navLinks.slice(0, 2).map((link) => (
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

              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-playfair text-2xl uppercase tracking-wider ${
                  pathname === "/services" ? "text-accent" : "text-black"
                }`}
              >
                Services
              </Link>

              <div className="mb-4 flex flex-col gap-3 border-b border-black/10 pb-6">
                {serviceDetails.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-inter text-sm uppercase tracking-[0.2em] ${
                      pathname === `/services/${service.slug}` ? "text-accent" : "text-black/70"
                    }`}
                  >
                    {service.navLabel}
                  </Link>
                ))}
              </div>

              {navLinks.slice(2, 4).map((link) => (
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

              <Link
                href="/information"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-playfair text-2xl uppercase tracking-wider ${
                  pathname === "/information" ||
                  informationPageLinks.some((item) => pathname === item.href)
                    ? "text-accent"
                    : "text-black"
                }`}
              >
                Information
              </Link>

              <div className="mb-4 flex flex-col gap-3 border-b border-black/10 pb-6">
                {informationPageLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-inter text-sm uppercase tracking-[0.2em] ${
                      pathname === item.href ? "text-accent" : "text-black/70"
                    }`}
                  >
                    {item.navLabel}
                  </Link>
                ))}
              </div>

              {navLinks.slice(4).map((link) => (
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
