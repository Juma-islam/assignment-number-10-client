import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="opacity-90 max-w-xl mx-auto">
          Your privacy is important to us. Learn how CleanConnect collects, uses, and protects your information.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may collect personal information such as your name, email, and location when you report issues or contribute to community clean-ups. This helps us provide better services and track contributions effectively.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. How We Use Your Information</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The information collected is used solely to process your issue reports, contributions, and to improve our platform. We do not sell or share your personal data with third parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. Security</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We take appropriate measures to protect your information from unauthorized access, disclosure, or alteration. Your data is stored securely in our MongoDB database.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">4. Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. Cookies do not contain personally identifiable information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">5. Your Rights</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us via the “Contact Us” page.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-700 dark:text-gray-300">
            Last Updated: January 4, 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
