import React from "react";
import Gallery from "../components/HeroSection/Gallery";
import Carousel from "../components/HeroSection/Carousel";

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="w-full h-[40rem] flex justify-center pt-10 relative">
        <Carousel />
      </div>
      <div className="gallery-container flex justify-center items-center max-w-7xl mx-auto p-4">
        <Gallery />
      </div>
    </div>
  );
};

export default HomePage;
