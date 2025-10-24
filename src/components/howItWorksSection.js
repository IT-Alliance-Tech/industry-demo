'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Build, RocketLaunch, People } from '@mui/icons-material';

const steps = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'Ideation',
    description: 'We brainstorm and conceptualize the best ideas tailored for your business needs.',
    color: 'from-blue-400 via-blue-500 to-blue-600',
  },
  {
    id: 2,
    icon: Build,
    title: 'Design & Development',
    description: 'Our team crafts responsive designs and builds scalable solutions efficiently.',
    color: 'from-purple-400 via-purple-500 to-purple-600',
  },
  {
    id: 3,
    icon: RocketLaunch,
    title: 'Launch',
    description: 'We deploy your project with precision and ensure a smooth go-live experience.',
    color: 'from-green-400 via-green-500 to-green-600',
  },
  {
    id: 4,
    icon: People,
    title: 'Support & Growth',
    description: 'We provide ongoing support and strategies to help your business grow.',
    color: 'from-yellow-400 via-yellow-500 to-yellow-600',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-600"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center"
              >
                <div
                  className={`w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white text-4xl shadow-lg`}
                >
                  <Icon fontSize="inherit" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
