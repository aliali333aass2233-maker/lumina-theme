import type { CSSProperties, ReactNode } from "react";

/** Stat tile with pulsing accent glow. Each instance takes a distinct accent. */
export function GlowStat({
  label,
  value,
  accent,
  delay = 0,
  className = "",
  sub,
}: {
  label: string;
  value: ReactNode;
  accent: string;
  delay?: number;
  className?: string;
  sub?: ReactNode;
}) {
  const style: CSSProperties & Record<string, string> = {
    ["--stat-accent"]: accent,
    animationDelay: `${delay}ms`,
  };
  return (
    <div
      className={`stat-glow rounded-xl p-3 min-h-[74px] flex flex-col justify-between ${className}`}
      style={style}
    >
      <div className="label-caps text-[9px]" style={{ color: accent }}>{label}</div>
      <div
        className="mt-1 text-lg md:text-xl font-semibold tabular-nums"
        style={{ color: "#fff", textShadow: `0 0 12px ${accent}88` }}
      >
        {value}
      </div>
      {sub && <div className="text-[9px] text-muted-foreground mt-0.5">{sub}</div>}
    </div>
  );
}

/** 10 distinct accents used across all stat tiles. All chosen to sit well on near-black. */
export const STAT_ACCENTS = {
  crimson: "#ff2d55",
  rose: "#ff5e8a",
  emerald: "#10b981",
  teal: "#14b8a6",
  amber: "#f59e0b",
  magenta: "#d946ef",
  violet: "#8b5cf6",
  sky: "#0ea5e9",
  lime: "#65a30d",
  cyan: "#06b6d4",
} as const;
