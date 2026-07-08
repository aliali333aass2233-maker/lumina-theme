import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements 2023-24 · IIT Bombay" },
      { name: "description", content: "IIT Bombay Placement & Internship Report 2023-24 — branch-wise, sector-wise, and salary analytics with hyperreal visuals." },
      { property: "og:title", content: "IIT Bombay Placements 2023-24" },
      { property: "og:description", content: "Explore branch-wise, sector-wise, and compensation analytics for IIT Bombay placements 2023-24." },
    ],
  }),
  component: () => (
    <div className="min-h-dvh bg-background text-foreground">
      <Outlet />
    </div>
  ),
});
