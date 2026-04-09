import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Case Study | H S Detectives",
  description:
    "Selected case studies from H S Detectives covering corporate, matrimonial, surveillance, and technical investigations.",
};

const caseStudies = [
  {
    category: "Personal Investigation",
    title: "Private Individual Information Leak",
    problem:
      "A private individual in South Mumbai suspected a close associate of leaking travel schedules and sensitive personal information to competitors.",
    action:
      "H S Detectives Agency Mumbai deployed a discreet surveillance team to monitor the associate's physical movements and digital interactions without raising suspicion.",
    result:
      "Within 10 days, we identified the source of the leak as an undercover operative working for a rival. The client received video evidence and moved quickly toward legal action.",
  },
  {
    category: "Corporate Investigation",
    title: "Supply Chain Kickback Exposure",
    problem:
      "A multinational firm in BKC noticed a 20% drop in procurement efficiency and suspected internal kickbacks in its supply chain department.",
    action:
      "We conducted a deep-dive corporate audit and undercover mystery-shopping operation within the vendor network to identify inflated invoices and hidden coordination.",
    result:
      "H S Detectives Agency Mumbai uncovered a nexus between two senior managers and a local vendor. The firm restructured procurement and saved an estimated Rs 2.5 crores annually.",
  },
  {
    category: "TSCM Services",
    title: "Boardroom Listening Device Detection",
    problem:
      "Before a critical merger meeting, an Andheri West corporate office suspected its boardroom had been compromised.",
    action:
      "Our technical team performed a comprehensive TSCM sweep using military-grade frequency analyzers to detect hidden transmitters and infinity microphones.",
    result:
      "We discovered a GSM-based listening device hidden inside a decorative wall clock. The sweep helped keep the merger discussions fully confidential.",
  },
  {
    category: "Risk Management",
    title: "Threat Response for Real Estate Project",
    problem:
      "A real estate developer was receiving anonymous threats and faced possible project sabotage at a new Thane development.",
    action:
      "H S Detectives Agency Mumbai carried out a 360-degree risk assessment, identified physical security gaps, and vetted site contractors.",
    result:
      "After implementing our recommended protocols and checks, the threats stopped and the project was completed three months ahead of schedule without further incidents.",
  },
  {
    category: "Surveillance",
    title: "Non-Compete Breach Documentation",
    problem:
      "A client needed proof that a business partner had breached a non-compete clause through a secret warehouse operation in Navi Mumbai.",
    action:
      "Using high-definition long-range lenses and night-vision equipment, our surveillance team monitored the warehouse activity continuously for 72 hours.",
    result:
      "We captured clear photographic evidence of the partner directing operations at the rival site, giving the legal team strong evidence for enforcement.",
  },
  {
    category: "Brand Protection",
    title: "Counterfeit Apparel Supply Chain Trace",
    problem:
      "A luxury apparel brand found high-quality first-copy versions of its latest collection being sold in Mumbai markets.",
    action:
      "H S Detectives Agency Mumbai conducted an intellectual property investigation to trace the fakes to an unauthorized manufacturing unit in Bhiwandi.",
    result:
      "We coordinated with local law enforcement on a raid that seized counterfeit goods worth Rs 80 lakhs and shut down the core distribution hub.",
  },
  {
    category: "Forensic Investigation",
    title: "Source Code Recovery Before Launch",
    problem:
      "An IT firm suffered a large-scale wipe of proprietary source code just days before a major product launch.",
    action:
      "Our digital forensic experts recovered ghost data from formatted drives and analyzed server logs to isolate the exact timestamp and IP address involved in the breach.",
    result:
      "H S Detectives Agency Mumbai identified a disgruntled employee who had bypassed internal controls. The code was recovered and the launch stayed on schedule.",
  },
  {
    category: "Asset Tracing",
    title: "Hidden Property Recovery Support",
    problem:
      "A creditor was unable to recover a large loan from a debtor claiming bankruptcy while reportedly living a luxury lifestyle under a family identity.",
    action:
      "We tracked the debtor's lifestyle and uncovered three benami properties in Goa and Pune hidden behind shell company names.",
    result:
      "With our asset report in hand, the creditor successfully moved the court to freeze the properties and recovered the full loan amount.",
  },
  {
    category: "Post Matrimonial",
    title: "Undisclosed Assets After Marriage",
    problem:
      "A client suspected a spouse of maintaining a secret second life and hiding major financial assets after marriage.",
    action:
      "H S Detectives Agency Mumbai carried out a discreet lifestyle audit and shadow surveillance operation over a three-week period.",
    result:
      "We uncovered a secret apartment and an undisclosed business venture, giving the client clarity and documented proof for future decisions.",
  },
  {
    category: "Fraud Investigation",
    title: "Insurance Claim Fraud Ring",
    problem:
      "An insurance company noticed a rise in suspicious total-loss vehicle claims tied to a garage in North Mumbai.",
    action:
      "We deployed an undercover agent posing as a customer to document the garage's process of intentionally damaging vehicles to support inflated insurance payouts.",
    result:
      "H S Detectives Agency Mumbai produced video evidence of the fraud ring. The insurer blacklisted the garage and avoided more than Rs 50 lakhs in fraudulent claims.",
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
          breadcrumbs={[{ label: "Case Study", href: "/case-Investigation-Notes" }]}
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
                These case studies reflect the style of assignments handled by H S Detectives Agency Mumbai.
                Client identities, timelines, and operational details are intentionally generalized to protect
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
                  <div className="mb-4 inline-flex items-center rounded-full border border-green-600/20 bg-green-600/10 px-4 py-2">
                    <span className="font-space text-[10px] uppercase tracking-[0.25em] text-green-700">
                      Solved
                    </span>
                  </div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-red-600 mb-4">
                    {study.category}
                  </p>
                  <h3 className="font-playfair text-2xl uppercase tracking-wide text-black mb-4">
                    {study.title}
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <p className="font-space text-[10px] uppercase tracking-[0.2em] text-black/50 mb-2">
                        Problem
                      </p>
                      <p className="font-inter text-sm md:text-base text-black/75 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-space text-[10px] uppercase tracking-[0.2em] text-black/50 mb-2">
                        Action
                      </p>
                      <p className="font-inter text-sm md:text-base text-black/75 leading-relaxed">
                        {study.action}
                      </p>
                    </div>
                    <div className="border-t border-black/10 pt-5">
                      <p className="font-space text-[10px] uppercase tracking-[0.2em] text-black/50 mb-2">
                        Result
                      </p>
                      <p className="font-inter text-sm md:text-base text-black/75 leading-relaxed">
                        {study.result}
                      </p>
                    </div>
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
