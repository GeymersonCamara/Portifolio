import type { ReactNode } from "react";

export function EmeraldBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </div>
  );
}
