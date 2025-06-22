import React, { useState } from "react";
import HeadingSection from "../components/HeadingSection";

// faq data: list of question & answer
const faqs = [
  {
    question: "How do I join the English speaking sessions?",
    answer:
      "You can join by selecting a plan and completing the registration. After that, you'll get access to our WhatsApp group and session links.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "We provide live speaking sessions. Some workshops or grammar classes may have recorded versions available.",
  },
  {
    question: "Do I need to speak fluently to join?",
    answer:
      "Not at all! Our sessions are designed for all levels — from beginners to advanced speakers.",
  },
  {
    question: "What is the difference between weekly and monthly plans?",
    answer:
      "Weekly plans are short-term and good for trial. Monthly plans offer better value and more consistent learning.",
  },
  {
    question: "Will I get feedback on my speaking?",
    answer:
      "Yes! All plans include feedback from our mentors to help you improve continuously.",
  },
];

const FAQs = () => {
  // state to track which faq is open
  const [openFaq, setOpenFaq] = useState(null);

  // toggle function: open or close faq
  const toggleFaq = (i) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <section className="max-w-4xl mx-auto px-5 py-10">
      {/* section heading */}
      <HeadingSection title="FAQs" heading="Frequently Asked Questions" />

      {/* faq list */}
      <div className="space-y-4 mt-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-lg shadow-sm transition-all"
          >
            {/* faq question */}
            <button
              onClick={() => toggleFaq(i)}
              className="w-full text-left flex justify-between items-center px-6 py-4 font-medium text-lg cursor-pointer text-gray-300"
            >
              {faq.question}
              <span className="text-2xl text-gray-400">
                {openFaq === i ? "−" : "+"}
              </span>
            </button>

            {/* faq answer (only if open) */}
            {openFaq === i && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
