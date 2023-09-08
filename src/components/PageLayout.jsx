import React from "react";
import NavBar from "./ui/NavBar";

const MainLayout = ({ children, userName }) => {
	return (
		<>
			<NavBar userName="test user" />
			<main>{children}</main>
		</>
	);
};

export default MainLayout;
