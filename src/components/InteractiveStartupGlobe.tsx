import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useSpring } from "@react-spring/core";
import { useTheme } from "@/lib/theme";
import { STARTUPS } from "@/data/content";

/** HEX → normalized rgb triple */
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3 ? h.split("").map((c) => c + c).join("") : h,
    16,
  );
  return [((bigint >> 16) & 255) / 255, ((bigint >> 8) & 255) / 255, (bigint & 255) / 255];
}

type StartupMarker = {
  location: [number, number];
  size: number;
  name: string;
  founder: string;
};

// Cities across the globe, each paired with a real IITB alumni startup.
const STARTUP_MARKERS: StartupMarker[] = [
  { location: [19.076, 72.8777], size: 0.09, ...pick("Housing.com") }, // Mumbai
  { location: [12.9716, 77.5946], size: 0.09, ...pick("Ola") }, // Bangalore
  { location: [28.6139, 77.209], size: 0.07, ...pick("Zeta") }, // Delhi
  { location: [37.7749, -122.4194], size: 0.08, ...pick("Postman") }, // SF
  { location: [40.7128, -74.006], size: 0.06, ...pick("Fractal AI") }, // NYC
  { location: [1.3521, 103.8198], size: 0.06, ...pick("InMobi") }, // Singapore
  { location: [51.5074, -0.1278], size: 0.06, ...pick("Cleartrip") }, // London
  { location: [17.385, 78.4867], size: 0.05, ...pick("PhonePe (ex)") }, // Hyderabad
];

function pick(name: string): { name: string; founder: string } {
  const s = STARTUPS.find((x) => x.name === name);
  return { name, founder: s?.founder ?? "IITB Alumnus" };
}

/** Replicates cobe's internal lat/lng → unit-sphere vector (fn `U`). */
function toVec3([lat, lng]: [number, number]): [number, number, number] {
  const r = (lat * Math.PI) / 180;
  const a = (lng * Math.PI) / 180 - Math.PI;
  const o = Math.cos(r);
  return [-o * Math.cos(a), Math.sin(r), o * Math.sin(a)];
}

/** Replicates cobe's 3D → screen projection (fn `O`). offset assumed [0,0]. */
function project(
  t: [number, number, number],
  phi: number,
  theta: number,
  scale: number,
  aspect: number,
) {
  const r = Math.cos(theta);
  const a = Math.cos(phi);
  const o = Math.sin(theta);
  const i = Math.sin(phi);
  const c = a * t[0] + i * t[2];
  const s = i * o * t[0] + r * t[1] - a * o * t[2];
  const depth = -i * r * t[0] + o * t[1] + a * r * t[2];
  const x = (c / aspect * scale + 1) / 2;
  const y = (-s * scale + 1) / 2;
  return { x, y, front: depth <= 0 };
}

export function InteractiveStartupGlobe({ size = 300 }: { size?: number }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pointer = useRef({ downX: null as number | null });
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
  }));
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);

  const scale = 1;
  const theta = 0.3;

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;
    let phi = 0;
    let width = 0;
    let raf = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: isDark ? 4.8 : 5.6,
      baseColor: hexToRgb(isDark ? "#1a0a0a" : "#ffffff"),
      glowColor: hexToRgb(isDark ? "#ff4d5e" : "#dddddd"),
      markerColor: hexToRgb(isDark ? "#ff8a3d" : "#111111"),
      markers: STARTUP_MARKERS.map((m) => ({ location: m.location, size: m.size })),
      opacity: 1,
      scale,
      offset: [0, 0],
    });

    const tick = () => {
      if (!pointer.current.downX) phi += 0.0025;
      const total = phi + r.get();
      globe.update({ phi: total, width: width * 2, height: width * 2 });

      // Sync overlay dots to the rendered globe using cobe's own projection.
      const cssSize = canvasRef.current?.offsetWidth ?? size;
      STARTUP_MARKERS.forEach((m, idx) => {
        const el = dotRefs.current[idx];
        if (!el) return;
        const p = project(toVec3(m.location), total, theta, scale, 1);
        if (p.front) {
          el.style.display = "block";
          el.style.left = `${p.x * cssSize}px`;
          el.style.top = `${p.y * cssSize}px`;
        } else {
          el.style.display = "none";
        }
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [mounted, isDark, r, size]);

  const activeMarker = active !== null ? STARTUP_MARKERS[active] : null;

  return (
    <div
      ref={wrapRef}
      style={{
        width: size,
        maxWidth: "100%",
        aspectRatio: "1 / 1",
        position: "relative",
        cursor: "grab",
      }}
      onPointerDown={(e) => {
        pointer.current.downX = e.clientX;
        (e.currentTarget as HTMLDivElement).style.cursor = "grabbing";
      }}
      onPointerUp={(e) => {
        pointer.current.downX = null;
        (e.currentTarget as HTMLDivElement).style.cursor = "grab";
        setActive(null);
      }}
      onPointerLeave={() => {
        pointer.current.downX = null;
        setActive(null);
      }}
      onPointerMove={(e) => {
        if (pointer.current.downX !== null) {
          const delta = e.clientX - pointer.current.downX;
          api.start({ r: delta / 200 });
        }
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", contain: "layout paint size" }}
      />

      {/* Clickable startup dots overlaid on the globe */}
      {STARTUP_MARKERS.map((m, idx) => (
        <button
          key={m.name}
          ref={(el) => {
            dotRefs.current[idx] = el;
          }}
          type="button"
          aria-label={`${m.name} — ${m.founder}`}
          onPointerDown={(e) => {
            e.stopPropagation();
            setActive(idx);
          }}
          onPointerUp={(e) => {
            e.stopPropagation();
            setActive(null);
          }}
          onPointerLeave={() => setActive((cur) => (cur === idx ? null : cur))}
          style={{
            position: "absolute",
            display: "none",
            left: 0,
            top: 0,
            width: 22,
            height: 22,
            transform: "translate(-50%, -50%)",
            borderRadius: "9999px",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            touchAction: "none",
          }}
        >
          <span
            style={{
              display: "block",
              width: 10,
              height: 10,
              margin: "6px",
              borderRadius: "9999px",
              boxShadow: isDark
                ? "0 0 0 4px rgba(255,138,61,0.18)"
                : "0 0 0 4px rgba(0,0,0,0.12)",
              background: isDark ? "rgba(255,138,61,0.9)" : "rgba(17,17,17,0.9)",
            }}
          />
        </button>
      ))}

      {/* Press-and-hold popup */}
      {activeMarker ? (
        <div
          role="status"
          style={{
            position: "absolute",
            left: "50%",
            top: -8,
            transform: "translate(-50%, -100%)",
            zIndex: 20,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
          className="rounded-lg border border-border bg-popover/95 px-3 py-2 text-center shadow-2xl backdrop-blur-xl"
        >
          <div className="text-sm font-semibold text-foreground">{activeMarker.name}</div>
          <div className="text-xs text-primary">{activeMarker.founder}</div>
        </div>
      ) : null}
    </div>
  );
}
