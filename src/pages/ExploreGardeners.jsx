import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Set dynamic title
    useEffect(() => {
      document.title = "GardenGlee - Explore Gardeners";
    }, []);

  useEffect(() => {
    const fetchGardeners = async () => {
      try {
        const res = await fetch("https://garden-glee-server.vercel.app/api/gardeners");
        const data = await res.json();
        setGardeners(data);
      } catch (err) {
        console.error("Failed to fetch gardeners", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGardeners();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-32">
        <PulseLoader color="#15803d" size={10} />
      </div>
    );

  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Explore Gardeners
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover fellow gardeners in our community! Browse profiles to see
          their experience, interests, and gardening tips shared. Connect and
          get inspired by their gardening journeys.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center p-6"
          >
            <img
              src={gardener.avatar || "/default-profile.png"}
              alt={gardener.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-green-200 mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-1">
              {gardener.name}
            </h3>
            <p className="text-gray-500 mb-2">{gardener.bio}</p>
            <div className="w-full text-sm text-gray-700 space-y-1 mb-2">
              <p>
                <span className="font-medium">Age:</span> {gardener.age}
              </p>
              <p>
                <span className="font-medium">Gender:</span> {gardener.gender}
              </p>
              <p>
                <span className="font-medium">Status:</span> {gardener.status}
              </p>
              <p>
                <span className="font-medium">Experience:</span>
                <ul className="list-disc list-inside ml-2">
                  {Array.isArray(gardener.experiences) &&
                    gardener.experiences.map((exp, idx) => (
                      <li key={idx}>{exp}</li>
                    ))}
                </ul>
              </p>
              <p>
                <span className="font-medium">Total Shared Tips:</span>{" "}
                {gardener.totalSharedTips}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
