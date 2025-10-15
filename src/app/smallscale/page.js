'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SmallImg from '../../../public/smallscale.png';
import { Bolt, Speed, Analytics, Settings } from '@mui/icons-material';

export default function SmallScale() {
  // Steps for How It Works
  const processSteps = [
    {
      icon: Speed,
      title: "Quick Setup",
      description: "Get your small business online fast with our easy-to-use dashboards.",
    },
    {
      icon: Bolt,
      title: "Efficient Workflows",
      description: "Manage operations smoothly and save valuable time and effort.",
    },
    {
      icon: Analytics,
      title: "Smart Analytics",
      description: "Track growth, analyze performance, and make data-driven decisions.",
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Tailor your tools and workflows to match your unique business needs.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 flex flex-col md:flex-row items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Small Scale Startups Solutions
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Tools and dashboards designed for freelancers, local cafes, small e-commerce stores, and consulting businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 relative h-64 md:h-96"
        >
          <Image
            src={SmallImg}
            alt="Small Startups"
            fill
            className="object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 text-gray-800 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-600"
        >
          Why Small Scale Startups Choose Us
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
            <p>Get your business online quickly with minimal setup time and learning curve.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
            <p>Affordable solutions tailored for small budgets without compromising on quality.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
            <p>Simplified dashboards and workflows to manage orders, clients, and daily operations efficiently.</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-100 text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-600 text-center"
        >
          How It Works
        </motion.h2>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Horizontal Line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-blue-200 hidden md:block"></div>

          <div className="flex flex-col md:flex-row justify-between items-center relative space-y-12 md:space-y-0">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-2xl mb-4 hover:scale-110 transition-transform">
                    <Icon className="text-blue-600 text-4xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700 max-w-xs">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Transform Your Startup?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Start your free trial today and see how our solutions make your small business more productive and profitable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
