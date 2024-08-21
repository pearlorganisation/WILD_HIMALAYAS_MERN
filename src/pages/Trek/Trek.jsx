import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiMountainClimbing, GiMountaintop } from "react-icons/gi";
import { FaCheckCircle, FaWalking } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import parse from "html-react-parser";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { tourAction } from "@/features/actions/toursAction";
import AvailableDates from "@/components/Tours/AvailableDates";
import { useNavigate } from "react-router-dom";

const Trek = () => {
  const { isLoading, data } = useSelector((state) => state.tour);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(tourAction());
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("ITINERARY");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const RenderTabComponent = ({ tabData }) => {
    switch (activeTab) {
      case "ITINERARY":
        return (
          <div className="p-4">
            <div className="container max-w-full grid md:grid-cols-[10%_auto]">
              <div>
                <FaWalking size={100} />
              </div>
              <div>
                <div className="border-b-2 p-10">
                  {parse(tabData?.itinerary)}
                </div>
              </div>
            </div>
          </div>
        );
      case "MAP":
        return (
          <div className="p-4">
            <div className="bg-[#323232]">
              <div>
                <img src={tabData?.mapLogo} alt="Map" />
              </div>
            </div>
          </div>
        );
      case "INCLUSIONS_AND_EXCLUSIONS":
        return (
          <div className="pt-4 md:p-4">
            <div className="container max-w-full grid md:grid-cols-[10%_auto]">
              <div>
                <FaWalking size={100} />
              </div>
              <div>
                <div className="border-b-2 pt-8 md:pt-0 md:p-10">
                  {Array.isArray(tabData?.inclusions) &&
                    tabData?.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div>
                          <FaCheckCircle size={19} className="text-green-600" />
                        </div>
                        <div>{parse(item)}</div>
                      </div>
                    ))}
                </div>
                <div className="border-b-2 pt-8 md:pt-0 md:p-10">
                  {Array.isArray(tabData?.exclusions) &&
                    tabData?.exclusions.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 pt-5">
                        <div>
                          <MdCancel size={19} className="text-red-600" />
                        </div>
                        <div>{parse(item)}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {data.map((el, i) => (
        <div key={i}>
          <div>
            <section>
              <div>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {el.banners.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative">
                        <img
                          src={item}
                          className="w-full max-h-[80vh] h-auto"
                          alt="Banner"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                          <h1 className="text-white text-xl md:text-4xl font-bold">
                            {el.title}
                          </h1>
                          <p className="text-white text-md md:text-lg">
                            {parse(el.activity.description)}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </div>
          <div>
            <section>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                <div className="flex items-center justify-center w-full">
                  <div>
                    <GiMountainClimbing
                      className="text-[#826d4e] m-4"
                      size={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg text-black font-bold mb-2">
                      <h1>TREK DIFFICULTY</h1>
                    </div>
                    <p className="text-lg">{el.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div>
                    <IoIosTimer className="text-[#3a81f2] m-4" size={50} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg text-black font-bold mb-2">
                      <h1>TREK DURATION</h1>
                    </div>
                    <p className="text-lg">{el.tripDuration} days</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div>
                    <GiMountaintop className="text-green-600 m-4" size={50} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg text-black font-bold mb-2">
                      <h1>HIGHEST ALTITUDE</h1>
                    </div>
                    <p className="text-lg">{el.highestPoint}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="max-w-7xl mx-auto py-2 grid grid-cols-2">
            <div>
              <section>{parse(el.description)}</section>
            </div>
            <div className="mx-auto max-w-5xl px-5 py-12">
              <div className="mx-auto flex flex-col items-center w-full">
                <img
                  alt="Trek"
                  className="h-64 w-full rounded object-cover"
                  src="https://res.cloudinary.com/dnixhctcf/image/upload/v1715075940/IntoWildHimalaya/s4gcrfdwzozwhfryssz9.webp"
                />
                <div className="mt-6 w-full lg:mt-0">
                  <h1 className="my-4 text-3xl font-semibold text-black"></h1>
                  <div className="my-4 flex items-center"></div>
                  <p className="leading-relaxed line-clamp-4">{}</p>
                </div>
              </div>
              <div>
                

                <div className="text-lg py-[1rem] mt-1 border-b-2 border-b-gray-600 font-medium text-gray-900">
                  Available Dates
                </div>
                <AvailableDates availableDates={el.availableDates}  data={el} />
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="sm:hidden">
                <select
                  aria-label="Selected tab"
                  className="block w-full"
                  value={activeTab}
                  onChange={(e) => handleTabClick(e.target.value)}
                >
                  <option value="ITINERARY">ITINERARY</option>
                  <option value="MAP">MAP</option>
                  <option value="INCLUSIONS_AND_EXCLUSIONS">
                    INCLUSIONS AND EXCLUSIONS
                  </option>
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex">
                    <button
                      onClick={() => handleTabClick("ITINERARY")}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                        activeTab === "ITINERARY"
                          ? "text-gray-700 border-gray-300"
                          : "hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      ITINERARY
                    </button>
                    <button
                      onClick={() => handleTabClick("MAP")}
                      className={`whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                        activeTab === "MAP"
                          ? "text-gray-700 border-gray-300"
                          : "hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      MAP
                    </button>
                    <button
                      onClick={() =>
                        handleTabClick("INCLUSIONS_AND_EXCLUSIONS")
                      }
                      className={`whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                        activeTab === "INCLUSIONS_AND_EXCLUSIONS"
                          ? "text-gray-700 border-gray-300"
                          : "hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      INCLUSIONS AND EXCLUSIONS
                    </button>
                  </nav>
                </div>
              </div>
              <RenderTabComponent tabData={el} />
            </div>
          </div>
          <div>
            <section className="p-5 py-0 container mx-auto">
              <div>
                <h1 className="text-lg md:text-xl lg:text-5xl text-center font-semibold p-5">
                  Photo Gallery
                </h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {el.gallery.map((item, idx) => (
                  <div key={idx}>
                    <img
                      className="h-auto md:h-[300px] max-w-full rounded hover:scale-95 transition-all cursor-pointer"
                      src={item}
                      alt="Gallery"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      ))}
    </>
  );
};

export default Trek;
