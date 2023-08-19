import { useState } from "react";
import LoginForm from "./LoginForm";
import doubleUpArrow from "../../../assets/doubleUp.svg";
import doubleDownArrow from "../../../assets/DoubleDown.svg"

const Login = () => {
  const [slideUp, setSlideUp] = useState(false);
  const handleSlideUp = () => {
    setSlideUp((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col h-screen overflow-hidden ${
        slideUp ? "bg-lightCoral" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col ${
          slideUp ? "h-0 opacity-0" : "flex-grow"
        } transition-all duration-750 overflow-hidden`}
      >
        <div className="flex justify-center mx-auto overflow-auto w-81 pt-22 pb-22">
          <h1 className="text-[7vh] font-semibold font-quicksand w-68 text-lightCoral">
            Where To
          </h1>
        </div>
        <LoginForm />
      </div>

      <div
        name="slideUpContainer"
        className="flex flex-col items-center justify-center transition-all duration-500 bg-lightCoral"
        onClick={handleSlideUp}
      >
        <img
          src={slideUp? doubleDownArrow: doubleUpArrow}
          alt={slideUp? "DoubleDown" : "Double Up Arrow"}
          className="w-10 mb-4 h-9"
        />
        <p className="text-englishViolet font-quicksand">
          {slideUp? "Already have an account? Slide down":"Don't have an account? Slide up to sign up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
