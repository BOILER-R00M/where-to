import NavLink from "../../utility/NavLink.jsx";
import Button from "../../utility/Button";
import or from "../../../assets/or.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthorization from "../../../customHooks/useAuthService";
import { useNavigate } from "react-router-dom";

// TODO:
// [ ] place a dummy callback function for now for the login button. Will later stick the Cognito fetch function there
// [ ] increase size of the Welcome Back when width increase.

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate, userData } = useAuthorization(); // De-structure the 'authenticate' method from custom hook
  const navigate = useNavigate();
  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const authResult = await authenticate(email, password);
      console.log("Authentication successful:", authResult);
      navigate(`/dashboard/${authResult.accessToken.payload["sub"]}`);
    } catch (error) {
      console.log("Authentication failed:", error);
    }
  };
  return (
    <div
      name="login_form_container"
      className="max-w-[600px] mx-auto w-81 pb-[5vh] samsungS8:pb-60 iphoneXr:pb-60 sm:pb-10  md:pb-64 lg:w-[25vw] lg:pb-0 "
    >
      <form className="mx-auto ">
        <h2 className="text-[4vh] py-2 font-semibold text-center text-secondary font-main lg:hidden">
          Login
        </h2>
        <h2 className="hidden lg:block text-[2.25rem]  py-2 font-semibold text-center text-primary font-main">
          Welcome Back
        </h2>

        <div className="py-3">
          <input
            type="email"
						placeholder="Email"
						value={email} // Linking to state
						onChange={(e) => setEmail(e.target.value)} // Updating state
						required
          />
        </div>

        <div className="py-3">
          <input
            type="password"
						placeholder="Password"
						value={password} // Linking to state
						onChange={(e) => setPassword(e.target.value)} // Updating state
						required
          />
        </div>

        <Button className="my-2" onClick={onLogin}>
					Login
				</Button>
      </form>
      <NavLink
        tailwind={
          "text-secondary block text-base text-center underline lg:text-primary font-main"
        }
        textContent="Forgot Password?"
      />
      <img className="hidden mx-auto lg:block lg:pt-12" src={or} alt="or" />
    </div>
  );
};

export default LoginForm;
