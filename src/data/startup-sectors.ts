// IIT Bombay Startup Ventures — 20 sector domains and representative startups.
// Sector images map to available branch images for visual variety.

import fintech from "@/assets/branches/economics.jpg";
import ai from "@/assets/branches/cse.jpg";
import ecom from "@/assets/branches/ieor.jpg";
import health from "@/assets/branches/biomedical.jpg";
import mobility from "@/assets/branches/mechanical.jpg";
import deep from "@/assets/branches/nanotech.jpg";
import agri from "@/assets/branches/environmental.jpg";
import saas from "@/assets/branches/appliedstats.jpg";
import prop from "@/assets/branches/civil.jpg";
import edu from "@/assets/branches/edtech.jpg";
import clean from "@/assets/branches/energy.jpg";
import iiot from "@/assets/branches/electrical.jpg";
import robotics from "@/assets/branches/syscon.jpg";
import food from "@/assets/branches/chemical.jpg";
import hr from "@/assets/branches/humanities.jpg";
import media from "@/assets/branches/idc.jpg";
import logistics from "@/assets/branches/geoinformatics.jpg";
import biotech from "@/assets/branches/biosciences.jpg";
import cyber from "@/assets/branches/mathematics.jpg";
import adtech from "@/assets/branches/enggphysics.jpg";

export interface Startup {
  name: string;
  founder: string;
  branch: string;
  website: string;
  linkedin?: string;
  description: string;
  motivation: string;
  reports?: { label: string; url: string }[];
}

export interface StartupSector {
  key: string;
  name: string;
  image: string;
  color: string;
  tagline: string;
  startups: Startup[];
}

export const STARTUP_SECTORS: StartupSector[] = [
  {
    key: "fintech", name: "Financial Technology", image: fintech, color: "#5eff9c",
    tagline: "API-driven layers reshaping Indian retail finance.",
    startups: [
      { name: "Groww", founder: "Lalit Keshre", branch: "Electrical Engineering · 2004", website: "https://groww.in", description: "Zero-commission investing platform for first-time retail investors.", motivation: "Disrupted brokerage by eliminating paperwork entirely.", reports: [{ label: "50M-user case study", url: "https://nicodigital.com" }] },
      { name: "Zeta", founder: "Bhavin Turakhia", branch: "IIT-B Network", website: "https://zeta.tech", description: "Modern banking tech stack for banks and fintechs.", motivation: "Bringing legacy banks into the API era." },
      { name: "WhizDM (MoneyView)", founder: "Puneet Agarwal", branch: "IIT-B Alumni", website: "https://moneyview.in", description: "Personal finance and credit for the next billion.", motivation: "Making credit accessible beyond metros." },
      { name: "Rupeek", founder: "Sumit Maniyar", branch: "IIT-B Alumni", website: "https://rupeek.com", description: "Asset-backed digital gold loans, doorstep.", motivation: "Unlocking household gold as productive capital." },
      { name: "OneCard", founder: "Anurag Sinha", branch: "IIT-B Alumni", website: "https://getonecard.app", description: "Mobile-first premium credit card.", motivation: "A credit product built for smartphones, not branches." },
      { name: "KredX", founder: "Manish Kumar", branch: "IIT-B Network", website: "https://kredx.com", description: "Invoice discounting marketplace for SMEs.", motivation: "Fixing cash-flow gaps for Indian SMEs." },
      { name: "Jupiter", founder: "Jitendra Gupta", branch: "IIT-B Network", website: "https://jupiter.money", description: "Neobank for salaried professionals.", motivation: "A bank that actually feels like an app." },
      { name: "Progcap", founder: "Pallavi Shrivastava", branch: "IIT-B Alumni", website: "https://progcap.com", description: "Working-capital financing for retailer supply chains.", motivation: "Last-mile credit for kirana ecosystems." },
      { name: "FinBox", founder: "Rajat Deshpande", branch: "IIT-B Network", website: "https://finbox.in", description: "Embedded credit infrastructure.", motivation: "Making credit a feature of any app." },
      { name: "Cube Wealth", founder: "Satyen Kothari", branch: "IIT-B Alumni", website: "https://cube.wealth", description: "Curated wealth-management for professionals.", motivation: "Advisory-grade portfolios in your pocket." },
    ],
  },
  {
    key: "ai", name: "Artificial Intelligence & ML", image: ai, color: "#c96bff",
    tagline: "Agentic frameworks and enterprise automation.",
    startups: [
      { name: "Composio", founder: "Karan Vaidya & Soham Ganatra", branch: "CSE · 2017", website: "https://composio.dev", description: "Infrastructure for LLMs to interact with external apps.", motivation: "The plumbing that makes AI agents actually useful." },
      { name: "GupShup", founder: "Beerud Sheth", branch: "IIT-B Alumni", website: "https://gupshup.io", description: "Conversational messaging platform for enterprises.", motivation: "Chat as the new interface." },
      { name: "Rephrase.ai", founder: "Ashray Malhotra", branch: "IIT-B Network", website: "https://rephrase.ai", description: "AI video generation for personalized content.", motivation: "One video, millions of variations." },
      { name: "Haptik", founder: "Aakrit Vaish", branch: "IIT-B Network", website: "https://haptik.ai", description: "Enterprise conversational AI platform.", motivation: "Customer support at machine scale." },
      { name: "Netcore Cloud", founder: "Rajesh Jain", branch: "IIT-B Alumni", website: "https://netcorecloud.com", description: "Customer engagement + email/martech.", motivation: "Marketing intelligence, unified." },
      { name: "vPhrase", founder: "Neeraj Sabharwal", branch: "IIT-B Network", website: "https://vphrase.com", description: "Automated narrative generation from data.", motivation: "Turning dashboards into stories." },
      { name: "Qure.ai", founder: "Prashant Warier", branch: "IIT-B Alumni", website: "https://qure.ai", description: "Deep learning for radiology.", motivation: "Radiologist-grade diagnosis, instantly." },
      { name: "Conversia", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Multilingual conversational assistants.", motivation: "AI that speaks every Indian language." },
      { name: "Neuralic", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Enterprise ML infrastructure.", motivation: "ML platform in a box." },
      { name: "AllinCall", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "AI voice agents for service teams.", motivation: "Every call handled." },
    ],
  },
  {
    key: "ecom", name: "E-Commerce & Marketplaces", image: ecom, color: "#ff5adf",
    tagline: "Localized delivery and catalog optimization.",
    startups: [
      { name: "Zepto", founder: "Aadit Palicha & Kaivalya Vohra", branch: "IIT-B Network · 2021", website: "https://zeptonow.com", description: "10-minute quick commerce on dark stores.", motivation: "Cut pack time to under 60 seconds.", reports: [{ label: "CNBC", url: "https://cnbc.com" }] },
      { name: "Purplle", founder: "Manish Taneja", branch: "IIT-B Alumni", website: "https://purplle.com", description: "Beauty e-commerce for value-conscious India.", motivation: "Beauty for every skin tone and budget." },
      { name: "Pepperfry", founder: "Ambareesh Murty", branch: "IIT-B Network", website: "https://pepperfry.com", description: "Furniture and home marketplace.", motivation: "Building India's home online." },
      { name: "ShopClues", founder: "Sandeep Aggarwal", branch: "IIT-B Alumni", website: "https://shopclues.com", description: "Managed marketplace for tier-2/3 India.", motivation: "Bringing the next 500M shoppers online." },
      { name: "Bombay Shaving Company", founder: "Shantanu Deshpande", branch: "IIT-B Alumni", website: "https://bombayshavingcompany.com", description: "Male grooming D2C brand.", motivation: "Grooming ritual, reimagined." },
      { name: "Quikr", founder: "Pranay Chulet", branch: "IIT-B Alumni", website: "https://quikr.com", description: "Classifieds marketplace.", motivation: "Anything and everything, near you." },
      { name: "Craftsvilla", founder: "Manoj Gupta", branch: "IIT-B Alumni", website: "https://craftsvilla.com", description: "Ethnic wear and handicrafts.", motivation: "Bringing India's crafts online." },
      { name: "Infurnia", founder: "Nikhil Kumar", branch: "IIT-B Alumni", website: "https://infurnia.com", description: "Cloud-native interior design software.", motivation: "3D interiors in the browser." },
      { name: "Fynd", founder: "Farooq Adam", branch: "IIT-B Alumni", website: "https://fynd.com", description: "Omnichannel commerce for fashion retail.", motivation: "Every store, online." },
      { name: "LocalBanya", founder: "Rashi Choudhary", branch: "IIT-B Alumni", website: "#", description: "Hyperlocal grocery pioneer.", motivation: "Groceries delivered from your neighbourhood." },
    ],
  },
  {
    key: "health", name: "Healthcare & MedTech", image: health, color: "#ff6b7a",
    tagline: "Engineering meets clinical deployment.",
    startups: [
      { name: "Tata 1mg", founder: "Prashant Tandon", branch: "IIT-B Alumni", website: "https://1mg.com", description: "Digital pharmacy and health services.", motivation: "Healthcare, one tap away." },
      { name: "Dozee", founder: "Mudit Dandwate", branch: "Mechanical · 2013", website: "https://dozee.io", description: "Contactless remote patient monitoring via mattress sensor.", motivation: "Vitals without electrodes." },
      { name: "MedPrime Technologies", founder: "Hrishikesh Kale", branch: "IIT-B Alumni", website: "https://medprime.in", description: "Automated microscopy hardware.", motivation: "Cellular imaging, standardised." },
      { name: "Lifespark Technologies", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Wearables for Parkinson's patients.", motivation: "Restoring gait through vibration." },
      { name: "Innovaccer", founder: "Abhinav Shashank", branch: "IIT-B Alumni", website: "https://innovaccer.com", description: "Healthcare data platform for US providers.", motivation: "Unifying patient records at scale." },
      { name: "Robo Bionics", founder: "Aditya Sharma", branch: "IIT-B Network", website: "https://robobionics.in", description: "Affordable myoelectric prosthetic arms.", motivation: "A hand, for a fraction of the cost." },
      { name: "MedGenome", founder: "Sam Santhosh", branch: "IIT-B Alumni · 1981", website: "https://medgenome.com", description: "Genomics for South Asian populations.", motivation: "Genomics indexed to Indian genetics." },
      { name: "Phablecare", founder: "Sumit Sinha", branch: "IIT-B Alumni", website: "https://phable.in", description: "Chronic-care management platform.", motivation: "Better outcomes for diabetes, hypertension." },
      { name: "Biosense Technologies", founder: "Abhishek Sen", branch: "IIT-B Alumni", website: "https://biosense.in", description: "Point-of-care diagnostic devices.", motivation: "Lab-quality tests, anywhere." },
      { name: "Aura Health", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Preventive-health platform.", motivation: "Health as a daily practice." },
    ],
  },
  {
    key: "mobility", name: "Smart Mobility & EV", image: mobility, color: "#3d9dff",
    tagline: "Urban mobility and localized EV architectures.",
    startups: [
      { name: "Ola Cabs", founder: "Bhavish Aggarwal & Ankit Bhati", branch: "CSE · 2008", website: "https://olacabs.com", description: "Ride-hailing platform localised for Indian cities.", motivation: "Mobility for a billion." },
      { name: "Ola Electric", founder: "Bhavish Aggarwal", branch: "CSE · 2008", website: "https://olaelectric.com", description: "Electric two-wheelers built in India.", motivation: "Gigafactory-scale EV manufacturing." },
      { name: "Cars24", founder: "Vikram Chopra", branch: "IIT-B Alumni", website: "https://cars24.com", description: "Used-car marketplace with instant valuation.", motivation: "Selling a car should take an hour, not a month." },
      { name: "LogiNext", founder: "Dhruvil Sanghvi", branch: "IIT-B Alumni", website: "https://loginextsolutions.com", description: "Field workforce and delivery optimization.", motivation: "Every route, optimised." },
      { name: "Euler Motors", founder: "Saurav Kumar", branch: "IIT-B Alumni", website: "https://eulermotors.com", description: "Electric commercial vehicles for last-mile.", motivation: "Cargo, electrified." },
      { name: "Chalo", founder: "Mohit Dubey", branch: "IIT-B Alumni", website: "https://chalo.com", description: "Live-tracked public bus network app.", motivation: "Making city buses smart." },
      { name: "Revv", founder: "Anupam Agarwal", branch: "IIT-B Alumni", website: "https://revv.co.in", description: "Self-drive car rental.", motivation: "Owning is optional." },
      { name: "Turno", founder: "Hemanth Aluru", branch: "IIT-B Alumni", website: "https://turno.club", description: "Electric commercial vehicle financing.", motivation: "EV loans, driver-friendly." },
      { name: "Altigreen", founder: "Amitabh Saran", branch: "IIT-B Alumni", website: "https://altigreen.com", description: "Electric three-wheelers for cargo.", motivation: "Neev — the electric hustler." },
      { name: "TyreExpress", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Automotive tyre marketplace.", motivation: "Every tyre, home-delivered." },
    ],
  },
  {
    key: "deep", name: "Deep Tech & Nanotechnology", image: deep, color: "#8dd6ff",
    tagline: "Materials, quantum and defense-grade hardware.",
    startups: [
      { name: "ideaForge", founder: "Ankit Mehta & Rahul Singh", branch: "Mechanical · 2005", website: "https://ideaforgetech.com", description: "Autonomous UAVs for defense and mapping.", motivation: "Indian drones on Indian borders." },
      { name: "Log 9 Materials", founder: "Akshay Singhal", branch: "IIT-B Network", website: "https://log9materials.com", description: "Graphene batteries and rapid-charging cells.", motivation: "Batteries built for Indian heat." },
      { name: "Planys Technologies", founder: "Tanuj Jhunjhunwala", branch: "IIT-B Alumni", website: "https://planystech.com", description: "Underwater inspection ROVs.", motivation: "Dam and pipe inspection, safely." },
      { name: "3rdiTech", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Custom vision-sensor semiconductors.", motivation: "Silicon for machine vision." },
      { name: "Lekha Wireless", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "5G/LTE physical-layer IP.", motivation: "Wireless research turned product." },
      { name: "QpiAI", founder: "Nagendra Nagaraja", branch: "IIT-B Alumni", website: "https://qpiai.tech", description: "Quantum-AI infrastructure.", motivation: "Practical quantum, today." },
      { name: "CynLR", founder: "Gokul NA", branch: "IIT-B Alumni", website: "https://cynlr.com", description: "Visual object intelligence for robotics.", motivation: "Robots that see." },
      { name: "Cron AI", founder: "Tushar Chhabra", branch: "IIT-B Alumni", website: "https://cron-ai.com", description: "LiDAR + AI perception for infrastructure.", motivation: "Roads that understand traffic." },
      { name: "Lightspeed Photonics", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Photonic ICs.", motivation: "Bandwidth, delivered by light." },
      { name: "Aether Tech", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Advanced polymer composites.", motivation: "Lighter, tougher materials." },
    ],
  },
  {
    key: "agri", name: "Agriculture Technology", image: agri, color: "#66d68f",
    tagline: "Field IoT and quality-assurance for commodities.",
    startups: [
      { name: "AgNext", founder: "Taranjeet Singh Bhamra", branch: "IIT-B · 2002", website: "https://agnext.com", description: "Computer-vision quality checks at farm gate.", motivation: "Fair pricing through transparent grading." },
      { name: "Gramophone", founder: "Tauseef Khan", branch: "IIT-B Alumni", website: "https://gramophone.in", description: "Agri-input marketplace and advisory.", motivation: "Farmer's app for better yields." },
      { name: "Fasal", founder: "Ananda Verma", branch: "IIT-B Alumni", website: "https://fasal.co", description: "IoT sensors for horticulture.", motivation: "Water and yield, monitored." },
      { name: "Bijak", founder: "Nukul Upadhye", branch: "IIT-B Alumni", website: "https://bijak.in", description: "B2B trading platform for agri-commodities.", motivation: "Trust for commodity trades." },
      { name: "Intello Labs", founder: "Milan Sharma", branch: "IIT-B Alumni", website: "https://intellolabs.com", description: "AI-based produce quality assessment.", motivation: "Every fruit, graded." },
      { name: "Eeki Foods", founder: "Abhay Singh", branch: "IIT-B Alumni", website: "https://eeki.in", description: "Climate-agnostic growing chambers.", motivation: "Pesticide-free vegetables at scale." },
      { name: "DeHaat", founder: "Shashank Kumar", branch: "IIT-B Alumni", website: "https://agrevolution.in", description: "Full-stack agri services network.", motivation: "One platform for the farm cycle." },
      { name: "Aquaconnect", founder: "Rajamanohar S", branch: "IIT-B Alumni", website: "https://aquaconnect.blue", description: "Aquaculture farm management.", motivation: "Data-driven shrimp farming." },
      { name: "CropIn", founder: "Krishna Kumar", branch: "IIT-B Alumni", website: "https://cropin.com", description: "SaaS platform for agribusinesses.", motivation: "Farm intelligence, mapped." },
      { name: "BharatAgri", founder: "Sai Gole", branch: "IIT-B Alumni", website: "https://bharatagri.com", description: "Personalised crop advisory app.", motivation: "Agronomist in your pocket." },
    ],
  },
  {
    key: "saas", name: "Enterprise SaaS & Cloud", image: saas, color: "#4dd6ff",
    tagline: "Developer-first tools with global reach.",
    startups: [
      { name: "BrowserStack", founder: "Ritesh Arora & Nakul Aggarwal", branch: "CSE · 2006", website: "https://browserstack.com", description: "Cross-browser cloud testing platform.", motivation: "Built out of a Hostel-6 room to global scale." },
      { name: "Persistent Systems", founder: "Anand Deshpande", branch: "IIT-B Alumni", website: "https://persistent.com", description: "Digital engineering and enterprise modernization.", motivation: "Enterprise product delivery, industrialized." },
      { name: "CleverTap", founder: "Sunil Thomas", branch: "IIT-B Alumni", website: "https://clevertap.com", description: "Retention and analytics for mobile apps.", motivation: "Understand every user cohort." },
      { name: "Whatfix", founder: "Khadim Batti", branch: "IIT-B Alumni", website: "https://whatfix.com", description: "In-app guidance and adoption overlays.", motivation: "Every user, onboarded." },
      { name: "Hevo Data", founder: "Manish Jethani", branch: "IIT-B Alumni", website: "https://hevodata.com", description: "No-code data pipelines to warehouses.", motivation: "ETL without engineering tickets." },
      { name: "Entytle", founder: "Vivek Joshi", branch: "IIT-B Alumni", website: "https://entytle.com", description: "Installed-base intelligence for OEMs.", motivation: "The aftermarket, unlocked." },
      { name: "AppDynamics", founder: "Jyoti Bansal", branch: "IIT-B Alumni", website: "https://appdynamics.com", description: "APM acquired by Cisco.", motivation: "Every transaction, traced." },
      { name: "Hasura", founder: "Tanmai Gopal", branch: "IIT-B Alumni", website: "https://hasura.io", description: "Instant GraphQL over Postgres.", motivation: "Backend, generated." },
      { name: "Weave.ai", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Data platform for revenue intelligence.", motivation: "Revenue signal, unified." },
      { name: "SirionLabs", founder: "Ajay Agrawal", branch: "IIT-B Alumni", website: "https://sirionlabs.com", description: "Contract lifecycle management.", motivation: "Every contract, extracted." },
    ],
  },
  {
    key: "prop", name: "PropTech & Real Estate", image: prop, color: "#e8b84a",
    tagline: "Bypassing brokerage with peer-to-peer verification.",
    startups: [
      { name: "NoBroker", founder: "Akhil Gupta", branch: "Chemical · 2003", website: "https://nobroker.in", description: "Broker-free property rental & sale.", motivation: "Removing brokerage fees from India's housing market." },
      { name: "Housing.com", founder: "Rahul Yadav", branch: "IIT-B Alumni", website: "https://housing.com", description: "Property search portal.", motivation: "Maps-first house hunting." },
      { name: "Square Yards", founder: "Tanuj Shori", branch: "IIT-B Alumni", website: "https://squareyards.com", description: "International real-estate transactions.", motivation: "Cross-border housing, simplified." },
      { name: "ZoloStays", founder: "Nikhil Sikri", branch: "IIT-B Alumni", website: "https://zolostays.com", description: "Managed co-living for young professionals.", motivation: "Move-in ready living." },
      { name: "PillarPlus", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Structural engineering automation.", motivation: "Buildings, computed." },
      { name: "NestAway", founder: "Amarendra Sahu", branch: "IIT-B Alumni", website: "https://nestaway.com", description: "Managed home rentals.", motivation: "Owners-tenants, matched." },
      { name: "Stanza Living", founder: "Anindya Dutta", branch: "IIT-B Alumni", website: "https://stanzaliving.com", description: "Premium managed accommodation.", motivation: "Hotel-grade student living." },
      { name: "PropTiger", founder: "Dhruv Agarwala", branch: "IIT-B Alumni", website: "https://proptiger.com", description: "Home-buying advisory platform.", motivation: "First-home buyer's ally." },
      { name: "CoLive", founder: "Suresh Rangarajan", branch: "IIT-B Alumni", website: "https://colive.com", description: "Tech-managed co-living.", motivation: "Community-first living." },
      { name: "Aura Spaces", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Boutique workspace network.", motivation: "Design-forward offices." },
    ],
  },
  {
    key: "edu", name: "Educational Technology", image: edu, color: "#f0b74a",
    tagline: "Adaptive learning beyond rigid LMS platforms.",
    startups: [
      { name: "Testbook", founder: "Ashutosh Kumar", branch: "Civil · 2011", website: "https://testbook.com", description: "Test-prep platform for government exams.", motivation: "Affordable prep for rural aspirants." },
      { name: "Toppr", founder: "Zishaan Hayath", branch: "IIT-B Alumni", website: "https://toppr.com", description: "Personalised K-12 learning app.", motivation: "One-on-one guidance, at scale." },
      { name: "Acadboost", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "JEE + NEET preparation platform.", motivation: "Exam mentorship." },
      { name: "Osmo", founder: "Pramod Sharma", branch: "IIT-B Alumni", website: "https://playosmo.com", description: "AR-based kids learning games.", motivation: "Screen time that teaches." },
      { name: "Classplus", founder: "Mukul Rustagi", branch: "IIT-B Alumni", website: "https://classplusapp.com", description: "White-labelled apps for offline tutors.", motivation: "Every coaching institute, app-enabled." },
      { name: "Jungroo Learning", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Adaptive test engine.", motivation: "Adaptive at every question." },
      { name: "Vedantu", founder: "Vamsi Krishna", branch: "IIT-B Alumni", website: "https://vedantu.com", description: "Live tutoring platform.", motivation: "Live class, learn together." },
      { name: "Lido Learning", founder: "Sahil Sheth", branch: "IIT-B Alumni", website: "#", description: "Live small-group tuition.", motivation: "Small groups, big outcomes." },
      { name: "CueMath", founder: "Manan Khurma", branch: "IIT-B Alumni", website: "https://cuemath.com", description: "Math-first learning program.", motivation: "Every kid, a mathematician." },
      { name: "Doubtnut", founder: "Tanushree Nagori", branch: "IIT-B Alumni", website: "https://doubtnut.com", description: "Photo-solve doubt engine.", motivation: "Snap a doubt, get a solution." },
    ],
  },
  {
    key: "clean", name: "CleanTech & Green Energy", image: clean, color: "#7ee06b",
    tagline: "Efficient BLDC motors and solar tracking.",
    startups: [
      { name: "Atomberg Technologies", founder: "Manoj Meena & Sibabrata Das", branch: "Electrical/Chemical · 2011", website: "https://atomberg.com", description: "BLDC ceiling fans that use 65% less power.", motivation: "Everyday appliances, energy-efficient." },
      { name: "Chakr Innovation", founder: "Kushagra Srivastava", branch: "IIT-B Alumni", website: "https://chakr.in", description: "Emission-capture devices for diesel gensets.", motivation: "Ink from soot." },
      { name: "Ecozen Solutions", founder: "Devendra Gupta", branch: "IIT-B Alumni", website: "https://ecozensolutions.com", description: "Solar cold storage for farmers.", motivation: "Cold chain, off-grid." },
      { name: "ZunRoof", founder: "Pranesh Chaudhary", branch: "IIT-B Alumni", website: "https://zunroof.com", description: "Rooftop solar for homes.", motivation: "Solar, made simple." },
      { name: "VayuJal Technologies", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Atmospheric water generators.", motivation: "Water from air." },
      { name: "Ushva", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Industrial water treatment.", motivation: "Zero-liquid discharge." },
      { name: "Fourth Partner Energy", founder: "Vivek Subramanian", branch: "IIT-B Alumni", website: "https://fourthpartner.co", description: "Distributed solar for enterprises.", motivation: "Solar as a service." },
      { name: "Solatric", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Off-grid solar solutions.", motivation: "Power for the last mile." },
      { name: "Greenvibe", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Sustainable materials.", motivation: "Plastic alternatives." },
      { name: "Oorja", founder: "Amit Saraogi", branch: "IIT-B Alumni", website: "https://oorja.energy", description: "Solar irrigation-as-a-service.", motivation: "Pumps that pay for themselves." },
    ],
  },
  {
    key: "iiot", name: "Industrial IoT & Automation", image: iiot, color: "#3d9dff",
    tagline: "Factory floors turned intelligent ecosystems.",
    startups: [
      { name: "Covacsis", founder: "Tarun Mishra", branch: "M.Tech Materials · 2003", website: "https://covacsis.com", description: "Intelligent Plant Framework for OEE analytics.", motivation: "One of India's earliest IIoT frameworks." },
      { name: "Altizon", founder: "Vinay Nathan", branch: "IIT-B Alumni", website: "https://altizon.com", description: "Datonis industrial IoT platform.", motivation: "Machines to insights." },
      { name: "Maxerience", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "AI vision for retail shelf compliance.", motivation: "Every SKU, monitored." },
      { name: "Fluid Robotics", founder: "Asim Bhalerao", branch: "IIT-B Alumni", website: "https://fluidrobotics.com", description: "Sewer inspection robots.", motivation: "Understanding the invisible city." },
      { name: "Wobot Intelligence", founder: "Adit Vashisht", branch: "IIT-B Alumni", website: "https://wobot.ai", description: "Video-analytics for operations compliance.", motivation: "CCTV that thinks." },
      { name: "Roadmetrics", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Road condition monitoring.", motivation: "Every pothole, mapped." },
      { name: "Stellapps", founder: "Ranjith Mukundan", branch: "IIT-B Alumni", website: "https://stellapps.com", description: "Dairy supply-chain IoT.", motivation: "Milking data from farms." },
      { name: "Infinite Uptime", founder: "Bishnu Pati", branch: "IIT-B Alumni", website: "https://infinite-uptime.com", description: "Predictive maintenance for rotating machines.", motivation: "Zero unplanned downtime." },
      { name: "Propelo", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Engineering productivity analytics.", motivation: "Data on how software gets built." },
      { name: "Detect Technologies", founder: "Karthik R", branch: "IIT-B Alumni", website: "https://detecttechnologies.com", description: "Industrial inspection with AI + drones.", motivation: "Safer inspections." },
    ],
  },
  {
    key: "robotics", name: "Robotics", image: robotics, color: "#c96bff",
    tagline: "Multi-axis arms and precision test rigs.",
    startups: [
      { name: "Sastra Robotics", founder: "Aronin K", branch: "IIT-B Alumni", website: "https://sastrarobotics.com", description: "Robotic test rigs for touchscreens.", motivation: "Human touch, at machine repeatability." },
      { name: "Systemantics", founder: "N. Sundararajan", branch: "IIT-B Alumni", website: "https://systemantics.com", description: "6-axis industrial robotic arms.", motivation: "Automation, made in India." },
      { name: "Gridbots Technologies", founder: "Pulkit Gaur", branch: "IIT-B Alumni", website: "https://gridbots.com", description: "Nuclear and defense robotics.", motivation: "Robots for the toughest environments." },
      { name: "Wonder Workshop", founder: "Vikas Gupta", branch: "IIT-B Alumni", website: "https://makewonder.com", description: "Educational robots for kids.", motivation: "Code, embodied." },
      { name: "Asimov Robotics", founder: "Jayakrishnan T", branch: "IIT-B Alumni", website: "https://asimovrobotics.com", description: "Service robots for hospitality.", motivation: "Robots that greet." },
      { name: "Noccarc Robotics", founder: "Nikhil Kurele", branch: "IIT-B Alumni", website: "https://noccarc.com", description: "ICU ventilators.", motivation: "Made-in-India critical care." },
      { name: "Hi-Tech Robotic Systemz", founder: "Anuj Kapuria", branch: "IIT-B Alumni", website: "https://hitechroboticsystemz.com", description: "Autonomous vehicles for logistics.", motivation: "Automation at the warehouse." },
      { name: "Omnipresent Robot Tech", founder: "Aakash Sinha", branch: "IIT-B Alumni", website: "https://omnipresenttech.com", description: "Aerial mapping robots.", motivation: "See from above." },
      { name: "Endo Robotics", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Surgical robotics.", motivation: "Precision, in the OR." },
      { name: "Scylla Robots", founder: "IIT-B Alumni", branch: "IIT-B Network", website: "#", description: "Underwater autonomous vehicles.", motivation: "Ocean's eyes." },
    ],
  },
  {
    key: "food", name: "FoodTech & Cloud Kitchens", image: food, color: "#ff8a3d",
    tagline: "Standardised, data-driven food networks.",
    startups: [
      { name: "Zomato", founder: "Deepinder Goyal", branch: "IIT-B Alumni", website: "https://zomato.com", description: "Food-delivery and discovery platform.", motivation: "Better food, more often." },
      { name: "Faasos (Rebel Foods)", founder: "Jaydeep Barman", branch: "IIT-B Alumni", website: "https://rebelfoods.com", description: "World's largest cloud-kitchen network.", motivation: "One kitchen, many brands." },
      { name: "Box8", founder: "Amit Raj", branch: "IIT-B Alumni", website: "https://box8.in", description: "Cloud-kitchen brand for Indian meals.", motivation: "Local flavours, delivered." },
      { name: "Chaayos", founder: "Nitin Saluja", branch: "IIT-B Alumni", website: "https://chaayos.com", description: "Tech-powered chai cafés.", motivation: "12,000 chai combinations." },
      { name: "FreshMenu", founder: "Rashmi Daga", branch: "IIT-B Alumni", website: "https://freshmenu.com", description: "Daily-menu cloud kitchen.", motivation: "Chef-curated, everyday." },
      { name: "Licious", founder: "Abhay Hanjura", branch: "IIT-B Alumni", website: "https://licious.in", description: "Fresh meat D2C brand.", motivation: "Farm-to-fork protein." },
      { name: "iD Fresh Food", founder: "PC Musthafa", branch: "IIT-B Alumni", website: "https://idfresh.com", description: "Ready-to-cook staples.", motivation: "Homemade, ready." },
      { name: "Slay Coffee", founder: "Chaitanya Chitta", branch: "IIT-B Alumni", website: "https://slaycoffee.com", description: "Cloud-kitchen coffee brand.", motivation: "Café-grade coffee, delivered." },
      { name: "Curefit / Eat.fit", founder: "Mukesh Bansal", branch: "IIT-B Alumni", website: "https://cure.fit", description: "Healthy meals subscription.", motivation: "Wellness on a plate." },
      { name: "Wow! Momo", founder: "Sagar Daryani", branch: "IIT-B Alumni", website: "https://wowmomo.com", description: "QSR chain built on momos.", motivation: "One dish, many flavours." },
    ],
  },
  {
    key: "hr", name: "HRTech & Workforce", image: hr, color: "#ff9d3d",
    tagline: "Automated recruiting and blue-collar pipelines.",
    startups: [
      { name: "Mettl (Mercer Mettl)", founder: "Tonmoy Shingal", branch: "Metallurgical · 2001", website: "https://mettl.com", description: "Remote assessments and proctoring.", motivation: "Talent evaluation at global scale." },
      { name: "WorkIndia", founder: "Nilesh Dungarwal", branch: "Chemical · 2012", website: "https://workindia.in", description: "Blue-collar job marketplace.", motivation: "Every worker, verified." },
      { name: "Belong.co", founder: "Vijay Sharma", branch: "Metallurgical · 2010", website: "https://belong.co", description: "Data-driven candidate outreach.", motivation: "Find the right talent, before they apply." },
      { name: "Darwinbox", founder: "Jayant Paleti", branch: "IIT-B · 2007", website: "https://darwinbox.com", description: "Modern HRIS for enterprises.", motivation: "The full HR lifecycle, unified." },
      { name: "Vahan", founder: "Madhav Krishna", branch: "CSE · 2011", website: "https://vahan.co", description: "AI recruiter for gig workers.", motivation: "WhatsApp-native hiring." },
      { name: "Apli AI", founder: "IIT-B Alumni", branch: "Mechanical · 2018", website: "#", description: "Voice-first candidate screening.", motivation: "Interview at scale." },
      { name: "TapChief", founder: "Shashank Murali", branch: "IIT-B · 2015", website: "https://tapchief.com", description: "Expert-network platform.", motivation: "Every expert, bookable." },
      { name: "Keka HR", founder: "Vijay Yalamanchili", branch: "IIT-B · 2003", website: "https://keka.com", description: "Payroll + HR suite for SMBs.", motivation: "HR that employees love." },
      { name: "Shortlist", founder: "Simon Desjardins", branch: "IIT-B Partner", website: "https://shortlist.net", description: "Assessment-first hiring.", motivation: "Skills over resumes." },
      { name: "AssessHub", founder: "Amit B", branch: "IIT-B · 2004", website: "https://assesshub.com", description: "Behavioural assessments.", motivation: "Objective people decisions." },
    ],
  },
  {
    key: "media", name: "Media, Entertainment & Gaming", image: media, color: "#ff5adf",
    tagline: "Real-time streaming and skill-gaming platforms.",
    startups: [
      { name: "Dream11", founder: "Harsh Jain", branch: "IIT-B · 2007", website: "https://dream11.com", description: "Fantasy sports platform.", motivation: "Cricket's second screen." },
      { name: "InMobi", founder: "Amit Gupta", branch: "Mechanical · 2002", website: "https://inmobi.com", description: "Global mobile ad platform.", motivation: "India's first tech unicorn." },
      { name: "Games 24x7", founder: "Trivikraman Thampy", branch: "Chemical · 2003", website: "https://games24x7.com", description: "RummyCircle and My11Circle.", motivation: "Skill-gaming at scale." },
      { name: "Loco", founder: "Anirudh Pandita", branch: "IIT-B · 2007", website: "https://getloco.com", description: "Game-streaming platform for India.", motivation: "Streamers, discovered." },
      { name: "Pocket Aces", founder: "Ashwin Suresh", branch: "IIT-B · 2007", website: "https://pocketaces.com", description: "Digital entertainment studio.", motivation: "Made for the phone-first generation." },
      { name: "Saavn (JioSaavn)", founder: "Rishi Malhotra", branch: "CSE · 1999", website: "https://jiosaavn.com", description: "Music streaming for South Asia.", motivation: "India's music, curated." },
      { name: "Roposo", founder: "Mayank Bhangadia", branch: "Mechanical · 2007", website: "https://roposo.com", description: "Short-video shopping platform.", motivation: "Creator commerce." },
      { name: "ScoreTrend", founder: "Tarun S", branch: "CSE · 2011", website: "#", description: "Sports data intelligence.", motivation: "Data behind every match." },
      { name: "Nazara Technologies", founder: "Nitish Mittersain", branch: "IIT-B · 1998", website: "https://nazara.com", description: "Publicly listed gaming company.", motivation: "Gaming, at scale." },
      { name: "Nayan Tech", founder: "Jayant R", branch: "Civil · 2012", website: "#", description: "Road-safety crowdsourced AI.", motivation: "Every citizen, a sensor." },
    ],
  },
  {
    key: "logistics", name: "Logistics & Supply Chain", image: logistics, color: "#ffb547",
    tagline: "Graph algorithms and last-mile dispatch.",
    startups: [
      { name: "Delhivery", founder: "Bhavesh Manglani", branch: "Metallurgical · 2004", website: "https://delhivery.com", description: "Data-driven parcel logistics.", motivation: "Fragmented deliveries, orchestrated." },
      { name: "BlackBuck", founder: "Chanakya Hridaya", branch: "Mechanical · 2011", website: "https://blackbuck.com", description: "Truck aggregator platform.", motivation: "Every trucker, digital." },
      { name: "Shadowfax", founder: "Vaibhav Khandelwal", branch: "Chemical · 2012", website: "https://shadowfax.in", description: "Hyperlocal last-mile delivery.", motivation: "Deliveries within the hour." },
      { name: "ElasticRun", founder: "Sandeep Deshmukh", branch: "Mechanical · 2001", website: "https://elastic.run", description: "Rural distribution through kirana network.", motivation: "Kirana shops as warehouses." },
      { name: "Locus.sh", founder: "Nishith Rastogi", branch: "CSE · 2011", website: "https://locus.sh", description: "Route optimization SaaS.", motivation: "Every dispatch, optimal." },
      { name: "Fleetx", founder: "Vineet Sharma", branch: "Electrical · 2007", website: "https://fleetx.io", description: "Fleet management platform.", motivation: "Fleets, visible." },
      { name: "Rivigo", founder: "Gazal Kalra", branch: "IIT-B · 2007", website: "https://rivigo.com", description: "Relay-based trucking.", motivation: "Trucking without long absences from home." },
      { name: "Shiprocket", founder: "Gautam Kapoor", branch: "IIT-B · 2003", website: "https://shiprocket.in", description: "Shipping automation for D2C.", motivation: "Every SMB, a shipping desk." },
      { name: "Cogoport", founder: "Kunal Rathod", branch: "Mechanical · 2009", website: "https://cogoport.com", description: "Freight-forwarding platform.", motivation: "Global freight, digitised." },
      { name: "Porter", founder: "Pranav Goel", branch: "IIT-B · 2010", website: "https://porter.in", description: "Intra-city mini-truck logistics.", motivation: "Move anything, fast." },
    ],
  },
  {
    key: "biotech", name: "Biotech & Life Sciences", image: biotech, color: "#7ee06b",
    tagline: "Regenerative medicine and clinical genomics.",
    startups: [
      { name: "Pandorum Technologies", founder: "Arun Chandru", branch: "M.Tech Aerospace · 2008", website: "https://pandorumtechnologies.in", description: "3D-printed tissue for cornea & liver.", motivation: "Bio-engineered organs for a donor-short world." },
      { name: "HaystackAnalytics", founder: "Dr. Anirvan Chatterjee", branch: "PhD Biosciences · 2014", website: "https://haystackanalytics.in", description: "Clinical genomics automation.", motivation: "TB resistance, decoded in hours." },
      { name: "Aarna Biomedical", founder: "Pawan Mehrotra", branch: "PhD Biomedical · 2011", website: "#", description: "Wound-care biomaterials.", motivation: "Healing, engineered." },
      { name: "OncoStem Diagnostics", founder: "Dr. Manjiri Bakre", branch: "M.Sc. Biotech · 1995", website: "https://oncostem.com", description: "Cancer recurrence risk tests.", motivation: "Personalized oncology." },
      { name: "SigTuple", founder: "Rohit Kumar", branch: "CSE · 2003", website: "https://sigtuple.com", description: "AI for medical imaging.", motivation: "Pathology, at every clinic." },
      { name: "Aindra Systems", founder: "Adarsh Natarajan", branch: "IIT-B · 2002", website: "https://aindra.in", description: "AI cervical-cancer screening.", motivation: "Cervical cancer, preventable." },
      { name: "Bugworks Research", founder: "Anand Anandkumar", branch: "M.Tech Electrical · 1989", website: "https://bugworksresearch.com", description: "Novel antibiotics.", motivation: "Fighting antibiotic resistance." },
      { name: "MedGenome Labs", founder: "Sam Santhosh", branch: "IIT-B · 1981", website: "https://medgenome.com", description: "Genomics diagnostics.", motivation: "Genomics for South Asia." },
      { name: "Sea6 Energy", founder: "Shrikumar Suryanarayan", branch: "Chemical · 1982", website: "https://sea6energy.com", description: "Seaweed farming for biofuels.", motivation: "Oceans as farms." },
      { name: "Theramyt Novobiotics", founder: "Sohang C", branch: "M.Sc. Biotech · 2006", website: "#", description: "Novel biologic therapeutics.", motivation: "Cellular medicine." },
    ],
  },
  {
    key: "cyber", name: "Cybersecurity & Data Privacy", image: cyber, color: "#4dd6ff",
    tagline: "Defense layers and live vulnerability scanners.",
    startups: [
      { name: "Appknox", founder: "Subho Halder", branch: "IIT-B · 2012", website: "https://appknox.com", description: "Mobile-app security scanner.", motivation: "Every mobile app, audited." },
      { name: "Scrut Automation", founder: "Kush Kaushik", branch: "Electrical · 2011", website: "https://scrut.io", description: "Cloud compliance automation.", motivation: "SOC-2 without the paperwork." },
      { name: "Seconize", founder: "Chetan Anand", branch: "M.Tech CSE · 2003", website: "https://seconize.co", description: "Risk-based vulnerability management.", motivation: "Every risk, prioritised." },
      { name: "Vehere", founder: "Naveen Jaiswal", branch: "IIT-B · 2005", website: "https://vehere.com", description: "Network intelligence.", motivation: "Every packet, understood." },
      { name: "CloudSEK", founder: "Rahul Sasi", branch: "IIT-B · 2013", website: "https://cloudsek.com", description: "Digital risk monitoring.", motivation: "The web, watched." },
      { name: "Smokescreen Technologies", founder: "Sahir Hidayatullah", branch: "IIT-B · 2008", website: "https://smokescreen.io", description: "Deception-based security.", motivation: "Traps that catch attackers." },
      { name: "Cyware", founder: "Akshat Jain", branch: "IIT-B · 2007", website: "https://cyware.com", description: "Threat intel + orchestration.", motivation: "Security teams, connected." },
      { name: "Securden", founder: "Balaji V", branch: "IIT-B · 2003", website: "https://securden.com", description: "Privileged access management.", motivation: "Passwords, controlled." },
      { name: "Securityshift", founder: "Amit K", branch: "M.Tech CSE · 2006", website: "#", description: "DevSecOps platform.", motivation: "Shift-left security." },
      { name: "Avanan", founder: "Michael S", branch: "IIT-B · 2001", website: "https://avanan.com", description: "Cloud email security (acquired).", motivation: "Inbox, defended." },
    ],
  },
  {
    key: "adtech", name: "Event Tech & AdTech", image: adtech, color: "#c96bff",
    tagline: "Real-time video streaming and contextual ads.",
    startups: [
      { name: "Hubilo", founder: "Vaibhav Jain", branch: "IIT-B · 2014", website: "https://hubilo.com", description: "Virtual event platform.", motivation: "Conferences, digital-first." },
      { name: "SilverPush", founder: "Hitesh Chawla", branch: "CSE · 2003", website: "https://silverpush.co", description: "TV-to-mobile contextual ads.", motivation: "The screen that watches the screen." },
      { name: "Langoor", founder: "Venugopal Ganganna", branch: "M.Tech CSE · 2004", website: "https://langoor.com", description: "Digital experience agency.", motivation: "Brands, digitised." },
      { name: "Zapr Media Labs", founder: "Sandipan Mondal", branch: "Electrical · 2006", website: "#", description: "TV audience measurement.", motivation: "Every ad, attributed." },
      { name: "Streamoid", founder: "Rajesh Kumar", branch: "M.Tech CSE · 1999", website: "https://streamoid.com", description: "AI for fashion e-commerce.", motivation: "Every product, tagged." },
      { name: "Instoried", founder: "Sharmin Ali", branch: "IIT-B · 2010", website: "https://instoried.com", description: "Content-effectiveness AI.", motivation: "Words that convert." },
      { name: "Ador", founder: "Ankit M", branch: "Mechanical · 2012", website: "#", description: "In-video interactive ads.", motivation: "Ads, played inside content." },
      { name: "Krux (Salesforce)", founder: "Vivek Vaidya", branch: "M.Tech CSE · 1995", website: "https://salesforce.com/krux", description: "Data-management platform (acquired).", motivation: "Every customer signal, unified." },
      { name: "TapSense", founder: "Ashish Shah", branch: "CSE · 2002", website: "#", description: "Mobile ad exchange.", motivation: "Mobile advertising, programmatic." },
      { name: "Ador Media", founder: "Nitin S", branch: "Engg Physics · 2009", website: "#", description: "Contextual audio ads.", motivation: "Ads, tuned to the moment." },
    ],
  },
];
