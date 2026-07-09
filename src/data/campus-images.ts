import overview from "@/assets/campus/new (1).jpg";
import hostels from "@/assets/campus/new (2).jpg";
import library from "@/assets/campus/new (3).jpg";
import sports from "@/assets/campus/new (4).jpg";
import connectivity from "@/assets/campus/new (5).jpg";
import global from "@/assets/campus/new (6).jpg";
import extra1 from "@/assets/campus/new (1).jpeg";
import extra2 from "@/assets/campus/OOO.png";
import extra3 from "@/assets/campus/overview2.jpg";
import extra4 from "@/assets/campus/OVERVIEW3.jpg";
import extra5 from "@/assets/campus/NEWNEW (1).jpg";
import extra6 from "@/assets/campus/NEWNEW (2).jpg";
import extra7 from "@/assets/campus/NEWNEW (4).jpg";
import extra8 from "@/assets/campus/NEWNEW (5).jpg";
import extra9 from "@/assets/campus/sports.jpg";
import extra10 from "@/assets/campus/pexels-repuding-12064.jpg";


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
    { src: extra5, alt: "IIT Bombay campus view" },
    { src: extra6, alt: "IIT Bombay campus view" },
    { src: extra7, alt: "IIT Bombay campus view" },
    { src: extra8, alt: "IIT Bombay campus view" },
  ],
  // Slot 2 — top-right
  [
    { src: hostels, alt: "IIT Bombay hostels" },
    { src: library, alt: "IIT Bombay library and academic block" },
    { src: overview, alt: "IIT Bombay hero shot" },
    { src: extra3, alt: "Powai Lake and IIT Bombay aerial view" },
    { src: extra2, alt: "IIT Bombay campus view" },
    { src: extra9, alt: "IIT Bombay sports facilities" },
    { src: extra10, alt: "IIT Bombay campus view" },
  ],
  // Slot 3 — bottom-right
  [
    { src: sports, alt: "IIT Bombay sports facilities" },
    { src: connectivity, alt: "IIT Bombay campus roads" },
    { src: global, alt: "Global academic partnerships" },
    { src: extra4, alt: "IIT Bombay hostels" },
    { src: extra2, alt: "IIT Bombay campus view" },
    { src: extra6, alt: "IIT Bombay campus view" },
    { src: extra7, alt: "IIT Bombay campus view" },
    { src: extra8, alt: "IIT Bombay campus view" },
  ],
];