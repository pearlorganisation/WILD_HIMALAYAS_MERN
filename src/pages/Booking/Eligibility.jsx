import React from "react";

const Eligibility = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-[#C076C1] mb-4">
          Eligibility criteria for Chandrakhani Pass Trek
        </h1>
        <p className="text-gray-700 mb-6">
          We go to great lengths to keep you safe on your trek. However,
          trekking with the safest organisation in India comes with certain
          commitments from your end.
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
          <li>An ability to run 5 km in 35 minutes</li>
          <li>A BMI of less than 28</li>
          <li>
            The recommended age for children is above 13 years and up to 62
            years for adults
          </li>
          <li>
            A commitment towards no smoking and drinking throughout the trek
          </li>
          <li>A promise towards responsible trekking</li>
        </ol>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Eligibility criteria explained
          </h2>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            1. An Ability To Run 5 Km In 35 Minutes
          </h3>
          <p className="text-gray-700 mb-4">
            A Himalayan trek like Chandrakhani Pass requires a good fitness
            level. The trek has long climbs and steep descents daily. As a
            measure of your fitness, we need you to:
          </p>
          <p className="text-gray-700 mb-4">
            Run at least <strong>5 km in 35 minutes</strong> before your trek.
            Consistency of your workout also matters, so aim to jog 20 km a week
            or 80 km in a month.{" "}
            <strong>It's our minimum mandatory requirement.</strong>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>OR</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Alternatively, cycle for at least{" "}
            <strong>22 km in 60 minutes</strong>. Aim to cycle 110 km a week or
            440 km in a month. However, running is better suited for your trek
            preparation.
          </p>
          <p className="text-gray-700">
            Once you get confirmed for your trek, we will diligently follow up
            on your fitness routine. Our team will also assist in putting you
            through a fitness plan. It will ultimately help you have a safe trek
            experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Eligibility;
