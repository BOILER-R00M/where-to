import React from "react";

const Header = ({ children, className }) => {
	return <h1 className={`${className}`}>{children}</h1>;
};

export default Header;
