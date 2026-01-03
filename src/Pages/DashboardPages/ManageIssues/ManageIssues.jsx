import React, { useEffect, useState } from "react";

const ManageIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("/issues").then(res => res.json()).then(setIssues);
  }, []);

  const handleDelete = (id) => {
    if (confirm("Delete this issue?")) {
      fetch(`/issues/${id}`, { method: "DELETE" })
        .then(() => setIssues(issues.filter(i => i._id !== id)));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    fetch(`/issues/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: newStatus })
    }).then(() => {
      setIssues(issues.map(i => i._id === id ? { ...i, status: newStatus } : i));
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-red-600 mb-8">Manage All Issues</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-red-100">
            <tr>
              <th>Title</th>
              <th>Reporter</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => (
              <tr key={issue._id} className="hover:bg-red-50">
                <td>{issue.title}</td>
                <td>{issue.email}</td>
                <td><span className="badge badge-primary">{issue.category}</span></td>
                <td>
                  <select
                    value={issue.status || "open"}
                    onChange={(e) => handleStatusChange(issue._id, e.target.value)}
                    className="select select-sm"
                  >
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleDelete(issue._id)} className="btn btn-error btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageIssues;