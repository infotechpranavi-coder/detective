export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Private Detective Services",
    provider: {
      "@type": "Organization",
      name: "HS Detectives",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
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
