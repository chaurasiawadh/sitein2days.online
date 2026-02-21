'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Lightbulb, Handshake, Users } from 'lucide-react';
import Team from '@/components/Team';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-16 pb-8 md:pt-16 md:pb-8 px-4 overflow-hidden">
                {/* Background blobs similar to main hero */}
                <div className="absolute inset-0 z-0 bg-white overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-purple-50/50 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-8"
                    >
                        <SparklesIcon className="w-3 h-3" /> About Zenitho Labs
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8"
                    >
                        Building the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Digital Innovation
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
                    >
                        We're a passionate team of designers, developers, and strategists dedicated to transforming ideas into exceptional digital experiences. From startups to enterprises, we partner with businesses to build products that make an impact.
                    </motion.p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-lg bg-orange-50 text-orange-600 text-xs font-bold tracking-wider mb-6">
                            OUR STORY
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Driven by Innovation, <br /> Guided by Excellence
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, Zenitho Labs has grown into a trusted partner for companies looking to accelerate their digital transformation.
                            </p>
                            <p>
                                Our journey began with a simple belief: that great technology should be accessible, understandable, and tailored to solve real problems. Today, we've delivered 50+ successful projects across industries, from AI-powered platforms to blockchain solutions.
                            </p>
                            <p>
                                What sets us apart is our commitment to speed without compromise. We combine agile methodologies with deep technical expertise to deliver products that not only meet expectations but exceed them.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Abstract Card representation of 'Our Team' image */}
                        <div className="aspect-[4/3] w-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-xl -ml-10 -mb-10"></div>

                            <div className="text-center relative z-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-6 ring-4 ring-white/10">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Our Team</h3>
                                <p className="text-blue-100 text-lg font-medium">Meet the Experts Behind Our Success</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-lg bg-red-50 text-red-500 text-xs font-bold tracking-wider mb-4">
                        OUR VALUES
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        What Drives Us Forward
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Our core values shape every decision we make and every project we undertake.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 md:p-10 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 group-hover:bg-black group-hover:text-white transition-colors duration-300 text-slate-900">
                                    <value.icon className="w-6 h-6" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-black">
                                {value.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed group-hover:text-slate-600">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <Team />

        </div>
    );
};

// Helper for the Sparkle icon in the "About Zenitho Labs" badge
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
        >
            <path d="M12 2L14.39 9.39L22 12L14.39 14.61L12 22L9.61 14.61L2 12L9.61 9.39L12 2Z" />
        </svg>
    );
}

const values = [
    {
        icon: Zap,
        title: "Speed & Agility",
        description: "We move fast without breaking things. Our agile approach ensures rapid delivery while maintaining the highest quality standards."
    },
    {
        icon: Target,
        title: "Clarity & Transparency",
        description: "Clear communication, honest timelines, and transparent processes. You'll always know where your project stands."
    },
    {
        icon: Lightbulb,
        title: "Innovation First",
        description: "We stay ahead of the curve, leveraging the latest technologies to give you a competitive advantage in your market."
    },
    {
        icon: Handshake,
        title: "Partnership Mindset",
        description: "Your success is our success. We're not just vendors-we're partners invested in your long-term growth."
    }
];

export default AboutPage;
