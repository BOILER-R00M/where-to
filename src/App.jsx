import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import GroupSpace from "./routes/GroupSpace";
import Login from "./components/pages/login/Login";
import { useState } from "react";
import useAuthorization from "./customHooks/useAuthService";
import ProtectedRoute from "./components/ProtectedRoute"; // <-- Import ProtectedRoute

function App() {
	const [user, setUser] = useState(null);

	const { isAuthenticated, userData } = useAuthorization();

	console.log("isAuthenticated", isAuthenticated, "userData", userData);

	return (
		<>
			<AppContext.Provider value={{ user, setUser }}>
				<Router>
					<Routes>
						<Route name="home" path="/" element={<Home />} />
						<Route name="login" path="/login" element={<Login />} />

						{/* Protected Routes */}
						<Route
							name="dashboard"
							path="/dashboard/:userId"
							element={<Dashboard />}
						/>
						<Route
							name="groupspace"
							path="/groupspace/:groupId"
							element={<GroupSpace />}
						/>
					</Routes>
				</Router>
			</AppContext.Provider>
		</>
	);
}

export default App;
