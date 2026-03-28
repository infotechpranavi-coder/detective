import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import type { ServiceDetail } from "@/app/services/serviceData";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero
          title={service.heroTitle}
          subtitle={service.heroSubtitle}
          image={service.image}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: service.heroTitle, href: `/services/${service.slug}` },
          ]}
        />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12 bg-red-600" />
                <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">
                  {service.categoryLabel}
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Investigation Scope
              </h2>
              <div className="rounded-[28px] border border-black/10 bg-neutral-50 p-8 md:p-10">
                <p className="font-space text-[10px] uppercase tracking-[0.2em] text-red-600 mb-3">Investment</p>
                <p className="font-playfair text-3xl md:text-4xl text-black mb-5">{service.investment}</p>
                <p className="font-inter text-base md:text-lg text-black/70 leading-relaxed">{service.deliverable}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {service.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-8 shadow-sm"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 font-bebas text-7xl text-black pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="font-space text-[10px] uppercase tracking-[0.2em] text-red-600 mb-3">
                    Service Module
                  </p>
                  <h3 className="font-playfair text-2xl uppercase tracking-wide text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-base text-black/70 leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>

            {service.plans ? (
              <div className="mb-16 rounded-[32px] border border-black/10 bg-black px-8 py-12 md:px-12 text-white">
                <div className="max-w-3xl mb-10">
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-red-400 mb-4">Pricing Scope</p>
                  <h3 className="font-playfair text-3xl md:text-5xl uppercase tracking-tight mb-5">Deployment Options</h3>
                  <p className="font-inter text-white/70 leading-relaxed">
                    Built for flexible surveillance assignments depending on the duration, intensity, and evidentiary needs of the operation.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/15">
                        <th className="pb-4 pr-6 font-space text-[10px] uppercase tracking-[0.2em] text-white/60">Duration</th>
                        <th className="pb-4 pr-6 font-space text-[10px] uppercase tracking-[0.2em] text-white/60">Investment</th>
                        <th className="pb-4 font-space text-[10px] uppercase tracking-[0.2em] text-white/60">Service Scope</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.plans.map((plan) => (
                        <tr key={plan.duration} className="border-b border-white/10 last:border-b-0">
                          <td className="py-5 pr-6 font-playfair text-2xl text-white">{plan.duration}</td>
                          <td className="py-5 pr-6 font-inter text-base text-red-400">{plan.investment}</td>
                          <td className="py-5 font-inter text-base text-white/75 leading-relaxed">{plan.scope}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            <div className="rounded-[32px] border border-red-600/20 bg-red-600/5 p-8 md:p-10 text-center">
              <p className="font-space text-[10px] uppercase tracking-[0.2em] text-red-600 mb-4">Next Step</p>
              <h3 className="font-playfair text-3xl md:text-4xl uppercase tracking-tight text-black mb-5">
                Ready To Begin Securely?
              </h3>
              <p className="font-inter text-base md:text-lg text-black/70 leading-relaxed max-w-3xl mx-auto mb-8">
                Every case begins with a controlled discussion. Share the background confidentially, and our team will advise the most effective path forward.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-space text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                {service.ctaLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
