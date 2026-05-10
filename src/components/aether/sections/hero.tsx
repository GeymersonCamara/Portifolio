import Image from "next/image";
import { Check } from "lucide-react";

import { Container } from "@/components/aether/ui/container";
import { EmeraldBadge } from "@/components/aether/ui/emerald-badge";
import {
  PrimaryButton,
  SecondaryLink,
} from "@/components/aether/ui/marketing-buttons";
import { heroHighlights } from "@/content/nav-stats-tech";

export function AetherHero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pb-24 pt-16 lg:pb-32 lg:pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" />

      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <EmeraldBadge>Web Dev • SaaS • Full Stack</EmeraldBadge>

            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              Tiro ideias do papel e transformo em{" "}
              <span className="text-emerald-400">aplicações web modernas,</span>{" "}
              rápidas e escaláveis.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              Desenvolvedor de aplicações web especializado em sistemas de alta
              performance que ajudam empresas a crescer através de tecnologia de
              ponta e UX impecável.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton>Solicitar Projeto</PrimaryButton>

              <SecondaryLink href="#projetos">Ver Portfólio</SecondaryLink>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Check className="size-4 text-emerald-400" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center self-start lg:justify-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-[#0C1728] p-3 shadow-[0_0_80px_rgba(16,185,129,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent" />

              <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[1.6rem] border border-white/5 sm:max-w-[360px] lg:max-w-[400px]">
                <Image
                  src="/images/perfil%20sgc.jpg"
                  alt="Retrato profissional"
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 360px, 400px"
                  quality={92}
                  className="aspect-[4/5] h-auto w-full object-cover object-top"
                  priority
                />
              </div>

              <div className="absolute right-8 top-8 rounded-2xl border border-white/10 bg-[#0F1C30]/90 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-slate-400">Modern</p>

                <p className="text-sm font-semibold text-white">Web Experience</p>
              </div>

              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-[#0F1C30]/90 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-slate-400">Performance</p>

                <p className="text-sm font-semibold text-emerald-400">99%</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
