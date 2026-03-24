"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Award, Shield, CheckCircle } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Professional Investigation Certificate",
    issuer: "Wahid Ali Shaikh",
    date: "Issued 2022",
    description: "Official professional certification validating core investigation skills and expertise.",
    image: "/certificates/20220619233645_Wahid_Ali_Shaikh__Certificate_page-0001.jpg",
    category: "Professional",
  },
  {
    id: 2,
    title: "ISEA Digital Certificate",
    issuer: "Information Security Education and Awareness",
    date: "Issued 2023",
    description: "Certification in Information Security and digital safety protocols.",
    image: "/certificates/ISEA Digital Certificate_page-0001.jpg",
    category: "Cyber Security",
  },
  {
    id: 3,
    title: "Udemy TSCM Specialization",
    issuer: "Udemy Professional Development",
    date: "Issued 2022",
    description: "Specialized training and certification in Technical Surveillance Countermeasures.",
    image: "/certificates/Udemy TSCM Certificate.jpg",
    category: "Technical",
  },
  {
    id: 4,
    title: "WAC India Pledge Certificate",
    issuer: "WAC Compliance Body",
    date: "Issued 2023",
    description: "A formal pledge and accreditation towards ethical practices in India.",
    image: "/certificates/WAC India Pledge Certificate_page-0001.jpg",
    category: "Ethics",
  },
  {
    id: 5,
    title: "Professional Accreditation",
    issuer: "Board of Private Investigators",
    date: "Issued 2021",
    description: "Standard industry accreditation for licensed investigation operations.",
    image: "/certificates/certificate (1).jpg",
    category: "Accreditation",
  },
  {
    id: 6,
    title: "Security Masterclass Certificate",
    issuer: "Internal Security Board",
    date: "Issued 2023",
    description: "Advanced certification in comprehensive security management and field operations.",
    image: "/certificates/certificate (5).jpg",
    category: "Security",
  },
  {
    id: 7,
    title: "Advanced Investigation Training",
    issuer: "Global Security Academy",
    date: "Issued 2022",
    description: "Comprehensive training in modern investigation techniques and surveillance.",
    image: "/certificates/certificate (6).jpg",
    category: "Technical",
  },
  {
    id: 8,
    title: "Licensed Detective Certification",
    issuer: "State Investigation Bureau",
    date: "Issued 2021",
    description: "Official state-issued certification for licensed private detectives.",
    image: "/certificates/certificate.jpg",
    category: "Legal",
  },
];

export default function CertificateShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Award className="text-accent h-6 w-6" />
              <span className="text-accent font-space text-sm tracking-widest uppercase">Verified Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-playfair mb-6"
            >
              Our Industry <span className="text-accent font-playfair italic">Certifications</span> & Professional Accreditations
            </motion.h2>
            <p className="text-black/60 text-lg max-w-2xl leading-relaxed">
              We maintain the highest standards of professional integrity and technical expertise. Our certifications are a testament to our commitment to providing world-class investigation services.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-accent/5 p-4 rounded-2xl border border-accent/10"
          >
            <Shield className="text-accent h-10 w-10 flex-shrink-0" />
            <div>
              <p className="font-bold text-black leading-tight">100% Licensed</p>
              <p className="text-sm text-black/60">Legally authorized for operations</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-black/5 shadow-sm group-hover:border-black transition-all duration-500">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ExternalLink size={18} />
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={14} className="text-accent" />
                    <span className="text-[10px] uppercase tracking-widest font-space text-accent">{cert.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 leading-tight">{cert.title}</h3>
                  <p className="text-xs text-white/70">{cert.issuer}</p>
                </div>
              </div>

              <div className="mt-4 px-2">
                <p className="text-sm text-black/70 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-space text-black/40">{cert.date}</span>
                  <div className="h-px flex-grow mx-4 bg-black/5" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-black rounded-3xl relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-playfair mb-6">Need to verify our credentials?</h3>
              <p className="text-white/60 text-lg">
                We believe in complete transparency. For government tenders, corporate contracts, or specialized legal investigations, we can provide notarized copies of all our licenses and certifications upon official request.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-accent text-white font-space text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300 rounded-lg">
                Request Verification
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-space text-sm uppercase tracking-widest font-bold hover:bg-white/20 transition-all duration-300 rounded-lg">
                View All Partners
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
