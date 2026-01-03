import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useRef } from "react";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [issues, setIssues] = useState([]);
  const updateModalRef = useRef(null);
  const [selectedIssue, _] = useState(null);

  useEffect(() => {
    fetch(`https://clean-connect-project.vercel.app/my-issues/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setIssues(data.result);
      });
  }, [user.email]);

  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <title>My Issues Page</title>
      <h1 className="text-3xl font-bold mb-6 text-center">
        My{" "}
        <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">
          Issues
        </span>
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full border">
          <thead className="bg-gray-100 dark:text-black">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
             
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue._id}>
                <td>{issue.title}</td>
                <td>{issue.category}</td>
                <td>{issue.amount}</td>
                <td>{issue.status}</td>
              </tr>
            ))}
            {issues.length === 0 && (
              <tr>
                <td className="text-center py-4 text-gray-500">No issues found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      <dialog ref={updateModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update Issue</h3>
          {selectedIssue && (
            <form className="space-y-3">
              <input
                type="text"
                name="title"
                defaultValue={selectedIssue.title}
                className="input w-full input-bordered"
                required
              />
              <select name="category" defaultValue={selectedIssue.category} className="select w-full input-bordered">
                <option value="Garbage">Garbage</option>
                <option value="Illegal Construction">Illegal Construction</option>
                <option value="Broken Public Property">Broken Public Property</option>
                <option value="Road Damage">Road Damage</option>
              </select>
              <input
                type="number"
                name="amount"
                defaultValue={selectedIssue.amount}
                className="input w-full input-bordered"
                required
              />
              <textarea
                name="description"
                defaultValue={selectedIssue.description}
                className="textarea w-full textarea-bordered"
                required
              ></textarea>
              <select name="status" defaultValue={selectedIssue.status} className="select w-full input-bordered">
                <option value="ongoing">Ongoing</option>
                <option value="ended">Ended</option>
              </select>
              <button type="submit" className="btn w-full btn-primary mt-3">
                Update
              </button>
            </form>
          )}
          <div className="modal-action">
            <button onClick={() => updateModalRef.current.close()} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyIssues;
