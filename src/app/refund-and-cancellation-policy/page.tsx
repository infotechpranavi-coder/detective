import PageTransition from "@/components/ui/PageTransition";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Refund and Cancellation Policy | H S Detectives",
  description: "Refund and Cancellation Policy for H S Detectives Agency Mumbai.",
};

export default function RefundAndCancellationPolicyPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="font-playfair text-4xl md:text-5xl uppercase tracking-wide text-white">
              Refund and Cancellation Policy
            </h1>
          </div>

          <div className="mt-12 max-w-4xl space-y-10 font-inter text-white/85">
            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Advance Payments
              </h2>
              <p className="leading-relaxed">
                Due to the nature of investigative work, H S Detectives Agency
                Mumbai requires a 50% to 100% advance payment depending on the
                case type. This covers immediate deployment of field agents,
                travel, and surveillance equipment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Cancellation Before Commencement
              </h2>
              <p className="leading-relaxed">
                If a client cancels the service within 24 hours of payment and
                before any field work or digital background check has started, a
                full refund (minus a 10% administrative fee) will be issued.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Non-Refundable Scenarios
              </h2>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed text-white/80">
                <li>
                  Work Commenced: Once an investigator has been assigned or
                  field work has started, the advance payment is strictly
                  non-refundable.
                </li>
                <li>
                  Inconclusive Results: No refunds are provided if an
                  investigation yields &ldquo;no results&rdquo; (e.g., the
                  subject did not leave their house during surveillance), as
                  professional time and resources were still utilized.
                </li>
                <li>
                  Client Withdrawal: If the client decides to stop the
                  investigation mid-way for personal reasons, no refund will be
                  granted for the remaining balance.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-space text-xs md:text-sm tracking-widest uppercase text-accent">
                Processing Timeline
              </h2>
              <p className="leading-relaxed">
                Eligible refunds are processed within 7-10 business days via the
                original payment method.
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
