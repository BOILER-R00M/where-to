import { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import doubleUpArrow from "../../../assets/doubleUp.svg";
import doubleDownArrow from "../../../assets/DoubleDown.svg";
import bus from "../../../assets/bus.svg";

const Login = () => {
	//TODO:
	//[ ] increase the size of logo when width gets larger
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
			} lg:flex-row`}
		>
			<motion.div
				name="sibling"
				variants={contentVariants}
				initial={slideUp ? "hidden" : "visible"}
				animate={slideUp ? "hidden" : "visible"}
				className="relative flex flex-col overflow-hidden lg:order-1 lg:w-1/2 lg:justify-center lg:items-center"
			>
				<h1 className="hidden text-[8vh] absolute top-10 right-0 font-semibold font-main text-secondary lg:block">
					Where
				</h1>
				<motion.div
					initial={{ opacity: 0, y: 0, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						opacity: { duration: 1, delay: 0.2, ease: "easeInOut" },
						scale: { duration: 1, delay: 0.2, ease: "easeInOut" },
					}}
					exit={{ opacity: 0, y: "100vh", delay: 0 }}
				>
					<img
						src={bus}
						alt="bus"
						className="hidden lg:block lg:mx-auto "
					/>
					<div className="flex justify-center mx-auto overflow-auto w-81 pt-22 pb-22 lg:hidden">
						<h1 className="text-[7vh] font-semibold font-main w-68 text-secondary overflow-auto scrollbar-hidden ">
							Where To
						</h1>
					</div>
				</motion.div>
				<div className="lg:hidden">
					<LoginForm />
				</div>
			</motion.div>

			<div
				name="slideUpContainer"
				className={`relative flex flex-col items-center flex-grow bg-secondary ${
					slideUp ? "justify-start" : "justify-center"
				} lg:order-2 lg:justify-center lg:items-center`}
			>
				<h1 className="hidden text-[8vh] absolute top-10 left-0 font-semibold font-main text-primary lg:block">
					To
				</h1>
				<div className="hidden mx-auto lg:block lg:pb-12">
					<LoginForm />
				</div>
				<img
					src={slideUp ? doubleDownArrow : doubleUpArrow}
					alt={slideUp ? "DoubleDown" : "Double Up Arrow"}
					className="w-10 mb-4 cursor-pointer h-9 lg:hidden"
					onClick={handleSlideUp}
				/>

				<p className="text-tertiary font-main lg:hidden">
					{slideUp
						? "Already have an account? Slide down"
						: "Don't have an account? Slide up to sign up"}
				</p>
				{slideUp ? <SignupForm /> : null}
				<div>
					<span className="hidden lg:inline lg:mr-2 lg:text-primary">
						New to WhereTo?
					</span>
					<div
						// [ ] we need to make this pull up the sign up on click
						className="hidden lg:text-base lg:inline-block lg:text-blue-700 lg:font-main lg:pb-12"
					>
						Create an account
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Login;
