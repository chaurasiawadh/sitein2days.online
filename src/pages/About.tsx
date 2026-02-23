import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Team from '../components/Team';

const values = [
    {
        title: "Radical Transparency",
        description: "No black boxes. You see every line of code, every decision, every trade-off. We work in public.",
        icon: "🔍",
        bg: "bg-blue-50"
    },
    {
        title: "Delivery Excellence",
        description: "We don't just build fast, we build right. Quality is non-negotiable, and we back it up with results.",
        icon: "🚀",
        bg: "bg-purple-50"
    },
    {
        title: "Long-Term Partnership",
        description: "We're not a vendor. We're your technical co-founders. Your success is our success, full stop.",
        icon: "🤝",
        bg: "bg-green-50"
    },
    {
        title: "Continuous Innovation",
        description: "We stay ahead of the curve so you don't have to. Our team is always learning, always building.",
        icon: "⚡",
        bg: "bg-orange-50"
    }
];

export default function About() {
    return (
        <main className="bg-white text-black">

            {/* Hero Section */}
            <section className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl"
                >
                    <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white mb-8 inline-block">
                        About Us
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mt-6 mb-8">
                        We Build Digital Products That{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                            Scale Businesses
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                        We're a product engineering studio on a mission to eliminate operational waste through intelligent automation. Founded in 2023, we've helped 50+ businesses transform their operations.
                    </p>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Our Story</h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                sitein2days.online was born out of frustration. Our founders watched talented teams spend 80% of their time on repetitive, low-value tasks — the kind of work that computers should be doing.
                            </p>
                            <p>
                                We started with a simple premise: what if we could build intelligent systems that handle the routine, so your team can focus on the remarkable?
                            </p>
                            <p>
                                Today, we're a full-stack product studio with deep expertise in AI automation, Shopify e-commerce, and enterprise data analytics. We don't just code, we architect growth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { value: "50+", label: "Projects Delivered" },
                            { value: "100%", label: "Client Satisfaction" },
                            { value: "3+", label: "Years of Excellence" },
                            { value: "15+", label: "Team Members" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-4 py-2 bg-white">
                        <Sparkles size={14} />
                        Our Values
                    </span>
                    <h2 className="mt-6 text-4xl md:text-5xl font-black text-black">What We Stand For</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all group"
                        >
                            <div className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto text-center bg-black rounded-[3rem] p-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-[100px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Scale Your Business?</h2>
                        <p className="text-xl text-gray-400 mb-10">Let's build something extraordinary together.</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
                        >
                            Start Your Journey
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
