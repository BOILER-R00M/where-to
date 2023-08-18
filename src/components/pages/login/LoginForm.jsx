import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div
      name="login_form_container"
      className="mx-auto w-81 pb-[5vh] maxPro:pb-[25vh]"
    >
      <form className="mx-auto">
        <h2
          style={{ fontSize: "8vw" }}
          className="text-center text-lightCoral font-semibold py-3 font-quicksand"
        >
          Login
        </h2>

        <div className="py-3">
          <input
            className="border border-black rounded-md py-2 w-full px-3 text-lg font-quicksand"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="py-3">
          <input
            className="border border-black rounded-md w-full py-2 px-3 text-lg font-quicksand"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="py-3">
          <input
            type="submit"
            value="Login"
            className="font-quicksand text-white py-2 px-2 text-lg bg-englishViolet rounded-md w-full"
          />
        </div>
      </form>

      <Link
        className=" underline text-lightCoral text-base text-center block font-quicksand"
        to="/"
      >
        Forgot Password?
      </Link>
    </div>
  );
};

export default LoginForm;
