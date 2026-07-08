import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { SECTORS, type Sector } from "@/data/placements-2023-24";
import { ALUMNI_TICKER, categoryColor } from "@/data/alumni-topics";
import {
  SECTOR_STUDENTS,
  SUB_DOMAINS,
  CONNECT_NOTIFICATIONS,
  type SectorStudent,
} from "@/data/sector-students";
import { FlatCoverFlow } from "@/components/coverflow/FlatCoverFlow";
import { Sparkles } from "@/components/effects/Sparkles";


export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Connect · IIT Bombay — Alumni & Sector Mentorship" },
      {
        name: "description",
        content:
          "The IIT Bombay Connect hub — meet students from every sector with resumes, projects and packages ready to share.",
      },
      { property: "og:title", content: "Connect · IIT Bombay" },
      {
        property: "og:description",
        content:
          "Explore sectors, meet mentors, and get matched with IIT Bombay alumni.",
      },
    ],
  }),
  component: ConnectPage,
});

/* ============================= Background ============================= */

function ConnectBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 20% 10%, rgba(180, 20, 30, 0.35), transparent 55%)," +
          "radial-gradient(ellipse at 80% 90%, rgba(20, 90, 55, 0.32), transparent 55%)," +
          "linear-gradient(180deg, #0a0605 0%, #08100c 55%, #0a0605 100%)",
      }}
    >
      <div
        className="absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255, 90, 90, 0.14), transparent 22%)`,
        }}
      />
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

/* ============================= Alumni Ticker (compact, no CTA) ============================= */

function AlumniTickerCard() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % ALUMNI_TICKER.length),
      3800,
    );
    return () => clearInterval(t);
  }, [paused]);

  const item = ALUMNI_TICKER[idx];
  const accent = categoryColor(item.category);

  return (
    <div
      className="relative w-full rounded-2xl border border-white/12 bg-black/40 backdrop-blur-sm overflow-hidden flex flex-col p-4 sm:p-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ boxShadow: `0 20px 60px -30px ${accent}55` }}
    >
      <div className="flex items-center gap-3 shrink-0">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
          <span className="relative rounded-full h-2.5 w-2.5 bg-red-500" />
        </span>
        <div className="text-red-400 text-[10px] font-semibold tracking-[0.28em] uppercase">
          Live · IITBAA
        </div>
      </div>
      <h2 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-white">
        IIT Bombay Connect
      </h2>

      <div key={idx} className="mt-3 min-h-[110px] animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] font-semibold tracking-[0.28em] uppercase px-2 py-0.5 rounded-full border"
            style={{
              color: accent,
              borderColor: `${accent}66`,
              background: `${accent}18`,
            }}
          >
            {item.category}
          </span>
          <span className="text-[10px] text-white/40">
            {idx + 1} / {ALUMNI_TICKER.length}
          </span>
        </div>
        <div className="mt-2 text-sm sm:text-base font-semibold text-white leading-snug">
          {item.topic}
        </div>
        <p className="mt-1.5 text-[12px] text-white/70 leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>

      <div className="mt-3 border-t border-white/10 pt-3 text-[11px] text-white/60 leading-snug">
        Visit the official IIT Bombay Alumni Association site for better engagement.
      </div>
    </div>
  );
}

/* ============================= Notification Toaster ============================= */

function NotificationToaster() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // pattern: visible 4s, hidden 8s, next
    let mounted = true;
    const cycle = () => {
      if (!mounted) return;
      setVisible(true);
      const hide = setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
        const next = setTimeout(() => {
          if (!mounted) return;
          setIdx((i) => (i + 1) % CONNECT_NOTIFICATIONS.length);
          cycle();
        }, 8000);
        (cycle as any)._next = next;
      }, 4000);
      (cycle as any)._hide = hide;
    };
    cycle();
    return () => {
      mounted = false;
      clearTimeout((cycle as any)._hide);
      clearTimeout((cycle as any)._next);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute top-3 right-3 z-40 w-[280px] sm:w-[320px]">
      <div
        className={`transition-all duration-500 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="rounded-xl border border-white/15 bg-black/70 backdrop-blur-md px-3.5 py-2.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
          <div className="flex items-start gap-2.5">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <div className="text-[12px] text-white/85 leading-snug">
              {CONNECT_NOTIFICATIONS[idx]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================= Big Heading ============================= */

function BigConnectHeading() {
  return (
    <div className="flex-1 min-w-0 pl-2 sm:pl-6 flex flex-col justify-center">
      <div className="text-[10px] font-semibold tracking-[0.32em] uppercase text-red-300/80">
        For Students
      </div>
      <h1 className="mt-2 text-[clamp(2rem,5.2vw,4.4rem)] font-black leading-[0.95] tracking-tight text-white">
        For better engagement,{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ff6b6b 0%, #ffb347 50%, #6ee7b7 100%)",
          }}
        >
          connect to students.
        </span>
      </h1>
    </div>
  );
}

/* ============================= Sector Train (marquee) ============================= */

/* ============================= Sector counts ============================= */

const SECTOR_STUDENT_COUNTS: Record<string, number> = SECTORS.reduce(
  (acc, s) => {
    acc[s.key] = SECTOR_STUDENTS[s.key]?.length ?? 0;
    return acc;
  },
  {} as Record<string, number>,
);

/* ============================= Landing (Flat Cover Flow) ============================= */

function LandingView({
  onOpen,
}: {
  onOpen: (key: string) => void;
  skipIntro?: boolean;
}) {
  const [focus, setFocus] = useState(Math.floor(SECTORS.length / 2));
  const items = useMemo(
    () =>
      SECTORS.map((s) => ({
        key: s.key,
        image: s.image,
        name: s.name,
        color: s.color,
      })),
    [],
  );
  const active = SECTORS[focus];
  const students = SECTOR_STUDENT_COUNTS[active.key] ?? 0;
  const companies = active.companies;

  return (
    <main className="relative flex-1 min-h-0 flex flex-col overflow-hidden">
      <ConnectBackground />
      <NotificationToaster />

      <div className="relative z-10 flex-1 min-h-0 flex flex-col px-3 sm:px-4 pt-3 pb-2 gap-2">
        {/* Top row: compact card + big heading */}
        <div className="shrink-0 flex flex-col lg:flex-row gap-4 items-stretch max-h-[34%]">
          <div className="w-full lg:w-[27%] lg:min-w-[260px] lg:max-w-[340px]">
            <AlumniTickerCard />
          </div>
          <BigConnectHeading />
        </div>

        {/* Cover flow area — fills remaining space, no overlap with header */}
        <div className="relative flex-1 min-h-0 rounded-3xl border border-white/10 bg-black/45 overflow-hidden flex flex-col items-center justify-center px-4 py-4">
          {/* Sparkles halo behind focused center card */}
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              left: "50%",
              top: "42%",
              transform: "translate(-50%,-50%)",
              width: 360,
              height: 360,
              filter: "blur(2px)",
              opacity: 0.55,
            }}
          >
            <Sparkles color={active.color} density={120} />
          </div>

          <FlatCoverFlow
            items={items}
            focus={focus}
            onFocus={setFocus}
            onOpen={(i) => onOpen(SECTORS[i].key)}
            cardWidth={180}
            cardHeight={230}
            className="w-full"
          />

          {/* Focused sector description */}
          <div className="mt-2 max-w-xl text-center px-4">
            <div
              className="text-[10px] font-semibold tracking-[0.32em] uppercase"
              style={{ color: active.color }}
            >
              Sector
            </div>
            <h2 className="mt-1 text-lg sm:text-xl font-semibold text-white leading-tight">
              {active.name}
            </h2>
            <p className="mt-1 text-[12px] text-white/75 leading-snug">
              <span className="text-white font-semibold">{companies} companies</span>
              {" · "}
              <span className="text-white font-semibold">
                {Math.max(100, students * 12)}+ students
              </span>{" "}
              ready to connect.
            </p>
            <button
              type="button"
              onClick={() => onOpen(active.key)}
              className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold text-black transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${active.color}, ${active.color}aa)`,
                boxShadow: `0 10px 30px -10px ${active.color}88`,
              }}
            >
              Explore this sector
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



/* ============================= Student Pager (2 at a time) ============================= */

function StudentPager({ sectorKey, color }: { sectorKey: string; color: string }) {
  const roster = SECTOR_STUDENTS[sectorKey] ?? SECTOR_STUDENTS.other;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(roster.length / 2);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pageCount), 7000);
    return () => clearInterval(t);
  }, [pageCount]);

  const visible = [roster[page * 2], roster[page * 2 + 1]].filter(Boolean);

  return (
    <div className="h-full w-full flex flex-col gap-3">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <div
            className="text-[10px] font-semibold tracking-[0.3em] uppercase"
            style={{ color }}
          >
            Meet the students · {roster.length} available
          </div>
          <div className="text-sm text-white/70">
            Two at a time · auto-cycles every 7s
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
            className="h-8 w-8 rounded-full border border-white/15 bg-black/40 text-white hover:border-white/40 flex items-center justify-center"
            aria-label="Previous students"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <div className="text-xs text-white/60 tabular-nums">
            {page + 1} / {pageCount}
          </div>
          <button
            onClick={() => setPage((p) => (p + 1) % pageCount)}
            className="h-8 w-8 rounded-full border border-white/15 bg-black/40 text-white hover:border-white/40 flex items-center justify-center"
            aria-label="Next students"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visible.map((s, i) => (
          <StudentCard key={`${page}-${i}`} student={s} color={color} />
        ))}
      </div>
    </div>
  );
}

function StudentCard({ student, color }: { student: SectorStudent; color: string }) {
  const bg = `linear-gradient(135deg, hsl(${student.hue} 70% 45%), hsl(${(student.hue + 30) % 360} 70% 30%))`;
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-2 duration-500 rounded-2xl border border-white/12 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col overflow-hidden"
      style={{ boxShadow: `0 20px 40px -25px ${color}88` }}
    >
      <div className="flex items-start gap-3 shrink-0">
        <div
          className="h-12 w-12 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold text-white ring-2 ring-white/20"
          style={{ background: bg }}
        >
          {student.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-base font-semibold text-white truncate">
            {student.name}
          </div>
          <div className="text-[12px] text-white/60 truncate">
            {student.branch} · {student.year} · CGPA {student.cgpa}
          </div>
        </div>
        {student.intern ? (
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 tracking-wider uppercase">
            Intern
          </span>
        ) : null}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        <InfoCell label="Company" value={student.company} />
        <InfoCell label="Role" value={student.role} />
        <InfoCell
          label={student.intern ? "Stipend" : "Package"}
          value={student.intern ? student.stipend ?? "—" : student.package}
          accent={color}
        />
        <InfoCell label="Joined" value={student.joinYear} />
      </div>

      <div className="mt-3">
        <div className="text-[10px] font-semibold tracking-[0.28em] uppercase text-white/50">
          Projects
        </div>
        <div className="text-[12px] text-white/80 leading-snug mt-0.5">
          {student.projects}
        </div>
      </div>

      <div className="mt-3 flex-1 min-h-0">
        <div className="text-[10px] font-semibold tracking-[0.28em] uppercase text-white/50">
          About
        </div>
        <p className="text-[12px] text-white/75 leading-relaxed mt-0.5">
          {student.blurb}
        </p>
      </div>

      <a
        href={student.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 shrink-0 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-[12px] px-4 py-2.5 transition-all"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}aa)`,
          color: "#0a0a0a",
          boxShadow: `0 10px 25px -12px ${color}`,
        }}
      >
        Explore resume &amp; projects
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      </a>
    </div>
  );
}

function InfoCell({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
      <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/45">
        {label}
      </div>
      <div
        className="text-[12px] font-semibold truncate"
        style={{ color: accent ?? "white" }}
      >
        {value}
      </div>
    </div>
  );
}

/* ============================= Feedback Form ============================= */

function FeedbackForm({ sector }: { sector: Sector }) {
  const domains = SUB_DOMAINS[sector.key] ?? ["General interest"];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    domain: domains[0],
    name: "",
    about: "",
    questions: "",
    email: "",
    resume: null as File | null,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;
    if (form.about.trim().length < 30) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6 flex flex-col items-center justify-center text-center">
        <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-500/60 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="text-emerald-400">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div className="mt-4 text-lg font-semibold text-white">You're on the list</div>
        <p className="mt-2 text-sm text-white/70 max-w-sm">
          We'll match you with the right {sector.name} alumni and reach out on {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/12 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm"
      style={{ boxShadow: `0 20px 60px -30px ${sector.color}55` }}
    >
      <div
        className="text-[10px] font-semibold tracking-[0.3em] uppercase"
        style={{ color: sector.color }}
      >
        Connect Form
      </div>
      <div className="mt-1 text-lg font-semibold text-white">
        Connect with{" "}
        <span style={{ color: sector.color }}>{sector.name}</span> alumni
      </div>
      <p className="text-[11px] text-white/55 mt-1">
        Answer a few questions and we'll route you to the right people.
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Your name">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Aarav Deshmukh"
            className={inputCls}
          />
        </Field>
        <Field label="Sub-domain of interest">
          <select
            value={form.domain}
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
            className={inputCls}
          >
            {domains.map((d) => (
              <option key={d} value={d} className="bg-black">
                {d}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-3">
        <Field label="About you (min 30 chars)">
          <textarea
            required
            minLength={30}
            maxLength={1200}
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
            placeholder="Branch, year, projects, internships and what you'd like to explore in this sector."
            className={`${inputCls} min-h-[96px] resize-y`}
          />
          <div className="text-[10px] text-white/40 mt-1 text-right">
            {form.about.length} / 1200
          </div>
        </Field>
      </div>

      <div className="mt-1">
        <Field label="What do you want to know?">
          <textarea
            maxLength={600}
            value={form.questions}
            onChange={(e) => setForm({ ...form, questions: e.target.value })}
            placeholder="e.g. Which companies to target? Best prep timeline for 3rd-year internships?"
            className={`${inputCls} min-h-[72px] resize-y`}
          />
        </Field>
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Email">
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@iitb.ac.in"
            className={inputCls}
          />
        </Field>
        <Field label="Resume (optional)">
          <label className="mt-1 flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white/70 cursor-pointer hover:border-white/40">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 16V4M6 10l6-6 6 6M4 20h16" /></svg>
            <span className="truncate">
              {form.resume?.name ?? "Upload PDF / DOC"}
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) =>
                setForm({ ...form, resume: e.target.files?.[0] ?? null })
              }
            />
          </label>
        </Field>
      </div>

      <button
        type="submit"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-sm px-4 py-3 transition-all"
        style={{
          background: `linear-gradient(135deg, ${sector.color}, ${sector.color}aa)`,
          color: "#0a0a0a",
          boxShadow: `0 10px 30px -10px ${sector.color}88`,
        }}
      >
        Connect with {sector.name} alumni
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}

const inputCls =
  "mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-[10px] font-semibold tracking-[0.24em] uppercase text-white/55">
        {label}
      </div>
      {children}
    </label>
  );
}

/* ============================= Sector Detail ============================= */

function SectorDetail({
  sector,
  onBack,
}: {
  sector: Sector;
  onBack: () => void;
}) {
  return (
    <main className="relative flex-1 min-h-0 flex flex-col overflow-hidden">
      <ConnectBackground />
      <NotificationToaster />

      <div className="relative z-10 flex-1 min-h-0 flex flex-col px-3 sm:px-4 py-3 gap-3 overflow-y-auto no-scrollbar">
        {/* Header row: back arrow + compact ticker + big heading */}
        <div className="shrink-0 flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="flex items-start gap-3 lg:w-[27%] lg:min-w-[280px] lg:max-w-[360px]">
            <button
              onClick={onBack}
              aria-label="Back to sectors"
              className="mt-1 shrink-0 h-9 w-9 rounded-full border border-white/15 bg-black/60 hover:bg-black hover:border-white/40 flex items-center justify-center text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <div className="flex-1 min-w-0">
              <AlumniTickerCard />
            </div>
          </div>
          <BigConnectHeading />
        </div>

        {/* Sector title strip */}
        <div className="shrink-0 flex items-center gap-3">
          <span
            className="h-2 w-2 rounded-full"
            style={{
              background: sector.color,
              boxShadow: `0 0 12px ${sector.color}`,
            }}
          />
          <div
            className="text-[10px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: sector.color }}
          >
            Sector
          </div>
          <div className="text-xl font-semibold text-white">{sector.name}</div>
          <div className="ml-auto text-[11px] text-white/60">
            {sector.companies} companies · {sector.selections} selections ·{" "}
            {SECTOR_STUDENTS[sector.key]?.length ?? 0} students available
          </div>
        </div>

        {/* Body: pager (left) + form (right) */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4">
          <div className="min-h-[520px]">
            <StudentPager sectorKey={sector.key} color={sector.color} />
          </div>
          <div>
            <FeedbackForm sector={sector} />
          </div>
        </div>
      </div>
    </main>
  );
}

/* ============================= Page ============================= */

function ConnectPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [skipIntro, setSkipIntro] = useState(false);
  const active = SECTORS.find((s) => s.key === selected) ?? null;

  const handleBack = () => {
    setSkipIntro(true);
    setSelected(null);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col relative">
      <SectionHeader active="Connect" />
      {active ? (
        <SectorDetail sector={active} onBack={handleBack} />
      ) : (
        <LandingView onOpen={setSelected} skipIntro={skipIntro} />
      )}
    </div>
  );
}
