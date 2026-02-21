import React from 'react';

const Partners: React.FC = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-12 uppercase tracking-widest"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 normal-case">Trusted by Ambitious Teams</span></h2>

                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Marchain.io */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg"></div> {/* Placeholder logo */}
                        <div className="text-left">
                            <div className="font-black text-2xl text-black">Marchain.io</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Blockchain Infrastructure</div>
                        </div>
                    </div>

                    {/* BerryFlow.io */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg"></div> {/* Placeholder logo */}
                        <div className="text-left">
                            <div className="font-black text-2xl text-black">BerryFlow.io</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Content Automation</div>
                        </div>
                    </div>
                </div>

                <p className="mt-12 text-sm text-gray-400 font-medium">Building the future together, one product at a time.</p>
            </div>
        </section>
    );
};

export default Partners;
