import AppContext from "./context/AppContext";
import useDatabaseService from "./customHooks/useDatabaseService";
import useAuthService from "./customHooks/useAuthService";

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

	return (
		<>
			<AppContext.Provider value={userGroups}>
				<div className="flex flex-col items-center justify-center border border-black h-screen">
					<h1 className="text-3xl">
						User <strong>{userId}</strong> is a member of these
						groups:
					</h1>
					<ul className="my-4 text-blue-800">
						{userGroups.map((group, i) => (
							<li key={i}>{group.sk}</li>
						))}
					</ul>
					<h1 className="text-3xl">
						Group <strong>{groupId}</strong> has these locations:
					</h1>
					<ul className="my-4 text-blue-800">
						{locations.map((location, i) => (
							<li key={i}>{location.locationName}</li>
						))}
					</ul>
					<h1 className="text-3xl">
						User <strong>{userId}</strong> has been to the following
						locations within Group <strong>{groupId}</strong>
					</h1>
					<ul className="my-4 text-blue-800">
						{userLocations.map((userLocation, i) => (
							<li key={i}>{userLocation.locationName}</li>
						))}
					</ul>
				</div>
			</AppContext.Provider>
		</>
	);
}

export default App;
