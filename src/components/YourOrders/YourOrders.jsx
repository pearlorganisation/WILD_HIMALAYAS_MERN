import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbCheckbox } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { getParticularOrders } from "@/features/actions/order";


export const YourOrders = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { userData } = useSelector((state) => state.auth)
        const { orderData } = useSelector((state) => state.order)

        useEffect(() => {
                dispatch(getParticularOrders(userData?._id))
        }, [])

        return (
                <div className="mx-auto my-8 max-w-6xl px-2 md:mb-10 md:px-10">
                        <h2 className="text-3xl font-bold">Order History</h2>
                        <div className="mt-3 text-sm">
                                Check the status of recent and old orders
                        </div>
                        <div className="mt-5 border rounded-sm bg-gray-100">
                                {/* //item 1 */}
                                {Array.isArray(orderData) &&
                                        orderData.map((item, idx) =>
                                        (
                                                <div className="px-5 py-5 space-y-2">
                                                        <div key={idx} onClick={() => { navigate("/yourOrders/order", { state: item }) }} className=" flex justify-between items-center overflow-hidden rounded-sm border border-gray-300 bg-white  hover:bg-opacity-5 hover:bg-black ">
                                                                <div className="">
                                                                        <div className="flex gap-3  p-3">
                                                                                <div><TbTruckDelivery className="text-xl" /></div>
                                                                                <div className="flex-grow"><div className="text-yellow-600 font-bold text-[13px] md:text-[14px]">Order Placed</div>
                                                                                        <div className="text-[13px] md:text-[14px]">On {format(new Date(item.createdAt), 'EEE, d MMM yyyy')}</div></div>
                                                                                <div className="md:hidden "><FaArrowRight className="" /></div>
                                                                        </div>

                                                                        <div className="p-3 flex flex-wrap gap-7 text-[12px] md:text-[14px]">

                                                                                {Array.isArray(item?.product) && item?.product?.map((product, idy) => (
                                                                                        <div key={idy} className="shadow-md rounded-lg flex gap-5 items-center p-2 w-72">
                                                                                                <img src={product?.productId?.banners[0]} className="rounded-lg w-24 h-20" />
                                                                                                <div>
                                                                                                        <div>
                                                                                                                {product?.productId?.productName}
                                                                                                        </div>
                                                                                                        <div>
                                                                                                                Size : {product?.size}
                                                                                                        </div>
                                                                                                        <div className="text-green-800 ">
                                                                                                                Price : ₹ {product?.price}
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                ))

                                                                                }




                                                                        </div>

                                                                </div>
                                                                <div className="sm:hidden md:block mx-4"><FaArrowRight /></div>
                                                        </div>
                                           
                                                </div>

                                        )

                                        )

                                }

                        </div>
            
                </div>

        );
};
