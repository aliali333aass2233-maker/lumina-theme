import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { useMemo, useState } from "react";
import { ROWS, YEARS, BRANCHES, CATEGORY_POOL_OPTIONS, LATEST_YEAR } from "@/data/josaa";

export const Route = createFileRoute("/ranks")({
  head: () => ({
    meta: [
      { title: "Ranks Explorer · IIT Bombay — JoSAA cutoffs 2016–2025" },
      { name: "description", content: "Filter JoSAA opening & closing ranks for IIT Bombay by year, branch, and category. Ten years of official counselling data in one place." },
      { property: "og:title", content: "Ranks Explorer · IIT Bombay" },
      { property: "og:description", content: "Ten years of JoSAA cutoff data — filter by year, branch, category & pool." },
    ],
  }),
  component: RanksPage,
});

const ALL = "__all__";

function RanksPage() {
  const [year, setYear] = useState<string>(String(LATEST_YEAR));
  const [branch, setBranch] = useState<string>(ALL);
  const [catPool, setCatPool] = useState<string>(ALL);
  const [sortKey, setSortKey] = useState<"close" | "open" | "branch" | "category">("close");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filtered = useMemo(() => {
    const rows = ROWS.filter((r) => {
      if (year !== ALL && r.year !== Number(year)) return false;
      if (branch !== ALL && r.branch !== branch) return false;
      if (catPool !== ALL && `${r.category} · ${r.poolShort}` !== catPool) return false;
      return true;
    });
    const dir = sortDir === "asc" ? 1 : -1;
    rows.sort((a, b) => {
      if (sortKey === "close") return (a.close - b.close) * dir;
      if (sortKey === "open") return (a.open - b.open) * dir;
      if (sortKey === "branch") return a.branchShort.localeCompare(b.branchShort) * dir;
      return a.category.localeCompare(b.category) * dir;
    });
    return rows;
  }, [year, branch, catPool, sortKey, sortDir]);

  const clickSort = (k: typeof sortKey) => {
    if (sortKey === k) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(k); setSortDir(k === "branch" || k === "category" ? "asc" : "asc"); }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SectionHeader active="Ranks" />

      <main className="pt-10 pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="label-caps text-primary">Section · Ranks</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Know exactly where you stand.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Filter by year, branch, or category to explore JoSAA cutoff data (2016–2025).
          </p>

          {/* Filter card */}
          <div className="mt-10 rounded-2xl border p-6 sm:p-7 red-glow bg-background">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FilterSelect
                label="Year"
                value={year}
                onChange={setYear}
                options={[{ v: ALL, l: "All" }, ...YEARS.map((y) => ({ v: String(y), l: String(y) }))]}
              />
              <FilterSelect
                label="Branch"
                value={branch}
                onChange={setBranch}
                options={[{ v: ALL, l: "All branches" }, ...BRANCHES.map((b) => ({ v: b, l: b }))]}
              />
              <FilterSelect
                label="Category & Pool"
                value={catPool}
                onChange={setCatPool}
                options={[{ v: ALL, l: "All categories & pools" }, ...CATEGORY_POOL_OPTIONS.map((c) => ({ v: c, l: c }))]}
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="label-caps text-primary text-[10px]">Active</span>
                <Chip>Year: {year === ALL ? "All" : year}</Chip>
                <Chip>Branch: {branch === ALL ? "All" : truncate(branch, 32)}</Chip>
                <Chip>{catPool === ALL ? "All categories & pools" : catPool}</Chip>
              </div>
              <div className="text-xs text-muted-foreground">{filtered.length.toLocaleString()} rows</div>
            </div>
          </div>

          {/* Table */}
          <div className="mt-8 rounded-2xl border border-border overflow-hidden bg-background">
            <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-background z-10">
                  <tr className="text-left border-b border-border">
                    <Th>Institute</Th>
                    <Th onClick={() => clickSort("branch")} sortable active={sortKey === "branch"} dir={sortDir}>Branch</Th>
                    <Th onClick={() => clickSort("category")} sortable active={sortKey === "category"} dir={sortDir}>Category</Th>
                    <Th>Pool</Th>
                    <Th align="right" onClick={() => clickSort("open")} sortable active={sortKey === "open"} dir={sortDir}>Opening</Th>
                    <Th align="right" onClick={() => clickSort("close")} sortable active={sortKey === "close"} dir={sortDir}>Closing</Th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-5 py-3.5 text-foreground/90 whitespace-nowrap">{r.institute}</td>
                      <td className="px-5 py-3.5 text-foreground/90">{r.branch}</td>
                      <td className="px-5 py-3.5 text-muted-foreground whitespace-nowrap">{r.category}</td>
                      <td className="px-5 py-3.5 text-muted-foreground whitespace-nowrap">{r.poolShort}</td>
                      <td className="px-5 py-3.5 text-right tabular-nums">{r.open.toLocaleString()}</td>
                      <td className="px-5 py-3.5 text-right tabular-nums text-primary font-medium">{r.close.toLocaleString()}</td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-5 py-16 text-center text-muted-foreground text-sm">
                        No rows match these filters. Try widening your selection.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-8 text-xs text-primary">
            Data sourced from JoSAA official counselling records (2016–2025).
          </p>
        </div>
      </main>
    </div>
  );
}

function FilterSelect({
  label, value, onChange, options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { v: string; l: string }[];
}) {
  return (
    <label className="block">
      <span className="label-caps text-primary text-[10px]">{label}</span>
      <div className="mt-2 relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-border bg-background text-foreground text-sm px-4 py-3 pr-10 focus:outline-none focus:border-primary transition-colors"
          style={{ colorScheme: "dark" }}
        >
          {options.map((o) => (
            <option key={o.v} value={o.v} className="bg-background text-foreground">
              {o.l}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
      </div>
    </label>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[11px] text-foreground/80">
      {children}
    </span>
  );
}

function Th({
  children, align = "left", onClick, sortable, active, dir,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  onClick?: () => void;
  sortable?: boolean;
  active?: boolean;
  dir?: "asc" | "desc";
}) {
  return (
    <th
      onClick={onClick}
      className={`label-caps text-[10px] text-muted-foreground px-5 py-3 ${align === "right" ? "text-right" : "text-left"} ${sortable ? "cursor-pointer hover:text-foreground select-none" : ""} ${active ? "text-primary" : ""}`}
    >
      {children}
      {sortable && active && <span className="ml-1">{dir === "asc" ? "↑" : "↓"}</span>}
    </th>
  );
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}
