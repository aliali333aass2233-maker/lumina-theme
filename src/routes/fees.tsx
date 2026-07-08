import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import heroAsset from "@/assets/image_e3949b3f (1).png";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees & Scholarships · IIT Bombay — Verify via Official Sources" },
      {
        name: "description",
        content:
          "Fees, hostel charges and scholarship eligibility at IIT Bombay change every year and vary by category, income and batch. Always verify directly with IIT Bombay's official circulars.",
      },
      { property: "og:title", content: "Fees & Scholarships · IIT Bombay" },
      {
        property: "og:description",
        content:
          "A reference guide pointing you to the trusted, official sources for IIT Bombay fees and scholarship details.",
      },
      { property: "og:image", content: heroAsset },
    ],
  }),
  component: FeesPage,
});

function FeesPage() {
  return (
    <div className="h-screen overflow-hidden bg-background text-foreground flex flex-col">
      <SectionHeader active="Fees & Scholarships" />

      <main className="flex-1 flex flex-col justify-between overflow-hidden">
        {/* Hero — left aligned, compact */}
        <section className="relative overflow-hidden h-[40vh] min-h-[200px] shrink-0">
          <div className="absolute inset-0 z-0">
            <img
              src={heroAsset}
              alt="IIT Bombay main building, Powai campus"
              className="h-full w-full object-cover object-top opacity-[0.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-start pl-8 pr-6 max-w-2xl">
            <h1
              className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.1] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Fees &amp; scholarships at <span className="text-primary">IIT Bombay</span>.
            </h1>
            <p
              className="mt-3 text-sm text-foreground/85 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              For accurate, up-to-date fee details, go straight to the official website of IIT BOMBAY.
            </p>
          </div>
        </section>

        {/* Why + Guidance cards, no divider lines, tightened spacing */}
        <section className="flex-1 flex flex-col justify-center gap-5 px-8 py-4 overflow-hidden">
          <div className="glow-card inner-glow-wine rounded-2xl p-4 sm:p-5 max-w-3xl">
            <div className="label-caps text-primary text-[10px]">Why we don't list numbers</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Fees and scholarship eligibility change every year by category, income, and batch —
              so instead of numbers that can go stale, here's where to check directly.
            </p>
          </div>

          <div>
            <div className="label-caps text-primary text-[10px]">Where to verify</div>
            <h2 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">
              Go straight to the source.
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <GuidanceCard
                num="01"
                title="IIT Bombay official fees & scholarship page"
                body="The single source of truth for verified circulars on fees, hostel charges and scholarships."
                glow="inner-glow-crimson"
              />
              <GuidanceCard
                num="02"
                title="Your department academic office"
                body="Best for category-specific and batch-specific queries — waivers, freeships, exact amounts."
                glow="inner-glow-blue"
              />
              <GuidanceCard
                num="03"
                title="Current seniors & student mentors"
                body="Real, on-ground insight into cost of living and month-to-month expenses."
                glow="inner-glow-green"
              />
            </div>
          </div>
        </section>

        {/* Disclaimer — left aligned, no border line */}
        <section className="shrink-0 px-8 py-3">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl">
            Disclaimer: This page does not host or guarantee fee figures. Please rely on IIT
            Bombay's official circulars for anything financial.
          </p>
        </section>
      </main>
    </div>
  );
}

function GuidanceCard({
  num,
  title,
  body,
  glow,
}: {
  num: string;
  title: string;
  body: string;
  glow: string;
}) {
  return (
    <div className={`glow-card ${glow} rounded-xl p-4 flex flex-col`}>
      <div className="label-caps text-primary text-[10px]">{num}</div>
      <h3 className="mt-2 text-sm font-semibold tracking-tight leading-snug">{title}</h3>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{body}</p>
    </div>
  );
}