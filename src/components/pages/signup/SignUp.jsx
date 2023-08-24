import { motion } from "framer-motion";

import SignUpForm from "./SignupForm.jsx";

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="hidden bg-primary"></div>
      <div className="flex flex-grow bg-secondary">
        <h1>Create Account</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
