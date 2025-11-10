import React, { useEffect, useState } from "react";

const PlantOfWeek = () => {
  const [week, setWeek] = useState([]);
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setWeek(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center my-5 font-semibold">Plant of the week</h2>
      <p className="text-center text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-10">
        This beautiful indoor plant requires minimal care, bright indirect light, regular watering, and adds natural
        beauty to any home or office space effortlessly every day.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 w-11/12 mx-auto">
        {week.slice(0, 5).map((w) => (
          <div key={w.plantId} className="card card-sm bg-base-200 max-w-60 shadow">
            <figure className="hover-gallery">
              <img src={w.image} className="h-40" />
              <img src={w.image} />
              <img src={w.image} />
              <img src={w.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {w.plantName}
                <span className="font-normal">{w.careLevel}</span>
              </h2>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantOfWeek;
