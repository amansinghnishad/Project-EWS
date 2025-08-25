import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const wrap = (i, len) => {
    return ((i % len) + len) % len;
  };

  const goTo = (i) => {
    const newIndex = loop
      ? wrap(i, length)
      : Math.max(0, Math.min(i, length - 1));
    setIndex(newIndex);
  };

  // const next = () => goTo(index + 1);
  // const prev = () => goTo(index - 1);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    goTo(index + newDirection);
    setDirection(newDirection);
  };

  const slideIndex = wrap(index, slides.length);

  return (
    <div
      className="relative w-[95%] h-full overflow-hidden select-none rounded-4xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero image carousel"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[slideIndex].src}
            alt={slides[slideIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-2xl sm:text-3xl font-semibold drop-shadow"
            >
              {slides[slideIndex].title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-white/90 mt-1 drop-shadow text-sm sm:text-base"
            >
              {slides[slideIndex].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={() => paginate(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => paginate(1)}
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
