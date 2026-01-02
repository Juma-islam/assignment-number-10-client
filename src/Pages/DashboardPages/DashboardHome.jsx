import React, { useEffect, useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const DashboardHome = () => {
  const [stats, setStats] = useState({ totalIssues: 0, totalContributions: 0, pending: 0 });
  const [recentIssues, setRecentIssues] = useState([]);

  useEffect(() => {
   
    fetch("/issues").then(res => res.json()).then(data => setStats(prev => ({ ...prev, totalIssues: data.length })));
    fetch("/contributions").then(res => res.json()).then(data => {
      const total = data.reduce((sum, c) => sum + c.amount, 0);
      setStats(prev => ({ ...prev, totalContributions: total }));
    });
    fetch("/latest-issues").then(res => res.json()).then(setRecentIssues);
  }, []);

  const pieData = [
    { name: "Open", value: 30, color: "#f59e0b" },
    { name: "In Progress", value: 20, color: "#3b82f6" },
    { name: "Resolved", value: 50, color: "#10b981" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-8">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="card bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition">
          <div className="card-body text-center">
            <h3 className="text-5xl font-bold text-emerald-600">{stats.totalIssues}</h3>
            <p>Total Reported Issues</p>
          </div>
        </div>
        <div className="card bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition">
          <div className="card-body text-center">
            <h3 className="text-5xl font-bold text-blue-600">৳{stats.totalContributions}</h3>
            <p>Total Contributions</p>
          </div>
        </div>
        <div className="card bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition">
          <div className="card-body text-center">
            <h3 className="text-5xl font-bold text-amber-500">{stats.pending}</h3>
            <p>Pending Issues</p>
          </div>
        </div>
        <div className="card bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition">
          <div className="card-body text-center">
            <h3 className="text-5xl font-bold text-green-600">92%</h3>
            <p>Resolution Rate</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="card bg-white dark:bg-gray-800 shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-4">Issue Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card bg-white dark:bg-gray-800 shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-4">Monthly Contributions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[{month:"Jan", amount:5000}, /* add real data */]}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Issues Table */}
      <div className="card bg-white dark:bg-gray-800 shadow-xl p-6">
        <h3 className="text-2xl font-bold mb-4">Recent Issues</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead><tr><th>Title</th><th>Category</th><th>Status</th><th>Date</th></tr></thead>
            <tbody>
              {recentIssues.map(issue => (
                <tr key={issue._id}>
                  <td>{issue.title}</td>
                  <td>{issue.category}</td>
                  <td><span className={`badge ${issue.status === 'resolved' ? 'badge-success' : 'badge-warning'}`}>{issue.status}</span></td>
                  <td>{new Date(issue.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;