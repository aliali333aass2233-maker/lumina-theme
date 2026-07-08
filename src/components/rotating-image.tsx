import { useEffect, useState } from "react";

type Item = { src: string; alt: string };

export function RotatingImage({
  items,
  interval = 5000,
  className,
  imgClassName,
  style,
}: {
  items: Item[];
  interval?: number;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [items, interval]);

  return (
    <div className={`relative ${className ?? ""}`} style={style}>
      {items.map((it, idx) => (
        <img
          key={it.src}
          src={it.src}
          alt={it.alt}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${imgClassName ?? ""}`}
          style={{ opacity: idx === i ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
