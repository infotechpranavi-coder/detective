export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.hsdetectives.com/#organization",
    name: "H S Detectives",
    url: "https://www.hsdetectives.com/services",
    logo: "https://www.hsdetectives.com/HS-Logo.webp",
    foundingDate: "2011",
    serviceType: "Private Detective Services",
    telephone: "+91 99304 03115",
    priceRange: "$$",
    description:
      "ISO Certified private investigative agency in India specializing in TSCM, corporate intelligence, and high-end surveillance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Crystal Plaza, A/514, New Link Rd, Andheri West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400053",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "163",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Goa" },
    ],
    knowsAbout: [
      "Technical Surveillance Counter-Measures (TSCM)",
      "Corporate Risk Management",
      "Cyber Security Audits",
      "Private Investigations",
      "Asset Tracing",
      "Matrimonial Checking",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "ISO Certified Private Investigative Agency",
      credentialCategory: "Professional License",
    },
    sameAs: [
      "https://tscm.in/",
      "https://www.facebook.com/hsdetectives/",
      "https://in.linkedin.com/company/hsdetectives",
      "https://www.instagram.com/hsdetectives/",
      "https://www.youtube.com/@hsdetectives7128",
      "https://x.com/hsdetectives",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Detective Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pre Matrimonial Investigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Post Matrimonial Investigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Investigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Surveillance Services",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
