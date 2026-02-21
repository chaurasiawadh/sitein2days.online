import React from 'react';
import { PAIN_POINTS } from '../constants';
import { AlertCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white inline-block mb-6">
            The Reality Check
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.1] mb-6">
            Is your business hitting a wall?
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            You're not alone. These are the most common obstacles holding businesses back from growth, and exactly what we solve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.id}
              className="group relative bg-gray-50 rounded-[2rem] p-8 transition-all duration-300 hover:bg-black hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-black"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black mb-6 shadow-sm border border-gray-100 group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300">
                <point.icon size={26} strokeWidth={2} />
              </div>

              {/* Text */}
              <h3 className="text-xl font-black text-black mb-4 leading-tight group-hover:text-white transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-400 transition-colors duration-300">
                {point.description}
              </p>

              {/* Decorative corner icon for hover state */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <AlertCircle size={20} className="text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;