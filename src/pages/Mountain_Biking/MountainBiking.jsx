import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { IoLocationSharp } from "react-icons/io5";
import { GiMountainClimbing } from "react-icons/gi";
import { ImBasecamp } from "react-icons/im";
import mbike from "../../assets/images/mbike.jpeg";
const MountainBiking = () => {
  return (
    <>
    <div>
      <section className="" >
        <div className="overflow-hidden grid place-items-center">
          <div className="text-4xl absolute">
            <h1 className="text-xl  text-center md:text-5xl font-bold text-white">
              HIMALAYAN MOUNTAIN BIKING TOUR
            </h1>
          </div>
          <img
            src={mbike}
            alt=""
            className="h-[200px] md:h-[400px] w-full object-cover  bg-slate-50/50 object-bottom"
          />
        </div>
      </section>

      <section>
        <div>
          {" "}
          <p className="p-4">
            India can be best experienced mountain biking in Himalaya over
            scenic high mountain passes, through lush forests and national
            parks. Not only does mountain biking allow you to experience at your
            own leisure but also enables you to meet the locals and learn about
            the culture.
          </p>
          <p className="p-4">
            There are many classic cycling trips around Rajasthan and South of
            India along the Bangalore-Goa trail, as well as some
            off-the-beaten-track trails for the more adventurous individuals
            such as Manali to Leh in the North.
          </p>
          <p className="p-4">
            Into Wild Himalaya is one of the best mountain biking company in
            India and is most popular for its mountain biking routes in Himachal
            but does offer various best rides in India. There is nothing more
            thrilling than experiencing Himalaya on a mountain bike and testing
            your limits. Mountain biking routes in Ladakh is a popular region
            for it’s challenging trails.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-center p-5 text-xl md:text-5xl  font-medium">
            PACKAGES FOR HIMALAYAN MOUNTAIN BIKING TOUR
          </h1>
        </div>
      </section>
      <section className="py-5">
        <div className="mx-auto container flex justify-center">
          <Swiper
            breakpoints={{
              // When window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // When window width is >= 768px and < 1024px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // When window width is < 768px
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative w-[350px] h-[350px] ">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  height="350"
                  src="http://www.intowildhimalaya.com/tour_packages_img/spiti-bike.jpg"
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
                      ROYAL ENFIELD MOTORCYCLE TOUR- KINNOUR- SPITI
                    </h3>
                    <ul className="text-white">
                      <li className="flex items-center mb-1">
                        <IoLocationSharp
                          className="text-white mr-2 "
                          size={25}
                        />
                        Indian Motorcycle Tours
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
                        Indian Motorcycle Tours
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg"
                    >
                      Indian Motorcycle Tours
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[350px] h-[350px]">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  height="350"
                  src="http://www.intowildhimalaya.com/tour_packages_img/in-the-foothills-of-the-himalayas-motorcycle-tour-img.jpg"
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
                      <p className="text-lg font-bold">€ 94/</p>
                    </div>
                    <div className="bg-orange-600 text-white rounded-full px-4 py-2">
                      <p className="text-xs font-bold">6 Days</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                    IN THE FOOTHILLS OF THE HIMALAYAS MOTORCYCLE TOUR
                    </h3>
                    <ul className="text-white">
                      <li className="flex items-center mb-1">
                        <IoLocationSharp
                          className="text-white mr-2 "
                          size={25}
                        />
                        Our Camps
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
                        Our Camps
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[350px] h-[350px] ">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  height="350"
                  src="http://www.intowildhimalaya.com/tour_packages_img/rajasthan-motorcycle-tour.jpg"
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
                    THE LAND OF MAHARAJAS - RAJASTHAN MOTORCYCLE TOUR
                    </h3>
                    <ul className="text-white">
                      <li className="flex items-center mb-1">
                        <IoLocationSharp
                          className="text-white mr-2 "
                          size={25}
                        />
                        Our Camps
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
                        Our Camps
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[350px] h-[350px]">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  height="350"
                  src="http://www.intowildhimalaya.com/tour_packages_img/img_4717.jpg"
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
                      WEEKEND CAMPING IN TIRTHAN VALLEY
                    </h3>
                    <ul className="text-white">
                      <li className="flex items-center mb-1">
                        <IoLocationSharp
                          className="text-white mr-2 "
                          size={25}
                        />
                        Our Camps
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
                        Our Camps
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[350px] h-[350px]">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  height="350"
                  src="http://www.intowildhimalaya.com/tour_packages_img/dsc08406.JPG"
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
                      CAMPING PROGRAMME IN MANALI
                    </h3>
                    <ul className="text-white">
                      <li className="flex items-center mb-1">
                        <IoLocationSharp
                          className="text-white mr-2 "
                          size={25}
                        />
                        Our Camps
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
                        Our Camps
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
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      </div>
    </>
  );
};

export default MountainBiking;
