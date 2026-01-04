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
          fetch("https://clean-connect-project.vercel.app/contributions"),
        ]);

        const issuesData = await issuesRes.json();
        const contribData = await contribRes.json();

        setIssues(Array.isArray(issuesData) ? issuesData : issuesData.result || []);
        setContributions(Array.isArray(contribData) ? contribData : contribData.result || []);
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

  // Charts Data
  const pieData = [
    { name: "Open", value: openIssues, color: "#f59e0b" },
    { name: "In Progress", value: inProgress, color: "#3b82f6" },
    { name: "Resolved", value: resolved, color: "#10b981" },
  ];

  const monthlyData = contributions.reduce((acc, c) => {
    const month = new Date(c.date).toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + Number(c.amount || 0);
    return acc;
  }, {});

  const barData = Object.keys(monthlyData).map((month) => ({
    month,
    amount: monthlyData[month],
  }));

  const recentIssues = [...issues].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
        Dashboard Overview
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <StatCard icon={<FaExclamationTriangle />} value={totalIssues} label="Total Issues" color="text-orange-500" />
        <StatCard
          icon={<FaDonate />}
          value={`৳${totalContributions.toLocaleString()}`}
          label="Total Contributions"
          color="text-emerald-600"
        />
        <StatCard icon={<FaClock />} value={openIssues + inProgress} label="Pending Issues" color="text-amber-500" />
        <StatCard
          icon={<FaCheckCircle />}
          value={`${resolutionRate}%`}
          label="Resolution Rate"
          color="text-green-600"
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <ChartCard title="Issue Status Distribution">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={120} label>
                {pieData.map((e, i) => (
                  <Cell key={i} fill={e.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Monthly Contributions">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={barData.length ? barData : [{ month: "N/A", amount: 0 }]}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(v) => `৳${v}`} />
              <Bar dataKey="amount" fill="#10b981" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* RECENT ISSUES */}
      <div className="card bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="card-body">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Recent Issues</h3>

          {/* DESKTOP TABLE */}
          <div className="hidden lg:block">
            <table className="table table-zebra w-full table-fixed">
              <thead className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg">
                <tr>
                  <th>Title</th>
                  <th className="w-[140px]">Category</th>
                  <th className="w-[140px]">Status</th>
                  <th className="w-[120px]">Amount</th>
                  <th className="w-[130px]">Date</th>
                  <th className="w-[130px]">View</th>
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
                  recentIssues.map((issue) => (
                    <tr key={issue._id}>
                      <td title={issue.title} className="font-medium max-w-[220px] truncate">
                        {issue.title}
                      </td>
                      <td>
                        <span className="badge badge-primary">{issue.category}</span>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            issue.status === "resolved"
                              ? "badge-success"
                              : issue.status === "in-progress"
                              ? "badge-info"
                              : "badge-warning"
                          }`}
                        >
                          {issue.status || "open"}
                        </span>
                      </td>
                      <td className="font-bold text-emerald-600">৳{issue.amount}</td>
                      <td>{new Date(issue.date).toLocaleDateString()}</td>
                      <td>
                        <Link to={`/issues/${issue._id}`} className="btn btn-sm btn-outline btn-success w-full">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARD */}
          <div className="lg:hidden space-y-4">
            {recentIssues.length === 0 ? (
              <p className="text-center text-gray-500 py-6">No issues reported yet</p>
            ) : (
              recentIssues.map((issue) => (
                <div key={issue._id} className="border rounded-xl p-4 space-y-2 shadow-sm">
                  <h4 className="font-semibold truncate">{issue.title}</h4>

                  <div className="flex justify-between">
                    <span className="badge badge-primary">{issue.category}</span>
                    <span
                      className={`badge ${
                        issue.status === "resolved"
                          ? "badge-success"
                          : issue.status === "in-progress"
                          ? "badge-info"
                          : "badge-warning"
                      }`}
                    >
                      {issue.status || "open"}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Amount:</span>
                    <span className="font-semibold text-emerald-600">৳{issue.amount}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Date:</span>
                    <span>{new Date(issue.date).toLocaleDateString()}</span>
                  </div>

                  <Link to={`/issues/${issue._id}`} className="btn btn-sm btn-outline btn-success w-full mt-2">
                    View Details
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* REUSABLE COMPONENTS */
const StatCard = ({ icon, value, label, color }) => (
  <div className="card bg-white shadow-2xl text-center">
    <div className="card-body">
      <div className={`text-4xl mb-4 mx-auto ${color}`}>{icon}</div>
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="text-lg mt-2 text-gray-600">{label}</p>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="card bg-white shadow-2xl p-8 rounded-3xl">
    <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">{title}</h3>
    {children}
  </div>
);

export default DashboardHome;
