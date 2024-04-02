import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import AvailableDates from "./AvailableDates";
import { useNavigate } from "react-router-dom";

const UpcomingTreks = () => {
    const navigate = useNavigate();

    const handelchange = () => {
        navigate("/trek");
    };

    const treks = [
        {
            trekTitle: "Dhanaulti Trek",
            trekDesc:
                "It is a small town very close to Mussoorie in Uttarakhand. Quaint forest trails, beautiful parks and temples are the popular places to visit in Dhanaulti. Its location is convenient for tourists visiting Mussoorie, Kanatal or taking up Himalayan trekking trails to Kunjapur, Chandrabadani and Surkanda Devi Temple.",
            trekImg:
                "https://offloadmedia.feverup.com/secretlosangeles.com/wp-content/uploads/2022/01/24125341/WordPress-Banner-2023-12-24T125317.780-1024x683.jpg",
            months: [
                {
                    id: 1,
                    name: "March",
                    availableDates: [
                        {
                            date: "1 March to 7 April",
                            isAvailable: true,
                        },

                        {
                            date: "8 March to 14 March",
                            isAvailable: false,
                        },
                        {
                            date: "15 march to 22 march",
                            isAvailable: true,
                        },
                        {
                            date: "23 march to 30 march",
                            isAvailable: true,
                        },
                    ],
                },

                {
                    id: 2,
                    name: "April",
                    availableDates: [
                        {
                            date: "1 April to 7 April",
                            isAvailable: true,
                        },

                        {
                            date: "8 April to 14 April",
                            isAvailable: true,
                        },
                        {
                            date: "15 April to 22 April",
                            isAvailable: true,
                        },
                        {
                            date: "23 April to 30 April",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Nanital Trek",
            trekDesc:
                " Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi, Uttarakhand’s highest peak.",
            trekImg:
                "https://www.stayvista.com/blog/wp-content/uploads/2023/10/18514027699_5719e8d0e1_b.jpg",
            months: [
                {
                    id: 1,
                    name: "March",
                    availableDates: [
                        {
                            date: "1 march to 7 April",
                            isAvailable: false,
                        },

                        {
                            date: "8 April to 14 April",
                            isAvailable: true,
                        },
                        {
                            date: "15 march to 22 march",
                            isAvailable: true,
                        },
                        {
                            date: "23 march to 30 march",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "April",
                    availableDates: [
                        {
                            date: "1 April to 7 April",
                            isAvailable: true,
                        },

                        {
                            date: "8 April to 14 April",
                            isAvailable: true,
                        },
                        {
                            date: "15 April to 22 April",
                            isAvailable: true,
                        },
                        {
                            date: "23 April to 30 April",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Rishikesh Trek",
            trekDesc:
                " Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi, Uttarakhand’s highest peak.",
            trekImg:
                "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1530709216/Rishikesh_Blog_New232_1530707947.jpg",
            months: [
                {
                    id: 1,
                    name: "March",
                    availableDates: [
                        {
                            date: "1 march to 7 April",
                            isAvailable: true,
                        },

                        {
                            date: "8 March to 14 March",
                            isAvailable: false,
                        },
                        {
                            date: "15 March to 22 March",
                            isAvailable: false,
                        },
                        {
                            date: "23 March to 30 March",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "April",
                    availableDates: [
                        {
                            date: "1 April to 7 April",
                            isAvailable: true,
                        },

                        {
                            date: "8 April to 14 April",
                            isAvailable: true,
                        },
                        {
                            date: "15 April to 22 April",
                            isAvailable: true,
                        },
                        {
                            date: "23 April to 30 April",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
    ];

    const treks2 = [
        {
            trekTitle: "Chopta Tungnath Chandrashila.",
            trekDesc:
                "Chandrashila is the summit above Tungnath temple in India. It literally means Moon Rock. It is located at a height of about 3,690 metres above sea level. This peak provides views of the Himalayas, including Nandadevi, Trisul, Kedar Peak, Bandarpunch and Chaukhamba peaks",
            trekImg:
                "https://media1.thrillophilia.com/filestore/vnxo50hgkek8ya56awjw92ok50rm_1513415035_Deoriatal-Chandrashila-Peak-trek-At-the-summit-Indiahikes.jpg",
            months: [
                {
                    id: 1,
                    name: "May",
                    availableDates: [
                        {
                            date: "1 May to 7 May",
                            isAvailable: true,
                        },

                        {
                            date: "8 May to 14 May",
                            isAvailable: false,
                        },
                        {
                            date: "15 May to 22 May",
                            isAvailable: true,
                        },
                        {
                            date: "23 May to 30 May",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Jun",
                    availableDates: [
                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },

                        {
                            date: "8 Jun to 14 Jun",
                            isAvailable: true,
                        },
                        {
                            date: "15 Jun to 22 Jun",
                            isAvailable: true,
                        },
                        {
                            date: "23 Jun to 30 Jun",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Nanda Devi Base Camp Trek.",
            trekDesc:
                "Nanda Devi is the second-highest mountain in India, after Kangchenjunga, and the highest located entirely within the country. Nanda Devi is the 23rd-highest peak in the world. Nanda Devi was considered the highest mountain in the world before computations in 1808 proved Dhaulagiri to be higher.",
            trekImg:
                "https://peakvisor.com/photo/Nanda-Devi-National-Park-India-Waterfalls.jpg",
            months: [
                {
                    id: 1,
                    name: "May",
                    availableDates: [
                        {
                            date: "1 May to 7 May",
                            isAvailable: false,
                        },

                        {
                            date: "1 May to 7 May",
                            isAvailable: true,
                        },
                        {
                            date: "1 May to 7 May",
                            isAvailable: true,
                        },
                        {
                            date: "1 May to 7 May",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Jun",
                    availableDates: [
                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },

                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },
                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },
                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Gangotri Gomukh",
            trekDesc:
                "Gangotri is located in Uttarkashi District, Uttarakhand, India in a region bordering Tibet. This glacier, one of the primary sources of the Ganges, has a volume of over 27 cubic kilometers. The glacier is about 30 kilometres long and 2 to 4 km wide.",
            trekImg:
                "https://aquaterra.in/wp-content/uploads/2019/10/Alaknanda-River-Rafting-35.jpg",
            months: [
                {
                    id: 1,
                    name: "May",
                    availableDates: [
                        {
                            date: "1 May to 7 May",
                            isAvailable: true,
                        },

                        {
                            date: "1 May to 7 May",
                            isAvailable: false,
                        },
                        {
                            date: "1 May to 7 May",
                            isAvailable: false,
                        },
                        {
                            date: "1 May to 7 May",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Jun",
                    availableDates: [
                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },

                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },
                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },
                        {
                            date: "1 Jun to 7 Jun",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
    ];

    const treks3 = [
        {
            trekTitle: "Lonavala, Maharashtra",
            trekDesc:
                "Lonavala is a hill station surrounded by green valleys in western India near Mumbai. The Karla Caves and the Bhaja Caves are ancient Buddhist shrines carved out of the rock. They feature massive pillars and intricate relief sculptures. South of the Bhaja Caves sits the imposing Lohagad Fort, with its 4 gates. West of here is Bhushi Dam, where water overflows onto a set of steps during rainy season.",

            trekImg:
                "https://upload.wikimedia.org/wikipedia/commons/d/dd/Lonavalamh.jpg",
            months: [
                {
                    id: 1,
                    name: "July",
                    availableDates: [
                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },

                        {
                            date: "8 July to 14 July",
                            isAvailable: false,
                        },
                        {
                            date: "15 July to 22 July",
                            isAvailable: true,
                        },
                        {
                            date: "23 July to 30 July",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "August",
                    availableDates: [
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },

                        {
                            date: "8 August to 14 August",
                            isAvailable: true,
                        },
                        {
                            date: "15 August to 22 August",
                            isAvailable: true,
                        },
                        {
                            date: "23 August to 30 August",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Shillong, Meghalaya",
            trekDesc:
                "Shillong is a hill station in northeast India and capital of the state of Meghalaya. It’s known for the manicured gardens at Lady Hydari Park. Nearby, Ward’s Lake is surrounded by walking trails. North, the Don Bosco Centre for Indigenous Cultures features displays on the region’s native people. Waterfalls include the Elephant Falls to the southwest. East of here, forested Shillong Peak offers city views.",

            trekImg:
                "https://www.bruisedpassports.com/wp-content/uploads/2021/12/Bruised-PAssports-Meghalaya-Trip-Itinerary-Featured-13.jpg",
            months: [
                {
                    id: 1,
                    name: "July",
                    availableDates: [
                        {
                            date: "1 July to 7 July",
                            isAvailable: false,
                        },

                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },
                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },
                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "August",
                    availableDates: [
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },

                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Valley of Flowers",
            trekDesc:
                "Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli in the state of Uttarakhand and is known for its meadows of endemic alpine flowers and the variety of flora",
            trekImg:
                "https://assets.telegraphindia.com/telegraph/2022/Oct/1666862026_9.jpg",
            months: [
                {
                    id: 1,
                    name: "July",
                    availableDates: [
                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },

                        {
                            date: "1 July to 7 July",
                            isAvailable: false,
                        },
                        {
                            date: "1 July to 7 July",
                            isAvailable: false,
                        },
                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "August",
                    availableDates: [
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },

                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },
                        {
                            date: "1 August to 7 ",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
    ];

    const treks4 = [
        {
            trekTitle: "Shimla, Himachal Pradesh",
            trekDesc:
                "Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It’s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts",
            trekImg:
                "https://blog.brevistay.com/wp-content/uploads/2017/11/Shimla-Tourism.jpg",
            months: [
                {
                    id: 1,
                    name: "october",
                    availableDates: [
                        {
                            date: "1 october to 7 october",
                            isAvailable: true,
                        },

                        {
                            date: "8 october to 14 october",
                            isAvailable: false,
                        },
                        {
                            date: "15 october to 22 october",
                            isAvailable: true,
                        },
                        {
                            date: "23 october to 30 october",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "November",
                    availableDates: [
                        {
                            date: "1 November to 7 November",
                            isAvailable: true,
                        },

                        {
                            date: "8 November to 14 November",
                            isAvailable: true,
                        },
                        {
                            date: "15 November to 22 November",
                            isAvailable: true,
                        },
                        {
                            date: "23 November to 30 November",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 3,
                    name: "December",
                    availableDates: [
                        {
                            date: "1 December to 7 December",
                            isAvailable: true,
                        },

                        {
                            date: "8 December to 14 December",
                            isAvailable: true,
                        },
                        {
                            date: "15 December to 22 December",
                            isAvailable: true,
                        },
                        {
                            date: "23 December to 30 December",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Gulmarg",
            trekDesc:
                "Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, tourist destination, skiing destination, and a notified area committee in the Baramulla district in the Indian union territory of Jammu and Kashmir. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar.",

            trekImg:
                "https://feeds.abplive.com/onecms/images/uploaded-images/2021/12/08/42f66ea496eda15419abdcb1b93a2797_original.jpg?impolicy=abp_cdn&imwidth=720",
            months: [
                {
                    id: 1,
                    name: "July",
                    availableDates: [
                        {
                            date: "1 october  to 7 october ",
                            isAvailable: false,
                        },

                        {
                            date: "1 october  to 7 october ",
                            isAvailable: true,
                        },
                        {
                            date: "1 october  to 7 october ",
                            isAvailable: true,
                        },
                        {
                            date: "1 october  to 7 october ",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "November",
                    availableDates: [
                        {
                            date: "1 November to 7 November",
                            isAvailable: true,
                        },

                        {
                            date: "1 November to 7 November",
                            isAvailable: true,
                        },
                        {
                            date: "1 November to 7 November",
                            isAvailable: true,
                        },
                        {
                            date: "1 November to 7 November",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 3,
                    name: "December",
                    availableDates: [
                        {
                            date: "1 December to 7 December",
                            isAvailable: true,
                        },

                        {
                            date: "1 December to 7 December",
                            isAvailable: true,
                        },
                        {
                            date: "1 December to 7 December",
                            isAvailable: true,
                        },
                        {
                            date: "1 December to 7 December",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
        {
            trekTitle: "Valley of Flowers",
            trekDesc:
                "Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli in the state of Uttarakhand and is known for its meadows of endemic alpine flowers and the variety of flora",
            trekImg:
                "https://assets.telegraphindia.com/telegraph/2022/Oct/1666862026_9.jpg",
            months: [
                {
                    id: 1,
                    name: "July",
                    availableDates: [
                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },

                        {
                            date: "1 July to 7 July",
                            isAvailable: false,
                        },
                        {
                            date: "1 July to 7 July",
                            isAvailable: false,
                        },
                        {
                            date: "1 July to 7 July",
                            isAvailable: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "August",
                    availableDates: [
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },

                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },
                        {
                            date: "1 August to 7 August",
                            isAvailable: true,
                        },
                        {
                            date: "1 August to 7 ",
                            isAvailable: true,
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <>
            <div className="container">
                <div className="text-center text-xl md:text-5xl font-bold py-5 ">
                    <h1>Top treks in 2024</h1>
                </div>

                <div className=" grid md:grid-cols-2 place-items-center py-5 border-t-2 border-yellow-400">
                    <div className="">
                        <h1 className="text-center text-xl md:text-5xl font-medium ">
                            Best Treks in spring
                        </h1>
                    </div>
                    <div className=" text-lg font-medium">
                        <p>
                            {`Spring is when the mountains come alive. Not only do blooming
              rhododendrons blaze up the forests with bursts of colours, but
              it's also a time to witness a good mix of snow greenery. Most of
              our treks get heavy bookings this time of the year. If you want to
              avoid the crowds, choose the Ranthan Kharak trek in Kumaon. The
              rhododendrons are dense, minus the crowds.`}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
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
                    {treks.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className="border-2 border-[#d1cece]">
                                <div className="mx-auto max-w-5xl px-5 py-12 ">
                                    <div className="mx-auto flex flex-col items-center w-full  ">
                                        <img
                                            alt="image"
                                            className="h-64 w-full rounded object-cover"
                                            src={item?.trekImg}
                                        />
                                        <div className="mt-6 w-full lg:mt-0">
                                            <h1 className="my-4 text-3xl font-semibold text-black">
                                                {item?.trekTitle}
                                            </h1>
                                            <div className="my-4 flex items-center"></div>
                                            <p className="leading-relaxed line-clamp-4">
                                                {item?.trekDesc}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={handelchange}
                                            key={i}
                                            class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            View Details
                                        </button>

                                        <div className=" text-lg py-[1rem] mt-1 border-b-2 border-b-gray-600 font-medium text-gray-900">
                                            Available Dates
                                        </div>
                                        <AvailableDates months={item.months} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="container">
                <div className=" grid md:grid-cols-2 place-items-center py-5 mt-10 border-t-2 border-yellow-400">
                    <div className="">
                        <h1 className="text-center text-xl md:text-5xl font-medium ">
                            Best Treks in summer
                        </h1>
                    </div>
                    <div className=" text-lg font-medium">
                        <p>
                            {`Spring is when the mountains come alive. Not only do blooming
              rhododendrons blaze up the forests with bursts of colours, but
              it's also a time to witness a good mix of snow greenery. Most of
              our treks get heavy bookings this time of the year. If you want to
              avoid the crowds, choose the Ranthan Kharak trek in Kumaon. The
              rhododendrons are dense, minus the crowds.
              `}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
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
                    {treks2.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className="border-2 border-[#d1cece]">
                                <div className="mx-auto max-w-5xl px-5 py-12 ">
                                    <div className="mx-auto flex flex-col items-center w-full">
                                        <img
                                            alt="image"
                                            className="h-64 w-full rounded object-cover"
                                            src={item?.trekImg}
                                        />
                                        <div className="mt-6 w-full lg:mt-0">
                                            <h1 className="my-4 text-3xl font-semibold text-black">
                                                {item?.trekTitle}
                                            </h1>
                                            <div className="my-4 flex items-center"></div>
                                            <p className="leading-relaxed line-clamp-4">
                                                {item?.trekDesc}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={handelchange}
                                            key={i}
                                            class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            View Details
                                        </button>

                                        <div className=" text-lg py-[1rem] border-b-2 border-b-gray-600 font-medium text-gray-900">
                                            Available Dates
                                        </div>
                                        <AvailableDates months={item.months} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="container">
                <div className=" grid md:grid-cols-2 place-items-center py-5 border-t-2 mt-10 border-yellow-400">
                    <div className="">
                        <h1 className="text-center text-xl md:text-5xl font-medium ">
                            Best Treks in rainy season
                        </h1>
                    </div>
                    <div className=" text-lg font-medium">
                        <p>
                            {`Spring is when the mountains come alive. Not only do blooming
              rhododendrons blaze up the forests with bursts of colours, but
              it's also a time to witness a good mix of snow greenery. Most of
              our treks get heavy bookings this time of the year. If you want to
              avoid the crowds, choose the Ranthan Kharak trek in Kumaon. The
              rhododendrons are dense, minus the crowds.
              `}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
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
                    {treks3.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className="border-2 border-[#d1cece]">
                                <div className="mx-auto max-w-5xl px-5 py-12 ">
                                    <div className="mx-auto flex flex-col items-center w-full">
                                        <img
                                            alt="image"
                                            className="h-64 w-full rounded object-cover"
                                            src={item?.trekImg}
                                        />
                                        <div className="mt-6 w-full lg:mt-0">
                                            <h1 className="my-4 text-3xl font-semibold text-black">
                                                {item?.trekTitle}
                                            </h1>
                                            <div className="my-4 flex items-center"></div>
                                            <p className="leading-relaxed line-clamp-4">
                                                {item?.trekDesc}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={handelchange}
                                            key={i}
                                            class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            View Details
                                        </button>

                                        <div className=" text-lg py-[1rem] border-b-2 border-b-gray-600 font-medium text-gray-900">
                                            Available Dates
                                        </div>
                                        <AvailableDates months={item.months} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="container">
                <div className=" grid md:grid-cols-2 place-items-center py-5 border-t-2 mt-10 border-yellow-400">
                    <div className="">
                        <h1 className="text-center text-xl md:text-5xl font-medium ">
                            Best Treks in winter season
                        </h1>
                    </div>
                    <div className=" text-lg font-medium">
                        <p>
                            {`Spring is when the mountains come alive. Not only do blooming
              rhododendrons blaze up the forests with bursts of colours, but
              it's also a time to witness a good mix of snow greenery. Most of
              our treks get heavy bookings this time of the year. If you want to
              avoid the crowds, choose the Ranthan Kharak trek in Kumaon. The
              rhododendrons are dense, minus the crowds.
              `}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
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
                    {treks4.map((item, i) => {
                        return (
                            <SwiperSlide className="border-2 border-[#d1cece]" key={i} >
                                <div className="mx-auto max-w-5xl px-5 py-12">
                                    <div className="mx-auto flex flex-col items-center w-full ">
                                        <img
                                            alt="image"
                                            className="h-64 w-full rounded object-cover"
                                            src={item?.trekImg}
                                        />
                                        <div className="mt-6 w-full lg:mt-0">
                                            <h1 className="my-4 text-3xl font-semibold text-black">
                                                {item?.trekTitle}
                                            </h1>
                                            <div className="my-4 flex items-center"></div>
                                            <p className="leading-relaxed line-clamp-4">
                                                {item?.trekDesc}
                                            </p>
                                        </div>
                                    </div>

                                    <div>

                                        <button
                                            type="button"
                                            onClick={handelchange}
                                            key={i}
                                            class=" my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >

                                            View Details
                                        </button>

                                        <div className=" text-lg py-[1rem] border-b-2 border-b-gray-600 font-medium text-gray-900">
                                            Available Dates
                                        </div>
                                        <AvailableDates months={item.months} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};




export default UpcomingTreks