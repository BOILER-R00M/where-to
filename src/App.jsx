import AppContext from "./context/AppContext";
import useDatabaseService from "./customHooks/useDatabaseService";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";

function App() {
	// custom hook for CRUD operations with database. see "src/seedData/notes.md" for more info
	const { fetchUserGroups, fetchGroupLocations, fetchUserLocationsInGroup } =
		useDatabaseService();

	return (
		<>
			{/* any state that we want global access to, create it at the app level and stick it in the `value` object of the Provider */}
			<AppContext.Provider value={{}}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
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
