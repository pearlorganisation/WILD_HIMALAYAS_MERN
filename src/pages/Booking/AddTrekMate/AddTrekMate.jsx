import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {  useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import StepForm from "../StepForm/StepForm";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import { toast } from "sonner";
import { GrGroup } from "react-icons/gr";
const AdddTrekMate = () => {
  const {state:data} = useLocation()

  const { isLoading} = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const [treker, addtrekerData] = useState([]);

  const togglePasswordVisibility = () => {
    setPasswordHidden(!isPasswordHidden);

    const passwordInput = document.getElementById("hs-toggle-password");
    if (passwordInput) {
      passwordInput.type = isPasswordHidden ? "text" : "password";
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addtrekerData((prev) => {
      const isExist = prev.some((item) => {
        return item.email === data.email;
      });
      console.log(isExist);
      if (isExist) {
        // alert("Email already exist");
        console.log("hjhjhjh");
        toast.error("Use different email address", { position: "top-center" });
        return prev;
      } else {
        return [...prev, data];
      }
    });
  };

  console.log(treker, "data new");

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
    const newtreker = treker.filter((item, filterid) => {
      return id != filterid;
    });
    addtrekerData(newtreker);
  };
  const handelNavigate = () => {
    navigate("/checkout",{state:data});
  };
  return (
    <>
      {/* <StepForm className="p-2" /> */}
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
                  <label className="block text-lg font-medium text-gray-700">
                    Password
                  </label>
                  <div className="flex items-center justify-end relative">
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      id="hs-toggle-password"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                    />
                    <button
                      className="text-gray-400 absolute right-2"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordHidden ? (
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && (
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
                <div className="mb-6">
                  <label
                    htmlFor="city"
                    className="block text-lg font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    id="city"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  />
                  {errors.city && (
                    <span className="text-red-600 text-sm font-medium">
                      This field is required
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
            {treker.map((el, id) => {
              return (
                <>
                  <div className="flex justify-between items-center border rounded-lg p-5 my-2 bg-gray-100">
                    <div className="py-2">
                      <h3>{el.firstName}</h3>
                    </div>

                    <div>
                      <MdPersonRemoveAlt1 onClick={() => removeItem(id)} />
                    </div>
                  </div>
                </>
              );
            })}

            <div className="text-center py-2">
              {treker.length >= 1 ? (
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

export default AdddTrekMate;
