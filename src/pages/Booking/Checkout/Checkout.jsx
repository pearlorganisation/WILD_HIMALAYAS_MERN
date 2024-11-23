import React, { useState } from "react";
import StepForm from "../StepForm/StepForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";

const Checkout = () => {
  const {state:data} = useLocation()
  const {trekkersData} = useSelector((state)=>state.booking)
  const {userData} = useSelector((state)=>state.auth)
  const [isLoading,setIsLoading] = useState(false)
  const [order, setOrder] = useState("");
  const navigate = useNavigate()

  const memberNames = [userData,...trekkersData]


  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const {
        data: { bookingId, order },
      } = await axios.post(
        import.meta.env.VITE_APP_WORKING_ENVIRONMENT === "development"
          ? `${
              import.meta.env.VITE__APP_API_BASE_URL_DEVELOPMENT
            }/booking`
          : `${
              import.meta.env.VITE_APP_API_BASE_URL_MAIN_PRODUCTION
            }/booking`,
        {
          amount:(data?.price)*(trekkersData?.length +1),
          tourDate:{
            startDate: data?.bookedDates?.startDate,
            endDate: data?.bookedDates?.endDate
          },
          orderById:userData?._id,
          email:userData?.email,
          memberNames,
          tourId:data?._id
        }
      );
      setOrder(order?.id);
      setIsLoading(false);


      const options = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "Into Wild Himalaya",
        description: "Trekking Website",
        image: "./apple-touch-icon.png",
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response };
          try {
            const validateResponse = await axios.post(
              import.meta.env.VITE_APP_WORKING_ENVIRONMENT ===
                "development"
                ? `${
                    import.meta.env.VITE__APP_API_BASE_URL_DEVELOPMENT
                  }/booking/verifyOrder/${bookingId}`
                : `${
                    import.meta.env.VITE_APP_API_BASE_URL_MAIN_PRODUCTION
                  }/booking/verifyOrder/${bookingId}`,
              {...body,  
                tourDate:{
                startDate: data?.bookedDates?.startDate,
                endDate: data?.bookedDates?.endDate},
                tourId:data?._id,
                memberNames:memberNames?.length

              }
            );
            var jsonResponse = validateResponse?.data;
            if (jsonResponse.status) {
              toast.success("Your booking is successful", { position: "top-center" });
            }
            navigate("/")
          } catch (error) {
            console.error("Error verifying payment:", error);
            toast.error("Error verifying payment", { position: "top-center" });
          }
        },
        //  callback_url: `http://localhost:8000/api/v1/booking/verifyOrder/${bookingId}`,

        modal: {
          ondismiss: function () {
            alert("Payment window closed without completing the payment.");
          },
        },

        theme: {
          color: "#121212",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Error creating or processing payment:", error);
      toast.error("Error creating or processing payment", {
        position: "top-center",
      });
      setIsLoading(false);
    }
  };

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
                src={data?.banners[0]?.url}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold mt-4 lg:mt-0 mb-2">
                {data?.title}
              </h2>

             { trekkersData.length < 1 ? <div>
                <p className="text-gray-800 lg:text-lg ">Trekker Name :  <span className="font-semibold">{userData.firstName} </span></p>
   
              </div>
              :
              <div>
                <p className="text-gray-800 lg:text-lg">Total Trekkers : <span className="text-lg lg:text-xl font-semibold"> {trekkersData?.length +1}</span> ( You, {trekkersData.map((item)=> item.firstName).join(", ")} )</p>
   
              </div>}

              <div>
                <p className="text-gray-800 lg:text-lg">Dates :</p>
                <p className="text-lg  font-medium">
                 Check-in :  <span className="text-lg font-semibold">{data?.bookedDates?.startDate}</span>
                </p>
                <p className="text-lg  font-medium">
                 Check-in :  <span className="text-lg font-semibold">{data?.bookedDates?.endDate}</span>
                </p>
              
              </div>

              <div>
                <p className="text-gray-800 lg:text-lg">Price Breakdown :</p>
                <p className="text-lg ">Price (incl. GST): ₹ <span className="text-xl font-semibold">{data?.price}</span> <span className="text-gray-600 text-base">x {trekkersData?.length +1}</span></p>
              </div>

              <div>
                <p className="text-gray-800 lg:text-lg">Total Bill:</p>
                <p className="text-xl lg:text-2xl font-semibold">
                  ₹ {(data?.price)*(trekkersData?.length +1)}
                </p>
              </div>

              <button onClick={handlePayment} className="bg-black text-white py-2 px-6 rounded-md lg:text-lg">
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
