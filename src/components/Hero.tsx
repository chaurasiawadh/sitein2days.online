import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroStats from './HeroStats';
import anime from 'animejs';

interface HeroProps {
    onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
    useEffect(() => {
        const tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 800
        });

        tl.add({
            targets: '.hero-badge',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: 100
        })
            .add({
                targets: '.hero-heading',
                opacity: [0, 1],
                translateY: [20, 0],
            }, '-=600')
            .add({
                targets: '.hero-desc',
                opacity: [0, 1],
                translateY: [20, 0],
            }, '-=600')
            .add({
                targets: '.hero-bullets',
                opacity: [0, 1],
                translateY: [20, 0],
            }, '-=600')
            .add({
                targets: '.hero-buttons',
                opacity: [0, 1],
                translateY: [20, 0],
            }, '-=600');
    }, []);

    return (
        <section className="relative pt-16 pb-12 md:pt-18 md:pb-20 overflow-visible">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-white overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-purple-100/60 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-pink-100/50 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Trust Badge Line */}
                    <div className="hero-badge mb-6 md:mb-8 opacity-0">
                        <span className="text-xs sm:text-sm font-medium text-gray-600 tracking-wide px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                            Trusted by innovative teams at <span className="text-black font-semibold">Liquidity.io</span>, <span className="text-black font-semibold">Definable.ai</span>, <a href="https://www.nixet.io/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-accent transition-colors">Nixet.io</a>, <Link to="#interactive" className="text-black font-bold hover:text-accent transition-colors underline decoration-dotted underline-offset-4">& more</Link>
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-heading opacity-0 text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-black tracking-tighter leading-[1.1] mb-6 md:mb-8">
                        Automate Your Operations <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 pr-2 pb-2 box-decoration-clone leading-[1.2]">with Intelligent AI Agents</span>
                    </h1>

                    <p className="hero-desc opacity-0 text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
                        Scale your business without scaling headcount. We offer <strong className="font-semibold text-gray-700">budget-friendly web services</strong> and <strong className="font-semibold text-gray-700">quick website development</strong> to build autonomous workflows that save 20-40 hours/week.
                    </p>

                    {/* Benefit Bullets */}
                    <div className="hero-bullets opacity-0 flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium text-gray-600">
                        <span className="flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full border border-purple-100 text-purple-700">
                            🚀 Reduce tickets by 75%
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-100 text-blue-700">
                            ⚡ 100% Automated Data Entry
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-pink-50 rounded-full border border-pink-100 text-pink-700">
                            🤖 Orchestrate Complex Workflows
                        </span>
                    </div>

                    <div className="hero-buttons opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                        <button
                            onClick={onOpenContact}
                            className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black rounded-full hover:scale-105 hover:shadow-2xl focus:outline-none"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            to="/portfolio"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 focus:outline-none shadow-sm"
                        >
                            Explore Our Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Hero Stats Section */}
                <HeroStats />
            </div>
        </section>
    );
};

export default Hero;
