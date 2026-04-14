"use client";

import GoogleTagHead from "@/components/GoogleTagHead";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./blogPosts";

export default function BlogIndex() {
  return (
    <>
      <GoogleTagHead />
      <>
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
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
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
    </>
  );
}
