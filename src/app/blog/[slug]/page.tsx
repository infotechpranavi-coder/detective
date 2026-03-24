import { notFound } from "next/navigation";

const posts = [
  {
    id: "modern-investigator",
    title: "The Modern Investigator: H S Detectives in Mumbai",
    date: "2026-03-23",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    content: `### Case Study: Corporate due diligence

H S Detectives deployed a mixed team of retired officers and cyber analysts to build a watertight case for a multinational's internal audit. ...`,
  },
  {
    id: "confidentiality-first",
    title: "Confidentiality First: Client Trust with H S Detectives",
    date: "2026-03-22",
    image: "https://images.unsplash.com/photo-1521812815661-9c8b7f1d62c1?auto=format&fit=crop&w=1200&q=80",
    content: `### Protecting identities

Client identities are disguised and case files encrypted according to military-grade standards. ...`,
  },
  {
    id: "pan-india-network",
    title: "Pan-India Network: Rapid Response across Cities",
    date: "2026-03-20",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    content: `### Rapid investigative mobilization

With presence in 12 states, teams can reach any major city in under 72 hours. ...`,
  },
];

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.id === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-background px-6 py-24 md:px-12">
      <section className="mx-auto max-w-4xl bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wider text-accent mb-4">{post.date}</p>
        <h1 className="text-4xl font-bold text-zinc-900 mb-6">{post.title}</h1>
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="h-80 w-full object-cover"
          />
        </div>
        <article className="prose prose-zinc max-w-none">
          <p>{post.content}</p>
        </article>
      </section>
    </main>
  );
}
