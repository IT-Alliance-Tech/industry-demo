'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">YourCompany</h2>
          <p className="text-gray-600">
            Empowering startups and medium businesses with smart digital solutions.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Key Features & Benefits", "Testimonials", "Plans"].map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="transition-colors duration-300 hover:text-blue-400"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Industries Pages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Industries</h3>
          <ul className="space-y-2">
            {["Small-Scale", "Medium-Scale"].map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="transition-colors duration-300 hover:text-blue-400"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Follow & Contact</h3>
          <div className="flex space-x-4 mb-4">
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="transition-transform duration-300"
              >
                <Icon className="text-blue-600" />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-600">Email: info@yourcompany.com</p>
          <p className="text-gray-600">Phone: +91 12345 67890</p>
        </motion.div>

      </div>

      {/* Copyright */}
      <motion.div
        className="text-center mt-12 text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </motion.div>
    </footer>
  );
}
