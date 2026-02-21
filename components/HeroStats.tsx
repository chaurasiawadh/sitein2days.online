import React from 'react';
import { FolderCheck, Heart, Headphones, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        icon: FolderCheck,
        value: "50+",
        label: "Projects Delivered",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        icon: Heart,
        value: "100%",
        label: "Client Satisfaction",
        color: "text-pink-500",
        bg: "bg-pink-50"
    },
    {
        icon: Headphones,
        value: "24/7",
        label: "Support Available",
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        icon: TrendingUp,
        value: "5X",
        label: "Average ROI Increase",
        color: "text-green-600",
        bg: "bg-green-50"
    }
];

const HeroStats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-7xl mx-auto px-4 mt-10 md:mt-8"
        >
            <div className="bg-white rounded-3xl xl:rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-3 md:py-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-1 lg:gap-3 bg-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-1 justify-start md:justify-center relative group">
                            {/* Vertical divider for lg screens, hidden on last item */}
                            {index !== stats.length - 1 && (
                                <div className="lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gray-100/80 -mr-1.5"></div>
                            )}

                            <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110 duration-300`}>
                                <stat.icon className="w-5 h-5" strokeWidth={2.5} />
                            </div>
                            <div className="text-left">
                                <div className="text-xl font-bold text-gray-900 leading-tight tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mt-0 leading-none">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default HeroStats;
