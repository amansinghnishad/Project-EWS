import React from "react";
import CircularGallery from "./Gallery/CircularGallery";

const Gallery = () => {
  return (
    <div className="w-full relative" id="gallery">
      <img
        src="/images/gallery-blob.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 m-auto w-[1400px] max-w-none opacity-40 -z-10"
        style={{ filter: "blur(2px)" }}
      />
      <div className="relative z-10">
        <CircularGallery cardScale={0.7} bend={3} />
      </div>
    </div>
  );
};

export default Gallery;
