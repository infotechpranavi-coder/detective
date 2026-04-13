import PageTransition from "@/components/ui/PageTransition";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Terms and Conditions | H S Detectives",
  description: "Terms and Conditions for H S Detectives Agency Mumbai.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="font-playfair text-4xl md:text-5xl uppercase tracking-wide text-white">
              Terms and Conditions
            </h1>
            <p className="mt-4 font-inter text-sm md:text-base text-white/70">
              Effective Date: March 2026
            </p>
          </div>

          <div className="mt-12 max-w-4xl space-y-10 font-inter text-white/85">
            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Legal Agreement
              </h2>
              <p className="leading-relaxed">
                By using the services of H S Detectives Agency Mumbai, you agree
                to these terms. All investigative activities are conducted
                within the framework of the Indian Penal Code and the
                Constitution of India.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Lawful Purpose
              </h2>
              <p className="leading-relaxed">
                The client warrants that the request for investigation is for a
                lawful purpose. H S Detectives Agency Mumbai strictly prohibits
                the use of its services for illegal stalking, harassment, or
                unauthorized hacking.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Communication Disclaimer
              </h2>
              <p className="leading-relaxed">
                You agree to receive automated communications via Exotel (IVR)
                and AiSensy (WhatsApp). These tools are used to streamline
                coordination while our investigators are in the field.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                No Guarantee of Results
              </h2>
              <p className="leading-relaxed">
                Private investigation is a process of information gathering.
                H S Detectives Agency Mumbai provides reports based on available
                facts and surveillance; however, we do not guarantee a specific
                &ldquo;positive&rdquo; outcome or the discovery of specific
                evidence.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                H S Detectives Agency Mumbai shall not be liable for any legal
                consequences or damages arising from the client&apos;s use of
                the information provided in our reports.
              </p>
            </section>
          </div>
        </section>
      </main>
    </PageTransition>
    </>
    </>
  );
}
