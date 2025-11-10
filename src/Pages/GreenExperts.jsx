import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const GreenExperts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto space-y-0">
      <h2 className="text-3xl text-center my-5 font-semibold">Meet Our Green Experts.</h2>
      <Marquee className="flex gap-5 my-5" pauseOnHover={true} speed={60}>
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="px-10 shadow-md hover:shadow-lg transition duration-300 border border-green-100 mr-5"
          >
            <figure className=" overflow-hidden">
              <img
                src={expert.image}
                alt={expert.name}
                className="object-cover mx-auto w-20 h-20 rounded-full hover:scale-105 transition-transform"
              />
            </figure>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{expert.name}</h2>
              <h3 className=" text-green-600">{expert.specialization}</h3>
              <p className="text-center text-gray-700 text-sm md:text-base max-w-xs mx-auto mt-2">
                This expert brings years of experience in plant care, sharing valuable tips, guidance, and insights to
                help you grow healthy indoor plants effortlessly every single day.
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default GreenExperts;
