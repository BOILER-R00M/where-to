import React from "react";

// wrapper for the paragraph element for clean code and reusability
const Paragraph = ({ children, className }) => {
	return <p className={`${className}`}>{children}</p>;
};

export default Paragraph;
