import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, image, breadcrumbs }: PageHeroProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hsdetectives.com/",
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.label,
        item: `https://www.hsdetectives.com${crumb.href}`,
      })),
    ],
  };

  return (
    <section className="relative flex min-h-[420px] w-full items-end overflow-hidden pb-14 pt-24 sm:h-[60vh] sm:min-h-[460px] sm:pb-20 sm:pt-28 lg:h-[65vh] lg:min-h-[500px] lg:pb-24 lg:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="h-full w-full object-cover img-noir" loading="eager" />
      </div>

      <div className="absolute inset-0 z-[1] bg-black/70" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 to-black/60" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mb-4 flex flex-wrap items-center gap-2 font-space text-[9px] uppercase tracking-[0.16em] text-white/70 sm:mb-6 sm:text-sm sm:tracking-widest">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={`${crumb.href}-${i}`} className="flex items-center gap-2">
              <span className="text-white/40">/</span>
              <Link href={crumb.href} className="transition-colors hover:text-accent">
                {crumb.label}
              </Link>
            </span>
          ))}
        </div>

        <h1 className="expert-highlight mb-4 font-playfair text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl md:text-6xl lg:text-7xl lg:tracking-wider">
          {title}
        </h1>

        <p className="voice-summary max-w-2xl font-inter text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
