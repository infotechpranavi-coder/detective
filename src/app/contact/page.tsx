import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import OfficeMiniCards from "@/components/contact/OfficeMiniCards";
import GoogleMapSection from "@/components/contact/GoogleMapSection";
import PageTransition from "@/components/ui/PageTransition";
import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = createPageMetadata({
  title: "Contact Detective Agency in Mumbai - HS Detectives",
  description:
    "Contact a trusted detective agency in Mumbai for confidential investigation services, quick response, and professional support for personal and corporate cases.",
  keywords: [
    "contact detective agency Mumbai",
    "detective agency phone number Mumbai",
    "hire private detective Mumbai",
    "best detective agency Mumbai contact",
    "investigation services Mumbai contact",
    "corporate investigation Mumbai contact",
    "personal investigation Mumbai contact",
  ],
  canonical: "https://www.hsdetectives.com/contact-detectives-mumbai",
});


export default function ContactPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Initiate Contact" 
          subtitle="All communications are strictly protected by client-agency confidentiality privileges."
          image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Contact", href: "/contact-detectives-mumbai" } ]}
        />
        <ContactForm />
        <GoogleMapSection />
        <OfficeMiniCards />
      </main>
    </PageTransition>
    </>
    </>
  );
}
