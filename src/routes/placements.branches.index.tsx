import { createFileRoute } from "@tanstack/react-router";
import { BackChip } from "@/components/placements/BackChip";
import { BranchTile } from "@/components/placements/BranchTile";
import { BRANCHES } from "@/data/placements-2023-24";

export const Route = createFileRoute("/placements/branches/")({
  component: BranchGrid,
});

function BranchGrid() {
  return (
    <div className="fixed inset-0 h-dvh w-dvw overflow-hidden bg-background text-foreground px-4 md:px-6 flex flex-col">
      <BackChip to="/placements" />


      <div className="text-center pt-4 pb-2 shrink-0">
        <div className="label-caps text-primary text-[10px]">Program-wise · 2023–24</div>
        <h1 className="mt-0.5 text-2xl md:text-3xl font-semibold tracking-tight">Branch-wise Analysis</h1>
        <p className="text-[11px] text-muted-foreground">Pick any department to see its four-year trend, program cards and market insights.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-6 md:grid-cols-8 grid-rows-4 gap-2 pb-3">
        {BRANCHES.map((b) => (
          <BranchTile key={b.slug} branch={b} />
        ))}
      </div>
    </div>
  );
}
