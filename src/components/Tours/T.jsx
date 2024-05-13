import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaPoundSign } from "react-icons/fa";
import axios from "axios";

export const T = () => {
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

  return (
    <>
      <div>
        <div className="w-[50%] border">
          <h1>PRICE (Select a currency to see package price.)</h1>
          <div className="grid grid-cols-4 ">
            <div
              className="px-5 py-2.5 w-5 border flex justify-center items-center cursor-pointer"
              onClick={() => handleCurrencyChange("INR")}
            >
              <div>
                <FaRupeeSign className="text-black" />
              </div>
            </div>
            <div
              className="px-5 py-2.5 w-5 border flex justify-center items-center cursor-pointer"
              onClick={() => handleCurrencyChange("USD")}
            >
              <div>
                <FaDollarSign className="text-black" />
              </div>
            </div>
            <div
              className="px-5 py-2.5 w-5 border flex justify-center items-center cursor-pointer"
              onClick={() => handleCurrencyChange("EUR")}
            >
              <div>
                <FaEuroSign className="text-black" />
              </div>
            </div>
            <div
              className="px-5 py-2.5 w-5 border flex justify-center items-center cursor-pointer"
              onClick={() => handleCurrencyChange("GBP")}
            >
              <div>
                <FaPoundSign className="text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <label>
            <h1>{amount}</h1>{" "}
          </label>
        </div>
      </div>
    </>
  );
};
