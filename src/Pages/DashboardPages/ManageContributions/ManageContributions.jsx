import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://clean-connect-project.vercel.app/contributions")
      .then(res => res.json())
      .then(data => {
        const list = data.result || data || [];
        setContributions(Array.isArray(list) ? list : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = contributions.filter(c =>
    c.issueTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = filtered.reduce((sum, c) => sum + Number(c.amount || 0), 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Contribution?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://clean-connect-project.vercel.app/contributions/${id}`, { method: "DELETE" })
          .then(() => {
            setContributions(contributions.filter(c => c._id !== id));
            Swal.fire("Deleted!", "Contribution removed.", "success");
          });
      }
    });
  };

  const exportCSV = () => {
    const headers = ["Issue Title", "Contributor Email", "Amount", "Date"];
    const rows = filtered.map(c => [
      c.issueTitle,
      c.email,
      c.amount,
      new Date(c.date).toLocaleDateString()
    ]);

    const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contributions_report.csv";
    a.click();
  };

  if (loading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-600 mb-8 text-center">Manage Contributions</h1>

      {/* Total & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="card bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold">Total Collected</h2>
          <p className="text-4xl font-extrabold mt-2">৳{totalAmount.toLocaleString()}</p>
        </div>

        <input
          type="text"
          placeholder="Search by issue or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-96"
        />

        <button onClick={exportCSV} className="btn btn-success text-white">
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl">
        <table className="table table-zebra w-full">
          <thead className="bg-emerald-100 text-black text-lg">
            <tr>
              <th>Issue Title</th>
              <th>Contributor</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-500">
                  No contributions found
                </td>
              </tr>
            ) : (
              filtered.map(c => (
                <tr key={c._id} className="hover:bg-emerald-50">
                  <td className="font-medium max-w-md truncate">{c.issueTitle}</td>
                  <td>{c.email}</td>
                  <td className="font-bold text-green-600 text-xl">৳{c.amount}</td>
                  <td>{new Date(c.date).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => handleDelete(c._id)} className="btn btn-error btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContributions;