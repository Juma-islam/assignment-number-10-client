import React from "react";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdCategory, MdLocationPin} from "react-icons/md";
import { Link } from "react-router";

const IssueCard = ({ issue, showAmount = false }) => {
  const { _id, image, title, category, location, amount, description } = issue;

  return (
    <div className="group">
      <div className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700">
       
        <figure className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </figure>

        {/* Body */}
        <div className="card-body py-2 px-6">
          {/* Title */}
          <h2 className="card-title text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
            {title}
          </h2>

          {/* Category Badge */}
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
            <MdCategory  className="text-xl text-blue-500"/>
            <span className="truncate">
              {category}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
            <MdLocationPin className="text-xl text-blue-500" />
            <span className="truncate">{location}</span>
          </div>

          {/* Amount */}
          {showAmount && (
            <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-bold text-lg">
              <LuBadgeDollarSign className="text-2xl text-green-500" />
              <span>৳{amount?.toLocaleString()}</span>
            </div>
          )}

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
            {description}
          </p>

          <div className="card-actions mt-6">
            <Link
              to={`/issues/${_id}`}
              className="btn btn-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-lg shadow-lg border-none"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
