
import { signUp } from "@/features/actions/authActions";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
    const dispatch = useDispatch()
    const { isLoading, authData } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const [isPasswordHidden,setPasswordHidden]= useState(true);
    const togglePasswordVisibility = ()=>{
        setPasswordHidden(!isPasswordHidden)
        const passwordInput= document.getElementById('hs-toggle-password')
        if(passwordInput){
            passwordInput.type = isPasswordHidden ? "text" : "password"
        }
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log("data::", data)
        dispatch(signUp(data))
    }
    // Function to generate height options
    const generateHeightOptions = () => {
        const options = [];
        for (let feet = 3; feet <= 7; feet++) {
            for (let inches = 0; inches <= 11; inches++) {
                options.push(
                    <option key={`${feet}-${inches}`} value={`${feet}-${inches}`}>
                        {`${feet} ' ${inches}''`}
                    </option>
                );
            }
        }
        return options;
    };
    


    return (
        <div className="container mx-auto px-8 py-8 max-w-4xl">
            <div className="max-w-2xl mx-auto shadow-sm rounded-lg overflow-hidden bg-white">
                <div className="flex items-center justify-center py-4 bg-gray-100 rounded-t-lg">
                    <h1 className="text-xl font-semibold text-gray-700">
                        New to <span className="font-bold text-2xl">Into Wild Himalaya </span> ?
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
                                <span className="text-red-600 text-sm font-medium">This field is required</span>
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
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outnpm run devfline-none focus:ring-blue-500 focus:ring-1"
                            />
                            {errors.lastName && (
                                <span className="text-red-600 text-sm font-medium text-sm font-medium">This field is required </span>
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
                                <span className="text-red-600 text-sm font-medium ">This field is required</span>
                            )}
                        </div>
                        <div className="mb-6">
                            <label
                             
                                className="block text-lg font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="flex items-center justify-end   ">
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                id="hs-toggle-password"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                            />
                               <button className="text-gray-400 absolute pe-2  active:text-gray-600"
                       type='button'
                       onClick={togglePasswordVisibility}
                >
                    {
                        isPasswordHidden ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )
                    }
                </button>
                </div>
                            {errors.password && (
                                <span className="text-red-600 text-sm font-medium">This field is required</span>
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
                                <span className="text-red-600 text-sm font-medium">This field is required </span>
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
                                <span className="text-red-600 text-sm font-medium">This field is required</span>
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
                                <span className="text-red-600 text-sm font-medium">This field is required</span>
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
                                className="w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                            />
                            {errors.weight && (
                                <span className="text-red-600 text-sm font-medium">This field is required</span>
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
                                {...register("number", { required: "This field is required" ,  
                                    minLength: { value: 10, message: "Phone number must be exactly 10 digits" },
                                maxLength: { value: 10, message: "Phone number must be exactly 10 digits" },})}
                                
                                type="text"
                                id="phone"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                            />
                            {errors.number && (
                                <span className="text-red-600 text-sm font-medium">{errors.number.message}</span>
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
                                <span className="text-red-600 text-sm font-medium">This field is required</span>
                            )}
                        </div>
                        <div className="col-span-2 mb-6">
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-black text-white font-medium rounded-md  "
                            >
                                {isLoading ? (
                       <button className="w-full px-4 py-1.5 text-white font-medium grid place-items-center  rounded-lg duration-150">
                       <div
                         aria-label="Loading..."
                         role="status"
                         class="flex items-center space-x-2"
                       >
                         <svg
                           class="h-8 w-h-8 animate-spin stroke-white"
                           viewBox="0 0 256 256"
                         >
                           <line
                             x1="128"
                             y1="32"
                             x2="128"
                             y2="64"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                           <line
                             x1="195.9"
                             y1="60.1"
                             x2="173.3"
                             y2="82.7"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                           <line
                             x1="224"
                             y1="128"
                             x2="192"
                             y2="128"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                           <line
                             x1="195.9"
                             y1="195.9"
                             x2="173.3"
                             y2="173.3"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                           <line
                             x1="128"
                             y1="224"
                             x2="128"
                             y2="192"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                           <line
                             x1="60.1"
                             y1="195.9"
                             x2="82.7"
                             y2="173.3"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                           <line
                             x1="32"
                             y1="128"
                             x2="64"
                             y2="128"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                           <line
                             x1="60.1"
                             y1="60.1"
                             x2="82.7"
                             y2="82.7"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="24"
                           ></line>
                         </svg>
                         <span class="text-lg font-medium text-white">Loading...</span>
                       </div>
                     </button>
                    ) : (<>Register</>)}
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default SignUp