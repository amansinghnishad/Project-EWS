import React from "react";
import { motion } from "framer-motion";

const IntroNavbar = ({ onSkip }) => {
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 z-[60] bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-24">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-5xl text-white font-medieval-sharp"
                style={{
                  fontFamily: "'MedievalSharp', cursive",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                EWS
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute top-4 right-4 z-[60]"
      >
        <button
          onClick={onSkip}
          className="px-4 py-2 text-white bg-black bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors"
        >
          Skip
        </button>
      </motion.div>
    </>
  );
};

export default IntroNavbar;
