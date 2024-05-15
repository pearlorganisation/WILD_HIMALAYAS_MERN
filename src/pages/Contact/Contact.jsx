import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(data, "form data");
  return (
    <>
      <section>
        <div
          className="h-[25vh] md:h-[50vh] bg-center w-full bg-cover grid place-items-center"
          style={{
            backgroundImage: `url("https://campic-store-demo.myshopify.com/cdn/shop/files/bg_page.jpg?v=1691032098")`,
          }}
        >
          <div className="text-white text-center">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-medium jost">
              Contact Us
            </h1>
            <div className="text-center font-medium py-2">
              <span className="p-2">Home</span> <span>&gt;</span>{" "}
              <span className="p-2"> Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container  ">
          <div className="grid md:grid-cols-2   w-[80%] mx-auto my-10 bg-[#F7F7F7]">
            <div className="">
              <div className="md:p-10 p-5   text-[#494C4F] jost">
                <p className="tracking-widest">CONTACT INFORMATION</p>
                <div className="py-5">
                  {" "}
                  <hr className="w-[80px] text-[#FF6F29] " />{" "}
                </div>
                <p className="jost">
                  We do not sell product from our corporate headquarters in New
                  York City. If you want to visit, please reach out to our
                  customer service team first.
                </p>

                <div className="py-2 jost">
                  <p>1201 Broadway</p>
                  <p>Suite 600</p>
                </div>
                <div className="py-5">
                  <h1 className="text-xl md:text-2xl  lg:text-3xl font-medium jost text-black">
                    help@example.com
                  </h1>
                  <hr className=" w-[200px] md:w-[280px]" />
                  <div className="py-10">
                    <p className="tracking-widest">FOLLOW US</p>
                    <div className="py-5">
                      {" "}
                      <hr className="w-[80px] text-[#FF6F29] " />{" "}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-4 text-black">
                    <div className="border rounded-full w-[50px] h-[50px] flex items-center justify-center hover:bg-[#FF6F29] hover:text-white">
                      <div>
                        <FaTwitter />
                      </div>
                    </div>
                    <div className="border rounded-full w-[50px] h-[50px] flex items-center justify-center hover:bg-[#FF6F29] hover:text-white">
                      <div>
                        <FaInstagram />
                      </div>
                    </div>
                    <div className="border rounded-full w-[50px] h-[50px] flex items-center justify-center hover:bg-[#FF6F29] hover:text-white">
                      <div>
                        <FaFacebookF />
                      </div>
                    </div>
                    <div className="border rounded-full w-[50px] h-[50px] flex items-center justify-center hover:bg-[#FF6F29] hover:text-white">
                      <div>
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="">
              <img src="https://campic-store-demo.myshopify.com/cdn/shop/files/contact_us1.jpg?v=1691037496" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container mx-auto grid h-dvh place-items-center p-3">
            <div className="md:w-[80%]">
              <div className="text-center text-xl md:text-2xl lg:text-3xl font-medium jost text-black">
                Contact Form
                <hr className="mx-auto my-4 w-24 text-[#FF6F29]" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col">
                  <label className="font-medium" htmlFor="name">
                    Name
                  </label>{" "}
                  {errors.name && (
                    <span className="text-red-400">This field is required</span>
                  )}
                  <input
                    className="focus:outline-none border border-gray-300 p-3"
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium" htmlFor="emailAddress">
                    Email Address
                  </label>{" "}
                  {errors.email && (
                    <span className="text-red-400">This field is required</span>
                  )}
                  <input
                    className="focus:outline-none border border-gray-300 p-3"
                    type="text"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="font-medium" htmlFor="yourMessage">
                    Your Message
                  </label>{" "}
                  {errors.message && (
                    <span className="text-red-400">This field is required</span>
                  )}
                  <textarea
                    className="focus:outline-none border border-gray-300 p-3"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    {...register("message", { required: true })}
                  ></textarea>
                </div>
                <div className="grid place-items-center md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-black px-12 py-3 font-medium text-white hover:bg-[#FF6F29] sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section>
        <div className="min-h-[400px] bg-[#C6C6C6] flex justify-around items-center flex-col md:flex-row p-5">
          <div className="flex items-center">
            <div className="border-r-2 text-white pr-5 ">
              <SlEnvolopeLetter className="text-white " size={100} />
            </div>
            <div className="p-5 text-white">
              <div>
                <h1>OUR</h1>
              </div>
              <div>
                <h1 className="font-semibold text-lg md:text-2xl">
                  NEWSLETTER!
                </h1>
              </div>
              <div className="text-lg md:text-xl">
                <p>
                  It only takes a second to be the first to find
                  <br />
                  out about our latest news
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex w-full justify-start items-center">
              <input
                className="border p-4 w-full focus:outline-none"
                type="text"
                name=""
                id=""
              />

              <button
                type="submit"
                className="bg-black px-12 py-4  font-medium text-white hover:bg-[#FF6F29] sm:w-auto mt-4 md:mt-0"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=17881531025014822236"
                className="w-[250px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=5404852605928399226"
                className="w-[250px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=2508604475887328975"
                className="w-[250px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=14697948523138533043"
                className="w-[250px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram5.jpg?v=2443814745766223143"
                className="w-[250px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram6.jpg?v=10385380288537958565"
                className="w-[250px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram7.jpg?v=14633565151895174854"
                className="w-[250px] "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Contact;
