import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '../constants';

// Define color schemes for each service using solid, professional colors
const colorSchemes = [
  {
    bg: 'bg-blue-600',
    border: 'border-gray-200 hover:border-blue-300',
    hover: 'hover:shadow-blue-100',
    check: 'bg-blue-600',
    link: 'hover:text-blue-600'
  },
  {
    bg: 'bg-indigo-600',
    border: 'border-gray-200 hover:border-indigo-300',
    hover: 'hover:shadow-indigo-100',
    check: 'bg-indigo-600',
    link: 'hover:text-indigo-600'
  },
  {
    bg: 'bg-teal-600',
    border: 'border-gray-200 hover:border-teal-300',
    hover: 'hover:shadow-teal-100',
    check: 'bg-teal-600',
    link: 'hover:text-teal-600'
  },
  {
    bg: 'bg-emerald-600',
    border: 'border-gray-200 hover:border-emerald-300',
    hover: 'hover:shadow-emerald-100',
    check: 'bg-emerald-600',
    link: 'hover:text-emerald-600'
  },
  {
    bg: 'bg-orange-600',
    border: 'border-gray-200 hover:border-orange-300',
    hover: 'hover:shadow-orange-100',
    check: 'bg-orange-600',
    link: 'hover:text-orange-600'
  },
  {
    bg: 'bg-rose-600',
    border: 'border-gray-200 hover:border-rose-300',
    hover: 'hover:shadow-rose-100',
    check: 'bg-rose-600',
    link: 'hover:text-rose-600'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm border-2 border-blue-100 rounded-full px-4 py-1.5 bg-blue-50">Expertise</span>
            <h2 className="mt-6 text-5xl font-black text-black tracking-tight">What We Do: <span className="text-blue-600">Your Complete Digital Partner</span></h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl leading-relaxed">
              We're not just developers, we're your end-to-end product team. From the first vision map to scaling past your first million users, we handle everything in between.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const colors = colorSchemes[index % colorSchemes.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col bg-white rounded-3xl p-8 transition-colors duration-300 border border-gray-100 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden`}
              >
                {/* Hover Bottom Border */}
                <div className={`absolute bottom-0 left-0 w-full h-1 ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                {/* Icon & Title Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${colors.check} group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0`}>
                    <service.icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-500 mb-6 flex-grow leading-relaxed text-sm">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <div className={`mt-0.5 w-4 h-4 mr-3 flex-shrink-0 rounded-full flex items-center justify-center ${colors.check}`}>
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="leading-tight font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-bold text-gray-900 transition-colors group/link hover:text-black"
                >
                  {service.ctaText}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;