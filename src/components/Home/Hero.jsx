import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero1 from "../../assets/images/hero1.webp";

import Hero2 from "../../assets/images/hero2.webp";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            src={Hero1}
            alt="technology"
            className="w-full lg:h-full h-[450px]"
            srcset="" />
          <div className="slide-content  content-right ">
            <div className="sub-title1 ">
             
            </div>
            <div className="title-slide">
              <h3
                className="animated lg:text-6xl text-4xl lg:my-10 my-5 font-semibold"
                style={{ color: "#fff" }}
              >
                Mountain Climbing
              </h3>
            </div>
            <div className="desc-slide">
              <p
                className="animated lg:tracking-wider tracking-wide lg:leading-7 leading-5"
                style={{ color: "#fff" }}
              >
                20,000+ Trust Our Transformative Trek Experience and
                <br />
                Pioneering Safety Standards Each Year
              </p>
            </div>
            <Link to="/upcomingtrek" className="box-btn">
              <button
                className="button-main1 animated  btn-slide-16626053952fca8f53-0 bg-white w-[250px] px-8 py-4  mt-10 text-black font-semibold uppercase"
                tabIndex={0}
              >
                Upcoming Treks
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          {" "}
          <img
            src={Hero2}
            alt="technology"
            className="w-full lg:h-full h-[450px]"
            srcset="" />
          <div className="slide-content  content-right ">
            <div className="sub-title1 ">
            
            </div>
            <div className="title-slide">
              <h3
                className="animated lg:text-6xl text-4xl lg:my-10 my-5 font-semibold"
                style={{ color: "#fff" }}
              >
                Mountain Climbing
              </h3>
            </div>
            <div className="desc-slide">
              <p
                className="animated lg:tracking-wider tracking-wide lg:leading-7 leading-5"
                style={{ color: "#fff" }}
              >
                20,000+ Trust Our Transformative Trek Experience and
                <br />
                Pioneering Safety Standards Each Year
              </p>
            </div>
            <Link to="/upcomingtrek" className="box-btn">
              <button
                className="button-main1 animated  btn-slide-16626053952fca8f53-0 bg-white w-[250px] px-8 py-4  mt-10 text-black font-semibold uppercase"
                tabIndex={0}
              >
                Upcoming Treks
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
