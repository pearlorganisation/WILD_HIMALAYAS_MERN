import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Checkout from "./pages/Checkout/Checkout";
import Climbing from "./pages/Climbing/Climbing";
import Contact from "./pages/Contact/Contact";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import Login from "./pages/Auth/Login/Login";
import OurCamp from "./pages/OurCamp/OurCamp";
import OurTrek from "./pages/OurTrek/OurTrek";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SendOTP from "./pages/Auth/SendOTP/SendOTP";
import Trek from "./pages/Trek/Trek";
import UpcomingTreks from "./pages/UpcomingTreks/UpcomingTreks";
import HeaderComponent from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Loading from "./components/Loader/Loading";
import MountainBiking from "./pages/Mountain_Biking/MountainBiking";
import EmailVerification from "./pages/Auth/EmailVerification/EmailVerification";
import IndianMoterBiking from "./pages/Indain_MoterBike/IndainMoterbike";

const Home = lazy(() => import("./pages/Home/Home"))
const About = lazy(() => import("./pages/About/About"))
const Activity = lazy(() => import("./pages/Activity/Activity"))

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        },
        {
          path: "/about",
          element: <Suspense fallback={<Loading />}>
            <About />
          </Suspense>,
        },
        {
          path: "/activities",
          element: <Suspense fallback={<Loading />}>
            <Activity />
          </Suspense>,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/climbing",
          element: <Climbing />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/forgotPassword",
          element: <ForgotPassword />,
        },
        {
          path: "/signIn",
          element: <Login />,
        },
        {
          path: "/ourCamp",
          element: <OurCamp />,
        },
        {
          path: "/ourTrek",
          element: <OurTrek />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/sentOTP",
          element: <SendOTP />,
        },
        {
          path: "/trek",
          element: <Trek />,
        },
        {
          path: "/upcomingTrek",
          element: <UpcomingTreks />,
        },
        {
          path: "/forgetpassword",
          element: <ForgotPassword />,
        },
        {
          path: "/mountainebike",
          element: <MountainBiking/>,
        },
        {
          path: "/emailverification/:token",
          element: <EmailVerification/>,
        },
        {
          path: "/IndianMoterBiking",
          element: <IndianMoterBiking/>,
        },
        {
          path: "/forgetpassword",
          element: <ForgotPassword/>,
        },
      ]
    },

  ]);

  return (


    <RouterProvider router={router} />



  );
}

export default App;
