import React from 'react';
import { ECOMMERCE_PORTFOLIO } from '../constants';

const ECommercePortfolio: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ECOMMERCE_PORTFOLIO.map((item) => (
                <div key={item.id} className="group" style={{ opacity: 1, transform: 'none' }}>
                    <div className="card-gradient rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mt-2 group-hover:gradient-text transition-all duration-300 px-2">{item.title}</h3>
                        <div className="p-2 pt-0">
                            <div className="text-xs uppercase tracking-widest text-yellow-400 py-2 pb-2.5">{item.category}</div>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-black mb-3">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ECommercePortfolio;
