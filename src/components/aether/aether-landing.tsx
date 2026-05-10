import { AetherAbout } from "@/components/aether/sections/about";
import { AetherCta } from "@/components/aether/sections/cta";
import { AetherFooter } from "@/components/aether/sections/footer";
import { AetherHeader } from "@/components/aether/sections/header";
import { AetherHero } from "@/components/aether/sections/hero";
import { AetherProjects } from "@/components/aether/sections/projects";
import { AetherQuality } from "@/components/aether/sections/quality";
import { AetherServices } from "@/components/aether/sections/services";
import { AetherTech } from "@/components/aether/sections/tech";

export function AetherLanding() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      <AetherHeader />
      <AetherHero />
      <AetherAbout />
      <AetherServices />
      <AetherProjects />
      <AetherQuality />
      <AetherTech />
      <AetherCta />
      <AetherFooter />
    </main>
  );
}
