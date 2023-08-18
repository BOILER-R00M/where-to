import LoginForm from "./LoginForm";
import doubleUpArrow from "../../../assets/doubleUp.svg";

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="mx-auto flex justify-center w-81 pt-22 pb-22 overflow-auto">
        <h1
          style={{ fontSize: "13vw" }}
          className="mx-auto font-quicksand w-68 font-semibold text-lightCoral"
        >
          Where To
        </h1>
      </div>
      <LoginForm />
      <div
        name="slideUpContainer"
        className="flex-grow bg-lightCoral flex flex-col items-center justify-center"
      >
        <img
          src={doubleUpArrow}
          alt="Double Up Arrow"
          className="w-10 h-9 mb-4"
        />
        <p className="text-englishViolet font-quicksand">
          Don't have an account? Slide up to sign up
        </p>
      </div>
    </div>
  );
};

export default Login;

