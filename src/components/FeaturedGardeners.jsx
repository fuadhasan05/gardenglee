import React, { useEffect, useState } from "react";

const FeaturedGardeners = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    fetch("/gradeners.json")
      .then((res) => res.json())
      .then((data) => {
        const actives = data.filter((g) => g.status === "active").slice(0, 6);
        setActiveGardeners(actives);
      });
  }, []);

  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Featured Gardeners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activeGardeners.map((gardener) => (
          <div key={gardener.id} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src={gardener.avatar} alt={gardener.name} className="w-20 h-20 rounded-full mb-4 border-4 border-green-600" />
            <h3 className="text-xl font-semibold">{gardener.name}</h3>
            <p className="text-green-700 font-medium mb-2">Active Gardener</p>
            <p className="text-gray-600 text-center">{gardener.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGardeners;