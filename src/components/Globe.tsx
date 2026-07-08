import { useEffect, useRef, useState } from "react";
import createGlobe, { type Marker } from "cobe";
import { useSpring } from "@react-spring/core";

export interface GlobeProps {
  scale?: number;
  dark?: boolean;
  baseColor?: string;
  glowColor?: string;
  markerColor?: string;
  offsetX?: number;
  offsetY?: number;
  speed?: number;
  opacity?: number;
  brightness?: number;
  markers?: Marker[];
  className?: string;
  size?: number;
}

/** HEX → normalized rgb triple */
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16,
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r / 255, g / 255, b / 255];
}

export function Globe({
  scale = 1,
  dark = true,
  baseColor = "#1a1a1a",
  glowColor = "#ff4d5e",
  markerColor = "#ff4d5e",
  offsetX = 0,
  offsetY = 0,
  speed = 0.0025,
  opacity = 1,
  brightness = 1.1,
  markers = [],
  className = "",
  size = 320,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, downX: null as number | null });
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
  }));
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
      theta: 0.3,
      dark: dark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: brightness * 4,
      baseColor: hexToRgb(baseColor),
      glowColor: hexToRgb(glowColor),
      markerColor: hexToRgb(markerColor),
      markers,
      opacity,
      scale,
      offset: [offsetX, offsetY],
    });

    const tick = () => {
      if (!pointer.current.downX) phi += speed;
      globe.update({
        phi: phi + r.get(),
        width: width * 2,
        height: width * 2,
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [
    mounted,
    dark,
    baseColor,
    glowColor,
    markerColor,
    offsetX,
    offsetY,
    speed,
    opacity,
    brightness,
    scale,
    markers,
    r,
  ]);

  return (
    <div
      className={className}
      style={{
        width: size,
        maxWidth: "100%",
        aspectRatio: "1 / 1",
        position: "relative",
        cursor: "grab",
      }}
      onPointerDown={(e) => {
        pointer.current.downX = e.clientX;
        pointer.current.x = e.clientX;
        (e.currentTarget as HTMLDivElement).style.cursor = "grabbing";
      }}
      onPointerUp={(e) => {
        pointer.current.downX = null;
        (e.currentTarget as HTMLDivElement).style.cursor = "grab";
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
    </div>
  );
}
