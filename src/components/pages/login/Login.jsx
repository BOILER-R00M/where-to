import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavLink from "../../utility/NavLink";
import LoginForm from "./LoginForm";
import bus from "../../../assets/bus.svg";
import MobileSignUp from "./MobileSignUp";
import DesktopLogin from "./DesktopLogin";



const Login = () => {
  const [slideUp, setSlideUp] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(true)
  const handleSlideUp = () => {
    setSlideUp((prev) => !prev)
    setIsAbsolute((prev) => !prev)
  };



  return (
    <div
      className={`flex flex-col h-screen overflow-hidden ${slideUp ? "" : "bg-primary"} lg:flex-row`}
    >
      <div
        name="sibling"
        className="relative flex flex-col overflow-hidden lg:order-1 lg:w-1/2 lg:justify-center lg:items-center"
      >
        <h1 className="hidden text-[8vh] absolute top-10 right-0 font-semibold font-main text-secondary lg:block">
          Where
        </h1>
        
        <div >
          <img src={bus} alt="bus" className="hidden lg:block lg:mx-auto" />
          <div className="flex justify-center mx-auto overflow-auto w-81 pt-22 pb-22 lg:hidden">
            <h1 className="text-[7vh] font-semibold font-main w-68 text-secondary overflow-auto scrollbar-hidden ">
              Where To
            </h1>
          </div>
        </div>
        <div className="lg:hidden">
          <LoginForm />
        </div>
      </div>
      <DesktopLogin handleSlideUp={handleSlideUp} slideUp={slideUp} />
      <MobileSignUp slideUp={slideUp} handleSlideUp={handleSlideUp} isAbsolute={isAbsolute}/>
    </div>
  );
};

export default Login;





