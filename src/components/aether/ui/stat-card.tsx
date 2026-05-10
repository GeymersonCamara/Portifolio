import type { StatItem } from "@/content/types";

export function StatCard({ item }: { item: StatItem }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0D1A2D] p-5">
      <h3 className="text-3xl font-black text-emerald-400">{item.value}</h3>

      <p className="mt-2 text-sm text-slate-400">{item.label}</p>
    </div>
  );
}
