import InformationDetailPage from "@/components/information/InformationDetailPage";
import { informationPages } from "@/app/information/informationPagesData";
import { createPageMetadata } from "@/lib/pageSeo";

const page = informationPages.find((item) => item.slug === "warning-signs")!;

export const metadata = createPageMetadata({
  title: "Red Flag Detection Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai Get expert red flag detection services in Mumbai for corporate, financial, and personal investigations with reliable insights and discreet reporting.",
  keywords: [
    "red flag detection services Mumbai",
    "fraud detection services Mumbai",
    "risk identification services Mumbai",
    "corporate risk investigation Mumbai",
    "background red flag check Mumbai",
    "due diligence red flags Mumbai",
    "corporate investigation Mumbai",
    "business risk assessment Mumbai",
    "investigative services Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/warning-signs-Red-Flag-Detection",
});

export default function WarningSignsPage() {
  return <InformationDetailPage page={page} />;
}
