import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import Link from 'next/link';

const InteractiveProducts: React.FC = () => {
    const products = [
        {
            name: "BerryFlow.io",
            desc: "Content automation platform with AI-powered workflows.",
            action: "Try the Quick Create feature",
            slug: "berryflow-io",
            color: "bg-purple-100 text-purple-900 border-purple-200"
        },
        {
            name: "Liquidity.io",
            desc: "Complete marketing automation suite with 12+ tools.",
            action: "Explore the dashboard",
            slug: "liquidity-io",
            color: "bg-blue-100 text-blue-900 border-blue-200"
        },
        {
            name: "Marchain.io",
            desc: "Blockchain infrastructure platform.",
            action: "Witness enterprise-grade web3",
            slug: "marchain-io",
            color: "bg-lime-100 text-lime-900 border-lime-200"
        }
    ];

    return (
        <section id="interactive" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white">Playground</span>
                    <h2 className="mt-6 text-4xl md:text-5xl font-black text-black">Experience Our Work, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Play Around</span></h2>
                    <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
                        Don't just read about what we build, experience it. Here are live products we've developed that you can explore right now.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <Link key={idx} href={`/portfolio/${product.slug}`}>
                            <div className={`h-full rounded-3xl p-8 border hover:shadow-xl transition-all hover:-translate-y-1 ${product.color}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-black">{product.name}</h3>
                                    <ExternalLink size={20} className="opacity-50" />
                                </div>
                                <p className="font-medium mb-8 opacity-80 min-h-[48px]">{product.desc}</p>

                                <div className="inline-flex items-center gap-2 font-bold text-sm bg-white/50 px-4 py-2 rounded-lg hover:bg-white transition-colors">
                                    <Play size={14} className="fill-current" />
                                    {product.action}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500">Also check out <span className="font-bold text-black">Definable.ai</span> and <span className="font-bold text-black">Arthik.money</span></p>
                </div>
            </div>
        </section>
    );
};

export default InteractiveProducts;
