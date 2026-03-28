"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Building2 } from "lucide-react";
import { newPublications, latestPublications } from "./publicationsData";

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
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Eshn News",
    url: "https://eshnnews.com/2026/03/23/the-modern-investigator-how-h-s-detectives-agency-mumbai-is-solving-complex-cases-in-indias-financial-capital/",
    image: "https://via.placeholder.com/900x500?text=Eshn+News",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Prime News of India",
    url: "https://primenewsofindia.com/2026/03/23/the-modern-investigator-how-h-s-detectives-agency-mumbai-is-solving-complex-cases-in-indias-financial-capital/",
    image: "https://via.placeholder.com/900x500?text=Prime+News+of+India",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Indian Prime Bulletin",
    url: "https://indianprimebulletin.com/2026/03/23/the-modern-investigator-how-h-s-detectives-agency-mumbai-is-solving-complex-cases-in-indias-financial-capital/",
    image: "https://via.placeholder.com/900x500?text=Indian+Prime+Bulletin",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Hindustan Insider",
    url: "https://hindustaninsider.in/2026/03/23/the-modern-investigator-how-h-s-detectives-agency-mumbai-is-solving-complex-cases-in-indias-financial-capital/",
    image: "https://via.placeholder.com/900x500?text=Hindustan+Insider",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "NT Business Times",
    url: "https://ntbusinesstimes.com/2026/03/23/the-modern-investigator-how-h-s-detectives-agency-mumbai-is-solving-complex-cases-in-indias-financial-capital/",
    image: "https://via.placeholder.com/900x500?text=NT+Business+Times",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Daily District News",
    url: "https://www.dailydistrictnews.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Daily+District+News",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Newswire of India",
    url: "https://www.newswireofindia.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Newswire+of+India",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "99 News",
    url: "https://www.99news.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=99+News",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Insider News Times",
    url: "https://www.insidernewstimes.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Insider+News+Times",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "News Today 24x7",
    url: "https://www.newstoday24x7.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=News+Today+24x7",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "The India Forbes News",
    url: "https://www.theindiaforbesnews.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=The+India+Forbes+News",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Today News Standard",
    url: "https://www.todaynewsstandard.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Today+News+Standard",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Times News Express",
    url: "https://www.timesnewsexpress.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Times+News+Express",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Indian Economics News",
    url: "https://www.indianeconomicsnews.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Indian+Economics+News",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "The Republic News",
    url: "https://www.therepublicnews.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=The+Republic+News",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "The Founder Stories",
    url: "https://www.thefounderstories.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=The+Founder+Stories",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Bharat Headlines",
    url: "https://www.bharatheadlines.top/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Bharat+Headlines",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Bharat Patrika",
    url: "https://www.bharatpatrika.top/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Bharat+Patrika",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "The Khabar Mirror",
    url: "https://www.thekhabarmirror.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=The+Khabar+Mirror",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "Mint News 24",
    url: "https://www.mintnews24.co.in/2026/03/the-modern-investigator-how-h-s.html",
    image: "https://via.placeholder.com/900x500?text=Mint+News+24",
  },
  {
    title: "The Modern Investigator - How H S Detectives Agency Mumbai is solving complex cases in India's financial capital",
    source: "DHunt",
    url: "https://dhunt.in/13QJHN",
    image: "https://via.placeholder.com/900x500?text=DHunt",
  },
];

type PublicationItem = {
  title: string;
  source: string;
  url: string;
  image?: string;
  audience?: number;
};

function getLogoCandidates(url: string) {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    return [
      `https://logo.clearbit.com/${hostname}`,
      `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`,
    ];
  } catch {
    return [];
  }
}

function SourceLogo({ source, url }: { source: string; url: string }) {
  const candidates = useMemo(() => getLogoCandidates(url), [url]);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (index < candidates.length - 1) {
      setIndex(index + 1);
      return;
    }
    setFailed(true);
  };

  if (failed || candidates.length === 0) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-neutral-50">
        <Building2 size={24} className="text-black/25" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white p-2">
      <img
        src={candidates[index]}
        alt={`${source} logo`}
        className="h-10 w-10 object-contain"
        onError={handleError}
      />
    </div>
  );
}

export default function PublicationPage() {
  const allPublications: PublicationItem[] = [...latestPublications, ...publications, ...newPublications];

  return (
    <main className="min-h-screen bg-background px-6 py-24 md:px-12">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-8">Publications</h1>
        <p className="mb-10 text-lg text-zinc-700">
          Read our latest coverage and published stories from leading media channels about H S Detectives.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {allPublications.map((item, idx: number) => (
            <Link
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative bg-white border border-black/10 p-8 rounded-lg hover:shadow-xl hover:scale-105 hover:border-accent transition-all duration-300 cursor-pointer"
            >
              {/* Accent circle */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full"></div>
              
              {/* Card number */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-accent">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="mb-5 flex items-center gap-4">
                <SourceLogo source={item.source} url={item.url} />
                <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                  {item.source}
                </p>
              </div>
              
              {/* Card heading */}
              <h2 className="text-lg font-bold text-black mb-4">
                {item.title}
              </h2>
              
              {item.audience && (
                <p className="text-sm font-medium text-zinc-600 mb-4">
                  Potential Audience: <span className="font-bold text-black">{item.audience.toLocaleString()}</span>
                </p>
              )}
              
              {/* Read more text */}
              <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:text-accent/80">
                Read article
                <span aria-hidden>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
