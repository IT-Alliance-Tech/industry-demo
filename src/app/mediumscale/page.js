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
    { icon: <Bolt className="text-blue-600 text-7xl" />, title: "High Performance", description: "Optimized workflows to keep your business efficient and fast." },
    { icon: <Security className="text-blue-600 text-7xl" />, title: "Secure & Reliable", description: "Top-notch security and cloud infrastructure for data protection." },
    { icon: <BarChart className="text-blue-600 text-7xl" />, title: "Smart Analytics", description: "Dashboards with actionable insights to grow your business." },
  ];

  const steps = [
    { step: "01", title: "Sign Up", description: "Quick onboarding to get your team started in minutes." },
    { step: "02", title: "Setup Processes", description: "Configure automated workflows for efficient operations." },
    { step: "03", title: "Track & Scale", description: "Monitor performance and scale your operations seamlessly." },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 flex flex-col md:flex-row items-center justify-center px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Medium Scale Business Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Advanced dashboards, workflows, and automation designed for growing IT, SaaS, healthcare, and manufacturing businesses.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition transform hover:scale-105">
            Get Started
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="md:w-1/2 mt-10 md:mt-0 relative h-80 md:h-96">
          <Image src={MediumImg} alt="Medium Businesses" fill className="object-cover rounded-xl shadow-2xl" />
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="absolute bottom-[-20px] right-4 bg-white text-gray-800 rounded-2xl p-6 shadow-xl w-64">
            <h3 className="font-bold text-lg mb-2">Boost Productivity</h3>
            <p className="text-sm">Advanced analytics and workflow automation for medium businesses.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 text-gray-800 text-center relative">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-16 text-blue-600">
          Key Features
        </motion.h2>

        <div className="flex overflow-x-auto gap-8 px-6 scrollbar-hide pb-8">
          {features.map((f, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2, duration: 0.6 }} className="min-w-[320px] bg-gradient-to-br from-white to-gray-100 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center">
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-100 text-gray-800 relative">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-16 text-blue-600 text-center">
          How It Works
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-600"></div>

          {steps.map((s, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.3, duration: 0.6 }} className={`relative w-full flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl w-80 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">{s.step}</div>
                <h3 className="text-2xl font-semibold mt-6 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Scale Your Business?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how our solutions make your medium business more productive and profitable.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition transform hover:scale-105">
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
