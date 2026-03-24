"use client";

import Link from "next/link";

const publications = [
  {
    title: "How H S Detectives is revolutionizing private investigation in Mumbai with law enforcement expertise",
    source: "Republic News India",
    url: "https://republicnewsindia.com/how-h-s-detectives-is-revolutionizing-private-investigation-in-mumbai-with-law-enforcement-expertise/",
    image: "/135.png",
  },
  {
    title: "How H S Detectives is revolutionizing private investigation in Mumbai with law enforcement expertise",
    source: "Flipboard (Republic News India)",
    url: "https://flipboard.com/@republicnewsind/-how-h-s-detectives-is-revolutionizing-private-investigation-in-mumbai-with-law-enforcement-expertise/a-0iJJTacSRm6I-KWQrN5Skw%3Aa%3A3544623556-118c204c33%2Frepublicnewsindia.com",
    image: "/465.png",
  },
  {
    title: "How H S Detectives is revolutionizing private investigation in Mumbai with law enforcement expertise",
    source: "Hindustan Metro",
    url: "https://www.hindustanmetro.com/how-h-s-detectives-is-revolutionizing-private-investigation-in-mumbai-with-law-enforcement-expertise/",
    image: "/78.png",
  },
  {
    title: "How H S Detectives is revolutionizing private investigation in Mumbai with law enforcement expertise",
    source: "NewsHeads",
    url: "https://www.newsheads.in/business/companies/how-h-s-detectives-is-revolutionizing-private-investigation-in-mumbai-with-law-enforcement-expertise-article-72926",
    image: "/rtfghj.png",
  },
];

export default function PublicationPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 md:px-12">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-8">Publications</h1>
        <p className="mb-10 text-lg text-zinc-700">
          Read our latest coverage and published stories from leading media channels about H S Detectives.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((item, idx) => (
            <article key={idx} className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="relative h-40 md:h-48 overflow-hidden bg-zinc-100">
                <img
                  src={item.image}
                  alt={`${item.source} preview`}
                  className="h-full w-full object-contain"
                  style={{ objectPosition: "center center" }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-zinc-900 mb-2">{item.source}</h2>
                <p className="text-sm text-zinc-600 mb-4 break-words">{item.title}</p>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80"
                >
                  Read article
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
