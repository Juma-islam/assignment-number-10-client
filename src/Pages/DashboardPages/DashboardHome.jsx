import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaExclamationTriangle, FaDonate, FaCheckCircle, FaClock } from "react-icons/fa";

const DashboardHome = () => {
  const [issues, setIssues] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [issuesRes, contribRes] = await Promise.all([
          fetch("https://clean-connect-project.vercel.app/issues"),
          fetch("https://clean-connect-project.vercel.app/contributions")
        ]);

        const issuesData = await issuesRes.json();
        const contribData = await contribRes.json();

        // Handle possible { result: [...] } structure
        const allIssues = Array.isArray(issuesData) ? issuesData : issuesData.result || [];
        const allContribs = Array.isArray(contribData) ? contribData : contribData.result || [];

        setIssues(allIssues);
        setContributions(allContribs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculations
  const totalIssues = issues.length;
  const totalContributions = contributions.reduce((sum, c) => sum + Number(c.amount || 0), 0);

  const statusCount = issues.reduce((acc, issue) => {
    const status = issue.status || "open";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const openIssues = statusCount.open || 0;
  const inProgress = statusCount["in-progress"] || 0;
  const resolved = statusCount.resolved || 0;
  const resolutionRate = totalIssues > 0 ? Math.round((resolved / totalIssues) * 100) : 0;

  // Pie Chart Data
  const pieData = [
    { name: "Open", value: openIssues, color: "#f59e0b" },
    { name: "In Progress", value: inProgress, color: "#3b82f6" },
    { name: "Resolved", value: resolved, color: "#10b981" },
  ];

  // Monthly Contributions for Bar Chart
  const monthlyData = contributions.reduce((acc, c) => {
    const date = new Date(c.date);
    const month = date.toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + Number(c.amount || 0);
    return acc;
  }, {});

  const barData = Object.keys(monthlyData)
    .sort((a, b) => new Date(`1 ${a} 2026`) - new Date(`1 ${b} 2026`))
    .map(month => ({
      month,
      amount: monthlyData[month]
    }));

  // Recent Issues (latest 6)
  const recentIssues = [...issues]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="card bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-2xl hover:scale-105 transition-transform">
          <div className="card-body text-center">
            <FaExclamationTriangle className="text-5xl mx-auto mb-4" />
            <h3 className="text-5xl font-bold">{totalIssues}</h3>
            <p className="text-xl mt-2">Total Issues</p>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl hover:scale-105 transition-transform">
          <div className="card-body text-center">
            <FaDonate className="text-5xl mx-auto mb-4" />
            <h3 className="text-5xl font-bold">৳{totalContributions.toLocaleString()}</h3>
            <p className="text-xl mt-2">Total Contributions</p>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-2xl hover:scale-105 transition-transform">
          <div className="card-body text-center">
            <FaClock className="text-5xl mx-auto mb-4" />
            <h3 className="text-5xl font-bold">{openIssues + inProgress}</h3>
            <p className="text-xl mt-2">Pending Issues</p>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-2xl hover:scale-105 transition-transform">
          <div className="card-body text-center">
            <FaCheckCircle className="text-5xl mx-auto mb-4" />
            <h3 className="text-5xl font-bold">{resolutionRate}%</h3>
            <p className="text-xl mt-2">Resolution Rate</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Pie Chart - Issue Status */}
        <div className="card bg-white dark:bg-gray-800 shadow-2xl p-8 rounded-3xl">
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Issue Status Distribution
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} issues`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Monthly Contributions */}
        <div className="card bg-white dark:bg-gray-800 shadow-2xl p-8 rounded-3xl">
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Monthly Contributions
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={barData.length > 0 ? barData : [{ month: "No Data", amount: 0 }]}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `৳${value.toLocaleString()}`} />
              <Bar dataKey="amount" fill="#10b981" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Issues Table */}
      <div className="card bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden">
        <div className="card-body">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Recent Issues
          </h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {recentIssues.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-500">
                      No issues reported yet
                    </td>
                  </tr>
                ) : (
                  recentIssues.map(issue => (
                    <tr key={issue._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="font-medium max-w-xs truncate">{issue.title}</td>
                      <td>
                        <span className="badge badge-primary">{issue.category}</span>
                      </td>
                      <td>
                        <span className={`badge ${
                          issue.status === "resolved" ? "badge-success" :
                          issue.status === "in-progress" ? "badge-info" : "badge-warning"
                        }`}>
                          {issue.status || "open"}
                        </span>
                      </td>
                      <td className="font-bold text-emerald-600">৳{issue.amount}</td>
                      <td>{new Date(issue.date).toLocaleDateString()}</td>
                      <td>
                        <Link
                          to={`/issues/${issue._id}`}
                          className="btn btn-sm btn-outline btn-success"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;