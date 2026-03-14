"use client";

import { useCallback } from "react";
import LogoIntro from "@/components/ui/LogoIntro";

const INTRO_SESSION_KEY = "hs-intro-seen";

export default function LogoIntorPage() {
  const handleComplete = useCallback(() => {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    window.location.href = "http://localhost:3001/";
  }, []);

  return (
    <main className="fixed inset-0 bg-background">
      <LogoIntro onComplete={handleComplete} />
    </main>
  );
}
