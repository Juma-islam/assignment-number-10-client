import React, { useEffect, useState } from "react";

const ManageContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    fetch("/contributions").then(res => res.json()).then(setContributions);
  }, []);

  const totalAmount = contributions.reduce((sum, c) => sum + c.amount, 0);

  return (
    <div>
      <h1 className="text-4xl font-bold text-emerald-600 mb-8">Manage Contributions</h1>
      <div className="card bg-white dark:bg-gray-800 shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold">Total Collected: ৳{totalAmount}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-emerald-100">
            <tr><th>Issue Title</th><th>Contributor</th><th>Amount</th><th>Date</th></tr>
          </thead>
          <tbody>
            {contributions.map(c => (
              <tr key={c._id}>
                <td>{c.issueTitle}</td>
                <td>{c.email}</td>
                <td className="font-bold text-green-600">৳{c.amount}</td>
                <td>{new Date(c.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContributions;