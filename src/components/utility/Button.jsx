import React from "react";
// NOTE: While this approach may seem more verbose initially, it can lead to less code in the long run as the project grows and the components are reused.

const Button = ({
	children,
	variant = "primary", // Default to primary variant
	type = "submit",
	onClick,
	disabled,
	className,
}) => {
	// Define classes for primary and secondary variants as specified in design doc
	const variantClasses = {
		primary: "bg-tertiary text-primary border-tertiary",
		secondary: "bg-primary text-tertiary border-tertiary",
	};

	// Get the classes for the specified variant (primary by default)
	const variantClass = variantClasses[variant] || variantClasses.primary;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`w-full px-2 py-2 text-lg cursor-pointer rounded-md font-main ${variantClass} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
