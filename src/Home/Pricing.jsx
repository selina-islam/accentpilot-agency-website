import React, { useState } from 'react';
import HeadingSection from '../components/HeadingSection';

const weeklyPlans = [
  {
    name: 'Basic',
    price: '৳500',
    features: ['3 Speaking Sessions', 'Basic Feedback', 'Access to WhatsApp Group'],
  },
  {
    name: 'Pro',
    price: '৳900',
    features: ['5 Speaking Sessions', 'Detailed Feedback', '1 Grammar Class'],
  },
  {
    name: 'Elite',
    price: '৳1200',
    features: ['Unlimited Speaking', '1:1 Coaching', 'Personal Progress Report'],
  },
];

const monthlyPlans = [
  {
    name: 'Basic',
    price: '৳1500',
    features: ['12 Speaking Sessions', 'Monthly Report', 'Group Support'],
  },
  {
    name: 'Pro',
    price: '৳2500',
    features: ['20 Speaking Sessions', 'Exclusive Grammar Workshop', 'Private Community Access'],
  },
  {
    name: 'Elite',
    price: '৳4000',
    features: ['Unlimited Sessions', 'Personal Mentor', 'Certificate & Portfolio Review'],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const plans = isMonthly ? monthlyPlans : weeklyPlans;

  return (
    <section className="px-5 pt-20 py-10 max-w-7xl mx-auto">
      <HeadingSection
        title="Choose Your Plan"
        heading="Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you"
      />

      {/* Toggle */}
      <div className="flex items-center justify-center mb-10">
        <label className="inline-flex gap-5 items-center text-lg font-medium">
          <span>{isMonthly ? 'Monthly Pricing' : 'Weekly Pricing'}</span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isMonthly}
              onChange={() => setIsMonthly(!isMonthly)}
            />
            <div className="h-7 w-14 bg-slate-100 rounded-full transition-colors duration-300"></div>
            <div
              className={`absolute bg-blue-700 h-7 w-7 rounded-full top-0 left-0 transition-transform duration-300 ${
                isMonthly ? 'translate-x-7' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-800  hover:shadow-blue-500 p-6 rounded-xl shadow shadow-gray-500 hover:shadow transition duration-300"
          >
            <h3 className="text-2xl text-gray-600 font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-semibold text-blue-600 mb-4">{plan.price}</p>
            <ul className="space-y-2 text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
