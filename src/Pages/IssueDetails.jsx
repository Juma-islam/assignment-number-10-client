import { useEffect, useRef, useState, useContext } from "react";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdDateRange, MdLocationPin } from "react-icons/md";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import ContributionsTable from "./ContributionsTable/ContributionsTable";

const IssueDetails = () => {
  const data = useLoaderData();
  const issue = data.result;
  const issueModalRef = useRef(null);
  const { user } = useContext(AuthContext); 
  const [contributors, setContributors] = useState([]);

  // fetch contributions
  useEffect(() => {
    fetch(`https://clean-connect-project.vercel.app/contributions?issueId=${issue._id}`)
      .then((res) => res.json())
      .then((data) => setContributors(Array.isArray(data) ? data : []));
  }, [issue._id]);

  const handleModalOpen = () => {
    if (!user) {
      toast.error("Please log in to contribute");
      return;
    }
    issueModalRef.current.showModal();
  };

  const handleContributionSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please log in first");
      return;
    }

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

    fetch("https://clean-connect-project.vercel.app/contributions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

  const totalCollected = Array.isArray(contributors)
    ? contributors.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0)
    : 0;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <title>Issue Details Page</title>

      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img src={issue.image} alt={issue.title} className="w-full object-cover rounded-xl shadow-md" />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white/80">{issue.title}</h1>

            <div className="badge badge-lg badge-outline bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none">
              {issue.category}
            </div>

            <div className="flex gap-2 items-center text-gray-700 dark:text-white/80 font-semibold">
              <MdLocationPin className="text-blue-500 text-xl" /> {issue.location}
            </div>

            <div className="flex gap-2 items-center text-gray-700 dark:text-white/80 font-semibold">
              <MdDateRange className="text-blue-500 text-xl" /> {issue.date}
            </div>

            <p className="flex gap-2 items-center text-gray-700 dark:text-white/80 font-semibold">
              <LuBadgeDollarSign className="text-green-500 text-xl" /> {issue.amount} (Suggested)
            </p>

            <p className="text-gray-600 dark:text-white/80 leading-relaxed text-base md:text-lg">{issue.description}</p>

            <div className="mt-4">
              <p className="font-semibold">Collected: {totalCollected} / {issue.amount}</p>
              <progress className="progress progress-success w-full" value={totalCollected} max={issue.amount}></progress>
            </div>

            <button
              onClick={handleModalOpen}
              className="btn btn-outline rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              Pay Clean-Up Contribution
            </button>

            {/* Contribution Modal */}
            <dialog ref={issueModalRef} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">
                  Pay Contribution for: <span className="text-teal-600">{issue.title}</span>
                </h3>

                <form onSubmit={handleContributionSubmit} className="space-y-3">
                  <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />

                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email || ""}
                    className="input input-bordered w-full"
                    readOnly
                  />

                  <input type="number" name="amount" placeholder="Amount" className="input input-bordered w-full" required />

                  <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" required />

                  <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" required />

                  <textarea name="info" placeholder="Additional Info (optional)" className="textarea textarea-bordered w-full"></textarea>

                  <button type="submit" className="btn bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white w-full">
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

      <ContributionsTable contributors={contributors}></ContributionsTable>
    </div>
  );
};

export default IssueDetails;

