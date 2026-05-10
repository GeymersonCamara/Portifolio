import { Container } from "@/components/aether/ui/container";
import { ServiceCard } from "@/components/aether/ui/service-card";
import { services } from "@/content/services";

export function AetherServices() {
  return (
    <section id="servicos" className="scroll-mt-24 pb-28">
      <Container>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Especialidades
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white">
            Soluções Digitais para Negócios de Elite
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
