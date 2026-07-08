import type { ReactNode } from "react";

/** Vibrant pulsing color-cycling border glow. Wrap any card. */
export function GlowBorder({
  children,
  className = "",
  colors = ["#ff3d7f", "#ff9d3d", "#ffd166", "#3ecfc0", "#5eff9c", "#6ee7ff", "#c96bff"],
  radius = 20,
  duration = 6,
}: {
  children: ReactNode;
  className?: string;
  colors?: string[];
  radius?: number;
  duration?: number;
}) {
  const gradient = `linear-gradient(120deg, ${colors.join(", ")})`;
  return (
    <div
      className={`relative ${className}`}
      style={{ borderRadius: radius }}
    >
      <div
        aria-hidden
        className="absolute -inset-[2px] pointer-events-none"
        style={{
          borderRadius: radius + 2,
          background: gradient,
          backgroundSize: "300% 300%",
          animation: `glow-border-shift ${duration}s ease-in-out infinite, glow-border-pulse ${duration / 2}s ease-in-out infinite`,
          filter: "blur(10px)",
          opacity: 0.85,
        }}
      />
      <div
        aria-hidden
        className="absolute -inset-[1.5px] pointer-events-none"
        style={{
          borderRadius: radius + 1.5,
          background: gradient,
          backgroundSize: "300% 300%",
          animation: `glow-border-shift ${duration}s ease-in-out infinite`,
        }}
      />
      <div
        className="relative"
        style={{
          borderRadius: radius,
          background: "var(--card)",   // ✅ theme-aware
          height: "100%",
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes glow-border-shift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glow-border-pulse {
          0%,100% { opacity: 0.55; }
          50% { opacity: 0.95; }
        }
      `}</style>
    </div>
  );
}
