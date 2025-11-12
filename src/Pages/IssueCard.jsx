import React from "react";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router";
import { MdLocationPin } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
// import { useLoaderData } from 'react-router';

const IssueCard = ({ issue }) => {
  // const data = useLoaderData();
  const { image, title, category, location, amount } = issue;
  return (
    <div className="mt-5 w-11/12 mx-auto">
      <div className="card bg-base-100 w-[100%] shadow-sm hover:scale-105 transition-transform overflow-hidden">
        <figure className="rounded-md m-4 overflow-hidden">
          <img
            className=" h-52 md:h-76  w-full object-cover"
            src={image}
            alt="title"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className=" text-gray-700 dark:text-white/80 font-semibold flex gap-2 items-center"><span className="text-xl text-indigo-400"><BiSolidCategory /></span> {category}</div>
          <p className="flex gap-2 items-center dark:text-white/80 text-gray-700 font-semibold ">
            <span className=" text-blue-500 text-xl">
              <MdLocationPin />
            </span>
            {location}
          </p>
          <p className="flex gap-2 items-center dark:text-white/80 text-gray-700 font-semibold">
            <span className="text-xl text-green-500"><LuBadgeDollarSign /></span>{" "}{amount}</p>

          <Link
            to={`/issues/${issue._id}`}
            className="btn w-full text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 border-none"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default IssueCard;
