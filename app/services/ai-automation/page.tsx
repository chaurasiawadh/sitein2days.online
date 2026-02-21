import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle2, MessageSquare, Database, FileCode, BarChart3, Bot } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Automation Services | Custom AI Agents & Workflow Automation',
    description: 'Scale operations with Zenitho Labs\' AI automation services. We build custom AI agents using LangChain to automate support, data, and workflows. Save 40% on ops costs.',
    openGraph: {
        title: 'Automate Your Biz: AI Agents for Support & Ops | Zenitho Labs',
        description: 'Stop hiring for repetitive tasks. Our AI agents automate 75% of support tickets and manual workflows. See how much you can save.',
        url: '/services/ai-automation',
        siteName: 'Zenitho Labs',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/opengraph-image.jpg?v=2',
                width: 1200,
                height: 630,
                alt: 'Zenitho Labs AI Automation Services',
            },
        ],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Automation Services',
    provider: {
        '@type': 'Organization',
        name: 'Zenitho Labs',
        url: 'https://zenitholabs.com'
    },
    areaServed: 'Worldwide',
    description: 'Custom AI automation services using LangChain and LangGraph to build autonomous agents for customer support and workflow orchestration.',
    offers: {
        '@type': 'Offer',
        description: 'Free Workflow Automation Assessment'
    }
};

export default function AIAutomationPage() {
    return (
        <>
            <Script
                id="ai-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-purple-50/50 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-8">
                            <Bot className="w-4 h-4" />
                            <span>Enterprise-Grade AI Automation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                            Scale Your Operations <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Without Hiring More People</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Stop drowning in manual tasks. We build intelligent <span className="font-semibold text-slate-900">AI agents</span> that automate complex workflows, slash operational costs by 40%, and free your team to focus on growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
                            >
                                Get Your Free Workflow Assessment
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem / Solution Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                The Cost of Manual Ops: <br />
                                <span className="text-red-500">Bottlenecks & Burnout</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                You’re scaling, but your operations can’t keep up. Your team is buried in support tickets, manual data processing, and repetitive admin work. Hiring more staff kills your margins, but doing nothing stalls your growth.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Expensive headcount scaling linearly with revenue",
                                    "Slow turnaround times affecting customer satisfaction",
                                    "Process inconsistencies and human error",
                                    "Key team members stuck doing \"busy work\""
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-6 h-6 text-red-400 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Solution: Autonomous Agents</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Thinking, Not Just Scripting</h4>
                                        <p className="text-slate-600">We prioritize LangChain & LangGraph to build agents that can reason, verify their work, and handle edge cases.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                                        <Database className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Full Stack Integration</h4>
                                        <p className="text-slate-600">Our agents don't live in a silo. They connect directly to your database, API, CRM, and internal tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Core Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">What We Automate</h2>
                        <p className="text-xl text-slate-600">From customer support to complex back-office workflows, we build the digital workforce of the future.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                                <MessageSquare className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Support Automation</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Handle 75% of Tier-1 tickets instantly. Our agents understand context, intent, and can act on behalf of the user.
                            </p>
                            <ul className="space-y-3">
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Instant Triage & Routing</li>
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> 24/7 Resolution</li>
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Multi-channel (Web/WhatsApp)</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10 transition-all group">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors">
                                <FileCode className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Workflow Orchestration</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Connect your entire tech stack. We seamlessly integrate your tools (CRM, ERP, Slack) to automate complex logic.
                            </p>
                            <ul className="space-y-3">
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Data Extraction (OCR)</li>
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Approval Loops</li>
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Intelligent Routing</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-500/10 transition-all group">
                            <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-600 transition-colors">
                                <BarChart3 className="w-7 h-7 text-pink-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom AI Agents</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Need something unique? We build bespoke agents tailored to your specific operational nuances and data.
                            </p>
                            <ul className="space-y-3">
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full" /> LangChain & LangGraph</li>
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full" /> Private LLM Deployment</li>
                                <li className="text-sm text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full" /> Scalable Architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / ROI Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/20 blur-[100px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">300%</div>
                            <div className="text-xl font-bold mb-2">ROI in 6 Months</div>
                            <p className="text-slate-400 text-sm">Most clients see full payback <br />within the first two quarters.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">75%</div>
                            <div className="text-xl font-bold mb-2">Reduction in Tickets</div>
                            <p className="text-slate-400 text-sm">Automate the repetitive Tier-1 <br />queries completely.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-4">25h+</div>
                            <div className="text-xl font-bold mb-2">Saved Per Week</div>
                            <p className="text-slate-400 text-sm">Per operations employee, freeing them <br />for high-value work.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Ready to Automate Your Operations?</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Don't let manual work hold you back. Get a verified AI Automation Audit to see exactly where you can save time and money.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg shadow-blue-200"
                        >
                            Book Your Workflow Audit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
