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
  canonical: "https://www.hsdetectives.com/contact-us",
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact HS Detectives",
  url: "https://www.hsdetectives.com/contact-us",
  about: {
    "@type": "Organization",
    "@id": "https://www.hsdetectives.com/#organization",
    name: "H S Detectives",
    telephone: "+91 99304 03115",
    email: "info@hsdetectives.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Crystal Plaza, A/514, New Link Rd, Andheri West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400053",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/hsdetectives/",
      "https://in.linkedin.com/company/hsdetectives",
      "https://www.instagram.com/hsdetectives/",
      "https://www.youtube.com/@hsdetectives7128",
      "https://x.com/hsdetectives",
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <GoogleTagHead />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <>
      <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Initiate Contact" 
          subtitle="All communications are strictly protected by client-agency confidentiality privileges."
          image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Contact", href: "/contact-us" } ]}
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
