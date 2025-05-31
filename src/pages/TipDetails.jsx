import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FiThumbsUp } from "react-icons/fi";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(false);

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
      <div className="w-11/12 mx-auto py-20 text-center text-green-700 text-xl">
        Loading tip details...
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
    <div className="w-11/12 mx-auto py-20 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-64 object-cover rounded mb-6 shadow"
        />
        <h2 className="text-3xl font-bold text-green-700 mb-2">{tip.title}</h2>
        <p className="text-green-800 font-semibold mb-4">{tip.category}</p>
        <p className="text-gray-700 text-lg mb-6">{tip.description}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            disabled={likeLoading}
            className="inline-flex items-center px-4 py-2 bg-green-100 hover:bg-green-200 rounded text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            aria-label="Like this tip"
          >
            <FiThumbsUp className="mr-2 text-xl" />
            Like
          </button>
          <span className="text-green-700 text-lg font-bold">
            {tip.totalLiked || 0} {tip.totalLiked === 1 ? "Like" : "Likes"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;