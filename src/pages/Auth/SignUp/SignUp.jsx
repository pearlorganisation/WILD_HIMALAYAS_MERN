
import { signUp } from "@/features/actions/authActions";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const dispatch = useDispatch()
    const { isLoading, authData } = useSelector(state => state.auth)
    const navigate = useNavigate()
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
        for (let feet = 3; feet <= 6; feet++) {
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
    useEffect(() => {
        console.log(authData, '::authData')
        if (authData?.status) {
            navigate('/signIn')
        }
    }, [authData])


    return (
        <div className="container mx-auto px-8 py-8 max-w-4xl">
            <div className="max-w-2xl mx-auto shadow-sm rounded-lg overflow-hidden bg-white">
                <div className="flex items-center justify-center py-4 bg-gray-100 rounded-t-lg">
                    <h1 className="text-xl font-bold text-gray-700">
                        New to Into Wild Himalaya?
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
                            {errors.firstname && (
                                <span className="text-red-600">This field is required</span>
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
                            {errors.firstname && (
                                <span className="text-red-600">This field is required </span>
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
                                <span className="text-red-600">This field is required</span>
                            )}
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="phone"
                                className="block text-lg font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                            />
                            {errors.password && (
                                <span className="text-red-600">This field is required</span>
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
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && (
                                <span className="text-red-600">This field is required </span>
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
                                <span className="text-red-600">This field is required</span>
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
                                <span className="text-red-600">This field is required</span>
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
                                <span className="text-red-600">This field is required</span>
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
                                {...register("number", { required: true })}
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                            />
                            {errors.number && (
                                <span className="text-red-600">This field is required</span>
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
                                <span className="text-red-600">This field is required</span>
                            )}
                        </div>
                        <div className="col-span-2 mb-6">
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-black text-white font-medium rounded-md  "
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default SignUp