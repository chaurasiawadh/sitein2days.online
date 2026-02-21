'use client';

import React, { useState } from 'react';
import { getFAQSchema, JsonLdScript } from '@/lib/json-ld';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQCategory {
    title: string;
    questions: {
        id: string;
        question: string;
        answer: string;
    }[];
}

const FAQ_DATA: FAQCategory[] = [
    {
        title: "Custom AI Development",
        questions: [
            {
                id: "ai-1",
                question: "What types of AI applications can you build?",
                answer: "We build a wide range of AI applications including custom SaaS platforms, enterprise dashboards, NLP-powered tools, predictive analytics engines, and computer vision systems. We tailor the solution to your specific business needs."
            },
            {
                id: "ai-2",
                question: "How do you ensure the security of AI models?",
                answer: "Security is a top priority. We use industry-standard encryption, secure API endpoints, and strictly adhere to data privacy regulations (GDPR/CCPA). We also implement robust access controls and sanitize data before processing."
            },
            {
                id: "ai-3",
                question: "Can you integrate AI into my existing software?",
                answer: "Yes, we specialize in integrating AI capabilities into legacy capabilities. Whether it's adding a chatbot to your website or an intelligent search to your internal tools, we can seamlessly connect AI services via APIs."
            },
            {
                id: "ai-4",
                question: "What is the typical timeline for an AI development project?",
                answer: "Timelines vary by complexity. A proof-of-concept (POC) might take 2-4 weeks, while a full-scale enterprise application could take 3-6 months. We provide detailed milestones and sprints during the planning phase."
            },
            {
                id: "ai-5",
                question: "Do I own the intellectual property (IP) of the AI solution?",
                answer: "Yes, for custom development projects, you own 100% of the code and intellectual property once the project is fully paid for. We function as your technical partner, but the asset is yours."
            },
            {
                id: "ai-6",
                question: "What technology stack do you use for AI development?",
                answer: "We use modern stacks such as Python (TensorFlow, PyTorch, LangChain), Node.js, and React provided by cloud infrastructure like AWS, Azure, or Google Cloud. This ensures scalability and maintainability."
            },
            {
                id: "ai-7",
                question: "Can you help refine our AI product idea before building?",
                answer: "Absolutely. We offer a 'Product Vision Analysis' phase where we validate your idea, assess technical feasibility, and help you define the MVP features to ensure market fit."
            },
            {
                id: "ai-8",
                question: "Do you build mobile apps for iOS and Android?",
                answer: "Yes, we build cross-platform mobile applications using React Native, allowing us to deploy to both iOS and Android from a single codebase. This approach reduces development time and cost while maintaining native performance and user experience."
            },
            {
                id: "ai-9",
                question: "What is a Progressive Web App (PWA) and should I build one?",
                answer: "A PWA is a web application that works like a native app, offering offline capabilities, push notifications, and home screen installation. PWAs are perfect if you want app-like features without the complexity of app store submissions. They work across all devices and are more cost-effective than building separate native apps."
            },
            {
                id: "ai-10",
                question: "Can you convert my existing web app into a mobile app?",
                answer: "Yes, we can transform your existing web application into a React Native mobile app or a PWA. We'll assess your current architecture and recommend the best approach based on your features, budget, and target audience."
            }
        ]
    },
    {
        title: "General AI Automation",
        questions: [
            {
                id: "gen-auto-1",
                question: "What is AI automation and how can it help my business?",
                answer: "AI automation uses intelligent software to perform tasks that typically require human cognition, such as understanding text, making decisions, or processing complex data. It helps your business by reducing manual labor, eliminating errors, and speeding up operations 24/7."
            },
            {
                id: "gen-auto-2",
                question: "Which parts of my business can you automate with AI?",
                answer: "We can automate a vast array of functions including customer support (chatbots), repetitive data entry, invoice processing, lead qualification, social media scheduling, email management, and even complex reporting workflows."
            },
            {
                id: "gen-auto-3",
                question: "Do you offer AI automation solutions for small businesses and startups?",
                answer: "Yes! We work with businesses of all sizes. Our solutions are scalable, meaning we can start with a simple automation for a specific pain point and expand as your business grows."
            },
            {
                id: "gen-auto-4",
                question: "Do I need to know how to code to use your AI automations?",
                answer: "Not at all. We build user-friendly interfaces or 'set-and-forget' background systems. We also provide full training and documentation so you can manage the results without touching a single line of code."
            },
            {
                id: "gen-auto-5",
                question: "Can your AI automations integrate with my existing tools like CRM, helpdesk, or e-commerce platform?",
                answer: "Yes, integration is our specialty. We connect with popular tools like Salesforce, HubSpot, Zendesk, Shopify, Slack, and virtually any software that has an API."
            },
            {
                id: "gen-auto-6",
                question: "How can AI automation improve customer support and lead generation?",
                answer: "AI agents can instantly respond to customer queries 24/7, resolve common issues without human intervention, and qualify leads by asking the right questions before passing them to your sales team."
            },
            {
                id: "gen-auto-7",
                question: "Can AI automation help with marketing tasks like email, social media, and content?",
                answer: "Yes. We can build agents that draft email newsletters, schedule social media posts based on trends, and even generate blog content or ad copy, all adhering to your brand voice."
            },
            {
                id: "gen-auto-8",
                question: "Do you build AI automation for specific industries like e-commerce, finance, HR, or healthcare?",
                answer: "We have experience across multiple verticals. Whether it's fraud detection in finance, candidate screening in HR, or product recommendations in e-commerce, we tailor the logic to your industry's specific requirements."
            },
            {
                id: "gen-auto-9",
                question: "How do you handle data security and compliance in AI automations?",
                answer: "We implement strict security protocols including data encryption and secure access management. For regulated industries, we ensure our solutions comply with relevant standards like GDPR, HIPAA, or SOC2."
            },
            {
                id: "gen-auto-10",
                question: "How do you price AI automation projects?",
                answer: "Pricing is project-based or value-based. Simple automations might be a one-time setup fee, while complex, ongoing systems might involve a monthly maintenance retainer. We find a model that aligns with the ROI you'll achieve."
            },
            {
                id: "gen-auto-11",
                question: "How can I calculate ROI on AI automation?",
                answer: "We help you calculate this by looking at 'hours saved' x 'hourly cost of labor'. Additionally, we factor in the increased revenue from faster lead response times and the value of error reduction."
            },
            {
                id: "gen-auto-12",
                question: "Do you offer demos, pilots, or trial projects for AI automation?",
                answer: "Yes, for qualified opportunities, we can build a small-scale pilot or 'Proof of Concept' so you can see the automation in action before committing to a full deployment."
            }
        ]
    },
    {
        title: "AI Workflows and Orchestration",
        questions: [
            {
                id: "wf-1",
                question: "What is an AI workflow and how is it different from basic automation?",
                answer: "Basic automation handles single, linear tasks (e.g., 'if this, then that'). An AI workflow orchestrates multiple steps, makes complex decisions, and can handle ambiguity—like reading an email, deciding if it's urgent, researching a reply, and then drafting a response for you."
            },
            {
                id: "wf-2",
                question: "Can you help design AI workflows for my existing processes?",
                answer: "Yes. We start by mapping out your current manual processes. Then, we identify bottlenecks and design an intelligent workflow that mimics your best employee's decision-making process."
            },
            {
                id: "wf-3",
                question: "Do I need technical skills to manage the AI workflows you build?",
                answer: "No. We build dashboards and control panels that allow you to oversee the workflows, approve sensitive actions, and view analytics without needing technical skills."
            },
            {
                id: "wf-4",
                question: "Can AI workflows run in the cloud and connect to my data sources and analytics tools?",
                answer: "Absolutely. We typically deploy workflows on secure cloud infrastructure that runs 24/7. They can pull data from your databases, spreadsheets, or APIs and push results to your analytics dashboards like Tableau or Looker."
            },
            {
                id: "wf-5",
                question: "How do you keep AI workflows secure, reliable, and compliant?",
                answer: "We build in 'human-in-the-loop' checkpoints for sensitive decisions, use encrypted connections, and implement robust error handling so the workflow rarely fails. We also maintain audit logs of every action taken by the AI."
            },
            {
                id: "wf-6",
                question: "Can you help us migrate existing manual or rule-based processes into AI workflows?",
                answer: "Yes. Whether you're moving from spreadsheets or legacy software, we can re-engineer your processes to leverage modern AI, often making them 10x faster and more cost-effective."
            },
            {
                id: "wf-7",
                question: "Do you offer consulting to plan an AI automation and workflow roadmap?",
                answer: "Yes, we offer strategic consulting sessions where we audit your operations and provide a roadmap of high-impact opportunities for automation, prioritized by ROI."
            },
            {
                id: "wf-8",
                question: "What kind of support do you provide after AI workflows are deployed?",
                answer: "We offer ongoing monitoring and maintenance packages. Since AI models evolve, we also provide periodic updates and re-tuning to ensure your workflows remain efficient and accurate over time."
            }
        ]
    },
    {
        title: "Shopify Development",
        questions: [
            {
                id: "shopify-1",
                question: "Can you migrate my store to Shopify from another platform?",
                answer: "Absolutely. We handle end-to-end migrations from platforms like WooCommerce, Magento, or BigCommerce to Shopify. We ensure all your product data, customer history, and order information is transferred securely."
            },
            {
                id: "shopify-2",
                question: "Do you build custom Shopify apps?",
                answer: "Yes, we build custom public and private Shopify apps to extend the functionality of your store. This includes custom payment gateways, inventory management tools, and personalized shopping experiences."
            },
            {
                id: "shopify-3",
                question: "How do you optimize Shopify stores for speed?",
                answer: "We optimize images, minify code, leverage browser caching, and use efficient coding practices for themes. We also analyze app usage to remove performance bottlenecks, ensuring a fast loading experience for higher conversions."
            },
            {
                id: "shopify-4",
                question: "Can you integrate ERP systems with Shopify?",
                answer: "Yes, we have extensive experience connecting Shopify with ERPs like NetSuite, SAP, and Microsoft Dynamics. This ensures your inventory, orders, and financial data stay in sync across your business."
            },
            {
                id: "shopify-5",
                question: "Do you offer ongoing maintenance for Shopify stores?",
                answer: "We do. Our retention packages include regular theme updates, app audits, speed monitoring, and small feature additions to keep your store running smoothly and securely."
            },
            {
                id: "shopify-6",
                question: "Can you help with Shopify Plus features?",
                answer: "Yes, we are experienced with Shopify Plus exclusive features like Checkout Extensibility, B2B wholesale channels, and Launchpad for flash sales. We help you get the most out of your enterprise plan."
            }
        ]
    },
    {
        title: "Product Documentation",
        questions: [
            {
                id: "doc-1",
                question: "What format do you deliver documentation in?",
                answer: "We deliver documentation in various formats including Markdown, HTML, PDF, or integrated directly into tools like GitBook or Notion. We choose the format that best fits your workflow."
            },
            {
                id: "doc-2",
                question: "Can you help documenting internal processes?",
                answer: "Yes, we create comprehensive internal knowledge bases (wikis) that standardize your operations. This is crucial for onboarding new employees and maintaining consistency as you scale."
            },
            {
                id: "doc-3",
                question: "How do you keep documentation up to date?",
                answer: "We can set up a maintenance schedule or integrate documentation updates into your CI/CD pipeline. We also offer ongoing support packages to review and update docs as your product evolves."
            },
            {
                id: "doc-4",
                question: "Do you create video tutorials or interactive guides?",
                answer: "Yes, we often produce high-quality screencasts, Loom videos, and interactive walkthroughs to complement written guides. Visual learning is often more effective for complex user flows."
            }
        ]
    },
    {
        title: "Product Profitability & Vision Analysis",
        questions: [
            {
                id: "vision-1",
                question: "What is included in the market analysis?",
                answer: "Our market analysis includes TAM/SAM/SOM calculations, competitor landscape mapping, trend analysis, and customer persona identification. We provide data-backed insights to validate your business opportunity."
            },
            {
                id: "vision-2",
                question: "How long does the validation process take?",
                answer: "A typical validation and analysis phase takes 1-2 weeks. We move quickly to give you a 'go' or 'no-go' signal before you invest significant capital in development."
            },
            {
                id: "vision-3",
                question: "Can you help pivot an existing product?",
                answer: "Yes. We analyze your current metrics and user feedback to identify why growth has stalled. We then propose strategic pivots—whether it's a new feature set, a different target audience, or a new business model."
            },
            {
                id: "vision-4",
                question: "What deliverables do I get at the end of the analysis?",
                answer: "You receive a comprehensive report detailing market research, financial projections, a product roadmap, and a risk assessment. This document is often suitable for presenting to investors or stakeholders."
            }
        ]
    },
    {
        title: "Product Growth & Marketing",
        questions: [
            {
                id: "growth-1",
                question: "What channels do you focus on for growth?",
                answer: "We focus on a mix of organic and paid channels tailored to your audience. This often includes SEO, content marketing, LinkedIn/Twitter strategies, and targeted paid ads if the unit economics make sense."
            },
            {
                id: "growth-2",
                question: "How do you measure ROI on marketing efforts?",
                answer: "We set up comprehensive analytics (Google Analytics, Mixpanel, etc.) to track every user action. We look at CAC (Customer Acquisition Cost) vs. LTV (Lifetime Value) to ensure every marketing dollar is generating a return."
            },
            {
                id: "growth-3",
                question: "Do you offer SEO services?",
                answer: "Yes, our SEO services cover technical on-page optimization, content strategy, and authority building. We aim for long-term sustainable traffic rather than quick, risky hacks."
            },
            {
                id: "growth-4",
                question: "How soon can we expect results from growth marketing?",
                answer: "Paid channels can yield immediate traffic, while organic strategies like SEO and content marketing typically take 3-6 months to show significant compounding growth. We balance both for short-term wins and long-term stability."
            }
        ]
    }
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState("");

    const toggleItem = (id: string) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Filter FAQs based on search
    const filteredFAQs = FAQ_DATA.map(category => ({
        ...category,
        questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )

    })).filter(category => category.questions.length > 0);

    const allQuestions = FAQ_DATA.flatMap(category => category.questions);
    const faqSchema = getFAQSchema(allQuestions);

    return (
        <>
            <JsonLdScript data={faqSchema} id="faq-schema" />
            <div className="min-h-screen bg-white pt-10 pb-8">

                {/* Header Section */}
                <div className="px-4 max-w-7xl mx-auto mb-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">FAQs</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Got questions? We have got answers. If you do not find what you are looking for, feel free to reach out.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-6 max-w-xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm text-gray-700"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                {/* Questions Section */}
                <div className="px-4 max-w-4xl mx-auto space-y-6">
                    {filteredFAQs.map((category, catIndex) => (
                        <div key={catIndex}>
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                            </div>

                            <div className="space-y-4">
                                {category.questions.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={false}
                                        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openItems[item.id]
                                            ? 'border-blue-200 bg-blue-50/30'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleItem(item.id)}
                                            className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                        >
                                            <span className={`text-lg font-medium pr-8 ${openItems[item.id] ? 'text-blue-600' : 'text-gray-800'}`}>
                                                {item.question}
                                            </span>
                                            <div className={`flex-shrink-0 transition-transform duration-300 ${openItems[item.id] ? 'rotate-180' : ''}`}>
                                                <ChevronDown className={`w-5 h-5 ${openItems[item.id] ? 'text-blue-600' : 'text-gray-400'}`} />
                                            </div>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {openItems[item.id] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {filteredFAQs.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No questions found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
