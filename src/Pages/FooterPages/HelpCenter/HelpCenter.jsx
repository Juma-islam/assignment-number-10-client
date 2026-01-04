import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I report a cleanliness issue?",
      answer: "Log in to your account, click on 'Add Issue', fill in the details like title, category, location, description, and submit. Your report will be visible to the community and admin.",
    },
    {
      question: "How can I contribute to a clean-up effort?",
      answer: "Go to the 'Issue Details' page for the issue you want to contribute to and click 'Pay Clean-Up Contribution'. Fill out your details and submit. Your contribution will be recorded.",
    },
    {
      question: "Can I update or delete my submitted issue?",
      answer: "Yes. Navigate to 'My Issues', click the 'Update' button to edit, or the 'Delete' button to remove your issue permanently.",
    },
    {
      question: "How do I track my contributions?",
      answer: "Visit 'My Contribution' page to view all your clean-up payments and download reports if needed.",
    },
    {
      question: "Do I need to verify my email?",
      answer: "Email verification is optional for now. You can log in and use all features without it.",
    },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Help Center</h1>
        <p className="opacity-90 max-w-xl mx-auto">
          Find answers to frequently asked questions about CleanConnect.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow cursor-pointer overflow-hidden"
          >
            <div
              className="flex justify-between items-center p-5"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {faq.question}
              </h2>
              <span className="text-green-600 dark:text-green-400 text-2xl">
                {activeIndex === index ? <BiMinus /> : <BiPlus />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-5 pb-5 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default HelpCenter;
