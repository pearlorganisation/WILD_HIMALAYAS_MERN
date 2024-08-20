import React from "react";

const ProductDeatils = () => {
  return (
    <>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col items-center space-y-4">
            <div class="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                id="mainImage"
                src="https://via.placeholder.com/400"
                alt="Main Product"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="flex space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Product Image 1"
                class="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                onclick="document.getElementById('mainImage').src=this.src;"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Product Image 2"
                class="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                onclick="document.getElementById('mainImage').src=this.src;"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Product Image 3"
                class="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                onclick="document.getElementById('mainImage').src=this.src;"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Product Image 4"
                class="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                onclick="document.getElementById('mainImage').src=this.src;"
              />
            </div>
          </div>

          <div class="flex flex-col space-y-6">
            <h1 class="text-3xl font-bold text-gray-800">Product Title</h1>

            <p class="text-lg text-gray-600">
              This is a detailed description of the trekking product. It
              highlights key features, benefits, and specifications to provide
              customers with all the necessary information.
            </p>

            <div>
              <label for="size" class="block text-sm font-medium text-gray-700">
                Select Size
              </label>
              <select
                id="size"
                name="size"
                class="mt-1 block w-full py-3  px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
            </div>

            <p class="text-2xl font-semibold text-gray-800">$129.99</p>

            <button class="w-full py-3 bg-black text-white text-lg font-medium rounded-lg shadow-md  focus:outline-none focus:ring-2 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDeatils;
