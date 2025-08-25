import React, { useState } from "react";
import CircularGallery from "../components/Gallery/CircularGallery";
import Modal from "../components/Gallery/Modal";
import "./GalleryPage.css";

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);
  const circularItems = [
    {
      image:
        "https://images.unsplash.com/photo-1520697222861-7f2225d0c50b?q=80&w=1600&auto=format&fit=crop",
      text: "Mentorship",
      description: "One-to-one mentorship that grows skills and confidence.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
      text: "Workshops",
      description: "Hands-on sessions in coding, design, and communication.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      text: "Community",
      description: "An inclusive community to learn, share, and collaborate.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop",
      text: "Events",
      description: "Talks, meetups, and showcases from our journey.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
      text: "Guidance",
      description: "Support for careers, scholarships, and life decisions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop",
      text: "Careers",
      description: "Mock interviews, resumes, and job-readiness practice.",
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
        onItemClick={(item) => setSelected(item)}
      />
      <Modal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default GalleryPage;
