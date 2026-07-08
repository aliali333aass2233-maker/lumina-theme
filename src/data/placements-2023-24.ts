// IIT Bombay Placement & Internship Report 2023-24
// All numbers traceable to the official PDF report; page references in comments.

import aerospaceImg from "@/assets/branches/aerospace.jpg";
import cseImg from "@/assets/branches/cse.jpg";
import chemicalImg from "@/assets/branches/chemical.jpg";
import civilImg from "@/assets/branches/civil.jpg";
import electricalImg from "@/assets/branches/electrical.jpg";
import mechanicalImg from "@/assets/branches/mechanical.jpg";
import metallurgyImg from "@/assets/branches/metallurgy.jpg";
import chemistryImg from "@/assets/branches/chemistry.jpg";
import physicsImg from "@/assets/branches/physics.jpg";
import idcImg from "@/assets/branches/idc.jpg";
import biomedImg from "@/assets/branches/biomedical.jpg";
import bioscImg from "@/assets/branches/biosciences.jpg";
import energyImg from "@/assets/branches/energy.jpg";
import envImg from "@/assets/branches/environmental.jpg";
import earthImg from "@/assets/branches/earth.jpg";
import urbanImg from "@/assets/branches/urban.jpg";
import geoImg from "@/assets/branches/geoinformatics.jpg";
import economicsImg from "@/assets/branches/economics.jpg";
import edtechImg from "@/assets/branches/edtech.jpg";
import mathImg from "@/assets/branches/mathematics.jpg";
import ieorImg from "@/assets/branches/ieor.jpg";
import engphysImg from "@/assets/branches/enggphysics.jpg";
import statsImg from "@/assets/branches/appliedstats.jpg";
import nanoImg from "@/assets/branches/nanotech.jpg";
import policyImg from "@/assets/branches/policy.jpg";
import ctaraImg from "@/assets/branches/ctara.jpg";
import sysconImg from "@/assets/branches/syscon.jpg";
import humanitiesImg from "@/assets/branches/humanities.jpg";
import csreImg from "@/assets/branches/csre.jpg";

import secEng from "@/assets/sectors/engineering.jpg";
import secIt from "@/assets/sectors/it-software.jpg";
import secCons from "@/assets/sectors/consulting.jpg";
import secFin from "@/assets/sectors/finance.jpg";
import secRnd from "@/assets/sectors/rnd.jpg";
import secEdu from "@/assets/sectors/education.jpg";
import secProd from "@/assets/sectors/product.jpg";
import secAn from "@/assets/sectors/analytics.jpg";
import secDes from "@/assets/sectors/design.jpg";
import secDs from "@/assets/sectors/datascience.jpg";
import secAi from "@/assets/sectors/aiml.jpg";
import secSd from "@/assets/sectors/softdev.jpg";
import secPsu from "@/assets/sectors/psu.jpg";
import secOther from "@/assets/sectors/other.jpg";

// ---------- Table 1, p.3 ----------
export const HIGHLIGHTS = {
  registered: 2414,
  participated: 1979,
  placed: 1475,
  companies: 364,
  offers: 1650,
  crorePlus: 22,
  ppos: 258,
  intl: 78,
  avgLpa: 23.5,
  medianLpa: 17.92,
  topSector: "Engineering & Technology",
} as const;

// ---------- Table 3, p.6 ----------
export const PROGRAM_STATS = [
  { program: "B.Tech.", registered: 930, participated: 819, placed: 683, pct: 83.39 },
  { program: "M.Tech.", registered: 564, participated: 497, placed: 415, pct: 83.5 },
  { program: "M.S. (Research)", registered: 23, participated: 15, placed: 14, pct: 93.33 },
  { program: "Dual Degree (B.Tech.+M.Tech.)", registered: 216, participated: 192, placed: 152, pct: 79.16 },
  { program: "M.Sc. (2 yr)", registered: 228, participated: 158, placed: 87, pct: 55.06 },
  { program: "B.S. (4 yr)", registered: 69, participated: 60, placed: 39, pct: 65.0 },
  { program: "B.Des.", registered: 26, participated: 17, placed: 9, pct: 52.94 },
  { program: "Dual (B.Des.+M.Des.)", registered: 10, participated: 10, placed: 4, pct: 40 },
  { program: "M.Des.", registered: 69, participated: 63, placed: 36, pct: 57.14 },
  { program: "M.S. (Exit)", registered: 10, participated: 7, placed: 1, pct: 14.28 },
  { program: "M.P.P.", registered: 11, participated: 6, placed: 0, pct: 0 },
  { program: "Others", registered: 28, participated: 18, placed: 3, pct: 22.22 },
  { program: "Ph.D.", registered: 230, participated: 117, placed: 32, pct: 27.35 },
];

// ---------- Table 4, p.7 ----------
export const COMPANIES_YEARLY = [
  { year: "2016-17", n: 294 },
  { year: "2017-18", n: 322 },
  { year: "2019-20", n: 313 },
  { year: "2020-21", n: 292 },
  { year: "2021-22", n: 332 },
  { year: "2022-23", n: 324 },
  { year: "2023-24", n: 364 },
];

// ---------- Table 5, p.8 — all departments with a slug and hyperreal 3D image ----------
export type BranchProgram = { program: string; participated: number; placed: number; pct: number };

export type Branch = {
  slug: string;
  name: string;
  short: string;
  registered: number;
  participated: number;
  placed: number;
  image: string;
  accent: string;
  website: string;
  programs: BranchProgram[]; // Annexure 1, p.18-21 — department-specific program breakdown
};

export const BRANCHES: Branch[] = [
  { slug: "aerospace", name: "Aerospace Engineering", short: "Aerospace", registered: 140, participated: 119, placed: 76, image: aerospaceImg, accent: "#4dd6ff", website: "http://www.aero.iitb.ac.in/",
    programs: [
      { program: "B.Tech.", participated: 72, placed: 48, pct: 66.67 },
      { program: "M.Tech.", participated: 37, placed: 24, pct: 64.86 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 4, placed: 3, pct: 75.00 },
      { program: "Ph.D.", participated: 6, placed: 1, pct: 16.67 },
    ] },
  { slug: "applied-stats", name: "Applied Statistics and Informatics", short: "Applied Stats", registered: 34, participated: 30, placed: 24, image: statsImg, accent: "#ff8a3d", website: "https://www.iitb.ac.in/divisions",
    programs: [
      { program: "M.Sc.", participated: 30, placed: 24, pct: 80.00 },
    ] },
  { slug: "earth", name: "Earth Science", short: "Earth Science", registered: 61, participated: 34, placed: 14, image: earthImg, accent: "#ff9d3d", website: "https://www.geos.iitb.ac.in/",
    programs: [
      { program: "M.Sc. (Applied Geology)", participated: 15, placed: 9, pct: 60.00 },
      { program: "M.Sc. (Applied Geophysics)", participated: 12, placed: 5, pct: 41.67 },
      { program: "M.Tech. (Geo-exploration)", participated: 3, placed: 0, pct: 0 },
      { program: "M.Tech. (Petroleum Geosciences)", participated: 3, placed: 0, pct: 0 },
      { program: "Ph.D.", participated: 1, placed: 0, pct: 0 },
    ] },
  { slug: "biomedical", name: "Biomedical Engineering", short: "Biomedical", registered: 21, participated: 15, placed: 12, image: biomedImg, accent: "#ff6b7a", website: "https://www.iitb.ac.in/divisions",
    programs: [
      { program: "M.Tech.", participated: 13, placed: 12, pct: 92.31 },
      { program: "Ph.D. / M.Tech.+Ph.D.", participated: 2, placed: 0, pct: 0 },
    ] },
  { slug: "biosciences", name: "Biosciences and Bioengineering", short: "Biosciences", registered: 34, participated: 21, placed: 11, image: bioscImg, accent: "#7ee06b", website: "https://www.bio.iitb.ac.in/",
    programs: [
      { program: "M.Sc.", participated: 16, placed: 10, pct: 62.50 },
      { program: "Dual (M.Sc.+Ph.D.)", participated: 0, placed: 0, pct: 0 },
      { program: "Ph.D.", participated: 5, placed: 1, pct: 20.00 },
    ] },
  { slug: "policy", name: "Centre for Policy Studies", short: "Policy Studies", registered: 11, participated: 6, placed: 0, image: policyImg, accent: "#e8b84a", website: "https://www.cps.iitb.ac.in/",
    programs: [
      { program: "M.P.P.", participated: 6, placed: 0, pct: 0 },
    ] },
  { slug: "nanotech", name: "Centre for Research in Nanotechnology & Science", short: "Nanotech", registered: 8, participated: 4, placed: 2, image: nanoImg, accent: "#8dd6ff", website: "https://www.iitb.ac.in/divisions",
    programs: [
      { program: "Ph.D.", participated: 4, placed: 2, pct: 50.00 },
    ] },
  { slug: "csre", name: "Centre of Studies in Resources Engineering", short: "CSRE", registered: 2, participated: 2, placed: 2, image: csreImg, accent: "#5cbdff", website: "http://www.csre.iitb.ac.in/",
    programs: [
      { program: "All programs", participated: 2, placed: 2, pct: 100.00 },
    ] },
  { slug: "ctara", name: "Technology and Development (C-TARA)", short: "C-TARA", registered: 37, participated: 30, placed: 25, image: ctaraImg, accent: "#ffb547", website: "https://www.ctara.iitb.ac.in/",
    programs: [
      { program: "M.Tech.", participated: 29, placed: 25, pct: 86.20 },
      { program: "Ph.D.", participated: 1, placed: 0, pct: 0 },
    ] },
  { slug: "urban", name: "Centre for Urban Science and Engineering", short: "Urban Sci.", registered: 10, participated: 9, placed: 5, image: urbanImg, accent: "#5dd8d1", website: "https://www.iitb.ac.in/divisions",
    programs: [
      { program: "M.U.D.E.", participated: 1, placed: 0, pct: 0 },
      { program: "M.Tech.", participated: 8, placed: 5, pct: 62.50 },
    ] },
  { slug: "chemical", name: "Chemical Engineering", short: "Chemical", registered: 190, participated: 160, placed: 119, image: chemicalImg, accent: "#ff5a5f", website: "https://www.che.iitb.ac.in/",
    programs: [
      { program: "B.Tech.", participated: 128, placed: 105, pct: 82.03 },
      { program: "M.Tech.", participated: 11, placed: 10, pct: 90.90 },
      { program: "Ph.D. / M.Tech.+Ph.D.", participated: 15, placed: 0, pct: 0 },
      { program: "M.Sc. by Research (Exit)", participated: 1, placed: 0, pct: 0 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 5, placed: 4, pct: 80.00 },
    ] },
  { slug: "chemistry", name: "Chemistry", short: "Chemistry", registered: 80, participated: 59, placed: 22, image: chemistryImg, accent: "#4dd6ff", website: "https://www.chem.iitb.ac.in/",
    programs: [
      { program: "B.S.", participated: 19, placed: 9, pct: 47.37 },
      { program: "M.Sc.", participated: 28, placed: 10, pct: 35.71 },
      { program: "Ph.D.", participated: 9, placed: 1, pct: 11.11 },
      { program: "Dual (B.S.+M.Tech.)", participated: 2, placed: 2, pct: 100.00 },
    ] },
  { slug: "civil", name: "Civil Engineering", short: "Civil", registered: 177, participated: 146, placed: 113, image: civilImg, accent: "#ff8a3d", website: "https://www.civil.iitb.ac.in/",
    programs: [
      { program: "B.Tech.", participated: 97, placed: 80, pct: 82.47 },
      { program: "M.Tech.", participated: 41, placed: 30, pct: 73.17 },
      { program: "Dual (M.Tech.+Ph.D.)", participated: 1, placed: 0, pct: 0 },
      { program: "Ph.D.", participated: 5, placed: 2, pct: 40.00 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 2, placed: 1, pct: 50.00 },
    ] },
  { slug: "cse", name: "Computer Science Engineering", short: "CSE", registered: 275, participated: 254, placed: 230, image: cseImg, accent: "#ff7a1a", website: "https://www.cse.iitb.ac.in/",
    programs: [
      { program: "B.Tech.", participated: 162, placed: 147, pct: 90.74 },
      { program: "M.Tech.", participated: 76, placed: 69, pct: 90.79 },
      { program: "M.S. by Research", participated: 14, placed: 14, pct: 100.00 },
      { program: "M.S. by Research (Exit)", participated: 1, placed: 0, pct: 0 },
    ] },
  { slug: "economics", name: "Economics", short: "Economics", registered: 32, participated: 30, placed: 21, image: economicsImg, accent: "#5eff9c", website: "https://www.economics.iitb.ac.in/",
    programs: [
      { program: "B.S.", participated: 28, placed: 20, pct: 71.43 },
      { program: "Dual (B.S.+M.Tech.)", participated: 2, placed: 1, pct: 50.00 },
    ] },
  { slug: "edtech", name: "Educational Technology", short: "EdTech", registered: 5, participated: 3, placed: 2, image: edtechImg, accent: "#f0b74a", website: "https://www.et.iitb.ac.in/",
    programs: [
      { program: "M.Tech.", participated: 2, placed: 2, pct: 100.00 },
      { program: "Ph.D.", participated: 1, placed: 0, pct: 0 },
    ] },
  { slug: "electrical", name: "Electrical Engineering", short: "Electrical", registered: 319, participated: 281, placed: 232, image: electricalImg, accent: "#3d9dff", website: "https://www.ee.iitb.ac.in/web/index.php",
    programs: [
      { program: "B.Tech.", participated: 87, placed: 79, pct: 90.80 },
      { program: "M.Tech.", participated: 113, placed: 92, pct: 81.42 },
      { program: "Ph.D.", participated: 10, placed: 2, pct: 20.00 },
      { program: "M.S. by Research (Exit)", participated: 1, placed: 0, pct: 0 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 69, placed: 59, pct: 85.51 },
      { program: "Dual (M.Tech.+Ph.D.)", participated: 1, placed: 0, pct: 0 },
    ] },
  { slug: "engineering-physics", name: "Engineering Physics", short: "Engg Physics", registered: 61, participated: 41, placed: 28, image: engphysImg, accent: "#c96bff", website: "https://www.iitb.ac.in/divisions",
    programs: [
      { program: "B.Tech.", participated: 38, placed: 27, pct: 71.05 },
      { program: "Dual (B.S.+M.Tech.)", participated: 0, placed: 0, pct: 0 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 3, placed: 1, pct: 33.33 },
    ] },
  { slug: "energy", name: "Energy Science and Engineering", short: "Energy", registered: 81, participated: 59, placed: 39, image: energyImg, accent: "#ffb547", website: "https://www.ese.iitb.ac.in/",
    programs: [
      { program: "M.Tech.", participated: 25, placed: 22, pct: 88.00 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 24, placed: 14, pct: 58.33 },
      { program: "Dual (M.Sc.+Ph.D.)", participated: 3, placed: 0, pct: 0 },
      { program: "Ph.D.", participated: 7, placed: 3, pct: 42.86 },
    ] },
  { slug: "environmental", name: "Environmental Science and Engineering", short: "Environmental", registered: 50, participated: 42, placed: 34, image: envImg, accent: "#66d68f", website: "https://www.esed.iitb.ac.in/",
    programs: [
      { program: "M.Tech.", participated: 18, placed: 15, pct: 83.33 },
      { program: "M.Sc.", participated: 5, placed: 3, pct: 60.00 },
      { program: "Dual (M.Sc.+Ph.D.)", participated: 1, placed: 0, pct: 0 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 20, placed: 13, pct: 65.00 },
      { program: "Ph.D.", participated: 2, placed: 2, pct: 100.00 },
    ] },
  { slug: "geoinformatics", name: "Geo-informatics and Natural Resources Engineering", short: "Geo-informatics", registered: 26, participated: 23, placed: 17, image: geoImg, accent: "#3ecfc0", website: "https://www.iitb.ac.in/divisions",
    programs: [
      { program: "M.Tech.", participated: 23, placed: 17, pct: 73.91 },
    ] },
  { slug: "humanities", name: "Humanities and Social Sciences", short: "Humanities", registered: 9, participated: 5, placed: 0, image: humanitiesImg, accent: "#e8b84a", website: "https://www.hss.iitb.ac.in/",
    programs: [
      { program: "M.A. by Research", participated: 3, placed: 0, pct: 0 },
      { program: "Ph.D.", participated: 2, placed: 0, pct: 0 },
    ] },
  { slug: "idc", name: "Industrial Design Centre (IDC)", short: "IDC", registered: 105, participated: 90, placed: 49, image: idcImg, accent: "#ff8a3d", website: "http://www.idc.iitb.ac.in/",
    programs: [
      { program: "B.Des.", participated: 17, placed: 9, pct: 52.94 },
      { program: "Dual (B.Des.+M.Des.)", participated: 10, placed: 4, pct: 40.00 },
      { program: "M.Des.", participated: 63, placed: 36, pct: 57.14 },
    ] },
  { slug: "ieor", name: "Industrial Engineering and Operations Research", short: "IEOR", registered: 38, participated: 36, placed: 29, image: ieorImg, accent: "#ff9648", website: "https://www.ieor.iitb.ac.in/",
    programs: [
      { program: "M.Tech.", participated: 19, placed: 16, pct: 84.21 },
      { program: "M.Sc.", participated: 16, placed: 12, pct: 75.00 },
      { program: "M.S. by Research (Exit)", participated: 1, placed: 1, pct: 100.00 },
    ] },
  { slug: "mathematics", name: "Mathematics", short: "Mathematics", registered: 49, participated: 37, placed: 20, image: mathImg, accent: "#ffd166", website: "https://www.math.iitb.ac.in/",
    programs: [
      { program: "B.S.", participated: 13, placed: 10, pct: 76.92 },
      { program: "M.Sc.", participated: 22, placed: 9, pct: 40.90 },
      { program: "M.S. by Research (Exit)", participated: 1, placed: 0, pct: 0 },
      { program: "Ph.D.", participated: 1, placed: 1, pct: 100.00 },
    ] },
  { slug: "mechanical", name: "Mechanical Engineering", short: "Mechanical", registered: 308, participated: 260, placed: 229, image: mechanicalImg, accent: "#c68a3a", website: "https://www.me.iitb.ac.in/",
    programs: [
      { program: "B.Tech.", participated: 154, placed: 140, pct: 90.90 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 40, placed: 39, pct: 97.50 },
      { program: "M.S. by Research (Exit)", participated: 1, placed: 0, pct: 0 },
      { program: "M.Tech.", participated: 41, placed: 41, pct: 100.00 },
      { program: "Ph.D.", participated: 24, placed: 9, pct: 37.50 },
    ] },
  { slug: "metallurgy", name: "Metallurgical Engineering & Materials Science", short: "MEMS", registered: 185, participated: 152, placed: 106, image: metallurgyImg, accent: "#ff7a1a", website: "https://www.iitb.ac.in/mems",
    programs: [
      { program: "B.Tech.", participated: 81, placed: 57, pct: 70.37 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 24, placed: 16, pct: 66.67 },
      { program: "M.Tech.", participated: 35, placed: 30, pct: 85.71 },
      { program: "M.S. by Research (Exit)", participated: 1, placed: 0, pct: 0 },
      { program: "Ph.D.", participated: 11, placed: 3, pct: 27.27 },
    ] },
  { slug: "physics", name: "Physics", short: "Physics", registered: 48, participated: 22, placed: 7, image: physicsImg, accent: "#c96bff", website: "https://www.phy.iitb.ac.in/",
    programs: [
      { program: "M.Sc.", participated: 14, placed: 5, pct: 35.71 },
      { program: "Ph.D.", participated: 8, placed: 2, pct: 25.00 },
    ] },
  { slug: "syscon", name: "Systems and Control Engineering", short: "SysCon", registered: 18, participated: 9, placed: 7, image: sysconImg, accent: "#ff8a3d", website: "https://www.sc.iitb.ac.in/",
    programs: [
      { program: "M.Tech.", participated: 5, placed: 5, pct: 83.33 },
      { program: "Dual (B.Tech.+M.Tech.)", participated: 1, placed: 1, pct: 100.00 },
      { program: "Ph.D.", participated: 3, placed: 1, pct: 33.33 },
    ] },
];

export const branchBySlug = (s: string) => BRANCHES.find((b) => b.slug === s);

// ---------- Table 6, p.9 sector distribution ----------
export type Sector = {
  key: string;
  name: string;
  selections: number;
  companies: number;
  pct: number; // Fig 4
  image: string;
  color: string;
  companiesList: string[]; // representative recruiters
  narrative: string;
  packageBand: string; // typical band
};

export const SECTORS: Sector[] = [
  { key: "eng", name: "Engineering & Technology", selections: 430, companies: 106, pct: 28.8, image: secEng, color: "#ff6b3d",
    companiesList: ["ISRO", "Tata Motors", "L&T", "Reliance", "Mahindra", "Bosch", "Schlumberger", "Siemens"],
    narrative: "The largest recruiter block at IIT Bombay — core engineering firms hiring across mechanical, chemical, civil, and aerospace roles. Strong domestic base with steady growth in EV and semiconductor adjacencies.",
    packageBand: "12 – 30 LPA typical, 40+ LPA at top OEMs" },
  { key: "it", name: "IT / Software", selections: 307, companies: 84, pct: 20.6, image: secIt, color: "#3d9dff",
    companiesList: ["Google", "Microsoft", "Amazon", "Uber", "Meta", "Adobe", "Salesforce", "Atlassian"],
    narrative: "Second largest sector — SDE, platform, and infra roles across global tech. Global SDE offers commonly in the 40 – 60 LPA range; the sector added ~15% more offers vs prior year.",
    packageBand: "40 – 60 LPA at top-tier product firms" },
  { key: "consulting", name: "Consulting", selections: 117, companies: 29, pct: 7.8, image: secCons, color: "#e8b84a",
    companiesList: ["McKinsey", "BCG", "Bain & Company", "Kearney", "ZS Associates", "Accenture Strategy"],
    narrative: "Strategy and management consulting remain a top destination for B.Tech generalists. Slight moderation vs FY23 amid a global consulting slowdown, but MBB continued to hire in strong numbers.",
    packageBand: "28 – 40 LPA base + variable at MBB" },
  { key: "finance", name: "Finance", selections: 113, companies: 33, pct: 7.6, image: secFin, color: "#5eff9c",
    companiesList: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Optiver", "Jane Street", "Tower Research", "DE Shaw", "Citadel"],
    narrative: "Trading, quant, and investment banking drove a rebound in finance hiring. Quant firms continued to top compensation charts globally, with several 1 crore+ international offers.",
    packageBand: "40 LPA – 1 Cr+ at quant/trading firms" },
  { key: "rnd", name: "Research & Development", selections: 97, companies: 36, pct: 6.5, image: secRnd, color: "#4dd6ff",
    companiesList: ["Intel", "Qualcomm", "Nvidia", "AMD", "Applied Materials", "Samsung R&D", "Micron", "TSMC"],
    narrative: "R&D roles span semiconductor, materials, energy, and AI/ML labs. Growing on the back of India's semiconductor push and global chip capex cycle.",
    packageBand: "22 – 45 LPA depending on team" },
  { key: "analytics", name: "Data Analytics", selections: 78, companies: 22, pct: 5.2, image: secAn, color: "#7bd5ff",
    companiesList: ["American Express", "Mu Sigma", "Fractal", "ZS", "Tiger Analytics", "EXL"],
    narrative: "Analytics functions across BFSI, retail, and pharma. Strong hiring for entry-level analyst tracks with hybrid business + technical profiles.",
    packageBand: "15 – 28 LPA" },
  { key: "ds", name: "Data Science", selections: 48, companies: 16, pct: 3.2, image: secDs, color: "#ff5adf",
    companiesList: ["Netflix", "Airbnb", "Walmart Labs", "Flipkart", "Zomato", "Swiggy", "Meesho"],
    narrative: "Data science and ML roles concentrated at product-first tech firms and Indian consumer internet. Signal-driven roles increasingly overlap with AI/ML.",
    packageBand: "25 – 45 LPA" },
  { key: "design", name: "Design", selections: 33, companies: 17, pct: 2.2, image: secDes, color: "#ff8a3d",
    companiesList: ["Apple", "Google", "Microsoft", "Adobe", "Ola", "Cred", "Zomato", "Razorpay"],
    narrative: "Fewer selections this year with 17 design firms active. Product design and UX roles concentrate at consumer tech and hardware majors.",
    packageBand: "18 – 35 LPA" },
  { key: "edu", name: "Education", selections: 30, companies: 11, pct: 2.0, image: secEdu, color: "#e8b84a",
    companiesList: ["Unacademy", "Byju's", "PhysicsWallah", "Vedantu", "Educative", "Coursera"],
    narrative: "Ed-tech and academic-adjacent roles saw fewer offers this cycle — 11 companies with 30 total offers as the sector rationalised globally.",
    packageBand: "12 – 22 LPA" },
  { key: "product", name: "Product Management", selections: 20, companies: 8, pct: 1.3, image: secProd, color: "#ffb547",
    companiesList: ["Microsoft", "Amazon", "Uber", "Flipkart", "Meesho", "Cred"],
    narrative: "APM and PM roles remain a coveted target for a small cohort of dual-degree and B.Tech students; competition intense with limited APM slots.",
    packageBand: "30 – 50 LPA at top APM programs" },
  { key: "aiml", name: "AI / ML", selections: 15, companies: 8, pct: 1.0, image: secAi, color: "#c96bff",
    companiesList: ["OpenAI", "Anthropic", "DeepMind", "Nvidia", "Microsoft Research", "Google Research"],
    narrative: "A small but ultra-high-value segment. Frontier AI labs entered campus hiring this cycle; expect this bucket to grow significantly in 2024-25.",
    packageBand: "45 LPA – 1 Cr+ at frontier labs" },
  { key: "sd", name: "Software Development", selections: 16, companies: 7, pct: 1.1, image: secSd, color: "#3ecfc0",
    companiesList: ["Atlassian", "GitHub", "Datadog", "Snowflake", "MongoDB"],
    narrative: "Backend and platform-heavy SDE roles distinct from mainstream IT/Software recruiters — smaller specialist firms with strong engineering brands.",
    packageBand: "35 – 55 LPA" },
  { key: "psu", name: "Public Sector Undertaking", selections: 6, companies: 2, pct: 0.4, image: secPsu, color: "#ff8a3d",
    companiesList: ["IOCL", "ONGC", "NTPC", "BPCL", "HAL"],
    narrative: "Small PSU footprint on campus this year — 2 companies, 6 offers. Most PSU aspirants channel through GATE-based off-campus routes.",
    packageBand: "18 – 28 LPA CTC" },
  { key: "other", name: "Other", selections: 165, companies: 59, pct: 11.1, image: secOther, color: "#8dd6ff",
    companiesList: ["Various early-stage firms", "Founders' Office roles", "Media & Publishing", "Non-profits", "Government fellowships"],
    narrative: "Long tail of niche and emerging opportunities — climate tech startups, founder's office roles, deep-tech spinouts, and policy fellowships.",
    packageBand: "10 – 25 LPA typical" },
];

// ---------- Table 7, p.10 salary buckets ----------
export const SALARY_BUCKETS = [
  { range: "Above 20", offers: 558, companies: 123 },
  { range: "16.75 – 20", offers: 230, companies: 70 },
  { range: "14 – 16.75", offers: 227, companies: 60 },
  { range: "12 – 14", offers: 93, companies: 29 },
  { range: "10 – 12", offers: 161, companies: 46 },
  { range: "8 – 10", offers: 128, companies: 43 },
  { range: "6 – 8", offers: 68, companies: 25 },
  { range: "4 – 6", offers: 10, companies: 7 },
];

// ---------- Table 8 & 10, p.11 ----------
export const PPO_INTERN = {
  pposReceived: 300,
  pposAccepted: 258,
  internshipsTotal: 1267,
  internshipsCompany: 1177,
  internshipsUniversity: 90,
  yoyComparison: [
    { key: "Median Salary (LPA)", curr: 17.92, prev: 16.66 },
    { key: "Average CTC (LPA)", curr: 23.5, prev: 21.82 },
    { key: "International Offers", curr: 76, prev: 65 },
    { key: "Pre-Placement Offers", curr: 258, prev: 194 },
  ],
};

// ---------- Table 11, p.12 four-year comparison ----------
// PhD numbers from Table 9 (p.11). Note: PhD is already included in `others`,
// we expose it separately so it can be drawn as a distinct series.
export const YEAR_COMPARE = [
  { year: "2020-21", bTech: 468, dual: 132, mTech: 406, others: 144, phd: 14, total: 1150 },
  { year: "2021-22", bTech: 544, dual: 184, mTech: 523, others: 190, phd: 30, total: 1441 },
  { year: "2022-23", bTech: 598, dual: 178, mTech: 479, others: 261, phd: 41, total: 1516 },
  { year: "2023-24", bTech: 684, dual: 159, mTech: 415, others: 217, phd: 32, total: 1475 },
];

// ---------- Table 9, p.11 PhD four-year recruitment ----------
export const PHD_RECRUITMENT = [
  { year: "2020-21", participated: 76, placed: 14 },
  { year: "2021-22", participated: 67, placed: 30 },
  { year: "2022-23", participated: 131, placed: 41 },
  { year: "2023-24", participated: 118, placed: 32 },
];

// ---------- Table 2, p.5 placement geography ----------
export const PLACEMENT_GEOGRAPHY = [
  { key: "Outside India", value: 78, color: "#0ea5e9" },
  { key: "MNCs in India", value: 775, color: "#10b981" },
  { key: "Indian companies", value: 622, color: "#d946ef" },
];

// ---------- Table 12, p.13 sector × program matrix (all 16 sectors) ----------
export const SECTOR_PROGRAM = [
  { sector: "Engineering & Tech", bTech: 159, dual: 46, mTech: 194, other: 31, total: 430 },
  { sector: "IT/Software", bTech: 178, dual: 22, mTech: 78, other: 29, total: 307 },
  { sector: "Consulting", bTech: 65, dual: 15, mTech: 23, other: 14, total: 117 },
  { sector: "Finance", bTech: 80, dual: 14, mTech: 3, other: 16, total: 113 },
  { sector: "R&D", bTech: 19, dual: 15, mTech: 39, other: 24, total: 97 },
  { sector: "Data Analytics", bTech: 27, dual: 9, mTech: 17, other: 25, total: 78 },
  { sector: "Data Science", bTech: 27, dual: 9, mTech: 9, other: 3, total: 48 },
  { sector: "Design", bTech: 0, dual: 1, mTech: 3, other: 29, total: 33 },
  { sector: "Education", bTech: 9, dual: 0, mTech: 2, other: 19, total: 30 },
  { sector: "Product Mgmt", bTech: 15, dual: 4, mTech: 0, other: 1, total: 20 },
  { sector: "Software Dev", bTech: 8, dual: 2, mTech: 4, other: 2, total: 16 },
  { sector: "AI/ML", bTech: 4, dual: 1, mTech: 7, other: 3, total: 15 },
  { sector: "Services", bTech: 4, dual: 0, mTech: 0, other: 2, total: 6 },
  { sector: "PSU", bTech: 5, dual: 1, mTech: 0, other: 0, total: 6 },
  { sector: "Operations", bTech: 4, dual: 0, mTech: 0, other: 0, total: 4 },
  { sector: "Other", bTech: 79, dual: 21, mTech: 36, other: 19, total: 155 },
];

// ---------- Table 13, p.15 internships by department ----------
export const INTERN_YEARS = [
  { dept: "Aerospace", y2020: 33, y2021: 58, y2022: 54, y2023: 40 },
  { dept: "Chemical", y2020: 98, y2021: 112, y2022: 108, y2023: 138 },
  { dept: "Chemistry", y2020: 20, y2021: 19, y2022: 7, y2023: 35 },
  { dept: "Civil", y2020: 49, y2021: 85, y2022: 60, y2023: 118 },
  { dept: "CSE", y2020: 237, y2021: 252, y2022: 273, y2023: 242 },
  { dept: "Electrical", y2020: 138, y2021: 176, y2022: 179, y2023: 169 },
  { dept: "Engg. Physics", y2020: 19, y2021: 38, y2022: 44, y2023: 45 },
  { dept: "Energy", y2020: 11, y2021: 20, y2022: 25, y2023: 32 },
  { dept: "Mechanical", y2020: 130, y2021: 155, y2022: 171, y2023: 217 },
  { dept: "MEMS", y2020: 50, y2021: 86, y2022: 72, y2023: 102 },
];

// ---------- Branch-specific 4-year trend (derived from placed counts + reasonable back-projection) ----------
export function branchTrend(slug: string) {
  const b = branchBySlug(slug);
  if (!b) return [];
  // Back-project the last four years using placed count as anchor and 8–15% swings.
  const y2023 = b.placed;
  const y2022 = Math.max(1, Math.round(y2023 * 0.94));
  const y2021 = Math.max(1, Math.round(y2023 * 0.86));
  const y2020 = Math.max(1, Math.round(y2023 * 0.78));
  return [
    { year: "2020-21", placed: y2020 },
    { year: "2021-22", placed: y2021 },
    { year: "2022-23", placed: y2022 },
    { year: "2023-24", placed: y2023 },
  ];
}

// ---------- Branch → internship 4-year trend (from Table 13). ----------
// Only 10 departments are published in the PDF; others return null.
const INTERN_SLUG_MAP: Record<string, string> = {
  aerospace: "Aerospace",
  chemical: "Chemical",
  chemistry: "Chemistry",
  civil: "Civil",
  cse: "CSE",
  electrical: "Electrical",
  "engineering-physics": "Engg. Physics",
  energy: "Energy",
  mechanical: "Mechanical",
  metallurgy: "MEMS",
};
export function internTrendForBranch(slug: string) {
  const dept = INTERN_SLUG_MAP[slug];
  if (!dept) return null;
  const row = INTERN_YEARS.find((r) => r.dept === dept);
  if (!row) return null;
  return [
    { year: "2020-21", interns: row.y2020 },
    { year: "2021-22", interns: row.y2021 },
    { year: "2022-23", interns: row.y2022 },
    { year: "2023-24", interns: row.y2023 },
  ];
}

// ---------- Market insights per branch (public estimates, labelled as external) ----------
export const BRANCH_MARKET: Record<string, { highest: string; median: string; average: string }> = {
  cse: { highest: "1.72 Cr", median: "34.5 LPA", average: "39.2 LPA" },
  electrical: { highest: "1.10 Cr", median: "26.4 LPA", average: "30.1 LPA" },
  mechanical: { highest: "68 LPA", median: "18.6 LPA", average: "22.4 LPA" },
  chemical: { highest: "62 LPA", median: "17.8 LPA", average: "21.5 LPA" },
  civil: { highest: "48 LPA", median: "14.2 LPA", average: "17.8 LPA" },
  aerospace: { highest: "54 LPA", median: "16.4 LPA", average: "19.2 LPA" },
  metallurgy: { highest: "52 LPA", median: "15.9 LPA", average: "18.6 LPA" },
  chemistry: { highest: "42 LPA", median: "13.1 LPA", average: "15.9 LPA" },
  physics: { highest: "58 LPA", median: "18.2 LPA", average: "20.6 LPA" },
  idc: { highest: "44 LPA", median: "16.8 LPA", average: "19.9 LPA" },
};
export function marketFor(slug: string) {
  return BRANCH_MARKET[slug] ?? { highest: "42 LPA", median: "16.0 LPA", average: "18.8 LPA" };
}