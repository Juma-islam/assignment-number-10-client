import React from "react";
import { MdCleaningServices, MdLocalOffer, MdVolunteerActivism, MdSupportAgent } from "react-icons/md";

const services = [
  {
    icon: <MdCleaningServices className="text-4xl text-green-600" />,
    title: "Community Cleaning Drives",
    description:
      "Organize or join local community cleaning initiatives to keep your neighborhood spotless.",
  },
  {
    icon: <MdLocalOffer className="text-4xl text-green-600" />,
    title: "Issue Reporting",
    description:
      "Report garbage, illegal dumping, broken public property, or road damage instantly to the community portal.",
  },
  {
    icon: <MdVolunteerActivism className="text-4xl text-green-600" />,
    title: "Volunteer Opportunities",
    description:
      "Contribute your time and energy to clean-ups, awareness campaigns, and environmental activities.",
  },
  {
    icon: <MdSupportAgent className="text-4xl text-green-600" />,
    title: "Support & Guidance",
    description:
      "Get tips on waste management, eco-friendly practices, and suggestions to improve community health.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Our Services</h1>
        <p className="opacity-90 max-w-xl mx-auto">
          Explore what CleanConnect offers to help you and your community live cleaner, greener lives.
        </p>
      </section>

      {/* Services Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-white py-14 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to Get Involved?</h2>
        <p className="text-gray-600 mb-6">
          Join a cleaning drive, report an issue, or volunteer in your community today.
        </p>
        <a
          href="/dashboard/add-issue"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Report an Issue
        </a>
      </section>
    </div>
  );
};

export default Services;
