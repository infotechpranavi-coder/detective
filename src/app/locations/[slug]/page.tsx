import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import { LOCATION_NAME_BY_SLUG, SERVICE_LOCATIONS } from "@/lib/locations";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICE_LOCATIONS.map((location) => ({ slug: location.slug }));
}

export default async function LocationDetailsPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const locationName = LOCATION_NAME_BY_SLUG[slug];

  if (!locationName) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero
          title={`${locationName} Investigations`}
          subtitle={`Confidential private detective services in ${locationName} with fast local deployment and verified field reporting.`}
          image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[
            { label: "Locations", href: "/locations" },
            { label: locationName, href: `/locations/${slug}` },
          ]}
        />

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <div className="border border-foreground/10 bg-card p-8 md:p-10">
              <h2 className="font-playfair text-3xl md:text-4xl text-foreground uppercase tracking-wider">
                Service Coverage in {locationName}
              </h2>
              <p className="mt-5 font-inter text-foreground/70 leading-relaxed">
                Our team supports personal, matrimonial, corporate, and surveillance
                investigations in {locationName}. Each assignment is handled with
                strict confidentiality, structured updates, and legally compliant
                field operations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
