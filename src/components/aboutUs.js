'use client';

import { motion } from 'framer-motion';
import { Business, Bolt, TrendingUp, ArrowForward } from '@mui/icons-material';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-600"
        >
          Empowering Startups with Smart Digital Solutions
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-700"
        >
          We help startups and small businesses transform digitally with fast, efficient, and
          scalable tools — built to enhance productivity, manage operations, and improve ROI.
        </motion.p>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Business className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Growth</h3>
            <p className="text-gray-600">
              Helping startups streamline their business processes to scale faster.
            </p>
          </motion.div>

          {/* 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Bolt className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Performance</h3>
            <p className="text-gray-600">
              Delivering fast, efficient, and mobile-friendly solutions for modern teams.
            </p>
          </motion.div>

          {/* 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <TrendingUp className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-gray-600">
              Real-time insights and dashboards to make data-driven business decisions.
            </p>
          </motion.div>
        </div>

        {/* CTA Button - Now Below Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Learn More About Us
            <ArrowForward className="ml-2" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
