import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { getParticularBookings } from "@/features/actions/order";

export const YourBookings = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { userData } = useSelector((state) => state.auth)
        const { bookingData } = useSelector((state) => state.order)

        console.log(bookingData)
        useEffect(() => {
                dispatch(getParticularBookings(userData?._id))
        }, [])

        return (
                <div className="mx-auto my-8 max-w-6xl px-2 md:mb-10 md:px-10">
                        <h2 className="text-3xl font-bold">Booking History</h2>
                        <div className="mt-3 text-sm">
                                Check the status of recent and old bookings
                        </div>
                        <div className="mt-5 border rounded-sm bg-gray-100">
                                {/* //item 1 */}
                                {Array.isArray(bookingData) &&
                                        bookingData.map((item, idx) =>
                                        (
                                                <div className="px-5 py-5 space-y-2">
                                                        <div key={idx} onClick={() => { navigate("/yourBookings/booking", { state: item }) }} className=" flex justify-between items-center overflow-hidden rounded-sm border border-gray-300 bg-white  hover:bg-opacity-5 hover:bg-black ">
                                                                <div className="">
                                                                        <div className="flex gap-3  p-3">
                                                                                <div><FaCalendarCheck className="text-xl" /></div>
                                                                                <div className="flex-grow"><div className="text-green-700 font-bold text-[13px] md:text-[14px]">Your Trip Booked</div>
                                                                                        <div className="text-[13px] md:text-[14px]">On {format(new Date(item.createdAt), 'EEE, d MMM yyyy')}</div></div>
                                                                           
                                                                        </div>

                                                                        <div className="p-3  text-[12px] md:text-[14px]">

                                                        
                                                                                        <div className="shadow-md rounded-lg flex gap-5 items-center p-2 ">
                                                                                                <img src={item?.tourId?.banners[0]?.url} className="rounded-lg w-24 h-20" />
                                                                                                <div>
                                                                                                        <div className="font-semibold">
                                                                                                                {item?.tourId?.title}
                                                                                                        </div>
                                                                                                        <div>
                                                                                                                Start Date: {item?.tourDate?.startDate}
                                                                                                        </div>
                                                                                                        <div>
                                                                                                                End Date: {item?.tourDate?.endDate}
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                             

                                                                            




                                                                        </div>

                                                                </div>
                                                                <div className=" mx-4"><FaArrowRight /></div>
                                                        </div>
                                                        
                                                </div>

                                        )

                                        )

                                }

                        </div>
               
                </div>

        );
};
