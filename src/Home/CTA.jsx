import React from 'react';
import HeadingSection from '../components/HeadingSection';

const CTA = () => {
  return (
    <section className="text-center py-16 px-4">
      {/* heading */}
     <HeadingSection title='Boost Your Fluency' heading=' Start Your English Speaking Journey Today!'/>

      {/* buttons */}
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          Subscribe Now
        </button>
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default CTA;
