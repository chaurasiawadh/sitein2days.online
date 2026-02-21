import React from 'react';
import { DIFFERENTIATORS } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-black sm:text-4xl tracking-tight">Why companies trust Zenitho.</h2>
          <p className="mt-4 text-xl text-gray-500">
            We're not just another agency, we're your growth partner committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {DIFFERENTIATORS.map((diff) => (
            <div key={diff.id} className="flex gap-5 group">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-accent transition-colors duration-300 flex items-center justify-center text-black border border-gray-100">
                  <diff.icon size={26} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">{diff.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;