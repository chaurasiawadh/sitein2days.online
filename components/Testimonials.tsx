'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-black font-bold tracking-wider uppercase text-sm border-2 border-black rounded-full px-4 py-1.5 bg-white inline-block shadow-sm">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black text-black">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Our Partners</span> Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 overflow-hidden"
            >
              {/* Gradient Accent on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} className="text-purple-600" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + (index * 0.15) + (i * 0.05),
                      duration: 0.3,
                      ease: "backOut"
                    }}
                  >
                    <Star
                      size={20}
                      fill={i < t.rating ? "#FFA500" : "none"}
                      className={i < t.rating ? "stroke-[#FFA500]" : "stroke-gray-300"}
                    />
                  </motion.div>
                ))}
                <span className="ml-2 text-sm font-bold text-gray-900">{t.rating}</span>
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 relative z-10 font-medium leading-relaxed mb-8 text-base">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-accent transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{t.position}</p>
                </div>
              </div>

              {/* Hover Border Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 font-medium">
            Join our growing list of satisfied clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;