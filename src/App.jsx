import AppContext from "./context/AppContext";
import useDatabaseService from "./customHooks/useDatabaseService";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";

function App() {
	// custom hook for CRUD operations with database - Madison
  // fyi: I recently created state management in userContext for user groups - Keino
	const { fetchUserGroups, fetchGroupLocations, fetchUserLocationsInGroup } =
		useDatabaseService();

	return (
		<>
			<AppContext.Provider value={{}}>
				<Router>
					<Routes>
            <Route name="home" path="/" element={<Home />} />
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
