import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Case Study | H S Detectives",
  description:
    "Selected case studies from H S Detectives covering corporate, matrimonial, surveillance, and technical investigations.",
};

const caseStudySpeakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Case Studies | H S Detectives",
  url: "https://www.hsdetectives.com/case-investigation-notes",
  description: "Real-world case studies demonstrating our investigative expertise across matrimonial, corporate, TSCM, and surveillance operations.",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".voice-summary", ".expert-highlight"],
  },
  publisher: {
    "@type": "Organization",
    name: "H S Detectives",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hsdetectives.com/HS-Logo.webp",
    },
  },
};

const caseStudies = [
  {
    category: "Corporate Fraud Investigation",
    title: "The Phantom Vendor Fraud (One BKC, Mumbai)",
    problem:
      "A multi-national firm at One BKC, Bandra Kurla Complex, noticed a steady 12% leak in procurement budget over 18 months. Internal audits remained inconclusive.",
    action:
      "We initiated Asset Tracing and forensic accounting, discovering three shell companies registered to a senior procurement officer's distant relative. Surveillance confirmed the officer meeting these 'vendors' at Phoenix Marketcity, Kurla.",
    result:
      "The forensic depth provided saved over ₹10 crores in annual recurring losses. Their discretion within BKC was impeccable. – CFO, Logistics Firm",
  },
  {
    category: "Pre-Matrimonial Investigation",
    title: "The Hidden Liability (Delhi-NCR)",
    problem:
      "A family in Golf Links, New Delhi was finalizing a high-profile alliance. Despite the groom's family claiming a pristine business reputation in Cyber Hub, Gurugram, certain inconsistencies in lifestyle vs. declared income surfaced.",
    action:
      "Through physical surveillance across Delhi-NCR and tracking business activity in Udyog Vihar, we revealed pending litigation for insolvency and a previous undisclosed marriage in another state.",
    result:
      "They uncovered truths that two months of social meetings couldn't. We were saved from a devastating mistake. – Private Client",
  },
  {
    category: "TSCM Services",
    title: "The Boardroom Breach (Manyata Tech Park, Bangalore)",
    problem:
      "A leading AI startup in Manyata Tech Park, Bangalore, found their proprietary R&D strategies being leaked to competitors within 48 hours of board meetings.",
    action:
      "Our technicians performed corporate TSCM using near-field detection and thermal imaging, identifying GSM-enabled bugs hidden inside a power strip and a gifted desk clock in the main conference room.",
    result:
      "Professional, thorough, and invisible to our employees. They secured our IP when it mattered most. – CTO, Tech Solutions",
  },
  {
    category: "Asset Tracing",
    title: "Recovering Ghost Assets (Hyderabad)",
    problem:
      "Following a messy partnership dissolution in HITEC City, Hyderabad, one partner claimed zero liquidity, stalling a court-ordered buyout.",
    action:
      "We utilized deep-web forensic tools and physical verification of Benami properties near Outer Ring Road (ORR), linking three luxury villas and a fleet of high-end vehicles back to the partner through shadow directors.",
    result:
      "Their ability to find what was 'lost' changed the trajectory of our legal battle. – Managing Partner, Legal Associate",
  },
  {
    category: "Employee Surveillance",
    title: "The Inventory Leak (Chennai Port Trust)",
    problem:
      "A logistics giant near Chennai Port was facing consistent shrinkage of high-value electronics during transit to warehouses in Sriperumbudur.",
    action:
      "We deployed surveillance units to follow transport vehicles, identifying an unauthorized stop at a godown near Madhavaram where drivers were swapping genuine goods with counterfeits.",
    result:
      "The video evidence provided was irrefutable. It led to a complete overhaul of our transit security. – Operations Manager",
  },
  {
    category: "Business Investigation",
    title: "The Kickback Scheme (Gurugram Cyber City)",
    problem:
      "A leading tech firm in DLF Cyber City, Gurugram suspected a senior procurement manager of favoring specific vendors despite higher quotes and lower quality.",
    action:
      "We conducted employee background verification revealing a hidden family connection between the manager and the vendor. Asset Tracing identified a luxury apartment in Golf Course Road purchased under a relative's name.",
    result:
      "The evidence was airtight. We were able to terminate the corrupt link and recover our losses without any legal blowback. – HR Director, Global Tech",
  },
  {
    category: "Corporate TSCM",
    title: "The Silent Listener (Bandra Kurla Complex)",
    problem:
      "During a high-stakes merger negotiation at BKC, Mumbai, sensitive board discussions were being leaked to a rival firm in Nariman Point within hours.",
    action:
      "Our team performed debugging and sweeping using advanced spectrum analyzers, detecting a GSM bug planted inside a VoIP phone and a hidden camera in the executive dining area.",
    result:
      "Absolute professionals. Their technical expertise secured our most sensitive negotiation environment. – MD, Infrastructure Giant",
  },
  {
    category: "Matrimonial Investigation",
    title: "The Hidden Liability (South Delhi & Noida)",
    problem:
      "A family in Greater Kailash, Delhi was considering a proposal. The groom claimed to be a self-made entrepreneur with a flourishing startup in Noida Sector 62.",
    action:
      "Through physical surveillance across South Delhi, Noida, and Chandigarh, we discovered the subject was not the owner but a mid-level freelancer with a history of heavy debt and a pending criminal case for fraud.",
    result:
      "They looked beyond the social media profile. Their findings saved our daughter from a life of hardship. – Concerned Parent",
  },
  {
    category: "Post-Matrimonial Surveillance",
    title: "The Adultery Evidence (Bengaluru Indiranagar)",
    problem:
      "A client in Indiranagar, Bengaluru suspected their spouse of infidelity, often citing late shifts at a software park in Whitefield.",
    action:
      "We deployed surveillance teams tracking movements between Whitefield, Koramangala, and weekend 'business trips' to Mysuru, documenting the spouse meeting a third party at a boutique hotel near MG Road.",
    result:
      "Discreet and highly effective. They provided clear video evidence that was crucial for my peace of mind. – Private Client",
  },
  {
    category: "Risk Management",
    title: "The Ghost Inventory (Chennai Sriperumbudur)",
    problem:
      "An automobile manufacturing plant near Sriperumbudur, Chennai reported a consistent 5% inventory mismatch in high-grade steel components.",
    action:
      "Our employee surveillance team monitored the night shift. Forensic investigation of digital logs showed manual weighbridge overrides. We caught a syndicate of guards and drivers diverting trucks to a local yard.",
    result:
      "Their multi-disciplinary approach solved a mystery that our internal security missed for a year. – Plant Manager",
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <GoogleTagHead />
      <script
        id="casestudy-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySpeakableSchema) }}
      />
      <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero
          title="Case Study"
          subtitle="Selected investigation scenarios that reflect our approach to confidential intelligence, field verification, and technical support."
          image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[{ label: "Case Study", href: "/case-investigation-notes" }]}
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
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-black/10 bg-neutral-100 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-semibold text-sm">
                        WS
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-black">Wahid Shaikh</p>
                        <p className="text-xs text-black/60">Chief Investigative Officer</p>
                        <a
                          href="https://in.linkedin.com/in/wahid-shaikh-0b677455"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-600 hover:text-red-700"
                        >
                          LinkedIn Profile →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
    </>
    </>
  );
}
