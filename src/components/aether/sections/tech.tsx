import { Container } from "@/components/aether/ui/container";
import { TechCard } from "@/components/aether/ui/tech-card";
import { technologies } from "@/content/nav-stats-tech";

export function AetherTech() {
  return (
    <section className="py-28">
      <Container>
        <div className="rounded-[2.5rem] border border-white/5 bg-[#0D1628] p-8 lg:p-12">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Tecnologias
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white">
                Tecnologias de Elite
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                Utilizo o que há de mais moderno no mercado para garantir
                velocidade, segurança e escalabilidade para os seus sistemas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {technologies.map((item) => (
                <TechCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
