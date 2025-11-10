import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const MyContributions = () => {
    const {user} = use(AuthContext);
    const [contributions, setContributions] = useState([]);

    useEffect(()=> {
        if(user?.email){
            fetch(`http://localhost:5000/contributions?email=${user.email}`)
            .then((res)=> res.json())
            .then(data => setContributions(data))
        }
    }, [user]);
    

    return (
         <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        My Contributions
      </h2>

      {/* 🖥️ Desktop/Table View */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Issue Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Paid Amount</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border text-center">Report</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.issueTitle}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3 text-green-600 font-semibold">
                  ${item.amount}
                </td>
                <td className="p-3">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="p-3 text-center">
                  <button className="btn btn-xs btn-outline btn-success">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 Mobile View */}
      <div className="grid md:hidden gap-4">
        {contributions.map((item) => (
          <div
            key={item._id}
            className="p-4 border rounded-xl shadow-sm bg-white"
          >
            <h3 className="font-bold text-lg">{item.issueTitle}</h3>
            <p>
              <span className="font-medium">Category:</span> {item.category}
            </p>
            <p>
              <span className="font-medium">Amount:</span>{" "}
              <span className="text-green-600 font-semibold">
                ${item.amount}
              </span>
            </p>
            <p>
              <span className="font-medium">Date:</span>{" "}
              {new Date(item.date).toLocaleDateString()}
            </p>
            <button className="btn btn-xs btn-outline btn-success mt-2">
              Download Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyContributions;