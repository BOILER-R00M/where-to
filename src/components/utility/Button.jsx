import React from "react";

const Button = ({
	children,
	className,
	type = "submit",
	onClick,
	disabled,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`w-full px-2 py-2 text-lg text-primary cursor-pointer rounded-md font-main bg-tertiary ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
