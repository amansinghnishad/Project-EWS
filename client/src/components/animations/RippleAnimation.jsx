import React from "react";
import { motion } from "framer-motion";

const rippleVariants = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const RippleAnimation = () => {
  return (
    <motion.div
      className="absolute inset-0 z-40 bg-white"
      variants={rippleVariants}
      initial="initial"
      animate="animate"
    />
  );
};

export default RippleAnimation;
