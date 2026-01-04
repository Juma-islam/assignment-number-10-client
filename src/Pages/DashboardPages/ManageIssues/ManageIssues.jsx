import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";

const ManageIssues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const updateModalRef = useRef(null);

  useEffect(() => {
    fetch("https://clean-connect-project.vercel.app/issues")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    fetch(`https://clean-connect-project.vercel.app/issues/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then(() => {
        setIssues(issues.map((i) => (i._id === id ? { ...i, status: newStatus } : i)));
        Swal.fire("Success", "Status updated!", "success");
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This issue will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://clean-connect-project.vercel.app/issues/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            setIssues(issues.filter((i) => i._id !== id));
            Swal.fire("Deleted!", "Issue has been deleted.", "success");
          });
      }
    });
  };

  const handleUpdateClick = (issue) => {
    setSelectedIssue(issue);
    updateModalRef.current.showModal();
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      title: form.title.value,
      category: form.category.value,
      amount: Number(form.amount.value),
      description: form.description.value,
    };

    fetch(`https://clean-connect-project.vercel.app/issues/${selectedIssue._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        setIssues(issues.map((i) => (i._id === selectedIssue._id ? { ...i, ...updatedData } : i)));
        Swal.fire("Updated!", "Issue has been updated.", "success");
        updateModalRef.current.close();
      });
  };

  if (loading)
    return (
      <div className="text-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <title>Manage Issues</title>
      <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">Manage All Issues</h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl">
        <table className="table table-zebra w-full">
          <thead className="bg-red-100 text-black text-lg">
            <tr>
              <th>Title</th>
              <th>Reporter</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No issues found
                </td>
              </tr>
            ) : (
              issues.map((issue) => (
                <tr key={issue._id} className="hover:bg-red-50">
                  <td className="font-medium max-w-xs truncate">{issue.title}</td>
                  <td>{issue.email}</td>
                  <td>
                    <span className="badge badge-primary">{issue.category}</span>
                  </td>
                  <td className="font-bold">৳{issue.amount}</td>
                  <td>
                    <select
                      value={issue.status || "open"}
                      onChange={(e) => handleStatusChange(issue._id, e.target.value)}
                      className="select select-sm select-bordered w-full max-w-xs"
                    >
                      <option value="open">Open</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="space-x-2">
                    <button onClick={() => handleUpdateClick(issue)} className="btn btn-info btn-sm">
                      Update
                    </button>
                    <button onClick={() => handleDelete(issue._id)} className="btn btn-error btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      
      <dialog ref={updateModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl mb-6 text-center">Update Issue</h3>
          {selectedIssue && (
            <form onSubmit={handleUpdateSubmit} className="space-y-5">
              <input
                type="text"
                name="title"
                defaultValue={selectedIssue.title}
                className="input input-bordered w-full"
                required
              />
              <select name="category" defaultValue={selectedIssue.category} className="select select-bordered w-full">
                <option value="Garbage">Garbage</option>
                <option value="Illegal Construction">Illegal Construction</option>
                <option value="Broken Public Property">Broken Public Property</option>
                <option value="Road Damage">Road Damage</option>
              </select>
              <input
                type="number"
                name="amount"
                defaultValue={selectedIssue.amount}
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="description"
                defaultValue={selectedIssue.description}
                className="textarea textarea-bordered w-full h-32"
                required
              />
              <button type="submit" className="btn btn-success btn-block text-white text-lg">
                Save Changes
              </button>
            </form>
          )}
          <div className="modal-action">
            <button type="button" onClick={() => updateModalRef.current.close()} className="btn">
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ManageIssues;
