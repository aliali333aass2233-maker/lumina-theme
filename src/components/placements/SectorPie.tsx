// pie chart module — hyperreal thumbnails now live in the side info panel.
import { PieChart, Pie, Cell, Sector as RSector, ResponsiveContainer } from "recharts";
import type { Sector } from "@/data/placements-2023-24";

type PieDatum = Sector & { value: number };

/**
 * Interactive hyperreal pie chart.
 * - Each slice fills with the sector's hyperreal image via SVG <pattern>.
 * - Click a slice → it lifts out and the parent's onSelect fires.
 */
export function SectorPie({
  sectors,
  activeKey,
  onSelect,
}: {
  sectors: Sector[];
  activeKey: string | null;
  onSelect: (key: string) => void;
}) {
  const data: PieDatum[] = sectors.map((s) => ({ ...s, value: s.selections }));
  const activeIndex = activeKey ? data.findIndex((d) => d.key === activeKey) : -1;

  return (
    <div className="relative w-full h-full">
      <svg width="0" height="0" className="absolute">
        <defs>
          {data.map((d) => (
            <radialGradient key={d.key} id={`pie-${d.key}`} cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor={d.color} stopOpacity="1" />
              <stop offset="70%" stopColor={d.color} stopOpacity="0.75" />
              <stop offset="100%" stopColor={d.color} stopOpacity="0.35" />
            </radialGradient>
          ))}
        </defs>
      </svg>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="34%"
            outerRadius="78%"
            paddingAngle={1.4}
            activeIndex={activeIndex >= 0 ? activeIndex : undefined}
            activeShape={(props: any) => (
              <g style={{ filter: `drop-shadow(0 0 22px ${props.fill})` }}>
                <RSector
                  {...props}
                  outerRadius={props.outerRadius + 16}
                  innerRadius={props.innerRadius - 4}
                />
              </g>
            )}
            onClick={(_d, idx) => onSelect(data[idx].key)}
            isAnimationActive
            animationDuration={900}
            stroke="rgba(0,0,0,0.55)"
            strokeWidth={1.5}
            label={(entry: any) => {
              const pct = entry.percent * 100;
              if (pct < 3) return "";
              return `${entry.name.split(" ")[0]}`;
            }}
            labelLine={false}
          >
            {data.map((d) => (
              <Cell
                key={d.key}
                fill={d.color}
                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center label */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-[10px] label-caps text-muted-foreground">Total offers</div>
        <div className="text-3xl font-semibold tabular-nums text-foreground">1,475</div>
        <div className="text-[10px] text-muted-foreground mt-0.5">across {sectors.length} sectors</div>
      </div>
    </div>
  );
}
