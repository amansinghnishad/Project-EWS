import React from "react";
import Gallery from "../components/Home/Gallery";
import Carousel from "../components/Home/Carousel";
import NoticeGrid from "../components/Home/NoticeGrid";
import About from "../components/Home/About";
import ButtonGroup from "../components/common/ButtonGroup";

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="w-full h-[40rem] flex justify-center pt-10 relative bg-[linear-gradient(to_top,#492900_0%,transparent_50%)]">
        <Carousel />
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center px-4">
          <div className="pointer-events-auto max-w-3xl mx-auto text-center text-[#eae6df]">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-md">
              Empowering Communities Through Education and Opportunity
            </h2>
            <p className="mt-2 opacity-90 drop-shadow">
              Eklavya Welfare Society is committed to uplifting underprivileged
              lives through sustainable initiatives.
            </p>
            <div className="mt-4 flex justify-center">
              <ButtonGroup
                button1Text={"Learn More ..."}
                button2Text={"Donate Us ..."}
              />
            </div>
          </div>
        </div>
      </div>
      <NoticeGrid />
      <div className="about-container flex justify-center items-center max-w-[90%] mx-auto p-4">
        <About />
      </div>
      <div className="gallery-container flex justify-center items-center max-w-[90%] mx-auto p-4">
        <Gallery />
      </div>
    </div>
  );
};

export default HomePage;
