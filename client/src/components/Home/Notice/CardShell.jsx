import React, { useRef, useState } from "react";

const useTilt = () => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 16;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };
  const onLeave = () =>
    setStyle({ transform: `perspective(900px) rotateX(0deg) rotateY(0deg)` });

  return { ref, style, onMove, onLeave };
};

const CardShell = ({ children, className = "" }) => {
  const tilt = useTilt();
  const cardRef = useRef(null);

  const handleWheel = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const scrollable = el.querySelector('[data-scrollable="true"]');
    if (scrollable) {
      scrollable.scrollTop += e.deltaY;
    }
  };

  return (
    <div
      ref={(node) => {
        tilt.ref.current = node;
        cardRef.current = node;
      }}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      onWheel={handleWheel}
      className={`relative rounded-3xl border border-stone-300 bg-stone-100/80 bg-gradient-radial from-black to-transparent ition-transform duration-200 ${className}`}
      style={{ willChange: "transform", ...tilt.style }}
    >
      {/* Shine */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl " />
      <div className="relative p-6">{children}</div>
    </div>
  );
};

export default CardShell;
