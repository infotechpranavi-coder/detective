"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import LogoIntro from "@/components/ui/LogoIntro";

const INTRO_SESSION_KEY = "hs-intro-seen";

export default function LogoIntorPage() {
  const router = useRouter();
  
  const handleComplete = useCallback(() => {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    router.replace("/");
  }, [router]);

  return (
    <main className="fixed inset-0 bg-background">
      <LogoIntro onComplete={handleComplete} />
    </main>
  );
}
