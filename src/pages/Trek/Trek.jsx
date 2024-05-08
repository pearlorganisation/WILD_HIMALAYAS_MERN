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

  const imgdata = [
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Ff74ff0f9-579d-4b78-bcbf-6484493709f2_Deoriatal%2BChandrashila_Jothiranjan_Spring_chopta%2Bto%2Bthugnath_%2B%25287%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F5bcdc31e-50a0-4fbd-be09-e44cc2a6bd91_Deoriatal%2BChandrashila_Indiahikes_Kishore%2BReddy_%2B%25281%2529%2B%25281%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fff9696e9-eb82-4c82-a183-12e1c37e9bf1_Deoriatal%2BChandrashila%2Btrek_Gauri%2BKhamkar_Rhododendron%2BTrail%2Bto%2BRohini%2Bbugyal_%2BDSC_0091.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",

    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fbb2ff55f-f390-4e7e-91a0-9017544243b0_Deoriatal-Aruna%2BMani-Sunrise%2Bat%2Bchopta.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fcc8b977c-e85a-4d6a-8a34-58b0227a929a_March%2B-%2BCopy%2Bof%2BDeoriatal%2B-%2BChandrashila%2BPeak%2B-%2BYogesh%2BShinde%2B-%2BRhododendron_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fef515935-fe9e-441d-8929-706148fb492f_Deoriatal%2BChandrashila_Jothiranjan_Winter%2Bseason_Sari%2Bvillage_Trekkers%2Bon%2Btrail_Snow_%2B%252815%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",

    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F03e4573d-967f-4634-8e78-4e1d34805bd5_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_136_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F1a73fab9-a824-4ff0-9b76-b0a599810e5a_Deoriatal%2BChandrasila_DC_Indiahikes_Jothiranjan_%2B%2528156%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F03e4573d-967f-4634-8e78-4e1d34805bd5_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_136_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",

    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F2c7ebbe5-e0ba-4d72-a825-70ae1a6378ef_Deoriatal%2BChandrasila_DC_Indiahikes_Jothiranjan_%2Bapril2021_%2B%2528101%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fdb50f6ce-3632-4da6-89c8-57f0dfd9cc90_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_101_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
    "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F7fc7c28e-d6c0-400b-bdbc-15202f599200_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_67_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
  ];

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
                            src={item.path}
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
                <div className=" flex items-center justify-center w-full">
                  <div>
                    <FaPeopleRobbery className="text-[#a37c62] m-4" size={50} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg text-black font-bold mb-2">
                      <h1>AGE LIMIT</h1>
                    </div>
                    <p className="text-lg ">10 to 62 years</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="">
              {parse(el.description)}
              {/* <div className=" ">
                <div className="mx-auto max-w-5xl px-5 py-24">
                  <div className="mx-auto flex flex-col items-center w-full">
                    <img
                      alt="image"
                      className="h-64 w-full rounded object-cover"
                      src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F5bcdc31e-50a0-4fbd-be09-e44cc2a6bd91_Deoriatal%2BChandrashila_Indiahikes_Kishore%2BReddy_%2B%25281%2529%2B%25281%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
                    />
                    <div className="mt-6 w-full lg:mt-0">
                      <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                        HANDRASHILA
                      </h2>
                      <h1 className="my-4 text-3xl font-semibold text-black">
                        DEORIATAL CHANDRASHILA
                      </h1>
                      <div className="my-4 flex items-center"></div>
                      <p className="leading-relaxed">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tenetur rem amet repudiandae neque adipisci eum
                        enim, natus illo inventore totam?
                      </p>

                      <div className="flex items-center justify-between py-5">
                        <span className="title-font text-xl font-bold text-gray-900">
                          Track fee ₹47,199
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </section>

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
                        src={item.path}
                        alt=""
                        key={i}
                      />
                    </div>
                  );
                })}

                {/* <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fff9696e9-eb82-4c82-a183-12e1c37e9bf1_Deoriatal%2BChandrashila%2Btrek_Gauri%2BKhamkar_Rhododendron%2BTrail%2Bto%2BRohini%2Bbugyal_%2BDSC_0091.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fbb2ff55f-f390-4e7e-91a0-9017544243b0_Deoriatal-Aruna%2BMani-Sunrise%2Bat%2Bchopta.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fcc8b977c-e85a-4d6a-8a34-58b0227a929a_March%2B-%2BCopy%2Bof%2BDeoriatal%2B-%2BChandrashila%2BPeak%2B-%2BYogesh%2BShinde%2B-%2BRhododendron_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>

          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fef515935-fe9e-441d-8929-706148fb492f_Deoriatal%2BChandrashila_Jothiranjan_Winter%2Bseason_Sari%2Bvillage_Trekkers%2Bon%2Btrail_Snow_%2B%252815%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F03e4573d-967f-4634-8e78-4e1d34805bd5_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_136_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F1a73fab9-a824-4ff0-9b76-b0a599810e5a_Deoriatal%2BChandrasila_DC_Indiahikes_Jothiranjan_%2B%2528156%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F2c7ebbe5-e0ba-4d72-a825-70ae1a6378ef_Deoriatal%2BChandrasila_DC_Indiahikes_Jothiranjan_%2Bapril2021_%2B%2528101%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fdb50f6ce-3632-4da6-89c8-57f0dfd9cc90_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_101_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F7fc7c28e-d6c0-400b-bdbc-15202f599200_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_67_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded hover:scale-95 transition-all cursor-pointer"
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F03e4573d-967f-4634-8e78-4e1d34805bd5_Deoriatal%2Bchandrashila_DC_Family%2Btrek_Jothiranjan_April%2B2022_136_.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt=""
            />
          </div> */}
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Trek;
