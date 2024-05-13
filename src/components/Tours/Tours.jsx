import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaPoundSign } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import axios from "axios";

export const Tours = () => {
  const [currency, setCurrency] = useState("INR");
  const oldamount = 2000;
  const [amount, setAmount] = useState(oldamount);
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1, // Default to 1:1 for initial rendering
    EUR: 1,
    GBP: 1,
  });

  useEffect(() => {
    // Fetch exchange rates when component mounts
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      const response = await axios.get(
        "https://open.er-api.com/v6/latest/INR" // Fetching exchange rates against INR
      );
      const { rates } = response.data;
      setExchangeRates({
        USD: rates.USD,
        EUR: rates.EUR,
        GBP: rates.GBP,
      });
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const handleCurrencyChange = (currencyName) => {
    setCurrency(currencyName);

    switch (currencyName) {
      case "INR":
        setAmount(oldamount);
        break;
      case "USD":
        setAmount(oldamount / exchangeRates.USD);
        break;
      case "EUR":
        setAmount(oldamount / exchangeRates.EUR);
        break;
      case "GBP":
        setAmount(oldamount / exchangeRates.GBP);
        break;
      default:
        break;
    }
  };

  const [activeTab, setActiveTab] = useState("ITINERARY");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "ITINERARY":
        return (
          <div className="bg-gray-100 p-4">
            <div className="container max-w-full grid md:grid-cols-[10%_auto]">
              <div className=" ">
                <FaWalking size={100} />
              </div>

              <div className=" ">
                <h1 className="text-lg font-medium ">DARCHA PADUM TREK</h1>
                {Array(6)
                  .fill(true)
                  .map((item, index) => {
                    return (
                      <div className="border-b-2 p-10">
                        <h1 className="text font-semibold py-2">
                          Day {index + 1}
                        </h1>
                        <p className="font-semibold ">Arrival in Delhi</p>
                        <p>
                          Guests will be received at the airport followed by a
                          transfer to a hotel, where you will be staying
                          overnight.
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      case "MAP":
        return (
          <div className="p-4">
            <div className="bg-[#323232]">
              <div>
                <img src="http://www.intowildhimalaya.com/map_picture/darch-padumtrekroutemap.png" />
              </div>
            </div>
          </div>
        );
      case "INCLUSIONS_AND_EXCLUSIONS":
        return (
          <div className="bg-gray-100 p-4">
            <h1>INCLUSIONS AND EXCLUSIONS Content</h1>
            <div>Content specific to Inclusions and Exclusions tab</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="max-w-2xl  p-5">
          <h1>PRICE (Select a currency to see package price.)</h1>

          <div className="grid grid-cols-4 ">
            <div
              className="px-5 py-2.5 w-5 border flex justify-center items-center cursor-pointer rounded"
              onClick={() => handleCurrencyChange("INR")}
            >
              <div>
                <FaRupeeSign className="text-black" />
              </div>
            </div>
            <div
              className="px-5 py-2.5 w-5 border flex justify-center items-center cursor-pointer rounded"
              onClick={() => handleCurrencyChange("USD")}
            >
              <div>
                <FaDollarSign className="text-black" />
              </div>
            </div>
            <div
              className="px-5 py-2.5 w-5 flex justify-center items-center cursor-pointer rounded"
              onClick={() => handleCurrencyChange("EUR")}
            >
              <div>
                <FaEuroSign className="text-black" />
              </div>
            </div>
            <div
              className="px-5 py-2.5 w-5  flex justify-center items-center cursor-pointer rounded"
              onClick={() => handleCurrencyChange("GBP")}
            >
              <div>
                <FaPoundSign className="text-black" />
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <label>
              <h1>{amount}</h1>{" "}
            </label>
          </div>

          <div>
            <h1 className="text-lg font-medium py-5 ">OVERVIEW</h1>
            <p>All about the Darcha Padum Trek</p>
            <p>
              Darcha is the starting point of this trek – situated in the Lahoul
              Valley – where we will trek alongside the Zanskar Chhu. The
              highest point of this trek is passing over the Shingo La 5090m
              (16,699 ft.) before exploring the scenic routes through Zanskar.
              The trek terminates in Padum where we will then drive to Leh via
              Suru Valley that is shadowed by the high peaks of the Zanskar
              range. Once reached in Leh we will be able to visit the Shey,
              Thiskey and Hemis monasteries, before your flight departure to
              Delhi.
            </p>
          </div>

          <div className="pt-5">
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="p-5">
          <h1 className="text-md font-semibold py-5">TRIP INFORMATION</h1>

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr class="bg-gray-200 border border-b-white ">
                  <td class="px-6 py-4 text-[#F26925] ">Trip Duration</td>
                  <td class="px-6 py-4">21 Days</td>
                </tr>
                <tr class="bg-gray-200 border border-b-white ">
                  <td class="px-6 py-4 text-[#F26925]">Trip Grade</td>
                  <td class="px-6 py-4">Moderate</td>
                </tr>
                <tr class="bg-gray-200 border border-b-white  ">
                  <td class="px-6 py-4 text-[#F26925]">Max. Group Size</td>
                  <td class="px-6 py-4">12</td>
                </tr>
                <tr class="bg-gray-200 rounded  border border-b-white ">
                  <td class="px-6 py-4 text-[#F26925]">Highest Point</td>
                  <td class="px-6 py-4">4500 mts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" text-md font-semibold ">
            <h1 className="py-5">TRIP HIGHLIGHTS</h1>

            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr class="bg-gray-200 border border-b-white ">
                    <td class="px-6 py-4">End of June - Mid Sept.</td>
                  </tr>
                  <tr class="bg-gray-200 border border-b-white ">
                    <td class="px-6 py-4">Traverse Through Zanskar</td>
                  </tr>
                  <tr class="bg-gray-200 border border-b-white ">
                    <td class="px-6 py-4">Delightful Villages</td>
                  </tr>
                  <tr class="bg-gray-200 border border-b-white ">
                    <td class="px-6 py-4">
                      Stunning Landscape-A Photographer And Painterâ€™s Delight
                    </td>
                  </tr>
                  <tr class="bg-gray-200 border border-b-white ">
                    <td class="px-6 py-4">Monasteries: Thiksey-Shey-Hemis</td>
                  </tr>
                  <tr class="bg-gray-200 border border-b-white ">
                    <td class="px-6 py-4">Pass Several Passes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="sm:hidden">
          <select
            aria-label="Selected tab"
            className="block w-full"
            value={activeTab}
            onChange={(e) => handleTabClick(e.target.value)}
          >
            <option value="ITINERARY">ITINERARY</option>
            <option value="MAP">MAP</option>
            <option value="INCLUSIONS_AND_EXCLUSIONS">
              INCLUSIONS AND EXCLUSIONS
            </option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => handleTabClick("ITINERARY")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                  activeTab === "ITINERARY"
                    ? "text-gray-700 border-gray-300"
                    : "hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                ITINERARY
              </button>

              <button
                onClick={() => handleTabClick("MAP")}
                className={`whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                  activeTab === "MAP"
                    ? "text-gray-700 border-gray-300"
                    : "hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                MAP
              </button>

              <button
                onClick={() => handleTabClick("INCLUSIONS_AND_EXCLUSIONS")}
                className={`whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 ${
                  activeTab === "INCLUSIONS_AND_EXCLUSIONS"
                    ? "text-gray-700 border-gray-300"
                    : "hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                INCLUSIONS AND EXCLUSIONS
              </button>
            </nav>
          </div>
        </div>
        {renderTabContent()}
      </div>
    </>
  );
};
export default Tours;
