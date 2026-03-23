import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "FAQ | H S Detectives",
  description:
    "Frequently asked questions about private detective services, matrimonial investigations, surveillance, and corporate investigations in Mumbai.",
};

const faqSections = [
  {
    title: "Private Detective Agency FAQ (SEO Optimized)",
    items: [
      {
        question: "1. What does a private detective agency in Mumbai do?",
        answer:
          "A private detective agency investigates personal and corporate matters such as background checks, surveillance, fraud investigations, and missing person cases.",
      },
      {
        question: "2. Is hiring a private detective in India legal?",
        answer:
          "Yes, hiring a private detective for legal investigations like background verification or surveillance in public places is allowed in India.",
      },
      {
        question: "3. How can I hire a private detective in Mumbai?",
        answer:
          "You can contact our detective agency through phone, email, or the contact form on our website to discuss your case confidentially.",
      },
      {
        question: "4. How much does a private detective charge in Mumbai?",
        answer:
          "The cost depends on the type of investigation, duration, and complexity. We provide a clear estimate after understanding your case.",
      },
      {
        question: "5. Are private detective services confidential?",
        answer:
          "Yes. All investigations and client details are handled with complete confidentiality and discretion.",
      },
      {
        question: "6. How long does a private investigation take?",
        answer:
          "Investigation timelines vary depending on the case. Some investigations take a few days, while others may take several weeks.",
      },
      {
        question: "7. What information is required to start an investigation?",
        answer:
          "Basic information such as the person's name, photo, address, workplace, and other relevant details helps investigators start the case.",
      },
      {
        question: "8. Do detective agencies provide evidence?",
        answer:
          "Yes. We provide documented reports including photographs, videos, and detailed findings whenever possible.",
      },
      {
        question: "9. Can detective reports be used in court in India?",
        answer:
          "Investigation reports may support legal proceedings depending on the type of evidence and court requirements.",
      },
      {
        question: "10. Do you provide matrimonial investigation services?",
        answer:
          "Yes. We conduct both pre-marital and post-marital investigations to verify background, lifestyle, and relationships.",
      },
    ],
  },
  {
    title: "Matrimonial Investigation FAQs",
    items: [
      {
        question: "11. What is a pre-matrimonial investigation?",
        answer:
          "A pre-matrimonial investigation verifies the background, character, financial status, and personal habits of a potential marriage partner.",
      },
      {
        question: "12. Why should I conduct a pre-marriage background check?",
        answer:
          "It helps confirm the authenticity of the person's identity, employment, financial status, and personal behavior before marriage.",
      },
      {
        question: "13. What is a post-marital investigation?",
        answer:
          "Post-marital investigations are conducted to verify suspicions such as extramarital affairs, hidden activities, or financial issues.",
      },
      {
        question: "14. Can detectives prove extramarital affairs?",
        answer:
          "Detectives use surveillance and evidence collection to confirm suspicious activities and relationships.",
      },
    ],
  },
  {
    title: "Surveillance & Investigation FAQs",
    items: [
      {
        question: "15. What is surveillance in private investigation?",
        answer:
          "Surveillance is the process of observing a subject's activities discreetly to gather factual information.",
      },
      {
        question: "16. Do you offer discreet surveillance services in Mumbai?",
        answer:
          "Yes. Our investigators conduct professional and confidential surveillance operations.",
      },
      {
        question: "17. Will the person being investigated know about the investigation?",
        answer:
          "No. Investigations are conducted discreetly so the subject remains unaware.",
      },
      {
        question: "18. Do you investigate missing persons?",
        answer:
          "Yes. We assist families and organizations in tracing missing individuals.",
      },
      {
        question: "19. Can detectives track someone's location?",
        answer:
          "Detectives rely on legal investigative techniques and information gathering but cannot perform illegal tracking or phone tapping.",
      },
      {
        question: "20. Do you provide undercover investigation services?",
        answer:
          "Yes. Undercover operations may be used in corporate or fraud investigations when necessary.",
      },
    ],
  },
  {
    title: "Corporate Investigation FAQs",
    items: [
      {
        question: "21. What corporate investigation services do you provide?",
        answer:
          "We provide employee background verification, fraud investigation, due diligence, and corporate surveillance.",
      },
      {
        question: "22. Why should companies conduct employee background checks?",
        answer:
          "Background checks help companies verify employee credentials, employment history, and potential risks.",
      },
      {
        question: "23. Do detective agencies investigate employee fraud?",
        answer: "Yes. We investigate fraud, internal theft, and workplace misconduct.",
      },
      {
        question: "24. What is corporate due diligence investigation?",
        answer:
          "It verifies the credibility, financial stability, and background of businesses before partnerships or investments.",
      },
      {
        question: "25. Do you investigate intellectual property theft?",
        answer:
          "Yes. We assist companies in identifying and investigating IP theft and information leaks.",
      },
    ],
  },
  {
    title: "General Detective Service FAQs",
    items: [
      {
        question: "26. Do you work only in Mumbai?",
        answer:
          "No. Our investigation services are available across Maharashtra and other cities in India.",
      },
      {
        question: "27. Do you offer online consultation for investigations?",
        answer:
          "Yes. Clients can discuss cases through phone, video calls, or secure online communication.",
      },
      {
        question: "28. How experienced are your private investigators?",
        answer:
          "Our investigators are trained professionals with experience in surveillance, intelligence gathering, and investigation techniques.",
      },
      {
        question: "29. Can I meet the detective before hiring?",
        answer:
          "Yes. Clients can schedule a confidential meeting with our investigator.",
      },
      {
        question: "30. What industries use private detective services?",
        answer:
          "Individuals, law firms, insurance companies, corporate businesses, and financial institutions frequently use detective services.",
      },
    ],
  },
  {
    title: "Investigation Process FAQs",
    items: [
      {
        question: "31. What happens after I hire a detective agency?",
        answer:
          "We analyze the case, plan the investigation strategy, conduct field work, and provide a detailed report.",
      },
      {
        question: "32. How do detectives collect information?",
        answer:
          "Investigators use surveillance, background research, field verification, and intelligence gathering.",
      },
      {
        question: "33. Will I receive regular updates about the investigation?",
        answer:
          "Yes. Clients receive periodic updates about the progress of their case.",
      },
      {
        question: "34. Do detective agencies guarantee results?",
        answer:
          "Investigations aim to uncover factual information, but results depend on available evidence and circumstances.",
      },
      {
        question: "35. Do you accept urgent investigation cases?",
        answer:
          "Yes. Depending on investigator availability, urgent cases can be handled immediately.",
      },
    ],
  },
  {
    title: "Safety & Privacy FAQs",
    items: [
      {
        question: "36. Is my identity kept private?",
        answer:
          "Yes. Client identity and case details are always kept confidential.",
      },
      {
        question: "37. Do detectives access private phone records?",
        answer:
          "No. Accessing phone records without legal authorization is illegal.",
      },
      {
        question: "38. Are detective investigations safe and ethical?",
        answer:
          "Yes. Professional agencies follow ethical and legal investigative methods.",
      },
      {
        question: "39. Can you investigate online scams or fraud?",
        answer:
          "Yes. We assist in investigating online fraud and scam activities.",
      },
      {
        question: "40. How do I contact your detective agency in Mumbai?",
        answer:
          "You can contact us through our phone number, email, or website contact form for a confidential consultation.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections
    .flatMap((section) => section.items)
    .map((item) => ({
      "@type": "Question",
      name: item.question.replace(/^\d+\.\s*/, ""),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
};

export default function FaqPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="max-w-5xl rounded-2xl border border-white/20 bg-white/90 p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h1 className="font-playfair text-4xl md:text-5xl uppercase tracking-wide text-neutral-950">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 font-inter text-sm md:text-base text-neutral-700 max-w-3xl">
              Answers to common questions about private detective services in
              Mumbai, including matrimonial, surveillance, and corporate
              investigations.
            </p>
          </div>

          <div className="mt-12 max-w-5xl space-y-12">
            {faqSections.map((section) => (
              <section
                key={section.title}
                className="space-y-5 rounded-2xl border border-white/20 bg-black/35 p-5 md:p-6 backdrop-blur-sm"
              >
                <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-amber-300">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <article
                      key={item.question}
                      className="rounded-xl border border-black/10 bg-white p-5 md:p-6 shadow-sm"
                    >
                      <h3 className="font-playfair text-xl text-neutral-950">
                        {item.question}
                      </h3>
                      <p className="mt-3 font-inter text-neutral-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
