import Link from "next/link";
import Script from "next/script";
import { CheckCheck, FileText, ShieldCheck, Sparkles, ArrowLeft } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import ServiceFaqSection from "@/components/services/ServiceFaqSection";
import type { SubService } from "@/app/services/subServiceData";
import { richSubServiceContent } from "@/app/services/subServiceRichContent";

type SubServiceDetailPageProps = {
  service: SubService;
};

export default function SubServiceDetailPage({ service }: SubServiceDetailPageProps) {
  const richContent = richSubServiceContent[service.slug];
  const introContent = richContent?.intro ?? service.content;
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${service.heroTitle} | H S Detectives`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".voice-summary", ".expert-highlight"],
    },
    url: `https://www.hsdetectives.com/services/${service.parentSlug}/${service.slug}`,
  };

  return (
    <PageTransition>
      <Script
        id={`subservice-speakable-schema-${service.parentSlug}-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <main className="min-h-screen bg-white">
        <PageHero
          title={service.heroTitle}
          subtitle={service.heroSubtitle}
          image={service.image}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            {
              label: service.parentSlug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
              href: `/services/${service.parentSlug}`,
            },
            { label: service.heroTitle, href: `/services/${service.parentSlug}/${service.slug}` },
          ]}
        />

        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(238,57,57,0.14),transparent_58%)]" />

          <div className="container relative z-10 mx-auto px-6 lg:px-12">
            {/* Back link */}
            <Link
              href={`/services/${service.parentSlug}`}
              className="mb-8 inline-flex items-center gap-2 font-space text-[10px] uppercase tracking-[0.18em] text-black/50 transition-colors hover:text-accent sm:mb-10 sm:text-[11px] sm:tracking-[0.2em]"
            >
              <ArrowLeft size={14} />
              Back to{" "}
              {service.parentSlug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </Link>

            <div className="space-y-10">
              {/* Hero card */}
              <div className="rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-8 md:p-10">
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-px w-12 bg-red-600" />
                  <span className="font-space text-[11px] text-red-600 tracking-[0.2em] uppercase sm:text-sm">
                    Sub-Service
                  </span>
                </div>

                <h2 className="mb-5 font-playfair text-3xl uppercase tracking-tight sm:mb-6 sm:text-4xl md:text-5xl">
                  {service.heroTitle}
                </h2>

                <p className="mb-6 max-w-3xl font-inter text-base leading-relaxed text-black/70 sm:mb-8 sm:text-lg">
                  {service.heroSubtitle}
                </p>

                <div className="mb-8 flex flex-wrap gap-3">
                  {service.serviceIncludes.slice(0, 6).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-red-600/20 bg-red-600/5 px-3 py-2 font-space text-[9px] uppercase tracking-[0.14em] text-red-600 sm:px-4 sm:text-[10px] sm:tracking-[0.18em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="space-y-5 rounded-[22px] border border-black/10 bg-neutral-50 p-5 sm:space-y-6 sm:rounded-[28px] sm:p-8 md:p-10">
                  {introContent.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-base leading-relaxed text-black/70 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {richContent ? (
                <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 sm:gap-6">
                  {richContent.sections.map((section, index) => (
                    <article
                      key={`${service.slug}-${section.title}`}
                      className={`rounded-[24px] border p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-8 ${
                        index % 3 === 0
                          ? "border-black/10 bg-black text-white"
                          : index % 3 === 1
                            ? "border-black/10 bg-white text-black"
                            : "border-red-600/20 bg-gradient-to-br from-red-600/5 via-white to-white text-black"
                      }`}
                    >
                      <p
                        className={`mb-4 font-space text-[10px] uppercase tracking-[0.2em] ${
                          index % 3 === 0 ? "text-red-400" : "text-red-600"
                        }`}
                      >
                        {section.title}
                      </p>

                      {section.paragraphs?.length ? (
                        <div className="mb-5 space-y-4">
                          {section.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph}
                              className={`font-inter text-sm leading-relaxed ${
                                index % 3 === 0 ? "text-white/80" : "text-black/70"
                              }`}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : null}

                      {section.items?.length ? (
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className={`font-inter text-sm leading-relaxed ${
                                index % 3 === 0 ? "text-white/80" : "text-black/70"
                              }`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.orderedItems?.length ? (
                        <ol className="space-y-3">
                          {section.orderedItems.map((item, itemIndex) => (
                            <li
                              key={item}
                              className={`font-inter text-sm leading-relaxed ${
                                index % 3 === 0 ? "text-white/80" : "text-black/70"
                              }`}
                            >
                              {itemIndex + 1}. {item}
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : (
                <>
                  <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 sm:gap-6">
                    <article className="rounded-[24px] border border-black/10 bg-black p-5 text-center text-white shadow-[0_18px_60px_rgba(0,0,0,0.12)] sm:rounded-[28px] sm:p-8">
                      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <CheckCheck size={22} className="text-red-400" />
                      </div>
                      <p className="mb-3 font-space text-[10px] uppercase tracking-[0.2em] text-red-400">
                        What This Covers
                      </p>
                      <div className="space-y-3">
                        {service.serviceIncludes.map((item) => (
                          <p key={item} className="font-inter text-sm leading-relaxed text-white/80">
                            {item}
                          </p>
                        ))}
                      </div>
                    </article>

                    <article className="rounded-[24px] border border-black/10 bg-white p-5 text-center shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-8">
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

                  <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 sm:gap-6">
                    <article className="rounded-[24px] border border-black/10 bg-neutral-50 p-5 text-center shadow-[0_18px_60px_rgba(0,0,0,0.05)] sm:rounded-[28px] sm:p-8">
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

                    <article className="rounded-[24px] border border-red-600/20 bg-gradient-to-br from-red-600/5 via-white to-white p-5 text-center shadow-[0_18px_60px_rgba(238,57,57,0.08)] sm:rounded-[28px] sm:p-8">
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
                </>
              )}

              {/* CTA */}
              <div className="rounded-[24px] bg-black p-6 text-center sm:rounded-[28px] sm:p-10">
                <p className="mb-2 font-space text-[10px] uppercase tracking-[0.22em] text-red-400 sm:text-[11px] sm:tracking-[0.25em]">
                  Ready to get started?
                </p>
                <h3 className="mb-6 font-playfair text-2xl text-white sm:text-3xl md:text-4xl">
                  {service.ctaLabel}
                </h3>
                <Link
                  href="/contact-us"
                  className="inline-block rounded-full bg-red-600 px-6 py-3 font-space text-[10px] uppercase tracking-[0.18em] text-white transition-all hover:bg-red-700 hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] sm:px-10 sm:py-4 sm:text-[11px] sm:tracking-[0.2em]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServiceFaqSection />
      </main>
    </PageTransition>
  );
}
