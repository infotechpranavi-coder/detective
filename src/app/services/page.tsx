import PageHero from "@/components/shared/PageHero";
import Testimonials from "@/components/home/Testimonials";
import PageTransition from "@/components/ui/PageTransition";
import Link from "next/link";
import { serviceDetails } from "./serviceData";

export const metadata = {
  title: "Services | H S Detectives",
  description: "Four core investigation divisions covering personal, corporate, technical sweep, and surveillance operations.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero
          title="Investigation Capabilities"
          subtitle="Precision surveillance, digital forensics, and rigorous background verification tailored to uncover the facts you seek."
          image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-24 bg-white border-t-2 border-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Core Divisions</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-black uppercase tracking-wider mb-6">
                Choose The <span className="text-accent italic">Investigation Track</span>
              </h2>
              <p className="font-inter text-base md:text-lg text-black/70 leading-relaxed">
                Open a service page below to review the full service description and the right next step for your case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceDetails.map((service, index) => (
                <article
                  key={service.slug}
                  className="relative overflow-hidden rounded-[32px] border-2 border-black bg-neutral-50 p-8 md:p-10 transition-colors duration-300 hover:border-accent"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 font-bebas text-8xl text-black pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="font-space text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
                    {service.categoryLabel}
                  </p>
                  <h3 className="font-playfair text-3xl uppercase tracking-tight text-black mb-4">
                    {service.heroTitle}
                  </h3>
                  <p className="font-inter text-base text-black/70 leading-relaxed mb-5">
                    {service.heroSubtitle}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center px-7 py-4 mt-3 bg-black text-white font-space text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
                  >
                    Open Service Page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
    </PageTransition>
  );
}
