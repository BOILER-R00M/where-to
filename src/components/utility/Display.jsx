import React from "react";

// wrapper for the header element for clean code and reusability
const Display = ({ children, className }) => {
	return <h1 className={`${className} text-6xl`}>{children}</h1>;
};

export default Display;
