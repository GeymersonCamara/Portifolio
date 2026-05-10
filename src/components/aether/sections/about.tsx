import { Check, Shield, Zap } from "lucide-react";

import { Container } from "@/components/aether/ui/container";
import { SectionTitle } from "@/components/aether/ui/section-title";
import { StatCard } from "@/components/aether/ui/stat-card";
import { stats } from "@/content/nav-stats-tech";

export function AetherAbout() {
  return (
    <section id="sobre" className="scroll-mt-24 pb-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionTitle
              badge="Sobre Mim"
              title="Mais que design. Soluções digitais estratégicas."
              description="Sou desenvolvedor de aplicações web especializado em criar sistemas modernos, interfaces profissionais e soluções de alta performance. Meu foco é desenvolver experiências digitais escaláveis e visualmente sofisticadas."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {stats.map((item) => (
                <StatCard key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/5 bg-[#0D1628] p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white">Minha Filosofia</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Check className="size-5" aria-hidden />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Entendimento de Negócio
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      Desenvolvo soluções alinhadas aos objetivos comerciais dos
                      clientes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Zap className="size-5" aria-hidden />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Performance Acima</h4>

                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      Aplicações rápidas com foco total em velocidade, SEO e
                      escalabilidade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Shield className="size-5" aria-hidden />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Arquitetura Segura</h4>

                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      Sistemas estruturados para escalar e proteger dados críticos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
