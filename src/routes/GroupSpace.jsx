import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import Map from "../components/pages/groupspace/Map";
import addLocationIcon from "../assets/addLocationIcon.svg";
import LocationList from "../components/pages/groupspace/LocationList";
import UserList from "../components/pages/groupspace/UserList";
import { useQuery } from "react-query";
import Button from "../components/utility/Button";
const GroupSpace = () => {
	const { fetchGroupLocations, fetchUsersInGroup } = useDatabaseService();
	const { groupId } = useParams();
	const [locations, setLocations] = useState(null);
	const [usersInGroup, setUsersInGroup] = useState(null);
	const [highlightedUserLocations, setHighlightedUserLocations] =
		useState(null);
	const clickedLocation = null;
	const [showAddLocationModal, setShowAddLocationModal] = useState(true);

	const toggleLocationModal = () => setShowAddLocationModal((prev) => !prev);
	//##########################
	//useQuery

	const { data: users } = useQuery({
		queryFn: () => fetchUsersInGroup(groupId),
		queryKey: "queryKey",
	});

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
				<div
					onClick={toggleLocationModal}
					className="cursor-pointer absolute border z-50 left-0 mx-3 top-0 mt-36 p-2 rounded bg-primary hover:bg-secondary transition"
				>
					<img
						src={addLocationIcon}
						alt="location"
						className="w-10"
					/>
				</div>
				{showAddLocationModal && (
					<AddLocationModal closeModal={toggleLocationModal} />
				)}
				<Map
					center={clickedLocation?.center || [39.8283, -98.5795]}
					locations={locations}
					highlightedUserLocations={highlightedUserLocations}
				/>
			</div>
		</div>
	);
};

export default GroupSpace;
function AddLocationModal({ closeModal }) {
	return (
		<div className="z-50 h-full w-full absolute">
			<div className="relative border h-fit w-1/2 rounded bg-primary m-auto">
				<p className="cursor-pointer" onClick={closeModal}>
					close
				</p>
				<div>
					<form
						action="submit"
						className="grid grid-cols-1 gap-4 p-4"
					>
						<input type="text" className="border rounded p-2" />
						<input type="text" className="border rounded p-2" />
						<input type="text" className="border rounded p-2" />
						<input type="text" className="border rounded p-2" />
						<Button>Add Location</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
