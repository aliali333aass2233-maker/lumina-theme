import { useEffect, useRef, useState } from "react";
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, BarChart, Bar, ReferenceDot, LabelList, Cell,
} from "recharts";

const gradId = (k: string) => `smooth-grad-${k}`;

/** Fires true once the wrapped element scrolls into view (used to trigger draw-in animation). */
function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Computes a tight Y-axis domain so small fluctuations read as dramatic, not flat. */
function tightDomain(data: any[], keys: string[], padRatio = 0.18): [number, number] {
  let min = Infinity, max = -Infinity;
  data.forEach((d) => keys.forEach((k) => {
    const v = d[k];
    if (typeof v === "number") {
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }));
  if (!isFinite(min) || !isFinite(max)) return [0, 1];
  const pad = Math.max((max - min) * padRatio, 1);
  return [Math.max(0, Math.floor(min - pad)), Math.ceil(max + pad)];
}

/** Finds the {index, value} of the highest point for a given key. */
function findPeak(data: any[], key: string) {
  let peakIdx = 0, peakVal = -Infinity;
  data.forEach((d, i) => {
    if (typeof d[key] === "number" && d[key] > peakVal) {
      peakVal = d[key];
      peakIdx = i;
    }
  });
  return { idx: peakIdx, val: peakVal };
}

/** Renders a small +X% / -X% badge above each point relative to the previous one. */
function DeltaLabel({ x, y, index, data, dataKey, color }: any) {
  if (index === 0 || !data[index] || !data[index - 1]) return null;
  const curr = data[index][dataKey];
  const prev = data[index - 1][dataKey];
  if (typeof curr !== "number" || typeof prev !== "number" || prev === 0) return null;
  const pct = Math.round(((curr - prev) / prev) * 100);
  if (pct === 0) return null;
  const up = pct > 0;
  const badgeColor = up ? "#4ade80" : "#f87171";
  const text = `${up ? "+" : ""}${pct}%`;
  return (
    <g transform={`translate(${x},${y - 22})`}>
      <rect
        x={-18} y={-11} width={36} height={18} rx={9}
        fill="var(--chart-tooltip-bg)"
        stroke={badgeColor}
        strokeWidth={1}
      />
      <text x={0} y={2} textAnchor="middle" fontSize={10} fontWeight={600} fill={badgeColor}>
        {text}
      </text>
    </g>
  );
}

/** Glowing peak-point marker, drawn even without hover. */
function PeakDot({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={9} fill={color} opacity={0.18} style={{ filter: `blur(3px)` }} />
      <circle cx={cx} cy={cy} r={5} fill={color} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
      <circle cx={cx} cy={cy} r={2} fill="#fff" />
    </g>
  );
}

/**
 * Smooth glowing area chart with tight Y-axis, peak marker, delta badges,
 * an optional dashed comparison overlay, and scroll-triggered draw-in.
 */
export function SmoothArea({
  data, keys, xKey = "label", height = 220,
  showDeltas = false,
  showPeak = true,
  compareKey, // e.g. "avg" — renders a dashed faded overlay line for comparison
  compareLabel = "Average",
}: {
  data: any[];
  keys: { key: string; color: string; label?: string }[];
  xKey?: string;
  height?: number;
  showDeltas?: boolean;
  showPeak?: boolean;
  compareKey?: string;
  compareLabel?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const allKeys = keys.map((k) => k.key).concat(compareKey ? [compareKey] : []);
  const domain = tightDomain(data, allKeys);
  const primaryKey = keys[0]?.key;
  const peak = primaryKey ? findPeak(data, primaryKey) : null;

  return (
    <div ref={ref}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 28, right: 8, left: -18, bottom: 0 }}>
          <defs>
            {keys.map((k) => (
              <linearGradient key={k.key} id={gradId(k.key)} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={k.color} stopOpacity={0.55} />
                <stop offset="100%" stopColor={k.color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
          <XAxis dataKey={xKey} stroke="var(--chart-axis)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis domain={domain} stroke="var(--chart-axis)" fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              background: "var(--chart-tooltip-bg)", border: "1px solid var(--chart-tooltip-border)", color: "var(--chart-tooltip-text)",
              borderRadius: 8, fontSize: 11,
            }}
          />

          {compareKey && (
            <Area
              type="monotone"
              dataKey={compareKey}
              name={compareLabel}
              stroke="var(--chart-axis-faint)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              fill="transparent"
              isAnimationActive={inView}
              animationDuration={1200}
            />
          )}

          {keys.map((k) => (
            <Area
              key={k.key}
              type="monotone"
              dataKey={k.key}
              stroke={k.color}
              strokeWidth={2.2}
              fill={`url(#${gradId(k.key)})`}
              style={{ filter: `drop-shadow(0 0 6px ${k.color})` }}
              isAnimationActive={inView}
              animationDuration={1400}
              animationEasing="ease-out"
              activeDot={{ r: 6, style: { filter: `drop-shadow(0 0 10px ${k.color})` } }}
            >
              {showDeltas && (
                <LabelList
                  dataKey={k.key}
                  content={(props: any) => (
                    <DeltaLabel {...props} data={data} dataKey={k.key} color={k.color} />
                  )}
                />
              )}
            </Area>
          ))}

          {showPeak && peak && primaryKey && (
            <ReferenceDot
              x={data[peak.idx][xKey]}
              y={peak.val}
              r={0}
              isFront
              shape={(props: any) => (
                <PeakDot cx={props.cx} cy={props.cy} color={keys[0].color} />
              )}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SmoothLine({
  data, keys, xKey = "label", height = 220,
  showDeltas = false,
  showPeak = true,
}: {
  data: any[];
  keys: { key: string; color: string; label?: string }[];
  xKey?: string;
  height?: number;
  showDeltas?: boolean;
  showPeak?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const domain = tightDomain(data, keys.map((k) => k.key));
  const primaryKey = keys[0]?.key;
  const peak = primaryKey ? findPeak(data, primaryKey) : null;
  const palette = ["#ff5a5f", "#3d9dff", "#ffb547", "#7ee06b", "#c96bff", "#5eff9c"];

  return (
    <div ref={ref}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 28, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
          <XAxis dataKey={xKey} stroke="var(--chart-axis)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis domain={domain} stroke="var(--chart-axis)" fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              background: "var(--chart-tooltip-bg)", border: "1px solid var(--chart-tooltip-border)", color: "var(--chart-tooltip-text)",
              borderRadius: 8, fontSize: 11,
            }}
          />
          {keys.map((k) => (
            <Line
              key={k.key}
              type="monotone"
              dataKey={k.key}
              stroke={k.color}
              strokeWidth={2.4}
              dot={(props: any) => {
                const color = palette[props.index % palette.length];
                return (
                  <circle
                    key={`dot-${props.index}`}
                    cx={props.cx}
                    cy={props.cy}
                    r={4}
                    fill={color}
                    style={{ filter: `drop-shadow(0 0 5px ${color})` }}
                  />
                );
              }}
              activeDot={{ r: 7, style: { filter: `drop-shadow(0 0 10px ${k.color})` } }}
              style={{ filter: `drop-shadow(0 0 6px ${k.color})` }}
              isAnimationActive={inView}
              animationDuration={1400}
              animationEasing="ease-out"
            >
              {showDeltas && (
                <LabelList
                  dataKey={k.key}
                  content={(props: any) => (
                    <DeltaLabel {...props} data={data} dataKey={k.key} color={k.color} />
                  )}
                />
              )}
            </Line>
          ))}
          {showPeak && peak && primaryKey && (
            <ReferenceDot
              x={data[peak.idx][xKey]}
              y={peak.val}
              r={0}
              isFront
              shape={(props: any) => (
                <PeakDot cx={props.cx} cy={props.cy} color={keys[0].color} />
              )}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/** Stylised gradient bar chart with drop-shadow (used only where a shape-comparison is essential). */
export function SmoothBar({
  data, dataKey, color, xKey = "label", height = 220,
}: {
  data: any[]; dataKey: string; color: string; xKey?: string; height?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id={`bar-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={1} />
              <stop offset="100%" stopColor={color} stopOpacity={0.25} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
          <XAxis dataKey={xKey} stroke="var(--chart-axis)" fontSize={10} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--chart-axis)" fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              background: "var(--chart-tooltip-bg)", border: "1px solid var(--chart-tooltip-border)", color: "var(--chart-tooltip-text)",
              borderRadius: 8, fontSize: 11,
            }}
            cursor={{ fill: "var(--chart-cursor)" }}
          />
          <Bar
            dataKey={dataKey}
            fill={`url(#bar-${dataKey})`}
            radius={[6, 6, 0, 0]}
            barSize={50}
            style={{ filter: `drop-shadow(0 4px 10px ${color}55)` }}
            isAnimationActive={inView}
            animationDuration={1100}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * Bar chart where each bar's brightness/glow scales with its value —
 * the peak bar glows bright and full-color, lower bars fade dimmer.
 * Optional delta badges (+X% / -X%) sit above each bar vs the previous one.
 */
export function SmoothBarPeak({
  data, dataKey, color, xKey = "label", height = 220,
  showDeltas = false,
}: {
  data: any[]; dataKey: string; color: string; xKey?: string; height?: number;
  showDeltas?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const values = data.map((d) => d[dataKey]).filter((v) => typeof v === "number");
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  const peakIdx = values.indexOf(max);

  return (
    <div ref={ref}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 36, right: 20, left: -12, bottom: 4 }}>
          <defs>
            {data.map((d, i) => (
              <linearGradient key={i} id={`bar-peak-${dataKey}-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.95} />
                <stop offset="100%" stopColor={color} stopOpacity={0.95} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
          <XAxis dataKey={xKey} stroke="var(--chart-axis)" fontSize={13} tickLine={false} axisLine={false} dy={4} />
          <YAxis
            domain={[Math.max(0, Math.floor(min - range * 0.15)), Math.ceil(max + range * 0.15)]}
            stroke="var(--chart-axis)"
            fontSize={13}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "var(--chart-tooltip-bg)", border: "1px solid var(--chart-tooltip-border)", color: "var(--chart-tooltip-text)",
              borderRadius: 8, fontSize: 11,
            }}
            cursor={{ fill: "var(--chart-cursor)" }}
          />
          <Bar
            dataKey={dataKey}
            radius={[6, 6, 0, 0]}
            barSize={54}
            isAnimationActive={inView}
            animationDuration={1100}
          >
            {data.map((d, i) => (
              <Cell key={`cell-${i}`} fill={`url(#bar-peak-${dataKey}-${i})`} />
            ))}
            {showDeltas && (
              <LabelList
                dataKey={dataKey}
                content={(props: any) => (
                  <DeltaLabel {...props} data={data} dataKey={dataKey} color={color} />
                )}
              />
            )}
          </Bar>
          {peakIdx >= 0 && (
            <ReferenceDot
              x={data[peakIdx][xKey]}
              y={max}
              r={0}
              isFront
              shape={(props: any) => (
                <PeakDot cx={props.cx} cy={props.cy - 8} color={color} />
              )}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
