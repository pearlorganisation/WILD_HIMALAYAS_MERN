import Hero from "@/components/Home/Hero";
import FaqSection from "@/components/Home/FAQSection";
import Intro from "@/components/Home/Intro";
// import ProductList from "@/components/Home/ProductList";
import Riding from "@/components/Home/Riding";
import React, { useEffect } from "react";
import ProductList from "@/components/Home/ProductList";
import { useDispatch } from "react-redux";
import { clearAuth } from "@/features/slices/authSlice";

const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(clearAuth())
  },[])

  return (
    <div>
      <Hero />
      <ProductList />
      <Riding />
      <Intro />
      <FaqSection />
    </div>
  );
};

export default Home;
