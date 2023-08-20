import { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import doubleUpArrow from "../../../assets/doubleUp.svg";
import doubleDownArrow from "../../../assets/DoubleDown.svg";

const Login = () => {
	const [slideUp, setSlideUp] = useState(false);
	const handleSlideUp = () => {
		setSlideUp((prev) => !prev);
	};

	const contentVariants = {
		hidden: {
			height: "0%",
			opacity: 0,
		},
		visible: {
			height: "auto",
			opacity: 1,

			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			className={`flex flex-col h-screen overflow-hidden ${
				slideUp ? "" : "bg-primary"
			}`}
		>
			<motion.div
				variants={contentVariants}
				initial={slideUp ? "hidden" : "visible"}
				animate={slideUp ? "hidden" : "visible"}
				className="flex flex-col overflow-hidden"
			>
				<motion.div
					initial={{ opacity: 0, y: 0, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						opacity: { duration: 1, delay: 0.2, ease: "easeInOut" },
						scale: { duration: 1, delay: 0.2, ease: "easeInOut" },
					}}
					exit={{ opacity: 0, y: "100vh", delay: 0 }}
				>
					<div className="flex justify-center mx-auto overflow-auto w-81 pt-22 pb-22">
						<h1 className="text-[7vh] font-semibold font-main w-68 text-secondary overflow-auto scrollbar-hidden">
							Where To
						</h1>
					</div>
				</motion.div>
				<LoginForm />
			</motion.div>

			<div
				name="slideUpContainer"
				className={`flex flex-col items-center flex-grow bg-secondary ${
					slideUp ? "justify-start" : "justify-center"
				}`}
				onClick={handleSlideUp}
			>
				<img
					src={slideUp ? doubleDownArrow : doubleUpArrow}
					alt={slideUp ? "DoubleDown" : "Double Up Arrow"}
					className="w-10 mb-4 h-9 cursor-pointer"
				/>
				<p className="text-tertiary font-main">
					{slideUp
						? "Already have an account? Slide down"
						: "Don't have an account? Slide up to sign up"}
				</p>
				<SignupForm />
			</div>
		</motion.div>
	);
};

export default Login;
