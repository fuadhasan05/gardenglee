import React from "react";

const QuickTips = () => {
  return (
    <div>
      <section className="w-11/12 max-w-7xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Quick Gardening Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-green-600 text-3xl mb-2">🌱</span>
            <p className="text-gray-700 text-center">
              Water your plants early in the morning to reduce evaporation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-green-600 text-3xl mb-2">🌻</span>
            <p className="text-gray-700 text-center">
              Use compost to enrich your soil and boost plant health.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-green-600 text-3xl mb-2">🪴</span>
            <p className="text-gray-700 text-center">
              Rotate crops each season to prevent soil depletion.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-green-600 text-3xl mb-2">🍅</span>
            <p className="text-gray-700 text-center">
              Prune regularly to encourage healthy growth and more blooms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickTips;
