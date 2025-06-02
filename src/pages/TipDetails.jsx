import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FiThumbsUp } from "react-icons/fi";
import { PulseLoader } from "react-spinners";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
      document.title = "GardenGlee - Tip Details";
    }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/tips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        setLoading(false);
      });
  }, [id]);

  const handleLike = async () => {
    if (!tip) return;
    setLikeLoading(true);
    const updatedLikes = (tip.totalLiked || 0) + 1;
    // PATCH request to update like count
    await fetch(`http://localhost:3000/tips/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalLiked: updatedLikes }),
    });
    setTip({ ...tip, totalLiked: updatedLikes });
    setLikeLoading(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <PulseLoader color="#15803d" size={10} />
      </div>
    );
  }

  if (!tip) {
    return (
      <div className="w-11/12 mx-auto py-20 text-center text-red-600 text-xl">
        Tip not found.
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10 sm:py-16 md:py-20 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 max-w-full sm:max-w-2xl w-full">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded mb-4 sm:mb-6 shadow"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-2">{tip.title}</h2>
        <p className="text-green-800 font-semibold mb-2 sm:mb-4 text-base sm:text-lg">{tip.category}</p>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">{tip.description}</p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button
            onClick={handleLike}
            disabled={likeLoading}
            className="inline-flex items-center px-4 py-2 bg-green-100 hover:bg-green-200 rounded text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 transition text-base sm:text-lg"
            aria-label="Like this tip"
          >
            <FiThumbsUp className="mr-2 text-lg sm:text-xl" />
            Like
          </button>
          <span className="text-green-700 text-base sm:text-lg md:text-xl font-bold">
            {tip.totalLiked || 0} {tip.totalLiked === 1 ? "Like" : "Likes"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;