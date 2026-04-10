import InformationDetailPage from "@/components/information/InformationDetailPage";
import { informationPages } from "@/app/information/informationPagesData";
import { createPageMetadata } from "@/lib/pageSeo";

const page = informationPages.find((item) => item.slug === "legal-standards")!;

export const metadata = createPageMetadata({
  title: "Legal Standards Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai legal standards services in Mumbai ensuring compliance, regulatory adherence, and accurate legal processes for businesses and individuals.",
  keywords: [
    "legal standards services Mumbai",
    "legal compliance services Mumbai",
    "legal audit services Mumbai",
    "corporate legal compliance Mumbai",
    "compliance management services Mumbai",
    "legal verification services Mumbai",
    "corporate investigation Mumbai",
    "legal advisory support Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/legal-standards-compliance-corner",
});

export default function LegalStandardsPage() {
  return <InformationDetailPage page={page} />;
}