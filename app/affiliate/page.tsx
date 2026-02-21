'use client';

import React from 'react';
import { Share2, DollarSign, CheckCircle, TrendingUp, Mail } from 'lucide-react';

export default function AffiliatePage() {
    return (
        <main className="pt-32 pb-20">
            <div className="px-4 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full text-accent mb-8 shadow-xl">
                        <Share2 size={36} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight">Refer & Earn: <br />Partner with Zenitho Labs</h1>
                    <p className="text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
                        Know someone who needs our help? Get rewarded for making meaningful connections.
                    </p>
                </div>

                {/* How It Works */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-4">How It Works</h2>
                        <h3 className="text-3xl text-accent font-bold mb-8">20% Commission on Every Project</h3>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-black text-xl flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Refer a client</h4>
                                    <p className="text-gray-600">Share ZenithLabs with your network.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-black text-xl flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">They start a project</h4>
                                    <p className="text-gray-600">When they sign with us, you earn.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">3</div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Get paid</h4>
                                    <p className="text-gray-600">Receive 20% of the total project cost.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                        <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><DollarSign className="text-green-600" /> Example Earnings</h3>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center border border-gray-100">
                                <span className="font-medium text-gray-500">$10,000 project</span>
                                <span className="font-black text-2xl text-green-600">$2,000</span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center border border-gray-100 scale-105 relative z-10 border-accent/20 ring-1 ring-accent/20">
                                <span className="font-medium text-gray-500">$50,000 project</span>
                                <span className="font-black text-2xl text-green-600">$10,000</span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center border border-gray-100">
                                <span className="font-medium text-gray-500">$100,000 project</span>
                                <span className="font-black text-2xl text-green-600">$20,000</span>
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-400 mt-6 font-medium uppercase tracking-wider">Unlimited earning potential</p>
                    </div>
                </div>

                {/* Why Refer */}
                <div className="bg-black text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden text-center mb-20">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-12">Why Refer ZenithLabs?</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                                <CheckCircle className="text-accent mb-6" size={32} />
                                <p className="font-medium text-lg">You're recommending quality work you can stand behind.</p>
                            </div>
                            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                                <TrendingUp className="text-accent mb-6" size={32} />
                                <p className="font-medium text-lg">Your referral gets a trusted partner who delivers.</p>
                            </div>
                            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                                <DollarSign className="text-accent mb-6" size={32} />
                                <p className="font-medium text-lg">You earn meaningful income for genuine connections.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-black mb-6">Interested in our affiliate program?</h2>
                    <a href="mailto:sales@zenitholabs.com?subject=Affiliate%20Partnership" className="inline-flex items-center gap-3 bg-black text-white px-8 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                        <Mail /> Email us to Join
                    </a>
                    <p className="mt-6 text-gray-500 font-medium">
                        Email us at <span className="text-black font-bold">sales@zenitholabs.com</span> with "Affiliate Partnership" in the subject line.
                    </p>
                </div>

            </div>
        </main>
    );
}
