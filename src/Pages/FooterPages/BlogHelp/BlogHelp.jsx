import React from 'react';

const BlogHelp = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Blog & Help Center</h1>

        {/* Blog Posts */}
        <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img src="https://imperialcleaning.com/wp-content/uploads/2019/03/Post-Construction-Cleaning-Services.jpg" alt="Clean Home" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">10 Eco-Friendly Cleaning Tips</h3>
              <p className="text-gray-600 dark:text-gray-400">Natural ways to keep your home sparkling...</p>
            </div>
          </div>
      
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <summary className="text-xl font-semibold cursor-pointer">How to book a service?</summary>
            <p className="mt-4">Sign up, search services, select date & time, and confirm.</p>
          </details>
        
        </div>
      </div>
    </div>
  );
};

export default BlogHelp;