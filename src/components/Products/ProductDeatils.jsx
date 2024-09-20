import { productAction } from "@/features/actions/productAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { isLoading, data } = useSelector((state) => state.product);
  // State to keep track of the main image source
  const [mainImageSrc, setMainImageSrc] = useState(
    data[0].banners[0] ||
      "https://contents.mediadecathlon.com/p2717205/78a056f4e209d2e5822f7f774bf86e67/p2717205.jpg?format=auto&quality=70&f=425x0"
  );

  // Function to handle thumbnail click
  const handleThumbnailClick = (src) => {
    setMainImageSrc(src);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);
  console.log(data, "chimkanda");

  // onClick={() =>
  //   handleThumbnailClick(
  //     "https://contents.mediadecathlon.com/p2717198/de2f132634fd8d373423a329c4cacaf5/p2717198.jpg?format=auto&quality=70&f=425x0"
  //   )
  // }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {data.map((el, id) => {
        return (
          <>
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
                  {el.banners.map((item) => {
                    return (
                      <>
                        <img
                          src={item}
                          alt="Product Image 3"
                          className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                          onClick={() => handleThumbnailClick(item)}
                        />
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  {el.productName}
                </h1>

                <p className="text-lg text-gray-600">{el.description}</p>

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
                    {el.price.size}
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
          </>
        );
      })}
    </div>
  );
};

export default ProductDetails;
