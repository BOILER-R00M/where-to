import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import or from "../../../assets/or.svg";
import { useState } from "react";
import Button from "../../utility/Button";
import useAuthorization from "../../../customHooks/useAuthService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { authenticate } = useAuthorization(); // De-structure the 'authenticate' method from custom hook
	const navigate = useNavigate();
	const { setUser } = useContext(AppContext);
	const onLogin = async (event) => {
		event.preventDefault();
		try {
			const authResult = await authenticate(email, password);
			console.log("Authentication successful:", authResult);
			setUser({
				username: authResult.accessToken.payload.username,
				userId: authResult.accessToken.payload.sub,
			});
			navigate(`/dashboard/${authResult.accessToken.payload.sub}`);
		} catch (error) {
			console.log("Authentication failed:", error);
		}
	};
	return (
		<div
			name="login_form_container"
			className="max-w-[600px] mx-auto w-81 pb-[5vh] samsungS8:pb-60 iphoneXr:pb-60 sm:pb-10  md:pb-64 lg:w-[25vw] lg:pb-0 "
		>
			<form className="mx-auto" onSubmit={onLogin}>
				<h2 className="text-[4vh] py-2 font-semibold text-center text-secondary font-main lg:hidden">
					Login
				</h2>
				<h2 className="text-[2.25rem]  py-2 font-semibold text-center text-primary font-main">
					Welcome Back
				</h2>

				<div className="py-3 w-full">
					<input
						className="w-full p-2 text-lg font-main rounded text-tertiary"
						// type="email" commenting this out until we fix the email issue with cognito login
						placeholder="Email"
						value={email} // Linking to state
						onChange={(e) => setEmail(e.target.value)} // Updating state
						required
					/>
				</div>

				<div className="py-3">
					<input
						className="w-full p-2 rounded"
						type="password"
						placeholder="Password"
						value={password} // Linking to state
						onChange={(e) => setPassword(e.target.value)} // Updating state
						required
					/>
				</div>

				<Button>Login</Button>
			</form>

			<Link
				className="block text-base text-center underline text-primary font-main "
				to="/"
			>
				Forgot Password?
			</Link>
			<img
				className="hidden mx-auto lg:block lg:pt-12"
				src={or}
				alt="or"
			/>
		</div>
	);
};

export default LoginForm;
