import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className="py-24 text-center border border-red-600 m-2 md:m-40 rounded-2xl">
        <h1 className="mb-8 text-7xl font-thin text-gray-900">
          {error?.status || 404}
        </h1>
        <p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
          {error?.error?.message || "Something Went Wrong!"}
        </p>
        <Link to="/">
          <button className="px-8 mt-5 py-2 btn btn-primary rounded hover:bg-green-700 cursor-pointer">
            Browse Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
