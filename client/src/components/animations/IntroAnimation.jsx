import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const IntroAnimation = ({ onComplete, isSkipping }) => {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("/videos/intro.mp4");

  useEffect(() => {
    if (isSkipping) {
      gsap.to(introRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });
    }
  }, [isSkipping, onComplete]);

  useEffect(() => {
    const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent || ""
    );
    const isSmallViewport = window.matchMedia("(max-width: 768px)").matches;
    const shouldUseMobile = isMobileUA || isSmallViewport;
    const nextSrc = shouldUseMobile
      ? "/videos/Intromobi.mp4"
      : "/videos/intro.mp4";
    setVideoSrc(nextSrc);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      gsap.to(introRef.current, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [onComplete]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <video ref={videoRef} src={videoSrc} autoPlay muted playsInline />
    </div>
  );
};

export default IntroAnimation;
