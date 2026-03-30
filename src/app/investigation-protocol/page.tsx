import InformationDetailPage from "@/components/information/InformationDetailPage";
import { informationPages } from "@/app/information/informationPagesData";

const page = informationPages.find((item) => item.slug === "investigation-protocol")!;

export const metadata = {
  title: "Investigation Protocol | H S Detectives",
  description:
    "Learn about client discretion, evidence safety, and proper protocol during active investigations with H S Detectives.",
};

export default function InvestigationProtocolPage() {
  return <InformationDetailPage page={page} />;
}