import { Container } from "@/components/aether/ui/container";
import { navItems } from "@/content/nav-stats-tech";

export function AetherFooter() {
  return (
    <footer className="border-t border-white/5 py-14">
      <Container>
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 font-black text-slate-950">
                G
              </div>

              <p className="text-lg font-bold text-white">Geymerson Câmara</p>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Desenvolvedor especialista em aplicações web de alta impacto.
              Transformando complexidade em sistemas modernos e escaláveis.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Navegação
            </h3>

            <nav className="mt-5 space-y-3" aria-label="Rodapé">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Newsletter
            </h3>

            <form className="mt-5 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <label htmlFor="newsletter-email" className="sr-only">
                E-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                autoComplete="email"
                className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />

              <button
                type="submit"
                className="shrink-0 bg-emerald-400 px-5 text-sm font-semibold text-slate-950"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Aether Digital.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>

            <a href="#" className="transition-colors hover:text-white">
              GitHub
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Dribbble
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
