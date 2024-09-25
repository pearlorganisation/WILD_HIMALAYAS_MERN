import { ChevronRight } from "lucide-react";
import React from "react";
import PayImg from "../../assets/images/pay_copyright.webp";
import Logo from "../../assets/images/WildLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full pt-5 bg-black p-3 shadow-full">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 w-full lg:grid-cols-4">
          <div className="hidden lg:block mb-8 lg:mb-0">
          <div className="flex items-center lg:flex-initial">
          <Link onClick={()=>{
           window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top smoothly
        }} to={"/"} className="flex flex-col justify-start items-center" >
            <img src={Logo} width={100} height={100} alt="Float UI logo" />
            <span className="font-bold text-lg text-white font-sans pt-5">
              Into Wild Himalaya
            </span>
          </Link>
        </div>
           
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white ">
              DESTINATIONS
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <Link>
                <li>Himachal Pradesh</li>
              </Link>
              <Link>
                <li>Ladakh Zanskar</li>
              </Link>
              <Link>
                <li>Garhwal</li>
              </Link>
              <Link>
                <li>Sikkim</li>
              </Link>
              <Link>
                <li>Rajasthan</li>
              </Link>
              <Link>
                {" "}
                <li>South India</li>
              </Link>
              <Link>
                <li>Nepal</li>
              </Link>
              <Link>
                <li>Tibet</li>
              </Link>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white ">
              RESERVATION
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <Link to="/bookingcondition">
                <li>Booking Conditions</li>
              </Link>
              <Link to="/refundpolicy">
                <li>Refund Policy</li>
              </Link>
              <Link>
                <li>F.A.Q.</li>
              </Link>
              <Link>
                <li>Latest update</li>
              </Link>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white ">CONTACT</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <li>+91-9816098702</li>

              <li>+91-9816354380</li>

              <li>info@intowildhimalaya.com</li>

              <li>intowildhimalaya@gmail.com</li>
            </ul>
          </div>
        </div>


      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-7xl items-center justify-between px-4 md:flex lg:px-0 my-3">
        <div className="inline-flex items-center">
        <Link to={"/"} onClick={()=>{
           window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top smoothly
        }} className="flex items-center justify-center gap-3 lg:hidden">
  
       
            <img src={Logo} width={100} height={100} alt="Float UI logo" />
            <span className="font-bold text-lg text-white font-sans">
              Into Wild Himalaya
            </span>

           
          </Link>
        </div>
     
   
          <p className="text-sm font-medium text-white">
            © 2024 <span className="text-myStyle">Pearl Organisation</span>. All
            rights reserved.
          </p>

      </div>
    </footer>
  );
};
export default Footer;
