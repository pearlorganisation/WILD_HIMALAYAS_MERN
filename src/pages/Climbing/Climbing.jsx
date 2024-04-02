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
import ClimbingImg from "../../assets/images/climbing.jpg";

const Climbing = () => {
  return (
    <>
      <section className="">
        <div className="overflow-hidden grid place-items-center">
          <div className="text-4xl absolute">
            <h1 className="text-lg text-center md:text-5xl font-bold text-white">
              HIMALAYAN GUIDED MOTORBIKE TOURS
            </h1>
          </div>
          <img
            src={ClimbingImg}
            alt=""
            className="h-[200px] md:h-[400px] w-full object-cover object-center bg-slate-50/50"
          />
        </div>
      </section>

      <section>
        <div className=" p-3 md:p-10 ">
          {" "}
          <p className="p-4">
            With over 40 trekking trips available to various places around India
            , Into Wild Himalaya Adventure Tour & Travels decided to launch
            motorcycle tours primarily within the Indian Himalayan regions but
            also offer tours elsewhere. The regions where Indian bike tours are
            available are around Manali, Leh/Ladakh, Kinnaur, Lahaul & Spiti
            Valley, Rajasthan, South India and Nepal.
          </p>
          <p className="p-4">
            As a certified Motorcycle Tour Company, you can be assured that your
            Indian Himalayan motorcycle tour experience are in the hands of
            experts. We provide top of the range Royal Enfield motorcycles and
            endeavour to provide the latest models to those who wish to ride the
            Himalaya’s stunning routes in style. We offer tours that can cater
            different budgets and accommodation styles, from five star luxury
            packages to superior B&B or motels.
          </p>
          <p className="p-4">
            You can undertake a fully guided motorbike tour or have a
            self-guided motorbike adventure for those that wish to rent a
            motorcycle and simply go where the road takes you. Both guided and
            self- guided motorcycle tour itineraries are designed to ensure you
            enjoy your ride time as well as experiencing the surrounding areas,
            whether it be visiting local villages or a monastery. There is much
            to see and learn about India’s landscapes, people and culture.
          </p>
          <p className="p-4">
            Those who don’t wish to ride a motorbike can either travel pillion
            or follow the tour in our luxury air- conditioned backup vehicle.
            Our backup vehicle can be a Mahindra Bolero, Camper Gold or either
            Bolero Jeep. The Jeep will carry your luggage so you can enjoy
            riding world’s highest motorable roads unencumbered. The team at
            Into Wild Himalaya has years of experience and in-depth knowledge of
            Leh/Ladakh, Kinnaur, Lahaul & Spiti Valley of Indian Western
            Himalaya.
          </p>
          <p className="p-4">
            Safety and sustainability on each tour is taken seriously and risk
            assessments are undertaken to ensure that you enjoy the ride without
            any worries. See the breathtaking views and ride one of the world’s
            highest motorable passes with Into Wild Himalaya.we are the best
            Motorbike tour operator India, Himalayan guided motorbike tours,
            Guided motorbike tours India
          </p>
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
            <SwiperSlide>
              <div className="relative w-[350px] h-[350px]">
                <img
                  alt="Camping Programme"
                  className="w-full h-full object-cover"
                  height="350"
                  src="http://www.intowildhimalaya.com/tour_packages_img/dsc08276.JPG"
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
                      SCHOOL SURVIVAL TREK TO SEOLSAR LAKE
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
                  src="http://www.intowildhimalaya.com/tour_packages_img/img_4881.JPG"
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
                      SCHOOL SURVIVAL SKILLS PROGRAM
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
    </>
  );
};

export default Climbing;
