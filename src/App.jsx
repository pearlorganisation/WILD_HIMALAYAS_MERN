import { Suspense, lazy, useEffect} from "react";
import "./App.css";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./pages/Booking/Checkout/Checkout";
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
import Layout from "./components/layout/Layout";
import Loading from "./components/Loader/Loading";
import MountainBiking from "./pages/Mountain_Biking/MountainBiking";
import EmailVerification from "./pages/Auth/EmailVerification/EmailVerification";
import IndianMoterBiking from "./pages/Indain_MoterBike/IndainMoterbike";
import ProductList from "./components/Home/ProductList";
import Tours from "./components/Tours/Tours";
import BookingCondition from "./components/layout/FooterPages/BookingCondition";
import RefundPolicy from "./components/layout/FooterPages/RefundPolicy";
import UrResponsibilities from "./components/layout/FooterPages/UrResponsibilities";
import TrekMemory from "./pages/Memory/TrekMemory";
import MoterBikeMemory from "./pages/Memory/MoterBikeTourMemory";
import Eligibility from "./pages/Booking/Eligibility";
import TermsAndCondition from "./pages/Booking/TermsAndCondition/TermsAndCondition";
import AdddTrekMate from "./pages/Booking/AddTrekMate/AddTrekMate";
import PaymentFailed from "./pages/Payment/PaymentFailed";
import TrekkingProducts from "./components/Products/TrekkingProducts";
import { useSelector } from "react-redux";

import Cart from "./components/Products/Cart";
import EmptyCart from "./components/Products/EmptyCart";
import ProductCheckout from "./components/Products/ProductCheckout";
import { YourBookings } from "./components/YourBookings";
import { YourOrders } from "./components/YourOrders/YourOrders";
import { ViewOrder } from "./components/YourOrders/ViewOrder";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/Aboutus"));
const Activity = lazy(() => import("./pages/Activity/Activity"));


function App() {
  const {isUserLoggedIn} = useSelector((state)=>state.auth)





  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/activities",
          element: (
            <Suspense fallback={<Loading />}>
              <Activity />
            </Suspense>
          ),
        },
        {
          path: "/checkout",
          element: isUserLoggedIn ? <Checkout /> : <Login />,
        },
        {
          path: "/productCheckout",
          element: isUserLoggedIn ? <ProductCheckout /> : <Login />,
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
          path: "/mountainebike",
          element: <MountainBiking />,
        },
        {
          path: "/emailverification/:token",
          element: <EmailVerification />,
        },
        {
          path: "/IndianMoterBiking",
          element: <IndianMoterBiking />,
        },
        {
          path: "/forgetpassword",
          element: <ForgotPassword />,
        },
        {
          path: "/productlist",
          element: <ProductList />,
        },
        {
          path: "/tours",
          element: <Tours />,
        },
        {
          path: "/bookingcondition",
          element: <BookingCondition />,
        },
        {
          path: "/refundpolicy",
          element: <RefundPolicy />,
        },
        {
          path: "/yourresponsibility",
          element: <UrResponsibilities />,
        },
        {
          path: "/trekmemory",
          element: <TrekMemory />,
        },
        {
          path: "/motermemory",
          element: <MoterBikeMemory />,
        },
        {
          path: "/eligibility",
          element: <Eligibility />,
        },
        {
          path: "/order",
          element: isUserLoggedIn ? <TermsAndCondition /> : <Login />,
        },
        {
          path: "/paymentfailed",
          element: <PaymentFailed />,
        },
        {
          path: "/terms/addtrekmate",
          element: isUserLoggedIn ? <AdddTrekMate /> : <Login /> ,
        },
        {
          path: "/yourBookings",
          element: isUserLoggedIn ? <YourBookings /> : <Login /> ,
        },
        {
          path: "/yourOrders",
          element: isUserLoggedIn ? <YourOrders /> : <Login /> ,
        },
        {
          path: "/yourOrders/order",
          element: isUserLoggedIn ? <ViewOrder /> : <Login /> ,
        },
        {
          path: "/trekkingProducts",
          element: <TrekkingProducts />,
        },
     
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/empty",
          element: <EmptyCart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
