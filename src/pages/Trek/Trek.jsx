import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiMountainClimbing, GiMountaintop } from "react-icons/gi";
import { FaCheckCircle} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import parse from "html-react-parser";
import { Navigation } from "swiper/modules";
import AvailableDates from "@/components/Tours/AvailableDates";
import { useLocation } from "react-router-dom";


const Trek = () => {

  const {state:el} = useLocation()

  const [activeTab, setActiveTab] = useState(el?.itinerary ? "ITINERARY": el?.mapLogo ? "MAP" :INCLUSIONS_AND_EXCLUSIONS);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const RenderTabComponent = ({ tabData }) => {
    switch (activeTab) {
      case "ITINERARY":
        return (
          <div className="p-2">
            <div className="container max-w-full grid ">
                            <div>
                <div className="border-b-2 ">
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
              <div className="flex justify-center">
                <img src={tabData?.mapLogo?.url} className="w-[600px]" alt="Map" />
              </div>
            </div> 
          </div>
        );
      case "INCLUSIONS_AND_EXCLUSIONS":
        return (
          <div className="pt-4 md:p-4">

      
              <div className="container md:flex justify-between gap-8">
                <div className=" space-y-5">
                  {Array.isArray(tabData?.inclusions) &&
                    tabData?.inclusions.map((item, idx) => (
                      <div key={idx} className="flex  items-center gap-5">
                        <div>
                          <FaCheckCircle size={19} className="text-green-600" />
                        </div>
                        <div>{item}</div>
                      </div>
                    ))}
                </div>
                <div className="mt-10 md:mt-0 space-y-5">
                  {Array.isArray(tabData?.exclusions) &&
                    tabData?.exclusions.map((item, idx) => (
                      <div key={idx} className="flex  items-center gap-5">
                        <div>
                          <MdCancel size={19} className="text-red-600" />
                        </div>
                        <div>{item}</div>
                      </div>
                    ))}
                </div>
              </div>
         
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
        <div>
          <div>
            <section>
              <div>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {el?.banners.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative">
                        <img
                          src={item?.url}
                          className="w-full max-h-[80vh] h-auto"
                          alt="Banner"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                          <h1 className="text-white text-xl md:text-4xl font-bold">
                            {el.title}
                          </h1>
                          <p className="text-white text-md md:text-lg">
                            {el.bannerDescription}
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
                      <h1>TOUR DIFFICULTY</h1>
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
                      <h1>TOUR DURATION</h1>
                    </div>
                    <p className="text-lg">{el.tripDuration} {el.tripDuration > 1 ? "days" :"day"}</p>
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
                    <p className="text-lg">{el.highestPoint} m</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className=" hidden max-w-7xl mx-auto my-5 md:flex  gap-16">
              <div className="w-[60%]">{el.description}</div> 
   

              <div className="w-[40%] ">
                <div className="font-bold text-lg py-[1rem] mt-1 border-b-2 border-b-gray-600  text-gray-900">
                  Available Dates
                </div>
                <AvailableDates availableDates={el.availableDates}  data={el} />
              </div>
          
          </div>
        
            <div className="mx-auto max-w-5xl md:hidden px-5 py-12">

              <div>
                <div className="text-lg py-[1rem] mt-1 border-b-2 border-b-gray-600 font-bold text-gray-900">
                  Available Dates
                </div>
                <AvailableDates availableDates={el.availableDates}  data={el} />
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
                { el?.itinerary &&   <button
                      onClick={() => handleTabClick("ITINERARY")}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                        activeTab === "ITINERARY"
                          ? "text-gray-700 border-gray-300"
                          : "hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      ITINERARY
                    </button>}
                   { el?.mapLogo && <button
                      onClick={() => handleTabClick("MAP")}
                      className={`whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                        activeTab === "MAP"
                          ? "text-gray-700 border-gray-300"
                          : "hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      MAP
                    </button>}
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
            <section className="pt-3 pb-10 container mx-auto">
      
                <h1 className="text-lg md:text-xl lg:text-5xl text-center font-semibold p-5">
                  Photo Gallery
                </h1>
          
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {el.gallery.map((item, idx) => (
                  <div key={idx}>
                    <img
                      className="h-auto md:h-[300px] max-w-full rounded hover:scale-95 transition-all cursor-pointer"
                      src={item?.url}
                      alt="Gallery"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

  );
};

export default Trek;
