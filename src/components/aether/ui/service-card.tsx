import { ChevronRight } from "lucide-react";

import type { ServiceItem } from "@/content/types";

export function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <div className="group rounded-3xl border border-white/5 bg-[#0D1628] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-[#101B30]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
        {item.icon}
      </div>

      <h3 className="mt-6 text-lg font-bold text-white">{item.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {item.description}
      </p>

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400"
      >
        Saiba mais
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
