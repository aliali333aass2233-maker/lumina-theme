import raw from "./josaa-iit-bombay.json";

export type RankRecord = {
  institute_type: string;
  institute: string;
  branch: string;
  category: string;
  pool: string;
  ranks: Record<string, { open: number; close: number }>;
};

export type Row = {
  institute: string;
  branch: string;
  branchShort: string;
  category: string;
  pool: string;
  poolShort: string;
  year: number;
  open: number;
  close: number;
};

const RAW = raw as unknown as RankRecord[];

function shortBranch(b: string): string {
  return b.replace(/\s*\([^)]*\)\s*$/, "").trim();
}
function shortPool(p: string): string {
  if (p === "Gender-Neutral") return "GN";
  if (p === "Female-only (including Supernumerary)") return "Female";
  return p;
}

export const ROWS: Row[] = (() => {
  const out: Row[] = [];
  for (const r of RAW) {
    for (const [y, v] of Object.entries(r.ranks)) {
      out.push({
        institute: r.institute.replace(/\s+/g, " ").trim(),
        branch: r.branch,
        branchShort: shortBranch(r.branch),
        category: r.category,
        pool: r.pool,
        poolShort: shortPool(r.pool),
        year: Number(y),
        open: v.open,
        close: v.close,
      });
    }
  }
  return out;
})();

export const YEARS = Array.from(new Set(ROWS.map((r) => r.year))).sort();
export const BRANCHES = Array.from(new Set(ROWS.map((r) => r.branch))).sort();
export const BRANCHES_SHORT = Array.from(new Set(ROWS.map((r) => r.branchShort))).sort();
export const CATEGORIES = Array.from(new Set(ROWS.map((r) => r.category))).sort();
export const POOLS = Array.from(new Set(ROWS.map((r) => r.pool))).sort();

/** Combined category + pool options for the ranks explorer filter. */
export const CATEGORY_POOL_OPTIONS = Array.from(
  new Set(ROWS.map((r) => `${r.category} · ${r.poolShort}`))
).sort();

/** Latest year available in the dataset. */
export const LATEST_YEAR = Math.max(...YEARS);

/** Rows for hero live-JoSAA card: OPEN category, GN pool, latest year, deduped by branch. */
export function heroLiveRows(): { branch: string; open: number; close: number }[] {
  const seen = new Set<string>();
  const list: { branch: string; open: number; close: number }[] = [];
  for (const r of ROWS) {
    if (r.year !== LATEST_YEAR) continue;
    if (r.category !== "OPEN") continue;
    if (r.poolShort !== "GN") continue;
    if (seen.has(r.branchShort)) continue;
    seen.add(r.branchShort);
    list.push({ branch: r.branchShort, open: r.open, close: r.close });
  }
  return list.sort((a, b) => a.close - b.close);
}

/** Closing rank trend for a given short branch across years (OPEN · GN). */
export function closingTrend(branchShort: string): { year: number; close: number }[] {
  const bucket = new Map<number, number>();
  for (const r of ROWS) {
    if (r.branchShort !== branchShort) continue;
    if (r.category !== "OPEN") continue;
    if (r.poolShort !== "GN") continue;
    bucket.set(r.year, r.close);
  }
  return [...bucket.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([year, close]) => ({ year, close }));
}

/** Short branches that have at least 5 years of OPEN · GN data (good for the graph carousel). */
export const TREND_BRANCHES: string[] = (() => {
  const counts = new Map<string, number>();
  for (const r of ROWS) {
    if (r.category !== "OPEN" || r.poolShort !== "GN") continue;
    counts.set(r.branchShort, (counts.get(r.branchShort) ?? 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, c]) => c >= 5)
    .map(([b]) => b)
    .sort();
})();

/* ================= Trends explorer helpers ================= */

/** Distinct categories, ordered logically (general → reserved, base before PwD). */
export const CATEGORY_OPTIONS: string[] = (() => {
  const order = ["OPEN", "EWS", "OBC-NCL", "SC", "ST"];
  const rank = (c: string) => {
    const base = c.replace(/\s*\(PwD\)\s*/i, "").trim();
    const bi = order.indexOf(base);
    const pwd = /\(PwD\)/i.test(c) ? 1 : 0;
    return (bi < 0 ? 99 : bi) * 2 + pwd;
  };
  return Array.from(new Set(ROWS.map((r) => r.category))).sort(
    (a, b) => rank(a) - rank(b) || a.localeCompare(b)
  );
})();

/** Gender / pool options for the trends filter (two real choices). */
export const GENDER_OPTIONS = [
  { value: "GN", label: "Gender-Neutral" },
  { value: "Female", label: "Female-only" },
] as const;

export type TrendPoint = { year: number; open: number; close: number };
export type TrendSeries = {
  key: string;
  branchShort: string;
  category: string;
  pool: string;
  poolShort: string;
  points: TrendPoint[];
};

const ALL_TOKEN = "__all__";

/**
 * Build one series per branch × category × pool matching the filter.
 * Pass ALL_TREND for a filter to include everything on that axis.
 * `gender` matches poolShort ("GN" | "Female").
 */
export const ALL_TREND = ALL_TOKEN;

export function trendSeriesList(opts: {
  branch?: string; // full branch string or ALL_TREND
  gender?: string; // "GN" | "Female" | ALL_TREND
  category?: string; // category string or ALL_TREND
}): TrendSeries[] {
  const { branch = ALL_TOKEN, gender = ALL_TOKEN, category = ALL_TOKEN } = opts;
  const groups = new Map<string, TrendSeries>();

  for (const r of ROWS) {
    if (r.poolShort === "NA") continue; // skip pre-2018 unpooled rows
    if (branch !== ALL_TOKEN && r.branch !== branch) continue;
    if (gender !== ALL_TOKEN && r.poolShort !== gender) continue;
    if (category !== ALL_TOKEN && r.category !== category) continue;

    const key = `${r.branchShort}||${r.category}||${r.poolShort}`;
    let g = groups.get(key);
    if (!g) {
      g = {
        key,
        branchShort: r.branchShort,
        category: r.category,
        pool: r.pool,
        poolShort: r.poolShort,
        points: [],
      };
      groups.set(key, g);
    }
    g.points.push({ year: r.year, open: r.open, close: r.close });
  }

  const list = [...groups.values()];
  for (const g of list) {
    // dedupe by year (keep last) & sort ascending
    const byYear = new Map<number, TrendPoint>();
    for (const p of g.points) byYear.set(p.year, p);
    g.points = [...byYear.values()].sort((a, b) => a.year - b.year);
  }
  // only meaningful series (2+ years)
  return list
    .filter((g) => g.points.length >= 2)
    .sort(
      (a, b) =>
        a.branchShort.localeCompare(b.branchShort) ||
        a.category.localeCompare(b.category) ||
        a.poolShort.localeCompare(b.poolShort)
    );
}
