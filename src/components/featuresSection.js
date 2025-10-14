'use client';

import { motion } from 'framer-motion';
import { Speed, Security, BarChart } from '@mui/icons-material';

export default function FeaturesSection() {
      const features = [
    {
      icon: Speed,
      title: "Fast & Efficient",
      description: "Optimized for speed, helping startups save time and increase productivity.",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      icon: Security,
      title: "Secure & Reliable",
      description: "Top-notch security and reliable cloud infrastructure to protect your data.",
      gradient: "from-green-500 to-green-400",
    },
    {
      icon: BarChart,
      title: "Smart Analytics",
      description: "Real-time insights and actionable analytics to make data-driven decisions.",
      gradient: "from-purple-500 to-purple-400",
    },
  ];

  return (
    <section className="pt-16 pb-24 bg-gray-50"> {/* Reduced top padding to move heading up */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}  // Slight offset for smooth animation
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-600" // Blue heading same as Industry section
        >
          Key Features & Benefits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-700 font-medium"
        >
          Designed specifically for startups and growing businesses, our platform gives you the tools to succeed.
        </motion.p>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -10, rotate: 1 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-10 cursor-pointer"
              >
                {/* Background Gradient Shapes */}
                <div
                  className={`absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr ${feature.gradient} opacity-30 transform rotate-45`}
                ></div>
                <div
                  className={`absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-tr ${feature.gradient} opacity-20 transform -rotate-12`}
                ></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white rounded-full p-5 shadow-xl mb-4">
                    <Icon className="text-5xl text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 text-center font-medium">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
