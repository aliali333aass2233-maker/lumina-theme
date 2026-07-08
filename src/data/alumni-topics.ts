export type TickerItem = {
  category: string;
  topic: string;
  description: string;
};

export const ALUMNI_TICKER: TickerItem[] = [
  // Initiatives
  { category: "Initiatives", topic: "Student Scholarships", description: "Need-based and merit scholarships funded by IITB alumni for current students." },
  { category: "Initiatives", topic: "Young Faculty Fellowships (YFF)", description: "Endowed fellowships that support high-potential young faculty joining IITB." },
  { category: "Initiatives", topic: "Lumina", description: "Alumni-backed fund lighting up transformational campus infrastructure projects." },
  { category: "Initiatives", topic: "FAN — Financial Aid Network", description: "Alumni network ensuring no admitted student turns down IITB for financial reasons." },
  { category: "Initiatives", topic: "Financial Aid Program", description: "Fee waivers, stipends and monthly support for financially constrained UG students." },
  { category: "Initiatives", topic: "Retired Faculty Wellness Fund", description: "Healthcare and wellness cover for retired IITB faculty and their families." },
  { category: "Initiatives", topic: "Benevolent Fund", description: "Emergency aid for staff and community members facing medical or personal crises." },
  { category: "Initiatives", topic: "Rural Initiative Group (RIG)", description: "Deploys IITB technology and expertise into rural India through alumni-led projects." },
  { category: "Initiatives", topic: "Project Evergreen", description: "Sustaining campus greenery, biodiversity and eco-sensitive habitats at IIT Bombay." },
  { category: "Initiatives", topic: "Executive Education (ExEd)", description: "Alumni-driven executive programs bringing industry leaders back to campus classrooms." },

  // Community
  { category: "Community", topic: "Alumni Search", description: "Global searchable directory of IITB alumni by name, batch, department and city." },
  { category: "Community", topic: "Chapters", description: "Regional alumni chapters organizing meets, mentoring and hiring across the world." },
  { category: "Community", topic: "By Map", description: "Interactive world map showing IITB alumni presence across countries and cities." },
  { category: "Community", topic: "By Resources", description: "Curated alumni resources — knowledge hubs, mentors and expert circles." },
  { category: "Community", topic: "Life Membership", description: "Lifetime membership of the IIT Bombay Alumni Association with global benefits." },
  { category: "Community", topic: "Facebook Groups", description: "Batch-wise and interest-wise Facebook communities for informal alumni chatter." },
  { category: "Community", topic: "LinkedIn Groups", description: "Professional alumni groups for referrals, job leads and industry conversations." },
  { category: "Community", topic: "SARC", description: "Student Alumni Relations Cell — bridges current students with the alumni network." },
  { category: "Community", topic: "Fundamatics", description: "The alumni magazine, publishing long-form stories, ideas and campus nostalgia." },

  // Events
  { category: "Events", topic: "Global Calendar", description: "A single calendar of every IITB alumni event happening worldwide." },
  { category: "Events", topic: "At IIT Bombay", description: "On-campus reunions, lectures, panels and student-alumni interactions." },
  { category: "Events", topic: "U.S. Events", description: "IITBHF-hosted meets across major US cities and university partnerships." },
  { category: "Events", topic: "Rest of the World", description: "Alumni chapter events across Europe, Middle East, APAC and beyond." },
  { category: "Events", topic: "Reunions", description: "Milestone silver and golden jubilee reunions on the Powai campus." },
  { category: "Events", topic: "Near You", description: "Location-aware feed of alumni events happening close to where you live." },
  { category: "Events", topic: "India Events", description: "Meets, hackathons and industry roundtables across Indian chapters." },
  { category: "Events", topic: "Virtual Session", description: "Webinars and virtual fireside chats accessible from anywhere in the world." },

  // About Us
  { category: "About Us", topic: "IITBHF", description: "IIT Bombay Heritage Foundation — the US non-profit channel for global giving." },
  { category: "About Us", topic: "IITBAA", description: "IIT Bombay Alumni Association — the central body coordinating alumni globally." },

  // Support
  { category: "Support", topic: "Alumni Insurance", description: "Group insurance schemes negotiated exclusively for the IITB alumni community." },
  { category: "Support", topic: "Photo Gallery", description: "Archive of iconic campus moments, alumni events and reunion photographs." },
  { category: "Support", topic: "Career Center", description: "Career transitions, mentorship and job leads powered by alumni volunteers." },
  { category: "Support", topic: "Stories", description: "Deep-dive stories of alumni journeys, breakthroughs and campus memories." },
  { category: "Support", topic: "Student Life", description: "Snapshots of hostel life, clubs, tech fests and academics for prospective students." },
  { category: "Support", topic: "Memorabilia", description: "Official IITB merchandise, from apparel to memorabilia, benefitting alumni causes." },
  { category: "Support", topic: "Guest House", description: "Booking access to campus guest houses for visiting alumni and families." },
  { category: "Support", topic: "Newsletter", description: "Monthly digest of alumni news, achievements and upcoming events." },
  { category: "Support", topic: "Downloads", description: "Directories, forms, magazines and brochures for the alumni community." },
  { category: "Support", topic: "IIT Bombay", description: "Portal jumping-off points into official institute resources and departments." },
  { category: "Support", topic: "Author of the Month", description: "Featured alumni authors and their newly published books each month." },
  { category: "Support", topic: "Volunteer of the Month", description: "Recognising alumni who quietly power the association through their time." },
  { category: "Support", topic: "Obituaries", description: "Remembering members of the IITB family who are no longer with us." },
  { category: "Support", topic: "FAQ", description: "Quick answers to the most common queries from alumni around the world." },

  // Giving Back
  { category: "Giving Back", topic: "Donate Now", description: "One-click giving to student aid, faculty support and campus initiatives." },
  { category: "Giving Back", topic: "What to Support?", description: "A guided view of every fund, scholarship and cause open for alumni support." },
  { category: "Giving Back", topic: "Ways to Give in the U.S.", description: "Tax-efficient US giving routes through the IIT Bombay Heritage Foundation." },
  { category: "Giving Back", topic: "Why Giving Matters?", description: "Real stories of how alumni contributions transform students and research at IITB." },
  { category: "Giving Back", topic: "Make a Pledge", description: "Commit a future gift — annual, milestone or planned — to your alma mater." },
  { category: "Giving Back", topic: "Make a Bequest", description: "Include IIT Bombay in your legacy through a bequest or estate plan." },
  { category: "Giving Back", topic: "Volunteer", description: "Give time — mentor students, host events, or steer alumni chapters near you." },
];

const CATEGORY_COLORS: Record<string, string> = {
  Initiatives: "#ff6b3d",
  Community: "#3d9dff",
  Events: "#5eff9c",
  "About Us": "#e8b84a",
  Support: "#c96bff",
  "Giving Back": "#ff5adf",
};

export const categoryColor = (c: string) => CATEGORY_COLORS[c] ?? "#ef4444";
