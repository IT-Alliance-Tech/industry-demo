'use client';

import { motion } from 'framer-motion';
import { Speed, Security, Handshake, BarChart, Analytics, SupportAgent } from '@mui/icons-material';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
import AboutImg from '../../../public/herosection.png';

export default function About() {
  const missionPoints = [
    "Deliver cutting-edge solutions that empower businesses to grow efficiently.",
    "Ensure robust, secure, and dependable systems that our clients can trust.",
    "Work hand-in-hand with clients to deliver tailored solutions for success.",
  ];

  const process = [
    { title: "Research & Planning", description: "We analyze requirements and create strategic plans for success." },
    { title: "Design & Development", description: "We craft solutions with clean design and scalable architecture." },
    { title: "Testing & Launch", description: "We thoroughly test and deploy your solution smoothly." },
    { title: "Support & Growth", description: "Continuous monitoring, updates, and support for growth." },
  ];

  const features = [
    { title: "Fast Performance", description: "Optimized workflows and systems for maximum efficiency.", icon: Speed },
    { title: "Secure & Reliable", description: "Keep your business data safe with industry-standard security measures.", icon: Security },
    { title: "Collaborative Tools", description: "Work together seamlessly across teams and departments.", icon: Handshake },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-24 flex flex-col md:flex-row items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl mb-6">
            We provide innovative, reliable, and collaborative solutions to help startups and growing businesses succeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 relative h-64 md:h-96"
        >
          <Image
            src={AboutImg}
            alt="About Us"
            fill
            className="object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Our Mission Section (NEW DESIGN) */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-600 text-center"
        >
          Our Mission
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {missionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl text-center flex flex-col items-center"
            >
              {idx === 0 && <Speed className="text-blue-500 text-5xl mb-4" />}
              {idx === 1 && <Security className="text-blue-500 text-5xl mb-4" />}
              {idx === 2 && <Handshake className="text-blue-500 text-5xl mb-4" />}

              <h3 className="font-semibold text-xl mb-2">
                {["Innovation", "Reliability", "Collaboration"][idx]}
              </h3>
              <p className="text-gray-700 text-sm">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 px-6 bg-gray-100 text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-600 text-center"
        >
          How We Work
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {process.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 opacity-0 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative p-10 flex flex-col items-center text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-blue-500 text-3xl font-bold mb-4 shadow-md">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-xl mb-2 z-10">{p.title}</h3>
                <p className="text-gray-700 text-sm z-10">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-6 bg-blue-50 text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-600 text-center"
        >
          Key Features
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center text-center"
              >
                <Icon className="text-blue-500 text-5xl mb-4" />
                <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-700 text-sm">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
