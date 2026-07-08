import { useEffect, useRef, useState } from "react";

interface Marker { lat: number; lng: number; label: string; color?: string }

/** Stylized "3D" globe: rotating hemisphere with lat/long grid + city markers.
 *  Pure Canvas + CSS. No three.js. Absolute-fills parent. */
export function CssGlobe({
  markers = [],
  size = 520,
  showArcs = false,
  className,
  autoRotateSpeed = 0.15,
}: {
  markers?: Marker[];
  size?: number;
  showArcs?: boolean;
  className?: string;
  autoRotateSpeed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rot, setRot] = useState(0);
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      setRot((r) => r + dt * autoRotateSpeed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoRotateSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = size / 2;
    ctx.clearRect(0, 0, size, size);

    // globe fill with radial gradient
    const grad = ctx.createRadialGradient(r * 0.7, r * 0.7, r * 0.1, r, r, r);
    grad.addColorStop(0, "#1e3a8a");
    grad.addColorStop(0.6, "#0b1220");
    grad.addColorStop(1, "#000000");
    ctx.beginPath();
    ctx.arc(r, r, r - 1, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // meridians (longitude lines) — rotating
    ctx.strokeStyle = "rgba(100,180,255,0.18)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      const phase = (i / 12) * Math.PI * 2 + rot;
      ctx.beginPath();
      ctx.ellipse(r, r, Math.abs(Math.sin(phase)) * (r - 2) + 0.5, r - 2, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    // parallels (latitude lines)
    for (let i = 1; i < 8; i++) {
      const y = (i / 8) * (r * 2 - 4) + 2;
      const dy = y - r;
      const rw = Math.sqrt(Math.max(0, (r - 2) ** 2 - dy * dy));
      ctx.beginPath();
      ctx.ellipse(r, y, rw, rw * 0.15, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // markers projected
    const project = (lat: number, lng: number) => {
      const la = (lat * Math.PI) / 180;
      const lo = (lng * Math.PI) / 180 + rot;
      const x = Math.cos(la) * Math.sin(lo);
      const y = -Math.sin(la);
      const z = Math.cos(la) * Math.cos(lo);
      return { x: r + x * (r - 6), y: r + y * (r - 6), z };
    };

    if (showArcs && markers.length > 1) {
      // Draw arcs between consecutive markers
      for (let i = 0; i < markers.length; i++) {
        const a = project(markers[i].lat, markers[i].lng);
        const b = project(markers[(i + 1) % markers.length].lat, markers[(i + 1) % markers.length].lng);
        if (a.z < 0 || b.z < 0) continue;
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - 40;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.strokeStyle = markers[i].color || "rgba(255,120,180,0.7)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    for (const m of markers) {
      const p = project(m.lat, m.lng);
      if (p.z < 0) continue;
      const alpha = 0.4 + 0.6 * p.z;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,90,110,${alpha})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,90,110,${alpha * 0.4})`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
  }, [rot, markers, size, showArcs]);

  return (
    <div className={className} style={{ width: size, height: size, position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: size, height: size, borderRadius: "50%" }} />
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, rgba(120,180,255,0.25), transparent 55%)",
          boxShadow: "0 0 80px rgba(80,140,255,0.35), inset 0 0 60px rgba(0,0,0,0.6)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
