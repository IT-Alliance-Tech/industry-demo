'use client';

import { motion } from 'framer-motion';
import { FormatQuote, RocketLaunch, BusinessCenter, Store } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Founder, Small Ecommerce",
    feedback:
      "The platform transformed our online store management — fast, intuitive, and reliable!",
    icon: Store,
    color: "from-blue-400 via-blue-500 to-blue-600",
  },
  {
    name: "Rajesh Kumar",
    role: "CTO, SaaS Startup",
    feedback:
      "Amazing analytics and team management tools. Productivity improved instantly!",
    icon: RocketLaunch,
    color: "from-green-400 via-green-500 to-green-600",
  },
  {
    name: "Sophie Lee",
    role: "Owner, Local Cafe",
    feedback:
      "I love how simple and effective this solution is. Perfect for small businesses like mine.",
    icon: BusinessCenter,
    color: "from-purple-400 via-purple-500 to-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-green-200 rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Moved heading slightly up and reduced margin-bottom */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-600"
        >
          What Our Clients Say
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {testimonials.map((testi, idx) => {
            const Icon = testi.icon;
            return (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-gray-200 relative flex flex-col items-center max-w-3xl mx-auto"
                >
                  {/* Icon Circle */}
                  <div className={`bg-gradient-to-r ${testi.color} rounded-full p-6 mb-4 shadow-lg`}>
                    <Icon className="text-white text-5xl" />
                  </div>

                  {/* Quote */}
                  <FormatQuote className="text-blue-200 text-4xl mb-4" />
                  <p className="text-gray-700 text-lg md:text-lg font-medium italic text-center leading-relaxed">
                    "{testi.feedback}"
                  </p>

                  {/* Client Info */}
                  <div className="mt-6 text-center">
                    <h4 className="font-semibold text-gray-900 text-lg">{testi.name}</h4>
                    <p className="text-gray-500 text-sm">{testi.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
