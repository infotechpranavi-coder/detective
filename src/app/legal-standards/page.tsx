import InformationDetailPage from "@/components/information/InformationDetailPage";
import { informationPages } from "@/app/information/informationPagesData";

const page = informationPages.find((item) => item.slug === "legal-standards")!;

export const metadata = {
  title: "Legal Standards | H S Detectives",
  description:
    "Learn about compliance, admissible evidence, and lawful forensic methodology from H S Detectives Agency Mumbai.",
};

export default function LegalStandardsPage() {
  return <InformationDetailPage page={page} />;
}