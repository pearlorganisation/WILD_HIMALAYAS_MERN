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

const OurCamp = () => {
  return (
    <>
      <section className="">
        <div className="overflow-hidden grid place-items-center">
          <div className="text-4xl absolute">
            <h1 className="text text-5xl font-bold text-white">OUR CAMPS</h1>
          </div>
          <img
            src="http://www.intowildhimalaya.com/activities_img/per_1168-min.JPG"
            alt=""
            className="h-[200px] md:h-[400px] w-full object-cover object-center bg-slate-50/50"
          />
        </div>
      </section>

      <section>
        <div>
          {" "}
          <h1 className="text text-lg font-medium p-4">
            Our Riverside Camps at Manali and Tirthan Valley
          </h1>
          <p className="p-4">
            Into Wild Himalaya has two riverside campsites located in Kalath
            (5km from Manali, Himachal Pradesh) and another one in Tirthan
            Valley (3Km from Great Himalayan National Park). It is the biggest
            camp in Manali and guarantees the best scenic views, good quality
            amenities, friendly service and luxurious tents to enable
            stress-free sleep. Reaching onsite, you will feel a sense of
            calmness. You can hear the rushing sound of the Beas River, the
            whirling of wildlife and feel of the refreshing mountain breeze
            passing through the campsite.
          </p>
          <p className="p-4">
            You will see the expansive grassland that is home to 15 of our tents
            encompassed by forest and majestic misty mountains either side. In
            each tent you will find there is a sleeping mattress, sleeping bag
            and pillow to ensure a comfortable nights sleep, as well as an en
            suite toilet and shower facility (hot water available from our
            onsite solar geyser), so you don't have to worry about a thing. Not
            only does our tents have its own seating area out front on the
            veranda, you can also make use of our hall for dining, socialising
            and even for business meetings.
          </p>
          <p className="p-4">
            Enjoy a game of volleyball at our court area or take a seat at our
            fire pit and enjoy the company of others under a starlit sky and the
            sounds of a crackling bonfire. IWH Camps has a friendly and
            welcoming atmosphere suitable for any age groups such as
            school/college summer adventure programmes, corporate groups,
            families and even special occasion group parties. Should you need an
            activity booked, rest assured this can be taken care of by a member
            of our team. We offer various outdoor adventure activities and
            packages which includes stream walking, river crossing, rock
            climbing, rappelling, day(s) hiking, cycling, fishing, canyoning and
            paragliding. We aim to meet the needs of others and to simply create
            a fun-filled experience that will be remembered at the best camp in
            Manali. So what are you waiting for? Into Wild Himalaya Camps awaits
            your arrival…
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

export default OurCamp;
