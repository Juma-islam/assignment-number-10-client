import React from 'react';

const ContributionsTable = ({contributors}) => {
    return (
        <div>
            <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Contributions</h2>
        <table className="table w-full ">
          <thead>
            <tr className="bg-gray-100 dark:text-black">
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
                <td className="dark:text-black">{c.contributionName} </td>
                <td className="text-green-600  font-semibold">{c.amount}</td>
              </tr>
            ))}
            {contributors.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No Contributions yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ContributionsTable;