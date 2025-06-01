import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const TopTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await fetch("http://localhost:3000/tips");
        const data = await res.json();
        const trending = data
          .sort((a, b) => (b.totalLiked || 0) - (a.totalLiked || 0))
          .slice(0, 6);
        setTips(trending);
      } catch (err) {
        console.error("Failed to fetch tips", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTips();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <PulseLoader color="#15803d" size={10} />
      </div>
    );
  }

  return (
    <section className="w-11/12 max-w-7xl mx-auto py-12">
      <div className="mb-10 text-center space-y-4">
        <h2 className="text-4xl font-bold text-green-700 ">
        Top Trending Tips
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
        Discover the most popular gardening tips shared by our community!
        Explore trending advice, creative ideas, and expert techniques to help
        your garden thrive.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-600 text-sm bg-green-200 rounded-lg px-4 mb-4 inline-block w-fit">
              {tip.difficulty}
            </p>
            <img className="h-50 w-100 mb-4" src={tip.imageUrl} alt="" />
            <div className="mt-auto flex items-center justify-between">
              <span className="text-green-700 font-medium">
                Likes: {tip.totalLiked || 0}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTips;
