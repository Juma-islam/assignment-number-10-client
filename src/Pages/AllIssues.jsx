import React, { useEffect, useState } from "react";
import IssueCard from "./IssueCard";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);
  const issuesPerPage = 6;

  useEffect(() => {
    fetch("https://clean-connect-project.vercel.app/issues")
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : data.result || [];
        setIssues(list);
        setFilteredIssues(list);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = [...issues];

    if (searchTerm) {
      filtered = filtered.filter(
        (issue) =>
          issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          issue.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((issue) => issue.category === category);
    }

    filtered.sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortBy === "amount-high") return b.amount - a.amount;
      if (sortBy === "amount-low") return a.amount - b.amount;
      return 0;
    });

    setFilteredIssues(filtered);
    setCurrentPage(1);
  }, [searchTerm, category, sortBy, issues]);

  const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);
  const startIndex = (currentPage - 1) * issuesPerPage;
  const currentIssues = filteredIssues.slice(startIndex, startIndex + issuesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          All Reported Issues
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-3xl mx-auto">
          Explore community-reported issues. Use filters, search, and sort to find what matters to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full focus:ring-2 focus:ring-emerald-500"
          />

   
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Categories</option>
            <option value="Garbage">Garbage</option>
            <option value="Road Damage">Road Damage</option>
            <option value="Illegal Construction">Illegal Construction</option>
            <option value="Broken Public Property">Broken Public Property</option>
          </select>

      
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered w-full focus:ring-2 focus:ring-emerald-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="amount-high">Highest Amount</option>
            <option value="amount-low">Lowest Amount</option>
          </select>
        </div>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-6 font-medium">
          Showing {currentIssues.length} of {filteredIssues.length} issues
        </p>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card bg-white dark:bg-gray-800 shadow-xl rounded-2xl animate-pulse">
                <div className="h-56 bg-gray-300 dark:bg-gray-700 rounded-t-2xl"></div>
                <div className="card-body p-6">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : currentIssues.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 dark:text-gray-400">No issues found matching your filters.</p>
          </div>
        ) : (
          <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
              {currentIssues.map((issue) => (
                <IssueCard key={issue._id} issue={issue} showAmount={true} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="btn btn-outline btn-emerald disabled:opacity-50"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`btn ${currentPage === i + 1 ? "btn-active bg-emerald-600 text-white" : "btn-outline"}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline btn-emerald disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllIssues;
