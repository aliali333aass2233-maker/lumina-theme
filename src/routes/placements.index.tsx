import { createFileRoute } from "@tanstack/react-router";
import { PlacementHeader } from "@/components/placements/PlacementTopChip";
import { BackChip } from "@/components/placements/BackChip";
import { SmoothArea } from "@/components/placements/SmoothChart";
import { ColorCyclingLine } from "@/components/placements/ColorCyclingLine";
import { GlowStat, STAT_ACCENTS } from "@/components/placements/GlowStat";
import {
  HIGHLIGHTS, PROGRAM_STATS, COMPANIES_YEARLY,
} from "@/data/placements-2023-24";

export const Route = createFileRoute("/placements/")({
  component: PlacementIndex,
});

function PlacementIndex() {
  const progData = PROGRAM_STATS.slice(0, 8).map((p) => ({
    label: p.program.replace(/\s*\(.*?\)/, ""),
    Registered: p.registered,
    Participated: p.participated,
    Placed: p.placed,
  }));
  // Convert "2023-24" → "2023 – 2024" for a clean, larger axis label.
  const compData = COMPANIES_YEARLY.map((c) => {
    const [a, b] = c.year.split("-");
    const full = `20${b.length === 2 ? b : b.slice(-2)}`;
    return { label: `${a} – ${full}`, Companies: c.n };
  });

  const tiles: { l: string; v: string | number; c: string }[] = [
    { l: "Registered", v: HIGHLIGHTS.registered.toLocaleString(), c: STAT_ACCENTS.crimson },
    { l: "Participated", v: HIGHLIGHTS.participated.toLocaleString(), c: STAT_ACCENTS.rose },
    { l: "Placed", v: HIGHLIGHTS.placed.toLocaleString(), c: STAT_ACCENTS.emerald },
    { l: "Companies", v: HIGHLIGHTS.companies, c: STAT_ACCENTS.teal },
    { l: "Offers", v: HIGHLIGHTS.offers.toLocaleString(), c: STAT_ACCENTS.amber },
    { l: "1 Cr+ Offers", v: HIGHLIGHTS.crorePlus, c: STAT_ACCENTS.magenta },
    { l: "PPOs", v: HIGHLIGHTS.ppos, c: STAT_ACCENTS.violet },
    { l: "International", v: HIGHLIGHTS.intl, c: STAT_ACCENTS.sky },
    { l: "Average CTC", v: `₹${HIGHLIGHTS.avgLpa} L`, c: STAT_ACCENTS.lime },
    { l: "Median CTC", v: `₹${HIGHLIGHTS.medianLpa} L`, c: STAT_ACCENTS.cyan },
  ];

  return (
    <div className="relative min-h-dvh px-6 lg:px-12 pb-16">
      <BackChip to="/" />

      <PlacementHeader kicker="AY 2023 – 2024" title="Placement & Internship Report" />

      {/* Highlights strip — ten pulsing glow tiles, ten distinct accents, staggered wave */}
      <section className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
        {tiles.map((h, i) => (
          <GlowStat key={h.l} label={h.l} value={h.v} accent={h.c} delay={i * 220} />
        ))}
      </section>

      {/* Narrative + charts */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 glow-card rounded-2xl p-5">
          <div className="label-caps text-primary">Overview</div>
          <h2 className="mt-2 text-xl font-semibold">A record-strong hybrid season.</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The 2023-24 drive followed a hybrid model — on-campus in Dec 2023 with PhD interviews rolling through summer.
            <b className="text-foreground"> 1,475 offers were accepted</b> across
            <b className="text-foreground"> 364 companies</b>, with a <b className="text-foreground">12% jump</b> in recruiter count vs FY23.
            Twenty-two 1 Cr+ offers, 78 international offers, and 258 PPOs closed the year.
          </p>
          <p className="mt-3 text-xs text-muted-foreground/80 leading-relaxed">
            Preparation ran year-round via mock assessments in coding, consulting, finance and analytics — supplemented by communication and interview labs plus department-level domain coaching.
          </p>
        </div>

        <div className="lg:col-span-8 glow-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="label-caps text-primary">Program-wise · Registered vs Participated vs Placed</div>
            <div className="text-[10px] text-muted-foreground">Table 3, p.6</div>
          </div>
          <SmoothArea
            data={progData}
            xKey="label"
            height={260}
            keys={[
              { key: "Registered", color: "#0ea5e9" },
              { key: "Participated", color: "#8b5cf6" },
              { key: "Placed", color: "#ff2d55" },
            ]}
          />
        </div>
      </section>

      <section className="mt-6 glow-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="label-caps text-primary">Companies recruiting through campus placements</div>
          <div className="text-[10px] text-muted-foreground">Table 4, p.7 · line color shifts every 30s</div>
        </div>
        <ColorCyclingLine data={compData} seriesKey="Companies" height={240} />
      </section>
    </div>
  );
}
