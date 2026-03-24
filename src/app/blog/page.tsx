"use client";

import Link from "next/link";

const posts = [
  {
    id: "modern-investigator",
    title: "The Modern Investigator: H S Detectives in Mumbai",
    excerpt: "How H S Detectives uses tech and law enforcement partnership to solve corporate and personal cases.",
    date: "2026-03-23",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "confidentiality-first",
    title: "Confidentiality First: Client Trust with H S Detectives",
    excerpt: "Privacy-first investigation workflows that keep your data secure.",
    date: "2026-03-22",
    image: "https://images.unsplash.com/photo-1521812815661-9c8b7f1d62c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pan-india-network",
    title: "Pan-India Network: Rapid Response across Cities",
    excerpt: "A fast-response case study showing nationwide reach and rapid deployment.",
    date: "2026-03-20",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 md:px-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="mb-12 text-zinc-700">Latest research, case studies, and investigator stories from H S Detectives.</p>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 w-full overflow-hidden bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-accent mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold text-zinc-900 mb-3">{post.title}</h2>
                <p className="text-sm text-zinc-600">{post.excerpt}</p>
                <p className="mt-4 text-accent font-semibold">Read more &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
