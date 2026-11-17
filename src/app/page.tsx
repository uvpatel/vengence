import { HeroSection } from "@/components/home/hero-section";
import { InteractivePlayground } from "@/components/home/interactive-playground";
import { FeaturedComponents } from "@/components/home/featured-components";
import { DeveloperExperience } from "@/components/home/developer-experience";
import { InstallationExperience } from "@/components/home/installation-experience";
import { ClosingCta } from "@/components/home/closing-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 2 — Hero */}
      <HeroSection />

      {/* Section 3 — Interactive Component Playground */}
      <InteractivePlayground />

      {/* Section 4 — Featured Components */}
      <FeaturedComponents />

      {/* Section 5 — Developer Experience Bento Grid */}
      <DeveloperExperience />

      {/* Section 6 — Installation Experience */}
      <InstallationExperience />

      {/* Section 7 — Closing CTA */}
      <ClosingCta />
    </div>
  );
}
