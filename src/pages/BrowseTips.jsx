import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FiEye } from "react-icons/fi";
import { PulseLoader } from "react-spinners";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Set dynamic title
    useEffect(() => {
      document.title = "GardenGlee - Browse Tips";
    }, []);

  useEffect(() => {
    fetch("http://localhost:3000/tips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data.filter((tip) => tip.availability === "Public"));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <PulseLoader color="#15803d" size={10} />
      </div>
    );
  }

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
        <table className="min-w-full bg-white rounded-lg shadow text-sm sm:text-base">
          <thead className="bg-green-100">
            <tr>
              <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-base sm:text-lg font-semibold text-green-800 border-0">
                Title
              </th>
              <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-base sm:text-lg font-semibold text-green-800 border-0">
                Category
              </th>
              <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-base sm:text-lg font-semibold text-green-800 border-0">
                Image
              </th>
              <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-center text-base sm:text-lg font-semibold text-green-800 border-0">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id} className="hover:bg-green-50 transition">
                <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-0 font-semibold">
                  {tip.title}
                </td>
                <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-0">
                  {tip.category}
                </td>
                <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-0">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="h-10 w-10 sm:h-16 sm:w-16 object-cover rounded shadow"
                  />
                </td>
                <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-0 text-center">
                  <button
                    onClick={() => navigate(`/tips/${tip._id}`)}
                    className="inline-flex items-center justify-center rounded-full hover:bg-green-600 focus:outline-none"
                    title="See More"
                    aria-label={`See details for ${tip.title}`}
                  >
                    <FiEye className="text-green-700 text-lg sm:text-xl cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
            {tips.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-8 text-gray-500 text-base sm:text-lg border-0"
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
