import { useCallback, useEffect } from "react";

export interface TiltedCoverFlowItem {
  key: string;
  image: string;
  name: string;
  color: string;
}

interface Props {
  items: TiltedCoverFlowItem[];
  focus: number;
  onFocus: (i: number) => void;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

/** iTunes-style Cover Flow: center face-on, sides tilt in 3D,
 *  same base size, farther cards fade + rotate more. Black border. */
export function TiltedCoverFlow({
  items, focus, onFocus, cardWidth = 320, cardHeight = 320, className = "",
}: Props) {
  const go = useCallback((dir: -1 | 1) => {
    onFocus(Math.max(0, Math.min(items.length - 1, focus + dir)));
  }, [focus, onFocus, items.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="relative w-full mx-auto"
        style={{ height: cardHeight + 40, perspective: "1400px" }}
      >
        {items.map((it, i) => {
          const d = i - focus;
          const abs = Math.abs(d);
          const isFocus = d === 0;
          const rotY = Math.max(-72, Math.min(72, -d * 55));
          const x = d * (cardWidth * 0.42);
          const z = -Math.min(abs, 6) * 60;
          const opacity = abs > 6 ? 0 : 1 - abs * 0.12;
          const zIndex = 100 - abs;
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => onFocus(i)}
              className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out focus:outline-none"
              style={{
                width: cardWidth,
                height: cardHeight,
                transformStyle: "preserve-3d",
                transform: `translate(-50%,-50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg)`,
                zIndex,
                opacity,
              }}
              aria-label={it.name}
              aria-current={isFocus}
            >
              <div
                className="relative w-full h-full overflow-hidden rounded-xl"
                style={{
                  border: "2px solid #000",
                  boxShadow: isFocus
                    ? `0 30px 80px -10px ${it.color}80, 0 0 0 3px ${it.color}66`
                    : "0 20px 40px -20px rgba(0,0,0,0.9)",
                  background: "#000",
                }}
              >
                <img src={it.image} alt={it.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div
                  className="absolute inset-x-0 bottom-0 p-3 text-center"
                >
                  <div className="text-sm sm:text-base font-semibold text-white leading-tight drop-shadow-md">
                    {it.name}
                  </div>
                </div>
              </div>
              {/* Reflection */}
              <div
                aria-hidden
                className="absolute left-0 right-0"
                style={{
                  top: "100%",
                  height: cardHeight * 0.35,
                  transform: "scaleY(-1)",
                  transformOrigin: "top",
                  opacity: 0.35,
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
                  backgroundImage: `url(${it.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  borderRadius: "0 0 12px 12px",
                }}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        <ArrowBtn dir="left" onClick={() => go(-1)} disabled={focus === 0} />
        <div className="text-[11px] tabular-nums text-white/60 min-w-[60px] text-center">
          {focus + 1} / {items.length}
        </div>
        <ArrowBtn dir="right" onClick={() => go(1)} disabled={focus === items.length - 1} />
      </div>
    </div>
  );
}

function ArrowBtn({
  dir, onClick, disabled,
}: { dir: "left" | "right"; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className="h-9 w-9 rounded-full border border-white/20 bg-black/60 text-white hover:border-white/50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}
