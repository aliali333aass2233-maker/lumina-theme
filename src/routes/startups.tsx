import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltedCoverFlow } from "@/components/coverflow/TiltedCoverFlow";
import { CssGlobe } from "@/components/effects/CssGlobe";
import { Sparkles } from "@/components/effects/Sparkles";
import { GlowBorder } from "@/components/effects/GlowBorder";
import { STARTUP_SECTORS, type Startup, type StartupSector } from "@/data/startup-sectors";

export const Route = createFileRoute("/startups")({
  head: () => ({
    meta: [
      { title: "Startup Ventures · IIT Bombay" },
      { name: "description", content: "Explore 200+ ventures founded by the IIT Bombay ecosystem across 20 sectors — fintech, AI, mobility, deeptech and more." },
      { property: "og:title", content: "IIT Bombay Startup Ventures" },
      { property: "og:description", content: "20 sectors, 200+ startups founded by IIT Bombay alumni." },
    ],
  }),
  component: StartupsPage,
});

// Cities where alumni startups operate — arcs
const STARTUP_CITIES = [
  { lat: 19.076, lng: 72.877, label: "Mumbai" },
  { lat: 12.972, lng: 77.594, label: "Bengaluru" },
  { lat: 28.613, lng: 77.209, label: "Delhi" },
  { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
  { lat: 40.7128, lng: -74.006, label: "New York" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
];

function StartupsPage() {
  const [focus, setFocus] = useState(0);
  const [detail, setDetail] = useState<StartupSector | null>(null);
  const items = useMemo(
    () => STARTUP_SECTORS.map((s) => ({ key: s.key, image: s.image, name: s.name, color: s.color })),
    [],
  );
  const active = STARTUP_SECTORS[focus];

  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col">
      <SectionHeader active="Startups" />
      {detail ? (
        <SectorDetail sector={detail} onBack={() => setDetail(null)} />
      ) : (
        <StartupsLanding
          focus={focus}
          setFocus={setFocus}
          items={items}
          active={active}
          onExplore={() => setDetail(active)}
        />
      )}
    </div>
  );
}

function StartupsLanding({
  focus, setFocus, items, active, onExplore,
}: {
  focus: number;
  setFocus: (i: number) => void;
  items: { key: string; image: string; name: string; color: string }[];
  active: StartupSector;
  onExplore: () => void;
}) {
  return (
    <main className="relative flex-1 min-h-0 flex flex-col overflow-hidden">
      {/* Background: dark radial + world globe arcs */}
      <div aria-hidden className="absolute inset-0 -z-0" style={{
        background: "radial-gradient(ellipse at 20% 10%, rgba(80,50,180,0.35), transparent 55%)," +
          "radial-gradient(ellipse at 80% 90%, rgba(20,90,120,0.32), transparent 55%)," +
          "linear-gradient(180deg, var(--ambient-base) 0%, var(--ambient-base) 100%)",
      }} />
      <div aria-hidden className="absolute right-0 top-14 opacity-60 pointer-events-none" style={{ width: 520, height: 520 }}>
        <CssGlobe markers={STARTUP_CITIES.map((c) => ({ ...c, color: "rgba(200,120,255,0.7)" }))} size={520} showArcs autoRotateSpeed={0.12} />
      </div>

      <div className="relative z-10 flex-1 min-h-0 flex flex-col px-3 sm:px-4 py-2 gap-2 overflow-hidden">
        {/* Title strip */}
        <div className="shrink-0 pt-2 pb-1">
          <div className="text-[10px] font-semibold tracking-[0.32em] uppercase text-violet-300/80">
            IIT Bombay
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground">
            Startup Ventures{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#c084fc,#f472b6,#facc15)" }}
            >
              Showcase
            </span>
          </h1>
          <p className="mt-0.5 text-[12px] text-foreground/60 max-w-2xl">
            200+ companies across 20 sectors, built by IIT-B alumni.
          </p>
        </div>

        {/* Cover Flow */}
        <div className="relative flex-1 min-h-0 rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center px-2 py-3">
          <div aria-hidden className="absolute pointer-events-none" style={{
            left: "50%", top: "42%", transform: "translate(-50%,-50%)", width: 420, height: 420, filter: "blur(2px)", opacity: 0.5,
          }}>
            <Sparkles color={active.color} density={130} />
          </div>

          <TiltedCoverFlow
            items={items}
            focus={focus}
            onFocus={setFocus}
            cardWidth={280}
            cardHeight={280}
            className="w-full"
          />

          {/* Focused sector info */}
          <div className="mt-2 max-w-2xl text-center px-4">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">
              {active.name}
            </h2>
            <p className="mt-1 text-[12px] text-foreground/70">
              {active.tagline} · <span className="text-foreground/90 font-semibold">{active.startups.length} ventures</span>
            </p>
            <div className="mt-1.5 flex flex-wrap justify-center gap-1.5">
              {active.startups.slice(0, 5).map((s) => (
                <span key={s.name} className="text-[10px] px-2 py-0.5 rounded-full border border-foreground/15 bg-foreground/[0.04] text-foreground/80">
                  {s.name}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={onExplore}
              className="mt-2 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-semibold text-black transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${active.color}, ${active.color}aa)`,
                boxShadow: `0 10px 30px -10px ${active.color}88`,
              }}
            >
              Explore More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectorDetail({ sector, onBack }: { sector: StartupSector; onBack: () => void }) {
  return (
    <main className="relative flex-1 min-h-0 flex flex-col overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-0" style={{
        background: `radial-gradient(ellipse at 20% 10%, ${sector.color}25, transparent 55%),` +
          `radial-gradient(ellipse at 80% 90%, ${sector.color}18, transparent 55%),` +
          `linear-gradient(180deg, var(--ambient-base) 0%, var(--ambient-base) 100%)`,
      }} />

      <div className="relative z-10 flex-1 min-h-0 flex flex-col px-4 sm:px-6 py-3 overflow-y-auto">
        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={onBack}
            aria-label="Back"
            className="h-9 w-9 rounded-full border border-foreground/15 bg-background/60 hover:bg-background hover:border-foreground/40 flex items-center justify-center text-foreground transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <div>
            <div className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: sector.color }}>
              Sector
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{sector.name}</h1>
            <p className="text-[12px] text-foreground/60">{sector.tagline}</p>
          </div>
        </div>

        <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
          {sector.startups.map((s) => (
            <StartupCard key={s.name} startup={s} accent={sector.color} />
          ))}
        </section>
      </div>
    </main>
  );
}

function StartupCard({ startup, accent }: { startup: Startup; accent: string }) {
  return (
    <GlowBorder
      colors={[accent, "#ffffff20", accent, "#ff9d3d", accent]}
      radius={16}
      duration={5}
    >
      <div className="p-5 h-full flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="text-base font-semibold text-foreground truncate">{startup.name}</div>
            <div className="text-[11px] text-foreground/60 truncate">
              {startup.founder}
            </div>
            <div className="text-[10px] text-foreground/45 truncate">
              {startup.branch}
            </div>
          </div>
        </div>
        <p className="mt-3 text-[12px] text-foreground/80 leading-relaxed">
          {startup.description}
        </p>
        <p className="mt-2 text-[11px] italic text-foreground/60 leading-relaxed">
          &ldquo;{startup.motivation}&rdquo;
        </p>
        {startup.reports && startup.reports.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {startup.reports.map((r) => (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] px-2 py-0.5 rounded-full border border-foreground/15 bg-foreground/[0.04] text-foreground/75 hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                {r.label} ↗
              </a>
            ))}
          </div>
        ) : null}
        {startup.website && startup.website !== "#" ? (
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-3 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[12px] font-semibold text-black transition-transform hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${accent}aa)`,
              boxShadow: `0 10px 25px -12px ${accent}`,
            }}
          >
            Visit website
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        ) : (
          <div className="mt-auto pt-3 text-center text-[11px] text-foreground/40 italic">
            Website coming soon
          </div>
        )}
      </div>
    </GlowBorder>
  );
}
