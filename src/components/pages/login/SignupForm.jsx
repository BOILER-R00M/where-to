import { Link } from "react-router-dom";
import Button from "../../utility/Button";
import { motion } from "framer-motion";

// TODO:
// [ ] place a dummy callback function for now for the login button. Will later stick the Cognito fetch function there



const SignUpForm = () => {

  const signUpVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      name="signup_form_container"
      className="max-w-[600px] mx-auto w-81 pb-[5vh] sm:pb-10 md:pb-64"
      initial="hidden"
      animate="visible"
      variants={signUpVariant}
    >
      <form className="mx-auto">
        <h2 className="text-[4vh] py-3 font-semibold text-center text-secondary font-main">
          Sign Up
        </h2>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
            type="text"
            placeholder="First Name"
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md text-tertiary font-main"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md text-tertiary font-main"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>
        

        <div className="py-3">
          <Button>Sign Up</Button>
        </div>
      </form>

      <Link
        className="block text-base text-center underline text-secondary font-main"
        to="/login"
      >
        Already have an account? Login
      </Link>
    </motion.div>
  );
};

export default SignUpForm;
