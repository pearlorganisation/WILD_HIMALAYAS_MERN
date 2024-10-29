import React, { useDebugValue, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import parse from "html-react-parser";
import AvailableDates from "@/components/Tours/AvailableDates";
import { tourAction } from "@/features/actions/toursAction";

const UpcomingTreks = () => {
  const { isLoading, data } = useSelector((state) => state.tour);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tourAction());
  }, []);
  console.log(data, "updata");

  return (
    <>
      <div>
          <div className="text-center text-xl md:text-5xl font-bold py-5 ">
            <h1>Our Treks</h1>
          </div>


        <div className="mb-10">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
            breakpoints={{
              // When window width is <= 768px (Mobile)
              540: {
                slidesPerView: 1,
              },
              // When window width is <= 1024px (Tablet)
              1024: {
                slidesPerView: 2,
              },
              // Default breakpoints (Desktop)
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {data && data?.map((item, i) => {
              return (
                <SwiperSlide
                  key={i+1}
                  className="px-2 sm:px-10"
                >
                  <div className="border rounded-lg max-w-5xl">
                    <div className="mx-auto flex flex-col items-center w-full  ">
                      <img
                        alt="image"
                        className="h-64 w-full rounded-t-md object-cover"
                        src={Array.isArray(item?.banners) && item?.banners[0]?.url}
                      />

                      <div className="mt-6 px-2 w-full lg:mt-0">
                        <h1 className="mt-2 text-2xl font-medium text-black">
                          {item?.title}
                        </h1>
                        <div className=" flex items-center"></div>

                        <p className="leading-relaxed line-clamp-2">
                         {item?.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={()=>navigate("/trek",{state:item})}
                        key={i}
                        class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        View Details
                      </button>
                      </div>

                      <div className="px-2 pb-1 text-blue-700   font-medium ">
                        Available Dates
                      </div>
                      <div>
                        
                          <AvailableDates
                            availableDates={item.availableDates}
                            data={item}
                          />

                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default UpcomingTreks;
