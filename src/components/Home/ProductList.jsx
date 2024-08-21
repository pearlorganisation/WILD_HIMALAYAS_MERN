import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import parse from "html-react-parser";
import { tourAction } from "@/features/actions/toursAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AvailableDates from "../Tours/AvailableDates";
const ProductList = () => {
  const { isLoading, data } = useSelector((state) => state.tour);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handelchange = () => {
    navigate("/trek");
  };

  useEffect(() => {
    dispatch(tourAction());
  }, []);

  return (
    <div className="bg-white mt-10">
      <SectionHeading mainHeading={"Best Winter Trek of 2024"} />
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((item, i) => {
              return (
                  <div className="mx-auto max-w-5xl px-5 py-12 ">
                    <div className="mx-auto flex flex-col items-center w-full  ">
                      <img
                        alt="image"
                        className="h-64 w-full rounded object-cover"
                        src={Array.isArray(item?.banners) && item?.banners[0]}
                      />

                      <div className="mt-6 w-full lg:mt-0">
                        <h1 className="my-4 text-2xl font-semibold text-black">
                          {item?.title}
                        </h1>
                        <div className="my-4 flex items-center"></div>

                        <p className="leading-relaxed line-clamp-4">
                          {parse(item?.description)}
                        </p>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={handelchange}
                        key={i}
                        class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        View Details
                      </button>

                  
                    </div>
                  </div>
          
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
