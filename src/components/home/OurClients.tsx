"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const CLIENTS = [
  {
    name: "L&T",
    logo: "https://th.bing.com/th/id/OIP.tTLyiq_bPXWgLH3OEwTtnAAAAA?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Axis Bank",
    logo: "https://tse1.explicit.bing.net/th/id/OIP.L7Biua-8HdBJJ9xABJvcIgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Kailash Parbat",
    logo: "https://static.wixstatic.com/media/7971e4_d1f0890b7aba4c46ba73a9badf7fe268~mv2.png/v1/fill/w_206,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%202.png",
  },
  {
    name: "Yes Bank",
    logo: "https://companieslogo.com/img/orig/YESBANK.NS_BIG-e4bb4b2a.png?t=1707747534&download=true",
  },
  {
    name: "Saint-Gobain",
    logo: "https://th.bing.com/th/id/OIP.uNsopPvBDi8zIlLA55vWsgHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Urban Money",
    logo: "https://cdn.brandfetch.io/idpaC5ECxY/w/1080/h/1081/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1750212049715",
  },
];

export default function OurClients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 2200);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-24 md:py-28 bg-neutral-50 border-t border-black/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Our Clients</span>
            <div className="h-[1px] w-12 bg-accent" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-black tracking-tight">
            Our Clients
          </motion.h2>
        </motion.div>

        <div className="mb-16 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {CLIENTS.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="min-w-0 flex-[0_0_75%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_20%] px-4"
              >
                <div className="flex h-28 items-center justify-center rounded-[24px] border border-black/10 bg-white px-8 py-6 shadow-sm">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/clients"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white font-space text-xs md:text-sm uppercase tracking-[0.25em] hover:bg-black transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
