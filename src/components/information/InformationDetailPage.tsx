import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import type { InformationPageData } from "@/app/information/informationPagesData";

type InformationDetailPageProps = {
  page: InformationPageData;
};

export default function InformationDetailPage({
  page,
}: InformationDetailPageProps) {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero
          title={page.heroTitle}
          subtitle={page.heroSubtitle}
          image={page.image}
          breadcrumbs={[
            { label: "Information", href: "/public-intelligence-awareness" },
            { label: page.shortTitle, href: `/${page.slug}` },
          ]}
        />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-14">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12 bg-red-600" />
                <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">
                  {page.eyebrow}
                </span>
              </div>
              <h1 className="font-playfair text-4xl md:text-5xl uppercase tracking-tight mb-6">
                {page.introTitle}
              </h1>
              <p className="font-inter text-lg text-black/70 leading-relaxed">
                {page.introText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {page.points.map((point) => (
                <article
                  key={point.label}
                  className="rounded-[28px] border border-black/10 bg-neutral-50 p-8 shadow-sm"
                >
                  <p className="font-space text-[10px] uppercase tracking-[0.22em] text-red-600 mb-4">
                    {point.label}
                  </p>
                  <p className="font-inter text-base text-black/75 leading-relaxed">
                    {point.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12">
              <p className="font-space text-[10px] uppercase tracking-[0.24em] text-red-400 mb-4">
                Why This Page Exists
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl uppercase tracking-tight mb-5">
                Strategic Purpose
              </h2>
              <p className="font-inter text-white/75 text-base md:text-lg leading-relaxed mb-8">
                {page.purpose}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 font-space text-xs uppercase tracking-[0.25em] text-white transition-all hover:border-red-500 hover:bg-red-600"
                >
                  Request Confidential Help
                </Link>
                <Link
                  href="/public-intelligence-awareness"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 font-space text-xs uppercase tracking-[0.25em] text-white/80 transition-all hover:border-white hover:text-white"
                >
                  Back to Information
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
