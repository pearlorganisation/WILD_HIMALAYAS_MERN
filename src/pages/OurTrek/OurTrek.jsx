import React, { useDebugValue, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoLocationSharp } from "react-icons/io5";
import { GiMountainClimbing } from "react-icons/gi";
import { ImBasecamp } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { specificTour } from "@/features/actions/toursAction";


const OurTrek = () => {

  const {state:el} = useLocation()
  const dispatch= useDispatch()
  const {activityTourData} = useSelector((state)=>state.activity)

  useEffect(()=>{
dispatch(specificTour({id:el?._id}))
console.log(activityTourData)
  },[])

  return (
    <>

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
    
   


      <section className="">
        <div>
          <h1 className="text text-center uppercase  text-3xl md:text-4xl md:pt-10 font-medium">
            {el?.title} TOURS
          </h1>
        </div>
        <div className="text text-center text-lg font-medium">
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
