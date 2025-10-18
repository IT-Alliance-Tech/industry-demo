'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const plans = [
  {
    id: 'silver',
    name: 'Silver Plan',
    price: '₹3 + GST',
    features: [
      'Access to 6 property contact numbers',
      '30 days validity',
      'Basic support',
    ],
    color: 'from-gray-300 to-gray-500',
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    price: '₹6 + GST',
    features: [
      'Access to 15 property contact numbers',
      '45 days validity',
      'Priority support',
    ],
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    id: 'diamond',
    name: 'Diamond Plan',
    price: '₹10 + GST',
    features: [
      'Access to unlimited contact numbers',
      '60 days validity',
      'Premium dedicated support',
    ],
    color: 'from-blue-400 to-blue-600',
  },
];

export default function SubscriptionPage() {
  const searchParams = useSearchParams();
  const defaultPlan = searchParams.get('plan') || 'silver';
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);

  useEffect(() => {
    setSelectedPlan(defaultPlan);
  }, [defaultPlan]);

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Select the plan that best fits your business needs. Upgrade anytime as your business grows.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative cursor-pointer rounded-3xl shadow-lg border-2 ${
                selectedPlan === plan.id
                  ? 'border-blue-600 bg-white'
                  : 'border-transparent bg-gray-50'
              } p-10 text-center hover:shadow-2xl flex flex-col justify-between transition`}
            >
              {/* Highlight border for selected plan */}
              {selectedPlan === plan.id && (
                <div className="absolute inset-0 rounded-3xl border-4 border-blue-400 animate-pulse pointer-events-none"></div>
              )}

              {/* Plan Name & Price */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="text-3xl font-bold text-gray-800 mb-3"
              >
                {plan.name}
              </motion.h2>
              <p className="text-2xl font-semibold text-blue-600 mb-6">{plan.price}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-left mx-auto w-fit">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-green-500 text-xl" />
                    <span className="text-base md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-auto py-3 px-10 font-semibold text-white rounded-full shadow-lg transition bg-gradient-to-r ${plan.color}`}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-20">
          <Link
            href="/"
            className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
