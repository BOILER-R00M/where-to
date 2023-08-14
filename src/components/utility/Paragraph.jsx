import React from "react";

const Paragraph = ({ children, className }) => {
	return <p className={`${className}`}>{children}</p>;
};

export default Paragraph;
