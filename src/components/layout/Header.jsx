import { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/WildLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/features/actions/authActions";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

// Profile Dropdown Component
const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const {isUserLoggedIn,userData } = useSelector(
    (state) => state.auth
  );
  const navigation = [
    { title: "Your Bookings", path: "/yourBookings" },
    { title: "Your Orders", path: "/yourOrders" },
    { title: "Log out", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef?.current?.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  const dispatch = useDispatch();

  const handelSubmit = () => {
    dispatch(logOut());
  };


  return (
    <div className={`relative ${props.class}`}>
      {isUserLoggedIn ? (
        <div>
          <div className="flex items-center space-x-4 ">
            <button
              ref={profileRef}
              className=" outline-none rounded-full "
              onClick={() => setState(!state)}
            >
              <div className="flex items-center gap-2 p-1">
                <FaUserCircle size={25}/>
              <span className="block text-gray-700 font-semibold text-lg">{userData?.firstName}</span>
              {/* <span className="block text-sm text-gray-500">
               {userData?.email}
              </span> */}
            </div>
            </button>
          </div>
          <ul
            className={`bg-white top-12  z-10 right-0 absolute border rounded-md lg:text-sm p-2 md:p-0 lg:w-52 shadow-md space-y-2 md:space-y-0 mt-0 ${
              !state && "hidden"
            }`}
          >
            {navigation.map((item, idx) => (
              <li>
                <Link
                  key={idx}
                  className="block text-g`ray-600 lg:hover:bg-gray-50 lg:p-2.5"
                  to={item.path}
                  onClick={()=>{
                    if(item.title ==="Log out"){
                     handelSubmit()
                    }
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex gap-2 font-medium">
   
            <>
              <Link to="/signIn">
                <button
                  className="px-5 py-2 active:scale-95 transition-all border text-black border-black hover:bg-black/10 rounded-md"
                  type="button"
                >
                  SignIn
                </button>
              </Link>
            
            </>
 
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const {cartData}= useSelector((state)=>state.cart)

  const navigation = [
    {
      title: "Treks",
      path: "/upcomingtrek",
    },

    {
      title: "Activities",
      path: "/activities",
    },
    {
      title: "Products",
      path: "/trekkingProducts",
    },
    {
      title: "About Us",
      path: "/about",
    },

    {
      title: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8  max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link className="flex justify-start items-center" to="/">
            <img src={Logo} width={100} height={100} className="hidden lg:block" alt="Float UI logo" />
            <img src={Logo} width={70} height={50} className=" lg:hidden" alt="Float UI logo" />
            <span className="hidden lg:block font-bold text-lg font-sans">
              Into Wild Himalaya
            </span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className=" space-y-5 lg:flex lg:space-x-6 lg:space-y-0 ">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-gray-900">
                  <Link onClick={()=>setMenuState(!menuState)} to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex gap-4 items-center justify-end  sm:space-x-6">
           <ProfileDropDown class="" />
            <Link
              to="/cart"
              class="text-white relative z-10  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-lg rounded-lg px-5 py-2.5    focus:outline-none "
            >
              <FaCartShopping />{" "}
              <span className="absolute w-[1.5rem] h-[1.5rem] shadow-md text-xs grid place-items-center bg-white text-blue-500 rounded-full top-[-0.5rem] right-[-0.5rem]">
                {cartData?.length || 0}
              </span>
            </Link>
              
            
            <button
              className="outline-none text-gray-400 block lg:hidden me-3"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
