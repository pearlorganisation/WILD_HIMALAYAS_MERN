import { emailVerification } from "@/features/actions/authActions";
import React, { useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {ClipLoader} from "react-spinners"

const EmailVerification = () => {

  const { authData,isEmailVerified } = useSelector((state) => state.auth);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("token::", token);
  }, [token]);
  const verifyEmail = () => {
    dispatch(emailVerification({ token }));
    console.log(token);
  };
  useEffect(() => {

    if (isEmailVerified) {
      navigate("/signIn");

    }
  }, [authData]);

  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <div class="w-[30rem] h-[25rem] grid place-items-center p-3 bg-white rounded-lg shadow-lg ">
          <div>
            <h2 class="text-2xl font-semibold text-center mb-6">
              Email Verification
            </h2>
            <div className="flex justify-center items-center">
              <div>
                <CiMail size={70} />
              </div>
            </div>

            <p class="text-gray-700 text-center mb-4">
              Click the button below to verify your email address.
            </p>

            <div class="flex justify-center">
              <button
                onClick={verifyEmail}
                class=" text-white font-semibold py-2 px-6 rounded  focus:outline-none bg-[#000000] "
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
                    ) : (<>Verify Email</>)}
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
