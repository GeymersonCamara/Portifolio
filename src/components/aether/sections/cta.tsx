import { Container } from "@/components/aether/ui/container";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/aether/ui/marketing-buttons";

export function AetherCta() {
  return (
    <section id="contato" className="scroll-mt-24 pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-400/10 bg-gradient-to-br from-[#081524] via-[#0D1A2E] to-[#0A1727] px-8 py-20 text-center lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_40%)]" />

          <div className="relative">
            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
              Seu projeto merece uma{" "}
              <span className="text-emerald-400">aplicação moderna e profissional.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
              Desenvolva sistemas e aplicações web que impressionam, geram resultado
              e escalam de verdade.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton>Vamos Conversar</PrimaryButton>

              <SecondaryButton>Solicitar Orçamento</SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
