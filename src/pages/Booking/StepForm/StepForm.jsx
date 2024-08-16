import React from "react";

const StepForm = ({ activeStep }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Complete the steps below to register for your Chandrakhani Pass Trek
          (August 20 - August 24)
        </h2>
        <div className="flex justify-between items-center space-x-4">
          {/* Step 1 */}
          <div className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                activeStep === 1 ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              1
            </div>
            <span className="font-medium">Accept T&C</span>
          </div>

          <div className="flex-grow h-1 bg-gray-500"></div>

          {/* Step 2 */}
          <div className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                activeStep === 2 ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              2
            </div>
            <span className="font-medium">Add Trekmates</span>
          </div>

          <div className="flex-grow h-1 bg-gray-500"></div>

          {/* Step 3 */}
          <div className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                activeStep === 3 ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              3
            </div>
            <span className="font-medium">Make Payment</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepForm;
