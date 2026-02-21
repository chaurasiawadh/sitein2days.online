import React from 'react';
import { Trophy, Handshake, Zap, Globe, Layers } from 'lucide-react';

const Stats: React.FC = () => {
    const stats = [
        {
            icon: Trophy,
            value: "5+",
            label: "Major Platforms Launched",
            desc: "From concept to production"
        },
        {
            icon: Handshake,
            value: "Partners",
            label: "Strategic Partnerships",
            desc: "Official partners with Marchain.io & BerryFlow.io"
        },
        {
            icon: Zap,
            value: "Hybrid",
            label: "Development Pioneers",
            desc: "Blending AI speed with quality"
        },
        {
            icon: Globe,
            value: "Multi",
            label: "Industry Experience",
            desc: "Fintech, SaaS, E-commerce, Web3"
        },
        {
            icon: Layers,
            value: "E2E",
            label: "End-to-End Expertise",
            desc: "Vision to Scale"
        }
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Track Records</span>, Not Just Products</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-accent">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-lg font-bold text-gray-200 mb-2">{stat.label}</div>
                            <div className="text-sm text-gray-400">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
