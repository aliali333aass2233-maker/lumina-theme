import { Link } from "@tanstack/react-router";
import type { Branch } from "@/data/placements-2023-24";

/**
 * Hyperreal branch tile: full-bleed image, department name overlaid,
 * animated pulsing glow ring in the branch's accent color.
 */
export function BranchTile({ branch }: { branch: Branch }) {
  return (
    <Link
      to="/placements/branches/$branch"
      params={{ branch: branch.slug }}
      className="group relative block rounded-xl overflow-hidden branch-glow"
      style={{ ["--branch-accent" as string]: branch.accent }}
    >
      <div className="relative h-full w-full overflow-hidden min-h-0">
        <img
          src={branch.image}
          alt={branch.name}
          className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
          loading="lazy"
          width={1024}
          height={1024}
        />
        {/* darkening + accent tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ background: `radial-gradient(circle at 50% 100%, ${branch.accent}44, transparent 70%)` }}
        />
        {/* stats corner */}
        <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-semibold text-white/90 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded">
          <span className="tabular-nums">{branch.placed}</span>
          <span className="text-white/50">placed</span>
        </div>
        {/* name */}
        <div className="absolute inset-x-0 bottom-0 p-2.5">
          <div className="text-[11px] md:text-xs font-semibold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {branch.short}
          </div>
          <div className="mt-0.5 text-[9px] text-white/60 uppercase tracking-widest">Explore →</div>
        </div>
      </div>
    </Link>
  );
}
