import { createFileRoute, notFound } from "@tanstack/react-router";
import { BackChip } from "@/components/placements/BackChip";
import { SmoothArea, SmoothBar, SmoothBarPeak } from "@/components/placements/SmoothChart";
import {
  branchBySlug, marketFor, internTrendForBranch,
  type BranchProgram,
} from "@/data/placements-2023-24";

export const Route = createFileRoute("/placements/branches/$branch")({
  loader: ({ params }) => {
    const branch = branchBySlug(params.branch);
    if (!branch) throw notFound();
    return { branch };
  },
  component: BranchDetail,
  notFoundComponent: () => (
    <div className="min-h-dvh grid place-items-center px-6 text-center">
      <div>
        <div className="text-3xl font-semibold">Branch not found</div>
        <a href="/placements/branches" className="mt-4 inline-block text-primary underline">Back to branches</a>
      </div>
    </div>
  ),
});

function BranchDetail() {
  const { branch } = Route.useLoaderData();
  const trend = branch.programs.map((p: BranchProgram) => ({ label: p.program, Placed: p.placed }));
  const intern = internTrendForBranch(branch.slug);
  const internData = intern?.map((t) => ({ label: t.year, Interns: t.interns })) ?? null;
  const market = marketFor(branch.slug);
  const cards = branch.programs;

  return (
    <div className="fixed inset-0 h-dvh w-dvw overflow-hidden bg-background text-foreground px-4 md:px-6 flex flex-col">
      <BackChip to="/placements/branches" />

      <header className="text-center pt-4 pb-2 shrink-0">
        <div className="label-caps text-[10px]" style={{ color: branch.accent }}>Branch Detail · 2023–24</div>
        <h1 className="mt-0.5 text-2xl md:text-3xl font-semibold tracking-tight">{branch.name}</h1>
        <a
          href={branch.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-1.5 px-3 py-1 rounded-full text-[10px] border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          Visit Official Site ↗
        </a>
      </header>

      <div className="flex-1 min-h-0 grid grid-cols-12 grid-rows-6 gap-3 pb-4">
        {/* Top-left: hyperreal rotating image */}
        <div
          className="col-span-12 md:col-span-5 row-span-3 relative rounded-2xl overflow-hidden branch-glow"
          style={{ ["--branch-accent" as string]: branch.accent }}
        >
          <img
            src={branch.image}
            alt={branch.name}
            className="absolute inset-0 h-full w-full object-cover animate-model-spin"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <div className="label-caps text-[9px] text-white/70">Placed</div>
              <div className="text-3xl font-semibold text-white tabular-nums">{branch.placed}</div>
            </div>
            <div className="text-right">
              <div className="label-caps text-[9px] text-white/70">Placement %</div>
              <div className="text-2xl font-semibold text-white tabular-nums">
                {Math.round((branch.placed / Math.max(branch.participated, 1)) * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* Top-right: program-wise placement */}
        <div className="col-span-12 md:col-span-7 row-span-3 glow-card rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden">
          <div className="flex items-center justify-between mb-1 shrink-0">
            <div className="label-caps text-primary">Program-wise placement</div>
            <div className="text-[10px] text-muted-foreground">Annexure 1 · 2023-24</div>
          </div>
          <div className="flex-1 min-h-0 overflow-hidden">
            <SmoothBar
              data={trend}
              dataKey="Placed"
              color={branch.accent}
              xKey="label"
              height={160}
            />
          </div>
        </div>

        {/* Bottom-left: internship trend or department overview */}
        <div className="col-span-12 md:col-span-7 row-span-3 glow-card rounded-2xl p-4 flex flex-col min-h-0 overflow-hidden">
          <div className="flex items-center justify-between mb-1 shrink-0">
            <div className="label-caps text-primary">
              {internData ? "Four-year internship trend" : "Department overview"}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {internData ? "Table 13, p.15" : "Annexure 1 · 2023-24"}
            </div>
          </div>
          <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
             {internData ? (
  <div className="w-full h-full">
  <SmoothBarPeak
    data={internData}
    dataKey="Interns"
    color="#2dd4bf"
    xKey="label"
    height={170}
    showDeltas
  />
  </div>
) : (
              <div className="w-full h-full flex flex-col justify-center gap-3 px-2">
                <div className="text-[10px] text-muted-foreground label-caps mb-1">Department overview · 2023–24</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { l: "Registered", v: branch.registered },
                    { l: "Participated", v: branch.participated },
                    { l: "Placed", v: branch.placed },
                  ].map((s) => (
                    <div key={s.l} className="rounded-lg border border-white/10 bg-white/[0.02] p-2 text-center">
                      <div className="text-[9px] text-muted-foreground uppercase">{s.l}</div>
                      <div className="text-lg font-semibold tabular-nums" style={{ color: branch.accent }}>{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="text-[9px] text-muted-foreground uppercase mb-2">Placement % vs Institute avg</div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${Math.min(Math.round((branch.placed / Math.max(branch.participated, 1)) * 100), 100)}%`,
                          background: branch.accent,
                          boxShadow: `0 0 8px ${branch.accent}88`,
                        }}
                      />
                    </div>
                    <div className="text-sm font-semibold tabular-nums" style={{ color: branch.accent }}>
                      {Math.round((branch.placed / Math.max(branch.participated, 1)) * 100)}%
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="h-2 rounded-full bg-white/40" style={{ width: "74.53%" }} />
                    </div>
                    <div className="text-sm font-semibold tabular-nums text-white/50">74.5%</div>
                  </div>
                  <div className="flex justify-between text-[8px] text-muted-foreground mt-1">
                    <span style={{ color: branch.accent }}>This dept</span>
                    <span className="text-white/40">Institute avg</span>
                  </div>
                </div>
                <div className="text-[9px] text-muted-foreground opacity-60 text-center">
                  Internship data not separately published · PDF Table 13
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom-right: Programs + Market insights stacked */}
        <div className="col-span-12 md:col-span-5 row-span-3 flex flex-col gap-3 min-h-0">
          <div className="glow-card rounded-2xl p-3 flex-[1.6] min-h-0 flex flex-col">
            <div className="label-caps text-primary mb-2 text-[10px] shrink-0">Programs at a glance</div>
            <div className="grid grid-cols-2 gap-2 overflow-y-auto min-h-0 pr-1 scrollbar-hide">
              {cards.map((p: BranchProgram) => (
                <div key={p.program} className="rounded-lg p-2 border border-white/10 bg-white/[0.02]">
                  <div className="text-[10px] font-semibold text-foreground truncate">{p.program}</div>
                  <div className="grid grid-cols-3 gap-1 mt-1 text-[10px]">
                    <div><div className="text-muted-foreground text-[8px] uppercase">Part.</div><div className="tabular-nums font-semibold">{p.participated}</div></div>
                    <div><div className="text-muted-foreground text-[8px] uppercase">Placed</div><div className="tabular-nums font-semibold">{p.placed}</div></div>
                    <div><div className="text-muted-foreground text-[8px] uppercase">%</div><div className="tabular-nums font-semibold" style={{ color: branch.accent }}>{p.pct.toFixed(0)}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glow-card rounded-2xl p-3 flex-[0.8] min-h-0">
            <div className="flex items-center justify-between mb-2">
              <div className="label-caps text-primary text-[10px]">Market Insights</div>
              <div className="text-[9px] text-muted-foreground">External estimate</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "Highest", v: market.highest, c: branch.accent },
                { l: "Average", v: market.average, c: "#10b981" },
                { l: "Median", v: market.median, c: "#0ea5e9" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-white/10 bg-white/[0.02] p-2">
                  <div className="text-[9px] label-caps text-muted-foreground">{m.l}</div>
                  <div className="text-sm font-semibold tabular-nums" style={{ color: m.c, textShadow: `0 0 10px ${m.c}55` }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
