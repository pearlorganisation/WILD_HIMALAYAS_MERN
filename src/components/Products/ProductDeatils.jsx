import React, { useState } from "react";

const ProductDetails = () => {
  // State to keep track of the main image source
  const [mainImageSrc, setMainImageSrc] = useState(
    "https://contents.mediadecathlon.com/p2717205/78a056f4e209d2e5822f7f774bf86e67/p2717205.jpg?format=auto&quality=70&f=425x0"
  );

  // Function to handle thumbnail click
  const handleThumbnailClick = (src) => {
    setMainImageSrc(src);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img
              id="mainImage"
              src={mainImageSrc}
              alt="Main Product"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex space-x-4">
            <img
              src="https://contents.mediadecathlon.com/p2717210/a05cc86eea97b5bd6acca358f087e612/p2717210.jpg?format=auto&quality=70&f=425x0"
              alt="Product Image 1"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
              onClick={() =>
                handleThumbnailClick(
                  "https://contents.mediadecathlon.com/p2717210/a05cc86eea97b5bd6acca358f087e612/p2717210.jpg?format=auto&quality=70&f=425x0"
                )
              }
            />
            <img
              src="https://contents.mediadecathlon.com/p2717198/de2f132634fd8d373423a329c4cacaf5/p2717198.jpg?format=auto&quality=70&f=425x0"
              alt="Product Image 2"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
              onClick={() =>
                handleThumbnailClick(
                  "https://contents.mediadecathlon.com/p2717198/de2f132634fd8d373423a329c4cacaf5/p2717198.jpg?format=auto&quality=70&f=425x0"
                )
              }
            />
            <img
              src="https://contents.mediadecathlon.com/p2717206/3c2832b501ae261cd70b7fd98e9fc26d/p2717206.jpg?format=auto&quality=70&f=425x0"
              alt="Product Image 3"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
              onClick={() =>
                handleThumbnailClick(
                  "https://contents.mediadecathlon.com/p2717206/3c2832b501ae261cd70b7fd98e9fc26d/p2717206.jpg?format=auto&quality=70&f=425x0"
                )
              }
            />
            <img
              src="https://contents.mediadecathlon.com/p2530263/22e8d2f031ac161a722f2589f8c7182e/p2530263.jpg?format=auto&quality=70&f=425x0"
              alt="Product Image 4"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
              onClick={() =>
                handleThumbnailClick(
                  "https://contents.mediadecathlon.com/p2530263/22e8d2f031ac161a722f2589f8c7182e/p2530263.jpg?format=auto&quality=70&f=425x0"
                )
              }
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Trekking Camps</h1>

          <p className="text-lg text-gray-600">
            This is a detailed description of the trekking product. It
            highlights key features, benefits, and specifications to provide
            customers with all the necessary information.
          </p>

          <div>
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700"
            >
              Select Size
            </label>
            <select
              id="size"
              name="size"
              className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </div>

          <p className="text-2xl font-semibold text-gray-800">$129.99</p>

          <button className="w-full py-3 bg-black text-white text-lg font-medium rounded-lg shadow-md focus:outline-none focus:ring-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
