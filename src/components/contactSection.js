'use client';

import { motion } from 'framer-motion';
import { Send, Chat, Email, Phone } from '@mui/icons-material';
import { useState } from 'react';
import { supabase } from '../../lib/supabase'; // make sure this matches your export

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    scale: 'small', // default value
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Make sure the table name matches exactly with Supabase
      const { data, error } = await supabase.from('demo_requests').insert(
        {
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          message: form.message,
          scale: form.scale,
        },
      );

      if (error) throw error;

      setStatus('Request submitted successfully!');
      setForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        scale: 'small',
      });
    } catch (err) {
      console.error(err);
      setStatus('Error submitting request: ' + err.message);
    }

    setLoading(false);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 -z-10">
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full top-[-50px] left-[-50px] blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-white/20 rounded-full bottom-[-40px] right-[-40px] blur-2xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          Request a Demo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/90 mb-10"
        >
          Fill out the form and our team will get in touch with you quickly.
        </motion.p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-2xl grid gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            required
          />
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message / Demo Details"
            rows={4}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full resize-none"
          />

          <select
            name="scale"
            value={form.scale}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          >
            <option value="small">Small Scale</option>
            <option value="medium">Medium Scale</option>
          </select>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center mx-auto"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Request Demo'} <Send className="ml-2" />
          </motion.button>

          {status && (
            <p
              className={`text-center mt-2 text-sm ${
                status.includes('Error') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <motion.div
          className="absolute top-10 left-10 text-white/30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Chat fontSize="large" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-white/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Email fontSize="large" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 text-white/20"
          animate={{ x: [-20, 20, -20], y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Phone fontSize="large" />
        </motion.div>
      </div>
    </section>
  );
}
