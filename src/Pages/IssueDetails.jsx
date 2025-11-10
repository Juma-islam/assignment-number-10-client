import { use, useEffect, useRef, useState } from "react";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdDateRange, MdLocationPin } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const IssueDetails = () => {
  const data = useLoaderData();
  const issue = data.result;
  const issueModalRef = useRef(null);
  const { user } = use(AuthContext);
  const [contributors, setContributors] = useState([]);

  useEffect(()=> {
    fetch(`http://localhost:5000/contributions?issueId=${issue._id}`)
.then(res => res.json())
.then(data => setContributors(data)); 
  }, [issue._id])

  const handleModalOpen = () => {
    issueModalRef.current.showModal();
  };
  const handleContributionSubmit = (e) => {
    e.preventDefault();

    const contribution = {
      issueId: issue._id,
      issueTitle: issue.title,
      contributionName: e.target.name.value,
      email: user?.email,
      phone: e.target.phone.value,
      address: e.target.address.value,
      amount: e.target.amount.value,
      date: new Date().toISOString(),
      additionalInfo: e.target.info.value,
      image: user?.photoURL,
      category: issue.category,
    };

    fetch("http://localhost:5000/contributions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contribution),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Contribution successful!");
          issueModalRef.current.close();
          e.target.reset();
          setContributors([...contributors, contribution]);
        }
      });
  };

  const totalCollected = contributors.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img src={issue.image} alt="" className="w-full object-cover rounded-xl shadow-md" />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{issue.title}</h1>

            {/* Category Badge */}
            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
              {issue.category}
            </div>
            {/* location */}
            <div className="flex gap-2 items-center text-gray-700 font-semibold ">
              <span className=" text-blue-500 text-xl">
                <MdLocationPin />
              </span>
              {issue.location}
            </div>
            {/* date */}
            <div className="flex gap-2 items-center text-gray-700 font-semibold ">
              {" "}
              <span className=" text-blue-500 text-xl">
                <MdDateRange />
              </span>
              {issue.date}
            </div>
            {/* amount */}
            <p className="flex gap-2 items-center  text-gray-700 font-semibold">
              <span className="text-xl text-green-500">
                <LuBadgeDollarSign />
              </span>{" "}
              {issue.amount} (Suggested)
            </p>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">{issue.description}</p>
            {/* flex gap-3 mt-6 */}

            <div className="mt-4">
              <p className="font-semibold">
                Collected: {totalCollected} / {issue.amount}
              </p>
               <progress
                className="progress progress-success w-full"
                value={totalCollected}
                max={issue.amount}
              ></progress>
            </div>
            <button
              onClick={handleModalOpen}
              className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
            >
              Pay Clean-Up Contribution
            </button>
            {/* modal */}
            <dialog ref={issueModalRef} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">
                  Pay Contribution for : <span className="text-pink-600">{issue.title}</span>
                </h3>
                {/* form  */}
                {/* name   */}
                <form onSubmit={handleContributionSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    id=""
                    className="input input-bordered w-full "
                    required
                  />
                  {/* email  */}
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email || " "}
                    id=""
                    className="input input-bordered w-full "
                    readOnly
                  />
                  {/* amount */}
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    id=""
                    className="input input-bordered w-full "
                    required
                  />
                  {/* phone  */}
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    id=""
                    className="input input-bordered w-full "
                    required
                  />
                  {/* address  */}
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    id=""
                    className="input input-bordered w-full "
                    required
                  />

                  <textarea
                    name="info"
                    placeholder="Additional Info (optional)"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                  <button type="submit" className="btn bg-pink-500 hover:bg-pink-600 text-white w-full">
                    Submit
                  </button>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
       {/* contributions table */}
      <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Contributions</h2>
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>Image</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {contributors.map((c, i) => (
              <tr key={i}>
                <td>
                  <img className="w-10 h-10 rounded-full" src={c.image} alt="" />
                </td>
                <td>{c.contributionName} </td>
                <td className="text-green-600 font-semibold">{c.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueDetails;
