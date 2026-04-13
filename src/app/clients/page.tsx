import PageTransition from "@/components/ui/PageTransition";
import ClientsView from "./ClientsView";
import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = createPageMetadata({
  title: "Detective Agency Corporate Portfolio - HS Detectives",
  description:
    "Hs Detectives Mumbai Explore our detective agency corporate portfolio showcasing expertise in corporate investigations, risk analysis, due diligence, and confidential business solutions.",
  keywords: [
    "detective agency corporate portfolio",
    "corporate investigation services",
    "corporate detective agency",
    "fraud investigation services",
    "employee verification services",
    "corporate intelligence services",
    "background verification company",
    "corporate surveillance services",
    "private detective for companies",
    "professional detective agency Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/our-corporate-clients",
});

export default function ClientsPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <PageTransition>
      <main className="min-h-screen bg-[#0D0D0D] text-white">
        <ClientsView />
      </main>
    </PageTransition>
    </>
    </>
  );
}
