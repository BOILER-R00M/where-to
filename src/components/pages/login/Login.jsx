import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavLink from "../../utility/NavLink";
import LoginForm from "./LoginForm";
import bus from "../../../assets/bus.svg";
import MobileSignUp from "./MobileSignUp";
import DesktopLogin from "./DesktopLogin";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Login = () => {
  const [slideUp, setSlideUp] = useState(false);
  const handleSlideUp = () => {
    setSlideUp((prev) => !prev);
  };

  const contentVariants = {
    hidden: {
      height: "0%",
      opacity: 0,
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const { width } = useWindowSize();
  const isLargeScreen = width > 1024;

  return (
    <motion.div
      className={`flex flex-col h-screen overflow-hidden ${
        slideUp ? "" : "bg-primary"
      } lg:flex-row`}
    >
      <motion.div
        name="sibling"
        variants={contentVariants}
        initial={!isLargeScreen && (slideUp ? "hidden" : "visible")}
        animate={!isLargeScreen && (slideUp ? "hidden" : "visible")}
        className="relative flex flex-col overflow-hidden lg:order-1 lg:w-1/2 lg:justify-center lg:items-center"
      >
        <h1 className="hidden text-[8vh] absolute top-10 right-0 font-semibold font-main text-secondary lg:block">
          Where
        </h1>
        <motion.div
          initial={!isLargeScreen && { opacity: 0, y: 0, scale: 0.8 }}
          animate={!isLargeScreen && { opacity: 1, y: 0, scale: 1 }}
          transition={{
            opacity: { duration: 1, delay: 0.2, ease: "easeInOut" },
            scale: { duration: 1, delay: 0.2, ease: "easeInOut" },
          }}
          exit={!isLargeScreen && { opacity: 0, y: "100vh", delay: 0 }}
        >
          <img src={bus} alt="bus" className="hidden lg:block lg:mx-auto " />
          <div className="flex justify-center mx-auto overflow-auto w-81 pt-22 pb-22 lg:hidden">
            <h1 className="text-[7vh] font-semibold font-main w-68 text-secondary overflow-auto scrollbar-hidden ">
              Where To
            </h1>
          </div>
        </motion.div>
        <div className="lg:hidden">
          <LoginForm />
        </div>
      </motion.div>
      <DesktopLogin handleSlideUp={handleSlideUp} slideUp={slideUp} />
      <MobileSignUp slideUp={slideUp} handleSlideUp={handleSlideUp} />
    </motion.div>
  );
};

export default Login;

