'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SmallImg from '../../../public/smallscale.png';
import { FormatQuote, Person, AccountCircle, BusinessCenter } from '@mui/icons-material';

export default function SmallScale() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Founder, Small Ecommerce",
      feedback:
        "This platform transformed how we manage our online store. Fast, intuitive, and reliable!",
      icon: Person,
      color: "text-blue-600",
    },
    {
      name: "Sophie Lee",
      role: "Owner, Local Cafe",
      feedback:
        "I love how simple and effective this solution is. It’s perfect for small businesses like mine.",
      icon: AccountCircle,
      color: "text-green-600",
    },
    {
      name: "Rajesh Kumar",
      role: "CTO, SaaS Startup",
      feedback:
        "Amazing analytics and team management tools. Our productivity improved instantly.",
      icon: BusinessCenter,
      color: "text-purple-600",
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-100 text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 text-center"
        >
          What Our Clients Say
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {testimonials.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6"
              >
                <FormatQuote className="text-4xl text-blue-600" />
                <div className="flex items-center gap-4">
                  <Icon className={`${t.color} text-5xl`} />
                  <div className="text-left">
                    <p className="text-gray-700 mb-2">{t.feedback}</p>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
