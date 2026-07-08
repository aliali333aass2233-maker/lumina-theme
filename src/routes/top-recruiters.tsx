import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { DOMAINS, SUMMARY, domainById, type Domain } from "@/data/top-recruiters";

export const Route = createFileRoute("/top-recruiters")({
  head: () => ({
    meta: [
      { title: "Top Recruiters · IIT Bombay — Branch-wise Placement Market" },
      { name: "description", content: "Exhaustive branch-wise recruiter, role and package intelligence for IIT Bombay across B.Tech, M.Tech, M.Sc, M.Des and PhD programs." },
      { property: "og:title", content: "Top Recruiters · IIT Bombay" },
      { property: "og:description", content: "Domain-wise top recruiting companies, roles and minimum, average & median packages at IIT Bombay." },
    ],
  }),
  component: TopRecruitersPage,
});

/* ---------------- Reddish thunderstorm ambient (landing only) ---------------- */
function StormLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const [flash, setFlash] = useState(0);
  const [bolt, setBolt] = useState({ n: 0, x: 40, tilt: 6 });

  useEffect(() => {
    const el = ref.current;
    const onMove = (e: PointerEvent) => {
      if (!el) return;
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    const strike = () => {
      setFlash((f) => f + 1);
      setBolt((b) => ({ n: b.n + 1, x: 12 + Math.random() * 76, tilt: -14 + Math.random() * 28 }));
    };
    let last = 0;
    const onWheel = () => {
      const now = Date.now();
      if (now - last > 320) { last = now; strike(); }
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("wheel", onWheel, { passive: true });
    const iv = window.setInterval(strike, 4600);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("wheel", onWheel);
      window.clearInterval(iv);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* base storm tint */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_60%)]" />
      {/* cursor-follow red glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx,50%) var(--my,30%), color-mix(in oklab, var(--primary) 34%, transparent), transparent 70%)",
        }}
      />
      {/* lightning full-screen flash */}
      <div
        key={`f${flash}`}
        className="tr-flash absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 0%, oklch(0.6 0.24 22 / 0.55), transparent 60%)",
        }}
      />
      {/* jagged bolt */}
      <svg
        key={`b${bolt.n}`}
        className="tr-bolt absolute top-0 h-[60vh] w-24"
        style={{ left: `${bolt.x}%`, transform: `translateX(-50%) rotate(${bolt.tilt}deg)` }}
        viewBox="0 0 40 240"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M22 0 L10 96 L24 96 L6 240 L20 118 L8 118 Z"
          fill="oklch(0.72 0.2 25)"
          stroke="oklch(0.9 0.12 30)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

/* ---------------- Landing: domain grid ---------------- */
function DomainCard({ domain, index, onOpen }: { domain: Domain; index: number; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative rounded-2xl overflow-hidden text-left border border-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/60"
      style={{ ["--dm-accent" as string]: domain.accent }}
    >
      <img
        src={domain.image}
        alt={domain.name}
        loading="lazy"
        width={1024}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/10" />
      <div className="relative flex h-full flex-col justify-end p-3 min-h-[128px] sm:min-h-[150px]">
        <div className="text-[13px] sm:text-sm font-semibold leading-tight text-white line-clamp-2">
          {domain.name}
        </div>
        <div className="mt-0.5 text-[10px] text-white/60 line-clamp-1">{domain.tagline}</div>
        {/* unique accent label strip */}
        <div className="mt-2 flex items-center gap-2">
          <span className="h-1 w-6 rounded-full" style={{ background: domain.accent }} />
          <span
            className="label-caps text-[9px] tracking-wider"
            style={{ color: domain.accent }}
          >
            Domain {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </button>
  );
}

function Landing({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="relative flex-1 min-h-0 flex flex-col overflow-hidden">
      <StormLayer />
      <div className="relative z-10 flex-1 min-h-0 flex flex-col mx-auto w-full max-w-7xl px-4 sm:px-6 py-4">
        {/* heading + summary */}
        <div className="shrink-0 text-center">
          <div className="label-caps text-primary text-[10px]">Placement & Recruitment Market · IIT Bombay</div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">Top Recruiters</h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="rounded-full border border-border bg-background/60 px-3 py-1">
              Interview floor · <span className="text-foreground font-medium">{SUMMARY.interviewFloor}</span>
            </span>
            <span className="rounded-full border border-border bg-background/60 px-3 py-1">
              Campus average · <span className="text-primary font-medium">{SUMMARY.campusAverage}</span>
            </span>
            <span className="rounded-full border border-border bg-background/60 px-3 py-1">
              Median domestic · <span className="text-foreground font-medium">{SUMMARY.medianDomestic}</span>
            </span>
          </div>
        </div>

        {/* grid */}
        <div className="mt-4 flex-1 min-h-0 overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pb-2">
            {DOMAINS.map((d, i) => (
              <DomainCard key={d.id} domain={d} index={i} onOpen={() => onOpen(d.id)} />
            ))}
          </div>
        </div>
        <p className="shrink-0 pt-2 text-center text-[10px] text-muted-foreground">
          Select a domain to view branch-wise recruiters, roles and packages.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Detail: domain tables ---------------- */
function DomainDetail({ domain, onBack }: { domain: Domain; onBack: () => void }) {
  return (
    <div className="relative flex-1 min-h-0 flex flex-col mx-auto w-full max-w-[1400px] px-3 sm:px-5 py-3">
      {/* header row */}
      <div className="shrink-0 flex items-center gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] hover:border-white/30 transition-colors"
        >
          ← All domains
        </button>
        <div className="min-w-0">
          <h1 className="text-lg sm:text-2xl font-semibold tracking-tight truncate" style={{ color: domain.accent }}>
            {domain.name}
          </h1>
          <div className="text-[11px] text-muted-foreground truncate">{domain.tagline}</div>
        </div>
      </div>

      <div className="mt-3 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
        {/* rotating hyperreal image */}
        <div
          className="hidden lg:block relative rounded-2xl overflow-hidden branch-glow"
          style={{ ["--branch-accent" as string]: domain.accent }}
        >
          <img
            src={domain.image}
            alt={domain.name}
            width={1024}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover animate-model-spin"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="label-caps text-[9px] text-white/70">IIT Bombay · Placement Cell</div>
            <div className="text-sm font-semibold text-white">{domain.name}</div>
          </div>
        </div>

        {/* data */}
        <div className="min-h-0 flex flex-col">
          {domain.rows ? (
            <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide rounded-2xl border border-border">
              <table className="w-full border-collapse text-[11px]">
                <thead className="sticky top-0 z-10 bg-card/95 backdrop-blur">
                  <tr className="text-left text-muted-foreground">
                    <th className="px-3 py-2 font-medium">Degree & Specialization</th>
                    <th className="px-3 py-2 font-medium">Top Recruiting Companies</th>
                    <th className="px-3 py-2 font-medium">Most Common Roles</th>
                    <th className="px-3 py-2 font-medium text-right whitespace-nowrap">Min</th>
                    <th className="px-3 py-2 font-medium text-right whitespace-nowrap">Avg</th>
                    <th className="px-3 py-2 font-medium text-right whitespace-nowrap">Median</th>
                  </tr>
                </thead>
                <tbody>
                  {domain.rows.map((r) => (
                    <tr key={r.degree} className="border-t border-border/70 align-top hover:bg-white/[0.03]">
                      <td className="px-3 py-2 font-medium text-foreground min-w-[160px]">{r.degree}</td>
                      <td className="px-3 py-2 text-muted-foreground min-w-[180px]">{r.companies}</td>
                      <td className="px-3 py-2 text-muted-foreground min-w-[180px]">{r.roles}</td>
                      <td className="px-3 py-2 text-right tabular-nums whitespace-nowrap text-muted-foreground">{r.min}</td>
                      <td className="px-3 py-2 text-right tabular-nums whitespace-nowrap font-semibold" style={{ color: domain.accent }}>{r.avg}</td>
                      <td className="px-3 py-2 text-right tabular-nums whitespace-nowrap text-foreground">{r.median}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-3 gap-3 pr-1">
              {domain.groups?.map((g) => (
                <div key={g.code} className="rounded-2xl border border-border bg-card/50 p-4 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      className="grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold text-black"
                      style={{ background: domain.accent }}
                    >
                      {g.code}
                    </span>
                    <span className="label-caps text-[9px] text-muted-foreground">{g.eligibility}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold leading-tight text-foreground">{g.title}</h3>
                  <div className="mt-3">
                    <div className="label-caps text-[9px] text-primary">Recruiters</div>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{g.recruiters}</p>
                  </div>
                  <div className="mt-2">
                    <div className="label-caps text-[9px] text-primary">Job Profiles</div>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{g.roles}</p>
                  </div>
                  <div className="mt-3 grid gap-1.5">
                    {g.metrics.map((m) => (
                      <div key={m.label} className="flex items-center justify-between rounded-lg border border-border/70 px-2.5 py-1.5">
                        <span className="text-[10px] text-muted-foreground">{m.label}</span>
                        <span className="text-[11px] font-semibold tabular-nums" style={{ color: domain.accent }}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TopRecruitersPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const domain = selected ? domainById(selected) : undefined;

  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col">
      <SectionHeader active="Top Recruiters" />
      {domain ? (
        <DomainDetail domain={domain} onBack={() => setSelected(null)} />
      ) : (
        <Landing onOpen={setSelected} />
      )}
    </div>
  );
}
