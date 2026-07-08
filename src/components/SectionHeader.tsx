import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavItem = { label: string; to?: string; children?: { label: string; to: string }[] };

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Ranks", to: "/ranks" },
  { label: "Campus", to: "/campus" },
  { label: "Fees & Scholarships", to: "/fees" },
  { label: "Trends", to: "/trends" },
  {
    label: "Placements",
    children: [
      { label: "Program-wise Analysis", to: "/placements" },
      { label: "Branch-wise Analysis", to: "/placements/branches" },
      { label: "Sector-wise Analysis", to: "/placements/sectors" },
      { label: "Stipend & PPO Data", to: "/placements/compensation" },
    ],
  },
  { label: "Top Recruiters", to: "/top-recruiters" },
  { label: "Connect", to: "/alumni" },
  { label: "Startups", to: "/startups" },
];

function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="6" height="6" fill="oklch(0.48 0.21 18)" />
    </svg>
  );
}

function PlacementsMenu({ isActive }: { isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const item = NAV.find((n) => n.label === "Placements")!;
  return (
    <li ref={ref} className="shrink-0 relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={
          (isActive
            ? "text-primary font-medium "
            : "hover:text-foreground transition-colors ") +
          "whitespace-nowrap inline-flex items-center gap-1"
        }
        aria-expanded={open}
      >
        Placements
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <div className="absolute right-0 top-full mt-2 min-w-[220px] rounded-lg border border-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
          {item.children!.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
      ) : null}
    </li>
  );
}

export function SectionHeader({ active }: { active?: string }) {
  return (
    <header className="shrink-0 sticky top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tight whitespace-nowrap">IIT Bombay</span>
        </Link>
        <nav className="ml-auto min-w-0 flex-1">
          <ul className="flex items-center gap-5 overflow-x-visible no-scrollbar text-sm text-muted-foreground justify-end">
            {NAV.map((n) => {
              const isActive = active === n.label;
              if (n.children) return <PlacementsMenu key={n.label} isActive={isActive} />;
              return (
                <li key={n.label} className="shrink-0">
                  <Link
                    to={n.to!}
                    className={
                      isActive
                        ? "text-primary font-medium whitespace-nowrap"
                        : "hover:text-foreground transition-colors whitespace-nowrap"
                    }
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ThemeToggle className="ml-3" />
      </div>
    </header>
  );
}
