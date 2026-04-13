import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = createPageMetadata({
  title: "Intelligence Brief Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai Professional intelligence brief services in Mumbai offering strategic insights, background checks, and risk assessment with complete confidentiality.",
  keywords: [
    "intelligence brief services Mumbai",
    "corporate intelligence Mumbai",
    "business intelligence services Mumbai",
    "risk assessment services Mumbai",
    "confidential intelligence reports",
    "private intelligence services Mumbai",
    "investigative intelligence services",
    "competitor analysis Mumbai",
    "security intelligence services",
  ],
  canonical: "https://www.hsdetectives.com/information-Intelligence-brief-services",
});

const informationContent = [
  "HS Detectives agency Intelligence brief services provide concise, accurate, and actionable insights to support informed decision-making for businesses and individuals. In a rapidly changing environment, having access to verified intelligence helps reduce risks and identify opportunities effectively.",
  "Our professional intelligence brief services deliver detailed reports based on market research, competitor analysis, risk assessment, background verification, and industry intelligence. We collect and analyze data from reliable sources to present clear, easy-to-understand summaries tailored to your specific needs.",
  "Whether you are planning a new business venture, evaluating a partnership, or monitoring market trends, our intelligence briefs offer valuable information to guide your strategy. Each report is designed to highlight key findings, potential risks, and actionable recommendations.",
];

export default function InformationPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero
          title="Information"
          subtitle="Intelligence Brief Services delivering clear, discreet, and decision-focused information for personal, corporate, surveillance, and technical matters."
          image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[{ label: "Information", href: "/information-Intelligence-brief-services" }]}
        />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12 bg-red-600" />
                <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">
                  Intelligence Brief Services
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Intelligence Brief Services
              </h2>
              <div className="space-y-6">
                {informationContent.map((paragraph) => (
                  <p key={paragraph} className="font-inter text-lg text-black/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-black/10 bg-neutral-50 p-8 md:p-12 shadow-sm">
              <p className="font-space text-[10px] uppercase tracking-[0.25em] text-red-600 mb-4">
                Information Hub
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl uppercase tracking-tight text-black mb-5 max-w-4xl">
                Reliable intelligence presented with clarity
              </h3>
              <p className="font-inter text-base md:text-lg text-black/70 leading-relaxed max-w-4xl">
                We provide concise, confidential intelligence briefs that help businesses and individuals make informed decisions with greater confidence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
    </>
    </>
  );
}
