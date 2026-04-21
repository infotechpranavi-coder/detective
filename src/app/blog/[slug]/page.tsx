import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../blogPosts";
import GoogleTagHead from "@/components/GoogleTagHead";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.id === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | H S Detectives Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return notFound();

  const postUrl = `https://www.hsdetectives.com/blog/${post.id}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: post.image,
      width: 1200,
      height: 640,
    },
    author: {
      "@type": "Person",
      name: "Wahid Shaikh",
      jobTitle: "Chief Investigative Officer",
      url: "https://in.linkedin.com/in/wahid-shaikh-0b677455",
    },
    publisher: {
      "@id": "https://www.hsdetectives.com/#organization",
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: "TSCM, Private Investigator Mumbai, Asset Tracing, Corporate Intelligence",
    articleSection: "Investigative Intelligence",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".article-body", ".key-takeaways"],
    },
  };

  return (
    <>
      <GoogleTagHead />
      <script
        id={`blogposting-schema-${post.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <main className="min-h-screen bg-background px-6 py-24 md:px-12">
      <section className="mx-auto max-w-4xl bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wider text-accent mb-4">{post.date}</p>
        <h1 className="text-4xl font-bold text-zinc-900 mb-6">{post.title}</h1>
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={640}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-80 w-full object-cover"
            priority
          />
        </div>
        <article className="article-body max-w-none">
          <div className="space-y-5">
            {post.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-zinc-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="key-takeaways mt-10 space-y-10">
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

          <div className="mt-8 flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white font-semibold text-lg">
              WS
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Wahid Shaikh</p>
              <span className="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                Chief Investigative Officer
              </span>
              <a
                href="https://in.linkedin.com/in/wahid-shaikh-0b677455"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-red-600 hover:text-red-700"
              >
                View LinkedIn Profile →
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
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
    </>
  );
}
