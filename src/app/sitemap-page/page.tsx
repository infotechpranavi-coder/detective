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
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Locations", href: "/locations" },
      { label: "Blog", href: "/blog" },
      { label: "Case Study", href: "/case-study" },
      { label: "Contact", href: "/contact" },
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
      { label: "Pre-Matrimonial Investigations", href: "/services/personal-investigation/pre-matrimonial-investigations" },
      { label: "Post-Matrimonial Surveillance", href: "/services/personal-investigation/post-matrimonial-surveillance" },
      { label: "Employee Background Verification", href: "/services/corporate-investigation/employee-background-verification" },
      { label: "Asset Tracing", href: "/services/corporate-investigation/asset-tracing" },
      { label: "Corporate TSCM Services", href: "/services/tscm-services/corporate-tscm-services" },
      { label: "Home Bug Sweep", href: "/services/tscm-services/home-bug-sweep" },
      { label: "IP Protection", href: "/services/risk-management/ip-protection" },
      { label: "Forensic Investigation", href: "/services/risk-management/forensic-investigation" },
      { label: "Employee Surveillance", href: "/services/surveillance-shadowing/employee-surveillance" },
      { label: "Physical Surveillance", href: "/services/surveillance-shadowing/physical-surveillance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Publication", href: "/publication" },
      { label: "FAQ", href: "/faq" },
      { label: "Government Regulation", href: "/regulation" },
      { label: "Membership", href: "/membership" },
      { label: "Certification", href: "/certificate" },
      { label: "Our Ethics", href: "/ethics" },
      { label: "Information", href: "/information" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Mumbai", href: "/locations/mumbai" },
      { label: "Thane", href: "/locations/thane" },
      { label: "Navi Mumbai", href: "/locations/navi-mumbai" },
      { label: "Pune", href: "/locations/pune" },
      { label: "Delhi", href: "/locations/delhi" },
      { label: "Hyderabad", href: "/locations/hyderabad" },
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
                        className="font-inter text-sm leading-relaxed text-white/80 transition-colors hover:text-white break-all"
                      >
                        {link.href}
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
