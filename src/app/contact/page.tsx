import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ConsultationStrip from "@/components/contact/ConsultationStrip";
import OfficeMiniCards from "@/components/contact/OfficeMiniCards";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Contact | H S Detectives",
  description: "Securely contact H S Detectives for a confidential consultation.",
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
        <ConsultationStrip />
        <OfficeMiniCards />
      </main>
    </PageTransition>
  );
}
