import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {  useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import StepForm from "../StepForm/StepForm";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import { toast } from "sonner";
import { GrGroup } from "react-icons/gr";
import { storeTrekkers} from "@/features/slices/booking";

const AddTrekMate = () => {

  const {state:data} = useLocation()
  const dispatch= useDispatch()
  const {trekkersData} = useSelector((state)=>state.booking)
  const { isLoading} = useSelector((state) => state.auth);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

      const isExist = Array.isArray(trekkersData) && trekkersData.some((item) => {
        return item.email === data.email;
      })

      if (isExist) {
        toast.error("Use different email address", { position: "top-center" });
      } else {
        reset()
        dispatch(storeTrekkers([...trekkersData,data]))
      }

  };

  // Function to generate height options in cm
  const generateHeightOptions = () => {
    const options = [];
    for (let cm = 140; cm <= 190; cm++) {
      options.push(
        <option key={cm} value={cm}>
          {cm} cm
        </option>
      );
    }
    return options;
  };
  const removeItem = (id) => {
    const newtreker = trekkersData.filter((item, filterid) => {
      return id != filterid;
    });
    dispatch(storeTrekkers(newtreker))
  };
  const handelNavigate = () => {
    navigate("/checkout",{state:data});
  };
  return (
    <>
      <StepForm activeStep={2} data={data} />

      <div className="container mx-auto px-8 py-8 max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="max-w-4xl mx-auto border shadow-sm rounded-lg overflow-hidden bg-white">
            <div className="text-center py-4 bg-gray-100 rounded-t-lg">
              <h1 className="text-xl  text-gray-700 text-center">
                Your details have already been added.
              </h1>
              <h1 className="font-bold text-xl">
                Add your TrekMate details (if you have TrekMate){" "}
              </h1>
            </div>
            <div className="px-8 py-4">
              <form
                action="#"
                className="md:grid md:grid-cols-2 gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="block text-lg font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", { required: true })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  />
                  {errors.lastName && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
                    </span>
                  )}
                </div>
        
                <div className="mb-6">
                  <label
                    htmlFor="gender"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    {...register("gender", { required: true })}
                    id="gender"
                    placeholder="Choose Gender"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="dob"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    {...register("dob", { required: true })}
                    type="date"
                    id="dob"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  />
                  {errors.dob && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="height"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Height
                  </label>
                  <select
                    {...register("height", { required: true })}
                    id="height"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  >
                    {generateHeightOptions()}
                  </select>
                  {errors.height && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="weight"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Weight (in Kg)
                  </label>
                  <input
                    {...register("weight", { required: true })}
                    type="number"
                    id="weight"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  />
                  {errors.weight && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("number", {
                      required: "This field is required",
                      minLength: {
                        value: 10,
                        message: "Phone number must be exactly 10 digits",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                    type="text"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  />
                  {errors.number && (
                    <span className="text-red-600 text-sm font-medium">
                      {errors.number.message}
                    </span>
                  )}
                </div>
       
                <div className="col-span-2 mb-6">
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <div className="w-full">
                        <button
                          type="submit"
                          className="w-full py-3 px-6 bg-black text-white font-medium rounded-md"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-full h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-black text-white font-medium rounded-md"
                    >
                      Add
                    </button>
                  )}
                </div>
              </form>
              <div className="text-center ">
                <button
                  className="text-white px-2 py-3 bg-gray-500 rounded"
                  onClick={handelNavigate}
                >
                  Continue without Trekmate{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="flex justify-center  bg-[#F3F4F6] p-5 items-center gap-2">
              <div>
                <h1 className="text-xl ">Your TrekMates</h1>
              </div>

              <div>
                <GrGroup />
              </div>
            </div>
            {Array.isArray(trekkersData) && trekkersData.map((el, idx) => {
              return (
                <>
                  <div className="flex gap-4 items-center border rounded-lg p-5 my-2 bg-gray-100">
                    <div className="py-2 flex justify-between w-full capitalize">
                 
                      <h3>{el.firstName} {el.lastName}</h3>
                      <h3>{el.gender}</h3>
           
                    </div>

                    <div>
                      <MdPersonRemoveAlt1 onClick={() => removeItem(idx)} />
                    </div>
                  </div>
                </>
              );
            })}

            <div className="text-center py-2">
              {trekkersData.length >= 1 ? (
                <button
                  className="text-white px-5 py-3 bg-gray-800 rounded"
                  onClick={handelNavigate}
                >
                  Next{" "}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTrekMate;
