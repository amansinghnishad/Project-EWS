import React from "react";
import ImgContainer from "./About/ImgContainer";
import Content from "./About/Content";

const About = () => {
  return (
    <div className="about-section w-full grid grid-cols-1 md:grid-cols-6 place-items-center gap-20 p-20 bg-white rounded-[50px] shadow-md h-[600px]">
      <div className="w-full md:col-span-4 p-6 flex flex-col justify-center h-[90%] border-amber-700 border-2 rounded-[50px]">
        <Content />
      </div>
      <div className="w-full md:col-span-2 p-6 flex justify-center items-center h-[80%] border-amber-700 border-2 rounded-[50px]">
        <ImgContainer />
      </div>
    </div>
  );
};

export default About;
