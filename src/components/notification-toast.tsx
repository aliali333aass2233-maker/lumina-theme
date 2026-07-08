import { useEffect, useState } from "react";
import { NOTIFICATIONS } from "@/data/content";

/**
 * Bottom-right rectangular notification toast.
 * Auto-shows every 30–40s with a random IITB news item; auto-hides after ~8s.
 */
export function NotificationToast() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * NOTIFICATIONS.length));

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const showOne = () => {
      setIdx(Math.floor(Math.random() * NOTIFICATIONS.length));
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), 8000);
    };

    // First one after ~6s so the page has time to breathe.
    const firstDelay = 6000;
    const first = setTimeout(showOne, firstDelay);

    const loop = setInterval(() => {
      showOne();
    }, 32000 + Math.floor(Math.random() * 8000));

    return () => {
      clearTimeout(first);
      clearInterval(loop);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  const n = NOTIFICATIONS[idx];

  return (
    <div
      className="fixed z-50 bottom-6 right-6 w-[min(88vw,420px)] pointer-events-none"
      aria-live="polite"
    >
      {visible && (
        <div
          key={idx}
          className="animate-toast-in glow-card inner-glow-wine rounded-xl bg-background/90 backdrop-blur-xl px-5 py-4 pointer-events-auto relative overflow-hidden"
          style={{ borderColor: "oklch(0.48 0.21 18 / 0.55)" }}
        >
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss"
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs"
          >
            ×
          </button>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            <span className="label-caps text-primary text-[10px]">{n.tag}</span>
          </div>
          <div className="mt-2 text-sm font-semibold text-foreground leading-snug">
            {n.title}
          </div>
          <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
            {n.body}
          </div>
        </div>
      )}
    </div>
  );
}
