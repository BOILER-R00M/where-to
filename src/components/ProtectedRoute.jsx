import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated }) => {
	const location = useLocation();

	if (isAuthenticated) {
		return element;
	} else {
		return <Navigate to="/login" state={{ from: location }} />;
	}
};

export default ProtectedRoute;
