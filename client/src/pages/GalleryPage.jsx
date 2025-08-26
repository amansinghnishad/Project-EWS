import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import "./GalleryPage.css";

// A curated set of images with mixed orientations to emulate the screenshot's masonry look.
// Using Unsplash hotlinks keeps the repo light while giving real-world visuals.
const IMAGE_SOURCES = [
  // Portraits / UI shots
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522199794611-8e1f0b4e7da3?q=80&w=600&auto=format&fit=crop",
  // Nature / landscapes
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=700&auto=format&fit=crop",
  // Abstracts / art
  "https://images.unsplash.com/photo-1500534311705-4c01a17590f2?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526312426976-593c2d0be5b9?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=700&auto=format&fit=crop",
  // Portrait orientation
  "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975922066-57f32d4b35d1?q=80&w=600&auto=format&fit=crop",
  // UI / device shots
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=700&auto=format&fit=crop",
  // More variety
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
];

// Collections (topics) composed from the master list above.
const COLLECTIONS = [
  {
    id: "ui",
    title: "UI / Tech",
    color: "#5a7dff",
    images: IMAGE_SOURCES.slice(0, 5).concat(IMAGE_SOURCES.slice(18, 24)),
  },
  {
    id: "nature",
    title: "Nature",
    color: "#4ad3a4",
    images: IMAGE_SOURCES.slice(5, 10).concat(IMAGE_SOURCES.slice(22, 25)),
  },
  {
    id: "art",
    title: "Art & Portraits",
    color: "#ff8fab",
    images: IMAGE_SOURCES.slice(10, 18),
  },
];

function useKey(key, handler) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === key) handler();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [key, handler]);
}

function GalleryImage({ src, alt, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure
      className="masonry-item"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={loaded ? "img" : "img img--loading"}
        layoutId={src}
        onLoad={() => setLoaded(true)}
      />
    </figure>
  );
}

export default function GalleryPage() {
  const images = useMemo(
    () =>
      IMAGE_SOURCES.map((src, i) => ({ src, alt: `Gallery image ${i + 1}` })),
    []
  );

  const [active, setActive] = useState(null); // { src, alt } | null
  const [activeCollection, setActiveCollection] = useState(COLLECTIONS[0]);

  useKey("Escape", () => setActive(null));

  // Images selected for the active collection (fallback to all if missing)
  const current = useMemo(() => {
    const list = activeCollection?.images ?? IMAGE_SOURCES;
    return list.map((src, i) => ({
      src,
      alt: `${activeCollection?.title ?? "Gallery"} ${i + 1}`,
    }));
  }, [activeCollection]);

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}>
      <LayoutGroup>
        <main className="gallery-page">
          <header className="gallery-header">
            <h1>Gallery</h1>
            <p>
              Pick a collection — cards spread into the grid with a smooth
              transition.
            </p>
          </header>

          {/* Collections row with stacked cards */}
          <section className="collections" aria-label="collections">
            {COLLECTIONS.map((col) => (
              <motion.button
                key={col.id}
                className={`stack ${
                  activeCollection?.id === col.id ? "is-active" : ""
                }`}
                style={{
                  // a slight tint per collection
                  ["--stack-color"]: col.color,
                }}
                onClick={() => setActiveCollection(col)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="stack__deck" aria-hidden>
                  <div className="stack__card stack__card--4" />
                  <div className="stack__card stack__card--3" />
                  <div className="stack__card stack__card--2" />
                  <div className="stack__card stack__card--1" />
                </div>

                <div className="stack__head">
                  <span className="stack__title">{col.title}</span>
                  <span className="stack__meta">
                    {col.images.length} photos
                  </span>
                </div>

                {/* Hidden preview thumbs keep shared-layout animation continuity */}
                <div className="stack__thumbs" aria-hidden>
                  {col.images.slice(0, 3).map((src, i) => (
                    <motion.img
                      key={src}
                      src={src}
                      alt=""
                      className={`stack__thumb stack__thumb--${i + 1}`}
                      loading="lazy"
                      layoutId={src}
                    />
                  ))}
                </div>

                <span className="stack__pulse" aria-hidden />
              </motion.button>
            ))}
          </section>

          {/* Masonry grid */}
          <section className="masonry" aria-label="image gallery">
            <AnimatePresence initial={false} mode="sync">
              {current.map((img) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <GalleryImage {...img} onClick={() => setActive(img)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </section>

          {/* Lightbox with shared layoutId zoom */}
          <AnimatePresence>
            {active && (
              <motion.div
                className="lightbox"
                onClick={() => setActive(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  className="lightbox__close"
                  aria-label="Close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(null);
                  }}
                >
                  ×
                </button>
                <motion.img
                  className="lightbox__image"
                  src={active.src}
                  alt={active.alt}
                  layoutId={active.src}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </LayoutGroup>
    </MotionConfig>
  );
}
