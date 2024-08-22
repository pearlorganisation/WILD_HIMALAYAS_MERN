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

  const handelchange = () => {
    navigate("/trek");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tourAction());
  }, []);
  console.log(data, "updata");

  return (
    <>
      <div>
        <div className="container">
          <div className="text-center text-xl md:text-5xl font-bold py-5 ">
            <h1>Top treks in 2024</h1>
          </div>

          <div className=" grid md:grid-cols-2 place-items-center py-5 border-t-2 border-yellow-400">
            <div className="">
              <h1 className="text-center text-xl md:text-5xl font-medium ">
                Best Treks in spring
              </h1>
            </div>
            <div className=" text-lg font-medium">
              <p>
                {`Spring is when the mountains come alive. Not only do blooming
              rhododendrons blaze up the forests with bursts of colours, but
              it's also a time to witness a good mix of snow greenery. Most of
              our treks get heavy bookings this time of the year. If you want to
              avoid the crowds, choose the Ranthan Kharak trek in Kumaon. The
              rhododendrons are dense, minus the crowds.`}
              </p>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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
                  className="border border-slate-200 rounded-md"
                >
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

                      <div className=" text-lg py-[1rem] mt-1 border-b-2 border-b-gray-600 font-medium text-gray-900">
                        Available Dates
                      </div>
                      <>
                        {
                          <AvailableDates
                            availableDates={item.availableDates}
                            data={item}
                          />
                        }
                      </>
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
