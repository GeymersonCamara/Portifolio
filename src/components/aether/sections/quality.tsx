import { Check } from "lucide-react";

import { Container } from "@/components/aether/ui/container";
import { qualityPillars } from "@/content/nav-stats-tech";

export function AetherQuality() {
  return (
    <section className="border-y border-white/5 bg-[#081524] py-24">
      <Container>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Padrão de Qualidade
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight text-white">
            Desenvolvimento focado em qualidade e experiência.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {qualityPillars.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#0E1B2E] p-6 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Check className="size-5" aria-hidden />
              </div>

              <p className="text-sm font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
