import { FaUsers, FaExclamationTriangle, FaCheckCircle, FaLeaf } from "react-icons/fa";

const CommunityStats = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="w-11/12 mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Community <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">
               Impact
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Together, we are building a cleaner, healthier, and more responsible community by reporting and resolving public cleanliness issues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4 text-green-600 text-4xl">
              <FaUsers />
            </div>
            <h3 className="text-3xl font-bold">5,200+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Active Community Members
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4 text-green-600 text-4xl">
              <FaExclamationTriangle />
            </div>
            <h3 className="text-3xl font-bold">1,350+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Issues Reported
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4 text-green-600 text-4xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-3xl font-bold">980+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Successfully Resolved
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4 text-green-600 text-4xl">
              <FaLeaf />
            </div>
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Areas Made Cleaner
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
