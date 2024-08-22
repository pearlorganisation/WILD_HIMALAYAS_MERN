import React, { useState } from "react";
import StepForm from "../StepForm/StepForm";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const {state:data} = useLocation()
  // Sample trek data
  const trek = {
    name: "Shimla",
    image: "shimla.jpg", // Replace with actual image URL
    price: 1000,
  };

  // State for number of adults and children
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  // State for selected dates
  const [startDate, setStartDate] = useState("2024-02-14");
  const [endDate, setEndDate] = useState("2024-02-16");

  // Function to calculate total bill with GST
  const calculateTotalBill = () => {
    const totalPrice = trek.price * (adults + children);
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
                src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fff9696e9-eb82-4c82-a183-12e1c37e9bf1_Deoriatal%2BChandrashila%2Btrek_Gauri%2BKhamkar_Rhododendron%2BTrail%2Bto%2BRohini%2Bbugyal_%2BDSC_0091.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
                alt="Trek Image"
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
                Deoriatal Chandrashila TREK
              </h2>

              <div>
                <p className="text-gray-800 lg:text-lg">Total Trekkers:</p>
                <p className="text-xl lg:text-2xl font-semibold">
                  {adults + children} Trekkers
                </p>
              </div>

              <div>
                <p className="text-gray-800 lg:text-lg">Dates:</p>
                <p className="text-lg lg:text-xl font-medium">
                  Check-in: {startDate}
                </p>
                <p className="text-lg lg:text-xl font-medium">
                  Check-out: {endDate}
                </p>
              </div>

              <div>
                <p className="text-gray-800 lg:text-lg">Price Breakdown:</p>
                <p className="text-lg">Price (Excl. GST): ₹{totalPrice}</p>
                <p className="text-lg">GST (18%): ₹{gst.toFixed(2)}</p>
              </div>

              <div>
                <p className="text-gray-800 lg:text-lg">Total Bill:</p>
                <p className="text-xl lg:text-2xl font-semibold">
                  ₹{totalBill.toFixed(2)} (incl. 18% GST)
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
