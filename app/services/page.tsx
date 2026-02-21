'use client';

import React from 'react';
import Team from '../../components/Team';

interface ServiceItem {
    title: string;
    headline: string;
    description: string;
    whatWeBuild?: string[];
    whatWeDeliver?: string[];
    whatWeAutomate?: string[];
    whatWeCreate?: string[];
    whatWeAnalyze?: string[];
    whatWeDo?: string[];
    techStack?: Record<string, string>;
    process?: string[];
    approach?: string[];
    roiFocus?: string;
    perfectFor?: string[];
    whyItMatters?: string;
    whoNeedsThis?: string[];
    deliverables?: string[];
    growthPhilosophy?: {
        main: string;
        points: string[];
    };
    timeline?: string;
}

const CORE_SERVICES: ServiceItem[] = [
    {
        title: "Custom AI Development",
        headline: "Build Fast. Scale Faster.",
        description: "Modern web applications that combine cutting-edge technology with timeless engineering principles. We use AI-assisted development to accelerate prototyping and traditional coding expertise to ensure production quality.",
        whatWeBuild: [
            "Custom SaaS platforms",
            "Native mobile applications (React Native for iOS & Android)",
            "Progressive Web Apps (PWAs) with offline capabilities",
            "Enterprise dashboards and tools",
            "API-first applications",
            "Real-time collaborative tools",
            "Complex data visualization platforms"
        ],
        techStack: {
            "Frontend": "React, Next.js, React Native, modern JavaScript",
            "Backend": "Node.js, Python, serverless architectures",
            "Mobile": "React Native, Expo, native modules",
            "Databases": "PostgreSQL, MongoDB, Redis",
            "Cloud": "AWS, Vercel, custom infrastructure"
        },
        process: [
            "Technical discovery and architecture planning",
            "Rapid prototyping with AI-assisted development",
            "Refinement with traditional engineering standards",
            "Rigorous testing and quality assurance",
            "Deployment and monitoring setup",
            "Post-launch support and iteration"
        ]
    },
    {
        title: "Shopify Development",
        headline: "E-commerce That Actually Converts",
        description: "Beautiful, high-performing Shopify stores with custom functionality that matches your unique business needs. From design to conversion optimization, we build stores that make money.",
        whatWeBuild: [
            "Custom Shopify theme development",
            "Headless commerce implementations",
            "Complex product configurations",
            "Custom checkout experiences",
            "Third-party integrations (ERPs, fulfillment, marketing tools)",
            "Migration from other platforms",
            "Conversion rate optimization"
        ],
        perfectFor: [
            "Launching your first online store",
            "Scaling beyond basic Shopify capabilities",
            "Migrating from WooCommerce, Magento, or custom solutions",
            "Adding custom features your business needs",
            "Optimizing underperforming stores"
        ]
    },
    {
        title: "AI Automation Agents",
        headline: "Work Smarter with Intelligent Automation",
        description: "Custom AI agents that handle the repetitive work so your team can focus on what matters. From customer support to data processing, we build automation that feels magical.",
        whatWeBuild: [
            "Customer support chatbots (Intercom, Web, WhatsApp)",
            "Email and document processing",
            "Data entry and validation",
            "Content generation and optimization",
            "Social media management",
            "Report generation",
            "Lead qualification & CRM sync",
            "Inventory and operations workflows"
        ],
        approach: [
            "Identify highest-impact automation opportunities",
            "Design intelligent workflows that handle edge cases",
            "Build and train custom AI agents",
            "Integrate seamlessly with your existing tools",
            "Monitor and optimize performance",
            "Continuous learning and improvement"
        ],
        roiFocus: "Most clients see automation pay for itself within 2-3 months through time savings and error reduction."
    },
    {
        title: "Product Documentation",
        headline: "Documentation Users Actually Want to Read",
        description: "Clear, comprehensive, and beautifully organized documentation that empowers your users and reduces support burden. We make complex things simple.",
        whatWeBuild: [
            "User guides and onboarding documentation",
            "API documentation with interactive examples",
            "Technical integration guides",
            "Knowledge bases and help centers",
            "Internal wiki and process documentation",
            "Video tutorials and visual guides",
            "Release notes and changelogs",
            "Developer documentation"
        ],
        process: [
            "Deep product understanding",
            "User research and pain point analysis",
            "Information architecture design",
            "Clear, concise writing",
            "Visual diagrams and screenshots",
            "Interactive examples where applicable",
            "Search optimization",
            "Continuous updates and maintenance"
        ],
        whyItMatters: "Good documentation reduces support tickets by 40%, accelerates user adoption, and becomes a powerful marketing asset."
    },
    {
        title: "Product Profitability & Vision Analysis",
        headline: "Build the Right Thing, Not Just Any Thing",
        description: "Strategic analysis that de-risks your product investment. Before you spend months building, let's ensure you're building something the market actually wants and will pay for.",
        whatWeAnalyze: [
            "Market size and growth potential",
            "Competitive landscape and differentiation",
            "Target customer validation",
            "Monetization models and pricing strategy",
            "Go-to-market feasibility",
            "Resource requirements and timeline",
            "Risk assessment and mitigation",
            "MVP scope and feature prioritization"
        ],
        deliverables: [
            "Comprehensive market analysis report",
            "Competitor feature comparison",
            "Customer persona research",
            "Financial projections and unit economics",
            "Product roadmap recommendations",
            "MVP specification document",
            "Risk mitigation strategies"
        ],
        whoNeedsThis: [
            "Startups before building their first product",
            "Companies considering a pivot",
            "Product teams validating new features",
            "Entrepreneurs with an idea but no validation",
            "Businesses entering new markets"
        ]
    },
    {
        title: "Product Growth & Marketing",
        headline: "Predictable, Scalable Growth",
        description: "Data-driven marketing strategies that bring qualified customers to your product consistently. We focus on channels that compound over time, not vanity metrics.",
        whatWeDo: [
            "SEO strategy and implementation",
            "Content marketing and thought leadership",
            "Conversion rate optimization",
            "Email marketing and automation",
            "Paid acquisition strategy (when appropriate)",
            "Product-led growth implementation",
            "Analytics (GA4) and attribution setup",
            "User onboarding optimization",
            "Retention and engagement campaigns"
        ],
        growthPhilosophy: {
            main: "We prioritize sustainable, compound growth over quick wins.",
            points: [
                "Building SEO authority that pays dividends for years",
                "Creating content that educates and converts",
                "Optimizing for customer lifetime value, not just acquisition",
                "Testing and iterating based on data, not hunches",
                "Building referral loops into your product"
            ]
        },
        timeline: "Expect to see initial traction in 30-60 days, meaningful growth in 90-120 days, and compounding results after 6 months."
    }
];

const DATA_SERVICES: ServiceItem[] = [
    {
        title: "Power BI Dashboards",
        headline: "Data-Driven Decisions, Visualized",
        description: "Transform your raw data into interactive, visual insights. We build custom Power BI dashboards that help you track KPIs, identify trends, and make data-driven decisions.",
        whatWeBuild: [
            "Real-time data visualization",
            "Custom KPI tracking",
            "GA4 & CRM (Salesforce/HubSpot) integration",
            "Automated reporting",
            "Interactive drill-downs",
            "Data modeling and transformation",
            "Cross-platform integration"
        ],
        perfectFor: [
            "Executive leadership teams",
            "Data analysis departments",
            "Sales and marketing performance tracking",
            "Operational efficiency monitoring"
        ],
        roiFocus: "Reduce time spent on manual reporting by up to 90% while uncovering hidden revenue opportunities through better data visibility."
    },
    {
        title: "Reporting Dashboards",
        headline: "Automated Insights on Autopilot",
        description: "Automated reporting solutions that save you time and reduce errors. We design comprehensive dashboards that consolidate data from multiple sources into clear, actionable reports.",
        whatWeBuild: [
            "Automated data aggregation pipelines",
            "Custom PDF/Excel report generation",
            "Multi-source data integration",
            "Scheduled email delivery",
            "Stakeholder-specific views",
            "Historical trend analysis"
        ],
        whyItMatters: "Manual reporting is prone to errors and consumes valuable time. Automated dashboards ensure accuracy and free up your team for strategic work."
    },
    {
        title: "Company Dashboards",
        headline: "Your Business Pulse, Centralized",
        description: "Centralize your company's metrics in one place. We create unified dashboards that provide a holistic view of your business performance across all departments, ensuring everyone is aligned.",
        whatWeBuild: [
            "Executive summary dashboards",
            "Unified CRM & Sales dashboards",
            "Departmental metric scorecards",
            "Goal and OKR tracking",
            "Real-time performance monitors",
            "Employee productivity insights",
            "Financial health overviews"
        ],
        growthPhilosophy: {
            main: "Alignment drives growth.",
            points: [
                "Creating a single source of truth for all teams",
                "Improving transparency and accountability",
                "Speeding up decision-making loops",
                "Identifying bottlenecks before they become crises"
            ]
        }
    },
    {
        title: "Monitoring Integrations",
        headline: "Proactive System Health & Alerts",
        description: "Keep a pulse on your systems with robust monitoring integrations. We set up alerts and dashboards to ensure your critical infrastructure and applications are always running smoothly and issues are caught early.",
        whatWeBuild: [
            "System uptime and latency monitoring",
            "CRM & Chatbot health checks",
            "Real-time performance alerts (Slack/Email/SMS)",
            "Log aggregation and analysis",
            "Incident response workflow integration",
            "Server resource tracking",
            "API health checks"
        ],
        techStack: {
            "Monitoring Tools": "Datadog, New Relic, Prometheus, Grafana",
            "Alerting": "PagerDuty, OpsGenie, Slack",
            "Cloud": "AWS CloudWatch, Azure Monitor, Google Cloud Operations"
        }
    }
];

import { getServiceSchema, getHowToSchema, JsonLdScript } from '@/lib/json-ld';

export default function ServicesPage() {
    const allServices = [...CORE_SERVICES, ...DATA_SERVICES];

    console.log('allServices', allServices);


    return (
        <div className="min-h-screen pt-16 pb-16 sm:pt-24 sm:pb-20">
            {allServices.map((service, index) => (
                <React.Fragment key={`schema-group-${index}`}>
                    <JsonLdScript
                        data={getServiceSchema(service)}
                        id={`service-schema-${index}`}
                    />
                    {service.process && (
                        <JsonLdScript
                            data={getHowToSchema({
                                name: `How we implement ${service.title}`,
                                description: service.description,
                                steps: service.process.map(step => ({ name: step, text: step })),
                                totalTime: service.timeline || "P1M"
                            })}
                            id={`howto-schema-${index}`}
                        />
                    )}
                </React.Fragment>
            ))}

            <div className="px-4 max-w-7xl mx-auto mb-10 sm:mb-20 text-center">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm border-2 border-blue-100 rounded-full px-4 py-1.5 bg-blue-50 mb-6 inline-block">Our Expertise</span>
                <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Specialized Engineering for <span className="text-black">Modern Digital Growth</span>.</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Beyond code: We architect business value. Our suite of AI automation and premium development services is meticulously crafted to give your business a decisive market edge.</p>
            </div>

            <div className="px-4 max-w-7xl mx-auto space-y-16 sm:space-y-32 ">
                {CORE_SERVICES.map((service, index) => (
                    <div key={index} id={service.title.toLowerCase().replace(/\s+/g, '-')} className="grid lg:grid-cols-2 gap-12 items-start scroll-mt-32 mb-10 sm:mb-20">
                        {/* Left Column - Service Details */}
                        <div>
                            <h2 className="text-4xl font-black mb-2 text-gray-900">{service.title}</h2>
                            <h3 className="text-2xl font-bold mb-6 text-accent">{service.headline}</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-10">{service.description}</p>

                            {service.process && (
                                <div className="mb-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Our Process</h4>
                                    <ul className="space-y-2.5">
                                        {service.process.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-700 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.approach && (
                                <div className="mb-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Our Approach</h4>
                                    <ul className="space-y-2.5">
                                        {service.approach.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-700 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.techStack && (
                                <div className="mb-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Our Tech Stack</h4>
                                    <div className="space-y-2">
                                        {Object.entries(service.techStack).map(([key, value]) => (
                                            <div key={key} className="text-sm">
                                                <span className=" font-semibold">{key} :</span>
                                                <span className="text-gray-700">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {service.roiFocus && (
                                <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-2">ROI Focus</h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">{service.roiFocus}</p>
                                </div>
                            )}

                            {service.whyItMatters && (
                                <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-2">Why It Matters</h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">{service.whyItMatters}</p>
                                </div>
                            )}

                            {service.whoNeedsThis && (
                                <div className="mt-8">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Who Needs This</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.whoNeedsThis.map((item, i) => (
                                            <span key={i} className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {service.growthPhilosophy && (
                                <div className="mt-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-3">Growth Philosophy</h4>
                                    <p className="mb-4 font-medium text-sm text-gray-900">{service.growthPhilosophy.main}</p>
                                    <ul className="space-y-2">
                                        {service.growthPhilosophy.points.map((p, i) => (
                                            <li key={i} className="text-sm text-gray-600 leading-relaxed">
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                    {service.timeline && (
                                        <div className="mt-6 pt-4 border-t border-gray-200">
                                            <span className="font-bold text-xs uppercase tracking-wider text-gray-500">Timeline Impact</span>
                                            <p className="mt-2 text-sm text-gray-700">{service.timeline}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Right Column - Light Card */}
                        <div className="bg-white border border-gray-200 shadow-xl text-gray-900 p-8 rounded-3xl sticky top-32">
                            <h4 className="font-bold text-blue-600 uppercase tracking-wider text-xs mb-6">
                                {service.whatWeBuild ? "What We Build" :
                                    service.whatWeDeliver ? "What We Deliver" :
                                        service.whatWeAutomate ? "What We Automate" :
                                            service.whatWeCreate ? "What We Create" :
                                                service.whatWeAnalyze ? "What We Analyze" : "What We Do"}
                            </h4>
                            <ul className="space-y-4">
                                {(service.whatWeBuild || service.whatWeDeliver || service.whatWeAutomate || service.whatWeCreate || service.whatWeAnalyze || service.whatWeDo)?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                                        <span className="flex-shrink-0 mt-1 text-blue-500">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {service.perfectFor && (
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Perfect For</h4>
                                    <ul className="space-y-2.5">
                                        {service.perfectFor.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                <span className="flex-shrink-0 text-blue-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.deliverables && (
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Key Deliverables</h4>
                                    <ul className="space-y-2.5">
                                        {service.deliverables.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                <span className="flex-shrink-0 text-blue-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Data & Intelligence Section Header */}
                <div className="pt-20 pb-10 mb-10 text-center border-t border-gray-200">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm border-2 border-blue-100 rounded-full px-4 py-1.5 bg-blue-50 mb-6 inline-block">Data & Operations</span>
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Enterprise Intelligence & <span className="text-blue-600">Monitoring</span></h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Data is your most valuable asset. We build the systems to visualize, report, and monitor your business in real-time.
                    </p>
                </div>

                {DATA_SERVICES.map((service, index) => (
                    <div key={`data-${index}`} id={service.title.toLowerCase().replace(/\s+/g, '-')} className="grid lg:grid-cols-2 gap-12 items-start scroll-mt-32 mb-10 sm:mb-20">
                        {/* Left Column - Service Details */}
                        <div>
                            <h2 className="text-4xl font-black mb-2 text-gray-900">{service.title}</h2>
                            <h3 className="text-2xl font-bold mb-6 text-accent">{service.headline}</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-10">{service.description}</p>

                            {service.process && (
                                <div className="mb-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Our Process</h4>
                                    <ul className="space-y-2.5">
                                        {service.process.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-700 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.approach && (
                                <div className="mb-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Our Approach</h4>
                                    <ul className="space-y-2.5">
                                        {service.approach.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-700 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.techStack && (
                                <div className="mb-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Our Tech Stack</h4>
                                    <div className="space-y-2">
                                        {Object.entries(service.techStack).map(([key, value]) => (
                                            <div key={key} className="text-sm">
                                                <span className=" font-semibold">{key} :</span>
                                                <span className="text-gray-700">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {service.roiFocus && (
                                <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-2">ROI Focus</h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">{service.roiFocus}</p>
                                </div>
                            )}

                            {service.whyItMatters && (
                                <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-2">Why It Matters</h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">{service.whyItMatters}</p>
                                </div>
                            )}

                            {service.whoNeedsThis && (
                                <div className="mt-8">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Who Needs This</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.whoNeedsThis.map((item, i) => (
                                            <span key={i} className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {service.growthPhilosophy && (
                                <div className="mt-10">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-3">Growth Philosophy</h4>
                                    <p className="mb-4 font-medium text-sm text-gray-900">{service.growthPhilosophy.main}</p>
                                    <ul className="space-y-2">
                                        {service.growthPhilosophy.points.map((p, i) => (
                                            <li key={i} className="text-sm text-gray-600 leading-relaxed">
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                    {service.timeline && (
                                        <div className="mt-6 pt-4 border-t border-gray-200">
                                            <span className="font-bold text-xs uppercase tracking-wider text-gray-500">Timeline Impact</span>
                                            <p className="mt-2 text-sm text-gray-700">{service.timeline}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Right Column - Light Card */}
                        <div className="bg-white border border-gray-200 shadow-xl text-gray-900 p-8 rounded-3xl sticky top-32">
                            <h4 className="font-bold text-blue-600 uppercase tracking-wider text-xs mb-6">
                                {service.whatWeBuild ? "What We Build" :
                                    service.whatWeDeliver ? "What We Deliver" :
                                        service.whatWeAutomate ? "What We Automate" :
                                            service.whatWeCreate ? "What We Create" :
                                                service.whatWeAnalyze ? "What We Analyze" : "What We Do"}
                            </h4>
                            <ul className="space-y-4">
                                {(service.whatWeBuild || service.whatWeDeliver || service.whatWeAutomate || service.whatWeCreate || service.whatWeAnalyze || service.whatWeDo)?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                                        <span className="flex-shrink-0 mt-1 text-blue-500">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {service.perfectFor && (
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Perfect For</h4>
                                    <ul className="space-y-2.5">
                                        {service.perfectFor.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                <span className="flex-shrink-0 text-blue-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.deliverables && (
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h4 className="font-bold text-black uppercase tracking-wider text-xs mb-4">Key Deliverables</h4>
                                    <ul className="space-y-2.5">
                                        {service.deliverables.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                <span className="flex-shrink-0 text-blue-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32">
                <Team />
            </div>
        </div>
    );
}
