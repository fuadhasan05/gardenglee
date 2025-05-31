import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FiEye } from "react-icons/fi";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/tips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data.filter((tip) => tip.availability === "Public"));
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold mb-6 text-green-700">
        Browse Public Tips
      </h2>
      <p className="mb-6 text-gray-600 text-base">
        Discover helpful gardening tips shared by our community. Click the eye
        icon to view more details about each tip.
      </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-green-100">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-semibold text-green-800 border-0">
                Title
              </th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-green-800 border-0">
                Category
              </th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-green-800 border-0">
                Image
              </th>
              <th className="px-6 py-3 text-center text-lg font-semibold text-green-800 border-0">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id} className="hover:bg-green-50 transition">
                <td className="px-6 py-4 border-0">{tip.title}</td>
                <td className="px-6 py-4 border-0">{tip.category}</td>
                <td className="px-6 py-4 border-0">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="h-16 w-16 object-cover rounded shadow"
                  />
                </td>
                <td className="px-6 py-4 border-0 text-center">
                  <button
                    onClick={() => navigate(`/tips/${tip._id}`)}
                    className="inline-flex items-center justify-center p-2 rounded hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                    title="See More"
                    aria-label={`See details for ${tip.title}`}
                  >
                    <FiEye className="text-green-700 text-xl" />
                  </button>
                </td>
              </tr>
            ))}
            {tips.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-8 text-gray-500 text-lg border-0"
                >
                  No public tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
