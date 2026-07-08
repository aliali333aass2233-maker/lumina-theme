import { useEffect, useRef, useState } from "react";

/**
 * Cursor-triggered reddish thunderstorm layer.
 * Reused from the Top Recruiters landing. Renders full-screen behind content.
 * Bolts strike on wheel/scroll and periodically (every ~4.6s); cursor moves
 * the red follow-glow.
 */
export function StormLayer({ interactive = true }: { interactive?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [flash, setFlash] = useState(0);
  const [bolt, setBolt] = useState({ n: 0, x: 40, tilt: 6 });

  useEffect(() => {
    const el = ref.current;
    const onMove = (e: PointerEvent) => {
      if (!el) return;
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    const strike = () => {
      setFlash((f) => f + 1);
      setBolt((b) => ({ n: b.n + 1, x: 12 + Math.random() * 76, tilt: -14 + Math.random() * 28 }));
    };
    let last = 0;
    const onPointer = () => {
      const now = Date.now();
      if (now - last > 900) { last = now; strike(); }
    };
    const onWheel = () => {
      const now = Date.now();
      if (now - last > 320) { last = now; strike(); }
    };
    if (interactive) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("wheel", onWheel, { passive: true });
      window.addEventListener("pointerdown", onPointer);
    }
    const iv = window.setInterval(strike, 4600);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointerdown", onPointer);
      window.clearInterval(iv);
    };
  }, [interactive]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_60%)]" />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx,50%) var(--my,30%), color-mix(in oklab, var(--primary) 34%, transparent), transparent 70%)",
        }}
      />
      <div
        key={`f${flash}`}
        className="tr-flash absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 0%, oklch(0.6 0.24 22 / 0.55), transparent 60%)",
        }}
      />
      <svg
        key={`b${bolt.n}`}
        className="tr-bolt absolute top-0 h-[60vh] w-24"
        style={{ left: `${bolt.x}%`, transform: `translateX(-50%) rotate(${bolt.tilt}deg)` }}
        viewBox="0 0 40 240"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M22 0 L10 96 L24 96 L6 240 L20 118 L8 118 Z"
          fill="oklch(0.72 0.2 25)"
          stroke="oklch(0.9 0.12 30)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
