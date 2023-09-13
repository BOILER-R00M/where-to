import React from "react";

// wrapper for the paragraph element for clean code and reusability
const Paragraph = ({ children, className }) => {
	return <p className={`${className} text-md`}>{children}</p>;
};

export default Paragraph;
