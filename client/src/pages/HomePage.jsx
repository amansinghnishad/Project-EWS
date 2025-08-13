import React from "react";
import Gallery from "../components/HeroSection/Gallery";
import Carousel from "../components/HeroSection/Carousel";
import NoticeGrid from "../components/Home/NoticeGrid";

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="w-full h-[40rem] flex justify-center pt-10 relative">
        <Carousel />
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center px-4">
          <div className="pointer-events-auto max-w-3xl mx-auto text-center text-[#eae6df]">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-md">
              Empowering With Support
            </h2>
            <p className="mt-2 opacity-90 drop-shadow">
              Mentorship, workshops, and a welcoming community to help you grow.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href="/about"
                className="px-5 py-2.5 rounded-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 transition"
              >
                Learn more
              </a>
              <a
                href="/gallery"
                className="px-5 py-2.5 rounded-xl font-semibold bg-emerald-500/90 text-gray-900 hover:bg-emerald-400 transition"
              >
                Explore gallery
              </a>
            </div>
          </div>
        </div>
      </div>
      <NoticeGrid />
      <div className="gallery-container flex justify-center items-center max-w-7xl mx-auto p-4">
        <Gallery />
      </div>
    </div>
  );
};

export default HomePage;
