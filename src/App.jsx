import { Suspense, lazy} from "react";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
import ProductDeatils from "./components/Products/ProductDeatils";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/Aboutus"));
const Activity = lazy(() => import("./pages/Activity/Activity"));

function App() {
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
          element: <TermsAndCondition />,
        },
        {
          path: "/paymentfailed",
          element: <PaymentFailed />,
        },
        {
          path: "/terms/addtrekmate",
          element: <AdddTrekMate />,
        },
        {
          path: "/trekkingProducts",
          element: <TrekkingProducts />,
        },
        {
          path: "/productDetails",
          element: <ProductDeatils />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
