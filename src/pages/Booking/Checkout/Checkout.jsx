import React, { useState } from "react";
import StepForm from "../StepForm/StepForm";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const {state:data} = useLocation()
  const {trekkersData} = useSelector((state)=>state.booking)
  const {authData} = useSelector((state)=>state.auth)

  // Function to calculate total bill with GST
  const calculateTotalBill = () => {
    const totalPrice = data.price * (trekkersData?.length+1) || 1 ;
    const gst = totalPrice * 0.18; // 18% GST calculation
    return {
      totalPrice,
      gst,
      totalBill: totalPrice + gst,
    };
  };

  const { totalPrice, gst, totalBill } = calculateTotalBill();

  return (
    <>
      {/* <StepForm className="p-2" /> */}
      <StepForm activeStep={3} data={data} />
      <div className="container mx-auto mt-8 px-4 lg:px-0">
        <div className="max-w-6xl mx-auto bg-white shadow-md p-8 rounded-md">
          <h1 className="text-4xl lg:text-3xl font-bold mb-6">
            Checkout and Confirm
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-x-8">
            <div className="w-full lg:w-1/2">
              <img
                src={data?.banners[0]}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold mt-4 lg:mt-0 mb-2">
                {data?.title}
              </h2>

             { trekkersData.length < 1 ? <div>
                <p className="text-gray-800 lg:text-lg">Trekker Name :  {authData.firstName} </p>
   
              </div>
              :
              <div>
                <p className="text-gray-800 lg:text-lg">Total Trekkers : <span className="text-lg lg:text-xl font-semibold"> {trekkersData?.length}</span> ( {trekkersData.map((item)=> item.firstName ).join(" ,")} )</p>
   
              </div>}

              <div>
                <p className="text-gray-800 lg:text-lg">Dates :</p>
                <p className="text-lg lg:text-xl font-medium">
                 <span className="text-lg"> Check-in :</span> {data?.bookedDates?.startDate}
                </p>
                <p className="text-lg lg:text-xl font-medium">
                <span className="text-lg">Check-out :</span>   {data?.bookedDates?.endDate}
                </p>
              </div>

              <div>
                <p className="text-gray-800 lg:text-lg">Price Breakdown :</p>
                <p className="text-lg lg:text-xl"><span className="text-lg">Price (excl. GST):</span>  ₹ {totalPrice}</p>
                <p className="text-lg lg:text-xl"><span className="text-lg"> GST (18%):</span>  ₹ {gst.toFixed(2)}</p>
              </div>

              <div>
                <p className="text-gray-800 lg:text-lg">Total Bill:</p>
                <p className="text-xl lg:text-2xl font-semibold">
                  ₹{totalBill.toFixed(2)} <span className="text-lg font-normal">(incl. 18% GST)</span>
                </p>
              </div>

              <button className="bg-black text-white py-2 px-6 rounded-md lg:text-lg">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
