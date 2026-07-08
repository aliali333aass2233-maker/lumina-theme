import overview from "@/assets/campus/new (1).jpg";
import hostels from "@/assets/campus/new (2).jpg";
import library from "@/assets/campus/new (3).jpg";
import sports from "@/assets/campus/new (4).jpg";
import connectivity from "@/assets/campus/new (5).jpg";
import global from "@/assets/campus/new (6).jpg";
import extra1 from "@/assets/campus/new (1).jpeg";

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
    { src: extra1, alt: "IIT Bombay campus view" },
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