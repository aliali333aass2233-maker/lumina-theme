import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={
        "relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border " +
        "bg-secondary text-foreground transition-colors hover:border-primary/60 " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
        className
      }
    >
      {isDark ? (
        <Moon className="h-[18px] w-[18px]" strokeWidth={2} />
      ) : (
        <Sun className="h-[18px] w-[18px] text-foreground" strokeWidth={2} />
      )}
    </button>
  );
}
