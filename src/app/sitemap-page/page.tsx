import Link from "next/link";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Sitemap | H S Detectives",
  description: "Browse the full website structure of H S Detectives Agency Mumbai.",
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about-HS-detectives-mumbai" },
      { label: "Services", href: "/services" },
      { label: "Packages", href: "/packages-detectives-mumbai" },
      { label: "Locations", href: "/locations-detectives-agency-in-mumbai" },
      { label: "Clients", href: "/clients-hs-detectives" },
      { label: "Blog", href: "/blog" },
      { label: "Case Study", href: "/case-Investigation-Notes" },
      { label: "Contact", href: "/contact-detectives-mumbai" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Personal Investigation", href: "/services/personal-investigation" },
      { label: "Corporate Investigation", href: "/services/corporate-investigation" },
      { label: "TSCM Services", href: "/services/tscm-services" },
      { label: "Risk Management", href: "/services/risk-management" },
      { label: "Surveillance & Shadowing", href: "/services/surveillance-shadowing" },
      { label: "Business Investigation", href: "/services/business-investigation" },
      { label: "Matrimonial Checking", href: "/services/matrimonial-checking" },
      { label: "Debugging & Sweeping", href: "/services/debugging-sweeping" },
    ],
  },
  {
    title: "Key Subservices",
    links: [
      { label: "Pre-Matrimonial Investigations", href: "/services/personal-investigation/pre-matrimonial-investigations-services" },
      { label: "Post-Matrimonial Surveillance", href: "/services/personal-investigation/post-matrimonial-surveillance-services" },
      { label: "Employee Background Verification", href: "/services/corporate-investigation/employee-background-verification-services" },
      { label: "Asset Tracing", href: "/services/corporate-investigation/asset-tracing-services" },
      { label: "Corporate TSCM Services", href: "https://tscm.in/corporate-tscm-service/" },
      { label: "Home Bug Sweep", href: "https://tscm.in/home-bug-sweep/" },
      { label: "IP Protection", href: "/services/risk-management/ip-protection-services" },
      { label: "Forensic Investigation", href: "/services/risk-management/forensic-investigation-services" },
      { label: "Employee Surveillance", href: "/services/surveillance-shadowing/employee-surveillance-services" },
      { label: "Physical Surveillance", href: "/services/surveillance-shadowing/physical-surveillance-services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Publication", href: "/publication-media-channels-hs-detectives" },
      { label: "FAQ", href: "/faq" },
      { label: "Government Regulation", href: "/regulation-Private-Detective-Agencies-Regulation-Bill" },
      { label: "Membership", href: "/membership-detectives-association" },
      { label: "Certification", href: "/certificate-of-hs-detectives" },
      { label: "Our Ethics", href: "/ethics-HS-Detectives-Standard-Legal-Compliance" },
      { label: "Information", href: "/information-Intelligence-brief-services" },
      { label: "Warning Signs", href: "/warning-signs-Red-Flag-Detection" },
      { label: "Privacy Rights", href: "/legal-standards-right-of-privacy" },
      { label: "Compliance Corner", href: "/legal-standards-compliance-corner" },
      { label: "Investigation Protocol", href: "/investigation-protocol-client-protocol" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Mumbai", href: "/locations/mumbai-detectives-agency-in-mumbai" },
      { label: "Thane", href: "/locations/thane-detectives-agency-in-mumbai" },
      { label: "Navi Mumbai", href: "/locations/navi-mumbai-detectives-agency-in-mumbai" },
      { label: "Pune", href: "/locations/pune-detectives-agency-in-mumbai" },
      { label: "Delhi", href: "/locations/delhi-detectives-agency-in-mumbai" },
      { label: "Hyderabad", href: "/locations/hyderabad-detectives-agency-in-mumbai" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Refund and Cancellation Policy", href: "/refund-and-cancellation-policy" },
      { label: "Sitemap", href: "/sitemap-page" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-6 py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="font-playfair text-4xl uppercase tracking-wide text-white md:text-5xl">
              Sitemap
            </h1>
            <p className="mt-4 font-inter text-sm text-white/70 md:text-base">
              Explore the website structure of H S Detectives Agency Mumbai and navigate directly to key pages.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {sitemapSections.map((section) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h2 className="font-space text-xs uppercase tracking-widest text-accent md:text-sm">
                  {section.title}
                </h2>
                <ul className="mt-6 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block transition-colors hover:text-white"
                      >
                        <span className="font-space text-[10px] uppercase tracking-[0.2em] text-accent">
                          {link.label}
                        </span>
                        <span className="mt-1 block font-inter text-sm leading-relaxed text-white/80 break-all">
                          {link.href}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
