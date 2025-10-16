'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, Close } from '@mui/icons-material';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Industries', href: '#industries' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  // Change shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for in-page links
  const handleScrollClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // header height offset
          behavior: 'smooth',
        });
        setIsOpen(false); // close mobile menu
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all ${scroll ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

        {/* Logo */}
        <Link href="/">
          <motion.h1
            initial={{ y: -20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="text-2xl md:text-3xl font-extrabold text-blue-600 cursor-pointer hover:scale-110 transition-transform"
            onClick={(e) => {
              // Scroll to top if already on home page
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            StartupX
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative group"
            >
              <a
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.href)}
                className="text-gray-800 font-medium text-lg transition-colors hover:text-blue-600"
              >
                {item.name}
              </a>
              <motion.div
                className="absolute left-0 bottom-0 h-1 w-0 bg-blue-600 rounded"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-3xl focus:outline-none"
          >
            {isOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScrollClick(e, item.href)}
                  className="text-gray-800 text-xl font-semibold hover:text-blue-600 transition"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
