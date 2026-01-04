import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
        <p className="opacity-90 max-w-xl mx-auto">
          Please read these Terms of Service carefully before using CleanConnect.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. Acceptance of Terms</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By accessing or using CleanConnect, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. Use of the Platform</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            CleanConnect is intended to report community cleanliness issues and contribute to clean-up efforts. You agree to use the platform responsibly and not engage in any illegal or harmful activities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. User Accounts</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You must register an account to report issues or make contributions. Keep your login credentials secure. You are responsible for all activities under your account.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">4. Contributions and Payments</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Any contributions or payments made through the platform are voluntary and intended for community clean-up efforts. CleanConnect is not responsible for managing contributions outside the platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">5. Intellectual Property</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All content, images, and logos on CleanConnect are owned by the platform or its contributors. You may not copy, distribute, or modify any content without permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">6. Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            CleanConnect is not liable for any direct, indirect, or consequential damages arising from your use of the platform, including issues not resolved or contributions made.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">7. Changes to Terms</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may update these Terms of Service at any time. Continued use of the platform indicates acceptance of the updated terms.
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

export default TermsOfService;
