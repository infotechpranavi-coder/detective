"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBreadcrumbItems } from "@/lib/breadcrumbs";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);

  if (!items.length) return null;

  return (
    <div className="pointer-events-none absolute left-0 right-0 top-24 z-[85]">
      <div className="container mx-auto px-6 lg:px-12">
        <nav
          aria-label="Breadcrumb"
          className="pointer-events-auto inline-flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-white/20 bg-black/70 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-md sm:text-xs sm:tracking-[0.18em]"
        >
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
              <span key={item.path} className="flex items-center gap-2 whitespace-nowrap">
                {index > 0 ? <span className="text-white/40">/</span> : null}
                {isCurrent ? (
                  <span aria-current="page" className="text-accent">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="transition-colors hover:text-accent">
                    {item.name}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
