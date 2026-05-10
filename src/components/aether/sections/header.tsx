import { navItems } from "@/content/nav-stats-tech";
import { Container } from "@/components/aether/ui/container";

export function AetherHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07111F]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#topo" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400 font-black text-slate-950">
              G
            </div>

            <div>
              <p className="text-sm font-bold text-white">Geymerson Câmara</p>
            </div>
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-300"
          >
            Contato
          </a>
        </div>
      </Container>
    </header>
  );
}
