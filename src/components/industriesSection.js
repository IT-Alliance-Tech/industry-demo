'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SmallImg from '../../public/smallscale.png';
import MediumImg from '../../public/largescale.png';

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Explore Industry-Specific Demos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose your business type and explore tailored solutions for startups and growing businesses.
          </p>
        </motion.div>

        {/* Small Scale Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col md:flex-row items-center mb-16 shadow-2xl rounded-3xl overflow-hidden group bg-white"
        >
          {/* Image */}
          <div className="md:w-1/2 relative h-80 md:h-[400px] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-full h-full transition-transform duration-500"
            >
              <Image
                src={SmallImg}
                alt="Small Scale Startups"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 p-10 bg-gradient-to-r from-blue-50 to-blue-100 relative"
          >
            {/* Decorative shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 z-0"></div>

            <h3 className="text-3xl font-bold text-blue-700 mb-4 relative z-10">
              Small Scale Startups
            </h3>
            <p className="text-gray-700 mb-6 relative z-10">
              Perfect for consulting, freelancers, local cafes, and small e-commerce stores. Simplified tools, fast ROI, and easy adoption.
            </p>
            <Link
              href="/small-scale"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg relative z-10 transition transform hover:scale-105"
            >
              View Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* Medium Scale Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col md:flex-row-reverse items-center mb-16 shadow-2xl rounded-3xl overflow-hidden group bg-white"
        >
          {/* Image */}
          <div className="md:w-1/2 relative h-80 md:h-[400px] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-full h-full transition-transform duration-500"
            >
              <Image
                src={MediumImg}
                alt="Medium Scale Businesses"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 p-10 bg-gradient-to-r from-green-50 to-green-100 relative"
          >
            {/* Decorative shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full opacity-30 z-0"></div>

            <h3 className="text-3xl font-bold text-green-700 mb-4 relative z-10">
              Medium Scale Businesses
            </h3>
            <p className="text-gray-700 mb-6 relative z-10">
              Ideal for IT services, SaaS startups, healthcare clinics, and manufacturing. Structured dashboards and workflows to scale operations efficiently.
            </p>
            <Link
              href="/medium-scale"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg relative z-10 transition transform hover:scale-105"
            >
              View Demo
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
