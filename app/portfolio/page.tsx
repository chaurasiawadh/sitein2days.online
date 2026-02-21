'use client';

import React, { useState } from 'react';
import { CASE_STUDIES, ECOMMERCE_PORTFOLIO } from '../../constants';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudiesPage() {
    const [filter, setFilter] = useState('All Projects');

    const categories = ['All Projects', 'Custom AI Development', 'Mobile App', 'Store', 'E-commerce', 'AI Automation', 'Fintech', 'SaaS', 'Blockchain'];

    const allProjects = [
        ...CASE_STUDIES.map(s => ({ ...s, isEcommerce: false })),
        ...ECOMMERCE_PORTFOLIO.map(item => ({
            id: item.id,
            slug: item.title.toLowerCase().replace(/\s+/g, '-'),
            client: item.title,
            industry: item.category,
            services: item.tags,
            image: item.image,
            solution: item.tags.join(" • "),
            results: [],
            challenge: "",
            testimonial: "",
            testimonialAuthor: "",
            isEcommerce: true
        }))
    ];

    const filteredStudies = filter === 'All Projects'
        ? allProjects.filter(study => !study.isEcommerce) // Exclude shop items from "All Projects"
        : allProjects.filter(study => {
            if (filter === 'Store') return study.isEcommerce;
            if (filter === 'E-commerce') return !study.isEcommerce && (
                study.industry.toLowerCase().includes('e-commerce') ||
                study.services.some(s => s.toLowerCase().includes('e-commerce'))
            );

            return study.industry.toLowerCase().includes(filter.toLowerCase()) ||
                study.services.some(s => s.toLowerCase().includes(filter.toLowerCase()));
        });

    // Stagger container for list
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" as const } }
    };

    return (
        <>
            <div className="min-h-screen pt-16 pb-16 sm:pt-24 sm:pb-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="px-4 max-w-7xl mx-auto mb-8 sm:mb-16 text-center"
                >
                    <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white mb-6 inline-block">Portfolio</span>
                    <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Proven Excellence. <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Market-Defining Results.</span></h1>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">Explore how we partner with industry leaders and disruptive startups to transform complex technical challenges into seamless, award-winning digital experiences.</p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="px-4 max-w-7xl mx-auto mb-8 sm:mb-16"
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-black'
                                    }`}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 rounded-full border-2 border-transparent"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredStudies.map((study, idx) => (
                            <Link href={study.isEcommerce ? "#" : `/portfolio/${study.slug}`} key={study.id} className="block h-full">
                                <motion.div
                                    layout
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className={`group h-full flex flex-col transition-all duration-300 ${study.isEcommerce
                                        ? 'card-gradient rounded-3xl overflow-hidden border border-gray-200/50 shadow-card hover:shadow-glow translate-y-0 hover:-translate-y-2'
                                        : 'bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl'
                                        }`}
                                >
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                        {!study.isEcommerce && <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />}
                                        <Image
                                            src={study.image}
                                            alt={study.client}
                                            fill
                                            className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={idx < 6}
                                        />
                                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-black">
                                                {study.isEcommerce ? <ExternalLink size={20} /> : <ArrowRight size={20} />}
                                            </div>
                                        </div>
                                        {study.isEcommerce && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="mb-3">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full inline-block ${study.isEcommerce ? 'text-yellow-400' : 'text-gray-500 border border-gray-200'}`}>
                                                {study.industry}
                                            </span>
                                        </div>
                                        <h2 className={`text-xl font-black mb-2 transition-all duration-300 ${study.isEcommerce ? 'text-black group-hover:gradient-text' : 'text-black group-hover:text-purple-600'}`}>
                                            {study.client}
                                        </h2>
                                        <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed mb-4 flex-grow">
                                            {study.solution}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {study.services.slice(0, 3).map(s => (
                                                <span key={s} className={`text-[10px] font-medium px-3 py-1 rounded-full ${study.isEcommerce ? 'bg-gradient-secondary text-black' : 'text-gray-400 bg-gray-50 border border-gray-100'}`}>
                                                    {s}
                                                </span>
                                            ))}
                                            {!study.isEcommerce && study.services.length > 3 && (
                                                <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">+{study.services.length - 3} more</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </>
    );
}
