import {
  MonitorX,
  Clock,
  HelpCircle,
  Rocket,
  Laptop,
  BrainCircuit,
  Layers,
  MessageSquare,
  FileText,
  Hammer,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  DollarSign,
  UserCheck,
  Puzzle,
  Search,
  BarChart,
  Code,
  ShoppingBag,
  Bot,
  BookOpen,
  LineChart,
  Megaphone,
  Eye,
  Lightbulb,
  Map,
  Palette,
  PenTool,
  Workflow,
  Users
} from 'lucide-react';
import { PainPoint, Service, Step, CaseStudy, Differentiator, Testimonial, FAQItem } from './types';
export type { FAQItem };

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 1,
    icon: MonitorX,
    title: "Drowning in Manual Work",
    description: "Your operations team is stuck moving data between spreadsheets, CRMs, and support desks manually, wasting 20+ hours a week."
  },
  {
    id: 2,
    icon: DollarSign,
    title: "Scaling Costs are Exploding",
    description: "You can't afford to hire 5 more support reps just to handle increased ticket volume. Headcount costs are eating your margins."
  },
  {
    id: 3,
    icon: Clock,
    title: "Slow Turnaround Times",
    description: "Every manual ticket and data entry error bleeds efficiency. Customers wait days for answers that AI could provide in seconds."
  },
  {
    id: 4,
    icon: UserCheck,
    title: "Talent Burnout",
    description: "Your best employees are stuck doing administrative busywork instead of the strategic problem-solving they were hired for."
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Customer Support Automation",
    description: "For CX Directors & Support Teams. We automate Tier-1 ticket triage, FAQ resolution, and order status inquiries. Reduce manual volume by 75% and deliver instant 24/7 responses.",
    features: [
      "Instant Triage",
      "24/7 Resolution",
      "CRM Sync",
      "Multi-Channel"
    ],
    ctaText: "Automate Support"
  },
  {
    id: 2,
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "Complete e-commerce solutions that convert visitors into customers. From stunning storefronts to custom integrations and automated workflows, we build Shopify stores that drive revenue.",
    features: [
      "Online retailers",
      "D2C brands",
      "Physical product businesses",
      "Custom themes & apps"
    ],
    ctaText: "Explore Shopify"
  },
  {
    id: 3,
    icon: BrainCircuit,
    title: "AI Automation Agents",
    description: "Intelligent automation that works while you sleep. We build custom AI agents that handle repetitive tasks, customer support, data processing, and complex workflows, giving you superhuman efficiency.",
    features: [
      "Task automation",
      "Customer support bots",
      "Data processing",
      "Workflow optimization"
    ],
    ctaText: "Explore AI Agents"
  },
  {
    id: 4,
    icon: Target,
    title: "Lead Qualification & Routing",
    description: "For Sales Ops. We build agents that analyze inbound leads, enrich data, and route them to the right rep instantly. Achieve 3x faster speed-to-lead.",
    features: [
      "Instant Qualify",
      "Data Enrichment",
      "Smart Routing",
      "Higher Conversion"
    ],
    ctaText: "Qualify Leads"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Product Profitability Analysis",
    description: "Strategic insights that de-risk your product journey. Before you invest months and money, we analyze market fit, competitive landscape, monetization models, and growth potential.",
    features: [
      "Pre-launch analysis",
      "Product pivots",
      "Feature validation",
      "Market entry strategy"
    ],
    ctaText: "Analyze Vision"
  },
  {
    id: 6,
    icon: Rocket,
    title: "Product Growth & Marketing",
    description: "Data-driven strategies that compound your growth. From SEO and content marketing to conversion optimization and user acquisition, we implement systems that consistently bring qualified customers.",
    features: [
      "Post-launch growth",
      "User acquisition",
      "Market expansion",
      "Scaling strategies"
    ],
    ctaText: "Boost Growth"
  },
  {
    id: 7,
    icon: BarChart,
    title: "Power BI & Data Viz",
    description: "Transform your raw data into interactive insights. We build custom Power BI dashboards that help you track KPIs, identify trends, and make data-driven decisions.",
    features: [
      "Visual Insights",
      "KPI Tracking",
      "Real-time Data",
      "Custom Reports"
    ],
    ctaText: "Visualize Data"
  },
  {
    id: 8,
    icon: LineChart,
    title: "Reporting Dashboards",
    description: "Automated reporting solutions that save you time. We design comprehensive dashboards that consolidate data from multiple sources into clear, actionable reports.",
    features: [
      "Automated data aggregation",
      "Custom report generation",
      "Multi-source integration",
      "Scheduled delivery"
    ],
    ctaText: "Automate Reports"
  },
  {
    id: 9,
    icon: Layers,
    title: "Company Dashboards",
    description: "Centralize your company's metrics in one place. We create unified dashboards that provide a holistic view of your business performance across all departments.",
    features: [
      "Executive summaries",
      "Departmental metrics",
      "Goal tracking",
      "Performance scorecards"
    ],
    ctaText: "Unify Metrics"
  },
  {
    id: 10,
    icon: MonitorX,
    title: "Monitoring Integrations",
    description: "Keep a pulse on your systems with robust monitoring integrations. We set up alerts and dashboards to ensure your critical infrastructure and applications are always running smoothly.",
    features: [
      "System uptime monitoring",
      "Performance alerts",
      "Log analysis",
      "Incident response integration"
    ],
    ctaText: "Monitor Systems"
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    id: 1,
    number: "01",
    icon: Eye,
    title: "Vision",
    description: "We start by understanding your big picture. What are you building? Why does it matter? Who is it for? We map out the initial concept.",
    timeline: "Discovery"
  },
  {
    id: 2,
    number: "02",
    icon: Map,
    title: "Strategy & Analysis",
    description: "We dive deep into market fit, monetization, and technical feasibility. We de-risk the project before writing a single line of code.",
    timeline: "Planning"
  },
  {
    id: 3,
    number: "03",
    icon: Palette,
    title: "Design",
    description: "Crafting the user experience and interface. We ensure the product is intuitive, beautiful, and aligned with your brand identity.",
    timeline: "UX/UI"
  },
  {
    id: 4,
    number: "04",
    icon: Code,
    title: "Develop",
    description: "Building the core product using modern tech stacks (Web, Shopify, or Custom). We blend AI tools with expert engineering.",
    timeline: "Build"
  },
  {
    id: 5,
    number: "05",
    icon: Bot,
    title: "Automate",
    description: "Integrating AI agents and workflow automation to streamline operations and enhance product functionality.",
    timeline: "Optimization"
  },
  {
    id: 6,
    number: "06",
    icon: Rocket,
    title: "Scale",
    description: "Launching the product and shifting focus to growth marketing, user acquisition, and continuous optimization.",
    timeline: "Growth"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 6,
    slug: "liquidity-mobile-app",
    client: "Liquidity.io Mobile",
    industry: "Fintech & Blockchain",
    services: ["Mobile App", "Fintech", "Blockchain", "Identity Verification"],
    challenge: "Investors needed a secure, on-the-go way to manage private stocks and digital assets.",
    solution: "A comprehensive mobile trading platform with blockchain security, seamless onboarding, and real-time portfolio management.",
    results: [
      "Mobile Trading",
      "Blockchain Security",
      "Real-time Updates",
      "Seamless Onboarding"
    ],
    image: "/assets/portfolio/liquidity_mobile.png",
    testimonial: "Liquidity.io isn't just a trading platform, it's a comprehensive solution designed to empower investors.",
    testimonialAuthor: "Product Team, Liquidity.io",
    overview: "Liquidity.io leverages blockchain technology to bring unprecedented liquidity to the alternative investment market. Our platform features a no-code API-minting solution, enabling users to swiftly digitize portfolios into tradeable securities. With a focus on security and transparency, Liquidity.io is reshaping how real-world assets are traded.",
    painPointsSolved: [
      "Lack of liquidity in alternative investments",
      "Complex and slow onboarding processes",
      "Fragmented portfolio management for digital and physical assets"
    ],
    userPersonas: [
      "Experienced Investors",
      "Issuers seeking distribution",
      "Investment Banks & Brokers"
    ],
    marketSize: {
      tam: "$12T+ (Global Alternative Investments)",
      sam: "$500B (Digital Securities Market)",
      som: "$50M (Initial User Base)"
    },
    techStack: {
      frontend: "React Native",
      backend: "Node.js / Blockchain",
      integrations: "Apple ID, OTP Services, Blockchain Ledger"
    },
    buildTimeline: "Mobile MVP: 4-6 months. Feature expansion: Ongoing.",
    resourcesNeeded: "Mobile Dev Team, Blockchain Specialists, QA.",
    analyticsSetup: "Firebase Analytics, Crashlytics.",
    marketingEfforts: "App Store Optimization, Digital Marketing, Strategic Partnerships.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.liquidity",
    appStoreLink: "https://apps.apple.com/in/app/liquidity-io/id6737758358",
    websiteLink: "https://liquidity.io/"
  },
  {
    id: 1,
    slug: "liquidity-io",
    client: "Liquidity.io",
    industry: "Marketing Technology & Content Automation",
    services: ["Full-Stack Development", "AI Automation", "Product Strategy", "Mobile App"],
    challenge: "Needed a complete platform for content & marketing automation.",
    solution: "Full-stack web application with lead gen tools, SEO blog systems, social media management, and document workflows.",
    results: [
      "All-in-one platform",
      "12+ Integrated Features",
      "Marketing Automation",
      "Full-stack Web App"
    ],
    image: "/assets/banner/liquidityio_banner.png",
    testimonial: "Working with ZenithLabs felt like having an extension of our own team. They understood our vision immediately.",
    testimonialAuthor: "Product Lead, Liquidity.io",
    overview: "Liquidity.io is a digital marketplace and regulated ATS focused on giving investors access to private-market instruments with real-time tracking, price alerts and compliance-first flows. The product positions itself as a mobile-first, institutional-grade platform for secondary trading in private assets.",
    painPointsSolved: [
      "Liquidity and price discovery in illiquid private assets",
      "Compliance, onboarding and accredited-investor management for regulated secondary trades",
      "Real-time portfolio visibility and alerts"
    ],
    userPersonas: [
      "High-net-worth individuals and family offices seeking exposure to pre-IPO/private assets",
      "Institutional allocators and funds executing secondary trades or private credit allocations",
      "Company founders/insiders needing an orderly secondary execution channel"
    ],
    marketSize: {
      tam: "$12–22T (Global private markets AUM)",
      sam: "$300B–$1T (Secondary markets for private company stock + private credit)",
      som: "$1B–$10B (Initial near-term market capture)"
    },
    techStack: {
      frontend: "React / React Native (mobile), Next.js",
      backend: "Node.js / Python services, PostgreSQL, Redis",
      integrations: "Payment/wire rails, KYC/AML providers, custody/transfer agents, SEC/regulatory integrations"
    },
    buildTimeline: "Core MVP (order book, onboarding, compliance): 6–10 months. Fully regulated product: 12–24 months.",
    resourcesNeeded: "Team: 2–3 backend, 2 frontend/mobile, 1–2 ML/data, 1 compliance lead, 1 PM, 1–2 designers.",
    analyticsSetup: "Segment/Snowplow for events, Mixpanel/Amplitude for product, GA for marketing. KPIs: active traders, volume, settlement time.",
    marketingEfforts: "Content (blog), LinkedIn/X presence, app store listing, PR & thought leadership aimed at institutional channels.",
    websiteLink: "https://liquidity.io/"
  },
  {
    id: 2,
    slug: "berryflow-io",
    client: "BerryFlow.io",
    industry: "SaaS & Marketing Technology",
    services: ["Custom AI Development", "AI Integration", "Growth Strategy"],
    challenge: "Marketers needed to move faster with content creation.",
    solution: "End-to-end content automation platform with intelligent workflows, document libraries, and creative tools.",
    results: [
      "AI Content Creation",
      "SaaS Platform",
      "Intelligent Workflows",
      "Streamlined Ops"
    ],
    image: "/assets/banner/berryflowio_screenshot.png",
    testimonial: "The AI automation they built saved us 20+ hours per week. It paid for itself in the first month.",
    testimonialAuthor: "Marketing Director, BerryFlow",
    overview: "Berry provides an AI-powered Customer Success platform (AI CSM) that automates onboarding, support, training, and internal co-pilot functions to scale post-sales operations without proportional headcount increases.",
    painPointsSolved: [
      "Scaling white-glove onboarding and support without hiring more CSMs",
      "Knowledge retention and consistent execution of CS playbooks",
      "Ticket deflection and training at scale"
    ],
    userPersonas: [
      "VP/Head of Customer Success in enterprise SaaS companies",
      "CS managers wanting to reduce time-to-value and improve NRR",
      "Product teams seeking to reduce support overhead"
    ],
    marketSize: {
      tam: "$5–15B+ (Global customer success & post-sales software market)",
      sam: "$500M–$2B (AI CSM platforms for mid-to-large SaaS)",
      som: "$5–50M (Initial enterprise deployments)"
    },
    techStack: {
      frontend: "React/Next.js",
      backend: "Node/Python",
      integrations: "Vector DB (Pinecone/Weaviate), LLM orchestration, Zendesk/Gainsight integrations"
    },
    buildTimeline: "Product MVP: 4–8 months. Enterprise-grade security & workflows: 9–18 months.",
    resourcesNeeded: "3–5 backend, 2 frontend, 2 ML/AI, 1 pre-sales, 1 product, 1 designer.",
    analyticsSetup: "Product analytics (deflection), CS metrics (TTV, NRR), integration dashboards.",
    marketingEfforts: "Enterprise demo/bookings, content for CS leaders, outbound/partnerships with CRM vendors.",
    websiteLink: "https://liquidity.io/"
  },
  {
    id: 3,
    slug: "marchain-io",
    client: "Marchain.io",
    industry: "Blockchain & Web3",
    services: ["Technical Development", "Strategic Partnership", "Infrastructure"],
    challenge: "Requires robust blockchain infrastructure and web3 solutions.",
    solution: "Strategic partnership delivering technical development and next-gen decentralized applications.",
    results: [
      "Blockchain Infra",
      "Web3 Solutions",
      "Strategic Partnership",
      "Decentralized Apps"
    ],
    image: "/assets/banner/marchainio_screenshot.png",
    testimonial: "From strategy to deployment, they handled everything. Best decision we made for our product.",
    testimonialAuthor: "CTO, Marchain.io",
    overview: "Marchain.io is a product-building and growth platform focused on helping entrepreneurs build products fast: weekly insights, no-code tools, 1:1 guidance, automation services and courses for founders and builders.",
    painPointsSolved: [
      "Slow product discovery & execution for founders",
      "Confusion over tool selection and no-code automation",
      "Need for mentorship and execution templates"
    ],
    userPersonas: [
      "Early founders & solo entrepreneurs wanting fast prototyping",
      "Product managers seeking templates and coaching",
      "Small agencies and solopreneurs who want automation"
    ],
    marketSize: {
      tam: "$20–60B (Global online learning / creator economy)",
      sam: "$500M–$2B (Founders/product professionals in English markets + India)",
      som: "₹5–50M INR (Niche premium newsletter/coaching)"
    },
    techStack: {
      frontend: "Next.js / static site / Substack",
      other: "Gumroad/Stripe, Zapier/Make/n8n for automations"
    },
    buildTimeline: "Basic presence: 2–6 weeks. Automation services & courses: 2–6 months.",
    resourcesNeeded: "1–2 dev/automation engineers, content creator, community manager, designer.",
    analyticsSetup: "Newsletter metrics, Google Analytics, cohort retention.",
    marketingEfforts: "Content marketing (blog), Instagram presence, productized services, 1:1 guidance upsells.",
    websiteLink: "https://marchain.io/"
  },
  {
    id: 4,
    slug: "definable-ai",
    client: "Definable.ai",
    industry: "AI & Analytics",
    services: ["AI Implementation", "Product Development", "Data Engineering"],
    challenge: "Turning raw data into actionable business insights.",
    solution: "AI-powered platform enabling smarter business decisions through intelligent data analysis.",
    results: [
      "Custom AI Implementation",
      "Data Analysis",
      "Actionable Insights",
      "Business Intelligence"
    ],
    image: "/assets/banner/definableai_banner.png",
    testimonial: "Transformed how we look at our data. The insights are now instant and accurate.",
    testimonialAuthor: "Founder, Definable.ai",
    overview: "Definable.ai is an India-built AI agents/platform that aggregates access to multiple LLMs and AI tools in one workspace ,  chat, agents, multimodal creation, knowledge bases and model switching inside a single UI.",
    painPointsSolved: [
      "Model fragmentation (users juggling ChatGPT, Claude, etc.)",
      "Subscription fatigue and tooling sprawl",
      "Need for knowledge-base integration and agent orchestration"
    ],
    userPersonas: [
      "AI-savvy product teams and founders",
      "Educators and non-profits",
      "Enterprises wanting multi-model fallbacks"
    ],
    marketSize: {
      tam: "$20–60B (Global developer & enterprise AI tooling)",
      sam: "$1–5B (Multi-model agent platforms for startups)",
      som: "$5–50M (Initial target)"
    },
    techStack: {
      frontend: "React + Next.js",
      backend: "Node.js/Express or Python FastAPI",
      integrations: "OpenAI/Anthropic/Meta/Gemini APIs, Vector DB (Pinecone/Weaviate)"
    },
    buildTimeline: "Seed MVP: 3–6 months. Agents/Enterprise features: 6–12 months.",
    resourcesNeeded: "2–4 backend, 1–2 MLOps, 2 frontend, 1 designer, 1 growth/ops.",
    analyticsSetup: "Mixpanel/Amplitude, API usage metrics, billing dashboards.",
    marketingEfforts: "Content + blog, demo bookings, freemium model, LinkedIn/Instagram presence.",
    websiteLink: "https://definable.ai/"
  },
  {
    id: 5,
    slug: "arthik-money",
    client: "Arthik.money",
    industry: "Fintech & Personal Finance",
    services: ["Full-Stack Development", "Financial Integrations", "UX Design", "Mobile App"],
    challenge: "Users needed a better way to manage personal logistics and finances.",
    solution: "Full web application with financial tools and integrations for smarter money management.",
    results: [
      "Fintech Platform",
      "Web Application",
      "Financial Tools",
      "User Centric"
    ],
    image: "/assets/portfolio/arthik_money.png",
    testimonial: "A seamless experience for our users. The platform is robust and secure.",
    testimonialAuthor: "CEO, Arthik.money",
    overview: "Arthik.money is an AI-powered personal expense and budget manager that auto-categorizes transactions, offers smart savings advice and an AI assistant chat for finance queries.",
    painPointsSolved: [
      "Manual expense tracking and poor visibility",
      "Lack of actionable saving recommendations",
      "Friction in connecting bank transactions"
    ],
    userPersonas: [
      "Salaried individuals and young professionals",
      "Small business owners/micro-entrepreneurs",
      "Users in India seeking localised recommendations"
    ],
    marketSize: {
      tam: "$10–40B (Global personal finance app market)",
      sam: "$500M–$2B (India-centric personal finance app market)",
      som: "$1–10M (Early traction in India)"
    },
    techStack: {
      frontend: "React Native or Flutter (Mobile)",
      backend: "Node.js/Python, PostgreSQL",
      integrations: "Banking aggregation, ML for categorization"
    },
    buildTimeline: "MVP: 3–6 months. Bank integrations: 6–12 months.",
    resourcesNeeded: "2 mobile devs, 2 backend, 1 ML, 1 security, 1 designer, 1 product.",
    analyticsSetup: "Amplitude/Mixpanel, Sentry, Business dashboards (Metabase).",
    marketingEfforts: "Beta program, app store listing, referral incentives, social campaigns.",
    websiteLink: "https://arthik.money/"
  },
  {
    id: 7,
    slug: "the-decorating-varanasi",
    client: "The Decorating Varanasi",
    industry: "Event Management",
    services: ["Custom AI Development", "AI Automation", "Event Tech"],
    challenge: "Organizing events efficiently required a dual-interface system for both admins and users.",
    solution: "A dynamic Event Management website built and deployed in just 1 Day using AI, featuring real-time updates and a robust admin panel.",
    results: [
      "1-Day Deployment",
      "Real-time Updates",
      "Robust Admin Panel",
      "Clean UI/UX"
    ],
    image: "/assets/portfolio/decorating_varanasi.png",
    testimonial: "A comprehensive web application that streamlines the organization of events effectively.",
    testimonialAuthor: "Founder, The Decorating Varanasi",
    overview: "A dynamic Event Management website built and deployed in just 1 Day using AI. This comprehensive web application streamlines the organization of events through a dual-interface system, catering effectively to both administrators and end-users.",
    painPointsSolved: [
      "Slow development timelines",
      "Manual event management",
      "Lack of real-time information"
    ],
    userPersonas: [
      "Event Organizers",
      "Attendees",
      "Venue Managers"
    ],
    marketSize: {
      tam: "$5B+ (Global Event Tech)",
      sam: "$500M (Regional Event Management)",
      som: "$10M (Initial Market)"
    },
    techStack: {
      frontend: "React / Next.js",
      backend: "Node.js",
      integrations: "AI Content Generation, Real-time DB"
    },
    buildTimeline: "Concept to Deployment: 1 Day.",
    resourcesNeeded: "1 AI Engineer, 1 Full Stack Dev.",
    analyticsSetup: "Google Analytics 4.",
    marketingEfforts: "Social Media, Local SEO.",
    websiteLink: "https://thedecoratingvaranasi.com/"
  },
  {
    id: 8,
    slug: "nixet",
    client: "Nixet",
    industry: "Digital Product Agency",
    services: ["Custom AI Development", "Product Strategy", "Blockchain", "UI/UX"],
    challenge: "Businesses need to build and scale digital products with speed and clarity.",
    solution: "A partnership-driven approach providing product design, development, and blockchain integration to scale digital solutions.",
    results: [
      "Rapid Prototyping",
      "Scalable Infrastructure",
      "Blockchain Ready",
      "Strategic Growth"
    ],
    image: "/assets/portfolio/nixet.png",
    testimonial: "We partner with businesses of all sizes to design, build, and scale digital products.",
    testimonialAuthor: "CEO, Nixet",
    overview: "Nixet partners with businesses of all sizes to design, build, and scale digital products. From early concepts to fully functional solutions, they offer services in Product Design, Web & App Development, Blockchain Integration, and DevOps, focusing on speed, efficiency, and practical execution.",
    painPointsSolved: [
      "Slow time-to-market",
      "Lack of technical expertise",
      "Scalability issues"
    ],
    userPersonas: [
      "Startups",
      "Enterprise Clients",
      "Product Managers"
    ],
    marketSize: {
      tam: "$500B+ (Global IT Services)",
      sam: "$50B (Digital Product Development)",
      som: "$100M (Target Market)"
    },
    techStack: {
      frontend: "React / Next.js",
      backend: "Node.js / Python",
      integrations: "Blockchain, Cloud Infrastructure"
    },
    buildTimeline: "Varies by project scope.",
    resourcesNeeded: "Full Product Team.",
    analyticsSetup: "Custom Analytics Implementation.",
    marketingEfforts: "Content Marketing, B2B Sales.",
    websiteLink: "https://www.nixet.io/"
  },
  {
    id: 9,
    slug: "vinayka-rugs",
    client: "Vinayka Rugs [WIP]",
    industry: "Luxury E-commerce & Textiles",
    services: ["Custom AI Development", "E-commerce", "Bespoke Solutions", "UI/UX Design"],
    challenge: "Preserving ancient hand-knotting traditions while reaching modern, luxury consumers globally through a digital storefront.",
    solution: "A premium React-based e-commerce platform that tells the brand's story of ethical craftsmanship and sustainable luxury while offering a seamless shopping experience.",
    results: [
      "Direct-to-Consumer Growth",
      "Ethical Craftsmanship Visibility",
      "Global Reach",
      "Bespoke Customization Flow"
    ],
    image: "/assets/portfolio/vinayka_rugs.png",
    testimonial: "We weave stories into every knot, bringing the timeless art of handmade luxury to your modern home.",
    testimonialAuthor: "Vinayka Rugs Mission",
    overview: "Vinayka Rugs is a premium hand-knotted rug manufacturer based in Varanasi, India. Established in 1982, they blend 40+ years of heritage with contemporary design, working directly with 2,000+ artisans to create heirloom-quality art pieces.",
    painPointsSolved: [
      "Lack of transparency in traditional textile markets",
      "Environmental impact of mass-produced home decor",
      "Difficulty in finding high-quality bespoke handmade rugs"
    ],
    userPersonas: [
      "Luxury Homeowners",
      "Interior Designers & Trade Professionals",
      "Conscious Consumers focused on sustainability"
    ],
    marketSize: {
      tam: "$100B+ (Global Rugs & Carpets Market)",
      sam: "$15B (Hand-made & Luxury Rug Segment)",
      som: "$50M (Initial Digital Market)"
    },
    techStack: {
      frontend: "React / Tailwind CSS",
      backend: "Custom E-commerce API",
      integrations: "Global Logistics, Multi-currency Payments"
    },
    buildTimeline: "Initial MVP: 8-12 weeks. Full feature set: 4-6 months.",
    resourcesNeeded: "Full Stack Team, UI/UX Designer specialized in luxury brands.",
    analyticsSetup: "Google Analytics 4, Conversion optimization tracking.",
    marketingEfforts: "SEO for luxury decor, Instagram presence, Trade Partnerships.",
    websiteLink: "https://chaurasiawadh.github.io/vinayka_rugs/"
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 1,
    icon: Target,
    title: "Obsessed With Your Bottom Line",
    description: "We don't just build websites that look good, we engineer digital assets that drive measurable business results based on data."
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "No Tech Jargon, Just Clear Updates",
    description: "We explain everything in plain English. You'll never wonder what's happening with your project with our weekly updates."
  },
  {
    id: 3,
    icon: Zap,
    title: "2-Week Launch Guarantee",
    description: "While others take months, our streamlined process delivers professional standard websites in 2-4 weeks."
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Enterprise Quality at Fair Prices",
    description: "Expertise of high-end agencies without the inflated costs. Transparent, competitive pricing designed for ROI."
  },
  {
    id: 5,
    icon: UserCheck,
    title: "We Stick Around After Launch",
    description: "We provide continued support, training, and optimization. Your success is our success, and we're invested in your growth."
  },
  {
    id: 6,
    icon: Puzzle,
    title: "Built for You, Not Copy-Pasted",
    description: "Every project is custom-built to match your unique brand. We never use generic templates."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Working with ZenithLabs felt like having an extension of our own team. They understood our vision immediately and delivered beyond expectations.",
    name: "Product Lead",
    position: "Liquidity.io",
    image: "https://picsum.photos/100/100?random=10",
    rating: 4.5
  },
  {
    id: 2,
    quote: "The AI automation they built saved us 20+ hours per week. It paid for itself in the first month.",
    name: "Marketing Director",
    position: "BerryFlow.io",
    image: "https://picsum.photos/100/100?random=11",
    rating: 5
  },
  {
    id: 3,
    quote: "From strategy to deployment, they handled everything. Best decision we made for our product.",
    name: "CTO",
    position: "Marchain.io",
    image: "https://picsum.photos/100/100?random=12",
    rating: 4
  }
];



export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "Standard websites take 2-4 weeks. AI automation projects typically take 2-3 weeks. Complex transformations take 5-6 weeks. We provide exact timelines in our proposals."
  },
  {
    id: 2,
    question: "Do you require full payment upfront?",
    answer: "No. We typically split payment: 50% deposit, 25% midpoint, and 25% upon completion. Custom schedules are available for larger projects."
  },
  {
    id: 3,
    question: "What if I need changes after launch?",
    answer: "All packages include 30-90 days of support for tweaks and fixes. Afterward, we offer maintenance packages or ad-hoc updates."
  },
  {
    id: 4,
    question: "Can you work with my existing website?",
    answer: "Absolutely. We can redesign, update, or add features to existing sites. We'll assess your current site during the consultation."
  },
  {
    id: 5,
    question: "Will my website be mobile-friendly?",
    answer: "Yes, guaranteed. Every website we build is fully responsive and tested across all devices."
  },
  {
    id: 6,
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! We offer monthly maintenance starting at $150/month covering security, backups, and minor updates."
  }
];

export const ECOMMERCE_PORTFOLIO = [
  {
    id: 101,
    title: "Alkahari",
    category: "Clothing",
    tags: ["Website", "Performance", "Retention", "SEO"],
    image: "/assets/portfolio/alkahari-DrGv5FW4.webp"
  },
  {
    id: 102,
    title: "Bare Wear",
    category: "Women's Essentials",
    tags: ["Performance", "Retention"],
    image: "/assets/portfolio/barewear-Bdrsf3AN.webp"
  },
  {
    id: 103,
    title: "The Bijou Box",
    category: "Jewellery",
    tags: ["Website", "Performance"],
    image: "/assets/portfolio/thebijoubox-umH0xzTp.webp"
  },
  {
    id: 104,
    title: "Bird House",
    category: "Footwear",
    tags: ["Performance", "Retention"],
    image: "/assets/portfolio/birdhouse-DdEWzC5N.webp"
  },
  {
    id: 105,
    title: "Faries Forever",
    category: "Kid's Clothing",
    tags: ["Website", "Performance"],
    image: "/assets/portfolio/fariesforever-BhPwpF17.webp"
  },
  {
    id: 106,
    title: "Fancy Pants",
    category: "SwimWear",
    tags: ["Performance", "Retention"],
    image: "/assets/portfolio/fancypants-NbRP49Mb.webp"
  },
  {
    id: 107,
    title: "Geroo Jaipur",
    category: "Women's Wear",
    tags: ["Website", "Performance", "SEO"],
    image: "/assets/portfolio/geroo-D_lbKT1A.webp"
  },
  {
    id: 108,
    title: "Green & Beige",
    category: "Skincare",
    tags: ["Performance"],
    image: "/assets/portfolio/greenandbeige-CybIGa85.webp"
  },
  {
    id: 110,
    title: "Hairmaster Salon",
    category: "Salon",
    tags: ["Performance", "Social Media"],
    image: "/assets/portfolio/hairmasters-bq426kSA.webp"
  },
  {
    id: 111,
    title: "Heavenly Tails",
    category: "Dog Hostel",
    tags: ["Performance", "Social Media"],
    image: "/assets/portfolio/heavenlytails-DYYwbTcL.webp"
  },
  {
    id: 112,
    title: "Humraha",
    category: "Women's Wear",
    tags: ["Performance", "Retention"],
    image: "/assets/portfolio/humraha-DS2wi7X8.webp"
  },
  {
    id: 113,
    title: "Indiehaat",
    category: "Women's Wear",
    tags: ["Performance"],
    image: "/assets/portfolio/indiehaat-Dbj2Sq8b.webp"
  },
  {
    id: 114,
    title: "Ishhaara",
    category: "Jewellery",
    tags: ["Performance", "Retention", "Social Media"],
    image: "/assets/portfolio/ishhaara-C6zs-g12.webp"
  },
  {
    id: 115,
    title: "Jaipur Basta",
    category: "Bags",
    tags: ["Website", "Performance", "Retention", "Social Media"],
    image: "/assets/portfolio/jaipurbasta-BlQ499um.webp"
  },
  {
    id: 116,
    title: "Janki",
    category: "Jewellery",
    tags: ["Website", "Performance", "Retention"],
    image: "/assets/portfolio/janki-D8KD0dvc.webp"
  },
  {
    id: 117,
    title: "Janya's Closet",
    category: "Kid's Clothing",
    tags: ["Website", "Performance", "Social Media", "SEO"],
    image: "/assets/portfolio/janyascloset-Dv_LqFZa.webp"
  }
];