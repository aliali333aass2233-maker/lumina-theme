import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import overviewImg from "@/assets/campus/gen-overview.jpg";
import globalImg from "@/assets/campus/gen-global.jpg";
import connectivityImg from "@/assets/campus/gen-connectivity.jpg";
import hostelsImg from "@/assets/campus/gen-hostels.jpg";
import libraryImg from "@/assets/campus/gen-library.jpg";
import sportsImg from "@/assets/campus/gen-sports.jpg";

const GOOGLE_MAPS_API_KEY = "ADD_YOUR_API_KEY_HERE";

type Stat = { icon: ReactNode; label: string; value: string };
type VideoItem = { id: string; title: string };
type Tint = "red" | "green" | "blue" | "gold";

type SectionConfig = {
  id: string;
  title: string;
  eyebrow: string;
  tint: Tint;
  bgImage: string; // single static image now
  videos: VideoItem[];
  stats: Stat[];
  description: string[];
  features: string[]; // new — extra feature highlight bullets
  mapQuery: string; // every section now has a map
};

/* ---------------- Icons ---------------- */

const I = {
  Map: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z"/><path d="M9 4v16M15 6v16"/></svg>),
  Building: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 21V7l8-4 8 4v14"/><path d="M9 21v-6h6v6M9 11h.01M15 11h.01"/></svg>),
  Pin: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s-7-7-7-13a7 7 0 1114 0c0 6-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>),
  Mountain: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 20l6-10 4 6 3-4 5 8H3z"/></svg>),
  Sun: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M5 19l1.4-1.4M17.6 6.4L19 5"/></svg>),
  Globe: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>),
  Book: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3V4z"/><path d="M7 4v13"/></svg>),
  Chip: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>),
  Users: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20a7 7 0 0114 0"/><circle cx="17" cy="8" r="3"/><path d="M15 20a7 7 0 017-1"/></svg>),
  Sparkle: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>),
  Trophy: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 4h10v4a5 5 0 01-10 0V4z"/><path d="M4 5h3M17 5h3M9 20h6M12 15v5"/></svg>),
  Pool: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 18c2 0 2-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2M2 14c2 0 2-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2"/></svg>),
  Train: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M9 21l-2-4M15 21l2-4"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>),
  Back: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M11 5l-7 7 7 7"/></svg>),
  Check: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5"/></svg>),
};

/* ---------------- Section data ---------------- */

const SECTIONS: SectionConfig[] = [
  {
    id: "overview", title: "Overview", eyebrow: "Block 01", tint: "red",
    bgImage: overviewImg,
    videos: [
      { id: "CBReye0MTJA", title: "Campus Drone Tour in 4K" },
      { id: "BgXaxIogQcU", title: "Campus Tour of IIT Bombay" },
      { id: "aeSqSdnW_EY", title: "IIT Bombay Campus Tour" },
      { id: "rSJ1mGPQuq4", title: "Full Campus Tour" },
    ],
    stats: [
      { icon: <I.Map />, label: "Area", value: "545 acres" },
      { icon: <I.Building />, label: "Established", value: "1958" },
      { icon: <I.Pin />, label: "Location", value: "Powai, Mumbai" },
      { icon: <I.Mountain />, label: "Terrain", value: "Hilly plateau" },
      { icon: <I.Sun />, label: "Best season", value: "Nov–Feb" },
    ],
    description: [
      "Spread across 545 acres of hills, dense forest and two freshwater lakes, the IIT Bombay campus feels less like an urban institute and more like a nature reserve that happens to have world-class labs in it. Powai Lake borders one edge, Vihar Lake the other, with tree-lined roads winding past hostels and departments that stay green through most of the year.",
      "The hilly terrain has helped the campus hold onto real wildlife — over 300 plant species, 150+ bird species, and resident deer, macaques and peacocks that wander close to academic buildings. November to February, with mist over the lake and cooler air, is when the campus looks its best.",
    ],
    features: [
      "Fully residential campus — nearly every student and much of the faculty lives on-site",
      "Two freshwater lakes (Powai & Vihar) used for rowing, birdwatching and evening walks",
      "Declared an eco-sensitive zone due to its forest cover and resident wildlife",
      "Home to over 60 student clubs, councils and cultural bodies run entirely by students",
    ],
    mapQuery: "Indian Institute of Technology Bombay, Powai, Mumbai",
  },
  {
    id: "global", title: "Global Expansion", eyebrow: "Block 02", tint: "blue",
    bgImage: globalImg,
    videos: [
      { id: "bi6IccDgiNA", title: "SUNY Old Westbury Partnership" },
      { id: "eILtcqhY5lg", title: "Why IITs Are Going Global" },
      { id: "J72gyMHbBKM", title: "IIT Bombay & Columbia" },
      { id: "lS5JfIsU6ig", title: "KPIT & IIT Bombay MoU" },
    ],
    stats: [
      { icon: <I.Globe />, label: "First overseas campus", value: "SUNY, USA" },
      { icon: <I.Sparkle />, label: "Programs start", value: "2027" },
      { icon: <I.Users />, label: "US Alumni", value: "15,000+" },
      { icon: <I.Building />, label: "Research partners", value: "MIT, Stanford +3" },
    ],
    description: [
      "In June 2026, IIT Bombay partnered with SUNY Old Westbury for its first overseas sub-campus — certificate programs in AI, sustainability and clean-tech launching 2027, taught by a mix of visiting IIT Bombay faculty and local partner staff.",
      "The move builds on a 15,000+ strong US alumni base, and sits alongside deepening research ties with MIT, Stanford and other institutions — a shift toward IIT Bombay operating as a global research node, not just a domestic engineering college.",
    ],
    features: [
      "Joint dual-degree and exchange programs with over 20 international universities",
      "Dedicated International Relations Office handling global student mobility",
      "Growing network of research MoUs across the US, Europe and Southeast Asia",
      "Alumni-funded scholarships specifically for students pursuing global research stints",
    ],
    mapQuery: "IIT Bombay International Relations Office, Powai, Mumbai",
  },
  {
    id: "connectivity", title: "Connectivity", eyebrow: "Block 03", tint: "green",
    bgImage: connectivityImg,
    videos: [
      { id: "VHReIMKzcQM", title: "Campus Tour | Access & Facilities" },
      { id: "VHReIMKzcQM", title: "Getting Around Campus" },
      { id: "VHReIMKzcQM", title: "Full Walkthrough" },
    ],
    stats: [
      { icon: <I.Train />, label: "Nearest rail", value: "Kanjurmarg ~3km" },
      { icon: <I.Map />, label: "Metro (Line 6)", value: "~500m, u/c" },
      { icon: <I.Pin />, label: "Main roads", value: "LBS Marg, JVLR" },
      { icon: <I.Building />, label: "To CST", value: "~45 min" },
    ],
    description: [
      "Despite sitting inside a forested, hilly pocket of Powai, the campus is well connected. Kanjurmarg station is roughly 3km away, and the under-construction Metro Line 6 will put a station within 500m of the main gate.",
      "LBS Marg and JVLR run close to the campus boundary, keeping travel to CST around 45 minutes outside peak traffic, with quick links to the airport and the Eastern Express Highway.",
    ],
    features: [
      "Free campus shuttle buses connecting hostels, departments and the main gate",
      "Dedicated cycle lanes across most internal roads — bicycles are the default mode of transport",
      "Autos and shared cabs stationed permanently at the main gate around the clock",
      "Mumbai airport reachable in roughly 35–40 minutes outside peak hours",
    ],
    mapQuery: "IIT Bombay Main Gate, Powai, Mumbai",
  },
  {
    id: "hostels", title: "Hostels", eyebrow: "Block 04", tint: "gold",
    bgImage: hostelsImg,
    videos: [
      { id: "dxcJ6ZBAd0A", title: "Hostel 1 Tour" },
      { id: "A0A4P9eoNco", title: "Inside a Premium Hostel" },
      { id: "z8WkhSkx5Eg", title: "New Crazy Hostels 2025" },
      { id: "Oetzt0U_OSY", title: "Hostel 9 Tour" },
    ],
    stats: [
      { icon: <I.Building />, label: "Total hostels", value: "18+" },
      { icon: <I.Users />, label: "Capacity", value: "5,000+" },
      { icon: <I.Sparkle />, label: "New investment", value: "₹200 Cr" },
      { icon: <I.Building />, label: "Newest", value: "Hostel 19" },
    ],
    description: [
      "Housing spans two eras: H1–H14 are classic institutional blocks — shared bathrooms, simple rooms, decades of hostel culture built into the corridors.",
      "H15–H19 are a ₹200 crore newer wave — single AC rooms, attached bathrooms and co-living lounges, built for a population that's grown past 5,000 residents.",
    ],
    features: [
      "Every hostel runs its own mess, gym corner, and common room with a TV/gaming setup",
      "Hostel-level cultural and sports councils compete year-round for the General Championship",
      "24/7 Wi-Fi and LAN connectivity across all hostel blocks",
      "In-hostel convenience stores and laundry services in most blocks",
    ],
    mapQuery: "Hostel 4, IIT Bombay, Powai, Mumbai",
  },
  {
    id: "library", title: "Library & Academics", eyebrow: "Block 05", tint: "blue",
    bgImage: libraryImg,
    videos: [
      { id: "VHReIMKzcQM", title: "Library & Academic Buildings" },
      { id: "VHReIMKzcQM", title: "Reading Halls" },
      { id: "VHReIMKzcQM", title: "Central Library Tour" },
    ],
    stats: [
      { icon: <I.Book />, label: "Books", value: "3+ lakh" },
      { icon: <I.Chip />, label: "E-journals", value: "50,000+" },
      { icon: <I.Sparkle />, label: "Research labs", value: "100+" },
      { icon: <I.Building />, label: "Departments", value: "15+" },
    ],
    description: [
      "The five-storey Central Library holds 3+ lakh books, full IEEE/ACM/Springer/Nature access, and stays open round-the-clock during exam season.",
      "100+ active research labs span 15+ departments — many open to undergraduates for real research work, not just coursework.",
    ],
    features: [
      "Silent reading floors separate from group-discussion and project zones",
      "Dedicated digital library terminals with access to global patent and paper databases",
      "Undergraduate research opportunities (UROP) let first-years join live faculty projects",
      "Department-level maker labs and workshops open for student-led prototyping",
    ],
    mapQuery: "Central Library, IIT Bombay, Powai, Mumbai",
  },
  {
    id: "sports", title: "Sports & Gymkhana", eyebrow: "Block 06", tint: "red",
    bgImage: sportsImg,
    videos: [
      { id: "1yQZ-WT4VGU", title: "Gymkhana Tour" },
      { id: "tntm7xQJ664", title: "New SAC Tour" },
      { id: "dG_DVz9b4j8", title: "Gymkhana Ground" },
      { id: "A8QjSteSF2w", title: "Full Fitness Experience" },
    ],
    stats: [
      { icon: <I.Trophy />, label: "Indoor complex", value: "SAC (AC)" },
      { icon: <I.Pool />, label: "Pools", value: "2 (Olympic 50m)" },
      { icon: <I.Sparkle />, label: "Floodlit courts", value: "10+, till 2 AM" },
      { icon: <I.Building />, label: "Inter-IIT rank", value: "Top 3" },
    ],
    description: [
      "The Gymkhana runs an AC indoor sports complex (SAC), two pools including a full Olympic 50m tank, and 10+ floodlit outdoor courts open until 2 AM.",
      "The General Championship — an inter-hostel competition across dozens of sports — is the real driving force, and a big reason IIT Bombay consistently finishes top 3 at Inter-IIT.",
    ],
    features: [
      "24/7 access gym with free weights, machines and dedicated CrossFit zone",
      "Annual sports fest draws teams from IITs and top colleges across India",
      "Professional coaches available for cricket, basketball, athletics and swimming",
      "Adventure sports club runs trekking, rock climbing and rafting expeditions off-campus",
    ],
    mapQuery: "IIT Bombay Gymkhana, Powai, Mumbai",
  },
];

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus · IIT Bombay — 545 acres of hills, lakes & forest in Powai" },
      { name: "description", content: "Explore IIT Bombay's Powai campus across six sections." },
    ],
  }),
  component: CampusPage,
});

/* ---------------- Ambient atmosphere ---------------- */

function AmbientAtmosphere() {
  const starsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = starsRef.current;
    if (!el || el.childElementCount > 0) return;
    const count = 70;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      const size = Math.random() * 2 + 0.5;
      dot.style.position = "absolute";
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderRadius = "50%";
      dot.style.background = "var(--grid-line)";
      dot.style.animation = `twinkle ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 4}s infinite`;
      el.appendChild(dot);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(120,20,20,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,40,90,0.14) 0%, transparent 60%), var(--ambient-base)" }} />
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div ref={starsRef} className="absolute inset-0" />
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 220px 60px var(--vignette)" }} />
      <style>{`@keyframes twinkle { 0%,100% { opacity: 0.15; } 50% { opacity: 0.9; } }`}</style>
    </div>
  );
}

/* ---------------- Ambient cursor-follow glow ---------------- */

function AmbientCursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", handleMove);
    let raf: number;
    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;
      if (glowRef.current) glowRef.current.style.transform = `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", handleMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div ref={glowRef} className="absolute h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.55) 0%, rgba(239,68,68,0.12) 45%, transparent 70%)" }} />
    </div>
  );
}

/* ---------------- Click particle burst ---------------- */

type Particle = { id: number; x: number; y: number; angle: number; distance: number; color: string };
const PARTICLE_COLORS = ["#ef4444", "#f97316", "#facc15", "#34d399", "#60a5fa"];

function ClickParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const counter = useRef(0);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const burst: Particle[] = Array.from({ length: 10 }).map(() => {
        counter.current += 1;
        return { id: counter.current, x: e.clientX, y: e.clientY, angle: Math.random() * Math.PI * 2, distance: 40 + Math.random() * 50, color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)] };
      });
      setParticles((prev) => [...prev, ...burst]);
      setTimeout(() => setParticles((prev) => prev.filter((p) => !burst.includes(p))), 700);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span key={p.id} className="absolute h-1.5 w-1.5 rounded-full animate-particle-burst"
          style={{ left: p.x, top: p.y, backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}`, ["--dx" as string]: `${Math.cos(p.angle) * p.distance}px`, ["--dy" as string]: `${Math.sin(p.angle) * p.distance}px` }} />
      ))}
      <style>{`
        @keyframes particle-burst { 0% { transform: translate(-50%,-50%) translate(0,0); opacity: 1; } 100% { transform: translate(-50%,-50%) translate(var(--dx), var(--dy)); opacity: 0; } }
        .animate-particle-burst { animation: particle-burst 0.65s ease-out forwards; }
      `}</style>
    </div>
  );
}

/* ---------------- Google Maps embed ---------------- */

function MapEmbed({ query, className = "" }: { query: string; className?: string }) {
  const keylessSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const src = GOOGLE_MAPS_API_KEY === "ADD_YOUR_API_KEY_HERE" ? keylessSrc : `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(query)}`;
  return (
    <div className={`rounded-xl overflow-hidden border border-white/15 relative ${className}`}>
      <iframe title={`Map — ${query}`} src={src} className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

/* ---------------- Video PiP ---------------- */

function VideoPiP({ videos }: { videos: VideoItem[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (videos.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % videos.length), 15000);
    return () => clearInterval(t);
  }, [videos.length]);
  const v = videos[index];
  return (
    <div className="h-full w-full rounded-xl overflow-hidden border border-white/20 bg-black shadow-[0_0_40px_-10px_rgba(0,0,0,0.7)] flex flex-col">
      <div className="relative w-full flex-1 min-h-0">
        <iframe
          key={v.id + index}
          src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${v.id}`}
          title={v.title}
          allow="autoplay; encrypted-media"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="px-3 py-1.5 text-xs text-white/70 truncate bg-black/60 shrink-0">{v.title}</div>
    </div>
  );
}

/* ---------------- Tint tokens ---------------- */

const TINT_TEXT: Record<Tint, string> = { red: "text-red-400", green: "text-emerald-400", blue: "text-blue-400", gold: "text-yellow-400" };
const TINT_BORDER: Record<Tint, string> = { red: "border-red-500/40", green: "border-emerald-500/40", blue: "border-blue-500/40", gold: "border-yellow-500/40" };
const TINT_BG: Record<Tint, string> = { red: "bg-red-500/10", green: "bg-emerald-500/10", blue: "bg-blue-500/10", gold: "bg-yellow-500/10" };
const TINT_GLOW: Record<Tint, string> = {
  red: "rgba(239,68,68,0.5)",
  green: "rgba(16,185,129,0.45)",
  blue: "rgba(59,130,246,0.45)",
  gold: "rgba(234,179,8,0.45)",
};

/* ---------------- 3D Coverflow (landing) ---------------- */

function Coverflow({ onOpen }: { onOpen: (id: string) => void }) {
  const [center, setCenter] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SECTIONS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCenter((c) => (c + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <div
      className="h-full w-full flex flex-col items-center pt-8 sm:pt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="text-center px-6 shrink-0">
        <div className="label-caps text-primary text-[11px] mb-4 tracking-[0.25em]">Explore the Campus</div>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">545 acres, six stories.</h1>
      </div>

      <div className="flex-1 w-full flex items-center justify-center">
        <div className="relative w-full h-[300px] sm:h-[380px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, rgba(239,68,68,0.55) 0%, transparent 70%)" }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {SECTIONS.map((s, i) => {
              let offset = i - center;
              if (offset > n / 2) offset -= n;
              if (offset < -n / 2) offset += n;
              const abs = Math.abs(offset);
              const isCenter = offset === 0;
              const x = offset * 200;
              const scale = isCenter ? 1.15 : abs === 1 ? 0.9 : 0.72;
              const opacity = abs > 2 ? 0 : 1 - abs * 0.18;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpen(s.id);
                  }}
                  aria-label={`Open ${s.title}`}
                  className="absolute w-[210px] sm:w-[260px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/60"
                  style={{
                    transform: `translateX(${x}px) scale(${scale})`,
                    opacity,
                    zIndex: isCenter ? 50 : 40 - abs,
                    borderColor: isCenter ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.12)",
                    boxShadow: isCenter ? "0 20px 60px -15px rgba(239,68,68,0.5)" : "0 10px 30px -10px rgba(0,0,0,0.5)",
                    pointerEvents: abs > 2 ? "none" : "auto",
                  }}
                >
                  <img src={s.bgImage} alt={s.title} className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-110 saturate-75 pointer-events-none" />
                  <div className="absolute inset-0 bg-blue-950/25 mix-blend-overlay pointer-events-none" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none ${isCenter ? "" : "opacity-80"}`} />
                  {isCenter && <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl animate-pulse-dot pointer-events-none" />}
                  <div className="absolute inset-x-0 bottom-0 p-4 pointer-events-none">
                    <div className="label-caps text-[9px] text-white/60">{s.eyebrow}</div>
                    <div className="text-white font-semibold text-sm sm:text-base leading-tight mt-1">{s.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Single-viewport detail view ---------------- */

function SectionDetail({ section, onBack }: { section: SectionConfig; onBack: () => void }) {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      {/* Hero banner — image only here */}
      <div className="relative h-[22%] w-full shrink-0 overflow-hidden">
        <img src={section.bgImage} alt={section.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6">
          <button onClick={onBack} className="self-start inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/30 backdrop-blur px-4 py-2 text-sm font-medium text-white/90 hover:border-primary/60 transition-colors">
            <I.Back /> Back
          </button>
          <div>
            <div className={`label-caps text-[11px] mb-1 ${TINT_TEXT[section.tint]}`}>{section.eyebrow}</div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.05]">{section.title}</h2>
          </div>
        </div>
      </div>

      {/* Body — pure black + tint glow, filled top to bottom, no empty space */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 15% 10%, ${TINT_GLOW[section.tint]}22 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 90% 90%, ${TINT_GLOW[section.tint]}18 0%, transparent 55%)`,
          }}
        />

        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 p-4 sm:p-6 overflow-hidden">
          {/* Left: description + feature bullets + stats, filling all space */}
          <div className="flex flex-col justify-between min-h-0 gap-3">
            <div className="flex flex-col gap-2.5">
              <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed">{section.description[0]}</p>
              <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed">{section.description[1]}</p>
            </div>

            <div className={`rounded-xl border ${TINT_BORDER[section.tint]} ${TINT_BG[section.tint]} backdrop-blur-sm p-3 sm:p-4 flex-1 min-h-0`}>
              <div className={`label-caps text-[10px] mb-2 ${TINT_TEXT[section.tint]}`}>Good to know</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {section.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/80 leading-snug">
                    <span className={`shrink-0 mt-0.5 ${TINT_TEXT[section.tint]}`}><I.Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {section.stats.map((s) => (
                <div key={s.label} className={`rounded-xl border ${TINT_BORDER[section.tint]} ${TINT_BG[section.tint]} backdrop-blur-sm px-3 py-2 flex items-center gap-2.5`}>
                  <div className={`shrink-0 ${TINT_TEXT[section.tint]}`}>{s.icon}</div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wide text-white/50 truncate">{s.label}</div>
                    <div className="text-sm font-semibold text-white truncate">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: video on top, map below — both present, filling full height */}
          <div className="flex flex-col gap-3 min-h-0">
            <div className="flex-1 min-h-0">
              <VideoPiP videos={section.videos} />
            </div>
            <div className="flex-1 min-h-0">
              <MapEmbed query={section.mapQuery} className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */

function CampusPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeSection = SECTIONS.find((s) => s.id === selected) ?? null;

  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground relative flex flex-col">
      <AmbientAtmosphere />
      <AmbientCursorGlow />
      <ClickParticles />
      <SectionHeader active="Campus" />
      <main className="flex-1 min-h-0 relative z-10">
        <div className="h-full w-full">
          {activeSection ? (
            <SectionDetail section={activeSection} onBack={() => setSelected(null)} />
          ) : (
            <Coverflow onOpen={setSelected} />
          )}
        </div>
      </main>
    </div>
  );
}