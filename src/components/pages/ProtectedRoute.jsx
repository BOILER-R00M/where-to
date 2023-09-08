import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({
	isAuthenticated,
	redirectPath = "/login",
	children,
}) => {
	if (!isAuthenticated) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};

export default ProtectedRoute;
