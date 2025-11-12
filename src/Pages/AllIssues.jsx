
import IssueCard from "./IssueCard";
import { useEffect, useState } from "react";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let url = "https://clean-connect-project.vercel.app/issues?";
    if(category) url += `category=${category}&`;
    if(status) url += `status=${status}&`;

    fetch(url)
    .then(res => res.json())
    .then(data => setIssues(data));
  }, [category, status])


  return (
    <div className="w-11/12 mx-auto my-3">
      <title>All Issues</title>
      <h2 className="text-3xl text-center my-5 font-semibold">
        All Reported <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">Issues</span>
      </h2>
      {/* filter section  */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        {/* category  */}
        <select className="select select-bordered w-full md:w-52" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Community">Community</option>
        </select>
        {/* status  */}
           <select className="select select-bordered w-full md:w-52" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
      <p className="text-center text-gray-700 dark:text-white/80 text-sm md:text-base max-w-3xl mx-auto mb-5">
        Browse all reported issues related to garbage, road damage, and community cleanliness. Stay informed and join
        hands in making our surroundings cleaner, safer, and more sustainable.
      </p>
      <div className="grid md:grid-cols-3 bg-green-100 gap-6">
        {
          issues.length > 0 ? (
            issues.map((issue) => <IssueCard key={issue._id} issue={issue}/>)
          )
          : (
            <p className="text-center col-span-3 text-gray-600">No issues found</p>
          )
        }
       
        
      </div>
    </div>
  );
};

export default AllIssues;
