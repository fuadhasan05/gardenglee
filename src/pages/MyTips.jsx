import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/tips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const res = await fetch(`http://localhost:3000/tips/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setTips((prev) => prev.filter((tip) => tip._id !== id));
        Swal.fire({
          icon: "success",
          title: "Tip deleted successfully!",
          showConfirmButton: false,
          timer: 1800,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to delete tip.",
          showConfirmButton: false,
          timer: 1800,
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <PulseLoader color="#15803d" size={10} />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-20">
      <ToastContainer />
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold mb-6 text-green-700">My Tips</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow text-sm sm:text-base">
          <thead className="bg-green-100">
            <tr>
              <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-base sm:text-lg font-semibold text-green-800 border-0">
                Title
              </th>
              <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-base sm:text-lg font-semibold text-green-800 border-0">
                Availability
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
                  {tip.availability}
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
                    onClick={() => navigate(`/tips/update/${tip._id}`)}
                    className="inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-green-400 focus:outline-none mr-4"
                    title="Edit Tip"
                    aria-label={`Edit ${tip.title}`}
                  >
                    <FaRegEdit className="text-green-700 text-lg sm:text-xl" />
                  </button>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-red-400 focus:outline-none"
                    title="Delete Tip"
                    aria-label={`Delete ${tip.title}`}
                  >
                    <RiDeleteBin2Line className="text-red-700 text-lg sm:text-xl" />
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

export default MyTips;
