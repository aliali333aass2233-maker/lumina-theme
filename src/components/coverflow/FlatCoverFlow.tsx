// import { useCallback, useEffect } from "react";

// export interface FlatCoverFlowItem {
//   key: string;
//   image: string;
//   name: string;
//   color: string;
// }

// interface Props {
//   items: FlatCoverFlowItem[];
//   focus: number;
//   onFocus: (i: number) => void;
//   onOpen?: (i: number) => void;
//   cardWidth?: number;
//   cardHeight?: number;
//   className?: string;
// }

// /** Flat Cover Flow: all cards face-on, size shrinks with distance from focus,
//  *  every item stays visible on-screen. Black border on each card. */
// export function FlatCoverFlow({
//   items, focus, onFocus, onOpen, cardWidth = 260, cardHeight = 340, className = "",
// }: Props) {
//   const go = useCallback((dir: -1 | 1) => {
//     onFocus(Math.max(0, Math.min(items.length - 1, focus + dir)));
//   }, [focus, onFocus, items.length]);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") go(1);
//       else if (e.key === "ArrowLeft") go(-1);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [go]);

//   // scale ramp: focus=1, decays by 0.16 per step, floor 0.28
//   const scaleAt = (d: number) => Math.max(0.28, 1 - Math.abs(d) * 0.16);
//   // horizontal offset per step
//   const stepGap = cardWidth * 0.32;

//   return (
//     <div className={`relative w-full ${className}`}>
//       <div
//         className="relative w-full mx-auto"
//         style={{ height: cardHeight + 16 }}
//       >
//         {items.map((it, i) => {
//           const d = i - focus;
//           const s = scaleAt(d);
//           const x = d * stepGap;
//           const z = 100 - Math.abs(d);
//           const opacity = 0.4 + 0.6 * s;
//           const isFocus = i === focus;
//           return (
//             <button
//               key={it.key}
//               type="button"
//               onClick={() => (isFocus && onOpen ? onOpen(i) : onFocus(i))}
//               onDoubleClick={() => onOpen?.(i)}
//               className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out focus:outline-none"
//               style={{
//                 width: cardWidth,
//                 height: cardHeight,
//                 transform: `translate(-50%,-50%) translateX(${x}px) scale(${s})`,
//                 zIndex: z,
//                 opacity,
//               }}
//               aria-label={it.name}
//               aria-current={isFocus}
//             >
//               <div
//                 className="relative w-full h-full overflow-hidden rounded-2xl"
//                 style={{
//                   border: "2px solid #000",
//                   boxShadow: isFocus
//                     ? `0 30px 60px -20px ${it.color}80, 0 0 0 4px ${it.color}55`
//                     : "0 20px 40px -25px rgba(0,0,0,0.7)",
//                 }}
//               >
//                 <img src={it.image} alt={it.name} className="absolute inset-0 h-full w-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
//                 <div
//                   className="absolute inset-x-0 top-0 h-1"
//                   style={{ background: it.color }}
//                 />
//                 <div className="absolute inset-x-0 bottom-0 p-3 text-center">
//                   <div className="text-sm sm:text-base font-semibold text-white leading-tight drop-shadow-md">
//                     {it.name}
//                   </div>
//                 </div>
//               </div>
//             </button>
//           );
//         })}
//       </div>

//       <div className="mt-3 flex items-center justify-center gap-3">
//         <ArrowBtn dir="left" onClick={() => go(-1)} disabled={focus === 0} />
//         <div className="text-[11px] tabular-nums text-foreground/60 min-w-[60px] text-center">
//           {focus + 1} / {items.length}
//         </div>
//         <ArrowBtn dir="right" onClick={() => go(1)} disabled={focus === items.length - 1} />
//       </div>
//     </div>
//   );
// }

// function ArrowBtn({
//   dir, onClick, disabled,
// }: { dir: "left" | "right"; onClick: () => void; disabled?: boolean }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       disabled={disabled}
//       aria-label={dir === "left" ? "Previous" : "Next"}
//       className="h-9 w-9 rounded-full border border-white/20 bg-black/60 text-white hover:border-white/50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
//     >
//       <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
//         {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
//       </svg>
//     </button>
//   );
// }



import { useCallback, useEffect } from "react";

export interface FlatCoverFlowItem {
  key: string;
  image: string;
  name: string;
  color: string;
}

interface Props {
  items: FlatCoverFlowItem[];
  focus: number;
  onFocus: (i: number) => void;
  onOpen?: (i: number) => void;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

/** Flat Cover Flow: all cards face-on, size shrinks with distance from focus,
 *  every item stays visible on-screen. Black border on each card. */
export function FlatCoverFlow({
  items, focus, onFocus, onOpen, cardWidth = 260, cardHeight = 340, className = "",
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

  // scale ramp: focus=1, decays by 0.16 per step, floor 0.28
  const scaleAt = (d: number) => Math.max(0.28, 1 - Math.abs(d) * 0.16);
  // horizontal offset per step
  const stepGap = cardWidth * 0.72;

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="relative w-full mx-auto"
        style={{ height: cardHeight + 16 }}
      >
        {items.map((it, i) => {
          const d = i - focus;
          const s = scaleAt(d);
          const x = d * stepGap;
          const z = 100 - Math.abs(d);
          const opacity = 0.4 + 0.6 * s;
          const isFocus = i === focus;
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => (isFocus && onOpen ? onOpen(i) : onFocus(i))}
              onDoubleClick={() => onOpen?.(i)}
              className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out focus:outline-none"
              style={{
                width: cardWidth,
                height: cardHeight,
                transform: `translate(-50%,-50%) translateX(${x}px) scale(${s})`,
                zIndex: z,
                opacity,
              }}
              aria-label={it.name}
              aria-current={isFocus}
            >
              <div
                className="relative w-full h-full overflow-hidden rounded-2xl"
                style={{
                  border: "2px solid #000",
                  boxShadow: isFocus
                    ? `0 30px 60px -20px ${it.color}80, 0 0 0 4px ${it.color}55`
                    : "0 20px 40px -25px rgba(0,0,0,0.7)",
                }}
              >
                <img src={it.image} alt={it.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: it.color }}
                />
                <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                  <div className="text-sm sm:text-base font-semibold text-white leading-tight drop-shadow-md">
                    {it.name}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <ArrowBtn dir="left" onClick={() => go(-1)} disabled={focus === 0} />
        <div className="text-[11px] tabular-nums text-foreground/60 min-w-[60px] text-center">
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
