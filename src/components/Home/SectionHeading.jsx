import React from "react";

const SectionHeading = ({ subHeading, mainHeading }) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
          {subHeading}
        </p>
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl underline">
          {mainHeading}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeading;
