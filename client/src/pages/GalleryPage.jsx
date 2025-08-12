import React, { useRef } from "react";
import { motion } from "framer-motion";
import CircularGallery from "../components/Gallery/CircularGallery";
import "./GalleryPage.css";

const GalleryPage = () => {
  const circularItems = [
    {
      image:
        "https://images.unsplash.com/photo-1520697222861-7f2225d0c50b?q=80&w=1600&auto=format&fit=crop",
      text: "Mentorship",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
      text: "Workshops",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      text: "Community",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop",
      text: "Events",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
      text: "Guidance",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop",
      text: "Careers",
    },
  ];

  return (
    <div className="gallery-ogl-page">
      <div className="gallery-ogl-header">
        <h1>EWS Gallery</h1>
        <p>Scroll or drag to explore moments from our journey.</p>
      </div>
      <CircularGallery
        items={circularItems}
        bend={3}
        textColor="#eae6df"
        borderRadius={0.06}
        cardScale={0.7}
      />
    </div>
  );
};

export default GalleryPage;
