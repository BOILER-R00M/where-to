import { motion } from "framer-motion";




const SignUpForm = () => {
  const signUpVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  return (
    <motion.div
      className=" 
      mx-auto w-81 pb-[5vh] 
      iphoneXr:pb-[19vh] 
      maxPro:pb-[25vh]"
      initial="hidden"
      animate="visible"
      variants={signUpVariant}
    >
      <form className="mx-auto">
        <h2 className="text-[4vh] py-3 font-semibold text-center font-quicksand">
          Create Account
        </h2>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-quicksand"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-quicksand"
            type="text"
            placeholder="Username"
            required
          />
        </div>
        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-quicksand"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-quicksand"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="py-3">
          <input
            type="submit"
            value="Create Account"
            className="w-full px-2 py-2 text-lg text-white rounded-md font-quicksand bg-englishViolet"
          />
        </div>
      </form>
    </motion.div>
  );
};

export default SignUpForm;
