import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div
      name="login_form_container"
      className=" 
      mx-auto w-81 pb-[5vh] 
      iphoneXr:pb-[19vh] 
      maxPro:pb-[25vh]"
    >
      
      <form className="mx-auto">
        <h2
         
          className="text-[4vh] py-3 font-semibold text-center text-lightCoral font-quicksand"
        >
          Login
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
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="py-3">
          <input
            type="submit"
            value="Login"
            className="w-full px-2 py-2 text-lg text-white rounded-md font-quicksand bg-englishViolet"
          />
        </div>
      </form>

      <Link
        className="block text-base text-center underline text-lightCoral font-quicksand"
        to="/"
      >
        Forgot Password?
      </Link>
    </div>
  );
};

export default LoginForm;
