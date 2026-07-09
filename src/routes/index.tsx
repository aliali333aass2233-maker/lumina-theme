// import { createFileRoute, Link } from "@tanstack/react-router";
// import { useEffect, useMemo, useRef, useState } from "react";
// import powaiAsset from "@/assets/image_e3949b3f (1).png";
// import { RotatingImage } from "@/components/rotating-image";
// import { NotificationToast } from "@/components/notification-toast";
// import { CssGlobe } from "@/components/effects/CssGlobe";
// import { InteractiveStartupGlobe } from "@/components/InteractiveStartupGlobe";
// import { ThemeToggle } from "@/components/ThemeToggle";

// function StartupsGlobe() {
//   return <InteractiveStartupGlobe size={300} />;
// }
// import { Vortex } from "@/components/effects/Vortex";
// import { campusImageSets } from "@/data/campus-images";
// import {
//   ALUMNI, avatarUrl, INSTITUTE_FEATURES, PLACEMENTS, STARTUPS, UPDATE_SETS,
// } from "@/data/content";
// import { heroLiveRows, closingTrend, TREND_BRANCHES } from "@/data/josaa";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "IIT Bombay · JoSAA Ranks, Placements & Alumni — JEEINDIA" },
//       { name: "description", content: "The complete intelligence system for IIT Bombay: JoSAA cutoffs 2016–2025, placement outcomes, campus life, alumni network." },
//       { property: "og:title", content: "IIT Bombay · JoSAA Ranks, Placements & Alumni" },
//       { property: "og:description", content: "Ten years of JoSAA cutoffs, real placement data, alumni network & campus insights — all in one place." },
//       { property: "og:image", content: powaiAsset },
//     ],
//   }),
//   component: Landing,
// });

// const NAV_ITEMS = [
//   "Ranks", "Campus", "Fees & Scholarships", "Trends",
//   "Placements", "Top Recruiters", "Connect", "Startups",
// ];

// function useReveal() {
//   useEffect(() => {
//     const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
//     const io = new IntersectionObserver((entries) => {
//       entries.forEach((e) => {
//         if (e.isIntersecting) {
//           e.target.classList.add("animate-fade-up");
//           io.unobserve(e.target);
//         }
//       });
//     }, { threshold: 0.15 });
//     els.forEach((el) => { el.style.opacity = "0"; io.observe(el); });
//     return () => io.disconnect();
//   }, []);
// }

// function useCycle<T>(items: T[], delay: number) {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     if (items.length <= 1) return;
//     const t = setInterval(() => setI((v) => (v + 1) % items.length), delay);
//     return () => clearInterval(t);
//   }, [items, delay]);
//   return { i, item: items[i] };
// }

// function Landing() {
//   useReveal();
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <TopNav />
//       <main>
//         <Hero />
//         <Recruiters />
//         <Features />
//         <SectionRanks />
//         <SectionTrends />
//         <SectionPlacements />
//         <SectionCampus />
//         <SectionAlumni />
//         <SectionStartups />
//         <LiveUpdates />
//         <FinalCTA />
//       </main>
//       <Footer />
//       <NotificationToast />
//     </div>
//   );
// }

// function TopNav() {
//   return (
//     <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
//       <div className="mx-auto max-w-7xl px-6 h-14 flex items-center gap-6">
//         <a href="#" className="flex items-center gap-2 shrink-0">
//           <LogoMark />
//           <span className="text-sm font-semibold tracking-tight">IIT Bombay</span>
//         </a>
//         <nav className="ml-auto min-w-0 flex-1">
//           <ul className="flex items-center gap-6 overflow-x-auto no-scrollbar text-sm text-muted-foreground justify-end">
//             {NAV_ITEMS.map((n) => {
//               if (n === "Ranks") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/ranks" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Campus") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/campus" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Fees & Scholarships") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/fees" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Trends") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/trends" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Placements") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/placements" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Top Recruiters") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/top-recruiters" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Connect") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/alumni" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Startups") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/startups" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               return (
//                 <li key={n} className="shrink-0">
//                   <a href={`#${n.toLowerCase().replace(/\W+/g, "-")}`} className="hover:text-foreground transition-colors whitespace-nowrap">{n}</a>
//                 </li>
//               );
//             })}
//             <li className="shrink-0">
//               <Link to="/ranks" className="text-primary hover:text-primary/80 transition-colors whitespace-nowrap font-medium">
//                 Ranks Explorer →
//               </Link>
//             </li>
//             <li className="shrink-0">
//               <ThemeToggle />
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// function LogoMark() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-foreground">
//       <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" stroke="currentColor" strokeWidth="1.5" />
//       <rect x="14" y="14" width="6" height="6" fill="oklch(0.48 0.21 18)" />
//     </svg>
//   );
// }

// /* ---------- Rotating stat card (unchanged size/typography) ---------- */
// function RotatingStatCard({ label, values, active }: { label: string; values: string[]; active?: boolean }) {
//   const { i } = useCycle(values, 3200);
//   return (
//     <div className={`glow-card rounded-xl p-6 min-h-[140px] relative overflow-hidden ${active ? "red-glow" : ""}`}>
//       <div className="label-caps">{label}</div>
//       <div className="mt-3 relative h-11">
//         {values.map((v, idx) => (
//           <div
//             key={v}
//             className="absolute inset-0 text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums transition-all duration-700"
//             style={{ opacity: idx === i ? 1 : 0, transform: `translateY(${(idx - i) * 12}px)` }}
//           >
//             {v}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Hero() {
//   const startups = useMemo(
//     () => STARTUPS.slice(0, 6).map((s) => `${s.name} · ${s.founder}`),
//     []
//   );
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <img src={powaiAsset} alt="Powai Lake and IIT Bombay aerial view" className="h-full w-full object-cover opacity-[0.14]" />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_10%,var(--background)_80%)]" />
//         {/* Rotating globe backdrop — alumni around the world */}
//         <div className="absolute right-[-120px] top-16 opacity-70 pointer-events-none hidden md:block">
//           <CssGlobe
//             size={640}
//             autoRotateSpeed={0.1}
//             markers={[
//               { lat: 19.076, lng: 72.877, label: "Mumbai" },
//               { lat: 12.972, lng: 77.594, label: "Bengaluru" },
//               { lat: 28.613, lng: 77.209, label: "Delhi" },
//               { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
//               { lat: 40.7128, lng: -74.006, label: "New York" },
//               { lat: 51.5074, lng: -0.1278, label: "London" },
//               { lat: 1.3521, lng: 103.8198, label: "Singapore" },
//               { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
//               { lat: 25.2048, lng: 55.2708, label: "Dubai" },
//               { lat: -33.8688, lng: 151.2093, label: "Sydney" },
//             ]}
//           />
//         </div>
//       </div>


//       <div className="mx-auto max-w-6xl px-6 w-full">
//         <div className="animate-fade-up">
//           <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
//             <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
//             NIRF Rank #3 — Engineering
//           </span>
//         </div>
//         <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.03] animate-fade-up max-w-4xl" style={{ animationDelay: "0.1s" }}>
//           The complete intelligence system<br />for <span className="text-primary">IIT Bombay</span> admissions.
//         </h1>
//         <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
//           Ranks, placements, fees, and alumni outcomes — all in one place. Founded 1958 · Powai, Mumbai.
//         </p>

//         <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
//           <RotatingStatCard
//             label="Placement Package"
//             active
//             values={[
//               "Median UG4 · ₹19.61L",
//               "Median UG5 · ₹19.25L",
//               "Median PG2 · ₹17.30L",
//               "Avg UG · ₹23.4L",
//               "Highest · ₹1.72 Cr",
//             ]}
//           />
//           <NirfCard />
//           <RotatingStatCard label="Alumni Startups" values={startups} />
//         </div>

//         {/* Live JoSAA preview mock */}
//         <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
//           <PreviewRanksTable />
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
//         <span className="label-caps text-[10px]">Scroll</span>
//         <svg className="animate-bounce-down" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//           <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>
//     </section>
//   );
// }

// function NirfCard() {
//   const { i } = useCycle(INSTITUTE_FEATURES, 3200);
//   return (
//     <div className="glow-card rounded-xl p-6 min-h-[140px] relative overflow-hidden">
//       <div className="label-caps">NIRF Rank & Features</div>
//       <div className="mt-3 relative h-11">
//         {INSTITUTE_FEATURES.map((v, idx) => (
//           <div
//             key={v}
//             className="absolute inset-0 text-lg sm:text-xl font-semibold tracking-tight leading-snug transition-all duration-700"
//             style={{ opacity: idx === i ? 1 : 0, transform: `translateY(${(idx - i) * 12}px)` }}
//           >
//             {v}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------- Live JoSAA cycling table (branches rotate through) ---------- */
// function PreviewRanksTable({ variant = "hero" }: { variant?: "hero" | "compact" }) {
//   const all = useMemo(() => heroLiveRows(), []);
//   const [start, setStart] = useState(0);
//   const window = variant === "hero" ? 4 : 4;

//   useEffect(() => {
//     if (all.length <= window) return;
//     const t = setInterval(() => setStart((s) => (s + 1) % all.length), 3000);
//     return () => clearInterval(t);
//   }, [all.length, window]);

//   const rows = useMemo(() => {
//     if (all.length === 0) return [];
//     return Array.from({ length: window }, (_, k) => all[(start + k) % all.length]);
//   }, [all, start, window]);

//   return (
//     <div className="glow-card rounded-2xl overflow-hidden relative bg-background">
//       <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-foreground/[0.02]">
//         <div className="flex items-center gap-2">
//           <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
//           <span className="label-caps text-primary">Live · JoSAA 2025</span>
//         </div>
//         <div className="text-xs text-muted-foreground">CRL · Gender-Neutral · cycling every 3s</div>
//       </div>
//       <div className="p-5">
//         <div className="grid grid-cols-[1fr_100px_100px] gap-4 text-xs label-caps pb-3 border-b border-border">
//           <span>Branch</span><span className="text-right">Opening</span><span className="text-right">Closing</span>
//         </div>
//         {rows.map((r, i) => (
//           <div
//             key={`${start}-${i}`}
//             className="grid grid-cols-[1fr_100px_100px] gap-4 py-3 text-sm border-b border-border/50 animate-fade-up"
//             style={{ animationDelay: `${i * 60}ms` }}
//           >
//             <span className="text-foreground/90 truncate">{r.branch}</span>
//             <span className="text-right tabular-nums text-muted-foreground">{r.open.toLocaleString()}</span>
//             <span className="text-right tabular-nums text-primary">{r.close.toLocaleString()}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------- Recruiters ---------- */
// function Recruiters() {
//   const names = ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Intel", "Qualcomm", "Tata Group", "McKinsey"];
//   return (
//     <section className="py-16 border-t border-border">
//       <div className="mx-auto max-w-6xl px-6">
//         <div data-reveal className="label-caps text-center">Recruited by</div>
//         <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
//           {names.map((n) => (
//             <span key={n} className="text-lg sm:text-xl font-semibold text-muted-foreground/70 tracking-tight hover:text-foreground transition-colors">
//               {n}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- Section shell ---------- */
// function SectionShell({
//   id, num, kicker, title, subtitle, link, linkTo, children, reverse,
// }: {
//   id: string; num: string; kicker: string; title: string; subtitle: string; link: string;
//   linkTo?: string; children: React.ReactNode; reverse?: boolean;
// }) {
//   return (
//     <section id={id} className="py-32 border-t border-border">
//       <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
//         <div data-reveal className={reverse ? "md:order-2" : ""}>
//           <div className="label-caps text-primary">{num} · {kicker}</div>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">{title}</h2>
//           <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">{subtitle}</p>
//           {linkTo ? (
//             <Link to={linkTo} className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
//               {link} <span>→</span>
//             </Link>
//           ) : (
//             <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
//               {link} <span>→</span>
//             </a>
//           )}
//         </div>
//         <div data-reveal className={reverse ? "md:order-1" : ""}>{children}</div>
//       </div>
//     </section>
//   );
// }

// function SectionRanks() {
//   return (
//     <SectionShell
//       id="ranks" num="1.0" kicker="Ranks"
//       title="Know exactly where you stand."
//       subtitle="Branch-wise opening and closing ranks for IIT Bombay, sourced directly from JoSAA (2016–2025). Click through for the full explorer."
//       link="Explore full rankings"
//       linkTo="/ranks"
//     >
//       <PreviewRanksTable variant="compact" />
//     </SectionShell>
//   );
// }

// /* ---------- Closing-rank trend graph (cycles through branches) ---------- */
// function SectionTrends() {
//   const branches = TREND_BRANCHES;
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     if (branches.length <= 1) return;
//     const t = setInterval(() => setI((v) => (v + 1) % branches.length), 10000);
//     return () => clearInterval(t);
//   }, [branches]);
//   const branch = branches[i] ?? "";
//   const series = useMemo(() => closingTrend(branch), [branch]);

//   return (
//     <SectionShell
//       id="trends" num="2.0" kicker="Trends" reverse
//       title="Ten years of rank history, at a glance."
//       subtitle="Cycle through every IITB branch — closing rank (CRL · Gender-Neutral) plotted over the last decade."
//       link="View all trend graphs"
//       linkTo="/trends"
//     >
//       <TrendChart branch={branch} series={series} total={branches.length} idx={i} />
//     </SectionShell>
//   );
// }

// function TrendChart({
//   branch, series, total, idx,
// }: {
//   branch: string;
//   series: { year: number; close: number }[];
//   total: number;
//   idx: number;
// }) {
//   const w = 500, h = 220, pad = 24;
//   if (series.length === 0) {
//     return <div className="glow-card rounded-2xl p-6 h-64 grid place-items-center text-muted-foreground text-sm">Loading branch trends…</div>;
//   }
//   const maxV = Math.max(...series.map((s) => s.close)) * 1.08;
//   const step = (w - pad * 2) / Math.max(series.length - 1, 1);
//   const y = (v: number) => h - pad - (v / maxV) * (h - pad * 2);
//   const path = series.map((s, k) => `${k === 0 ? "M" : "L"} ${pad + k * step} ${y(s.close)}`).join(" ");
//   return (
//     <div className="glow-card rounded-2xl p-6 relative overflow-hidden">
//       <div className="flex items-center justify-between mb-4">
//         <div className="label-caps text-primary">{branch} · Closing rank</div>
//         <div className="text-xs text-muted-foreground">
//           {series[0].year} → {series[series.length - 1].year}
//         </div>
//       </div>
//       <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-56" key={branch}>
//         <defs>
//           <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0" stopColor="oklch(0.48 0.21 18)" stopOpacity="0.4" />
//             <stop offset="1" stopColor="oklch(0.48 0.21 18)" stopOpacity="0" />
//           </linearGradient>
//         </defs>
//         {[0, 1, 2, 3].map((k) => (
//           <line key={k} x1={pad} x2={w - pad} y1={pad + k * ((h - pad * 2) / 3)} y2={pad + k * ((h - pad * 2) / 3)} stroke="oklch(1 0 0 / 0.06)" />
//         ))}
//         <path d={`${path} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`} fill="url(#tg)" className="animate-fade-up" />
//         <path d={path} fill="none" stroke="oklch(0.55 0.22 20)" strokeWidth="2" style={{ filter: "drop-shadow(0 0 6px oklch(0.55 0.22 20 / 0.6))" }} className="animate-fade-up" />
//         {series.map((s, k) => (
//           <g key={k}>
//             <circle cx={pad + k * step} cy={y(s.close)} r="3" fill="oklch(0.55 0.22 20)" />
//             <text x={pad + k * step} y={h - 4} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9 }}>{s.year}</text>
//           </g>
//         ))}
//       </svg>
//     </div>
//   );
// }

// /* ---------- Placements section: cycles branches through the same table shape ---------- */
// function SectionPlacements() {
//   const [start, setStart] = useState(0);
//   const window = 4;
//   useEffect(() => {
//     const t = setInterval(() => setStart((s) => (s + 1) % PLACEMENTS.length), 3500);
//     return () => clearInterval(t);
//   }, []);
//   const rows = Array.from({ length: window }, (_, k) => PLACEMENTS[(start + k) % PLACEMENTS.length]);

//   return (
//     <SectionShell
//       id="placements" num="3.0" kicker="Placements"
//       title="Real outcomes, branch by branch."
//       subtitle="Placement rate, median, average and highest package — cycling through every core branch from the 2024–25 report."
//       link="See full placement data"
//     >
//       <div className="glow-card rounded-2xl overflow-hidden bg-background">
//         <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-foreground/[0.02]">
//           <div className="label-caps">Placement Report · 2024–25</div>
//           <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
//         </div>
//         <div className="p-5">
//           <div className="grid grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr_0.9fr] gap-3 text-xs label-caps pb-3 border-b border-border">
//             <span>Branch</span>
//             <span className="text-right">Rate</span>
//             <span className="text-right">Median</span>
//             <span className="text-right">Average</span>
//             <span className="text-right">Highest</span>
//           </div>
//           {rows.map((r, i) => (
//             <div
//               key={`${start}-${i}`}
//               className="grid grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr_0.9fr] gap-3 py-3.5 text-sm border-b border-border/50 animate-fade-up"
//               style={{ animationDelay: `${i * 60}ms` }}
//             >
//               <span className="text-foreground/90 truncate">{r.branch}</span>
//               <span className="text-right tabular-nums text-muted-foreground">{r.rate}</span>
//               <span className="text-right tabular-nums text-muted-foreground">{r.median}</span>
//               <span className="text-right tabular-nums text-muted-foreground">{r.avg}</span>
//               <span className="text-right tabular-nums text-primary">{r.highest}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </SectionShell>
//   );
// }

// /* ---------- Campus: three rotating image slots ---------- */
// function SectionCampus() {
//   return (
//     <section id="campus" className="py-32 border-t border-border">
//       <div className="mx-auto max-w-6xl px-6">
//         <div data-reveal className="max-w-2xl">
//           <div className="label-caps text-primary">4.0 · Campus</div>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">550 acres beside Powai Lake.</h2>
//           <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
//             Hostels, labs, and green corridors — explore campus life at one of India's most iconic technical campuses.
//           </p>
//         </div>
//         <div className="mt-12 grid md:grid-cols-3 gap-4">
//           <div data-reveal className="md:col-span-2 glow-card rounded-2xl overflow-hidden">
//             <RotatingImage
//               items={campusImageSets[0]}
//               className="w-full h-[420px]"
//               imgClassName="object-cover"
//               interval={5000}
//             />
//           </div>
//           <div data-reveal className="grid grid-rows-2 gap-4">
//             <div className="glow-card rounded-2xl overflow-hidden">
//               <RotatingImage items={campusImageSets[1]} className="w-full h-full min-h-[200px]" imgClassName="object-cover" interval={5500} />
//             </div>
//             <div className="glow-card rounded-2xl overflow-hidden">
//               <RotatingImage items={campusImageSets[2]} className="w-full h-full min-h-[200px]" imgClassName="object-cover" interval={6000} />
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <Link to="/campus" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">Explore campus <span>→</span></Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- Connect (avatars + rich bios + internal glow) ---------- */
// function SectionAlumni() {
//   return (
//     <SectionShell
//       id="alumni-connect" num="5.0" kicker="Connect" reverse
//       title="Talk to someone who's been there."
//       subtitle="Branch-wise alumni network — connect and ask real questions."
//       link="Browse alumni by branch"
//     >
//       <div className="space-y-3">
//         {ALUMNI.map((a) => (
//           <div
//             key={a.name}
//             className={`glow-card ${a.glow} rounded-xl p-4 flex items-start gap-4 bg-background`}
//           >
//             <img
//               src={avatarUrl(a.seed)}
//               alt={`${a.name} avatar`}
//               className="h-12 w-12 rounded-full border border-border shrink-0 bg-muted"
//             />
//             <div className="flex-1 min-w-0">
//               <div className="flex items-center justify-between gap-2">
//                 <div className="text-sm font-semibold">{a.name}</div>
//                 <span className="text-[10px] label-caps text-primary shrink-0">{a.package}</span>
//               </div>
//               <div className="text-xs text-muted-foreground mt-0.5">{a.branch} · {a.role}</div>
//               <p className="text-xs text-foreground/80 mt-2 leading-relaxed">{a.bio}</p>
//               <div className="mt-2 flex flex-wrap gap-1.5">
//                 {a.interests.map((t) => (
//                   <span key={t} className="text-[10px] rounded-full border border-border px-2 py-0.5 text-muted-foreground">{t}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </SectionShell>
//   );
// }

// /* ---------- Alumni Startups (expanded to 10, marquee-ish grid) ---------- */
// function SectionStartups() {
//   return (
//     <section id="startups" className="py-24 border-t border-border">
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
//           <div data-reveal className="max-w-2xl flex-1">
//             <div className="label-caps text-primary">6.0 · Startups</div>
//             <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
//               2,306 companies. 18 unicorns. One campus.
//             </h2>
//             <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
//               A snapshot of IITB alumni-founded startups shaping India's tech landscape.
//             </p>
//           </div>
//           <div className="shrink-0 flex items-center justify-center w-full lg:w-auto">
//             <StartupsGlobe />
//           </div>
//         </div>
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
//           {STARTUPS.map((s, i) => (
//             <div
//               key={s.name}
//               data-reveal
//               style={{ transitionDelay: `${i * 40}ms` }}
//               className="glow-card rounded-xl p-4 bg-background"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="text-sm font-semibold">{s.name}</div>
//                 <span className="text-[10px] label-caps text-primary">{s.valuation}</span>
//               </div>
//               <div className="mt-1 text-xs text-muted-foreground">{s.founder}</div>
//               <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
//                 <span>{s.branch}</span>
//                 <span>{s.sector}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- Latest Updates: 4 boxes, each cycles 4 messages ---------- */
// function LiveUpdates() {
//   return (
//     <section className="py-24 border-t border-border">
//       <div className="mx-auto max-w-6xl px-6">
//         <div data-reveal className="flex items-center gap-3">
//           <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
//           <span className="label-caps text-primary">Latest Updates</span>
//         </div>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {UPDATE_SETS.map((set, i) => (
//             <UpdateBox key={i} set={set} idx={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const UPDATE_GLOWS = ["inner-glow-crimson", "inner-glow-blue", "inner-glow-green", "inner-glow-yellow"] as const;

// function UpdateBox({ set, idx }: { set: { date: string; text: string }[]; idx: number }) {
//   const { i } = useCycle(set, 4200);
//   const glow = UPDATE_GLOWS[idx % UPDATE_GLOWS.length];
//   return (
//     <div
//       data-reveal
//       style={{ transitionDelay: `${idx * 60}ms` }}
//       className={`glow-card ${glow} rounded-xl p-5 bg-background relative overflow-hidden min-h-[130px]`}
//     >
//       {set.map((it, k) => (
//         <div
//           key={it.text}
//           className="absolute inset-0 p-5 transition-opacity duration-700"
//           style={{ opacity: k === i ? 1 : 0 }}
//         >
//           <div className="text-xs text-muted-foreground">{it.date}</div>
//           <div className="mt-3 text-sm text-foreground/90 leading-snug">{it.text}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function FinalCTA() {
//   return (
//     <section className="py-32 border-t border-border relative overflow-hidden">
//       <div aria-hidden className="absolute inset-0 opacity-70 pointer-events-none">
//         <Vortex particleCount={600} baseHue={280} hueRange={120} />
//       </div>
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.48_0.21_18/0.16),transparent_60%)] pointer-events-none" />
//       <div data-reveal className="mx-auto max-w-3xl px-6 text-center relative">
//         <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">Join the Network.</h2>
//         <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
//           Every number, every branch, every year — verified and updated.
//         </p>
//         <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
//           <Link to="/ranks" className="inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">View Full Report</Link>
//           <Link to="/alumni" className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors">Meet Alumni</Link>
//         </div>
//       </div>
//     </section>
//   );
// }


// /* ---------- Features: rotating figures ---------- */
// function Features() {
//   const items = [
//     { fig: "FIG 0.1", title: "Engineering Excellence", body: "NIRF Rank #3 in Engineering — 17 departments spanning core, computing, and emerging technologies.", icon: <IcoInterlock />, anim: "animate-spin-y" },
//     { fig: "FIG 0.2", title: "World-Class Management", body: "SJMSOM — 100% MBA placement, ₹25.82L average CTC, ranked among India's top B-schools.", icon: <IcoStack />, anim: "animate-float-tilt" },
//     { fig: "FIG 0.3", title: "Research & Innovation", body: "2,306 alumni-founded companies, $37.2B in funding raised, 18 unicorns — research that becomes real-world impact.", icon: <IcoNodes />, anim: "animate-spin-y" },
//   ];
//   return (
//     <section className="relative py-32 border-t border-border">
//       <div className="mx-auto max-w-6xl px-6">
//         <div data-reveal className="max-w-2xl">
//           <div className="label-caps text-primary">The Institute</div>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
//             A campus engineered for depth, breadth, and ambition.
//           </h2>
//         </div>

//         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
//           {items.map((it, i) => (
//             <div key={it.fig} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="bg-background p-8 flex flex-col gap-6 min-h-[380px]">
//               <div className="label-caps text-primary/70">{it.fig}</div>
//               <div className="flex-1 grid place-items-center" style={{ perspective: "800px" }}>
//                 <div className={it.anim}>{it.icon}</div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
//                 <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* --- Isometric wireframe icons (SVG) --- */
// const strokeW = 1;
// const IcoBase = ({ children }: { children: React.ReactNode }) => (
//   <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round">
//     <defs>
//       <linearGradient id="edgeGlow" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor="oklch(0.55 0.22 20)" stopOpacity="1" />
//         <stop offset="1" stopColor="oklch(0.55 0.22 20)" stopOpacity="0" />
//       </linearGradient>
//       <radialGradient id="glowFill" cx="0.5" cy="0.5" r="0.6">
//         <stop offset="0" stopColor="oklch(0.48 0.21 18)" stopOpacity="0.28" />
//         <stop offset="1" stopColor="oklch(0.48 0.21 18)" stopOpacity="0" />
//       </radialGradient>
//     </defs>
//     <circle cx="100" cy="110" r="80" fill="url(#glowFill)" stroke="none" />
//     <g className="text-foreground/60" style={{ filter: "drop-shadow(0 0 4px oklch(0.55 0.22 20 / 0.4))" }}>{children}</g>
//   </svg>
// );
// function IcoInterlock() {
//   return (
//     <IcoBase>
//       <path d="M100 40 L160 75 L160 145 L100 180 L40 145 L40 75 Z" />
//       <path d="M100 40 L100 110 M40 75 L100 110 M160 75 L100 110" />
//       <path d="M70 92 L130 92 L130 128 L70 128 Z" stroke="url(#edgeGlow)" strokeWidth="1.5" />
//       <path d="M100 110 L100 145" />
//     </IcoBase>
//   );
// }
// function IcoStack() {
//   return (
//     <IcoBase>
//       <path d="M100 40 L160 70 L100 100 L40 70 Z" />
//       <path d="M100 80 L160 110 L100 140 L40 110 Z" />
//       <path d="M100 120 L160 150 L100 180 L40 150 Z" stroke="url(#edgeGlow)" strokeWidth="1.5" />
//       <path d="M40 70 L40 110 M160 70 L160 110 M40 110 L40 150 M160 110 L160 150 M100 100 L100 140" />
//     </IcoBase>
//   );
// }
// function IcoNodes() {
//   return (
//     <IcoBase>
//       <path d="M100 40 L160 90 L130 160 L70 160 L40 90 Z" />
//       <circle cx="100" cy="40" r="4" />
//       <circle cx="160" cy="90" r="4" />
//       <circle cx="130" cy="160" r="4" />
//       <circle cx="70" cy="160" r="4" />
//       <circle cx="40" cy="90" r="4" />
//       <circle cx="100" cy="105" r="5" stroke="url(#edgeGlow)" strokeWidth="1.5" />
//       <path d="M100 40 L100 105 M160 90 L100 105 M40 90 L100 105 M70 160 L100 105 M130 160 L100 105" stroke="url(#edgeGlow)" />
//     </IcoBase>
//   );
// }

// /* ---------- Footer ---------- */
// function Footer() {
//   return (
//     <footer className="border-t border-border pt-20 pb-28 mt-20">
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//           <div>
//             <div className="flex items-center gap-2">
//               <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">JI</span>
//               <span className="text-sm font-semibold">Jai India · Premium Product</span>
//             </div>
//             <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
//               JEE / JoSAA college intelligence platform.
//             </p>
//           </div>
//           <FooterCol title="Sections" items={["Ranks", "Placements", "Fees", "Connect"]} />
//           <FooterCol title="Help" items={["Contact Us", "Report Incorrect Data", "FAQ"]} />
//           <FooterCol title="Legal" items={["Privacy Policy", "Terms of Use", "Data Disclaimer"]} />
//         </div>

//         <div className="mt-16 border-t border-border pt-8">
//           <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-4xl">
//             Data on this page is compiled from NIRF, JoSAA, institute official documents, and publicly available sources. We make reasonable efforts to keep this accurate but do not guarantee completeness or real-time accuracy — please verify independently via official institute channels before making decisions. This platform is not affiliated with or endorsed by IIT Bombay, and is intended purely for informational aggregation, not to defame or misrepresent the institute. We plan to incorporate verified student/alumni-submitted data in future updates.
//           </p>
//         </div>

//         <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
//           <div>© 2026 Jai India Premium Product · Not affiliated with IIT Bombay.</div>
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-foreground">Privacy</a>
//             <a href="#" className="hover:text-foreground">Terms</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// const FooterCol = ({ title, items }: { title: string; items: string[] }) => (
//   <div>
//     <div className="label-caps">{title}</div>
//     <ul className="mt-4 space-y-2 text-sm">
//       {items.map((i) => (
//         <li key={i}><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>
//       ))}
//     </ul>
//   </div>
// );



import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import powaiAsset from "@/assets/image_e3949b3f (1).png";
import { RotatingImage } from "@/components/rotating-image";
import { NotificationToast } from "@/components/notification-toast";
import { CssGlobe } from "@/components/effects/CssGlobe";
import { InteractiveStartupGlobe } from "@/components/InteractiveStartupGlobe";
import { ThemeToggle } from "@/components/ThemeToggle";

function StartupsGlobe() {
  return <InteractiveStartupGlobe size={300} />;
}
import { Vortex } from "@/components/effects/Vortex";
import { campusImageSets } from "@/data/campus-images";
import {
  ALUMNI, avatarUrl, INSTITUTE_FEATURES, PLACEMENTS, STARTUPS, UPDATE_SETS,
} from "@/data/content";
import { heroLiveRows, closingTrend, TREND_BRANCHES } from "@/data/josaa";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IIT Bombay · JoSAA Ranks, Placements & Alumni — JEEINDIA" },
      { name: "description", content: "The complete intelligence system for IIT Bombay: JoSAA cutoffs 2016–2025, placement outcomes, campus life, alumni network." },
      { property: "og:title", content: "IIT Bombay · JoSAA Ranks, Placements & Alumni" },
      { property: "og:description", content: "Ten years of JoSAA cutoffs, real placement data, alumni network & campus insights — all in one place." },
      { property: "og:image", content: powaiAsset },
    ],
  }),
  component: Landing,
});

const NAV_ITEMS = [
  "Ranks", "Campus", "Fees & Scholarships", "Trends",
  "Placements", "Top Recruiters", "Connect", "Startups",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("animate-fade-up");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => { el.style.opacity = "0"; io.observe(el); });
    return () => io.disconnect();
  }, []);
}

function useCycle<T>(items: T[], delay: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), delay);
    return () => clearInterval(t);
  }, [items, delay]);
  return { i, item: items[i] };
}

function Landing() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <TopNav /> */}
      <SectionHeader />      
      <main>
        <Hero />
        <Recruiters />
        <Features />
        <SectionRanks />
        <SectionTrends />
        <SectionPlacements />
        <SectionCampus />
        <SectionAlumni />
        <SectionStartups />
        <LiveUpdates />
        <FinalCTA />
      </main>
      <Footer />
      <NotificationToast />
    </div>
  );
}

// function TopNav() {
//   return (
//     <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
//       <div className="mx-auto max-w-7xl px-6 h-14 flex items-center gap-6">
//         <a href="#" className="flex items-center gap-2 shrink-0">
//           <LogoMark />
//           <span className="text-sm font-semibold tracking-tight">IIT Bombay</span>
//         </a>
//         <nav className="ml-auto min-w-0 flex-1">
//           <ul className="flex items-center gap-6 overflow-x-auto no-scrollbar text-sm text-muted-foreground justify-end">
//             {NAV_ITEMS.map((n) => {
//               if (n === "Ranks") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/ranks" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Campus") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/campus" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Fees & Scholarships") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/fees" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Trends") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/trends" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Placements") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/placements" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Top Recruiters") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/top-recruiters" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Connect") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/alumni" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               if (n === "Startups") {
//                 return (
//                   <li key={n} className="shrink-0">
//                     <Link to="/startups" className="hover:text-foreground transition-colors whitespace-nowrap">{n}</Link>
//                   </li>
//                 );
//               }
//               return (
//                 <li key={n} className="shrink-0">
//                   <a href={`#${n.toLowerCase().replace(/\W+/g, "-")}`} className="hover:text-foreground transition-colors whitespace-nowrap">{n}</a>
//                 </li>
//               );
//             })}
//             <li className="shrink-0">
//               <Link to="/ranks" className="text-primary hover:text-primary/80 transition-colors whitespace-nowrap font-medium">
//                 Ranks Explorer →
//               </Link>
//             </li>
//             <li className="shrink-0">
//               <ThemeToggle />
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="6" height="6" fill="oklch(0.48 0.21 18)" />
    </svg>
  );
}

/* ---------- Rotating stat card (unchanged size/typography) ---------- */
function RotatingStatCard({ label, values, active }: { label: string; values: string[]; active?: boolean }) {
  const { i } = useCycle(values, 3200);
  return (
    <div className={`glow-card rounded-xl p-6 min-h-[140px] relative overflow-hidden ${active ? "red-glow" : ""}`}>
      <div className="label-caps">{label}</div>
      <div className="mt-3 relative h-11">
        {values.map((v, idx) => (
          <div
            key={v}
            className="absolute inset-0 text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums transition-all duration-700"
            style={{ opacity: idx === i ? 1 : 0, transform: `translateY(${(idx - i) * 12}px)` }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const startups = useMemo(
    () => STARTUPS.slice(0, 6).map((s) => `${s.name} · ${s.founder}`),
    []
  );
  const { i: activeCard } = useCycle([0, 1, 2] as const, 2600);
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={powaiAsset} alt="Powai Lake and IIT Bombay aerial view" className="h-full w-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_10%,var(--background)_80%)]" />
        {/* Rotating globe backdrop — alumni around the world */}
        <div className="absolute right-[-120px] top-16 opacity-70 pointer-events-none hidden md:block">
          <CssGlobe
            size={640}
            autoRotateSpeed={0.1}
            markers={[
              { lat: 19.076, lng: 72.877, label: "Mumbai" },
              { lat: 12.972, lng: 77.594, label: "Bengaluru" },
              { lat: 28.613, lng: 77.209, label: "Delhi" },
              { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
              { lat: 40.7128, lng: -74.006, label: "New York" },
              { lat: 51.5074, lng: -0.1278, label: "London" },
              { lat: 1.3521, lng: 103.8198, label: "Singapore" },
              { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
              { lat: 25.2048, lng: 55.2708, label: "Dubai" },
              { lat: -33.8688, lng: 151.2093, label: "Sydney" },
            ]}
          />
        </div>
      </div>


      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            NIRF Rank #3 — Engineering
          </span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.03] animate-fade-up max-w-4xl" style={{ animationDelay: "0.1s" }}>
          The complete intelligence system<br />for <span className="text-primary">IIT Bombay</span> admissions.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Ranks, placements, fees, and alumni outcomes — all in one place. Founded 1958 · Powai, Mumbai.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <RotatingStatCard
            label="Placement Package"
            active={activeCard === 0}
            values={[
              "Median UG4 · ₹19.61L",
              "Median UG5 · ₹19.25L",
              "Median PG2 · ₹17.30L",
              "Avg UG · ₹23.4L",
              "Highest · ₹1.72 Cr",
            ]}
          />
          <NirfCard active={activeCard === 1} />
          <RotatingStatCard label="Alumni Startups" active={activeCard === 2} values={startups} />
        </div>

        {/* Live JoSAA preview mock */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <PreviewRanksTable />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="label-caps text-[10px]">Scroll</span>
        <svg className="animate-bounce-down" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

function NirfCard({ active }: { active?: boolean }) {
  const { i } = useCycle(INSTITUTE_FEATURES, 3200);
  return (
    <div className={`glow-card rounded-xl p-6 min-h-[140px] relative overflow-hidden ${active ? "red-glow" : ""}`}>
      <div className="label-caps">NIRF Rank & Features</div>
      <div className="mt-3 relative h-11">
        {INSTITUTE_FEATURES.map((v, idx) => (
          <div
            key={v}
            className="absolute inset-0 text-lg sm:text-xl font-semibold tracking-tight leading-snug transition-all duration-700"
            style={{ opacity: idx === i ? 1 : 0, transform: `translateY(${(idx - i) * 12}px)` }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Live JoSAA cycling table (branches rotate through) ---------- */
function PreviewRanksTable({ variant = "hero" }: { variant?: "hero" | "compact" }) {
  const all = useMemo(() => heroLiveRows(), []);
  const [start, setStart] = useState(0);
  const window = variant === "hero" ? 4 : 4;

  useEffect(() => {
    if (all.length <= window) return;
    const t = setInterval(() => setStart((s) => (s + 1) % all.length), 3000);
    return () => clearInterval(t);
  }, [all.length, window]);

  const rows = useMemo(() => {
    if (all.length === 0) return [];
    return Array.from({ length: window }, (_, k) => all[(start + k) % all.length]);
  }, [all, start, window]);

  return (
    <div className="glow-card rounded-2xl overflow-hidden relative bg-background">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-foreground/[0.02]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="label-caps text-primary">Live · JoSAA 2025</span>
        </div>
        <div className="text-xs text-muted-foreground">CRL · Gender-Neutral · cycling every 3s</div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-[1fr_100px_100px] gap-4 text-xs label-caps pb-3 border-b border-border">
          <span>Branch</span><span className="text-right">Opening</span><span className="text-right">Closing</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={`${start}-${i}`}
            className="grid grid-cols-[1fr_100px_100px] gap-4 py-3 text-sm border-b border-border/50 animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="text-foreground/90 truncate">{r.branch}</span>
            <span className="text-right tabular-nums text-muted-foreground">{r.open.toLocaleString()}</span>
            <span className="text-right tabular-nums text-primary">{r.close.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Recruiters ---------- */
function Recruiters() {
  const names = ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Intel", "Qualcomm", "Tata Group", "McKinsey"];
  return (
    <section className="py-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="label-caps text-center">Recruited by</div>
        <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {names.map((n) => (
            <span key={n} className="text-lg sm:text-xl font-semibold text-muted-foreground/70 tracking-tight hover:text-foreground transition-colors">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section shell ---------- */
function SectionShell({
  id, num, kicker, title, subtitle, link, linkTo, children, reverse,
}: {
  id: string; num: string; kicker: string; title: string; subtitle: string; link: string;
  linkTo?: string; children: React.ReactNode; reverse?: boolean;
}) {
  return (
    <section id={id} className="py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div data-reveal className={reverse ? "md:order-2" : ""}>
          <div className="label-caps text-primary">{num} · {kicker}</div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">{title}</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">{subtitle}</p>
          {linkTo ? (
            <Link to={linkTo} className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
              {link} <span>→</span>
            </Link>
          ) : (
            <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
              {link} <span>→</span>
            </a>
          )}
        </div>
        <div data-reveal className={reverse ? "md:order-1" : ""}>{children}</div>
      </div>
    </section>
  );
}

function SectionRanks() {
  return (
    <SectionShell
      id="ranks" num="1.0" kicker="Ranks"
      title="Know exactly where you stand."
      subtitle="Branch-wise opening and closing ranks for IIT Bombay, sourced directly from JoSAA (2016–2025). Click through for the full explorer."
      link="Explore full rankings"
      linkTo="/ranks"
    >
      <PreviewRanksTable variant="compact" />
    </SectionShell>
  );
}

/* ---------- Closing-rank trend graph (cycles through branches) ---------- */
function SectionTrends() {
  const branches = TREND_BRANCHES;
  const [i, setI] = useState(0);
  useEffect(() => {
    if (branches.length <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % branches.length), 10000);
    return () => clearInterval(t);
  }, [branches]);
  const branch = branches[i] ?? "";
  const series = useMemo(() => closingTrend(branch), [branch]);

  return (
    <SectionShell
      id="trends" num="2.0" kicker="Trends" reverse
      title="Ten years of rank history, at a glance."
      subtitle="Cycle through every IITB branch — closing rank (CRL · Gender-Neutral) plotted over the last decade."
      link="View all trend graphs"
      linkTo="/trends"
    >
      <TrendChart branch={branch} series={series} total={branches.length} idx={i} />
    </SectionShell>
  );
}

function TrendChart({
  branch, series, total, idx,
}: {
  branch: string;
  series: { year: number; close: number }[];
  total: number;
  idx: number;
}) {
  const w = 500, h = 220, pad = 24;
  if (series.length === 0) {
    return <div className="glow-card rounded-2xl p-6 h-64 grid place-items-center text-muted-foreground text-sm">Loading branch trends…</div>;
  }
  const maxV = Math.max(...series.map((s) => s.close)) * 1.08;
  const step = (w - pad * 2) / Math.max(series.length - 1, 1);
  const y = (v: number) => h - pad - (v / maxV) * (h - pad * 2);
  const path = series.map((s, k) => `${k === 0 ? "M" : "L"} ${pad + k * step} ${y(s.close)}`).join(" ");
  return (
    <div className="glow-card rounded-2xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="label-caps text-primary">{branch} · Closing rank</div>
        <div className="text-xs text-muted-foreground">
          {series[0].year} → {series[series.length - 1].year}
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-56" key={branch}>
        <defs>
          <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.48 0.21 18)" stopOpacity="0.4" />
            <stop offset="1" stopColor="oklch(0.48 0.21 18)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((k) => (
          <line key={k} x1={pad} x2={w - pad} y1={pad + k * ((h - pad * 2) / 3)} y2={pad + k * ((h - pad * 2) / 3)} stroke="oklch(1 0 0 / 0.06)" />
        ))}
        <path d={`${path} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`} fill="url(#tg)" className="animate-fade-up" />
        <path d={path} fill="none" stroke="oklch(0.55 0.22 20)" strokeWidth="2" style={{ filter: "drop-shadow(0 0 6px oklch(0.55 0.22 20 / 0.6))" }} className="animate-fade-up" />
        {series.map((s, k) => (
          <g key={k}>
            <circle cx={pad + k * step} cy={y(s.close)} r="3" fill="oklch(0.55 0.22 20)" />
            <text x={pad + k * step} y={h - 4} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9 }}>{s.year}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------- Placements section: cycles branches through the same table shape ---------- */
function SectionPlacements() {
  const [start, setStart] = useState(0);
  const window = 4;
  useEffect(() => {
    const t = setInterval(() => setStart((s) => (s + 1) % PLACEMENTS.length), 3500);
    return () => clearInterval(t);
  }, []);
  const rows = Array.from({ length: window }, (_, k) => PLACEMENTS[(start + k) % PLACEMENTS.length]);

  return (
    <SectionShell
      id="placements" num="3.0" kicker="Placements"
      title="Real outcomes, branch by branch."
      subtitle="Placement rate, median, average and highest package — cycling through every core branch from the 2024–25 report."
      link="See full placement data"
    >
      <div className="glow-card rounded-2xl overflow-hidden bg-background">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-foreground/[0.02]">
          <div className="label-caps">Placement Report · 2024–25</div>
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
        </div>
        <div className="p-5">
          <div className="grid grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr_0.9fr] gap-3 text-xs label-caps pb-3 border-b border-border">
            <span>Branch</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Median</span>
            <span className="text-right">Average</span>
            <span className="text-right">Highest</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={`${start}-${i}`}
              className="grid grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr_0.9fr] gap-3 py-3.5 text-sm border-b border-border/50 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-foreground/90 truncate">{r.branch}</span>
              <span className="text-right tabular-nums text-muted-foreground">{r.rate}</span>
              <span className="text-right tabular-nums text-muted-foreground">{r.median}</span>
              <span className="text-right tabular-nums text-muted-foreground">{r.avg}</span>
              <span className="text-right tabular-nums text-primary">{r.highest}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Campus: three rotating image slots ---------- */
// function SectionCampus() {
//   return (
//     <section id="campus" className="py-32 border-t border-border">
//       <div className="mx-auto max-w-6xl px-6">
//         <div data-reveal className="max-w-2xl">
//           <div className="label-caps text-primary">4.0 · Campus</div>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">550 acres beside Powai Lake.</h2>
//           <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
//             Hostels, labs, and green corridors — explore campus life at one of India's most iconic technical campuses.
//           </p>
//         </div>
//         <div className="mt-12 grid md:grid-cols-3 gap-4">
//           <div data-reveal className="md:col-span-2 glow-card rounded-2xl overflow-hidden">
//             <RotatingImage
//               items={campusImageSets[0]}
//               className="w-full h-[420px]"
//               imgClassName="object-cover"
//               interval={5000}
//             />
//           </div>
//           <div data-reveal className="grid grid-rows-2 gap-4">
//             <div className="glow-card rounded-2xl overflow-hidden">
//               <RotatingImage items={campusImageSets[1]} className="w-full h-full min-h-[200px]" imgClassName="object-cover" interval={5500} />
//             </div>
//             <div className="glow-card rounded-2xl overflow-hidden">
//               <RotatingImage items={campusImageSets[2]} className="w-full h-full min-h-[200px]" imgClassName="object-cover" interval={6000} />
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <Link to="/campus" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">Explore campus <span>→</span></Link>
//         </div>
//       </div>
//     </section>
//   );
// }
function SectionCampus() {
  return (
    <section id="campus" className="py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="max-w-2xl">
          <div className="label-caps text-primary">4.0 · Campus</div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">550 acres beside Powai Lake.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Hostels, labs, and green corridors — explore campus life at one of India's most iconic technical campuses.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div data-reveal className="md:col-span-2 glow-card rounded-2xl overflow-hidden">
            <RotatingImage
              items={campusImageSets[0]}
              className="w-full h-[420px]"
              imgClassName="object-cover"
              interval={5000}
            />
          </div>
          <div data-reveal className="grid grid-rows-2 gap-4">
            <div className="glow-card rounded-2xl overflow-hidden">
              <RotatingImage items={campusImageSets[1]} className="w-full h-full min-h-[200px]" imgClassName="object-cover" interval={5500} />
            </div>
            <div className="glow-card rounded-2xl overflow-hidden">
              <RotatingImage items={campusImageSets[2]} className="w-full h-full min-h-[200px]" imgClassName="object-cover" interval={6000} />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/campus" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">Explore campus <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Connect (avatars + rich bios + internal glow) ---------- */
function SectionAlumni() {
  return (
    <SectionShell
      id="alumni-connect" num="5.0" kicker="Connect" reverse
      title="Talk to someone who's been there."
      subtitle="Branch-wise alumni network — connect and ask real questions."
      link="Browse alumni by branch"
    >
      <div className="space-y-3">
        {ALUMNI.map((a) => (
          <div
            key={a.name}
            className={`glow-card ${a.glow} rounded-xl p-4 flex items-start gap-4 bg-background`}
          >
            <img
              src={avatarUrl(a.seed)}
              alt={`${a.name} avatar`}
              className="h-12 w-12 rounded-full border border-border shrink-0 bg-muted"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold">{a.name}</div>
                <span className="text-[10px] label-caps text-primary shrink-0">{a.package}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{a.branch} · {a.role}</div>
              <p className="text-xs text-foreground/80 mt-2 leading-relaxed">{a.bio}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {a.interests.map((t) => (
                  <span key={t} className="text-[10px] rounded-full border border-border px-2 py-0.5 text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- Alumni Startups (expanded to 10, marquee-ish grid) ---------- */
function SectionStartups() {
  return (
    <section id="startups" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div data-reveal className="max-w-2xl flex-1">
            <div className="label-caps text-primary">6.0 · Startups</div>
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              2,306 companies. 18 unicorns. One campus.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              A snapshot of IITB alumni-founded startups shaping India's tech landscape.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center w-full lg:w-auto">
            <StartupsGlobe />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {STARTUPS.map((s, i) => (
            <div
              key={s.name}
              data-reveal
              style={{ transitionDelay: `${i * 40}ms` }}
              className="glow-card rounded-xl p-4 bg-background"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{s.name}</div>
                <span className="text-[10px] label-caps text-primary">{s.valuation}</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.founder}</div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{s.branch}</span>
                <span>{s.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Latest Updates: 4 boxes, each cycles 4 messages ---------- */
function LiveUpdates() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="label-caps text-primary">Latest Updates</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UPDATE_SETS.map((set, i) => (
            <UpdateBox key={i} set={set} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const UPDATE_GLOWS = ["inner-glow-crimson", "inner-glow-blue", "inner-glow-green", "inner-glow-yellow"] as const;

function UpdateBox({ set, idx }: { set: { date: string; text: string }[]; idx: number }) {
  const { i } = useCycle(set, 4200);
  const glow = UPDATE_GLOWS[idx % UPDATE_GLOWS.length];
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${idx * 60}ms` }}
      className={`glow-card ${glow} rounded-xl p-5 bg-background relative overflow-hidden min-h-[130px]`}
    >
      {set.map((it, k) => (
        <div
          key={it.text}
          className="absolute inset-0 p-5 transition-opacity duration-700"
          style={{ opacity: k === i ? 1 : 0 }}
        >
          <div className="text-xs text-muted-foreground">{it.date}</div>
          <div className="mt-3 text-sm text-foreground/90 leading-snug">{it.text}</div>
        </div>
      ))}
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 border-t border-border relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-70 pointer-events-none">
        <Vortex particleCount={600} baseHue={280} hueRange={120} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.48_0.21_18/0.16),transparent_60%)] pointer-events-none" />
      <div data-reveal className="mx-auto max-w-3xl px-6 text-center relative">
        <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">Join the Network.</h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Every number, every branch, every year — verified and updated.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/ranks" className="inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">View Full Report</Link>
          <Link to="/alumni" className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors">Meet Alumni</Link>
        </div>
      </div>
    </section>
  );
}


/* ---------- Features: rotating figures ---------- */
function Features() {
  const items = [
    { fig: "FIG 0.1", title: "Engineering Excellence", body: "NIRF Rank #3 in Engineering — 17 departments spanning core, computing, and emerging technologies.", icon: <IcoInterlock />, anim: "animate-spin-y" },
    { fig: "FIG 0.2", title: "World-Class Management", body: "SJMSOM — 100% MBA placement, ₹25.82L average CTC, ranked among India's top B-schools.", icon: <IcoStack />, anim: "animate-float-tilt" },
    { fig: "FIG 0.3", title: "Research & Innovation", body: "2,306 alumni-founded companies, $37.2B in funding raised, 18 unicorns — research that becomes real-world impact.", icon: <IcoNodes />, anim: "animate-spin-y" },
  ];
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="max-w-2xl">
          <div className="label-caps text-primary">The Institute</div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            A campus engineered for depth, breadth, and ambition.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {items.map((it, i) => (
            <div key={it.fig} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="bg-background p-8 flex flex-col gap-6 min-h-[380px]">
              <div className="label-caps text-primary/70">{it.fig}</div>
              <div className="flex-1 grid place-items-center" style={{ perspective: "800px" }}>
                <div className={it.anim}>{it.icon}</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Isometric wireframe icons (SVG) --- */
const strokeW = 1;
const IcoBase = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="edgeGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="oklch(0.55 0.22 20)" stopOpacity="1" />
        <stop offset="1" stopColor="oklch(0.55 0.22 20)" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="glowFill" cx="0.5" cy="0.5" r="0.6">
        <stop offset="0" stopColor="oklch(0.48 0.21 18)" stopOpacity="0.28" />
        <stop offset="1" stopColor="oklch(0.48 0.21 18)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="110" r="80" fill="url(#glowFill)" stroke="none" />
    <g className="text-foreground/60" style={{ filter: "drop-shadow(0 0 4px oklch(0.55 0.22 20 / 0.4))" }}>{children}</g>
  </svg>
);
function IcoInterlock() {
  return (
    <IcoBase>
      <path d="M100 40 L160 75 L160 145 L100 180 L40 145 L40 75 Z" />
      <path d="M100 40 L100 110 M40 75 L100 110 M160 75 L100 110" />
      <path d="M70 92 L130 92 L130 128 L70 128 Z" stroke="url(#edgeGlow)" strokeWidth="1.5" />
      <path d="M100 110 L100 145" />
    </IcoBase>
  );
}
function IcoStack() {
  return (
    <IcoBase>
      <path d="M100 40 L160 70 L100 100 L40 70 Z" />
      <path d="M100 80 L160 110 L100 140 L40 110 Z" />
      <path d="M100 120 L160 150 L100 180 L40 150 Z" stroke="url(#edgeGlow)" strokeWidth="1.5" />
      <path d="M40 70 L40 110 M160 70 L160 110 M40 110 L40 150 M160 110 L160 150 M100 100 L100 140" />
    </IcoBase>
  );
}
function IcoNodes() {
  return (
    <IcoBase>
      <path d="M100 40 L160 90 L130 160 L70 160 L40 90 Z" />
      <circle cx="100" cy="40" r="4" />
      <circle cx="160" cy="90" r="4" />
      <circle cx="130" cy="160" r="4" />
      <circle cx="70" cy="160" r="4" />
      <circle cx="40" cy="90" r="4" />
      <circle cx="100" cy="105" r="5" stroke="url(#edgeGlow)" strokeWidth="1.5" />
      <path d="M100 40 L100 105 M160 90 L100 105 M40 90 L100 105 M70 160 L100 105 M130 160 L100 105" stroke="url(#edgeGlow)" />
    </IcoBase>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-28 mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">JI</span>
              <span className="text-sm font-semibold">Jai India · Premium Product</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              JEE / JoSAA college intelligence platform.
            </p>
          </div>
          <FooterCol title="Sections" items={["Ranks", "Placements", "Fees", "Connect"]} />
          <FooterCol title="Help" items={["Contact Us", "Report Incorrect Data", "FAQ"]} />
          <FooterCol title="Legal" items={["Privacy Policy", "Terms of Use", "Data Disclaimer"]} />
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-4xl">
            Data on this page is compiled from NIRF, JoSAA, institute official documents, and publicly available sources. We make reasonable efforts to keep this accurate but do not guarantee completeness or real-time accuracy — please verify independently via official institute channels before making decisions. This platform is not affiliated with or endorsed by IIT Bombay, and is intended purely for informational aggregation, not to defame or misrepresent the institute. We plan to incorporate verified student/alumni-submitted data in future updates.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Jai India Premium Product · Not affiliated with IIT Bombay.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterCol = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <div className="label-caps">{title}</div>
    <ul className="mt-4 space-y-2 text-sm">
      {items.map((i) => (
        <li key={i}><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>
      ))}
    </ul>
  </div>
);