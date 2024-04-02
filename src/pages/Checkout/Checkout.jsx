import React, { useState } from "react";

const Checkout = () => {
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

  // Function to calculate total bill
  const calculateTotalBill = () => {
    const totalPrice = trek.price * (adults + children);
    const gst = totalPrice * 0.18; // Assuming 18% GST
    return totalPrice + gst;
  };

  return (
    <div className="container mx-auto mt-8 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto bg-white shadow-md p-8 rounded-md">
        <h1 className="text-4xl lg:text-3xl font-bold mb-6">
          Checkout and confirm
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-8">
          <div className="w-full lg:w-2/3 lg:pr-8">
            <img
              src="https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fff9696e9-eb82-4c82-a183-12e1c37e9bf1_Deoriatal%2BChandrashila%2Btrek_Gauri%2BKhamkar_Rhododendron%2BTrail%2Bto%2BRohini%2Bbugyal_%2BDSC_0091.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75"
              alt="img"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
              {trek.name}
            </h2>
            <p className="text-gray-600 mb-4">${trek.price} per person</p>
            <div className="mb-4">
              <p className="text-gray-800 mb-1 lg:text-lg">Number of People:</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <label className="block text-lg lg:text-xl font-medium">
                    Adults:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="block w-20 py-1 px-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-lg lg:text-xl font-medium">
                    Children:
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="block w-20 py-1 px-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 mb-1 lg:text-lg">Dates:</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="text-lg lg:text-xl font-medium">Check-in:</p>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="block w-full py-1 px-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <p className="text-lg lg:text-xl font-medium">Check-out:</p>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="block w-full py-1 px-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 mb-1 lg:text-lg">Total Bill:</p>
              <p className="text-xl lg:text-2xl font-semibold">
                ${calculateTotalBill().toFixed(2)} (incl. 18% GST)
              </p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 lg:text-lg">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
