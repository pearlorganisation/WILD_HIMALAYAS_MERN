import React from "react";

const StepForm = () => {
  return (
    <>
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4 text-center">
          Complete the steps below to register for your Chandrakhani Pass Trek
          (August 20 - August 24)
        </h2>
        <div class="flex justify-between items-center space-x-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 flex items-center justify-center bg-yellow-500 rounded-full text-white font-bold">
              1
            </div>
            <span class="font-medium">Accept T&C</span>
          </div>

          <div class="flex-grow h-1 bg-gray-500"></div>

          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full text-white font-bold">
              2
            </div>
            <span class="font-medium">Add Trekmates</span>
          </div>

          <div class="flex-grow h-1 bg-gray-500"></div>

          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full text-white font-bold">
              3
            </div>
            <span class="font-medium">Make Payment</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepForm;
