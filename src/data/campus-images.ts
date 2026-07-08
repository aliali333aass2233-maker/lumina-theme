import overview from "@/assets/campus/gen-overview.jpg";
import hostels from "@/assets/campus/gen-hostels.jpg";
import library from "@/assets/campus/gen-library.jpg";
import sports from "@/assets/campus/gen-sports.jpg";
import connectivity from "@/assets/campus/gen-connectivity.jpg";
import global from "@/assets/campus/gen-global.jpg";

/**
 * Three campus-photo slots, each cycling through its own list.
 * Uses local, bundled JPGs so nothing depends on remote asset hosting.
 */
export const campusImageSets: { src: string; alt: string }[][] = [
  // Slot 1 — hero-large (left)
  [
    { src: overview, alt: "Powai Lake and IIT Bombay aerial view" },
    { src: connectivity, alt: "Aerial view of hostels beside the Sahyadri hills" },
    { src: global, alt: "Mumbai skyline from IIT Bombay" },
  ],
  // Slot 2 — top-right
  [
    { src: hostels, alt: "IIT Bombay hostels" },
    { src: library, alt: "IIT Bombay library and academic block" },
    { src: overview, alt: "IIT Bombay hero shot" },
  ],
  // Slot 3 — bottom-right
  [
    { src: sports, alt: "IIT Bombay sports facilities" },
    { src: connectivity, alt: "IIT Bombay campus roads" },
    { src: global, alt: "Global academic partnerships" },
  ],
];
