import { createFileRoute } from "@tanstack/react-router";
import { BackChip } from "@/components/placements/BackChip";
import { GlowStat, STAT_ACCENTS } from "@/components/placements/GlowStat";
import { SmoothArea } from "@/components/placements/SmoothChart";
import {
  SALARY_BUCKETS, PPO_INTERN, YEAR_COMPARE, PHD_RECRUITMENT,
} from "@/data/placements-2023-24";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, Legend, LabelList,
} from "recharts";

export const Route = createFileRoute("/placements/compensation")({
  component: CompensationPage,
});

// Per-bracket bar palette (no yellows/pastels).
const BUCKET_PALETTE = [
  "#ff2d55", "#ff5e8a", "#d946ef", "#8b5cf6",
  "#0ea5e9", "#06b6d4", "#14b8a6", "#10b981",
];

/** Small badge rendered above each salary bar showing the company count — avoids a second, visually tiny bar on a mismatched scale. */
function CompanyBadge(props: any) {
  const { x, y, width, value, index } = props;
  if (value == null) return null;
  return (
    <g transform={`translate(${x + width / 2},${y - 12})`}>
      <rect x={-20} y={-10} width={40} height={16} rx={8} fill="rgba(10,10,15,0.85)" stroke="rgba(255,255,255,0.15)" />
      <text x={0} y={2} textAnchor="middle" fontSize={9} fontWeight={600} fill="rgba(255,255,255,0.75)">
        {value} co.
      </text>
    </g>
  );
}

/** Tooltip that always shows both Offers and Companies, regardless of which Bar triggered it. */
function SalaryTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: "rgba(10,10,15,0.94)", border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 8, fontSize: 11, padding: "8px 10px",
    }}>
      <div style={{ color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>{d.label}</div>
      <div>Offers: <b>{d.Offers}</b></div>
      <div>Companies: <b>{d.Companies}</b></div>
    </div>
  );
}

function CompensationPage() {
  const salaryData = SALARY_BUCKETS.map((b, i) => ({
    label: `₹${b.range}L`,
    Offers: b.offers,
    Companies: b.companies,
    color: BUCKET_PALETTE[i % BUCKET_PALETTE.length],
  }));

  const yoyData = YEAR_COMPARE.map((r) => ({
    label: r.year,
    "B.Tech.": r.bTech,
    "Dual Degree": r.dual,
    "M.Tech.": r.mTech,
    Others: r.others,
    "Ph.D.": r.phd,
  }));

  const phdData = PHD_RECRUITMENT.map((r) => ({
    label: r.year,
    Participated: r.participated,
    Placed: r.placed,
  }));

  return (
    <div className="fixed inset-0 h-dvh w-dvw overflow-hidden bg-background text-foreground px-4 md:px-6 flex flex-col">
      <BackChip to="/placements" />

      <header className="text-center pt-3 pb-1 shrink-0">
        <div className="label-caps text-primary text-[10px]">Compensation · 2023–24</div>
        <h1 className="mt-0.5 text-xl md:text-2xl font-semibold tracking-tight">Stipend, PPO & Salary</h1>
      </header>

      {/* Glowing headline stat tiles */}
      <section className="grid grid-cols-3 md:grid-cols-6 gap-2 shrink-0 mb-2">
        <GlowStat label="PPOs received" value={PPO_INTERN.pposReceived} accent={STAT_ACCENTS.crimson} delay={0} />
        <GlowStat label="PPOs accepted" value={PPO_INTERN.pposAccepted} accent={STAT_ACCENTS.rose} delay={200} />
        <GlowStat label="Internship offers" value={PPO_INTERN.internshipsTotal.toLocaleString()} accent={STAT_ACCENTS.emerald} delay={400} />
        <GlowStat label="By companies" value={PPO_INTERN.internshipsCompany.toLocaleString()} accent={STAT_ACCENTS.teal} delay={600} />
        <GlowStat label="By universities" value={PPO_INTERN.internshipsUniversity} accent={STAT_ACCENTS.sky} delay={800} />
        <GlowStat label="1 Cr+ Offers" value={22} accent={STAT_ACCENTS.magenta} delay={1000} />
      </section>

      {/* Main grid — fits remaining viewport, no page scroll */}
      <div className="flex-1 min-h-0 grid grid-cols-12 grid-rows-6 gap-3 pb-4">

        {/* Salary distribution — Companies shown as a badge, not a second mismatched bar */}
        <div className="col-span-12 lg:col-span-7 row-span-3 glow-card rounded-2xl p-4 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-2 shrink-0">
            <div className="label-caps text-primary text-[11px]">Compensation-wise distribution of offers</div>
            <div className="text-[10px] text-muted-foreground">Table 7, p.10</div>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData} margin={{ top: 24, right: 8, left: -14, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="label" stroke="rgba(255,255,255,0.55)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip content={<SalaryTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                <Bar dataKey="Offers" radius={[6, 6, 0, 0]} barSize={40}>
                  {salaryData.map((d, i) => (
                    <Cell key={i} fill={d.color} style={{ filter: `drop-shadow(0 4px 10px ${d.color}66)` }} />
                  ))}
                  <LabelList dataKey="Companies" content={<CompanyBadge />} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Year-wise comparison of students placed — includes PhD series, no separate page */}
        <div className="col-span-12 lg:col-span-5 row-span-3 glow-card rounded-2xl p-4 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-2 shrink-0">
            <div className="label-caps text-primary text-[11px]">Year-wise comparison of students placed</div>
            <div className="text-[10px] text-muted-foreground">Table 11 · PhD from Table 9</div>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yoyData} margin={{ top: 8, right: 8, left: -14, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="label" stroke="rgba(255,255,255,0.55)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(10,10,15,0.94)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8, fontSize: 11,
                  }}
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                />
                <Legend wrapperStyle={{ fontSize: 9 }} />
                <Bar dataKey="B.Tech." fill="#ff2d55" radius={[3, 3, 0, 0]} />
                <Bar dataKey="Dual Degree" fill="#14b8a6" radius={[3, 3, 0, 0]} />
                <Bar dataKey="M.Tech." fill="#8b5cf6" radius={[3, 3, 0, 0]} />
                <Bar dataKey="Others" fill="#f59e0b" radius={[3, 3, 0, 0]} />
                <Bar dataKey="Ph.D." fill="#ff5e8a" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PhD — compact merged panel: sparkline + stat mini-grid, sitting on this same page */}
        <div className="col-span-12 lg:col-span-5 row-span-3 glow-card rounded-2xl p-4 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-2 shrink-0">
            <div className="label-caps text-primary text-[11px]">Ph.D. · registered, active & placed</div>
            <div className="text-[10px] text-muted-foreground">Table 9, p.11</div>
          </div>
          <div className="grid grid-cols-4 gap-2 shrink-0 mb-2">
            <GlowStat label="Registered" value={230} accent={STAT_ACCENTS.crimson} delay={0} />
            <GlowStat label="Active" value={118} accent={STAT_ACCENTS.sky} delay={150} />
            <GlowStat label="Placed" value={32} accent={STAT_ACCENTS.emerald} delay={300} />
            <GlowStat label="Avg CTC" value="₹18.46 L" accent={STAT_ACCENTS.violet} delay={450} />
          </div>
          <div className="flex-1 min-h-0">
            <SmoothArea
              data={phdData}
              xKey="label"
              height={120}
              keys={[
                { key: "Participated", color: "#8b5cf6" },
                { key: "Placed", color: "#ff2d55" },
              ]}
            />
          </div>
          <div className="text-[9px] text-muted-foreground mt-1 shrink-0">27.11% of active PhD applicants received offers this cycle.</div>
        </div>

        {/* YoY key metrics table */}
        <div className="col-span-12 lg:col-span-7 row-span-3 glow-card rounded-2xl p-4 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-2 shrink-0">
            <div className="label-caps text-primary text-[11px]">Year-on-year highlights</div>
            <div className="text-[10px] text-muted-foreground">Table 10, p.11</div>
          </div>
          <div className="flex-1 min-h-0 overflow-hidden rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03] text-muted-foreground text-xs">
                <tr>
                  <th className="text-left px-4 py-2 font-medium">Metric</th>
                  <th className="text-right px-4 py-2 font-medium">2022-23</th>
                  <th className="text-right px-4 py-2 font-medium text-primary">2023-24</th>
                  <th className="text-right px-4 py-2 font-medium">Δ</th>
                </tr>
              </thead>
              <tbody>
                {PPO_INTERN.yoyComparison.map((r) => {
                  const delta = r.curr - r.prev;
                  const pos = delta >= 0;
                  return (
                    <tr key={r.key} className="border-t border-white/5">
                      <td className="px-4 py-2">{r.key}</td>
                      <td className="px-4 py-2 text-right tabular-nums">{r.prev}</td>
                      <td className="px-4 py-2 text-right tabular-nums font-semibold">{r.curr}</td>
                      <td className="px-4 py-2 text-right tabular-nums" style={{ color: pos ? "#10b981" : "#ff2d55" }}>
                        {pos ? "+" : ""}{delta.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
