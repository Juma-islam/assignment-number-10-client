import React from 'react';
import { MdLocationPin } from "react-icons/md";

const FAQCard = ({ question, answer, category = "General" }) => {
  return (
    <div className="mt-5 w-11/12 mx-auto">
      <div className="card bg-base-100 w-full shadow-sm hover:scale-105 transition-transform overflow-hidden">
        <div className="card-body">
          <h2 className="card-title text-xl">{question}</h2>
          <p className="badge text-xs badge-xs bg-green-500 rounded-full dark:text-white/80">{category}</p>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 font-semibold">View Answer</summary>
            <p className="text-gray-700 dark:text-white/70 text-sm mt-4">{answer}</p>
          </details>

          <button className="btn w-full text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 border-none mt-4">
            Need More Help? Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "How do I book a cleaning service?", answer: "Sign up or log in, browse available cleaners, select your preferred date & time, and confirm the booking. You'll receive a confirmation email instantly.", category: "Booking" },
    { question: "Are your cleaners verified?", answer: "Yes! All cleaners on CleanConnect go through background checks, experience verification, and rating reviews to ensure trust and safety.", category: "Safety" },
    { question: "What payment methods do you accept?", answer: "We accept all major credit/debit cards, bKash, Nagad, and bank transfers. Payment is securely processed after service completion.", category: "Payment" },
    { question: "Can I cancel or reschedule a booking?", answer: "Yes, free cancellation up to 24 hours before the service. After that, a small fee may apply. Rescheduling is always free.", category: "Booking" },
    { question: "Do you use eco-friendly products?", answer: "Absolutely! We encourage all cleaners to use natural, non-toxic, and environmentally friendly cleaning products.", category: "Eco-Friendly" },
    { question: "What if I'm not satisfied with the cleaning?", answer: "We offer a 100% satisfaction guarantee. If you're not happy, we'll arrange a free re-clean within 48 hours.", category: "Guarantee" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">Find quick answers to common questions about CleanConnect</p>
      </div>

      {/* FAQ Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} category={faq.category} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-lg mb-6">Still have questions?</p>
        <a href="/contact" className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 text-lg">Contact Support</a>
      </div>
    </div>
  );
};

export default FAQ;