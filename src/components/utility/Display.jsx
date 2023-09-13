import React from "react";

// wrapper for the header element for clean code and reusability
const Display = ({ children, className }) => {
	return (
		<h1 className={`${className} text-6xl font-main font-bold`}>
			{children}
		</h1>
	);
};

export default Display;
