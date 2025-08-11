import React from "react";

const Photos = [
  {
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 2",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1538991383142-36c4edeaffde?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 6",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1673002094117-be8021ca0add?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 7",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1671641797552-ce2a3a29154c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 8",
  },
  {
    src: "https://images.unsplash.com/photo-1646385890665-09e99c472d3d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gallery Image 9",
  },
];

const Gallery = () => {
  return (
    <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
      {Photos.map((photo, index) => (
        <div
          key={index}
          className="gallery-item  border-gray-300 p-2 rounded-2xl "
        >
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <p className="text-white text-sm m-2">{photo.alt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
