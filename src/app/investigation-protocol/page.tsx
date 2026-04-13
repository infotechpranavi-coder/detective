import InformationDetailPage from "@/components/information/InformationDetailPage";
import { informationPages } from "@/app/information/informationPagesData";
import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";

const page = informationPages.find((item) => item.slug === "investigation-protocol")!;

export const metadata = createPageMetadata({
  title: "Investigation Protocol Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai investigation protocol services in Mumbai ensuring structured, confidential, and legally compliant processes for corporate and personal investigations.",
  keywords: [
    "investigation protocol services Mumbai",
    "investigation process services Mumbai",
    "corporate investigation protocol Mumbai",
    "structured investigation services Mumbai",
    "legal investigation procedures Mumbai",
    "confidential investigation services Mumbai",
    "corporate investigation Mumbai",
    "professional detective services Mumbai",
    "due diligence investigation Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/investigation-protocol-client-protocol",
});

export default function InvestigationProtocolPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <InformationDetailPage page={page} />
    </>
    </>
  );
}