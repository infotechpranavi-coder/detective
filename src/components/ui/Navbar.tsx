"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { informationPageLinks } from "@/app/information/informationPagesData";
import { serviceDetails } from "@/app/services/serviceData";
import { subServicesByParent } from "@/app/services/subServiceData";

// ── Mega-menu service tree data ───────────────────────────────────────────────
const serviceTree = [
  {
    slug: "personal-investigation",
    label: "Personal Investigation",
    icon: "🔍",
  },
  {
    slug: "corporate-investigation",
    label: "Corporate Investigation",
    icon: "🏢",
  },
  {
    slug: "tscm-services",
    label: "TSCM Services",
    icon: "📡",
  },
  {
    slug: "risk-management",
    label: "Risk Management",
    icon: "🛡️",
  },
  {
    slug: "surveillance-shadowing",
    label: "Surveillance",
    icon: "👁️",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [informationOpen, setInformationOpen] = useState(false);
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [mobileExpandedParent, setMobileExpandedParent] = useState<string | null>(null);

  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega on route change
  useEffect(() => {
    setServicesOpen(false);
    setInformationOpen(false);
    setActiveParent(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Location", path: "/locations" },
    { name: "Clients", path: "/clients" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const baseNavClass = scrolled
    ? "text-black/70 hover:text-black"
    : "text-white/70 hover:text-white";

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
    if (!activeParent) setActiveParent(serviceTree[0].slug);
  };

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveParent(null);
    }, 150);
  };

  const handleMegaEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleMegaLeave = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveParent(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b-2 border-black py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full pl-2 lg:pl-4 pr-6 lg:pr-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 mr-auto flex items-center gap-3 group z-[101]"
          >
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
              <span
                className={`font-playfair text-base leading-tight uppercase tracking-wider group-hover:text-accent transition-colors duration-500 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                H S Detectives
              </span>
              <span
                className={`font-space text-[10px] tracking-widest uppercase ${
                  scrolled ? "text-black/70" : "text-white/70"
                }`}
              >
                Agency Mumbai
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
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

            {/* ── SERVICES MEGA-MENU ─────────────────────────────────────── */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href="/services"
                className={`relative flex items-center gap-1 whitespace-nowrap font-inter text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                  pathname.startsWith("/services") ? "text-accent" : baseNavClass
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                    className="absolute left-1/2 top-full mt-4 -translate-x-1/2 rounded-2xl border border-black/10 bg-white shadow-[0_32px_80px_rgba(0,0,0,0.15)] overflow-hidden"
                    style={{ width: "640px" }}
                  >
                    <div className="flex h-full">
                      {/* Left column – parent services */}
                      <div className="w-[240px] flex-shrink-0 bg-neutral-50 border-r border-black/8 py-3">
                        <p className="px-5 pb-2 font-space text-[9px] uppercase tracking-[0.22em] text-black/35">
                          Service Areas
                        </p>
                        {serviceTree.map((item) => {
                          const isActive = activeParent === item.slug;
                          return (
                            <button
                              key={item.slug}
                              onMouseEnter={() => setActiveParent(item.slug)}
                              onClick={() => setActiveParent(item.slug)}
                              className={`w-full flex items-center justify-between px-5 py-3 text-left transition-all duration-150 group ${
                                isActive
                                  ? "bg-white border-r-2 border-red-600"
                                  : "hover:bg-white/70"
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <span className="text-base leading-none">{item.icon}</span>
                                <span
                                  className={`font-inter text-[12px] font-semibold leading-tight transition-colors ${
                                    isActive ? "text-red-600" : "text-black/80 group-hover:text-black"
                                  }`}
                                >
                                  {item.label}
                                </span>
                              </span>
                              <ChevronRight
                                size={13}
                                className={`transition-all ${
                                  isActive ? "text-red-600 translate-x-0.5" : "text-black/30"
                                }`}
                              />
                            </button>
                          );
                        })}

                        {/* View all services link */}
                        <div className="mt-2 px-5 pt-2 border-t border-black/8">
                          <Link
                            href="/services"
                            className="font-space text-[10px] uppercase tracking-[0.18em] text-red-600 hover:text-red-700 transition-colors"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>

                      {/* Right column – sub-services */}
                      <div className="flex-1 py-3 px-2 overflow-y-auto max-h-[420px]">
                        <AnimatePresence mode="wait">
                          {activeParent && (
                            <motion.div
                              key={activeParent}
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              transition={{ duration: 0.15 }}
                            >
                              {/* Parent link */}
                              <Link
                                href={`/services/${activeParent}`}
                                className="flex items-center gap-2 px-4 py-2.5 mb-1 rounded-xl hover:bg-red-50 group transition-colors"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                <span className="font-inter text-[12px] font-bold text-black group-hover:text-red-600 transition-colors">
                                  {serviceTree.find((s) => s.slug === activeParent)?.label} Overview
                                </span>
                              </Link>

                              <div className="h-px bg-black/6 mx-4 mb-2" />

                              <p className="px-4 pb-1.5 font-space text-[9px] uppercase tracking-[0.2em] text-black/35">
                                Specialisations
                              </p>

                              {(subServicesByParent[activeParent] ?? []).map((sub) => (
                                <Link
                                  key={sub.slug}
                                  href={`/services/${activeParent}/${sub.slug}`}
                                  className="flex items-start gap-3 px-4 py-2.5 rounded-xl hover:bg-neutral-50 group transition-colors"
                                >
                                  <div className="mt-1.5 w-1 h-1 rounded-full bg-black/20 group-hover:bg-red-500 flex-shrink-0 transition-colors" />
                                  <span className="font-inter text-[12px] font-medium text-black/70 group-hover:text-black transition-colors leading-tight">
                                    {sub.navLabel}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
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

            {/* ── INFORMATION DROPDOWN ──────────────────────────────────── */}
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
                <ChevronDown
                  size={14}
                  className={`transition-transform ${informationOpen ? "rotate-180" : ""}`}
                />
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
                      <p className="font-inter text-sm font-semibold text-black">
                        Information Hub
                      </p>
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
                        <p className="font-inter text-sm font-semibold text-black">
                          {item.navLabel}
                        </p>
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

          {/* Mobile hamburger */}
          <div className="xl:hidden flex items-center gap-4 z-[101]">
            <button
              className={mobileMenuOpen ? "text-accent" : scrolled ? "text-black" : "text-white"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-start overflow-y-auto"
          >
            <nav className="flex flex-col gap-1 text-center py-24 w-full px-6">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-playfair text-2xl uppercase tracking-wider py-2 ${
                    pathname === link.path ? "text-accent" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-center gap-2 font-playfair text-2xl uppercase tracking-wider py-2 text-black"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-neutral-50 rounded-2xl p-4 mb-2 text-left">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-center font-inter text-sm font-bold uppercase tracking-widest text-red-600 py-2 border-b border-black/10 mb-2"
                      >
                        All Services →
                      </Link>
                      {serviceTree.map((parent) => (
                        <div key={parent.slug} className="mb-1">
                          <button
                            onClick={() =>
                              setMobileExpandedParent(
                                mobileExpandedParent === parent.slug ? null : parent.slug
                              )
                            }
                            className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-sm">{parent.icon}</span>
                              <span className="font-inter text-[13px] font-semibold text-black">
                                {parent.label}
                              </span>
                            </span>
                            <ChevronDown
                              size={14}
                              className={`text-black/40 transition-transform ${
                                mobileExpandedParent === parent.slug ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileExpandedParent === parent.slug && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-10"
                              >
                                <Link
                                  href={`/services/${parent.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1.5 font-inter text-[12px] font-bold text-red-600"
                                >
                                  {parent.label} Overview
                                </Link>
                                {(subServicesByParent[parent.slug] ?? []).map((sub) => (
                                  <Link
                                    key={sub.slug}
                                    href={`/services/${parent.slug}/${sub.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1.5 font-inter text-[12px] text-black/60 hover:text-black transition-colors"
                                  >
                                    → {sub.navLabel}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.slice(2, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-playfair text-2xl uppercase tracking-wider py-2 ${
                    pathname === link.path ? "text-accent" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Information accordion */}
              <button
                onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
                className="flex items-center justify-center gap-2 font-playfair text-2xl uppercase tracking-wider py-2 text-black"
              >
                Information
                <ChevronDown
                  size={18}
                  className={`transition-transform ${mobileInfoOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {mobileInfoOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-neutral-50 rounded-2xl p-3 mb-2 flex flex-col gap-1">
                      <Link
                        href="/information"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-xl font-inter text-[13px] font-bold text-black hover:bg-white transition-colors"
                      >
                        Information Hub
                      </Link>
                      {informationPageLinks.map((item) => (
                        <Link
                          key={item.slug}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 px-3 rounded-xl font-inter text-[13px] hover:bg-white transition-colors ${
                            pathname === item.href
                              ? "text-accent font-semibold"
                              : "text-black/70"
                          }`}
                        >
                          {item.navLabel}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-playfair text-2xl uppercase tracking-wider py-2 ${
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
