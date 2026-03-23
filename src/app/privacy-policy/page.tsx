import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Privacy Policy | H S Detectives",
  description: "Privacy Policy for H S Detectives Agency Mumbai.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="font-playfair text-4xl md:text-5xl uppercase tracking-wide text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 font-inter text-sm md:text-base text-white/70">
              Last Updated: March 2026
            </p>
          </div>

          <div className="mt-12 max-w-4xl space-y-10 font-inter text-white/85">
            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Introduction
              </h2>
              <p className="leading-relaxed">
                H S Detectives Agency Mumbai (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is committed to protecting the privacy and
                confidentiality of our clients. This policy explains how we
                handle personal data in compliance with the Digital Personal
                Data Protection Act (DPDPA) 2023.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Data Collection
              </h2>
              <p className="leading-relaxed">
                We collect minimal personal data including name, phone number,
                and email address when you submit an inquiry through our
                website, contact our Exotel IVR, or message our WhatsApp
                Business API.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Purpose of Processing
              </h2>
              <p className="leading-relaxed">Data is collected solely for:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-white/80">
                <li>Responding to investigative inquiries.</li>
                <li>Sending case updates and booking consultations.</li>
                <li>Maintaining secure records in our Zoho CRM.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                WhatsApp Consent &amp; Opt-Out
              </h2>
              <p className="leading-relaxed">
                By initiating a chat or pressing &ldquo;1&rdquo; during a call
                to H S Detectives Agency Mumbai, you provide explicit consent to
                receive automated messages via WhatsApp. You may opt-out at any
                time by replying &ldquo;STOP&rdquo;.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Confidentiality &amp; Security
              </h2>
              <p className="leading-relaxed">
                As a private investigation agency, confidentiality is paramount.
                All data is end-to-end encrypted. We do not share, sell, or
                disclose client information to any third party unless required
                by Indian Law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Contact Information
              </h2>
              <p className="leading-relaxed">
                For data queries, contact our Data Grievance Officer at:{" "}
                <a
                  href="mailto:info@hsdetectives.com"
                  className="text-accent hover:text-white transition-colors"
                >
                  info@hsdetectives.com
                </a>
              </p>
            </section>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
