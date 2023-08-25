import Arrows from "../../utility/Arrows";
import LoginForm from "./LoginForm";
import SignupForm from "../signup/SignupForm.jsx";

const MobileSignUp = ({ slideUp, handleSlideUp }) => {
  return (
    
      <div
        name="slideUpContainer"
        className={`relative flex flex-col items-center flex-grow bg-secondary ${
          slideUp ? "justify-start" : "justify-center"
        } lg:hidden`}
      >
        

        <Arrows slideUp={slideUp} handleSlideUp={handleSlideUp} />
        <p className="text-tertiary font-main lg:hidden">
          {slideUp
            ? "Already have an account? Slide down"
            : "Don't have an account? Slide up to sign up"}
        </p>
        {slideUp ? <SignupForm /> : null}
      </div>
   
  );
};

export default MobileSignUp;
