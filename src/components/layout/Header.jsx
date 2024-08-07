import { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/WildLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/features/actions/authActions";

// Profile Dropdown
const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();
  const { isLoading, authData, isUserLoggedIn } = useSelector(
    (state) => state.auth
  );
  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
    { title: "Log out", path: "javascript:void(0)" },
  ];
  const { isLogIn } = useSelector((state) => state.auth);
  // let isLogIn=true

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef?.current?.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);
  console.log(isLogIn);
  const dispatch = useDispatch();

  const handelSubmit = () => {
    dispatch(logOut());
  };

  return (
    <div className={`relative ${props.class}`}>
      {!true ? (
        <div>
          <div className="flex items-center space-x-4 border border-red-500">
            <button
              ref={profileRef}
              className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
              onClick={() => setState(!state)}
            >
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                className="w-full h-full rounded-full"
              />
            </button>
            <div className="lg:hidden">
              <span className="block">Micheal John</span>
              <span className="block text-sm text-gray-500">
                john@gmail.com
              </span>
            </div>
          </div>
          <ul
            className={`bg-white top-12 border-2 border-y-lime-400 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
              state ? "" : "lg:hidden"
            }`}
          >
            {navigation.map((item, idx) => (
              <li>
                <a
                  key={idx}
                  className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                  href={item.path}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex gap-2 font-medium">
          {isUserLoggedIn ? (
            <button
              onClick={handelSubmit}
              className="px-5 py-2 active:scale-95 transition-all border-2 text-black border-black hover:bg-black/10 rounded-md"
              type="button"
            >
              LogOut
            </button>
          ) : (
            <>
              <Link to="/signIn">
                <button
                  className="px-5 py-2 active:scale-95 transition-all border-2 text-black border-black hover:bg-black/10 rounded-md"
                  type="button"
                >
                  SignIn
                </button>
              </Link>
              <Link to="/signUp">
                <button
                  className="px-5 py-2 active:scale-95 transition-all bg-black hover:bg-black/80 text-white rounded-md"
                  type="button"
                >
                  SignUp
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "Activities",
      path: "/activities",
    },

    {
      title: "About",
      path: "/about",
    },

    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link className="flex justify-start items-center" to="/">
            <img src={Logo} width={100} height={100} alt="Float UI logo" />
            <span className="font-bold text-lg font-sans">
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
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-gray-900">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />
          </div>

          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <ProfileDropDown class="hidden lg:block" />

            <button
              className="outline-none text-gray-400 block lg:hidden"
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
