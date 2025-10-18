'use client';

import { useState, useEffect } from 'react';
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
import { supabase } from '../../lib/supabase'; // Adjust if your lib is inside src

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase.from('testimonials').select('*');
    console.log(data);
    if (error) {
      console.error('Supabase fetch error:', error.message);
    } else {
      setTestimonials(data);
    }
    setLoading(false);
  };

  const prevSlide = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  const goToSlide = (index) => setCurrent(index);

  if (loading) return <p className="text-center py-10">Loading testimonials...</p>;
  if (!testimonials.length)
    return <p className="text-center py-10">No testimonials found.</p>;

  const testi = testimonials[current];

  // Map string icon from DB to actual MUI icon
  const iconMap = { Store, RocketLaunch, BusinessCenter, Person };
  const Icon = iconMap[testi.icon] || Person;

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100"
    >
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
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-100 transition transform hover:scale-110 z-20"
          >
            <ArrowBackIos className="text-blue-600" />
          </button>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="bg-white relative p-14 rounded-3xl shadow-2xl border border-gray-200 w-full flex flex-col items-center overflow-hidden max-h-96"
          >
            <div
              className={`absolute -top-10 z-0 w-40 h-40 bg-gradient-to-br ${
                testi.color || 'from-blue-400 via-blue-500 to-blue-600'
              } rounded-full opacity-20 blur-3xl`}
            ></div>
            <div
              className={`z-10 bg-gradient-to-r ${
                testi.color || 'from-blue-400 via-blue-500 to-blue-600'
              } rounded-full p-6 mb-6 shadow-lg`}
            >
              <Icon className="text-white text-6xl" />
            </div>

            <FormatQuote className="text-blue-300 text-5xl mb-6 z-10" />
            <p className="text-gray-700 text-lg md:text-xl font-medium italic text-center leading-relaxed z-10 break-words">
              {` "${testi.feedback}"`}
            </p>

            <div className="mt-8 text-center z-10">
              <h4 className="font-semibold text-gray-900 text-xl">{testi.name}</h4>
              <p className="text-gray-500 text-sm">{testi.role}</p>
            </div>
          </motion.div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-100 transition transform hover:scale-110 z-20"
          >
            <ArrowForwardIos className="text-blue-600" />
          </button>
        </div>
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
