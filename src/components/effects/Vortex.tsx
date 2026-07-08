import { useEffect, useRef } from "react";

/** Dense swirling vortex canvas — dramatic backdrop for CTA bands. */
export function Vortex({
  className,
  particleCount = 500,
  baseHue = 220,
  hueRange = 220,
  rangeSpeed = 1.5,
}: {
  className?: string;
  particleCount?: number;
  baseHue?: number;
  hueRange?: number;
  rangeSpeed?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0, cx = 0, cy = 0;
    type P = { r: number; a: number; s: number; hue: number; life: number };
    let parts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      w = rect.width; h = rect.height; cx = w / 2; cy = h / 2;
      parts = Array.from({ length: particleCount }, () => spawn());
    };
    const spawn = (): P => ({
      r: Math.random() * Math.max(w, h) * 0.6 + 20,
      a: Math.random() * Math.PI * 2,
      s: (0.002 + Math.random() * 0.008) * rangeSpeed,
      hue: baseHue + Math.random() * hueRange,
      life: Math.random(),
    });

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const tick = () => {
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, w, h);
      for (const p of parts) {
        p.a += p.s;
        p.r *= 0.998;
        p.life += 0.008;
        const x = cx + Math.cos(p.a) * p.r;
        const y = cy + Math.sin(p.a) * p.r * 0.55;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${0.4 + 0.6 * Math.sin(p.life)})`;
        ctx.fill();
        if (p.r < 5 || p.life > Math.PI * 2) Object.assign(p, spawn());
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [particleCount, baseHue, hueRange, rangeSpeed]);
  return <canvas ref={ref} className={className} style={{ width: "100%", height: "100%", display: "block" }} />;
}
