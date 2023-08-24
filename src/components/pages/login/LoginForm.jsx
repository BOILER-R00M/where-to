import { Link } from "react-router-dom";
import Button from "../../utility/Button";

// TODO:
// [ ] place a dummy callback function for now for the login button. Will later stick the Cognito fetch function there

const LoginForm = () => {
	return (
		<div
			name="login_form_container"
			className="max-w-[600px] mx-auto w-81 pb-[5vh] samsungS8:pb-60 iphoneXr:pb-60 sm:pb-10  md:pb-64 lg:w-[25vw] "
		>
			<form className="mx-auto ">
				<h2 className="text-[4vh] py-2 font-semibold text-center text-secondary font-main lg:hidden">
					Login
				</h2>
				<h2 className="text-[4vh] py-2 font-semibold text-center text-primary font-main">
					Welcome Back
				</h2>

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
					<Button>Login</Button>
				</div>
			</form>

			<Link
				className="block text-base text-center underline text-primary font-main"
				to="/"
			>
				Forgot Password?
			</Link>
		</div>
	);
};

export default LoginForm;
