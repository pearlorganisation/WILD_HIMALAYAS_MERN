import React from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import { useSelector } from 'react-redux';



export const ViewBooking = () => {
  const {state:item}= useLocation();
  const {userData}= useSelector((state)=>state.auth)

  console.log(item)
  return (
    <div className="mx-auto my-4 max-w-5xl md:my-6">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}

          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">

                  <li
                    className="flex items-stretch justify-between space-x-5 py-7 "
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-cover"
                          src={item?.tourId?.banners[0]}
                          
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{item?.tourId?.title}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-600">
                            Duration : {item?.tourId?.tripDuration} days
                          </p>
                          <p className="mt-1.5 flex text-sm font-medium gap-3 text-gray-600">
                           <p> Start Date : {item?.tourDate?.startDate} </p>
                           <p> End Date : {item?.tourDate?.endDate} </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

         
              </ul>
                  { item?.memberNames.map((member)=>{
                  return <div className='flex justify-between'>
                    <p className="m-3  text-sm font-medium text-gray-700">{`${member?.firstName} ${member?.lastName}`}
                  </p>
                    <p className="m-3  text-sm font-medium text-gray-700">₹ {`${item?.tourId?.price}`}
                  </p>
                  </div>
                }) 
                }
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
              
                <li className="flex items-center justify-between">
                  <p className=" font-medium ">Total Amount</p>
                  <p className="text-sm font-bold ">₹ {item?.amount}</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Booking Information</h2>
                  <p className="font-medium mt-3 text-sm text-gray-700">Booking Id: {item?._id}</p>
                  <p className="text-sm font-medium text-gray-700">Date: {format(new Date(item?.createdAt), 'EEE, d MMM yyyy')}</p>
            
                </div>
                <div className="py-6">
                  <h2 className="mb-2 text-base font-bold text-black">Member Names</h2>
                { item?.memberNames.map((member)=>{
                  return <><p className="mt-3 text-sm font-medium text-gray-700">{`${member?.firstName} ${member?.lastName}`}</p>
        
                  </>
                }) 
                }
                </div>
                {/* <div className="py-6">
                  <h2 className="text-base font-bold text-black">Shipping Contact Number</h2>
                  <p className="mt-3 text-sm font-medium text-gray-700">{item?.address?.phoneNumber}</p>
              
                </div>
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Payment Information</h2>
                  <p className={`mt-3 text-sm font-medium ${item?.paymentType === 'Online Paid'? "text-green-600" : "text-yellow-600" } `}>{item?.paymentType}</p>
              
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
