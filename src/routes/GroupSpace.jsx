import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import Map from "../components/pages/groupspace/Map";
import addLocationIcon from "../assets/addLocationIcon.svg";
import LocationList from "../components/pages/groupspace/LocationList";
import UserList from "../components/pages/groupspace/UserList";
import { useQuery } from "react-query";

const GroupSpace = () => {
	const { fetchGroupLocations, fetchUsersInGroup } = useDatabaseService();
	const { groupId } = useParams();
	const [locations, setLocations] = useState(null);
	const [usersInGroup, setUsersInGroup] = useState(null);
	const [highlightedUserLocations, setHighlightedUserLocations] =
		useState(null);

	//##########################
	//useQuery

	const {data: users} = useQuery({
		queryFn: () => fetchUsersInGroup(groupId),
		queryKey: "queryKey"
	})




	//useQuery
	//##########################

	useEffect(() => {
		const fetchData = async () => {
			try {
				const usersInGroup = await fetchUsersInGroup(groupId);
				const locations = await fetchGroupLocations(groupId);
				setUsersInGroup(usersInGroup);
				setLocations(locations);
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
			{usersInGroup && (
				<UserList
					users={usersInGroup}
					groupId={groupId}
					setHighlightedUserLocations={setHighlightedUserLocations}
				/>
			)}
			<div className="flex relative flex-col items-center justify-center bg-gray-300 h-full lg:h-auto">
				<div className="cursor-pointer absolute border z-50 left-0 mx-3 top-0 mt-36 p-2 rounded bg-primary hover:bg-secondary transition">
					<img
						src={addLocationIcon}
						alt="location"
						className="w-10"
					/>
				</div>
				<Map
					locations={locations} 
					highlightedUserLocations={highlightedUserLocations}
				/>
			</div>
		</div>
	);
};

export default GroupSpace;
