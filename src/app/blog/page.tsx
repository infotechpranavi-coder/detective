"use client";

import Link from "next/link";
import { blogPosts } from "./blogPosts";
import GoogleTagHead from "@/components/GoogleTagHead";

const blogSpeakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Investigator's Journal | H S Detectives Blog",
  url: "https://www.hsdetectives.com/blog",
  description: "Expert insights on private investigation, detective services, surveillance technology, and case studies from India's premier investigation agency.",
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

const blogArticlesSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Investigator's Journal | H S Detectives Blog",
  url: "https://www.hsdetectives.com/blog",
  description: "Expert insights on private investigation, detective services, surveillance technology, and case studies from India's premier investigation agency.",
  publisher: {
    "@type": "Organization",
    name: "H S Detectives",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hsdetectives.com/HS-Logo.webp",
    },
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `https://www.hsdetectives.com/blog/${post.id}`,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Wahid Shaikh",
      jobTitle: "Chief Investigative Officer",
      url: "https://in.linkedin.com/in/wahid-shaikh-0b677455",
    },
    publisher: {
      "@type": "Organization",
      name: "H S Detectives",
      logo: {
        "@type": "ImageObject",
        url: "https://www.hsdetectives.com/HS-Logo.webp",
      },
    },
  })),
};

export default function BlogIndex() {
  return (
    <>
      <GoogleTagHead />
      <script
        id="blog-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSpeakableSchema) }}
      />
      <script
        id="blog-articles-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogArticlesSchema) }}
      />
      <main className="min-h-screen bg-background px-6 py-24 md:px-12">
        <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="mb-12 text-zinc-700">Latest research, case studies, and investigator stories from H S Detectives.</p>

        <div className="grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
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
    </>
  );
}
