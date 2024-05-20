import { ChevronRight } from "lucide-react";
import React from "react";
import PayImg from "../../assets/images/pay_copyright.webp";
import Logo from "../../assets/images/WildLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full pt-5 bg-gray-100 p-3 shadow-full">
      <div className="mx-auto flex max-w-7xl flex-col items-start space-x-8 md:flex-row">
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              DESTINATIONS
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
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
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              RESERVATION
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <Link>
                <li>Booking Conditions</li>
              </Link>
              <Link>
                <li>Refund Policy</li>
              </Link>
              <Link>
                <li>Your Responsibilities</li>
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
            <p className="mb-6 text-lg font-semibold text-gray-700 ">CONTACT</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>+91-9816098702</li>

              <li>+91-9816354380</li>

              <li>Your Responsibilities</li>

              <li>info@intowildhimalaya.com.</li>

              <li>intowildhimalaya@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:px-0" style={{ margin: "0" }}>
          <h1 className="max-w-sm text-3xl font-bold">
            Subscribe to our Newsletter
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-7xl items-center justify-between px-4 md:flex lg:px-0 my-3">
        <div className="inline-flex items-center">
          <img
            className="mix-blend-multiply"
            src={Logo}
            width={100}
            height={100}
            alt=""
          />

          <span className="ml-4 text-lg font-bold"> into Wild Himalayas</span>
        </div>
        <div>
          <img src={PayImg} alt="pay" />
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2024 <span className="text-myStyle">Pearl Organisation</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
