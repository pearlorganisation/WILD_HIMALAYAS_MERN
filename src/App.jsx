import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/layout/Footer";
import About from "./pages/About/About";
import Activity from "./pages/Activity/Activity";
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/activities",
          element: <Activity />,
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
      ]
    },

  ]);

  return (


    <RouterProvider router={router} >
      <Layout />
    </RouterProvider>


  );
}

export default App;
