/**
 * Showcase content for the landing page.
 * Everything here is illustrative / plausibly-fake — swap for real data later.
 */

// ---------- Bottom-right notification pool (20+) ----------
export const NOTIFICATIONS = [
  { tag: "Placements",  title: "Aarav Mehta bags ₹1.2 Cr offer",       body: "CSE senior signs with Jane Street as a Quant SWE — highest domestic offer of the season." },
  { tag: "Fest",         title: "Mood Indigo 2026 lineup announced",    body: "Divine, Anuv Jain and Kavya Trehan headline Asia's largest cultural festival this December." },
  { tag: "Techfest",     title: "Robotix wins Techfest challenge",      body: "IITB's autonomous drone swarm takes first place at International Robotics Championship." },
  { tag: "Internships",  title: "22 sophomores intern at OpenAI",       body: "Record cohort selected for research summer at San Francisco and London offices." },
  { tag: "Research",     title: "Prof. Sinha wins Bhatnagar Prize",     body: "Recognised for pioneering work in room-temperature superconducting materials." },
  { tag: "Startups",     title: "Ola founder returns to campus",        body: "Bhavish Aggarwal delivers keynote at E-Cell entrepreneurship summit; announces ₹50 Cr alumni fund." },
  { tag: "Ranks",        title: "IITB climbs to #3 in QS Asia",         body: "Best-ever showing for the institute — up two spots year-on-year." },
  { tag: "Placements",   title: "Google returns as top recruiter",      body: "48 offers made across CSE, EE and Math+CS — median CTC ₹58 LPA." },
  { tag: "Culture",      title: "Powai Lake cleanup drive success",     body: "NSS volunteers collect 2.3 tonnes of plastic waste across campus and lake perimeter." },
  { tag: "Academics",    title: "New Minor: Quantum Technologies",      body: "Cross-department program opens to 3rd-year UG students from Autumn 2026." },
  { tag: "Sports",       title: "Inter-IIT gold in aquatics",           body: "Swim team wins 6 gold, 4 silver at Inter-IIT Sports Meet 2026 held at IIT Roorkee." },
  { tag: "Alumni",       title: "Zeta founder featured on Forbes",      body: "Bhavin Turakhia (CSE '00) named among India's top fintech entrepreneurs of the year." },
  { tag: "Fest",         title: "E-Summit registrations live",          body: "India's largest college entrepreneurship summit opens for delegate signups this weekend." },
  { tag: "Research",     title: "IITB-ISRO Chandrayaan collab",         body: "Aerospace team's payload selected for lunar south-pole rover mission scheduled Q3 2027." },
  { tag: "Internships",  title: "6 students intern at Jane Street",     body: "Highest-ever selection from a single Indian college for the quant firm's SG programme." },
  { tag: "Startups",     title: "SINE portfolio hits ₹8,400 Cr",        body: "Incubator's alumni startups collectively cross new valuation milestone." },
  { tag: "Placements",   title: "Microsoft PPO for 14 interns",         body: "Pre-placement offers made after summer'26 internship program across Redmond & Bangalore." },
  { tag: "Culture",      title: "Rendezvous rock night packs LT",       body: "Local indie band Peter Cat Recording Co. performs to a house of 2,400 students." },
  { tag: "Academics",    title: "Med-tech department gets green light", body: "Senate approves formation of India's first medical robotics academic department." },
  { tag: "Alumni",       title: "Nithin Kamath donates ₹250 Cr",        body: "Zerodha co-founder pledges towards a new Applied AI research building at Powai campus." },
  { tag: "Placements",   title: "Rhea Kapoor accepts D.E. Shaw offer",  body: "Math + CS dual-degree student picks NYC quant role over multiple bulge-bracket offers." },
];

// ---------- Connect (3 cards, rich bios) ----------
export const ALUMNI = [
  {
    name: "Aarav Sharma",
    branch: "CSE '18",
    role: "Staff SWE @ Google",
    package: "₹1.05 Cr TC",
    bio: "Distributed systems lead on Google Ads infra. Loves algorithms, JEE mentoring and long-distance running.",
    interests: ["Algorithms", "Distributed Systems", "ML infra"],
    glow: "inner-glow-green" as const,
    seed: "aarav-sharma",
  },
  {
    name: "Riya Iyer",
    branch: "EE '19",
    role: "Founder @ Stealth AI",
    package: "Ex-Meta · ₹92 L",
    bio: "Building generative video tooling for indie studios. Previously PyTorch team @ Meta. Speaks at PyData Mumbai.",
    interests: ["Deep Learning", "Systems", "Creative tech"],
    glow: "inner-glow-blue" as const,
    seed: "riya-iyer",
  },
  {
    name: "Kabir Nair",
    branch: "Mechanical '17",
    role: "Sr. PM @ Tesla",
    package: "$310K TC",
    bio: "Powertrain product lead on Cybertruck programme. Fremont-based. Mentors 20+ IITB juniors every recruiting cycle.",
    interests: ["Hardware", "Manufacturing", "EV supply chain"],
    glow: "inner-glow-yellow" as const,
    seed: "kabir-nair",
  },
];

export function avatarUrl(seed: string): string {
  // DiceBear v9 open-source avatars — no auth needed, deterministic per seed.
  return `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(seed)}&backgroundType=gradientLinear&backgroundColor=b1180a,7a0d18,3c0a1a`;
}

// ---------- Latest Updates (4 boxes × 4 items = 16) ----------
export const UPDATE_SETS: { date: string; text: string }[][] = [
  [
    { date: "05 Jul 2026", text: "JEE Advanced 2026 branch-wise cutoffs updated on Ranks Explorer." },
    { date: "01 Jul 2026", text: "IITB retains #3 rank in NIRF Engineering rankings for the fifth year running." },
    { date: "24 Jun 2026", text: "JoSAA counselling round 4 seat matrix released — 40 supernumerary female seats added." },
    { date: "18 Jun 2026", text: "New EWS PwD data added for all IITB branches (2016 → 2025)." },
  ],
  [
    { date: "28 Jun 2026", text: "Techfest 2027 early-bird delegate registrations now open — 15% discount till 31 July." },
    { date: "20 Jun 2026", text: "Mood Indigo 2026 headliner reveal: Divine, Anuv Jain, Kavya Trehan on the main stage." },
    { date: "10 Jun 2026", text: "E-Summit'26 hosts 4,200 delegates across 14 tracks — largest edition ever." },
    { date: "02 Jun 2026", text: "Rendezvous inter-college sports meet dates confirmed: 12–14 October at Powai campus." },
  ],
  [
    { date: "12 Jun 2026", text: "New alumni added to CSE mentor network — 34 verified in the last week." },
    { date: "05 Jun 2026", text: "Alumni-founded Zeta announces ₹250 Cr Series-F led by Sequoia and Tiger Global." },
    { date: "22 May 2026", text: "SINE incubator crosses ₹8,400 Cr aggregate portfolio valuation milestone." },
    { date: "10 May 2026", text: "Ola founder Bhavish Aggarwal delivers commencement address at 61st convocation." },
  ],
  [
    { date: "30 May 2026", text: "Placement report'25 released: median UG4 ₹19.61L, ₹1.7 Cr highest domestic offer." },
    { date: "22 May 2026", text: "Google returns as top recruiter with 48 offers across CSE, EE and Math+CS." },
    { date: "14 May 2026", text: "22 sophomores selected for OpenAI research internships (SF + London)." },
    { date: "01 May 2026", text: "Prof. R. Sinha wins Shanti Swarup Bhatnagar Prize for materials research." },
  ],
];

// ---------- Placements (expanded, cycles through) ----------
export const PLACEMENTS = [
  { branch: "Computer Science",       rate: "100%", median: "₹34.2L", avg: "₹41.8L", highest: "₹1.72 Cr" },
  { branch: "Electrical Engg",        rate: "97%",  median: "₹24.8L", avg: "₹28.6L", highest: "₹85.4L" },
  { branch: "Mechanical Engg",        rate: "89%",  median: "₹18.4L", avg: "₹21.2L", highest: "₹58.0L" },
  { branch: "Chemical Engg",          rate: "84%",  median: "₹16.9L", avg: "₹19.4L", highest: "₹42.5L" },
  { branch: "Aerospace Engg",         rate: "82%",  median: "₹17.6L", avg: "₹20.1L", highest: "₹46.0L" },
  { branch: "Civil Engg",             rate: "76%",  median: "₹14.2L", avg: "₹16.8L", highest: "₹38.4L" },
  { branch: "Engineering Physics",    rate: "94%",  median: "₹28.9L", avg: "₹33.4L", highest: "₹96.0L" },
  { branch: "Metallurgy & Materials", rate: "78%",  median: "₹15.1L", avg: "₹17.9L", highest: "₹40.2L" },
  { branch: "Environmental Engg",     rate: "71%",  median: "₹13.4L", avg: "₹15.6L", highest: "₹32.0L" },
  { branch: "Electrical (Dual)",      rate: "96%",  median: "₹26.5L", avg: "₹30.7L", highest: "₹1.05 Cr" },
  { branch: "Economics",              rate: "92%",  median: "₹22.8L", avg: "₹26.4L", highest: "₹68.0L" },
];

// ---------- Alumni Startups (10) ----------
export const STARTUPS = [
  { name: "Ola",           founder: "Bhavish Aggarwal",   branch: "CSE '08",  valuation: "$4.8B",  sector: "Mobility" },
  { name: "Housing.com",   founder: "Rahul Yadav",        branch: "CSE '12",  valuation: "$300M",  sector: "PropTech" },
  { name: "Zeta",          founder: "Bhavin Turakhia",    branch: "CSE '00",  valuation: "$1.5B",  sector: "Fintech" },
  { name: "Chaayos",       founder: "Nitin Saluja",       branch: "Mech '05", valuation: "$220M",  sector: "F&B" },
  { name: "InMobi",        founder: "Naveen Tewari",      branch: "Mech '00", valuation: "$1.2B",  sector: "AdTech" },
  { name: "PhonePe (ex)",  founder: "Sameer Nigam",       branch: "EE '99",   valuation: "$12B",   sector: "Fintech" },
  { name: "Fractal AI",    founder: "Srikanth Velamakanni",branch: "IEOR '96",valuation: "$1B",    sector: "AI" },
  { name: "Cleartrip",     founder: "Hrush Bhatt",        branch: "Mech '95", valuation: "$350M",  sector: "Travel" },
  { name: "Grey Orange",   founder: "Samay Kohli",        branch: "Mech '07", valuation: "$800M",  sector: "Robotics" },
  { name: "Postman",       founder: "Abhinav Asthana",    branch: "IT '08",   valuation: "$5.6B",  sector: "DevTools" },
];

// ---------- NIRF / Institute features ----------
export const INSTITUTE_FEATURES = [
  "#3 in NIRF Engineering (2025)",
  "17 academic departments + 15 centres",
  "SINE incubator · 250+ startups launched",
  "IITB-Monash Research Academy",
  "Marquee labs: VLSI, Nano-electronics, Fluid Mech, Aerospace Structures",
  "Central library — 4,50,000+ volumes",
];
