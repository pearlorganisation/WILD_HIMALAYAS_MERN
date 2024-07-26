import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { IoLocationSharp } from "react-icons/io5";
import { GiMountainClimbing } from "react-icons/gi";
import { ImBasecamp } from "react-icons/im";
import OurTrekI from "../../assets/images/ourtrek1.jpg";
const OurTrek = () => {
  return (
    <>
      <section className=" min-h-screen relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-[100vh]"
        >
          <SwiperSlide>
            <div class="relative">
              <img src={OurTrekI} class="w-full" alt="Your Image" />
              <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <p class="text-white text-lg font-bold">
                  EXPEDITIONS OFCLIMBING THE HIMALAYAS
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative">
              <img
                src="http://www.intowildhimalaya.com/slideshow_img/per_9174-min.JPG"
                class="w-full"
                alt="Your Image"
              />
              <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <p class="text-white text-lg font-bold">
                  RIDE INDIA'S HIGHESTMOTORABLE PASSES
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative">
              <img
                src="http://www.intowildhimalaya.com/slideshow_img/climb1.jpeg"
                class="w-full"
                alt="Your Image"
              />
              <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <p class="text-white text-lg font-bold">
                  CONQUER HIMALAYANMOUNTAINS BY BICYCLE
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative">
              <img src={OurTrekI} class="w-full" alt="Your Image" />
              <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <p class="text-white text-lg font-bold">
                  EXPEDITIONS OFCLIMBING THE HIMALAYAS
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="p-5">
        <div>
          <h1 className="text text-center text-4xl font-medium p-5">
            POPULAR TOURS
          </h1>
        </div>
        <div className="text text-center text-lg font-medium p-5">
          <p>We have a unique way of meeting your adventurous expectations!</p>
        </div>
      </section>

      <section className="container mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          <SwiperSlide>
            {/* <div className="felx justify-center">
              <div className="relative w-[350px] h-[350px] ">
                <img
                  alt="Camping Programme "
                  className="w-full h-full object-cover"
                  height="350"
                  src="http://www.intowildhimalaya.com/tour_packages_img/markha-valley-overview.jpg"
                  style={{
                    aspectRatio: "350/350",
                    objectFit: "cover",
                  }}
                  width="350"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 bg-black bg-opacity-20">
                  <div className="flex justify-between items-start">
                    <div className="bg-white py-1 px-3">
                      <p className="text-xs font-bold">From</p>
                      <p className="text-lg font-bold">€ 94/-</p>
                    </div>
                    <div className="bg-orange-600 text-white rounded-full px-4 py-2">
                      <p className="text-xs font-bold">6 Days</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      MONASTERIES AND ARYANS OF LADAKH TREK
                    </h3>
                    <ul className="text-white">
                      <li className="flex items-center mb-1">
                        <IoLocationSharp
                          className="text-white mr-2 "
                          size={25}
                        />
                        Ladakh Zanskar
                      </li>
                      <li className="flex items-center mb-1">
                        <GiMountainClimbing
                          className="text-white mr-2 "
                          size={25}
                        />
                        Moderate
                      </li>
                      <li className="flex items-center">
                        <ImBasecamp className="text-white  mr-2" size={25} />
                        Trekking
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center py-10">
              <div className="relative w-[350px] h-[350px] overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  src="http://www.intowildhimalaya.com/tour_packages_img/markha-valley-overview.jpg"
                  style={{
                    aspectRatio: "350/350",
                    objectFit: "cover",
                  }}
                  width="350"
                  height="350"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 bg-white bg-opacity-40">
                  <div className="flex justify-between items-start">
                    <div className="bg-orange-100 py-1 px-3 rounded-lg shadow">
                      <p className="text-xs font-bold text-gray-700">From</p>
                      <p className="text-lg font-bold text-gray-900">€ 94/-</p>
                    </div>
                    <div className="bg-orange-600 text-white rounded-full px-4 py-2 shadow">
                      <p className="text-xs font-bold">6 Days</p>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      MONASTERIES AND ARYANS OF LADAKH TREK
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li className="flex items-center">
                        <IoLocationSharp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Ladakh Zanskar
                      </li>
                      <li className="flex items-center">
                        <GiMountainClimbing
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Moderate
                      </li>
                      <li className="flex items-center">
                        <ImBasecamp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Trekking
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center py-10">
              <div className="relative w-[350px] h-[350px] overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  src="http://www.intowildhimalaya.com/tour_packages_img/dsc08333.JPG"
                  style={{
                    aspectRatio: "350/350",
                    objectFit: "cover",
                  }}
                  width="350"
                  height="350"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 bg-white bg-opacity-40">
                  <div className="flex justify-between items-start">
                    <div className="bg-orange-100 py-1 px-3 rounded-lg shadow">
                      <p className="text-xs font-bold text-gray-700">From</p>
                      <p className="text-lg font-bold text-gray-900">€ 94/-</p>
                    </div>
                    <div className="bg-orange-600 text-white rounded-full px-4 py-2 shadow">
                      <p className="text-xs font-bold">6 Days</p>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      SCHOOL SUMMER ADVENTURE CAMP (TIRTHAN VALLEY)
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li className="flex items-center">
                        <IoLocationSharp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Himachal Pradesh
                      </li>
                      <li className="flex items-center">
                        <GiMountainClimbing
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Moderate
                      </li>
                      <li className="flex items-center">
                        <ImBasecamp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Trekking
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center py-10">
              <div className="relative w-[350px] h-[350px] overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  src="http://www.intowildhimalaya.com/tour_packages_img/dsc08406.JPG"
                  style={{
                    aspectRatio: "350/350",
                    objectFit: "cover",
                  }}
                  width="350"
                  height="350"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 bg-white bg-opacity-40">
                  <div className="flex justify-between items-start">
                    <div className="bg-orange-100 py-1 px-3 rounded-lg shadow">
                      <p className="text-xs font-bold text-gray-700">From</p>
                      <p className="text-lg font-bold text-gray-900">€ 94/-</p>
                    </div>
                    <div className="bg-orange-600 text-white rounded-full px-4 py-2 shadow">
                      <p className="text-xs font-bold">6 Days</p>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      CAMPING PROGRAMME IN MANALI
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li className="flex items-center">
                        <IoLocationSharp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Himachal Pradesh
                      </li>
                      <li className="flex items-center">
                        <GiMountainClimbing
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Moderate
                      </li>
                      <li className="flex items-center">
                        <ImBasecamp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Trekking
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center py-10">
              <div className="relative w-[350px] h-[350px] overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  src="http://www.intowildhimalaya.com/tour_packages_img/spiti-bike.jpg"
                  style={{
                    aspectRatio: "350/350",
                    objectFit: "cover",
                  }}
                  width="350"
                  height="350"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 bg-white bg-opacity-40">
                  <div className="flex justify-between items-start">
                    <div className="bg-orange-100 py-1 px-3 rounded-lg shadow">
                      <p className="text-xs font-bold text-gray-700">From</p>
                      <p className="text-lg font-bold text-gray-900">€ 94/-</p>
                    </div>
                    <div className="bg-orange-600 text-white rounded-full px-4 py-2 shadow">
                      <p className="text-xs font-bold">6 Days</p>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ROYAL ENFIELD MOTORCYCLE TOUR- KINNOUR- SPITI
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li className="flex items-center">
                        <IoLocationSharp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Himachal Pradesh
                      </li>
                      <li className="flex items-center">
                        <GiMountainClimbing
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Moderate
                      </li>
                      <li className="flex items-center">
                        <ImBasecamp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Trekking
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center py-10">
              <div className="relative w-[350px] h-[350px] overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  src="http://www.intowildhimalaya.com/tour_packages_img/rajasthan-motorcycle-tour.jpg"
                  style={{
                    aspectRatio: "350/350",
                    objectFit: "cover",
                  }}
                  width="350"
                  height="350"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 bg-white bg-opacity-40">
                  <div className="flex justify-between items-start">
                    <div className="bg-orange-100 py-1 px-3 rounded-lg shadow">
                      <p className="text-xs font-bold text-gray-700">From</p>
                      <p className="text-lg font-bold text-gray-900">€ 94/-</p>
                    </div>
                    <div className="bg-orange-600 text-white rounded-full px-4 py-2 shadow">
                      <p className="text-xs font-bold">6 Days</p>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      MOTORCYCLE TOURS IN SOUTH INDIA
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li className="flex items-center">
                        <IoLocationSharp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Himachal Pradesh
                      </li>
                      <li className="flex items-center">
                        <GiMountainClimbing
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Moderate
                      </li>
                      <li className="flex items-center">
                        <ImBasecamp
                          className="mr-2 text-orange-600"
                          size={20}
                        />
                        Trekking
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default OurTrek;
