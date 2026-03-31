import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ConsultationStrip from "@/components/contact/ConsultationStrip";
import OfficeMiniCards from "@/components/contact/OfficeMiniCards";
import GoogleMapSection from "@/components/contact/GoogleMapSection";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Contact Us | H S Detectives | Confidential Consultation in Mumbai",
  description: "Securely contact H S Detectives for a confidential consultation. Professional investigation services in Mumbai, Thane, Navi Mumbai and across India.",
  keywords: "Contact Detective Mumbai, Hire Private Investigator, Confidential Investigation Mumbai, HS Detectives Contact Number",
};


export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="Initiate Contact" 
          subtitle="All communications are strictly protected by client-agency confidentiality privileges."
          image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "Contact", href: "/contact" } ]}
        />
        <ContactForm />
        <GoogleMapSection />
        <ConsultationStrip />
        <OfficeMiniCards />
      </main>
    </PageTransition>
  );
}
