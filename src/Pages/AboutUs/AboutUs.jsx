import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section
        className="relative h-[420px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1354898581/photo/volunteers-collecting-garbage-in-park.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CleanConnect</h1>
          <p className="text-lg md:text-xl opacity-90">
            Connecting communities to create a cleaner, greener, and healthier environment together.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Our Story</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
          CleanConnect was created to bridge the gap between community problems and people who care. From small
          neighborhood clean-ups to larger environmental initiatives, our platform empowers citizens to report issues,
          contribute to solutions, and build a cleaner future together.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To simplify reporting environmental issues and enable collective action through transparency and community
              support.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A world where every community actively participates in maintaining cleanliness and environmental
              responsibility.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Sustainability, accountability, transparency, and collaboration drive everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-10">Why Choose CleanConnect</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg mb-2">Community Driven</h4>
            <p className="text-gray-600 text-sm">Built for people who care about their surroundings.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg mb-2">Transparent Process</h4>
            <p className="text-gray-600 text-sm">Track issues, contributions, and progress in real-time.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg mb-2">Secure Contributions</h4>
            <p className="text-gray-600 text-sm">Safe and reliable clean-up funding system.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg mb-2">Impact Focused</h4>
            <p className="text-gray-600 text-sm">Every action helps improve the environment.</p>
          </div>
        </div>
      </section>

      <section className="bg-green-600 py-14">
        <div className="text-center text-white px-6">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="mb-6 opacity-90">Report issues, support clean-ups, and help create a better environment.</p>
          <a
            href="/issues"
            className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Explore Issues
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
