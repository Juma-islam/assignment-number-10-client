import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
       <section className="bg-green-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="opacity-90 max-w-xl mx-auto">
          Have questions, suggestions, or want to report something?  
          We’d love to hear from you.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg dark:bg-gray-800" required />
            <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg dark:bg-gray-800" required />
            <input type="tel" placeholder="Phone" className="w-full p-4 border rounded-lg dark:bg-gray-800" />
            <select className="w-full p-4 border rounded-lg dark:bg-gray-800">
              <option>General Inquiry</option>
              <option>Booking Help</option>
              <option>Become a Cleaner</option>
            </select>
            <textarea placeholder="Message" rows="6" className="w-full p-4 border rounded-lg dark:bg-gray-800" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">Send Message</button>
          </form>
        </div>

        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <p className="flex items-center"><strong>Email:</strong> support@cleanconnect.com</p>
            <p className="flex items-center"><strong>Phone:</strong> +880 123 456 789</p>
            <p className="flex items-center"><strong>Address:</strong> Dhaka, Bangladesh</p>
          </div>
          <div className="mt-10">
            <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" className="rounded-lg" title="Map"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
