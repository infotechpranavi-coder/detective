export type ServiceLocation = {
  name: string;
  slug: string;
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  { name: "Mumbai", slug: "mumbai" },
  { name: "Thane", slug: "thane" },
  { name: "Navi Mumbai", slug: "navi-mumbai" },
  { name: "Palghar", slug: "palghar" },
  { name: "Mira Bhayandar", slug: "mira-bhayandar" },
  { name: "Andheri", slug: "andheri" },
  { name: "Bandra", slug: "bandra" },
  { name: "BKC", slug: "bkc" },
  { name: "Borivali", slug: "borivali" },
  { name: "Churchgate", slug: "churchgate" },
  { name: "Dadar", slug: "dadar" },
  { name: "Vashi", slug: "vashi" },
  { name: "Panvel", slug: "panvel" },
  { name: "Mumbai Central", slug: "mumbai-central" },
  { name: "Powai", slug: "powai" },
  { name: "Mulund", slug: "mulund" },
  { name: "Kurla", slug: "kurla" },
  { name: "Goregaon", slug: "goregaon" },
  { name: "Malad", slug: "malad" },
  { name: "Juhu", slug: "juhu" },
  { name: "Santacruz", slug: "santacruz" },
];

export const LOCATION_NAME_BY_SLUG = Object.fromEntries(
  SERVICE_LOCATIONS.map((location) => [location.slug, location.name]),
) as Record<string, string>;
