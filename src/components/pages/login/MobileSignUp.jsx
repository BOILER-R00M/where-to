import { motion } from 'framer-motion';
import Arrows from "../../utility/Arrows";
import LoginForm from "./LoginForm";
import SignupForm from "../signup/SignupForm.jsx";

const MobileSignUp = ({ slideUp, handleSlideUp }) => {

  const slideVariants = {
    up: { height: '100%' },   // full height
    down: { height: '20%' }   // reduced height (or whatever initial height you want)
  };

  return (
    <motion.div
      name="slideUpContainer"
      className={`relative flex flex-col items-center flex-grow bg-secondary ${
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

export default MobileSignUp;