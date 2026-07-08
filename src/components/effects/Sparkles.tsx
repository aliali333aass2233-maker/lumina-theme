import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  color?: string;
  density?: number;
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

/** Lightweight canvas sparkle particle field. Absolute-positions to fill parent. */
export function Sparkles({
  className,
  color = "#ffffff",
  density = 80,
  minSize = 0.4,
  maxSize = 1.6,
  minOpacity = 0.15,
  maxOpacity = 0.9,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let particles: Array<{ x: number; y: number; r: number; a: number; d: number }> = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      particles = Array.from({ length: Math.round(rect.width * rect.height / 8000 * density / 80) }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: minSize + Math.random() * (maxSize - minSize),
        a: minOpacity + Math.random() * (maxOpacity - minOpacity),
        d: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const p of particles) {
        p.d += 0.02;
        const alpha = p.a * (0.55 + 0.45 * Math.sin(p.d));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [color, density, minSize, maxSize, minOpacity, maxOpacity]);
  return <canvas ref={ref} className={className} style={{ width: "100%", height: "100%", display: "block" }} />;
}
