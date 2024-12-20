import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AvailableDates from "@/components/Tours/AvailableDates";
import { specificRegionTours, specificTour } from "@/features/actions/toursAction";

const UpcomingTreks = () => {
  const { isLoading, activityTourData,regionTourData } = useSelector((state) => state.tour);
const {region} = useParams()
const {state:id} = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
console.log(location)
const [data,setData] = useState([])

  useEffect(() => {
    if(region){
dispatch(specificRegionTours({id:id}))
    }
    else {
       dispatch(specificTour({id:"67286919001fb65c89b5dfe7"}));
  }
  }, [region]);

  useEffect(()=>{
    setData(()=>region ? regionTourData: activityTourData)
  },[regionTourData,activityTourData])

console.log(data)
  return (
    <>
      <div>
          <div className="text-center text-xl md:text-5xl font-bold py-5 ">
            <h1>{ region ? `${region} Tours` : "Our Treks"}</h1>
          </div>


        <div className="mb-10 ">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
            breakpoints={{
              // When window width is <= 768px (Mobile)
              540: {
                slidesPerView: 1,
              },
              // When window width is <= 1024px (Tablet)
              1024: {
                slidesPerView: 2,
              },
              // Default breakpoints (Desktop)
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {Array.isArray(data) && data?.map((item, i) => {
              return (
                <SwiperSlide
                  key={i+1}
                  className="px-2 sm:px-5"
                >
                  <div className="border rounded-lg max-w-6xl">
                    <div className="mx-auto flex flex-col items-center w-full  ">
                      <img
                        alt="image"
                        className="h-64 w-full rounded-t-md object-cover"
                        src={Array.isArray(item?.banners) && item?.banners[0]?.url}
                      />

                      <div className="mt-6 px-2 w-full lg:mt-0">
                        <h1 className="mt-2 line-clamp-2 text-2xl font-medium text-black">
                          {item?.title}
                        </h1>
                        <div className=" flex items-center"></div>

                        <p className={`${ item?.title?.length > 30 ? 'line-clamp-1 ' : 'line-clamp-2 mb-2'} `}>
                         {item?.description}
                        </p>
                      </div>
                    </div>

               
                     { region ?  <div className="flex justify-between items-center">
                      <div
                        type="button"
                        onClick={()=>navigate("/tour",{state:item})}
                        key={i}
                        class="px-2 text-blue-700 font-semibold"
                      >
                        {item?.activity?.title}
                      </div>
                      <button
                        type="button"
                        onClick={()=>navigate("/tour",{state:item})}
                        key={i}
                        class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        View Details
                      </button>

                  
                    </div>: 
                    <div className="flex justify-end">

                      <button
                        type="button"
                        onClick={()=>navigate("/tour",{state:item})}
                        key={i}
                        class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        View Details
                      </button>
                      </div>}

                      <div className="px-2 pb-1 text-blue-700   font-medium ">
                        Available Dates
                      </div>
                      <div className="overflow-auto">
                        
                          <AvailableDates
                            availableDates={item.availableDates}
                            data={item}
                          />

                      </div>
                  
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default UpcomingTreks;
