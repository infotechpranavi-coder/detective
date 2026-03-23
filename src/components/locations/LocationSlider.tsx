"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

const OFFICES = [
  {
    name: "Hyderabad Office",
    type: "BRANCH",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=700&h=400&q=80",
    address: "14th Road, Fortune Enclave, Sri Ram Nagar Colony, Banjara Hills, Hyderabad, Telangana 500873",
    phone: "1800-456-7890",
    email: "info@hsdetectives.com"
  },
  {
    name: "Pune Office",
    type: "BRANCH",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=700&h=400&q=80",
    address: "Raw House No. 1, Elite Brookland, Baner - Balewadi Road, Baner, Pune, Maharashtra 411045 (Near Syngent)",
    phone: "1800-456-7890",
    email: "info@hsdetectives.com"
  },
  {
    name: "Mumbai Office",
    type: "HEAD OFFICE",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=700&h=400&q=80",
    address: "B/514, Crystal Plaza, New Link Rd, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053",
    mapUrl:
      "https://www.google.com/maps?q=H+S+Detectives+Agency+Mumbai,+crystal+plaza,+A/514,+New+Link+Rd,+Veera+Desai+Industrial+Estate,+Andheri+West,+Mumbai,+Maharashtra+400053&ftid=0x3be7b06618f08abb:0xc675e5f7f07f1ecd&entry=gps&shh=CAE&lucs=,94259550,94297699,94284457,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjEwLjIuODc3MzE3OTEwMBgAINeCAypRLDk0MjU5NTUwLDk0Mjk3Njk5LDk0Mjg0NDU3LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJJTg%3D%3D&skid=d87bc999-7f57-468b-8340-e5d438ebe1a2&g_st=iwb",
    phone: "+91 98765 43210",
    email: "hq@hsdetectives.com"
  },
  {
    name: "Navi Mumbai Office",
    type: "BRANCH",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=700&h=400&q=80",
    address: "F-01 A/16, Haware Centurion Mall, Sect - 19, Near Seawoods Station, Nerul (E), Navi Mumbai, Maharashtra 400706",
    phone: "1800-456-7890",
    email: "info@hsdetectives.com"
  },
  {
    name: "Thane Office",
    type: "BRANCH",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&h=400&q=80",
    address: "Shop No. 66, Ground Floor, Cinewonder Mall, Kapurbawdi, Thane West, Thane, Maharashtra 400607",
    phone: "1800-456-7890",
    email: "info@hsdetectives.com"
  },
  {
    name: "Corporate Office",
    type: "CORPORATE",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&h=400&q=80",
    address: "A/514, Crystal Plaza, New Link Road, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053",
    phone: "1800-456-7890",
    email: "info@hsdetectives.com"
  },
  {
    name: "Goa Office",
    type: "BRANCH",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=700&h=400&q=80",
    address: "Office number 09, 3rd Floor, Patto Centre Building, Patto Business Centre, Panaji, Goa - 403001",
    phone: "1800-456-7890",
    email: "info@hsdetectives.com"
  },
  {
    name: "Delhi Office",
    type: "BRANCH",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=700&h=400&q=80",
    address: "105, Shiva Rd, Pocket 14, Sector 8D, Rohini, Delhi, 110085",
    phone: "1800-456-7890",
    email: "info@hsdetectives.com"
  },
];

export default function LocationSlider() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-4 mb-4">
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Physical Presence</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-foreground uppercase tracking-wider">
            Our <span className="text-foreground/40 italic">Offices</span>
          </motion.h2>
        </motion.div>

        <div className="w-full relative max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-foreground/5 flex flex-col overflow-hidden group hover:border-accent/30 transition-colors duration-500 h-full"
              >
                <div className="relative h-[220px] w-full overflow-hidden shrink-0">
                  <img src={office.image} alt={office.name} className="w-full h-full object-cover img-noir group-hover:scale-[1.06] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors duration-500" />

                  <div className="absolute bottom-4 left-6 z-10">
                    <span className={`font-space text-[10px] tracking-widest uppercase px-3 py-1.5 ${office.type === "HEAD OFFICE" ? "bg-accent text-background font-bold" : "bg-background/70 text-foreground border border-foreground/20"}`}>
                      {office.type}
                    </span>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <MapPin size={32} className="text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-bounce" fill="currentColor" />
                    <div className="w-4 h-1 bg-background/50 rounded-[100%] blur-[2px] mt-1" />
                  </div>
                </div>

                <div className="p-8 flex flex-col grow relative bg-white dark:bg-[#0D0D0D] z-20">
                  <h3 className="font-playfair text-2xl text-foreground uppercase tracking-wider mb-6 group-hover:text-accent transition-colors">{office.name}</h3>

                  <div className="space-y-4 mb-8 grow">
                    <div className="flex items-start gap-4">
                      <MapPin size={18} className="text-foreground/40 shrink-0 mt-0.5" />
                      <span className="font-inter text-sm text-foreground/60 leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone size={18} className="text-foreground/40 shrink-0" />
                      <span className="font-inter text-sm text-foreground/60">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-foreground/40 shrink-0" />
                      <span className="font-inter text-sm text-foreground/60">{office.email}</span>
                    </div>
                  </div>

                  <Link
                    href={office.mapUrl ?? `https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                    target="_blank"
                    className="inline-flex items-center gap-3 font-space text-[10px] uppercase tracking-widest text-accent hover:text-foreground transition-colors border-b border-accent/30 hover:border-foreground/40 w-max pb-1"
                  >
                    Get Directions <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
