import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const primaryClassName =
  "group inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-300";

const secondaryClassName =
  "inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/10";

export function PrimaryButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" className={cn(primaryClassName, className)}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" className={cn(secondaryClassName, className)}>
      {children}
    </button>
  );
}

export function SecondaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={cn(secondaryClassName, className)}>
      {children}
    </a>
  );
}
