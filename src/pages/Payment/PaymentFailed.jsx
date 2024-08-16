import React from "react";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        {/* Motion Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-20 h-20 mx-auto mb-6 text-red-500 animate-pulse"
          fill="none"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="15"
            y1="9"
            x2="9"
            y2="15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="9"
            y1="9"
            x2="15"
            y2="15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Payment Failed!
        </h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment was not successful. Please try again or
          contact support if the problem persists.
        </p>

        {/* Go to Home Page Button */}
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors duration-200"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
