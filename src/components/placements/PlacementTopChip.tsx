import type { ReactNode } from "react";


/**
 * Small square rectangular chip pinned to top-right (mirrors "Edit with Lovable").
 * Used across every placement route for next/back navigation.
 */
export function PlacementTopChip({
  to,
  params,
  children,
  variant = "next",
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  variant?: "next" | "back";
}) {
  // Build href manually to support dynamic $branch param without router type friction.
  let href = to;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      href = href.replace(`$${k}`, encodeURIComponent(v));
    }
  }
  return (
    <a
      href={href}
      className={`fixed top-3 right-3 z-50 group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium tracking-tight
        border border-white/10 bg-black/60 backdrop-blur-md text-foreground/90
        hover:text-foreground hover:border-primary/50 hover:bg-black/80
        transition-all shadow-[0_2px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_28px_rgba(255,90,60,0.35)]`}
    >
      {variant === "back" && <span className="text-primary">←</span>}
      <span>{children}</span>
      {variant === "next" && <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>}
    </a>
  );
}

/**
 * Common header for placement pages — centered title with subtle kicker.
 */
export function PlacementHeader({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center pt-6 pb-2">
      {kicker && <div className="label-caps text-primary text-[10px]">{kicker}</div>}
      <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
    </div>
  );
}
