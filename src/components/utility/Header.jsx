import React from "react";

// wrapper for the header element for clean code and reusability
const Header = ({ children, className }) => {
	return <h1 className={`${className} text-3xl font-main`}>{children}</h1>;
};

export default Header;
