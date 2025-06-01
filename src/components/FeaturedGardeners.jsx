import React, { useEffect, useState } from "react";

const FeaturedGardeners = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    const fetchGardeners = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/gardeners");
        const data = await res.json();
        const actives = data.filter((g) => g.status === "active").slice(0, 6);
        setActiveGardeners(actives);
      } catch (err) {
        console.error("Failed to fetch gardeners", err);
      }
    };
    fetchGardeners();
  }, []);

  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20">
      <h2 className="text-5xl font-bold mb-6 text-green-700 text-center">Featured Gardeners</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center text-base sm:text-lg">
        Meet some of our most active and inspiring gardeners. These community members are passionate about sharing their knowledge, supporting others, and growing together. Explore their profiles and get motivated to start or enhance your own gardening journey!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activeGardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center p-6"
          >
            <img
              src={gardener.avatar}
              alt={gardener.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-green-600 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-800">{gardener.name}</h3>
            <p className="text-green-700 font-medium mb-2">Active Gardener</p>
            <p className="text-gray-600 text-center">{gardener.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGardeners;