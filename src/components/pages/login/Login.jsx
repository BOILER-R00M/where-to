import LoginForm from "./LoginForm";
import doubleUpArrow from "../../../assets/doubleUp.svg";

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center mx-auto overflow-auto w-81 pt-22 pb-22">
        <h1 className="text-[7vh] font-semibold font-quicksand w-68 text-lightCoral">
          Where To
        </h1>
      </div>
      <LoginForm />
      <div
        name="slideUpContainer"
        className="flex flex-col items-center justify-center flex-grow bg-lightCoral"
      >
        <img
          src={doubleUpArrow}
          alt="Double Up Arrow"
          className="w-10 mb-4 h-9"
        />
        <p className="text-englishViolet font-quicksand">
          Don't have an account? Slide up to sign up
        </p>
      </div>
    </div>
  );
};

export default Login;
