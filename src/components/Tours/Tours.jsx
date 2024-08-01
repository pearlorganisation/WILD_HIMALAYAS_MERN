import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaPoundSign } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { tourAction } from "@/features/actions/toursAction";
import parse from "html-react-parser";

export const Tours = () => {
  const { isLoading, data } = useSelector((state) => state.tour);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tourAction());
  }, []);

  console.log(data, "tour data ");

  const [activeTab, setActiveTab] = useState("ITINERARY");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const RenderTabComponent = ({ tabData }) => {
    console.log("datadata", tabData);
    switch (activeTab) {
      case "ITINERARY":
        return (
          <div className=" p-4">
            <div className="container max-w-full grid md:grid-cols-[10%_auto]">
              <div className=" ">
                <FaWalking size={100} />
              </div>

              <div className=" ">
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
                <img src={tabData?.mapLogo} />
              </div>
            </div>
          </div>
        );
      case "INCLUSIONS_AND_EXCLUSIONS":
        return (
          <div className=" p-4">
            <div className="container max-w-full grid md:grid-cols-[10%_auto]">
              <div className=" ">
                <FaWalking size={100} />
              </div>

              <div className=" ">
                <div className="border-b-2 p-10">
                  {parse(tabData?.inclusionsAndExclusions)}
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
      {data.map((el, id) => {
        return (
          <>
            <section>
              <section>
                <div
                  className="h-[45vh] bg-cover bg-center opacity-85"
                  style={{ backgroundImage: `url(${el?.banner})` }}
                >
                  <div className="flex flex-col  gap-10">
                    <div className="flex  flex-col mt-10 justify-center  gap-10 items-center">
                      <h1 className="font-extrabold  text-white text-[1rem] text-center text-wrap md:text-[2rem] text sedan-sc-regular">
                        {el?.title}
                      </h1>
                      <p
                        className="font-semibold text-[0.8rem] md:[1.2rem] sedan-sc-regular text-white
           "
                      >
                        LADAKH ZANSKAR
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                      <button
                        className="text-black
                       font-semibold shadow-md
                        hover:shadow-black bg-white  
                        border-2 md:p-[5px] md:px-4 p-1
                         hover:text-white md:w-[200px] 
                          text-[0.8rem] rounded-2xl
                            hover:bg-[#f26925] 
                            w-[150px] active:scale-95
                             md:text-[1.1rem] 
                             border-transparent
                              border-[#f26925]"
                      >
                        Activities : Trekking
                      </button>
                      <button
                        className="text-black font-semibold 
                      shadow-md hover:shadow-black bg-white  
                      border-2 md:p-[5px] md:px-4 p-1 text-[0.8rem]
                       hover:text-white md:w-[200px] rounded-2xl 
                        hover:bg-[#f26925] w-[150px] active:scale-95 
                        md:text-[1.1rem] border-transparent
                         border-[#f26925]"
                      >
                        Trip : Category
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <section>
              {" "}
              <div className="grid md:grid-cols-2">
                <div>
                  <div className="p-5">
                    <h1 className="text-md font-semibold py-5">
                      TRIP INFORMATION
                    </h1>

                    <div class="relative overflow-x-auto">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                          <tr class="bg-gray-200 border border-b-white ">
                            <td class="px-6 py-4 text-[#F26925] text-lg ">
                              Trip Duration
                            </td>
                            <td class="px-6 py-4 text-lg ">
                              {el?.tripDuration}
                            </td>
                          </tr>
                          <tr class="bg-gray-200 border border-b-white ">
                            <td class="px-6 py-4 text-lg  text-[#F26925]">
                              Trip Grade
                            </td>
                            <td class="px-6 py-4 text-lg ">{el?.difficulty}</td>
                          </tr>
                          <tr class="bg-gray-200 border border-b-white  ">
                            <td class="px-6 py-4 text-[#F26925] text-lg">
                              Max. Group Size
                            </td>

                            <td class="px-6 py-4 text-lg ">
                              {el?.maxGroupSize}
                            </td>
                          </tr>
                          <tr class="bg-gray-200 rounded  border border-b-white ">
                            <td class="px-6 py-4 text-[#F26925] text-lg ">
                              Highest Point
                            </td>
                            <td class="px-6 py-4 text-lg ">
                              {el?.highestPoint}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className=" text-md font-semibold ">
                      <h1 className="py-5">TRIP HIGHLIGHTS</h1>
                      {el.tripHighlights.map((highlight, id) => {
                        return (
                          <>
                            <div class="relative overflow-x-auto">
                              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                  <tr class="bg-gray-200 border border-b-white ">
                                    <td class="px-6 py-4 text-lg">
                                      {highlight}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <div className="sm:hidden">
                    <select
                      aria-label="Selected tab"
                      className="block w-full"
                      value={activeTab}
                      onChange={(e) => handleTabClick(e?.target?.value)}
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
            </section>
          </>
        );
      })}
    </>
  );
};
export default Tours;
