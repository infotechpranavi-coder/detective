import PageTransition from "@/components/ui/PageTransition";
import ClientsView from "./ClientsView";

export const metadata = {
  title: "Our Trusted Clients | H S Detectives Agency Mumbai",
  description: "Recognized and trusted by industry leaders across corporate, banking, infrastructure, and hospitality sectors. See our extensive client list.",
};

export default function ClientsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0D0D0D] text-white">
        <ClientsView />
      </main>
    </PageTransition>
  );
}
