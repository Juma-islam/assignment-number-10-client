import React from "react";
import { useLoaderData } from "react-router";
import BannerSection from "./BannerSection";
import CategorySection from "./CategorySection/CategorySection";
import IssueCard from "./IssueCard";
import CommunityStats from "./ComunityStates/ComunityStates";
import VolunteerCTA from "./VolunterrCTA/VolunteerCTA";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="">
      <title>Home Page</title>
      <BannerSection></BannerSection>
      <CategorySection></CategorySection>
      <h2 className="text-center text-3xl font-semibold my-5">Latest Reported <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">Issues</span></h2>
      <p className="text-center text-gray-700 dark:text-white/80 text-sm md:text-base max-w-3xl mx-auto mb-5">
         Stay updated with the most recent issues reported by our community. From garbage collection delays to road damage and neighborhood problems — see what’s happening around you and take part in building a cleaner, safer city.
      </p>
      <div className="grid md:grid-cols-3 bg-green-50 gap-5 w-11/12 mx-auto">
        {data.map((issue) => (
          <IssueCard key={issue._id} issue={issue} showAmount={false}></IssueCard>
        ))}
      </div>
      <CommunityStats></CommunityStats>
      <VolunteerCTA></VolunteerCTA>
    </div>
  );
};

export default Home;
