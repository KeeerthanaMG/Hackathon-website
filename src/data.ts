import { 
  Building2, 
  Lightbulb, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Rocket, 
  ShieldAlert,
  Sparkles,
  Search,
  CheckCircle2,
  Calendar,
  Lock,
  UserCheck,
  Zap,
  Flame,
  Globe,
  NotebookTabs,
  Cpu
} from 'lucide-react';

export interface PhaseItem {
  number: string;
  badge: string;
  title: string;
  dateRange: string;
  description: string;
  points: { title: string; desc: string }[];
}

export interface PerkItem {
  title: string;
  icon: any;
  description: string;
  incentive: string;
  badge: string;
}

export const stats = [
  { value: "12,000+", label: "Community Members across India" },
  { value: "500+", label: "Tech Events & Mentorship Sessions" },
  { value: "₹30,000+", label: "Cash Prizes & Perks Pool" },
  { value: "Top 50", label: "Teams Chosen for Grand Offline Finale" }
];

export const sponsors = [
  { name: "Rajalakshmi Engineering College", logoPlaceholder: "REC", role: "Official Hosting Partner", tier: "title" },
  { name: "Intellexa REC", logoPlaceholder: "Intellexa", role: "Co-Organizing & Technical Partner", tier: "powered-by" },
  { name: "HappyFox", logoPlaceholder: "HappyFox", role: "Premium Platform Sponsor", tier: "co-powered" },
  { name: "ElevenLabs", logoPlaceholder: "ElevenLabs", role: "AI Audio & Synthesizer Sponsor", tier: "sponsor" },
  { name: "Notion", logoPlaceholder: "Notion", role: "Workspace and Docs Partner", tier: "sponsor" },
  { name: ".xyz", logoPlaceholder: "XYZ Domains", role: "Identity & Domain Sponsor", tier: "sponsor" },
  { name: "Balsamiq", logoPlaceholder: "Balsamiq", role: "Premium Mockups Partner", tier: "sponsor" },
  { name: "Mastra", logoPlaceholder: "Mastra AI", role: "Sponsor - AI Frameworks", tier: "sponsor" },
  { name: "Mako IT Lab", logoPlaceholder: "Mako IT", role: "Techno Innovation sponsor", tier: "sponsor" },
  { name: "Interview Cake", logoPlaceholder: "Interview Cake", role: "Elite DSA prep provider", tier: "sponsor" },
  { name: "Wyntrix", logoPlaceholder: "Wyntrix", role: "Computing Architecture sponsor", tier: "sponsor" },
  { name: "Interview Buddy", logoPlaceholder: "Interview Buddy", role: "Mock Interview packages sponsor", tier: "sponsor" },
  { name: "Navan", logoPlaceholder: "Navan", role: "Digital Travel & Automation sponsor", tier: "sponsor" },
  { name: "Yuniq", logoPlaceholder: "Yuniq", role: "Collaborative developer sponsor", tier: "sponsor" }
];

export const communityPartners: Array<{ name: string; logo?: string; link?: string }> = [
  { name: "Chennai Data Circles", logo: "CHENNAIDATACIRCLES.jpeg", link: "https://www.linkedin.com/company/chennai-data-circle/" },
  { name: "AI Geeks", logo: "AIGEEKS.png", link: "https://www.linkedin.com/company/ai-geeks-chennai/" },
  { name: "Namma Flutter", logo: "NAMMAFLUTTER.jpeg", link: "https://www.linkedin.com/company/nammaflutter/" },
  { name: "Azure Developer Community", logo: "AZURE.jpeg", link: "https://www.linkedin.com/company/azdevcommunity/" },
  { name: "Chennai ReactJS", logo: "CHENNAIREACT.jpeg", link: "https://www.linkedin.com/company/chennaireact/" },
  { name: "Code-JVM", logo: "CODEONJVM.jpeg", link: "https://www.linkedin.com/company/codeonjvmchennai/" },
  { name: "CodeSapiens", logo: "CODESAPIENS.jpeg", link: "https://www.linkedin.com/company/codesapiens-community/" },
  { name: "W Tech Network", logo: "WTM.jpg", link: "https://www.linkedin.com/company/womentechmakers/" }
];

export const phasesData: PhaseItem[] = [
  {
    number: "01",
    badge: "Phase 1: Online Sprint",
    title: "Online Innovation Challenge",
    dateRange: "June 1 – June 30, 2026",
    description: "Formulate your dream team, choose an impactful United Nations SDG theme, build your problem architecture, and submit your concept proposal.",
    points: [
      { title: "Choose SDG Theme", desc: "Select from Climate Action, Quality Education, Industry & Infrastructure or gender equality." },
      { title: "Define Problem Architecture", desc: "Clearly present user struggles, market depth, and how your technical solution can scale." },
      { title: "Unstop Submission", desc: "Upload your concept pitch deck and preliminary architectural wireframe on Unstop before June 30." }
    ]
  },
  {
    number: "02",
    badge: "Phase 2: Live In-Person",
    title: "24-Hour Offline Grand Finale",
    dateRange: "August 1 – August 2, 2026",
    description: "The top 50 shortlisted teams converge live at Rajalakshmi Engineering College, Chennai, to build in-person under high-energy conditions.",
    points: [
      { title: "On-Spot Challenges", desc: "Unlike standard hackathons, receive exclusive live problem statements at the physical kickoff!" },
      { title: "Live Face-to-Face Mentorship", desc: "Work closely with tech architects, security leads, and senior software developers." },
      { title: "Grand Jury Pitch", desc: "Present live working prototypes directly on stage to enterprise executives, CTOs, and investors." }
    ]
  }
];

export const perksData: PerkItem[] = [
  {
    title: "Converting Ideas to Patents",
    icon: ShieldAlert,
    description: "Post-hackathon guidance from intellectual property and patent attorneys to turn your prototype into legally protected IP.",
    incentive: "Filing Support & Consultation",
    badge: "IP Creation"
  },
  {
    title: "Publishing Research Papers",
    icon: BookOpen,
    description: "Collaborate directly with researchers to shape your hackathon prototype into peer-reviewed research papers.",
    incentive: "Journal & Conference Track",
    badge: "Research Publication"
  },
  {
    title: "Building Startup Ventures",
    icon: Rocket,
    description: "Pitch directly to early-stage investors, seed funds, and the Rajalakshmi Incubation Cell for startup support.",
    incentive: "Seed Pipeline & Mentorship",
    badge: "Incubation Cell"
  }
];

export const eligibilityCards = [
  {
    title: "Women Aged 18+",
    desc: "Exclusively open to bright and ambitious women ready to shatter glass ceilings in software engineering and hardware innovation.",
    icon: Users,
    glow: "rgba(141, 8, 190, 0.4)"
  },
  {
    title: "Teams of 2 to 4 Members",
    desc: "Collaborate, challenge, and co-build. Form dynamic alliances of multi-disciplinary coders, system analysts, and UI designers.",
    icon: Zap,
    glow: "rgba(244, 114, 182, 0.4)"
  },
  {
    title: "Students & Professionals",
    desc: "Perfect sandbox for college students, industry developers, freelancers, and innovators of all technical backgrounds.",
    icon: UserCheck,
    glow: "rgba(141, 8, 190,0.4)"
  }
];

export const evaluationCriteria = [
  {
    title: "Technical Depth",
    desc: "Measures engineering quality, clean code structures, reliable API integrations, performance security, and data handling standard rules.",
    icon: Cpu
  },
  {
    title: "SDG Alignment",
    desc: "Grades relevance and direct, sustainable impact toward United Nations Sustainable Development Goals chosen during the concept sprint.",
    icon: Lightbulb
  },
  {
    title: "UX Design Polish",
    desc: "Assesses visual layouts, responsiveness across desktop and mobile screens, accessible contrast rates, and overall aesthetic polish.",
    icon: Target
  },
  {
    title: "Scaling Potential",
    desc: "Measures project expansion feasibility, future capabilities, monetization capabilities, and how well it fits patent/startup models.",
    icon: Rocket
  }
];
