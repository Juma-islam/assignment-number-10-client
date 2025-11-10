import React from "react";
import { useLoaderData } from "react-router";
import PlantCareTips from "./PlantCareTips";
import GreenExperts from "./GreenExperts";
import PlantOfWeek from "./PlantOfWeek";
import BannerSection from "./BannerSection";
import CategorySection from "./CategorySection/CategorySection";
import IssueCard from "./IssueCard";

const Home = () => {
  const data = useLoaderData();
  const sortedPlants = [...data].sort((a, b) => b.rating - a.rating);
  return (
    <div className="">
      <title>Home Page</title>
      <BannerSection></BannerSection>
      <CategorySection></CategorySection>
      <h2 className="text-center text-3xl font-semibold my-5">Top rated Indore Plants</h2>
      <p className="text-center text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-5">
        Discover the beauty of nature inside your home with our top-rated indoor plants. These green companions purify
        air, boost mood, and bring peaceful energy to your space.
      </p>
      <div className="grid md:grid-cols-3 bg-green-50 gap-5 w-11/12 mx-auto">
        {sortedPlants.slice(0, 6).map((issue) => (
          <IssueCard key={issue._id} issue={issue}></IssueCard>
        ))}
      </div>
      <PlantCareTips></PlantCareTips>
      <GreenExperts></GreenExperts>
      <PlantOfWeek></PlantOfWeek>
    </div>
  );
};

export default Home;
