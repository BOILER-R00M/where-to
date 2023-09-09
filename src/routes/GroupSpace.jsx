import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import Map from "../components/pages/groupspace/Map";
import addLocationIcon from "../assets/addLocationIcon.svg";
import LocationList from "../components/pages/groupspace/LocationList";
import UserList from "../components/pages/groupspace/UserList";

// TODO:
// [x] change how the page layout looks on mobile
// [x] Add state that allows map component to hold locations via lat/lng metadata
// [x] render the locations on the map with a  pin or dot or some other kind of indicator
// [x] refactor sub components into their own files
// [x] add search bar to location list
// [x] add an "Add Location" action button
// [x] make the number that appears in UserLists dynamic
// [x] users list widget. Create fully with the extended dropdown functionality
// [ ] create a form modal for the add location functionality
// [ ] add filtering functionality to Locations search bar
// [ ] add filtering functionality to UserList search bar
// [ ] when user clicks on location from the side bar, it should move to that location
// [ ] hide the scroll bar on side of page

const GroupSpace = () => {
	const { fetchGroupLocations, fetchUsersInGroup } = useDatabaseService();
	const { groupId } = useParams();
	const [locations, setLocations] = useState(null);
	const [usersInGroup, setUsersInGroup] = useState(null);
	console.log("LOCATIONS: ", locations);
	console.log("usersInGroup", usersInGroup);
	console.log("groupId", groupId);
	useEffect(() => {
		setLocations(fetchGroupLocations(groupId));
		const fetchData = async () => {
			try {
				const usersInGroup = await fetchUsersInGroup(groupId);
				setUsersInGroup(usersInGroup);
			} catch (error) {
				console.error(
					"There was a problem with the fetch operation:",
					error
				);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="h-screen lg:grid lg:grid-cols-[300px,5fr]  bg-primary relative">
			<LocationList locations={locations} />
			{usersInGroup && <UserList users={usersInGroup} />}
			<div className="flex relative flex-col items-center justify-center bg-gray-300 h-full lg:h-auto">
				<div className="cursor-pointer absolute border z-50 left-0 mx-3 top-0 mt-36 p-2 rounded bg-primary hover:bg-secondary transition">
					<img
						src={addLocationIcon}
						alt="location"
						className="w-10"
					/>
				</div>
				<Map locations={locations} />
			</div>
		</div>
	);
};

export default GroupSpace;
