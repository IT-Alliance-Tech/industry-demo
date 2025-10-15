'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import MediumImg from '../../../public/largescale.png';
import { Bolt, BarChart, Security } from '@mui/icons-material';

export default function MediumScale() {
  const features = [
    {
      icon: <Bolt className="text-blue-600 text-5xl mb-4" />,
      title: "High Performance",
      description: "Optimized workflows and tools to keep your business running fast and efficiently.",
    },
    {
      icon: <Security className="text-blue-600 text-5xl mb-4" />,
      title: "Secure & Reliable",
      description: "Top-notch security and cloud infrastructure to protect your data.",
    },
    {
      icon: <BarChart className="text-blue-600 text-5xl mb-4" />,
      title: "Smart Analytics",
      description: "Detailed insights and dashboards for data-driven decision making.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up & Onboard",
      description: "Create your account and onboard your team quickly with guided steps.",
    },
    {
      step: "02",
      title: "Setup Workflows",
      description: "Configure automated processes for tasks, approvals, and reporting.",
    },
    {
      step: "03",
      title: "Analyze & Scale",
      description: "Track performance metrics and scale operations efficiently.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 flex flex-col md:flex-row items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medium Scale Business Solutions
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Advanced dashboards, workflows, and automation designed for growing businesses in IT, SaaS, healthcare, and manufacturing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 relative h-64 md:h-96"
        >
          <Image
            src={MediumImg}
            alt="Medium Businesses"
            fill
            className="object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 text-gray-800 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-600"
        >
          Key Features for Medium Businesses
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              {f.icon}
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-center">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-100 text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 text-center"
        >
          How It Works
        </motion.h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-6">
          {howItWorks.map((h, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              <div className="text-2xl font-bold text-blue-600 mb-4">{h.step}</div>
              <h3 className="text-xl font-semibold mb-2">{h.title}</h3>
              <p className="text-gray-600">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Scale Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Start your free trial today and see how our solutions make your medium business more productive and profitable.
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
