import type { TechItem } from "@/content/types";

export function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-white/5 bg-[#111D32] px-5 py-5 text-sm font-medium text-white">
      {item.name}
    </div>
  );
}
