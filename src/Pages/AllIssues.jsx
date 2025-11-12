
import { useLoaderData } from "react-router";
import IssueCard from "./IssueCard";

const AllIssues = () => {
  const issues = useLoaderData();


  return (
    <div className="w-11/12 mx-auto my-3">
      <title>All Issues</title>
      <h2 className="text-3xl text-center my-5 font-semibold">
        All Reported <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">Issues</span>
      </h2>
      <p className="text-center text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-5">
        Browse all reported issues related to garbage, road damage, and community cleanliness. Stay informed and join
        hands in making our surroundings cleaner, safer, and more sustainable.
      </p>
      <div className="grid md:grid-cols-3 bg-green-100 gap-6">
        {
          issues.map(issue => (
            <IssueCard key={issue._id} issue={issue}></IssueCard>
          ))
        }
        
      </div>
    </div>
  );
};

export default AllIssues;
