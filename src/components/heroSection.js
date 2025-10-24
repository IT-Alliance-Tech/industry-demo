'use client'; // Important for Framer Motion

import { motion } from 'framer-motion';
import Image from 'next/image';
import StartupImg from '../../public/herosection.png'; // Make sure this image exists

export default function HeroSection() {

  // Smooth scroll handler
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector('#industries');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust if you have a fixed header
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden pt-20 md:pt-32">
      
      {/* 🔹 Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={StartupImg}
          alt="Startup Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 🔹 Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Solutions for Startups & Growing Businesses
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Explore industry-specific demos and see how our tools improve efficiency and ROI.
        </p>
        <button
          onClick={handleScroll}
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
        >
          Explore Demos
        </button>
      </motion.div>
    </section>
  );
}
