import { Link } from "react-router-dom";
import Button from "../../utility/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import UserPool from "../../../AWS/auth/UserPool";

// TODO:
// [ ] need callback logic to render a form where we can submit verification code
// [ ] implement sign out link
// [ ] implement conditional rendering of confirmation page based on http response status

const SignUpForm = () => {
	const [userOjb, setUserOjb] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		email: "",
	});

	const [isRegistrationPending, setIsRegistrationPending] = useState(false);
	const [confirmationCode, setConfirmationCode] = useState(null);

	const attributes = [
		{ Name: "email", Value: userOjb.email },
		{ Name: "name", Value: `${userOjb.lastName}, ${userOjb.firstName}` },
		// Add other attributes as needed
	];
	const handleConfirmationCode = (e) => {
		setConfirmationCode((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleUserObj = (e) => {
		setUserOjb((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const submitUserDetails = (e) => {
		e.preventDefault();
		UserPool.signUp(
			userOjb.username,
			userOjb.password,
			attributes,
			null,
			(err, data) => {
				if (err) {
					console.log(err);
				}
				console.log(data);
				setIsRegistrationPending(true);
			}
		);
	};

	const submitConfirmationCode = (e) => {
		e.preventDefault();
		console.log("submitting confirmation code");
	};

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
			{isRegistrationPending ? (
				<form className="mx-auto" onSubmit={submitConfirmationCode}>
					<h2 className="text-[4vh] py-3 font-semibold text-center text-secondary font-main">
						Enter Confirmation Code
					</h2>
					<div className="py-3">
						<input
							className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
							type="text"
							placeholder="Confirmation Code "
							name="confirmationCode"
							value={confirmationCode}
							onChange={handleConfirmationCode}
							required
						/>
					</div>
					<div className="py-3">
						<Button>Submit</Button>
					</div>
				</form>
			) : (
				<Registration
					onSubmit={submitUserDetails}
					userOjb={userOjb}
					handleUserObj={handleUserObj}
				/>
			)}

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

function Registration({ onSubmit, userOjb, handleUserObj }) {
	return (
		<form className="mx-auto" onSubmit={onSubmit}>
			<h2 className="text-[4vh] py-3 font-semibold text-center text-secondary font-main">
				Sign Up
			</h2>

			<div className="py-3">
				<input
					className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
					type="text"
					placeholder="First Name"
					name="firstName"
					value={userOjb.firstName}
					onChange={handleUserObj}
					required
				/>
			</div>

			<div className="py-3">
				<input
					className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
					type="text"
					placeholder="Last Name"
					name="lastName"
					value={userOjb.lastName}
					onChange={handleUserObj}
					required
				/>
			</div>

			<div className="py-3">
				<input
					className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
					type="text"
					placeholder="Username"
					name="username"
					value={userOjb.username}
					onChange={handleUserObj}
					required
				/>
			</div>

			<div className="py-3">
				<input
					className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
					type="email"
					placeholder="Email"
					name="email"
					value={userOjb.email}
					onChange={handleUserObj}
					required
				/>
			</div>

			<div className="py-3">
				<input
					className="w-full px-3 py-2 text-lg border border-black rounded-md text-tertiary font-main"
					type="password"
					placeholder="Password"
					name="password"
					value={userOjb.password}
					onChange={handleUserObj}
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
	);
}
