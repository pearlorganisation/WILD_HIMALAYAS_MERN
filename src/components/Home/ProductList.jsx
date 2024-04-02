import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const ProductList = () => {
  const [trekData, setTrekData] = useState([]);

  const getTrekData = async () => {
    try {
      const data = await fetch(
        "https://wild-himalayas-backend.onrender.com/api/v1/trek"
      );
      const fullData = await data.json();
      setTrekData(fullData);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(trekData);
  useEffect(() => {
    getTrekData();
  }, []);

  return (
    <div className="bg-white mt-10">
      <SectionHeading mainHeading={"Best Winter Trek of 2024"} />
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {trekData?.data?.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product?.trekLogo}
                  alt={product?.trektitle}
                  height={300}
                  className="h-[300px] w-full object-cover object-center group-hover:opacity-75 rounded"
                />
              </div>
              <h3 className="mt-4 text-black font-semibold">{product?.name}</h3>
              <p className="mt-2 text-sm text-gray-700">
                {product?.description}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product?.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
