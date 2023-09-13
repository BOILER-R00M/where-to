import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm.jsx";

const DesktopLogin = ({ handleSlideUp, slideUp }) => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:order-2 lg:bg-secondary lg:flex-grow">
      <h1 className="hidden text-[8vh] absolute top-10 left-0 font-semibold font-main text-primary lg:block">
        To
      </h1>
      {slideUp ? (
        <div className="hidden mx-auto lg:block lg:pb-12">
          <SignupForm />
        </div>
      ) : (
        <div className="hidden mx-auto lg:block lg:pb-12">
          <LoginForm />
        </div>
      )}

      
      <div className="flex flex-col items-center justify-center hidden lg:block">
        <span className="lg:inline lg:mr-2 lg:text-primary">
          {slideUp ? "Already have an account?" : "New to WhereTo?"}
        </span>
        <p
          onClick={handleSlideUp}
          className="lg:text-base lg:inline-block lg:text-blue-700 lg:font-main lg:pb-12"
        >
          {slideUp? "Login": "Create an account"}
        </p>
      </div>
    </div>
  );
};

export default DesktopLogin;
