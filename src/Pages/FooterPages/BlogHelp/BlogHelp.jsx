import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Simple Ways to Keep Your Community Clean",
    snippet: "Learn how small actions like proper waste disposal and community participation can make your neighborhood cleaner and safer.",
    date: "Jan 2, 2026",
    image: "https://i.ibb.co.com/LzMb9sMG/group-volunteers-collecting-garbage.jpg",
  },
  {
    id: 2,
    title: "Eco-Friendly Cleaning Products You Should Try",
    snippet: "Switching to eco-friendly cleaning products helps the environment while keeping your home fresh and healthy.",
    date: "Dec 15, 2025",
    image: "https://i.ibb.co.com/q341Tdj0/lady-glasses-standing-greenhouse-near-plants.jpg",
  },
  {
    id: 3,
    title: "The Importance of Community Awareness Campaigns",
    snippet: "Awareness campaigns empower citizens to take action and maintain clean and safe neighborhoods.",
    date: "Nov 28, 2025",
    image: "https://i.ibb.co.com/bRGxxkdD/young-voluntteers-work-distribution-center-looking-busy.jpg",
  },
];

const BlogHelp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Our Blog</h1>
        <p className="opacity-90 max-w-xl mx-auto">
          Stay updated with the latest tips, news, and stories on community cleaning and sustainability.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.snippet}</p>
              <a
                href="#"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogHelp;
