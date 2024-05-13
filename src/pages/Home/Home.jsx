import Hero from "@/components/Home/Hero";
import FaqSection from "@/components/Home/FAQSection";
import Intro from "@/components/Home/Intro";
// import ProductList from "@/components/Home/ProductList";
import Riding from "@/components/Home/Riding";
import React from "react";
import ProductList from "@/components/Home/ProductList";

const Home = () => {
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
