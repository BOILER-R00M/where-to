import { useState } from 'react';
import { motion } from 'framer-motion';
import Arrows from "../../utility/Arrows";
import SignupForm from "../signup/SignUpForm.jsx";

const MobileSignUp = ({ slideUp, handleSlideUp,isAbsolute }) => {


  const slideVariants = {
    up: { top: '0%', height: '100%' },   // positioned at the very top and takes full height
    down: { top: '80%', height: '20%' }   // starts from 80% of the viewport to the bottom, taking up 20% height
  };

  return (
    <motion.div
      name="slideUpContainer"
      className={`${isAbsolute ? "" : "absolute"} w-full bottom-0 flex flex-col items-center bg-secondary ${
        slideUp ? "justify-start" : "justify-center"
      } lg:hidden`}
      variants={slideVariants}
      initial="down"
      animate={slideUp ? "up" : "down"}
      transition={{ type: "spring", stiffness: 75, damping: 20 }}
    >
      <Arrows slideUp={slideUp} handleSlideUp={handleSlideUp} />
      <p className="text-tertiary font-main lg:hidden">
        {slideUp
          ? "Already have an account? Slide down"
          : "Don't have an account? Slide up to sign up"}
      </p>
      {slideUp ? <SignupForm /> : null}
    </motion.div>
  );
};

export default MobileSignUp