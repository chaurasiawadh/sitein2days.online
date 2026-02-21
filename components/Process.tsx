import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="culture" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white">Methodology</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Vision to Scale.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            One team. One mission. Your success. We guide you through the entire lifecycle.
          </p>
        </div>



        {/* Compact Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            // Define colors for each step
            const colors = [
              { bg: 'bg-purple-600', text: 'text-purple-600', border: 'group-hover:border-purple-200' },
              { bg: 'bg-blue-600', text: 'text-blue-600', border: 'group-hover:border-blue-200' },
              { bg: 'bg-pink-600', text: 'text-pink-600', border: 'group-hover:border-pink-200' },
              { bg: 'bg-teal-600', text: 'text-teal-600', border: 'group-hover:border-teal-200' },
              { bg: 'bg-orange-600', text: 'text-orange-600', border: 'group-hover:border-orange-200' },
              { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'group-hover:border-indigo-200' },
            ];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden`}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-5xl font-black text-gray-100 group-hover:text-gray-50 transition-colors pointer-events-none select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${color.bg} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon size={24} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:${color.text} transition-colors`}>{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 mb-2">4-5 Days</div>
            <div className="text-gray-900 font-bold text-base tracking-tight whitespace-nowrap">Customised Strategic Development</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2">15-20 Days</div>
            <div className="text-gray-900 font-bold text-base tracking-tight whitespace-nowrap">Full Implementation</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 mb-2">30+ Days</div>
            <div className="text-gray-900 font-bold text-base tracking-tight whitespace-nowrap">Measurable Results</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;