import { useEffect, useState } from "react";
import { SmoothLine } from "./SmoothChart";

const PALETTE = ["#ff2d55", "#d946ef", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6", "#14b8a6"];

/** Line chart whose accent color cycles every 30s. Respects prefers-reduced-motion. */
export function ColorCyclingLine({
  data,
  seriesKey,
  height = 220,
  xKey = "label",
}: {
  data: any[];
  seriesKey: string;
  height?: number;
  xKey?: string;
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % PALETTE.length), 30000);
    return () => clearInterval(id);
  }, []);
  const color = PALETTE[idx];
  return <SmoothLine data={data} xKey={xKey} height={height} keys={[{ key: seriesKey, color }]} />;
}
