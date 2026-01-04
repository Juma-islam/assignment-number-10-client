import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyContributions = () => {
  const { user } = use(AuthContext);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(`https://clean-connect-project.vercel.app/contributions?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setContributions(data.result || []));
  }, [user]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Clean - contribution Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`name: ${user?.displayName || "N/A"}`, 14, 30);
    doc.text(`Email: ${user?.email}`, 14, 37);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 44);

    const tableColumn = ["Issue Title", "Category", "Amount ($)", "Date"];
    const tableRows = [];

    contributions.forEach((item) => {
      const row = [item.issueTitle, item.category, item.amount, new Date(item.date).toLocaleDateString()];
      tableRows.push(row);
    });

    autoTable(doc, {
      startY: 50,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 150, 136] },
    });

    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(11);
    doc.text(" Thank you for your contribution to clean Connect", 14, finalY);

    doc.save("My_contribution_report.pdf");
  };

  return (
    <div className="p-4">
      <title>My Contributions Page</title>
      <h2 className="text-2xl font-semibold mb-4 text-center">My Contributions</h2>

      <div className="text-center mb-4">
        <button onClick={handleDownloadPDF} className="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
          Download Full Report (PDF)
        </button>
      </div>

      <div className="hidden md:block">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left dark:text-black">
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
                <td className="p-3 text-green-600 font-semibold">${item.amount}</td>
                <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
                <td className="p-3 text-center">
                  <button onClick={handleDownloadPDF} className="btn btn-xs btn-outline btn-success">
                    Download
                  </button>
                </td>
              </tr>
            ))}
            {contributions.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No Contributions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="grid md:hidden gap-4">
        {contributions.map((item) => (
          <div key={item._id} className="p-4 border rounded-xl shadow-sm bg-white dark:text-black">
            <h3 className="font-bold text-lg">{item.issueTitle}</h3>
            <p>
              <span className="font-medium">Category:</span> {item.category}
            </p>
            <p>
              <span className="font-medium">Amount:</span>{" "}
              <span className="text-green-600 font-semibold">${item.amount}</span>
            </p>
            <p>
              <span className="font-medium">Date:</span> {new Date(item.date).toLocaleDateString()}
            </p>
            <button onClick={handleDownloadPDF} className="btn btn-xs btn-outline btn-success mt-2">
              Download Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyContributions;
