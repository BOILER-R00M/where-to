import { Link } from "react-router-dom";
const LoginForm = () => {
	return (
		<div
			name="login_form_container"
			className=" mx-auto w-81 pb-[5vh] sm:pb-[19vh] md:pb-[25vh]"
		>
			<form className="mx-auto">
				<h2 className="text-[4vh] py-3 font-semibold text-center text-secondary font-main">
					Login
				</h2>

				<div className="py-3">
					<input
						className="w-full px-3 py-2 text-lg border border-black rounded-md font-main"
						type="email"
						placeholder="Email"
						required
					/>
				</div>

				<div className="py-3">
					<input
						className="w-full px-3 py-2 text-lg border border-black rounded-md font-main"
						type="password"
						placeholder="Password"
						required
					/>
				</div>

				<div className="py-3">
					<input
						type="submit"
						value="Login"
						className="w-full px-2 py-2 text-lg text-white cursor-pointer rounded-md font-main bg-tertiary text-primary"
					/>
				</div>
			</form>

			<Link
				className="block text-base text-center underline text-secondary font-main"
				to="/"
			>
				Forgot Password?
			</Link>
		</div>
	);
};

export default LoginForm;
