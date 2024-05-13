import React, { useDebugValue, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import AvailableDates from "./AvailableDates";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import parse from "html-react-parser";
import { trekAction } from "../../features/actions/trekAction";

const UpcomingTreks = () => {
  const { isLoading, data } = useSelector((state) => state.trek);
  const navigate = useNavigate();

  const handelchange = () => {
    navigate("/trek");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trekAction());
  }, []);
  console.log(data, "updata");

  //   {
  //     trekTitle: "Dhanaulti Trek",
  //     trekDesc:
  //       "It is a small town very close to Mussoorie in Uttarakhand. Quaint forest trails, beautiful parks and temples are the popular places to visit in Dhanaulti. Its location is convenient for tourists visiting Mussoorie, Kanatal or taking up Himalayan trekking trails to Kunjapur, Chandrabadani and Surkanda Devi Temple.",
  //     trekImg:
  //       "https://offloadmedia.feverup.com/secretlosangeles.com/wp-content/uploads/2022/01/24125341/WordPress-Banner-2023-12-24T125317.780-1024x683.jpg",
  //     months: [
  //       {
  //         id: 1,
  //         name: "March",
  //         availableDates: [
  //           {
  //             date: "1 March to 7 April",
  //             isAvailable: true,
  //           },

  //           {
  //             date: "8 March to 14 March",
  //             isAvailable: false,
  //           },
  //           {
  //             date: "15 march to 22 march",
  //             isAvailable: true,
  //           },
  //           {
  //             date: "23 march to 30 march",
  //             isAvailable: true,
  //           },
  //         ],
  //       },

  //       {
  //         id: 2,
  //         name: "April",
  //         availableDates: [
  //           {
  //             date: "1 April to 7 April",
  //             isAvailable: true,
  //           },

  //           {
  //             date: "8 April to 14 April",
  //             isAvailable: true,
  //           },
  //           {
  //             date: "15 April to 22 April",
  //             isAvailable: true,
  //           },
  //           {
  //             date: "23 April to 30 April",
  //             isAvailable: true,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     trekTitle: "Nanital Trek",
  //     trekDesc:
  //       " Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi, Uttarakhand’s highest peak.",
  //     trekImg:
  //       "https://www.stayvista.com/blog/wp-content/uploads/2023/10/18514027699_5719e8d0e1_b.jpg",
  //     months: [
  //       {
  //         id: 1,
  //         name: "March",
  //         availableDates: [
  //           {
  //             date: "1 march to 7 April",
  //             isAvailable: false,
  //           },

  //           {
  //             date: "8 April to 14 April",
  //             isAvailable: true,
  //           },
  //           {
  //             date: "15 march to 22 march",
  //             isAvailable: true,
  //           },
  //           {
  //             date: "23 march to 30 march",
  //             isAvailable: true,
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         name: "April",
  //         availableDates: [
  //           {
  //             date: "1 April to 7 April",
  //             isAvailable: true,
  //           },

  //           {
  //             date: "8 April to 14 April",
  //             isAvailable: true,
  //           },
  //           {
  //             date: "15 April to 22 April",
  //             isAvailable: true,
  //           },
  //           {
  //             date: "23 April to 30 April",
  //             isAvailable: true,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     trekTitle: "Rishikesh Trek",
  //     trekDesc:
  //       " Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi, Uttarakhand’s highest peak.",
  //     trekImg:
  //       "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1530709216/Rishikesh_Blog_New232_1530707947.jpg",
  //     months: [
  //       {
  //         id: 1,
  //         name: "March",
  //         availableDates: [
  //           {
  //             date: "1 march to 7 April",
  //             isAvailable: true,

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
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i} className="border-2 border-[#d1cece]">
                  <div className="mx-auto max-w-5xl px-5 py-12 ">
                    <div className="mx-auto flex flex-col items-center w-full  ">
                      <img
                        alt="image"
                        className="h-64 w-full rounded object-cover"
                        src={item?.trekLogo}
                      />
                      <div className="mt-6 w-full lg:mt-0">
                        <h1 className="my-4 text-3xl font-semibold text-black">
                          {item?.trekTitle}
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
                      <AvailableDates months={item?.months} />
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
