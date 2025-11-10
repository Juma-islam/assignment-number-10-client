import React, { useEffect, useState } from "react";

const PlantCareTips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("/plantCareTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl text-center my-5 font-semibold">Plant Care Tips</h2>
      <p className="text-center text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-10">
        Taking proper care of your indoor plants helps them grow healthy and vibrant. Regular watering, sunlight, and
        love keep your green companions happy and thriving.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-5 my-5">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300 border border-green-100"
          >
            <figure className="h-44 overflow-hidden">
              <img
                src={tip.image}
                alt={tip.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-green-600">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
