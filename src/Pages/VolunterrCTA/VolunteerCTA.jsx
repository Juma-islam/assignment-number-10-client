import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router";

const VolunteerCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/95 dark:bg-gray-900 rounded-2xl shadow-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Become a <span className="text-green-600">Volunteer</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Join our volunteer community and take part in making neighborhoods cleaner and healthier.
              Your small contribution can create a big impact by helping report issues, support cleanup
              efforts, and raise awareness for a greener future.
            </p>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✔ Help identify and report public cleanliness issues</li>
              <li>✔ Support local cleanup initiatives</li>
              <li>✔ Be a part of a responsible community movement</li>
            </ul>
          </div>

          <div className="md:w-1/3 text-center">
            <div className="text-green-600 text-6xl mb-4 flex justify-center">
              <FaHandsHelping />
            </div>

            <Link
              to="/#"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
            >
              Join as Volunteer
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              No experience required • Anyone can join
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;
