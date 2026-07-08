// Top Recruiters — IIT Bombay branch-wise placement & recruitment market data.
// Figures compiled from the placement-cell market synthesis provided.

import csDsImg from "@/assets/recruiters/cs-ds.jpg";
import electricalImg from "@/assets/recruiters/electrical.jpg";
import mechanicalImg from "@/assets/recruiters/mechanical.jpg";
import chemicalImg from "@/assets/recruiters/chemical.jpg";
import interdisciplinaryImg from "@/assets/recruiters/interdisciplinary.jpg";
import bioengImg from "@/assets/recruiters/bioeng.jpg";
import earthImg from "@/assets/recruiters/earth.jpg";
import designImg from "@/assets/recruiters/design.jpg";
import advancedMtechImg from "@/assets/recruiters/advanced-mtech.jpg";
import pureSciencesImg from "@/assets/recruiters/pure-sciences.jpg";
import campusWideImg from "@/assets/recruiters/campus-wide.jpg";

export type RecruiterRow = {
  degree: string;
  companies: string;
  roles: string;
  min: string;
  avg: string;
  median: string;
};

export type SpecialGroup = {
  code: string;
  title: string;
  eligibility: string;
  recruiters: string;
  roles: string;
  metrics: { label: string; value: string }[];
};

export type Domain = {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  image: string;
  rows?: RecruiterRow[];
  groups?: SpecialGroup[];
};

export const SUMMARY = {
  interviewFloor: "₹8.00 – ₹10.00 LPA",
  campusAverage: "₹26.45 LPA",
  medianDomestic: "₹20.21 LPA",
};

export const DOMAINS: Domain[] = [
  {
    id: "cs-ds",
    name: "Computer Science & Data Science",
    tagline: "SDE, quant & AI research tracks",
    accent: "#4da3ff",
    image: csDsImg,
    rows: [
      { degree: "B.Tech Computer Science & Eng. (CSE)", companies: "Google, Microsoft, Uber, Apple, Tower Research, Jane Street", roles: "Software Development Engineer (SDE), Quant Trader, Systems Engineer", min: "₹16.00 LPA", avg: "₹34.50 LPA", median: "₹30.00 LPA" },
      { degree: "M.Tech Computer Science & Eng. (CSE)", companies: "Nvidia, Samsung Semiconductor, Oracle, Qualcomm, PayPal", roles: "Compiler Engineer, GPU Software Architect, ML Engineer", min: "₹14.00 LPA", avg: "₹29.00 LPA", median: "₹26.50 LPA" },
      { degree: "M.Tech Data Science & AI (CMInDS)", companies: "Adobe, Amazon, Fractal Analytics, Meta, IBM Research", roles: "Data Scientist, AI Researcher, NLP Engineer, MLOps Engineer", min: "₹15.00 LPA", avg: "₹31.00 LPA", median: "₹28.00 LPA" },
      { degree: "PhD Computer Science & Eng.", companies: "Microsoft Research, Intel Labs, Google DeepMind, TCS Research", roles: "Principal AI Scientist, Cryptographer, R&D Systems Engineer", min: "₹18.00 LPA", avg: "₹35.00 LPA", median: "₹32.00 LPA" },
    ],
  },
  {
    id: "electrical",
    name: "Electrical & Electronics Engineering",
    tagline: "VLSI, power & signal systems",
    accent: "#ff9d3d",
    image: electricalImg,
    rows: [
      { degree: "B.Tech Electrical Engineering (EE)", companies: "Qualcomm, Texas Instruments, Intel, Micron, Jaguar Land Rover", roles: "VLSI Design Engineer, Analog Circuit Engineer, Controls Architect", min: "₹12.00 LPA", avg: "₹25.80 LPA", median: "₹22.50 LPA" },
      { degree: "M.Tech Microelectronics & VLSI", companies: "TSMC, AMD, Nvidia, NXP Semiconductors, Applied Materials", roles: "Physical Design Engineer, Verification Engineer, Silicon Validator", min: "₹14.50 LPA", avg: "₹28.00 LPA", median: "₹25.00 LPA" },
      { degree: "M.Tech Electronic Systems Design", companies: "Samsung R&D, Sony, Honeywell, GE Healthcare, Philips", roles: "Embedded Systems Dev, Firmware Engineer, IoT Systems Architect", min: "₹11.50 LPA", avg: "₹23.00 LPA", median: "₹20.00 LPA" },
      { degree: "M.Tech Communications & Signal Processing", companies: "Cisco, Ericsson, Nokia, Qualcomm, Apple India", roles: "5G RF Engineer, Network Architect, DSP Algorithm Engineer", min: "₹12.00 LPA", avg: "₹24.50 LPA", median: "₹21.00 LPA" },
      { degree: "M.Tech Power Electronics & Power Systems", companies: "Siemens, Schneider Electric, ABB, Delta Electronics, GE Vernova", roles: "Power Electronics Engineer, Grid Automation Specialist, EV Powertrain Dev", min: "₹10.50 LPA", avg: "₹19.50 LPA", median: "₹17.00 LPA" },
      { degree: "M.Tech Control & Computing", companies: "ISRO, Rockwell Automation, Eaton, Mahindra Research Valley", roles: "Robotics Control Engineer, Guidance & Navigation Systems Dev", min: "₹11.00 LPA", avg: "₹21.00 LPA", median: "₹18.50 LPA" },
      { degree: "PhD Electrical Engineering", companies: "BEL, C-DOT, Synopsys, Cadence Design Systems, DRDO", roles: "Senior Hardware Scientist, RF Systems Researcher, Semiconductor Lead", min: "₹15.00 LPA", avg: "₹27.00 LPA", median: "₹24.00 LPA" },
    ],
  },
  {
    id: "mechanical",
    name: "Mechanical, Aerospace & Infrastructure",
    tagline: "Mobility, propulsion & civil systems",
    accent: "#ff6b4d",
    image: mechanicalImg,
    rows: [
      { degree: "B.Tech Mechanical Engineering (ME)", companies: "Tata Motors, Bajaj Auto, L&T, Ola Electric, Maruti Suzuki", roles: "R&D Product Engineer, Automotive Design, Operations Manager", min: "₹9.50 LPA", avg: "₹19.80 LPA", median: "₹16.00 LPA" },
      { degree: "M.Tech Thermal & Fluids Engineering", companies: "GE Aerospace, Cummins, Shell, ExxonMobil, Godrej Aerospace", roles: "Computational Fluid Dynamics (CFD) Analyst, Propulsion Engineer", min: "₹10.00 LPA", avg: "₹18.50 LPA", median: "₹16.50 LPA" },
      { degree: "M.Tech Design Engineering", companies: "Mercedes-Benz, Ashok Leyland, Ansys, Altair, Bosch", roles: "NVH Specialist, CAE Finite Element Analyst", min: "₹11.00 LPA", avg: "₹21.00 LPA", median: "₹18.00 LPA" },
      { degree: "M.Tech Manufacturing Engineering", companies: "ITC, Unilever, Tesla India, Aditya Birla Group, JSW Steel", roles: "Industrial Automation Lead, Supply Chain Optimization Consultant", min: "₹9.00 LPA", avg: "₹17.50 LPA", median: "₹15.00 LPA" },
      { degree: "B.Tech Aerospace Engineering", companies: "Airbus, Boeing, ISRO, HAL, BrahMos Aerospace, Skyroot", roles: "Aerodynamicist, Structural Integrity Engineer, UAV Flight Controls", min: "₹10.00 LPA", avg: "₹20.50 LPA", median: "₹17.00 LPA" },
      { degree: "M.Tech Aerospace (Structures/Dynamics)", companies: "Safran, Rolls-Royce, Lockheed Martin, Eaton Aerospace", roles: "Finite Element Structural Modeler, Flight Simulator Systems Dev", min: "₹11.50 LPA", avg: "₹22.00 LPA", median: "₹19.00 LPA" },
      { degree: "B.Tech Civil Engineering (CE)", companies: "L&T Construction, Tata Projects, Adani Group, Reliance Infra", roles: "Structural Designer, Project Execution Manager, Real Estate Appraiser", min: "₹8.50 LPA", avg: "₹16.20 LPA", median: "₹13.50 LPA" },
      { degree: "M.Tech Structural Engineering", companies: "Ramboll, Atkins, Jacobs, Dar Al-Handasah, Engineers India Ltd", roles: "Senior Bridge Designer, Seismic Design Analyst, BIM Infrastructure Lead", min: "₹9.50 LPA", avg: "₹17.00 LPA", median: "₹14.50 LPA" },
      { degree: "M.Tech Geotechnical / Transportation Eng.", companies: "NHAI, Afcons, Keller India, L&T Infrastructure", roles: "Metro Transit Planner, Pavement Design Specialist, Soil Dynamics Analyst", min: "₹9.00 LPA", avg: "₹15.50 LPA", median: "₹13.00 LPA" },
      { degree: "M.Tech Water Resources / Ocean Eng.", companies: "Royal HaskoningDHV, DHI, Port Authorities, CWPRS India", roles: "Coastal Hydrodynamics Engineer, Hydrological Modeler, Flood Risk Analyst", min: "₹8.50 LPA", avg: "₹14.50 LPA", median: "₹12.50 LPA" },
      { degree: "PhD Mechanical / Civil / Aerospace", companies: "Airbus R&T, DRDO, CSIR Labs, Mahindra Advanced Tech", roles: "Advanced Materials Specialist, Senior Structural Defense Researcher", min: "₹12.00 LPA", avg: "₹22.00 LPA", median: "₹19.50 LPA" },
    ],
  },
  {
    id: "chemical",
    name: "Chemical, Metallurgical & Materials Science",
    tagline: "Process, metallurgy & materials",
    accent: "#f5b731",
    image: chemicalImg,
    rows: [
      { degree: "B.Tech Chemical Engineering (CH)", companies: "Reliance Industries, HUL, Shell, Schlumberger, BASF, ITC", roles: "Process Engineer, Operations Lead, Supply Chain Analyst", min: "₹9.50 LPA", avg: "₹18.50 LPA", median: "₹15.50 LPA" },
      { degree: "M.Tech Chemical Engineering", companies: "Honeywell UOP, Dr. Reddy's, Cipla, Biocon, HPCL", roles: "Process Simulation Specialist, Refinery Systems Analyst, Bio-Process Dev", min: "₹10.00 LPA", avg: "₹19.20 LPA", median: "₹16.50 LPA" },
      { degree: "B.Tech Metallurgical Eng. & Materials Sci.", companies: "Tata Steel, JSW, Vedanta, Hindalco, POSCO, Murugappa Group", roles: "Metallurgist, Quality Assurance Lead, Plant Operations Manager", min: "₹8.50 LPA", avg: "₹16.00 LPA", median: "₹13.50 LPA" },
      { degree: "M.Tech Materials Science & Engineering", companies: "Applied Materials, Murata Electronics, Corning, Tata Steel", roles: "Failure Analysis Engineer, Thin Film Deposition Engineer, Battery Chemist", min: "₹10.00 LPA", avg: "₹19.00 LPA", median: "₹16.00 LPA" },
      { degree: "PhD Chemical / Materials Sciences", companies: "Aditya Birla Science & Tech, Unilever R&D, SABIC, Saint-Gobain", roles: "Materials Characterization Lead, Polymer R&D Scientist, Catalyst Developer", min: "₹12.50 LPA", avg: "₹24.00 LPA", median: "₹21.00 LPA" },
    ],
  },
  {
    id: "interdisciplinary",
    name: "Interdisciplinary, Sciences & Management",
    tagline: "Analytics, energy, ops & management",
    accent: "#a78bfa",
    image: interdisciplinaryImg,
    rows: [
      { degree: "M.Sc Chemistry / Applied Chemistry", companies: "Syngene, Jubilant Biosys, Pfizer, Asian Paints, Pidilite", roles: "Formulation Chemist, Analytical Method Developer, Synthesis Scientist", min: "₹8.00 LPA", avg: "₹13.50 LPA", median: "₹11.00 LPA" },
      { degree: "M.Sc Physics / Applied Geophysics", companies: "Schlumberger, Halliburton, CGG, ISRO, BARC, Vedanta", roles: "Seismic Data Interpreter, Petrophysicist, Computational Physicist", min: "₹9.00 LPA", avg: "₹15.00 LPA", median: "₹12.50 LPA" },
      { degree: "M.Sc Applied Statistics & Informatics", companies: "Goldman Sachs, JPMorgan Chase, Axis Bank, Tiger Analytics", roles: "Risk Modeler, Quantitative Data Analyst, Credit Risk Specialist", min: "₹12.00 LPA", avg: "₹23.50 LPA", median: "₹20.00 LPA" },
      { degree: "B.Tech Engineering Physics", companies: "IBM Quantum, Rigetti, Intel, TSMC, IISc (Academic Tracks)", roles: "Quantum Computing Dev, Photonics Engineer, Semiconductor Researcher", min: "₹12.00 LPA", avg: "₹24.00 LPA", median: "₹21.00 LPA" },
      { degree: "B.Tech Energy Engineering (Desai Sethi)", companies: "ReNew Power, Adani Green, Tata Power, Waaree Energies", roles: "Solar Microgrid Planner, Energy Storage Engineer, Carbon Accountant", min: "₹10.00 LPA", avg: "₹19.50 LPA", median: "₹16.50 LPA" },
      { degree: "M.Tech Energy Systems Engineering", companies: "Thermax, Suzlon, Sterling & Wilson, Siemens Energy", roles: "Wind Farm Optimization Lead, HVAC Energy Auditor, Hydrogen Fuel Specialist", min: "₹10.50 LPA", avg: "₹18.00 LPA", median: "₹15.50 LPA" },
      { degree: "M.Tech Systems & Control Engineering", companies: "Boeing India, Ola Electric, ABB Robotics, Honeywell", roles: "Autonomous Systems Controls Engineer, Drone Flight Systems Dev", min: "₹11.50 LPA", avg: "₹22.50 LPA", median: "₹19.00 LPA" },
      { degree: "M.Tech Environmental Science & Eng.", companies: "Veolia Water, NEERI, PwC Sustainability, ERM India", roles: "ESG Auditor, Water Treatment Plant Designer, Carbon Offset Strategist", min: "₹9.00 LPA", avg: "₹15.50 LPA", median: "₹13.00 LPA" },
      { degree: "M.Tech IE & OR (Industrial Eng. & Ops)", companies: "Amazon Logistics, Flipkart, DHL, Delhivery, McKinsey Knowledge", roles: "Supply Chain Network Modeler, Operations Research Analyst, Inventory Strategist", min: "₹13.00 LPA", avg: "₹25.00 LPA", median: "₹22.00 LPA" },
      { degree: "M.Des (Visual Comm / Product / Mobility)", companies: "Microsoft UX, Samsung Design, Tata Elxsi, Lucid Motors", roles: "UX Architect, Industrial Automotive Designer, Interaction Designer", min: "₹11.00 LPA", avg: "₹20.50 LPA", median: "₹18.00 LPA" },
      { degree: "Executive MBA / Master of Management", companies: "McKinsey, BCG, Bain, Accenture Strategy, PwC, EY", roles: "Management Consultant, Product Strategy Manager, Operations Consultant", min: "₹16.00 LPA", avg: "₹28.50 LPA", median: "₹25.00 LPA" },
      { degree: "PhD Sciences / Interdisciplinary Tracks", companies: "Biocon Research, Reliance R&D, Shell Technology Center", roles: "Climate Modeler, Renewable Energy Consultant, Senior Data Analyst", min: "₹11.00 LPA", avg: "₹20.00 LPA", median: "₹17.50 LPA" },
    ],
  },
  {
    id: "bioeng",
    name: "Bioengineering, Healthcare & Medical",
    tagline: "Biomedical devices & life sciences",
    accent: "#34d399",
    image: bioengImg,
    rows: [
      { degree: "B.Tech Bioscience & Bioengineering", companies: "Dr. Reddy's, Medtronic, Biocon, Novartis, Philips Healthcare", roles: "Biomedical Engineer, Regulatory Affairs Specialist, Healthcare Data Analyst", min: "₹9.00 LPA", avg: "₹15.50 LPA", median: "₹13.00 LPA" },
      { degree: "M.Tech Biomedical Engineering", companies: "Siemens Healthineers, GE Healthcare, Stryker, Roche, Johnson & Johnson", roles: "Medical Device Designer, Clinical Trial Analyst, Imaging Systems Engineer", min: "₹10.00 LPA", avg: "₹17.20 LPA", median: "₹14.50 LPA" },
      { degree: "PhD Biosciences & Bioengineering", companies: "AstraZeneca, Syngene, Bharat Biotech, Serum Institute, CSIR Labs", roles: "Senior Formulation Scientist, Bioinformatics Researcher, Immunology Lead", min: "₹12.00 LPA", avg: "₹21.00 LPA", median: "₹18.50 LPA" },
    ],
  },
  {
    id: "earth",
    name: "Earth Sciences, Geophysics & Mining",
    tagline: "Exploration, geoscience & resources",
    accent: "#e879a6",
    image: earthImg,
    rows: [
      { degree: "M.Sc–Ph.D Dual Degree Earth Sciences", companies: "ONGC, Cairn Oil & Gas, Schlumberger, Shell, GSI (Govt)", roles: "Exploration Geologist, Hydrogeologist, GIS Mapping Specialist", min: "₹9.50 LPA", avg: "₹16.00 LPA", median: "₹13.00 LPA" },
      { degree: "M.Tech Geoexploration", companies: "Vedanta, Hindalco, Rio Tinto, JSW Steel, Coal India", roles: "Resource Estimation Engineer, Mine Planner, Geochemical Analyst", min: "₹9.00 LPA", avg: "₹15.00 LPA", median: "₹12.50 LPA" },
      { degree: "M.Tech Petroleum Geoscience", companies: "Halliburton, Baker Hughes, Reliance Petroleum, ExxonMobil", roles: "Reservoir Modeler, Petrophysical Data Analyst, Drilling Log Engineer", min: "₹10.50 LPA", avg: "₹18.50 LPA", median: "₹15.00 LPA" },
    ],
  },
  {
    id: "design",
    name: "Industrial Design & Humanities",
    tagline: "Design, UX & social sciences",
    accent: "#fb923c",
    image: designImg,
    rows: [
      { degree: "M.Des Industrial / Product Design", companies: "Tata Motors, Whirlpool, Godrej & Boyce, Samsung, Bajaj Auto", roles: "Product Concept Designer, Ergonomics Specialist, Consumer Goods Designer", min: "₹11.00 LPA", avg: "₹19.00 LPA", median: "₹16.50 LPA" },
      { degree: "M.Des Communication Design", companies: "Google India, Microsoft UX, Adobe, Flipkart, Swiggy, Zomato", roles: "Brand Identity Designer, Motion Graphics Architect, UX/UI Lead", min: "₹12.00 LPA", avg: "₹21.50 LPA", median: "₹18.50 LPA" },
      { degree: "M.Des Mobility & Vehicle Design", companies: "Mahindra & Mahindra, Ola Electric, Ather Energy, Maruti Suzuki", roles: "Automotive Exterior Stylist, Clay Modeler, EV Dashboard UI Designer", min: "₹11.50 LPA", avg: "₹20.00 LPA", median: "₹17.00 LPA" },
      { degree: "M.Des Interaction Design", companies: "IBM, Oracle, Cognizant, Infosys Consulting, TCS Digital", roles: "Human-Computer Interaction Analyst, Design Strategist, UX Researcher", min: "₹12.00 LPA", avg: "₹22.00 LPA", median: "₹19.00 LPA" },
      { degree: "M.Des Animation Design", companies: "Disney India, Tata Elxsi, Rockstar Games, Technicolor, Sony Pix", roles: "3D Asset Animator, Game Level Designer, Storyboard Visualizer", min: "₹9.00 LPA", avg: "₹15.50 LPA", median: "₹13.00 LPA" },
      { degree: "M.A. by Research (Humanities & Social Sci.)", companies: "PRS Legislative, Teach for India, Azim Premji Foundation, NITI Aayog", roles: "Policy Research Associate, Corporate Social Responsibility (CSR) Lead", min: "₹8.00 LPA", avg: "₹12.00 LPA", median: "₹10.00 LPA" },
      { degree: "PhD Humanities (Economics / Sociology / Psych)", companies: "Reserve Bank of India (RBI), HDFC Bank, EY, Academic Institutions", roles: "Behavioral Economist, Corporate Psychologist, Public Policy Strategist", min: "₹11.00 LPA", avg: "₹18.00 LPA", median: "₹15.00 LPA" },
    ],
  },
  {
    id: "advanced-mtech",
    name: "Advanced Specialized Interdisciplinary M.Tech",
    tagline: "Systems, climate & urban centres",
    accent: "#38bdf8",
    image: advancedMtechImg,
    rows: [
      { degree: "M.Tech Materials, Mfg & Modeling (MMM)", companies: "Tata Steel, L&T Defense, Saint-Gobain, Ansys, JSW", roles: "Materials Process Modeler, Digital Twin Engineer, Metallurgy Consultant", min: "₹10.00 LPA", avg: "₹18.00 LPA", median: "₹15.50 LPA" },
      { degree: "M.Tech Systems Engineering (SysCon)", companies: "Honeywell, Boeing, Rockwell Automation, Schneider Electric", roles: "Systems Integration Engineer, Plant Automation Architect, SCADA Dev", min: "₹11.00 LPA", avg: "₹20.50 LPA", median: "₹18.00 LPA" },
      { degree: "M.Tech Technology & Development (CTARA)", companies: "NABARD, UNICEF India, UNDP, Tata Trusts, Government Agencies", roles: "Rural Technology Consultant, Project Impact Evaluator, Supply Chain Officer", min: "₹8.00 LPA", avg: "₹13.00 LPA", median: "₹11.00 LPA" },
      { degree: "M.Tech Climate Studies (IDP)", companies: "PwC ESG, McKinsey Sustainability, EY, Skymet Weather, CEEW", roles: "Carbon Accountant, Climate Risk Analyst, Sustainability Auditor", min: "₹10.00 LPA", avg: "₹16.50 LPA", median: "₹14.00 LPA" },
      { degree: "M.Tech Educational Technology (ET)", companies: "BYJU'S, Unacademy, Eruditus, Simplilearn, UpGrad", roles: "Instructional Designer, EdTech Product Lead, Learning Analytics Dev", min: "₹9.00 LPA", avg: "₹16.00 LPA", median: "₹13.50 LPA" },
      { degree: "M.Tech Urban Systems (CUSE)", companies: "PwC Urban Infra, KPMG, Knight Frank, Urban Development Depts", roles: "Smart City Planner, Transport Network Modeler, Infra Data Analyst", min: "₹9.50 LPA", avg: "₹17.00 LPA", median: "₹14.50 LPA" },
      { degree: "M.Tech Corrosion Science & Engineering", companies: "ONGC, Indian Oil (IOCL), Asian Paints, Berger, Engineers India", roles: "Cathodic Protection Specialist, Failure Analyst, Asset Integrity Engineer", min: "₹9.50 LPA", avg: "₹16.50 LPA", median: "₹14.00 LPA" },
    ],
  },
  {
    id: "pure-sciences",
    name: "Pure Sciences (M.Sc)",
    tagline: "Chemistry, physics & biotech research",
    accent: "#fbbf24",
    image: pureSciencesImg,
    rows: [
      { degree: "M.Sc Chemistry (Organic / Inorganic / Physical)", companies: "Syngene, Dr. Reddy's, Pfizer Research, Asian Paints", roles: "Synthesis Chemist, Analytical Chemist, Formulation Scientist", min: "₹8.00 LPA", avg: "₹12.50 LPA", median: "₹10.50 LPA" },
      { degree: "M.Sc Physics (Theoretical / Experimental)", companies: "IBM Quantum, Intel Labs, BARC, Academic / Coaching Giants", roles: "Research Project Associate, Quantum Computing Intern, Subject Expert", min: "₹8.50 LPA", avg: "₹14.00 LPA", median: "₹11.50 LPA" },
      { degree: "M.Sc Biotechnology", companies: "Biocon, Serum Institute, Dr. Reddy's, Strand Life Sciences", roles: "Molecular Biology Analyst, Quality Control Officer, Cell Culture Engineer", min: "₹8.00 LPA", avg: "₹13.00 LPA", median: "₹11.00 LPA" },
    ],
  },
  {
    id: "campus-wide",
    name: "Campus-Wide Non-Tech & Strategy Recruiters",
    tagline: "Trading, consulting & investment banking",
    accent: "#f5b731",
    image: campusWideImg,
    groups: [
      {
        code: "A",
        title: "Global High-Frequency Trading & Market Makers",
        eligibility: "Open to CSE / EE top rankers",
        recruiters: "Jane Street, Citadel, Jump Trading, Graviton Research, Five Rings, Da Vinci",
        roles: "Quantitative Trader, High-Frequency Developer, Alpha Researcher",
        metrics: [
          { label: "Minimum (Domestic)", value: "₹45.00 LPA" },
          { label: "Average (Domestic)", value: "₹65.00 – ₹90.00 LPA" },
          { label: "Highest (International)", value: "₹1.80 – ₹3.67 Cr PA" },
        ],
      },
      {
        code: "B",
        title: "Tier-1 Strategy & Management Consulting",
        eligibility: "Open to all branches",
        recruiters: "McKinsey & Company, Boston Consulting Group (BCG), Bain & Company, Oliver Wyman, Kearney, EY-Parthenon",
        roles: "Management Consultant, Strategy Analyst, Associate Consultant",
        metrics: [
          { label: "Minimum Baseline", value: "₹16.00 LPA" },
          { label: "Average Package", value: "₹24.00 – ₹32.00 LPA" },
          { label: "Career Cap at Entry", value: "₹38.00 LPA" },
        ],
      },
      {
        code: "C",
        title: "Investment Banking & Global Markets",
        eligibility: "Open to all branches",
        recruiters: "Goldman Sachs, Morgan Stanley, JPMorgan Chase, Deutsche Bank, Barclays, Nomura",
        roles: "Investment Banking Analyst, Global Markets Trader, Risk Structurer, Quantitative Developer",
        metrics: [
          { label: "Minimum Baseline", value: "₹15.00 LPA" },
          { label: "Average Package", value: "₹22.00 – ₹30.00 LPA" },
          { label: "Front-End Outliers", value: "₹42.00 LPA" },
        ],
      },
    ],
  },
];

export function domainById(id: string): Domain | undefined {
  return DOMAINS.find((d) => d.id === id);
}
