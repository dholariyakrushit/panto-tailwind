import React from "react";

import Hero from "../../components/home/hero/Hero";
import "./home.scss";
import ChoosingUs from "../../components/home/choosingus/ChoosingUs";
import BestProduct from "../../components/home/bestproduct/BestProduct";
import Experience from "../../components/home/experiences/Experience";
import Materials from "../../components/home/materials/Materials";
import Footer from "../../components/common/Footer";
import Testimonials from "../../components/home/testimonials/Testimonials";



function Home() {
  return (
    <>
      <Hero />
      <ChoosingUs />
      <BestProduct />
      <Experience />
      <Materials />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
