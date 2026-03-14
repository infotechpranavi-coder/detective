import PageHero from "@/components/shared/PageHero";
import StorySection from "@/components/about/StorySection";
import ValuesSlider from "@/components/about/ValuesSlider";
import TeamCredentials from "@/components/about/TeamCredentials";
import CoverageSection from "@/components/about/CoverageSection";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "About Us | H S Detectives",
  description: "Learn about H S Detectives, India's premier private investigation agency.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <PageHero 
          title="About The Agency" 
          subtitle="Uncovering the truth with absolute precision and confidentiality since 2011."
          image="https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "About", href: "/about" } ]}
        />
        <StorySection />
        <ValuesSlider />
        <TeamCredentials />
        <CoverageSection />
      </main>
    </PageTransition>
  );
}
