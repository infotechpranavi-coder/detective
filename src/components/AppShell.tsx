"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import LastReviewed from "@/components/seo/LastReviewed";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

/** Code-split carousel + FAQ so their JS (Embla, large trees) are not in the main layout chunk. */
const OurClients = dynamic(() => import("@/components/home/OurClients"), {
  loading: () => <div className="mx-auto min-h-[180px] w-full max-w-7xl" aria-hidden />,
});
const CommonFaqSection = dynamic(() => import("@/components/shared/CommonFaqSection"), {
  loading: () => <div className="min-h-[280px] w-full" aria-hidden />,
});

interface AppShellProps {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}

export default function AppShell({ children, navbar, footer }: AppShellProps) {
  const pathname = usePathname();
  const isIntroRoute = pathname === "/logointor";
  const isClientsRoute =
    pathname === "/clients" ||
    pathname === "/clients-hs-detectives" ||
    pathname === "/our-corporate-clients";
  const showClientsSection = !isClientsRoute;

  if (isIntroRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <BreadcrumbSchema />
      {navbar}
      <div className="relative">
        <Breadcrumbs />
        {children}
      </div>
      {showClientsSection ? <OurClients /> : null}
      <LastReviewed />
      <CommonFaqSection />
      {footer}
    </>
  );
}
