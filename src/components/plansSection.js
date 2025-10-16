'use client';

import { motion } from 'framer-motion';
import { Business, Star, TrendingUp } from '@mui/icons-material';
import Link from 'next/link';

const plans = [
  {
    name: 'Silver',
    price: '$9 / month',
    icon: Star,
    description: 'Perfect for small startups and freelancers to get started quickly.',
    color: 'from-gray-300 via-gray-400 to-gray-500',
  },
  {
    name: 'Gold',
    price: '$29 / month',
    icon: TrendingUp,
    description: 'Ideal for growing teams needing analytics and collaboration tools.',
    color: 'from-yellow-400 via-yellow-500 to-yellow-600',
  },
  {
    name: 'Diamond',
    price: '$59 / month',
    icon: Business,
    description: 'Full suite for medium businesses with unlimited users and advanced reporting.',
    color: 'from-purple-400 via-purple-500 to-purple-600',
  },
];

export default function PlansSection() {
  return (
    <section id="plans" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-16"
      >
        Flexible Plans for Every Stage
      </motion.h2>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {plans.map((plan, idx) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.6, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Floating Gradient Shape */}
              <div className={`absolute -top-6 w-24 h-24 rounded-full bg-gradient-to-tr ${plan.color} opacity-30 -z-10 animate-pulse`}></div>

              {/* Icon */}
              <motion.div
                initial={{ rotate: -15 }}
                whileHover={{ rotate: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="bg-white rounded-full p-4 shadow-lg mb-6"
              >
                <Icon className="text-4xl text-blue-600" />
              </motion.div>

              {/* Plan Info */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-lg font-semibold text-gray-800 mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
