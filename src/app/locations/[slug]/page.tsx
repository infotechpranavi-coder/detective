import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import { GET_LOCATION_BY_SLUG, SERVICE_LOCATIONS } from "@/lib/locations";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICE_LOCATIONS.map((location) => ({ slug: location.slug }));
}

export default async function LocationDetailsPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = GET_LOCATION_BY_SLUG(slug);

  if (!location) {
    notFound();
  }

  const { name: locationName, intro, description, highlights, extraSections } = location;

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero
          title={`${locationName} Investigations`}
          subtitle={intro}
          image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[
            { label: "Locations", href: "/locations" },
            { label: locationName, href: `/locations/${slug}` },
          ]}
        />

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Main Content */}
            <div className="space-y-12">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl text-foreground uppercase tracking-wider mb-6">
                  Service Overview in {locationName}
                </h2>
                <p className="font-inter text-foreground/70 text-lg leading-relaxed mb-10">
                  {description}
                </p>

                <div className="bg-card border border-foreground/10 p-8 md:p-10 shadow-2xl">
                  <h3 className="font-playfair text-2xl text-accent uppercase tracking-widest mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6" />
                    Our Strengths
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    {highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-foreground/80 text-base leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {extraSections?.map((section, idx) => (
                <div key={idx} className="border-t border-foreground/10 pt-12">
                  <h3 className="font-playfair text-2xl text-foreground uppercase tracking-wide mb-6">
                    {section.title}
                  </h3>
                  {section.content && (
                    <p className="font-inter text-foreground/70 leading-relaxed mb-6">
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span className="font-inter text-foreground/70 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.list && (
                    <div className="grid grid-cols-1 gap-12">
                      {section.list.map((listItem, i) => (
                        <div key={i} className="space-y-4">
                          <h4 className="font-playfair text-xl text-accent/90 flex items-center gap-2 italic uppercase">
                            {listItem.title}
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                            {listItem.points.map((point, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm">
                                <div className="mt-2 h-1 w-1 rounded-full bg-accent/40 flex-shrink-0" />
                                <span className="font-inter text-foreground/60 leading-relaxed">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}

