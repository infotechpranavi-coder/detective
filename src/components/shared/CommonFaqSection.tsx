"use client";

import Link from "next/link";

const faqItems = [
  {
    question: "1. How much does a private detective charge in Mumbai?",
    answer:
      "Our investigation services start from Rs 45,000/- onwards. Final pricing depends on the case scope, timeline, and fieldwork required.",
    href: "/investigation-packages-india",
    cta: "View Packages",
  },
  {
    question: "2. Is hiring a private detective in India legal?",
    answer:
      "Yes. Hiring a private detective for lawful investigations such as background verification, surveillance in public places, and due diligence is allowed in India.",
    href: "/hs-detectives-locations",
    cta: "Explore Locations",
  },
  {
    question: "3. Are private detective services confidential?",
    answer:
      "Yes. All client details and investigation work are handled with complete confidentiality and discretion.",
    href: "/services",
    cta: "Explore Services",
  },
];

export default function CommonFaqSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-4 text-center">
            <p className="font-space text-[10px] uppercase tracking-[0.24em] text-red-600 sm:text-[11px]">
              FAQ Section
            </p>
            <h2 className="font-playfair text-3xl uppercase tracking-tight text-black sm:text-4xl md:text-5xl">
              Common Questions
            </h2>
            <p className="mx-auto max-w-2xl font-inter text-base leading-relaxed text-black/65 sm:text-lg">
              Quick answers to the questions clients ask most often before starting an investigation.
            </p>
          </div>

          <div className="grid gap-5">
            {faqItems.map((item) => (
              <Link
                key={item.question}
                href={item.href}
                className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-red-600/30 hover:shadow-[0_24px_80px_rgba(238,57,57,0.08)] sm:p-8"
              >
                <div className="space-y-4">
                  <h3 className="font-playfair text-2xl leading-tight text-black">
                    {item.question}
                  </h3>
                  <p className="font-inter text-base leading-relaxed text-black/70">
                    {item.answer}
                  </p>
                  <span className="inline-flex items-center gap-3 font-space text-[10px] uppercase tracking-[0.2em] text-red-600">
                    {item.cta}
                    <span className="h-px w-8 bg-red-600" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white font-space text-xs uppercase tracking-[0.2em] transition-colors hover:bg-black sm:text-sm sm:tracking-[0.25em]"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
