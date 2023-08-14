import AppContext from "./context/AppContext";
import useDatabaseService from "./customHooks/useDatabaseService";
// import useAuthService from "./customHooks/useAuthService";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
function App() {
	// custom hook for CRUD operations with database
	const { fetchUserGroups, fetchGroupLocations, fetchUserLocationsInGroup } =
		useDatabaseService();

	const userId = "0001";
	const groupId = "001";

	// return values from database
	const userGroups = fetchUserGroups(userId);
	const locations = fetchGroupLocations(groupId);
	const userLocations = fetchUserLocationsInGroup(groupId, userId);

	// logging for test purposes
	console.log(
		"UserGroups: ",
		userGroups,
		"\nLocations: ",
		locations,
		"\nUserLocations: ",
		userLocations,
		"\n"
	);

	return (
		<>
			<AppContext.Provider value={userGroups}>
				<Router>
					<Routes>
						<Route
							// using path parameters here. for testing purposes, visit "/dashboard/0001"
							path="/dashboard/:userId"
							element={<Dashboard />}
						/>
					</Routes>
				</Router>
			</AppContext.Provider>
		</>
	);
}

export default App;
