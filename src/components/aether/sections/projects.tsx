import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/aether/ui/container";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/aether/ui/section-title";
import { featuredProjects } from "@/content/projects";

export function AetherProjects() {
  return (
    <section id="projetos" className="scroll-mt-24 pb-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            badge="Projetos Selecionados"
            title="Aplicações que entregam valor real aos usuários"
          />

          <a
            href="#projetos"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-emerald-400"
          >
            Explorar todos os cases
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#0D1628]"
            >
              <div className="relative h-[260px] w-full overflow-hidden border-b border-white/5 bg-[#081524]">
                <Image
                  src={project.coverSrc ?? "/images/project.jpg"}
                  alt={`Pré-visualização: ${project.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={cn(
                    "h-full w-full",
                    project.coverFit === "contain"
                      ? "object-contain object-center p-6 sm:p-8"
                      : cn(
                          "object-cover",
                          project.coverPosition === "top"
                            ? "object-top"
                            : "object-center"
                        )
                  )}
                />
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    {project.subtitleTags[0]}
                  </span>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                    {project.subtitleTags[1]}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-emerald-400">
                  {project.highlights.map((h) => (
                    <span key={h}>{h}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
