import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import WildLife1 from "../../assets/images/wildlife1.jpg";
import WildLife2 from "../../assets/images/wildlife2.jpg";
import WildLife3 from "../../assets/images/wildlife3.jpg";
import WildLife4 from "../../assets/images/wildlife4.jpg";
import WildLife5 from "../../assets/images/wildlife5.jpg";
import WildLife6 from "../../assets/images/wildlife6.jpg";
import Bike1 from "../../assets/images/bike1.jpg";
import Bike2 from "../../assets/images/bike2.jpg";
import Bike3 from "../../assets/images/bike3.jpg";
import Bike4 from "../../assets/images/bike4.jpg";
import Camp1 from "../../assets/images/camp1.jpg";
import Camp2 from "../../assets/images/camp2.jpg";
import Camp3 from "../../assets/images/camp3.jpg";

import Camp4 from "../../assets/images/camp4.jpg";
import CampFire1 from "../../assets/images/campfire1.jpg";
import CampFire2 from "../../assets/images/campfire2.jpg";

import { Bike } from "lucide-react";
const Riding = () => {
  return (
    <div className="pb-10 mb-5 md:mb-12">
      <div className="mx-auto container p-10">
        <div>
          <h1 className="text-xl text-center font-semibold md:text-6xl py-5">
            Our Activity
          </h1>
        </div>
        <div>
          <h1 className="text-xl text text-center font-semibold md:text-3xl py-5">
            Motorbike tours
          </h1>
        </div>
        <div>
          <p className="text text-center text-lg py-5">
            Motorbike tours offer thrilling adventures, allowing riders to
            explore diverse landscapes and cultures on two wheels. From scenic
            mountain routes to winding coastal roads, these tours provide an
            exhilarating way to experience the freedom of the open road. With
            guided or self-guided options available, motorbike tours cater to
            riders of all skill levels, offering unforgettable journeys and
            camaraderie along the way. Experience the thrill of exploration and
            the joy of discovery on a motorbike tour tailored to your
            adventurous spirit.
          </p>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={Bike3}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={Bike1}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={Bike3}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={Bike4}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mx-auto container">
        <div>
          <h1 className="text text-center text-xl font-semibold md:text-3xl py-5">
          Our camps
          </h1>
        </div>
        <div>
          <p className="text text-center text-lg py-5">
            Camping offers a serene escape into nature, providing a chance to
            unwind and disconnect from the hustle and bustle of daily life.
            Whether pitching a tent under the stars or cozying up in a camper
            van, camping allows for immersion in the great outdoors. From
            cooking over an open fire to stargazing by the campfire, each moment
            is filled with simplicity and wonder. Embrace the beauty of nature
            and create lasting memories with loved ones on a camping adventure.
          </p>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img src={Camp1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Camp2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Camp3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Camp4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Camp1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Camp2} />
              </div>
            </SwiperSlide>
          </Swiper>

          <div>
            <h1 className="text-xl text text-center font-semibold md:text-3xl py-10">
              Campfire cooking
            </h1>
          </div>
        </div>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={CampFire2}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={CampFire1}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={CampFire1}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border max-w-full md:max-w-8xl max-h-[80vh] rounded-lg overflow-hidden">
              <img
                src={CampFire1}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div>
          <h1 className="text-xl text text-center font-semibold md:text-3xl py-10">
          Mountain climbing expeditions
          </h1>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={WildLife1} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={WildLife2} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={WildLife3} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={WildLife4} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={WildLife5} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={WildLife6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Riding;
