import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BackChip } from "@/components/placements/BackChip";
import { SectorPie } from "@/components/placements/SectorPie";
import { SECTORS, SECTOR_PROGRAM } from "@/data/placements-2023-24";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from "recharts";

export const Route = createFileRoute("/placements/sectors")({
  component: SectorsPage,
});

const PROGRAM_COLORS = {
  bTech: "#ff2d55",     // crimson
  dual: "#14b8a6",      // teal
  mTech: "#8b5cf6",     // violet
  other: "#f59e0b",     // deep amber (not light yellow)
} as const;

function SectorsPage() {
  const [activeKey, setActiveKey] = useState<string | null>(SECTORS[0].key);
  const active = SECTORS.find((s) => s.key === activeKey) ?? SECTORS[0];

  return (
    <div className="min-h-dvh bg-background text-foreground px-4 md:px-6 pb-16">
      <BackChip to="/placements" />


      <header className="text-center pt-4 pb-2">
        <div className="label-caps text-primary text-[10px]">Sector Distribution · 2023–24</div>
        <h1 className="mt-0.5 text-2xl md:text-3xl font-semibold tracking-tight">Sector-wise Statistics</h1>
      </header>

      {/* Pie + info panel — details panel sized to its content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 glow-card rounded-2xl p-4 relative overflow-hidden h-[64dvh]">
          <div className="flex items-center justify-between mb-1">
            <div className="label-caps text-primary">Distribution of offers · click a slice</div>
            <div className="text-[10px] text-muted-foreground">Table 6, p.9</div>
          </div>
          <div className="h-[calc(100%-1.75rem)]">
            <SectorPie sectors={SECTORS} activeKey={activeKey} onSelect={setActiveKey} />
          </div>
        </div>

        <aside
          key={active.key}
          className="lg:col-span-4 glow-card rounded-2xl p-5 flex flex-col self-start animate-fade-up"
          style={{ boxShadow: `inset 0 0 40px ${active.color}22` }}
        >
          <div className="flex items-start gap-3">
            <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-foreground/10">
              <img src={active.image} alt={active.name} className="w-full h-full object-cover" width={112} height={112} />
            </div>
            <div className="min-w-0">
              <div className="label-caps text-[9px]" style={{ color: active.color }}>Sector focus</div>
              <div className="text-base font-semibold leading-tight">{active.name}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                {active.selections} offers · {active.companies} companies · {active.pct.toFixed(1)}%
              </div>
            </div>
          </div>

          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{active.narrative}</p>

          <div className="mt-3 rounded-lg border border-foreground/10 bg-foreground/[0.02] p-2.5">
            <div className="text-[9px] label-caps text-muted-foreground">Typical package band</div>
            <div className="text-sm font-semibold" style={{ color: active.color }}>{active.packageBand}</div>
          </div>

          <div className="mt-3">
            <div className="label-caps text-[9px] text-muted-foreground mb-1.5">Representative recruiters</div>
            <div className="flex flex-wrap gap-1.5">
              {active.companiesList.map((c) => (
                <span
                  key={c}
                  className="text-[10px] px-2 py-0.5 rounded-full border border-foreground/10 bg-foreground/[0.03]"
                  style={{ color: active.color }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 text-[9px] text-muted-foreground/70 italic">Company lists are representative — sourced from public campus disclosures.</div>
        </aside>
      </section>

      {/* Sector × Program stacked-bar (Table 12) — all sectors, program-wise split */}
      <section className="mt-6 glow-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="label-caps text-primary">Sector × Program · Offers Matrix</div>
          <div className="text-[10px] text-muted-foreground">Table 12, p.13 · all 16 sectors</div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={SECTOR_PROGRAM} margin={{ top: 8, right: 8, left: -14, bottom: 40 }}>
            <CartesianGrid stroke="var(--chart-grid)" vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="sector"
              stroke="var(--chart-axis)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-28}
              textAnchor="end"
              height={70}
            />
            <YAxis stroke="var(--chart-axis)" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "var(--chart-tooltip-bg)",
                border: "1px solid var(--chart-tooltip-border)", color: "var(--chart-tooltip-text)",
                borderRadius: 8,
                fontSize: 11,
              }}
              cursor={{ fill: "var(--chart-cursor)" }}
            />
            <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
            <Bar dataKey="bTech" name="B.Tech." stackId="p" fill={PROGRAM_COLORS.bTech} radius={[0, 0, 0, 0]} />
            <Bar dataKey="dual" name="Dual Degree" stackId="p" fill={PROGRAM_COLORS.dual} />
            <Bar dataKey="mTech" name="M.Tech." stackId="p" fill={PROGRAM_COLORS.mTech} />
            <Bar dataKey="other" name="Other" stackId="p" fill={PROGRAM_COLORS.other} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Full sector table for reference */}
      <section className="mt-6 glow-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="label-caps text-primary">Sector-wise offers · full table</div>
          <div className="text-[10px] text-muted-foreground">Table 12, p.13</div>
        </div>
        <div className="overflow-hidden rounded-lg border border-foreground/10">
          <table className="w-full text-[11px]">
            <thead className="bg-foreground/[0.03] text-muted-foreground">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Sector</th>
                <th className="text-right px-3 py-2 font-medium" style={{ color: PROGRAM_COLORS.bTech }}>B.Tech</th>
                <th className="text-right px-3 py-2 font-medium" style={{ color: PROGRAM_COLORS.dual }}>Dual</th>
                <th className="text-right px-3 py-2 font-medium" style={{ color: PROGRAM_COLORS.mTech }}>M.Tech</th>
                <th className="text-right px-3 py-2 font-medium" style={{ color: PROGRAM_COLORS.other }}>Other</th>
                <th className="text-right px-3 py-2 font-medium text-primary">Total</th>
              </tr>
            </thead>
            <tbody>
              {SECTOR_PROGRAM.map((r) => (
                <tr key={r.sector} className="border-t border-foreground/5 hover:bg-foreground/[0.02]">
                  <td className="px-3 py-1.5">{r.sector}</td>
                  <td className="px-3 py-1.5 text-right tabular-nums">{r.bTech}</td>
                  <td className="px-3 py-1.5 text-right tabular-nums">{r.dual}</td>
                  <td className="px-3 py-1.5 text-right tabular-nums">{r.mTech}</td>
                  <td className="px-3 py-1.5 text-right tabular-nums">{r.other}</td>
                  <td className="px-3 py-1.5 text-right tabular-nums font-semibold text-primary">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glow-card rounded-2xl p-5">
          <div className="label-caps text-primary mb-2">Internships 2023–24</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <b className="text-foreground">1,267 internship offers</b> — 1,177 by companies, 90 by universities. Computer Science led recruiter interest, followed by core engineering. 300 PPOs received and <b className="text-foreground">258 accepted</b>.
          </p>
        </div>
        <div className="glow-card rounded-2xl p-5">
          <div className="label-caps text-primary mb-2">Department-wise internships</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Chemical, Civil, Mechanical and MEMS internships grew sharply; M.Sc. dipped slightly; Design rose vs previous year. 430 students took core internships in their department, 740 took non-core internships across other companies.
          </p>
        </div>
      </section>
    </div>
  );
}
