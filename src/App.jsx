import AppContext from "./context/AppContext";

import useDatabaseService from "./customHooks/useDatabaseService";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import GroupSpace from "./routes/GroupSpace";
import Login from "./components/pages/login/Login";

function App() {
	// custom hook for CRUD operations with database - Madison
	// fyi: I recently created state management in userContext for user groups - Keino
	const { fetchUserGroups, fetchGroupLocations, fetchUserLocationsInGroup } =
		useDatabaseService();

	// NOTE: Using this user object just to test
	const user = { userName: "MadisonEvans94" };

	return (
		<>
			{/* any state that we want global access to, create it at the app level and stick it in the `value` object of the Provider */}
			<AppContext.Provider value={{ user }}>
				<Router>
					<Routes>
						{/* Home Route */}
						<Route name="home" path="/" element={<Home />} />

						{/* Dashboard Route */}
						<Route name="login" path="/login" element={<Login />} />
						<Route
							// using path parameters here. for testing purposes, visit "/dashboard/0001"
							name="dashboard"
							path="/dashboard/:userId"
							element={<Dashboard />}
						/>

						{/* GroupSpace Route */}
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
