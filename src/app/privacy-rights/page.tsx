import InformationDetailPage from "@/components/information/InformationDetailPage";
import { informationPages } from "@/app/information/informationPagesData";

const page = informationPages.find((item) => item.slug === "privacy-rights")!;

export const metadata = {
  title: "Privacy Rights | H S Detectives",
  description:
    "Learn about privacy protection, confidentiality, and ethical investigation support from H S Detectives.",
};

export default function PrivacyRightsPage() {
  return <InformationDetailPage page={page} />;
}