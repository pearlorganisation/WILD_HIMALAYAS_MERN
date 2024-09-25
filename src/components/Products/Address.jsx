import { addAddress } from '@/features/slices/Cart';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';

const Address = ({setStep}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        dispatch(addAddress(data))
        setStep(2)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} class=" px-8 rounded lg:mt-0 h-full">
            <p class="text-xl font-medium">Address Details</p>
            <p class="text-gray-400">Complete your order by providing your payment details.</p>
            <div class=" space-y-4">


                <div class="relative space-y-4 pt-3">
                    <div>
                        <input {...register("pincode", { required: true })} type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Pin Code" />
                    </div>
                    {errors.pincode && <span className='text-red-500'>This field is required</span>}
                    <div class="relative">
                        <input
                            {...register("phoneNumber", { required: true })}
                            type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Contact Number" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>
                    </div>
                    {errors.phoneNumber && <span className='text-red-500'>This field is required</span>}
                    <div className='relative'>
                        <input {...register("address", { required: true })} type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Address (House No, Building, Street, Area)*" />
                       
                    </div>
                    {errors.address && <span className='text-red-500'>This field is required</span>}
                    <div>
                        <input {...register("locality", { required: true })} type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Locality / Town*" />
                    </div>
                    {errors.locality && <span className='text-red-500'>This field is required</span>}
                    <div className='flex gap-2'>
                      
                                <div className='w-full'>
                                <input
                            {...register("city", { required: true })}
                            type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City / District*" />
                                {errors.city && <span className='text-red-500'>This field is required</span>}
                    </div>
<div className='w-full'>    <input
                            {...register("state", { required: true })}
                            type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="State*" />
                                 {errors.state && <span className='text-red-500'>This field is required</span>}</div>
               


                    </div>
                

                </div>





            </div>
            <button type='submit' class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Add Address</button>
        </form>
    )
}

export default Address