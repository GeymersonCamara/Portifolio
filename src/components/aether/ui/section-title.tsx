export function SectionTitle({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
        {badge}
      </span>

      <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
