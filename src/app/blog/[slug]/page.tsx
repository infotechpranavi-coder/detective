import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../blogPosts";

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.slug);
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
        <article className="max-w-none">
          <div className="space-y-5">
            {post.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-zinc-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-semibold text-zinc-900">{section.title}</h2>

                {section.paragraphs?.length ? (
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-zinc-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}

                {section.bullets?.length ? (
                  <ul className="space-y-3 text-base leading-8 text-zinc-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="mb-4 text-base leading-7 text-zinc-700">{post.cta.text}</p>
            <Link
              href={post.cta.href}
              className="inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              {post.cta.label}
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
