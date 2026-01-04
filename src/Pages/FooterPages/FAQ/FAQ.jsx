// import React from 'react';
// import { MdLocationPin } from "react-icons/md";

// const FAQCard = ({ question, answer, category = "General" }) => {
//   return (
//     <div className="mt-5 w-11/12 mx-auto">
//       <div className="card bg-base-100 w-full shadow-sm hover:scale-105 transition-transform overflow-hidden">
//         <div className="card-body">
//           <h2 className="card-title text-xl">{question}</h2>
//           <p className="badge text-xs badge-xs bg-green-500 rounded-full dark:text-white/80">{category}</p>
          
//           <details className="mt-4">
//             <summary className="cursor-pointer text-blue-600 font-semibold">View Answer</summary>
//             <p className="text-gray-700 dark:text-white/70 text-sm mt-4">{answer}</p>
//           </details>

//           <button className="btn w-full text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 border-none mt-4">
//             Need More Help? Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FAQ = () => {
//   const faqs = [
//     { question: "How do I book a cleaning service?", answer: "Sign up or log in, browse available cleaners, select your preferred date & time, and confirm the booking. You'll receive a confirmation email instantly.", category: "Booking" },
//     { question: "Are your cleaners verified?", answer: "Yes! All cleaners on CleanConnect go through background checks, experience verification, and rating reviews to ensure trust and safety.", category: "Safety" },
//     { question: "What payment methods do you accept?", answer: "We accept all major credit/debit cards, bKash, Nagad, and bank transfers. Payment is securely processed after service completion.", category: "Payment" },
//     { question: "Can I cancel or reschedule a booking?", answer: "Yes, free cancellation up to 24 hours before the service. After that, a small fee may apply. Rescheduling is always free.", category: "Booking" },
//     { question: "Do you use eco-friendly products?", answer: "Absolutely! We encourage all cleaners to use natural, non-toxic, and environmentally friendly cleaning products.", category: "Eco-Friendly" },
//     { question: "What if I'm not satisfied with the cleaning?", answer: "We offer a 100% satisfaction guarantee. If you're not happy, we'll arrange a free re-clean within 48 hours.", category: "Guarantee" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
//       {/* Hero */}
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">Frequently Asked Questions</h1>
//         <p className="text-xl text-gray-700 dark:text-gray-300">Find quick answers to common questions about CleanConnect</p>
//       </div>

//       {/* FAQ Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {faqs.map((faq, index) => (
//           <FAQCard key={index} question={faq.question} answer={faq.answer} category={faq.category} />
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-16">
//         <p className="text-lg mb-6">Still have questions?</p>
//         <a href="/contact" className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 text-lg">Contact Support</a>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from "react";

const faqs = [
  {
    question: "What is CleanConnect?",
    answer:
      "CleanConnect is a community-driven platform that allows users to report environmental issues, contribute to clean-up initiatives, and track progress transparently.",
  },
  {
    question: "How can I report an issue?",
    answer:
      "After logging in, go to the Add Issue page, fill in the required details such as title, location, category, and description, then submit the form.",
  },
  {
    question: "Is it mandatory to contribute money?",
    answer:
      "No. Contributing to clean-up efforts is completely optional. You can support initiatives based on your willingness and ability.",
  },
  {
    question: "How does the contribution system work?",
    answer:
      "Each issue has a suggested fix budget. Users can contribute any amount, and the total collected amount is displayed transparently.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. CleanConnect ensures data privacy and only uses your information for platform functionality.",
  },
  {
    question: "Can I update or delete my submitted issue?",
    answer:
      "Yes. From the My Issues page, you can update or delete issues that you have created.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="opacity-90">
          Find answers to the most common questions about CleanConnect
        </p>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-green-600 text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14">
        <div className="text-center px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out or explore issues on the platform.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
