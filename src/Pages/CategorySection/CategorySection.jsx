import React from "react";
import { Construction, Hammer, Leaf, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Garbage",
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    img: "https://i.ibb.co.com/vCMycDxj/ariungoo-batzorig-K6-Ehm-Bl-LIk8-unsplash.jpg",
    description: "Report garbage piles or overflowing bins to keep your area clean.",
  },
  {
    id: 2,
    name: "Illegal construction",
    icon: <Construction className="w-10 h-10 text-yellow-600" />,
    img: "https://i.ibb.co.com/XkVNFTbp/nicholas-safran-pu-QFr-Zg9lg-Q-unsplash.jpg",
    description: "Identify unsafe or unauthorized building activities nearby.",
  },
  {
    id: 3,
    name: "Broken public property",
    icon: <Hammer className="w-10 h-10 text-rose-600" />,
    img: "https://i.ibb.co.com/dw9Sjmwv/sushanta-rokka-tkhx-By-Eq9bs-unsplash.jpg",
    description: "Report damaged benches, streetlights, or any public assets.",
  },
  {
    id: 4,
    name: "Road Damage",
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    img: "https://i.ibb.co.com/whmv67rg/ehimetalor-akhere-unuabona-Yq-T4v0d-EPhc-unsplash.jpg",
    description: "Help fix potholes or damaged roads by reporting issues quickly.",
  },
];
const CategorySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-7xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="text-4xl font-bold text-gray-800 mb-4">
          Report By <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">Category</span>
        </motion.h2>
        <p className="text-gray-600 mb-12">Select the issue type you want to report - together we can make our community cleaner and safer.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
                <motion.div key={cat.id} initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
<div className="relative h-48 overflow-hidden">
    <img src={cat.img}alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">{cat.icon}</div>
</div>
<div className="p-5 text-left">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">{cat.name}</h3>
    <p className="text-gray-600 text-sm">{cat.description}</p>
</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
