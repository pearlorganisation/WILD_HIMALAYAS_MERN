import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GiMountainClimbing } from "react-icons/gi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import parse from "html-react-parser";
// import required modules
import { Navigation } from "swiper/modules";
import { IoIosTimer } from "react-icons/io";
import { GiMountaintop } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";
import H1 from "../../assets/images/h1.jpg";
import H2 from "../../assets/images/h2.jpg";
import H3 from "../../assets/images/h3.jpg";
import H4 from "../../assets/images/h4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { trekAction } from "@/features/actions/trekAction";

const Trek = () => {
  const { isLoading, data } = useSelector((state) => state.trek);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trekAction());
  }, []);

  console.log(data);

  const trekingdata = {
    trekdificulty: "Easy Moderate",
    trekduration: "6 days",
    highestalititute: "12,083 ft",
    agelimit: "10 to 62 years",
  };

  return (
    <>
      {data.map((el, i) => {
        return (
          <div>
            <section className="">
              <div>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {el.banners.map((item) => {
                    return (
                      <SwiperSlide>
                        <div className="relative">
                          <img
                            src={item}
                            className="w-full max-h-[80vh] h-auto"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                            <h1 className="text-white text-xl  md:text-4xl font-bold">
                              {el.name}
                            </h1>
                            <p className="text-white text-md md:text-lg">
                              {`A summit climb to one of India's best panoramas`}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </section>

            <section className="">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5 ">
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
                    <p className="text-lg ">{el.difficulty}</p>
                  </div>
                </div>
                <div className=" flex items-center justify-center w-full">
                  <div>
                    <IoIosTimer className="text-[#3a81f2] m-4" size={50} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg text-black font-bold mb-2">
                      <h1>TREK DURATION</h1>
                    </div>
                    <p className="text-lg ">{el.duration}</p>
                  </div>
                </div>
                <div className=" flex items-center justify-center w-full">
                  <div>
                    <GiMountaintop className="text-green-600 m-4" size={50} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg text-black font-bold mb-2">
                      <h1>HIGHEST ALTITUDE</h1>
                    </div>
                    <p className="text-lg ">{el.altitude}</p>
                  </div>
                </div>
                {/* <div className=" flex items-center justify-center w-full">
                  <div>
                    <FaPeopleRobbery className="text-[#a37c62] m-4" size={50} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg text-black font-bold mb-2">
                      <h1>AGE LIMIT</h1>
                    </div>
                    <p className="text-lg ">10 to 62 years</p>
                  </div>
                </div> */}
              </div>
            </section>

            <section className="">{parse(el.description)}</section>

            <section className="p-5 py-0 container mx-auto">
              <div>
                <h1 className="text-lg md:text-xl lg:text-5xl text-center font-semibold p-5">
                  Photo Gallery
                </h1>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {el?.gallery?.map((item, i) => {
                  return (
                    <div key={i}>
                      <img
                        class="h-auto md:h-[300px] max-w-full rounded hover:scale-95 transition-all cursor-pointer "
                        src={item}
                        alt=""
                        key={i}
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Trek;
