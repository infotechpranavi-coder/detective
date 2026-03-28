import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Information | H S Detectives",
  description:
    "Warning signs, investigation protocol, legal standards, privacy principles, and client guidance from H S Detectives Agency Mumbai.",
};

const informationSections = [
  {
    number: "01",
    title: "Warning Signs: Identifying Deception & Risk",
    message:
      'Most crises, whether corporate or personal, start with subtle anomalies. Recognizing these "Red Flags" early can save your reputation, your assets, and your peace of mind. H S Detectives Agency Mumbai identifies the following indicators of concern:',
    points: [
      {
        label: "Matrimonial Red Flags",
        text:
          'Sudden secrecy with mobile devices, unexplained financial withdrawals, or significant "gaps" in professional or family history.',
      },
      {
        label: "Corporate Internal Threats",
        text:
          'Employees with unexplained lifestyle changes, unauthorized access to sensitive data after hours, or suspicious "close" relationships with competitors.',
      },
      {
        label: "Asset Leakage",
        text:
          'If your business partners are reporting lower profits while their personal wealth grows, it may indicate "Silent Siphoning."',
      },
      {
        label: "The H S Detectives Tip",
        text:
          "If your intuition says something is wrong, it usually is. Do not confront the suspect. Instead, begin documenting observations quietly before calling our elite team.",
      },
    ],
  },
  {
    number: "02",
    title: 'Client Protocol: The "Golden Rules" of Investigation',
    message:
      "Professional investigation is a delicate process. To ensure H S Detectives Agency Mumbai can gather admissible evidence, clients must follow these strict protocols:",
    points: [
      {
        label: "Maintain Total Discretion",
        text:
          'Do not inform friends, family, or the subject that you have hired a private investigator. Any change in your behavior can cause the subject to "go dark."',
      },
      {
        label: "Secure Communication",
        text:
          "Contact H S Detectives Agency Mumbai from a safe location. If your case involves technical threats, communication should be coordinated through our partners at IndieBim Technology Solutions Private Limited.",
      },
      {
        label: 'Provide "Raw" Data',
        text:
          "Be 100% honest with your lead investigator. We are here to find the truth, and knowing the full context allows us to deploy our resources effectively.",
      },
      {
        label: "Trust the Process",
        text:
          'Professional surveillance and background vetting take time. Rushing an investigation often leads to "blown" cover. Trust our forensic logic to deliver results.',
      },
    ],
  },
  {
    number: "03",
    title: "Compliance Corner: Legal & Forensic Standards",
    message:
      "In 2026, an investigation is only as good as its legality. H S Detectives Agency Mumbai operates at the highest level of regulatory compliance in India.",
    points: [
      {
        label: "DPDP Act 2026 Compliance",
        text:
          "We ensure all digital evidence gathering respects the Digital Personal Data Protection Act. We protect the Data Fiduciary, you the client, from legal liability.",
      },
      {
        label: "Evidence Admissibility",
        text:
          "Led by a Retired DCP (Crime Branch), our methodology mirrors official law enforcement standards. This ensures that the reports provided by H S Detectives Agency Mumbai are structurally sound for use in legal proceedings.",
      },
      {
        label: "Ethical Intelligence",
        text:
          'We do not engage in illegal hacking or "honey trapping." We use legitimate field intelligence, public record forensics, and advanced technical support from IndieBim Technology Solutions Private Limited.',
      },
    ],
  },
  {
    number: "04",
    title: "Right of Privacy: Our Ethical Manifesto",
    message:
      "At H S Detectives Agency Mumbai, we believe that every individual has a fundamental right to a safe and private life. We exist to protect that right when it is threatened by others.",
    points: [
      {
        label: "The Shield & The Sword",
        text:
          'While we are the "Sword" that finds the truth, we work in tandem with IndieBim Technology Solutions Private Limited, the "Shield", to ensure your personal boundaries are restored.',
      },
      {
        label: "Protection of the Vulnerable",
        text:
          "We specialize in helping victims of stalking, harassment, and corporate bullying. Our goal is to empower you with the truth so you can reclaim your privacy.",
      },
      {
        label: "Zero-Leak Policy",
        text:
          'Your case file is a "Fortress." We utilize military-grade encryption to ensure that the sensitive details handled by H S Detectives Agency Mumbai never fall into the wrong hands.',
      },
    ],
  },
];

const strategicPages = [
  {
    page: "Warning Signs",
    url: "/warning-signs",
    purpose: 'To act as a "Symptom Checker" for worried clients.',
  },
  {
    page: "Client Protocol",
    url: "/investigation-protocol",
    purpose: "To educate the client on how to stay safe during an active case.",
  },
  {
    page: "Compliance Corner",
    url: "/legal-standards",
    purpose: 'To prove that you are a high-level, "Clean" agency.',
  },
  {
    page: "Right of Privacy",
    url: "/privacy-rights",
    purpose: 'To show your commitment to the "Betterment of Society."',
  },
];

export default function InformationPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <PageHero
          title="Information"
          subtitle="Guidance, legal positioning, client protocol, and privacy-first principles from H S Detectives Agency Mumbai."
          image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[{ label: "Information", href: "/information" }]}
        />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12 bg-red-600" />
                <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">
                  Intelligence Brief
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl uppercase tracking-tight mb-6">
                What Clients Should Know
              </h2>
              <p className="font-inter text-lg text-black/70 leading-relaxed">
                This page brings together practical warning signs, professional investigation protocol, legal
                standards, and our privacy-first operating philosophy so clients can approach sensitive matters
                with clarity and confidence.
              </p>
            </div>

            <div className="space-y-10">
              {informationSections.map((section) => (
                <article
                  key={section.title}
                  className="relative overflow-hidden rounded-[32px] border border-black/10 bg-neutral-50 p-8 md:p-12 shadow-sm"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 font-bebas text-8xl text-black pointer-events-none">
                    {section.number}
                  </div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-red-600 mb-4">
                    Section {section.number}
                  </p>
                  <h3 className="font-playfair text-3xl md:text-4xl uppercase tracking-tight text-black mb-5 max-w-4xl">
                    {section.title}
                  </h3>
                  <p className="font-inter text-base md:text-lg text-black/70 leading-relaxed max-w-4xl mb-8">
                    {section.message}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.points.map((point) => (
                      <div key={point.label} className="rounded-2xl border border-black/10 bg-white p-6">
                        <p className="font-space text-[10px] uppercase tracking-[0.2em] text-red-600 mb-3">
                          {point.label}
                        </p>
                        <p className="font-inter text-sm md:text-base text-black/75 leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-14">
              <p className="font-space text-[10px] uppercase tracking-[0.25em] text-red-500 mb-4">
                Strategic Page Ideas
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl uppercase tracking-tight mb-5">
                Structured Expansion Ideas
              </h2>
              <p className="font-inter text-white/70 leading-relaxed">
                These are strong future content directions that can help this site educate concerned visitors,
                build authority, and convert serious inquiries with clear intent-focused pages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategicPages.map((item) => (
                <div key={item.page} className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                  <p className="font-space text-[10px] uppercase tracking-[0.2em] text-red-400 mb-3">
                    {item.page}
                  </p>
                  <p className="font-inter text-sm text-white/50 mb-4">URL Suggestion: {item.url}</p>
                  <p className="font-inter text-base text-white/80 leading-relaxed">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
