'use client';

import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, Chat, Send } from '@mui/icons-material';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header />

      {/* Contact Section */}
      <section className="relative bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen py-24 px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Get in Touch</h1>
          <p className="text-gray-700 text-lg md:text-xl">
            {"We'd love to hear from you! Whether you have questions, want a demo, or need support, reach out to us."}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Decorative animated circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition transform shadow-lg flex items-center justify-center gap-2"
            >
              Send Message <Send />
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start space-y-6 mt-10 md:mt-20" // <-- moved down
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 bg-white p-6 rounded-3xl shadow-2xl cursor-pointer transition"
            >
              <Email className="text-blue-600 text-4xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@yourcompany.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 bg-white p-6 rounded-3xl shadow-2xl cursor-pointer transition"
            >
              <Phone className="text-blue-600 text-4xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 123 456 7890</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 bg-white p-6 rounded-3xl shadow-2xl cursor-pointer transition"
            >
              <LocationOn className="text-blue-600 text-4xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Startup Lane, Tech City, India</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 bg-white p-6 rounded-3xl shadow-2xl cursor-pointer transition"
            >
              <Chat className="text-blue-600 text-4xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Live Chat</h3>
                <p className="text-gray-600">Chat with our support team instantly</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
