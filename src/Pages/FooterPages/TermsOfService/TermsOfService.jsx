import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">Terms of Service</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance</h2>
            <p>By using CleanConnect, you agree to these terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p>We provide a platform to book professional cleaning services.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;