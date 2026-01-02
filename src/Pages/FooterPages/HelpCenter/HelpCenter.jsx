import React from 'react';
import { Link } from 'react-router';

const HelpCard = ({ title, description, category, image, link = "#" }) => {
  return (
    <div className="mt-5 w-11/12 mx-auto">
      <div className="card bg-base-100 w-full shadow-sm hover:scale-105 transition-transform overflow-hidden">
        <figure className="rounded-md m-4 overflow-hidden">
          <img className="h-52 md:h-76 w-full object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="badge text-xs badge-xs bg-green-500 rounded-full dark:text-white/80">{category}</p>
          <p className="text-gray-700 dark:text-white/70 text-sm mb-2">{description.slice(0, 100)}...</p>

          <Link
            to={link}
            className="btn w-full text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 border-none"
          >
            Read Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

const HelpCenter = () => {
  const guides = [
    { title: "How to Book Your First Cleaning", description: "Step-by-step guide for new customers to book a professional cleaner easily and quickly.", category: "Getting Started", image: "https://static.vecteezy.com/system/resources/thumbnails/073/851/373/small/professional-cleaning-women-team-illustration-vector.jpg" },
    { title: "Eco-Friendly Cleaning Tips", description: "Learn natural cleaning methods and products that are safe for your family and the environment.", category: "Tips & Tricks", image: "https://media.istockphoto.com/id/1184141328/vector/use-eco-friendly-detergents.jpg?s=612x612&w=0&k=20&c=w7E0FBWlcvHsbZwKc9Kbn3M1Y9HtDoJabcc6bGxy4_0=" },
    { title: "Becoming a Cleaner on CleanConnect", description: "Complete guide for cleaners to join, create profile, and start earning.", category: "For Cleaners", image: "https://cdn.dribbble.com/userupload/43584940/file/original-2baf48c0400e697a098d15236b5c39f3.jpg?resize=752x&vertical=center" },
    { title: "Safety & Trust Guidelines", description: "How we ensure background checks, reviews, and secure payments for everyone.", category: "Safety", image: "https://www.shutterstock.com/image-vector/isometric-professional-house-cleaning-service-600nw-2043312755.jpg" },
    { title: "Cancellation & Refund Policy", description: "Everything you need to know about cancellations, rescheduling, and refunds.", category: "Policy", image: "https://img.freepik.com/premium-vector/professional-female-janitor-cleaning-work-table-modern-office-environment-illustration_1339080-109.jpg" },
    { title: "Deep Cleaning Checklist", description: "Professional checklist for thorough home cleaning – perfect for seasonal refresh.", category: "Tips & Tricks", image: "https://cdni.iconscout.com/illustration/premium/thumb/home-cleaning-service-workers-illustration-svg-download-png-4668378.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">Help Center</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">Guides, tips, and resources to get the most out of CleanConnect</p>
      </div>

      {/* Help Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {guides.map((guide, index) => (
          <HelpCard key={index} {...guide} />
        ))}
      </div>

      {/* Search or Contact */}
      <div className="text-center mt-16">
        <p className="text-lg mb-6">Can't find what you're looking for?</p>
        <a href="/contact" className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 text-lg">Contact Our Support Team</a>
      </div>
    </div>
  );
};

export default HelpCenter;