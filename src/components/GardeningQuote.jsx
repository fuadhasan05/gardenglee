import React from "react";
import { Fade } from "react-awesome-reveal";

const GardeningQuote = () => {
  return (
    <section className="w-11/12 max-w-3xl mx-auto py-10">
      <Fade direction="up" triggerOnce>
        <div className="bg-green-50 rounded-xl shadow p-8 flex flex-col items-center">
          <svg
            className="w-10 h-10 text-green-400 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
          </svg>
          <blockquote className="text-xl italic text-green-800 text-center mb-2">
            "To plant a garden is to believe in tomorrow."
          </blockquote>
          <span className="text-green-600 font-medium">– Audrey Hepburn</span>
        </div>
      </Fade>
    </section>
  );
};

export default GardeningQuote;
