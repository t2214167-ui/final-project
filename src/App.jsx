import Header from "./components/layout/Header";
import HeroStats from "./components/layout/Herostats";
import Footer from "./components/layout/Footer";
import Features from "./components/sections/Features";
import React from "react";
import Setions from "./components/sections/Setions";
import Sections4 from "./components/sections/Section4";
import BeautyProductGrid from "./components/layout/Beautypr";
import BeautyTestimonialSlider from "./components/sections/Testimonials";


function App() {
  return (
    <>
      <Header />
      <HeroStats />
      <Features />
      <Setions />
      <Sections4 />
      <BeautyProductGrid />
      <BeautyTestimonialSlider />
      

      <HeroStats />
      <Footer />
      
    </>
  );
}

export default App;
