/** Back navigation chip pinned to the top-left. Now an icon-only arrow. */
export function BackChip({ to }: { to: string; children?: React.ReactNode }) {
  return (
    <a
      href={to}
      aria-label="Back"
      title="Back"
      className="fixed top-3 left-3 z-50 h-9 w-9 rounded-full inline-flex items-center justify-center
        border border-white/15 bg-black/60 backdrop-blur-md text-foreground/90
        hover:text-foreground hover:border-primary/60 hover:bg-black/80
        transition-all shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M15 6l-6 6 6 6" />
      </svg>
    </a>
  );
}
