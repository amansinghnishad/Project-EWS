import React, { useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop",
    alt: "Slide 1",
    title: "Explore",
    subtitle: "Discover breathtaking views",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    alt: "Slide 2",
    title: "Create",
    subtitle: "Inspire your next project",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    alt: "Slide 3",
    title: "Relax",
    subtitle: "Find peace in motion",
  },
];

const Carousel = ({ loop = true }) => {
  const [index, setIndex] = useState(0);
  const length = slides.length;

  const goTo = (i) => {
    const newIndex = loop
      ? ((i % length) + length) % length
      : Math.max(0, Math.min(i, length - 1));
    setIndex(newIndex);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <div
      className="relative w-[95%] h-full overflow-hidden select-none rounded-4xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero image carousel"
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative w-full h-full shrink-0">
            <img
              src={s.src}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
              <h3 className="text-white text-2xl sm:text-3xl font-semibold drop-shadow">
                {s.title}
              </h3>
              <p className="text-white/90 mt-1 drop-shadow text-sm sm:text-base">
                {s.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
