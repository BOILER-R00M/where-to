import NavLink from "../../utility/NavLink.jsx";
import Button from "../../utility/Button";
import or from "../../../assets/or.svg";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { useState } from "react";
import UserPool from "../../../AWS/auth/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAccessToken } = useContext(AppContext);
	const onLogin = (event) => {
		event.preventDefault();

		const authenticationData = {
			Username: email,
			Password: password,
		};

		const authenticationDetails = new AuthenticationDetails(
			authenticationData
		);

		const userData = {
			Username: email,
			Pool: UserPool,
		};

		const cognitoUser = new CognitoUser(userData);

		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: function (result) {
				setAccessToken(result?.accessToken.jwtToken);
			},
			onFailure: function (err) {
				console.log("Authentication failed", err);
			},
			newPasswordRequired: function (userAttributes, requiredAttributes) {
				// User needs to set a new password
				console.log("New password required");
			},
		});
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
				<h2 className="text-[2.25rem]  py-2 font-semibold text-center text-primary font-main">
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

				<div onClick={onLogin} className="py-3">
					{/* <Button>Login</Button> */}
					Login
				</div>
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
