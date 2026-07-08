import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { useMemo, useState } from "react";
import {
  BRANCHES,
  CATEGORY_OPTIONS,
  GENDER_OPTIONS,
  ALL_TREND,
  trendSeriesList,
  type TrendSeries,
  type TrendPoint,
} from "@/data/josaa";

export const Route = createFileRoute("/trends")({
  head: () => ({
    meta: [
      { title: "Rank Trends · IIT Bombay — JoSAA opening & closing ranks over time" },
      {
        name: "description",
        content:
          "Interactive JoSAA rank trends for IIT Bombay. Filter by branch, gender pool and category to see opening and closing ranks change year over year (2016–2025).",
      },
      { property: "og:title", content: "Rank Trends · IIT Bombay" },
      {
        property: "og:description",
        content:
          "Opening & closing JoSAA ranks plotted across a decade — filter by branch, gender pool and category.",
      },
    ],
  }),
  component: TrendsPage,
});

const PER_PAGE = 4;

function TrendsPage() {
  const [branch, setBranch] = useState<string>(ALL_TREND);
  const [gender, setGender] = useState<string>("GN");
  const [category, setCategory] = useState<string>("OPEN");
  const [page, setPage] = useState(0);

  const series = useMemo(
    () => trendSeriesList({ branch, gender, category }),
    [branch, gender, category]
  );

  const totalPages = Math.max(1, Math.ceil(series.length / PER_PAGE));
  const safePage = Math.min(page, totalPages - 1);
  const pageSeries = series.slice(safePage * PER_PAGE, safePage * PER_PAGE + PER_PAGE);

  const resetPage = () => setPage(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SectionHeader active="Trends" />

      <main className="pt-10 pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="label-caps text-primary">Trends · JoSAA 2016–2025</div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            How ranks move, year over year.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
            Pick a branch, gender pool and category. Each card shows the{" "}
            <span className="text-foreground">opening</span> rank (left) and{" "}
            <span className="text-foreground">closing</span> rank (right) plotted across the years,
            straight from JoSAA data.
          </p>

          {/* Filters */}
          <div className="mt-10 glow-card rounded-2xl p-5 sm:p-6 grid gap-5 md:grid-cols-3">
            <Field label="Branch">
              <Select
                value={branch}
                onChange={(v) => {
                  setBranch(v);
                  resetPage();
                }}
                options={[{ value: ALL_TREND, label: "All branches" }].concat(
                  BRANCHES.map((b) => ({ value: b, label: shortLabel(b) }))
                )}
              />
            </Field>

            <Field label="Gender pool">
              <Segmented
                value={gender}
                onChange={(v) => {
                  setGender(v);
                  resetPage();
                }}
                options={[
                  { value: ALL_TREND, label: "Both" },
                  ...GENDER_OPTIONS.map((g) => ({ value: g.value, label: g.label })),
                ]}
              />
            </Field>

            <Field label="Category">
              <Select
                value={category}
                onChange={(v) => {
                  setCategory(v);
                  resetPage();
                }}
                options={[{ value: ALL_TREND, label: "All categories" }].concat(
                  CATEGORY_OPTIONS.map((c) => ({ value: c, label: c }))
                )}
              />
            </Field>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {series.length} graph{series.length === 1 ? "" : "s"} match your selection
            </span>
            {totalPages > 1 && (
              <span className="tabular-nums">
                Page {safePage + 1} / {totalPages}
              </span>
            )}
          </div>

          {/* Graph grid */}
          {series.length === 0 ? (
            <div className="mt-8 glow-card rounded-2xl p-12 text-center text-muted-foreground">
              No JoSAA data for this combination. Try widening the filters.
            </div>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {pageSeries.map((s) => (
                <TrendCard key={s.key} series={s} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-between">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={safePage === 0}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span aria-hidden>←</span> Back
              </button>
              <div className="text-xs label-caps">
                {safePage + 1} / {totalPages}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={safePage >= totalPages - 1}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                More graphs <span aria-hidden>→</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

/* ---------- filter primitives ---------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-caps">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary/60 transition-colors"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-background">
          {o.label}
        </option>
      ))}
    </select>
  );
}

function Segmented({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex rounded-xl border border-input bg-secondary/40 p-1 text-sm">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`flex-1 rounded-lg px-3 py-2 transition-colors whitespace-nowrap ${
            value === o.value
              ? "bg-primary text-primary-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- trend card ---------- */

function poolLabel(poolShort: string) {
  if (poolShort === "GN") return "Gender-Neutral";
  if (poolShort === "Female") return "Female-only";
  return poolShort;
}

function TrendCard({ series }: { series: TrendSeries }) {
  const startYear = series.points[0].year;
  const endYear = series.points[series.points.length - 1].year;
  return (
    <div className="glow-card inner-glow-crimson rounded-2xl p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{series.branchShort}</h3>
        <span className="text-xs tabular-nums text-muted-foreground">
          {startYear}–{endYear}
        </span>
      </div>
      <div className="mt-1 flex flex-wrap gap-2">
        <Chip>{series.category}</Chip>
        <Chip>{poolLabel(series.poolShort)}</Chip>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <RankChart points={series.points} metric="open" title="Opening rank vs year" />
        <RankChart points={series.points} metric="close" title="Closing rank vs year" />
      </div>

      <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
        Showing <span className="text-foreground">{series.branchShort}</span> ·{" "}
        {series.category} · {poolLabel(series.poolShort)}, {startYear}–{endYear}. Lower rank = more
        competitive.
      </p>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] text-primary">
      {children}
    </span>
  );
}

/* ---------- pseudo-3D glowing bar chart ---------- */

function RankChart({
  points,
  metric,
  title,
}: {
  points: TrendPoint[];
  metric: "open" | "close";
  title: string;
}) {
  const W = 300;
  const H = 210;
  const padL = 8;
  const padR = 8;
  const padTop = 26;
  const padBottom = 30;
  const depth = 8;

  const values = points.map((p) => p[metric]);
  const maxV = Math.max(...values, 1);

  const plotW = W - padL - padR;
  const plotH = H - padTop - padBottom;
  const n = points.length;
  const slot = plotW / n;
  const barW = Math.min(26, slot * 0.55);

  const baseY = H - padBottom;
  const gid = `grad-${metric}`;
  const tid = `top-${metric}`;
  const sid = `side-${metric}`;

  return (
    <div className="rounded-xl border border-border bg-background/40 p-3">
      <div className="label-caps text-[10px] text-muted-foreground">{title}</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-1 w-full" role="img" aria-label={title}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.23 20)" />
            <stop offset="100%" stopColor="oklch(0.4 0.2 16)" />
          </linearGradient>
          <linearGradient id={tid} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.2 22)" />
            <stop offset="100%" stopColor="oklch(0.6 0.22 20)" />
          </linearGradient>
          <linearGradient id={sid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.42 0.2 16)" />
            <stop offset="100%" stopColor="oklch(0.28 0.15 14)" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line
          x1={padL}
          y1={baseY}
          x2={W - padR}
          y2={baseY}
          stroke="oklch(1 0 0 / 0.12)"
          strokeWidth="1"
        />

        <g className="animate-glow-pulse">
          {points.map((p, i) => {
            const v = p[metric];
            const h = Math.max(3, (v / maxV) * plotH);
            const cx = padL + slot * i + slot / 2;
            const x = cx - barW / 2;
            const topY = baseY - h;

            return (
              <g key={p.year}>
                {/* side face */}
                <polygon
                  points={`${x + barW},${topY} ${x + barW + depth},${topY - depth} ${
                    x + barW + depth
                  },${baseY - depth} ${x + barW},${baseY}`}
                  fill={`url(#${sid})`}
                />
                {/* top face */}
                <polygon
                  points={`${x},${topY} ${x + depth},${topY - depth} ${x + barW + depth},${
                    topY - depth
                  } ${x + barW},${topY}`}
                  fill={`url(#${tid})`}
                />
                {/* front face */}
                <rect x={x} y={topY} width={barW} height={h} fill={`url(#${gid})`} rx="1.5" />
                {/* value label */}
                <text
                  x={cx + depth / 2}
                  y={topY - depth - 4}
                  textAnchor="middle"
                  className="fill-foreground"
                  fontSize="9"
                  fontWeight="600"
                >
                  {v.toLocaleString("en-IN")}
                </text>
                {/* year label */}
                <text
                  x={cx}
                  y={H - 10}
                  textAnchor="middle"
                  fill="oklch(0.62 0.005 260)"
                  fontSize="9"
                >
                  {String(p.year).slice(2)}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

function shortLabel(branch: string) {
  return branch.replace(/\s*\([^)]*\)\s*$/, "").trim();
}
