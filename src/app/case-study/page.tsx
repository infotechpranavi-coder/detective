import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Case Study | H S Detectives",
  description:
    "Selected case studies from H S Detectives covering corporate, matrimonial, surveillance, and technical investigations.",
};

const caseStudies = [
  {
    category: "Corporate Investigation",
    title: "Internal Fraud Pattern Mapping",
    summary:
      "A multi-location review helped uncover suspicious vendor coordination, timeline gaps, and employee collusion indicators for a private client in Mumbai.",
    outcome:
      "Delivered a structured evidence report, movement timeline, and decision-ready intelligence for legal and internal action.",
  },
  {
    category: "Matrimonial Investigation",
    title: "Background Verification Before Marriage",
    summary:
      "A discreet pre-matrimonial inquiry verified lifestyle claims, employment inconsistencies, and undisclosed relationship history without compromising client privacy.",
    outcome:
      "The client received a confidential factual brief with documented findings before making a major personal decision.",
  },
  {
    category: "Surveillance Operation",
    title: "High-Sensitivity Field Observation",
    summary:
      "Our field team conducted controlled surveillance with route tracking, pattern logging, and visual verification over a multi-day assignment.",
    outcome:
      "The operation produced a clear activity log and corroborated evidence aligned with the client's required timeline.",
  },
  {
    category: "Technical Support",
    title: "Debugging & Privacy Risk Assessment",
    summary:
      "Working alongside the technical wing, the team assessed the client's office environment for covert monitoring risks and digital exposure points.",
    outcome:
      "The engagement identified vulnerable areas, improved privacy controls, and supported the broader investigation with technical validation.",
  },
];

export default function CaseStudyPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero
          title="Case Study"
          subtitle="Selected investigation scenarios that reflect our approach to confidential intelligence, field verification, and technical support."
          image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[{ label: "Case Study", href: "/case-study" }]}
        />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12 bg-red-600" />
                <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">
                  Investigation Notes
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Real-World Case Profiles
              </h2>
              <p className="font-inter text-lg text-black/70 leading-relaxed">
                These case studies represent the style of assignments handled by H S Detectives. Sensitive
                identities, timelines, and client-specific details are intentionally generalized to preserve
                confidentiality while still showing the depth of our investigative process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <article
                  key={study.title}
                  className="relative overflow-hidden rounded-[28px] border border-black/10 bg-neutral-50 p-8 shadow-sm transition-colors duration-300 hover:border-red-600/40"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 font-bebas text-7xl text-black pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-red-600 mb-4">
                    {study.category}
                  </p>
                  <h3 className="font-playfair text-2xl uppercase tracking-wide text-black mb-4">
                    {study.title}
                  </h3>
                  <p className="font-inter text-base text-black/70 leading-relaxed mb-6">
                    {study.summary}
                  </p>
                  <div className="border-t border-black/10 pt-6">
                    <p className="font-space text-[10px] uppercase tracking-[0.2em] text-black/50 mb-2">
                      Outcome
                    </p>
                    <p className="font-inter text-sm md:text-base text-black/75 leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
