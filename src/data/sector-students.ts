export type SectorStudent = {
  name: string;
  branch: string;
  year: string;
  cgpa: string;
  company: string;
  role: string;
  projects: string;
  package: string;
  joinYear: string;
  intern?: boolean;
  stipend?: string;
  blurb: string;
  initials: string;
  hue: number;
  resumeUrl: string;
  // legacy fields kept so old components don't break
  experience?: string;
};

const R = "https://example.com/resume-placeholder"; // TODO: replace with real portfolio URLs

// Hypothetical students. Each sector has 10+ entries for the paged view.
export const SECTOR_STUDENTS: Record<string, SectorStudent[]> = {
  eng: [
    { name: "Aarav Deshmukh", branch: "Mechanical", year: "4th year", cgpa: "8.92", company: "Schlumberger", role: "Field Engineer", projects: "Digital drilling analytics · rig automation pilot", package: "₹32 LPA", joinYear: "2024", blurb: "Entered curious about racing engines; deep-dived into thermal systems and now works on subsurface drilling tech.", initials: "AD", hue: 12, resumeUrl: R },
    { name: "Isha Ramanathan", branch: "Chemical Engineering", year: "5th year DD", cgpa: "9.14", company: "Reliance Industries", role: "Process Engineer", projects: "Refinery yield optimization · green hydrogen pilot", package: "₹28 LPA", joinYear: "2024", blurb: "Fell in love with process design in 2nd year; interned at Shell and now scaling green H2 at Reliance.", initials: "IR", hue: 22, resumeUrl: R },
    { name: "Kabir Sharma", branch: "Aerospace", year: "4th year", cgpa: "8.65", company: "ISRO", role: "Scientist/Engineer B", projects: "PSLV avionics simulation · CFD on reusable stages", package: "₹24 LPA", joinYear: "2024", blurb: "Rocket-obsessed since school — chose Aerospace, built a CanSat in year 2, now inside ISRO Bangalore.", initials: "KS", hue: 8, resumeUrl: R },
    { name: "Nisha Rao", branch: "Metallurgy", year: "M.Tech", cgpa: "9.02", company: "Tata Steel", role: "R&D Metallurgist", projects: "High-strength automotive steel · corrosion modelling", package: "₹22 LPA", joinYear: "2024", blurb: "Explored materials & sustainability; interned at Tata R&D and joined the same team full-time.", initials: "NR", hue: 30, resumeUrl: R },
    { name: "Rohan Patil", branch: "Mechanical", year: "4th year", cgpa: "8.44", company: "Mahindra Auto", role: "Design Engineer", projects: "EV powertrain packaging · NVH simulation", package: "₹26 LPA", joinYear: "2024", blurb: "Built a Baja car in college; that hands-on love pushed him into EV design.", initials: "RP", hue: 18, resumeUrl: R },
    { name: "Ananya Joshi", branch: "Aerospace DD", year: "5th year", cgpa: "9.30", company: "Airbus India", role: "Structures Engineer", projects: "Composite wing joint analysis · fatigue testing", package: "₹34 LPA", joinYear: "2024", blurb: "Loves the intersection of physics and manufacturing; interned at Airbus Toulouse.", initials: "AJ", hue: 20, resumeUrl: R },
    { name: "Devansh Kulkarni", branch: "Mechanical", year: "4th year", cgpa: "8.10", company: "Larsen & Toubro", role: "Project Engineer", intern: false, stipend: "", projects: "Heavy engg design · turbine assembly line", package: "₹18 LPA", joinYear: "2024", blurb: "Wanted to work on infra at scale — L&T's power vertical was a perfect fit.", initials: "DK", hue: 16, resumeUrl: R },
    { name: "Sneha Iyer", branch: "Chemical", year: "4th year", cgpa: "8.78", company: "P&G", role: "Process Engineer (Intern)", intern: true, stipend: "₹1.1 L/month", projects: "Detergent line scale-up · shop-floor SPC", package: "PPO ₹26 LPA", joinYear: "2025", blurb: "Interned twice with P&G; PPO offered and accepted.", initials: "SI", hue: 24, resumeUrl: R },
    { name: "Meher Naidu", branch: "Metallurgy DD", year: "5th year", cgpa: "9.05", company: "JSW Steel", role: "Product Engineer", projects: "Cold-rolled steel coating · defect ML pipeline", package: "₹21 LPA", joinYear: "2024", blurb: "Combined materials with data — built defect detection during her PS internship.", initials: "MN", hue: 26, resumeUrl: R },
    { name: "Yash Bhandari", branch: "Aerospace", year: "4th year", cgpa: "8.55", company: "HAL", role: "Design Engineer", projects: "Tejas subsystem CAD · flight-line diagnostics", package: "₹19 LPA", joinYear: "2024", blurb: "Chose defence aerospace after an internship at NAL.", initials: "YB", hue: 14, resumeUrl: R },
  ],
  it: [
    { name: "Aditya Krishnan", branch: "CSE", year: "4th year", cgpa: "9.58", company: "Google", role: "SWE (US)", projects: "Search ranking infra · latency optimization", package: "₹1.2 Cr", joinYear: "2024", blurb: "ICPC regionalist; internship at Google MTV converted to a Bay Area offer.", initials: "AK", hue: 210, resumeUrl: R },
    { name: "Priya Verma", branch: "CSE", year: "4th year", cgpa: "9.24", company: "Microsoft", role: "SWE", projects: "Azure Cosmos DB internals · consistency layer", package: "₹65 LPA", joinYear: "2024", blurb: "Deep systems love — kernels, DBs, distributed protocols.", initials: "PV", hue: 220, resumeUrl: R },
    { name: "Siddharth Iyer", branch: "Electrical", year: "4th year", cgpa: "8.92", company: "Amazon", role: "SDE", projects: "Prime Video CDN routing · edge caching", package: "₹56 LPA", joinYear: "2024", blurb: "Cross-branched into software after a summer with Amazon Blr.", initials: "SI", hue: 200, resumeUrl: R },
    { name: "Neha Bansal", branch: "CSE DD", year: "5th year DD", cgpa: "9.71", company: "Meta (London)", role: "SWE", projects: "Reels ranking · GPU inference optimizations", package: "₹1.4 Cr", joinYear: "2024", blurb: "Interned at Meta London twice; loves the intersection of ML + infra.", initials: "NB", hue: 230, resumeUrl: R },
    { name: "Yash Malhotra", branch: "CSE", year: "4th year", cgpa: "8.80", company: "Uber", role: "SWE", projects: "Pricing engine · surge simulation", package: "₹52 LPA", joinYear: "2024", blurb: "Loves marketplaces; Uber & Atlassian internships.", initials: "YM", hue: 205, resumeUrl: R },
    { name: "Riya Kapoor", branch: "CSE", year: "4th year", cgpa: "9.10", company: "Adobe", role: "SWE", projects: "Photoshop AI features integration", package: "₹48 LPA", joinYear: "2024", blurb: "Passionate about creative tools; wants to bridge design & code.", initials: "RK", hue: 215, resumeUrl: R },
    { name: "Karan Shah", branch: "EE DD", year: "5th year", cgpa: "8.66", company: "Salesforce", role: "SWE", projects: "Multi-tenant data layer perf work", package: "₹42 LPA", joinYear: "2024", blurb: "Enterprise SaaS enthusiast; loves clean APIs.", initials: "KS", hue: 195, resumeUrl: R },
    { name: "Trisha Menon", branch: "CSE", year: "4th year", cgpa: "9.42", company: "Stripe (Intern)", role: "SWE Intern", intern: true, stipend: "$10k/month", projects: "Payments routing reliability", package: "PPO ₹90 LPA", joinYear: "2025", blurb: "Loves fintech infra; interning at Stripe SF.", initials: "TM", hue: 225, resumeUrl: R },
    { name: "Aryan Ghosh", branch: "CSE", year: "4th year", cgpa: "8.55", company: "Zomato", role: "SWE", projects: "Order-flow orchestration · Kafka pipelines", package: "₹40 LPA", joinYear: "2024", blurb: "Loves high-throughput consumer systems.", initials: "AG", hue: 190, resumeUrl: R },
    { name: "Sanya Verma", branch: "CSE DD", year: "5th year", cgpa: "9.20", company: "Rubrik", role: "SWE", projects: "Backup dedup engine perf", package: "₹58 LPA", joinYear: "2024", blurb: "Storage systems geek; interned at Rubrik & converted.", initials: "SV", hue: 235, resumeUrl: R },
  ],
  consulting: [
    { name: "Rhea Kapoor", branch: "IEOR M.Tech", year: "2nd year", cgpa: "9.02", company: "McKinsey & Co.", role: "Business Analyst", projects: "Retail transformation · airline turnaround", package: "₹32 LPA", joinYear: "2024", blurb: "Case competitions since year 1; McKinsey PPO after summers.", initials: "RK", hue: 45, resumeUrl: R },
    { name: "Aryan Joshi", branch: "Mechanical", year: "4th year", cgpa: "8.78", company: "BCG", role: "Associate", projects: "OEM cost restructuring", package: "₹34 LPA", joinYear: "2024", blurb: "Cross-branched into strategy after his 3rd-year BCG intern.", initials: "AJ", hue: 50, resumeUrl: R },
    { name: "Meera Nair", branch: "Chemical DD", year: "5th year", cgpa: "9.10", company: "Bain & Company", role: "Associate Consultant", projects: "PE due diligence · consumer strategy", package: "₹36 LPA", joinYear: "2024", blurb: "Enjoys structured problem-solving and client work.", initials: "MN", hue: 42, resumeUrl: R },
    { name: "Devansh Gupta", branch: "IDC M.Des", year: "2nd year", cgpa: "8.90", company: "Kearney", role: "Business Analyst", projects: "Retail store-format redesign", package: "₹28 LPA", joinYear: "2024", blurb: "Designer-turned-strategist; loves customer-facing work.", initials: "DG", hue: 55, resumeUrl: R },
    { name: "Naina Bakshi", branch: "IEOR", year: "M.Tech", cgpa: "8.85", company: "Accenture Strategy", role: "Consultant", projects: "Digital transformation for a bank", package: "₹22 LPA", joinYear: "2024", blurb: "Loves cross-industry breadth.", initials: "NB", hue: 48, resumeUrl: R },
    { name: "Aditya Rane", branch: "Mechanical", year: "4th year", cgpa: "8.44", company: "Deloitte S&O", role: "Analyst", projects: "Ops transformation for FMCG major", package: "₹20 LPA", joinYear: "2024", blurb: "Interned at Deloitte during 3rd year.", initials: "AR", hue: 46, resumeUrl: R },
    { name: "Prisha Mehta", branch: "Economics DD", year: "5th year", cgpa: "9.30", company: "Oliver Wyman", role: "Consultant", projects: "Financial services cost work", package: "₹32 LPA", joinYear: "2024", blurb: "Econ major who found her home in strategy consulting.", initials: "PM", hue: 44, resumeUrl: R },
    { name: "Karan Sethi", branch: "IEOR", year: "M.Tech", cgpa: "8.72", company: "ZS Associates", role: "Consultant", projects: "Pharma commercial analytics", package: "₹24 LPA", joinYear: "2024", blurb: "Loves the analytics-heavy side of consulting.", initials: "KS", hue: 52, resumeUrl: R },
    { name: "Riddhi Shah", branch: "CSE", year: "4th year", cgpa: "9.05", company: "McKinsey (Intern)", role: "Summer Associate", intern: true, stipend: "₹2.0 L/month", projects: "E-commerce growth diagnostics", package: "PPO ₹34 LPA", joinYear: "2025", blurb: "Cross-branched into strategy from CSE.", initials: "RS", hue: 47, resumeUrl: R },
    { name: "Ishaan Roy", branch: "Chemical", year: "4th year", cgpa: "8.60", company: "EY-Parthenon", role: "Associate", projects: "Growth strategy for a healthcare chain", package: "₹22 LPA", joinYear: "2024", blurb: "Wants to move into PE eventually.", initials: "IR", hue: 40, resumeUrl: R },
  ],
  finance: [
    { name: "Anaya Bhatt", branch: "CSE", year: "4th year", cgpa: "9.68", company: "Jane Street (HK)", role: "Quant Trader", projects: "Options market-making models", package: "₹1.6 Cr", joinYear: "2024", blurb: "Math Olympiad medallist; loved probability and now trades HK equities.", initials: "AB", hue: 140, resumeUrl: R },
    { name: "Vivaan Menon", branch: "Engg Physics", year: "4th year", cgpa: "9.32", company: "Optiver (Amsterdam)", role: "Quant Researcher", projects: "Vol-surface calibration", package: "₹1.1 Cr", joinYear: "2024", blurb: "Physics background helped him break into quant research.", initials: "VM", hue: 150, resumeUrl: R },
    { name: "Sara D'Souza", branch: "Math & Computing", year: "4th year", cgpa: "9.20", company: "Goldman Sachs", role: "Investment Banking Analyst", projects: "M&A pitch decks · sector coverage", package: "₹48 LPA", joinYear: "2024", blurb: "Loved corporate finance electives; interned at GS summer.", initials: "SD", hue: 130, resumeUrl: R },
    { name: "Ishaan Reddy", branch: "IEOR", year: "M.Tech", cgpa: "8.95", company: "Tower Research", role: "Quant Developer", projects: "Low-latency execution systems", package: "₹85 LPA", joinYear: "2024", blurb: "Interned at TRC; loves the systems side of HFT.", initials: "IR", hue: 155, resumeUrl: R },
    { name: "Ananya Iyer", branch: "CSE DD", year: "5th year", cgpa: "9.42", company: "DE Shaw", role: "Quant Analyst", projects: "Alpha research · signal decay analysis", package: "₹92 LPA", joinYear: "2024", blurb: "DE Shaw intern → converted; two co-authored papers.", initials: "AI", hue: 145, resumeUrl: R },
    { name: "Rohit Kadam", branch: "M&C", year: "4th year", cgpa: "9.05", company: "Citadel Securities", role: "Quant Researcher", projects: "Market microstructure signals", package: "₹1.3 Cr", joinYear: "2024", blurb: "Started with sports analytics, moved to markets.", initials: "RK", hue: 135, resumeUrl: R },
    { name: "Nikhil Bhat", branch: "Engg Physics DD", year: "5th year", cgpa: "9.18", company: "Millennium (Intern)", role: "Quant Intern", intern: true, stipend: "$14k/month", projects: "Statistical arb research", package: "PPO ₹1.4 Cr", joinYear: "2025", blurb: "Interned NYC; pod-shop convert.", initials: "NB", hue: 148, resumeUrl: R },
    { name: "Aarushi Sen", branch: "Economics DD", year: "5th year", cgpa: "9.05", company: "JP Morgan", role: "IB Analyst", projects: "Sector coverage · debt syndications", package: "₹32 LPA", joinYear: "2024", blurb: "Loves markets & macro; wants to move to PE.", initials: "AS", hue: 138, resumeUrl: R },
    { name: "Aditya Gokhale", branch: "IEOR", year: "M.Tech", cgpa: "8.70", company: "Morgan Stanley", role: "Risk Quant", projects: "Counterparty risk models", package: "₹36 LPA", joinYear: "2024", blurb: "Prefers risk over front-office.", initials: "AG", hue: 142, resumeUrl: R },
    { name: "Kritika Rao", branch: "CSE", year: "4th year", cgpa: "9.35", company: "IMC Trading", role: "Quant Developer", projects: "Options pricing library", package: "₹95 LPA", joinYear: "2024", blurb: "Loves C++ perf and market data.", initials: "KR", hue: 152, resumeUrl: R },
  ],
  rnd: [
    { name: "Krishna Kulkarni", branch: "Nanotech M.Tech", year: "2nd year", cgpa: "9.10", company: "Intel", role: "Process R&D Engineer", projects: "5nm gate stack characterization", package: "₹42 LPA", joinYear: "2024", blurb: "Interned at TSMC Taiwan; loves semiconductor physics.", initials: "KK", hue: 195, resumeUrl: R },
    { name: "Riya Saxena", branch: "Engg Physics DD", year: "5th year", cgpa: "9.24", company: "Nvidia", role: "Silicon Engineer", projects: "GPU memory controller verification", package: "₹38 LPA", joinYear: "2024", blurb: "Loves the crossover of hardware and ML infra.", initials: "RS", hue: 200, resumeUrl: R },
    { name: "Aarush Naik", branch: "Metallurgy PhD", year: "Final year", cgpa: "9.30", company: "Applied Materials", role: "Process Engineer", projects: "Deposition equipment optimization", package: "₹34 LPA", joinYear: "2024", blurb: "Long-form R&D bug; three publications.", initials: "AN", hue: 205, resumeUrl: R },
    { name: "Zoya Khan", branch: "Chemical M.Tech", year: "2nd year", cgpa: "8.80", company: "Micron", role: "Process Engineer", projects: "Photoresist etch process", package: "₹32 LPA", joinYear: "2024", blurb: "Interned in Boise; loves clean-room work.", initials: "ZK", hue: 190, resumeUrl: R },
    { name: "Rohit Deshpande", branch: "Electrical DD", year: "5th year", cgpa: "9.02", company: "Qualcomm", role: "RTL Design Engineer", projects: "Modem subsystem RTL", package: "₹36 LPA", joinYear: "2024", blurb: "Long-time VLSI enthusiast.", initials: "RD", hue: 198, resumeUrl: R },
    { name: "Aditi Bharadwaj", branch: "Aerospace M.Tech", year: "2nd year", cgpa: "8.85", company: "GE Aerospace", role: "R&D Engineer", projects: "Turbine blade cooling CFD", package: "₹28 LPA", joinYear: "2024", blurb: "Turbomachinery + CFD focus.", initials: "AB", hue: 208, resumeUrl: R },
    { name: "Kabir Trivedi", branch: "Engg Physics", year: "4th year", cgpa: "9.15", company: "Analog Devices", role: "Analog IC Design", projects: "PLL design in 28nm", package: "₹30 LPA", joinYear: "2024", blurb: "Loves analog circuits; interned twice at ADI.", initials: "KT", hue: 202, resumeUrl: R },
    { name: "Sara Malhotra", branch: "Chemistry M.Sc", year: "2nd year", cgpa: "8.95", company: "Reliance Life Sci", role: "R&D Chemist", projects: "Biosimilar formulation", package: "₹18 LPA", joinYear: "2024", blurb: "Focused on pharma chemistry.", initials: "SM", hue: 210, resumeUrl: R },
    { name: "Aayan Bose", branch: "Nanotech PhD", year: "Final", cgpa: "9.25", company: "IBM Research", role: "Research Staff", projects: "Quantum device fabrication", package: "₹40 LPA", joinYear: "2024", blurb: "Long research trajectory into quantum hardware.", initials: "AB", hue: 196, resumeUrl: R },
    { name: "Diya Shetty", branch: "Metallurgy DD", year: "5th year", cgpa: "9.05", company: "Ather Energy", role: "Battery R&D", projects: "Cell chemistry characterization", package: "₹26 LPA", joinYear: "2024", blurb: "EV batteries — clean-tech focus.", initials: "DS", hue: 204, resumeUrl: R },
  ],
  analytics: [
    { name: "Tanvi Shukla", branch: "Applied Stats M.Sc", year: "2nd year", cgpa: "8.90", company: "American Express", role: "Risk Analyst", projects: "Credit risk models · fraud detection", package: "₹22 LPA", joinYear: "2024", blurb: "Loves probability and applied stats.", initials: "TS", hue: 195, resumeUrl: R },
    { name: "Harsh Mehta", branch: "IEOR M.Tech", year: "2nd year", cgpa: "8.55", company: "Fractal Analytics", role: "Data Scientist", projects: "CPG demand forecasting", package: "₹18 LPA", joinYear: "2024", blurb: "Interned at Mu Sigma; analytics generalist.", initials: "HM", hue: 200, resumeUrl: R },
    { name: "Ira Ghosh", branch: "Economics DD", year: "5th year", cgpa: "9.10", company: "ZS Associates", role: "Analytics Associate", projects: "Pharma commercial analytics", package: "₹24 LPA", joinYear: "2024", blurb: "Combines econ + data analytics.", initials: "IG", hue: 205, resumeUrl: R },
    { name: "Rohan Deshpande", branch: "IEOR", year: "M.Tech", cgpa: "8.72", company: "Tiger Analytics", role: "Consultant", projects: "Retail pricing optimization", package: "₹20 LPA", joinYear: "2024", blurb: "Loves optimization and business impact.", initials: "RD", hue: 198, resumeUrl: R },
    { name: "Nandini Rao", branch: "M.Sc Stats", year: "2nd year", cgpa: "8.95", company: "Walmart Labs", role: "Data Analyst", projects: "Supply-chain analytics", package: "₹22 LPA", joinYear: "2024", blurb: "Interned at Walmart Blr.", initials: "NR", hue: 202, resumeUrl: R },
    { name: "Aditya Jain", branch: "Economics", year: "4th year", cgpa: "8.60", company: "Bain Capability Network", role: "Analyst", projects: "PE portfolio analytics", package: "₹18 LPA", joinYear: "2024", blurb: "Analytics + strategy blend.", initials: "AJ", hue: 208, resumeUrl: R },
    { name: "Sana Kapoor", branch: "IEOR", year: "M.Tech", cgpa: "8.80", company: "EXL", role: "Data Scientist", projects: "Insurance claims ML", package: "₹19 LPA", joinYear: "2024", blurb: "Loves messy real-world data.", initials: "SK", hue: 196, resumeUrl: R },
    { name: "Prateek Verma", branch: "M.Sc Stats", year: "2nd year", cgpa: "9.00", company: "Standard Chartered", role: "Risk Quant", projects: "Wholesale credit risk", package: "₹23 LPA", joinYear: "2024", blurb: "Loves banking analytics.", initials: "PV", hue: 201, resumeUrl: R },
    { name: "Meher Bansal", branch: "Economics DD", year: "5th year", cgpa: "8.85", company: "Kearney (Intern)", role: "Analytics Intern", intern: true, stipend: "₹1.4 L/month", projects: "Consumer analytics study", package: "PPO ₹26 LPA", joinYear: "2025", blurb: "Analytics consulting-bound.", initials: "MB", hue: 199, resumeUrl: R },
    { name: "Vaibhav Nair", branch: "Applied Stats", year: "M.Sc", cgpa: "8.72", company: "Latentview", role: "Data Scientist", projects: "Marketing mix modelling", package: "₹18 LPA", joinYear: "2024", blurb: "Loves MMM & causal inference.", initials: "VN", hue: 203, resumeUrl: R },
  ],
  ds: [
    { name: "Aayush Rao", branch: "CSE", year: "4th year", cgpa: "9.40", company: "Netflix", role: "ML Engineer", projects: "Homepage recs · A/B infra", package: "₹42 LPA", joinYear: "2024", blurb: "Loves recommender systems.", initials: "AR", hue: 320, resumeUrl: R },
    { name: "Diya Kapoor", branch: "AI DD", year: "5th year", cgpa: "9.25", company: "Airbnb", role: "Data Scientist", projects: "Search relevance experiments", package: "₹38 LPA", joinYear: "2024", blurb: "Interned at Airbnb; loved product DS.", initials: "DK", hue: 330, resumeUrl: R },
    { name: "Rehan Ali", branch: "CSE", year: "4th year", cgpa: "8.95", company: "Walmart Labs", role: "Data Scientist", projects: "Personalization models", package: "₹34 LPA", joinYear: "2024", blurb: "Cross-branched into DS from systems.", initials: "RA", hue: 315, resumeUrl: R },
    { name: "Kritika Sen", branch: "CSE DD", year: "5th year", cgpa: "9.10", company: "Uber", role: "Applied Scientist", projects: "ETA prediction models", package: "₹40 LPA", joinYear: "2024", blurb: "Loves spatiotemporal ML.", initials: "KS", hue: 325, resumeUrl: R },
    { name: "Rohan Iyer", branch: "M&C", year: "4th year", cgpa: "9.30", company: "Meta", role: "Data Scientist", projects: "Ads ranking experimentation", package: "₹48 LPA", joinYear: "2024", blurb: "Applied stats + product mind.", initials: "RI", hue: 328, resumeUrl: R },
    { name: "Aisha Khan", branch: "IEOR", year: "M.Tech", cgpa: "8.85", company: "Swiggy", role: "Data Scientist", projects: "Delivery ETA optimization", package: "₹28 LPA", joinYear: "2024", blurb: "Loves logistics ML.", initials: "AK", hue: 318, resumeUrl: R },
    { name: "Yash Sinha", branch: "CSE", year: "4th year", cgpa: "9.05", company: "Flipkart", role: "Applied Scientist", projects: "Search ranking · LTR models", package: "₹32 LPA", joinYear: "2024", blurb: "Search & ranking fanatic.", initials: "YS", hue: 322, resumeUrl: R },
    { name: "Anika Bhat", branch: "CSE", year: "4th year", cgpa: "9.15", company: "Booking.com", role: "Data Scientist", projects: "Traveler experimentation platform", package: "₹36 LPA", joinYear: "2024", blurb: "Product DS lover.", initials: "AB", hue: 316, resumeUrl: R },
    { name: "Karan Malhotra", branch: "AI DD", year: "5th year", cgpa: "9.22", company: "Cred", role: "ML Engineer", projects: "Credit-graph modeling", package: "₹34 LPA", joinYear: "2024", blurb: "Fintech ML focus.", initials: "KM", hue: 326, resumeUrl: R },
    { name: "Sneha Rao", branch: "CSE DD", year: "5th year", cgpa: "9.35", company: "Pinterest (Intern)", role: "MLE Intern", intern: true, stipend: "$9k/month", projects: "Home-feed ranking", package: "PPO ₹56 LPA", joinYear: "2025", blurb: "Pinterest SF intern.", initials: "SR", hue: 324, resumeUrl: R },
  ],
  design: [
    { name: "Kavya Iyer", branch: "IDC M.Des", year: "2nd year", cgpa: "9.10", company: "Apple", role: "HI Designer", projects: "iPadOS input experiments", package: "₹35 LPA", joinYear: "2024", blurb: "Apple HI intern → convert.", initials: "KI", hue: 25, resumeUrl: R },
    { name: "Aarav Sen", branch: "B.Des", year: "4th year", cgpa: "8.85", company: "Google", role: "UX Designer", projects: "Material 3 component refresh", package: "₹28 LPA", joinYear: "2024", blurb: "Design systems focus.", initials: "AS", hue: 30, resumeUrl: R },
    { name: "Meher Kaur", branch: "IDC M.Des", year: "2nd year", cgpa: "8.95", company: "CRED", role: "Product Designer", projects: "Rewards flow redesign", package: "₹24 LPA", joinYear: "2024", blurb: "Loves fintech craft.", initials: "MK", hue: 20, resumeUrl: R },
    { name: "Riya Patel", branch: "B.Des", year: "4th year", cgpa: "8.60", company: "Swiggy Design", role: "Product Designer", projects: "Instamart onboarding", package: "₹22 LPA", joinYear: "2024", blurb: "Consumer product design lover.", initials: "RP", hue: 28, resumeUrl: R },
    { name: "Ishan Bose", branch: "IDC", year: "M.Des", cgpa: "9.02", company: "Ola Electric", role: "Interaction Designer", projects: "Cluster HMI design", package: "₹26 LPA", joinYear: "2024", blurb: "Loves designing for embedded hardware.", initials: "IB", hue: 22, resumeUrl: R },
    { name: "Ananya Nair", branch: "IDC M.Des", year: "2nd year", cgpa: "8.90", company: "Zomato", role: "Product Designer", projects: "Order-tracking redesign", package: "₹24 LPA", joinYear: "2024", blurb: "Craft-first product designer.", initials: "AN", hue: 27, resumeUrl: R },
    { name: "Om Krishnan", branch: "B.Des", year: "4th year", cgpa: "8.55", company: "Adobe", role: "UX Designer", projects: "Illustrator features UX", package: "₹28 LPA", joinYear: "2024", blurb: "Creative tools nerd.", initials: "OK", hue: 24, resumeUrl: R },
    { name: "Prisha Verma", branch: "IDC M.Des", year: "2nd year", cgpa: "9.20", company: "Microsoft Design", role: "Product Designer", projects: "Teams meetings surface", package: "₹30 LPA", joinYear: "2024", blurb: "Enterprise design focus.", initials: "PV", hue: 26, resumeUrl: R },
    { name: "Aditya Rane", branch: "B.Des", year: "4th year", cgpa: "8.44", company: "Uber", role: "Interaction Designer", projects: "Driver app redesign", package: "₹26 LPA", joinYear: "2024", blurb: "Loves marketplace UX.", initials: "AR", hue: 23, resumeUrl: R },
    { name: "Naisha Rao", branch: "IDC M.Des (Intern)", year: "2nd year", cgpa: "9.05", company: "Airbnb Design", role: "Design Intern", intern: true, stipend: "$8k/month", projects: "Host onboarding redesign", package: "PPO ₹32 LPA", joinYear: "2025", blurb: "Airbnb SF design intern.", initials: "NR", hue: 21, resumeUrl: R },
  ],
  edu: [
    { name: "Aditi Rane", branch: "EdTech M.Tech", year: "2nd year", cgpa: "8.95", company: "PhysicsWallah", role: "Content Lead", projects: "JEE physics curriculum", package: "₹18 LPA", joinYear: "2024", blurb: "Loves teaching + product.", initials: "AR", hue: 45, resumeUrl: R },
    { name: "Karthik Menon", branch: "M.Sc Chemistry", year: "2nd year", cgpa: "8.75", company: "Unacademy", role: "SME", projects: "NEET chemistry content", package: "₹14 LPA", joinYear: "2024", blurb: "Loves scaled teaching.", initials: "KM", hue: 42, resumeUrl: R },
    { name: "Sanya Bose", branch: "M.Sc Math", year: "2nd year", cgpa: "8.90", company: "Vedantu", role: "Curriculum Designer", projects: "Class 11–12 math", package: "₹16 LPA", joinYear: "2024", blurb: "Loves curriculum craft.", initials: "SB", hue: 48, resumeUrl: R },
    { name: "Rahul Iyer", branch: "EdTech", year: "M.Tech", cgpa: "8.60", company: "Byju's", role: "Learning Designer", projects: "AR-based science labs", package: "₹15 LPA", joinYear: "2024", blurb: "AR + learning nerd.", initials: "RI", hue: 44, resumeUrl: R },
    { name: "Meera Das", branch: "M.Sc Physics", year: "2nd year", cgpa: "9.10", company: "Toppr / Aakash", role: "SME Physics", projects: "JEE Advanced problem sets", package: "₹14 LPA", joinYear: "2024", blurb: "Loves problem-crafting.", initials: "MD", hue: 46, resumeUrl: R },
    { name: "Aryan Bhatt", branch: "EdTech", year: "M.Tech", cgpa: "8.80", company: "Coursera India", role: "PM Intern → PM", intern: false, projects: "India catalog strategy", package: "₹18 LPA", joinYear: "2024", blurb: "Higher-ed tech focus.", initials: "AB", hue: 43, resumeUrl: R },
    { name: "Nisha Rao", branch: "M.Sc Math", year: "2nd year", cgpa: "8.75", company: "Cuemath", role: "Learning Designer", projects: "K-8 math curriculum", package: "₹13 LPA", joinYear: "2024", blurb: "K12 curriculum focus.", initials: "NR", hue: 47, resumeUrl: R },
    { name: "Om Sinha", branch: "EdTech M.Tech", year: "2nd year", cgpa: "8.65", company: "Testbook", role: "PM", projects: "Govt-exam UX overhaul", package: "₹16 LPA", joinYear: "2024", blurb: "Govt-exam prep expert.", initials: "OS", hue: 45, resumeUrl: R },
    { name: "Priya Kulkarni", branch: "Humanities", year: "M.A.", cgpa: "8.80", company: "Khan Academy India", role: "Content Producer", projects: "Hindi-medium math", package: "₹12 LPA", joinYear: "2024", blurb: "Loves free/open ed.", initials: "PK", hue: 41, resumeUrl: R },
    { name: "Sameer Joshi", branch: "EdTech (Intern)", year: "M.Tech", cgpa: "8.90", company: "Emeritus", role: "Learning Design Intern", intern: true, stipend: "₹80k/month", projects: "Executive-ed course pilots", package: "PPO ₹18 LPA", joinYear: "2025", blurb: "Ex-ed & upskilling focus.", initials: "SJ", hue: 49, resumeUrl: R },
  ],
  product: [
    { name: "Arnav Chatterjee", branch: "CSE", year: "4th year", cgpa: "9.30", company: "Microsoft APM", role: "APM (US)", projects: "Copilot in Teams · workflow surfaces", package: "₹48 LPA", joinYear: "2024", blurb: "APM program → Redmond.", initials: "AC", hue: 40, resumeUrl: R },
    { name: "Nikita Sinha", branch: "IEOR M.Tech", year: "2nd year", cgpa: "8.95", company: "Uber", role: "APM", projects: "Rider growth features", package: "₹42 LPA", joinYear: "2024", blurb: "Growth PM lover.", initials: "NS", hue: 45, resumeUrl: R },
    { name: "Rudra Bhatia", branch: "Mech + IDC minor", year: "4th year", cgpa: "8.75", company: "Flipkart", role: "APM", projects: "Big Billion Days UX flows", package: "₹36 LPA", joinYear: "2024", blurb: "Loves consumer marketplaces.", initials: "RB", hue: 42, resumeUrl: R },
    { name: "Ira Menon", branch: "CSE DD", year: "5th year", cgpa: "9.15", company: "Atlassian APM", role: "APM (Sydney)", projects: "Jira workflow redesign", package: "₹52 LPA", joinYear: "2024", blurb: "Loves developer tools.", initials: "IM", hue: 43, resumeUrl: R },
    { name: "Devansh Kapoor", branch: "IEOR", year: "M.Tech", cgpa: "8.80", company: "Cred", role: "PM", projects: "Rewards & credit line PM", package: "₹34 LPA", joinYear: "2024", blurb: "Fintech PM enthusiast.", initials: "DK", hue: 44, resumeUrl: R },
    { name: "Sanya Rao", branch: "CSE", year: "4th year", cgpa: "9.05", company: "Zomato", role: "APM", projects: "Loyalty & Gold reboot", package: "₹32 LPA", joinYear: "2024", blurb: "Consumer PM focus.", initials: "SR", hue: 41, resumeUrl: R },
    { name: "Karthik Iyer", branch: "Mechanical", year: "4th year", cgpa: "8.60", company: "Ola Electric", role: "PM", projects: "S1 companion app roadmap", package: "₹30 LPA", joinYear: "2024", blurb: "Hardware + PM combo.", initials: "KI", hue: 46, resumeUrl: R },
    { name: "Meera Deshpande", branch: "IDC M.Des", year: "2nd year", cgpa: "8.90", company: "Airtel", role: "Product Manager", projects: "Wynk redesign", package: "₹28 LPA", joinYear: "2024", blurb: "Design-turned-PM.", initials: "MD", hue: 48, resumeUrl: R },
    { name: "Rohan Bansal", branch: "CSE DD", year: "5th year", cgpa: "9.10", company: "Meta APM (Intern)", role: "APM Intern", intern: true, stipend: "$11k/month", projects: "Threads growth surface", package: "PPO ₹1.1 Cr", joinYear: "2025", blurb: "Meta APM intern SF.", initials: "RB", hue: 47, resumeUrl: R },
    { name: "Prisha Nair", branch: "IEOR M.Tech", year: "2nd year", cgpa: "9.00", company: "Salesforce PM", role: "APM", projects: "Marketing Cloud UX", package: "₹40 LPA", joinYear: "2024", blurb: "Enterprise PM lover.", initials: "PN", hue: 49, resumeUrl: R },
  ],
  aiml: [
    { name: "Ishita Mishra", branch: "CSE", year: "4th year", cgpa: "9.75", company: "Anthropic", role: "Research Engineer", projects: "RLHF pipelines · eval harness", package: "₹1.8 Cr", joinYear: "2024", blurb: "DeepMind intern → Anthropic.", initials: "IM", hue: 285, resumeUrl: R },
    { name: "Aaditya Puri", branch: "M&C", year: "4th year", cgpa: "9.68", company: "OpenAI", role: "Research Engineer", projects: "Post-training infra", package: "₹2.1 Cr", joinYear: "2024", blurb: "OpenAI SF; loves scaling laws.", initials: "AP", hue: 290, resumeUrl: R },
    { name: "Prisha Jain", branch: "CSE DD", year: "5th year", cgpa: "9.35", company: "Nvidia Research", role: "Applied Scientist", projects: "Diffusion model efficiency", package: "₹85 LPA", joinYear: "2024", blurb: "Loves generative AI research.", initials: "PJ", hue: 280, resumeUrl: R },
    { name: "Rohan Bhat", branch: "CSE", year: "4th year", cgpa: "9.20", company: "Google DeepMind", role: "Research Engineer", projects: "Gemini eval infra", package: "₹1.4 Cr", joinYear: "2024", blurb: "DM London intern converted.", initials: "RB", hue: 282, resumeUrl: R },
    { name: "Sanya Kapoor", branch: "AI DD", year: "5th year", cgpa: "9.42", company: "Microsoft Research", role: "Research Scientist", projects: "Multimodal grounding", package: "₹52 LPA", joinYear: "2024", blurb: "Two ACL papers.", initials: "SK", hue: 288, resumeUrl: R },
    { name: "Vivaan Rao", branch: "CSE", year: "4th year", cgpa: "9.10", company: "Cohere", role: "ML Engineer", projects: "Retrieval-augmented models", package: "₹60 LPA", joinYear: "2024", blurb: "RAG systems focus.", initials: "VR", hue: 286, resumeUrl: R },
    { name: "Aisha Bansal", branch: "M&C DD", year: "5th year", cgpa: "9.28", company: "Hugging Face (Intern)", role: "Research Intern", intern: true, stipend: "$9k/month", projects: "OSS model eval", package: "PPO ₹65 LPA", joinYear: "2025", blurb: "Loves OSS ML.", initials: "AB", hue: 284, resumeUrl: R },
    { name: "Kabir Shah", branch: "CSE", year: "4th year", cgpa: "9.00", company: "Adobe Research", role: "Research Engineer", projects: "Generative image editing", package: "₹48 LPA", joinYear: "2024", blurb: "Generative art nerd.", initials: "KS", hue: 292, resumeUrl: R },
    { name: "Meher Iyer", branch: "AI DD", year: "5th year", cgpa: "9.15", company: "Sarvam AI", role: "Research Engineer", projects: "Indic LLM training", package: "₹45 LPA", joinYear: "2024", blurb: "Loves Indic NLP.", initials: "MI", hue: 289, resumeUrl: R },
    { name: "Arjun Menon", branch: "CSE", year: "4th year", cgpa: "9.30", company: "Perplexity", role: "MLE", projects: "Search-augmented reasoning", package: "₹75 LPA", joinYear: "2024", blurb: "Search + LLM fanatic.", initials: "AM", hue: 291, resumeUrl: R },
  ],
  sd: [
    { name: "Om Prakash", branch: "CSE", year: "4th year", cgpa: "9.05", company: "Atlassian", role: "SWE (Sydney)", projects: "Jira platform APIs", package: "₹48 LPA", joinYear: "2024", blurb: "Dev-tools person.", initials: "OP", hue: 170, resumeUrl: R },
    { name: "Simran Kaur", branch: "CSE", year: "4th year", cgpa: "9.22", company: "Datadog (NYC)", role: "SWE", projects: "Metrics ingest pipeline", package: "₹52 LPA", joinYear: "2024", blurb: "Observability nerd.", initials: "SK", hue: 175, resumeUrl: R },
    { name: "Yuvraj Singh", branch: "Electrical", year: "4th year", cgpa: "8.85", company: "Snowflake", role: "SWE", projects: "Query optimizer work", package: "₹46 LPA", joinYear: "2024", blurb: "Loves databases.", initials: "YS", hue: 165, resumeUrl: R },
    { name: "Ananya Rao", branch: "CSE DD", year: "5th year", cgpa: "9.15", company: "Confluent", role: "SWE", projects: "Kafka connect ecosystem", package: "₹50 LPA", joinYear: "2024", blurb: "Streaming systems focus.", initials: "AR", hue: 172, resumeUrl: R },
    { name: "Karan Iyer", branch: "CSE", year: "4th year", cgpa: "8.75", company: "MongoDB", role: "SWE", projects: "Aggregation framework perf", package: "₹40 LPA", joinYear: "2024", blurb: "DB internals enthusiast.", initials: "KI", hue: 168, resumeUrl: R },
    { name: "Riya Bansal", branch: "CSE", year: "4th year", cgpa: "9.00", company: "GitHub", role: "SWE", projects: "Actions runner reliability", package: "₹48 LPA", joinYear: "2024", blurb: "OSS + devtools.", initials: "RB", hue: 174, resumeUrl: R },
    { name: "Aayan Sen", branch: "CSE DD", year: "5th year", cgpa: "8.95", company: "HashiCorp", role: "SWE", projects: "Terraform providers", package: "₹44 LPA", joinYear: "2024", blurb: "IaC + platform.", initials: "AS", hue: 166, resumeUrl: R },
    { name: "Neha Puri", branch: "CSE", year: "4th year", cgpa: "9.10", company: "Elastic", role: "SWE", projects: "Kibana visualization plugins", package: "₹42 LPA", joinYear: "2024", blurb: "Search nerd.", initials: "NP", hue: 176, resumeUrl: R },
    { name: "Rohan Menon", branch: "EE DD", year: "5th year", cgpa: "8.65", company: "Cloudflare (Intern)", role: "SWE Intern", intern: true, stipend: "$8k/month", projects: "Workers runtime perf", package: "PPO ₹55 LPA", joinYear: "2025", blurb: "Edge compute obsession.", initials: "RM", hue: 178, resumeUrl: R },
    { name: "Prisha Rao", branch: "CSE", year: "4th year", cgpa: "9.05", company: "Vercel", role: "SWE", projects: "Next.js build infra", package: "₹46 LPA", joinYear: "2024", blurb: "Frontend infra enthusiast.", initials: "PR", hue: 180, resumeUrl: R },
  ],
  psu: [
    { name: "Rahul Yadav", branch: "Mechanical", year: "4th year", cgpa: "8.20", company: "IOCL", role: "Officer Trainee", projects: "Refinery ops rotational", package: "₹22 LPA", joinYear: "2024", blurb: "Stable oil & gas career.", initials: "RY", hue: 30, resumeUrl: R },
    { name: "Priyanka Das", branch: "Chemical", year: "4th year", cgpa: "8.35", company: "ONGC", role: "Assistant Engineer", projects: "Offshore process rotational", package: "₹24 LPA", joinYear: "2024", blurb: "Offshore ops rotation.", initials: "PD", hue: 35, resumeUrl: R },
    { name: "Nikhil Sharma", branch: "Electrical", year: "4th year", cgpa: "8.10", company: "NTPC", role: "Executive Trainee", projects: "Thermal plant O&M rotational", package: "₹20 LPA", joinYear: "2024", blurb: "Power sector career.", initials: "NS", hue: 32, resumeUrl: R },
    { name: "Simran Kaur", branch: "Metallurgy", year: "4th year", cgpa: "8.05", company: "SAIL", role: "Management Trainee", projects: "Bhilai plant rotational", package: "₹18 LPA", joinYear: "2024", blurb: "Steel plant ops.", initials: "SK", hue: 34, resumeUrl: R },
    { name: "Rohan Mishra", branch: "Chemical", year: "4th year", cgpa: "8.30", company: "GAIL", role: "Executive Trainee", projects: "Gas pipeline ops", package: "₹22 LPA", joinYear: "2024", blurb: "Natural gas infra.", initials: "RM", hue: 33, resumeUrl: R },
    { name: "Kritika Rao", branch: "Mechanical", year: "4th year", cgpa: "8.15", company: "BHEL", role: "Engineer Trainee", projects: "Turbine assembly ops", package: "₹16 LPA", joinYear: "2024", blurb: "Heavy engineering ops.", initials: "KR", hue: 31, resumeUrl: R },
    { name: "Aditya Bhandari", branch: "Chemical", year: "4th year", cgpa: "8.25", company: "HPCL", role: "Officer Trainee", projects: "Refinery process rotation", package: "₹22 LPA", joinYear: "2024", blurb: "Downstream oil.", initials: "AB", hue: 36, resumeUrl: R },
    { name: "Naina Verma", branch: "Electrical", year: "4th year", cgpa: "8.20", company: "PowerGrid", role: "Executive Trainee", projects: "Transmission planning", package: "₹20 LPA", joinYear: "2024", blurb: "Grid planning.", initials: "NV", hue: 37, resumeUrl: R },
    { name: "Karan Yadav", branch: "Aerospace", year: "4th year", cgpa: "8.45", company: "DRDO", role: "Scientist B", projects: "Guidance systems", package: "₹19 LPA", joinYear: "2024", blurb: "Defence R&D.", initials: "KY", hue: 29, resumeUrl: R },
    { name: "Isha Nair", branch: "Mechanical", year: "4th year", cgpa: "8.00", company: "IOCL (Intern)", role: "Summer Trainee", intern: true, stipend: "₹35k/month", projects: "Panipat refinery mini-project", package: "PPO ₹22 LPA", joinYear: "2025", blurb: "Refinery internship.", initials: "IN", hue: 28, resumeUrl: R },
  ],
  other: [
    { name: "Vedant Shah", branch: "CTARA", year: "M.Tech", cgpa: "8.90", company: "Climate startup", role: "Founding Analyst", projects: "Carbon accounting stack", package: "₹18 LPA", joinYear: "2024", blurb: "Climate-tech first-hire.", initials: "VS", hue: 200, resumeUrl: R },
    { name: "Aisha Fernandes", branch: "Policy Studies", year: "M.P.P.", cgpa: "8.85", company: "Gates Foundation India", role: "Program Analyst", projects: "Public health data work", package: "₹14 LPA", joinYear: "2024", blurb: "Policy + development sector.", initials: "AF", hue: 210, resumeUrl: R },
    { name: "Karan Grover", branch: "Humanities", year: "M.A.", cgpa: "8.70", company: "The Ken", role: "Editorial Analyst", projects: "Tech + business long-reads", package: "₹12 LPA", joinYear: "2024", blurb: "Journalism + tech.", initials: "KG", hue: 195, resumeUrl: R },
    { name: "Nisha Sinha", branch: "CTARA", year: "M.Tech", cgpa: "8.60", company: "SELCO Foundation", role: "Field Engineer", projects: "Rural energy access", package: "₹10 LPA", joinYear: "2024", blurb: "Rural development.", initials: "NS", hue: 205, resumeUrl: R },
    { name: "Rohan Bose", branch: "Policy Studies", year: "M.P.P.", cgpa: "8.75", company: "NITI Aayog Fellow", role: "Fellow", projects: "State-level policy briefs", package: "₹12 LPA", joinYear: "2024", blurb: "Public policy fellow.", initials: "RB", hue: 208, resumeUrl: R },
    { name: "Meera Kulkarni", branch: "Humanities", year: "M.A.", cgpa: "8.80", company: "Rainmatter", role: "Content Strategist", projects: "Climate/finance publishing", package: "₹14 LPA", joinYear: "2024", blurb: "Media + climate.", initials: "MK", hue: 197, resumeUrl: R },
    { name: "Aayush Rao", branch: "CTARA", year: "M.Tech", cgpa: "8.55", company: "ATE Chandra Foundation", role: "Program Associate", projects: "Water security portfolio", package: "₹11 LPA", joinYear: "2024", blurb: "Water sector.", initials: "AR", hue: 202, resumeUrl: R },
    { name: "Sara Iyer", branch: "Policy", year: "M.P.P.", cgpa: "8.90", company: "CPR India", role: "Research Associate", projects: "Urban policy research", package: "₹12 LPA", joinYear: "2024", blurb: "Urban research.", initials: "SI", hue: 206, resumeUrl: R },
    { name: "Aditya Nair", branch: "Humanities", year: "M.A.", cgpa: "8.65", company: "Ashoka University", role: "Research Assistant", projects: "Development econ study", package: "₹10 LPA", joinYear: "2024", blurb: "Academic path.", initials: "AN", hue: 199, resumeUrl: R },
    { name: "Kavya Menon", branch: "CTARA (Intern)", year: "M.Tech", cgpa: "8.70", company: "Dasra", role: "Research Intern", intern: true, stipend: "₹40k/month", projects: "Social impact reporting", package: "PPO ₹12 LPA", joinYear: "2025", blurb: "Impact sector.", initials: "KM", hue: 204, resumeUrl: R },
  ],
};

export const SUB_DOMAINS: Record<string, string[]> = {
  eng: ["Automotive & EV", "Semiconductor manufacturing", "Chemical process", "Aerospace systems", "Heavy industry"],
  it: ["SDE — Backend", "SDE — Distributed systems", "Cloud infrastructure", "Search & ranking", "Platform / DevOps"],
  consulting: ["Strategy (MBB)", "Tech advisory", "Operations & supply chain", "Digital transformation"],
  finance: ["Quant trading", "Investment banking", "High-frequency trading", "Risk & derivatives", "Fintech infrastructure"],
  rnd: ["VLSI & silicon design", "Materials & metallurgy", "Battery / EV systems", "Aerospace R&D", "Semiconductor fabrication"],
  analytics: ["BFSI analytics", "Retail & consumer analytics", "Marketing science", "Supply-chain analytics"],
  ds: ["Applied ML", "Recommendation systems", "NLP & search", "Growth data science", "Experimentation"],
  design: ["Product design (UI/UX)", "Interaction design", "Industrial design", "Design research"],
  edu: ["Curriculum & content", "Ed-tech product", "Assessments & evaluation"],
  product: ["APM programs", "Growth PM", "Platform PM", "Consumer PM"],
  aiml: ["Foundation models", "Applied research", "Alignment & safety", "AI infrastructure"],
  sd: ["Developer tools", "Databases & platforms", "Observability", "Cloud-native infra"],
  psu: ["Energy & oil", "Power sector", "Defence R&D"],
  other: ["Climate tech", "Founder's office", "Policy fellowships", "Media & publishing", "Non-profits"],
};

export const CONNECT_NOTIFICATIONS: string[] = [
  "Aarav (CSE '22) just connected with a student from Google Bangalore.",
  "Priya was matched with a Jane Street quant mentor.",
  "Rohan placed at McKinsey after 3 mentorship sessions — thanks IITBAA!",
  "Ishita (Anthropic) opened 5 new mentorship slots this week.",
  "New: 12 alumni from Consulting sector joined the mentor network.",
  "Karthik (ISRO) is live in the Aerospace room right now.",
  "Sneha benefited from a PPO after her P&G session — congratulations!",
  "Meta London alum just uploaded resume review slots.",
  "Devansh (Kearney) opened a case-prep AMA for the next 2 hours.",
  "Anaya (Jane Street HK) is doing a quant trading walkthrough tonight.",
  "23 new students joined the Finance sector this week.",
  "Diya (Airbnb DS) just published a mentorship playbook.",
];
