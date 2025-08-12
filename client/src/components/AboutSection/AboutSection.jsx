import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// The core information for each "About Us" card.
const sections = [
  {
    title: "Our Mission",
    text: "To provide free career guidance and development opportunities to students from all backgrounds, empowering them to achieve their full potential.",
    image: "https://placehold.co/800x600?text=Mission",
    bg: "from-blue-50 to-white",
  },
  {
    title: "What We Do",
    text: "We offer one-on-one counseling, workshops, and mentorship programs to help students navigate their career paths at zero cost.",
    image: "https://placehold.co/800x600?text=Action",
    bg: "from-green-50 to-white",
  },
  {
    title: "Our Vision",
    text: "A world where every student has the resources and support to build a successful and fulfilling career, regardless of their circumstances.",
    image: "https://placehold.co/800x600?text=Vision",
    bg: "from-yellow-50 to-white",
  },
  {
    title: "Join Us",
    text: "Become part of our community. Whether you are a student seeking guidance or a professional willing to mentor, we welcome you.",
    image: "https://placehold.co/800x600?text=Community",
    bg: "from-purple-50 to-white",
  },
];

export default function AboutSection() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".about-step");

      steps.forEach((step, idx) => {
        const card = step.querySelector(".about-card");
        const pinWrap = step.querySelector(".pin-wrap");
        const isFirst = idx === 0;
        const isLast = idx === steps.length - 1;

        // Set the transform origin to the right edge for the "squeeze" effect
        gsap.set(card, {
          transformOrigin: "right center",
          willChange: "transform",
        });

        // The first card should start in the center, fully visible.
        if (isFirst) {
          gsap.set(card, {
            x: "0vw",
            y: "0vh",
            scale: 1,
            opacity: 1,
          });
        }

        // Create a timeline for each card's animation, controlled by the scroll position.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top top",
            end: isLast ? "+=100%" : "+=200%",
            scrub: true,
            pin: pinWrap,
            anticipatePin: 1,
          },
        });

        if (isFirst) {
          // The first card only needs an "exit" animation.
          tl.to(card, {
            x: "40vw",
            y: "-40vh",
            scaleX: 0.5,
            scaleY: 0.8,
            opacity: 0,
            ease: "power2.in",
            duration: 1,
          });
        } else if (isLast) {
          // The last card only needs an "enter" animation and then stays.
          tl.from(card, {
            x: "40vw",
            y: "40vh",
            scaleX: 0.5,
            scaleY: 0.8,
            opacity: 0,
            ease: "power2.out",
            duration: 1,
          });
        } else {
          // Middle cards have both an "enter" and "exit" animation.
          tl.from(card, {
            x: "40vw",
            y: "40vh",
            scaleX: 0.5,
            scaleY: 0.8,
            opacity: 0,
            ease: "power2.out",
            duration: 0.5,
          }).to(card, {
            x: "40vw",
            y: "-40vh",
            scaleX: 0.5,
            scaleY: 0.8,
            opacity: 0,
            ease: "power2.in",
            duration: 0.5,
          });
        }
      });
    }, rootRef);

    // Cleanup function to revert GSAP animations when the component unmounts.
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative w-full bg-gray-50">
      {sections.map((s, idx) => (
        <section
          key={idx}
          className={`about-step ${
            idx === sections.length - 1 ? "h-[120vh]" : "h-[220vh]"
          } relative bg-gradient-to-b ${s.bg}`}
        >
          <div className="pin-wrap h-screen w-full flex items-center justify-center">
            <div className="about-card w-[80vw] h-[80vh] bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 h-1/3 md:h-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {s.text}
                </p>
                <div className="mt-auto md:mt-4">
                  <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
