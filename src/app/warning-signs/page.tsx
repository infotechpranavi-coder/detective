import InformationDetailPage from "@/components/information/InformationDetailPage";
import { informationPages } from "@/app/information/informationPagesData";

const page = informationPages.find((item) => item.slug === "warning-signs")!;

export const metadata = {
  title: "Warning Signs | H S Detectives",
  description:
    "Recognize deception, silent risk indicators, and early warning signs with guidance from H S Detectives Agency Mumbai.",
};

export default function WarningSignsPage() {
  return <InformationDetailPage page={page} />;
}
