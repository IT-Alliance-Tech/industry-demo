'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FormatQuote,
  RocketLaunch,
  BusinessCenter,
  Store,
  Person,
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material';

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Founder, Small Ecommerce",
    feedback:
      "The platform transformed our online store management — fast, intuitive, and reliable! Highly recommend it to anyone wanting seamless operations.",
    icon: Store,
    color: "from-blue-400 via-blue-500 to-blue-600",
  },
  {
    name: "Rajesh Kumar",
    role: "CTO, SaaS Startup",
    feedback:
      "Amazing analytics and team management tools. Productivity improved instantly! The dashboards are super easy to use and highly customizable.",
    icon: RocketLaunch,
    color: "from-green-400 via-green-500 to-green-600",
  },
  {
    name: "Sophie Lee",
    role: "Owner, Local Cafe",
    feedback:
      "I love how simple and effective this solution is. Perfect for small businesses like mine. Our workflow has become so much smoother and efficient.",
    icon: BusinessCenter,
    color: "from-purple-400 via-purple-500 to-purple-600",
  },
  {
    name: "Michael Smith",
    role: "CEO, Tech Startup",
    feedback:
      "Their team understood our challenges perfectly and delivered a solution beyond expectations! Communication and support were top-notch throughout.",
    icon: Person,
    color: "from-pink-400 via-pink-500 to-pink-600",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const testi = testimonials[current];
  const Icon = testi.icon;

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-600"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-100 transition transform hover:scale-110 z-20"
          >
            <ArrowBackIos className="text-blue-600" />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="bg-white relative p-14 rounded-3xl shadow-2xl border border-gray-200 w-full flex flex-col items-center overflow-hidden max-h-96"
          >
            {/* Glow behind icon */}
            <div className={`absolute -top-10 z-0 w-40 h-40 bg-gradient-to-br ${testi.color} rounded-full opacity-20 blur-3xl`}></div>

            {/* Icon */}
            <div className={`z-10 bg-gradient-to-r ${testi.color} rounded-full p-6 mb-6 shadow-lg`}>
              <Icon className="text-white text-6xl" />
            </div>

            {/* Quote */}
            <FormatQuote className="text-blue-300 text-5xl mb-6 z-10" />
            <p className="text-gray-700 text-lg md:text-xl font-medium italic text-center leading-relaxed z-10 break-words">
              "{testi.feedback}"
            </p>

            {/* Client info */}
            <div className="mt-8 text-center z-10">
              <h4 className="font-semibold text-gray-900 text-xl">{testi.name}</h4>
              <p className="text-gray-500 text-sm">{testi.role}</p>
            </div>
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-100 transition transform hover:scale-110 z-20"
          >
            <ArrowForwardIos className="text-blue-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                idx === current ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
