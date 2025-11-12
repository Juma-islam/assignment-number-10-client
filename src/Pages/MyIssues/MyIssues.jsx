import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyIssues = () => {
    const {user} = use(AuthContext);
    const [issues, setIssues] = useState([]);
    const updateModalRef = useRef(null);
    const [selectedIssue, setSelectedIssue] = useState(null);
     const navigate = useNavigate()

    useEffect(()=> {
        fetch(`http://localhost:5000/my-issues/${user.email}`)
        .then(res => res.json())
        .then(data => {
            if(data.success) setIssues(data.result);
        });
    }, [user.email]);

    // update modal 
    const handleUpdateClick = (issue)=> {
        setSelectedIssue(issue);
        updateModalRef.current.showModal();
    };

    // submit update 
    const handleUpdateSubmit = (e)=>{
        const updatedData = {
            title: e.target.title.value,
            category: e.target.category.value,
            amount: Number(e.target.amount.value),
            description: e.target.description.value,
            status: e.target.status.value,
        };

        fetch(`http://localhost:5000/issues/${selectedIssue._id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData),
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success("Issue Updated!");
                updateModalRef.current.close();
                 setIssues(prev =>
            prev.map(i => i._id === selectedIssue._id ? { ...i, ...updatedData } : i)
          );
            }
        });
    };

    const handleDelete = (id) => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {      
    fetch(`http://localhost:5000/issues/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data=> {
         if(data.success){
          setIssues(prev => prev.filter(issue => issue._id !== id));
          Swal.fire("Deleted!", "Your issue has been deleted.", "success");
        }
      console.log(data)
      navigate('/all-issues')

         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    })
    .catch(err => {
      console.log(err)
    })
  }
});
 }
    return (
        <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My <span className='bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent'>Issues</span></h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full border">
          <thead className="bg-gray-100 dark:text-black">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {issues.map(issue => (
              <tr key={issue._id}>
                <td>{issue.title}</td>
                <td>{issue.category}</td>
                <td>{issue.amount}</td>
                <td>{issue.status}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={()=> handleUpdateClick(issue)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={()=> handleDelete(issue._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {issues.length === 0 && (
              <tr>
                <td className='text-center py-4 text-gray-500'>
                  No issues found
                </td>
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
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                defaultValue={selectedIssue.title}
                className="input w-full input-bordered"
                required
              />
              <select
                name="category"
                defaultValue={selectedIssue.category}
                className="select w-full input-bordered"
              >
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
              <select
                name="status"
                defaultValue={selectedIssue.status}
                className="select w-full input-bordered"
              >
                <option value="ongoing">Ongoing</option>
                <option value="ended">Ended</option>
              </select>
              <button type="submit" className="btn w-full btn-primary mt-3">
                Update
              </button>
            </form>
          )}
          <div className="modal-action">
            <button onClick={()=> updateModalRef.current.close()} className="btn">Close</button>
          </div>
        </div>
      </dialog>
    </div>
    );
};

export default MyIssues;


