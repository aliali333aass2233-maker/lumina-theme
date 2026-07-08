
## 0. Bootstrap: unpack the uploaded project

The current dev-server is a blank template. First step is to copy the contents of `innovation-nexus-main.zip` (excluding `.git`, `.lovable`, `bun.lock`, `package.json` merge conflicts) into `/dev-server/`, then install any missing deps (`clsx`, `react-spring`, `cobe` for the globe). After this, the existing routes (`ranks`, `campus`, `fees`, `trends`, `placements.*`, `top-recruiters`, `startups`, `alumni`, `index`) become the working baseline.

## 1. Global navigation: add Home tab

- In the shared top nav (rendered in `src/routes/__root.tsx` or the header component under `src/components/`), insert a **Home** link as the first item, before **Ranks**, pointing to `/`.
- Active-link styling matches the existing tabs.

## 2. Landing page (`src/routes/index.tsx`) — section connectivity

Wire each landing CTA/section to the correct route so clicks land on the right page (and, where relevant, the right sub-tab):

| Landing action | Destination |
| --- | --- |
| Ranks card / CTA | `/ranks` |
| Campus card | `/campus` |
| Fees & Scholarships | `/fees` |
| Trends | `/trends` |
| Placements (default) | `/placements` → **Placement & Internship Report** tab |
| Placements dropdown (Program-wise / Branch-wise / Industry Sector-wise / Stipend-wise) | respective `/placements/*` route |
| Top Recruiters | `/top-recruiters` |
| Connect / "Talk to Someone" / "Browse alumni by branch" | `/alumni` |
| Startups / "For a startup" | `/startups` |

Add the same **Program / Branch / Sector / Stipend** dropdown that lives inside the Placements page to the Placements card on the landing page, defaulting to Placement & Internship Report.

## 3. Startups page — add 3D COBE globe

- Install `cobe`, `react-spring`, `clsx` (`clsx` may already be present).
- Reuse or create `src/components/Globe.tsx` wrapping the provided COBE snippet (props: `scale`, `dark`, `baseColor`, `glowColor`, `markerColor`, `markers`, etc.).
- On `src/routes/startups.tsx`, in the header block that reads "2,306 companies. 18 unicorns. One campus.", place a **small** globe (matching the red circle the user drew) to the right of that heading — roughly `280–340px` square, aligned with the copy, dark theme, red marker color to match the palette. Markers = a handful of hypothetical alumni-startup HQ locations.

## 4. Connect section rebuild (`/alumni`) — full scope

### Background & chrome
- Remove `StormLayer` from Connect (both landing and detail views); leave the file for other pages.
- New `src/components/connect/ConnectBackground.tsx`: static red / dark-green / black gradient + soft cursor-following radial glow.

### Landing view (no sector selected)
- **Left card** ("IIT Bombay Alumni Connect"): keep live-ticker; remove the `iitbombay.org` CTA button; footer becomes single line *"Visit the official IIT Bombay Alumni Association site for better engagement."*; shrink to ~75% width and shift further left.
- **Right card**: remove. The phrase **"For better engagement, connect to students"** becomes a large heading rendered on the background to the right of the left card.
- **Stat block** (`14 Sectors / 364 Recruiters / 1,475 Placed 23–24`): remove.
- **NotificationToaster** (`src/components/connect/NotificationToaster.tsx`): top-right rotating toast, ~4s visible then 8–10s hidden, cycling through 10–12 hypothetical messages.
- **Intro copy** (three centered lines) shown only on first entry from another top-level section (Ranks/Campus/Fees/Trends/Placements/Top Recruiters/Startups/Home). Detected via a `sessionStorage` flag set on the sector-detail back button (skip intro on return) and cleared/absent when arriving from a non-alumni route (show intro).
- **SectorTrain** (`src/components/connect/SectorTrain.tsx`): replaces the solar system. Horizontal continuously scrolling marquee (LTR), fills remaining vertical space, near-edge-to-edge. Each card: new 3D sector image + sector name + `NN companies` / `NN students` counters. Hover pauses that card; click opens sector detail.

### Sector detail view
- Same background; no StormLayer.
- Replace "Back to sectors" button with a **left-arrow icon** top-left; on click, set the `sessionStorage` "seenIntro" flag before navigating back.
- Keep top row (Alumni Connect card + big heading + NotificationToaster) visible.
- Remove sidebar; full width with minimal margin.
- **StudentPager** (`src/components/connect/StudentPager.tsx`): shows **2 students at a time**, auto-cycling every 7s across a roster of **≥10** per sector; prev/next + `n / total` indicator. Cards include: name, branch, year, CGPA, company, role/projects at the company, package (or stipend + "Intern" tag), joining year/experience, short personal blurb, and CTA **"Explore my resume & projects"** (placeholder external URL — `#`).
- **Feedback / Connect form**: single-view (no inner scroll), grows downward as user types, enforced char limits, cleaner inputs, single primary CTA "Connect with {Sector} alumni". Physical scrollbar hidden but page remains scrollable (`overflow-y: scroll` with hidden webkit scrollbar) per user note.

### Data
- Extend `src/data/sector-students.ts`: every sector has ≥10 students with all fields above.
- Add sector counters (`companies`, `students`) either onto `SECTORS` in `src/data/placements-2023-24.ts` or a new `src/data/sector-images.ts`; swap in new sector images.
- Regenerate one hyper-realistic 3D image per sector (Finance, AI/ML, Consulting, Core Engineering, Design, Software, Analytics, Product, Research, Energy, etc.) via `imagegen` at standard/premium quality, save to `src/assets/sectors/<key>.jpg`, import as ES modules.

## 5. Broken images (Campus 500 acres, Fees IIT Bombay hero, etc.)

Audit missing/broken image imports across `src/routes/campus.tsx`, `src/routes/fees.tsx`, and any other page reporting a load failure. Root causes are usually (a) an `*.asset.json` pointer whose remote URL 404s, or (b) an import path that doesn't exist. Fix by either re-pointing to an existing local `.jpg` in `src/assets/campus/` (there are several `gen-*.jpg` files) or generating a new image via `imagegen` and importing it directly. No behavior changes beyond making the images render.

## 6. Out of scope

- Visual polish of the sector-detail roster beyond the items above (revisit later).
- Wiring "Explore my resume & projects" CTAs to real URLs (placeholder `#` for now).
- Any other route not listed.

## Files touched

- **New**: `src/components/Globe.tsx`, `src/components/connect/ConnectBackground.tsx`, `src/components/connect/SectorTrain.tsx`, `src/components/connect/NotificationToaster.tsx`, `src/components/connect/StudentPager.tsx`, `src/assets/sectors/*.jpg`.
- **Rewritten**: `src/routes/alumni.tsx` (LandingView, SectorDetail, ConnectPage).
- **Edited**: `src/routes/__root.tsx` (Home nav item), `src/routes/index.tsx` (section connectivity + Placements dropdown), `src/routes/startups.tsx` (globe), `src/routes/campus.tsx` + `src/routes/fees.tsx` (image fixes), `src/data/sector-students.ts` (≥10 per sector), `src/data/placements-2023-24.ts` or new `src/data/sector-images.ts` (images + counters), `package.json` (add `cobe`, `react-spring`, `clsx`).
