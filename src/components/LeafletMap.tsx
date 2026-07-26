import { useEffect, useRef } from "react";

// Coordinates for each campus section (lat, lng)
const LOCATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  "Indian Institute of Technology Bombay, Powai, Mumbai": { lat: 19.1334, lng: 72.9133, label: "IIT Bombay" },
  "IIT Bombay International Relations Office, Powai, Mumbai": { lat: 19.1330, lng: 72.9140, label: "International Relations Office" },
  "IIT Bombay Main Gate, Powai, Mumbai": { lat: 19.1279, lng: 72.9161, label: "Main Gate" },
  "Hostel 4, IIT Bombay, Powai, Mumbai": { lat: 19.1345, lng: 72.9105, label: "Hostel 4" },
  "Central Library, IIT Bombay, Powai, Mumbai": { lat: 19.1326, lng: 72.9135, label: "Central Library" },
  "IIT Bombay Gymkhana, Powai, Mumbai": { lat: 19.1310, lng: 72.9155, label: "Gymkhana" },
};

// Pin color per section tint (matches your existing red/green/blue/gold tint system)
const TINT_PIN_COLOR: Record<string, string> = {
  overview: "#ef4444",       // red
  global: "#3b82f6",         // blue
  connectivity: "#10b981",   // green
  hostels: "#eab308",        // gold
  library: "#3b82f6",        // blue
  sports: "#ef4444",         // red
};

function buildPinSvg(color: string) {
  return `
    <div style="width:34px;height:44px;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.5));">
      <svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.6 26.4 0 17 0z" fill="${color}" stroke="white" stroke-width="2"/>
        <circle cx="17" cy="17" r="6" fill="white"/>
      </svg>
    </div>
  `;
}

export function LeafletMap({
  query,
  sectionId,
  className = "",
}: {
  query: string;
  sectionId?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const loc = LOCATION_COORDS[query] ?? { lat: 19.1334, lng: 72.9133, label: query };

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      // Kill Leaflet's default broken marker icon path so it never flashes in
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      if (cancelled || !containerRef.current) return;

      const color = TINT_PIN_COLOR[sectionId ?? ""] ?? "#ef4444";

      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      const map = L.map(containerRef.current, {
        center: [loc.lat, loc.lng],
        zoom: 16,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      // divIcon with NO default Leaflet classes, so only our SVG shows
      const icon = L.divIcon({
        html: buildPinSvg(color),
        className: "leaflet-custom-pin",
        iconSize: [34, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -40],
      });

      L.marker([loc.lat, loc.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${loc.label}</strong>`)
        .openPopup();

      // --- Fullscreen toggle button (custom control, no plugin needed) ---
      const FullscreenControl = L.Control.extend({
        options: { position: "topright" },
        onAdd: function () {
          const btn = L.DomUtil.create("button", "leaflet-bar leaflet-control leaflet-fullscreen-btn");
          btn.type = "button";
          btn.title = "Toggle fullscreen";
          btn.innerHTML = "⛶";
          btn.style.width = "30px";
          btn.style.height = "30px";
          btn.style.fontSize = "16px";
          btn.style.cursor = "pointer";
          btn.style.background = "white";
          L.DomEvent.disableClickPropagation(btn);
          btn.onclick = () => {
            const el = containerRef.current?.parentElement;
            if (!el) return;
            if (!document.fullscreenElement) {
              el.requestFullscreen?.();
            } else {
              document.exitFullscreen?.();
            }
            setTimeout(() => map.invalidateSize(), 200);
          };
          return btn;
        },
      });
      map.addControl(new FullscreenControl());

      mapRef.current = map;
    }

    init();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [query, sectionId]);

  const openInNewTabUrl = `https://www.openstreetmap.org/?mlat=${loc.lat}&mlon=${loc.lng}#map=17/${loc.lat}/${loc.lng}`;

  return (
    <div className={`rounded-xl overflow-hidden border border-white/15 relative ${className}`}>
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      <a
        href={openInNewTabUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 z-[1000] rounded-md bg-black/70 hover:bg-black/85 text-white text-[11px] px-2.5 py-1.5 backdrop-blur-sm border border-white/20 transition-colors"
      >
        Open in new tab ↗
      </a>
    </div>
  );
}
