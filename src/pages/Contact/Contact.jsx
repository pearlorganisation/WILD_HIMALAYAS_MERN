import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import React, { useRef, useState } from "react";
import { IoMdCall } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import address from "../../assets/images/address.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactAction } from "@/features/actions/contactAction";
import { Toaster, toast } from "sonner";
import "./Spinner.css";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(contactAction(data));
    console.log(data);
  };

  console.log(data, "form data");

  const { contact, isLoading, iserror } = useSelector((state) => state.contact);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const contactSubmit = () => {
  //   useEffect(() => {
  //     dispatch(contactAction());
  //   }, []);
  // };

  console.log(contact?.data, "contact data");
  console.log(isLoading);

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

      <section class="text-center py-16 bg-gray-100">
        <h2 class="text-4xl font-semibold mb-4">Get in Touch</h2>
        <div class="border-t-4 border-orange-500 w-16 mx-auto mb-8"></div>
        <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div class="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex-1">
            <div class="flex items-center justify-center space-x-2 mb-4">
              <IoMdCall />
              <p class="text-lg font-medium">Call for Booking Enquiries</p>
            </div>
            <p class="text-xl font-bold">+91-9816098702</p>
          </div>
          <div class="bg-indigo-500 text-white p-6 rounded-lg shadow-lg flex-1">
            <div class="flex items-center justify-center space-x-2 mb-4">
              <IoMdCall />
              <p class="text-lg font-medium">Call for Post Booking Questions</p>
            </div>
            <p class="text-xl font-bold">+91-9816354380</p>
          </div>
          .
          <div class="bg-teal-500 text-white p-6 rounded-lg shadow-lg flex-1 ">
            <div class="flex items-center justify-center space-x-2 mb-4">
              <IoMdCall />
              <p class="text-lg font-medium">Call for Payment Queries</p>
            </div>
            <p class="text-xl font-bold">+91-9816075309</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container  ">
          <div className="grid md:grid-cols-2 w-[80%] mx-auto my-10 bg-[#F7F7F7]">
            <div className="">
              <div className="md:p-10 p-5   text-[#494C4F] jost">
                <p className="tracking-widest">CONTACT INFORMATION</p>
                <div className="py-5">
                  {" "}
                  <hr className="w-[80px] text-[#FF6F29] " />{" "}
                </div>
                <p className="jost">
                  Our head office is located in Manali, a small town situated
                  west of Indian Himalaya, Himachal Pradesh, India.
                </p>

                <div className="py-2 jost">
                  <p>
                    VPO - Goshal District - Lahaul Himachal Pradesh Postal code
                    - 175132 INDIA
                  </p>
                </div>
                <div className="py-5">
                  <h1 className="text-xl md:text-2xl  lg:text-3xl font-medium jost text-black p-2">
                    info@intowildhimalaya.com
                  </h1>
                  <h1 className="text-xl md:text-2xl  lg:text-3xl font-medium jost text-black p-2">
                    intowildhimalaya@gmail.com
                  </h1>
                  <hr className=" w-[200px] md:w-[280px]" />
                  <div className="py-10">
                    <p className="tracking-widest">FOLLOW US</p>
                    <div className="py-5">
                      {" "}
                      <hr className="w-[80px] text-[#FF6F29] " />
                      {""}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-4 text-black ">
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
              <img src={address} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container mx-auto grid h-dvh place-items-center p-3 ">
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
                    className="focus:outline-none border border-gray-300 p-3 rounded"
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
                    className="focus:outline-none border border-gray-300 p-3 rounded"
                    type="text"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium" htmlFor="number">
                    Number
                  </label>{" "}
                  {errors.phoneNumber && (
                    <span className="text-red-400">This field is required</span>
                  )}
                  <input
                    className="focus:outline-none border border-gray-300 p-3 rounded"
                    type="text"
                    name="number"
                    id="number"
                    {...register("phoneNumber", { required: true })}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium" htmlFor="address">
                    Address
                  </label>{" "}
                  {errors.address && (
                    <span className="text-red-400">This field is required</span>
                  )}
                  <input
                    className="focus:outline-none border border-gray-300 p-3 rounded"
                    type="text"
                    name="address"
                    id="address"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="font-medium" htmlFor="message">
                    Your Message
                  </label>{" "}
                  {errors.message && (
                    <span className="text-red-400">This field is required</span>
                  )}
                  <textarea
                    className="focus:outline-none border border-gray-300 p-3 rounded"
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
                    className="w-full bg-black px-12 py-3 font-medium text-white sm:w-auto"
                  >
                    {isLoading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Submit"
                    )}
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
                className="bg-black px-12 py-4  font-medium text-white  sm:w-auto mt-4 md:mt-0"
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
            <Link to="/upcomingTrek">
              <div className="flex justify-center items-center ">
                <img
                  src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=17881531025014822236"
                  className="w-[250px] "
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/upcomingTrek">
              <div className="flex justify-center items-center">
                <img
                  src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=5404852605928399226"
                  className="w-[250px] "
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/upcomingTrek">
              <div className="flex justify-center items-center">
                <img
                  src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=2508604475887328975"
                  className="w-[250px] "
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/upcomingTrek">
              <div className="flex justify-center items-center">
                <img
                  src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=14697948523138533043"
                  className="w-[250px] "
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/upcomingTrek">
              <div
                className="flex justify-center items-center"
                href="/upcomingtrek"
              >
                <img
                  src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram5.jpg?v=2443814745766223143"
                  className="w-[250px] "
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/upcomingTrek">
              <div className="flex justify-center items-center">
                <img
                  src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram6.jpg?v=10385380288537958565"
                  className="w-[250px] "
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/upcomingTrek">
              <div className="flex justify-center items-center">
                <img
                  src="https://campic-store-demo.myshopify.com/cdn/shop/files/instagram7.jpg?v=14633565151895174854"
                  className="w-[250px] "
                />
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Contact;
