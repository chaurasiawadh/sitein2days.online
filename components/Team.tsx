'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    role: string;
    experience: string;
    image: string;
    linkedin?: string;
}

const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: "Marshal Tavakar",
            role: "Director of Product",
            experience: "10+",
            image: "/team/marshal-tavakar.png",
            linkedin: "https://www.linkedin.com/in/marshal-tavakar/"
        },
        {
            name: "Awadhesh Chaurasia",
            role: "Engineering Manager",
            experience: "6+",
            image: "/team/awadhesh-chaurasia.png",
            linkedin: "https://www.linkedin.com/in/chaurasiawadh/"
        },
        {
            name: "Pratham Srivastava",
            role: "AI Expert",
            experience: "4+",
            image: "/team/pratham-srivastava.png",
            linkedin: "https://www.linkedin.com/in/prathamsrivastavas/"
        },
        {
            name: "Tanvi Gupta",
            role: "Social Media Expert",
            experience: "5+",
            image: "/team/tanvi-gupta.png",
            linkedin: "https://www.linkedin.com/in/tanvi-gupta-44398a192/"
        },
        {
            name: "Ravee Chaudhary",
            role: "Senior Data Scientist",
            experience: "12+",
            image: "/team/ravi.png",
            linkedin: "https://www.linkedin.com/in/ravee-chaudhary/"
        }
    ];

    const teamStats = [
        { role: "Frontend Engineers", count: "8+" },
        { role: "Backend Developers", count: "6+" },
        { role: "UI/UX Designers", count: "2+" },
        { role: "DevOps", count: "2" },
        { role: "Marketing", count: "6+" }
    ];

    return (
        <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white mb-6 inline-block">
                        Meet the Team
                    </span>
                    <h2 className="mt-6 text-4xl md:text-5xl font-black text-black tracking-tight">
                        The People Behind the{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                            Innovation
                        </span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-500">
                        Our diverse team of experts brings together decades of combined experience in technology, design, and business strategy.
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            {/* Profile Image */}
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="relative rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>

                            {/* Member Info */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-purple-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-purple-600 font-semibold mb-3">
                                    {member.role}
                                </p>

                                {/* Experience Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-4">
                                    <span className="text-2xl font-bold text-black">{member.experience}</span>
                                    <span className="text-sm text-gray-600">Years Experience</span>
                                </div>

                                {/* LinkedIn Link */}
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mt-2 ml-4"
                                    >
                                        <Linkedin size={20} />
                                        <span className="text-sm font-medium">Connect</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Team Statistics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
                            Our Extended Team
                        </h3>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            A talented pool of specialists ready to bring your vision to life
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {teamStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">
                                    {stat.count}
                                </div>
                                <div className="text-sm font-semibold text-gray-700">
                                    {stat.role}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
