import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://www.stathakis.com/hs-fs/hubfs/Professional-cleaning-service-team-cleans-living-room-in-modern-apartment.png?width=833&height=558&name=Professional-cleaning-service-team-cleans-living-room-in-modern-apartment.png')"}}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">About CleanConnect</h1>
          <p className="text-xl">Connecting You to Spotless Homes – Effortlessly</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">Our Story</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12">
          CleanConnect started in 2024 with a simple mission: to connect busy homeowners with reliable, professional cleaners. We believe everyone deserves a clean, healthy home without the hassle.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <img src="https://media.istockphoto.com/id/1943841348/photo/professional-housekeeper-services-company-team-working-at-customer-house.jpg?s=612x612&w=0&k=20&c=DHwJqcQWwKUnJ5ODcQKeefk6m_kjpWGb0Od9khs5iK0=" alt="Cleaning Team" className="rounded-lg shadow-lg" />
          <img src="https://jccarpetclean.com/wp-content/uploads/2025/03/Untitled-design-24.png" alt="Happy Family" className="rounded-lg shadow-lg" />
          <img src="https://media.greenmatters.com/brand-img/Z17N3fm/0x0/All4Products-1521730005878.jpg" alt="Eco Products" className="rounded-lg shadow-lg" />
        </div>

        {/* Why Choose Us */}
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Verified Cleaners</h3>
            <p>All cleaners are background-checked</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
            <p>We promote natural cleaning products</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
            <p>100% happy or we reclean for free</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p>Book in seconds online</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">Book Your Cleaning Today</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;