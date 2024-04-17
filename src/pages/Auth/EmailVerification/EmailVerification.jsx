import { emailVerification } from "@/features/actions/authActions";
import React, { useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const EmailVerification = () => {
  const {authData} = useSelector(state => state.auth)
  const {token} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    console.log("token::",token)
    
  }, [token])
  const verifyEmail = ()=>{
    dispatch(emailVerification({token}))
    console.log(token)

  }
  useEffect(() => {
    if(authData?.success){
      navigate('/signIn')
    }
  }, [])
  
  
  
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
                Verify Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
