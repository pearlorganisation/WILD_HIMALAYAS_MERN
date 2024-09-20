import { productAction } from "@/features/actions/productAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SizeWithPrice from "./SizeWithPrice";
import { addToCart } from "@/features/slices/Cart";



const TrekkingProducts = () => {
  const { isLoading, data } = useSelector((state) => state.product);
  const [price,setPrice]= useState()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* All Products Title */}

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center">
          All Trekking Products 
        </h1>
      </div>

      {/* Product Grid */}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
   
      >
        {data?.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/productDetails/${product?._id}`}>
            <img
              className="w-full h-58 object-cover"
              src={product?.banners[0]}
              alt={product?.name}
            /></Link>
           
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product?.productName}</h2>
              <SizeWithPrice item={product} price={price} setPrice={setPrice}/>
              <button   onClick={() => {
                        dispatch(addToCart({ productId: product?._id, ...product, ...price }));
                    }} className="bg-black text-white px-4 py-2 mt-4 w-full rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekkingProducts;
