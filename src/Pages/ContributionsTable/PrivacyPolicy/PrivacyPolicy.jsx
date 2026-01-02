import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">Privacy Policy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>We at CleanConnect respect your privacy and are committed to protecting your personal data.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email, phone, address</li>
              <li>Payment information</li>
              <li>Booking history and preferences</li>
            </ul>
          </section>
    
          <p className="mt-12">For questions, email: privacy@cleanconnect.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;