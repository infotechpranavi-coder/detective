import Link from "next/link";
import { CheckCheck, FileText, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import type { ServiceDetail } from "@/app/services/serviceData";
import { subServicesByParent } from "@/app/services/subServiceData";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const linkedSubServices = subServicesByParent[service.slug] ?? [];

  const getSubServiceHref = (item: string) => {
    const directLink = service.serviceIncludeLinks?.[item];

    if (directLink) {
      return directLink;
    }

    const matchingSubService = linkedSubServices.find(
      (subService) => subService.navLabel.toLowerCase() === item.toLowerCase()
    );

    return matchingSubService
      ? `/services/${service.slug}/${matchingSubService.slug}`
      : null;
  };

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

        <section className="relative overflow-hidden py-24 bg-white">
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(238,57,57,0.14),transparent_58%)]" />

          <div className="container relative z-10 mx-auto px-6 lg:px-12">
            <div className="space-y-10">
                <div className="rounded-[32px] border border-black/10 bg-white p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="h-px w-12 bg-red-600" />
                    <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">
                      {service.categoryLabel}
                    </span>
                  </div>

                  <h2 className="mb-6 font-playfair text-4xl md:text-5xl uppercase tracking-tight">
                    {service.heroTitle}
                  </h2>

                  <p className="mb-8 max-w-3xl font-inter text-lg leading-relaxed text-black/70">
                    {service.heroSubtitle}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {service.serviceIncludes.slice(0, 6).map((item) => {
                      const href = getSubServiceHref(item);
                      const isExternal = href?.startsWith("http");

                      if (href) {
                        return (
                          <Link
                            key={item}
                            href={href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="rounded-full border border-red-600/20 bg-red-600/5 px-4 py-2 font-space text-[10px] uppercase tracking-[0.18em] text-red-600 transition-colors hover:border-red-600/40 hover:bg-red-600/10"
                          >
                            {item}
                          </Link>
                        );
                      }

                      return (
                        <span
                          key={item}
                          className="rounded-full border border-red-600/20 bg-red-600/5 px-4 py-2 font-space text-[10px] uppercase tracking-[0.18em] text-red-600"
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>

                  <div className="space-y-6 rounded-[28px] border border-black/10 bg-neutral-50 p-8 md:p-10">
                    {service.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-inter text-base leading-relaxed text-black/70 md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                  <article className="rounded-[28px] border border-black/10 bg-black p-8 text-center text-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <CheckCheck size={22} className="text-red-400" />
                    </div>
                    <p className="mb-3 font-space text-[10px] uppercase tracking-[0.2em] text-red-400">
                      What This Covers
                    </p>
                    <div className="space-y-3">
                      {service.serviceIncludes.map((item) => {
                        const href = getSubServiceHref(item);
                        const isExternal = href?.startsWith("http");

                        if (href) {
                          return (
                            <Link
                              key={item}
                              href={href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className="block font-inter text-sm leading-relaxed text-white/80 transition-colors hover:text-red-300"
                            >
                              {item}
                            </Link>
                          );
                        }

                        return (
                          <p key={item} className="font-inter text-sm leading-relaxed text-white/80">
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </article>

                  <article className="rounded-[28px] border border-black/10 bg-white p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10">
                      <Sparkles size={22} className="text-red-600" />
                    </div>
                    <p className="mb-3 font-space text-[10px] uppercase tracking-[0.2em] text-red-600">
                      Ideal For
                    </p>
                    <div className="space-y-3">
                      {service.idealFor.map((item) => (
                        <p key={item} className="font-inter text-sm leading-relaxed text-black/70">
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                  <article className="rounded-[28px] border border-black/10 bg-neutral-50 p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.05)]">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10">
                      <FileText size={22} className="text-red-600" />
                    </div>
                    <p className="mb-3 font-space text-[10px] uppercase tracking-[0.2em] text-red-600">
                      Reporting & Findings
                    </p>
                    <div className="space-y-3">
                      {service.reporting.map((item) => (
                        <p key={item} className="font-inter text-sm leading-relaxed text-black/70">
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-[28px] border border-red-600/20 bg-gradient-to-br from-red-600/5 via-white to-white p-8 text-center shadow-[0_18px_60px_rgba(238,57,57,0.08)]">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10">
                      <ShieldCheck size={22} className="text-red-600" />
                    </div>
                    <p className="mb-3 font-space text-[10px] uppercase tracking-[0.2em] text-red-600">
                      Privacy & Trust
                    </p>
                    <div className="space-y-3">
                      {service.trustPoints.map((item) => (
                        <p key={item} className="font-inter text-sm leading-relaxed text-black/70">
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
